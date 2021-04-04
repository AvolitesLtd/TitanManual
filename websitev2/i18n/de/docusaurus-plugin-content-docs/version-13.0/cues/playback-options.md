---
id: playback-options
title: Playback Options
sidebar_label: Playback Options
original_id: playback-options
---

[](https://youtu.be/Dz_lWDHukxo?t=20 "Playback Options")

Zum Einstellen der Optionen eines Cues, einer Cueliste oder eines
Chasers drücken Sie \[Playback Options\] im Hauptmenü und anschließend
die **Swop-Taste** der entsprechenden Playbacks. Darauf öffnet sich eine
Liste mit den verfügbaren Optionen auf den Menütasten. Außerdem werden 
alle verfügbaren Optionen übersichtlich in einem Fenster dargestellt, 
wenn man in der Playback-Ansicht links auf den Button \[Options\] klickt.

![Playback Options window for cue showing playback tab](/docs/images/Playback-Options-Playback-Tab.png)

Ein Klick auf den Button \[i\] zeigt einen kurzen Hilfetext zu der jeweiligen
Option.

> Sollen die Optionen für mehrere Playbacks auf einmal angezeigt/geändert
werden, so kann man einfach mehrere Playbacks auswählen. Dabei werden
Optionen als aktiv angezeigt, sofern sie auf allen Playbacks gleich
aktiviert sind.

## Playback Options -- Tab "Playback"


### Blind
Schaltet das jeweilige Playback in den **Blind**-Modus. Damit
erfolgt die Ausgabe nicht an die 'Live'-DMX-Ausgänge, sondern an den
Visualiser, *um Änderungen vornehmen zu können, ohne das aktuelle Bild zu
stören*.

### Priority
Damit lässt sich das Verhalten bestimmen, wenn mehrere
aktive Cues gleichzeitig dieselben Geräte beeinflussen. Die Priorität
lässt sich zwischen **Low** (niedrig), **Normal** (normal), **High** (hoch),
**Programmer** (Programmierspeicher) und **Very High** (sehr hoch)
umschalten *('Programmer' ist gleichwertig mit der Priorität des
Programmierspeichers)*. Wird ein Gerät aktuell von einem Cues gesteuert,
und dann ein Cue mit gleicher oder höherer Priorität gestartet, so
übernimmt der neue Cue die Kontrolle. Hat hingegen der neue Cue eine
niedrigere Priorität, so erfolgt keine Änderung am Gerät.

Ein Anwendungsfall wäre etwa, wenn man mit sämtlichen Geräten ein
bestimmtes Bild programmiert hat und später entscheidet, ein paar Geräte
davon z.B. als Spot auf den Sänger zu verwenden. Setzt man nun die
Priorität des 'Spot'-Cues höher, so werden die dafür verwendeten Geräte
von den anderen Cues nicht beeinflusst.


> Priorisierung ist etwa hilfreich, wenn mit Swop-Tasten ein Strobe programmiert werden soll, das solange alle anderen Cues ausblendet. Wenn z.B. ein Positions-Shape läuft, so soll der natürlich nicht stoppen, da sonst ggf. alles ‚durcheinander' aussieht. Entsprechend empfiehlt es sich, das Playback mit dem Shape auf eine höhere Priorität zu setzen, so dass es vom Swop nicht ausgeblendet wird.

Wird manuell eine Palette aufgerufen, so haben deren Werte eine
höhere Priorität als Werte in Cues, außer in solchen mit der Priorität 'Very High'.

### Shape Behaviour
Steuert das Verhalten von Keyframe-Shapes in diesem Playback:

Einstellung | Ergebnis
------: | ------
Global | Es gelten die globalen [Benutzereinstellungen](../system-settings/user-settings.md#shape-behaviour)
Overlay | der Shape läuft unabhängig von etwaigen Attribut-Änderungen
LTP | Attributänderungen beenden den Shape auf den jeweiligen Attributen

### Fader Mode
Die gleiche Einstellung wie im [\[Edit Times\]](cue-timing.md)-Menu:

Einstellung | Ergebnis
------: | ------
Mode 0 | die Kanäle blenden in der vorgegebenen Zeit über, die Ausblendzeit wird dabei ignoriert. Stehen die Zeiten auf '0', so werden HTP-Kanäle direkt mit dem Fader eingeblendet, während LTP-Kanäle 'hart' umschalten.
Mode 1 | die Kanäle blenden in der vorgegebenen Zeit ein, HTP Kanäle blenden in der vorgegebenen Ausblendzeit aus (LTP-Kanäle behalten ihre Werte). Stehen die Zeiten auf '0', so werden HTP-Kanäle direkt mit dem Fader eingeblendet, während LTP-Kanäle 'hart' umschalten..
Mode 2 | sowohl HTP- als auch LTP-Werte folgen dem Faderwert. *Sinnvoll z.B. zur Anwendung mit Pan und Tilt etwa auf einem Catwalk oder zur manuellen Steuerung der Farben bei RGB-Lampen.*
Mode 3 | Crossfade (Überblendung). Sämtliche Kanäle, einschließlich der Helligkeit, blenden zu den Einstellungen des neuen Cues über, alle anderen noch aktiven Cues werden ausgeblendet und deaktiviert. Wird eine anderer Cue wieder benötigt, so bringen Sie dessen Regler auf '0' und dann wieder auf den gewünschten Wert. *Sinnvoll z.B. für eine Präsentationsstimmung, mit der alle anderen Playbacks ausgefadet werden.*

[](https://youtu.be/2fwM5S8nX3k?t=20 "Playback Modes")

### Run On Startup
Ist dies eingeschaltet, so wird das Playback beim
Start des Pultes bzw. Laden der Show aktiviert. Dazu gehört die
Benutzereinstellung [Run Startup Playbacks](../system-settings/user-settings.md#run-startup-playbacks) *(Vorgabewert: ein)*.

Sinnvoll z.B. für Festinstallationen, wenn beim Starten des Pultes direkt 
ein Grundlicht aktiviert werden soll.

Playbacks, die beim Start der Software automatisch starten, zeigen dies durch 
ein Einschalt-Symbol an. Im [Show-Verzeichnis](../titan-basics/show-library.md) 
gibt es einen Kontext-Button, um die automatisch aktivierten Playbacks anzuzeigen.

![Power On Playback](/docs/images/Power-On-Playback.png)

### Speed
Vorgabe-Tempo für Effekte in diesem Cue. Kann durch
entsprechende [Master](../running-the-show/playback-controls.md#speed--und-size-master) 
überschrieben werden. Der Speed laufender [Chaser](../chases.md)
kann auch durch die Encoder geändert werden, sofern der Chaser
mit der Steuerung verbunden ist.

### Xfade
Crossfade (Überblenden) für dieses Playback. Bei [Chasern](../chases.md) kann
Crossfade auch mit dem entsprechenden Encoder eingestellt werden.

### Speed Multiplier
Damit lässt sich die Geschwindigkeit vervielfachen/teilen. Das bietet sich 
besonders an, wenn man mehrere Chaser/Effekte gleichzeitig anwendet.

### Flash Fade In / Flash Fade Out
Ein- und Ausfadezeit beim Flashen
per Flash-Taste. Vorgabewerte sind *'AsIn'* und *'AsOut'*, also die normalen
Ein-/Ausfadezeiten für den Cue. Hiermit lassen sich wenn gewünscht
andere Flash-Fadezeiten als Fadezeiten für den Fader einstellen.
*Voraussetzung dafür ist das [Tastenprofile/Key Profile](../system-settings/key-profiles.md) **Timed
Flash***.

### Cross Fade HTP
Sofern aktiviert, überschreiben HTP-Kanäle (Dimmer)
in diesem Playback die Informationen für diese Kanäle aus anderen
Playbacks, wobei die [Priorität](#priority) der Playbacks beachtet wird.
Normalerweise folgen Dimmerkanäle ja der HTP-Regel, d.h. der höhere Wert
wird ausgegeben. Doch mit dieser Option lassen sich Playbacks erstellen,
bei denen der zuletzt gesendete - auch niedrigere - Wert
berücksichtigt wird.

## Playback Options - Tab "Handle"

### Handle Paging
Mit dieser Option lässt sich ein Playback 'fixieren',
so dass es unabhängig vom Wechsel der Seiten stets verfügbar bleibt.
Dies bietet sich an, wenn man ein paar allgemeine Cues hat, die auf
jeder Seite benötigt werden, ohne dass man diese extra kopieren muss.

Einstellung | Ergebnis
------: | ------
Unlocked | Voreinstellung, das Playback wird normal umgeschaltet.
Transparent Lock | Das Playback wird auf alle Seiten eingeblendet, auf denen nicht schon etwas anderes auf dem entsprechenden Regler programmiert ist.
Locked | Das Playback wird auf allen Seiten auf den gleichen Regler eingeblendet. Etwa dort bereits programmierte Cues etc. sind nicht erreichbar.

### Key Profile
Auswahl des [Tastenprofils/Key Profiles](../system-settings/key-profiles.md) 
für das Playback. 'Global' stellt etwa vorhandene einzelne Einstellungen auf 
den global gültigen Wert zurück.

## Playback Options -- Tab "Fader"

### Fader-Modus
gleiche Einstellungen wie im Tab Playback, [siehe oben](#fader-mode)

### Shape Size
Bestimmt, ob der Fader Einfluss auf die Größe von Shapes
auf diesem Playback hat:

Einstellung | Ergebnis
------: | ------
Fixed | keine Auswirkung, nur fest programmierte Werte
Fader | die Größe aller hier programmierten Shapes wird vom Fader gesteuert
HTP Fader | nur die Größe von Dimmer-Shapes wird durch den Fader gesteuert

### Shape & Effect Speed
Bestimmt, ob der Fader Einfluss auf das Tempo von Shapes auf diesem Playback hat.

### Curve
Bestimmt den Verlauf der Änderungen der Attribute, wenn der
Cue eingeblendet wird. Die verschiedenen Kurven sind [Curves](../system-settings/curves.md) näher beschrieben.

---

> Es lässt sich auch ein 
[Speed Master](../running-the-show/playback-controls.md#speed--und-size-master)
bestimmen, der enthaltene Shapes steuert.

## Playback Options -- Tab "Effects"

### Shape Behaviour
Gleiche Einstellung wie im Tab 'Playback', [siehe oben](#shape-behaviour).

### Speed Source
Bestimmt einen [Speed Master](../running-the-show/playback-controls.md#speed--und-size-master), 
der enthaltene Shapes steuert.

### Size Source
Zuordnung eines [Size Masters](../running-the-show/playback-controls.md#speed--und-size-master)
für enthaltene Shapes

### Shape Size
Gleiche Einstellung wie im Tab 'Fader', [siehe oben](#shape-size)

### Shape & Effect Speed
Gleiche Einstellung wie im Tab 'Fader', [siehe oben](#shape--effect-speed)

> Haben Sie einen Cue, der nur Shapes enthält, um diese zu anderen Cues dazuzumischen, so empfiehlt es sich, für diesen die Einstellung \[Size on Fader\] vorzunehmen sowie einen [Speed Master](../running-the-show/playback-controls.md#speed--und-size-master) zu verwenden. Damit lässt sich dann flexibel und unabhängig die Größe und die Geschwindigkeit des Shapes live verändern.

## Playback Options -- Tab "Release"

### Release Mask
Bestimmt die freizugebenden Attribute, die damit auf
den Status vor Abruf des Cues zurückgesetzt werden, sobald der aktuelle
beendet/ausgeblendet wird (Fader auf 0). Ebenso lassen sich dazu die
Attribut-Tasten benutzen.

Die Maske kann auf Global oder Lokal gestellt werden. Mit 'Lokal' lassen
sich Einstellungen nur für diesen Cue vornehmen, während 'Global' der
Bezug auf die globale Release-Maske **Release-Menü** ist
(drücken Sie dazu \<Release\>).

> Mit der Release-Maske lässt sich z.B. ein temporärer ('flashbarer') Strobe-Effekt programmieren. Drücken Sie \[Release Mask\], und stellen Sie Intensity auf 'Include'. Wird nun das Playback ausgeblendet, kehrt der Shutter zum vorigen Wert zurück, und das Strobe stoppt. 

Per [Tastenprofil/Key Profile](../system-settings/key-profiles.md) lässt sich die graue/blaue Taste mit der Funktion ‚Release' belegen.

### Release Time
Zum Einstellen der Zeit für das Releasen; in dieser
Zeit werden die Attribute zum vorherigen Wert übergeblendet. Wird die
Zeit komplett gelöscht, so wechselt der Eintrag auf Global (die in den
[Benutzereinstellungen](../system-settings/user-settings.md) eingestellte [globale Release-Zeit](../system-settings/user-settings.md#master-release-time)).
