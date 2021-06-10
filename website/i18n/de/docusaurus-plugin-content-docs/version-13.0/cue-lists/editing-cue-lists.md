---
id: editing-cue-lists
title: Editing Cue Lists
sidebar_label: Editing Cue Lists
original_id: editing-cue-lists
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Dieses Kapitel beschreibt, wie Cues in Cuelisten editiert werden. 
Geht es hingegen darum, die ganze Cueliste zu verschieben, zu kopieren oder 
zu löschen, sei auf das Kapitel [Kopieren, verschieben, verlinken, löschen](../cue-lists/copying-moving-linking-and-deleting.md) verwiesen.

## Das Fenster Playback View

Am einfachsten lässt sich eine Cueliste in der Playback-Ansicht
(Playback View) editieren, dazu drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>,
gefolgt von der <strong>blauen Auswahltaste</strong> der gewünschten Cueliste. Diese Ansicht
besteht aus einer Tabelle, wobei jeder Cue mit seinen Details in einer
Zeile aufgelistet ist. Durch Anklicken einzelner Zellen lassen sich die
jeweiligen Werte verändern, und auf den Funktionstasten stehen
verschiedene Optionen zur Auswahl.

Um mehrere Cues auf einmal zu editieren, ziehen Sie in der Ansicht eine
Box um die zu ändernden Zellen.

