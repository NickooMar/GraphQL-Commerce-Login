import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../config.js";

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
    login: async (_, args) => {
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
            JWT_TOKEN,
            { expiresIn: "1d" }
          );

          console.log({ userFound, accessToken });
          return { user: userFound, token: accessToken };
        } else {
          throw new Error("Passwords doesn't match");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
