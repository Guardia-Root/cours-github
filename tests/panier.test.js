const test = require("node:test");
const assert = require("node:assert");
const { total } = require("../src/panier");

test("total d’un panier vide", () => {
  assert.strictEqual(total([]), 0);
});

test("total de deux articles", () => {
  const articles = [
    { prix: 10, quantite: 2 },
    { prix: 5, quantite: 1 },
  ];
  assert.strictEqual(total(articles), 25);
});

test("remise de 10 % sur 200", () => {
  const { remise } = require("../src/panier");
  assert.strictEqual(remise(200, 10), 180);
});
