async function listUsers(root, args, context) {
  try {
    const users = await context.User.find({});

    return users;
  } catch (error) {
    return error;
  }
}

async function getUserById(root, args, context) {
  try {
    const user = await context.User.findOne({ _id: args._id });

    return user;
  } catch (error) {
    return error;
  }
}

async function createUser(root, args, context) {
  try {
    args.input.fullName = `${args.input.firstName} ${args.input.lastName}`;

    const user = new context.User(args.input);
    await user.save();

    return user;
  } catch (error) {
    return error;
  }
}

async function updateUser(root, args, context) {
  try {
    const user = context.User.findOneAndUpdate(
      { _id: args.input._id },
      args.input
    );

    return user;
  } catch (error) {
    return error;
  }
}

const userResolver = {
  Query: {
    users: listUsers,
    user: getUserById
  },
  Mutation: {
    createUser,
    updateUser
  }
};

module.exports = userResolver;
