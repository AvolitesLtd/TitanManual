---
id: user-settings
title: User Settings
sidebar_label: User Settings
original_id: user-settings
---

import Keys from '@site/src/components/key.ts';

Das Menü 'User Settings' (Benutzereinstellungen) lässt sich auch im
'Program'-Modus aufrufen; dazu halten Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt und
betätigen die Taste <Keys.SoftKey>User Settings</Keys.SoftKey>.

![User Settings Window](/docs/images/User-Settings-Window.png)

Es öffnet sich ein Fenster, in dem alle verfügbaren
Benutzereinstellungen angezeigt werden und verändert werden können;
ebenso kann man sie mit den Menütasten verändern. Die
Benutzereinstellungen gelten jeweils pro Benutzer.


> Ein Klick auf das Symbol *i* öffnet einen kleinen Hinweistext 
> zu der jeweiligen Einstellung.\
> \
> ![i button](/docs/images/i-button.png)

Die möglichen Einstellungen sind nach verschiedenen Kategorien sortiert.
Diese Kategorien sind links eingeblendet. Wählen Sie dort die Kategorie,
in der Sie eine Einstellung ändern wollen.

## General (Allgemein)

### Chase Snap
Falls aktiviert, wird mit den Tasten \<Next
Step\>/<Keys.HardKey>Prev Step</Keys.HardKey> bei Chasern hart auf den nächsten Schritt
umgeschaltet. Ist die Option dagegen deaktiviert, werden etwa
programmierte Fadezeiten berücksichtigt. Diese Option wird auch mit der
Taste <Keys.HardKey>Snap</Keys.HardKey> umgeschaltet, die auf einigen Pulten vorhanden ist.

### Cue List Snap
Falls aktiviert, wird mit den Tasten <Keys.HardKey>Next Step</Keys.HardKey>/<Keys.HardKey>Prev Step</Keys.HardKey> 
bei Cuelisten hart auf den nächsten Schritt umgeschaltet. Ist die 
Option dagegen deaktiviert, werden etwa programmierte Fadezeiten 
berücksichtigt.

### Clear Record Mask
Falls aktiviert, wird die Speichermaske (Record Mask) nach jedem 
Speichervorgang auf 'Alle Attribute' zurückgesetzt;
anderenfalls wird die eingestellte Maske beibehalten.

### Copy Cues
Bestimmt, ob beim Kopieren von Cues aus Cuelisten auch
getrackte Werte kopiert werden.

### Run Startup Playbacks
Damit kann das automatische Starten von
Playbacks beim Starten der Software bzw. Laden der Show generell
aktiviert oder deaktiviert werden. Einzelne Playbacks müssen dazu in
den Playback-Optionen entsprechend eingestellt werden.

### System Render Rate (Hz)
dient zum Einstellen der generellen Systemgeschwindigkeit. *Der 
Vorgabewert ist 40Hz*, und kann je nach Bedarf auf Werte von 1 bis 
44Hz gestellt werden. Mit kleineren Werten wird der Prozessor bei 
Shows mit sehr vielen gesteuerten Geräten ggf. entlastet.

### Lock Screen Background
Einstellen eines Hintergrundbildes bei gesperrtem Pult

---

## Handles

### Grand Master Fader
Dient zum Aktivieren/Deaktivieren des Grandmasters (sofern vorhanden),
hilfreich insbesondere, wenn der nicht korrekt funktionieren sollte. 
*Voreinstellung: inaktiv*.

### Delete Default
Bestimmt, was die Standard-Aktion beim Löschen (<Keys.HardKey>Delete</Keys.HardKey> + Doppelklick) 
von Elementen, also Cues, Paletten, Cuelisten und Chasern, ist. Stellt 
man dies auf 'Unassign', so werden diese Elemente nicht gelöscht, 
sondern nur von der Taste/Schaltfläche entfernt und sind über das 
Show-Verzeichnis weiterhin verfügbar.

### Prompt Replace
Bestimmt, wie sich das Pult verhält, wenn man etwas
auf einen bereits belegten Speicherplatz speichern will.

<Keys.SoftKey>Prompt for Merge or Replace</Keys.SoftKey> - es erscheint jedes Mal eine Rückfrage\
<Keys.SoftKey>Always Merge</Keys.SoftKey> - es erscheint nie eine Rückfrage\
<Keys.SoftKey>Palettes Always Merge</Keys.SoftKey> - die Rückfrage erscheint nur, wenn es sich
nicht um das Speichern von Paletten handelt.

### Display Halo
Dient zum Abschalten aller farbigen Halos.

### Fixture Halos
Auswahl der darzustellenden Halos bei Fixtures (Gerätetasten):

