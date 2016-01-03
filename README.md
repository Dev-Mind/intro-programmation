# Implémentation d'un algorithme simple

Le but de ce projet est de fournir un cadre tout simple pour aider des adolescents à appréhender la programmation au cours d'une session de 30 minutes. Cette session très courte n'est pas de comprendre les méandres de la programmation mais de voir qu'en quelques lignes n'importe qui peut coder quelque chose qui marche.

Au niveau visuel le plus parlant est ce que l'on trouve dans un navigateur. Les sources de ce projet seront certainement mise en igne dans un jsfiddle ou autre outil du même genre.

![Dev-Mind](/src/assets/img/logo_1500.png)

**Cible ** : classe de troisième (l'agorithme a été préalablement présenté par le prof de math en classe)

## Installation

Pour que ce projet puisse être lancé vous devez disposer en local de l'application [NodeJS](https://nodejs.org/en/) (le lien permet d'accéder au site permettant de télécharger l'application). Si vous voulez utiliser cet exemple n'hésitez pas à me contacter si vous voulez plus d'informations.

Notre application est une application Web. Comme pour un site normal elle va s'exécuter non pas directement sur votre ordinateur mais au sein d'un logiciel que l'on appelle navigateur Internet (IE, Edge, Firefox, Chrome, Opéra, Safari...).

Un navigateur Internet sait interpréter 3 types de fichiers
* des pages HTML qui permettent de spécifier les éléments, les composnts que l'on veut afficher (texte, champs de saisie, images, vidéos....)
* des fichiers Javascript qui permettent d'interagir avec ces fichiers HTML. Le HTML est un langage de description (il n'exécute aucune opération en dehors de l'affichage). Le langage Javascript est un vrai langage de programmation qui permet de faire exécuter toutes sortes d'instructions à votre ordinateur
* des fichiers CSS qu'on appelle des feuilles de styles. Ces fichiers permettent de spécifier comment les élements seront affichés, animés....

Pour lancer l'application mettez vous à la racine du projet et lancez la commande

```
node server.js
```

Si tout se passe bien vous pouvez maintenant ouvrir l'adresse web `http://localhost:9000` dans votre navigateur Internet favori.