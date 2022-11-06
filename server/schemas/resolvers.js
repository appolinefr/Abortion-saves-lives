const { User, Comment, Facility } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("comments");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("comments");
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    facilities: async () => {
      return Facility.find().populate("comments");
    },
    facility: async (parent, { name }) => {
      return Facility.findOne({ name }).populate("comments");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("comments");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    // addFacility: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return;
    // },

    addComment: async (parent, { commentBody }, context) => {
      if (context.user) {
        const comment = await Comment.create({
          commentBody,
          commentAuthor: context.user.username,
        });

        await Facility.findOneAndUpdate(
          { _id: context.facility._id },
          { $addToSet: { comments: comment._id } }
        );

        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
