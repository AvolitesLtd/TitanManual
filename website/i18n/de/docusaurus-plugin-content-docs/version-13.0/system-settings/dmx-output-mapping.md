---
id: dmx-output-mapping
title: DMX Output Mapping
sidebar_label: DMX Output Mapping
original_id: dmx-output-mapping
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Geräte lassen sich auf verschiedene Weise mit dem Pult verbinden. Neben
den vorhandenen DMX-Buchsen können die Geräte auch [per Netzwerk (Art-Net
sowie sACN)](../networking/controlling-fixtures-over-a-network.md) 
angesteuert werden.

Alle Pulte können bis zu 16 DMX-Universen über DMX und Netzwerk (Art-Net
oder sACN) ausgeben (der <strong>T1</strong> ist auf ein Universum, der <strong>T2</strong> auf zwei
Universen beschränkt).

Mit [Avolites TitanNet-Prozessoren (TNP)](../titan-net.md) lässt sich die
Gesamtzahl bis auf 64 erhöhen.

> 	Es ist möglich, in der Pult-Software mehr als 16 Universen
    zuzuweisen. Dies wirkt sich aber negativ auf die Performance aus. In
    der TitanNet-Übersicht wird daher bei der Anzeige der Rechenleistung
    eine Warnung angezeigt.

Einrichten der DMX-Ausgänge
---------------------------

Schalten Sie das Pult in den [System-Modus](the-system-menu.md) (normalerweise mit
<Keys.HardKey>Avo</Keys.HardKey>+<Keys.HardKey>Disk</Keys.HardKey>) und wählen im Menü <Keys.SoftKey>DMX Settings</Keys.SoftKey>.

Das DMX-Fenster öffnet sich nun zunächst auf dem Tab mit dem Node
(Knoten), den das Pult selbst darstellt. Es zeigt die vorhandenen
*DMX-Knoten* (also möglichen Ausspielwege/Empfänger) auf der linken, sowie
die pultinternen *DMX-Linien* auf der rechten Seite. Jede einzelne
DMX-Linie kann an einen oder mehrere Empfänger gesendet werden. Wird
einer Linie mehr als ein Empfänger zugeordnet, so erhalten alle diese
Knoten das identische Signal. Wenn Geräte per Artnet oder sACN verbunden
sind oder TNPs im Netzwerk gefunden wurden, so erscheinen diese
ebenfalls auf der linken Seite.

Rechts werden für jede interne DMX-Linie die zugeordneten Knoten
aufgeführt. In der Grundeinstellung sind die Linien von 1 aufsteigend
auf die XLR-Buchsen des Pultes geroutet.

![DMX Settings Window](/docs/images/DMX-Settings-Window.png)

Um einen Node einer DMX-Linie zuzuordnen klicken Sie links auf den Node 
(z.B. auf <strong>Expert DMX A</strong>) und danach rechts auf die gewünschte Linie, z.B. 
<strong>Line 1</strong>. Der Node verschwindet daraufhin links und erscheint rechts bei der 
zugewiesenen DMX-Linie.

![Node in DMX Settings Window](/docs/images/Node-in-DMX-Settings-Window.png)

Zum Löschen einer Zuordnung dienen die individuellen oder gruppenweisen
<strong>X</strong>-Schaltflächen: pro Node, pro Linie, sowie ganz oben bei <strong>Dmx Lines</strong> für
sämtliche DMX-Ausgänge.

Um die Zuordnung zu ändern, also etwa einen Node einer anderen Linie 
zuzuweisen, muss dieser zunächst mit dem <strong>X</strong> von der aktuellen Linie 
gelöscht werden, erscheint daraufhin wieder links als nicht zugewiesen, und
kann nun einer anderen Linie zugeordnet werden.

Beim Patchen von Art-Net- und sACN-Nodes können mehrere Universen/Linien
auf einmal zugeordnet werden. Wählen Sie dazu links den ersten Node, der 
verwendet werden soll, geben dann mit den Menütasten <Keys.SoftKey>Universe</Keys.SoftKey> (das 
erste Universum) sowie <Keys.SoftKey>Quantity</Keys.SoftKey> (Anzahl) ein, und klicken auf die 
gewünschte erste Linie. Daraufhin wird die gewünschte Anzahl von Universen
auf fortlaufende Linien zugewiesen.

Mit dem stilisierten Zahnrad können weitere Details und Einstellungen pro
Knoten (sobald er zugewiesen ist) sowie pro DMX-Modul aufgerufen werden. 
Hiermit lassen sich auch für Netzwerk-Knoten die Adresse und Subnetz-Maske
eingeben.

![DMX Output in DMX Settings Window](/docs/images/DMX-Output-in-DMX-Settings-Window.png)

Haben Sie [TitanNet-Prozessoren](../titan-net.md) verbunden, so sind diese 
jeweils über den entsprechenden Tab am oberen Rand aufrufbar und können 
konfiguriert werden.

>	Beim Übertragen von Shows zwischen verschiedenen Pulten sowie bei der 
	Verwendung des Titan Simulators ist es wichtig, die DMX-Einstellungen 
	jeweils zu überprüfen. Bei Shows, die im Simulator erstellt wurden, 
	sind die DMX-Ausgänge nicht zugewiesen.


Modul-Eigenschaften der DMX-Ausgabe
-----------------------------------

Als Modul wird hier die Art der Ausgabe des DMX-Signals bezeichnet, also
z.B. Art-Net oder sACN - jedes Modul kann mehrere Nodes haben.

