import { describe, expect, it } from "vitest";
import { getData } from "./get-data";

describe("fetching scholarship's data", () => {
  it("Testing fetched data", async () => {
    const data = await getData();
    expect(data).toBeTypeOf("object");
    expect(data.id).toBeTypeOf("number");
  });
});
