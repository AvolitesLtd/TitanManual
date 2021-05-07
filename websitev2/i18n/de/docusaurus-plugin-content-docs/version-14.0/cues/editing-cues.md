---
id: editing-cues
title: Editing Cues
sidebar_label: Editing Cues
original_id: editing-cues
---

import Keys from '@site/src/components/key.ts';

Editieren eines Cues durch Verschmelzen (Merge)
-----------------------------------------------

Jeder Cue lässt sich ganz einfach ändern, indem man die Änderungen
vornimmt, und die neuen Einstellungen mit in den gleichen Cue speichert.

1. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den Programmierspeicher zu leeren.

2. Rufen Sie den zu ändernden Cue auf, um die Änderungen sehen zu können;\
   *deaktivieren Sie dazu andere Cues*.

3. Wählen Sie die zu ändernden Geräte, und nehmen Sie die gewünschten
Änderungen vor.

4. Drücken Sie <Keys.HardKey>Record</Keys.HardKey>

5. Drücken Sie die <strong>Auswahltaste</strong> des zu ändernden Cues.

6. Drücken Sie <Keys.SoftKey>Merge</Keys.SoftKey> *(dabei wird der aktuell zu ändernde Cue am
Bildschirm hervorgehoben)*.

7. Das Pult fügt daraufhin die vorgenommenen Änderungen in den Cue ein;
unveränderte Werte bleiben erhalten.

---

-   Um den Cue komplett zu überschreiben, wählen Sie bei Schritt 6 die
    Option <Keys.SoftKey>Replace</Keys.SoftKey> (Ersetzen). Bitte berücksichtigen: damit werden
    Geräte, die nicht aktuell verändert wurden (und damit auch nicht im
    Programmierspeicher sind), nicht in dem Cue gespeichert!

