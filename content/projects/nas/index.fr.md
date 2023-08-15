---
title: "Création d'un serveur personnel"
date: 2022-12-25
draft: false
author: "Bastien Nizart"
tags: ["network","nas","homemade"]
description: "Création (montage et administration) d'un serveur personnel."
summary: "Création (montage et administration) d'un serveur personnel."
---

## Objectif

Durant l'année précédant la réalisation de ce projet, j'ai découvert les NAS au travers de solutions plus ou moins grand public *(Synology, Raspberry Pi 3)*. Ces solutions m'ont tout de suite plu, mais le coût à l'achat de ces solutions (Synology) ou le manque de puissance (Raspberry pi 3) m'ont rapidement fait envisager une autre alternative : la création de A à Z.

J'avais donc pour objectif de créer un serveur répondant à mes attentes : 
* **la puissance**, pour ne pas choisir entre de la sauvegarde de fichier et du streaming
* **le prix**, mettre 400-500€ pourquoi pas, mais pas pour un Intel Celeron
* **la flexibilité**, je ne voulais pas être limité par un OS

## Matériel

### Choix des pièces

Pour ceux qui ne le savent pas encore, monter son pc soit même est super économique. 
J'ai donc pu rapidement préparer une configuration avec un bon ratio puissance / prix

* RAM : 32 go évolutif
* Processeur : I9 11900 *acheté sur aliexpress*
* 8 TO (2*4 TO) de stockage HDD 
* 128 GO de stockage NVMe

### Montage 

Le montage du serveur s'est passé sans réels soucis.
En une heure ou deux toutes les pièces étaient assemblées.

### Consommation électrique

En achetant le processeur, j'ai eu quelques craintes concernant la consommation de cette machine.
Au final, je suis à quelques euros d'électricité par mois pour une machine qui reste allumée H24

Cela est sans doute dû au fait que le processeur n'est pas actif à 100% tout le temps, qu'il est la majeure partie du temps inactif. Et également que l'OS choisi est optimisé pour ce genre de machine.

## Logiciel

### Système d'exploitation

Le choix du système d'exploitation est tout aussi, voire encore plus, important que le choix du matériel. 

Deux options me venaient naturellement à l'esprit : 
- une distribution linux sans interface graphique *(PopOS, Debian ...)*
- un os spécialement conçu pour les serveurs

J'ai finalement choisi Unraid, un système d'exploitation offrant plusieurs prés-configurations intéressantes *(Raid, Cache, VMs)*

L'installation a également été très rapide et sans accros

### Configuration particulière

J'ai donc configuré cet OS en mettant :

- mon SSD NVMe en tant que cache 
- mes disques HDD en RAID
- mon igpu en tant que carte graphique non liée au processeur (plugin Unraid)

## Utilisations

Sur ce serveur, sont donc installés une multitude de logiciels / services différents

### Streaming

Pour remplacer les différents services de streaming (Netflix / Disney + ...) j'ai décidé de mettre en place un service de streaming pirate complet.

* **Plex / Emby** : qui sont des logiciels permettant de streamer / encoder des fichiers vidéos et de récupérer dynamiquement leurs métadonnées (alternative gratuite et pirate à Netflix)
* **Sonarr / Radarr** : qui vont permettre de demander des fichiers vidéo *(séries / films)* à différents services de torrent, de correctement les nommer, et de configurer des qualités favorites.
* **Overseer** : c'est une plateforme qui fait le lien entre l'utilisateur et sonnar / radarr. Il permet de gérer différents comptes avec différentes permissions pour faire les demandes de contenu.
* **Jacket / Flaresolverr** : qui vont nous permettre de lier sonnarr / radarr aux services de torrent et de by-passer les vérifications cloudflare sur ces derniers.

### Cloud personnel

Ce serveur est mon serveur de stockage principal, grâce notamment à ces outils :

* **Seafile** : alternative open source à Google Drive, ICloud ... Il est très léger, rapide à synchroniser *(plus que Nextcloud ;) )*.
* **RClone** : un script de backup rclone copie 3 fois par jour mes données sur un serveur 1Fichier crypté avant envoi par rclone (1Fichier n'a donc aucun moyen de lire cette backup). J'ai mis ce script en place en cas d'incendie / de dégradation du serveur.

### Téléchargements

Pour pouvoir automatiser les téléchargements sur le serveur j'ai mis quelques services en place :

* **QBitTorrent** : logiciel de torrent passant par un vpn (configuré en amont) permettant de profiter du débit câblé d'une fibre 10Gb/s.
* **Apache WebDAV** : logiciel permettant de créer un mini serveur WebDAV, me permettant notamment de créer des liens de téléchargements propres *(le lien permettant de créer mon cv est géré par ce logiciel)*
* **Firefox** : une instance de firefox est également installé sur ce serveur. Elle me permet de télécharger graphiquement des ressources non-torrent.

### Web

J'utilise également ce serveur comme hébergement pour certains projets web :

* **SftpGO** : logiciel permettant d'émuler un serveur sftp / ssh. Ce qui me permet de créer des utilisateurs pointant sur un dossier spécifique.
* **Nginx** : alternative à Apache, me permettant de faire fonctionner les projets web.
* **Matomo** : alternative open source et auto-hébergé à Google Analytics. Ce logiciel me permet de récolter de manière anonyme des données sur les différents sites que j'héberge. *(les données de visite de ce portfolio sont géré avec Matomo)* 

### Configuration

Pour faciliter la configuration du serveur, j'utilise différents services :
* **NginxProxyManager** : un reverse proxy me permettant de lier des sous-domaines directement à des services.
* **MariaDB** : une alternative open source à MySQL pour la gestion des bases de données du serveur.

### Services Ouverts

J'ai mis en place quelques services ouverts (relativement) aux utilisateurs externes :

* **PsiTransfer** : pour le transfert de gros fichiers entre machines / utilisateurs à l'aide d'un lien.
* **Excalidraw** : pour la création de schéma / dessin / croquis.
* **Crafty** : qui émule plusieurs serveurs de jeux Minecraft

## Conclusion 

En conclusion, cela fait maintenant 2 ans que j'ai monté mon serveur homemade, et je ne regrette absolument pas. 

Cela m'a permis : 

* d'acquérir de nombreuses compétences très variées et de mieux comprendre la relation serveur - client
* d'économiser une jolie somme d'argent (cloud, mail, service de streaming, serveur Minecraft)
* de me sortir encore un peu plus des géants centralisés (Google, Microsoft)

J'encourage toutes personnes ayant trouvé cet article intéressant à se lancer soi même ! Que ce soit sur un vieux pc, un raspberry pi, ou un serveur monté-main. 


