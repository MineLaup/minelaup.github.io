---
title: 'Documentation'
---

# Documentation

The documentation is the website where you are currently. It regroup all informations and explanations about the projet.

## Translations

The website have an internationalisation support, so if you want to have the documentations in your own language, you can make a fork to add your translations and create a Pull Request. If your modifications pass the review then they will be added to the main repository.

### Step to create a translation

The project structure is the following:

```
- docs      <-- the current documentation folder
  - .vuepress     <-- The vuepress folder
    - config.js   <--| The config file which contain the project
                     | configuration and some translations
  - development     <--| The default pages of the website
  - guide           <--| 
  - README.md       <--|
  - fr      <-- The folder of the french translation
    - Other folders based on the default structure...
  - ...
```