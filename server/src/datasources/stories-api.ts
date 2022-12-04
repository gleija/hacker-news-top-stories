import { RESTDataSource } from "apollo-datasource-rest";
import { StoryResponse, AuthorResponse } from "../../types/types";

class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  public async getStories(cursor: number): Promise<StoryResponse> {
    const response = await this.get("topstories.json");
    const paginatedResponse = response.slice(cursor, cursor + 12);
    const storyResponse = paginatedResponse.map((id: number) => {
      return {
        id: id,
      };
    });
    return storyResponse;
  }

  public async getAuthor(id: number): Promise<AuthorResponse> {
    return await this.get(`/item/${id}.json`);
  }
}

export default StoryAPI;
