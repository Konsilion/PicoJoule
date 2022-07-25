# Traitements et stockage du biogaz

---

Ce document est régi par les termes de la licence juridique [Creative Commons CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr) 

---

## **Compresser le biogaz**

**Tutoriel de fabircation d'un système de compression de biogaz domestique**

### Introduction

De nombreux méthaniseurs, quelques soient leur taille, stockent leur production de biogaz dans des grande poches à pression atmosphérique. Ce choix technologique est souvent retenu car très simple à mettre en œuvre. Cependant, il nécessite une place importante. En effet, il y a autant d’énergie dans 1m³ de biogaz que dans 0,6L d’essence. Les poches souples (en PVC ou en EPDM) sont souvent très grandes et des problématiques d’étanchéité peuvent survenir lors du vieillissement des matériaux. Enfin, le transport du gaz sous cette forme est très complexe et nécessite une compression sur le lieu d’utilisation du gaz.

Face à ces problématiques, Picojoule a développé une solution de compression et de stockage en bouteille. L’objectif était de concevoir un système avec du matériel facilement disponible et des techniques accessible au plus grand nombre.
Nous avons conçu un système qui permet de comprimer le biogaz dans des anciennes bouteilles de gaz grâce à un compresseur de frigo. Ainsi chaque bouteille de 26L peut contenir 210L de biogaz à une pression maximum de 8 bars (pression max du compresseur). Cette solution de stockage permet d’utiliser des pièces standard (bouteilles, détendeur , …) et de faire fonctionner des gazinière au biogaz sans électricité sur le lieu d’utilisation (le compresseur utilise de l’électricité mais ensuite on peut utiliser la bouteille en dehors d’un accès au réseau électrique). Une bouteille pleine peut faire fonctionner un feu pendant 1h30.

## **Materiels**

Présenté ici tous le matériels nécessaire à la réalisation d’un système de compression à partir d'un compresseur frigo.

### Liste du nécessaire

Matériel:
* Compresseur de frigo
* raccords cuivre – écrou laiton 1/2 pouce
* Té laiton 1/2 pouces
* Manomètre 0 -10 bars

Outils 
* Scie à métaux
* étau 
* téflon
* pince multiprise 
* brasure à l’étain : lampe à souder, décapant, étain

### Focus sur le compresseur

