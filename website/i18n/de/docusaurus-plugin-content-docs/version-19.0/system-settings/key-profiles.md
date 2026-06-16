---
id: key-profiles
title: Key Profiles - Tastenbelegungen
sidebar_label: Key Profiles - Tastenbelegungen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Die Belegung der Bedientasten des Pultes lässt sich sehr fein einstellen
und auf die jeweilige Arbeitsweise abstimmen. Die Einstellungen lassen
sich dann in einem sog. Profil ('Key Profile') speichern. Wird das Pult
von mehreren Benutzern verwendet, so kann jeder, abhängig von der
jeweiligen Aufgabe, mit einem Klick die Konfiguration ändern.

Es gibt Standard-Profile 'Run', Takeover', 'Program', ‚Theatre' und
‚Night Club'. Diese Standard-Profile können nicht verändert werden, so
dass man stets eine sinnvolle Arbeitsgrundlage hat. Hingegen kann man
sie als Grundlage zum Erstellen eigener Profile verwenden.

Die aktuellen Einstellungen der Playback-Tasten werden direkt darüber im
Touchscreen angezeigt.

![Key Profiles on playback](/docs/images/Playback-Faders-with-key-profiles-applied.png)

## Erstellen und Ändern von Tastenbelegungen

<Video videoId="CxHQV4sP_sA" title="Key Profiles" />

Zum Erstellen eines solchen Profils öffnen Sie mit <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> 
das **System**-Menü und drücken <Keys.SoftKey>Key Profiles</Keys.SoftKey>. Darauf 
öffnet sich das Menü 'Manage Profiles', mit dem man die verschiedenen 
Profile anzeigen ('View'), ändern ('Edit'), löschen ('Delete') oder 
ein neues erstellen ('Add') kann.

