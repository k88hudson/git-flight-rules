# Règles de vol pour Git

🌍
*[English](README.md) ∙ [Español](README_es.md)  ∙  [Русский](README_ru.md) ∙ [简体中文](README_zh-CN.md)∙ [한국어](README_kr.md)  ∙  [Tiếng Việt](README_vi.md) ∙ [Français](README_fr.md) ∙ [日本語](README_ja.md)*

#### C'est quoi des "règles de vol" ?

Un guide pour les astronautes (pour les développeur·euse·s utilisant Git, dans le cas présent) sur quoi faire quand les choses se passent mal.

>  *Les règles de vol* représentent l'ensemble des connaissances durement acquises consignées dans des manuels répertoriant, étape par étape, la procédure à suivre si telle chose se produit et pourquoi. Il s'agit essentiellement de procédures d'exploitation standard extrêmement détaillées et spécifiques à chaque scénario. [...]

> La NASA a recueilli nos faux pas, nos désastres et nos solutions depuis le début des années 60, lorsque les équipes terrestres de l'ère Mercury ont commencé à rassembler les "leçons tirées" dans un recueil qui répertorie désormais des milliers de situations problématiques, des pannes de moteur aux poignées de trappes cassées en passant par les bugs informatiques, et leurs solutions.

&mdash; Chris Hadfield, *Guide d'un astronaute pour la vie sur Terre*.

#### Conventions pour ce document

Pour des raisons de clarté tous les exemples dans ce document utilisent une invite de commande bash personnalisée dans le but d'indiquer la branche actuelle et s'il y a des modifications indexées ou non. La branche se trouve entre parenthèses, et un `*` après le nom de la branche indique des modifications indexées.

