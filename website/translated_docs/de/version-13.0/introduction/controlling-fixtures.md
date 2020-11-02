---
id: version-13.0-controlling-fixtures
title: Controlling fixtures
sidebar_label: Controlling fixtures
original_id: controlling-fixtures
---

Zum Steuern werden einzelne oder mehrere Geräte mit den
Geräte-Schaltflächen ausgewählt. Die Buttons der ausgewählten Geräte
werden hellblau dargestellt.

Drücken Sie \<Locate\>, um die ausgewählten Geräte zu "homen" (50%
Pan/Tilt, kein Gobo, open white), siehe [Locate](../controlling-fixtures/using-the-select-buttons-and-wheels.md#geräte-auf-startposition-setzen-locate). Halten
Sie die \<Locate\>-Taste gedrückt und drücken Sie dazu einzelne
Attribute, um diese **nicht** zurückzusetzen (um z.B. Pan/Tilt nicht
zurückzusetzen, halten Sie \<Locate\> und drücken dazu \<Position\>).

Wählen Sie nun einzelne Attribute zum Bearbeiten aus (Attribut-Tasten
sind beschriftet mit Intensity/Dimmer, Colour, Gobo usw.), und stellen
Sie die gewünschten Werte mit den Rädern ein; Attribute und Werte werden
dabei im Display angezeigt
(Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/using-the-select-buttons-and-wheels.md#einstellen-von-attributen-mit-den-encodern)).

Ebenso können Sie das Attribut-Fenster öffnen (\<View\>, \<Attribute
Options\>), um Einstellungen mit den Schaltflächen auszuwählen und um
einzelne Zellen/Subfixtures von Geräten mit mehreren Zellen zu
beeinflussen.
(Siehe [Geräte mit mehreren Zellen/Subfixtures](../controlling-fixtures/using-the-select-buttons-and-wheels.md#geräte-mit-mehreren-zellensubfixtures)).

Verwenden Sie Paletten, um häufig benutzte Farben, Positionen etc. zu
speichern, siehe nächste Seite.

## Geräte-Gruppen

Geräte können zur schnelleren Auswahl  [zu Gruppen zusammengefasst](../controlling-fixtures/fixture-groups.md) werden:
drücken Sie \<Group\>, \[Record Group\], wählen die zu gruppierenden
Geräte aus, geben ggf. eine Legende ein (mit \[Provide a legend\]), und
klicken auf eine Gruppen-Schaltfläche oder Taste (wenn es eine
Playback-Taste mit Fader ist, wird daraus ein Gruppen-Masterfader). Die
Reihenfolge der Geräteauswahl etwa zur Verwendung innerhalb von
Effekten/Shapes wird mit den Gruppen gespeichert.  Ebenso wird das Layout der Geräte pro Gruppe gespeichert und
etwa für Pixelmapper-Effekte sowie Shapes verwendet.

## Shapes & Effekte

Titan verfügt über drei Arten von Effekten: vorprogrammierte Effekte
(Shapes), Muster die man selbst erstellt ([Keyframe-Shapes](../effects/key-frame-shapes.md)) sowie [Pixelmapper-Effekte](../effects/pixel-mapper.md).

Wählen Sie mehrere Geräte aus; dabei bestimmt die Reihenfolge der
Auswahl die Reihenfolge innerhalb des Shapes.

Im Hauptmenü drücken Sie \[Shapes and Effects\], \[Shape Generator\],
\[Create\], siehe [Shape Generator](../effects/shape-generator.md). 
Wählen Sie das gewünschte Attribut, auf das der Effekt
angewendet werden soll.

Ebenso können Sie aus der Effekt-Bibliothek (\<View/Open\>, \[Open Workspace
Window\], \[Shape Library\]) direkt einen Effekt auswählen. Die Liste
lässt sich mit den Attribut-Tasten filtern.

Stellen Sie mit den Rädern und der Auswahl \[Adjust Speed, Size and
Spread\]/\[Adjust Phase, Spread and Offset\] die Effekt-Parameter wie
gewünscht ein. Dabei bestimmt ‚Spread' die Verteilung des Effekts auf
die Geräte.

[Keyframe-Shapes](../effects/key-frame-shapes.md) arbeiten ähnlich wie [Chaser](../chases.md). Wichtigster Unterschied
ist, dass man den genauen Kurvenverlauf selbst bestimmen kann.

Um den [Pixelmapper](../effects/pixel-mapper.md), zu verwenden, müssen 
entsprechende Gruppen erstellt werden. Wählen Sie dann die Gruppe aus, und 
stellen Sie mit dem [Layout-Editor](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) die Anordnung der Geräte innerhalb der Gruppe ein, bevor
Sie schließlich mit dem Effekt-Editor Effekte erstellen.
