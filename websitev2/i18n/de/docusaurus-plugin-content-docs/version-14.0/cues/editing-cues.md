---
id: editing-cues
title: Editing Cues
sidebar_label: Editing Cues
original_id: editing-cues
---

Editieren eines Cues durch Verschmelzen (Merge)
-----------------------------------------------

Jeder Cue lässt sich ganz einfach ändern, indem man die Änderungen
vornimmt, und die neuen Einstellungen mit in den gleichen Cue speichert.

1. Drücken Sie \<Clear\>, um den Programmierspeicher zu leeren.

2. Rufen Sie den zu ändernden Cue auf, um die Änderungen sehen zu können;\
   *deaktivieren Sie dazu andere Cues*.

3. Wählen Sie die zu ändernden Geräte, und nehmen Sie die gewünschten
Änderungen vor.

4. Drücken Sie \<Record\>

5. Drücken Sie die **Auswahltaste** des zu ändernden Cues.

6. Drücken Sie \[Merge\] *(dabei wird der aktuell zu ändernde Cue am
Bildschirm hervorgehoben)*.

7. Das Pult fügt daraufhin die vorgenommenen Änderungen in den Cue ein;
unveränderte Werte bleiben erhalten.

---

-   Um den Cue komplett zu überschreiben, wählen Sie bei Schritt 6 die
    Option \[Replace\] (Ersetzen). Bitte berücksichtigen: damit werden
    Geräte, die nicht aktuell verändert wurden (und damit auch nicht im
    Programmierspeicher sind), nicht in dem Cue gespeichert!

