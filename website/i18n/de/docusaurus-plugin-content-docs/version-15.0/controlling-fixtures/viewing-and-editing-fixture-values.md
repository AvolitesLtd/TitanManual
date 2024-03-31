---
id: viewing-and-editing-fixture-values
title: Anzeigen/Verändern von Attribut-Werten
sidebar_label: Anzeigen/Verändern von Attribut-Werten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Übersicht über die Kanäle: Das 'Channel Grid'-Fenster

Zuweilen ist es sinnvoll, die genauen Einstellungen jedes Gerätes
einzeln anzeigen und ändern zu können. Das 'Channel Grid'-Fenster
ermöglicht genau das. Aufgerufen wird es durch Betätigen der weißen
<Keys.HardKey>Channel Grid</Keys.HardKey>-Taste, oder Sie drücken zweimal auf
[<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Channel Grid</Keys.SoftKey>.

![Channel Grid](/docs/images/Channel-Grid.png)

Das Fenster lässt sich mit den Kontext-Schaltflächen links vom Menü in
verschiedene Modi schalten:

-   All/Stage/Programmer/Selected: Auswahl der angezeigten Geräte
    (Alle/Mit Dimmer an/Im Programmer/In der Auswahl)

-   Sort. Sortierung nach Nummer, DMX-Adresse oder zuletzt gewählt

-   Open Intensity View: damit kann man direkt die das Intensity-Fenster
    öffnen (und von dort mit der gleichen Funktion wieder
    zurückwechseln)

-   Show/Hide Palettes: Anzeigen von Paletten oder diskreten Werten

-   Playbacks/Levels/Shapes/Effects/Times: nur einer dieser Modi kann
    jeweils angezeigt werden.

Zur **Auswahl** von Geräten klicken Sie einfach links auf den
Gerätenamen; wird ein Attribut ausgewählt, so wird automatisch das
zugehörige Gerät angewählt.

Zum **Löschen** eines Attributwerts im 'Channel Grid'-Fenster klicken
Sie auf den zu löschenden Wert (oder wählen mit Klicken-Ziehen mehrere
aus) und wählen <Keys.SoftKey>Clear</Keys.SoftKey>.

Zum **Ändern** wählen Sie den oder die zu ändernden Wert(e) aus und
ändern den Wert mit den Rädern, oder geben den gewünschten Wert mit den
Zifferntasten ein und schließen die Eingabe mit <Keys.HardKey>Enter</Keys.HardKey> ab.

Die Anzeige lässt sich über die Schaltflächen oben links weiter filtern:
entweder mit den Buttons IPCGBES für die einzelnen Attribute, oder mit
den Buttons darunter nach Gerätetyp.

## Das Fenster "Intensity View"

Um einen raschen Überblick über die momentan aktiven Scheinwerfer zu
gewinnen, dient das Fenster "Intensity View" (die Intensity-Ansicht). Um
dieses zu öffnen, drücken Sie zweimal auf
[<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) und wählen <Keys.SoftKey>Intensity View</Keys.SoftKey>.

![Intensity View](/docs/images/Intensity-View.png)

Für jedes Gerät wird ein Button angezeigt mit einer Balkenanzeige und
numerischer Anzeige des aktuellen Helligkeitswerts. Der Kopfbereich
jedes Buttons zeigt wie gewohnt den Auswahl- und Programmerstatus
(blau=angewählt, cyan=im Programmer).\
Einfadende Werte werden durch einen blauen Pfeil nach oben, ausfadende
Werte durch einen grünen Pfeil nach unten dargestellt.\
Getrackte Werte erscheinen in Magenta mit einem "=".\
Getrackte Werte in einem Solo- oder Block-Cue erscheinen rot mit einem
Verbotszeichen.

![Solo/Block Cue](/docs/images/Solo-Block-Cue.png)

Werte, die von einem Effekt beeinflusst werden, erscheinen gelb mit
einer Tilde ( \~ ).

Wird ein Wert von einem Playback gesteuert, so wird dieses angezeigt.

Ist ein Gerät im Programmer, so werden die relevanten Attribut-Bänke
IPCGBESFX entsprechend angezeigt.

Wurden für die Geräte Halos eingestellt, so werden diese auch hier
angezeigt. Dies kann wie beschrieben so geändert werden, dass die
automatisch vergebenen Farben angezeigt werden.

-   Mittels der Buttons links kann nach einzelnen Gerätetypen gefiltert
    werden.

-   Die Reihenfolge der Anzeige kann man mittels <Keys.SoftKey>Sort</Keys.SoftKey> verändern:
    User Number, zuletzt gewählt, oder DMX-Adresse.

-   Jedes Gerät lässt sich direkt anklicken und man kann sofort den
    Helligkeitswert editieren.

-   Zur Anzeige weiterer Informationen zu dem einzelnen Gerät drücken
    Sie <Keys.HardKey>View\ / Open</Keys.HardKey> gefolgt von dem jeweiligen
    Geräte-Button.

Mit den Kontext-Optionen lässt sich Inhalt und Anzeige des
Intensity-Fensters genau steuern.

Der erste Button steuert, welche Geräte überhaupt angezeigt werden:\
<Keys.SoftKey>All</Keys.SoftKey> zeigt alle gepatchten Geräte\
<Keys.SoftKey>Stage</Keys.SoftKey> zeigt alle Geräte mit Intensität >0%\
<Keys.SoftKey>Programmer</Keys.SoftKey> zeigt nur die im Programmer befindlichen Geräte\
<Keys.SoftKey>Selected</Keys.SoftKey> zeigt nur die aktuell ausgewählten Geräte\
<Keys.SoftKey>Live Cues</Keys.SoftKey>: Anzeige der Geräte, die gerade von aktvierten Cues 
gesteuert werden\
<Keys.SoftKey>Connected Cue</Keys.SoftKey>: Geräte im gerade connected (verbundenen) Cue (bei
Cuelisten und Chasern)\
<Keys.SoftKey>Frozen</Keys.SoftKey> zeigt nur aktuell fixierte Geräte an

Mit dem zweiten Button lässt sich wie oben beschrieben die Reihenfolge
der Anzeige umschalten.

Klickt man auf den Button <Keys.SoftKey>Search</Keys.SoftKey> (Suche), so kann man ein Suchwort
eingeben, nach dem gefiltert werden soll. Dabei wird sowohl nach der
Gerätenummer als auch der Bezeichnung gesucht. Die Such-Eingabe wird
oben im Intensity-Fenster angezeigt. Rechts daneben ist eine
Schaltfläche mit einem <Keys.ContextKey>X</Keys.ContextKey> -- mit dieser wird die Suche
gelöscht/abgebrochen.

<Keys.SoftKey>View If</Keys.SoftKey> (Zeige wenn) zeigt nur die in einzelnen Gruppen oder
Playbacks vorhandenen Geräte. Handelt es sich dabei um eine Cueliste
oder einen Chaser, so gilt das für alle Cues. Der aktuelle Anzeigefilter
wird oben im Intensity-Fenster angezeigt und kann zum Ändern einfach
angeklickt werden. Klickt man auf das <Keys.ContextKey>X</Keys.ContextKey>, so wird der Filter
gelöscht.

Es gibt ferner den Kontext-Button <Keys.SoftKey>Open Channel Grid</Keys.SoftKey> (Öffne Channel
Grid), mit dem direkt die Kanal-Übersicht [Channel Grid](viewing-and-editing-fixture-values.md#übersicht-über-die-kanäle-das-channel-grid-fenster) 
geöffnet werden kann.

In den **Fenster-Einstellungen** (klicken Sie dazu auf das <Keys.ContextKey>Zahnrad</Keys.ContextKey>
in der Titelleiste des Fensters) gibt es weitere Einstellmöglichkeiten, 
um den Platz bestmöglich auszunutzen:

-   Fixture Filters Shown/Hidden (Geräte Filter angezeigt/verborgen)
    blendet links eine Spalte ein/aus, mit der nach Gerätetyp gefiltert
    werden kann.

-   User Number Hidden/User Number Shown/DMX Address Shown (Nummer
    angezeigt/DMX Adresse angezeigt/Nummer verborgen) bestimmt die
    Anzeige von DMX-Adresse oder Gerätenummer.

-   Legend Shown/Hidden (Legende angezeigt/verborgen): Anzeige der
    Legende.

-   Cue Information Shown/Hidden (Cue Information angezeigt/verborgen):
    Anzeige des Playbacks, das das jeweilige Gerät momentan steuert.

-   Attribute Mask Shown/Hidden (Attribut Maske angezeigt/verborgen):
    Einblenden der IPCGBESFX Attributmaske zur Anzeige aktiver
    Attribute.

-   Halo Colour Custom/Auto (Halo Colour Benutzer/Auto): steht dies auf
    Auto, so wird der Rahmen für jedes Gerät, für das nicht bereits eine
    benutzerdefinierte Farbe vorgegeben ist, durch eine Farbe pro
    Gerätetyp dargestellt. Gibt es bereits eine benutzerdefinierte
    Farbe, so hat diese Vorrang. Steht die Option dagegen auf
    ‚Benutzer', so werden nur benutzerdefinierte Farben dargestellt.

-   Fixture Cells Shown/Hidden (Geräte Zellen angezeigt/verborgen):
    falls aktiviert werden für vorhandene Gerätezellen jeweils eigene
    Gerätebuttons angezeigt.

-   Tracked Fixtures Shown/Hidden (getrackte Geräte
    angezeigt/verborgen): (Nur verfügbar bei Filterung nach Live Cue
    oder Connected Cue) Anzeige getrackter Geräte.
