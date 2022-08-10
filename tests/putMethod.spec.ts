import superagent from "superagent";
import { expectedObjPut } from "../objects/objectsPut";
import { postN, contType, application, success } from "../constans/titles";
import { BASIC_URL } from "../constans/url";

describe("API testing. PUT method", () => {
  test("Test PUT user 1", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send(expectedObjPut.firstObject)
        .set(contType, application);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(success);
    expect(res.body.title).toEqual(expectedObjPut.firstObject.title);
    expect(res.body.body).toEqual(expectedObjPut.firstObject.body);
  });

  test("Test PUT user 2", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send(expectedObjPut.secondObject)
        .set(contType, application);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(success);
    expect(res.body.email).toEqual(expectedObjPut.secondObject.email);
    expect(res.body.body).toEqual(expectedObjPut.secondObject.body);
  });
  test("Test PUT user 3", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send(expectedObjPut.thirdObject)
        .set(contType, application);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(success);
    expect(res.body.name).toEqual(expectedObjPut.thirdObject.name);
    expect(res.body.job).toEqual(expectedObjPut.thirdObject.job);
  });

  test("Test PUT user 4", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send(expectedObjPut.fourthObject)
        .set(contType, application);
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(success);
    expect(res.body.title).toEqual(expectedObjPut.fourthObject.title);
    expect(res.body.body).toEqual(expectedObjPut.fourthObject.body);
  });
});
