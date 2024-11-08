---
id: ports-used-by-titan
title: Verwendete Netzwerkports
sidebar_label: Verwendete Netzwerkports
---

Titan verwendet die folgenden Netzwerkports. bei der Verwendung von Firewalls müssen diese entsprechend eingestellt werden.

Protokoll	| Port	 	| Adresse(n)					| Bemerkungen
------------|--------	|----------						|---------
TitanNet	|TCP 808	| Alle verfügbaren Adapter		| Titan Remote, TNPs, multi-user and backup.
HTTP		|TCP 4430	| Alle verfügbaren Adapter		| WebApi
SLP			|UDP 427	| Multicast 239.255.255.253		| Discovery - zum gegenseitigen Finden von Titan-Geräten.
Ping		|ICMP echo	| Alle aktuell genutzten Adapter	| Zur Überwachung der Netzwerkverbindung.
Art-Net		|UDP 6454	| Default: Alle verfügbaren Adapter	| |
sACN		|UDP 5568	| Multicast 239.255.0.0-239.255.249.255	| |
CITP		|UDP 4809/TCP	| Multicast 224.0.0.180		| Zur Kommunikation mit dem Capture Visualiser und mit Medienservern. Discovery erfolgt per UDP, dann die kommunikation per TCP.
RDMNet		|UDP 5569	|								| |
ProDJ Tap   |UDP 60000-60002, 65023-65535				| | Protokoll zur Kommunikation mit pioneer DJ-Geräten (von TC-Supply)
LiveDMX		|UDP 5584	| Multicast 239.184.0.0-239.184.249.255 | Für den internen Visualiser	
NTP			|UDP 1234	| Between TitanNet hosts		| nicht standardisierter NTP-Port
NDI			|UDP 5353	| Multicast zwischen NDI-Quellen und Panels	| mDNS für NDI zum Scannen für Streams
NDI			|UDP 49152-65535	| Zwischen NDI-Quellen und Panels | NDI Video-Streams