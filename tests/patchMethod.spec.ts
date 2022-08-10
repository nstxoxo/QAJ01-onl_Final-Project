import superagent from "superagent";
import { expectedObjPatch } from "../objects/objectsPatch";
import { BASIC_URL } from "../constans/url";
import { postN } from "../constans/titles";

describe("API testing. PATCH method", () => {
  test("Test PATCH 1", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + postN)
        .set("Content-Type", "application/json")
        .send({ name: "morpheus", job: "zion resident" });
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual(expectedObjPatch.firstObject.name);
    expect(res.body.job).toEqual(expectedObjPatch.firstObject.job);
  });

  test("Test PATCH 2", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + postN)
        .set("Content-Type", "application/json")
        .send({ title: "foo", body: "bar" });
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(200);
    expect(res.body.title).toEqual(expectedObjPatch.secondObject.title);
    expect(res.body.body).toEqual(expectedObjPatch.secondObject.body);
  });
  test("Test PATCH 3", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + postN)
        .set("Content-Type", "application/json")
        .send({ name: "John", age: 22, gender: "male" });
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual(expectedObjPatch.thirdObject.name);
    expect(res.body.age).toEqual(expectedObjPatch.thirdObject.age);
    expect(res.body.gender).toEqual(expectedObjPatch.thirdObject.gender);
  });

  test("Test PATCH 4", async () => {
    let res: any;
    try {
      res = await superagent
        .patch(BASIC_URL + postN)
        .set("Content-Type", "application/json")
        .send({ name: "Molecule Man", age: 29, secretIdentity: "Dan Jukes" });
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toBe(200);
    expect(res.body.name).toEqual(expectedObjPatch.fourthObject.name);
    expect(res.body.age).toEqual(expectedObjPatch.fourthObject.age);
    expect(res.body.secretIdentity).toEqual(
      expectedObjPatch.fourthObject.secretIdentity
    );
  });
});
