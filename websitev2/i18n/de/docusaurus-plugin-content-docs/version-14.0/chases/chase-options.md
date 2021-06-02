---
id: chase-options
title: Chaser-Optionen
sidebar_label: Chaser-Optionen
original_id: chase-options
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Um weitere Optionen eines Chasers zu ändern, drücken Sie im Hauptmenü
<Keys.SoftKey>Options</Keys.SoftKey>, gefolgt von der entsprechenden <strong>Swop</strong>-Taste. Zum
Einstellen der Optionen in einem Fenster drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, dann die
entsprechende <strong>Swop</strong>-Taste, und klicken links in der Playback-Ansicht
auf <Keys.SoftKey>Options</Keys.SoftKey>.

![Playback Options (playback tab) for a chase](/docs/images/Playback-Options-Chase-Playback-Tab.png)

Die meisten Optionen sind die gleichen wie für statische Cues (siehe
[Playback Optionen](../cues/playback-options.md)), sowie ein paar 
zusätzliche für Chaser, die hier beschrieben werden.

---

## Tab "Handle"

Alle Optionen dieser Rubrik funktionieren genauso wie im [Kapitel Cues](../cues/playback-options.md#playback-options----tab-handle) beschrieben.

---

## Tab "Playback"

[Blind](../cues/playback-options.md#blind), [Cross Fade HTP](../cues/playback-options.md#cross-fade-htp), [Priority](../cues/playback-options.md#priority) funktionieren genauso wie im Kapitel Cues beschrieben.

### Cue Links Disabled
Ist dies aktiviert, so läuft der Chaser nicht
automatisch durch, sondern man muss nach jedem Schritt wieder <Keys.HardKey>Go</Keys.HardKey>
drücken.

### Linking
bestimmt das Verhalten aufeinanderfolgender Schritte:

<Keys.SoftKey>Link according to individual steps</Keys.SoftKey> - (Schrittfolge nach Vorgabe):
jeder Schritt verhält sich gemäß der spezifischen Vorgaben (mit
[<Keys.HardKey>Unfold</Keys.HardKey>](editing-a-chase.md#ändern-eines-chasers-mit-der-unfold-funktion) oder im [Playback View-Fenster](editing-a-chase.md#einen-chaser-zum-editieren-öffnen) einzustellen).\
<Keys.SoftKey>Always Link Steps</Keys.SoftKey> - (Schritte stets folgen lassen): der Chaser
läuft automatisch mit den vorgegebenen Zeiten ab.\
<Keys.SoftKey>Never Link Steps</Keys.SoftKey> - (Schritte nie folgen lassen): der Chaser stoppt
nach jeder Verzögerungs-/Überblendzeit und wartet auf das Betätigen
der <Keys.HardKey>Go</Keys.HardKey>-Taste.

> Ist ein Chaser 'unlinked', d.h. wartet immer auf das manuelle ‚Go', so startet auch der erste Schritt nicht automatisch, wenn der Fader hochgezogen wird. Um dies zu umgehen, linken Sie den ersten Schritt zum vorherigen, sofern der Chaser nicht auf ‚Loop' (Wiederholung) steht. Steht er hingegen auf ‚Loop', so fügen Sie am Ende einen ‚Blindschritt' ein mit 0 Sek. Fade- und 0 Sek. Delayzeit, und linken den ersten Schritt mit diesem.

### Loop Action
bestimmt, was passiert, wenn der Chaser durchgelaufen ist:

<Keys.SoftKey>Stop on Final Cue</Keys.SoftKey> - Der Chaser stoppt, läuft also nur einmal.\
<Keys.SoftKey>Loop</Keys.SoftKey> - Der Chaser läuft immer wieder von Anfang an durch -- eine
Schleife.

### Play Order
stellt die Richtung des Chasers ein (forwards = vorwärts, backwards 
= rückwärts, bounce = hin und zurück, random = zufällige Folge).

---

## Tab "Times"

Flash Fade In, Flash Fade Out sowie Speed verhalten sich wie bei
einzelnen Cues. Der Speed (Geschwindigkeit) kann auch mit dem linken Rad
eingestellt werden, wenn der Chaser connected ist. Siehe [Geschwindigkeit und Überblendung einstellen](chase-playback.md#geschwindigkeit-und-überblendung-einstellen) für weitere Details.

### Speed Multiplier
zum Einstellen eines Faktors für das Tempo.

### XFade
Eine weitere Möglichkeit, das Überblenden des Chasers
einzustellen.

---

## Tab "Effects

Alle Optionen dieser Rubrik funktionieren genauso wie im [Kapitel Cues](../cues/playback-options.md#playback-options----tab-effects) beschrieben.

---

## Tab "Release"

[Release Mask](../cues/playback-options.md#release-mask) und 
[Release Time](../cues/playback-options.md#release-time) funktionieren genauso wie im
[Kapitel Cues](../cues/playback-options.md#playback-options----tab-release) beschrieben.

### Cue Release
Cue Release: erlaubt es, Chaser zu erstellen, bei denen zwischen den
einzelnen Schritten ein Release erfolgt. 

*So lässt sich damit z.B. ein Chaser erstellen, der die Geräte einzeln 
auf weiß einblendet und dann wieder released, also auf die vorher 
verwendete Farbe zurücksetzt. Diesen kann man dann vor jedem anderen - durch andere Cues/Paletten eingestellten - Hintergrund laufen lassen.*