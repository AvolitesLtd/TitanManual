---
id: linking-pioneerdj-system-to-titan
title: Pioneer ProDJ-Decks mit Titan verknüpfen
sidebar_label: Pioneer ProDJ-Decks mit Titan verknüpfen
original_id: linking-pioneerdj-system-to-titan
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Mit der Software Pioneer Pro DJ Link Bridge können BPM-Master innerhalb
von Titan durch geeignete Pioneer DJ-Systeme gesteuert werden. Die
Bridge-Software kann dabei direkt auf dem Titan-Pult oder einem externen
Laptop laufen.

<Video videoId="vwr1DBJjBbw" title="PioneerDJ Integration" />

Titan und das Pioneer-System verbinden
--------------------------------------

Titan und das Pioneer-System müssen sich im gleichen Netzwerk befinden.
Die Pioneer-Geräte gestatten keine explizite Netzwerk-Konfiguration. Es
ist vielmehr ein DHCP-Server oder eine automatische Adressvergabe per
mDNS erforderlich, zu erkennen an einer automatischen Adresse wie
169.254.\*.\* Nutzt man gleichzeitig Art-Net oder sACN im gleichen
Netzwerk, so kann die Einrichtung kompliziert werden, da viele externe
Geräte auf bestimmte Adressbereiche festgelegt sind.

### Pioneer Bridge auf dem Pult

Verwendet man Art-Net/sACN nicht oder hat getrennte
Netzwerkschnittstellen zur Verfügung, dann kann Pioneer Bridge direkt
auf dem Pult laufen. Dabei sollte man unbedingt einen Netzwerk-Switch
verwenden; hat das Pult keinen solchen eingebaut (wie etwa das Arena),
so ist ein externer Switch erforderlich.

Starten Sie die Pro DJ Link Bridge Software über das Menü **Tools \>
Additional Programs**.

-   Wenn erforderlich lässt sich dies mit **Tools \> Control Panel \> 
	Run on Startup** automatisch starten, etwa in Clubs, wo
    das Programm immer benötigt wird.

![Pro-DJ link bridge command on shell menu](/docs/images/Pro-DJ-link-bridge-command-on-shell-menu-2.png)

Auf dem Reiter 'Interface' zeigt die Bridge-Software die
Netzwerkadresse an, die von den Pioneer-Geräten verwendet wird. Das
Pult muss im gleichen Adressbereich sein. Verwendet man DHCP, so
kann man auch das Pult zur Verwendung von DHCP einrichten, oder man
vergibt eine geeignete Adresse statisch. Verwendet das
Pioneer-System z.B. 169.254.225.212, so kann man das Pult auch
statisch auf 169.254.225.1 setzen (wenn diese Adresse nicht
anderweitig verwendet wird).

![Pro-DJ link bridge command on shell menu](/docs/images/Pro-DJ-link-bridge-command-on-shell-menu.png)

-   Ist alles richtig eingerichtet und verbunden, so zeigt die
    Bridge-Software grüne Symbole sowohl für das Pult als auch das/die
    Pioneer-Geräte.

-   Manche Art-Net/sACN-Geräte können auch im Adressbereich
    169.254.\*.\* betrieben werden. In diesem Fall funktioniert auch
    Art-Net/sACN und Pioneer DJ über das gleiche Netzwerk.

### Pioneer Bridge auf einem separaten Computer

Will oder muss man die Bridge-Software auf einem separaten Computer
laufen lassen, so kann man die Software einzeln von der Pioneer-Website
herunterladen und installieren.

Sind getrennte Netzwerkbereiche erforderlich, so benötigt man einen
Computer mit zwei Netzwerkanschlüssen.

Ist alles richtig eingerichtet und verbunden, so zeigt die
Bridge-Software grüne Symbole sowohl für das Pult als auch das/die
Pioneer-Geräte.

Das PioneerDJ-Fenster
---------------------

Zum Öffnen des Fensters drücken Sie zweimal auf <Keys.HardKey>View / Open</Keys.HardKey> und klicken
auf den Button <Keys.SoftKey>PioneerDJ</Keys.SoftKey>.

![Pioneer Workspace window](/docs/images/Pioneer-Workspace-window.png)