Toutes les commandes devraient fonctionner pour les versions de Git au moins supérieures à la 2.13.0. Visitez le [site de Git](https://www.git-scm.com/) pour mettre à jour votre version de git locale.

[![Join the chat at https://gitter.im/k88hudson/git-flight-rules](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/k88hudson/git-flight-rules?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [Dépôts](#d%C3%A9p%C3%B4ts)
    - [Je veux initialiser un dépôt local](#je-veux-initialiser-un-d%C3%A9p%C3%B4t-local)
    - [Je veux cloner un dépôt distant](#je-veux-cloner-un-d%C3%A9p%C3%B4t-distant)
  - [Éditer des Commits](#%C3%89diter-des-commits)
    - [Qu'est-ce que je viens de commiter ?](#quest-ce-que-je-viens-de-commiter-)
    - [J'ai commis une erreur dans un message de commit](#jai-commis-une-erreur-dans-un-message-de-commit)
    - [J'ai commit avec le mauvais nom et email dans les configurations](#jai-commit-avec-le-mauvais-nom-et-email-dans-les-configurations)
    - [Je veux retirer un fichier du commit précédent](#je-veux-retirer-un-fichier-du-commit-pr%C3%A9c%C3%A9dent)
    - [Je veux supprimer ou retirer mon dernier commit](#je-veux-supprimer-ou-retirer-mon-dernier-commit)
    - [Supprimer/retirer un commit arbitraire](#supprimerretirer-un-commit-arbitraire)
    - [J'ai essayé de pousser un commit modifié vers le dépôt distant, mais j'ai eu un message d'erreur](#jai-essay%C3%A9-de-pousser-un-commit-modifi%C3%A9-vers-le-d%C3%A9p%C3%B4t-distant-mais-jai-eu-un-message-derreur)
    - [J'ai fait un hard reset par accident, et je veux retrouver mes changements](#jai-fait-un-hard-reset-par-accident-et-je-veux-retrouver-mes-changements)
    - [J'ai commité et poussé une fusion par accident](#jai-commit%C3%A9-et-pouss%C3%A9-une-fusion-par-accident)
    - [J'ai commité et poussé des fichiers contenant des données sensibles par accident](#jai-commit%C3%A9-et-pouss%C3%A9-des-fichiers-contenant-des-donn%C3%A9es-sensibles-par-accident)
  - [Indexation](#indexation)
    - [J'ai besoin d'ajouter des modifications indexées sur le commit précédent](#jai-besoin-dajouter-des-modifications-index%C3%A9es-sur-le-commit-pr%C3%A9c%C3%A9dent)
    - [Je veux indexer une partie d'un fichier, mais pas tout le fichier](#je-veux-indexer-une-partie-dun-fichier-mais-pas-tout-le-fichier)
    - [Je veux ajouter les changements d'un fichier dans deux commits différents](#je-veux-ajouter-les-changements-dun-fichier-dans-deux-commits-diff%C3%A9rents)
    - [Je veux indexer mes modifications indexées, et désindexer mes modifications indexées](#je-veux-indexer-mes-modifications-index%C3%A9es-et-d%C3%A9sindexer-mes-modifications-index%C3%A9es)
  - [Modifications non indexées](#modifications-non-index%C3%A9es)
    - [Je veux déplacer mes modifications non indexées vers une nouvelle branche](#je-veux-d%C3%A9placer-mes-modifications-non-index%C3%A9es-vers-une-nouvelle-branche)
    - [Je veux déplacer mes modifications non indexées vers une branche différente existante](#je-veux-d%C3%A9placer-mes-modifications-non-index%C3%A9es-vers-une-branche-diff%C3%A9rente-existante)
    - [Je veux me débarrasser de mes modifications locales non commitées (indexées et non-indexées)](#je-veux-me-d%C3%A9barrasser-de-mes-modifications-locales-non-commit%C3%A9es-index%C3%A9es-et-non-index%C3%A9es)
    - [Je veux me débarrasser de modifications non-indexées spécifiques](#je-veux-me-d%C3%A9barrasser-de-modifications-non-index%C3%A9es-sp%C3%A9cifiques)
    - [Je veux me débarrasser de fichiers non-indexés spécifiques](#je-veux-me-d%C3%A9barrasser-de-fichiers-non-index%C3%A9s-sp%C3%A9cifiques)
    - [Je veux me débarrasser de mes modifications locales non-indexées uniquement](#je-veux-me-d%C3%A9barrasser-de-mes-modifications-locales-non-index%C3%A9es-uniquement)
    - [Je veux me débarrasser de tous mes fichiers non suivis](#je-veux-me-d%C3%A9barrasser-de-tous-mes-fichiers-non-suivis)
    - [Je veux désindexer un fichier indexé spécifique](#je-veux-d%C3%A9sindexer-un-fichier-index%C3%A9-sp%C3%A9cifique)
  - [Branches](#branches)
    - [Je veux lister toutes les branches](#je-veux-lister-toutes-les-branches)
    - [Créer une branche à partir d'un commit](#cr%C3%A9er-une-branche-%C3%A0-partir-dun-commit)
    - [J'ai pull depuis/vers la mauvaise branche](#jai-pull-depuisvers-la-mauvaise-branche)
    - [Je veux supprimer mes commits locaux afin que ma branche soit pareille à celle sur le serveur](#je-veux-supprimer-mes-commits-locaux-afin-que-ma-branche-soit-pareille-%C3%A0-celle-sur-le-serveur)
    - [J'ai commité sur master au lieu d'une nouvelle branche](#jai-commit%C3%A9-sur-master-au-lieu-dune-nouvelle-branche)
    - [Je veux séparer tout un fichier d'un autre ref-ish](#je-veux-s%C3%A9parer-tout-un-fichier-dun-autre-ref-ish)
    - [J'ai fait plusieurs commits sur une même branche qui auraient dû être sur plusieurs branches](#jai-fait-plusieurs-commits-sur-une-m%C3%AAme-branche-qui-auraient-d%C3%BB-%C3%AAtre-sur-plusieurs-branches)
    - [Je veux supprimer mes branches locales qui ont été supprimée sur le dépôt distant](#je-veux-supprimer-mes-branches-locales-qui-ont-%C3%A9t%C3%A9-supprim%C3%A9e-sur-le-d%C3%A9p%C3%B4t-distant)
    - [J'ai supprimé ma branche par accident](#jai-supprim%C3%A9-ma-branche-par-accident)
    - [Je veux supprimer une branche](#je-veux-supprimer-une-branche)
    - [Je veux supprimer plusieurs branches](#je-veux-supprimer-plusieurs-branches)
    - [Je veux renommer une branche](#je-veux-renommer-une-branche)
    - [Je veux me déplacer sur une branche distante sur laquelle quelqu'un est en train de travailler](#je-veux-me-d%C3%A9placer-sur-une-branche-distante-sur-laquelle-quelquun-est-en-train-de-travailler)
    - [Je veux créer une nouvelle branche distante à partir de celle en locale](#je-veux-cr%C3%A9er-une-nouvelle-branche-distante-%C3%A0-partir-de-celle-en-locale)
    - [Je veux configurer une branche distante en tant qu'upstream pour une branche locale](#je-veux-configurer-une-branche-distante-en-tant-quupstream-pour-une-branche-locale)
    - [Je veux configurer mon HEAD pour suivre la branche distante par défaut](#je-veux-configurer-mon-head-pour-suivre-la-branche-distante-par-d%C3%A9faut)
    - [J'ai fait des modifications sur la mauvaise branche](#jai-fait-des-modifications-sur-la-mauvaise-branche)
  - [Rebaser et fusionner](#rebaser-et-fusionner)
    - [Je veux annuler un rebase/merge](#je-veux-annuler-un-rebasemerge)
    - [J'ai rebase, mais je ne veux pas pousser de force](#jai-rebase-mais-je-ne-veux-pas-pousser-de-force)
    - [J'ai besoin de combiner des commits](#jai-besoin-de-combiner-des-commits)
      - [Stratégie de fusion sûre](#strat%C3%A9gie-de-fusion-s%C3%BBre)
      - [J'ai besoin de fusionner deux branches en un seul commit](#jai-besoin-de-fusionner-deux-branches-en-un-seul-commit)
      - [Je veux combiner les commits non poussés uniquement](#je-veux-combiner-les-commits-non-pouss%C3%A9s-uniquement)
      - [J'ai besoin d'annuler la fusion](#jai-besoin-dannuler-la-fusion)
    - [J'ai besoin de mettre à jour le commit parent de ma branche](#jai-besoin-de-mettre-%C3%A0-jour-le-commit-parent-de-ma-branche)
    - [Vérifier si tous les commits d'une branche sont fusionnés](#v%C3%A9rifier-si-tous-les-commits-dune-branche-sont-fusionn%C3%A9s)
    - [Problèmes possibles avec les rebase interactifs](#probl%C3%A8mes-possibles-avec-les-rebase-interactifs)
      - [L'écran d'édition du rebase affiche 'noop'](#l%C3%A9cran-d%C3%A9dition-du-rebase-affiche-noop)
      - [Il y a eu des conflits](#il-y-a-eu-des-conflits)
  - [Remisage](#remisage)
    - [Remiser toutes les modifications](#remiser-toutes-les-modifications)
    - [Remiser des fichiers spécifiques](#remiser-des-fichiers-sp%C3%A9cifiques)
    - [Remiser avec un message](#remiser-avec-un-message)
    - [Appliquer un remisage spécifique de la liste](#appliquer-un-remisage-sp%C3%A9cifique-de-la-liste)
  - [Rechercher](#rechercher)
    - [Je veux rechercher une chaîne de caractères dans un commit](#je-veux-rechercher-une-cha%C3%AEne-de-caract%C3%A8res-dans-un-commit)
    - [Je veux rechercher par auteur·trice/validateur·trice](#je-veux-rechercher-par-auteur%C2%B7tricevalidateur%C2%B7trice)
    - [Je veux lister les commits ayant des fichiers spécifiques](#je-veux-lister-les-commits-ayant-des-fichiers-sp%C3%A9cifiques)
    - [Trouver un tag où un commit est référencé](#trouver-un-tag-o%C3%B9-un-commit-est-r%C3%A9f%C3%A9renc%C3%A9)
  - [Sous-modules](#sous-modules)
    - [Cloner tous les sous-modules](#cloner-tous-les-sous-modules)
    - [Retirer un sous-module](#retirer-un-sous-module)
  - [Objets divers](#objets-divers)
    - [Récupérer un fichier supprimé](#r%C3%A9cup%C3%A9rer-un-fichier-supprim%C3%A9)
    - [Supprimer un tag](#supprimer-un-tag)
    - [Récupérer un tag supprimé](#r%C3%A9cup%C3%A9rer-un-tag-supprim%C3%A9)
    - [Patch supprimé](#patch-supprim%C3%A9)
    - [Exporter un dépôt comme fichier Zip](#exporter-un-d%C3%A9p%C3%B4t-comme-fichier-zip)
    - [Pousser une branche et un tag qui ont le même nom](#pousser-une-branche-et-un-tag-qui-ont-le-m%C3%AAme-nom)
  - [Suivre des fichiers](#suivre-des-fichiers)
    - [Je veux changer la capitalisation du nom d'un fichier, sans changer son contenu](#je-veux-changer-la-capitalisation-du-nom-dun-fichier-sans-changer-son-contenu)
    - [Je veux écraser des fichiers locaux en faisant un git pull](#je-veux-%C3%A9craser-des-fichiers-locaux-en-faisant-un-git-pull)
    - [Je veux retirer un fichier de Git mais garder le fichier](#je-veux-retirer-un-fichier-de-git-mais-garder-le-fichier)
    - [Je veux rétablir un fichier à une version spécifique](#je-veux-r%C3%A9tablir-un-fichier-%C3%A0-une-version-sp%C3%A9cifique)
    - [Je veux lister les changements d'un fichier spécifique entre deux commits ou branches](#je-veux-lister-les-changements-dun-fichier-sp%C3%A9cifique-entre-deux-commits-ou-branches)
    - [Je veux que Git ignore les changements d'un fichier spécifique](#je-veux-que-git-ignore-les-changements-dun-fichier-sp%C3%A9cifique)
  - [Paramétrage](#param%C3%A9trage)
    - [Je veux ajouter des alias pour certaines commandes Git](#je-veux-ajouter-des-alias-pour-certaines-commandes-git)
    - [Je veux ajouter un répertoire vide à mon dépôt](#je-veux-ajouter-un-r%C3%A9pertoire-vide-%C3%A0-mon-d%C3%A9p%C3%B4t)
    - [Je veux mettre en cache un nom d'utilisateur et mot de passe pour un dépôt](#je-veux-mettre-en-cache-un-nom-dutilisateur-et-mot-de-passe-pour-un-d%C3%A9p%C3%B4t)
    - [Je veux que Git ignore les changements de permissions et de filemode](#je-veux-que-git-ignore-les-changements-de-permissions-et-de-filemode)
    - [Je veux définir un utilisateur global](#je-veux-d%C3%A9finir-un-utilisateur-global)
    - [Je veux ajouter une ligne de commande de coloration pour Git](#je-veux-ajouter-une-ligne-de-commande-de-coloration-pour-git)
  - [Je n'ai aucune idée de ce que j'ai mal fait](#je-nai-aucune-id%C3%A9e-de-ce-que-jai-mal-fait)
- [Autres Ressources](#autres-ressources)
  - [Livres](#livres)
  - [Tutoriels](#tutoriels)
  - [Scripts et Outils](#scripts-et-outils)
  - [Clients graphiques](#clients-graphiques)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Dépôts

### Je veux initialiser un dépôt local

Pour initialiser un répertoire existant comme dépôt Git :

```sh
(mon-dossier) $ git init
```

### Je veux cloner un dépôt distant

Pour cloner (copier) un dépôt distant, copiez l'url de ce dernier, et lancez :

```sh
$ git clone [url]
```

Ceci le sauvegardera dans un dossier nommé d'après le nom du dépôt. Assurez-vous d'avoir une connexion avec le serveur distant que vous essayez de cloner (dans la plupart des cas ceci revient à s'assurer d'être connecté·e à Internet).

Pour le cloner vers un dossier ayant un nom différent de celui du dépôt distant :

```sh
$ git clone [url] nom-du-nouveau-dossier
```

## Éditer des Commits

<a name="diff-last"></a>
### Qu'est-ce que je viens de commiter ?

Imaginons que vous venez tout juste d'enregistrer des changements à l'aveugle avec {code0}git commit -a{/code0} et que vous n'êtes pas sûr·e du contenu réel du commit que vous venez d'effectuer. Vous pouvez visualiser le dernier commit sur votre HEAD actuel avec :

```sh
(master)$ git show
```

Ou :

```sh
$ git log -n1 -p
```

Si vous voulez voir un fichier à un commit spécifique, vous pouvez aussi faire (où `<commitid>` est le commit qui vous intéresse).

```sh
$ git show <commitid>:nomdufichier
```

### J'ai commis une erreur dans un message de commit

Si vous vous êtes trompé·e et que le commit n'a pas encore été poussé, vous pouvez appliquer la commande suivante afin de changer le message du commit sans affecter les changements de ce même commit :

```sh
$ git commit --amend --only
```

Cela ouvrira votre éditeur de texte par défaut, où vous pourrez éditer le message. Vous pouvez également effectuer la même chose en une seule commande :

```sh
$ git commit --amend --only -m 'xxxxxxx'
```

Si vous avez déjà poussé le message, vous pouvez modifier le commit et pousser de force, mais cela n'est pas recommandé.

<a name="commit-wrong-author"></a>
### J'ai commit avec le mauvais nom et email dans les configurations

Si c'est un commit unique, modifiez-le :

```sh
$ git commit --amend --no-edit --author "Nouvel Auteur·trice <emaildelauteurice@mondomaine.com>"
```

Une alternative est de configurer correctement vos paramètres d'auteur·trice avec `git config --global author.(name|email)` puis de lancer :

```sh
$ git commit --amend --reset-author --no-edit
```

Si vous avez besoin de changer tout l'historique, veuillez vous référer à la page man pour `git filter-branch`.

### Je veux retirer un fichier du commit précédent

Pour retirer les changements effectués sur un fichier lors du précédent commit, faites la chose suivante :

```sh
$ git checkout HEAD^ monfichier
$ git add monfichier
$ git commit --amend --no-edit
```

Dans le cas où le fichier fut introduit dans le commit et que vous voulez le retirer (de Git seul), faites :

```sh
$ git rm --cached monfichier
$ git commit --amend --no-edit
```

Cela est particulièrement utile quand vous avez un patch d'ouvert et que vous avez commité un fichier non nécessaire, et que vous avez besoin de pousser de force pour mettre à jour le patch sur le dépôt distant. L'option `--no-edit` est utilisée pour garder le message de commit existant.

<a name="delete-pushed-commit"></a>
### Je veux supprimer ou retirer mon dernier commit

Si vous avez besoin de supprimer des commits poussés, vous pouvez utiliser la commande suivante. Cependant, cela modifiera votre historique de manière irreversible, et mettra la pagaille dans l'historique de quiconque ayant déjà récupéré des changements depuis le dépôt distant. Pour faire court, si vous n'êtes pas sûr·e, vous ne devriez pas faire ça, jamais.

```sh
$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branche]
```

Si vous n'avez pas poussé, pour réinitialiser Git vers l'état dans lequel il était avant que vous ne fassiez votre dernier commit (tout en gardant vos changements) :

```
(ma-branche*)$ git reset --soft HEAD@{1}
```

Cela ne marchera que si vous n'avez pas poussé. Si vous avez poussé, la seule vraie chose sécurisée à faire est `git revert SHAduMauvaisCommit`. Cela créera un nouveau commit qui annule tous les changements du commit en question. Ou, si la branche vers laquelle vous avez poussé est "rebase-safe" (en d'autres termes, les autres développeur·euse·s ne la récupéreront pas), vous pouvez juste lancer `git push --force-with-lease`. Pour plus d'informations, jetez un œil [à la section ci-dessus](#je-veux-supprimer-ou-retirer-mon-dernier-commit).

<a name="delete-any-commit"></a>
### Supprimer/retirer un commit arbitraire

Le même avertissement que ci-dessus s'applique. Ne faites jamais cela si possible.

```sh
$ git rebase --onto SHA1_DU_MAUVAIS_COMMIT^ SHA1_DU_MAUVAIS_COMMIT
$ git push --force-with-lease [remote] [branche]
```

Ou faites un [rebase interactif](#interactive-rebase) et retirez les lignes correspondantes au(x) commit(s) que vous souhaitez supprimer.

<a name="#force-push"></a>
### J'ai essayé de pousser un commit modifié vers le dépôt distant, mais j'ai eu un message d'erreur

```sh
To https://github.com/votrenomdutilisateur/repo.git
! [rejected]        ma-branche -> ma-branche (non-fast-forward)
error: failed to push some refs to 'https://github.com/tanay1337/webmaker.org.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

Notez que, tout comme avec un rebase (voir ci-dessous), le fait de modifier **remplace l'ancien commit avec un nouveau**, donc vous devez pousser de force (`--force-with-lease`) vos changements si vous avez déjà poussé le commit vers votre dépôt distant avant sa modification. Soyez prudent·e quand vous faites cela : Assurez vous de *toujours* spécifier une branche !

```sh
(ma-branche)$ git push origin ma-branche --force-with-lease
```

En règle générale, **évitez de pousser de force**. Il est préférable de créer et pousser un nouveau commit plutôt que de pousser de force un commit modifié car cela causera des conflits dans l'historique pour n'importe quel développeur·euse ayant déjà intéragit avec la branche en question ou quelque branche fille. `--force-with-lease` échouera toujours, si quelqu'un d'autre était déjà en train de travailler sur la même branche que vous et que votre push réécrirait par-dessus ces modifications.

Si vous êtes *absolument* sûr·e que personne n'est en train de travailler sur la même branche que vous ou que vous souhaitez mettre à jour la branche de manière *inconditionnelle*, vous pouvez utiliser `--force` (`-f`), mais cela devrait être évité en général.

<a href="undo-git-reset-hard"></a>
### J'ai fait un hard reset par accident, et je veux retrouver mes changements

Si vous avez accidentellement fait un `git reset --hard`, vous pouvez normalement retrouver votre commit, car Git garde un log de tout ce que vous faites pendant quelques jours.

À noter : Cela n'est valide que si votre travail est sauvegardé, c'est à dire dans un commit ou un remisage. `git reset --hard` *supprimera* les modifications non commitées, donc utilisez cela avec précaution (une option plus sûre est `git reset --keep`).

```sh
(master)$ git reflog
```

Vous verrez une liste de vos précédents commits, et un commit pour la réinitialisation. Choisissez le SHA du commit vers lequel vous souhaitez retourner, et réinitialisez à nouveau :

```sh
(master)$ git reset --hard SHA1234
```

Et cela devrait faire l'affaire.

<a href="undo-a-commit-merge"></a>
### J'ai commité et poussé une fusion par accident

Si vous avez accidentellement fusionné une branche d'une fonctionnalité avec la branche de développement principale avant qu'elle ne soit prête à être fusionnée, vous pouvez toujours annuler cette fusion. Mais il y a un piège : un commit de fusion a plus d'un parent (en général deux).

Utilisez cette commande :

```sh
(feature-branch)$ git revert -m 1 <commit>
```
où l'option `-m 1` demande de sélectionner le parent numéro 1 (la branche vers laquelle la fusion a été faite) comme parent vers lequel annuler la fusion.

À noter : le numéro du parent n'est pas un identifiant de commit. Un commit de fusion ressemble plus à `Merge: 8e2ce2d 86ac2e7`. Le numéro du parent est l'index basé sur 1 du parent souhaité sur cette ligne, le premier identifiant est le numéro 1, le second le numéro 2, et ainsi de suite.

<a href="undo-sensitive-commit-push"></a>
### J'ai commité et poussé des fichiers contenant des données sensibles par accident

Si vous avez accidentellement poussé des fichiers contenant des données sensibles (mots de passe, clés, etc.), vous pouvez modifier le commit précédent. Gardez toutefois à l'esprit qu'une fois que vous avez poussé un commit, vous devez considérer n'importe quelle donnée qu'il contient comme étant compromise. Ces étapes peuvent supprimer les données sensibles de votre dépôt public ou de votre copie locale, mais vous ne **pouvez pas** supprimer les données sensibles des copies clonées par d'autres personnes. Si vous avez commité un mot de passe, **changez-le immédiatement**. Si vous avez commité une clé, **révoquez-la et régénérez-la immédiatement**. Modifier le commit poussé n'est pas suffisant, étant donné que n'importe qui aurait pu extraire le commit original contenant vos données sensibles pendant ce temps.

Si vous souhaitez modifier le fichier et supprimer les données sensibles, lancez :
```sh
(feature-branch)$ git add fichier_modifié
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branche]
```

Si vous souhaitez supprimer tout un fichier (mais le garder en local), lancez :
```sh
(feature-branch)$ git rm --cached fichier_sensible
echo fichier_sensible >> .gitignore
  (feature-branch)$ git add .gitignore
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branche]
```
Alternativement, stockez vos données sensibles dans des variables d'environnement locales.

Si vous souhaitez supprimer tout un fichier (et ne pas le garder en local), lancez :
```sh
(feature-branch)$ git rm fichier_sensible
(feature-branch)$ git commit --amend --no-edit
(feature-branch)$ git push --force-with-lease origin [branche]
```

Si vous avez créé d'autres commits pendant ce temps (c'est à dire que les données sensibles sont dans un commit avant le commit précédent), vous devrez utiliser la fonction `rebase`.

## Indexation

<a href="#i-need-to-add-staged-changes-to-the-previous-commit"></a>
### J'ai besoin d'ajouter des modifications indexées sur le commit précédent

```sh
(ma-branche*)$ git commit --amend
```

Si vous savez déjà que vous ne souhaitez pas modifier le message du commit, vous pouvez dire à Git de réutiliser ce dernier :

```sh
(ma-branche*)$ git commit --amend -C HEAD
```


<a name="commit-partial-new-file"></a>
### Je veux indexer une partie d'un fichier, mais pas tout le fichier

Normalement, quand vous souhaitez modifier une partie d'un fichier, il faut lancer ceci :

```sh
$ git add --patch nomdufichier.x
```

`-p` fonctionnera comme raccourci. Cela ouvrira le mode interactif. Vous serez en mesure d'utiliser l'option `s` pour séparer le commit. Cependant, si le fichier est nouveau, vous n'aurez pas cette option. Pour ajouter un nouveau fichier, faites comme ceci :

```sh
$ git add -N nomdufichier.x
```

Ensuite, vous devrez utiliser l'option `e` afin de choisir manuellement quelles lignes ajouter. Lancer `git diff --cached` ou `git diff --staged` vous montrera quelles lignes vous avez indexées comparées à celles qui sont toujours sauvegardées en local.

<a href="stage-in-two-commits"></a>
### Je veux ajouter les changements d'un fichier dans deux commits différents

`git add` ajoutera le fichier entier à un commit. `git add -p` vous permettra de sélectionner interactivement quels changements vous souhaitez ajouter.

<a href="unstaging-edits-and-staging-the-unstaged"></a>
### Je veux indexer mes modifications indexées, et désindexer mes modifications indexées

Cela est délicat. La meilleure chose que nous pouvons vous conseiller est que vous devriez remiser vos modifications non indexées, puis utiliser `git reset`. Après cela, utilisez `pop` pour déremiser vos modifications, puis ajoutez-les :

```sh
$ git stash -k
$ git reset --hard
$ git stash pop
$ git add -A
```

## Modifications non indexées

<a href="move-unstaged-edits-to-new-branch"></a>
### Je veux déplacer mes modifications non indexées vers une nouvelle branche

```sh
$ git checkout -b ma-branche
```

<a href="move-unstaged-edits-to-old-branch"></a>
### Je veux déplacer mes modifications non indexées vers une branche différente existante

```sh
$ git stash
$ git checkout ma-branche
$ git stash pop
```

<a href="i-want-to-discard-my-local-uncommitted-changes"></a>
### Je veux me débarrasser de mes modifications locales non commitées (indexées et non-indexées)

Si vous voulez vous débarrasser de toutes vos modifications locales indexées et non-indexées, vous pouvez faire ceci :

```sh
(ma-branche)$ git reset --hard
# ou
(master)$ git checkout -f
```

Cette commande désindexera tous les fichiers que vous avez pu indexer avec `git add` :

```sh
$ git reset
```

Cette commande annulera toutes les modifications locales non commitées (elle devrait être exécutée à la racine du dépôt) :

```sh
$ git checkout .
```

Vous pouvez également annuler les changements non commités d'un fichier ou d'un dossier en particulier :

```sh
$ git checkout [un_dossier|fichier.txt]
```

Il existe également une autre façon d'annuler toutes vos modifications non commitées (plus longue à taper, mais fonctionne depuis n'importe quel sous-dossier) :

```sh
$ git reset --hard HEAD
```

Cette commande supprimera tous les fichiers locaux non indexés, afin que seuls les fichiers suivis par Git ne restent :

```sh
$ git clean -fd
```

`-x` supprimera également tous les fichiers ignorés.

### Je veux me débarrasser de modifications non-indexées spécifiques

Quand vous souhaitez vous débarrasser de quelques modifications dans votre copie de travail, mais pas toutes, faites un `checkout` sur les modifications non désirées, et gardez les bonnes :

```sh
$ git checkout -p
# Répondez y à tous les bouts de code que vous souhaitez jeter
```

Une autre stratégie implique d'utiliser `stash`. Remisez toutes les bonnes modifications, réinitialisez votre copie locale, et réappliquez les bonnes modifications :

```sh
$ git stash -p
# Sélectionnez tous les bouts de code que vous souhaitez garder
$ git reset --hard
$ git stash pop
```

Alternativement, remisez vos changements non désirés, puis jetez le stash :

```sh
$ git stash -p
# Sélectionnez tous les bouts de code que vous ne souhaitez pas sauvegarder
$ git stash drop
```

### Je veux me débarrasser de fichiers non-indexés spécifiques

Quand vous souhaitez vous débarrasser d'un fichier en particulier de votre copie de travail :

```sh
$ git checkout monFichier
```

Alternativement, pour vous débarrasser de plusieurs fichiers dans votre copie locale, listez chacun d'entre eux :

```sh
$ git checkout monPremierFichier monDeuxiemeFichier
```

### Je veux me débarrasser de mes modifications locales non-indexées uniquement

Quand vous souhaitez vous débarrasser de toutes vos modifications locales non commitées :

```sh
$ git checkout .
```
<a href="i-want-to-discard-all-my-untracked-files"></a>
### Je veux me débarrasser de tous mes fichiers non suivis

Quand vous souhaitez vous débarrasser de tous vos fichiers non suivis :

```sh
$ git clean -f
```

<a href="I-want-to-unstage-specific-staged-file"></a>
### Je veux désindexer un fichier indexé spécifique

Il arrive parfois que nous ayons un ou plusieurs fichiers qui ont été indexés par accident. Et ces fichiers n'ont pas été commités auparavant. Pour les désindexer :

```sh
$ git reset -- <nomdufichier>
```

Cela entraînera la désindexation du fichier et le remettra à son état non suivi.

## Branches

### Je veux lister toutes les branches

Pour lister les branches locales :

```sh
$ git branch
```

Pour lister les branches distantes :

```sh
$ git branch -r
```

Pour lister toutes les branches (à la fois locales et distantes) :

```sh
$ git branch -a
```

<a name="create-branch-from-commit"></a>
### Créer une branche à partir d'un commit
```sh
$ git checkout -b <branche> <SHA1_DU_COMMIT>
```

<a name="pull-wrong-branch"></a>
### J'ai pull depuis/vers la mauvaise branche

C'est une autre occasion d'utiliser `git reflog` afin de voir où votre HEAD pointait avant le mauvais `pull` :

```sh
(master)$ git reflog
ab7555f HEAD@{0}: pull origin wrong-branch: Fast-forward
c5bc55a HEAD@{1}: checkout: checkout message goes here
```

Réinitialisez simplement votre branche vers le commit désiré :

```sh
$ git reset --hard c5bc55a
```

Et voilà.

<a href="discard-local-commits"></a>
### Je veux supprimer mes commits locaux afin que ma branche soit pareille à celle sur le serveur

Assurez-vous que vous n'avez pas poussé vos modifications sur le serveur.

`git status` devrait vous indiquer combien de commits en avance vous êtes par rapport à origin :

```sh
(my-branch)$ git status
(ma-branche)$ git status
# On branch ma-branche
# Your branch is ahead of 'origin/my-branch' by 2 commits.
#   (use "git push" to publish your local commits)
#
```

Une des façons de faire pour réinitialiser votre branche afin qu'elle corresponde à origin (afin d'avoir la même chose que le dépôt distant) est de lancer ceci :

```sh
(master)$ git reset --hard origin/ma-branche
```

<a name="commit-wrong-branch"></a>
### J'ai commité sur master au lieu d'une nouvelle branche

Créez la nouvelle branche tout en restant sur master :

```sh
(master)$ git branch ma-branche
```

Réinitialisez la branche master vers le commit précédent :

```sh
(master)$ git reset --hard HEAD^
```

`HEAD^` est un raccourci pour `HEAD^1`. Cela indique le premier parent de `HEAD`, de la même façon que `HEAD^2` indique le second parent du commit (des fusions peuvent avoir deux parents).

Notez que `HEAD^2` ne signifie **pas** la même chose que `HEAD~2` (visitez [ce lien](http://www.paulboxley.com/blog/2011/06/git-caret-and-tilde) pour plus d'informations).

Alternativement, si vous ne souhaitez pas utiliser `HEAD^`, retrouvez le hash du commit vers lequel vous souhaitez remettre votre branche master (`git log` devrait faire l'affaire). Puis réinitialisez vers ce hash. `git push` s'assurera que la modification est reflétée sur le serveur distant.

Par exemple, si le hash du commit sur lequel votre branche master est supposée être est `a13b85e` :

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Déplacez-vous vers la nouvelle branche pour continuer de travailler :

```sh
(master)$ git checkout ma-branche
```

<a name="keep-whole-file"></a>
### Je veux séparer tout un fichier d'un autre ref-ish

Admettons que vous avez un pic de travail (voir la note), avec des centaines de changements. Tout fonctionne bien. Maintenant, vous commitez vers une autre branche pour sauvegarder ce travail :

```sh
(solution)$ git add -A && git commit -m "Ajout de tous les changements de ce pic vers un gros commit."
```

Quand vous souhaitez mettre tout cela vers une branche (d'une fonctionnalité ou `develop`), ce qui vous intéresse est de garder les fichiers dans leur entièreté. Vous voudriez également séparer votre gros commit en plusieurs petits commits.

Admettons que vous ayez :

  * La branche `solution`, avec la solution à votre pic. En avance d'un commit par rapport à `develop`.
  * La branche `develop`, où vous souhaitez ajouter vos modifications.

Vous pouvez résoudre cela en ramenant les contenus vers votre branche :

```sh
(develop)$ git checkout solution -- fichier1.txt
```

Cela ramènera le contenu de ce fichier dans la branche `solution` vers votre branche `develop` :

```sh
# On branch develop
# Your branch is up-to-date with 'origin/develop'.
# Changes to be committed:
#  (use "git reset HEAD <file>..." to unstage)
#
#        modified:   fichier1.txt
```

Puis, commitez comme d'habitude.

Note: Les pics de solutions servent à analyser ou résoudre un problème. Ces solutions sont ensuite utilisées afin d'avoir une estimation puis jetées une fois que tout le monde a une vision claire du problème. ~ [Wikipedia](https://en.wikipedia.org/wiki/Extreme_programming_practices).

<a name="cherry-pick"></a>
### J'ai fait plusieurs commits sur une même branche qui auraient dû être sur plusieurs branches

Admettons que vous êtes sur votre branche master. En lançant `git log`, vous remarquez que vous avez fait deux commits :

```sh
(master)$ git log

commit e3851e817c451cc36f2e6f3049db528415e3c114
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:27 2014 -0400

    Bug #21 - Ajout de la protection CSRF

commit 5ea51731d150f7ddc4a365437931cd8be3bf3131
Author: Alex Lee <alexlee@example.com>
Date:   Tue Jul 22 15:39:12 2014 -0400

    Bug #14 - Correction de l'espacement du titre

commit a13b85e984171c6e2a1729bb061994525f626d14
Author: Aki Rose <akirose@example.com>
Date:   Tue Jul 21 01:12:48 2014 -0400

    Premier commit
```

Notons dans un coin les hashes des commits pour chaque bug (`e3851e8` pour le #21, `5ea5173` pour le #14).

Pour commencer, réinitialisons notre branche master sur le bon commit (`a13b85e`) :

```sh
(master)$ git reset --hard a13b85e
HEAD is now at a13b85e
```

Maintenant, nous pouvons créer une nouvelle branche pour le bug #21 :

```sh
(master)$ git checkout -b 21
(21)$
```

Maintenant, faisons un `cherry-pick` du commit pour le bug #21 par-dessus notre branche. Cela signifie que nous appliquerons ce commit, et seulement ce commit, directement au-dessus de ce qui se trouve sur notre HEAD :

```sh
(21)$ git cherry-pick e3851e8
```

Lors de cette étape, il est possible qu'il y ait des conflits. Regardez la section [**Il y a eu des conflits**](#merge-conflict) dans la section [faire un rebase interactif](#interactive-rebase) ci-dessus pour savoir comment résoudre ces conflits.

Maintenant, créons une nouvelle branche pour le bug #14, aussi basée sur master :

```sh
(21)$ git checkout master
(master)$ git checkout -b 14
(14)$
```

Et pour finir, faisons un `cherry-pick` du commit pour le bug #14 :

```sh
(14)$ git cherry-pick 5ea5173
```

<a name="delete-stale-local-branches"></a>
### Je veux supprimer mes branches locales qui ont été supprimée sur le dépôt distant
Une fois que vous avez accepté une Pull Request sur GitHub, vous avez l'option de supprimer la branche fusionnée dans votre fork. Si vous ne prévoyez pas de continuer à travailler sur la branche, cela est plus propre de supprimer les copies locales de la branche afin de ne pas encombrer votre copie de travail avec un tas de branches obsolètes.

```sh
$ git fetch -p upstream
```

où `upstream` est le dépôt distant depuis lequel vous voulez mettre à jour.

<a name='restore-a-deleted-branch'></a>
### J'ai supprimé ma branche par accident

Si vous poussez régulièrement sur la branche distante, vous devriez ne pas avoir de problème la plupart du temps. Mais il arrive parfois que vous finissez par supprimer vos branches. Admettons que nous créons une nouvelle branche avec un nouveau fichier :

```sh
(master)$ git checkout -b ma-branche
(ma-branceh)$ git branch
(ma-branche)$ touch foo.txt
(ma-branche)$ ls
README.md foo.txt
```

Ajoutons cela et commitons :

```sh
(ma-branche)$ git add .
(ma-branche)$ git commit -m 'ajout de foo.txt'
(ma-branche)$ ajout de foo.txt
 1 files changed, 1 insertions(+)
 create mode 100644 foo.txt
(ma-branche)$ git log

commit 4e3cd85a670ced7cc17a2b5d8d3d809ac88d5012
Author: siemiatj <siemiatj@example.com>
Date:   Wed Jul 30 00:34:10 2014 +0200

    ajout de foo.txt

commit 69204cdf0acbab201619d95ad8295928e7f411d5
Author: Kate Hudson <katehudson@example.com>
Date:   Tue Jul 29 13:14:46 2014 -0400

    Correction #6: Push de force après avoir édité les commits
```

Maintenant, revenons sur master et supprimons notre branche "par accident" :

```sh
(ma-branche)$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
(master)$ git branch -D my-branch
Deleted branch ma-branche (was 4e3cd85).
(master)$ echo oh non, j'ai supprimé ma branche !
oh non, j'ai supprimé ma branche !
```

À cette étape, vous devriez devenir familier avec `reflog`, un logueur amélioré. Il stocke l'historique de toutes les actions dans le dépôt :

```
(master)$ git reflog
69204cd HEAD@{0}: checkout: moving from ma-branche to master
4e3cd85 HEAD@{1}: commit: ajout de foo.txt
69204cd HEAD@{2}: checkout: moving from master to ma-branche
```

Comme vous pouvez le remarquer, nous avons le hash du commit de notre branche supprimée. Voyons voir si nous pouvons restaurer notre branche supprimée.

```sh
(master)$ git checkout -b ma-branche-help
Switched to a new branch 'ma-branche-help'
(ma-branche-help)$ git reset --hard 4e3cd85
HEAD is now at 4e3cd85 ajout de foo.txt
(ma-branche-help)$ ls
README.md foo.txt
```

Voilà ! Nous avons récupéré notre fichier supprimé. `git reflog` est aussi utile quand un rebase se passe terriblement mal.

### Je veux supprimer une branche

Pour supprimer une branche distante :

```sh
(master)$ git push origin --delete ma-branche
```

Vous pouvez aussi faire :

```sh
(master)$ git push origin :ma-branche
```

Pour supprimer une branche locale :

```sh
(master)$ git branch -d ma-branche
```

Pour supprimer une branche locale qui *n'a pas* été fusionnée vers la branche actuelle ou une branche distante :

```sh
(master)$ git branch -D ma-branche
```

### Je veux supprimer plusieurs branches

Admettons que vous voulez supprimer toutes les branches qui commencent par `fix/` :

```sh
(master)$ git branch | grep 'fix/' | xargs git branch -d
```

### Je veux renommer une branche

Je veux renommer la branche actuelle (locale) :

```sh
(master)$ git branch -m nouveau-nom
```

Pour renommer une autre branche (locale) :

```sh
(master)$ git branch -m ancien-nom nouveau-nom
```

<a name="i-want-to-checkout-to-a-remote-branch-that-someone-else-is-working-on"></a>
### Je veux me déplacer sur une branche distante sur laquelle quelqu'un est en train de travailler

Pour commencer, récupérez toutes les branches depuis le dépôt distant :

```sh
(master)$ git fetch --all
```

Admettons que vous souhaitez vous déplacer sur `daves` depuis le dépôt distant :

```sh
(master)$ git checkout --track origin/daves
Branch daves set up to track remote branch daves from origin.
Switched to a new branch 'daves'
```

(`--track` est un raccourci pour `git checkout -b [branch] [remotename]/[branch]`)

Cela vous donnera une copie locale de la branche `daves`, et n'importe quelle mise à jour qui y sera poussée sera aussi visible sur le dépôt distant.

### Je veux créer une nouvelle branche distante à partir de celle en locale

```sh
$ git push <remote> HEAD
```

Si vous voulez configurer cette branche distante en tant qu'upstream pour la branche actuelle, lancez la commande suivante à la place :

```sh
$ git push -u <remote> HEAD
```

Avec le mode `upstream` et le mode `simple` (défaut dans Git 2.0) de la configuration de `push.default`, la commande suivante poussera la branche actuelle par rapport à la branche distante qui a été précédemment enregistrée avec `-u` :

```sh
$ git push
```

Le comportement des autres modes de `git push` est détaillé dans la [documentation de `push.default`](https://git-scm.com/docs/git-config#git-config-pushdefault).

### Je veux configurer une branche distante en tant qu'upstream pour une branche locale

Vous pouvez configurer une branche distante en tant qu'upstream pour la branche locale actuelle en utilisant :

```sh
$ git branch --set-upstream-to [nomduremote]/[branche]
# ou, en utilisant le raccourci :
$ git branch -u [nomduremote]/[branche]
```

Pour configurer la branche distante en tant qu'upstream pour une autre branche locale :

```sh
$ git branch -u [nomduremote]/[branche] [branche-locale]
```

<a name="i-want-to-set-my-HEAD-to-track-the-default-remote-branch"></a>
### Je veux configurer mon HEAD pour suivre la branche distante par défaut

En vérifiant vos branches distantes, vous pouvez voir lesquelles d'entre-elles sont suivies par HEAD. Dans certains cas, ce n'est pas la branche désirée.

```sh
$ git branch -r
  origin/HEAD -> origin/gh-pages
  origin/master
```

Pour changer cela afin que `origin/HEAD` suive `origin/master`, vous pouvez lancer cette commande :

```sh
$ git remote set-head origin --auto
origin/HEAD set to master
```

### J'ai fait des modifications sur la mauvaise branche

Si vous avez fait des modifications non commitées et réalisez par la suite que vous êtes sur la mauvaise branche, remisez les modifications et appliquez-les sur la branche que vous voulez :

```sh
(mauvaise_branche)$ git stash
(mauvaise_branche)$ git checkout <bonne_branche>
(bonne_branche)$ git stash apply
```

## Rebaser et fusionner

<a name="undo-rebase"></a>
### Je veux annuler un rebase/merge

Il se peut que vous avez fait une fusion ou un rebase sur votre branche actuelle avec une mauvaise branche, ou que vous vous êtes perdus ou n'arrivez pas à finir le processus de rebase ou de fusion. Git sauvegarde le pointeur de HEAD original dans une variable appelée ORIG_HEAD avant de faire des opérations dangereuses, afin qu'il soit plus facile de réinitialiser votre branche dans l'état avant le rebase ou la fusion :

```sh
(ma-branche)$ git reset --hard ORIG_HEAD
```

<a name="force-push-rebase"></a>
### J'ai rebase, mais je ne veux pas pousser de force

Malheureusement, vous devez pousser de force si vous souhaitez que ces modifications soient répercutées sur la branche distante. C'est parce que vous avez changé l'historique. La branche distante n'acceptera pas les modifications, sauf si vous poussez de force. C'est l'une des principales raisons pour lesquelles de nombreuses personnes utilisent un flux de travail à base de fusions plutôt qu'un flux de travail à base de rebase : les grandes équipes peuvent avoir des problèmes avec les développeurs qui poussent de force. Utilisez ceci avec prudence. Une façon plus sûre d'utiliser rebase est de ne pas du tout refléter vos modifications sur la branche distante, mais plutôt de procéder de la manière suivante :

```sh
(master)$ git checkout ma-branche
(ma-branche)$ git rebase -i master
(ma-branche)$ git checkout master
(master)$ git merge --ff-only ma-branche
```

Pour plus d'informations, visitez [ce thread de SO](https://stackoverflow.com/questions/11058312/how-can-i-use-git-rebase-without-requiring-a-forced-push).

<a name="interactive-rebase"></a>
### J'ai besoin de combiner des commits

Admettons que vous êtes en train de travailler sur une branche qui sera ou est dans une demande de fusion vers `master`. Dans le cas le plus simple, il suffit de combiner *tous* vos commits en un seul et vous vous fichez des timestamps des commits, vous pouvez faire un reset et recommiter. Assurez-vous que la branche master est à jour et que toutes vos modifications sont commitées, puis faites :

```sh
(ma-branche)$ git reset --soft master
(ma-branche)$ git commit -am "Nouvelle fonctionnalité géniale"
```

Si vous voulez plus de contrôle, et également conserver les timestamps, vous devez faire ce qu'on appelle un rebase interactif :

```sh
(ma-branche)$ git rebase -i master
```

Si vous ne travaillez pas par rapport à une autre branche, vous allez devoir `rebase` relativement à votre `HEAD`. Si vous voulez combiner les 2 derniers commits par exemple, vous allez devoir `rebase` par rapport à `HEAD~2`. Pour les 3 derniers, `HEAD~3`, etc.

```sh
(master)$ git rebase -i HEAD~2
```

Après avoir lancé votre commande `rebase`, vous verrez quelque chose dans le genre dans votre éditeur de texte :

```vim
pick a9c8a1d Un peu de refactor
pick 01b2fd8 Nouvelle feature génial
pick b729ad5 fixup
pick e3851e8 autre fix

# Rebase 8074d12..b729ad5 onto 8074d12
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
```

Toutes les lignes commençant par un `#` sont des commentaires, elles n'affecteront pas votre rebase.

Vous devez ensuite remplacer les commandes `pick` avec n'importe laquelle parmi celles présentes dans la liste ci-dessus, et vous pouvez également supprimer des commits en supprimant les lignes correspondantes.

Par exemple, si vous voulez **laisser le commit le plus vieux (le premier) tel quel et combiner tous les commits suivants avec le deuxième plus vieux**, vous devez remplacer les lettres à côté de chaque commit sauf le premier et le deuxième par un `f` :

```vim
pick a9c8a1d Un peu de refactor
pick 01b2fd8 Nouvelle feature géniale
f b729ad5 fixup
f e3851e8 autre fix
```

Si vous voulez combiner ces commits **et renommer le commit**, il vous faudra ajouter un `r` à côté du deuxième commit ou utiliser simplement `s` au lieu de `f` :

```vim
pick a9c8a1d Un peu de refactor
pick 01b2fd8 Nouvelle feature géniale
s b729ad5 fixup
s e3851e8 autre fix
```

Vous pouvez ensuite renommer le commit dans le prochain éditeur de texte qui s'affiche :

```vim
Nouvelles fonctionnalités encore plus géniales

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 8074d12
# You are currently editing a commit while rebasing branch 'master' on '8074d12'.
#
# Changes to be committed:
#   modified:   README.md
#

```

Si tout se passe bien, vous devriez voir quelque chose comme ceci :

```sh
(master)$ Successfully rebased and updated refs/heads/master.
```

#### Stratégie de fusion sûre
`--no-commit` fait une fusion mais prétend que la fusion a échoué et ne commit pas automatiquement, laissant la chance à l'utilisateur d'inspecter plus et de bidouiller plus les résultats de la fusion avant de commiter. `no-ff` garde une preuve qu'une branche de fonctionnalité a auparavant existé, gardant ainsi l'historique du projet consistant :

```sh
(master)$ git merge --no-ff --no-commit ma-branche
```

#### J'ai besoin de fusionner deux branches en un seul commit

```sh
(master)$ git merge --squash ma-branche
```

<a name="rebase-unpushed-commits"></a>
#### Je veux combiner les commits non poussés uniquement

Parfois, vous avez plusieurs commits en cours que vous souhaitez combiner avant de les pousser sur l'upstream. Vous ne voulez pas combiner des commits qui ont déjà été poussés sur l'upstream par accident, car quelqu'un d'autre a peut-être déjà effectué des commits qui y font référence :

```sh
(master)$ git rebase -i @{u}
```

Cela fera un rebase interactif que liste seulement les commits que vous n'avez pas poussé, afin que cela soit plus sûr de réordonner/corriger/combiner n'importe lesquels de la liste.

#### J'ai besoin d'annuler la fusion

Parfois, une fusion peux produire des problèmes pour certains fichiers. Dans ces cas là, nous pouvons utiliser l'option `abort` afin d'abonner le processus de résolution de conflits en cours, afin d'essayer de reconstruire l'état qu'on avait avant la fusion :

```sh
(ma-branche)$ git merge --abort
```

Cette commande est disponible dans Git depuis les versions >= 1.7.4

### J'ai besoin de mettre à jour le commit parent de ma branche

Admettons que vous avez une branche master, une branche feature-1 créée à partir de master, et une branche feature-2 créée à partir de feature-1, puis que le commit parent de feature-2 n'est plus le bon (il devrait être celui correspondant au HEAD de feature-1, étant donné que notre branche a été créée à partir de celui-ci). Vous pouvez réparer ça avec `git rebase --onto` :

```sh
(feature-2)$ git rebase --onto feature-1 <le premier commit dans votre branche feature-2 que vous ne voulez pas ramene> feature-2
```

Cela peut vous venir en aide dans les situations délicates où vous avez une fonctionnalité créée sur la base d'une autre fonctionnalité qui n'a pas encore été fusionnée, et qu'une correction de bug sur la branche feature-1 a besoin d'être reflétée sur votre branche feature-2.  

### Vérifier si tous les commits d'une branche sont fusionnés

Pour vérifier si tous les commits d'une branche sont fusionnés sur une autre branche, vous devriez comparer les HEAD (ou n'importe quel autre commit) de ces branches :

```sh
(master)$ git log --graph --left-right --cherry-pick --oneline HEAD...feature/120-on-scroll
```

Cela vous dira si des commits sont dans l'une mais pas dans l'autre, et vous donnera une liste de tout ce qui n'est pas commun aux deux branches. Une alternative est de faire ceci :

```sh
(master)$ git log master ^feature/120-on-scroll --no-merges
```

### Problèmes possibles avec les rebase interactifs

<a name="noop"></a>
#### L'écran d'édition du rebase affiche 'noop'

Si vous voyez cela :
```
noop
```

Cela signifie que vous êtes en train de rebaser par rapport à une branche qui a un commit identique, ou qui est *en avance* par rapport à votre branche actuelle. Vous pouvez essayer :

* de vous assurez que votre branche master est là où elle devrait être
* de rebaser par rapport à `HEAD~2` ou plus tôt à la place

<a name="merge-conflict"></a>
#### Il y a eu des conflits

Si vous n'êtes pas en mesure de terminer le rebase avec succès, vous allez peut-être devoir résoudre des conflits.

Pour commencer, lancez `git status` afin de voir quels fichiers ont des conflits :

```sh
(ma-branche)$ git status
On branch ma-branche
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  both modified:   README.md
```

Dans cet exemple, `README.md` a des conflits. Ouvrez le fichier et cherchez la chose suivante :

```vim
   <<<<<<< HEAD
   some code
   =========
   some code
   >>>>>>> nouveau-commit
```

Vous aurez besoin de résoudre les différences entre le code qui fut ajouté dans votre nouveau commit (dans cet exemple, tout ce qu'il y a entre la ligne du milieu et `nouveau-commit`) et votre `HEAD`.

Si vous voulez garder la version du code d'une des branches, vous pouvez utiliser `--ours` ou `--theirs` :

```sh
(master*)$ git checkout --ours README.md
```

- Quand vous *fusionnez*, utilisez `--ours` pour garder les modifications de la branche locale, ou `--theirs` pour garder les modifications de l'autre branche.
- Quand vous *rebasez*, utilisez `--theirs` pour garder les modifications de la branche locale, ou `--ours` pour garder les modifications de l'autre branche. Pour des explications concernant cet échange, consultez [cette note dans la documentation de Git](https://git-scm.com/docs/git-rebase#git-rebase---merge).

Si les fusions sont plus complexes, vous pouvez utiliser un éditeur de diff visuel :

```sh
(master*)$ git mergetool -t opendiff
```

Après avoir résolu tous les conflits et testé votre code, faite un `git add` sur les fichiers que vous avez modifiés, puis continuez le rebase avec `git rebase --continue` :

```sh
(ma-branche)$ git add README.md
(ma-branche)$ git rebase --continue
```

Si après avoir résolu tous les conflits, vous finissez avec un arbre identique à ce qu'il était avant le commit, vous devriez faire un `git rebase --skip` à la place.

Si à n'importe quel moment vous voulez arrêter tout le rebase et revenir à l'état initial de votre branche, vous pouvez faire ceci :

```sh
(ma-branche)$ git rebase --abort
```

<a name="stashing"></a>
## Remisage

### Remiser toutes les modifications

Pour remiser toutes les modifications dans votre dossier de travail :

```sh
$ git stash
```

Si vous voulez également remiser les fichiers non suivis, utilisez l'option `-u` :

```sh
$ git stash -u
```

### Remiser des fichiers spécifiques

Pour remiser les modifications dans votre dossier de travail uniquement :

```sh
$ git stash push chemin-du-dossier-de-travail/nomdufichier.ext
```

Pour remiser plusieurs fichiers de votre dossier de travail :

```sh
$ git stash push chemin-du-dossier-de-travail/nomdufichier1.ext chemin-du-dossier-de-travail/nomdufichier2.ext
```

<a name="stash-msg"></a>
### Remiser avec un message

```sh
$ git stash save <message>
```

<a name="stash-apply-specific"></a>
### Appliquer un remisage spécifique de la liste

Commencez par vérifier la liste de vos remisages avec un message en utilisant :

```sh
$ git stash list
```

Puis appliquez la commande suivante en choisissant un remisage de la liste :

```sh
$ git stash apply "stash@{n}"
```

Ici, `n` indique la position du remisage dans la pile. Celui le plus haut sera en position 0.

## Rechercher

### Je veux rechercher une chaîne de caractères dans un commit

Pour rechercher une certaine chaîne de caractères dans un commit, vous pouvez utiliser la commande suivante :

```sh
$ git log -S "chaîne de caractères à rechercher"
```

Paramètres communs :

* `--source` sert à montrer le nom du ref en se basant sur la ligne de commande avec laquelle chaque commit a été atteint.

* `--all` sert à commencer depuis chaque branche.

* `--reverse` retourne les résultats dans l'ordre inverse, c'est à dire que la commande affichera le premier commit qui a fait la modification.

<a name="i-want-to-find-by-author-committer"></a>
### Je veux rechercher par auteur·trice/validateur·trice

Pour rechercher des commits par auteur·trice/validateur·trice, vous pouvez utiliser :

```sh
$ git log --author=<nom ou email>
$ git log --committer=<nom ou email>
```

Gardez en tête que l'auteur·trice et la personne qui a créé le commit ne sont pas les mêmes personnes. L'option `--author` correspond à la personne qui a écrit le code, et, d'un autre côté, l'option `--committer`, correspond à la personne qui a commité le code au nom de l'autreur·trice.

### Je veux lister les commits ayant des fichiers spécifiques

Pour trouver tous les commits contenant un fichier spécifique, vous pouvez utiliser :

```sh
$ git log -- <chemin du fichier>
```

En général, vous préciseriez un chemin exact, mais vous pouvez aussi utiliser des wildcards dans le chemin et le nom du fichier :

```sh
$ git log -- **/*.js
```

En utilisant des wildcards, il est utile de préciser `--name-status` pour voir la liste des fichiers commités :

```sh
$ git log --name-status -- **/*.js
```

### Trouver un tag où un commit est référencé

Pour trouver tous les tags contenant un commit en particulier :

```sh
$ git tag --contains <idducommit>
```

## Sous-modules

<a name="clone-submodules"></a>
### Cloner tous les sous-modules

```sh
$ git clone --recursive git://github.com/foo/bar.git
```

Si ces derniers ont déjà été clonés :

```sh
$ git submodule update --init --recursive
```

<a name="delete-submodule"></a>
### Retirer un sous-module

Créer un sous-module est assez trivial, mais le supprimer l'est moins. Les commandes dont vous avez besoin sont :

```sh
$ git submodule deinit nomdusubmodule
$ git rm nomdusubmodule
$ git rm --cached nomdusubmodule
$ rm -rf .git/modules/nomdusubmodule
```

## Objets divers

### Récupérer un fichier supprimé

Trouvez le commit le plus récent où le fichier existait encore :

```sh
$ git rev-list -n 1 HEAD -- nomdufichier
```

Puis faites un `checkout` sur ce fichier :

```
git checkout idducommitquiasupprimé^ -- nomdufichier
```

### Supprimer un tag

```sh
$ git tag -d <nom_du_tag>
$ git push <remote> :refs/tags/<nom_du_tag>
```

<a name="recover-tag"></a>
### Récupérer un tag supprimé

Si vous voulez récupérer un tag qui a déjà été supprimé, vous pouvez le faire en suivant ces étapes :  
Tout d'abord, vous devez retrouver le tag inaccessible en question :

```sh
$ git fsck --unreachable | grep tag
```

Notez le hash du tag dans un coin. Puis, restaurez le tag supprimé avec la commande suivante, qui utilise [`git update-ref`](https://git-scm.com/docs/git-update-ref) :

```sh
$ git update-ref refs/tags/<nom_du_tag> <hash>
```

Votre tag devrait maintenant être restauré.

### Patch supprimé

Si quelqu'un vous a envoyé une Pull Request sur GitHub, mais a par la suite supprimé son fork originel, vous ne serez pas en mesure de cloner son dépôt ou d'utiliser `git am` étant donné que les URLs de [.diff, .patch](https://github.com/blog/967-github-secrets) sont devenues indisponibles. Mais vous pouvez vous déplacer sur la PR en elle-même en utilisant les [les refs spéciaux de GitHub](https://gist.github.com/piscisaureus/3342247). Pour récupérer le contenu de PR#1 vers une nouvelle branche intitulée pr_1 :

```sh
$ git fetch origin refs/pull/1/head:pr_1
From github.com:foo/bar
 * [new ref]         refs/pull/1/head -> pr_1
```

### Exporter un dépôt comme fichier Zip

```sh
$ git archive --format zip --output /full/path/to/zipfile.zip master
```
### Pousser une branche et un tag qui ont le même nom

Si un tag sur le dépôt distant a le même nom qu'une branche, vous aurez le message d'erreur suivant en essayant de pousser cette branche avec la commande standard `$ git push <remote> <branche>` :

```sh
$ git push origin <branch>
error: dst refspec same matches more than one.
error: failed to push some refs to '<git server>'
```

Réparez cela en spécifiant que vous voulez pousser la référence de HEAD :

```sh
$ git push origin refs/heads/<nom-de-la-branche>
```

Si vous voulez pousser un tag sur un dépôt distant qui a le même nom qu'une branche, vous pouvez utiliser une commande similaire :

```sh
$ git push origin refs/tags/<nom-du-tag>
```

## Suivre des fichiers

<a href="i-want-to-change-a-file-names-capitalization-without-changing-the-contents-of-the-file"></a>
### Je veux changer la capitalisation du nom d'un fichier, sans changer son contenu

```sh
(master)$ git mv --force monFichier MonFichier
```

### Je veux écraser des fichiers locaux en faisant un git pull

```sh
(master)$ git fetch --all
(master)$ git reset --hard origin/master
```

<a href="remove-from-git"></a>
### Je veux retirer un fichier de Git mais garder le fichier

```sh
(master)$ git rm --cached log.txt
```

### Je veux rétablir un fichier à une version spécifique

Supposons que le hash du commit que vous voulez est `c5f567` :

```sh
(master)$ git checkout c5f567 -- file1/to/restore file2/to/restore
```

Si vous voulez rétablir les changements effectués un commit avant `c5f567`, passez le hash du commit comme étant `c5f567~1` :

```sh
(master)$ git checkout c5f567~1 -- file1/to/restore file2/to/restore
```

### Je veux lister les changements d'un fichier spécifique entre deux commits ou branches

Supposons que vous voulez comparer le dernier commit avec le fichier du commit `c5f567` :

```sh
$ git diff HEAD:path_to_file/file c5f567:path_to_file/file
```

Il en est de même pour les branches :

```sh
$ git diff master:path_to_file/file staging:path_to_file/file
```

### Je veux que Git ignore les changements d'un fichier spécifique

Cela marche très bien pour le modèles de configurations ou d'autres fichier qui nécessitent d'ajouter des identifiants qui ne devraient pas être commités :

```sh
$ git update-index --assume-unchanged file-to-ignore
```

Notez que cela n'enlève *pas* le fichier du suivi - il est seulement ignoré localement. Pour annuler cela et dire à Git de suivre les modifications à nouveau, cette commande supprime le fait d'ignorer :

```sh
$ git update-index --no-assume-unchanged fichier-à-ne-plus-ignorer
```

## Paramétrage

### Je veux ajouter des alias pour certaines commandes Git

Sur macOS et Linux, votre fichier de configuration Git est stocké dans `~/.gitconfig`. J'ai ajouté des exemples d'alias que j'utilise comme raccourcis (et certaines de mes fautes de frappes) dans la section `[alias]` comme ci-dessous :

```vim
[alias]
    a = add
    amend = commit --amend
    c = commit
    ca = commit --amend
    ci = commit -a
    co = checkout
    d = diff
    dc = diff --changed
    ds = diff --staged
    extend = commit --amend -C HEAD
    f = fetch
    loll = log --graph --decorate --pretty=oneline --abbrev-commit
    m = merge
    one = log --pretty=oneline
    outstanding = rebase -i @{u}
    reword = commit --amend --only
    s = status
    unpushed = log @{u}
    wc = whatchanged
    wip = rebase -i @{u}
    zap = fetch -p
```

### Je veux ajouter un répertoire vide à mon dépôt

Vous ne pouvez pas ! Git ne supporte pas cela, mais il y a une astuce. Vous pouvez créer un fichier `.gitignore` dans le dossier avec le contenu suivant :

```
 # Ignorer tout dans ce dossier
 *
 # Sauf ce fichier
 !.gitignore
```

Une autre convention commune est de créer un fichier vide dans le dossier, intitulé `.gitkeep` :

```sh
$ mkdir mondossier
$ touch mondossier/.gitkeep
```

Vous pouvez aussi juste appeler le fichier `.keep`, dans ce cas la commande ci-dessus serait `touch mydir/.keep`.

### Je veux mettre en cache un nom d'utilisateur et mot de passe pour un dépôt

Il se peut que vous ayez un dépôt qui nécessite une authentification. Dans ce cas, vous pouvez mettre en cache un nom d'utilisateur et un mot de passe afin que vous n'ayez pas à les rentrer à chaque push / pull. Cette commande peut faire cela pour vous :

```sh
$ git config --global credential.helper cache
# Configure Git pour utiliser le cache mémoire des identifiants
```

```sh
$ git config --global credential.helper 'cache --timeout=3600'
# Configurer le cache pour expirer après une heure (le paramètre est en secondes)
```

### Je veux que Git ignore les changements de permissions et de filemode

```sh
$ git config core.fileMode false
```

Si vous voulez configurer cela comme étant le comportement par défaut pour les utilisateurs connectés, utilisez :

```sh
$ git config --global core.fileMode false
```

### Je veux définir un utilisateur global

Pour configurer des informations d'utilisateur à travers tous les dépôts locaux, et pour configurer un nom qui est identifiable en relisant l'historique :

```sh
$ git config --global user.name “[prénom nom]”
```

Pour configurer une adresse email qui sera associée à chaque ligne de l'historique :

```sh
git config --global user.email “[adresse-email-valide]”
```

### Je veux ajouter une ligne de commande de coloration pour Git

Pour configurer la colorisation de ligne de commande automatique de Git afin de faciliter la relecture :

```sh
$ git config --global color.ui auto
```

## Je n'ai aucune idée de ce que j'ai mal fait

Donc, vous êtes fichu - vous avez `reset` quelque chose, ou vous avez fusionné la mauvaise branche, ou vous avez poussé de force et maintenant vous ne pouvez plus trouver vos commits. Vous savez qu'à un moment donné, tout allait bien, et vous voulez revenir à un état dans lequel vous étiez avant.

C'est là qu'intervient `git reflog`. `reflog` garde trace de tous les changements du bout de la branche, même si ce dernier n'est pas référencé par une branche ou un tag. Fondamentalement, chaque fois que le HEAD change, une nouvelle entrée est ajoutée au reflog. Cela marche seulement pour les dépôts locaux, malheureusement, et ne trace que les mouvements (pas les changements d'un fichier qui n'ont été enregistrés nulle part, par exemple).

```sh
(master)$ git reflog
0a2e358 HEAD@{0}: reset: moving to HEAD~2
0254ea7 HEAD@{1}: checkout: moving from 2.2 to master
c10f740 HEAD@{2}: checkout: moving from master to 2.2
```

Le `reflog` ci-dessus indique un déplacement depuis master vers la branche 2.2 et l'inverse. À partir de là, il y a un hard `reset` vers un commit plus vieux. La dernière activité est représentée en haut et intitulée `HEAD@{0}`.

Si il s'avère que vous êtes accidentellement revenu en arrière, le reflog contiendra le commit sur lequel pointait master (0254ea7) avant que vous ne supprimiez 2 commits par accident.

```sh
$ git reset --hard 0254ea7
```

En utilisant `git reset`, il est ensuite possible de changer master vers le commit vers lequel il pointait. Cela vous donne de la sûreté dans le cas où l'historique a été changé par accident.

(copié et édité depuis [Source](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog)).

# Autres Ressources

## Livres

* [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial) - Un livre de Michael Hartl couvrant les bases de Git
* [Pro Git](https://git-scm.com/book/en/v2) - L'excellent livre de Scott Chacon et Ben Straub à propos de Git
* [Git Internals](https://github.com/pluralsight/git-internals-pdf) - L'autre excellent livre de Scott Chacon à propos de Git

## Tutoriels

* [19 Git Tips For Everyday Use](https://www.alexkras.com/19-git-tips-for-everyday-use) - Une liste de commandes Git utiles qui prennent une ligne.
* [Atlassian's Git tutorial](https://www.atlassian.com/git/tutorials) Comprendre Git avec des tutos à partir du niveau débutant jusqu'au plus avancé.
* [Learn Git branching](https://learngitbranching.js.org/) Un tutoriel interfactif à base de branch/merge/rebase
* [Getting solid at Git rebase vs. merge](https://medium.com/@porteneuve/getting-solid-at-git-rebase-vs-merge-4fa1a48c53aa)
* [Git Commands and Best Practices Cheat Sheet](https://zeroturnaround.com/rebellabs/git-commands-and-best-practices-cheat-sheet) - Un aide-mémoire Git dans un article de blog avec plus d'explications
* [Git from the inside out](https://codewords.recurse.com/issues/two/git-from-the-inside-out) - Un tutoriel qui plonge dans le fonctionnement interne de Git
* [git-workflow](https://github.com/asmeurer/git-workflow) - Le tuto d'[Aaron Meurer](https://github.com/asmeurer) à propos de l'utilisation de Git pour contribuer aux dépôts open source
* [GitHub as a workflow](https://hugogiraudel.com/2015/08/13/github-as-a-workflow/) - Un point de vue intéressant sur l'utilisation de Github en tant que workflow, particulièrement avec des demandes de fusion vides.
* [Githug](https://github.com/Gazler/githug) - Un jeu pour apprendre les workflows Git les plus communs

## Scripts et Outils

* [firstaidgit.io](http://firstaidgit.io/) Un sélection recherchable des questions Git les plus souvent posées
* [git-extra-commands](https://github.com/unixorn/git-extra-commands) - Une collection de scripts Git supplémentaires très utiles
* [git-extras](https://github.com/tj/git-extras) - utilitaires GIT -- résumé de dépôts, repl, population de changelogs, pourcentage de commits par auteur·trice et plus
* [git-fire](https://github.com/qw3rtman/git-fire) - git-fire est un plugin Git qui vient en aide en cas d'urgence en ajoutant tous les fichier actuels, les commitant, et les poussant vers une nouvelle branche (afin d'éviter les conflits).
* [git-tips](https://github.com/git-tips/tips) - Des petites astuces Git
* [git-town](https://github.com/Originate/git-town) - Un support de flux de travail Git générique et de haut-niveau ! http://www.git-town.com

## Clients graphiques
* [GitKraken](https://www.gitkraken.com/) - Le client Git de luxe pour Windows, Mac & Linux
* [git-cola](https://git-cola.github.io/) - Un autre client Git pour Windows et macOS
* [GitUp](https://github.com/git-up/GitUp) - Un client graphique récent qui a une manière dogmatique de gérer les complications de Git
* [gitx-dev](https://rowanj.github.io/gitx/) - un autre client Git graphique pour macOS
* [Sourcetree](https://www.sourcetreeapp.com/) - La simplicité alliée à la puissance dans une belle interface gratuite. Pour Windows et Mac
* [Tower](https://www.git-tower.com/) - Un client graphique pour macOS (payant)
* [tig](https://jonas.github.io/tig/) - terminal text-mode interface for Git
* [Magit](https://magit.vc/) - Une interface pour Git implémentée en tant que paquet Emacs.
* [GitExtensions](https://github.com/gitextensions/gitextensions) - Une extension du shell, un plugin Visual Studio 2010-2015 et un outil de repo Git.
* [Fork](https://git-fork.com/) - Un client Git rapide et amical pour Mac (beta)
* [gmaster](https://gmaster.io/) - Un client Git pour Windows qui permet les fusions à 3 branches, l'analyse de refactorisation, un diff et merge sémantique (beta)
* [gitk](https://git-scm.com/docs/gitk) - Un client Git pour Linux qui permet d'avoir une vue simplifiée de l'état d'un repo.
* [SublimeMerge](https://www.sublimemerge.com/) - Un client ultra rapide et extensible qui donne la possibilité de faire des fusions à 3 branches, de la recherche avancée et de la colorisation syntaxique, en développement actif.
