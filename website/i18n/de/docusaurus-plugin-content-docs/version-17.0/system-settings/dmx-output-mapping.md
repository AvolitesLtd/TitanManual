---
id: dmx-output-mapping
title: DMX-Ausgänge einrichten
sidebar_label: DMX-Ausgänge einrichten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Das Ausgangssignal kann per DMX über die XLR-Buchsen sowie per Art-Net und sACN über die Netzwerkanschlüsse ausgegeben werden.

Alle Pulte können bis zu 64 DMX-Universen über DMX und Netzwerk (Art-Net
oder sACN) ausgeben (der **T1** ist auf ein Universum, der **T2** auf zwei
Universen und das **T3** auf 16 Universen beschränkt; für das T3 sind optional Lizenzerweiterungen erhältlich).

Pulte selbst können bis 16 DMX-Universen ausgeben, ist mehr erforderlich, so lässt sich 
mit [Avolites TitanNet-Prozessoren (TNPs)](../titan-net.md) durch Verteilen der Rechenlast die 
Gesamtzahl an Universen bis auf 64 erhöhen. (Für T1, T2 und T3 kann die Beschränkung nicht durch TNPs aufgehoben werden).

>   Außer beim T1, T2 und T3 ist es möglich, in der Pult-Software mehr als 16 Universen
    zuzuweisen. Abhängig von der Programmierung und vom Patch wirkt sich das aber negativ auf die Performance aus. In
    der TitanNet-Übersicht wird daher bei der Anzeige der Rechenleistung
    eine Warnung angezeigt.

## Einrichten der DMX-Ausgänge

Öffnen Sie das [System-Menü](the-system-menu.md) (normalerweise mit
<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) 
und wählen <Keys.SoftKey>DMX Settings</Keys.SoftKey>.

Das DMX-Fenster öffnet sich nun zunächst auf dem Tab mit dem Node
(Knoten), den das Pult selbst darstellt. Es zeigt die vorhandenen
*DMX-Knoten* (also möglichen Ausspielwege/Empfänger) auf der linken, sowie
die pultinternen *DMX-Linien* auf der rechten Seite. Jede einzelne
DMX-Linie kann an einen oder mehrere Empfänger gesendet werden. Wird
einer Linie mehr als ein Empfänger zugeordnet, so erhalten alle diese
Knoten das identische Signal. Wenn Geräte per Art-Net oder sACN verbunden
sind oder TNPs im Netzwerk gefunden wurden, so erscheinen diese
ebenfalls auf der linken Seite.

Rechts werden für jede interne DMX-Linie die zugeordneten Knoten
aufgeführt. In der Grundeinstellung sind die Linien von 1 aufsteigend
auf die XLR-Buchsen des Pultes geroutet.

![DMX Settings Window](/docs/images/DMX-Settings-Window.png)

Um einen Node einer DMX-Linie zuzuordnen klicken Sie links auf den Node 
(z.B. auf **Expert DMX A**) und danach rechts auf die gewünschte Linie, z.B. 
&nbsp;**Line 1**. Der Node verschwindet daraufhin links und erscheint rechts bei der 
zugewiesenen DMX-Linie.

![Node in DMX Settings Window](/docs/images/Node-in-DMX-Settings-Window.png)

Zum Löschen einer Zuordnung dienen die individuellen oder gruppenweisen
<Keys.ContextKey>X</Keys.ContextKey>-Schaltflächen: pro Node, pro Linie, sowie ganz oben bei **Dmx Lines** für
sämtliche DMX-Ausgänge.

Um die Zuordnung zu ändern, also etwa einen Node einer anderen Linie 
zuzuweisen, muss dieser zunächst mit dem <Keys.ContextKey>X</Keys.ContextKey> von der aktuellen Linie 
gelöscht werden, erscheint daraufhin wieder links als nicht zugewiesen, und
kann nun einer anderen Linie zugeordnet werden.

Beim Patchen von Art-Net- und sACN-Nodes können mehrere Universen/Linien
auf einmal zugeordnet werden. Wählen Sie dazu links den ersten Node, der 
verwendet werden soll, geben dann mit den Menütasten <Keys.SoftKey>Universe</Keys.SoftKey> (das 
erste Universum) sowie <Keys.SoftKey>Quantity</Keys.SoftKey> (Anzahl) ein, und klicken auf die 
gewünschte erste Linie. Daraufhin wird die gewünschte Anzahl von Universen
auf fortlaufende Linien zugewiesen.

