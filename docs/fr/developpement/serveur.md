---
title: 'Serveur'
---

# Serveur

Le serveur est une application web pour créer et gérer les modpacks et la configuration du laucher. L'objectif principal est de simplifier le processus de mise à jour pour les créateurs du launcher Minecraft et les propriétaires de serveurs Minecraft.

## Language

Le serveur va utiliser [NuxtJs](https://nuxtjs.org) et Typescript.

## La structure du projet

Le serveur en lui même est séparé en deux parties :

|   Parties    |                                                                             Description                                                                              |
| :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Front-End |                                                Cette partie a été faite avec NuxtJS et va rendre toute l'interface utilisateur.                           |
| Back-End  | Cette partie est construite avec typescript et est lancée avec NuxtJS. . Son premier objectif est de fournir toutes les API pour le front et son deuxième objectif est de fournir une API pour les launchers. |


## A propos du Front-End

Le front-end doit être le plus simple possible pour l'utilisateur final. Il utilise le framework [Tailwind CSS](https://tailwindcss.com) pour le style UI.


## Structure du projet

::: warning
La structure du projet peut être soumise à certains changements.
:::

### Etape 1: Installer la structure du projet
- [x] Initialiser le projet NuxtJS
- [x] Configurer ESLint et de Prettier & Stylelint
- [x] Installer le runtime Typescript
- [x] Configurer le Back-End avec expresse basé sur le modèle MVC
- [x] Configurer les tests unitaires
- [x] Configurer travis pour les tests unitaires et la construction de la production

### Etape 2: Configurer la page d'installation
- [x] Installation de la page d'installation sur le front-end
- [x] Back-end:
  - [x] L'intallation
  - [x] Le modèle de l'utilisateur
  - [x] Configurer la base de donnée
  - [x] Configurer express
  - [x] Créer un système d'administrateur

### Etape 3: Le modèle de base de donnée
- [x] Le modèle de modpack
- [x] Modèle d'historique de Modpack pour montrer toutes les versions précédentes d'un modpack avec changelog lié
- [x] Le modèle du launchers
- [x] Modèle de la collaboration entre les utilisateur: ce modèle est utilisé pour répertorier les accès de la collaboration entre les utilisateurs

### Etape 4: La gestion des utilisateurs
- [x] La page d'authentification
- [x] Créer un utilisateur
- [x] Lister les utilisateurs sur le panel de l'administrateur
- [x] Mettre à jour un utilisateur
- [x] Supprimer un utilisateur
- [x] Changer le mot de passe d'un utilisateur
- [x] Intergiciel Auth-Guard pour le back-end
- [x] Mettre un mode foncé et clair

### Etape 5: La gestion de modpack
- [ ] Créer un modpack avec la dernière version de celui ci comme version par défaut
- [ ] Supprimer un modpack
- [ ] Configurer un modpack
  - [ ] Configurer la version de Minecraft
  - [ ] Autoriser les client customs (mcp, optifine, ...)
  - [ ] Configurer la version de forge
  - [ ] Configurer le logo du modpack
- [ ]  Chercher des mods sur curseforge
  - [ ] Afficher les mods sélectionnés sur l'écran
  - [ ] Installer le mod sélectionné
    - [ ] Autoriser l'utilisateur à séléctionner sa version préférée
    - [ ] Avertir l'utilisateur des dépendances à installer
- [ ] Dire si un mod est requis ou optionel
- [ ] Gérer la version du modpack
  - [ ] Créer une version définitive
  - [ ] Supprimer une version définitive
  - [ ] Mettre à jour une version définitive
  - [ ] Lister toute les version définitives
- [ ] Installer les mods non curseforge
- [ ] Editer la configuration des mods avec un UI simplifié
- [ ] Gérer les fichiers supplémentaires dans le modpack
- [ ] Autoriser un autre utilisateur à regarde/mettre à jour un modpack (un sytème de collaboration)
  - [ ] Système de permission

### Etape 6: Gérer le  launcher
- [ ] Créer une instance de launcher
- [ ] Supprimer une instance de launcher
- [ ] Sélectionner un modpack qui va être utiliser pour le launcher.
- [ ] Générer un token pour l'API

### Etape 7: L'API du launcher
- [ ] Intergiciel sécurisant les tokens
- [ ] Obtenir la liste des modpacks avec le nom, le logo, la description et la version
- [ ] Obtenir la liste des mods d'un modpack
- [ ] Obtenir les url des fichiers supplémentaires
  - [ ] Obtenir l'url des mods non curseforge
  - [ ] Obtenir l'url de la configuration des mods
  - [ ] Obtenir l'url de tous les autre fichiers inclus dans le modpack
