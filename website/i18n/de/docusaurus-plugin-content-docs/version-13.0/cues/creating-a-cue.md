---
id: creating-a-cue
title: Creating a Cue
sidebar_label: Creating a Cue
original_id: creating-a-cue
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Arbeitsweise des Pultes beim Programmieren
Sobald ein oder mehrere Dimmer/Geräte zum Steuern ausgewählt werden,
werden diese in den <strong><em>Editor</em></strong> geladen. Nun lassen sich mit den [Encodern (Wheels)](../controlling-fixtures/using-the-select-buttons-and-wheels.md#einstellen-von-attributen-mit-den-encodern) und
[Paletten](../palettes.md) die Einstellungen der Geräte verändern; ebenso lassen sich
Shapes anwenden.

Wird ein Gerät angewählt, nachdem bereits Änderungen vorgenom­men
wurden, wird die aktuelle Geräteliste im Editor geleert und eine neue begonnen.

Alle seit der letzten Betätigung der <Keys.HardKey>Clear</Keys.HardKey>-Taste veränderten Geräte
und Attribute werden im <strong><em>Programmer (Programmierspeicher)</em></strong> gespeichert. 
Auch die Reihenfolge der Auswahl der Geräte wird dort gespeichert und ggf. etwa
bei [Shapes/Effekten](../effects.md) und beim Überblenden ([Geräte-Überlappung/Fixture Overlap](cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz)) verwendet. 
Beim Speichern des Cues wird schließlich der Inhalt des Programmierspeichers 
in das Playback geschrieben.

Das Betätigen der Taste <Keys.HardKey>Clear</Keys.HardKey> (bei den Zifferntasten) löscht den
Editor sowie den Programmierspeicher. Damit stellt man sicher, dass beim
weiteren Programmieren keine Geräte beeinflusst werden, die man nicht
verändern will. Auch beim Beenden des Programmierens empfiehlt sich der
Druck auf die <Keys.HardKey>Clear</Keys.HardKey>-Taste, da sämtliche Attribute im
Programmierspeicher die Einstellungen der Playbacks sonst überlagern.

Geräte, die aktuell im Programmspeicher sind, werden auf den
[Geräte-Schaltflächen](../controlling-fixtures/using-the-select-buttons-and-wheels.md#dimmer-und-geräte-zum-steuern-auswählen) in einem mittleren Blau dargestellt. Attribute im
Programmierer (also die geänderten Einstellungen) werden [in der Attribut-Anzeige](../controlling-fixtures/using-the-select-buttons-and-wheels.md#anzeige-der-attributwerte)
in Cyan dargestellt.

Beim Abrufen eines Cues werden dessen Werte nicht in den
Programmierspeicher übernommen *(das lässt sich jedoch durch die
[Include-Function](editing-cues.md#cues-wiederverwenden---die-include-funktion) erreichen)*.


## Anlegen eines Cues

<Video videoId="X5g6DMVwlZU" title="Creating a Cue" />

1. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den Programmierspeicher zu leeren.\
*Damit wird eine saubere Arbeitsumgebung sichergestellt.*

2. Stellen Sie das gewünschte Bild ein. Dabei können auch Shapes
verwendet werden. Bedenken Sie, dass nur die von Ihnen angewählten
Geräte bzw. veränderten Attribute im Cue gespeichert werden (je nach
Speichermodus).

3. Betätigen Sie die Taste <Keys.HardKey>Record</Keys.HardKey> *(<Keys.HardKey>Record Cue</Keys.HardKey> auf älteren Pulten)*.

4. Drücken Sie die <strong>Swop-Taste</strong> eines freien Playbacks; freie
Speicherplätze werden durch blinkende LEDs angezeigt. Ebenso lässt
sich ein Cue auf eine Schaltfläche im Fenster 'Playbacks' speichern.

5. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den Programmierspeicher zu leeren.

Wissenswerte Dinge zum Speichern von Cues:

-   Cues können auf die Fader, auf Macro/Executor-Tasten sowie auf 
Schaltflächen im Fenster 'Playbacks' gespeichert werden.

-   Die Menütaste <Keys.SoftKey>Record Mode</Keys.SoftKey> bietet folgende Optionen:
    -   <Keys.SoftKey>Record By Fixture</Keys.SoftKey> - Speichern pro Gerät - alle Attribute 
	der Geräte, die angewählt oder verändert wurden, werden gespeichert
    -   <Keys.SoftKey>Record By Channel</Keys.SoftKey> - Speichern pro Kanal - nur die veränderten 
	Attribute werden gespeichert
    -   <Keys.SoftKey>Record Stage</Keys.SoftKey> - gesamtes Bild speichern: sämtliche
    Geräte mit nicht geschlossenem Dimmer werden gespeichert
    -   &nbsp;<Keys.SoftKey>Quick Build</Keys.SoftKey> - siehe [nächster Abschnitt](#quick-build----cues-schnellspeichern)

-   <Keys.SoftKey>Record By Channel</Keys.SoftKey> ist empfehlenswert, wenn mehrere Cues
    übereinandergelegt werden sollen, um einen bestimmten Effekt zu
    erzielen.

-   Soll eine Vielzahl von Cues gespeichert werden, so lässt sich mit
    der Taste <Keys.HardKey>Menu Latch</Keys.HardKey> das 'Record Cue'-Menu einrasten und dauerhaft
    aktiv halten. Ein weiteres Betätigen von <Keys.HardKey>Menu Latch</Keys.HardKey> verlässt
    diesen Modus wieder.

-   Unten im Bildschirm wird eine Bezeichnung des jeweiligen Cues
    angezeigt. Um diese einzustellen, drücken Sie <Keys.SoftKey>Set Legend</Keys.SoftKey>, dann
    die jeweilige <strong>Swop-Taste</strong> des entsprechenden Playbacks, und geben
    die Bezeichnung über die Tastatur ein oder machen eine Skizze auf dem 
	Bildschirm. Beenden Sie die Eingabe mit <Keys.HardKey>Enter</Keys.HardKey>. *Handelt es sich um 
	einen Speicherplatz ohne zugehörigen Bildschirmbereich - etwa nur eine 
	Taste - so bezeichnen Sie diesen auf hergebrachte Art mit Tape und Stift.*

![Playbacks stored on playback faders](/docs/images/Playbacks-stored-on-playback-faders.png)

-   Das Fenster 'Static Playbacks' zeigt die Belegung der
    Macro-/Exekutor-Tasten sowie - auf dem Tiger Touch - der 10 festen
    Fader.

## Quick Build -- Cues schnellspeichern

Stellt man <Keys.SoftKey>Record Mode</Keys.SoftKey> auf <strong>Quick Build</strong>, so lassen sich Cues aus
bereits programmierten Cues und Paletten erstellen (wie auch per
[Include](editing-cues.md#cues-wiederverwenden---die-include-funktion)).

Nach dem Aktivieren von Quick Build wartet das Pult auf die Auswahl von
Speicherplätzen und Paletten.

Sollen nur einige der Lampen aus einem Speicherplatz/einer Palette
verwendet werden, wählen Sie zuerst die Geräte aus, und klicken dann auf
das Playback/die Palette.

Drücken Sie <Keys.SoftKey>OK</Keys.SoftKey>, wenn alle erforderlichen Playbacks/Paletten
aufgerufen wurden.

## Verwenden von Shapes und Effekten in Cues

Erwartungsgemäß werden auch sämtliche aktivierten [Shapes und Pixel-Effekte](../effects.md)
als Teil des Cues abgespeichert. 

Ebenso können Sie einen Shape ohne Basiswerte speichern; ein Cue wie
dieser kann gemeinsam mit anderen Cues abgerufen werden, überlagert dann
die dort abgespeicherten Werte/Shapes und ergibt vielfältige
Kombinationsmöglichkeiten. Zum Speichern eines solchen Cues nutzen Sie
den Modus <strong>Record by Channel</strong> sowie die ['Off'-Funktion](editing-cues.md#deaktivieren-von-attributen-in-cues-mit-off), um die anderen
Attribute aus dem Programmierspeicher zu entfernen.

## Blind-Modus

Im Blind-Modus lassen sich Änderungen an der Programmierung vornehmen,
ohne dabei die aktuellen Ausgangssignale zu verändern; damit lassen sich
etwa während einer laufenden Show noch 'unsichtbar' Korrekturen
vornehmen. Diese können gleichwohl im [Visualiser](../capture-visualiser.md) zur Kontrolle angezeigt werden.

Zum Aktivieren des Blind-Modus drücken Sie auf die Taste <Keys.HardKey>Blind</Keys.HardKey> *(auf
älteren Pulten ohne diese Taste halten Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt
und wählen die Option <Keys.SoftKey>Blind</Keys.SoftKey>; damit können Sie zwischen <Keys.SoftKey>Active</Keys.SoftKey>
und <Keys.SoftKey>Inactive</Keys.SoftKey> umschalten)*.

Sollen nur einzelne Speicherplätze z.B. im Visualiser kontrolliert
werden, ohne auf die Bühne 'rauszugehen', so können sie per \[Playback
Options\] in den Blind-Modus geschaltet werden, oder man hält <Keys.HardKey>Blind</Keys.HardKey>
gedrückt und drückt/klickt auf das jeweilige Playback. Wiederholt man
das, so wird das Playback wieder ‚Live'.

Die im Blind-Modus vorgenommenen Einstellungen lassen sich in den
Live-Modus herüberfaden: dazu tippen Sie mit den Zifferntasten eine Zeit
(in Sekunden) ein und drücken dann <Keys.HardKey>Blind</Keys.HardKey>. Damit können z.B. mehrere
Paletten auf einmal abgerufen werden; oder Sie bereiten Blind einen
neuen Look vor und rufen diesen ab, ohne erst einen Cue programmieren zu
müssen.

## Attribut-Speichermaske bei Cues

Beim Speichern von Cues lässt sich eine Maske erstellen, mit der die zu
speichernden Attribute festgelegt werden. Dies funktioniert genauso wie 
beim [Speichern von Paletten](../palettes/creating-palettes.md#speichern-einer-palette).
Drücken Sie <Keys.HardKey>Record</Keys.HardKey> und wählen die Option <Keys.SoftKey>Set Mask</Keys.SoftKey>. Wählen Sie 
nun die zu speichernden Attribute mit den Attribut-Tasten.

## Cues zu Chasern/Cuelisten umwandeln

Bestehende Cues lassen sich ganz einfach zu [Chasern](../chases.md) oder
[Cuelisten](../cue-lists.md) umwandeln, indem man einen weiteren Cue 
hinzufügt und die entsprechende Option wählt. Nehmen Sie die gewünschten
Einstellungen (für den zweiten Step) vor, drücken Sie <Keys.HardKey>Record</Keys.HardKey>, gefolgt 
von der blauen Taste des bereits bestehenden Cues. Wählen Sie nun die Option 
<Keys.SoftKey>Convert to Chase</Keys.SoftKey> (oder Cue List). Damit wird der bestehende Cue 
Cue 1, der neu gespeicherte Cue wird Cue 2.
