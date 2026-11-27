# TP : travailler à deux sur GitHub

Vous êtes deux, chacun sur son compte GitHub.

- **Créateur** : propriétaire du repo, voit les réglages (Settings).
- **Collaborateur** : invité avec le rôle Write, sans accès aux réglages.

À mi-parcours, échangez les rôles. Tout se fait depuis l’interface GitHub, sauf mention contraire.

## 1. Conflit de fusion (module 1)

Deux PR proposent un titre d’accueil différent : #9 « Salut » et #10 « Hello ».

| Créateur | Collaborateur |
|---|---|
| Attendre que la PR #9 soit mergée | *Squash and merge* de la PR #9 |
| Tenter de merger la PR #10 : conflit | Relire la résolution sur la PR #10 |
| Résoudre : garder un seul titre dans `src/accueil.js` | Approuver la PR #10 |

**Piège** : laisser les marqueurs de conflit dans le fichier.

## 2. Commits (module 2)

| Créateur | Collaborateur |
|---|---|
| Ouvrir la PR #13 « gros chantier » | Créer la branche `docs/4-readme-install` depuis main |
| Lister ses commits : lesquels sont mauvais, pourquoi ? | Modifier le README (issue #4) |
| Proposer un message Conventional Commits pour chacun | Faire 2 commits au format `docs(readme): …` |

**Piège** : un seul commit fourre-tout, ou un message « fix ».

## 3. Issues (module 3)

| Créateur | Collaborateur |
|---|---|
| Réécrire l’issue #5 avec le template de bug | Convertir l’issue #6 en Discussion |
| Poser labels, priorité et Milestone | Commenter l’issue #7 pour demander les infos manquantes |
| Retirer le label `triage` | S’assigner l’issue #4 |

**Piège** : fermer une issue vague sans l’améliorer.

## 4. Pull Requests (module 4)

| Créateur | Collaborateur |
|---|---|
| *Squash and merge* de la PR #11 une fois approuvée | PR #11 : *Approve* |
| Corriger `src/tva.js` (0.02 devient 0.2) et pousser | PR #12, CI rouge : *Request changes* avec un commentaire clair |
| Répondre à la PR #13 : découper en PR plus petites | PR #13 : *Request changes*, demander de découper |

Ensuite, on inverse les rôles. **Piège** : approuver sans lire, ou commenter la personne et non le code.

## 5. Protéger main (module 5)

| Créateur | Collaborateur |
|---|---|
| Settings, Branches, *Add rule* sur `main` | En local : `git push origin main` (refusé) |
| Cocher : PR obligatoire, 1 approbation, *Do not allow bypassing* | Ouvrir une PR depuis une branche |
| Enregistrer, puis approuver la PR du collaborateur | Attendre l’approbation du créateur |

**Piège** : un collaborateur admin contourne la règle, il doit être en Write.

## 6. Milestones et Projects (module 6)

| Créateur | Collaborateur |
|---|---|
| Ouvrir le Project « Cours GitHub » en vue Board | Ouvrir le Milestone « Rendu final » |
| Déplacer les cartes selon l’avancement réel | Compter les issues fermées sur les 5 du Milestone |
| Ajouter le champ Priorité et le renseigner | Assigner chaque carte à quelqu’un |

**Piège** : tout laisser en Todo jusqu’au jour du rendu.

## 7. CI (module 7)

| Créateur | Collaborateur |
|---|---|
| Settings, Branches : cocher *Require status checks to pass* | Créer une branche et casser un test volontairement |
| Choisir le check `test` | Ouvrir la PR : le bouton Merge est grisé |
| Ouvrir l’onglet Actions pour voir les runs | Corriger : CI verte, merge possible |

**Piège** : oublier de cocher le check, la CI devient décorative.

## 8. Discussions (module 12)

| Créateur | Collaborateur |
|---|---|
| Créer l’issue « Migrer vers PostgreSQL » depuis la Discussion | Répondre à « PostgreSQL ou MongoDB ? » avec un argument |
| Créer une issue depuis « Le panier plante », avec le template de bug | Classer « Le panier plante » : Discussion ou Issue ? |
| Ajouter les deux issues au Project | Proposer la conversion en commentaire |

**Piège** : une décision prise en Discussion qui ne devient jamais une Issue.
