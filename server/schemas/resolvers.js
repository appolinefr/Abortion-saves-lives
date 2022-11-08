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
    comments: async () => {
      return Comment.find().sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    facilities: async () => {
      return Facility.find();
    },
    facility: async (parent, { facilityId }) => {
      return Facility.findOne({ _id: facilityId }).populate("reviews");
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

    addComment: async (parent, { commentBody }) => {
      const comment = await Comment.create(
        { commentBody },
        {
          new: true,
          runValidators: true,
        }
      );

      // await User.findOneAndUpdate(
      //   { username: commentAuthor },
      //   { $addToSet: { comments: comment._id } }
      // );

      return comment;
    },

    addReview: async (parent, { facilityId, reviewText }) => {
      return Facility.findOneAndUpdate(
        { _id: facilityId },
        { $addToSet: { reviews: { reviewText } } },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeComment: async (parent, { commentId }) => {
      return Comment.findOneAndDelete({ _id: commentId });
    },

    removeReview: async (parent, { facilityId, reviewId }) => {
      return Facility.findOneAndUpdate(
        { _id: facilityId },
        { $pull: { reviews: { _id: reviewId } } },
        { new: true }
      );
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;

    // removeComment: async (parent, { commentId }, context) => {
    //   if (context.user) {
    //     const comment = await Comment.findOneAndDelete({
    //       _id: commentId,
    //      commentAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { comments: comment._id } }
    //     );

    //     return comment;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  
    // removeReview: async (parent, { faciltyId, reviewId }, context) => {
    //   if (context.user) {
    //     return Facility.findOneAndUpdate(
    //       { _id: facilityId },
    //       {
    //         $pull: {
    //           reviews: {
    //             _id: reviewId,
    //             reviewAuthor: context.user.username,
    //           },
    //         },
    //       },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },