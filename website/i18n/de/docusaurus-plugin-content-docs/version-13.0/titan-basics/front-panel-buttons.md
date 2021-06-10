---
id: front-panel-buttons
title: Front Panel Buttons
sidebar_label: Front Panel Buttons
original_id: front-panel-buttons
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Die den Fadern zugeordneten blauen und grauen Tasten sowie die
Macro/Executor-Tasten sind weitgehend frei zu konfigurieren.

## Key Profiles -- Tastenprofile

Es ist möglich, die Funktionsweise der grauen Flash- und blauen
Auswahl-Taster (sowie der schwarzen Tasten beim Sapphire Touch) zu
ändern. Ebenso lässt sich die Funktion einiger Schaltflächen ändern.
Diese Einstellungen lassen sich als [Key Profile (Tastenprofil)](../system-settings/key-profiles.md) abspeichern. Einzelne 
Tastenprofile lassen sich einzelnen Benutzern zuordnen oder für die 
vereinfachte Bedienung des Pultes bei bestimmten Anwendungsfällen verwenden.

## Macros -- Tastenfolgen

Während des Programmierens sind zuweilen bestimmte Abfolgen von
Tastendrücken sehr oft auszuführen. Zur Vereinfachung lassen sich solche
Tastenfolgen sehr einfach abspeichern und mit dem Betätigen einer
einzigen Taste wieder abrufen; dies wird Makro genannt. Makros können
die Tastendrücke mit den aufgezeichneten Pausen (Real Time) oder aber so
schnell wie möglich (Full Speed) wiedergeben.

Full Speed dient dabei insbesondere für wiederkehrende Aufgaben beim
Programmieren, während mit Real Time auch ganze Effekte - mit ihrem
Timing - wiedergegeben werden können.

Makros können in den meisten Arbeitsfenstern sowie direkt auf den dafür 
vorgesehenen Tasten rechts auf dem Pult abgelegt werden; außerdem gibt 
es ein Fenster "Macros". Die 10 'Macro'-Tasten (altes Tiger Touch) 
korrespondieren mit den ersten zehn Schaltflächen im 'Macros'-Fenster, 
während die Macro/Executor/Workspace-Tasten im Fenster 'Feste Playbacks' 
angezeigt werden.

Das Arena hat noch zwei weitere Macro-Tasten vorn links auf dem Pult.

Ein Macro aufzeichnen

1.  Drücken Sie die blaue Taste <Keys.HardKey>Macro</Keys.HardKey> (oberhalb des Ziffernblocks)

2.  Wählen Sie <Keys.SoftKey>Full Speed</Keys.SoftKey> oder <Keys.SoftKey>Real Time</Keys.SoftKey>.

3.  Drücken Sie <Keys.SoftKey>Record</Keys.SoftKey>.

4.  Betätigen Sie eine freie graue Taste oder Schaltfläche auf dem 
	Touchscreen. Damit beginnt die Aufzeichnung. Währenddessen blinkt die 
	Taste <Keys.HardKey>Macro</Keys.HardKey>.

5.  Führen Sie nun die aufzuzeichnende Tastenfolge aus.

6.  Klicken Sie <Keys.HardKey>Macro</Keys.HardKey> zum Beenden der Aufzeichnung.

Zum Ausführen des aufgezeichneten Makros einfach die Taste betätigen,
auf der das Makro gespeichert wurde. Daraufhin werden sämtliche Schritte
der Tastenfolge automatisch ausgeführt (wahlweise mit den
aufgezeichneten Pausen oder in schneller Folge).

## Tastenkombinationen

Viele Funktionen des Pultes lassen sich durch Tastenkombinationen
aufrufen; dies ist insbesondere mit dem Titan Mobile oder dem Titan
Simulator sinnvoll.

Dabei 'fängt' Titan (das Pult-System) die Tastendrücke ab; soll ein
anderes Programm Zugriff auf die Tastatur haben, so muss die
‚Break'(Pause)-Taste gedrückt werden, womit weder Tastenkombinationen
noch Texteingabe am Pult funktionieren. Umschalten des Menüs reicht die
Tastatur wieder an Titan durch.

