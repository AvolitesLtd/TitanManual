---
id: creating-a-chase
title: Erstellen eines Chasers
sidebar_label: Erstellen eines Chasers
original_id: creating-a-chase
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Einen Chaser programmieren

<Video videoId="M0h5zV4S_OI" title="Recording a Chase" />

Zum Programmieren eines Chasers stellen Sie für jeden Schritt das
gewünschte Bild ein und speichern es.

Dazu können Sie alle Geräte und Dimmer einzeln einstellen, Sie können
per [Quick Build](#einen-chaser-mit-quick-build-erstellen) einen Chaser aus 
[Paletten](../palettes.md) und [Cues](../cues.md) zusammenstellen,
oder Sie benutzen die [<Keys.HardKey>Include</Keys.HardKey>](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)-Funktion, um die Einstellungen aus bereits programmierten Cues zu verwenden.

1. Drücken Sie die Taste <Keys.HardKey>Record</Keys.HardKey>, dann <Keys.SoftKey>Chase</Keys.SoftKey> (oder 2x <Keys.HardKey>Record</Keys.HardKey>). 
*(Ältere Pulte haben dafür die Taste <Keys.HardKey>Record Chase</Keys.HardKey>).*

2. Drücken Sie die <strong>Swop</strong>-Taste des Playbacks, auf das Sie den Chaser
speichern möchten *(ebenso lassen sich Chaser auf die Schaltflächen im
'Playbacks'-Fenster speichern)*.

3. Stellen Sie das gewünschte Bild für den ersten Schritt ein, entweder
manuell, oder unter Verwendung bestehender Cues mittels der 
[<Keys.HardKey>Include</Keys.HardKey>](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)-Funktion

4. Die Nummer des aktuellen Schrittes lässt sich mit <Keys.SoftKey>Step Number</Keys.SoftKey>
ändern.

5. Betätigen Sie die <strong>Swop</strong>-Taste des Playbacks, um den Inhalt des
Programmierspeichers als Schritt eines Chasers zu speichern. Alternativ
können Sie <Keys.SoftKey>Append Step</Keys.SoftKey> (Schritt anfügen) aus dem Menü verwenden.

6. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey> *(außer wenn Sie den Inhalt des
Programmierspeichers teilweise weiterverwenden wollen)*, und wiederholen
den Vorgang ab Schritt 3 zum Erstellen des nächsten Chase-Schrittes.

7. Drücken Sie <Keys.HardKey>Exit</Keys.HardKey> zum Beenden, wenn Sie alle gewünschten Schritte
gespeichert haben.

---

-   Mit <Keys.SoftKey>Record Mode</Keys.SoftKey> wählt man zwischen:

    - <Keys.SoftKey>Record By Fixture</Keys.SoftKey> (Speichern pro Gerät) - alle Attribute 
	aller angewählten oder veränderten Geräte werden gespeichert

    - <Keys.SoftKey>Record By Channel</Keys.SoftKey> (Speichern pro Kanal) - nur die geänderten 
	Attribute werden gespeichert

    - <Keys.SoftKey>Record Stage</Keys.SoftKey> (Bühne speichern) - alle Geräte mit
    Helligkeit > 0 werden gespeichert

    - &nbsp;<Keys.SoftKey>Quick Build</Keys.SoftKey> - [siehe nächster Abschnitt](#einen-chaser-mit-quick-build-erstellen)

-   Die aktuelle Schrittnummer sowie die Gesamtzahl der Schritte wird in
    der oberen Zeile des Displays angezeigt.

-   Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, wenn Sie mit dem Programmieren fertig sind;
    anderenfalls überlagert der Programmierspeicher den aufgerufenen
    Chaser, so dass nicht das gewünschte Ergebnis zu sehen ist.

-   In Chasern lassen sich auch [Shapes](../effects.md) verwenden. 
	Wird derselbe Shape in mehreren aufeinanderfolgenden Schritten 
	verwendet, so läuft er nahtlos durch; anderenfalls endet er mit 
	dem jeweiligen Schritt. *(‚Derselbe' Shape wird dann angenommen, 
	wenn nach dem vorherigen Schritt nicht <Keys.HardKey>Clear</Keys.HardKey> gedrückt wurde 
	und Größe, Geschwindigkeit und Phase des Shapes nicht verändert 
	wurden, oder wenn der Shape per [Include](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion) 
	aus dem vorherigen Schritt übernommen und nicht modifiziert wurde.)*

-   Dem Chaser kann eine Bezeichnung zugeordnet werden: drücken Sie dazu
    <Keys.SoftKey>Set Legend</Keys.SoftKey>, und dann die <strong>Swop</strong>-Taste des Chasers, um dann,
    wie auch bei Cues, die Bezeichnung einzugeben.

-   Chaser können aus einer unbegrenzten Anzahl von Schritten bestehen.

## Einen Chaser mit Quick Build erstellen

Mit Quick Build kann man, wie der Name schon vermuten lässt, sehr rasch
einen Chaser aus bestehenden Cues und Paletten erstellen.

Beginnen Sie wie oben beschrieben, einen Chaser zu programmieren, und
setzen Sie den <Keys.SoftKey>Record Mode</Keys.SoftKey> auf ‚Quick Build'.

Wählen Sie nun einen Cue oder eine [Palette](../palettes.md) aus, um einen Schritt zu
erstellen. Werden mehrere Cues/Paletten ausgewählt, so wird jeweils ein
neuer Schritt angefügt.

Um nur ausgewählte Geräte aus einer Palette oder einem Playback zu
verwenden, wählen Sie zunächst die Geräte aus, und klicken dann auf die
Palette/das Playback.
