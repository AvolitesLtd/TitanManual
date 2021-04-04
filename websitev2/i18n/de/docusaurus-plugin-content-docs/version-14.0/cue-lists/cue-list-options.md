---
id: cue-list-options
title: Cue List Options
sidebar_label: Cue List Options
original_id: cue-list-options
---

 
Über das Menü [Options](../cues/playback-options.md) sind weitere Optionen 
verfügbar. Drücken Sie dafür die Taste \<Options\> oder im Hauptmenü die 
Menütaste \[Options\], und wählen Sie die gewünschte Cueliste (**blaue Taste**).

Oder drücken Sie \<View / Open\>, dann die entsprechende
**Select-Taste**, und klicken links in der Playback-Ansicht auf
\[Options\].

---

## Cue List Options -- Tab "Handle"

Alle Optionen dieser Rubrik funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#playback-options----tab-handle) beschrieben.

---

## Cue List Options -- Tab "Playback"

Blind, Cross Fade HTP, Priority, Run On Startup funktionieren genauso wie im 
Kapitel für Cues beschrieben (siehe [Options](../cues/playback-options.md)).

### Cue Links Disabled:
Damit lassen sich sämtliche Cues so einstellen,
dass sie nur per Go-Taste starten (und nicht automatisch folgen).

### Loop Action
Damit wird bestimmt, ob die Cueliste nach dem Durchlaufen wiederholt werden soll.

Einstellung | Beschreibung
--- | ---
Stop on final cue | Die Cueliste wird nur einmal durchlaufen und stoppt beim letzten Schritt.
Loop | Die Cueliste wird nach Erreichen des letzten Cues wieder von Cue 1 wiederholt, wobei auch Move in Dark entsprechend ermittelt wird *(Vorgabewert)*.

### Move In Dark
Einstellung für die gesamte Cueliste: Vorladen von
LTP-Werten, solange Geräte nicht benutzt werden (keinen Output
erzeugen), siehe [Move In Dark (MID)](cue-list-playback.md#move-in-dark-mid---funktionen).

Einstellung | Beschreibung
--- | ---
Off | Schaltet MID für die gesamte Cueliste ab; MID kann aber für einzelne Cues aktiviert werden *(Vorgabewert)*.
Disabled | Deaktiviert MID für die gesamte Cueliste, auch wenn es ggf. für einzelne Cues aktiviert ist.
Early | Startet die Bewegung zum frühestmöglichen Zeitpunkt, sofern nicht pro Cue anders vorgegeben.
Late | Beginnt die Bewegung zum spätestmöglichen Zeitpunkt, sofern nicht pro Cue anders vorgegeben.

### Shape Tracking
Bestimmt, wie Shapes getrackt werden.

Einstellung | Beschreibung
--- | ---
Off | Kein Tracking von Shapes - Shapes stoppen, wenn der Cue beendet wird.
On  | Shapes tracken, bis sie geblockt werden.
Local | Die allgemeine **Tracking**-Einstellung gilt. *(Vorgabewert)*

### Timecode Source 
Bestimmt, welcher Timecode diese Cueliste steuert.

### Tracking
Aktivieren/Deaktivieren von Tracking (also der
Nachverfolgung unveränderter Werte)  *Vorgabewert: aktiviert*.

---

## Cue List Options -- Tab "Times"

Die Times-Optionen sind die gleichen wie für [einzelne Cues](../cues/playback-options.md#playback-options----tab-times).

---

## Cue List Options -- Tab "Fader"

### Fader Mode
Bestimmt das Verhalten des Faders.

Einstellung | Beschreibung
--- | ---
Fader Mode Intensity Kill With Off | Der Fader bestimmt die Werte der HTP-Kanäle, und die Cueliste bleibt aktiv, auch wenn der Regler auf '0' gestellt wird. 
Fader Mode Intensity Kill At 0 | Der Fader ist ebenfalls für die HTP-Werte zuständig, jedoch wird die Cueliste deaktiviert, sobald der Regler auf ‚0' gestellt wird.
Manual Crossfader | Sorgt dafür, dass der Fader als manueller Überblendregler fungiert, d.h. beim Verlassen der Reglerstellung ‚100%' oder ‚0%' wird jeweils einen Schritt weitergeschaltet. 

Bei 'Manual Crossfade' gilt außerdem folgendes:

-   Eine gerade laufende Überblendung kann mit dem Fader ‚übernommen'
    werden.

-   Wird eine Cueliste mit ‚Manual Crossfader' gestartet, so springt der
    Pegel sofort auf 100%, sobald der Fader über 0 bewegt wird.

-   Shapes und Pixelmapper-Effekte werden ebenfalls mit dem Fader
    übergeblendet. Wird der Fader auf 0 gezogen, so bleiben sie aber
    aktiv.

-   Autoloads folgen ihrer jeweiligen Fadezeit unabhängig vom Crossfade.

-   Angehaltene Fades können mit \<Go\> fortgesetzt werden.

### Fire First Cue
Ist diese Option aktiviert, so wird mit Bedienen des
Faders direkt Cue 1 der Cueliste gestartet. Als Vorgabewert ist diese
Option deaktiviert. Ansonsten muss immer erst \<Go\> gedrückt werden.

---

## Cue List Options -- Tab "Effects"

Alle Optionen dieser Rubrik funktionieren genauso wie im Kapitel [Effekte](../cues/playback-options.md#playback-options----tab-effects) beschrieben.

---

## Cue List Options -- Tab "Release"

Release Mask und Release Time funktionieren genauso wie im Kapitel [Release](../cues/playback-options.md#playback-options----tab-release) beschrieben.

### Cue Release

Damit werden einzelne Werte released, wenn nicht im
nächsten Cue Werte dafür hinterlegt sind. Damit lassen sich manche
Effekte erstellen.

> Die früher hier zu findenden **Cue Options** sind nun in der Playback-Ansicht
 zu finden und zu editieren. Um diese zu öffnen, drücken Sie \<View / Open\> 
 und die **Select-Taste** der Cueliste.