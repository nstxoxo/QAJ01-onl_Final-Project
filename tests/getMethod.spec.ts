import superagent from "superagent";
import { EXPECTED_OBJ_GET } from "../objects/objectsGet";
import { BASIC_URL } from "../constans/url";
import {
  POSTS,
  COMMENTS_1,
  POSTID_1,
  OBJECT_GET,
  SUCCESS,
} from "../constans/titles";

describe("API testing. GET method", () => {
  test("Test GET user 2", async () => {
    let res = await superagent.get(BASIC_URL + POSTS).query({ id: 2 });
    expect(res.status).toBe(SUCCESS);
    expect(res.body).toEqual(EXPECTED_OBJ_GET.expectedResponseForPostId2);
  });
});

test("Test GET out of range", async () => {
  let res: any;
  try {
    res = await superagent.get(BASIC_URL + POSTS).query({ id: 1022 });
  } catch (err: any) {
    console.log(err.message);
  }
  expect(res.status).toBe(SUCCESS);
  expect(res.body).toEqual([]);
});

test("Test GET user 5", async () => {
  let res = await superagent.get(BASIC_URL + COMMENTS_1).query({ id: 5 });
  expect(res.status).toBe(SUCCESS);
  expect(res.body).toEqual(EXPECTED_OBJ_GET.expectedResponseForPostId5);
});

test("Test GET post name", async () => {
  let res: any;
  try {
    res = await superagent.get(BASIC_URL + POSTID_1).query(OBJECT_GET);
    expect(res.status).toBe(SUCCESS);
  } catch (err: any) {
    console.log(err.status, err.message);
  }
});
