---
id: key-profiles
title: Key Profiles
sidebar_label: Key Profiles
original_id: key-profiles
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

Zum Erstellen eines solchen Profils schalten Sie das Pult in den
'System'-Modus und drücken <Keys.SoftKey>Key Profiles</Keys.SoftKey>. Darauf öffnet sich das Menü
'Manage Profiles', mit dem man die verschiedenen Profile anzeigen
('View'), ändern ('Edit'), löschen ('Delete') oder ein neues erstellen
('Add') kann.

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

Die aktuellen Einstellungen für die verschiedenen Tastentypen
(<Keys.SoftKey>schwarz</Keys.SoftKey>, <Keys.SoftKey>blau</Keys.SoftKey>, <Keys.SoftKey>grau</Keys.SoftKey>, und - soweit zutreffend -
<Keys.SoftKey>'touch'</Keys.SoftKey> (die Touchscreen-Schaltfläche)) werden links im Bildschirm
angezeigt. Über schwarze Tasten verfügt nur das Sapphire Touch.

![Editing a Key Profile](/docs/images/Editing-a-Key-Profile.png)

## Tastenfunktionen

Es lassen sich folgende Tastengruppen einzeln einstellen (graue oder
blaue Tasten für 'Fixtures' und ‚Palettes' gibt es nur bei Pearl Expert;
auf den anderen Pulten sind diese Optionen ohne Funktion):

### Fixtures
Die blaue, graue sowie 'touch'-Taste lassen sich als
<strong>Disabled</strong> (deaktiviert), <strong>Select</strong> (Auswahltaste), <strong>Flash</strong>, <strong>Swop</strong> und
<strong>Latch</strong> (Einrasten) konfigurieren. 

>	Die 'Latch'-Funktion wirkt wie das Stellen des Faders auf 100%, und 
	auf 0% bei der zweiten Betätigung.

### Groups
Die blaue, graue sowie 'touch'-Taste lassen sich als <strong>Disabled</strong>,
<strong>Select Group</strong>, <strong>Flash Fixtures</strong>, <strong>Timed Flash</strong>, <strong>Flash Master</strong>, **Timed Flash
Master<strong>, </strong>Swop Fixtures** konfigurieren, siehe auch [Geräte-Gruppen](../controlling-fixtures/fixture-groups.md).

>	Die Option <strong>Group/Flash takes precedence</strong> bezieht sich nur auf das 
	Pearl Expert, bei dem es möglich ist, auf Fadern Playbacks zu speichern
	und auf den zugehörigen Flash-Tasten Gruppen abzulegen.

### Palettes

Paletten-Tasten/Schaltflächen können <strong>Disabled</strong> (deaktiviert) sein oder mit
<strong>Select Palette</strong> die Palette anwählen.

Mit <strong>Palette is fired ignoring/with its times</strong> wird festgelegt, ob beim
Aufrufen von Paletten gespeicherte Zeiten berücksichtigt werden oder nicht, 
siehe [Paletten mit Zeiten](../palettes/timing-with-palettes).
Dies ist besonders interessant beim [Improvisieren (Busking) mit Paletten](../running-the-show/playback-controls.md#improvisieren-busking-mit-paletten).

>   Die Option <strong>Palette/Flash takes precedence</strong> bezieht sich nur auf das 
	Pearl Expert, bei dem es möglich ist, auf Fadern Playbacks zu speichern
	und auf den zugehörigen Flash-Tasten Paletten abzulegen.

### Cues

Die Tasten und Schaltflächen können belegt werden mit <strong>Disabled</strong>, <strong>Flash</strong>,
<strong>Timed Flash</strong>, <strong>Swop</strong>, <strong>Latch</strong>, <strong>Preload</strong>, <strong>Go</strong>, <strong>Tap Tempo</strong>, 
<strong>Release</strong> und <strong>Select If</strong>.

### Chases

Die Tasten und Schaltflächen können belegt werden mit <strong>Disabled</strong>, <strong>Flash</strong>,
<strong>Timed Flash</strong>, <strong>Swop</strong>, <strong>Latch</strong>, <strong>Go</strong>, <strong>Stop</strong>, <strong>Preload</strong>, <strong>Connect</strong>, 
<strong>Tap Tempo</strong>, <strong>Release</strong>, <strong>Select If</strong>.

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
Connect | Verbindet die Cueliste mit der Ablaufsteuerung (ebenso wie die Taste <Keys.HardKey>Connect</Keys.HardKey> gefolgt von der Anwahl der Cueliste).
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
Kann gesetzt werden auf <strong>Select</strong> (Auswahl) oder <strong>Disabled</strong>.

>   Die Option <strong>Macro/Flash takes precedence</strong> bezieht sich nur auf das 
	Pearl Expert, bei dem es möglich ist, auf Fadern Playbacks zu speichern
	und auf den zugehörigen Flash-Tasten Macros abzulegen.

### Options

Damit lässt sich die Schnellspeicherfunktion ('Quick
Record') beim Doppelklick auf freie Schaltflächen deaktivieren.

### Masters

Diese Sektion ist unterteilt in 'Standard Masters' und 'Scene Master'.

Für normale Master gibt es die Optionen <strong>Disabled</strong>, <strong>Selection</strong>, <strong>Flash</strong>, <strong>Latch</strong>, **Tap
Tempo<strong>, </strong>Nudge Up<strong>, </strong>Nudge Down<strong>, </strong>Release<strong>, </strong>Reset Multiplier<strong>, </strong>Multiplier x2**,
<strong>Freeze</strong>, <strong>Connect</strong>.

Die letzteren gelten nur für BPM-Master, siehe [Optionen für BPM-Master](../running-the-show/playback-controls.md#optionen-für-bpm-master). Mit
Freeze können Shapes und Chaser vorübergehend angehalten werden; bei
einem Intensity-Master wirkt Freeze als Blackout.

Für den Scene Master gibt es die Optionen <strong>Disabled</strong>, <strong>Exit scene mode</strong>, 
<strong>Enter scene mode</strong>, <strong>Commit changes</strong>, **Commit changes and exit 
scene mode<strong>, </strong>Enter or Exit scene mode<strong>, </strong>Enter or commit scene mode**.

## Eine Tastenbelegung auswählen

Zur Auswahl einer Tastenbelegung halten Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt
und drücken dazu <Keys.SoftKey>Select Key Profile</Keys.SoftKey>.

## Tastenbelegungen für einzelne Speicherplätze

Jedem Speicherplatz lässt sich eine gesonderte Tastenbelegung zuordnen.
Damit können die einzelnen Tasten für jeden Speicherplatz anders
konfiguriert werden. Dazu wählt man <Keys.SoftKey>Playback Options</Keys.SoftKey>, dann das 
Playback, die Option <Keys.SoftKey>Handle</Keys.SoftKey> und dann <Keys.SoftKey>Key Profile</Keys.SoftKey>. Steht die 
Auswahl auf <Keys.SoftKey>Global</Keys.SoftKey>, so werden die allgemeinen
Tasteneinstellungen verwendet.
