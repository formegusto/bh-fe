import client from "../client";

const BASEPATH = "/user";

export const signUp = (encBody: string) => client.post(`${BASEPATH}`, encBody);
