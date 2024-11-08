---
id: timelines
title: Einführung in Timelines
sidebar_label: Einführung in Timelines
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Mit Timelines lassen sich zeitlich exakt gesteuerte Abläufe programmieren, die synchron zu einem 
externen Timecode oder mit dem internen Timecode ablaufen. Das könnte z.B. die Eröffnungs-Sequenz
einer Veranstaltung sein, die Lichtshow zu einem Song, oder etwa eie Multimedia-Show mit Video-Zuspieler. 
Genauso kann man [aufwändige Lichteffekte](./timelines/timeline-options.md#fader-tab) programmieren und 
diese später beim Busking verwenden.

> Timecode-gesteuerte Shows können auch mit [Cuelisten](./cue-lists/cue-list-timing.md#steuern-einer-cueliste-per-timecode)
programmiert werden. Aber Timelines lassen sich wesentlich einfacher erstellen und editieren.

Timelines werden genau wie z.B. Cues oder Cuelisten per <Keys.HardKey>Record</Keys.HardKey>-Taste auf Fader oder 
Buttons gespeichert. Verwendet werden können bereits programmierte Playbacks, es können aber auch beim Erstellen der 
Timeline neue Playbacks hinzugefügt werden. Man kann die Bedienung des Pultes in Echtzeit aufzeichnen, oder man 
fügt die einzelnen Bedienvorgänge manuell hinzu und vergibt Zeiten dafür. Eine Timeline ist wie die Aufnahme der 
Bedienung des Pultes über eine bestimmte Zeit. Die aufgezeichneten Aktionen - Tastendrücke und Faderbewegungen - 
werden dabei **Trigger** genannt.

Sobald eine Timeline gespeichert ist, kann man in der **Timeline-Ansicht** die Trigger hinzufügen und bearbeiten. 
Drücken Sie dazu  <Keys.HardKey>Open/View</Keys.HardKey> und dann die **Auswahltaste** der Timeline, oder klicken Sie
im Display oberhalb des betreffenden Faders auf die Legende. Beim Speichern einer neuen Timeline wird diese Ansicht 
automatisch geöffnet.

![Playback View of Timeline](/docs/images/Timeline-Window.png)

## Trigger

Beim Programmieren einer Timeline werden bestimmte Aktionen aufgezeichnet und beim Abspielen der 
Timeline in der gleichen Reihenfolge und mit den gleichen Zeiten wiedergegeben. Diese aufgezeichneten
Aktonen werden **Trigger** genannt.

Die folgenden Trigger können in einer Timeline gespeichert werden. Dabei können sie sowohl **Live** 
aufgezeichnet als auch manuell gespeichert und editiert werden.

Trigger             | Beschreibung
---|-----
Set Level           | Fade über eine bestimmte Zeit. Hat den gleichen Effekt wie das manuelle Schieben eines Faders. Wenn für das Playback Fadezeiten programmiert wurden, so werden diese ebenfalls berücksichtigt.
Go to cue           | Starten eines bestimmten Cues einer Cueliste. Dabei kann entweder ein Cue angegeben werden, zu dem gesprungen werden soll, oder es wird nur *Go* aufgezeichnet, womit der folgenden Cue gestartet wird. Wurden in der Cueliste Zeiten programmiert, so finden diese Berücksichtigung.
Flash               | Flashen eines Playbacks (siehe [Flash und Swop](./running-the-show/playback-controls.md#flash--und-swop-tasten))
Timed Flash         | Flashen eines Playbacks unter Berücksichtigung der Fadezeit
Timed Flash and Go  | Flashen eines Playbacks unter Berücksichtigung der Fadezeit gefolgt von Go (bei Cuelisten)
Swop                | Swoppen eines Playbacks (siehe [Flash und Swop](./running-the-show/playback-controls.md#flash--und-swop-tasten))
Preload             | Vorladen der LTP-Werte eines Playbacks in einer bestimmten Zeit (siehe [Preload](./running-the-show/playback-controls.md#flash--und-swop-tasten))
Marker              | Markierung zu einer bestimmten Timecode-Zeit, für Informationen
Wait for go         | Die Timeline pausiert, bis die <Keys.HardKey>Go</Keys.HardKey>-Taste gedrückt wird (nur bei internem Timecode)

- **Wait for go** bietet sich z.B. an, wenn auf ein bestimmtes Ereignis gewartet werden muss, etwa bis der Gewinner 
einer Preisverleihung auf die Bühne gekommen ist. Shapes laufen weiter, solange die Timeline pausiert. Die Timeline 
muss mit der Steuerung verbunden sein, damit die <Keys.HardKey>Go</Keys.HardKey>-Taste funktioniert. Ansonsten kann 
man auch den Button <Keys.ContextKey>Play</Keys.ContextKey> in der Timeline-Ansicht anklicken.

## Tracks

Die Timeline ist in einzelne **Tracks** (Spuren) aufgeteilt. Jedes getriggerte Playback erhält eine eigene Zeile innerhalb des Tracks.
- Tracks können mit dem Button <Keys.ContextKey>Mute</Keys.ContextKey> gemutet (stummgeschaltet) werden.
- Tracks können mit dem Button <Keys.ContextKey>Lock</Keys.ContextKey> gelockt (gesperrt) werden, um unbeabsichtigte 
Veränderungen zu verhindern.
- Tracks können mit dem Pfeil links neben der TRack-Anzeige verkleinert dargestellt werden, so dass mehr Tracks auf die Anzeige passen. Siehe [Kompakte Track-Ansicht](./timelines/running-and-editing-timelines.md#kompakte-track-ansicht).

## Timecode-Quelle wählen

In den [Timeline-Optionen](./timelines/timeline-options.md#tab-timecode) wählt man einen der vier Timecodes als Quelle aus.

Um jeweils zwischen Internal, MIDI, Clock und SMPTE zu wählen, klickt man im Hauptmenü auf <Keys.SoftKey>Timecode</Keys.SoftKey>, oder man klickt 2 x auf <Keys.HardKey>Open/View</Keys.HardKey> und wählt das gewünschte **Timecode-Fenster**.

## Timecode verbinden und steuern

Mit dem Button <Keys.ContextKey>Link</Keys.ContextKey> unten links in der Timeline-Ansicht wird der Timecode mit der Timeline verbunden bzw. kann vorübergehend getrennt werden.

Wird externer Timecode verwendet, dann kommt der oft von einer Quelle, auf die Sie keinen Einfluss haben. In diesem Fall ist es hilfreich, den Timecode vorübergehend von der Timeline zu trennen, vor allem wenn man gerade etwas programmiert oder ändern will. Ist der Timecode getrennt, dann kann man die Timeline mit den Steuerbuttons abfahren, wie man es von einem Audioplayer gewohnt ist.

- Verwendet man den internen Timecode oder Winamp als Quelle, so wird damit auch der interne Timecode oder eben auch Winamp gesteuert (Start/Stop/Pause...).

![Timeline transport controls](/docs/images/Timeline-Timecode-Transport.png)

- <Keys.ContextKey>Rewind</Keys.ContextKey>: zurück auf Anfang (00:00:00:00).
- <Keys.ContextKey>Play from cursor</Keys.ContextKey>: Start ab Cursorposition (oder ab Start, wenn der Cursor außerhalb der festgelegten Start/End-Zeit ist).
- <Keys.ContextKey>Play</Keys.ContextKey> und <Keys.ContextKey>Pause</Keys.ContextKey>:Play und Pause.
- <Keys.ContextKey>Stop</Keys.ContextKey>: Stop und zurück auf Anfang.
- <Keys.ContextKey>Record</Keys.ContextKey>: Record/Aufzeichnung. Damit wird der Timecode aber nicht gestartet.

ist ein externer Timecode verbunden (also keine interner Timecode oder Winamp), so wird an Stelle der ersten vier Buttons die Timecode-Quelle angezeigt. Nur der Record-Button bleibt.

![Timeline external timecode controls](/docs/images/Timeline-Timecode-ExternalTransport.png)

Ist der Timecode im **Timecode-Menü** deaktiviert, so wird die Zeit rot angezeigt.

Ist der Timecode aktiv und auch in dem gültigen Zeitraum (siehe [Start und Duration](./timelines/timeline-options#tab-times)), so wird die Zeit orange angezeigt.

![Timeline disabled](/docs/images/Timeline-Timecode-Disabled.png)

- Ist der Timecode sehr verschoben, z.B. um ganze Stunden versetzt, so kann man mittels Offset die 0-basierte Timeline entsprechend anpassen. Ebenso können auch kleine Versätze von einigen Frames ausgeglichen werden, siehe [Offset einstellen](./timelines/timeline-options.md#offset-einstellen).

## Die Übersichtsleiste

Die Balkenanzeige unten in der Timeline-Ansicht bietet einen Überblick über die Timeline von Anfang bis Ende. Trigger und Marker sind verkleinert dargestellt. Indem die Enden der Leiste angeklickt und verschoben werden, kann man im hauptbereich der Tracks passend zoomen, um einen kleinen Bereich genau angezeigt zu bekommen. Auf diese Weise lässt sich schnell in der Timeline navigieren. Siehe [Die Übersichts-Leiste](./timelines/running-and-editing-timelines.md#die-übersichts-leiste).

![Timeline overview bar](/docs/images/Timeline-Overview-Bar-Cropped.png)

## Navigieren in der Timeline mit den Encodern

Aktiviert man die Kontaxt-Option <Keys.ContextKey>Timeline Wheels</Keys.ContextKey>so kann man mit den Encodern in der Timeline navigieren, solange keine Trigger angewählt sind. Die Encoder funktionieren dann wie folgt:
- Encoder A: Horizontal
- Encoder B: Vertikal
- Encoder C: Zoom

Sind dagegen Trigger angewählt, so Steuern die Encoder Zeit, Pegel und Fade der ausgewählten Trigger.

## Cursor

Neue Trigger werden an der Stelle eingefügt, an der sich gerade die graue Zeitmarke - der Cursor - befindet. Dies dient 
auch als "Play Head", um zum Testen die aktuelle Position frei zu verschieben. Zum Verschieben klickt man ober in der Timeline-Ansicht auf die Zeilt emit den Zeiten.

Klickt man auf das Dreieck oben am Cursor oder aktiviert man die Kontext-Option <Keys.ContextKey>Select Cursor</Keys.ContextKey>, so kann man die Cursorposition mit **Encoder A** genau einstellen.

## Werkzeugbuttons

Mit den Buttons <Keys.ContextKey>Select</Keys.ContextKey> und <Keys.ContextKey>Pan</Keys.ContextKey> stehen verschiedene Werkzeuge zum Editieren zur Verfügung.
- <Keys.ContextKey>Select</Keys.ContextKey> dient zur Auswahl über eine Auswahl-Box: ziehen Sie um die auszuwählenden Trigger einen Rahmen (oder klicken Sie einen einzelnen Trigger direkt an).
- Mit <Keys.ContextKey>Pan</Keys.ContextKey> kann man dagegen die ganze Timeline nach links und rechts verschieben.

Die Werkzeuge können auch über den Kontext-Button <Keys.ContextKey>Tool Pan</Keys.ContextKey>
/<Keys.ContextKey>Tool Select</Keys.ContextKey> ausgewählt werden.

## Tabellenansicht

Mit dem Kontextbutton <Keys.ContextKey>Open Table View</Keys.ContextKey> kann man die Timeline als **Tabelle** öffnen, wobei alle Trigger in zeitlicher Abfolge angezeigt werden wie bei einer Cueliste. Die Anzeige einzelner Tracks kann mit Buttons auf der linken Seite gesteuert werden. Siehe [Tabellen-Ansicht](./timelines/running-and-editing-timelines.md#tabellen-ansicht).

![Timeline table view](/docs/images/Timeline-Table-View.png)

- Timelines können auch gleichzeitg grafisch und als Tabelle angezeigt werden.
