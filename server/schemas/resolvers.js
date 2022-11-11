const { User, Facility } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    facilities: async () => {
      return Facility.find();
    },
    facility: async (parent, { facilityId }) => {
      return Facility.findOne({ _id: facilityId }).populate("reviews");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
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

    addReview: async (parent, { facilityId, reviewText }, context) => {
      if (context.user) {
        return Facility.findOneAndUpdate(
          { _id: facilityId },
          {
            $addToSet: {
              reviews: { reviewText, reviewAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeReview: async (parent, { facilityId, reviewId }) => {
      // if (context.user) {
      return Facility.findOneAndUpdate(
        { _id: facilityId },
        {
          $pull: {
            reviews: { _id: reviewId },
          },
        },
        { new: true }
      );
      // }
      // throw new AuthenticationError("You need to be logged in!");
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};


module.exports = resolvers;

//     removeComment: async (parent, { commentId }) => {
//       return Comment.findOneAndDelete({ _id: commentId });
//     },

//     removeReview: async (parent, { facilityId, reviewId }) => {
//       return Facility.findOneAndUpdate(
//         { _id: facilityId },
//         { $pull: { reviews: { _id: reviewId } } },
//         { new: true }
//       );
// };

