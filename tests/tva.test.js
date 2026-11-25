const test = require("node:test");
const assert = require("node:assert");
const { tva } = require("../src/tva");

test("TVA de 20 % sur 100", () => {
  assert.strictEqual(tva(100), 20);
});
