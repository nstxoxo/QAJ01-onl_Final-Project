import superagent from "superagent";
import { expectedObjPost } from "../objects/objectsPost";
import { contType, posts, application } from "../constans/titles";
import { BASIC_URL } from "../constans/url";

describe("API testing. POST method", () => {
  test("Test POST CREATE", async () => {
    let res: any;
    try {
      res = await superagent
        .post(BASIC_URL + posts)
        .set(contType, application)
        .send(expectedObjPost.secondObject);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body.email).toEqual(expectedObjPost.secondObject.email);
    expect(res.body.body).toEqual(expectedObjPost.secondObject.body);
  });

  test("Test POST create 2", async () => {
    const res = await superagent
      .post(BASIC_URL + posts)
      .set(contType, application)
      .send(expectedObjPost.firstObject);
    expect(res.statusCode).toEqual(201);
    console.log(res.body);
    expect(res.body.title).toEqual(expectedObjPost.firstObject.title);
    expect(res.body.body).toEqual(expectedObjPost.firstObject.body);
  });

  test("Test POST create 3", async () => {
    let res: any;
    try {
      res = await superagent
        .post(BASIC_URL + posts)
        .set(contType, application)
        .send(expectedObjPost.thirdObject);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(expectedObjPost.thirdObject.title);
    expect(res.body.body).toEqual(expectedObjPost.thirdObject.body);
  });
  test("Test POST create 4", async () => {
    let res: any;
    try {
      res = await superagent
        .post(BASIC_URL + posts)
        .set(contType, application)
        .send(expectedObjPost.fourthObject);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(expectedObjPost.fourthObject.name);
    expect(res.body.body).toEqual(expectedObjPost.fourthObject.body);
  });
});
