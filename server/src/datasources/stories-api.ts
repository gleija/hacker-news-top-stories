import { RESTDataSource } from "apollo-datasource-rest";

export class StoryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://hacker-news.firebaseio.com/v0/";
  }

  async getStories(cursor) {
    const response = await this.get("topstories.json");
    const arr = response.slice(cursor, cursor + 12);
    const res = arr.map((id) => {
      return {
        id: id,
      };
    });
    return res;
  }

  async getAuthor(id) {
    return await this.get(`/item/${id}.json`);
  }
}
