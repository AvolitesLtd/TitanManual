---
id: operating-the-remote
title: Verwenden der Titan Remote-App
sidebar_label: Verwenden der Titan Remote-App
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Im Kapitel [Einrichten der Fernsteuerung](setting-up-the-remote.md) wird beschrieben,
wie ein Mobilgerät (Handy oder Tablett) mit Titan verbunden wird.

![Titan Remote Android App status bar](/docs/images/Remote-Topbar.png)

Die Titelleiste der App zeigt den Verbindungsstatus an:
- grün: gute Verbindung. In der rechten Ecke wird die Antwortzeit angezeigt. 
- rot: Verbindung unterbrochen oder sehr langsam (Antwortzeit über eine Sekunde). 
- orange: Verbindung langsam (Antwortzeit über 250ms).

> Wird eine rote oder orange Titelleiste angezeigt, so sollte die Verbindung überprüft und z.B. der 
Standort des Access-Points geändert werden, so dass eine freie Sichtlinie zwischen diesem und dem Mobilgerät besteht.

Mit den Buttons **Keypad / Fixture / Group / Palette / Cue** wählen Sie, was gesteuert werden soll. 
Mit der Taste Keypad werden die Zifferntasten ein- oder ausgeblendet (diese verdecken ggf. andere Anzeigen).

Einige Buttons können für erweiterte Funktionen länger gedrückt gehalten werden. Diese Buttons werden 
mit einem Kreissymbol angezeigt.

Die Anzeige der App variiert mit der Bildschirmauflösung Ihres Gerätes. Auf Tabletts und Geräten mit großen 
Bildschirmen lassen sich mehr Fenster gleichzeitig anzeigen.

Auf Mobiltelefonen ist die Anzeige immer hochkant (Portrait); auf Tabletts wird die Anzeige durch die Orientierung beim Starten der App bestimmt. iPads können auch bei laufender App die Anzeige an die Orientierung anpassen. Die App berücksichtigt die Systemeinstellungen für den Dark Mode (Hell/Dunkel-Umschaltung).

## Keypad -- Tastatur

Mit der Tastatur lassen sich die häufigsten Aufgaben genauso wie auf dem Pult erledigen. Fixtures 
und Dimmer können einzeln oder zu mehreren ausgewählt, locatet und aktiviert werden.

![Titan Remote Android App with keypad](/docs/images/Remote-Keypad.png)

Die Steuerung erfolgt unter Verwendung der Gerätenummern (die Nummer in der oberen linken Ecke der 
Geräte-Buttons). Möchte man z.B. Dimmer Nr. 3 auf 50% setzen, so lautet die Eingabe

**`3 @ 5 Enter`**

Um die Dimmer 1 bis 10 auf 80% zu setzen:

**`1 Thro 10 @ 8 Enter`**

Für 100% klicken Sie zweimal auf @, z.B.

**`1 Thro 10 @ @`**

> Um ein oder mehrere Geräte auf Locate-Werte zu setzen, klicken Sie statt
auf @ auf <Keys.SoftKey>Locate</Keys.SoftKey>.

Es können mehrere Bereiche von Geräten mit der AND-Taste ausgewählt
werden, z.B.

**`1 Thro 10 And 20 Thro 30 @ 6 Enter`**.

## Auswählen von Geräten

Mit den Fenstern **Fixture** und **Group** lassen sich Geräte genauso wie auf dem Pult anwählen. 
Sind viele Geräte zu verwalten, so ist die Verwendung von Gruppen zu empfehlen. In diesem Fall 
kann mit **Highlight** das aktuell gesteuerte Gerät angezeigt, mit **Prev** bzw. **Next** vor- und zurückgegangen 
sowie mit **All** alle Geräte der Gruppe ausgewählt werden. Hält man **All** gedrückt, so kann 
man Geräte nach Muster auswählen, z.B. even/odd (gerade/ungerade).

![Fixture View in Titan Remote Android App](/docs/images/Remote-Fixtures.png)