Im oberen Bereich wird das Signal des laufenden Tracks groß
(detailliert) und klein (dafür der ganze Track) angezeigt. Mehrere
Tracks können übereinander angezeigt werden.

Darunter werden Details zur jedem gerade laufenden Track eingeblendet.

Ganz unten werden die verbundenen Pioneer-Decks grün angezeigt.

Um einen Track als Master auszuwählen, klickt man links oder unten auf
die Tracknummer. Der aktuell als Master verwendete Track wird durch ein
rotes M angezeigt; dieser kann zum Steuern der BPM-Master verwendet
werden.

Mittel Kontextfunktinen lässt sich die Anzeige der einzelnen Elemente
jeweils aktivieren oder abschalten (große und kleine Signalanzeige,
Track-Details und Statusleiste).

![Pioneer context menu buttons](/docs/images/Pioneer-context-menu-buttons.png)

-	Mit <Keys.SoftKey>Zoom</Keys.SoftKey> wird die Vergrößerung der großen Signalanzeige eingestellt.

-	Mit <Keys.SoftKey>Change Layout</Keys.SoftKey> kann zwischen verschiedenen Layouts des Fensters
	umgeschaltet werden:
	-	<Keys.SoftKey>Full</Keys.SoftKey> -- Anzeige aller laufenden Tacks\
	-	<Keys.SoftKey>Master</Keys.SoftKey> -- Anzeige nur des aktuellen Master-Tracks\
	-	<Keys.SoftKey>Condensed</Keys.SoftKey> -- Details werden für alle Tracks angezeigt, die
		Signalkurve aber nur für den aktuellen Master-Track. Der Master-Track
		kann durch Anklicken der Tracknummer im Detail-Bereich (unten) gewählt
		werden. 

BPM-Master per Pioneer DJ triggern
----------------------------------

Dazu muss zunächst ein [BPM Master](../running-the-show/playback-controls.md#optionen-für-bpm-master) 
definiert werden. Für diesen kann dann wie folgt PioneerDJ als Trigger
eingerichtet werden.

Öffnen Sie das System-Menü (per <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) und wählen 
 <Keys.SoftKey>Triggers</Keys.SoftKey>. Darauf öffnet sich das Fenster 'Trigger'.
1.	Fügen Sie mit dem <Keys.ContextKey>+</Keys.ContextKey> *unten links* ein neues Trigger-Set hinzu
	und geben Sie diesem einen geeigneten Namen, z.B. ‚Pioneer'.
2.	Legen Sie nun mit dem <Keys.ContextKey>+</Keys.ContextKey> *unten rechts* oder mit der Menütaste
	<Keys.SoftKey>Add Trigger</Keys.SoftKey> einen neuen Trigger an.
3.	Setzen Sie <Keys.SoftKey>Trigger Type</Keys.SoftKey> auf <Keys.SoftKey>Item</Keys.SoftKey>.
4.	Wählen Sie den zu steuernden BPM-Master (Auswahltaste/Button
	betätigen).
5.	Bei <Keys.SoftKey>Action</Keys.SoftKey> steht nun <Keys.SoftKey>PioneerDJ</Keys.SoftKey>, da dies momentan die einzige
	Option für BPM-Master ist. Bestätigen Sie das mit <Keys.SoftKey>OK</Keys.SoftKey>.
6.	Wählen Sie nun mit <Keys.SoftKey>Deck = </Keys.SoftKey>, welches Pioneer-Deck als Trigger
	verwendet werden soll. Wählt man <Keys.SoftKey>Master</Keys.SoftKey>, so wird immer das im
	PioneerDJ als Master definierte Deck verwendet (rotes M), wählt man
	dagegen Deck 1, 2, 3 oder 4, so wird stets dieses verwendet.
7.	Mit <Keys.SoftKey>Add</Keys.SoftKey> wird schließlich der Trigger eingerichtet und sollte
	ähnlich wie auf dem folgenden Bild aussehen.

![Trigger workspace with Pioneer trigger added](/docs/images/Trigger-workspace-with-Pioneer-trigger-added.png)

Damit ändert sich der Wert des BPM-Masters automatisch bei Änderungen
des steuernden Tracks.

-	Um den BPM-Master wieder manuell zu steuern, kann man den Schalter
    <Keys.SoftKey>BPM Triggers</Keys.SoftKey> im PioneerDJ-Fenster ausschalten.
