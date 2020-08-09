---
title: 'Serveur'
---

# Serveur

Le serveur est une application web pour créer et gérer les modpacks et la configuration du laucher. L'objectif principal est de simplifier le processus de mise à jour pour les créateurs du launcher Minecraft et les propriétaires de serveurs Minecraft.

## Language

Le serveur va utiliser [NuxtJs](https://nuxtjs.org) et Typescript.

## La structure du projet

Le serveur en lui même est séparé en deux parties :

|  Parties  |                                                                                                  Description                                                                                                  |
| :-------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Front-End |                                                               Cette partie a été faite avec NuxtJS et va rendre toute l'interface utilisateur.                                                                |
| Back-End  | Cette partie est construite avec typescript et est lancée avec NuxtJS. . Son premier objectif est de fournir toutes les API pour le front et son deuxième objectif est de fournir une API pour les launchers. |


## A propos du Front-End

Le front-end doit être le plus simple possible pour l'utilisateur final. Il utilise le framework [Tailwind CSS](https://tailwindcss.com) pour le style UI.