Key Profiles kann man ebenso in den Playback-Optionen neu anlegen sowie
auswählen (Reiter ‚Handle').

Key Profiles (Tastenbelegungen) können auch im Fenster '[Show Library](../titan-basics/show-library.md#der-reiter-key-profiles-tastenprofile)'
angezeigt werden.

Beim Erstellen eines neuen ('Add') lässt sich eines der bestehenden
auswählen, das zunächst kopiert wird, um die Einstellungen von diesem zu
übernehmen.

Auch im normalen 'Program'-Modus lassen sich die Profile ändern: halten
Sie dazu <Keys.HardKey>AVO</Keys.HardKey> gedrückt und wählen <Keys.SoftKey>Edit Current Key Profile</Keys.SoftKey>. Ist
das aktuelle Profil eines der schreibgeschützten, so erscheint die
Aufforderung zur Anlage eines neuen bzw. Auswahl eines anderen
bestehenden Profiles.

In Anlehnung an die Tastenlayouts der früheren Pulte werden die verschiedenen Tasten 
als <Keys.SoftKey>schwarz</Keys.SoftKey>, <Keys.SoftKey>blau</Keys.SoftKey>, <Keys.SoftKey>grau</Keys.SoftKey>, 
und - soweit zutreffend - <Keys.SoftKey>touch</Keys.SoftKey> (die Touchscreen-Schaltflächen 
und Executor-Tasten) bezeichnet. Auf dem D7 und dem D9 sind die 'blauen' Tasten die Auswahltasten und 
die 'grauen' Tasten die Flashtasten. Die aktuellen Funktionen der verschiedenen Tasten werden links 
im Bildschirm angezeigt. Sobald ein Tastentyp angewählt wurde, werden die verschiedenen möglichen Aktionen 
angezeigt. Über schwarze Tasten verfügt nur das Sapphire Touch, außerdem können bei den virtuellen Fadern 
schwarze Tasten aktiviert werden.

![Editing a Key Profile](/docs/images/Editing-a-Key-Profile.png)

## Tastenfunktionen

Es lassen sich folgende Tastengruppen einzeln einstellen (graue oder
blaue Tasten für 'Fixtures' und ‚Palettes' gibt es nur bei Pearl Expert;
auf den anderen Pulten sind diese Optionen ohne Funktion):

### Fixtures
Die blaue, graue sowie 'touch'-Taste lassen sich als
&nbsp;**Disabled** (deaktiviert), **Select** (Auswahltaste), **Flash**, **Swop** und
&nbsp;**Latch** (Einrasten) konfigurieren. 

>   Die 'Latch'-Funktion wirkt wie das Stellen des Faders auf 100%, und auf 0% bei der zweiten Betätigung.

### Groups
Die blaue, graue sowie 'touch'-Taste lassen sich als **Disabled**,
&nbsp;**Select Group**, **Flash Fixtures**, **Timed Flash**, **Flash Master**, **Timed Flash
Master**, **Swop Fixtures** konfigurieren, siehe auch [Geräte-Gruppen](../controlling-fixtures/fixture-groups.md).

>   Die Option **Group/Flash takes precedence** bezieht sich nur auf das Pearl Expert, bei 
    dem es möglich ist, auf Fadern Playbacks zu speichern und auf den zugehörigen Flash-Tasten Gruppen abzulegen.

### Palettes

Paletten-Tasten/Schaltflächen können **Disabled** (deaktiviert) sein oder mit
&nbsp;**Select Palette** die Palette anwählen.

Mit **Palette is fired ignoring/with its times** wird festgelegt, ob beim
Aufrufen von Paletten gespeicherte Zeiten berücksichtigt werden oder nicht, 
siehe [Paletten mit Zeiten](../palettes/timing-with-palettes).
Dies ist besonders interessant beim [Improvisieren (Busking) mit Paletten](../running-the-show/playback-controls.md#improvisieren-busking-mit-paletten).

>   Die Option **Palette/Flash takes precedence** bezieht sich nur auf das 
    Pearl Expert, bei dem es möglich ist, auf Fadern Playbacks zu speichern
    und auf den zugehörigen Flash-Tasten Paletten abzulegen.

### Cues

Die Tasten und Schaltflächen können belegt werden mit **Disabled**, **Flash**,
&nbsp;**Timed Flash**, **Swop**, **Latch**, **Preload**, **Go**, **Tap Tempo**, 
&nbsp;**Release** und **Select If**.

### Chases

Die Tasten und Schaltflächen können belegt werden mit **Disabled**, **Flash**,
&nbsp;**Timed Flash**, **Swop**, **Latch**, **Go**, **Stop**, **Preload**, **Connect**, 
&nbsp;**Tap Tempo**, **Release**, **Select If**.

### Cue Lists

Dies betrifft das [Abrufen von Cuelisten](../cue-lists/cue-list-playback.md), und
es stehen folgende Einstellungen für die Tasten und den Button zur Verfügung:

Einstellung | Funktion
---|---
Disabled | Die Taste hat keine Funktion.
Flash | Alle Dimmerkanäle des Cues springen auf den programmierten Pegel und kehren danach zum vorherigen Wert zurück.
Flash and Go | Wie Flash, aber mit Loslassen der Taste wird der nächste Cue aufgerufen.
Timed Flash | Wie Flash, aber unter Berücksichtigung der eingestellten Fadezeiten.
Timed Flash and Go | Flash mit Berücksichtigung der Fadezeiten sowie Weiterschalten bei Loslassen.
Swop | Wie Flash, aber alle anderen Geräte werden solange dunkelgeschaltet.
Latch | Wie Flash, aber Dimmerkanäle bleiben nach dem Loslassen bis zum erneuten Betätigen aktiv.
Go | Der nächste Cue wird unter Berücksichtigung der eingestellten Zeit aktiviert.
Stop | Alle Überblendvorgänge werden angehalten.
Preload | LTP-Kanäle von Geräten, die gerade dunkel sind, werden auf den als nächstes aktiven Wert eingestellt.
Connect | Verbindet die Cueliste mit der Ablaufsteuerung (ebenso wie die Taste <Keys.HardKey>Connect / Cue</Keys.HardKey> gefolgt von der Anwahl der Cueliste).
Tap Tempo | Geschwindigkeitssteuerung durch Tippen im Takt.
Next Cue - | Geht einen Cue zurück.
Next Cue + | Geht einen Cue vorwärts.
Review Live Cue | Aktuellen Cue nochmals mit Fadezeiten einblenden.
Cut Next Cue to Live | Nächsten Cue ohne Fadezeiten aktivieren.
Snap Back | Einen Cue zurückgehen, ohne Fadezeiten zu berücksichtigen.
Go Back | Einen Cue zurück, mit Fadezeiten.
Release | Playback releasen, unter Berücksichtigung der eingestellten Release-Zeit.
Select If | Alle Geräte im aktuellen Cue auswählen.

### Macros
Kann gesetzt werden auf **Select** (Auswahl) oder **Disabled**.

>   Die Option **Macro/Flash takes precedence** bezieht sich nur auf das 
    Pearl Expert, bei dem es möglich ist, auf Fadern Playbacks zu speichern
    und auf den zugehörigen Flash-Tasten Macros abzulegen.

### Options

Damit lässt sich die Schnellspeicherfunktion ('Quick
Record') beim Doppelklick auf freie Schaltflächen deaktivieren.

### Masters

Es gibt unterschiedliche Einstellungen für <Keys.SoftKey>Standard Masters</Keys.SoftKey> und 
den <Keys.SoftKey>Scene Master</Keys.SoftKey>.

Für normale Master gibt es die Optionen **Disabled**, **Selection**, **Flash**, 
&nbsp;**Latch**, **Connect**, **Tap Tempo**, **Nudge Up**, **Nudge Down**, **Release**, **Reset Multiplier**, **Multiplier x2**, **Freeze**.

Manche davon gelten nur für bestimmte Master, z.B. gibt es Multiplier 
nur für BPM-Master, siehe [Optionen für BPM-Master](../running-the-show/playback-controls.md#optionen-für-bpm-master). Mit
Freeze können Shapes und Chaser vorübergehend angehalten werden; bei
einem Intensity-Master wirkt Freeze als Blackout.

Für den Scene Master gibt es die Optionen **Disabled**, **Preload Scene Mode**, 
&nbsp;**Exit Scene Mode**, **Enter Scene Mode**, **Commit Changes**, 
&nbsp;**Commit Changes and Exit Scene Mode**, **Enter or Exit Scene Mode**, 
&nbsp;**Enter or Commit Scene Mode**,**Reset Scene Mode**. Siehe 
[Scene Master](../running-the-show/playback-controls.md#scene-master).

## Die Tastenbelegung wechseln

Zur Auswahl einer Tastenbelegung halten Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt
und drücken dazu <Keys.SoftKey>Select Key Profile</Keys.SoftKey>. Damit wird das Key Profile für 
alle Tasten geändert, für die nicht individuell eins ausgewählt ist.

## Tastenbelegungen für einzelne Speicherplätze

Jedem Speicherplatz lässt sich eine gesonderte Tastenbelegung zuordnen.
Damit können die einzelnen Tasten für jeden Speicherplatz anders
konfiguriert werden. Dazu wählt man <Keys.HardKey>Options</Keys.HardKey> oder <Keys.SoftKey>Options</Keys.SoftKey>, dann das 
Playback, die Option <Keys.SoftKey>Handle</Keys.SoftKey> und dann <Keys.SoftKey>Key Profile</Keys.SoftKey>. Steht die 
Auswahl auf <Keys.SoftKey>Global</Keys.SoftKey>, so werden die allgemeinen
Tasteneinstellungen verwendet.

Das Tastenprofil für einzelne Playbacks lässt sich wie folgt schnell ändern:
halten Sie die Taste <Keys.HardKey>Options</Keys.HardKey> gedrückt und wählen Sie das Playback. Sie 
können nun das gewünschte Profil wählen, und die Auswahl wird sofort wirksam.