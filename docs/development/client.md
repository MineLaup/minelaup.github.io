---
title: 'Client'
---

# Client

## Languages

The client will use Typescript.

## Road map

::: warning
This road map can be subject to changes.
:::

### Step 1: Setup the project
- [ ] Init the npm module
- [ ] ESLint+Prettier configuration
- [ ] Install typescript
- [ ] Setup unit tests
- [ ] Setup travis configuration for unit tests and production build

### Step 2: Setup base
- [ ] Library main class
- [ ] Get launcher information from API with token

### Step 3: Modpack
- [ ] Get modpacks list available
- [ ] Get modpack's informations (version, name, description, picture)
- [ ] Get modpack's mods list (required mods and optional mods)

### Step 4: Download and Install
- [ ] Download mods from curseforge
- [ ] Download third-party mods
- [ ] Download configuration from server
- [ ] Download extra files from server
- [ ] Download Minecraft
- [ ] Download and install Forge

### Step 5: Launch the game
- [ ] Authenticate the player
  - [ ] Authenticate with official Mojang API
  - [ ] Authenticate as offline account
  - [ ] Authenticate with custom auth service
- [ ] Provide an option to customize the memory dedicated for the game
- [ ] Launch Minecraft