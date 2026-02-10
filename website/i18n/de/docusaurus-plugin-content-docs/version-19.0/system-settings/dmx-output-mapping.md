---
id: dmx-output-mapping
title: DMX-Einstellungen
sidebar_label: DMX-Einstellungen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Das Ausgangssignal kann per DMX über die XLR-Buchsen sowie per Art-Net und sACN über die Netzwerkanschlüsse ausgegeben werden.

Ebenso lassen sich sACN-Linien als Input definieren, um von anderen Pulten Cues und Paletten zu kopieren. Input-Linien werden purpur dargestellt.

Titan kann generell bis zu 64 DMX-Universen über DMX und Netzwerk (Art-Net
oder sACN) ausgeben, aber verschiedene Pulte sind intern auf unterschiedliche Anzahlen von Linien beschränkt. Dabei können die Universen von 1-9999 nummeriert sein, 
mehr als 64 sind insgesamt aber nicht möglich.

Pult | Systemlimit | Maximum pro Pult
--------|----------------|-------
Simulator      | 64 (Anm. 1) | 
T1             | 1   | 1
T2             | 2   | 2
T3             | 16 (Anm. 2) | 16 (Anm. 3)
D3-010         | 8   | 8
D3-110         | 24  | 24
D3-Core        | 16  | 16
D7             | 64  | 32 (Anm. 3)
D9             | 64  | 32 (Anm. 3)
Titan Mobile   | 64  | 16 (Anm. 3)
Quartz         | 64  | 16 (Anm. 3)
Tiger Touch 2  | 64  | 16 (Anm. 3)
Arena          | 64  | 16 (Anm. 3)
Sapphire       | 64  | 16 (Anm. 3)

Anm. 1: Der Simulator gibt in unregelmäßigen Abständen ein DMX-Störsignal aus (DMX-Spoiler) <br/>
Anm. 2: Das Systemlimit des T3 kann mit optionalen Lizenzen bis auf 64 Linien erweitert werden. Das Maximum pro Pult bleibt aber bei 16 Linien.<br/>
Anm. 3: Die Rechenleistung für weitere Linien kann durch zusätzliche TNPs erweitert werden.

Pulte selbst können die oben angegebene Anzahl von DMX-Universen ausgeben, ist mehr erforderlich, so lässt sich 
mit [Avolites TitanNet-Prozessoren (TNPs)](../titan-net.md) durch Verteilen der Rechenlast die 
Gesamtzahl an Universen bis auf 64 erhöhen. (Das Systemlimit wird dadurch nicht erhöht. Eine Erweiterung durch mehrere einzelne kleinere Geräte - etwa T1 oder T2 - ist nicht möglich.)

>  Wird eine Show geladen, in der mehr Linien verwendet wurden als auf dem Pult möglich sind, so werden nur die verfügbaren Linien von der 
kleinsten Nummer aufwärts ausgegeben. Sämtliche Programmierung bleibt erhalten, auf den nicht verfügbaren Linien erfolgt aber keine Ausgabe.


## Default-Ausgangskonfiguration

Wird eine neue Show gestartet, so werden 16 Linien eingerichtet. Diese werden auf die vorhandenen DMX-Anschlüsse, auf Art-Net und auf sACN (jeweils Universum 1-16) geroutet.

- Die Ausgabe per Art-Net ist in einer neuen Show deaktiviert. Zum Aktivieren klicken Sie auf das Icon mit dem 'Einschalter' des Art-Net-Nodes auf der linken Seite der DMX-Einstellungen.

Sobald Fixtures auf Linien gepatcht werden, die noch nicht eingerichtet sind, wird die Linie automatisch angelegt und auf sACN und Art-Net geroutet (diese Automatik kann in den Optionen der Nodes deaktiviert werden).


## Einrichten der DMX-Ausgänge

Öffnen Sie das [System-Menü](the-system-menu.md) (normalerweise mit <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) 
und wählen <Keys.SoftKey>DMX Settings</Keys.SoftKey>.

