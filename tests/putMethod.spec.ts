import superagent from "superagent";
import { EXPECTED_OBJ_PUT } from "../objects/objectsPut";
import { POST_1, CONTENT_TYPE, APPLICATION, SUCCESS } from "../constans/titles";
import { BASIC_URL } from "../constans/url";

describe("API testing. PUT method", () => {
  test("Test PUT user 1", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + POST_1)
        .send(EXPECTED_OBJ_PUT.requestForMethodPut1)
        .set(CONTENT_TYPE, APPLICATION);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(SUCCESS);
    expect(res.body.title).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut1.title);
    expect(res.body.body).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut1.body);
  });

  test("Test PUT user 2", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + POST_1)
        .send(EXPECTED_OBJ_PUT.requestForMethodPut2)
        .set(CONTENT_TYPE, APPLICATION);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(SUCCESS);
    expect(res.body.email).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut2.email);
    expect(res.body.body).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut2.body);
  });
  test("Test PUT user 3", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + POST_1)
        .send(EXPECTED_OBJ_PUT.requestForMethodPut3)
        .set(CONTENT_TYPE, APPLICATION);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(SUCCESS);
    expect(res.body.name).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut3.name);
    expect(res.body.job).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut3.job);
  });

  test("Test PUT user 4", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + POST_1)
        .send(EXPECTED_OBJ_PUT.requestForMethodPut4)
        .set(CONTENT_TYPE, APPLICATION);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(SUCCESS);
    expect(res.body.title).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut4.title);
    expect(res.body.body).toEqual(EXPECTED_OBJ_PUT.requestForMethodPut4.body);
  });
});
