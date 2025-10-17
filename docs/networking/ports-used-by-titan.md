---
id: ports-used-by-titan
title: Network Ports used by Titan
sidebar_label: Network ports used by Titan
---

Titan uses the following ports over the network. If your network
includes firewalls you might need to know these so you can set up rules for them.

Application	        | Port	 	| Address						| Notes
------------        |--------	|----------						|---------
All (pre v19 only)	|TCP 808	| All available adapters		| Titan Remote, TNPs, multi-user and backup.
Synergy (pre v19 only)  |TCP 50052  | All available adapters    | Synergy, TitanNet
Synergy*  |TCP 50051  | All available adapters    | Synergy, TitanNet
Console Engine*      |TCP 4440   | All available adapters        | Connections from UI, Titan Remote, multi-user and backup.
TitanNet Processor Engine* |TCP 4441 | All available adapters    | Connections from UI and console engine
Titan Media Node*    |TCP 4442   | All available adapters        | Connections from console engine
CITP Active Fixture Service* |TCP 4444 | All available adapters  | Connections from UI and console engine
CITP (pre v19 only)	|UDP 4809/TCP	| Multicast 224.0.0.180		| Used for communication with Capture Visualiser and media servers. Discovery done by multicast UDP then negotiates TCP connection
WebAPI		        |TCP 4430	| All available adapters		| WebApi
SLP			|UDP 427	| Multicast 239.255.255.253		| Used to discover TitanNet devices on the network.
Ping		|ICMP echo	| Any adapters that are in use	| Monitors connection to TitanNet devices.
Art-Net		|UDP 6454	| By default all wired adapters	| |
sACN		|UDP 5568	| Multicast 239.255.0.0-239.255.249.255	| |
RDMNet		|UDP 5569	|								| |
ProDJ Tap   |UDP 60000-60002, 65023-65535				| | Protocol for getting data from Pioneer DJ equipment by software now known as TC-Supply
LiveDMX		|UDP 5584	| Multicast 239.184.0.0-239.184.249.255 | Used for internal Visualiser DMX data	
NTP			|UDP 1234	| Between TitanNet hosts		| Non-standard NTP port



 \* New port for v19 and above. Otherwise applies to all versions.