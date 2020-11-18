---
id: version-14.0-creating-a-chase
title: Creating a Chase
sidebar_label: Creating a Chase
original_id: creating-a-chase
---

Einen Chaser programmieren
--------------------------

[](https://youtu.be/M0h5zV4S_OI?t=20 "Recording a Chase")

Zum Programmieren eines Chasers stellen Sie für jeden Schritt das
gewünschte Bild ein und speichern es.

Dazu können Sie alle Geräte und Dimmer einzeln einstellen, Sie können
per [Quick Build](#einen-chaser-mit-quick-build-erstellen) einen Chaser aus 
[Paletten](../palettes.md) und [Cues](../cues.md) zusammenstellen,
oder Sie benutzen die [\<Include\>](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)-Funktion, um die Einstellungen aus bereits programmierten Cues zu verwenden.

1. Drücken Sie die Taste \<Record\>, dann \[Chase\] (oder 2x \<Record\>). 
*(Ältere Pulte haben dafür die Taste \<Record Chase\>).*

2. Drücken Sie die **Swop**-Taste des Playbacks, auf das Sie den Chaser
speichern möchten *(ebenso lassen sich Chaser auf die Schaltflächen im
'Playbacks'-Fenster speichern)*.

3. Stellen Sie das gewünschte Bild für den ersten Schritt ein, entweder
manuell, oder unter Verwendung bestehender Cues mittels der 
[\<Include\>](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)-Funktion

4. Die Nummer des aktuellen Schrittes lässt sich mit \[Step Number\]
ändern.

5. Betätigen Sie die **Swop**-Taste des Playbacks, um den Inhalt des
Programmierspeichers als Schritt eines Chasers zu speichern. Alternativ
können Sie \[Append Step\] (Schritt anfügen) aus dem Menü verwenden.

6. Drücken Sie \<Clear\> *(außer wenn Sie den Inhalt des
Programmierspeichers teilweise weiterverwenden wollen)*, und wiederholen
den Vorgang ab Schritt 3 zum Erstellen des nächsten Chase-Schrittes.

7. Drücken Sie \<Exit\> zum Beenden, wenn Sie alle gewünschten Schritte
gespeichert haben.

---

-   Mit \[Record Mode\] wählt man zwischen:

    - \[Record By Fixture\] (Speichern pro Gerät) - alle Attribute 
	aller angewählten oder veränderten Geräte werden gespeichert

    - \[Record By Channel\] (Speichern pro Kanal) - nur die geänderten 
	Attribute werden gespeichert

    - \[Record Stage\] (Bühne speichern) - alle Geräte mit
    Helligkeit > 0 werden gespeichert

    - \[Quick Build\] - [siehe nächster Abschnitt](#einen-chaser-mit-quick-build-erstellen)

-   Die aktuelle Schrittnummer sowie die Gesamtzahl der Schritte wird in
    der oberen Zeile des Displays angezeigt.

-   Drücken Sie \<Clear\>, wenn Sie mit dem Programmieren fertig sind;
    anderenfalls überlagert der Programmierspeicher den aufgerufenen
    Chaser, so dass nicht das gewünschte Ergebnis zu sehen ist.

-   In Chasern lassen sich auch [Shapes](../effects.md) verwenden. 
	Wird derselbe Shape in mehreren aufeinanderfolgenden Schritten 
	verwendet, so läuft er nahtlos durch; anderenfalls endet er mit 
	dem jeweiligen Schritt. *(‚Derselbe' Shape wird dann angenommen, 
	wenn nach dem vorherigen Schritt nicht \<Clear\> gedrückt wurde 
	und Größe, Geschwindigkeit und Phase des Shapes nicht verändert 
	wurden, oder wenn der Shape per [Include](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion) 
	aus dem vorherigen Schritt übernommen und nicht modifiziert wurde.)*

-   Dem Chaser kann eine Bezeichnung zugeordnet werden: drücken Sie dazu
    \[Set Legend\], und dann die **Swop**-Taste des Chasers, um dann,
    wie auch bei Cues, die Bezeichnung einzugeben.

-   Chaser können aus einer unbegrenzten Anzahl von Schritten bestehen.

Einen Chaser mit Quick Build erstellen
--------------------------------------

Mit Quick Build kann man, wie der Name schon vermuten lässt, sehr rasch
einen Chaser aus bestehenden Cues und Paletten erstellen.

Beginnen Sie wie oben beschrieben, einen Chaser zu programmieren, und
setzen Sie den \[Record Mode\] auf ‚Quick Build'.

Wählen Sie nun einen Cue oder eine [Palette](../palettes.md) aus, um einen Schritt zu
erstellen. Werden mehrere Cues/Paletten ausgewählt, so wird jeweils ein
neuer Schritt angefügt.

Um nur ausgewählte Geräte aus einer Palette oder einem Playback zu
verwenden, wählen Sie zunächst die Geräte aus, und klicken dann auf die
Palette/das Playback.
