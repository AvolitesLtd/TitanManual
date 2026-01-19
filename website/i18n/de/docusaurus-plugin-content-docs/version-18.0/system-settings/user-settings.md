---
id: user-settings
title: User Settings - Benutzereinstellungen
sidebar_label: User Settings - Benutzereinstellungen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Das Menü 'User Settings' (Benutzereinstellungen) lässt sich sowohl im
**System**-Menü (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) 
als auch im 'Program'-Modus aufrufen; dazu halten Sie die <Keys.HardKey>AVO</Keys.HardKey>
-Taste gedrückt und betätigen die Taste <Keys.SoftKey>User Settings</Keys.SoftKey>.

![User Settings Window](/docs/images/User-Settings-Window.png)

Es öffnet sich ein Fenster, in dem alle verfügbaren
Benutzereinstellungen angezeigt werden und verändert werden können;
ebenso kann man sie mit den Menütasten verändern. Die
Benutzereinstellungen gelten jeweils pro Benutzer.


>   Ein Klick auf das Symbol <Keys.ContextKey>i</Keys.ContextKey> öffnet einen kleinen Hinweistext 
    zu der jeweiligen Einstellung.

Die möglichen Einstellungen sind nach verschiedenen Kategorien sortiert.
Diese Kategorien sind links eingeblendet. Wählen Sie dort die Kategorie,
in der Sie eine Einstellung ändern wollen.

## General (Allgemein)

Option | Wirkung
-------|--------
Chase Snap | *On*: mit den Tasten <Keys.HardKey>Next Step</Keys.HardKey>/<Keys.HardKey>Prev Step</Keys.HardKey> wird bei Chasern hart auf den nächsten Schritt umgeschaltet. <br/>***Off***: Fadezeiten und X-Over werden berücksichtigt. <br/>Diese Option wird auch mit der Taste <Keys.HardKey>Snap</Keys.HardKey> umgeschaltet, die auf einigen Pulten vorhanden ist.
Cue List Snap | *On*: mit den Tasten <Keys.HardKey>Next Step</Keys.HardKey>/<Keys.HardKey>Prev Step</Keys.HardKey> wird bei Cuelisten hart auf den nächsten Schritt umgeschaltet.<br/>***Off***: programmierte Fadezeiten werden berücksichtigt.
Clear Record Mask | ***On***: die Speichermaske (Record Mask) wird nach jedem Speichervorgang auf 'Alle Attribute' zurückgesetzt<br/>*Off*: die eingestellte Maske wird beibehalten.
Copy Cues | ***Copy Tracked Values:*** beim Kopieren von Cues aus Cuelisten werden getrackte Werte kopiert<br/> *Don't Copy Tracked Values:* getrackte Werte werden nicht kopiert, nur die Werte, die direkt in diesem Cue gespeichert sind, werden kopiert.
Run Startup Playbacks   | ***On:*** Playbacks, die in den Optionen auf 'Run on Startup' gestellt sind, werden beim Laden der Show/Systemstart automatisch gestartet.<br/> *Off*: Beim Laden der Show/Systemstart werden keine Playbacks automatisch gestartet.
System Render Rate (Hz) | ***40 Hz*** Dient zum Einstellen der generellen Systemgeschwindigkeit. Der Wert kann je nach Bedarf auf Werte von 1 bis 44Hz gestellt werden. Mit kleineren Werten wird der Prozessor bei Shows mit sehr vielen gesteuerten Geräten ggf. entlastet.

## Display

Option | Wirkung
-------|--------
External Display | ***On:*** Externes Display ist aktiviert. <br/> *Off:* Externes Display ist deaktiviert.
External Screen Workspace Shortcuts | ***On:*** Auf jedem Display wird ein separater Workspaces-Bereich angezeigt. Damit lassen sich auf einfache Weise für jeden Bildschirm getrennte Einstellungen vornehmen. <br/>*Off:* Die Workspace-Buttons auf dem Hauptdisplay steuern die Anzeige aller Bildschirme.
Virtual Hardware | Die Anzeige mit den kompakten Bedienelementen für T1 und T2.<br/>***Auto:*** Titan Go verbirgt die Kompaktanzeige automatisch, wenn ein T3 oder Titan Mobile verbunden ist. <br/> *Enabled:* Die Bedienelemente werden immer angezeigt.<br/> *Disabled:* Die Kompaktanzeige wird nie verwendet..
Fullscreen Mode                     | *On:* Titan Go wird im Vollbild-Modus angezeigt. <br/> ***Off:*** Titan Go wird als normales Programmfenster angezeigt.

