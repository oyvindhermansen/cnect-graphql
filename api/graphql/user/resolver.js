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

module.exports = {
  // Query
  users: listUsers,

  // Mutation
  createUser
};
