import { Author } from "../../src/generated-types/graphql";
import StoryAPI from "../src/datasources/stories-api";

export interface Context {
  storyAPI: StoryAPI;
}

export interface Story {
  id: number;
}

export type StoryResponse = Story[];

export type AuthorResponse = Author[];