Mit dem kleinen <Keys.ContextKey>Zahnrad</Keys.ContextKey> können weitere Details und Einstellungen pro
Knoten (sobald er zugewiesen ist) sowie pro DMX-Modul aufgerufen werden. 
Hiermit lassen sich auch für Netzwerk-Knoten die Adresse und Subnetz-Maske
eingeben.

![DMX Output in DMX Settings Window](/docs/images/DMX-Output-in-DMX-Settings-Window.png)

Haben Sie [TitanNet-Prozessoren](../titan-net.md) verbunden, so sind diese 
jeweils über den entsprechenden Tab am oberen Rand aufrufbar und können 
konfiguriert werden.

>   Beim Übertragen von Shows zwischen verschiedenen Pulten sowie bei der 
    Verwendung des Titan Simulators ist es wichtig, die DMX-Einstellungen 
    jeweils zu überprüfen. Bei Shows, die im Simulator erstellt wurden, 
    sind die DMX-Ausgänge nicht zugewiesen.


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

### DMX-Eigenschaften

![DMX512 Module Properties](/docs/images/Dmx-Module-Properties.png)

**DMX output:** Damit kann die Ausgabe für dieses Modul deaktiviert
werden.

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

![sACN DMX Module Properties](/docs/images/sACN-DMX-Module-Properties.png)

**DMX output:** Damit kann die Ausgabe für dieses Modul deaktiviert
werden.

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
sACN über diesen gesendet werden soll. Werden mehrere aktiviert, so wird
das identische Signal parallel gesendet.

### Art-Net-Eigenschaften

![ArtNet DMX Module Properties](/docs/images/ArtNet-DMX-Module-Properties.png)

**DMX output:** Damit kann die Ausgabe für dieses Modul deaktiviert
werden.

**Continuous Art-Net DMX:** Die Art-Net-Spezifikation sieht vor, dass das
Pult Art-Net-Pakete nur sendet, wenn sich Werte/Kanäle geändert haben.
Mit dieser Option lässt sich die kontinuierliche Ausgabe von Art-Net
erzwingen, auch wenn sich keine Werte geändert haben.

**Always Broadcast Art-Net DMX:** Damit werden alle Pakete per Broadcast
gesendet, also an sämtliche Geräte im jeweiligen Netzwerkbereich.
Ansonsten werden die Informationen Unicast gesendet, also nur an das
jeweilige Gerät. Damit lässt sich die Netzwerkauslastung verringern,
aber die Netzwerkeinrichtung ist ggf. aufwändiger.

**Block RDM:** Damit wird RDM für dieses Modul deaktiviert.

**DMX Overrun:** Einige Art-Net-Geräte ignorieren Änderungen, die nur
einmalig gesendet werden. Mit dieser Einstellung werden auch solche
Änderungen mit mindestens drei Netzwerkpaketen gesendet.

**Legacy Mode:** Damit wird kontinuierlich und mit hoher Datenrate
gesendet, was ebenfalls manche nicht-Art-Net-konforme Geräte erfordern.
Dies kann die Performance von Netzwerk und Pult negativ beeinflussen.

**Ethernet xxx:** Damit lässt sich pro Netzwerkanschluss bestimmen, ob
Art-Net über diesen gesendet werden soll. Werden mehrere aktiviert, so
wird das identische Signal parallel gesendet.

> Über die Registry lässt sich ArtPoll deaktivieren. Das kann gelegentlich notwendig sein,
wenn inkompatible Geräte verwendet werden. Wenn das erforderlich sein sollte, oder wenn 
umgekehrt ArtPoll nicht funktioniert, obwohl es sollte, dann wenden Sie sich an Avolites,
um nähere Informationen zu erhalten.

## DMX-Overview

Schaltet man am oberen Rand des Fensters auf den Tab 'DMX Overview' um, so werden
sämtliche [TNPs](../titan-net.md) angezeigt, die momentan im Netzwerk verbunden sind.
Dabei wird auch angezeigt, welche Linie auf welchem Knoten und Anschluss
ausgegeben wird.

![DMX Overview in DMX Settings](/docs/images/DMX-Overview-in-DMX-Settings.png)

Links werden die max. 64 möglichen 'internen' Linien gezeigt. Rechts
davon erscheinen die verbundenen Knoten/Nodes, wobei das Pult selbst
ganz oben -- als erster Knoten -- erscheint. Für jeden Knoten wird
angezeigt, welche Linie auf welchem Anschluss ausgegeben wird. Ein Klick
auf den Ausgangsbereich des jeweiligen Knoten öffnet dessen
Detailansicht.

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