---
id: ports-used-by-titan
title: Verwendete Netzwerkports
sidebar_label: Verwendete Netzwerkports
---

Titan verwendet die folgenden Netzwerkports. bei der Verwendung von Firewalls müssen diese entsprechend eingestellt werden.

Anwendung	       		| Port	 	| Adresse(n)					| Bemerkungen
------------       		|--------	|----------						|---------
Alle (bis Titan v18)	|TCP 808	| Alle verfügbaren Adapter		| Titan Remote, TNPs, Multiuser und Backup.
TitanNet (bis Titan v18)|TCP 50052  | Alle verfügbaren Adapter	    | Synergy, TitanNet
Synergy  				|TCP 50051  | Alle verfügbaren Adapter    	| Synergy, TitanNet, Titan Media Node, Prism
TitanNet*    			|TCP 4442   | Alle verfügbaren Adapter      | Verbindungen von der Titan-Engine
Console Engine*      	|TCP 4440   | Connections from console      | Verbindungen von UI, Titan Remote, Multiuser und Backup.
TitanNet Processor Engine |TCP 4441 | Alle verfügbaren Adapter	    | Verbindungen von UI und der Titan-Engine
CITP Active Fixture Service* |TCP 4444 | Alle verfügbaren Adapter	| Verbindungen von UI und der Titan-Engine
CITP    				|UDP 4809/TCP	| Multicast 224.0.0.180		| Kommunikation mit dem Capture Visualiser und Medienservern. Discovery erfolgt per UDP, dann die Kommunikation per TCP.
WebAPI		        	|TCP 4430	| Alle verfügbaren Adapter 		| WebApi
SLP						|UDP 427	| Multicast 239.255.255.253		| Discovery - zum gegenseitigen Finden von Titan-Geräten.
Ping					|ICMP echo	| Alle aktuell genutzten Adapter	| Zur Überwachung der Netzwerkverbindung.
Art-Net					|UDP 6454	| Default: Alle verfügbaren Adapter	| |
sACN					|UDP 5568	| Multicast 239.255.0.0-239.255.249.255	| |
RDMNet					|UDP 5569	|								| |
ProDJ Tap   			|UDP 60000-60002, 65023-65535				| | Protokoll zur Kommunikation mit pioneer DJ-Geräten (von TC-Supply)
LiveDMX					|UDP 5584	| Multicast 239.184.0.0-239.184.249.255 | Für den internen Visualiser	
NTP						|UDP 1234	| Between TitanNet hosts		| nicht standardisierter NTP-Port


 \* Neuer Port ab Titan v19. Alle anderen Angaben gelten für alle Versionen.