Das DMX-Fenster öffnet sich nun zunächst auf dem Tab mit dem Node
(Knoten), den das Pult selbst darstellt. Es zeigt die vorhandenen
*DMX-Knoten* (also möglichen Ausspielwege/Empfänger) auf der linken, sowie
die pultinternen *DMX-Linien* auf der rechten Seite. Jede einzelne
DMX-Linie kann an einen oder mehrere Empfänger gesendet werden. Wird
einer Linie mehr als ein Empfänger zugeordnet, so erhalten alle diese
Knoten das identische Signal. Wenn Geräte per Art-Net oder sACN verbunden
sind oder TNPs im Netzwerk gefunden wurden, so erscheinen diese
ebenfalls auf der linken Seite. (Bei sACN gibt es keine automatische Erkennung,
daher werden im Netzwerk verfügbare sACN-Nodes nicht automatisch dargestellt).

Rechts werden für jede interne DMX-Linie die zugeordneten Knoten
aufgeführt. In der Grundeinstellung sind die Linien von 1 aufsteigend
auf die XLR-Buchsen des Pultes geroutet.

![DMX Settings Window](/docs/images/DMX-Settings-Window-v19.png)

Um einen Node einer DMX-Linie zuzuordnen, klicken Sie links auf den Node 
(z.B. auf **New Multicast Universe**) und danach rechts auf die gewünschte Linie, z.B. 
&nbsp;**Line 1**. Der Node verschwindet daraufhin links und erscheint rechts bei der 
zugewiesenen DMX-Linie.

Zum Löschen einer Zuordnung dienen die individuellen oder gruppenweisen <Keys.ContextKey>X</Keys.ContextKey>-Schaltflächen: pro Node, pro Linie, sowie ganz oben bei **DMX Assignments** für
sämtliche DMX-Ausgänge.

Um die Zuordnung zu ändern, also etwa einen Node einer anderen Linie 
zuzuweisen, muss dieser zunächst mit dem <Keys.ContextKey>X</Keys.ContextKey> von der aktuellen Linie 
gelöscht werden, erscheint daraufhin wieder links als nicht zugewiesen, und
kann nun einer anderen Linie zugeordnet werden.

Art-Net- und sACN-Universen können automatisch zugewiesen werden, indem man links den gewünschten sACN- oder Art-Net-Node wählt
und dann auf <Keys.SoftKey>Assign All By Line Number</Keys.SoftKey> klickt. Damit werden passende sACN- bzw. Art-Net-Universen angelegt und dem Ausgang zugewiesen.

Wird ein Fixture auf eine noch nicht angelegte Linie gepatcht, so wird diese automatisch vom System angelegt. Mit der Einstellung **Auto Assign** bei 
den sACN- und Art-Net-Nodes lässt sich bestimmen, ob automatisch die entsprechenden Universen ausgegeben werden sollen.

Mit dem kleinen <Keys.ContextKey>Zahnrad</Keys.ContextKey> können weitere Details und Einstellungen pro
Knoten (sobald er zugewiesen ist) sowie pro DMX-Modul (<Keys.ContextKey>Zahnrad</Keys.ContextKey> bei Art-Net bzw. sACN) aufgerufen werden. 
Hiermit lassen sich auch für Netzwerk-Knoten die Adresse und Subnetz-Maske
eingeben.

![DMX Output in DMX Settings Window](/docs/images/DMX-Output-in-DMX-Settings-Window.png)

Haben Sie [TitanNet-Prozessoren](../titan-net.md) verbunden, so sind diese 
jeweils über den entsprechenden Tab am oberen Rand aufrufbar und können 
konfiguriert werden.

>   Beim Übertragen von Shows zwischen verschiedenen Pulten sowie bei der 
    Verwendung des Titan Simulators ist es wichtig, die DMX-Einstellungen 
    jeweils zu überprüfen. Bei Shows, die im Simulator erstellt wurden, 
    sind die physischen DMX-Ausgänge nicht zugewiesen.


## Modul-Eigenschaften der DMX-Ausgabe

Als Modul wird hier die Art der Ausgabe des DMX-Signals bezeichnet, also
z.B. Art-Net oder sACN - jedes Modul kann mehrere Nodes haben.

