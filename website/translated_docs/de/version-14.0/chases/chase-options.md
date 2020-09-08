---
id: version-14.0-chase-options
title: Chase Options
sidebar_label: Chase Options
original_id: chase-options
---

Um weitere Optionen eines Chasers zu ändern, drücken Sie im Hauptmenü
\[Options\], gefolgt von der entsprechenden **Swop**-Taste. Zum
Einstellen der Optionen in einem Fenster drücken Sie \<View / Open\>, dann die
entsprechende **Swop**-Taste, und klicken links in der Playback-Ansicht
auf \[Options\].

![Playback Options (playback tab) for a chase](/docs/images/Playback-Options-Chase-Playback-Tab.png)

Die meisten Optionen sind die gleichen wie für statische Cues (siehe
[Playback Optionen](../cues/playback-options.md)), sowie ein paar 
zusätzliche für Chaser, die hier beschrieben werden.

---

## Tab "Handle"

Alle Optionen dieser Rubrik funktionieren genauso wie im [Kapitel Cues](../cues/playback-options.md#handle-tab) beschrieben.

---

## Tab "Playback"

[Blind](../cues/playback-options.md#blind), [Cross Fade HTP](../cues/playback-options.md#cross-fade-htp), [Priority](../cues/playback-options.md#priority) funktionieren genauso wie im Kapitel Cues beschrieben.

### Cue Links Disabled
Ist dies aktiviert, so läuft der Chaser nicht
automatisch durch, sondern man muss nach jedem Schritt wieder \<Go\>
drücken.

### Linking
bestimmt das Verhalten aufeinanderfolgender Schritte:

\[Link according to individual steps\] - (Schrittfolge nach Vorgabe):
jeder Schritt verhält sich gemäß der spezifischen Vorgaben (mit
[\<Unfold\>](editing-a-chase.md#editing-a-chase-using-unfold) oder im [Playback View-Fenster](editing-a-chase.md#opening-a-chase-for-editing) einzustellen).\
\[Always Link Steps\] - (Schritte stets folgen lassen): der Chaser
läuft automatisch mit den vorgegebenen Zeiten ab.\
\[Never Link Steps\] - (Schritte nie folgen lassen): der Chaser stoppt
nach jeder Verzögerungs-/Überblendzeit und wartet auf das Betätigen
der \<Go\>-Taste.

> Ist ein Chaser 'unlinked', d.h. wartet immer auf das manuelle ‚Go', so startet auch der erste Schritt nicht automatisch, wenn der Fader hochgezogen wird. Um dies zu umgehen, linken Sie den ersten Schritt zum vorherigen, sofern der Chaser nicht auf ‚Loop' (Wiederholung) steht. Steht er hingegen auf ‚Loop', so fügen Sie am Ende einen ‚Blindschritt' ein mit 0 Sek. Fade- und 0 Sek. Delayzeit, und linken den ersten Schritt mit diesem.

### Loop Action
bestimmt, was passiert, wenn der Chaser durchgelaufen ist:

\[Stop on Final Cue\] - Der Chaser stoppt, läuft also nur einmal.\
\[Loop\] - Der Chaser läuft immer wieder von Anfang an durch -- eine
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

Alle Optionen dieser Rubrik funktionieren genauso wie im [Kapitel Cues](../cues/playback-options.md#effects-tab) beschrieben.

---

## Tab "Release"

[Release Mask](../cues/playback-options.md#release-mask) und 
[Release Time](../cues/playback-options.md#release-time) funktionieren genauso wie im
[Kapitel Cues](../cues/playback-options.md#release-tab) beschrieben.

### Cue Release
Cue Release: erlaubt es, Chaser zu erstellen, bei denen zwischen den
einzelnen Schritten ein Release erfolgt. 

*So lässt sich damit z.B. ein Chaser erstellen, der die Geräte einzeln 
auf weiß einblendet und dann wieder released, also auf die vorher 
verwendete Farbe zurücksetzt. Diesen kann man dann vor jedem anderen 
- durch andere Cues/Paletten eingestellten - Hintergrund laufen lassen.*