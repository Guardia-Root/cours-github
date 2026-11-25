# TP : travailler à deux sur GitHub

Vous êtes deux, chacun sur son compte GitHub.

- **Créateur** : propriétaire du repo.
- **Collaborateur** : invité avec le rôle Write.

À mi-parcours, échangez les rôles. Chaque action se fait depuis l’interface GitHub, sauf mention contraire.

## 1. Conflit de fusion (module 1)

Deux Pull Requests proposent un titre d’accueil différent : `feature/accueil-salut` et `feature/accueil-hello`.

1. Le **collaborateur** fait un *Squash and merge* de la PR « Salut ».
2. Le **créateur** essaie de merger la PR « Hello » : GitHub signale un conflit.
3. Le créateur résout le conflit (éditeur GitHub ou en local) en choisissant le titre final.
4. Le collaborateur relit la résolution puis approuve.

## 2. Commits (module 2)

1. Le **créateur** ouvre la PR `feature/gros-chantier` et lit ses commits : lesquels sont mauvais, et pourquoi ?
2. Le **collaborateur** crée une branche `feature/<numéro>-<nom>` depuis main, modifie un fichier et fait deux commits au format Conventional Commits.

## 3. Issues (module 3)

Trois issues sont à qualifier (label `triage`).

1. Réécrire l’issue « Le site marche pas » avec le template de bug.
2. Convertir l’issue « Redux ou Context API ? » en Discussion (menu de l’issue).
3. Demander les informations manquantes sur « Bug panier ».
4. Poser labels, assignation et Milestone sur chaque issue conservée.

## 4. Pull Requests (module 4)

Le **collaborateur** relit trois PR du créateur :

| PR | Ce qu’il faut faire |
|---|---|
| Remise sur le panier | Approuver, puis le créateur fait un *Squash and merge* |
| TVA | La CI est rouge : *Request changes* avec un commentaire clair. Le créateur corrige et pousse |
| Gros chantier | Refuser et demander de découper en PR plus petites, avec le template rempli |

Ensuite, on inverse : le collaborateur ouvre une PR, le créateur la relit.

## 5. Milestones et Projects (module 6)

1. Ouvrir le Project et déplacer les cartes selon l’avancement réel.
2. Ajouter un champ **Priorité** et le renseigner.
3. Regarder la progression du Milestone « Rendu final » : combien d’issues sont fermées ?

## 6. Discussions (module 12)

La Discussion « Le panier plante quand il est vide » est un bug mal placé.

1. La classer correctement : est-ce une Discussion ou une Issue ?
2. Si c’est une Issue, la créer avec le template, puis l’ajouter au Project.
