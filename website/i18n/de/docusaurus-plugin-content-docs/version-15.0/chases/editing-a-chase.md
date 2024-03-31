---
id: editing-a-chase
title: Editieren eines Chasers
sidebar_label: Editieren eines Chasers
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Einen Chaser zum Editieren öffnen

Neue Schritte lassen sich wie gewohnt mit <Keys.HardKey>Record</Keys.HardKey> und der
**Swop**-Taste des Playbacks am Ende des Chasers anfügen.

Zur Anzeige einer Übersicht der vorhandenen Schritte dient die 'Playback
View'-Ansicht (berühren Sie das Display oberhalb des Reglers, oder
drücken Sie <Keys.HardKey>Open/View</Keys.HardKey> und die entsprechende
&nbsp;**Swop**-Taste). Um eine bestimmte Zeitvorgabe zu ändern, klicken Sie
auf den entsprechenden Wert (oder auf einen ganzen Bereich) auf dem Touchscreen.
und benutzen die Funktionstasten für die gewünschte Änderung.

![Playback View of a chase](/docs/images/Playback-View-for-chase.png)

## Ändern eines Chasers mit der Unfold-Funktion

Eine weitere Möglichkeit zum Editieren eines Chasers bietet die
Unfold-Funktion. Die Taste <Keys.HardKey>Unfold</Keys.HardKey> (‚Aufklappen') legt jeden
einzelnen Schritt eines Chasers auf einen der Regler, so dass sich jeder
Schritt einzeln aufrufen und editieren lässt, als wäre er ein separater
Cue. Ebenso lassen sich damit einzelne Zeitvorgaben für jeden Schritt
machen.

1. Drücken Sie die <Keys.HardKey>Unfold</Keys.HardKey>-Taste, und dann die **Swop**-Taste 
des zu bearbeitenden Chasers.
2. Die ersten zehn oder 15 Chaserschritte (ja nachdem wieviel Playbackfader das Pult hat)
werden daraufhin auf die Regler abgebildet.
3. Aktivieren Sie einen Regler, um den jeweiligen Schritt zu sehen
*(dabei werden die Überblendzeiten wie programmiert abgerufen)*.
4. Die verschiedenen Optionen des 'Unfold'-Menüs werden weiter unten
beschrieben.
5. Drücken Sie nochmals <Keys.HardKey>Unfold</Keys.HardKey>, um den Modus wieder zu beenden.

---

-   Um einen Schritt zu **ändern**, drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den
    Programmierspeicher zu löschen, aktivieren den Schritt mit dem
    entsprechenden Regler, machen die gewünschten Änderungen, drücken <Keys.SoftKey>Record Step</Keys.SoftKey>, und anschließend die **Swop**-Taste des
    entsprechenden Schrittes.

-   Zum **Einfügen** eines Schrittes zwischen zwei vorhandene Schritte
    stellen Sie zunächst das gewünschte Bild ein, drücken dann <Keys.SoftKey>Insert Step</Keys.SoftKey> und geben mit den Ziffern die gewünschte Schrittnummer ein
    (etwa 1.5, wenn der Schritt zwischen den Schritten 1 und 2 eingefügt
    werden soll). Sollte ein Schritt mit dieser Nummer bereits vorhanden
    sein, so wird dieser mit den neuen Einstellungen gemischt;
    anderenfalls wird ein neuer Schritt eingefügt.

-   Zum **Anhängen** eines neuen Schritts am Ende des Chasers stellen Sie
    das gewünschte Bild ein, drücken <Keys.SoftKey>Insert Step</Keys.SoftKey>, und anschließend
    die **Swop**-Taste des nächsten freien Schrittes.

-   Um die aktuellen Werte im Programmierspeicher in den aktuellen
    Schritt zu integrieren (**mergen**), klicken Sie zweimal auf <Keys.SoftKey>Record Step</Keys.SoftKey>.

-   Zum **Ändern** einzelner Zeiteinstellungen drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey>,
    dann die entsprechende **Swop**-Taste (oder tippen die Schrittnummer
    ein), und stellen die gewünschten Zeiten ein. Details dazu finden
    sich im Abschnitt [Zeiten bei Chasern](chase-timing.md).

-   Enthält der Chaser mehr Schritte als es Fader gibt, so lässt sich
    mit den Funktionstasten <Keys.SoftKey>Previous Page</Keys.SoftKey> (zurück) und <Keys.SoftKey>Next Page</Keys.SoftKey>
    (vor) zwischen den Seiten umschalten.

## Laden eines Chase-Schritts mit Include

Einzelne Chaser-Schritte lassen sich ebenfalls per Include-Funktion in
den Programmer laden. Dazu drücken Sie <Keys.HardKey>Include</Keys.HardKey>, wählen den Chaser,
tippen die gewünschte Schritt-Nummer ein und drücken <Keys.SoftKey>Include Cue</Keys.SoftKey>.

Damit kann man z.B. einen Chase-Schritt in einem anderen Chaser
wiederverwenden oder als Einzelcue speichern. Ebenso sinnvoll ist das,
wenn man z.B. Shapes oder Effekte in diesem Schritt editieren will und
das nicht in der Playback-Ansicht macht. Siehe 
[Playback View window](#einen-chaser-zum-editieren-öffnen).