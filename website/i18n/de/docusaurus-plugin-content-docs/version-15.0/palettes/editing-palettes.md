---
id: editing-palettes
title: Editieren von Paletten
sidebar_label: Editieren von Paletten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Anzeigen und Ändern einer Palette

Die in einer Palette gespeicherten Werte lassen sich im Fenster **Palette
View** anzeigen. Hier werden alle Geräte aufgelistet, für die die Palette
Werte enthält. Mit einer Kontext-Schaltfläche lassen sich gespeicherte
&nbsp;**Zeiten (Times)** anzeigen.

Drücken Sie dazu <Keys.HardKey>Open/View</Keys.HardKey> und die anzuzeigende
Paletten-Schaltfläche. Daraufhin öffnet sich das Fenster **Palette View**.

![Palette View window](/docs/images/Palette-View-window.png)

Die angezeigten Attribute **All/IPCGBES** und Gerätetypen lassen sich 
mit den Schaltflächen links auswählen/filtern.

Um einen Wert zu ändern, klicken Sie im Fenster darauf. Die Menütasten
zeigen die verfügbaren Möglichkeiten; alternativ können Sie mit den
Zifferntasten einen Wert eingeben.

Es ist nicht möglich, Werte aus Paletten komplett zu löschen. Vielmehr
lassen sich Werte per [Off] deaktivieren und können später wieder 
aktiviert werden. Um einen Wert zu deaktivieren, klicken Sie diesen an 
und drücken im Menü auf <Keys.SoftKey>Off</Keys.SoftKey> oder die Taste <Keys.HardKey>Off</Keys.HardKey>. Um ihn wieder zu
aktivieren, wählen Sie den Wert an (zeigt jetzt [Off]) und drücken im 
Menü auf <Keys.SoftKey>On</Keys.SoftKey> oder wieder auf die Taste <Keys.HardKey>Off</Keys.HardKey> (die Taste <Keys.HardKey>Off</Keys.HardKey> 
schaltet den Wert ein oder aus).

-   Enthält die Palette Verweise auf andere Paletten, so lässt sich mit
    der Option <Keys.SoftKey>View/Hide Nested Palettes</Keys.SoftKey> einstellen, ob die
    tatsächlichen Werte oder aber die Legende der verknüpften Palette
    angezeigt wird.

-   Enthält die Palette Shapes, so öffnet die Schaltfläche \[View
    Shapes\] die Shape-Anzeige mit allen enthaltenen Shapes und ihren
    Parametern. Klickt man dort wiederum auf <Keys.SoftKey>View</Keys.SoftKey> ('Anzeigen'), so
    öffnet sich die Shape-Geräteansicht **Shape Fixture View**, in der 
	man die Parameter für einzelne Geräte ändern sowie mit **Add 
	Fixtures** weitere Geräte hinzufügen kann.

-   Enthält die Palette Pixelmapper-Effekte, so lassen sich diese mit <Keys.SoftKey>View Effects</Keys.SoftKey> öffnen, anzeigen und editieren.

## Ändern des Inhalts einer Palette

Um einen Eintrag einer Palette zu ändern, betätigen Sie die Taste <Keys.HardKey>Edit</Keys.HardKey> 
(bzw. <Keys.HardKey>Update Palette</Keys.HardKey> auf dem Pearl Expert und Tiger Touch mk1),
wählen die zu ändernde Palette (bei normalen Paletten werden
automatisch die enthaltenen Geräte angewählt; bei Shared Paletten das
erste Gerät des entsprechenden Typs), nehmen die gewünschten Änderungen
vor, und betätigen die Funktionstaste <Keys.SoftKey>Update Palette x</Keys.SoftKey>, um die
Änderungen zu übernehmen.

Mit der Taste <Keys.HardKey>Edit</Keys.HardKey> lässt sich ebenso die 
Bezeichnung und die Nummer der Palette ändern.

Ebenso können Sie eine Palette auch für nur einzelne oder wenige Geräte
aufrufen, modifizieren und die geänderten Werte wieder in die bestehende
Palette speichern. Das Pult zeigt dabei Optionen zum Ersetzen (**Replace**),
Kombinieren (**Merge**) oder **Quick Merge** der Paletten an. Wird **Merge**
gewählt, so bleiben nicht veränderte Werte unberührt, während geänderte
Werte zur Palette hinzugefügt werden. Quick Merge dagegen aktualisiert
nur die Attribute, die in der originalen Palette bereits enthalten
waren. *Wendet man dies auf eine reine Positionspalette an und hat z.B.
auch die Farb-Werte editiert, so werden diese bei Quick Merge nicht in
die Palette gespeichert*.

Wird eine Palette zum Updaten zweimal geklickt, so erfolgt ein **Quick
Merge**.

-   Wahlweise lässt sich die Option ["Always 
	Merge"](../system-settings/user-settings.md#prompt-replace) 
	(stets kombinieren) aktivieren, um die Rückfrage des Pultes zu 
	vermeiden; dies geht in den [Benutzereinstellungen](../system-settings/user-settings.md).
	Ebenso kann man einfach die gewählte Paletten-Schaltfläche ein 
	zweites Mal betätigen, um die Paletten zu kombinieren.

-   Weitere Geräte lassen sich zu bestehenden Paletten hinzufügen, ohne
    die bereits programmierten zu beeinflussen. *Sind etwa bereits
    Farbpaletten für Mac 600 vorhanden, so lassen sich Farben für Mac
    500 hinzufügen, ohne die bereits gespeicherten Werte zu ändern.*

-   Zum Löschen von Attributen aus Paletten dient die Taste <Keys.HardKey>Off</Keys.HardKey>
	sowie die Menütaste <Keys.SoftKey>Off</Keys.SoftKey>, siehe voriger Abschnitt, sowie die
	[<Keys.HardKey>Off</Keys.HardKey> -Funktion](../cues/editing-cues.md#deaktivieren-von-attributen-in-cues-mit-off).

-   Beim Ändern einer Palette bleibt der Inhalt des Programmierspeichers
    erhalten; nach dem Speichern der modifizierten Palette wird der
    Programmierspeicher in den Zustand vor dem Ändern der Palette
    zurückversetzt.

## Aktualisieren von verwendeten Paletten

Muss eine bereits verwendete Palette während der Show verändert werden,
wenn z.B. der Grün-Ton nicht exakt die gewünschte Farbe trifft, so lässt
sich das einfach per <Keys.HardKey>Update</Keys.HardKey> realisieren.

1.  Während der Cue gestartet ist, wählen Sie die betreffenden Geräte
    aus und stellen den gewünschten Wert ein.
2.  Drücken Sie <Keys.HardKey>Update</Keys.HardKey> (Pearl Expert: <Keys.HardKey>Record Cue</Keys.HardKey>, <Keys.SoftKey>Update</Keys.SoftKey>)
3.  Im Bildschirm werden die Paletten und Cues, die zum gestarteten Cue
    gehören und upgedated werden können, angezeigt.
4.  Wählen Sie mit den Menütasten, was upgedatet werden soll, und drücken 
	Sie nochmals <Keys.HardKey>Update</Keys.HardKey>.