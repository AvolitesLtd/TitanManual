---
id: programming-cues-and-chases
title: Programmieren von Cues und Chasern
sidebar_label: Programmieren von Cues und Chasern
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Cues

Stellen Sie die Geräte/Werte wie gewünscht ein.

Drücken Sie <Keys.HardKey>Record</Keys.HardKey>.

Stellen Sie <Keys.SoftKey>Record Mode</Keys.SoftKey> auf 'Channel' (es werden nur die geänderten
Attribute gespeichert), 'Fixture' (Speichern aller Attribute der
gewählten/geänderten Geräte), 'Stage' (Speichern sämtlicher Attribute
aller aktiven Geräte, d.h. mit Dimmer \> 0), oder ‚Quick Build'
(Erstellen des Cues aus Paletten oder Playbacks je nach Schaltfläche).

Zum Speichern drücken Sie die **Auswahltaste** eines Faders, eine Macro-/Executor-Taste oder
betätigen Sie eine Schaltfläche im ‚Playbacks'-Fenster (siehe [Erstellen eines Cues](../cues/creating-a-cue.md)).

## Chaser

Drücken Sie zweimal <Keys.HardKey>Record</Keys.HardKey> (oder <Keys.HardKey>Record</Keys.HardKey> und dann \[Create
Chase\]).

Drücken Sie die **Auswahltaste** eines Faders, eine Macro-/Executor-Taste, oder betätigen Sie eine
Schaltfläche im ‚Playbacks'-Fenster.

Stellen Sie Geräte/Attribute für den ersten Chase-Step ein, und drücken
Sie wieder die Taste/Schaltfläche zum Speichern, Wiederholen Sie diesen
Vorgang für alle Chase-Schritte. Mit ‚Quick Build' können rasch aus
einzelnen Paletten und Cues Chase-Steps erstellt werden.

Drücken Sie zum Abschluss <Keys.HardKey>Exit</Keys.HardKey> (siehe [Einen Chaser programmieren](../chases/creating-a-chase.md#einen-chaser-programmieren)).

## Timings

Sämtliche (Fade-)Zeiten, sowohl für Cues als auch für einzelne
Attribute, werden ebenfalls im Programmierspeicher verwaltet und ggf.
beim Speichern eines Cues berücksichtigt.

Zum Einstellen der im Programmierspeicher vorgemerkten Zeiten drücken
Sie die Taste <Keys.HardKey>Times</Keys.HardKey> (vormals <Keys.HardKey>Set</Keys.HardKey> auf dem Quartz/Titan Mobile/Sapphire
Touch/Tiger Touch II bzw. <Keys.HardKey>Next Time</Keys.HardKey> auf dem Pearl Expert/Tiger
Touch).

Sobald ein Chase gestartet ist, kann Geschwindigkeit und Crossfade mit
den Rädern A und B eingestellt werden.

Das Ändern der Zeiten bereits gespeicherter Cues erfolgt im Hauptmenü:
drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey>, und dann die Auswahltaste/Schaltfläche des
Cues/Chasers. Die Menütasten bieten nun verschiedene Timing-Optionen.

&nbsp;<Keys.SoftKey>Fixture Overlap</Keys.SoftKey> verändert das 'Überlappen' (Gleichzeitigkeit) der
Geräte: 100% = alle fahren/blenden gleichzeitig; 0% = alle
fahren/blenden nacheinander, siehe [Fixture Overlap](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz).

Mit <Keys.SoftKey>Attribute times</Keys.SoftKey> lassen sich für einzelne Attribute
unterschiedliche Zeiten vergeben.

Mit <Keys.SoftKey>Fixture order</Keys.SoftKey> lässt sich die Reihenfolge der Geräte für Shapes
sowie für das [Überlappen](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) einstellen.

Siehe auch [Zeiten für Cues](../cues/cue-timing.md).

## Cuelisten

Cues lassen sich in [Cuelisten](../cue-lists/creating-a-cue-list.md) 
speichern, so dass die gesamte Show per Go-Taste gefahren werden kann. 
Ebenso lassen sich Chaser per [Autoload](../cue-lists/creating-a-cue-list.md#autoloading-laden-eines-externen-cues) in
Cuelisten aufrufen. Cuelisten können im Tracking- oder
Non-Tracking-Modus arbeiten; diese Einstellung kann in den
<Keys.SoftKey>Optionen</Keys.SoftKey> der Cueliste vorgenommen werden. 
