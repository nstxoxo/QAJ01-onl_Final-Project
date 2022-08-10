import superagent from "superagent";
import { expectedObjGet } from "../objects/objectsGet";
import { BASIC_URL } from "../constans/url";
import { posts, comments, postId, obj, success } from "../constans/titles";

describe("API testing. GET method", () => {
  test("Test GET user 2", async () => {
    let res = await superagent.get(BASIC_URL + posts).query({ id: 2 });
    expect(res.status).toBe(success);
    expect(res.body).toEqual(expectedObjGet.firstObject);
  });
});

test("Test GET out of range", async () => {
  let res: any;
  try {
    res = await superagent.get(BASIC_URL + posts).query({ id: 1022 });
  } catch (err: any) {
    console.log(err.message);
  }
  expect(res.status).toBe(success);
  expect(res.body).toEqual([]);
});

test("Test GET user 5", async () => {
  let res = await superagent.get(BASIC_URL + comments).query({ id: 5 });
  expect(res.status).toBe(success);
  expect(res.body).toEqual(expectedObjGet.secondObject);
});

test("Test GET post name", async () => {
  let res: any;
  try {
    res = await superagent.get(BASIC_URL + postId).query(obj);
    expect(res.status).toBe(success);
  } catch (err: any) {
    console.log(err.status, err.message);
  }
});
