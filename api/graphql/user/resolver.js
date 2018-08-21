async function listUsers(root, args, context) {
  try {
    const users = await context.User.find({});

    return users;
  } catch (error) {
    return error;
  }
}

async function createUser(root, args, context) {
  try {
    args.fullName = `${args.firstName} ${args.lastName}`;

    const user = new context.User(args);
    await user.save();

    return user;
  } catch (error) {
    return error;
  }
}

const userResolver = {
  Query: {
    users: listUsers
  },
  Mutation: {
    createUser
  }
};

module.exports = userResolver;
