export const resolvers = {
  Query: {
    stories: (_, { cursor }, { dataSources }) => {
      return dataSources.trackAPI.getStories(cursor);
    },
  },

  Story: {
    author: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(id);
    },
  },
};
