---
id: fixture-groups
title: Fixture Groups
sidebar_label: Fixture Groups
original_id: fixture-groups
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Verwenden von Geräte-Gruppen
----------------------------

Sie können Geräte zu Gruppen zusammenfassen, um mit einem einzigen Klick
(im Fenster ‚Groups') die so zusammengefassten Geräte auszuwählen oder
die Gruppen numerisch anzuwählen. Beispiele wären etwa, alle Geräte
gleichen Typs zu einer Gruppe zusammenzufassen, Gruppen für Stage
Left/Stage Right etc.

Beim Arbeiten mit vielen Geräten sind Gruppen eine unschätzbare
Arbeitserleichterung.

![Groups Window](/docs/images/Groups-Window.png)

Gruppen können in verschiedene Fenster (nicht nur das Gruppen-Fenster),
auf Fader-Playbacks und auf Macro/Exekutor-Tasten gespeichert werden.

Wird eine Gruppe auf einen Fader gespeichert, so fungiert dieser als
Helligkeits-Masterregler für die Gruppe. Dazu lassen sich mittels [Tastenprofil](../system-settings/key-profiles.md) verschiedene Funktionen der Tasten
wählen. 

### Eine Gruppe speichern

<Video videoId="E8QxOKT5TCA" title="Recording Groups" />

Wird das Gruppen-Fenster nicht angezeigt so lässt es sich mit \<View /
Open\>, <Keys.HardKey>Groups</Keys.HardKey> aufrufen.

1. Wählen Sie die Geräte aus, die Sie zu einer Gruppe zusammen­fassen
wollen (auch die Reihenfolge der Auswahl wird in der Gruppe
gespeichert).

2. Drücken Sie die graue Taste <Keys.HardKey>Group</Keys.HardKey> (rechts oberhalb des
Ziffernblocks), dann <Keys.SoftKey>Record Group</Keys.SoftKey>. Ebenso können Sie <Keys.HardKey>Record</Keys.HardKey>,
<Keys.HardKey>Group</Keys.HardKey> drücken.

3. Benutzen Sie die Menütaste A, um die Gruppe mit einer Nummer zu
versehen, oder B <Keys.SoftKey>Provide a legend</Keys.SoftKey>, um eine Bezeichnung zu vergeben.

4. Betätigen Sie eine freie Gruppen-Schaltfläche oder eine blaue
Playback-Taste oder eine Macro/Executor-Taste, um die Gruppe zu
speichern, oder drücken Sie C <Keys.SoftKey>Store</Keys.SoftKey>, um die Gruppe als nummerierte
Gruppe zu speichern.

5. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, und wiederholen Sie die Schritte für weitere
Gruppen.

-   Ebenso kommt man mit <Keys.HardKey>AVO</Keys.HardKey>+<Keys.HardKey>Group</Keys.HardKey> direkt in das 'Record
    Group'-Menü (um Gruppen zu speichern). Oder Sie klicken zweimal auf
    eine freie Gruppen-Schaltfläche, um die Schnellspeicher­funktion zu
    nutzen: beim ersten Klick wird die Schaltfläche rot mit einem +,
    beim zweiten Klick wird die Gruppe gespeichert.

![Quick Record](/docs/images/Quick-Record.png)

-   Um die Geräte einer Gruppe anzuwählen, klicken Sie einfach auf die
    Schaltfläche der Gruppe.

-   Die Reihenfolge der Auswahl der einzelnen Geräte beim Anlegen der
    Gruppe wird ebenfalls gespeichert. Dies wirkt sich später aus bei
    den Funktionen 'Last Fixture' -- 'Next Fixture' (siehe [nächster
    Abschnitt](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen)), beim Programmieren von Abläufen, dem Fan-Modus sowie der
    Überlappungsfunktion.\
	Die Reihenfolge lässt sich später auch
    ändern, siehe [nächster Abschnitt](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen).\
    Die Reihenfolge innerhalb der Gruppe lässt sich beim Aufrufen
    überschreiben: halten Sie dazu die jeweilige Gruppen-Taste/den
    Button gedrückt, und wählen Sie die entsprechende Funktion mit den
    Menütasten.

-   Gruppen lassen sich auch anhand ihrer Nummer aufrufen:

1. Drücken Sie die graue <Keys.HardKey>Group</Keys.HardKey>-Taste.

2. Tippen Sie die Nummer der auszuwählenden Gruppe ein.

3. Drücken Sie <Keys.SoftKey>Recall Group</Keys.SoftKey>.

-   Beim Betätigen der <Keys.HardKey>Group</Keys.HardKey>-Taste ergeben sich auf den Menütasten
    Optionen zum Ändern und Löschen von Gruppen.

-   Mittels <Keys.HardKey>Select If</Keys.HardKey> lassen sich auch Gerätegruppen aus einer
    Selektion wieder abwählen. Damit lässt sich z.B. eine Teilmenge von
    Geräten aus einer größeren Gruppe wieder abwählen. Hat man z.B. eine
    Gruppe von Geräten am Rand einer 5x5-Matrix sowie eine andere
    Gruppe, die nur die ungeraden Geräte der Matrix enthält, so kann man
    nun zuerst die Gruppe ‚Rand' auswählen, dann <Keys.HardKey>Select If</Keys.HardKey> drücken
    und die Gruppe ‚Ungerade' wählen -- daraufhin werden die ungeraden
    Geräte am Rand ausgewählt.

### Geräte aus Gruppen entfernen

Um Geräte aus Gruppen zu löschen:

1.  Drücken Sie die graue <Keys.HardKey>Group</Keys.HardKey>-Taste.

2.  Klicken Sie die gewünschte Gruppe an. Darauf werden alle enthaltenen
    Geräte angewählt.

3.  Klicken Sie die Geräte an, die entfernt werden sollen, um sie
    abzuwählen.

4.  Verlassen Sie das Menü mit <Keys.HardKey>Exit</Keys.HardKey>.

Die Gruppe enthält nun nur die Geräte, die am Schluss noch ausgewählt
waren.

### Auto-Gruppen

Beim Patchen mehrerer Geräte werden diese automatisch zu Gruppen
zusammengefasst. So werden Gruppen pro Gerätetyp erstellt, die alle
Geräte dieses Typs enthalten (z.B. <Keys.SoftKey>All Robe Pointe</Keys.SoftKey>). Eine weitere
Gruppe wird pro Patchvorgang erstellt, wenn mehrere Geräte gepatcht
werden, z.B. <Keys.SoftKey>4 BB4</Keys.SoftKey>. Diese Funktion kann mit der Benutzereinstellung
<Keys.SoftKey>Auto Groups</Keys.SoftKey> deaktiviert werden.

Gerätereihenfolge und -anordnung in den Gruppen
------------------------------------------------

In den Gruppen werden nicht nur die ausgewählten Geräte, sondern auch
deren Reihenfolge gespeichert, welche z.B. bei Shapes, beim Fan
(Auffächern) sowie beim Überlappen zur Anwendung kommt. Ebenso lässt
sich die 2D-Position speichern, um für Shapes und Pixelmapper-Effekte
die tatsächliche Position des Geräts vorzugeben oder um diese bei der
Auswahl nach Muster zu verwenden.

### Gerätereihenfolge

<Video videoId="2TqYjvGoGXQ" title="Fixture Order" />

Zum Ändern der numerischen Geräte-Reihenfolge:

1.  Drücken Sie die Taste <Keys.HardKey>Group</Keys.HardKey>.

2.  Wählen Sie die Gruppe aus, die Sie editieren möchten.

3.  Drücken Sie <Keys.SoftKey>Fixture Order</Keys.SoftKey>.

Im Geräte-Fenster werden nun Zahlen für die einzelnen Geräte
eingeblendet.

![Fixture Order](/docs/images/Fixture-Order.png)

Um die Reihenfolge zu ändern, schalten Sie <Keys.SoftKey>Auto Increment</Keys.SoftKey> auf On,
und klicken dann in der gewünschten Reihenfolge auf die Geräte. Wird
doppelt auf ein Gerät geklickt, so wird mit einem X angezeigt, dass es
nicht Teil der Reihenfolge ist.

### Geräteanordnung

<Video videoId="9S5nQmVpPNs" title="Fixture Layout" />

Zum Ändern der 2D-Geräte-Anordnung:

1.  Drücken Sie die Taste <Keys.HardKey>Group</Keys.HardKey>.

2.  Wählen Sie die Gruppe aus, die Sie editieren möchten.

3.  Drücken Sie <Keys.SoftKey>Edit Layout</Keys.SoftKey>. Das Fenster 'Layout Editor' öffnet
sich.

Zunächst sind alle Geräte in einer Zeile nebeneinander angeordnet. Die
Anordnung ändert man einfach, indem man ein Gerät auf seine neue
Position zieht. Ebenso kann man einzelne Geräte durch Anklicken
markieren und die Position mit den Rädern verändern. Zum Ändern der
Gesamtgröße der Anordnung dient die rechte und untere Seite des Rasters
- ebenfalls klicken und ziehen.

Geräte mit mehreren Zellen werden mit allen Zellen dargestellt, können
im Layout jedoch nur als ganzes verschoben und rotiert werden. Das
Layout der Zellen wird in der jeweiligen Personality festgelegt.

Mit <Keys.SoftKey>Arrange Fixtures</Keys.SoftKey> werden die Geräte automatisch in einem Rechteck
entsprechend den Vorgaben für Rows (Zeilen, Höhe) und Columns (Spalten,
Breite) angeordnet.

![Layout Editor](/docs/images/Layout-Editor.png)

-   Die X-Koordinate entspricht dabei der Geräte-Reihenfolge. Ändert man
    das diese, so ändert sich auch die erstere.

-   Es empfiehlt sich, auch die Abstände zwischen den Geräten
    maßstabsgerecht mit in das Layout zu übernehmen und die Gesamtgröße
    entsprechend anzupassen.

-   Wenn man versehentlich mehrere Geräte genau übereinander platziert
    hat, zieht man entweder das im Vordergrund auf eine andere Position,
    oder man wählt das verdeckte z.B. über die Zifferntasten oder mit
    <Keys.HardKey>Fix+1</Keys.HardKey> aus und verschiebt es mithilfe der Räder.

-   Mit der <Keys.HardKey>Fan</Keys.HardKey>-Funktion können Geräte gleichmäßig verteilt werden.

-   Um Geräte zu verschieben oder zu rotieren, klicken und ziehen Sie
    auf dem Display oder verwenden die Räder. Dazu kann man auch auf die
    betreffenden Up/Down-Flächen der Räder im Display klicken, um die
    Werte zu ändern (+/- 1 px oder +/- 45°). Mit der @-Taste des
    jeweiligen Rades lässt sich auch der Wert numerisch eingeben.

-   Klickt man im Kontextbereich auf <Keys.SoftKey>Position and Angle</Keys.SoftKey>, so wechselt
    die Funktion zu <Keys.SoftKey>Scale</Keys.SoftKey>, und die Zellen in den betroffenen geräten
    lassen sich auffächern. Damit lassen sich z.B. die Zellgrößen bzw.
    Abstände unterschiedlicher Gerätetypen angleichen.\

    ![Position](/docs/images/Position-2.png)

    ![Scale](/docs/images/Scale.png)

-   Weitere Details und Beispiele zum Layout-Editor gibt es im Abschnitt
    zum [Pixel Mapper ](../effects/pixel-mapper.md). Es gibt außerdem
    spezielle Funktionen zur Verwendung des Layouts mit [Ai/Synergy](../synergy/operating-synergy.md#verwendung-des-layout-editors-mit-ai).

> Um die enthaltenen Geräte vorübergehend in zufälliger Reihenfolge auszuwählen, halten Sie den Gruppen-Button gedrückt und wählen mit den Menütasten <Keys.SoftKey>Random Order</Keys.SoftKey>.
