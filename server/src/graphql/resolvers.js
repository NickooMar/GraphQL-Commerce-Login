import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_ACCESSTOKEN, JWT_REFRESHTOKEN } from "../config.js";

export const resolvers = {
  Query: {
    hello: () => "Hola Mundo",
  },

  Mutation: {
    signup: async (_, args) => {
      const { email, password, confirmPassword, username } = args;

      if (!email || !password || !confirmPassword || !username) {
        throw new Error("Please! Complete all fields");
      }

      if (confirmPassword != password)
        throw new Error("Password and Confirm Password doesn't Match");

      const duplicate = await User.findOne({ email: email }).exec();

      if (duplicate) throw new Error("Email already exists");

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
          email,
          username,
          password: hashedPassword,
        });

        const userSaved = await user.save();
        console.log(userSaved);

        return userSaved;
      } catch (error) {
        throw new Error(error);
      }
    },
    login: async (_, args, { req, res }) => {
      const { email, password } = args;

      if (!email || !password) throw new Error("Please! Complete all fields");

      try {
        const userFound = await User.findOne({ email }).exec();

        if (!userFound) throw new Error("Unauthorized");

        const matchPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (matchPassword) {
          const accessToken = jwt.sign(
            {
              UserInfo: {
                username: userFound.username,
                email: userFound.email,
              },
            },
            JWT_ACCESSTOKEN,
            { expiresIn: "10min" }
          );

          const refreshToken = jwt.sign(
            {
              email: userFound.email,
              username: userFound.username,
              _id: userFound._id,
            },
            JWT_REFRESHTOKEN,
            { expiresIn: "1d" }
          );

          userFound.refreshToken = refreshToken;
          await userFound.save();

          return {
            user: userFound,
            accessToken,
            refreshToken,
          };
        } else {
          throw new Error("Passwords doesn't match");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    handleRefreshToken: async (_, args, { req }) => {
      const refreshToken = req.headers.authorization;

      const foundUser = await User.findOne({ refreshToken }).exec();
      if (!foundUser) throw new Error("User not found - Unauthorized");

      return jwt.verify(refreshToken, JWT_REFRESHTOKEN, (err, decoded) => {
        if (
          err ||
          foundUser.email !== decoded.email ||
          foundUser.username !== decoded.username
        )
          throw new Error("User not match - Unauthorized");

        const accessToken = jwt.sign(
          {
            UserInfo: {
              username: decoded.username,
              email: decoded.email,
            },
          },
          JWT_ACCESSTOKEN,
          { expiresIn: "1h" }
        );
        const token = accessToken;

        return { token, user: foundUser };
      });
    },

    handleLogout: async (_, args, { req }) => {
      const requestToken = req.headers.authorization;
      try {
      const foundUser = await User.findOne({refreshToken: requestToken}).exec()

      if(!foundUser) throw new Error('Error - User already logged Out')

      foundUser.refreshToken = ''
      const result = await foundUser.save();

      return result
      } catch (error) {
        console.log(error);
      }
    },
  },
};
