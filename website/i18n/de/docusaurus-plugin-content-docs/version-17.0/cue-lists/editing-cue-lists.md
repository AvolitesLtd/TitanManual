---
id: editing-cue-lists
title: Editieren
sidebar_label: Editieren
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Dieses Kapitel beschreibt, wie Cues in Cuelisten editiert werden. 
Geht es hingegen darum, die ganze Cueliste zu verschieben, zu kopieren oder 
zu löschen, sei auf das Kapitel [Kopieren, verschieben, verlinken, löschen](../cue-lists/copying-moving-linking-and-deleting.md) verwiesen.

## Das Fenster Playback View

Am einfachsten lässt sich eine Cueliste in der Playback-Ansicht
(Playback View) editieren, dazu drücken Sie <Keys.HardKey>Open/View</Keys.HardKey>,
gefolgt von der **Auswahltaste** der gewünschten Cueliste. Diese Ansicht
besteht aus einer Tabelle, wobei jeder Cue mit seinen Details in einer
Zeile aufgelistet ist. Durch Anklicken einzelner Zellen lassen sich die
jeweiligen Werte verändern, und auf den Funktionstasten stehen
verschiedene Optionen zur Auswahl.

![Playback view](/docs/images/Cue-List-Window-with-Autoload-playback.png)

Um mehrere Cues auf einmal zu editieren, ziehen Sie in der Ansicht eine
Box um die zu ändernden Zellen.

