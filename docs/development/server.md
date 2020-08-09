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