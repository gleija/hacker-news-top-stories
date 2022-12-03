import { Context } from "../types/types";

export const resolvers = {
  Query: {
    stories: async (
      _: Record<string, unknown>,
      { cursor }: { cursor: number },
      { dataSources }: { dataSources: Context }
    ) => {
      return dataSources.storyAPI.getStories(cursor);
    },
  },

  Story: {
    author: (
      { id }: { id: number },
      _: Record<string, unknown>,
      { dataSources }: { dataSources: Context }
    ) => {
      return dataSources.storyAPI.getAuthor(id);
    },
  },
};