-   Um die Arbeit zu beschleunigen, können Sie die Option 'Always Merge'
    (immer Verschmelzen) aktivieren. Diese befindet sich auf dem 
	[Tab 'Handles'](../system-settings/user-settings.md#prompt-replace) in den 
    [Benutzereinstellungen](../system-settings/user-settings.md) (drücken Sie 
	die Taste <Keys.HardKey>AVO</Keys.HardKey> und wählen im Menü <Keys.SoftKey>User Settings</Keys.SoftKey>).

-   Sie können auch die <strong>Auswahltaste</strong> ein zweites Mal betätigen, um die
    Option <strong>Merge</strong> anzuwenden (schneller als die Schaltfläche <Keys.SoftKey>Merge</Keys.SoftKey>)

Aktualisieren gespeicherter Werte und Paletten
----------------------------------------------

Muss ein Cue oder eine im Cue verwendete Palette während der Show
verändert werden *(wenn z.B. der Grün-Ton nicht exakt die gewünschte
Farbe trifft)*, so lässt sich das einfach per <Keys.HardKey>Update</Keys.HardKey> realisieren; dabei
kann entweder der Cue oder die enthaltene Palette aktualisiert werden.

Um den Cue zu aktualisieren, nehmen Sie die erforderlichen Änderungen
vor und drücken zweimal <Keys.HardKey>Update</Keys.HardKey>.

1. Während der Cue gestartet ist, wählen Sie die betreffenden Geräte
aus und stellen den gewünschten Wert ein *(z.B. das richtige Grün)*.

2. Drücken Sie <Keys.HardKey>Update</Keys.HardKey> *(auf älteren Pulten: <Keys.HardKey>Record Cue</Keys.HardKey>, dann
<Keys.SoftKey>Update</Keys.SoftKey>)*.

3. Drücken Sie <Keys.HardKey>Enter</Keys.HardKey>, um sofort die neuen Werte im Cue zu
speichern.

---

Alternativ werden die [Paletten](../palettes.md) und Cues, die upgedated werden
können, im Bildschirm angezeigt; wählen Sie die gewünschten aus.

In diesem Fall bestätigen Sie die Auswahl mit <Keys.HardKey>Enter</Keys.HardKey>.

---

-   Sie können auch die Paletten durch zweimaliges Betätigen
    der jeweiligen Schaltfläche updaten.

-   Soll der vormalige Wert einer Palette mit einem manuellen Wert
    überschrieben werden, so drücken Sie <Keys.HardKey>Update</Keys.HardKey>-<Keys.HardKey>Update</Keys.HardKey>. Soll
    hingegen die Palette aktualisiert werden, so nutzen Sie die
    Menütasten oder drücken die <Keys.HardKey>Palette</Keys.HardKey>-Taste.

-   Wird ein Attribut durch eine andere Palette überschrieben, wird
    stattdessen die neue Palette gespeichert.

Anzeige der Cues: Playback View und Cue View
--------------------------------------------

Zum Anzeigen der Zeiteinstellungen des Cues klicken Sie auf das Display
oberhalb der Regler, oder Sie drücken <Keys.HardKey>View / Open</Keys.HardKey> und dann
die <strong>Auswahltaste</strong> des Cues. Im Bildschirm erscheinen daraufhin Details
zu Verzögerungs- und Überblendzeit, Geräteüberblenden, und Einstellung
der Reglerkurve. Jeder Wert lässt sich durch Anklicken zum Ändern
auswählen.

Ist in dem Cue ein [Shape oder Effekt](../effects.md) gespeichert, so gibt es in der
entsprechenden Spalte extra einen Button, nach dessen Anklicken man den
Effekt editieren kann.

In der Spalte <strong>Effect Speed</strong> lässt sich ein Speed-Faktor für den Effekt
in diesem Cue eintragen.

Klickt man Links auf den Button <strong>Times</strong>, so werden einige Spalten
ausgeblendet, so dass man nur noch die Timing-Werte angezeigt bekommt.

![Playback View for cue](/docs/images/Playback-View-for-cue.png)

### Filtern -- Nur einzelne Spalten anzeigen

Mittels der Kontext-Funktion <Keys.SoftKey>Edit Columns</Keys.SoftKey> lässt sich noch genauer
einstellen, welche Spalten in der Playback-Ansicht angezeigt werden. Hat
man seine Auswahl getroffen, lässt sich diese links als Filter
abspeichern.

1. Klicken Sie auf <Keys.SoftKey>Edit Columns</Keys.SoftKey> im Kontext-Bereich.

2. Mit den Menütasten aktivieren/deaktivieren Sie die gewünschten
Spalten.

3. Drücken Sie auf die Taste <Keys.HardKey>Record</Keys.HardKey>. Daraufhin wird am unteren Rand
des Playback-View-Fensters ein <Keys.SoftKey>Add</Keys.SoftKey>-Button eingeblendet.

4. Klicken Sie auf <Keys.SoftKey>Add</Keys.SoftKey>, um einen Filter für Ihre Ansicht zu
speichern.

5. Sie können Ihren Filter wie gewohnt mittels Set Legend umbenennen
sowie mit einem Halo versehen.

6. Zum Löschen Ihrer Filter drücken Sie <Keys.HardKey>Delete</Keys.HardKey> und klicken auf den
zu löschenden Filter-Button.

### Cue View

Betätigen Sie die Schaltfläche <Keys.SoftKey>View</Keys.SoftKey> am rechten Zeilenende oder die
<Keys.SoftKey>View Cue</Keys.SoftKey>-Kontext-Schaltfläche, so erscheint das Fenster 'Cue View'
mit sämtlichen Details der Einstellungen zu allen einzelnen Geräten in
dem gewählten Cue.

Das Fenster 'Cue View' bietet vier unterschiedliche Anzeigen: <strong>Levels</strong>
(Werte), <strong>Palettes</strong> (Paletten), <strong>Times</strong> (Zeiten) und <strong>Shapes</strong>. Die
einzelnen Anzeigen lassen sich mit den Schaltflächen links der
Menütasten umschalten.

-   Die Anzeige <strong>Levels</strong> zeigt die Werte der einzelnen Attribute für
    jedes Gerät.

-   Die Anzeige <strong>Palettes</strong> zeigt die in dem Cue verwendeten Paletten
    mit ihren Namen. Ist statt einer Palette ein absoluter Wert
    verwendet worden, so wird dieser angezeigt. Auch hier lassen sich
    die Werte ändern oder löschen.

-   Die Anzeige <strong>Times</strong> zeigt die Zeiteinstellungen für die einzelnen
    Attribute der Geräte an. Werden globale Zeiten verwendet, so werden
    in dieser Anzeige keine Zeiten dargestellt.

-   In der Anzeige <strong>Shapes</strong> wird dargestellt, welche Shapes auf
    einzelnen Attributen zur Anwendung kommen.

![Cue View](/docs/images/Cue-View-2.png)

Mit den Buttons All/IPCGBES oben links können die anzuzeigenden
<strong>Attribute</strong> ausgewählt werden.

Mit den Gerätetyp-Buttons links unterhalb der Attribut-Buttons kann man
die anzuzeigenden <strong>Geräte</strong> auswählen.

### Editieren von Werten im Cue View

Es lassen sich die Werte einzelner oder mehrerer Kanäle <strong>ändern</strong> oder
<strong>löschen</strong>:

1.  Klicken Sie den entsprechenden Wert an, oder fahren Sie über den
	gewünschten Bereich: *die ausgewählten Werte werden in blau
	hervorgehoben*.

2.  Auf den Menütasten erscheinen daraufhin die für das gewählte
	Attribut verfügbaren Optionen, ferner lässt sich mit den Zifferntasten
	direkt ein numerischer Wert eingeben und mit <Keys.HardKey>Enter</Keys.HardKey> bestätigen.

3.  Einzelne Attribute lassen sich mit der Taste <Keys.HardKey>Off</Keys.HardKey> sowie den Menütasten
	<Keys.SoftKey>Off</Keys.SoftKey> und <Keys.SoftKey>On</Keys.SoftKey> temporär deaktivieren und wieder aktivieren, 
	ohne sie komplett aus dem Cue zu löschen.

4. 	Um ein Gerät komplett aus einem Cue zu entfernen, wählen Sie dieses aus
	und klicken auf <Keys.SoftKey>Remove Fixtures</Keys.SoftKey>.

Sämtliche Änderungen werden sofort wirksam.

Cues wiederverwenden - die 'Include'-Funktion
---------------------------------------------

Mit der 'Include'-Funktion lassen sich ausgewählte Teile eines Cues
zurück in den Programmierspeicher laden (normalerweise werden nur
manuelle Änderungen in den Programmierspeicher geschrieben). Diese
lassen sich dann etwa zum Anlegen eines neuen Cues verwenden. Dies ist
sinnvoll z.B. beim Anlegen eines Cues, der einem bereits vorhandenen
ähnlich ist, oder um einen neuen Cue aus verschiedenen Teilen mehrerer
anderer Cues zusammenzustellen. Auch zum Editieren von Shapes in Cues
ist Include erforderlich,

Es gibt zwei Arbeitsweisen: 'Quick' (Schnell) Include, und 'Advanced'
(mit weitergehenden Optionen) Include. <strong>Quick Include</strong> lädt einfach den
kompletten Cue, während bei <strong>Advanced Include</strong> die zu ladenden Geräte
und Attribute einzeln ausgewählt werden können. Hat man etwa einen Cue
mit Positions-, Farb- und Goboinformationen für 8 Geräte, so lassen sich
mit dieser Funktion z.B. nur die Farben von vier Geräten in den
Programmierspeicher laden. Daraufhin kann man etwa die
Positions-Information aus einem anderen Cue laden, und so nach und nach
einen neuen Cue aus mehreren bestehenden zusammenstellen.

Wird 'Include' auf einen [Chaser](../chases.md) oder eine [Cueliste](../cue-lists.md)
angewendet, so zeigt das Display eine Liste der darin enthaltenen 
einzelnen Cues, um den gewünschten auswählen zu können (mit Encoder A, 
oder ganz einfach durch Anklicken). Ebenso kann man die Nummer des 
gewünschten Schrittes mit den Zifferntasten eingeben.

1.  Drücken Sie <Keys.HardKey>Include</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Quick Include</Keys.SoftKey> oder <Keys.SoftKey>Advanced Include</Keys.SoftKey>, um den Modus
	zu wechseln.

3. 	Drücken Sie die <strong>Auswahltaste</strong> des Cues, den Sie in den Speicher
	laden möchten. Haben Sie den Modus <strong>Quick Include</strong> gewählt, so wird
	damit der Cue in den Speicher geladen, und der Vorgang ist abgeschlossen.

4. 	Befinden Sie sich im Modus <strong>Advanced Include</strong>, so werden alle in dem Cue
	enthaltenen Geräte ausgewählt. Werden nicht alle gewünscht, so wählen
	Sie die übrigen nun ab. Die ausgewählten Geräte werden auf den
	Geräte-Schaltflächen und -Tasten hervorgehoben.

5. 	Verwenden Sie <Keys.SoftKey>Set Mask</Keys.SoftKey> oder die Attribut-Auswahltasten, um die
	zu ladenden Attribute auszuwählen *(standardmäßig sind alle ausgewählt;
	Taste <Keys.HardKey>C</Keys.HardKey> wählt alle ab, Taste <Keys.HardKey>D</Keys.HardKey> wählt alle wieder an)*. Taste
	<Keys.HardKey>E</Keys.HardKey> aktiviert oder deaktiviert das Laden von Shapes aus dem Cue.

6. 	Drücken Sie <Keys.HardKey>Enter</Keys.HardKey>. Die ausgewählten Attribute der ausgewählten
	Geräte werden in den Programmierspeicher geladen.

7. 	Wiederholen Sie die Schritte 2 bis 6 zum Includen weiterer Attribute
	der gleichen Geräte oder ab Schritt 1 für weitere Geräte.

>   Im Modus <strong>Quick Include</strong> lässt sich eine Maske der zu wählenden
    Attribute erstellen; betätigen Sie dazu eine oder mehrere
    Attributtasten vor der Anwahl des gewünschten Cues.

Deaktivieren von Attributen in Cues mit "Off"
---------------------------------------------

[](https://youtu.be/p7Ffz4e4tws?t=20 "Off")

Mit der <Keys.HardKey>Off</Keys.HardKey>-Taste lässt sich ein Attribut in einem Cue deaktivieren,
als ob es nie in diesem gespeichert gewesen wäre - es kann später wieder
aktiviert werden.

Angenommen, Sie haben einen Cue programmiert, in dem etwa ein paar
Scanner auf einer bestimmten Position mit grün als Farbe abgespeichert
sind. Wollen Sie nun die Farbe aus diesem Cue deaktivieren, so dass die
Lampen die Einstellung aus dem vorher abgerufenen Cue zeigen, so setzen
Sie die Farbwerte auf 'Off' und speichern den Cue wie gewohnt. Die 
"Off"-Funktion lässt sich ebenso nutzen, um ganze Geräte in einem Cue 
zu deaktivieren, indem man sämtliche Attribute auf "Off" setzt.

Ein Attribut auf <strong>"Off"</strong> zu setzen ist nicht gleichzusetzen mit dem Setzen
des Attributes auf "0", denn das würde einen Wert für das Attribut
bedeuten, der beim Aufruf des Cue abgerufen würde. "Off" ist vielmehr
gleichbedeutend mit dem Deaktivieren des Attributs in diesem Cue, so dass 
das Attribut beim Aufruf des Cues unbeeinflusst bleibt.

1. Drücken Sie <Keys.HardKey>Off</Keys.HardKey>, dann <Keys.SoftKey>Off Playback Values</Keys.SoftKey>, gefolgt von der
	<strong>Auswahltaste</strong> des zu ändernden Cues.

2. Alle Geräte in dem Cue sind nun ausgewählt. Wählen sie ggf. Geräte
ab, die Sie nicht Off schalten wollen.

3. In der Attributmaske sind alle Attribute angewählt. Wählen Sie ggf.
per <Keys.SoftKey>Set Mask</Keys.SoftKey> einzelne Attribute ab, die nicht Off geschaltet werden sollen.

4. Klicken Sie auf <Keys.SoftKey>Off</Keys.SoftKey>.

---

Werte lassen sich auch unter Verwendung der <Keys.HardKey>Include</Keys.HardKey>-Funktion auf Off
setzen:

1. Verwenden Sie <strong>Quick Include</strong> (siehe [voriger
Abschnitt](#cues-wiederverwenden---die-include-funktion)), um den Cue in den Programmierspeicher zu laden.

2. Betätigen Sie die <Keys.HardKey>Off</Keys.HardKey>-Taste, um das 'Off'-Menü anzuzeigen.

3. Alle Geräte in dem Cue werden ausgewählt. Wollen Sie nicht alle
verändern, so entfernen Sie die Geräte einzeln aus der Auswahl.

4. Wählen Sie mit den Attributbank-Buttons die Off zu schaltenden
Attributebänke und drücken Sie <Keys.SoftKey>Attributes Off</Keys.SoftKey>. Außerdem kann man mit
den Menütasten auch einzelne Attribute Off schalten, z.B. \[Dimmer
Off\].

5. Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann die <strong>Auswahltaste</strong> des Cues, und schließlich 
<Keys.SoftKey>Replace</Keys.SoftKey> zum Speichern der Änderungen.

---

-   Um alle Attribute aller angewählten Geräte Off zu schalten, drücken
    Sie <Keys.HardKey>Off</Keys.HardKey> gefolgt von <Keys.SoftKey>Selected Fixtures Off</Keys.SoftKey>.

-   "Off"-Einstellungen lassen sich auch ohne vorheriges Includen in einen
    Cue übernehmen (<strong>Merge</strong>).

-   Ebenso lassen sich mit der Off-Funktion einzelne Attribute aus
    gespeicherten Paletten entfernen.

-   Eine weitere Möglichkeit zum Entfernen von Attributen ist das
 [Cue View-Fenster](#cue-view).

-   Mittels <strong>Off</strong> deaktivierte Attribute lassen sich wieder aktivieren.
    Stellen Sie dazu das Attribut auf <strong>On</strong>, und <strong>verschmelzen (mergen)</strong> Sie
    das in den bestehenden Cue.
