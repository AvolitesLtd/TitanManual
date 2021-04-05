---
id: copying-moving-linking-and-deleting
title: Copying, Moving, Linking and Deleting a Cue
sidebar_label: Copying, Moving, Linking and Deleting
original_id: copying-moving-linking-and-deleting
---

import Keys from '@site/src/components/key.ts';

Kopieren eines Cues
-------------------

Mittels der Taste <Keys.HardKey>Copy</Keys.HardKey> lässt sich eine **Kopie** eines Cues anfertigen
oder ein Speicherplatz als **Verknüpfung** zu einem bestehenden Cue anlegen. 
Es lassen sich auch mehrere Speicherplätze (nicht nur Cues, sondern auch
[Chaser](../chases.md) or [Cuelisten](../cue-lists.md)) in einem Arbeitsgang
kopieren.

Verknüpfungen bieten sich an, wenn ein Cue aus Ablaufgründen auf mehreren Seiten
erscheinen soll; Verknüpfungen enthalten die gleichen Informationen wie
der originale Cue, können aber individuelle [Zeiten](cue-timing.md) und 
[Optionen](playback-options.md) zugewiesen bekommen.

1. Drücken Sie die Taste <Keys.HardKey>Copy</Keys.HardKey>.

2. Zum Anlegen einer Verknüpfung drücken Sie nochmals auf <Keys.HardKey>Copy</Keys.HardKey> oder wählen
die Menütaste <Keys.SoftKey>Link</Keys.SoftKey>.

3. Drücken Sie die **Auswahltaste** des Cues, den Sie kopieren möchten.
Sie können eine Reihe von Cues auswählen, indem Sie die Taste des ersten
gedrückt halten und die Taste des letzten dazu betätigen. Ebenso können
mit <Keys.HardKey>Thro</Keys.HardKey> und <Keys.HardKey>And</Keys.HardKey> mehrere Cues auf einmal ausgewählt werden (ggf.
<Keys.HardKey>And</Keys.HardKey> gedrückt halten).

4. Drücken Sie eine unbelegte **Auswahltaste**, zu der der Cue
kopiert/verknüpft werden soll; werden mehrere Playbacks kopiert, so werden 
diese ab dort auf die folgenden freien Plätze eingefügt.

---

-   Die Taste <Keys.HardKey>Menu Latch</Keys.HardKey> fixiert das Menü 'Copy', so dass
    man bei wiederholtem Kopieren die Taste <Keys.HardKey>Copy</Keys.HardKey> nicht
    erneut betätigen muss. Zum Freigeben des Menüs drücken Sie
    nochmals <Keys.HardKey>Menu Latch</Keys.HardKey>, zum Verlassen drücken Sie <Keys.HardKey>Exit</Keys.HardKey>.

-   <Keys.SoftKey>Retain Layout</Keys.SoftKey>(Layout erhalten) oder \[Bunch
    Up\](Zusammen­fassen) werden verwendet beim Kopieren einer Gruppe
    von Cues, die auch unbelegte Speicherplätze enthält: diese lassen
    sich entweder weiter als unbelegt behalten, oder die belegten
    Speicherplätze werden aufeinanderfolgend zusammengefasst.

-   Die Option <Keys.SoftKey>Copy Legends</Keys.SoftKey> (Bezeichnungen kopieren) kann geändert 
	werden in <Keys.SoftKey>Don't copy legends</Keys.SoftKey> (Bezeichnungen nicht kopieren), so 
	dass die kopierten Cues Standardbezeichner bekommen.

Verschieben eines Cues
----------------------

Mit der Taste <Keys.HardKey>Move</Keys.HardKey> lassen sich Playbacks (Cues, Chaser, Cuelisten) 
auf andere Tasten und Fader verschieben. **Move/Verschieben** ist sinnvoll, 
um das Pult 'aufzuräumen', Playbacks zu ordnen oder auf andere Seiten zu 
gruppieren.

Wie beim Kopieren lassen sich auch mehrere Playbacks auf einmal verschieben,
indem Sie die Taste des ersten gedrückt halten und die Taste des letzten 
dazu betätigen, oder sie wählen wieder mit <Keys.HardKey>Thro</Keys.HardKey> und <Keys.HardKey>And</Keys.HardKey> mehrere Cues 
auf einmal aus. Und mit <Keys.HardKey>Menu Latch</Keys.HardKey> kann auch das **Move**-Menü fixiert werden.

-   Einige Pulte haben eventuell keine Move-Taste. In diesem Fall halten
	Sie die Taste <Keys.HardKey>Avo</Keys.HardKey> gedrückt und drücken dazu <Keys.HardKey>Copy</Keys.HardKey>, um die **Move**-Funktion 
	zu aktivieren.

-   Im Modus 'Move' (Verschieben) dient die Option \[Swap Items if
    Required\] (Tausch wenn erforderlich) dazu, bestehende Cues, die dem
    Verschiebe-Vorgang im Wege wären, automatisch zu verschieben. Dies
    bietet sich insbesondere beim ‚Aufräumen' nahezu voller Seiten an.

Einen Cue löschen
-----------------

Um einen Cue zu löschen:

1. Drücken Sie die <Keys.HardKey>Delete</Keys.HardKey>-Taste.

2. Betätigen Sie die **Swop-Taste** des zu löschenden Cues.

3. Drücken Sie die **Swop-Taste** zur Bestätigung nochmals (oder
bestätigen Sie mit <Keys.HardKey>Enter</Keys.HardKey>).

---

-   Statt einen Cue zu löschen, kann man diesen auch mit der Option
    <Keys.SoftKey>Unassign</Keys.SoftKey> im Delete-Menü 'unbelegen' (unassign). Damit wird der
    Cue von der jeweiligen Schaltfläche/Fader/Taste entfernt, bleibt
    aber im [Show-Verzeichnis](../titan-basics/show-library.md) erhalten und kann später wieder verwendet werden.

-   Verwenden Sie die Taste <Keys.HardKey>Menu Latch</Keys.HardKey>, um den Löschmodus aktiv zu
    lassen, so können Sie mittels Schritt 2 und 3 weitere Cues löschen,
    ohne jeweils die <Keys.HardKey>Delete</Keys.HardKey>-Taste betätigen zu müssen. Zum Freigeben
    des Menüs drücken Sie nochmals <Keys.HardKey>Latch Menu</Keys.HardKey>, zum Verlassen drücken
    Sie <Keys.HardKey>Exit</Keys.HardKey>.