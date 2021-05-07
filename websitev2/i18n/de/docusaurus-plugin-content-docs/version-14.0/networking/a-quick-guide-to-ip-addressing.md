---
id: a-quick-guide-to-ip-addressing
title: A quick guide to IP addressing
sidebar_label: A quick guide to IP addressing
original_id: a-quick-guide-to-ip-addressing
---

import Keys from '@site/src/components/key.ts';

In diesem Abschnitt wird versucht, die Grundlagen der IP-Adressierung
und weiteres Wissenswerte beim Aufbau von Netzwerken zur Lichtsteuerung
übersichtlich darzustellen.

IP-Adressen werden üblicherweise im Format `w.x.y.z` geschrieben, wobei
`w`, `x`, `y` und `z` für Zahlen zwischen 0 und 255 stehen; ein Beispiel wäre
etwa die Adresse `192.168.0.1`. Jedes Gerät in einem Netzwerk muss
eine eindeutige (in diesem Netzwerk einmalige) IP-Adresse haben. Dies
ist ein ähnliches Konzept wie bei DMX, wo ebenfalls jedes Gerät eine
eindeutige Startadresse benötigt.

Einstellen der IP-Adresse
-------------------------

Bei den Titan-Pulten gibt es eine Funktion, die üblichen IP-Adressen
schnell einstellen zu können; siehe [voriger Abschnitt](controlling-fixtures-over-a-network.md#einstellen-der-ip-adresse-des-pultes).

Es empfiehlt sich, die IP-Adressen sämtlicher Pulte und angeschlossener
Geräte zu überprüfen. Berücksichtigen Sie, dass einige Art-Net-Geräte
feste Adressen im Bereich `2.x.x.x` verwenden, so dass in diesem Fall das
Pult und ggf. alle anderen Geräte manuell auf eine Adresse im gleichen
Bereich eingestellt werden müssen.

Subnet Masks - Subnetzmasken
----------------------------

Diese sollten möglichst einfach gehalten werden. Sämtliche Geräte
innerhalb eines Netzwerkes, die miteinander kommunizieren sollen, müssen
auf die gleiche Subnetzmaske eingestellt sein. Diese Maske bestimmt,
welcher Teil der IP-Adresse in diesem Netzwerk die eindeutige
Gerätebezeichnung darstellt. Ist ein bestimmter Teil der Subnetzmaske 0,
so muss der entsprechende Teil der IP-Adresse für jedes Gerät eindeutig
(einmalig) sein. Ist ein bestimmter Teil der Maske 255, so muss der
betreffende Teil der IP-Adresse bei allen Geräten gleich sein.

Auswahl der IP-Adresse und Subnetzmaske
---------------------------------------

Dies ist der komplizierteste Teil bei der Einrichtung eines Netzwerkes,
da hierbei zu berücksichtigen ist, welche Geräte und Protokolle im
Netzwerk verwendet werden, und welche IP-Adressen frei vergeben werden
oder bereits festgelegt sind. Im Folgenden sind einige beispielhafte
Szenarien aufgeführt. *Für das Funktionieren kann keine Garantie
übernommen werden, doch wählen Sie als Startwert am besten das Beispiel,
welches Ihrem Netzwerk am nächsten kommt*.

### Titan-Pult und TNP, alle Ausgänge Standard-DMX

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `192.168.1.30`    | `255.255.255.0`
TNP               | `192.168.1.31`    | `255.255.255.0`

### Titan-Pult steuert Geräte über Art-Net (und ggf. über DMX)

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `2.100.100.100`   | `255.0.0.0`
Art-Net-Geräte    | `2.x.y.z` <strong>\</strong>*  | `255.0.0.0`

*Alternativ:*

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `10.100.100.100`  | `255.0.0.0`
Art-Net-Geräte    | `10.x.y.z` <strong>\</strong>* | `255.0.0.0`

<strong>\</strong>* *Dabei sind die Kombinationen von `x`, `y` und `z` für jedes Gerät einmalig zu
vergeben.*

### Titan-Pult und TNP, Ausgang über Art-Net (und DMX)

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `2.100.100.100`   | `255.0.0.0`
TNP               | `2.100.100.101`   | `255.0.0.0`
Art-Net-Geräte    | `2.x.y.z` <strong>\</strong>*  | `255.0.0.0`

*Alternativ:*

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `10.100.100.100`  | `255.0.0.0`
TNP               | `10.100.100.101`  | `255.0.0.0`
Art-Net-Geräte    | `10.x.y.z` <strong>\</strong>* | `255.0.0.0`

<strong>\</strong>* *Dabei sind die Kombinationen von `x`, `y` und `z` für jedes Gerät einmalig zu
vergeben.*

>	Verwenden Sie niemals '255' an letzter Stelle der IP-Adresse; dies ist eine spezielle Adresse und wird nicht funktionieren.

Automatische IP-Adressvergabe (DHCP)
------------------------------------

Eine andere Möglichkeit ist die automatische IP-Adressvergabe per
DHCP. Dafür muss eins der Geräte als sog. DHCP-Server eingerichtet
sein, der anderen die passenden Einstellungen zuteilt.

Im Allgemeinen ist dies für Netzwerke im Show-Bereich nicht zu
empfehlen, insbesondere da etliche Gerät damit nichts anfangen können.
Schalten Sie daher jegliche DHCP-Funktion ab, oder adressieren Sie
Ihre Geräte in den Bereich, der von der automatischen Adressvergabe
ausgenommen ist (lässt sich jeweils beim DHCP-Server einstellen).

Private IP-Adressbereiche
-------------------------

Ist ihr Netzwerk mit dem Internet verbunden, so ist es wichtig, dass Sie
einen 'privaten' IP-Adressbereich verwenden. Damit wird sichergestellt,
dass der Netzwerkverkehr nicht ins Internet geroutet wird. Die privaten
Adressbereiche sind folgende:

Startadresse  | Letzte Adresse   | Subnetzmaske
--- 		  | --- 			 | ---
10.0.0.0 	  | 10.255.255.255 	 | 255.0.0.0
172.16.0.0 	  | 172.31.255.255   | 255.255.0.0
192.168.0.0   | 192.168.255.255  | 255.255.255.0

>	Für Art-Net muss der Bereich 10.x.x.x verwendet werden.