Ferner bietet die [Intensity-Ansicht](../controlling-fixtures/viewing-and-editing-fixture-values.md#das-fenster-intensity) eine gute Möglichkeit, alle
aktiven Geräte und deren Werte zu überblicken. 

## Editieren von Werten im Fenster Cue View

Jeder einzelne Attributwert jedes Gerätes kann in der Cue-Ansicht (Cue
View) angezeigt und verändert werden. Dazu klicken Sie in der
[Playback-Ansicht](#das-fenster-playback-view) beim gewünschten Cue auf die 
Schaltfläche <strong>View</strong> (Spalte *View Cue* weit rechts). 

![Cue View Window](/docs/images/Cue-View-Window.png)

Nun können Sie wiederum einzelne oder mehrere Zellen anklicken, um die
Werte direkt zu ändern.

-   Über das Kontextmenü kann man die Anzeige von Pegeln, Shapes,
    Effekten und Zeiten aktivieren.

-   Wenn Werte von einer Palette stammen, so schaltet <strong>View Palettes</strong>
    zwischen der Anzeige der Werte und der Anzeige der Palette um.

-   Ist die Option <strong>View Tracking Levels</strong> angewählt, so werden
    getrackte, also aus vorherigen Cues übernommene Werte hellgrau
    hervorgehoben.

## Kopieren/verschieben von Cues

Es lassen sich einzelne oder mehrere Cues innerhalb einer oder zwischen
mehreren Cuelisten kopieren oder verschieben. Dazu klicken und ziehen
Sie entweder den gewünschten Cue im [Playback View](#das-fenster-playback-view) 
(drücken Sie dazu <Keys.HardKey>View / Open</Keys.HardKey>, dann die Taste der gewünschten Cueliste), 
oder verwenden Sie die <strong>Unfold-Funktion</strong> ([siehe nächster Abschnitt](#editieren-einer-cueliste-mit-unfold)) oder eine spezielle
Tasten-Syntax.

&nbsp;<strong>Kopieren/verschieben innerhalb des gleichen Playbacks:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] @ <cue> ENTER`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>][AND <cue>] ENTER <cue> ENTER`

&nbsp;<strong>Kopieren/verschieben an das Ende des gleichen Playbacks:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] @ @`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] ENTER ENTER`

&nbsp;<strong>Kopieren/verschieben in ein anderes Playback:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> <cue> ENTER`

&nbsp;<strong>Kopieren/verschieben an das Ende eines anderen Playbacks:</strong>

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> ENTER`

`COPY/MOVE <playback> <cue> [THRO <cue>] [NOT <cue>] [AND <cue>] [@] [ENTER] <playback> <playback>`

> Dabei ist `<playback>` die Taste/Schaltfläche des aktuellen
  Speicherplatzes und `<cue>` die Nummer des jeweiligen Cues; Abschnitte
  in <strong>[eckigen Klammern]</strong> sind optional.

## Editieren einer Cueliste mit 'Unfold'

Mit der Taste <Keys.HardKey>Unfold</Keys.HardKey> ('Aufklappen') wird jeder Schritt einer
Cueliste auf einen einzelnen Regler abgebildet. Damit lässt sich jeder
Schritt einzeln aufrufen und editieren, als wäre er ein eigener Cue.

1. Drücken Sie die <Keys.HardKey>Unfold</Keys.HardKey>-Taste, gefolgt von der <strong>Select-Taste</strong>
der zu ändernden Cueliste.

2. Die ersten zehn Schritte werden auf die <strong>Playback-Fader</strong> gelegt. Im
Display wird die jeweilige Schrittnummer und Bezeichnung angezeigt. 
*(Sind mehr Cues als Fader vorhanden, so kann man mit den Menütasten 
F und G weiterschalten)*.

3. <strong>Betätigen Sie einen Fader</strong>, um den jeweiligen Schritt aufzurufen
*(dabei werden die programmierten Überblendzeiten mit berücksichtigt)*.

4. Es gibt diverse Optionen bei der 'Unfold'-Funktion, die Details dazu
sind unten aufgeführt.

5. Drücken Sie <Keys.HardKey>Unfold</Keys.HardKey> nochmals, um den Modus zu verlassen.

---

-   Zum <strong>Editieren</strong> eines Schrittes drücken Sie <Keys.HardKey>Clear</Keys.HardKey> zum Leeren des
    Programmierspeichers, aktivieren den Fader des Schrittes, nehmen
    die gewünschten Änderungen vor, drücken dann <Keys.SoftKey>Record Step</Keys.SoftKey> und
    schließlich die <strong>Select-Taste</strong> des Schrittes.

-   Um den Inhalt des Programmierspeichers in den aktuellen Schritt zu
    integrieren (<strong>mergen</strong>), klicken Sie zweimal auf <Keys.SoftKey>Record Step</Keys.SoftKey>.

-   Zum Ändern der Zeiten oder der Folge des Schrittes drücken Sie
    <Keys.SoftKey>Edit Times</Keys.SoftKey>, gefolgt von der <strong>Select-Taste</strong> des Schrittes, und
    nehmen die Änderungen vor (siehe [Zeiten für Cuelisten](cue-list-timing.md)).

-   Um einen neuen Schritt <strong>einzufügen</strong>, stellen Sie das gewünschte Bild
    ein, drücken B <Keys.SoftKey>Insert Step</Keys.SoftKey>, dann die Taste des Schrittes, auf
    die dieser programmiert werden soll. Alle folgenden Schritte werden
    um eins verschoben, und der neue Schritt erhält eine Nummer zwischen
    den beiden existierenden Schritten (*drückt man etwa die Taste für
    Schritt 3, so erhält dieser die Schrittnummer 2.5*).

-   Zum <strong>Verschieben</strong> oder <strong>Kopieren</strong> eines Cues drücken Sie <Keys.HardKey>Copy</Keys.HardKey> (ggf.
    mehrfach) oder <Keys.HardKey>Move</Keys.HardKey>, dann die <strong>Auswahltaste</strong> des gewünschten Cues,
    und schließlich die <strong>Auswahltaste</strong> für den gewünschten Ziel-Cue.

-   Zum Löschen eines Schrittes drücken Sie die blaue <Keys.HardKey>Delete</Keys.HardKey>-Taste,
    gefolgt von der <strong>Select-Taste</strong> des zu löschenden Schrittes.
    Drücken Sie zur Bestätigung die <strong>Select-Taste</strong> nochmals.

-   Zum Ändern der Bezeichnung drücken Sie <Keys.SoftKey>Set Step Legend</Keys.SoftKey>, gefolgt
    von der <strong>Select-Taste</strong> des betreffenden Schrittes.

-   Enthält die Cueliste mehr Schritte als Fader vorhanden sind, so
    lässt sich mit den Funktionstasten F und G die Seite umschalten

## Update und Cue-Tracking

Da in einer Cueliste die einzelnen Werte für die einzelnen Cues
nachverfolgt werden [Tracking](cue-list-playback.md#tracking), muss 
beim Ändern eines bestimmten Schritts ermittelt werden, aus welchem 
Schritt die zu ändernden Werte stammen. 

Die <strong>Update</strong>-Funktion geht die vorherigen Schritte durch und ermittelt,
welcher Schritt genau geändert werden muss.

1. Bei gestarteter Cueliste wählen Sie die Geräte aus und ändern sie
wie gewünscht.

2. Drücken Sie <Keys.HardKey>Update</Keys.HardKey> *(auf alten Pulten <Keys.HardKey>Record Cue</Keys.HardKey>, dann
<Keys.SoftKey>Update</Keys.SoftKey>)*.

3. Drücken Sie <Keys.HardKey>Enter</Keys.HardKey>, um die neuen Werte direkt in die Cueliste zu
übernehmen.

> Alternativ wird bei den Funktionstasten eine Liste der Paletten und
Playbacks angezeigt, die aktualisiert werden können. Wählen Sie den
gewünschten Eintrag.\
Haben Sie die Funktionstasten-Option verwendet, drücken Sie
<Keys.HardKey>Enter</Keys.HardKey>, um den Vorgang abzuschließen.

Stammten die geänderten Attribute von einem vorherigen Cue, so wird
dieser - und nicht der aktuell laufende - geändert, siehe 
 [Tracking](cue-list-playback.md#tracking).

## Editieren einer laufenden Cueliste

Ebenso lassen sich Schritte einer laufenden Cueliste ändern, ohne
[Unfold](#editieren-einer-cueliste-mit-unfold) nutzen zu müssen: 

1. <strong>Starten Sie die Cueliste</strong> mit dem entsprechenden Fader.

2. Wählen Sie mit <strong>Encoder A</strong> den zu ändernden Schritt, und aktivieren Sie
diesen mit der <Keys.HardKey>Go</Keys.HardKey>-Taste. *(Beim Pearl Expert/Tiger Touch Mk1 
drücken Sie statt der Go-Taste die Taste <Keys.HardKey>↔</Keys.HardKey> oberhalb der Taste Snap Back)*

3. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den Programmierspeicher zu leeren.

4. Nehmen Sie die gewünschten Änderungen vor.

5. Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, <Keys.HardKey>Connect</Keys.HardKey> *(bzw. <Keys.HardKey>Rec. Step</Keys.HardKey> bei älteren 
Pulten)*, und wählen dann <Keys.SoftKey>Replace</Keys.SoftKey> (Ersetzen), <Keys.SoftKey>Merge</Keys.SoftKey>(Zusammenfügen),
oder <Keys.SoftKey>Insert After</Keys.SoftKey> (danach einfügen), um die Änderungen zu speichern (ein
nochmaliger Druck auf <Keys.HardKey>Rec. Step</Keys.HardKey> wählt automatisch <Keys.SoftKey>Merge</Keys.SoftKey>).

6. Drücken Sie <Keys.HardKey>Go</Keys.HardKey>, um zum nächsten Schritt zu gelangen *(Beim Pearl 
Expert/Tiger Touch Mk1 drücken Sie statt der Go-Taste die Taste <Keys.HardKey>↔</Keys.HardKey>)*.

### Ändern der Zeiten einer laufenden Cueliste

Die Zeiten jedes Schritts lassen sich wie folgt mit den Tasten
<Keys.HardKey>Live Time</Keys.HardKey> und <Keys.HardKey>Next Time</Keys.HardKey> *(nicht auf allen Pulten)* ändern:

1.  <strong>Starten Sie die Cueliste</strong> mit dem entsprechenden Fader.

2.  Wählen Sie mit <strong>Encoder A</strong> den zu ändernden Schritt, und aktivieren
    Sie diesen mit der <Keys.HardKey>Go</Keys.HardKey>-Taste. (Beim Pearl Expert/Tiger Touch Mk1:
	Taste <Keys.HardKey>↔</Keys.HardKey>).

3.  Drücken Sie die Taste <Keys.HardKey>Live Time</Keys.HardKey>, um die Zeiten für den
    aktuellen, oder <Keys.HardKey>Next Time</Keys.HardKey>, um die für den nächsten Schritt
    einzugeben. Die Schrittnummern für den aktuellen sowie den nächsten
    Schritt werden im Display oberhalb der Räder angezeigt.

4.  Geben Sie die Zeiten, Schrittverknüpfung (Link) und Versatz (Overlap)
    mit den Funktionstasten ein (siehe [Zeiten für Cuelisten](cue-list-timing.md)).
	Ändern Sie die die Link-Option auf <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey> oder 
	<Keys.SoftKey>Link After Previous Cue</Keys.SoftKey>, so wartet dieser Schritt nicht auf die 
	<Keys.HardKey>Go</Keys.HardKey>-Taste, sondern startet automatisch.

5.  Drücken Sie <Keys.HardKey>Go</Keys.HardKey> (bzw. <Keys.HardKey>↔</Keys.HardKey>), um zum nächsten Schritt zu gelangen.

Die Taste <Keys.HardKey>Review</Keys.HardKey> dient zur Überprüfung des aktuellen Schritts
mit den neuen Zeitvorgaben.

*Alternativ kann man die <Keys.HardKey>Unfold</Keys.HardKey>-Funktion verwenden, um die Zeiten
zu ändern, siehe [vorheriger Abschnitt](#editieren-einer-cueliste-mit-unfold).*

## Editieren einer Cueliste während des Programmierens

Einzelne Schritte lassen sich editieren, noch während man die Cueliste
programmiert:

1. Drücken Sie <Keys.SoftKey>Cue Number=x</Keys.SoftKey> und geben die Nummer des gewünschten
Schritts an.

2. Der gewählte Schritt wird angezeigt.

3. Nehmen Sie die gewünschten Änderungen vor, oder ändern Sie die
Zeiten mit <Keys.SoftKey>Edit Cue x Times</Keys.SoftKey>

4. Drücken Sie <Keys.SoftKey>Update Cue x</Keys.SoftKey> (bzw. <Keys.HardKey>Rec. Step</Keys.HardKey>) zum Speichern der Änderungen.

### Update-Modus

Mit der Menütaste <Keys.SoftKey>Update Mode</Keys.SoftKey> lässt sich einstellen, wie
Änderungen getrackt werden. 

Update-Modus | Beschreibung
---|---
&nbsp;<strong>Forwards</strong> ![Cue List Update Mode Forwards](/docs/images/Cue-List-Update-Mode-Forwards.png) | Ändert die Werte in diesem Cue und trackt die Änderungen in alle folgenden Cues, bis die betreffenden Kanäle erneut geändert werden. Vorherige Cues werden nicht geändert.
&nbsp;<strong>Backwards</strong> ![Cue List Update Mode Backwards](/docs/images/Cue-List-Update-Mode-Backwards.png) | Setzt die Änderungen rückwirkend bis zur letzten Änderung um.
&nbsp;<strong>Both</strong> ![Cue List Update Mode Both](/docs/images/Cue-List-Update-Mode-Both.png) | Tracking in beide Richtungen, d.h. rückwirkend ab der letzten Änderung, sowie in allen folgenden Cues bis zur nächsten Änderung.
&nbsp;<strong>Cue Only</strong> ![Cue List Update Mode Cue Only](/docs/images/Cue-List-Update-Mode-Cue-Only.png) | Nur der aktuelle Cue wird geändert.


> Die Schrittnummer lässt sich auf diese Weise nicht ändern; ein Druck
  auf <Keys.SoftKey>Cue Number</Keys.SoftKey> ändert die Nummer des aktuell neu zu speichernden
  Schrittes. Wählen Sie <Keys.SoftKey>Advanced Options</Keys.SoftKey>, um die Schrittnummern zu
  ändern.

## Werte in mehreren Cues gleichzeitig aktualisieren

Werte können auch in mehreren Cues einer Cueliste/eines Chasers
gleichzeitig aktualisiert (mittels <strong>Merge/Verschmelzen</strong> oder
&nbsp;<strong>Replace/Ersetzen</strong>) werden. Dies kann sowohl mit numerischer Eingabe als
auch in der [Playback-Ansicht](#das-fenster-playback-view) erfolgen. 

In der Playback-Ansicht drücken Sie die Taste <Keys.HardKey>Record</Keys.HardKey> und klicken
dann im Bildschirm auf den gewünschten Cue/die Cues. Wählen Sie nun
<Keys.SoftKey>Merge</Keys.SoftKey> oder <Keys.SoftKey>Replace</Keys.SoftKey> (oder drücken Sie <Keys.HardKey>Enter</Keys.HardKey>, um zu Mergen).
Damit wird der momentane Inhalt des Programmers in die ausgewählten Cues
übernommen.

Bei Verwendung der Zifferntasten verbinden Sie zunächst die Cueliste
mittels <Keys.HardKey>Connect</Keys.HardKey> mit der Steuerung und klicken auf <Keys.SoftKey>Rec. Step</Keys.SoftKey>. Nun
verwenden Sie die Syntax `<n> THRU <m>`, um eine Folge von Cues zu
ändern, oder `<n> AND <m>`, um mehrere Cues einzeln auszuwählen. Ist
die [Playback-Ansicht](#das-fenster-playback-view) geöffnet, so werden die 
gewählten Cues rot markiert. Sind alle zu ändernden Cues ausgewählt, 
drücken Sie <Keys.HardKey>Enter</Keys.HardKey> und wählen <Keys.SoftKey>Merge</Keys.SoftKey> oder <Keys.SoftKey>Replace</Keys.SoftKey> (nochmaliges 
Betätigen von <Keys.HardKey>Enter</Keys.HardKey> wählt Merge).

## Deaktivieren eines Cues

Einzelne Cues können vorübergehend deaktiviert werden. Klicken Sie dazu
auf die Zelle 'Disabled' ganz rechts beim jeweiligen Cue in der
Playback-Ansicht. Mit den Funktionstasten wählen Sie nun \[Cue
Disabled Yes\]. Ist ein Cue deaktiviert (disabled), so wird er übersprungen,
als wäre er nicht vorhanden, kann aber später wieder aktiviert werden

## Einzelne Cues mit Include in den Programmer laden

Mit <strong>[Include](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)</strong> 
können einzelne Cues aus einer Cueliste in den Programmer
geladen werden. Drücken Sie dazu <Keys.HardKey>Include</Keys.HardKey>, wählen die Cueliste aus, geben die Cuenummer ein und drücken <Keys.SoftKey>Include Cue</Keys.SoftKey>.

Soll ein Cue aus der gerade verbundenen Cueliste included werden, so
drücken Sie <Keys.HardKey>Include</Keys.HardKey>, <Keys.HardKey>Connect</Keys.HardKey>, geben die Nummer des Cues ein und
wählen <Keys.SoftKey>Include Cue</Keys.SoftKey>.

Auf diese Weise kann man Cues aus Cuelisten auch anderweitig
weiterverwenden sowie Shapes/Effekte in diesem Cue editieren (geht auch
per [Playback View](#das-fenster-playback-view)).