function total(articles) {
  return articles.reduce((somme, a) => somme + a.prix * a.quantite, 0);
}

module.exports = { total };
