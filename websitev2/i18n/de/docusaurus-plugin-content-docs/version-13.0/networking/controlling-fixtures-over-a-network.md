---
id: controlling-fixtures-over-a-network
title: Controlling Fixtures over a Network
sidebar_label: Controlling Fixtures over a Network
original_id: controlling-fixtures-over-a-network
---

Bevor das Pult mit anderen Geräten über ein Netzwerk kommunizieren kann,
muss es eine eindeutige Netzwerkadresse bekommen; diese wird
'IP-Adresse' genannt.

Einstellen der IP-Adresse des Pultes
------------------------------------

Es wird empfohlen, die integrierte Adressvergabe des Pultes zu
verwenden. Alternativ können Sie die Adressierung auch über die
Windows-Systemsteuerung vornehmen. Siehe [Einstellen der IP-Adresse](a-quick-guide-to-ip-addressing.md#einstellen-der-ip-adresse) mit 
Details zur IP-Adressierung.

1. 	Schalten Sie das Pult in den 'System'-Modus und drücken Sie
	\[Network Settings\].

2.	Drücken Sie \[Local Area Connection\].

3.	Drücken Sie \[Subnet Mask\] und setzen Sie diese auf `255.255.255.0`.

4.	Drücken Sie \[Set IP `2.*.*.*`\].

5.	Betätigen Sie \[Save settings\].

6.	Verlassen Sie den System-Modus mit \<Exit\>.

- 	Einige Geräte benötigen möglicherweise IP-Adressen aus dem 
	Bereich `10.*.*.*` -- dazu unten mehr.

-   Benötigen Sie einen nicht vorbelegten IP-Adressbereich, so drücken
	Sie auf \[IP Address = ... \] und geben die Adresse mit den Zifferntasten ein.

Einrichten der DMX-Ausgänge
---------------------------

Das Pult arbeitet intern mit max. 64 DMX-Universen (16 direkt im Pult,
bis zu 64 mit TitanNet), die einzeln auf die DMX-Buchsen sowie über
Netzwerk-Knoten geroutet werden können. Der T1 ist auf ein, der T2 auf
zwei Universen beschränkt. Die einzelnen Linien können sowohl über die 
DMX-Anschlüsse als auch [über Netzwerk](../networking/controlling-fixtures-over-a-network.md) ausgegeben werden.

Ein einfaches Art-Net-System
----------------------------

Es gibt verschiedene Systeme zur Übertragung von Licht-Steuersignalen
über Netzwerk; eines der am weitesten verbreiteten ist Art-Net.

Art-Net ist kein gerätespezifisches Protokoll, sondern wird von einer
wachsenden Anzahl von Herstellern anerkannt und in immer mehr Produkte
integriert. Viele Geräte (etwa Dimmer oder Bewegungsscheinwerfer) können
direkt per Art-Net verbunden werden, so dass kein separater Konverter
erforderlich ist. Benötigt man hingegen 'normales' DMX, so kann dies
über spezielle Art-Net-DMX-Konverter realisiert werden.

Im nachstehenden Schema ist exemplarisch ein Art-Net-fähiges Pult (wie
etwa ein Titan-Pult) über einen Netzwerk-Hub mit einem Art-Net-fähigen
Dimmer und zwei Konvertern verbunden.

![Art Net Explanation general](/docs/images/Art-Net-Explanation-general.jpeg)

Sobald das System entsprechend verkabelt ist, müssen die verschiedenen
Geräte (Knoten, Nodes) konfiguriert werden.

-   Der Dimmer erhält die Startadresse 200.

-   Der erste Konverter wird auf Universum 1 und 2 konfiguriert.

-   Der zweite Konverter wird ebenfalls auf Universum 1 und 2
    konfiguriert.

Daraufhin müssen auch die DMX-Linien des Pultes den entsprechenden
Knoten zugeordnet werden.

Art-Net-Grundlagen:

-   Jede Art-Net-DMX-Box, jeder Art-Net fähige Dimmer oder
    Bewegungsscheinwerfer ist ein Gerät.

-   Jedes Gerät kann einen oder mehrere 'Knoten' darstellen (so hat
    jeder der dargestellten Art-Net-DMX-Konverter zwei DMX-Ausgänge,
    stellt also zwei Knoten dar; der Dimmer wiederum ist ein Knoten).

-   Jeder Knoten wird einem DMX-Universum (1-256) zugeordnet. Ein
    Universum entspricht einer DMX-Linie mit 512 Kanälen.

Entsprechend werden nun die DMX-Linien des Pultes den einzelnen Knoten
zugeordnet. Jeder DMX-Linie lassen sich mehrere Knoten zuordnen (um
Universen zu duplizieren), aber jeder Knoten darf nur eine Linie
zugeordnet bekommen.

Im Beispiel erfolgt die Zuordnung wie folgt:

-   DMX-Linie A auf Konverter 1 Universum 1 und auf Konverter 2
    Universum 1

-   DMX-Linie B auf Konverter 1 Universum 2

-   DMX-Linie C auf Konverter 2 Universum 2 sowie zum Dimmer

![Art Net Explanation Nodes to DMX](/docs/images/Art-Net-Explanation-Nodes-to-DMX.jpeg)

Einrichten eines Art-Net-Systems
--------------------------------

Im folgenden Beispiel sei das Art-Net-Pult über einen Netzwerk-Hub mit
einem Art-Net-DMX-Konverter verbunden (z.B. Artistic License Net-Lynx):

![Art Net Explanation Simple System](/docs/images/Art-Net-Explanation-Simple-System.jpeg)

Verbinden Sie die Geräte mit normalen Netzwerkkabeln (RJ-45).

-   Bei der Verwendung eines Netzwerk-Hubs/Switches können Sie normale,
    'gerade' Netzwerkkabel verwenden. Wird das Pult direkt mit einem
    anderen Ethernet-Gerät verbunden, so sind 'Crossover'-Kabel
    erforderlich.

Stellen Sie die 'Net-Lynx' wie folgt ein:

-   Subnet Mask = 0

-   DMX A Universe = 1

-   DMX B Universe = 2

Viele Art-Net-Geräte, wie auch die Net-Lynx, verwenden standard­mäßig
eine IP-Adresse aus dem Bereich 2.x.x.x, und können mit einem
Konfigurationsstecker ('Jumper') z.B. auf den Bereich 10.x.x.x
umgestellt werden. Ziehen Sie also das entsprechende Handbuch zu Rate.

Benötigen Ihre Art-Net-Geräte andere als die standardmäßigen IP-Adressen
(2.x.x.x), so muss auch beim Pult die korrekte Adresse eingestellt werden.

Verbinden Sie alles ordnungsgemäß, und starten Sie das Pult.

1.	Überprüfen Sie, ob das Pult wie eingangs beschrieben eine Adresse im
	Bereich 2.x.x.x hat.

2.	Schalten Sie das Pult in den System-Modus und wählen Sie \[DMX
	Settings\].

3.	Das Fenster 'DMX Settings' öffnet sich.

4.	Wählen Sie links das Modul 'Art-Net' aus.

5.	Klicken Sie auf die Schaltfläche mit dem stilisierten Zahnrad beim
	Modul 'Art-Net-'. Stellen Sie sicher, dass der richtige Netzwerkport 
	ausgewählt ist (ggf. ist dies nicht die Standard-Netzwerkkarte).

6.	Um die Art-Net-Ausgabe abzuschalten, können Sie die Option 'DMX Output' 	
	deaktivieren. Damit wird die Ausgabe über Art-Net für sämtliche Linien
	abgeschaltet.

7.	Art-Net überträgt normalerweise Daten nur bei Änderungen, also
	keinen kontinuierlichen Datenstrom. Mitunter ist dieser aber
	erforderlich. In diesem Falle aktivieren Sie die Option 'Continuous
	Art-Net Data Stream'.

8.	Die Option 'Always Broadcast Art-Net DMX' veranlasst die
	Art-Net-Übertragung ins gesamte Netzwerk ('Broadcast'), statt nur zu
	ausgewählten Geräten/IP-Adressen.

9.	Klicken Sie auf den Art-Net-Knoten, den Sie verwenden wollen, um ihn zu
	markieren.

10. Wählen Sie rechts die gewünschte DMX-Linie.

11. Damit ist der gewählte Knoten dieser Linie zugeordnet, und das Pult
	gibt Signale per Art-Net aus.

12. Klickt man auf das kleine Zahnrad eines zugeordneten Nodes, so lassen 
	sich spezifische Einstellungen vornehmen: man kann dem Node einen 
	Namen geben, zwischen Live und Blind umschalten (letzteres ist sinnvoll,
	wenn man bei einer Live-Show parallel einen Visualiser verwendet), es
	lässt sich das Universum sowie der Syste-Parameter wählen sowie die 
	Ziel-IP-Adresse einstellen, wenn nur ein spezieller Node das Signal
	bekommen soll.

13.	Stellen Sie für Linie 1 den Eintrag 'Universe' auf 1, und für Linie
	2 auf 2. (Art-Net benutzt eine Subnetz-Maske für die Universen. Für die
	Titan-Pulte gilt: Die Titan-Universen 1 - 16 sind Subnetz-Maske 0 und Art-Net-Universen 1 - 16).

14. Schließen Sie zum Schluss mit \<Exit\> das DMX-Fenster.

Das Pult ist nun korrekt konfiguriert.

Um einen Knoten von einer DMX-Linie zu entfernen, klicken Sie auf die
betreffende Schaltfläche \[X\].

Als mögliche Art-Net-Geräte werden ggf. auch \"Unpolled\" oder
\"Unknown\" angezeigt:

-   Unpolled, bzw. 'nicht abgefragt', sind zusätzliche Linien für Geräte
    mit mehr als 4 Linien: die Art-Net-Spezifikation sieht nur 4
    Linien vor, die jedes Gerät als verfügbar anzeigen darf, deshalb
    lassen sich weitere Linien im Pulte eben als 'nicht abgefragt'
    anzeigen und dann auch normal zuweisen.

-   Ein unbekanntes Gerät (unknown) ist hingegen ein Gerät, welches
    seine Art-Net-Möglichkeiten nicht bekanntmacht; das Pult weiß
    daher nicht, ob es ein Eingangs- oder Ausgangsknoten ist.

Weiterführende Informationen zu Art-Net
---------------------------------------

Für weitere Informationen zum Thema Art-Net ziehen Sie am besten den
Art-Net-Standard, veröffentlicht von der Firma [Artistic Licence](http://www.artisticlicence.com), heran.
