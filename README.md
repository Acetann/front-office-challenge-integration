# Challenge Front: JO 2020

L'objectif de ce challenge est de reproduire la page suivante avec les élèments de la bibliotèque [Ant Design](https://ant.design/components/overview/).

![](./pictures/JOPage.png)

Le défi est de ne pas utiliser de CSS (ou très peu) pour atteindre ce résultat. 

## Data

Toute la data nécessaire se trouve dans le fichier `data.json`.

## Filtre et prochains évènements

![](./pictures/NextEvent.png)

Cette section contient un `Select` qui regroupe les différents sports qui se trouvent dans les `nextEvents`.
La sélection que tu feras dans ce sélecteur va influencer l'affichage des prochains évènements qui s'affichent en dessous. 

La liste affiche 3 évènements à la fois. Deux boutons sont présents pour passer aux 3 suivants ou aux 3 précédents.
Ils devront être désactivés si il n'y a pas d'évènements (avant ou après).

![](./pictures/NextEvent2.png)

Si aucun évènement ne ressort, afficher ceci:
![](./pictures/empty.png)

> Le format de la date est donnée en Timestamp. [Moment.js](https://momentjs.com) sera ton ami.

## Médailles

![](./pictures/Table.png)

Ici l'objectif est afficher un tableau qui affiche le nombre de médailles gagnées par chaque pays. Il sera par défaut trié par le total de médailles, dans l'ordre décroissant. Il sera aussi possible de le trier par la colonne `Or`, `Argent` et `Bronze`.

# Partage du résultat

Concernant le partage du résultat, il est préférable de travailler sur un fork de ce repo ![](./pictures/Fork.png) puis de m'envoyer son lien sur tristan@monqualiticien.com.

Tu as une semaine pour réaliser cette page. 

N'hésite pas à me demander si il y a un point que tu ne comprends pas. 

Regarde bien les composants proposés par [Ant Design](https://ant.design/components/overview/) et réalise cette page avec comme but de te rapprocher au maximum de ce résultat. 

Enjoy!




