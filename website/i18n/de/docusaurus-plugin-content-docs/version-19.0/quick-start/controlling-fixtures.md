---
id: controlling-fixtures
title: Geräte steuern
sidebar_label: Geräte steuern
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Zum Steuern werden einzelne oder mehrere Geräte mit den
Geräte-Schaltflächen ausgewählt. Die Buttons der ausgewählten Geräte
werden hellblau dargestellt.

Drücken Sie <Keys.HardKey>Locate</Keys.HardKey>, um die ausgewählten Geräte zu "homen" (50%
Pan/Tilt, kein Gobo, open white), siehe [Locate](../controlling-fixtures.md#geräte-auf-startposition-setzen-locate). Halten
Sie die <Keys.HardKey>Locate</Keys.HardKey>-Taste gedrückt und drücken Sie dazu einzelne
Attribute, um diese **nicht** zurückzusetzen (um z.B. Pan/Tilt nicht
zurückzusetzen, halten Sie <Keys.HardKey>Locate</Keys.HardKey> und drücken dazu <Keys.HardKey>Position</Keys.HardKey>).

Wählen Sie nun einzelne Attribute zum Bearbeiten aus (Attribut-Tasten
sind beschriftet mit Intensity/Dimmer, Colour, Gobo usw.), und stellen
Sie die gewünschten Werte mit den Rädern ein; Attribute und Werte werden
dabei im Display angezeigt
(Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures.md#einstellen-von-attributen-mit-den-encodern)).

Ebenso können Sie den Attribut-Editor öffnen (<Keys.HardKey>View/Open</Keys.HardKey>, <Keys.HardKey>
Options</Keys.HardKey>), um Einstellungen mit den Schaltflächen auszuwählen und um
einzelne Zellen/Subfixtures von Geräten mit mehreren Zellen zu
beeinflussen.
(Siehe [Geräte mit mehreren Zellen/Subfixtures](../controlling-fixtures.md#geräte-mit-mehreren-zellensubfixtures)).

Verwenden Sie Paletten, um häufig benutzte Farben, Positionen etc. zu
speichern, siehe nächste Seite.

## Geräte-Gruppen

Geräte können zur schnelleren Auswahl [zu Gruppen zusammengefasst](../controlling-fixtures/fixture-groups.md) werden. 
Um eine Gruppe zu speichern, wählen Sie die zu gruppierenden Geräte aus, klicken auf einen freien Button im 
Groups-Fenster (daraufhin erscheint ein rotes +), geben ggf. eine Legende ein, und klicken nochmal auf den vorher gewählten Button.

Zum Speichern einer Gruppe auf einem Fader wählen Sie die gewünschten Fixtures aus, drücken <Keys.HardKey>Group</Keys.HardKey>, <Keys.SoftKey>Record
Group</Keys.SoftKey>, und betätigen die Auswahltaste des Faders. Dieser wird der Masterfader der Gruppe. 

Die Reihenfolge der Geräteauswahl etwa zur Verwendung innerhalb von
Effekten/Shapes wird mit den Gruppen gespeichert. Ebenso wird das Layout der Geräte pro Gruppe gespeichert und
etwa für Pixelmapper-Effekte sowie Shapes verwendet, siehe [Gruppenlayout](../controlling-fixtures/fixture-groups.md#gruppenlayout).

## Shapes & Effekte

Titan verfügt über drei Arten von Effekten: vorprogrammierte Effekte
([Shapes](../effects/shape-generator.md)), Muster, die man selbst erstellt ([Keyframe-Shapes](../effects/key-frame-shapes.md)), sowie ([Pixelmapper-Effekte](../effects/pixel-mapper.md)).

Wählen Sie mehrere Geräte aus (individuell oder als Gruppe); dabei bestimmt die Reihenfolge der
Auswahl bzw. das Layout in der Gruppe die Reihenfolge innerhalb des Shapes.

Im Hauptmenü drücken Sie <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Shape Generator</Keys.SoftKey>,
<Keys.SoftKey>Create</Keys.SoftKey>. 
Wählen Sie das gewünschte Attribut, auf das der Effekt
angewendet werden soll.

Ebenso können Sie aus der Effekt-Bibliothek (2 x <Keys.HardKey>Open/View</Keys.HardKey>, 
<Keys.SoftKey>Shape Library</Keys.SoftKey>) direkt einen Effekt auswählen. Die Liste
lässt sich mit den Attribut-Tasten filtern.

Stellen Sie mit den Rädern und der Auswahl <Keys.SoftKey>Adjust Speed, Size and
Spread</Keys.SoftKey>/<Keys.SoftKey>Adjust Phase, Spread and Offset</Keys.SoftKey> die Effekt-Parameter wie
gewünscht ein. Dabei bestimmt ‚Spread' die Verteilung des Effekts auf
die Geräte.

[Keyframe-Shapes](../effects/key-frame-shapes.md) arbeiten ähnlich wie [Chaser](../chases.md). Wichtigster Unterschied
ist, dass man den genauen Kurvenverlauf selbst bestimmen kann.

Um den [Pixelmapper](../effects/pixel-mapper.md), zu verwenden, müssen 
entsprechende Gruppen erstellt werden. Wählen Sie dann die Gruppe aus, und 
stellen Sie mit dem [Layout-Editor](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) die Anordnung der Geräte innerhalb der Gruppe ein, bevor
Sie schließlich mit dem Effekt-Editor Effekte erstellen.