Zum genauen Einstellen der Art-Net- oder sACN-Optionen öffnen Sie die
DMX-Einstellungen (also [System-Modus](the-system-menu.md), dann 
<Keys.SoftKey>DMX Settings</Keys.SoftKey>), und klicken links auf das stilisierte Zahnrad 
neben dem betreffenden Modulnamen.

Damit lassen sich pro Modul spezifische Einstellungen vornehmen und auch
bestimmen, über welchen Netzwerkanschluss dieses Protokoll ausgegeben
wird. Ältere Pulte und das Quartz haben einen Netzwerkanschluss, Pro-Pulte
verfügen über zwei Anschlüsse, und bei der PC-Suite hängt es von der
Ausstattung des jeweiligen Computers ab - viele Laptops verfügen z.B.
auch über einen WLAN-Adapter, der, sofern aktiviert, ebenfalls angezeigt
wird.

### sACN-Eigenschaften

![sACN DMX Module Properties](/docs/images/sACN-DMX-Module-Properties.png)

<strong>DMX output:</strong> Damit kann die Ausgabe für dieses Modul deaktiviert
werden.

<strong>Merge Priority:</strong> (0-200) Die sACN-Spezifikation erlaubt es, dass
mehrere Pulte parallel an die gleichen Geräte DMX senden. Dabei wird das
Signal des Pultes mit der höheren Priorität berücksichtigt und Signale
mit niedrigerer Priorität verworfen. 

>	Für Backup-Pulte sollte man folglich die Priorität auf einen 
	niedrigeren Wert setzen. 

<strong>Block RDM:</strong> Damit wird RDM für dieses Modul deaktiviert.

<strong>Synchronization Address:</strong> Steht dies auf einem anderen Wert als 0, so
wird das damit bezeichnete sACN-Univerum zum Synchronisieren verwendet:
alle Geräte empfangen zwar DMX-Daten, speichern die aber zwischen und
geben sie erst aus, wenn auf dem Sync-Universum ein Paket gesendet wird.
Damit lassen sich Tearing-Effekte vermeiden (versetzte Ausgabe). Mit 0
wird die Synchronisation deaktiviert.

<strong>Ethernet xxx:</strong> Damit lässt sich pro Netzwerkanschluss bestimmen, ob
sACN über diesen gesendet werden soll. Werden mehrere aktiviert, so wird
das identische Signal parallel gesendet.

### Art-Net-Eigenschaften

![ArtNet DMX Module Properties](/docs/images/ArtNet-DMX-Module-Properties.png)

<strong>DMX output:</strong> Damit kann die Ausgabe für dieses Modul deaktiviert
werden.

<strong>Continuous Art-Net DMX:</strong> Die Art-Net-Spezifikation sieht vor, dass das
Pult Art-Net-Pakete nur sendet, wenn sich Werte/Kanäle geändert haben.
Mit dieser Option lässt sich die kontinuierliche Ausgabe von Art-Net
erzwingen, auch wenn sich keine Werte geändert haben.

<strong>Always Broadcast Art-Net DMX:</strong> Damit werden alle Pakete per Broadcast
gesendet, also an sämtliche Geräte im jeweiligen Netzwerkbereich.
Ansonsten werden die Informationen Unicast gesendet, also nur an das
jeweilige Gerät. Damit lässt sich die Netzwerkauslastung verringern,
aber die Netzwerkeinrichtung ist ggf. aufwändiger.

<strong>Block RDM:</strong> Damit wird RDM für dieses Modul deaktiviert.

<strong>DMX Overrun:</strong> Einige Art-Net-Geräte ignorieren Änderungen, die nur
einmalig gesendet werden. Mit dieser Einstellung werden auch solche
Änderungen mit mindestens drei Netzwerkpaketen gesendet.

<strong>Legacy Mode:</strong> Damit wird kontinuierlich und mit hoher Datenrate
gesendet, was ebenfalls manche nicht-Art-Net-konforme Geräte erfordern.
Dies kann die Performance von Netzwerk und Pult negativ beeinflussen.

<strong>Ethernet xxx:</strong> Damit lässt sich pro Netzwerkanschluss bestimmen, ob
Art-Net über diesen gesendet werden soll. Werden mehrere aktiviert, so
wird das identische Signal parallel gesendet.

DMX-Overview
------------

Schaltet man am oberen Rand auf den Tab 'DMX Overview' um, so werden
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
enthält, die momentan nicht verbunden sind, so erscheint ein Bildschirm
mit der genauen Aufstellung sowie der Möglichkeit, die einzelnen Linien
anderen Ausgabeports zuzuordnen.

DMX Merge
---------

Im Fenster "DMX Merge" kann man einstellen, wie in einem System mit
mehreren Pulten oder Netzwerkknoten das Signal ausgegeben werden soll.

![DMX Merge Window](/docs/images/DMX-Merge-Window.png)

Zum Einrichten eines Ausgangs klicken Sie auf <Keys.SoftKey>Patch Titan Lines</Keys.SoftKey>,
geben die Nummer des Universums an und klicken auf den gewünschten Port.

Um eine Zuweisung zu löschen, klicken Sie auf <Keys.SoftKey>Clear sACN Merge</Keys.SoftKey> und
dann auf den gewünschten Port.

Mit dem Schalter 'DMX Output' oben rechts können sämtliche DMX-Ausgänge
deaktiviert werden.