-  Die beiden letzten Optionen stehen nur bei Titan Go zur Verfügung.
-  Diese Optionen stehen auch im **System**-Menü bei **Display Setup** zur Verfügung.
-  Der Vollbild-Modus kann auch durch Drücken der Taste F11 aktiviert/deaktiviert werden.

## Lock

Option | Wirkung
-------|--------
Lock Screen Background | Einstellen eines Hintergrundbildes bei gesperrtem Pult.
Venue Mode Workspace | Auswahl des Workspaces (mit den Menütasten), der im Venue-Mode verwendet wird.
Venue Mode Password | Passwort zum Entsperren des Pultes in den Venue-Mode.
Programmer Password | Passwort zum kompletten Entsperren des Pultes. Das Passwort "68340" entsperrt das Pult ebenfalls komplett.
Lock on Startup | ***Shutdown state:*** Pult bzw. Software startet gesperrt oder ungesperrt, so wie es/sie heruntergefahren wurde.<br/> *Locked:* Pult bzw. Software startet gesperrt. <br/> *Venue Mode Workspace:* Pult bzw. Software startet im Venue-Mode.<br/>(Um 'Lock on Startup' zu verwenden, muss ein Programmer Passwort gesetzt sein)

## Handles

Option | Wirkung
-------|--------
Grand Master Fader | *On:* Grand Master aktiviert (nicht bei allen Pulten vorhanden).<br/>***Off:*** Grand Master deaktiviert. Hilfreich insbesondere, wenn der Fader nicht korrekt funktionieren sollte. oder um unbeabsichtigtes Betätigen zu vermeiden
Delete Default | ***Delete:*** Elemente werden mit <Keys.HardKey>Delete</Keys.HardKey> + Doppelklick gelöscht.<br/>*Unassign:* Elemente werden nicht gelöscht, sondern nur von der Taste/Schaltfläche entfernt, und sind über die Show Library weiterhin verfügbar.
Prompt Replace | Bestimmt, wie sich das Pult verhält, wenn man etwas auf einen bereits belegten Speicherplatz speichern will.<br/>***Always Ask:*** Es erscheint jedes Mal eine Rückfrage.<br/>*Always Merge:* Es erscheint nie eine Rückfrage, es wird immer gemergt.<br/>*Palettes Always Merge:* Die Rückfrage erscheint nur, wenn es sich nicht um das Speichern von Paletten handelt.
Display Halo | ***On:*** Die Buttons werden mit farbigen Halos dargestellt.<br/>*Off:* Es werden keine farbigen Halos angezeigt.
Fixture Halos | *Custom:* Bei Geräte-Buttons werden nur benutzerdefinierte Halos angezeigt. <br/>***Auto:*** Es werden automatisch farbige Halos für alle Fixtures angezeigt siehe [Halo](../patching/changing-the-patch.md#fixture-button-halo)
Handle Buttons | Erlaubt das Ändern der Größe der Schaltflächen auf dem Touchscreen: *Small* (klein), ***Normal*** (normal), *Large* (groß) oder *Super Size* (sehr groß). <br/>Kann jeweils pro Fenster abgeändert werden.
Text Size | Bestimmt die Schriftgröße auf den Schaltflächen. *Small* (klein), ***Normal*** (normal), *Large* (groß) oder *Super Size* (sehr groß). <br/>Kann jeweils pro Fenster abgeändert werden.
Playback Paging | Das Verhalten aktiver Playbacks beim Seitenwechsel.<br/> *Always Hold:* - ist die traditionelle Funktionsweise, bei der das Playback aktiv und mit dem Regler verbunden bleibt, bis dieser - und damit das Playback - auf 0 gebracht wird.<br/> *Never Hold:* - ist die Funktionsweise bei Pulten mit Motorfadern: beim Seitenwechsel bleiben aktive Playbacks aktiv, aber die Fader sind auf der neuen Seite. Um aktive Playbacks von einer anderen Seite wieder zu steuern, muss man erst auf diese Seite wechseln und den Fader auf den passenden Wert bringen. <br/> ***Normal:*** ist die für das jeweilige Pult normale Arbeitsweise. <br/>Ist ein Playback von einer anderen Seite aktiv, so wird dies violett dargestellt; die Seitenzahl wird in hellblau angezeigt.
Current Handle World | Wahl der aktuellen Handle World. Siehe Abschnitt [Handle Worlds](../titan-basics/multi-user-operation.md#handle-worlds).

## Key Profiles (Tastenprofile)

Auswahl/Editieren des aktuellen Tastenprofils. Siehe [Key Profiles](key-profiles.md).

## Patching (Patch-Optionen)

Option | Wirkung
-------|--------
Warn Before Parking Fixtures | Bestimmt das Verhalten beim Patchen von Geräten mit sich überschneidenden DMX-Adressen; dabei werden die anderen Geräte jeweils 'geparkt'.<br/> ***Always:*** es erscheint stets eine Warnmeldung.<br/>*Never:* keine Warnung beim Parken von Geräten. Siehe [Parked fixtures](../patching/patching-new-fixtures-or-dimmers.md#geparkte-geräte)
DMX Address | Anzeige der DMX-Adresse auf den Fixture-Buttons aktivieren oder deaktivieren.
Auto Groups | Bestimmt, ob beim Patchen von Geräten automatisch Gruppen angelegt werden sollen. Siehe [Auto Groups](../controlling-fixtures/fixture-groups.md#auto-groups).
Preset Palettes | Bestimmt, ob beim Patchen von Geräten automatisch Paletten angelegt werden sollen. Kann auch beim Patchen im Patch-Optionsmenü mit <Keys.SoftKey>Preset Palettes on Workspaces</Keys.SoftKey> aktiviert werden.<br/>***Do Not Create:*** es werden keine Paletten angelegt.<br/>*Create On Workspaces:* es werden Paletten in den jeweiligen Paletten-Fenstern angelegt.<br/>*Create On Presets:* es werden Paletten auf den Preset-Tasten (Pearl Expert) angelegt.

## Times (Zeiten)

Option | Wirkung
-------|--------
Tempo Units | Stellt die Einheiten für die Geschwindigkeit (etwa von Chasern) ein: entweder ***Beats per Minute*** (BPM) oder *Seconds* (Sekunden). 
Connected View Sets | Bestimmt das Verhalten beim Ändern der Geschwindigkeit eines 'verbundenen' (connected) Chasers.<br/> ***Speed:*** Das eingestellte Tempo wird gespeichert und das vorher programmierte damit überschrieben<br/>*Temporary Speed:* Das eingestellte Tempo gilt nur momentan, und wird beim nächsten Laden des Chasers wieder auf den programmierten Wert zurückgesetzt.
Preload Time | Bestimmt die Überblendzeit der 'Preload'(Vorlade-) Funktion, der Standardwert sind 2 Sekunden. Dieser Wert sorgt für eine sanfte Bewegung der Geräte.
Times Format | Wahl des Anzeige- und Eingabeformats von Zeiten. Mögliche Optionen: ***HH:MM:SS*** und Sekunden. Bei Wahl von *HH:MM:SS* wird automatisch jede Eingabe entsprechend umgewandelt.
Compensate for Rate Grand Master | ***On:*** ein getapptes Tempo wird von einem unter 100% gesetzten Rate Grand Master nicht beeinflusst.<br/>*Off:* Das Tempo wird immer vom Rate Grand Master beeinflusst.

## Palettes

Option | Wirkung
-------|--------
Quick Palettes | ***On:*** Palettenaufruf ohne ausgewählte Geräte aktiviert, siehe [Abrufen von Paletten](../palettes/using-palettes.md).<br/> *Off:* Quick Palettes sind deaktiviert. Ohne angewählte Geräte kann keine Palette aufgerufen werden.
Minimum Palette Mode | Wahl des Vorgabewertes für den Palettenmodus. Damit kann festgelegt werden, dass Paletten stets als Shared oder Normal gespeichert werden sollen.<br/>***Global:*** Alle Paletten werden als globale Paletten gespeichert.<br/>*Shared:* Alle Paletten werden als shared (gemeinsam genutzte) Paletten gespeichert.<br/>*Normal:* Alle Paletten werden als normale Paletten gespeichert.
Add New Palette Channels | ***On:*** Kanäle, die bereits verwendeten Paletten hinzugefügt werden, werden automatisch in die betreffenden Playbacks übernommen.<br/>*Off:* neu hinzugefügte Kanäle werden nicht übernommen. Damit wird sichergestellt, dass Änderungen an den Paletten keine unerwartete Auswirkungen auf die Playbacks haben.
Auto Legend | ***On:*** neue Elemente erhalten automatisch Legenden.<br/>*Off:* Keine automatischen Legenden.
Highlight Active Palettes | ***On:*** Gerade im Programmer aktive Paletten werden markiert.<br/>*Off:* Aktive Paletten werden nicht markiert.
Filter Relevant Palettes  | ***On:*** Paletten, die auf die gerade angewählten Geräte nicht anwendbar sind, werden ausgegraut.<br/>*Off:* Nicht anwendbare Paletten werden nicht ausgegraut.
Master Palette Time | Die Vorgabe-Überblendzeit beim Live-Aufruf von Paletten, siehe [Master-Zeit für Paletten](../palettes/timing-with-palettes.md#master-zeit-für-paletten).
Master Palette Overlap | Der Vorgabewert für die Überlappung beim Live-Aufruf von Paletten.
Record Nested Palettes | ***On:*** Updaten von verknüpften Paletten, wenn die eingebetteten Paletten verändert werden.<br/>*Off:* Verknüpfte Paletten werden nicht aktualisiert.<br/>Siehe [Nested Palettes](../palettes/creating-palettes.md#nested-palettes----verknüpfte-paletten).
Preset Palettes | Gleiche Funktion wie im Abschnitt Patching, [siehe oben](#patching-patch-optionen).

## Timeline

Option | Wirkung
-------|--------
Default Playback Length | Vorgabewert für die Dauer eines Playbacks, wenn es zu einer Timeline hinzugefügt wird.
Timeline Skip Length | Vorgabewert, wie weit mit "skip forward" und "skip back" gesprungen wird.
Display Frame Rate | Framerate für den angezeigten Timecode. Mit ***"Follow Source"*** folgt die Anzeige der Framerate des am Eingang anliegenden Timecodes.
Auto-Simplify | ***On:*** Trigger für Faderpegel werden automatisch vereinfacht (geglättet).<br/>*Off:* Triggers werden nicht vereinfacht/geglättet. <br/>Siehe [Auto Simplify](../timelines/creating-a-timeline.md#auto-simplify).
Auto-Open View | *None:* Beim Anlegen einer neuen Timeline wird kein Fenster geöffnet.<br/> ***Timeline:*** Beim Anlegen einer neuen Timeline wird die grafische Timeline-Anzeige geöffnet. <br/>*Timeline and Table:* Sowohl die grafische als auch die Tabellenanzeige werden geöffnet.

## Formatting (Formate)

Option | Wirkung
-------|--------
Channel Levels | Definiert, wie die gewünschten Pegel über die Zifferntasten eingegeben werden.<br/> *Set In Tens:*  ('Eingabe in Zehnern') - man gibt nur eine Ziffer ein, z.B. *5 = 50%*<br/>***Set in Units:*** die Eingabe erfolgt zweistellig, z.B.*50 = 50%*.
Number Style   | Stellt die Darstellung von Zahlen in der Cue- und Palettenansicht ein. <br/> *Precise:* zeigt alle Dezimalstellen.<br/>*Rounded:* rundet auf die nächste Ganzzahl.<br/>***Dynamic:*** zeigt Dezimalstellen wenn erforderlich und unterdrückt Nullen.

## Release

Option | Wirkung
-------|--------
Release To Home | ***On:*** das Release erfolgt nach und nach bis zum Einschaltzustand des Pultes.<br/>*Off:* LTP-Werte des letzten Playbacks bleiben aktiv.
Master Release Time | Vorgabewert für die Release-Zeit.
Release Priority | Die Playback-Priorität, die per Default im Release-Menü sowie bei Release-Macros herangezogen wird. - *Low* (niedrig), *Normal* (normal), *High* (hoch), ***Programmer*** (Programmer), *Very High* (sehr hoch). Playbacks mit geringerer Priorität werden per *Release All* (Doppelklick auf <Keys.HardKey>Release</Keys.HardKey>) released.

- Stellt man die Release Priority auf **Low**, so kann man nicht versehentlich alle Playbacks mit <Keys.HardKey>Release</Keys.HardKey><Keys.HardKey>Release</Keys.HardKey> deaktivieren, denn so würden nur die mit Priorität *Low* released.

- Diese Einstellungen können auch im Release-Menü vorgenommen werden.

## Clear

Option | Wirkung
-------|--------
Auto Reset Mask | ***On:*** Setzt die Maskierung bei jedem Betätigen der 'Clear'-Taste automatisch zurück.<br/>*Off:* Die Clear-Maske wird nicht zurückgesetzt.
Zero Preset Fader Levels   | ***On:***  Faderwerte von Geräten, die direkt auf Fader gepatcht sind, werden mit <Keys.HardKey>Clear</Keys.HardKey> auf 0 gesetzt.<br/> *Off:*  Die Werte werden aus dem Programmer gelöscht, bleiben aber aktiv.
Release to Playback Values | *On:* LTP-Kanäle releasen auf das zuletzt aktive Playback.<br/>***Off:*** LTP-Kanäle releasen bei Clear nicht.
Clear Cue Times | ***On:*** Zeiten im Programmer werden bei Clear gelöscht.<br/>*Off:* Zeiten im Programmer werden bei Clear beibehalten.
Clear Rate Settings | ***On:*** Speed-Einstellungen im Programmer werden bei Clear zurückgesetzt. <br/>*Off:* Speed-Einstellungen im Programmer bleiben bei Clear erhalten.
Clear Direction | ***On:*** Direction-Einstellungen im Programmer werden bei Clear zurückgesetzt. <br/>*Off:* Direction-Einstellungen im Programmer bleiben bei Clear erhalten.
Clear Selected Fixtures | *On:* bei Betätigen der Clear-Taste werden nur die gerade angewählten Geräte aus dem Programmer gelöscht, während die anderen im Programmer verbleiben. Sind keine Geräte angewählt, so wird der Programmer komplett gelöscht.<br/> ***Off:*** der Programmer wird immer komplett gelöscht.
Clear Action Precedence | Einstellungen zum mehrstufigen Clear:<br/>***Selection With Programmer***: beim Betätigen der Clear-Taste wird der Programmer und die Geräteauswahl gelöscht<br/>*Selection Then Programmer*: sind Geräte angewählt, so wird mit Clear die Geräteauswahl gelöscht. Sind keine Geräte vorhanden, so wird der Programmer gelöscht.<br/>*Programmer Then Selection*: Befinden sich Werte im Programmer, so werden mit Clear diese gelöscht. Wenn der Programmer leer ist, wird die Geräteauswahl gelöscht.

- Diese Einstellungen können auch im Clear-Menü vorgenommen werden.

## LEDs

Option | Wirkung
-------|--------
Fixture LEDs | Dient zum Einstellen des Verhaltens der LEDs in den 'Select'-Tasten, wenn direkt auf Fader/Tasten gepatcht wurde. <br/>***Show Occupation:*** Anzeige der Belegung (frei/belegt). <br/>*Mimic Intensity:* Anzeige der Intensität/Dimmerlevel.<br/>**Die nachfolgenden Optionen beziehen sich nur auf die Einstellung *Show Occupation* **
LED Empty Level      | Helligkeit freier Tasten.
LED Occupied Level   | Helligkeit belegter, aber nicht ausgewählter Gerätetasten.
LED Programmer Level | Helligkeit, wenn das Gerät im Programmer ist.
LED Selected Level   | Helligkeit für ausgewählte Geräte (nicht im Programmer).

## Effects (Effekte)

Option | Wirkung
-------|--------
Swop Shapes | Verhalten von Shapes bei Swop.<br/>***All Shapes:*** Alle laufenden Shapes von anderen Playbacks werden unterbrochen.<br/>*Intensity Shapes:* Nur Intensity-Shapes von anderen Playbacks werden unterbrochen, andere Shapes laufen weiter.
Shape Behaviour | Steuert, ob Shapes und Keyframe-Shapes eher LTP wirken (und von anderen Playbacks überschrieben werden können) oder nicht. Siehe [Speichern eines Keyframe-Shapes in einem Cue](../effects/key-frame-shapes.md#einen-keyframe-shape-in-einen-cue-speichern).

## Timecode

Option | Wirkung
-------|--------
Kill Out of Range Playbacks | *On:* Playbacks werden automatisch deaktiviert, sobald der letzte im Playback programmierte Timecode abgelaufen ist.<br/> ***Off:*** Das Playback bleibt aktiv.
MIDI Device ID              | Einstellen der Device-ID bei Verwendung von MIDI Show Control.
MIDI Glitch Detection       | ***On:*** Aktiviert die folgenden zwei Optionen.<br/>*Off:* Deaktiviert die folgenden zwei Optionen.
MIDI Glitch Tolerance       | Max. Zeitsprünge im MIDI-Timecode, die nicht als Fehler erkannt werden.
MIDI Glitch Timeout         | Zeit nach Erkennen eines Fehlers, in der MIDI-Timecode ignoriert wird.

> Weitere Informationen zu [MIDI Triggern](../running-the-show/midi-dmx-or-audio-triggering.md)

---

## Wheels

Option | Wirkung
-------|--------
Wheel Sensitivity     | Empfindlichkeit der Encoder. Die Empfindlichkeit der Encoder lässt sich mit **Encoder A** einstellen, der aktuelle Wert wird im Display angezeigt. Vorgabe ***50%***.
Pan & Tilt Threshold  | Aktiviert/deaktiviert die nachfolgenden beiden Optionen.
Pan Threshold         | Empfindlichkeit für Pan (wenn aktiviert). Größere Werte lassen Pan träger reagieren. Vorgabe ***5s***.
Tilt Threshold        | Empfindlichkeit für Tilt (wenn aktiviert). Größere Werte lassen Tilt träger reagieren. Vorgabe ***4s***.
Auto Connect          | Bestimmt, ob Chaser und Cuelisten bei ihrem Aufruf automatisch mit der Ablaufsteuerung (Encoder und Tasten) verbunden werden.<br/>*Off:* Chaser und Cuelisten werden nicht automatisch connected.<br/>*Chases:* Chaser werden automatisch connected.<br/>*Cue Lists:* Cuelisten  werden automatisch connected.<br/>***Chases and Lists:*** Chaser und Cuelisten werden automatisch connected.
Auto View on Connect  | Wenn aktiviert, wird beim Connecten von Chasern und/oder Cuelisten automatisch das entsprechende Playback-Fenster angezeigt.<br/>***Off:*** Deaktiviert.<br/>*Chases:* Chaser öffnen beim Connecten das jeweilige Playback-Fenster.<br/>*Cue Lists:* Cuelisten öffnen beim Connecten das jeweilige Playback-Fenster.<br/>*Chases and Lists:* Chaser und Cuelisten öffnen beim Connecten das jeweilige Playback-Fenster..
Press and Hold Fan    | *On:* Ändert das Verhalten der <Keys.HardKey>Fan</Keys.HardKey>-Taste, so dass sie gedrückt gehalten werden muss. Damit wird das versehentliche Aktivieren dieser Funktion vermieden.<br/>***Off:*** Die Fan-Taste rastet wie bei älteren Pulten ein und muss extra wieder deaktiviert werden.