-   Um die Arbeit zu beschleunigen, können Sie die Option 'Always Merge'
    (immer Verschmelzen) aktivieren. Diese befindet sich auf dem 
	[Tab 'Handles'](../system-settings/user-settings.md#prompt-replace) in den 
    [Benutzereinstellungen](../system-settings/user-settings.md) (drücken Sie 
	die Taste \<AVO\> und wählen im Menü \[User Settings\]).

-   Sie können auch die **Auswahltaste** ein zweites Mal betätigen, um die
    Option **Merge** anzuwenden (schneller als die Schaltfläche \[Merge\])

Aktualisieren gespeicherter Werte und Paletten
----------------------------------------------

Muss ein Cue oder eine im Cue verwendete Palette während der Show
verändert werden *(wenn z.B. der Grün-Ton nicht exakt die gewünschte
Farbe trifft)*, so lässt sich das einfach per \<Update\> realisieren; dabei
kann entweder der Cue oder die enthaltene Palette aktualisiert werden.

Um den Cue zu aktualisieren, nehmen Sie die erforderlichen Änderungen
vor und drücken zweimal \<Update\>.

1. Während der Cue gestartet ist, wählen Sie die betreffenden Geräte
aus und stellen den gewünschten Wert ein *(z.B. das richtige Grün)*.

2. Drücken Sie \<Update\> *(auf älteren Pulten: \<Record Cue\>, dann
\[Update\])*.

3. Drücken Sie \<Enter\>, um sofort die neuen Werte im Cue zu
speichern.

---

Alternativ werden die [Paletten](../palettes.md) und Cues, die upgedated werden
können, im Bildschirm angezeigt; wählen Sie die gewünschten aus.

In diesem Fall bestätigen Sie die Auswahl mit \<Enter\>.

---

-   Sie können auch die Paletten durch zweimaliges Betätigen
    der jeweiligen Schaltfläche updaten.

-   Soll der vormalige Wert einer Palette mit einem manuellen Wert
    überschrieben werden, so drücken Sie \<Update\>-\<Update\>. Soll
    hingegen die Palette aktualisiert werden, so nutzen Sie die
    Menütasten oder drücken die \<Palette\>-Taste.

-   Wird ein Attribut durch eine andere Palette überschrieben, wird
    stattdessen die neue Palette gespeichert.

Anzeige der Cues: Playback View und Cue View
--------------------------------------------

Zum Anzeigen der Zeiteinstellungen des Cues klicken Sie auf das Display
oberhalb der Regler, oder Sie drücken \<View / Open\> und dann
die **Auswahltaste** des Cues. Im Bildschirm erscheinen daraufhin Details
zu Verzögerungs- und Überblendzeit, Geräteüberblenden, und Einstellung
der Reglerkurve. Jeder Wert lässt sich durch Anklicken zum Ändern
auswählen.

Ist in dem Cue ein [Shape oder Effekt](../effects.md) gespeichert, so gibt es in der
entsprechenden Spalte extra einen Button, nach dessen Anklicken man den
Effekt editieren kann.

In der Spalte **Effect Speed** lässt sich ein Speed-Faktor für den Effekt
in diesem Cue eintragen.

Klickt man Links auf den Button **Times**, so werden einige Spalten
ausgeblendet, so dass man nur noch die Timing-Werte angezeigt bekommt.

![Playback View for cue](/docs/images/Playback-View-for-cue.png)

### Filtern -- Nur einzelne Spalten anzeigen

Mittels der Kontext-Funktion \[Edit Columns\] lässt sich noch genauer
einstellen, welche Spalten in der Playback-Ansicht angezeigt werden. Hat
man seine Auswahl getroffen, lässt sich diese links als Filter
abspeichern.

1. Klicken Sie auf \[Edit Columns\] im Kontext-Bereich.

2. Mit den Menütasten aktivieren/deaktivieren Sie die gewünschten
Spalten.

3. Drücken Sie auf die Taste \<Record\>. Daraufhin wird am unteren Rand
des Playback-View-Fensters ein \[Add\]-Button eingeblendet.

4. Klicken Sie auf \[Add\], um einen Filter für Ihre Ansicht zu
speichern.

5. Sie können Ihren Filter wie gewohnt mittels Set Legend umbenennen
sowie mit einem Halo versehen.

6. Zum Löschen Ihrer Filter drücken Sie \<Delete\> und klicken auf den
zu löschenden Filter-Button.

### Cue View

Betätigen Sie die Schaltfläche \[View\] am rechten Zeilenende oder die
\[View Cue\]-Kontext-Schaltfläche, so erscheint das Fenster 'Cue View'
mit sämtlichen Details der Einstellungen zu allen einzelnen Geräten in
dem gewählten Cue.

Das Fenster 'Cue View' bietet vier unterschiedliche Anzeigen: **Levels**
(Werte), **Palettes** (Paletten), **Times** (Zeiten) und **Shapes**. Die
einzelnen Anzeigen lassen sich mit den Schaltflächen links der
Menütasten umschalten.

-   Die Anzeige **Levels** zeigt die Werte der einzelnen Attribute für
    jedes Gerät.

-   Die Anzeige **Palettes** zeigt die in dem Cue verwendeten Paletten
    mit ihren Namen. Ist statt einer Palette ein absoluter Wert
    verwendet worden, so wird dieser angezeigt. Auch hier lassen sich
    die Werte ändern oder löschen.

-   Die Anzeige **Times** zeigt die Zeiteinstellungen für die einzelnen
    Attribute der Geräte an. Werden globale Zeiten verwendet, so werden
    in dieser Anzeige keine Zeiten dargestellt.

-   In der Anzeige **Shapes** wird dargestellt, welche Shapes auf
    einzelnen Attributen zur Anwendung kommen.

![Cue View](/docs/images/Cue-View-2.png)

Mit den Buttons All/IPCGBES oben links können die anzuzeigenden
**Attribute** ausgewählt werden.

Mit den Gerätetyp-Buttons links unterhalb der Attribut-Buttons kann man
die anzuzeigenden **Geräte** auswählen.

### Editieren von Werten im Cue View

Es lassen sich die Werte einzelner oder mehrerer Kanäle **ändern** oder
**löschen**:

1.  Klicken Sie den entsprechenden Wert an, oder fahren Sie über den
	gewünschten Bereich: *die ausgewählten Werte werden in blau
	hervorgehoben*.

2.  Auf den Menütasten erscheinen daraufhin die für das gewählte
	Attribut verfügbaren Optionen, ferner lässt sich mit den Zifferntasten
	direkt ein numerischer Wert eingeben und mit \<Enter\> bestätigen.

3.  Einzelne Attribute lassen sich mit der Taste \<Off\> sowie den Menütasten
	\[Off\] und \[On\] temporär deaktivieren und wieder aktivieren, 
	ohne sie komplett aus dem Cue zu löschen.

4. 	Um ein Gerät komplett aus einem Cue zu entfernen, wählen Sie dieses aus
	und klicken auf \[Remove Fixtures\].

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
(mit weitergehenden Optionen) Include. **Quick Include** lädt einfach den
kompletten Cue, während bei **Advanced Include** die zu ladenden Geräte
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

1.  Drücken Sie \<Include\>.

2.  Drücken Sie \[Quick Include\] oder \[Advanced Include\], um den Modus
	zu wechseln.

3. 	Drücken Sie die **Auswahltaste** des Cues, den Sie in den Speicher
	laden möchten. Haben Sie den Modus **Quick Include** gewählt, so wird
	damit der Cue in den Speicher geladen, und der Vorgang ist abgeschlossen.

4. 	Befinden Sie sich im Modus **Advanced Include**, so werden alle in dem Cue
	enthaltenen Geräte ausgewählt. Werden nicht alle gewünscht, so wählen
	Sie die übrigen nun ab. Die ausgewählten Geräte werden auf den
	Geräte-Schaltflächen und -Tasten hervorgehoben.

5. 	Verwenden Sie \[Set Mask\] oder die Attribut-Auswahltasten, um die
	zu ladenden Attribute auszuwählen *(standardmäßig sind alle ausgewählt;
	Taste \<C\> wählt alle ab, Taste \<D\> wählt alle wieder an)*. Taste
	\<E\> aktiviert oder deaktiviert das Laden von Shapes aus dem Cue.

6. 	Drücken Sie \<Enter\>. Die ausgewählten Attribute der ausgewählten
	Geräte werden in den Programmierspeicher geladen.

7. 	Wiederholen Sie die Schritte 2 bis 6 zum Includen weiterer Attribute
	der gleichen Geräte oder ab Schritt 1 für weitere Geräte.

>   Im Modus **Quick Include** lässt sich eine Maske der zu wählenden
    Attribute erstellen; betätigen Sie dazu eine oder mehrere
    Attributtasten vor der Anwahl des gewünschten Cues.

Deaktivieren von Attributen in Cues mit "Off"
---------------------------------------------

[](https://youtu.be/p7Ffz4e4tws?t=20 "Off")

Mit der \<Off\>-Taste lässt sich ein Attribut in einem Cue deaktivieren,
als ob es nie in diesem gespeichert gewesen wäre - es kann später wieder
aktiviert werden.

Angenommen, Sie haben einen Cue programmiert, in dem etwa ein paar
Scanner auf einer bestimmten Position mit grün als Farbe abgespeichert
sind. Wollen Sie nun die Farbe aus diesem Cue deaktivieren, so dass die
Lampen die Einstellung aus dem vorher abgerufenen Cue zeigen, so setzen
Sie die Farbwerte auf 'Off' und speichern den Cue wie gewohnt. Die 
"Off"-Funktion lässt sich ebenso nutzen, um ganze Geräte in einem Cue 
zu deaktivieren, indem man sämtliche Attribute auf "Off" setzt.

Ein Attribut auf **"Off"** zu setzen ist nicht gleichzusetzen mit dem Setzen
des Attributes auf "0", denn das würde einen Wert für das Attribut
bedeuten, der beim Aufruf des Cue abgerufen würde. "Off" ist vielmehr
gleichbedeutend mit dem Deaktivieren des Attributs in diesem Cue, so dass 
das Attribut beim Aufruf des Cues unbeeinflusst bleibt.

1. Drücken Sie \<Off\>, dann \[Off Playback Values\], gefolgt von der
	**Auswahltaste** des zu ändernden Cues.

2. Alle Geräte in dem Cue sind nun ausgewählt. Wählen sie ggf. Geräte
ab, die Sie nicht Off schalten wollen.

3. In der Attributmaske sind alle Attribute angewählt. Wählen Sie ggf.
per \[Set Mask\] einzelne Attribute ab, die nicht Off geschaltet werden sollen.

4. Klicken Sie auf \[Off\].

---

Werte lassen sich auch unter Verwendung der \<Include\>-Funktion auf Off
setzen:

1. Verwenden Sie **Quick Include** (siehe [voriger
Abschnitt](#cues-wiederverwenden---die-include-funktion)), um den Cue in den Programmierspeicher zu laden.

2. Betätigen Sie die \<Off\>-Taste, um das 'Off'-Menü anzuzeigen.

3. Alle Geräte in dem Cue werden ausgewählt. Wollen Sie nicht alle
verändern, so entfernen Sie die Geräte einzeln aus der Auswahl.

4. Wählen Sie mit den Attributbank-Buttons die Off zu schaltenden
Attributebänke und drücken Sie \[Attributes Off\]. Außerdem kann man mit
den Menütasten auch einzelne Attribute Off schalten, z.B. \[Dimmer
Off\].

5. Drücken Sie \<Record\>, dann die **Auswahltaste** des Cues, und schließlich 
\[Replace\] zum Speichern der Änderungen.

---

-   Um alle Attribute aller angewählten Geräte Off zu schalten, drücken
    Sie \<Off\> gefolgt von \[Selected Fixtures Off\].

-   "Off"-Einstellungen lassen sich auch ohne vorheriges Includen in einen
    Cue übernehmen (**Merge**).

-   Ebenso lassen sich mit der Off-Funktion einzelne Attribute aus
    gespeicherten Paletten entfernen.

-   Eine weitere Möglichkeit zum Entfernen von Attributen ist das
 [Cue View-Fenster](#cue-view).

-   Mittels **Off** deaktivierte Attribute lassen sich wieder aktivieren.
    Stellen Sie dazu das Attribut auf **On**, und **verschmelzen (mergen)** Sie
    das in den bestehenden Cue.
