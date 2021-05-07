---
id: workspace-windows
title: Arbeitsfenster
sidebar_label: Arbeitsfenster
original_id: workspace-windows
---

import Keys from '@site/src/components/key.ts';

Der Hauptbereich der Programmoberfläche enthält die Arbeitsfenster.
Diese wiederum enthalten Buttons (berührungsempfindliche Flächen) zur
Auswahl von Geräten, Gruppen, Paletten, Playbacks usw. Auch der
Visualiser wird hier gezeigt. Es gibt für so ziemlich jeden Aspekt
spezielle Fenster.

Die Fenster können frei angeordnet werden, und es können mehrere
Monitore verwendet werden. Die Zusammenstellung der Fenster kann als
Workspace (Arbeitsumgebung) gespeichert werden. Arbeitsumgebungen können
für einzelne Fenster, einzelne Bildschirme oder alles gemeinsam gelten.
So kann man die oberfläche des Pultes durch einen Klick verändern.

Das folgende Bild zeigt eine typische Kombination mehrerer Fenster.

![Workspaces](/docs/images/Titan-Touch-Screen-User-Interface.png)

## Auswahl und Positionierung der Arbeitsfenster

Drücken Sie zweimal auf die Taste <Keys.HardKey>View</Keys.HardKey> (heißt auf manchen Pulten
<Keys.HardKey>Open</Keys.HardKey> oder <Keys.HardKey>Open Window</Keys.HardKey> - in diesem Handbuch heißt die Taste daher
<Keys.HardKey>View / Open</Keys.HardKey>). Daraufhin wird auf allen Displays ein Overlay mit
Buttons für die einzelnen Fenster angezeigt. Klicken Sie auf den Button
des gewünschten Fensters auf dem Display, auf dem es gezeigt werden
soll.

![Workspace Window Selection](/docs/images/Workspace-Windows-Icons.png)

War das Fenster bereits auf einem anderen Display geöffnet, so wechselt
es mit der gleichen Größe und Position auf den gewünschten Bildschirm.

Ebenso können Fenster mit der Menütaste <Keys.SoftKey>Open Workspace Window</Keys.SoftKey>
geöffnet werden. Drückt man ein weiteres Mal auf <Keys.HardKey>View / Open</Keys.HardKey>, so wird
das Overlay wieder ausgeblendet. Dazu kann man auch auf das <Keys.ContextKey>X</Keys.ContextKey>
rechts oben auf dem Bildschirm klicken.

Die wichtigsten Fenster lassen sich zudem per Tastenkombination
aufrufen.

### Tastenkombinationen zur Fensterauswahl

-   <Keys.HardKey>View / Open</Keys.HardKey> und eine Attributbank-Taste öffnet das jeweilige
    Palettenfenster

-   <Keys.HardKey>View / Open</Keys.HardKey> + <Keys.HardKey>Patch</Keys.HardKey> öffnet die Patch-Ansicht.

-	Drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, gefolgt von der Schaltfläche eines
	gepatchten Gerätes, so öffnet sich die Geräteanzeige mit Details zu dem
	jeweiligen Gerät.

-	<Keys.HardKey>View / Open</Keys.HardKey> + <Keys.HardKey>Connect / Cue</Keys.HardKey> öffnet das Fenster 'Playback View'.

-	<Keys.HardKey>View / Open</Keys.HardKey> + <Keys.HardKey>Off</Keys.HardKey> öffnet das Fenster 'Active Playbacks'.

-	<Keys.HardKey>View / Open</Keys.HardKey> + <Keys.HardKey>Macro</Keys.HardKey> öffnet das Fenster 'Macros'.

### Schaltflächen für die Einrichtung der Fenster

Oben rechts in der Titelleiste verfügt jedes Fenster über drei oder vier
Schaltflächen, über die weitere Funktionen erreichbar sind.

