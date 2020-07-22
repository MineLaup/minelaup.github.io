---
title: 'Client'
---

# Client

## Language informatique

La partie "client" utilise le language Typescript.

## Structure de projet

::: Attention
La structure du projet peut être soumise à certains changements.
:::

### Première étape : Créer le projet
- [ ] Installer le module npm.
- [ ] Configurations des modules ESLint et Prettier
- [ ] Installer Typescript.
- [ ] Tests de l’unité de configuration
- [ ] Configuration de travis pour les tests unitaires et la production

### Etape 2 : La configuration de base
- [ ] Classe principale de la bibliothèque
- [ ] Obtenir les informations du launcher depuis l'API avec le token

### Etape 3: Le modpack
- [ ] Obtenir la list des modpacks disponibles
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
- [ ] Identifier le joueur
  - [ ] Identifier avec l'API officielle ce Mojang
  - [ ] Identifier comme compte hors ligne
  - [ ] Identifier avec un service d’authentification personalisé
- [ ] Fournir une option pour personnaliser la mémoire dédiée au jeu
- [ ] Lancer Minecraft