Zum genauen Einstellen der DMX-Ausgängen sowie der Art-Net- und 
sACN-Optionen öffnen Sie die DMX-Einstellungen (also <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> 
zum Öffnen des [System-Menüs](the-system-menu.md), dann <Keys.SoftKey>DMX Settings</Keys.SoftKey>). Links werden nun die verschiedenen Ausgabewege und Anschlüsse angezeigt. Zum Ändern der Einstellungen klicken Sie links auf das kleine <Keys.ContextKey>Zahnrad</Keys.ContextKey> neben dem betreffenden Modulnamen.

Damit lassen sich pro Modul spezifische Einstellungen vornehmen und auch
bestimmen, über welchen Netzwerkanschluss welches Protokoll ausgegeben
wird. Aktuelle Pulte haben zwei Netzwerkanschlüsse, das Quartz hat einen, 
und bei der PC-Suite (Titan Go/Simulator) hängt es von der Ausstattung des jeweiligen Computers 
ab - viele Laptops verfügen z.B. auch über einen WLAN-Adapter, der, sofern 
aktiviert, ebenfalls angezeigt wird.

### Physische DMX-Eigenschaften

Diese Einstellungen betreffen alle 5pol-DMX-Anschlüsse des Pultes.

![DMX512 Module Properties](/docs/images/Dmx-Module-Properties-v19.png)

**DMX output:** Damit kann die Ausgabe für dieses Modul deaktiviert
werden. Gleiche Einstellung wie der 'Power'-Button des 'Physical DMX Output' Moduls. Sind die DMX-Buchsen deaktiviert, so erscheinen sie auf der rechten Seite ausgegraut.

**Auto Assign** bestimmt, ob beim Patchen von Fixtures auf nicht eingerichtete Linien diese automatisch für die DMX-Ausgabe geroutet werden sollen, soweit noch unbelegte DMX-Anschlüsse vorhanden sind.