Mit den <strong>Optionen für die Arbeitsfenster</strong> (zu öffnen mit dem kleinen <Keys.ContextKey>Zahnrad</Keys.ContextKey>)
können Größe und Position der Fenster auf verschiedene Standardwerte
gesetzt und die Größe der Schaltflächen sowie die Schriftgröße für jedes
Fenster getrennt eingestellt werden. Die verfügbaren und angezeigten
Elemente hängen vom jeweiligen Fenster sowie der Einrichtung des Pultes
ab, etwa davon, ob ein externer Bildschirm angeschlossen ist. Mit den
Buttons für Rows (Zeilen) und Columns (Spalten) kann man einstellen, wie
die Tasten in dem Fenster angezeigt werden, siehe [Einstellen von Anzahl 
und Größe der Buttons](../titan-basics/workspace-windows.md#anzahl-und-grösse-der-schaltflächenraster).

![Appearance Menu](/docs/images/Window-Appearance-Options.png)

Die Fenster lassen sich sowohl in Standard-Größen und Positionen
anordnen als auch sehr frei verändern. Dazu dient der Button **Größe
ändern**.

![Resize](/docs/images/Resize.png)

Steht die Option <Keys.SoftKey>Edit All Windows</Keys.SoftKey> auf Off, so wird jeweils nur ein
Fenster verändert.

Klicken und ziehen Sie die obere linke oder die untere rechte Ecke des
Fensters, um dessen Größe zu ändern. Klickt und zieht man dagegen
irgendwo anders auf dem Bildschirm, so wird dort das Fenster neu
aufgezogen

Klicken Sie irgendwohin, so wird das Fenster dort platziert und rot
dargestellt, bis zur Platzierung der gegenüberliegenden Ecke nochmals
woanders geklickt wird.

Steht die Option <Keys.SoftKey>Resize Neighbours</Keys.SoftKey> (Nachbarn anpassen) auf On
(Vorgabe), so werden beim Ziehen einer Ecke angrenzende Fenster soweit
wie möglich mit verändert, um Überlappungen zu vermeiden. Steht diese
Option dagegen auf ‚Off', so wird jeweils nur das bearbeitete Fenster
verändert, und alle anderen bleiben unverändert.

Schaltet man <Keys.SoftKey>Edit All Windows</Keys.SoftKey> (Alle Fenster editieren) auf On, so
werden bei allen Fenstern Ecken angezeigt, und man kann ein beliebiges
Fenster verändern. Zum Abschluss drücken Sie dann wieder <Keys.HardKey>EXIT</Keys.HardKey>,
<Keys.HardKey>ENTER</Keys.HardKey> oder <Keys.SoftKey>OK</Keys.SoftKey>.

![Resize](/docs/images/Resize-2.png)

> Wurde beim freien Positionieren ein Fenster versehentlich so klein gemacht, dass der Button für die Größe nicht mehr erreichbar ist, so ist die einfachste Lösung, mit der <Keys.HardKey>Min/Max</Keys.HardKey>-Taste (bzw. Funktion) dieses Fenster wieder ganz groß zu machen und nochmals zu verändern. Bei der PC-Suite (Titan One etc.) bietet sich die Taste F4 der Computertastatur an.

Zum Verschieben des aktiven Fensters zwischen externem Monitor und
Bildschirm klicken Sie in den Fenster-Optionen auf das gewünschte
Display, oder Sie drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, dann <Keys.SoftKey>Window Options</Keys.SoftKey>, und
schließlich <Keys.SoftKey>Move Screen</Keys.SoftKey>, oder Sie nutzen die Tastenkombination
<Keys.HardKey>AVO</Keys.HardKey>+<Keys.HardKey>Size/Position</Keys.HardKey>.

Aktive Fenster lassen sich mit der Taste <Keys.HardKey>Close</Keys.HardKey> schließen. Zum
gleichzeitigen Schließen aller Fenster drücken Sie <Keys.HardKey>AVO</Keys.HardKey>+<Keys.HardKey>Close</Keys.HardKey>,
oder Sie nutzen die Menütaste <Keys.SoftKey>Close All</Keys.SoftKey>.

### Die Kontext-Schaltflächen/Buttons

Auf allen Pulten außer dem Sapphire Touch und Titan Go werden je nach aktivem
Fenster verschiedene Funktionsbuttons im Kontext-Bereich (rechts oben) angezeigt. 
Die dort angezeigten Funktionen wechseln je nachdem welches Fenster gerade aktiv ist. \
Im folgenden Bild wird die Anzeige bei aktivem Patch-View-Fenster dargestellt:

![Context Menu](/docs/images/Context-Menu.png)

Beim Sapphire Touch und beim Titan Go gibt es extra eine Schaltfläche 
in der Titelleiste jedes Fensters, mit der das <strong>Kontext-Menü</strong> eingeblendet 
werden kann.

![Patch View](/docs/images/Patch-View-2.png)

### Anzahl und Grösse der Schaltflächen/Raster

Normalerweise wird die Größe der Buttons automatisch an die
Bildschirmgröße angepasst, was z.B. dazu führt, dass sich bei
unterschiedlichen Bildschirmgrößen die Anzahl der Buttons pro
Zeile/Spalte - und damit ggf. die ganze Anordnung - ändert. Um dies zu
verhindern (z.B. wenn im Geräte-Fenster die Anordnung an den
tatsächlichen Aufbau angepasst wurde), kann man alternativ in den
Fenster-Optionen (dazu auf das <Keys.ContextKey>Zahnrad</Keys.ContextKey> klicken) mit \\u123Button Size Set Rows
& Columns\\u125 die gewünschte Anzahl der angezeigten Zeilen <Keys.ContextKey>Columns</Keys.ContextKey> 
und Spalten <Keys.ContextKey>Rows</Keys.ContextKey> fest vorgeben. Damit wird immer die gewünschte 
Anzahl an Schaltflächen angezeigt, wobei sich deren Größe entsprechend ändert.

![Rows and Columns](/docs/images/Rows-and-Columns.png)

Die eingegebene Anzahl von Spalten/Zeilen wird gespeichert, so dass man
testweise zwischen einem fixen und einem variablen Layout hin- und
herschalten kann.

Speichern der Arbeitsumgebung
-----------------------------

Mit gespeicherten Arbeitsumgebungen lässt sich die Darstellung des
gesamten Displays durch nur einen Klick ändern/wiederherstellen.

Sie können verschiedene Arbeitsumgebungen (Workspaces) zum schnellen
Abruf auf den 'Workspace'-Schaltflächen (links vom Hauptmenü, bzw.
linker Bildschirmrand beim Sapphire Touch und Titan Go) abspeichern.

![Workspaces](/docs/images/Recoding-a-Workspace-Layout.png)

Auf externen Bildschirmen gibt es ebenfalls jeweils einen
Workspace-Bereich (kann per [Benutzereinstellung](../system-settings/user-settings.md#display) deaktiviert werden).

Um einen Workspace zu speichern, drücken Sie die Taste <Keys.HardKey>View / Open</Keys.HardKey>,
dann <Keys.SoftKey>Record Workspace</Keys.SoftKey>, und schließlich eine der
'Workspace'-Schaltflächen, oder führen Sie einen Doppelklick auf einer
solchen Schaltfläche aus. Arbeitsumgebungen/Workspaces lassen sich auch
auf graue Tasten des Pultes sowie Macro-Tasten speichern.

Dabei lässt sich sehr genau bestimmen, wie neu geöffnete mit bereits
vorhandenen Fenstern interagieren. Außerdem können einzelne Fenster
spezifisch für bestimmte Displays festgelegt werden.

-   <Keys.SoftKey>Record Visible/All Windows</Keys.SoftKey> (sichtbare/alle Fenster speichern)
    bestimmt, ob nur die aktiven (sichtbaren), oder aber alle (auch die
    verborgenen) Fenster in der Arbeitsumgebung gespeichert werden
    sollen.

-   <Keys.SoftKey>Remove/Leave other windows on recall</Keys.SoftKey> (beim Aufruf andere Fenster
    schließen/behalten) definiert, ob beim Aufruf der Arbeitsumgebung
    andere Fenster geöffnet bleiben oder geschlossen werden sollen. Ist
    dies auf ‚Remove' (Schließen) gestellt, wird das im Workspace mit
    einem X angezeigt.
	
	![Workspaces](/docs/images/Workspace-Layout-Button-Letters-X.png)

-   <Keys.SoftKey>Screens= </Keys.SoftKey> bestimmt, ob der Workspace alle oder nur einzelne
    Displays beinhalten soll.

-   <Keys.SoftKey>Recall as Recorded/Where Selected</Keys.SoftKey> erscheint nur, wenn nur
    einzelne Displays gespeichert werden. ‚as Recorded' wird dann mit
    einem S und einer Nummer angezeigt und bedeutet, dass die Fenster
    auf diesem Screen gespeichert sind bzw. geöffnet werden. ‚where
    selected' dagegen wird mit einem stilisierten Fadenkreuz angezeigt,
    und die Fenster werden auf dem Display geöffnet, auf dem dieser
    Workspace aufgerufen wurde.
	![Workspaces](/docs/images/Workspace-Layout-Button-Letters.png)

-   Zum Löschen einer Arbeitsumgebung drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>,
    <Keys.HardKey>Delete</Keys.HardKey>, und dann die Schaltfläche der Arbeitsumgebung.

-   Drückt man beim Aufrufen eines Workspace zuerst auf <Keys.HardKey>View / Open</Keys.HardKey>
    und dann auf den Workspace-Button, so kann man mit den Menütasten
    bestimmen, ob die Fenster <Keys.SoftKey>As Recorded</Keys.SoftKey> (wie gespeichert) oder
    aber auf einem bestimmten Display aufgehen sollen. Damit kann man
    auch Workspaces, die für einen anderen Bildschirm gespeichert
    wurden, auf dem aktuellen Display verwenden.
	

>	Die Bildschirme werden dabei wie folgt nummeriert:\
\
Bei Pulten mit einem internen Screen ist dieser Screen 1 und ein eventuell vorhandenes externes Display Screen 2.\
\
Beim Arena ist das große interne Display Screen 1, das kleine interne ist Screen 2, und ein eventuell vorhandenes externes ist Screen 3.\
\
Beim Sapphire Touch ist das rechte Display Screen 1, das linke Screen 2, und eventuell vorhandene externe Displays sind Screen 3 und 4.    

Als Beispiel sei einmal angenommen, zum Programmieren seien die Fenster
'Fixtures' (Geräte), 'Position Palettes' (Positionspaletten), 'Fixture
Attributes' (Geräteattribute) und 'Shapes' benötigt:

1.  Drücken Sie zweimal auf <Keys.HardKey>View / Open</Keys.HardKey>, oder drücken Sie ggf.
<Keys.HardKey>Exit</Keys.HardKey>, um ins Hauptmenü zu gelangen, und dann die Funktionstaste
<Keys.SoftKey>Open Workspace Window</Keys.SoftKey>.

2.  Klicken Sie auf dem eingeblendeten Overlay den Button <Keys.ContextKey>Fixtures</Keys.ContextKey>.

3.  Öffnet sich das Fenster nicht in der oberen linken Ecke des
Touchscreens, so drücken Sie die Taste <Keys.HardKey>Size/Position</Keys.HardKey> so oft, bis es
dort platziert ist. Oder klicken Sie in der Titelleiste des Fensters auf
das kleine <Keys.ContextKey>Zahnrad</Keys.ContextKey> und platzieren Sie damit das Fenster entsprechend.

4.  Betätigen Sie wieder zweimal <Keys.HardKey>View / Open</Keys.HardKey> und wählen den Eintrag
<Keys.ContextKey>Positions</Keys.ContextKey>. Bewegen Sie dieses Fenster mit <Keys.HardKey>Size/Position</Keys.HardKey> an die
gewünschte Stelle.

5.  Aktivieren Sie auf die gleiche Weise die Fenster \\u123Attribute
Editor\\u125 und <Keys.ContextKey>Effects</Keys.ContextKey>.

6.  Drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, dann <Keys.SoftKey>Record Workspace</Keys.SoftKey>, oder
<Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>View / Open</Keys.HardKey>. Geben Sie einen Namen für diese Arbeitsumgebung
ein, und klicken Sie auf die 'Workspace'-Schaltfläche, auf die die
aktuelle Arbeits­umgebung gespeichert werden soll. Alternativ nutzen Sie
die ‚Quick Record' (Schnellspeicher)-Funktion: klicken Sie einfach auf
eine freie ‚Workspace'-Schaltfläche, woraufhin diese rot hervorgehoben
wird und ein ‚+'-Zeichen zeigt. Geben Sie nun einen Namen ein, und
klicken Sie erneut auf diese Schaltfläche.

## Schnellspeichern

![Quick Record](/docs/images/Recoding-a-Workspace-Layout.png)
Einige Fenster - für Gruppen, Workspaces sowie die Paletten-Fenster - besitzen eine
Schnellspeicher-Funktion. Nehmen Sie Ihre Einstellungen vor, und klicken
Sie einmal auf eine freie Schaltfläche. Diese wird nun rot und mit einem
Pluszeichen (+) markiert. Nun lässt sich eine Bezeichnung (legend)
eingeben. Danach nochmals die Schaltfläche betätigen, um das Speichern
abzuschließen.

Die Schnellspeicher-Funktion lässt sich in den [Tastenprofilen/Key Profiles](../system-settings/key-profiles.md) deaktivieren.

Bei Paletten ist zu beachten, dass die Schnellspeicherfunktion etwas
anders arbeitet als das Speichern mit der <Keys.HardKey>Record</Keys.HardKey>-Taste, siehe [Speichern von Paletten](../palettes/creating-palettes.md#speichern-einer-palette).

## Legenden und Bezeichnungen

Sämtliche Schaltflächen lassen sich mit frei zu definierenden Legenden
beschriften, um die Übersicht zu behalten. Ferner lassen sich die
Schaltflächen auch bemalen. Dazu drücken Sie zunächst <Keys.SoftKey>Set Legends</Keys.SoftKey>
und wählen dann <Keys.SoftKey>Picture</Keys.SoftKey>; daraufhin öffnet sich ein entsprechendes
Zeichen-Fenster. Außerdem gibt es bereits eine umfangreiche Bibliothek
vorgefertigter Zeichnungen.

Farb-Paletten erhalten automatisch eine Legende mit der entsprechenden
Farbe. Ebenso erhalten Gobo-Paletten ein Bild des Gobos, sofern die
Personality die entsprechenden Informationen enthält.

![Gobos and Beams Workspace Window](/docs/images/Gobos-and-Beams-Workspace-Window.png)

## Button-Halo

Sämtlichen programmierbaren Schaltflächen, etwa den Buttons für Geräte,
Gruppen, Paletten, Playbacks etc., lassen sich farbige Ränder, sog.
Halos, zuweisen. Damit lassen sich diese auch optisch noch besser
unterscheiden. Zum Einstellen dieses Halos dient die Option <Keys.SoftKey>Halo</Keys.SoftKey> im
Legenden-Menü.

![Halo](/docs/images/Fixture-Halo.png)

Wird ein [Halo für Geräte-Tasten](../patching/changing-the-patch.md#halo-für-fixture-buttons) aktiviert, 
so wird dessen Farbe auch in anderen Fenstern verwendet. Außerdem können 
automatisch unterschiedliche Halos pro Gerätetyp vergeben werden, die
dann auch in der Patch-Ansicht verwendet werden.

## Bildschirmtastatur

Am Ende der Werkzeugleiste (am Mittelsteg zwischen den Bildschirmen beim
Sapphire Touch, ansonsten oben im Bildschirm) befindet sich der Button
zum Aufrufen der Bildschirmtastatur.

![Keyboard Button](/docs/images/Keyboard-Button.png)

Die Bildschirmtastatur kann mit der Schaltfläche <Keys.ContextKey>Max/Min</Keys.ContextKey> zwischen großen
und kleinen Tasten umgeschaltet werden; mit der Schaltfläche <Keys.ContextKey>X</Keys.ContextKey> wird
sie geschlossen. Per Anklicken und Ziehen des freien Bereiches oben in
der Bildschirmtastatur lässt sich diese frei positionieren.

Soll die Tastatur automatisch erscheinen, sobald eine Texteingabe
erforderlich ist, so kann das mittels <Keys.ContextKey>Man/Auto</Keys.ContextKey> eingestellt werden. Diese
Einstellung bleibt auch beim Schließen der Tastatur aktiv, bis sie
wieder geändert wird.

Die kleine Darstellung der Tastatur (siehe Abbildung) verzichtet auf
einige weniger gebräuchliche Tasten.

![Keyboard](/docs/images/Keyboard.png)

## Trackball (nur beim Sapphire Touch)

Mit dem Trackball rechts auf dem Pult lässt sich entweder die Maus
steuern, oder die selektierten Geräte.

Zur Auswahl des Maus-Modus halten Sie die Taste <Keys.HardKey>Assign</Keys.HardKey> (unterhalb
des Trackballs) gedrückt und betätigen dazu die Taste <Keys.HardKey>Left</Keys.HardKey> (für: linke
Maustaste). Nun steuert der Trackball die Position des Mauszeigers auf
den Bildschirmen; mit dem Ring um den Trackball kann in den Fenstern
gescrollt werden.

Um in den Modus zur Gerätesteuerung zu schalten, drücken Sie
<Keys.HardKey>Assign</Keys.HardKey> + <Keys.HardKey>Right</Keys.HardKey>: nun steuert der Trackball Pan und Tilt, und mit
dem Ring kann Tilt sehr fein geregelt werden.

## Mini-Display (Nur beim Arena)

Mit der Taste <Keys.HardKey>Display</Keys.HardKey> unterhalb der Encoder rechts oben kann man 
zwischen vier Ansichten auf dem Mini-Display umschalten:

- Arbeitsfenster mit Legenden für die Encoder
![Arena Miniscreen](/docs/images/Arena-Miniscreen.png)

- Arbeitsfenster mit Legenden für die Macro-/Executortasten
![Mini Screen Macros](/docs/images/Mini-Screen-Macros.png)

- Fenster "feste Playbacks" - Dieses Fenster kann nicht auf den anderen
Bildschirm verschoben werden, und andere Fenster überlagern es nicht.
Die ersten beiden Zeilen sind identisch mit den Macro-/Executortasten
darunter.

- Arbeitsfenster, ohne Legenden für Encoder oder Macrotasten.


## Compatibility windows -- die 'Kompatibilitäts-Fenster'

Die Fenster "Fixtures and Playbacks" (Geräte und Speicherplätze) und
"Groups and Palettes" (Gruppen und Paletten) ermöglichen Zugriff auf die
Speicherplätze/Tasten, die zwar auf einem Pearl Expert, nicht aber auf
anderen Pulten vorhanden sind. Damit lassen sich also auch auf dem
Expert erstellte Shows laden.

Ist eins dieser Fenster geöffnet, gibt es die Schaltfläche \\u123Move to
workspace\\u125 im Kontextbereich. Damit lassen sich die betreffenden
Schaltflächen in die richtigen Arbeitsfenster der anderen Titan-Pulte
verschieben. Diesen Vorgang muss man zweimal ausführen: einmal mit
ausgewähltem Fenster "Fixtures and Playbacks", und einmal mit "Palettes
and Groups".




