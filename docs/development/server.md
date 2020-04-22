---
title: 'Server'
---

# Server

The server is a web application to created and manages modpacks and launcher configuration. The main goal is to simplify the update process for launcher's creators and server's owners.

## Languages

The server will use [NuxtJs](https://nuxtjs.org) and Typescript.

## Project structure

The server itself will be separated in 2 parts:

|   Part    |                                                                             Description                                                                              |
| :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Front-End |                                                This part is built with NuxtJS and will render all the user interface                                                 |
| Back-End  | This part is build with typescript and is loaded by NuxtJS. It first goal is to provide all API for the front and it second goal is to provide an API for launchers. |


## About the Front-End

The font-end need to be the simplest as possible for the final user. It use the framework [Tailwind CSS](https://tailwindcss.com) for the UI style.


## Road Map

::: warning
This road map can be subjet to changes.
:::

### Step 1: Setup project structure
- [ ] Init NuxtJS project
- [ ] ESLint+Prettier & Stylelint configuration
- [ ] Install Typescript runtime
- [ ] Setup Back-End with express based on MVC model
- [ ] Setup unit tests
- [ ] Setup travis configuration for unit tests and production build

### Step 2: Setup installation page
- [ ] Installation page on front-end site
- [ ] Back-end:
  - [ ] Routes for installation
  - [ ] User model
  - [ ] Setup database
  - [ ] Setup express router
  - [ ] Create system admin

### Step 3: Database models
- [ ] Modpack model
- [ ] Modpack history model to story all previous version of a modpack with linked changelogs
- [ ] Launchers model
- [ ] User collaboration relation model: this model is used to list collaboration access between users

### Step 4: User management
- [ ] Create an user
- [ ] List users on an admin panel
- [ ] Update an user
- [ ] Delete an user
- [ ] Change an user password
- [ ] Auth-guard middleware for back-end

### Step 5: Modpack management
- [ ] Create a modpack with the latest release as default version
- [ ] Delete a modpack
- [ ] Configure a modpack
  - [ ] Set the minecraft version
  - [ ] Set the forge version
  - [ ] Set the modpack logo
- [ ] Search list for curseforge mods
  - [ ] Show the selected mod from the output list
  - [ ] Install the selected mod
    - [ ] Allow the user to select the prefered version
    - [ ] Warn the user about dependancies to install
- [ ] Mark a mod has required or optional
- [ ] Manage the modpack version
  - [ ] Created a new release version
  - [ ] Delete a release version
  - [ ] Update a release version
  - [ ] List releases versions
- [ ] Install non-curseforge mods
- [ ] Edit mods configuration with a simplified UI
- [ ] Manage extra file in the modpack
- [ ] Allow an another to read/update a modpack (collaboration system)
  - [ ] Permission system

### Step 6: Launcher management
- [ ] Create a launcher instance
- [ ] Delete a launcher instance
- [ ] Select modpacks which will be used for a launcher
- [ ] Generate a token for the API

### Step 7: Launcher API
- [ ] Token guard middleware
- [ ] Get the list of modpacks with name, logo, description and version
- [ ] Get mods list from a modpack
- [ ] Get url for extra files
  - [ ] Get url for non-curseforge mods
  - [ ] Get url for mods configuration
  - [ ] Get url for all other file included in the modpack