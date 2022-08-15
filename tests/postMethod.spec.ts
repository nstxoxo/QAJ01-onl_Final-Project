import superagent from "superagent";
import { EXPECTED_OBJ_POST } from "../objects/objectsPost";
import { CONTENT_TYPE, POSTS, APPLICATION } from "../constans/titles";
import { BASIC_URL } from "../constans/url";

describe("API testing. POST method", () => {
  test("Test POST CREATE", async () => {
    let res: any;
    try {
      res = await superagent
        .post(BASIC_URL + POSTS)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_POST.requestForMethodPost2);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body.email).toEqual(
      EXPECTED_OBJ_POST.requestForMethodPost2.email
    );
    expect(res.body.body).toEqual(EXPECTED_OBJ_POST.requestForMethodPost2.body);
  });

  test("Test POST create 2", async () => {
    const res = await superagent
      .post(BASIC_URL + POSTS)
      .set(CONTENT_TYPE, APPLICATION)
      .send(EXPECTED_OBJ_POST.requestForMethodPost1);
    expect(res.statusCode).toEqual(201);
    console.log(res.body);
    expect(res.body.title).toEqual(
      EXPECTED_OBJ_POST.requestForMethodPost1.title
    );
    expect(res.body.body).toEqual(EXPECTED_OBJ_POST.requestForMethodPost1.body);
  });

  test("Test POST create 3", async () => {
    let res: any;
    try {
      res = await superagent
        .post(BASIC_URL + POSTS)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_POST.requestForMethodPost3);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(
      EXPECTED_OBJ_POST.requestForMethodPost3.title
    );
    expect(res.body.body).toEqual(EXPECTED_OBJ_POST.requestForMethodPost3.body);
  });
  test("Test POST create 4", async () => {
    let res: any;
    try {
      res = await superagent
        .post(BASIC_URL + POSTS)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_POST.requestForMethodPost4);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(EXPECTED_OBJ_POST.requestForMethodPost4.name);
    expect(res.body.body).toEqual(EXPECTED_OBJ_POST.requestForMethodPost4.body);
  });
});