Ferner bietet die [Intensity-Ansicht](../controlling-fixtures/viewing-and-editing-fixture-values.md#das-fenster-intensity-view) eine gute Möglichkeit, alle
aktiven Geräte und deren Werte zu überblicken. 

## Editieren von Werten im Fenster Cue View

Jeder einzelne Attributwert jedes Gerätes kann in der Cue-Ansicht (Cue
View) angezeigt und verändert werden. Dazu klicken Sie in der
[Playback-Ansicht](#das-fenster-playback-view) beim gewünschten Cue auf die 
Schaltfläche **View** (Spalte *View Cue* weit rechts). 

![Cue View Window](/docs/images/Cue-View-Window.png)

Nun können Sie wiederum einzelne oder mehrere Zellen anklicken, um die
Werte direkt zu ändern.

-   Über das Kontextmenü kann man die Anzeige von Pegeln, Shapes,
    Effekten und Zeiten aktivieren.

-   Einzelne Werte können deaktiviert werden, indem man sie anklickt und aus dem Menü die Funktion <Keys.SoftKey>Off</Keys.SoftKey> wählt. Auf **Off** gesetzte Werte können später mit <Keys.SoftKey>On</Keys.SoftKey> wieder aktiviert werden.

-   Um ganze Fixtures aus einem Cue zu entfernen, wählt man die Geräte in der linken Spalte aus und drückt im Menü auf  <Keys.SoftKey>Remove Fixtures</Keys.SoftKey>.

-   Wenn Werte von einer Palette stammen, so schaltet die Kontext-Option <Keys.ContextKey>View Palettes</Keys.ContextKey> zwischen der Anzeige der Werte und der Anzeige der Palette um.

-   Je nach Tracking-Verhalten werden die Werte in verschiedenen Farben angezeigt. Im Fenster [Tracking View](./editing-cue-lists.md#editieren-getrackter-cues-mit-dem-tracking-view) lässt sich das Tracking genauer einstellen.
    -  **Weiß** sind unveränderte harte (fest programmierte) ungetrackte Werte.
    -  **Grün** sind fest programmierte Werte, die gegenüber dem vorigen Cue kleiner sind.
    -  **Cyan** sind fest programmierte Werte, die gegenüber dem vorigen Cue größer sind, oder die erstmalig gesetzt werden.
    -  **Magenta** sind getrackte Werte (In der Spalte *Tracking* steht dazu *Tracked*).
    -  **Rot** sind geblockte Werte.

-   Die Anzeige getrackter Werte lässt sich im Kontextmenü mit <Keys.ContextKey>Show/Hide Tracked Values</Keys.ContextKey> aktivieren/deaktivieren.

## Kopieren, Verschieben und Löschen einzelner Cues

Es lassen sich auf verschiedene Weise einzelne oder mehrere Cues innerhalb 
einer oder zwischen mehreren Cuelisten kopieren oder verschieben:

Man kann die **Unfold-Funktion** ([siehe nächster Abschnitt](#editieren-einer-cueliste-mit-unfold)) nutzen.

Um einen Cue zu verschieben, kann man diesen im Fenster [Playback View](#das-fenster-playback-view) anklicken und verschieben, oder man klickt 
auf die Nummer des Cues und ändert diese mit der Menütaste <Keys.SoftKey>Change To</Keys.SoftKey>
(sobald die Nummer geändert wurde, ändert sich auch die Reihenfolge der Cues).

Um einen Cue zu löschen, drücken Sie die <Keys.HardKey>Delete</Keys.HardKey>-Taste, wählen 
den Cue im Playback-View aus, und klicken zur Bestätigung den Cue nochmals 
an oder drücken <Keys.HardKey>Enter</Keys.HardKey> oder <Keys.SoftKey>Confirm</Keys.SoftKey>.

Ebenso lässt sich eine Tastensyntax verwenden: 

- Dabei ist **<Keys.ContextKey>fader select</Keys.ContextKey>** die Auswahltaste des aktuellen
  Speicherplatzes und **n** die Nummer des jeweiligen Cues; Abschnitte
  in **[eckigen Klammern]** sind optional. Die <Keys.HardKey>@</Keys.HardKey>-Taste ist die bei 
  den Zifferntasten.

Tastenfolge                                                  | Ergebnis
------------                                                 |---------
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>@</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey>          | Kopieren von Cue **n** nach Cue **m** in der gleichen Cueliste
<Keys.HardKey>Move</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>@</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey>          | Verschieben von Cue **n** nach Cue **m** in der gleichen Cueliste
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>                    | Kopieren von Cue **n** als neuer Cue an das Ende der Cueliste
<Keys.HardKey>Delete</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey>          | Löschen von Cue **n**
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.ContextKey>fader select</Keys.ContextKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Kopieren von Cue **n** nach Cue **m** in einer anderen Cueliste
<Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **n** <Keys.ContextKey>fader select</Keys.ContextKey> <Keys.HardKey>Enter</Keys.HardKey>       | Kopieren von Cue **n** an das Ende einer anderen Cueliste

- Anstelle von <Keys.HardKey>Copy</Keys.HardKey> lässt sich <Keys.HardKey>Move</Keys.HardKey>
 verwenden, um Cues nicht zu kopieren, sondern zu **verschieben**. Auf älteren Pulten ohne 
eine <Keys.HardKey>Move</Keys.HardKey>-Taste drücken Sie <Keys.HardKey>Avo</Keys.HardKey> 
und <Keys.HardKey>Copy</Keys.HardKey>.

- Zum Kopieren/Verschieben **mehrerer** Cues verwenden Sie <Keys.HardKey>Thru</Keys.HardKey>
, <Keys.HardKey>And</Keys.HardKey> und <Keys.SoftKey>Not</Keys.SoftKey>. Um z.B. die Cues 3, 
4, 5, 7, 10 als neuen Block ab Cue 20 zu kopieren, drücken 
Sie <br/><Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> 
3 <Keys.HardKey>Thru</Keys.HardKey> 7 <Keys.SoftKey>Not</Keys.SoftKey> 
6 <Keys.HardKey>And</Keys.HardKey> 10 <Keys.HardKey>@</Keys.HardKey> 
20 <Keys.HardKey>Enter</Keys.HardKey>

- Sie können auch <Keys.HardKey>Enter</Keys.HardKey> statt <Keys.HardKey>@</Keys.HardKey> 
verwenden, wenn Sie damit eher vertraut sind. Um z.B. einen Cue an das Ende der aktuellen 
Cueliste zu kopieren, drücken Sie in diesem Fall <Keys.HardKey>Copy</Keys.HardKey>
&nbsp; <Keys.ContextKey>fader select</Keys.ContextKey> n <Keys.HardKey>Enter</Keys.HardKey>
&nbsp; <Keys.HardKey>Enter</Keys.HardKey>

## Editieren einer Cueliste mit 'Unfold'

Alternativ kann man Cuelisten bearbeiten, indem mit der Taste <Keys.HardKey>Unfold</Keys.HardKey> 
('Aufklappen') jeder Schritt einer Cueliste auf einen einzelnen Regler abgebildet wird. Damit lässt sich jeder
Schritt einzeln aufrufen und editieren, als wäre er ein eigener Cue.

1. Drücken Sie die <Keys.HardKey>Unfold</Keys.HardKey>-Taste, gefolgt von der **Auswahltaste**
der zu ändernden Cueliste.
2. Die ersten zehn Schritte werden auf die **Playback-Fader** gelegt. Im
Display wird die jeweilige Schrittnummer und Bezeichnung angezeigt. 
*(Sind mehr Cues als Fader vorhanden, so kann man mit den Menütasten 
F und G auf die vorige/nächste Seite Fader umschalten)*.
3. **Betätigen Sie einen Fader**, um den jeweiligen Schritt aufzurufen
*(dabei werden die programmierten Überblendzeiten mit berücksichtigt)*.
4. *Es gibt diverse Optionen bei der 'Unfold'-Funktion, die Details dazu
sind unten aufgeführt*.
5. Drücken Sie <Keys.HardKey>Unfold</Keys.HardKey> nochmals, um den Modus zu verlassen.

-   Zum **Editieren** eines Schrittes drücken Sie <Keys.HardKey>Clear</Keys.HardKey> zum Leeren des
    Programmierspeichers, aktivieren den Fader des Schrittes, nehmen
    die gewünschten Änderungen vor, drücken dann <Keys.SoftKey>Record Step</Keys.SoftKey> und
    schließlich die **Select-Taste** des Schrittes.

-   Um den Inhalt des Programmierspeichers in den aktuellen Schritt zu
    integrieren (**mergen**), klicken Sie zweimal auf <Keys.SoftKey>Record Step</Keys.SoftKey>.

-   Zum Ändern der Zeiten oder der Folge des Schrittes drücken Sie <Keys.SoftKey>Edit 
	Times</Keys.SoftKey>, gefolgt von der **Select-Taste** des 
	Schrittes, und nehmen die Änderungen vor, siehe [Zeiten für Cuelisten](cue-list-timing.md).

-   Um einen neuen Schritt **einzufügen**, stellen Sie das gewünschte Bild
    ein, drücken B <Keys.SoftKey>Insert Step</Keys.SoftKey>, dann die Taste des Schrittes, auf
    die dieser programmiert werden soll. Alle folgenden Schritte werden
    um eins verschoben, und der neue Schritt erhält eine Nummer zwischen
    den beiden existierenden Schritten (*drückt man etwa die Taste für
    Schritt 3, so erhält dieser die Schrittnummer 2.5*).

-   Zum **Verschieben** oder **Kopieren** eines Cues drücken Sie <Keys.HardKey>Copy</Keys.HardKey> (ggf.
    mehrfach) oder <Keys.HardKey>Move</Keys.HardKey>, dann die **Auswahltaste** des gewünschten Cues,
    und schließlich die **Auswahltaste** für den gewünschten Ziel-Cue.

-   Zum Löschen eines Schrittes drücken Sie die blaue <Keys.HardKey>Delete</Keys.HardKey>-Taste,
    gefolgt von der **Select-Taste** des zu löschenden Schrittes.
    Drücken Sie zur Bestätigung die **Select-Taste** nochmals.

-   Zum Ändern der Bezeichnung drücken Sie <Keys.SoftKey>Set Step Legend</Keys.SoftKey>, gefolgt
    von der **Select-Taste** des betreffenden Schrittes.

-   Enthält die Cueliste mehr Schritte als Fader vorhanden sind, so
    lässt sich mit den Funktionstasten F und G die Seite umschalten


## Editieren getrackter Cues mit dem Tracking View

Im Fenster **Tracking View** wird eine gute Übersicht über die aktuellen Werte von Dimmer- und anderen Kanälen angezeigt, und man sieht, ob diese in diesem Cue gespeichert oder aber aus vorigen Cues getrackt sind. Das ist sehr nützlich, um eine Cueliste nach hektischem Programmieren aufzuräumen, wenn versehentlich Werte hart einprogrammiert wurden, oder um rauszubekommen, aus welchem Cue denn ein falscher getrackter Wert stammt.

Das Fenster 'Tracking View' öffnet man durch einen Klick auf den Kontext-Button <Keys.ContextKey>View Tracking</Keys.ContextKey> im Playback View der Cueliste.

- Sie können auch zweimal auf <Keys.HardKey>Open/View</Keys.HardKey> drücken und das Fenster 'Tracking View' auswählen, müssen aber in diesem Fall die Cueliste, die angezeigt werden soll, mit den Menütasten wählen.
- Um eine andere Cueliste anzuzeigen, verwenden Sie <Keys.ContextKey>Select Cue List</Keys.ContextKey> aus dem Kontextmenü.

![Tracking View Window](/docs/images/Tracking-View.png)

Die Cues der Cueliste werden tabellarisch angezeigt. Je nach Tracking-Verhalten werden die Werte der einzelnen Attribute in verschiedenen Farben angezeigt
-  **Weiß** sind unveränderte harte (fest programmierte) ungetrackte Werte.
-  **Grün** sind fest programmierte Werte, die gegenüber dem vorigen Cue kleiner sind.
-  **Cyan** sind fest programmierte Werte, die gegenüber dem vorigen Cue größer sind, oder die erstmalig gesetzt werden.
-  **Magenta** sind getrackte Werte (In der Spalte *Tracking* steht dazu *Tracked*).
-  **Rot** sind geblockte Werte.

Auf der linken Seite des Fensters sind verschiedene Filter verfügbar. So kann man
- die Attribute nur einer oder aller Attributbänke anzeigen
- die Werte der Attributbank anzeigen, die mit den normalen Tasten des Pultes angewählt ist
- die Werte der aktuell angewählten Geräte anzeigen
- die Werte der Geräte eines bestimmten Typs anzeigen.

Klickt man einzelne oder mehrere der Werte im Display an, so werden auf den Menütasten verschiedene Funktionen verfügbar; mit <Keys.HardKey>Exit</Keys.HardKey> wird die Auswahl beendet.

- &nbsp;<Keys.SoftKey>Select Function</Keys.SoftKey> öffnet ein Untermenü zur Eingabe von Werten oder Auswahl einer bestimmten Funktion. 
- &nbsp;<Keys.SoftKey>Tracking</Keys.SoftKey> öffnet ein Untermenü zur Auswahl des Trackingmodus.
- &nbsp;<Keys.SoftKey>Set Hard Value</Keys.SoftKey> speichert die angewählten Werte als harte Werte in die betreffenden Cues.
- &nbsp;<Keys.SoftKey>Delete</Keys.SoftKey> löscht harte (in die Cues programmierte) Werte aus den betreffenden Cues. Getrackte Werte bleiben unverändert.
- &nbsp;<Keys.SoftKey>Delete Redundant</Keys.SoftKey> löscht harte Werte, soweit die gleichen Werte ohnehin getrackt sind. Damit können versehentlich gespeicherte harte Werte auch in mehreren Cues und Attributen auf einmal gelöscht werden, so dass die Cueliste wieder sauber trackt. man kann auch ganze Spalten und Zeilen auswählen.
- &nbsp;<Keys.SoftKey>Off</Keys.SoftKey> deaktiviert die angewählten Werte.
- &nbsp;<Keys.SoftKey>On</Keys.SoftKey> aktiviert die angewählten Werte, soweit sie vorher deaktiviert wurden.
Weitere Informationen zu On/Off siehe [Off](../cues/editing-cues.md#deaktivieren-von-attributen-in-cues-mit-off).

Wurden für Fixtures oder Attribute spezielle Tracking-Anweisungen programmiert, so wird dies durch T (Track), B (Block), C (Cue Only) or S (Solo) angezeigt.

### Anzeigeoptionen für den Tracking View

Mit dem Button <Keys.ContextKey>Cog</Keys.ContextKey> werden die Anzeigeoptionen aufgerufen, und es lässt sich folgendes einstellen:

- &nbsp;<Keys.ContextKey>Column Size</Keys.ContextKey> (Spaltenbreite), Small (schmal), Normal, Large (breit), Super Size (sehr breit).
- &nbsp;<Keys.ContextKey>Window Scroll</Keys.ContextKey> Bildlauf, entweder automatisch mit <Keys.ContextKey>Next Cue</Keys.ContextKey>, oder manuell mit <Keys.ContextKey>Manual</Keys.ContextKey>.
- &nbsp;<Keys.ContextKey>Scroll offset from top</Keys.ContextKey> bestimmt, wie viele Cues vorher angezeigt werden.
- &nbsp;<Keys.ContextKey>Palettes</Keys.ContextKey> legt die Anzeige bei Verwendung von Paletten fest:<br/>
  -  &nbsp;<Keys.ContextKey>Hidden</Keys.ContextKey> nur der Wert wird gezeigt <br/>
  -  &nbsp;<Keys.ContextKey>Legend Only</Keys.ContextKey> nur die Legende der Palette wird gezeigt.<br/>
  -  &nbsp;<Keys.ContextKey>Legend and Value</Keys.ContextKey> Legende wird gezeigt, dazu der Wert, sofern der Platz dafür ausreicht.

Für eine bessere Übersicht können auch verschiedene Bereiche ausgeblendet werden:
- <Keys.ContextKey>Attribute Filters</Keys.ContextKey>
- <Keys.ContextKey>Selection Filters</Keys.ContextKey>
- <Keys.ContextKey>Fixture Filters</Keys.ContextKey>
- <Keys.ContextKey>Tracking Column</Keys.ContextKey>
- <Keys.ContextKey>Legend Column</Keys.ContextKey>
- <Keys.ContextKey>Fixture Legends</Keys.ContextKey>
- <Keys.ContextKey>Scroll Bars</Keys.ContextKey>

Im Kontextmenü für den Tracking View gibt es verschiedene Filter und Sortierungen. 

Sortierungen:
- <Keys.ContextKey>Attributes</Keys.ContextKey> können entweder in der normalen IPCGBES Reihenfolge angezeigt werden, oder mit der der gerade ausgewählten Attributbank als erstes, und die anderen Attributbänke folgen.
- <Keys.ContextKey>Fixtures</Keys.ContextKey> können sortiert werden nach User Number, Last Selected (zuletzt angewählt) und DMX-Adresse.
- <Keys.ContextKey>Columns</Keys.ContextKey> (Spalten) können sortiert werden als "Fixture then Attribute" (Geräte zuerst; jedes Fixture wird mit allen Attributen angezeigt) oder als "Attribute then Fixture" (gleiche Attribute werden zusammen aufgelistet).

Filter:
- <Keys.ContextKey>Bank Selection</Keys.ContextKey> wenn aktiviert, werden nur die Attribute der aktuell angewählten Attributbank angezeigt (damit folgt die Attributauswahl umgekehrt auch dem Filter im Fenster Tracking View).
- <Keys.ContextKey>Fixture Selection</Keys.ContextKey> wenn aktiviert, werden nur aktuell angewählte Geräte angezeigt.


## Update und Cue-Tracking

Da in einer Cueliste die einzelnen Werte für die einzelnen Cues
nachverfolgt werden [Tracking](cue-list-playback.md#tracking), muss 
beim Ändern eines bestimmten Schritts ermittelt werden, aus welchem 
Schritt die zu ändernden Werte stammen. 

Die **Update**-Funktion geht die vorherigen Schritte durch und ermittelt,
welcher Schritt genau geändert werden muss.

1. Bei gestarteter Cueliste wählen Sie die Geräte aus und ändern sie
wie gewünscht.
2. Drücken Sie <Keys.HardKey>Update</Keys.HardKey> *(auf 
alten Pulten <Keys.HardKey>Record Cue</Keys.HardKey>, dann <Keys.SoftKey>Update</Keys.SoftKey>)*.
3. Drücken Sie <Keys.HardKey>Enter</Keys.HardKey>, um die neuen Werte direkt in die Cueliste zu
übernehmen.

> Alternativ wird bei den Funktionstasten eine Liste der Paletten und
Playbacks angezeigt, die aktualisiert werden können. Wählen Sie den zu ändernden
Eintrag.

Haben Sie die Funktionstasten-Option verwendet, drücken Sie <Keys.HardKey>Enter</Keys.HardKey>,
 um den Vorgang abzuschließen.

Stammten die geänderten Attribute von einem vorherigen Cue, so wird
dieser - und nicht der aktuell laufende - geändert, siehe 
 [Tracking](cue-list-playback.md#tracking).

## Editieren einer laufenden Cueliste

Ebenso lassen sich Schritte einer laufenden Cueliste ändern, ohne
[Unfold](#editieren-einer-cueliste-mit-unfold) nutzen zu müssen: 

1. **Starten Sie die Cueliste** mit dem entsprechenden Fader.
2. Wählen Sie mit **Encoder A** den zu ändernden Schritt, und aktivieren Sie
diesen mit der <Keys.HardKey>Go</Keys.HardKey>-Taste. *(Beim Pearl Expert/Tiger Touch Mk1 
drücken Sie statt der Go-Taste die Taste <Keys.HardKey>↔</Keys.HardKey> oberhalb der Taste Snap Back)*
3. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den Programmierspeicher zu leeren.
4. Nehmen Sie die gewünschten Änderungen vor.
5. Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, <Keys.HardKey>Connect / Cue</Keys.HardKey> *(bzw. <Keys.HardKey>Rec. Step</Keys.HardKey> bei älteren 
Pulten)*, und wählen dann <Keys.SoftKey>Replace</Keys.SoftKey> (Ersetzen), <Keys.SoftKey>Merge</Keys.SoftKey>(Verschmelzen),
oder <Keys.SoftKey>Insert After</Keys.SoftKey> (danach einfügen), um die Änderungen zu speichern (ein
nochmaliger Druck auf <Keys.HardKey>Rec. Step</Keys.HardKey> wählt automatisch <Keys.SoftKey>Merge</Keys.SoftKey>).
6. Drücken Sie <Keys.HardKey>Go</Keys.HardKey>, um zum nächsten Schritt zu gelangen *(Beim Pearl 
Expert/Tiger Touch Mk1 drücken Sie statt der Go-Taste die Taste <Keys.HardKey>↔</Keys.HardKey>)*.

> Die vorgenommenen Änderungen lassen sich auch wie folgt in den aktuellen Cue 
  speichern <br/><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Connect / 
  Cue</Keys.HardKey> <Keys.HardKey>Connect / Cue</Keys.HardKey>.


## Ändern der Zeiten einer laufenden Cueliste

Die Zeiten jedes Schritts lassen sich wie folgt mit den 
Tasten <Keys.HardKey>Live Time</Keys.HardKey> und <Keys.HardKey>Next 
Time</Keys.HardKey> *(nicht auf allen Pulten)* ändern:

1.  **Starten Sie die Cueliste** mit dem entsprechenden Fader.
2.  Wählen Sie mit **Encoder A** den zu ändernden Schritt, und aktivieren
    Sie diesen mit der <Keys.HardKey>Go</Keys.HardKey>-Taste. (Beim Pearl Expert/Tiger Touch Mk1:
	Taste <Keys.HardKey>↔</Keys.HardKey>).
3.  Drücken Sie die Taste <Keys.HardKey>Live Time</Keys.HardKey>, um die Zeiten für den
    aktuellen, oder <Keys.HardKey>Next Time</Keys.HardKey>, um die für den nächsten Schritt
    einzugeben. Die Schrittnummern für den aktuellen sowie den nächsten
    Schritt werden im Display oberhalb der Räder angezeigt.
4.  Geben Sie die Zeiten, Schrittverknüpfung (Link) und Versatz (Overlap)
    mit den Funktionstasten ein (siehe [Zeiten für Cuelisten](cue-list-timing.md)).
	Ändern Sie die die Link-Option auf <Keys.SoftKey>Link With Previous 
	Cue</Keys.SoftKey> oder <Keys.SoftKey>Link After Previous Cue</Keys.SoftKey>, so wartet 
	dieser Schritt nicht auf die <Keys.HardKey>Go</Keys.HardKey>-Taste, sondern startet 
	automatisch.
5.  Drücken Sie <Keys.HardKey>Go</Keys.HardKey> (bzw. <Keys.HardKey>↔</Keys.HardKey>), 
	um zum nächsten Schritt zu gelangen.

- Die Taste <Keys.HardKey>Review</Keys.HardKey> dient zur Überprüfung des aktuellen Schritts
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
4. Drücken Sie <Keys.SoftKey>Update Cue x</Keys.SoftKey> (bzw. <Keys.HardKey>Rec. 
Step</Keys.HardKey>) zum Speichern der Änderungen.

### Update-Modus

Mit der Menütaste <Keys.SoftKey>Update Mode</Keys.SoftKey> lässt sich einstellen, wie
Änderungen getrackt werden. 

Update-Modus | Beschreibung
---|---
&nbsp;**Forwards** ![Cue List Update Mode Forwards](/docs/images/Cue-List-Update-Mode-Forwards.png) | Ändert die Werte in diesem Cue und trackt die Änderungen in alle folgenden Cues, bis die betreffenden Kanäle erneut geändert werden. Vorherige Cues werden nicht geändert.
&nbsp;**Backwards** ![Cue List Update Mode Backwards](/docs/images/Cue-List-Update-Mode-Backwards.png) | Setzt die Änderungen rückwirkend bis zur letzten Änderung um.
&nbsp;**Both** ![Cue List Update Mode Both](/docs/images/Cue-List-Update-Mode-Both.png) | Tracking in beide Richtungen, d.h. rückwirkend ab der letzten Änderung, sowie in allen folgenden Cues bis zur nächsten Änderung.
&nbsp;**Cue Only** ![Cue List Update Mode Cue Only](/docs/images/Cue-List-Update-Mode-Cue-Only.png) | Nur der aktuelle Cue wird geändert.

> Die Schrittnummer lässt sich auf diese Weise nicht ändern; ein Druck
  auf <Keys.SoftKey>Cue Number</Keys.SoftKey> ändert die Nummer des aktuell neu zu speichernden
  Schrittes. Wählen Sie <Keys.SoftKey>Advanced Options</Keys.SoftKey>, um die Schrittnummern zu
  ändern.

## Werte in mehreren Cues gleichzeitig aktualisieren

Werte können auch in mehreren Cues einer Cueliste/eines Chasers
gleichzeitig aktualisiert (mittels **Merge/Verschmelzen** oder
&nbsp;**Replace/Ersetzen**) werden. Dies kann sowohl mit numerischer Eingabe als
auch in der [Playback-Ansicht](#das-fenster-playback-view) erfolgen. 

In der Playback-Ansicht drücken Sie die Taste <Keys.HardKey>Record</Keys.HardKey> und klicken
dann im Bildschirm auf den gewünschten Cue/die Cues. Wählen Sie nun <Keys.SoftKey>
Merge</Keys.SoftKey> oder <Keys.SoftKey>Replace</Keys.SoftKey> (oder drücken 
Sie <Keys.HardKey>Enter</Keys.HardKey>, um zu Mergen). Damit wird der momentane 
Inhalt des Programmers in die ausgewählten Cues übernommen.

Bei Verwendung der Zifferntasten verbinden Sie zunächst die Cueliste
mittels <Keys.HardKey>Connect / Cue</Keys.HardKey> mit der Steuerung und klicken auf <Keys.SoftKey>Rec. Step</Keys.SoftKey>. Nun
verwenden Sie die Syntax n <Keys.HardKey>THRU</Keys.HardKey> m, um eine Folge von Cues zu
ändern, oder n <Keys.HardKey>AND</Keys.HardKey> m, um mehrere Cues einzeln auszuwählen. Ist
die [Playback-Ansicht](#das-fenster-playback-view) geöffnet, so werden die 
gewählten Cues rot markiert. Sind alle zu ändernden Cues ausgewählt, 
drücken Sie <Keys.HardKey>Enter</Keys.HardKey> und wählen <Keys.SoftKey>Merge</Keys.SoftKey> oder <Keys.SoftKey>Replace</Keys.SoftKey> (nochmaliges 
Betätigen von <Keys.HardKey>Enter</Keys.HardKey> wählt Merge).

## Deaktivieren eines Cues

Einzelne Cues können vorübergehend deaktiviert werden. Klicken Sie dazu
auf die Zelle 'Disabled' ganz rechts beim jeweiligen Cue in der
Playback-Ansicht. Mit den Funktionstasten wählen Sie nun <Keys.SoftKey>Cue Disabled Yes</Keys.SoftKey>. 
Ist ein Cue deaktiviert (disabled), so wird er übersprungen,
als wäre er nicht vorhanden, kann aber später wieder aktiviert werden

## Einzelne Cues mit Include in den Programmer laden

Mit der [Include-Funktion](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion) 
können einzelne Cues aus einer Cueliste in den Programmer
geladen werden. Drücken Sie dazu <Keys.HardKey>Include</Keys.HardKey>, wählen die Cueliste aus, geben die Cuenummer ein und drücken <Keys.SoftKey>Include Cue</Keys.SoftKey>.

Soll ein Cue aus der gerade verbundenen Cueliste included werden, so
drücken Sie <Keys.HardKey>Include</Keys.HardKey>, <Keys.HardKey>Connect / Cue</Keys.HardKey>, geben die Nummer des Cues ein und
wählen <Keys.SoftKey>Include Cue</Keys.SoftKey>.

Auf diese Weise kann man Cues aus Cuelisten auch anderweitig
weiterverwenden sowie Shapes/Effekte in diesem Cue editieren (geht auch
per [Playback View](#das-fenster-playback-view)).