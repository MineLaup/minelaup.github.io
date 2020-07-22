---
title: 'Client'
---

# Client

## Language informatique

La partie "client" utilise le language Typescript.

## Structure de projet

::: warning
La structure du projet peut être soumise à certains changements.
:::

### Première étape : Créer le projet
- [ ] Installer le module npm.
- [ ] Configurations des modules ESLint et Prettier
- [ ] Installer Typescript.
- [ ] Configuration des tests unitaires
- [ ] Configuration de travis pour les tests unitaires et la production

### Etape 2 : La configuration de base
- [ ] Classe principale de la library
- [ ] Obtenir les informations sur le launcher depuis l'API avec le token

### Etape 3: Le modpack
- [ ] Obtenir la liste des modpacks disponibles
- [ ] Obtenir les informations des modpacks (la version, le nom, la description, l'image)
- [ ] Obtenir la liste des mods du modpack (les mods requis et les mods optionels)

### Etape 4 : Télécharger et installer
- [ ] Télécharger les mods depuis curseforge
- [ ] Télécharger les mods tiers
- [ ] Télécharger la configuration depuis le serveur
- [ ] Télécharger les fichers supplémentaires depuis le serveur
- [ ] Télécharger Minecraft
- [ ] Télécharger et installer Minecraft Forge

### Etape 5 : Lancer le jeu
- [ ] Authentifier le joueur
  - [ ] Authentifier avec l'API officielle ce Mojang
  - [ ] Authentifier comme compte hors ligne
  - [ ] Authentifier avec un service d’authentification personalisé
- [ ] Fournir une option pour personnaliser la mémoire dédiée au jeu
- [ ] Lancer Minecraft