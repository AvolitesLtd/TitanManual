---
id: copying-moving-linking-and-deleting
title: Copying, Moving, Linking and Deleting a Cue
sidebar_label: Copying, Moving, Linking and Deleting
original_id: copying-moving-linking-and-deleting
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Kopieren oder verschieben eines Cues

Mittels der Tasten <Keys.HardKey>Copy</Keys.HardKey> und <Keys.HardKey>Move</Keys.HardKey> (bzw. <Keys.HardKey>Copy/Move/Link</Keys.HardKey>) lässt
sich eine <strong>Kopie</strong> eines Cues anfertigen, ein Cue auf einen anderen
Speicherplatz <strong>verschieben</strong>, oder ein Speicherplatz als <strong>Verknüpfung</strong> zu
einem bestehenden Cue anlegen. Kopieren, Verschieben und Verknüpfen
lässt sich auch für mehrere Speicherplätze (nicht nur Cues, sondern auch
[Chaser](../chases.md) or [Cuelisten](../cue-lists.md)) in einem Arbeitsgang
erreichen.

Verschieben ist sinnvoll, um das Pult 'aufzuräumen'. Verknüpfungen
bieten sich an, wenn ein Cue aus Ablaufgründen auf mehreren Seiten
erscheinen soll; Verknüpfungen enthalten die gleichen Informationen wie
der originale Cue, können aber individuelle [Zeiten](cue-timing.md) und [Optionen](playback-options.md) zugewiesen bekommen.

1. Drücken Sie die Taste <Keys.HardKey>Copy</Keys.HardKey> bzw. <Keys.HardKey>Copy/Move/Link</Keys.HardKey>.

2. Wählen Sie <Keys.SoftKey>Copy</Keys.SoftKey>(Kopieren), <Keys.SoftKey>Move</Keys.SoftKey>(Verschieben) oder
<Keys.SoftKey>Link</Keys.SoftKey>(Verknüpfen). Wiederholtes Betätigen der Taste wechselt ebenfalls 
durch diese Optionen. Manche Pulte haben eine Taste <Keys.HardKey>Move</Keys.HardKey>, mit der man 
direkt zum Verschieben gelangt.

3. Drücken Sie die <strong>Swop-Taste</strong> des Cues, den Sie bearbeiten möchten.
Sie können eine Reihe von Cues auswählen, indem Sie die Taste der ersten
gedrückt halten und die Taste der letzten dazu betätigen. Ebenso können
mit <Keys.HardKey>Thro</Keys.HardKey> und <Keys.HardKey>And</Keys.HardKey> mehrere Cues auf einmal ausgewählt werden (ggf.
<Keys.HardKey>And</Keys.HardKey> gedrückt halten).

4. Drücken Sie eine unbelegte <strong>Swop-Taste</strong>, zu der der Cue
kopiert/bewegt/verknüpft werden soll.

---

-   Die Taste <Keys.HardKey>Menu Latch</Keys.HardKey> fixiert das Menü 'Copy/Move/Link', so dass
    man bei wiederholtem Kopieren/Verschieben die Taste <Keys.HardKey>Copy</Keys.HardKey> nicht
    wiederholt betätigen muss. Zum Freigeben des Menüs drücken Sie
    nochmals <Keys.HardKey>Menu Latch</Keys.HardKey>, zum Verlassen drücken Sie <Keys.HardKey>Exit</Keys.HardKey>.

-   <Keys.SoftKey>Retain Layout</Keys.SoftKey>(Layout erhalten) oder \[Bunch
    Up\](Zusammen­fassen) werden verwendet beim Kopieren einer Gruppe
    von Cues, die auch unbelegte Speicherplätze enthält: diese lassen
    sich entweder weiter als unbelegt behalten, oder die belegten
    Speicherplätze werden aufeinanderfolgend zusammengefasst.

-   Im Modus <strong>Copy</strong> (Kopieren) kann die Option <Keys.SoftKey>Copy Legends</Keys.SoftKey>
    (Bezeichnungen kopieren) geändert werden in <Keys.SoftKey>Don't copy legends</Keys.SoftKey>
    (Bezeichnungen nicht kopieren), so dass die kopierten Cues
    Standardbezeichner bekommen.

-   Im Modus 'Move' (Verschieben) dient die Option \[Swap Items if
    Required\] (Tausch wenn erforderlich) dazu, bestehende Cues, die dem
    Verschiebe-Vorgang im Wege wären, automatisch zu verschieben. Dies
    bietet sich insbesondere beim ‚Aufräumen' nahezu voller Seiten an.

## Einen Cue löschen

Um einen Cue zu löschen:

1. Drücken Sie die <Keys.HardKey>Delete</Keys.HardKey>-Taste.

2. Betätigen Sie die <strong>Swop-Taste</strong> des zu löschenden Cues.

3. Drücken Sie die <strong>Swop-Taste</strong> zur Bestätigung nochmals (oder
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