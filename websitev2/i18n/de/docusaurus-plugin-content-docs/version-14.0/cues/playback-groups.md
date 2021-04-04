---
id: playback-groups
title: Playback Groups
sidebar_label: Playback Groups
original_id: playback-groups
---

Playbacks können in Gruppen zusammengefasst werden. Dies ist sinnvoll,
wenn von mehreren Playbacks immer nur eins als aktiv angezeigt werden
soll; wird ein anderes Playback in dieser Gruppe gestartet, werden alle
anderen deaktiviert.

Auf Pulten mit Motorfadern fahren dabei auch die entsprechenden Fader
auf 0; ansonsten gehen einfach die LEDs der Playbacks aus, und
Schaltflächen erscheinen als inaktiv.

Erstellen einer Playback-Gruppe
-------------------------------

Drücken Sie zweimal auf [\<View / Open\>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen das Fenster "Playback Groups".

![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace.png)

1.	Klicken Sie auf \{+\} (links unten). Damit wird eine neue Gruppe
erstellt und in der linken Spalte angezeigt.

2.	Klicken Sie auf die neu erstellte Gruppe links, also z.B. auf
\[Playback Group 1\].

3.	Klicken Sie unten rechts auf den \{Stift\}-Button, um die Gruppe zu
    editieren.

4.	Klicken Sie die Playbacks an, die Sie in dieser Gruppe
    zusammenfassen wollen. Ausgewählte Playbacks erscheinen im Playback
    Groups-Fenster bei ihrer Gruppe.

5.	Mit \<Exit\> können Sie das Menü verlassen, und die Playbacks
    sind zu einer Gruppe zusammengefasst.


![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace-2.png)

-   Ist eine Playback-Gruppe im Editiermodus, so wirken die
    Playback-Tasten als Umschalter für die Gruppenzugehörigkeit:
    klickt man einmal, so gehört das Playback dazu, klickt man ein
    zweites Mal (oder klickt auf den Playback-Button im Playback
    Groups-Fenster), so wird das Playback wieder aus der Gruppe
    entfernt.

-   Playback-Gruppen können auch mit der \<Group\>-Taste erstellt werden:
    \<Group\> drücken, dann im Menü \[Playback Groups\] sowie \[Record
    playback group\] wählen, die gewünschten Playbacks auswählen und
    \[Store\] drücken.

-   Playback-Gruppen können per \[Set Legend\] eine Bezeichnung und ein
    Halo bekommen.

-   Ist man nicht im Editiermodus, so können Playbacks auch über ihre
    Buttons im Playback Groups-Fenster gestartet/gestoppt werden.

> Wenn ein Playback zu einer Gruppe gehört, so wird dies mit einem Stern \* bei der Playback-Legende angezeigt.

Ändern der Zugehörigkeit zu Playback-Gruppen
--------------------------------------------

Öffnen Sie das Playback Groups-Fenster, wählen Sie links die zu
bearbeitende Gruppe und klicken Sie rechts unten auf den\{Stift\}.

Die Playbacks in der Gruppe werden hervorgehoben und können jeweils ab-
oder angewählt werden.

Ebenso kann über die entsprechenden Menütasten die Nummer und die
Legende (Bezeichnung) der Gruppe geändert werden.

-   Zum Löschen einer Playback-Gruppe drücken Sie die Taste \<Delete\>,
    wählen die zu löschende Gruppe aus und bestätigen dies mit
    \[Confirm\] oder \<Enter\>.

Optionen für Playback-Gruppen
-----------------------------

Für jede Gruppe lässt sich einstellen, wie genau die enthaltenen
Playbacks sich verhalten. Dazu wählt man im Fenster Playback Groups
links die gewünschte Gruppe und klickt rechts unten auf den Reiter
\[Options\].

![Playback groups options workspace](/docs/images/Playback-groups-options-workspace.png)

-   **Mutually Exclusive** schaltet den Exklusiv-Modus ein oder aus. Damit
    lässt sich diese Funktion vorübergehend deaktivieren, ohne die
    Gruppe löschen zu müssen.
-   **Kill Point** lässt sich einstellen, wann ein neu gestartetes
    Playback die anderen Playback in der Gruppe deaktiviert:\
    \[Fired\] - sobald das Playback gestartet ist\
    \[Fade Completed\] - sobald es gestartet und komplett eingefadet ist

-   **Kill Action** legt fest, ob bei Deaktivieren Release zum Tragen
    kommt oder nicht:\
    \[Follow Playback\] - es wird nach den Release-Einstellungen
    jedes Playbacks vorgegangen\
    \[Kill\] - Playbacks werden immer sofort abgeschaltet (gekillt)\
    \[Release\] - Playbacks werden immer nach der unten vorgegebenen
    Releasemaske und -zeit released\
    \[Release HTP\] - HTP-Kanäle werden released, alle anderen gekillt
  
-   Mit 'Release Mask' und 'Release Time' lässt sich für das
    gegenseitige Releasen eine eigene Maske und Zeit einstellen. Steht
    dies auf \[Playback\], so kommen die Einstellungen jedes einzelnen
    Playbacks zum Tragen.

Anzeigeoptionen für das Playback Groups-Fenster
-----------------------------------------------

Mit dem Fensteroptions-Menü (\{Zahnrad\}-Button in der Titelleiste des
Fensters) lassen sich drei verschiedene Anzeigemodi wählen:

\[View Mode All\] – zwei Spalten: links die Playback-Gruppen, rechts
jeweils die zugehörigen Playbacks jeder Gruppe

![Playback groups display mode 1](/docs/images/Playback-groups-display-mode-1.png)
 
\[View Mode Single\] – zwei Spalten: links die Playback-Gruppen, aber
rechts nur die Playbacks in der gerade angewählten Gruppe. Das erlaubt
eine bessere Übersicht bei Gruppen mit vielen Playbacks.

![Playback groups display mode 2](/docs/images/Playback-groups-display-mode-2.png)
 
\[View Mode Playbacks Only\] – eine Spalte, es werden nur die Playbacks
pro Gruppe angezeigt. Die Reiter \[Playbacks\], \[Options\] und der
Editier-Button stehen nicht zur Verfügung.

![Playback groups display mode 3](/docs/images/Playback-groups-display-mode-3.png)

