---
id: creating-a-timeline
title: Eine Timeline speichern
sidebar_label: Eine Timeline speichern
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Eine Timeline kann man live aufzeichnen, manuell programmieren, oder beides miteinander kombinieren.



## Aufzeichnen eine Timeline im Live-Betrieb

Das Aufzeichnen einer Timeline im Live-Betrieb entspricht dem Aufzeichnen einer live gedrückten Show. Dabei werden z.B. Faderstarts und das Betätigen der Go-Taste passend zur Musik aufgenommen. Bei Bedarf kann man dies Aufzeichnung mehrfach wiederholen, um noch komplexere Timelines zu erstellen.

>   Beim Aufzeichnen im Live-Betrieb werden folgende Elemente **nicht** mit aufgezeichnet:<br/>
    **Palettenaufrufe** werden nicht in der Timeline gespeichert - es müssen also Playbacks verwendet werden (Cues/Chaser/Cuelisten)<br/>
    **Werte von Mastern** werden im Live-Betrieb nicht gespeichert; alle Master (Group, BPM, Scale, Rate, Intensity) haben also bei der Wiedergabe ihre Default-Einstellung. Am besten released man also vor der Aufzeichnung alle Master, um später das gewünschte Ergebnis zu erzielen, siehe [Releasen von Mastern](../cues/cue-playback.md#einen-master-releasen).<br/>
    Aktionen mit dem **Scene Master** werden nicht mit aufgezeichnet. 

Zum Aufzeichnen einer Timeline im Live-Betrieb geht man wie folgt vor:

1. Ist ein externer Timecode verbunden, möchte man aber die Timeline von diesem unabhängig aufzeichnen, so 
klickt man auf "Timecode Disconnect" <Keys.ContextKey>Link</Keys.ContextKey>, so dass eine unterbrochene 
Verbindung angezeigt wird.
2. Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, <Keys.SoftKey>Timeline</Keys.SoftKey>, dann 
die **Auswahltaste** des gewünschten Speicherplatzes. Darauf öffnet sich die Timeline-Ansicht.
3. Klicken Sie auf <Keys.ContextKey>Record</Keys.ContextKey> links oben in der Timeline-Ansicht.
4. Wählen Sie, welchen Track sie aufzeichnen wollen. Klicken Sie dazu auf den Button <Keys.SoftKey>Track</Keys.SoftKey> 
oder auf den von einer blinkenden gestrichelten Linie umgebenen Bereich.<br/>
Man kann Trigger zu einem bestehenden Track hinzufügen, oder einen neuen Track erstellen, indem man auf den 
Bereich unterhalb der bereits existierenden Tracks klickt. Klickt man nochmals 
auf <Keys.ContextKey>Record</Keys.ContextKey>, so erfolgt die Aufzeichnung auf dem gerade angewählten Track.<br/>
 ![Timeline quick record dotted tracks](/docs/images/Timeline-Quickrecord-Dotted.png)
5. Zum Start der Aufnahme klicken Sie nochmals auf den Track, oder klicken Sie auf <Keys.SoftKey>Start Live Record</Keys.SoftKey>. Das Timeline-Fenster erhält nun einen roten Rahmen ('Aufnahme läuft!'), die Aufnahme beginnt, sobald der Timecode startet.
6. Verwendet man den internen Timecode als Quelle, so klickt man auf <Keys.ContextKey>Play</Keys.ContextKey> links oben im Timeline-Fenster, um den Timecode zu starten. Verwendet man dagegen einen externen Timecode, so muss der an der jeweiligen Quelle gestartet werden.
7. Werden nun Aktionen ausgeführt wie das Starten von Playbacks, Ändern von Fadern oder Betätigen der Go-Taste, so tauchen diese jetzt als Trigger in der Timeline auf. Der aufgezeichnete Zeitbereich wird dabei rot angezeigt.
8. Zum Beenden der Aufzeichnung klickt man wieder auf <Keys.ContextKey>Record</Keys.ContextKey> und stoppt dann den Timecode.

Jetzt werden alle gerade erstellten Trigger in der Timeline angezeigt.

- Um weitere Trigger zu einer bestehenden Timeline hinzuzufügen, wiederholen Sie den Vorgang. Drücken Sie 
dazu <Keys.HardKey>Record</Keys.HardKey> und dann die **Auswahltaste** der Timeline.

- Verwendet man den internen Timecode, so wird mit <Keys.ContextKey>Record</Keys.ContextKey> gefolgt 
von <Keys.ContextKey>Play</Keys.ContextKey> automatisch die Live-Aufzeichnung gestartet.

- Um direkt weitere Trigger zu einem bestimmten Track hinzuzufügen, klicken Sie 
auf <Keys.ContextKey>Record</Keys.ContextKey> und dann auf den gewünschten Track in der Timeline-Ansicht.

- Während der Aufzeichnung im Live-Betrieb gelten die Release-Einstellungen der 
Timeline [Timeline-Optionen, Tab "Release"](../timelines/timeline-options.md#tab-release). 
Ggf. reagieren manche Playbacks damit anders als gewohnt. Im System-Bereich wird eine entsprechende Meldung angezeigt.
Das kommt daher, weil die globalen Release-Einstellungen benutzerabhängig sind und die Timeline für Titan als 
separater Benutzer gilt, also über eigene Einstellungen verfügt.

### Automatisches Vereinfachen

Normalerweise ist während der Aufzeichnung die Option <Keys.SoftKey>Auto Simplify</Keys.SoftKey> aktiviert. Damit 
werden nach Ende der Aufzeichnung Faderbewegungen zu linearen Fades vereinfacht. Sind dagegen wirklich nichtlineare 
Faderbewegungen erforderlich, deaktiviert man diese Option, hat dann aber deutlich mehr einzelne Triggerpunkte 
zu editieren.

Viele einzelne Triggerpunkte während der Live-Aufzeichnung:

![Timeline before auto simplify](/docs/images/Timeline-Live-Record.png)

Die gleiche Aufzeichnung nach Auto Simplify:

![Timeline after auto simplify](/docs/images/Timeline-Live-Record-Simplified.png)

- Trigger lassen sich nach der Aufzeichnung vereinfachen. Wählen Sie die Trigger per Auswahlbox aus und verwenden Sie die 
Kontext-Funktion <Keys.ContextKey>Tools</Keys.ContextKey> - <Keys.ContextKey>Simplify Selected Triggers</Keys.ContextKey>.

- Ebenso kann man das Faden zwischen einzelnen Triggerpunkten nachträglich aktivieren: wählen Sie die Trigger aus, 
und wählen Sie aus dem Kontext-Menü <Keys.ContextKey>Tools</Keys.ContextKey> - <Keys.ContextKey>Smooth Selected Triggers</Keys.ContextKey>. Im nachfolgenden Bild werden die Trigger vor und nach dieser Aktion dargestellt.

![Timeline fade smoothing](/docs/images/Timeline-Smooth.png)


## Trigger manuell hinzufügen

Programmiert man dagegen eine Show, bei der die Timecode-Marken bereits feststehen, so lassen sich die 
Trigger gezielt manuell festlegen.

1. Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, <Keys.SoftKey>Timeline</Keys.SoftKey>, dann 
die **Auswahltaste** des gewünschten Speicherplatzes. Darauf öffnet sich die Timeline-Ansicht.
2. Klicken Sie auf den Button <Keys.ContextKey>+</Keys.ContextKey> unterhalb der Timeline-Tracks.
   ![Timeline add trigger window](/docs/images/Timeline-Add-Item.png)
3. Wählen Sie, welche Art von Trigger Sie hinzufügen möchten:
    - **New Playback** speichert aus dem aktuellen Programmer-Inhalt ein neues Playback und aktiviert dieses für 2 Sekunden.
    - Mit **Existing Playback** kann man ein bereits existierendes Playback wählen, das für 2 Sekunden gestartet wird.
    - Mit **Set Level** lässt sich ein bereits existierendes playback auf einen bestimmten Level setzen.
    - Siehe  [Triggers](../timelines.md#triggers) für weitere Details.
4. Existierende Playbacks werden mit ihrer jeweiligen **Auswahltaste** angewählt. Wenn man vorher Schritt 3 überspringt, 
so wird automatisch **Existing Playback** angenommen und das Playback für 2 Sekunden auf 100% aktiviert.
5. Geben Sie nun die Timecode-Zeit für den Trigger ein. Dafür gibt es mehrere Möglichkeiten:
    - Geben Sie die Zeit mit <Keys.SoftKey>Reference at hh:mm:ss.fff </Keys.SoftKey> ein und drücken Sie <Keys.HardKey>Enter</Keys.HardKey>. Verwenden Sie dabei den Punkt <Keys.HardKey>.</Keys.HardKey> als Trenner. Tippt man z.B. "1 . 05", so ergibt dies 00:01:05:000, und "2 . 2 . 20" ergibt 02:02:20.00. Mit den Pfeiltasten kann man zwischen den einzelnen Feldern (Stunden/Minuten/Sekunden) navigieren.
    - Mit <Keys.SoftKey>Reference at Live Time</Keys.SoftKey> kann die aktuelle (blau angezeigte) Timecode-Zeit eingegeben werden.
    - Klicken Sie nun in der Timeline-Ansicht dorthin, wo Sie den Trigger haben möchten. Die genaue Zeit lässt sich auch später noch korrigieren.
6. Wiederholen Sie den Vorgang ab Schritt 2 zum Hinzufügen weiterer Trigger.

- Um direkt ein einzelnes Playback als Trigger hinzuzufügen, drücken Sie auf <Keys.HardKey>Copy</Keys.HardKey>, dann auf die **Auswahltaste** des Playbacks, und klicken in den gewünschten Timeline-Track.

- Bestehende Playbacks werden dabei als Verknüpfung (Link) eingefügt. Will man dagegen ein playback getrennt editieren können, so klickt man nach dem Wählen des Playbacks auf <Keys.SoftKey>Create New Playbacks</Keys.SoftKey>.

- Die [Tabellen-Ansicht](../timelines/running-and-editing-timelines.md#tabellen-ansicht) bietet eine alternative Möglichkeit zum Editieren und ist ggf. für das Eingeben einzelner Timecode-Marken besser geeignet.

### Importieren von Markern

Mit der Kontext-Funktion <Keys.ContextKey>Tools</Keys.ContextKey> - <Keys.ContextKey>Import Markers</Keys.ContextKey> lassen sich Marker aus eine Audio-Editor importieren. Das kann dabei helfen, Trigger genau zu positionieren.

- Stellen Sie beim Export von Markern sicher, dass diese im Format Hours:Minutes:Seconds:Frames und nicht etwa in Beats oder Measures gespeichert werden.

Hier ein Beispiel für den Import von Markern aus der Audio-Software **Reaper**:

1. Stellen Sie in Reaper das Timeline-Format auf HH:MM:SS:FF.
2. Laden Sie in Reaper die gewünschten Audiodateien und erstellen Sie die Marker.
3. Öffnen Sie den Region/Marker Manager.
4. Klicken Sie im Region/Marker Manager mit der rechten Maustaste, wählen Sie "Export Project Regions/Markers", und speichern Sie das als csv-Datei.
5. Kopieren Sie diese Datei auf einen USB-Stick, und laden Sie diese in Titan per Kontext-Menü <Keys.ContextKey>Import Markers</Keys.ContextKey>. Soll die Datei auf dem gleichen PC importiert werden, so muss sie in Documents\\Titan liegen.
