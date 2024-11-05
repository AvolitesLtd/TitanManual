---
id: timeline-options
title: Timeline-Optionen
sidebar_label: Timeline-Optionen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Timelines haben verschiedene Optionen, mit denen das Verhalten genau eingestellt werden kann.
Drücken Sie <Keys.HardKey>Options</Keys.HardKey> (oder die Menütaste <Keys.SoftKey>Options</Keys.SoftKey> im 
Hauptmenü), dann die **Auswahltaste** der jeweiligen Timeline.
Die Vorgabewert sind hier **fett** dargestellt.

---

## Tab "Handle"

Die gleichen Optionen wie bei Cues, siehe [Options](../cues/playback-options.md#handle-tab).

---

## Tab "Times"

![Timeline Options: Times](/docs/images/Timeline-Options-Times.png)

Hier wird die Startzeit und die Dauer der Timeline eingestellt. Daraus ergeben sich die Punkte, 
an denen mit 'Loop' die Timeline wiederholt wird, siehe [$$$ Loop function](../timelines/timeline-options.md#timecode-tab), oder wann die Timeline bei externem Timecode automatisch startet.
Hiermit kann auch die Timeline begrenzt werden, so dass nichts passiert, wenn der Timecode mal völlig aus dem Ruder läuft.

---

## Tab "Fader"

![Timeline Options: Fader](/docs/images/Timeline-Options-Fader.png)

Hier wird bestimmt, was mit em internen Timecode passiert, wenn der Fader der Timeline aktiviert bzw. auf 0 gebracht wird. Wird ein externer Timecode verwendet, so bleiben diese Einstellungen ohne Auswirkung.

Option | Wirkung
-------|--------
Fader Raised Action | **No Action**: Der interne Timecode bleibt unverändert, sobald der Fader aktiviert wird.<br/>Play: Der interne Timecode wird gestartet, sobald der Fader aktiviert wird.
Fader Zero Action   | **No Action**: Der interne Timecode bleibt unverändert, wenn der Fader auf 0 gesetzt wird.<br/>Stop: Der interne Timecode wird gestoppt, wenn der Fader auf 0 gesetzt wird. <br/>Pause: Der interne Timecode wird angehalten (Pause), wenn der Fader auf 0 gesetzt wird.
Kill At Zero | **Off:** Die Timeline bleibt aktiv, wenn der Fader auf 0 gesetzt wird. <br/>On: Die Timeline wird deaktiviert, wenn der Fader auf 0 gesetzt wird.

> Mit diesen Optionen lässt sich ein aufwendiger Effekt als Ablauf programmieren. Programmieren Sie diesen als Timeline mit den Einstellungen **Play** und **Stop**. So kann der Ablauf einfach per Fader abgerufen werden. Beachten Sie, dass dazu der Timecode entkoppelt sein muss, damit der Effekt wirklich nur 1x läuft.

---

## Tab "Release"

![Timeline Options: Release](/docs/images/Timeline-Options-Release.png)

Dies bestimmt das Verhalten der LTP-Attribute, wenn die Timeline deaktiviert wird. Damit wird das Ergebnis 
vorhersehbarer, vor allem, wenn man in der Timeline hin- und herspringt. Das könnte ansonsten zu unerwarteten 
Ergebnissen führen, wenn LTP-Werte aus vorigen Playbacks verbleiben

Option | Wirkung
-------|--------
Override Playback Release | **Off**: Es gelten die Release-Einstellungen der einzelnen Playbacks.<br/>On: Die Release-Einstellungen der Timeline überschreiben die Release-Einstellungen der Playbacks.
Release Playbacks to Home | Off: LTP-Werte der Playbacks bleiben erhalten, wenn die Playbacks deaktiviert werden.<br/>**On**: LTP-Werte gehen auf ihren Home-Wert zurück, wenn nicht vorher andere Werte gesetzt wurden.
Timeline-Global Release Mask | Globale Release-Maske für Playbacks, die durch diese Timeline getriggert werden. Voreinstellung: **keine Attribute werden released**. Damit wird die sonstige Globale Release-Maske für Playbacks, die in dieser Timeline enthalten sind, überschrieben. Im Infobereich wird eine entsprechende Warnung angezeigt.
Timeline-Global Release Time | Globale Release-Zeit für Playbacks, die durch diese Timeline getriggert werden. Voreinstellung: **2 Sekunden**. Damit wird die sonstige Globale Release-Zeit für Playbacks, die in dieser Timeline enthalten sind, überschrieben.

---

## Tab "Timeline"

![Timeline Options: Timeline](/docs/images/Timeline-Options-Timeline.png)

Option | Wirkung
-------|--------
Activate In Range | **Activate at 100%**: Die Timeline wird automatisch mit 100% gestartet, sobald der anliegende Timecode im Bereich der Timeline liegt (also zwischen angegebenem Start und Ende).<br/>Activate at 0%: Die Timeline wird bei passendem Timecode automatisch gestartet, aber mit 0% Faderwert.<br/>Off: Die Timeline wird nicht automatisch gestartet, sondern muss manuell aktiviert werdern.
Kill Out Of Range | Off: Die Timeline bleibt aktiviert, wenn der Timecode außerhalb des gültigen Bereichs ist (Start/Ende).<br/>**On:** Die Timeline wird deaktiviert, sobald der Timecode außerhallb des gültigen Bereichs ist.
Loop | **Off**: Der interne Timecode wird nicht auf den Startwert zurückgesetzt, sobald das festgelegte Ende der Timeline erreicht ist.<br/>On: Der interne Timecode wird auf den Startwert zurückgesetzt, sobald das festgelegte Ende der Timeline erreicht ist.

- Die Option Loop funktioniert nur mit dem internen Timecode.

---


## Tab "Timecode"

![Timeline Options: Timecode](/docs/images/Timeline-Options-Timecode.png)

Option | Wirkung
-------|--------
Timecode Source | Bestimmt die Timecode-Quelle der Timeline (Timecode 1-4). Siehe [Steuern einer Cueliste per Timecode](../cue-lists/cue-list-timing#steuern-einer-cueliste-per-timecode).
Timecode Source Unlinked | Gleiche Funktion wie der Link-Button in der Timeline-Ansicht, siehe  [$$$Local timecode controls](../timelines.md#local-timecode-controls)


---

## Time -- Optionen für Zeiten

Einige Optionen können auch im Menü **Edit Times** eingestellt werden. Drücken Sie dazu die 
Taste <Keys.HardKey>Time</Keys.HardKey> (oder die Menütaste <Keys.SoftKey>Edit Times</Keys.SoftKey> 
im Hauptmenü), gefolgt von der **Auswahltaste** der Timeline.

### Offset einstellen

Wenn der verwendete Timecode einen großen Offset hat, also von den ursprünglich programmierten Zeiten abweicht, so kann 
man hier einen Offset eingeben, mit dem die ganze Timeline korrigiert wird, ohne dass man manuell alle Timecode-Marken
ändern muss. Hier lassen sich auch kleine Änderungen von nur wenigen Frames vornehmen, um besser zu synchronisieren.

1. Im Menü **Edit Times** drücken Sie die Taste <Keys.SoftKey>Set Offset</Keys.SoftKey>.
2. Geben Sie bei <Keys.SoftKey>Nudge Amount</Keys.SoftKey> den gewünschten Betrag ein, um den die  Timeline versetzt werden soll.
3. Betätigen Sie <Keys.SoftKey>Add</Keys.SoftKey> oder <Keys.SoftKey>Subtract</Keys.SoftKey> um den Offset (Zeitversatz) der Timeline wie gewünscht einzustellen.
4. Der aktuelle Offset wird im Infobereich angezeigt.

Wurde ein Offset eingegeben, so wird dies in der Timeline-Ansicht unter dem eigentlichen Timecode angezeigt. Im nachfolgenden Bild ist die Anzeige für ein Offset von 45 Sekunden zu sehen.

![Timeline timecode offset](/docs/images/Timeline-Offset.png)


### Start Time & Duration (Startzeit und Dauer)

Hier kann man ebenso wie im [Tab "Times"](../timelines/timeline-options.md#tab-times) Startzeit und Dauer der Timeline eingeben.
