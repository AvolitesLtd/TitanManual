---
id: version-13.0-networking
title: Networking the Console
sidebar_label: Networking the Console
original_id: networking
---

Titan unterstützt über die üblichen DMX-Buchsen hinaus etliche
weitere Wege der Kommunikation mit Beleuchtungs- und anderen Geräten;
diese werden im Folgenden beschrieben.

Verfügt das Pult bzw. Der Computer über mehrere Netzwerkanschlüsse, so [kann
DMX über jeden davon ausgegeben werden](system-settings/dmx-output-mapping.md#einrichten-der-dmx-ausgänge). 
Ganz exakt lässt sich in den DMX-Einstellungen festlegen: für jeden 
Netzwerkport lässt sich die DMX-Ausgabe explizit aktivieren oder deaktivieren.

Ebenso lassen sich Prozessor-Knoten einbinden (TitanNet), womit die
Gesamtzahl möglicher Universen bis auf 64 gesteigert werden kann. Auch
können mehrere Pulte per Netzwerk im Mehrbenutzerbetrieb sowie im
Backup-Modus betrieben werden.

> 	Am Ende des Kapitels werden in einem separaten Abschnitt die [Grundlagen
	der IP-Adressierung](networking/a-quick-guide-to-ip-addressing.md) 
	erklärt, was etwa für Art-Net eine wichtige Voraussetzung ist.

---
  
>	Netzwerke für Lichttechnik übertragen große Datenmengen. Um einen 
	zuverlässigen Betrieb zu gewährleisten, empfiehlt es sich, dafür ein 
	separates, physikalisch von anderen Netzwerken getrenntes Netzwerk 
	vorzusehen.

Zwar kann man das Licht-Netzwerk auch mit anderen Netzwerken verbinden, 
doch kann das zu Übertragungsproblemen sowohl bei der Licht- als auch 
bei der anderen Peripherie führen. In einem solchen Fall sollten unbedingt 
die [Hinweise zur IP-Adressierung](networking/a-quick-guide-to-ip-addressing.md) 
beachtet werden. Ferner ist zu beachten, dass intelligente Netzwerk-Switches 
ggf. Art-Net und ähnliche Protokolle blockieren können.
  