Le compresseur de réfrigérateur possède 3 conduits de gaz. L’entrée, la sortie du gaz frigorifique (ou fluide calorifique) et une sortie bouchée qui a permis de remplir le circuit lors de la fabrication du réfrigérateur.
Le compresseur est composé d’un piston entraîné par un moteur électrique qui baigne dans un bain d’huile. Le gaz rentre par le conduit d’entrée et se retrouve dans la cloche avec le bain d’huile puis, il est aspiré par le circuit d’admission jusqu’au piston de compression et enfin sort par le conduit de sortie. Le gaz se charge donc un peu en huile. Il existe donc une recirculation de cette huile sur les réfrigérateurs (avec un conduit très fin qui ramène l’huile à l’entrée. 
Pour la partie électrique, le compresseur est alimenté en 220V monophasé et il est commandé par un thermostat. Parmi les câbles qui partent vers le thermostat, il y a aussi les câbles d’alimentation de l’éclairage de réfrigérateur. 
Remarque : Normalement si vous branchez le compresseur dans l’état présenté ci-dessus, il ne devrait pas démarrer car le thermostat joue le rôle d’interrupteur et ainsi présenté, il est ouvert. Il faudra le court-circuiter et le remplacer par un vrai interrupteur.

**Astuce** : le diamètre du conduit de sortie est plus petit que celui d’entrée.


## **Fabrication du compresseur Biogaz**

### Électricité du compresseur

Nous allons commencer par modifier le circuit électrique pour le simplifier et démarrer le compresseur. En ouvrant le boîtier électrique vous devriez distinguer le câble d’alimentation (3 câbles : le neutre - bleu, la phase et la terre -jaune&vert). La terre doit être fixée sur la carcasse métallique du compresseur, le neutre doit être connecté au compresseur et la phase doit partir dans les câbles vers le thermostat. Un câble doit également arriver du thermostat et être branché au compresseur. 
L’objectif est de connecter le câble de la phase au câble qui est banché au compresseur.

### Circuit Basse Pression (BP)

Le branchement des flexibles à l’entrée du compresseur peut se faire par des colliers de serrage de plomberie si la pression dans les flexibles est inférieur à 2 bars. C’est notre cas ici car le compresseur aspire le biogaz stocké dans des poches à faible pression (10 à 20 mbars max).

### Circuit Haute Pression (HP)

Pour le circuit haute pression qui peut monter jusqu’à 8 bars, les colliers de serrage à vis ne sont pas suffisants. Il faut passer sur un montage plus résistant à savoir, soit de la tuyauterie cuivre avec des jonctions brasées soit des connectiques en laiton à visser.
Le circuit haute pression est constitué d’un manomètre et d’un raccord souple pour brancher les bouteilles. Le manomètre permet de surveiller la pression de remplissage des bouteilles.

### Brasure du cuivre

Les brasures du cuivre sont nécessaires pour joindre 2 tuyaux en cuivre. Elle nécessite une lampe à souder, du décapant, du papier à poncer et du laiton. Voici un tutoriel pour apprendre à brasser : [Vidéo à consulter](https://www.youtube.com/watch?v=9EyVw31yXWM)
Sur le schéma ci-dessus, on peut voire les 2 brasures nécessaires pour joindre le tube de sortie avec l’adaptateur de récupération (récupéré sur le circuit du réfrigérateur, image ci-dessous) et l’adaptateur avec le raccord droit laiton – cuivre.


### Adaptation pour bouteille butane métal

La dernière partie du compresseur est constituée de l’adaptateur qui permet de s’adapter aux différentes bouteilles. En effet, il existe différentes bouteilles de gaz que vous pouvez récupérer :

* Bouteilles métalliques : Raccord à viser, pas à gauche (pression max 10 ou 30 bars selon la marque)
* Bouteilles en fibres de verre : Raccord à clipser (pression max 30 bars) Attention, il existe 2 tailles

* Les bouteilles métalliques
Les bouteilles métalliques possèdent une entrée/sortie avec un filetage à gauche diamètre 1/2 pouces. Il est donc compliqué de trouver de raccord directement en 1/2 pouces pas à gauche. Il faut donc ruser. Voici quelques pistes :

* Utiliser un détendeur modifié : 
L’utilisation d’un détendeur classique pour connecteur les bouteilles n’est pas possible car ils possèdent une fonction anti-retour. Cette fonction assure la sécurité des bouteille en fonctionnement pour empêcher l’air de rentrer dans les bouteilles et de créer une atmosphère explosive (ATEX). Pour notre utilisation, il faut donc supprimer ce clapet anti-retour.
En effet, le détendeur nous sert ici seulement de raccord pour nous adapter à la connectique spéciale des bouteilles de gaz.
L’astuce que nous pratiquons actuellement est de « sacrifier » un détendeur pour le remplissage. L’objectif est de venir briser la tige support du clapet de détente (cf. Schéma ci-dessus). Cette manipulation permet de supprimer le clapet de détente et donc la fonction « clapet anti-retour » du détendeur ainsi que sa fonction de détendeur (malheureusement). Ainsi modifié, le « nouveau détendeur » nous fait office d’adaptateur pour remplir les bouteilles

* Réaliser un adaptateur

Nous avons testé 2 techniques, l’adaptateur n°1 F-F et l’adaptateur n°2 M-F

L’idée est de récupérer les écrous « pas à gauche » sur de 
vieux détendeurs en les découpant et de fabriquer des adaptations soit avec des raccords droit laiton-cuivre (qui ont des écrous libres) soit avec des raccords laiton MM
Dans le cas n°2, il faut garder le bout de tuyau découpé du détendeur pour le braser avec le raccord MM 1/2 pouce.

Vous trouverez sur le marché des lyres de raccordement pour 10 à 20€ qui font très bien l’affaire. Cependant, il est très difficile d’en trouver en récupération (image ci-contre)


* Les bouteilles en fibre de verre

Pour les détendeurs à clipser (image ci-contre), nous n’avons pas encore trouvé d’adaptateur fait maison pour remplir les bouteilles. Nous opérons donc comme vu précédemment pour modifier les détendeurs et les convertir en raccords.
Ainsi modifié, le « nouveau détendeur » nous fait office d’adaptateur pour remplir les bouteilles de gaz en fibre de verre (beaucoup plus légères)



## **Pistes d’améliorations**

Avoir un chargeur d’huile en entrée pour rajouter de l’huile facilement

Avoir une recirculation de l’huile entre la sortie et l’entrée


## **Conclusion**

Actuellement avec ce type de compresseur, il est possible de remplir des bouteilles de butane de 26L avec du Biogaz à une pression max de 10 bars ce qui correspond à une autonomie de 1h30-2h sur un feu de cuisine.
Pour améliorer la quantité d’énergie stockée et dépasser les 1h30 de cuisson par bouteille, nous envisageons 2 améliorations majeurs :

* Augmenter la pression de stockage : la plupart des bouteilles de gaz ont une pression admissible de 30 bars. En changeant de compresseur (les compresseurs de climatisation automobile montent à 30bars) nous espérons tripler la quantité de gaz dans les bouteilles.
* Purifier le gaz : Le biogaz est constitué en moyenne de 40 % de CO2 et de 60 % de méthane. Or, seul le méthane nous intéresse pour la combustion. Il faudrait réussir à enlever le CO2 pour avoir un gaz plus concentré en méthane. Ainsi pour la même volume de gaz, on peut espérer avoir 1,7 fois plus d’énergie.

En cumulant ces 2 solutions, il est possible d’obtenir entre 5 et 6 fois plus d’énergie dans les mêmes bouteilles ce qui représente entre 7 et 9h de cuisson ce qui commence à devenir très intéressant.










## **Bibliographie**

Voici une liste des sources d'informations utilisées pour cet article. Elles sont complémentaires de l'expertise de Picojoule.

* **Nom de la source** | *Auteur et autrice* | [en savoir plus]()

---

## **Elles et ils ont participés à cette documentation**

* [PicoJoules](https://picojoule.fr)
* Nicolas Brémond - [Konsilion ingénierie](https://konsilion.fr)

---

###### Note de bas de pages

[^1]: Retrouver [nos documentations](https://konsilion.fr)

<style>
  .md-content__button {
    display: none;
  }
</style>