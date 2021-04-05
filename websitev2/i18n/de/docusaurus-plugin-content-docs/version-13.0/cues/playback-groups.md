---
id: playback-groups
title: Playback Groups
sidebar_label: Playback Groups
original_id: playback-groups
---

import Keys from '@site/src/components/key.ts';

Playbacks können in Gruppen zusammengefasst werden. Dies ist sinnvoll,
wenn von mehreren Playbacks immer nur eins als aktiv angezeigt werden
soll; wird ein anderes Playback in dieser Gruppe gestartet, werden alle
anderen deaktiviert.

Auf Pulten mit Motorfadern fahren dabei auch die entsprechenden Fader
auf 0; ansonsten gehen einfach die LEDs der Playbacks aus, und
Schaltflächen erscheinen als inaktiv.

Erstellen einer Playback-Gruppe
-------------------------------

Öffnen Sie das Fenster 'Playback Groups' im Menü \[Open Workspace
Window\] (Fenster öffnen).

![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace.png)

1.	Klicken Sie auf <Keys.SoftKey> + </Keys.SoftKey> (links unten). Damit wird eine neue Gruppe
erstellt und in der linken Spalte angezeigt.

2.	Klicken Sie auf die neu erstellte Gruppe links, also z.B. auf
<Keys.SoftKey>Playback Group 1</Keys.SoftKey>.

3.	Klicken Sie unten rechts auf den Stift-Button, um die Gruppe zu
    editieren.

4.	Klicken Sie die Playbacks an, die Sie in dieser Gruppe
    zusammenfassen wollen. Ausgewählte Playbacks erscheinen im Playback
    Groups-Fenster bei ihrer Gruppe.

5.	Mit <Keys.HardKey>Exit</Keys.HardKey> können Sie das Menü verlassen, und die Playbacks
    sind zu einer Gruppe zusammengefasst.


![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace-2.png)

-   Ist eine Playback-Gruppe im Editiermodus, so wirken die
    Playback-Tasten als Umschalter für die Gruppenzugehörigkeit:
    klickt man einmal, so gehört das Playback dazu, klickt man ein
    zweites Mal (oder klickt auf den Playback-Button im Playback
    Groups-Fenster), so wird das Playback wieder aus der Gruppe
    entfernt.

-   Playback-Gruppen können auch mit der <Keys.HardKey>Group</Keys.HardKey>-Taste erstellt werden:
    <Keys.HardKey>Group</Keys.HardKey> drücken, dann im Menü <Keys.SoftKey>Playback Groups</Keys.SoftKey> sowie \[Record
    playback group\] wählen, die gewünschten Playbacks auswählen und
    <Keys.SoftKey>Store</Keys.SoftKey> drücken.

-   Playback-Gruppen können per <Keys.SoftKey>Set Legend</Keys.SoftKey> eine Bezeichnung und ein
    Halo bekommen.

-   Ist man nicht im Editiermodus, so können Playbacks auch über ihre
    Buttons im Playback Groups-Fenster gestartet/gestoppt werden.

> Wenn ein Playback zu einer Gruppe gehört, so wird dies mit einem Stern\* bei der Playback-Legende angezeigt.

Ändern der Zugehörigkeit zu Playback-Gruppen
--------------------------------------------

Öffnen Sie das Playback Groups-Fenster, wählen Sie links die zu
bearbeitende Gruppe und klicken Sie rechts unten auf den Edit-Button
(Stift-Symbol).

Die Playbacks in der Gruppe werden hervorgehoben und können jeweils ab-
oder angewählt werden.

Ebenso kann über die entsprechenden Menütasten die Nummer und die
Legende (Bezeichnung) der Gruppe geändert werden.

-   Zum Löschen einer Playback-Gruppe drücken Sie die Taste <Keys.HardKey>Delete</Keys.HardKey>,
    wählen die zu löschende Gruppe aus und bestätigen dies mit
    <Keys.SoftKey>Confirm</Keys.SoftKey> oder <Keys.HardKey>Enter</Keys.HardKey>.

Optionen für Playback-Gruppen
-----------------------------

Für jede Gruppe lässt sich einstellen, wie genau die enthaltenen
Playbacks sich verhalten. Dazu wählt man im Fenster Playback Groups
links die gewünschte Gruppe und klickt rechts unten auf den Reiter
<Keys.SoftKey>Options</Keys.SoftKey>.

![Playback groups options workspace](/docs/images/Playback-groups-options-workspace.png)

-   **Mutually Exclusive** schaltet den Exklusiv-Modus ein oder aus. Damit
    lässt sich diese Funktion vorübergehend deaktivieren, ohne die
    Gruppe löschen zu müssen.
-   **Kill Point** lässt sich einstellen, wann ein neu gestartetes
    Playback die anderen Playback in der Gruppe deaktiviert:\
    <Keys.SoftKey>Fired</Keys.SoftKey> - sobald das Playback gestartet ist\
    <Keys.SoftKey>Fade Completed</Keys.SoftKey> - sobald es gestartet und komplett eingefadet ist

-   **Kill Action** legt fest, ob bei Deaktivieren Release zum Tragen
    kommt oder nicht:\
    <Keys.SoftKey>Follow Playback</Keys.SoftKey> - es wird nach den Release-Einstellungen
    jedes Playbacks vorgegangen\
    <Keys.SoftKey>Kill</Keys.SoftKey> - Playbacks werden immer sofort abgeschaltet (gekillt)\
    <Keys.SoftKey>Release</Keys.SoftKey> - Playbacks werden immer nach der unten vorgegebenen
    Releasemaske und -zeit released\
    <Keys.SoftKey>Release HTP</Keys.SoftKey> - HTP-Kanäle werden released, alle anderen gekillt
  
-   Mit 'Release Mask' und 'Release Time' lässt sich für das
    gegenseitige Releasen eine eigene Maske und Zeit einstellen. Steht
    dies auf <Keys.SoftKey>Playback</Keys.SoftKey>, so kommen die Einstellungen jedes einzelnen
    Playbacks zum Tragen.

Anzeigeoptionen für das Playback Groups-Fenster
-----------------------------------------------

Mit dem Fensteroptions-Menü (Zahnrad-Button in der Titelleiste des
Fensters) lassen sich drei verschiedene Anzeigemodi wählen:

<Keys.SoftKey>View Mode All</Keys.SoftKey> – zwei Spalten: links die Playback-Gruppen, rechts
jeweils die zugehörigen Playbacks jeder Gruppe

![Playback groups display mode 1](/docs/images/Playback-groups-display-mode-1.png)
 
<Keys.SoftKey>View Mode Single</Keys.SoftKey> – zwei Spalten: links die Playback-Gruppen, aber
rechts nur die Playbacks in der gerade angewählten Gruppe. Das erlaubt
eine bessere Übersicht bei Gruppen mit vielen Playbacks.

![Playback groups display mode 2](/docs/images/Playback-groups-display-mode-2.png)
 
<Keys.SoftKey>View Mode Playbacks Only</Keys.SoftKey> – eine Spalte, es werden nur die Playbacks
pro Gruppe angezeigt. Die Reiter <Keys.SoftKey>Playbacks</Keys.SoftKey>, <Keys.SoftKey>Options</Keys.SoftKey> und der
Editier-Button stehen nicht zur Verfügung.

![Playback groups display mode 3](/docs/images/Playback-groups-display-mode-3.png)

