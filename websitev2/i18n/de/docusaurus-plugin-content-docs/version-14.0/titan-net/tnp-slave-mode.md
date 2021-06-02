---
id: tnp-slave-mode
title: TNP im Slave-Betrieb
sidebar_label: TNP im Slave-Betrieb
original_id: tnp-slave-mode
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Normalerweise zeigt der TNP den 'Homescreen' mit Status und IP-Adressen
der beiden Netzwerkports. Am oberen Rand sind verschiedene Buttons
eingeblendet, über die Funktionen zum Konfigurieren des TNP erreichbar
sind. Dabei geht es mit <Keys.SoftKey>Exit</Keys.SoftKey> stets zurück in das vorige Menü.

![TNP Home Screen](/docs/images/TNP-Home-Screen.png)

Setup
-----

Im Setup-Menü lassen sich die IP-Adressen sowie generelle Eigenschaften
des Nodes einstellen (<Keys.SoftKey>Network Settings</Keys.SoftKey> bzw. <Keys.SoftKey>Node Settings</Keys.SoftKey> anklicken).

### Netzwerkeinstellungen

Die Netzwerkeinstellungen können wie folgt geändert werden:

1. Wählen Sie den gewünschten Netzwerkanschluss aus.\
   ![TNP - Setup - Network Settings Screen](/docs/images/TNP-Setup-Network-Settings-Screen.png)

2. Als nächstes lässt sich DHCP aktivieren oder deaktivieren, die
   IP-Adresse und Subnetz-Maske einstellen oder aber eine zufällige, aber
   Artnet-kompatible Adresse wählen (2.\*.\*.\* oder 10.\*.\*.\*).\
   ![TNP - Setup - Network Settings - IP Settings Screen](/docs/images/TNP-Setup-Network-Settings-IP-Settings-Screen.png)

3. Mit <Keys.SoftKey>Save Settings</Keys.SoftKey> werden die Einstellungen gespeichert.

### Node-Einstellungen

Als <strong>Node Settings</strong> (Node-Einstellungen) lässt sich derzeit die auf anderen Pulten
angezeigte Farbe des Geräts sowie der Verbindungslinien einstellen, was
die Identifizierung deutlich vereinfacht.

![TNP - Setup - Node Settings - Node Line Colour Screen](/docs/images/TNP-Setup-Node-Settings-Node-Line-Colour-Screen.png)

Lock -- den TNP sperren
-----------------------

Klickt man auf <Keys.SoftKey>Lock</Keys.SoftKey>, so kann auf einem Ziffernblock ein Code
eingegeben werden, mit dem das Gerät gesperrt wird. Zum Entsperren muss
der gleiche Code wieder eingegeben werden.

![TNP Lock Screen](/docs/images/TNP-Lock-Screen.png)

Tools
-----

Derzeit gibt es nur einen Eintrag im Tools-Menü: den <strong>Monitor</strong>. Dieser
erlaubt eine Übersicht über die aktuelle Auslastung des TNPs. Dabei kann
entweder <Keys.SoftKey>Cycle Time</Keys.SoftKey> oder <Keys.SoftKey>Render Time</Keys.SoftKey> dargestellt werden.

![TNP - Tools - Monitor - Cycle Time Screen](/docs/images/TNP-Tools-Monitor-Cycle-Time-Screen.png)