Zum Scrollen im Fixture-Screen wischt man einfach in diesem Fenster (Klicken und Ziehen). Um auf eine 
andere Seite zu wechseln, klickt und zieht man die Titelleiste des Fensters nach unten.

## Steuern von Attributen

Mit den Buttons **IPCGBES** wählen Sie die zu steuernde Attributgruppe. Darauf werden Schieberegler
für die einzelnen Funktionen angezeigt.

![Colour Control in Titan Remote Android App](/docs/images/Remote-Colour-Attributes.png)

Für variable Werte wie z.B. Pan, Tilt oder die Farbmischung können die Fader einfach angeklickt und 
gezogen werden. Mit den Pfeilen oben und unten kann man direkt auf 0% und 100% springen. Zum 'Fannen' 
(Auffächern) - stets mit dem Muster 'Line' - klicken sie den gewünschten Fader mit zwei Fingern an und spreizen 
diese (oder ziehen sie zusammen), wie vom Zoom gewohnt.

Für Attribute mit festen Wertebereichen, z.B. Farb- oder Goboräder, wird der jeweilige Name angezeigt. 
Mit den Pfeilen unten und oben kann zwischen den einzelnen Farben, Gobos etc. gewechselt werden.

Gibt es mehr als drei Attribute in der jeweiligen Attributgruppe des Gerätes, klicken Sie zum 
Durchschalten wiederholt auf den entsprechenden **IPCGBES**-Button.

Klicken Sie auf <Keys.SoftKey>Clear</Keys.SoftKey>, um den Programmierspeicher der Remote zu
löschen. Wenn Sie <Keys.SoftKey>Clear</Keys.SoftKey> länger anklicken, so werden alle
Programmierspeicher gelöscht, also auch der des Pultes. Das kann
sinnvoll sein, wenn dort versehentlich noch etwas aktiv ist, was bei der
Verwendung der Remote stört.

- Nach der Verwendung der Remote drücken Sie **Clear**, um den Programmer der Remote zu löschen, ansonsten 
bleiben vorgenommene Änderungen erhalten und überschreiben die Informationen vom Pult. Vom Pult aus lässt 
sich der Programmer der Remote löschen, indem man am Pult <Keys.HardKey>Clear</Keys.HardKey> gedrückt hält 
und im Menü <Keys.SoftKey>Clear all programmers</Keys.SoftKey> wählt. Ist ein anderer Programmer aktiv, so 
wird das mit einem Punkt in Cyan bei den betroffenen Attributen angezeigt.

In der **Cue**-Ansicht können auch im Fenster 'Playbacks' gespeicherte 
Cues gestartet werden. Hält man die Schaltfläche eines aktiven Cues 
angeklickt, so kann man diesen deaktivieren oder releasen (freigeben).

- Cues, die auf normalen Fader-Handles gespeichert sind, stehen in der 
  Remote nicht zur Verfügung. Um diese verwenden zu können, kopieren/verschieben 
  sie die gewünschten Cues ins Playbacks-Fenster.

## Speichern von Paletten, Gruppen und Cues

Mit der Remote lassen sich auch Paletten, Gruppen und Cues speichern: nehmen
Sie die gewünschten Einstellungen vor, klicken Sie auf <Keys.SoftKey>Rec</Keys.SoftKey> und dann
auf eine Schaltfläche in der entsprechenden Ansicht. Ebenso kann man
einfach eine leere Schaltfläche länger gedrückt halten (Quick Record) --
das ist gleichbedeutend mit dem Doppelklick auf dem Pult.

Wird etwas programmiert, so kann man auch die Legende - als Text oder als Bild - eingeben. Ebenso kann man einen 
bereits programmierten Button länger anklicken, um dessen Legende einzugeben.

![Remote edit legend](/docs/images/Remote-Legend.png)

Beim Speichern auf eine bereits bestehende Palette kann man wählen zwischen Merge (Verschmelzen) und Replace (Ersetzen).

Beim Speichern von Cues wird der aktuell am Pult eingestellte Speichermodus (Record By Fixture, Record By Channel) verwendet.
