import { RESTDataSource } from "apollo-datasource-rest";

export interface StoryResource {
  id: number;
}

class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  public async getStories(cursor: number): Promise<any> {
    const response = await this.get("topstories.json");
    const arr = response.slice(cursor, cursor + 12);
    const res = arr.map((id: number) => {
      return {
        id: id,
      };
    });
    return res;
  }

  public async getAuthor(id: number): Promise<any> {
    return await this.get(`/item/${id}.json`);
  }
}

export default StoryAPI;
