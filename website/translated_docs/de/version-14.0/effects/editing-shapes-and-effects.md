---
id: version-14.0-editing-shapes-and-effects
title: Editing Shapes and Effects
sidebar_label: Editing Shapes and Effects
original_id: editing-shapes-and-effects
---

Ändern eines gerade laufenden Shapes
------------------------------------

Geschwindigkeit, Größe und Aufteilung (Spread) eines gerade laufenden
Shapes lassen sich ändern, indem man auf \<Connect\>, gefolgt von
\<Shape\> drückt (\<Shape\> blinkt, sofern Shapes gerade aktiv sind).
Die Menütasten zeigen die gerade laufenden Shapes an sowie, aus welchem
Cue oder ob sie aus dem Programmer kommen.

>   Verfügt das Pult nicht über eine \<Shape\>-Taste, so erreichen Sie
    diese Funktion über \[Shapes and Effects\], \[Shape Generator\], 
    \[Edit\].

![Shape Generator - Selecting a Shape to Edit](/docs/images/Shape-Generator-Selecting-a-Shape-to-Edit.png)

Zunächst sind alle aktiven Shapes angewählt. Ändern Sie dies ggf. und
drücken Sie \<Enter\| oder nochmals \<Shape\>, um die Shapes mit der
Steuerung per Rad zu verbinden. Sind mehr als drei Parameter zu steuern,
so können Sie mit Menütaste G umschalten.

