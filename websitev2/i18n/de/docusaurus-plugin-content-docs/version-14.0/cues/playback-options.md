---
id: playback-options
title: Playback Options
sidebar_label: Playback Options
original_id: playback-options
---

import Keys from '@site/src/components/key.ts';

[](https://youtu.be/Dz_lWDHukxo?t=20 "Playback Options")

Zum Einstellen der Optionen eines Cues, einer Cueliste oder eines
Chasers drücken Sie <Keys.SoftKey>Options</Keys.SoftKey> im Hauptmenü oder die Taste <Keys.HardKey>Options</Keys.HardKey> und anschließend die **Auswahltaste** der entsprechenden Playbacks. Darauf werden 
alle verfügbaren Optionen übersichtlich in einem Fenster dargestellt(die Optionen können außerdem wie früher mit den Menütasten bearbeitet werden). 

Auch die Zeiten lassen sich hier einstellen (auf dem Reiter <Keys.SoftKey>Times</Keys.SoftKey> oder mit der Taste <Keys.HardKey>Times</Keys.HardKey>).

Alle verfügbaren Optionen sind auf verschiedene Reiter aufgeteilt. 
Ein Klick auf den Button <Keys.SoftKey>i</Keys.SoftKey> zeigt einen kurzen Hilfetext zu der jeweiligen
Option.

> Sollen die Optionen für mehrere Playbacks auf einmal angezeigt/geändert werden, so kann man einfach mehrere Playbacks auswählen. Dabei werden Optionen als aktiv angezeigt, sofern sie auf allen Playbacks gleich aktiviert sind; anderenfalls wird ein Sternchen angezeigt.

## Playback Options -- Tab "Handle"

![Playback Options window for cue showing handle tab](/docs/images/Playback-Options-Handle-Tab.png)

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

---

## Playback Options -- Tab "Playback"

![Playback Options showing playback tab](/docs/images/Playback-Options-Chase-Playback-Tab.png)

### Blind
Schaltet das jeweilige Playback in den **Blind**-Modus. Damit
erfolgt die Ausgabe nicht an die 'Live'-DMX-Ausgänge, sondern an den
Visualiser, *um Änderungen vornehmen zu können, ohne das aktuelle Bild zu
stören*.

### Cross Fade HTP
Sofern aktiviert, überschreiben HTP-Kanäle (Dimmer)
in diesem Playback die Informationen für diese Kanäle aus anderen
Playbacks, wobei die [Priorität](#priority) der Playbacks beachtet wird.
Normalerweise folgen Dimmerkanäle ja der HTP-Regel, d.h. der höhere Wert
wird ausgegeben. Doch mit dieser Option lassen sich Playbacks erstellen,
bei denen der zuletzt gesendete - auch niedrigere - Wert
berücksichtigt wird.

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

---

## Playback Options -- Tab "Times"

![Playback Options showing times tab](/docs/images/Playback-Options-Times-Tab.png)

### Delay In/Fade In/Fade Out 
Hier können die jeweiligen Zeiten
eingestellt werden. Das kann auch mit der <Keys.HardKey>Time</Keys.HardKey>-Taste erfolgen.

### Fixture Overlap
Mit Fixture Overlap - Geräte-Überlappung - werden Änderungen von einem 
Cue zum nächsten auf die einzelnen Fixtures nacheinander statt gleichzeitig 
angewendet. Genauer ist dies in [Einstellen von Überblendzeiten und Geräteversatz](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) erläutert.

### Flash Fade In / Flash Fade Out
Ein- und Ausfadezeit beim Flashen
per Flash-Taste. Vorgabewerte sind *'AsIn'* und *'AsOut'*, also die normalen
Ein-/Ausfadezeiten für den Cue. Hiermit lassen sich wenn gewünscht
andere Flash-Fadezeiten als Fadezeiten für den Fader einstellen.
*Voraussetzung dafür ist das [Tastenprofile/Key Profile](../system-settings/key-profiles.md) **Timed
Flash***.

### Speed
Vorgabe-Tempo für Effekte in diesem Cue. Kann durch
entsprechende [Master](../running-the-show/playback-controls.md#speed--und-size-master) 
überschrieben werden.

---

## Playback Options -- Tab "Fader"

![Playback Options showing fader tab](/docs/images/Playback-Options-Fader-Tab.png)

### Fader Mode

Bestimmt die genaue Arbeitsweise des Faders.

Einstellung | Ergebnis
------: | ------
Mode 0 | die Kanäle blenden in der vorgegebenen Zeit über, die Ausblendzeit wird dabei ignoriert. Stehen die Zeiten auf '0', so werden HTP-Kanäle direkt mit dem Fader eingeblendet, während LTP-Kanäle 'hart' umschalten.
Mode 1 | die Kanäle blenden in der vorgegebenen Zeit ein, HTP Kanäle blenden in der vorgegebenen Ausblendzeit aus (LTP-Kanäle behalten ihre Werte). Stehen die Zeiten auf '0', so werden HTP-Kanäle direkt mit dem Fader eingeblendet, während LTP-Kanäle 'hart' umschalten..
Mode 2 | sowohl HTP- als auch LTP-Werte folgen dem Faderwert. *Sinnvoll z.B. zur Anwendung mit Pan und Tilt etwa auf einem Catwalk oder zur manuellen Steuerung der Farben bei RGB-Lampen.*
Mode 3 | Crossfade (Überblendung). Sämtliche Kanäle, einschließlich der Helligkeit, blenden zu den Einstellungen des neuen Cues über, alle anderen noch aktiven Cues werden ausgeblendet und deaktiviert. Wird eine anderer Cue wieder benötigt, so bringen Sie dessen Regler auf '0' und dann wieder auf den gewünschten Wert. *Sinnvoll z.B. für eine Präsentationsstimmung, mit der alle anderen Playbacks ausgefadet werden.*

Die gleiche Einstellung wie im [<Keys.SoftKey>Edit Times</Keys.SoftKey>](cue-timing.md)-Menu.

[](https://youtu.be/2fwM5S8nX3k?t=20 "Playback Modes")

### Curve
Bestimmt den Verlauf der Änderungen der Attribute, wenn der
Cue eingeblendet wird. Die verschiedenen Kurven sind [Curves](../system-settings/curves.md) näher beschrieben.

---

## Playback Options -- Tab "Effects"

![Playback Options showing effects tab](/docs/images/Playback-Options-Effects-Tab.png)

### Effect Speed Multiplier
Damit lässt sich die Geschwindigkeit vervielfachen/teilen. Das bietet sich 
besonders an, wenn man mehrere Chaser/Effekte gleichzeitig anwendet.

### Shape & Effect Speed
Bestimmt, ob der Fader Einfluss auf das Tempo
von Shapes auf diesem Playback hat. Steht dies auf <Keys.SoftKey>On Fader</Keys.SoftKey>, so kann
das Tempo von 0 bis zur programmierten Geschwindigkeit stufenlos
verändert werden. Mit dem Multiplier (s.o.) lassen sich auch höhere
Geschwindigkeiten erzielen.

> Haben Sie einen Cue, der nur Shapes enthält, um diese zu anderen Cues dazuzumischen, so empfiehlt es sich, für diesen die Einstellung <Keys.SoftKey>Size on Fader</Keys.SoftKey> vorzunehmen sowie einen [Speed Master](../running-the-show/playback-controls.md#speed--und-size-master) zu verwenden. Damit lässt sich dann flexibel und unabhängig die Größe und die Geschwindigkeit des Shapes live verändern.

### Shape Behaviour
Steuert das Verhalten von Keyframe-Shapes in diesem Playback:

Einstellung | Ergebnis
------: | ------
Global | Es gelten die globalen [Benutzereinstellungen](../system-settings/user-settings.md#shape-behaviour)
Overlay | der Shape läuft unabhängig von etwaigen Attribut-Änderungen
LTP | Attributänderungen beenden den Shape auf den jeweiligen Attributen

### Shape Size
Bestimmt, ob der Fader Einfluss auf die Größe von Shapes
auf diesem Playback hat:

Einstellung | Ergebnis
------: | ------
Fixed | keine Auswirkung, nur fest programmierte Werte
Fader | die Größe aller hier programmierten Shapes wird vom Fader gesteuert
HTP Fader | nur die Größe von Dimmer-Shapes wird durch den Fader gesteuert

### Size Source
Zuordnung eines [Size Masters](../running-the-show/playback-controls.md#speed--und-size-master)
für enthaltene Shapes.

### Speed Source
Bestimmt einen [Speed Master](../running-the-show/playback-controls.md#speed--und-size-master), 
der enthaltene Shapes steuert.

---

## Playback Options -- Tab "Release"

![Playback Options showing release tab](/docs/images/Playback-Options-Release-Tab.png)

### Release Mask
Bestimmt die freizugebenden Attribute, die damit auf
den Status vor Abruf des Cues zurückgesetzt werden, sobald der aktuelle
beendet/ausgeblendet wird (Fader auf 0). Ebenso lassen sich dazu die
Attribut-Tasten benutzen.

Normalerweise bleiben Werte von LTP-Kanälen erhalten, auch wenn der Cue
deaktiviert wird. Mitunter ist dies aber nicht gewünscht, z.B. bei einem
Strobe-Cue.

Die Maske kann auf Global oder Lokal gestellt werden. Mit 'Lokal' lassen
sich Einstellungen nur für diesen Cue vornehmen, während 'Global' der
Bezug auf die globale Release-Maske **Release-Menü** ist
(drücken Sie dazu <Keys.HardKey>Release</Keys.HardKey>).

> Mit der Release-Maske lässt sich z.B. ein temporärer ('flashbarer') Strobe-Effekt programmieren. Drücken Sie <Keys.SoftKey>Release Mask</Keys.SoftKey>, und stellen Sie Intensity auf 'Include'. Wird nun das Playback ausgeblendet, kehrt der Shutter zum vorigen Wert zurück, und das Strobe stoppt. 

Per [Tastenprofil/Key Profile](../system-settings/key-profiles.md) lässt sich die graue/blaue Taste mit der Funktion ‚Release' belegen.

### Release Time
Zum Einstellen der Zeit für das Releasen; in dieser
Zeit werden die Attribute zum vorherigen Wert übergeblendet. Wird die
Zeit komplett gelöscht, so wechselt der Eintrag auf Global (die in den
[Benutzereinstellungen](../system-settings/user-settings.md) eingestellte [globale Release-Zeit](../system-settings/user-settings.md#master-release-time)).

