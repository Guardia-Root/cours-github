function total(articles) {
  return articles.reduce((somme, a) => somme + a.prix * a.quantite, 0);
}

function remise(montant, pourcentage) {
  return montant - (montant * pourcentage) / 100;
}

module.exports = { total, remise };