<Keys.SoftKey>Custom</Keys.SoftKey> - Nur benutzerdefinierte Halos werden angezeigt.\
<Keys.SoftKey>Auto</Keys.SoftKey> - Es werden automatisch farbige Halos für alle Fixtures
angezeigt.

### Handle Buttons
Erlaubt das Ändern der Größe der Schaltflächen auf
dem Touchscreen: <Keys.SoftKey>Small</Keys.SoftKey> (klein), <Keys.SoftKey>Normal</Keys.SoftKey> (normal), <Keys.SoftKey>Large</Keys.SoftKey>
(groß) oder <Keys.SoftKey>Super Size</Keys.SoftKey> (sehr groß). 

Kann jeweils pro Fenster abgeändert werden.

### Text Size

Bestimmt die Schriftgröße auf den Schaltflächen. Kann jeweils pro 
Fenster abgeändert werden.

### Playback Paging
Das Verhalten aktiver Playbacks beim Seitenwechsel.

<Keys.SoftKey>Normal</Keys.SoftKey> ist die für das jeweilige Pult normale Arbeitsweise.\
<Keys.SoftKey>Always Hold</Keys.SoftKey> ist die traditionelle Funktionsweise, bei der das
Playback aktiv und mit dem Regler verbunden bleibt, bis dieser - und
damit das Playback - auf 0 gebracht wird.\
<Keys.SoftKey>Never Hold</Keys.SoftKey> dagegen ist die Funktionsweise bei Pulten mit
Motorfadern: beim Seitenwechsel bleiben aktive Playbacks aktiv, aber die
Fader sind auf der neuen Seite. Um aktive Playbacks von einer anderen
Seite wieder zu steuern, muss man erst auf diese Seite wechseln und den
Fader auf den passenden Wert bringen. 

Ist ein Playback von einer anderen Seite aktiv, so wird dies violett 
dargestellt; die Seitenzahl wird in hellblau angezeigt.

