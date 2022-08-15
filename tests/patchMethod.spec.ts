import superagent from "superagent";
import { EXPECTED_OBJ_PATCH } from "../objects/objectsPatch";
import { BASIC_URL } from "../constans/url";
import { APPLICATION, CONTENT_TYPE, POST_1, SUCCESS } from "../constans/titles";

describe("API testing. PATCH method", () => {
  test("Test PATCH 1", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + POST_1)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_PATCH.requestForMethodPatch1);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(SUCCESS);
    expect(res.body.name).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch1.name
    );
    expect(res.body.job).toEqual(EXPECTED_OBJ_PATCH.requestForMethodPatch1.job);
  });

  test("Test PATCH 2", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + POST_1)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_PATCH.requestForMethodPatch2);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(SUCCESS);
    expect(res.body.title).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch2.title
    );
    expect(res.body.body).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch2.body
    );
  });
  test("Test PATCH 3", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + POST_1)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_PATCH.requestForMethodPatch3);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(SUCCESS);
    expect(res.body.name).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch3.name
    );
    expect(res.body.age).toEqual(EXPECTED_OBJ_PATCH.requestForMethodPatch3.age);
    expect(res.body.gender).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch3.gender
    );
  });

  test("Test PATCH 4", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + POST_1)
        .set(CONTENT_TYPE, APPLICATION)
        .send(EXPECTED_OBJ_PATCH.requestForMethodPatch4);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(SUCCESS);
    expect(res.body.name).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch4.name
    );
    expect(res.body.age).toEqual(EXPECTED_OBJ_PATCH.requestForMethodPatch4.age);
    expect(res.body.secretIdentity).toEqual(
      EXPECTED_OBJ_PATCH.requestForMethodPatch4.secretIdentity
    );
  });
});
