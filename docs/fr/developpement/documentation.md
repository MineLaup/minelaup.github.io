---
title: 'Documentation'
---

# Documentation

La documentation est le site web sur lequel vous êtes actuellement. Il regroupe toute les informations et explications sur le projet.

## Traductions

Le site Web a un support d'internationalisation, donc si vous voulez avoir les documentations dans votre propre langue, vous pouvez faire un fork pour ajouter vos traductions et créer une Pull Request. Si vos modifications réussissent l'examen, elles seront ajoutées au référentiel principal.

### Les étapes pour créer une traduction

La structure du prjet est la suivante : 

```
- docs      <-- le fichier de documentation actuel
  - .vuepress     <-- Le dossier VuePress
    - config.js   <--| Le ficher de configuration où est le projet
                     | la configuration et quelque autres documentations
  - developpement     <--| Les pages par défaut du site
  - guide           <--| 
  - README.md       <--|
  - fr      <-- Le dossier de la traduction Française
    - Des autres dossiers basés sur la structure principale
  - ...
```