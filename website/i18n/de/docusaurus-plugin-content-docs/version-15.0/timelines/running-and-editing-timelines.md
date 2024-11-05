---
id: running-and-editing-timelines
title: Wiedergeben und Editieren von Timelines
sidebar_label: Wiedergeben und Editieren von Timelines
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Eine Timeline per Timecode steuern

HTP-Werte (der Dimmer) von Geräten werden durch den Faderwert der Timeline gesteuert. Die Timeline wird dabei automatisch auf 100% gestartet, sobald der entsprechende Timecode erreicht wird.

Diese automatische Wiedergabe kann deaktiviert werden, ebenso kann zwar automatisch gestartet werden, aber ohne den Faderwert 100%. Dazu dient die Einstellung [$$$Activate in Range](../timelines/timeline-options.md#timecode-tab) in den Optionen der Timeline. Wird die automatische Aktivierung ausgeschaltet, so muss die Timeline manuell durch Betätigen des Faders aktiviert werden, damit die Trigger funktonieren.


1.  Stellen Sie den Button **timecode link** (links unten in der Timeline-Ansicht) auf **Linked** (geschlossene Kettenglieder).
2.  Starten Sie den Timecode (Wurde die Option **Activate in Range** wie oben beschrieben deaktiviert, so muss der Fader der Timeline manuell aktiviert werden).
3.  Die Trigger der Timeline starten automatisch zu den jeweils programmierten Timecode-Zeiten.

- Motorfader und die virtuellen Fader bewegen sich automatisch auf die programmierten Werte.

- Verwendet man den internen Timecode, so kann dieser automatisch starten, wenn der Fader aktiviert wird, sowie auch wieder stoppen, wenn dieser deaktiviert wird, siehe [$$$ Timeline Options - Fader](../timelines/timeline-options.md#fader-tab).

- Damit die Timeline (nur mit internem Timecode) ständig wiederholt wird, aktivieren Sie die Option Loop [$$$ Timeline Options - Timecode](../timelines/timeline-options.md#timecode-tab).

- Wird der Timecode mitten in der Timeline gestartet, so starten alle aktiven Trigger, aber da die vorangegangenen Trigger eventuell nicht oder nicht in der richtigen Reihenfolge gestartet wurden, ist das Ergebnis möglicherweise nicht wie gewünscht. Mit den [Release-Optionen der Timeline](../timelines/timeline-options.md#release-tab) lässt sich das verbessern.

### Eine Timeline testen

Um eine Timeline ohne Timecode-Quelle zu testen, stellen Sie den Button **timecode link** unten links im Timeline-Fenster auf **Unlinked** und verwenden die Buttons Play/Pause/Rewind. 

## Editieren einer Timeline
 
### Auswählen der Trigger

Um einen Trigger zu editieren, muss man ihn zunächst auswählen. Dafür gibt es verschiedene Möglichkeiten:
-   Klicken Sie auf einen Playback-Block, um alle darin enthaltenen Trigger auszuwählen. Dazu erscheinen 
    verschiedene Selektoren. Klicken Sie nochmals auf den Playback-Block, um schrittweise durch die enthaltenen Trigger 
    durchzuschalten.

![Timeline trigger handles](/docs/images/Timeline-Handles.png)

- Klicken Sie auf einen oder mehrere Trigger, um diese mit auszuwählen.

- Zeichnen Sie eine Auswahlbox um die zu wählenden Trigger. Dabei werden nur die in dieser Box enthaltenen Trigger gewählt. Will man also alle Trigger eines Block auswählen, so muss die Auswahlbox um den gesamten Block gezogen werden. Damit kann man umgekehrt auch einzelne Trigger auswählen, ohne mehrfach auf den Block klicken zu müssen.

- Um die Auswahl aufzuheben, klickt man in den freien Bereich im Timeline-Fenster, oder man verwendet <Keys.ContextKey>Clear Trigger Selection</Keys.ContextKey> aus dem Kontext-Menü.

### Auswahl mit den Pfeiltasten

Mit den Pfeil-Buttons (links/rechts) wird der vorige (Pfeil links) bzw. nachfolgende (Pfeil rechts) Trigger ausgewählt.

Ist vorher kein Trigger ausgewählt gewesen, so springt der Pfeil nach rechts auf den ersten und der Pfeil nach links auf den letzten Trigger.

### Editieren mit den Wheels

Wurden ein oder mehrere Trigger angewählt, so kann man mit den Encodern die Zeit, den Zielwert und die Fadezeit einstellen (nicht alle Trigger haben alle diese Parameter).

- Encoder A bestimmt die Timecode-Zeit
- Encoder B bestimmt den Level (Zielwert)
- Encoder C bestimmt die Fadezeit

Sind mehrere Trigger ausgewählt, so werden sie alle mit den Encodern beeinflusst.

### Die Übersichts-Leiste

Die **Übersichts-Leiste** unten im Timeline-Fenster bietet einen Überblick über alle Elemente eine Tracks.

![Timeline overview bar](/docs/images/Timeline-Overview-Bar.png)

- Die Reiter links und rechts entsprechen Start und Ende der Detailansicht darüber. Damit kann man rasch in einen bestimmten Bereich der Timeline springen.

- Wurde in die Timeline hineingezoomt, so kann man den Bereich in der Übersichts-Leiste einfach anklicken und verschieben (so, als ob man mit der 'Hand' im Detailbereich navigieren würde).

- Der Editier-Cursor wird grau dargestellt.

- Die Position der aktuellen Zeit erscheint blau.

### Kopieren/Verschieben von Playbacks in einer Timeline

Playback-Blöcke können auf eine anderen Zeit oder einen anderen Track verschoben werden:
1. Drücken Sie <Keys.HardKey>Move</Keys.HardKey>.
2. Wählen Sie den/die gewünschten Playback-Block(s), entweder durch Anklicken, oder durch Zeichnen einer Auswahlbox.
3. Klicken Sie im gewünschten Track auf die Zeit, an die der Block verschoben werden soll.<br/>
    Werden dabei mehrere Playback-Blöcke ausgewählt, so werden diese mit den dazwischenliegenden 
    Zeiten (relativ) verschoben.

- Um einzelne Trigger innerhalb eines Tracks zu verschieben, wählen Sie diese aus und verschieben sie mit Encoder A.

Ebenso können Playback-Blöcke kopiert werden, wobei jeweils eine Verknüpfung erstellt wird, es sei denn, 
im Menü wird die Option <Keys.SoftKey>Create New Playbacks</Keys.SoftKey> aktiviert.
1. Drücken Sie <Keys.HardKey>Copy</Keys.HardKey>.
2. Wählen Sie den/die gewünschten Playback-Block(s), entweder durch Anklicken, oder durch Zeichnen einer Auswahlbox.
3. Wählen Sie im Menü zwischen <Keys.SoftKey>Create New Playbacks</Keys.SoftKey> (Erstellen neuer Playbacks) 
   und <Keys.SoftKey>Use Referenced Playbacks</Keys.SoftKey> (Erstellen von Verknüpfungen).
4. Klicken Sie im gewünschten Track auf die Zeit, an die der Block (bzw. die Blöcke) verschoben werden soll(en).

### Löschen von Playbacks in einer Timeline

Um ein Playback in einer Timeline zu löschen, drücken Sie <Keys.HardKey>Delete</Keys.HardKey>, wählen 
den Block durch Anklicken oder Ziehen einer Auswahlbox, und bestätigen das durch nochmaliges Anklicken 
oder durch <Keys.SoftKey>Confirm</Keys.SoftKey>.

Ebens können Playback-Zeilen oder ganze Tracks per <Keys.HardKey>Delete</Keys.HardKey> gelöscht werden.

### Vergeben von Legenden und Halos für Tracks

Für eine bessere Orientierung kann man Tracks mit farbigen Halos versehen. Damit wird sowohl der Track umrandet 
als auch die Trigger-Blöcke farbig dargestellt.

Wurde ein Playback mit einem farbigen Halo versehen, so wird dies auch in der Timeline-Ansicht verwendet 
wie bei Track 2 im nachfolgenden Bild. Um das Halo des Playbacks zu ändern, klicken Sie in Schritt 2 auf das Playback.

![Timeline halo](/docs/images/Timeline-Halo.png)

1. Drücken Sie auf <Keys.SoftKey>Set Legend</Keys.SoftKey> im Hauptmenü.
2. Klicken Sie im Timeline-Fenster auf den gewünschten Track oder die gewünschte Playback-Zeile.
3. Geben Sie mit <Keys.SoftKey>Legend</Keys.SoftKey> die Bezeichnung des Tracks ein oder drücken Sie 
   auf <Keys.SoftKey>Halo</Keys.SoftKey>.
4. Wählen Sie die gewünschte Halo-Farbe aus.

- Um das Halo zu entfernen, drücken Sie bei Schritt 4 auf <Keys.SoftKey>Remove Halo</Keys.SoftKey>.
- Mit <Keys.SoftKey>Set Legend</Keys.SoftKey> können auch für Marker legenden vergeben werden.
- Für einen **Wait for Go**-Trigger kann man die Farbe einstellen, indem man diesen bei Schritt 2 anklickt.

### Snap -- Fangptionen

Mit der Kontext-Option <Keys.ContextKey>Snap Options</Keys.ContextKey> lässt sich einstellen, ob neu hinzugefügte 
Objekte beim Klicken in der Timeline-Ansicht von bereits existierenden Objekten 'gefangen' werden.
Es gibt folgende Möglichkeiten:
- Snap To Triggers
- Snap To Markers
- Snap To Cursor

### Kompakte Track-Ansicht

Hat man gleichzeitig viele Tracks in einem Fenster, so können diese auf kleinere Höhe gebracht werden, 
so dass man mehrere gleichzeitig dargestellt bekommt. Klicken Sie dazu auf das Dreieck links neben den einzelnen Tracks.

Es gibt mehrere Möglichkeiten: 
- mit dem ersten Klick wird das Dreieck um 45° gedreht. Trigger, die sich nicht mit anderen überschneiden, 
  werden auf einer Zeile dargestellt. Überschneidende Trigger werden auf getrennten Zeilen angezeigt. Das ist 
  kompakter als die große Ansicht, aber trotzdem noch gut editierbar.
- mit dem zweiten Klick werden alle - auch sich überschneidende - Trigger in einer Zeile dargestellt. Das 
  Dreieck ist dazu um 90° gedreht und zeigt nach rechts.

### Tabellen-Ansicht

Die Timeline kann auch in einer Tabellenansicht angezeigt werden, klicken Sie dazu im Kontext-Menü 
auf <Keys.ContextKey>Open Table View</Keys.ContextKey>. Damit werden alle Trigger mit ihren Details in einer 
Tabelle angezeigt, so wie z.B. von Cuelisten gewohnt. Mit den Buttons auf der linken Seite lässt sich die Liste filtern.
Timeline-Fester und die Timeline-Tabelle können gleichzeitg geöffnet sein.

![Timeline table view](/docs/images/Timeline-Table-View.png)

- bis auf den Trigger-Typ lassen sich alle Details editieren, indem man auf die jeweilige Tabellenzelle klickt 
und die Änderungen über das Menü vornimmt.
- Mit dem Button <Keys.ContextKey>+</Keys.ContextKey> können neue Trigger hinzugefügt werden.
- Um in der Tabellenansicht Trigger zu löschen, drücken Sie auf <Keys.HardKey>Delete</Keys.HardKey> 
und die zu löschende Tabellenzeile. Klicken Sie zur Bestätigung nochmals auf die Zeile oder drücken 
Sie auf <Keys.SoftKey>Confirm</Keys.SoftKey>.