### Current Handle World
Wahl der Handle World. Siehe Abschnitt [Handle Worlds](../titan-basics/multi-user-operation.md#handle-worlds).

---

## Key Profiles (Tastenprofile)

Auswahl/Editieren des aktuellen Tastenprofils. Siehe [Key Profiles](key-profiles.md).

---

## Patching (Patch-Optionen)

### Warn Before Parking Fixtures
Bestimmt das Verhalten beim Patchen von Geräten mit sich 
überschneidenden DMX-Adressen; dabei werden die anderen Geräte jeweils 'geparkt'.

<Keys.SoftKey>Always</Keys.SoftKey> - es erscheint stets eine Warnmeldung.\
<Keys.SoftKey>Never</Keys.SoftKey> - keine Warnung beim Parken von Geräten.

### DMX Address
Anzeige der DMX-Adresse auf den Fixture-Buttons aktivieren.

### Auto Groups
Bestimmt, ob beim Patchen von Geräten automatisch
Gruppen angelegt werden sollen.

### Preset Palettes
Bestimmt, ob beim Patchen von Geräten automatisch Paletten angelegt 
werden sollen. Kann auch beim Patchen im Patch-Optionsmenü aktiviert werden.

<Keys.SoftKey>Do Not Create</Keys.SoftKey> -- es werden keine Paletten angelegt.\
<Keys.SoftKey>Create On Workspaces</Keys.SoftKey> -- es werden Paletten in den jeweiligen
Paletten-Fenstern angelegt.\
<Keys.SoftKey>Create On Presets</Keys.SoftKey> -- es werden Paletten auf den Preset-Tasten (Pearl
Expert) angelegt.

---

## Times (Zeiten)

### Tempo Units
Stellt die Einheiten für die Geschwindigkeit (etwa von Chasern) ein: 
entweder <Keys.SoftKey>Beats per Minute</Keys.SoftKey> (BPM) oder <Keys.SoftKey>Seconds</Keys.SoftKey> (Sekunden).

### Connected View Sets
Bestimmt das Verhalten beim Ändern der Geschwindigkeit eines 'verbundenen' 
(connected) Chasers.

Mit <Keys.SoftKey><strong>Temporary</strong> <strong>Chase Speed</strong></Keys.SoftKey> gilt das Tempo nur momentan, und wird
beim nächsten Laden des Chasers wieder auf den programmierten Wert
zurückgesetzt.\
Mit <Keys.SoftKey><strong>Chase Speed</strong></Keys.SoftKey> wird das Tempo hingegen
gespeichert und das vorher programmierte damit überschrieben.

### Preload Time
Bestimmt die Überblendzeit der 'Preload'(Vorlade-) Funktion, der 
Standardwert sind 2 Sekunden. Dieser Wert sorgt für eine
sanfte Bewegung der Geräte.

### Times Format
Wahl des Anzeige- und Eingabeformats von Zeiten.
Mögliche Optionen: *HH:MM:SS* und Sekunden. Bei Wahl von *HH:MM:SS* wird
automatisch jede Eingabe entsprechend umgewandelt.

### Compensate for Rate Grand Master
Ist dies aktiviert (Vorgabe), so wird ein getapptes Tempo nicht von 
einem unter 100% gesetzten Rate Grand Master beeinflusst.

---

## Formatting (Formate)

### Channel Levels
Definiert, wie die gewünschten Pegel über die Zifferntasten eingegeben werden.

<Keys.SoftKey>Channel Levels Set In Tens</Keys.SoftKey> ('Eingabe in Zehnern') - man gibt nur
eine Ziffer ein, z.B. *5 = 50%*\
<Keys.SoftKey>Channel Levels Set in Units</Keys.SoftKey> - die Eingabe erfolgt zweistellig, z.B.
*50 = 50%*

### Number Style
Stellt die Darstellung von Zahlen in der Cue- und
Palettenansicht ein.

<Keys.SoftKey>Precise</Keys.SoftKey> - zeigt alle Dezimalstellen.\
<Keys.SoftKey>Rounded</Keys.SoftKey> - rundet auf die nächste Ganzzahl.\
<Keys.SoftKey>Dynamic</Keys.SoftKey> - zeigt Dezimalstellen wenn erforderlich und unterdrückt Nullen.

---

## Palettes

### Quick Palettes
Aktivieren oder Abschalten der Quick Palettes, siehe [Abrufen von Paletten](../palettes/using-palettes.md).

### Minimum Palette Mode
Wahl des Vorgabewertes für den Palettenmodus. Damit kann festgelegt werden, 
dass Paletten stets als Shared oder Normal gespeichert werden sollen. 

### Add New Palette Channels
Ist diese Option aktiviert, so werden Kanäle, die bereits verwendeten 
Paletten hinzugefügt werden, automatisch in die betreffenden Playbacks übernommen.

### Auto Legend
Bestimmt, ob für neue Elemente (insbesondere Paletten)
automatisch Legenden erstellt werden sollen oder nicht.

### Highlight Active Palettes
Markieren gerade aktiver - also im
Programmer verwendeter - Paletten.

### Filter Relevant Palettes
Bestimmt, ob bei angewählten Geräten die
für diese nicht gültigen Paletten ausgegraut werden sollen.

### Master Palette Time
Die Vorgabe-Überblendzeit beim Live-Aufruf von
Paletten, siehe [Master-Zeit für Paletten](../palettes/timing-with-palettes.md#master-zeit-für-paletten).

### Master Palette Overlap
Der Vorgabewert für die Überlappung beim
Live-Aufruf von Paletten.

### Record Nested Palettes
Updaten von verknüpften Paletten, wenn die
eingebetteten Paletten verändert werden.

### Preset Palettes
Gleiche Funktion wie im Abschnitt Patching, [siehe oben](#preset-palettes).

---

## Release

Diese Einstellungen können auch im Release-Menü vorgenommen werden.

### Release To Home
Falls aktiviert, erfolgt das Release nach und nach
bis zum Einschaltzustand des Pultes. Ansonsten bleiben die LTP-Werte
des letzten Playbacks aktiv.

### Master Release Time
Vorgabewert für die Release-Zeit.

### Release Priority
Die Playback-Priorität, die per Default im
Release-Menü sowie bei Release-Macros herangezogen wird.

---

## Clear

Diese Einstellungen können auch im Clear-Menü vorgenommen werden.

### Auto Reset Mask
Setzt die Maskierung bei jedem Betätigen der
'Clear'-Taste automatisch zurück.

### Zero Preset Fader Levels
Bestimmt, ob Faderwerte von Geräten, die direkt auf Fader gepatcht sind, mit
<Keys.HardKey>Clear</Keys.HardKey> auf 0 gesetzt werden sollen oder nicht. Wenn deaktiviert,
werden die Werte aus dem Programmer gelöscht, bleiben aber aktiv.

### Release to Playback Values
Zurücksetzen der Kanäle auf die Werte der aktuell laufenden Playbacks. 
Wenn deaktiviert (Vorgabe), behalten LTP-Kanäle die gewählten Werte.

### Clear Cue Times
Bestimmt, ob Cue-Zeiten im Programmierspeicher
gelöscht oder aber beibehalten werden.

### Clear Rate Settings
Bestimmt, of Rate (Speed)-Einstellungen bei
Clear im Programmer bleiben oder nicht.

### Clear Direction
Reset der Direction (Richtung) im Programmer bei
Clear oder nicht.

---

## Effects (Effekte)


### Swop Shapes
Verhalten von Shapes bei Swop.

<Keys.SoftKey>All Shapes</Keys.SoftKey> - Alle laufenden Shapes von anderen Playbacks werden
unterbrochen.\
<Keys.SoftKey>Intensity Shapes</Keys.SoftKey> - Nur Intensity-Shapes von anderen Playbacks
werden unterbrochen, andere Shapes laufen weiter.

### Shape Behaviour
Steuert, ob Keyframe-Shapes eher LTP wirken (und von anderen Playbacks 
überschrieben werden können) oder nicht. Siehe [Speichern eines Keyframe-Shapes in einem Cue](../effects/key-frame-shapes.md#einen-keyframe-shape-in-einen-cue-speichern).

---

## LEDs

### Fixture LEDs
Dient zum Einstellen des Verhaltens der LEDs in den
'Select'-Tasten, wenn direkt auf Fader/Tasten gepatcht wurde.\
<Keys.SoftKey>Show Occupation</Keys.SoftKey> -- Anzeige der Belegung (frei/belegt).\
<Keys.SoftKey>Mimic Intensity</Keys.SoftKey> -- Anzeige der Intensität/Dimmerlevel.

> **Die nachfolgenden Optionen beziehen sich nur auf die Einstellung \[Show
Occupation\].**

### LED Empty Level
Helligkeit freier Tasten.

### LED Occupied Level
Helligkeit belegter, aber nicht ausgewählter Gerätetasten.

### LED Programmer Level
Helligkeit, wenn das Gerät im Programmer ist.

### LED Selected Level
Helligkeit für ausgewählte Geräte (nicht im
Programmer).

---

## Timecode

### Kill Out of Range Playbacks
Playbacks werden automatisch deaktiviert, sobald der letzte im Playback 
programmierte Timecode abgelaufen ist.

### MIDI Device ID
Einstellen der Device-ID bei Verwendung von MIDI Show Control.

### MIDI Glitch Detection
Aktiviert die folgenden zwei Optionen.

### MIDI Glitch Tolerance
Max. Zeitsprünge im MIDI-Timecode, die nicht als Fehler erkannt werden.

### MIDI Glitch Timeout
Zeit nach Erkennen eines Fehlers, in der
MIDI-Timecode ignoriert wird.

> Weitere Informationen zu [MIDI Triggern](../running-the-show/midi-dmx-or-audio-triggering.md)

---

## Wheels

### Wheel Sensitivity
Empfindlichkeit der Encoder, sowie Schaltschwelle
für Pan/Tilt. Die Empfindlichkeit der Encoder lässt sich mit <strong>Encoder A</strong>
einstellen, der aktuelle Wert wird im Display angezeigt.

### Pan & Tilt Threshold
Aktiviert die nachfolgenden beiden Optionen.

### Pan Threshold
Empfindlichkeit für Pan (wenn aktiviert). Größere Werte lassen Pan träger reagieren.

### Tilt Threshold
Empfindlichkeit für Tilt (wenn aktiviert). Größere Werte lassen Tilt träger reagieren.

### Auto Connect
Bestimmt, ob Chaser und Cuelisten bei ihrem Aufruf
automatisch mit der Ablaufsteuerung (Encoder und Tasten) verbunden werden.
Die Optionen sind <Keys.SoftKey>Off</Keys.SoftKey> (Aus/Nie), <Keys.SoftKey>Chases</Keys.SoftKey> (nur Chaser), <Keys.SoftKey>Lists</Keys.SoftKey>
(nur Cuelisten), und <Keys.SoftKey>Chases and Lists</Keys.SoftKey> (Chaser und Cuelisten)

### Auto View on Connect
Wenn aktiviert, wird beim Connecten von
Chasern und/oder Cuelisten automatisch das entsprechende
Playback-Fenster angezeigt. Die Optionen sind Off\] (Aus/Nie),
<Keys.SoftKey>Chases</Keys.SoftKey> (nur Chaser), <Keys.SoftKey>Lists</Keys.SoftKey> (nur Cuelisten), und \[Chases and
Lists\] (Chaser und Cuelisten). Wird sowohl diese als auch die
vorherige Option aktiviert, so wird beim Starten eines entsprechenden
Playbacks sowohl die Steuerung (Encoder, Go-Taste) verbunden als auch das
Playback-Fenster geöffnet.

### Press and Hold Fan
Ändert das Verhalten der <Keys.HardKey>Fan</Keys.HardKey>-Taste, so dass
sie gedrückt gehalten werden muss. Damit wird das versehentliche
Aktivieren dieser Funktion vermieden.