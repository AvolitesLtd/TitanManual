---
id: tips-and-tricks
title: Tipps und Tricks
sidebar_label: Tipps und Tricks
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Im folgenden Abschnitt werden Wege zum schnellen Arbeiten mit Titan aufgelistet. Dabei werden die Tastendrücke wie folgt beschrieben:

``<n>`` : geben Sie mit dem Ziffernblock eine Zahl ein. 

"<Keys.HardKey>Avo</Keys.HardKey> + ": halten Sie die (erste) Taste gedrückt.

## Gerät steuern und Speichern

-  Alle Geräte anwählen: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>ALL</Keys.HardKey> <Keys.HardKey>ALL</Keys.HardKey> <Keys.HardKey>ALL</Keys.HardKey>
-  Alle Geräte mit Output > 0 anwählen: <Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>Select If</Keys.HardKey>
-  Ausgewählte Geräte auf 100% stellen (im Programmer): <Keys.HardKey>@</Keys.HardKey><Keys.HardKey>@</Keys.HardKey>
-  Ausgewählte Geräte auf ``<n>`` % stellen (im Programmer): <Keys.HardKey>@</Keys.HardKey> ``<n>`` <Keys.HardKey>Enter</Keys.HardKey> (der Wert wird in 0...99% angegeben, wenn nicht in den Benutzereinstellungen anders angegeben)
-  Clear mit Fadezeit: ``<n>`` <Keys.HardKey>Clear</Keys.HardKey> cleart über die angegebene Zeit
-  &nbsp;<Keys.HardKey>Wheel @</Keys.HardKey> Tasten: Schnellzugriff auf Freeze, Off, oder On für das gerade auf dem entsprechenden Wheel liegende Attribut. Per Doppelklick wird der entsprechende Wert auf 100% gesetzt, wenn es sich um einen Prozent-Bereich handelt (z.B. Dimmer, RGB oder CMY). [(mehr dazu)](../controlling-fixtures/changing-fixture-attributes.md#adjusting-attributes-with-the--buttons)
-  Anzeigen/Auswählen der Zellen von Fixtures: <Keys.HardKey>Unfold</Keys.HardKey>, dann die Geräte auswählen.
-  Geräte nach Schema (gerade, ungerade etc.) wählen: <Keys.HardKey>Group</Keys.HardKey> gedrückt halten und aus dem Menü wählen
-  Schnelle Auswahl nach Schema: Geräte oder Gruppe wählen, dann <Keys.HardKey>ALL</Keys.HardKey>, um nach einem bestimmten Schema auszuwählen (gerade, ungerade, jedes x-te etc.)
-  Alle Zellen in den gerade angewählten Geräten auswählen: <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> 
-  Festlegen, was gespeichert wird: 1 x <Keys.HardKey>Record</Keys.HardKey> speichert einen Cue, 2 x speichert einen Chase, 3 x speichert eine Cueliste, 4 x speichert eine Timeline
-  Schnellaufruf Palette speichern: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Palette</Keys.HardKey>
-  Schnellaufruf Gruppe speichern: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Group</Keys.HardKey>
-  Schnellaufruf Macro speichern: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Macro</Keys.HardKey>
-  Speichern von Zeiten in Paletten/Cues: <Keys.HardKey>Time</Keys.HardKey> legt die Zeit im Programmer für nachfolgende Speichervorgänge fest
-  Timecode eingeben: <Keys.HardKey>Through</Keys.HardKey> und <Keys.HardKey>And</Keys.HardKey> wirken als links/rechts-Tasten, um zwischen Stunden/Minuten/Sekunden/Frames zu navigieren
-  "Move" (Verschieben) auf Pulten ohne Move-Taste: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>COPY</Keys.HardKey>
-  Mehrfaches Verschieben/Kopieren/Löschen: mit der Taste <Keys.HardKey>Latch Menu</Keys.HardKey> kann das jeweilige Menü eingerastet werden. Drücken Sie also erst <Keys.HardKey>COPY</Keys.HardKey>, <Keys.HardKey>MOVE</Keys.HardKey> oder <Keys.HardKey>Delete</Keys.HardKey> gefolgt von <Keys.HardKey>Latch Menu</Keys.HardKey>, um in dem jeweiligen Menü zu bleiben.

## Steuern der Show

-  BPM/Rate direkt einstellen: ``<n>`` eingeben, dann den gewünschten Master anwählen
-  Macro ``<n>`` -mal ausführen: ``<n>`` eingeben, dann das Macro aufrufen
-  Fadezeit des folgenden Cues überschreiben: ``<n>`` <Keys.HardKey>GO</Keys.HardKey> 
-  Alle laufenden Playbacks releasen: <Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey>
-  Schnellaufruf Mask FX erstellen: <Keys.HardKey>Mask FX</Keys.HardKey> <Keys.HardKey>Mask FX</Keys.HardKey> für die ausgewählten Geräte (oder für alle, wenn keins ausgewählt ist)
-  Legenden für Seiten auf dem Wing eingeben: <Keys.SoftKey>Set Legend</Keys.SoftKey> <Keys.HardKey>Go Page</Keys.HardKey> (auf dem Wing).

## Anzeigen, Menüs und Fenster

-  Patch-Ansicht: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Patch</Keys.HardKey>
-  Fixtures-Fenster: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey>
-  Gruppen-Fenster: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Group</Keys.HardKey>
-  Macros-Fenster: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Macro</Keys.HardKey>
-  Attribute Editor: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey>
-  Aktive Playbacks: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Off</Keys.HardKey>
-  Positions-Paletten: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey>
-  Farb-Paletten: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Colour</Keys.HardKey>
-  Gobos&Beams-Paletten: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> (oder <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Beam</Keys.HardKey>)
-  Shape-Paletten: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Shape</Keys.HardKey>
-  Intensitäts-Ansicht: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Intensity</Keys.HardKey>
-  Cuelisten-Anzeige der aktuell gesteuerten Cueliste: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Connect/Cue</Keys.HardKey>
-  Exit aller Menüs zum Hauptmenü: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>EXIT</Keys.HardKey>, das beendet auch Unfold
-  Textsuche in Menüs: das Menü aufrufen und den gesuchten Text mit der Tastatur eingeben.
-  scheinbar fehlende Menüpunkte: Suchleiste überprüfen, ob eventuell ein Suchtext eingegeben wurde
-  Fenster zu klein: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Min/Max</Keys.HardKey> zum Wiederherstellen der ursprünglichen Größe
-  Fenster auf anderes Display verschieben: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Size/Position</Keys.HardKey> 
-  Alle Fenster schließen: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Close</Keys.HardKey>
-  Einen Workspace löschen: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Delete</Keys.HardKey> <Keys.ContextKey>Workspace</Keys.ContextKey>
-  Einen Workspace-Button verschieben/kopieren: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Move</Keys.HardKey> <Keys.ContextKey>Workspace</Keys.ContextKey> oder <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>Workspace</Keys.ContextKey>
-  Capture-Kamera mit den Wheels steuern: Kontextmenü <Keys.ContextKey>Camera Move</Keys.ContextKey>, dann mit den Encodern wie gewünscht steuern

## Einrichtung, Betriebssystem, Hardware

-  Schnellzugriff Show speichern: <Keys.HardKey>DISK</Keys.HardKey> <Keys.HardKey>DISK</Keys.HardKey>
-  beim Patchen den nächsten freien Kanal finden: in der Patch-Ansicht im Kanal-Balken auf den unbelegten Bereich klicken. Befindet man sich dabei gerade im Patch-Menü, so wird die nächste freie Adresse direkt als Vorschlag übernommen.
-  Uhr des Pultes stellen: in der Leiste am oberen Rand auf die Uhr klicken. Bitte vorher unbedingt die Zeitzone überprüfen und ggf. korrigieren, um zu vermeiden, dass die Lizenz ungültig wird.
-  Helligkeit von Pultleuchte und Display: System-Menü öffnen (<Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>DISK</Keys.HardKey>), nun kann die Helligkeit mit den Wheels eingestellt werden (nicht bei allen Pulten)
-  wenn einzelne Tasten defekt sind: Das Virtual Panel aus dem <Keys.SoftKey>Tools</Keys.SoftKey> Menü kann verwendet werden, bis eine Reparatur erfolgt.
