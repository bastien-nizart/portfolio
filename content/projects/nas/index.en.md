---
title: "Creation of a personal server"
date: 2022-12-25
draft: false
author: "Bastien Nizart"
description: "Creation (assembly and administration) of a personal server."
summary: "Creation (assembly and administration) of a personal server."
---
## Purpose

During the year preceding the realization of this project, I discovered NAS through more or less mainstream solutions *(Synology, Raspberry Pi 3)*. I immediately liked these solutions, but the cost of buying these solutions (Synology) or the lack of power (Raspberry pi 3) quickly made me consider another alternative: creating from A to Z.

So my goal was to create a server that met my expectations:
* **power**, so you don't have to choose between file backup and streaming
* **the price**, put 400-500€ why not, but not for an Intel Celeron
* **flexibility**, I didn't want to be limited by an OS

## Material

### Choice of parts

For those who don't know it yet, mounting your pc yourself is super economical.
So I was able to quickly prepare a configuration with a good power / price ratio

* RAM: 32 GB upgradable
* CPU: I9 11900 *purchased from aliexpress*
* 8TB (2*4TB) HDD storage
* 128 GB NVMe storage

### Assembly

The assembly of the server happened without any real worries.
In an hour or two all the pieces were assembled.

### Power consumption

When buying the processor, I had some concerns about the consumption of this machine.
In the end, I am at a few euros of electricity per month for a machine that remains on H24

This is probably due to the fact that the processor is not 100% active all the time, that it is most of the time inactive. And also that the chosen OS is optimized for this kind of machine.

## Software

### Operating system

The choice of operating system is just as, if not more, important than the choice of hardware.

Two options naturally came to mind:
- a linux distribution without GUI *(PopOS, Debian ...)*
- an os specially designed for servers

I finally chose Unraid, an operating system offering several interesting presets *(Raid, Cache, VMs)*

The installation was also very quick and smooth.

### Special configuration

So I configured this OS by putting:

- my NVMe SSD as cache
- my HDD disks in RAID
- my igpu as a graphics card not linked to the processor (Unraid plugin)

## Uses

On this server, a multitude of different software / services are therefore installed.

### Streaming

To replace the different streaming services (Netflix / Disney + ...) I decided to set up a complete pirate streaming service.

* **Plex / Emby**: which are software for streaming / encoding video files and dynamically recovering their metadata (free and pirated alternative to Netflix)
* **Sonarr / Radarr**: which will allow you to request video files *(series / movies)* from different torrent services, to name them correctly, and to configure favorite qualities.
* **Overseer**: it is a platform that links the user to sonnar / radarr. It allows to manage different accounts with different permissions to make content requests.
* **Jacket / Flaresolverr**: which will allow us to link sonnarr / radarr to torrent services and bypass cloudflare checks on them.

### Personal cloud

This server is my main storage server, thanks in particular to these tools:

* **Seafile**: open source alternative to Google Drive, ICloud... It is very light, fast to synchronize *(more than Nextcloud ;) )*.
* **RClone**: an rclone backup script copies my data 3 times a day to an encrypted 1Fichier server before being sent by rclone (1Fichier therefore has no way of reading this backup). I have this script in place in case of fire/server degradation.

### Downloads

To be able to automate the downloads on the server I put some services in place:

* **QBitTorrent**: torrent software via a vpn (configured upstream) allowing you to take advantage of the wired speed of a 10Gb/s fiber.
* **Apache WebDAV**: software allowing to create a mini WebDAV server, allowing me in particular to create own download links *(the link allowing to create my CV is managed by this software)*
* **Firefox**: an instance of firefox is also installed on this server. It allows me to download non-torrent resources graphically.

### Website

I also use this server as hosting for some web projects:

* **SftpGO**: software to emulate an sftp / ssh server. Which allows me to create users pointing to a specific folder.
* **Nginx**: alternative to Apache, allowing me to run web projects.
* **Matomo**: open source and self-hosted alternative to Google Analytics. This software allows me to anonymously collect data on the different sites I host. *(the visit data of this portfolio is managed with Matomo)*

### Setup

To facilitate the configuration of the server, I use different services:
* **NginxProxyManager**: a reverse proxy allowing me to link subdomains directly to services.
* **MariaDB**: an open source alternative to MySQL for managing server databases.

### Open Services

I have set up some services open (relatively) to external users:

* **PsiTransfer**: for transferring large files between machines/users using a link.
* **Excalidraw**: for the creation of diagrams / drawings / sketches.
* **Crafty**: which emulates several Minecraft game servers

## Conclusion

In conclusion, it has now been 2 years since I set up my homemade server, and I have absolutely no regrets.

It allowed me :

* to acquire many very varied skills and to better understand the server-client relationship
* save a nice amount of money (cloud, mail, streaming service, Minecraft server)
* to get a little more out of the centralized giants (Google, Microsoft)

I encourage anyone who found this article interesting to get started! Whether on an old pc, a raspberry pi, or a hand-mounted server.