-   Stammen die Shapes aus einem Cue, so werden Änderungen direkt in den
    Cue übertragen (genauso wie z.B. [Geschwindigkeit und Überblendung einstellen](../chases/chase-playback.md#geschwindigkeit-und-überblendung-einstellen)).

-   Um währenddessen ein anderes Attribut zu steuern, betätigen Sie die
    entsprechende Attribut-Taste/Button. Um wieder zur Shape-Steuerung
    zurückzukehren, klicken Sie wieder \<Shape\> oder \[FX\].

Ändern gespeicherter Shapes und Effekte
---------------------------------------

Shapes und Pixelmapper-Effekte, die bereits in Cues gespeichert sind,
lassen sich über das Fenster 'Cue View' aufrufen und editieren.

![Playback View for Cue with Shape](/docs/images/Playback-View-for-Cue-with-Shape.png)

Um die Parameter eines Shapes/Effektes anzuzeigen oder zu editieren,
klicken Sie auf \[View Shape\] oder \[View Pixel Effect\]. Ist mehr als
ein Shape/Effekt in dem Cue gespeichert, wird auf der Schaltfläche
\[\...\] angezeigt. Nach dem Anklicken öffnet sich ein entsprechendes
Fenster (**Shape View** oder **Pixelmapper Effect View**), in dem alle
enthaltenen Shapes/Effekte aufgeführt sind. Dort können Sie die
gewünschten Änderungen vornehmen.

In den Fenstern 'Shape View' oder 'Effect View' lässt sich ferner mit
\[View Fixtures\] eine Liste der enthaltenen Geräte anzeigen, die in dem
Shape/Effekt enthalten sind.

Ändern von Shapes mit Include
-----------------------------

Es lassen sich nur Shapes verändern, die sich im Programmierspeicher
befinden - wird ein Shape einfach mit einem Cue gestartet, so erscheint
er nicht in der Liste zu ändernder Shapes. Um einen Shape in einem Cue zu
ändern, laden Sie also zunächst den Cue [per Include in den
Programmierspeicher](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)).

Wurde ein Cue mittels Include geladen und sind mehrere Shapes
gleichzeitig im Programmierspeicher, so lässt sich der mit den Encodern zu
steuernde mit Taste \[Edit\] auswählen.

1. Wenn das Shape-Menü noch nicht aktiv ist, so öffnen Sie es mit \[Shapes and
Effects\], dann \[Shape Generator\] aus dem Hauptmenü.

2. Drücken Sie \[Edit\].

3. Drücken Sie \[Select shape\].

4. Bei den Menütasten erscheint eine Liste der laufenden Shapes.

5. Betätigen Sie eine Taste, um den jeweiligen Shape auszuwählen. Der
ausgewählte Shape wird hervorgehoben.

6. Drücken Sie \<Enter\>, um zum Shape Generator-Menü zurückzukehren.

>   Läuft ein Shape mehrfach auf verschiedenen Geräten, so lässt sich
    jede laufende Kopie einzeln steuern.

Shapes neu synchronisieren
--------------------------

Mit der Option \[Restart Shapes\] im Shape-Editor werden alle gerade
laufenden Shapes neu gestartet. Das ist sinnvoll, wenn mehrere Shapes
miteinander synchronisiert werden sollen.

Ändern der Gerätereihenfolge eines Shapes
-----------------------------------------

Die Art und Weise, wie ein Shape arbeitet, wird durch die Reihenfolge
der Auswahl der Geräte bestimmt. Diese lässt sich später mit der
Funktion \[Fixture Order\] im Menü \[Edit\] ändern. Die aktuelle
Gerätereihenfolge wird auf den Geräte-Schaltflächen mit großen grünen
Zahlen angezeigt. Siehe
[Gerätereihenfolge und -anordnung](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen)
für weitere Details.

Shapes mit Gruppen verknüpft
----------------------------

Shapes und Keyframe-Shapes, die unter Verwendung von Gruppen erstellt
wurden, verwenden die [Gerätereihenfolge der Gruppe](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) und enthalten eine
Verknüpfung mit der/den jeweiligen Gruppe(n). Damit werden Änderungen
etwa am Layout bzw. der Geräte-Reihenfolge sofort in den betreffenden
Shapes wirksam und müssen nicht manuell übernommen werden.

Um Geräte zu einer Gruppe hinzuzufügen, ohne die Verknüpfung des Shapes
aufzuheben, wählen Sie die Geräte aus, drücken \<Record\>, gefolgt von
der Gruppenschaltfläche/Taste, und betätigen diese nochmals oder wählen
\[Merge\] mit den Menütasten. Ebenso kann der Inhalt einer Gruppe (die
enthaltenen Geräte) unter Erhaltung der Verknüpfungen zu Shapes und
Effekten ersetzt werden, indem man die Geräte auswählt, \<Record\> und
die Gruppenschaltfläche betätigt und dann \[Replace\] wählt. Geräte
lassen sich schließlich auch durch das Ein- und Ausschalten der
Geräteschaltflächen im Menü 'Edit Groups' zu Gruppen hinzufügen oder
daraus entfernen: \<Group\> \[Edit Groups\] \[Gruppen-Schaltfläche\].

Soll die Reihenfolge für einen bestimmten Shape geändert werden, ohne
dies in der Gruppe zu tun und damit ggf. andere Shapes zu verändern, so
lösen Sie die Gruppenverknüpfung mit \[Break Group References\] im Menü
\[Edit\] \[Edit Fixtures/Groups\] \[Fixture Order\].

Siehe [Gerätereihenfolge und -anordnung](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) für Details zum Editieren von Reihenfolge und Layout.

Entfernen oder Hinzufügen von Geräten
-------------------------------------

Mit der Funktion \[Add/Remove Fixtures\] aus dem Menü \[Edit\] lassen
Geräte aus einem Shape entfernen oder weitere Geräte hinzufügen; ebenso
können Sie dazu die entsprechende Kontextfunktion aus dem Menü „Shapes
Fixture View" verwenden. Sämtliche bereits im Shape vorhandenen Geräte
werden als Vorauswahl angeboten, und können dann einzeln ab- oder
angewählt werden.

Ist ein Shape mit einer Gruppe verknüpft (s.o.), so wird durch das
Entfernen von Fixtures aus dem Shape die Verknüpfung gelöst.
Entsprechend wird eine Meldung ausgegeben, und man muss das mit \[Remove
Fixtures\] bestätigen.

Einen Shape umkehren
--------------------

Die Richtung eines Shapes lässt sich umkehren; dazu drückt man im
'Shape'-Menü auf \[Reverse Selected Fixtures\]. Dadurch wird der Shape
für die ausgewählten Geräte umgekehrt; damit lassen sich Abläufe gezielt
nur für einzelne - oder aber für alle - Geräte umkehren.

Löschen von Shapes
------------------

Ein laufender Shape lässt sich ganz einfach löschen: dazu drücken Sie
\[Delete\] aus dem 'Shape'-Menü, und wählen den zu löschenden Shape mit
der entsprechenden Menütaste.