**Merge Priority:** Wert von 0-200, Vorgabe 100, höherer Wert = höhere Priorität. 
Bestimmt die Priorität des direkt von Titan zum DMX-Ausgang
gesendeten Signals beim Verwenden von sACN/DMX-Merge. Dies muss separat eingerichtet werden, siehe [DMX Merge -- Network DMX Node Settings](dmx-output-mapping.md#dmx-merge----network-dmx-node-settings).

**Break Length:** Zeitlicher Abstand zwischen den DMX-Paketen. Manche 
Dimmer und Movinglights benötigen ein künstlich verlangsamtes Signal,
um sauber zu arbeiten. Vorgabewert ist 968 µs, aber es wurden schon 
Dimmer gefunden, bei denen dieser Wert auf 4000 µs erhöht werden musste,
um ein sauberes Ergebnis zu erzielen.

**Mark After Break Length:** Ebenfalls ein Timing-Aspekt des DMX-Signals.
Muss normalerweise nicht verändert werden. Ist die Zeitspanne zwischen
dem Beginn des DMX-Pakets und dem ersten Kanal. Vorgabe ist 76 µs.

**Extra Stop Bit:** Weitere Möglichkeit, um das DMX-Signal etwas zu 
verlangsamen und problematische Geräte sicherer zu betreiben.

### sACN-Eigenschaften

Diese Einstellungen betreffen sämtliche per sACN ausgegebenen Universen.

![sACN DMX Module Properties](/docs/images/sACN-module-properties-v19.png)

**DMX output:** Damit kann die Ausgabe für dieses Modul deaktiviert
werden. Gleiche Einstellung wie der 'Power'-Button des 'Streaming ACN' Moduls. Ist sACN deaktiviert, so erscheinen die entsprechenden Universen auf der rechten Seite ausgegraut.

**Auto Assign** bestimmt, ob beim Patchen von Fixtures auf nicht eingerichtete Linien diese automatisch für die Ausgabe per sACN geroutet werden sollen.

**Merge Priority:** (0-200) Die sACN-Spezifikation erlaubt es, dass
mehrere Pulte parallel an die gleichen Geräte DMX senden. Dabei wird das
Signal des Pultes mit der höheren Priorität berücksichtigt und Signale
mit niedrigerer Priorität verworfen. 

>   Für Backup-Pulte sollte man folglich die Priorität auf einen niedrigeren Wert setzen als für das Master-Pult. 

**Block RDM:** Damit wird RDM für dieses Modul deaktiviert.

**Synchronization Address:** Steht dies auf einem anderen Wert als 0, so
wird das damit bezeichnete sACN-Universum zum Synchronisieren verwendet:
alle Geräte empfangen zwar DMX-Daten, speichern die aber zwischen und
geben sie erst aus, wenn auf dem Sync-Universum ein Paket gesendet wird.
Damit lassen sich Tearing-Effekte vermeiden (versetzte Ausgabe). Mit 0
wird die Synchronisation deaktiviert.

**Ethernet xxx:** Damit lässt sich pro Netzwerkanschluss bestimmen, ob
sACN über diesen gesendet werden soll (Anzahl abhängig vom Pult). Werden mehrere aktiviert, so wird
das identische Signal parallel gesendet.

### Art-Net-Eigenschaften

Diese Einstellungen betreffen sämtliche per Art-Net ausgegebenen Universen.

![ArtNet DMX Module Properties](/docs/images/ArtNet-Module-Properties-v19.png)

**DMX output:** Damit kann die Ausgabe für dieses Modul deaktiviert
werden. Gleiche Einstellung wie der 'Power'-Button des 'Art-Net' Moduls. Ist Art-Net deaktiviert, so erscheinen die entsprechenden Universen auf der rechten Seite ausgegraut.

**Auto Assign** bestimmt, ob beim Patchen von Fixtures auf nicht eingerichtete Linien diese automatisch für die Ausgabe per Art-Net geroutet werden sollen.

**Continuous Art-Net DMX:** Die Art-Net-Spezifikation sieht vor, dass das
Pult Art-Net-Pakete nur sendet, wenn sich Werte/Kanäle geändert haben.
Mit dieser Option lässt sich die kontinuierliche Ausgabe von Art-Net
erzwingen, auch wenn sich keine Werte geändert haben.

**Always Broadcast Art-Net DMX:** Damit werden alle Pakete per Broadcast
gesendet, also an sämtliche Geräte im jeweiligen Netzwerkbereich.
Ansonsten werden die Informationen Unicast gesendet, also nur an das
jeweilige Gerät. Damit lässt sich die Netzwerkauslastung verringern,
aber die Netzwerkeinrichtung ist ggf. aufwändiger. (Unabhängig von dieser 
Einstellung können einzelne Universen zum Senden per Broadcast eingerichtet werden).

**Block RDM:** Damit wird RDM für dieses Modul deaktiviert.

**DMX Overrun:** Einige Art-Net-Geräte ignorieren Änderungen, die nur
einmalig gesendet werden. Mit dieser Einstellung werden auch solche
Änderungen mit mindestens drei Netzwerkpaketen gesendet.

**Legacy Mode:** Damit wird kontinuierlich und mit hoher Datenrate
gesendet, was ebenfalls manche nicht-Art-Net-konforme Geräte erfordern.
Dies kann die Performance von Netzwerk und Pult negativ beeinflussen.

**Ethernet xxx:** Damit lässt sich pro Netzwerkanschluss bestimmen, ob
Art-Net über diesen gesendet werden soll (Anzahl abhängig vom Pult). Werden mehrere aktiviert, so
wird das identische Signal parallel gesendet.

> Über die Registry lässt sich ArtPoll deaktivieren. Das kann gelegentlich notwendig sein,
wenn inkompatible Geräte verwendet werden. Wenn das erforderlich sein sollte, oder wenn 
umgekehrt ArtPoll nicht funktioniert, obwohl es sollte, dann wenden Sie sich an Avolites,
um nähere Informationen zu erhalten.

### Visualiser DMX

Diese Einstellungen betreffen den integrierten Capture Visualiser. Extern angeschlossene Visualiser werden davon nicht beeinflusst.

![Visualiser DMX Module Properties](/docs/images/Visualiser-module-properties-v19.png)

**DMX output:** Damit kann die Ausgabe an den internen Visualiser deaktiviert
werden. Gleiche Einstellung wie der 'Power'-Button des 'Visualiser' Moduls. 

**Auto Assign:** Diese Option ist für den Visualiser ohne Funktion.

### DMX /sACN Input

Ein sACN-Input-Universum kann einer DMX-Linie zugeordnet werden, um das Signal eines externen Pultes zu verwenden. Solche Inputs werden purpur dargestellt.

![sACN input](/docs/images/DMX-Settings-sACN-in.png)

Ist einer Linie ein Input zugewiesen, so wird dies in der Zeile der Linie mit der sACN-Universe-Nummer und weiteren Details angezeigt; als Status wird grün (Daten werden empfangen), orange (Daten werden gehalten) und grau (keine Daten) verwendet. Gehaltene Daten können mit <Keys.ContextKey>Clear DMX Input Cache</Keys.ContextKey> im Kontextmenü gelöscht werden.

Zu Details zur Verwendung von sACN-Input beim Programmieren siehe [Verwenden von DMX/sACN-Eingang](/controlling-fixtures/changing-fixture-attributes.md#verwenden-von-dmxsacn-eingang).

## DMX-Overview

Schaltet man am oberen Rand des Fensters auf den Tab 'DMX Overview' um, so werden
sämtliche [TNPs](../titan-net.md) angezeigt, die momentan im Netzwerk verbunden sind.
Dabei wird auch angezeigt, welche Linie auf welchem Knoten und Anschluss
ausgegeben wird.

![DMX Overview in DMX Settings](/docs/images/DMX-Overview-in-DMX-Settings-v19.png)

Links werden die maximal möglichen 'internen' Linien gezeigt. Rechts
davon erscheinen die verbundenen Knoten/Nodes, wobei das Pult selbst
ganz oben -- als erster Knoten -- erscheint. Für jeden Knoten wird
angezeigt, welche Linie auf welchem Anschluss ausgegeben wird. Ein Klick
auf den Ausgangsbereich des jeweiligen Knoten öffnet dessen
Detailansicht.

Weitere Ausgangslinien (bis zum Limit des Pultes) können durch Klicken des Pluszeichens unter der Liste der Linien hinzugefügt werden.

Ein Klick auf den Eingangsbereich eines Knotens zeigt hingegen dessen
Details im rechten Bereich. Gezeigt wird u.a. die IP-Adresse, die Anzahl
der verfügbaren Prozessorkanäle, die Anzahl der zugewiesenen DMX-Linien,
der Status der Verbindung sowie die Auslastung des Geräts, Wurden mehr
Linien zugewiesen als das Gerät Prozessorkanäle bereitstellt, so wird
eine Warnung eingeblendet.

Wird eine Show geladen, die Geräte und Linien auf Prozessor-Knoten
enthält, die momentan nicht verbunden sind, so erscheint eine Meldung
mit der genauen Aufstellung sowie der Möglichkeit, die einzelnen Linien
anderen Ausgabeports zuzuordnen.

## DMX Merge -- Network DMX Node Settings

Im Fenster "Network DMX Node Settings" kann man das Mergen des DMX-Outputs des lokalen Pults mit sACN-Universen
von anderen Pulten oder Nodes einrichten.
Im **System**-Menü (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) wählen Sie <Keys.SoftKey>Network DMX Node Settings</Keys.SoftKey>.

![Network DMX Node Settings Window](/docs/images/DMX-Merge-Window.png)

Um ein Universum auf einen Ausgang zuzuweisen, klicken Sie auf **Patch Titan Lines** oder auf 
**Patch External sACN Merge**, stellen <Keys.SoftKey>Universe</Keys.SoftKey>
ein, und klicken auf den gewünschten Ausgang (Port A, Port B etc.).

Um eine Zuweisung zu löschen, klicken Sie auf <Keys.SoftKey>Clear sACN Merge</Keys.SoftKey> und
dann auf den gewünschten Port.

-   Für das DMX-Signal des lokalen Pultes kann man die Priorität gegenüber den externen sACN-Quellen
    einstellen, siehe [DMX-Eigenschaften](dmx-output-mapping.md#dmx-eigenschaften)

-   Mit dem Schalter 'DMX Output' oben rechts können sämtliche DMX-Ausgänge deaktiviert werden.