Taste | Aktion | | Taste | Aktion
---|---|---|----|-----
  F1 	   |  Hilfe (englisch) anzeigen | |  Ctrl X   |  Ausschneiden (Text)
  F2       |  Fenster wählen            | |  Ctrl C   |  Kopieren (Text)
  F3       |  Min/Max		            | |  Ctrl V   |  Einfügen (Text)
  Shift F3 |  Nächstes Fenster          | |  Ctrl A   |  Alles markieren (Text)
  F4       |  Größe/Position		    | |  Ctrl Z   |  Undo
  Shift F4 |  Bildschirm wechseln       | |  Ctrl Y   |  Redo
  F5       |  Fenster schließen         | |  Alt C    |  Clear
  Shift F5 |  Alle Fenster schließen    | |  Alt R    |  Record 
  F6       |  Fenster 'Playbacks'       | |  Alt A    |  Avo (shift) 
  F7       |  Fenster 'Fixtures'  		| |  Alt L    |  Locate
  F8       |  Fenster 'Groups'    		| |  Alt P    |  Patch
  F9       |  Fenster 'Colours'   		| |  Alt ⇑ D  |  Disk
  F10      |  Fenster 'Positions' 		| |  Alt ⇑ S  |  System-Menü
  F11      |  Fenster 'Gobos/Beams'     | |  Alt V    |  Open/View
  F12      |  Fenster 'Channel Grid'    | |  Alt G    |  Go
  Esc      |  EXIT 			            | |  Alt D    |  Delete
  Enter    |  ENTER 	                | |  Alt ⇑ C  |  Copy
  Alt 1    |  Menütaste A               | |  Alt M    |  Move
  Alt 2    |  Menütaste B               | |  Alt U    |  Unfold
  Alt 3    |  Menütaste C               | |  Alt I    |  Include
  Alt 4    |  Menütaste D               | |  Alt ⇑ R  |  Release
  Alt 5    |  Menütaste E               | |  Alt S    |  Shape
  Alt 6    |  Menütaste F               | |  Alt ⇑ T  |  Fixture Tools/ML Menu
  Alt 7    |  Menütaste G               | |  Alt B    |  Blind
  Alt ⇑ F  |  <Keys.HardKey>Fixture</Keys.HardKey>               | |  Alt O    |  Off
  Alt ⇑ P  |  <Keys.HardKey>Palette</Keys.HardKey>               | |  Alt F    |  Fan
  Alt ⇑ M  |  <Keys.HardKey>Macro</Keys.HardKey>                 | |  Alt ⇑ O  |  Attribute options
  Alt ⇑ G  |  <Keys.HardKey>Group</Keys.HardKey>                 | |  Alt ⇑ L  |  Latch menu
  / (num)  |  <Keys.HardKey>Thro</Keys.HardKey>                  | |  Alt Q    |  Cue/Connect
  \* (num) |  <Keys.HardKey>@</Keys.HardKey>                     | |  Alt W    |  Open Window
  \- (num) |  <Keys.HardKey>Not</Keys.HardKey>                   | |  Alt T    |  Times
  \+ (num) |  <Keys.HardKey>And</Keys.HardKey>                   | |  Alt ⇑ U  |  Update
   Alt ←   |  Previous fixture    	    | |  Alt ⇑ I  |  Select If
   Alt →   |  Next fixture              | |           |  |
   Alt ↑   |  All                       | |           |  |
   Alt ↓   |  Highlight                 | |           |  |

⇑ = Shift/Umschalt\
(Num) = auf dem Ziffernblock

## Das Pult sperren

Das Pult lässt sich sperren, um unbeabsichtigte oder unbefugte Eingriffe
zu verhindern. Halten Sie dazu <Keys.HardKey>AVO</Keys.HardKey> gedrückt, klicken Sie auf
<Keys.SoftKey>Lock</Keys.SoftKey>, und geben Sie nun ein Passwort ein (Buchstaben oder Ziffern).
Zum Entsperren muss das gleiche Passwort wieder eingegeben werden; die
Eingabeaufforderung für das Passwort wird nach einigen Sekunden der
Inaktivität ausgeblendet, erscheint aber sofort wieder, sobald eine
Taste betätigt oder der Bildschirm angetippt wird. Dies ist ausdrücklich
nur eine einfache Sperre, *just to prevent idiots messing with it.*

Es lässt sich eine Grafik einstellen, die bei gesperrtem Pult angezeigt
wird. Drücken Sie dazu <Keys.HardKey>Avo</Keys.HardKey> und wählen das Menü <Keys.SoftKey>User Settings</Keys.SoftKey>
(Benutzereinstellungen). Auf der Seite <Keys.SoftKey>Display</Keys.SoftKey> (Version 13:  <Keys.SoftKey>General</Keys.SoftKey>)
kann man bei <Keys.SoftKey>Lock Screen Background</Keys.SoftKey> ein Bild laden oder eine Grafik zeichnen.

If you load a picture file, the menu option <Keys.SoftKey>Scaling Mode</Keys.SoftKey> sets how
the picture will be scaled to fill the screen.

-   None: keine Skalierung, das Bild wird in Originalgröße angezeigt

-   Letterbox: skaliert, bis entweder Breite oder Höhe formatfüllend
    dargestellt werden, und lässt ansonsten schwarze Ränder

-   Fill: skaliert, bis das Bild in voller Breite oder Höhe dargestellt
    wird.

-   Stretch: Das Bild wird auf den gesamten Bildschirm aufgezogen und
    ggf. verzerrt dargestellt

Mit dem Button <Keys.SoftKey>Clear</Keys.SoftKey> wird ein eingestelltes Bild wieder gelöscht.

Bei gesperrtem Pult sind sämtliche Funktionen deaktiviert, abgesehen vom
DMX-Ausgang und den aktuell laufenden Playbacks.
