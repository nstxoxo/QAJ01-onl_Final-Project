import superagent from "superagent";
import { expectedObjPut } from "../objects/objectsPut";
import { postN } from "../constans/titles";
import { BASIC_URL } from "../constans/url";

describe("API testing. PUT method", () => {
  test("Test PUT user 1", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send({ title: "James", body: "Amor tussisque non celantur" })
        .set("Content-Type", "application/json");
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(200);
    expect(res.body.title).toEqual(expectedObjPut.firstObject.title);
    expect(res.body.body).toEqual(expectedObjPut.firstObject.body);
  });

  test("Test PUT user 2", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send({ email: "jhol@akk.ru", body: "Audacia pro muro habetur" })
        .set("Content-Type", "application/json");
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(200);
    expect(res.body.email).toEqual(expectedObjPut.secondObject.email);
    expect(res.body.body).toEqual(expectedObjPut.secondObject.body);
  });
  test("Test PUT user 3", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send({ name: "Kevin", job: "Developer" })
        .set("Content-Type", "application/json");
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(200);
    expect(res.body.name).toEqual(expectedObjPut.thirdObject.name);
    expect(res.body.job).toEqual(expectedObjPut.thirdObject.job);
  });

  test("Test PUT user 4", async () => {
    let res: any;
    try {
      res = await superagent
        .put(BASIC_URL + postN)
        .send({ title: "Abiens abi", body: "Dies diem docet" })
        .set("Content-Type", "application/json");
    } catch (err: any) {
      console.log(err.message);
    }
    expect(res.status).toEqual(200);
    expect(res.body.title).toEqual(expectedObjPut.fourthObject.title);
    expect(res.body.body).toEqual(expectedObjPut.fourthObject.body);
  });
});
