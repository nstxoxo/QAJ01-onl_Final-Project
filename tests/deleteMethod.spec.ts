import superagent from "superagent";
import { BASIC_URL } from "../constans/url";
import { postN } from "../constans/titles";

describe("API testing. DELETE method", () => {
  test("Test DELETE post", async () => {
    let res: any;
    try {
      res = await superagent.delete(BASIC_URL + postN).query({ id: 2 });
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(200);
  });
});
