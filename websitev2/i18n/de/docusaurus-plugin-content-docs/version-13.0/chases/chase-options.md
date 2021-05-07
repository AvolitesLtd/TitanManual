---
id: chase-options
title: Chase Options
sidebar_label: Chase Options
original_id: chase-options
---

import Keys from '@site/src/components/key.ts';

Um weitere Optionen eines Chasers zu ändern, drücken Sie im Hauptmenü
<Keys.SoftKey>Playback Options</Keys.SoftKey>, gefolgt von der entsprechenden <strong>Swop</strong>-Taste. Zur
Anzeige aller Optionen in einem Fenster drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, dann die
entsprechende <strong>Swop</strong>-Taste, und klicken links in der Playback-Ansicht
auf <Keys.SoftKey>Options</Keys.SoftKey>.

![Playback Options (playback tab) for a chase](/docs/images/Playback-Options-Chase-Playback-Tab.png)

Die meisten Optionen sind die gleichen wie für statische Cues (siehe
[Playback Options](../cues/playback-options.md)), sowie ein paar 
zusätzliche für Chaser, die hier beschrieben werden.

## Chase Options -- Tab "Playback"

[Blind](../cues/playback-options.md#blind), [Priority](../cues/playback-options.md#priority), 
[Shape Behaviour](../cues/playback-options.md#shape-behaviour) funktionieren genauso wie im Kapitel Cues beschrieben.

### Loop Action
bestimmt, was passiert, wenn der Chaser durchgelaufen ist:

<Keys.SoftKey>Stop on Final Cue</Keys.SoftKey> - Der Chaser stoppt, läuft also nur einmal.\
<Keys.SoftKey>Loop</Keys.SoftKey> - Der Chaser läuft immer wieder von Anfang an durch -- eine
Schleife.

### Play Order
stellt die Richtung des Chasers ein (forwards = vorwärts, backwards 
= rückwärts, bounce = hin und zurück, random = zufällige Folge).

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

### Speed Multiplier
zum Einstellen eines Faktors für das Tempo.

### Speed
Eine weitere Möglichkeit, das Tempo des Chasers einzustellen.

### XFade
Eine weitere Möglichkeit, das Überblenden des Chasers
einzustellen.

### Fixture Overlap
Einstellen der Geräteüberlappung.

> *Siehe [Geschwindigkeit und Überblendung einstellen](chase-playback.md#geschwindigkeit-und-überblendung-einstellen) für weitere Details.*

## Handle Tab

Alle Optionen dieser Rubrik funktionieren genauso wie im [Kapitel Cues](../cues/playback-options.md#playback-options---tab-handle) beschrieben.

## Effects Tab

Alle Optionen dieser Rubrik funktionieren genauso wie im [Kapitel Cues](../cues/playback-options.md#playback-options----tab-effects) beschrieben.

## Release Tab

[Release Mask](../cues/playback-options.md#release-mask) und 
[Release Time](../cues/playback-options.md#release-time) funktionieren genauso wie im
[Kapitel Cues](../cues/playback-options.md#playback-options----tab-release) beschrieben.

### Cue Release
Cue Release: erlaubt es, Chaser zu erstellen, bei denen zwischen den
einzelnen Schritten ein Release erfolgt. 

*So lässt sich damit z.B. ein Chaser erstellen, der die Geräte einzeln 
auf weiß einblendet und dann wieder released, also auf die vorher 
verwendete Farbe zurücksetzt. Diesen kann man dann vor jedem anderen -
 durch andere Cues/Paletten eingestellten - Hintergrund laufen lassen.*

## Renumber All Cues

Die Option <Keys.SoftKey>Renumber All Cues</Keys.SoftKey> setzt die Nummerierung der Schritte auf
eine von 1 aufsteigende Folge zurück. Diese Option ist nur über die
Menütasten verfügbar, nicht im Optionsfenster.