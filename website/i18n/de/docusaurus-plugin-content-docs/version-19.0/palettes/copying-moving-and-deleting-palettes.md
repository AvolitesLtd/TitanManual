---
id: copying-moving-and-deleting-palettes
title: Paletten kopieren, verschieben oder löschen
sidebar_label: Paletten kopieren, verschieben oder löschen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Kopieren oder verschieben einer Palette

Mit der Taste <Keys.HardKey>Copy</Keys.HardKey> bzw. <Keys.HardKey>Move</Keys.HardKey> lässt sich eine Palette auf eine
andere Schaltfläche verschieben oder kopieren. Ebenso lassen sich
mehrere Paletten gleichzeitig verschieben oder kopieren. Verknüpfungen
(Links) lassen sich dagegen für Paletten nicht anlegen.

Das Verschieben von Paletten ist sinnvoll, um die Bedienoberfläche
übersichtlich zu halten.

1. Drücken Sie die Taste <Keys.HardKey>Copy</Keys.HardKey> bzw. <Keys.HardKey>Move</Keys.HardKey> (auf Pulten ohne 
eine **Move**-Taste dient <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Copy</Keys.HardKey> zum Verschieben).
2. Betätigen Sie die Schaltfläche der zu kopierenden/verschiebenden Palette; es lassen sich auch mehrere Paletten 
auswählen. Verwenden Sie die Tasten <Keys.HardKey>Thro</Keys.HardKey> und <Keys.HardKey>And</Keys.HardKey>, um 
weitere Paletten auszuwählen; halten Sie <Keys.HardKey>And</Keys.HardKey> gedrückt, so können Sie nacheinander
Paletten hinzufügen.
3. Klicken Sie auf die (freie) Schaltfläche, auf die Sie die Palette bewegen möchten.

-   Die Taste <Keys.HardKey>Menu Latch</Keys.HardKey> fixiert das Menü **Copy/Move/Link**, so dass
    man bei wiederholtem Kopieren/Verschieben die Taste <Keys.HardKey>Copy</Keys.HardKey> nicht
    erneut betätigen muss. Zum Freigeben des Menüs drücken Sie
    nochmals <Keys.HardKey>Latch Menu</Keys.HardKey>, zum Verlassen drücken Sie <Keys.HardKey>Exit</Keys.HardKey>.

-   <Keys.SoftKey>Retain Layout</Keys.SoftKey>(Darstellung beibehalten) und <Keys.SoftKey>Bunch Up</Keys.SoftKey>
    (zusammenfassen) sind von Bedeutung beim Kopieren von mehreren
    Paletten mit eingeschlossenen freien Speicherplätzen: man kann
    wählen, die Verteilung (mit freien Plätzen) beizubehalten oder nur
    die wirklich verwendeten zusammenzufassen.

-   Im Kopiermodus lässt sich die Option <Keys.SoftKey>Copy Legends</Keys.SoftKey>
    (Bezeichnungen kopieren) umschalten zu <Keys.SoftKey>Don't copy legends</Keys.SoftKey>,
    womit den kopierten Paletten Standard-Bezeichnungen gegeben werden.

-   Im Move-(Verschieben)-Modus bietet sich ferner die Option <Keys.SoftKey>Swap Items if Required</Keys.SoftKey>. 
    Damit werden soweit möglich andere Paletten
    umplatziert, sofern sie beim Verschieben im Weg sind. Diese Option
    ist hilfreich beim Umgruppieren in sehr vollen Seiten.

## Löschen von Paletten

Zum Löschen einer Palette drücken Sie die <Keys.HardKey>Delete</Keys.HardKey>-Taste und wählen
danach die Schaltfläche der zu löschenden Palette. Betätigen Sie danach
die Schaltfläche zur Bestätigung erneut. Zum Löschen mehrerer Paletten
wählen Sie diese aus und bestätigen mit <Keys.HardKey>Enter</Keys.HardKey>. Bei Paletten auf
Tasten halten Sie die erste gedrückt und betätigen dazu die letzte, um
einen ganzen Bereich auszuwählen.

Weitere Möglichkeiten zum Löschen:

-   Verfügt das Pult über eine <Keys.HardKey>Update Palette</Keys.HardKey>-Taste (z.B. alte Pearl
    Experts), so drücken sie diese, wählen die zu löschende Palette, und
    wählen aus dem Menü <Keys.SoftKey>Delete</Keys.SoftKey>.

-   Drücken Sie die Taste <Keys.HardKey>Palette</Keys.HardKey> oberhalb des Ziffernblocks, und
    benutzen Sie die Option <Keys.SoftKey>Delete</Keys.SoftKey> aus dem Menü <Keys.SoftKey>Palette Utilities</Keys.SoftKey>.

-   Drücken Sie <Keys.HardKey>Delete</Keys.HardKey>, dann <Keys.SoftKey>Palette</Keys.SoftKey>, tippen die Nummer mit den
    Zifferntasten ein, und drücken <Keys.HardKey>Enter</Keys.HardKey>.

>   Werden Paletten gelöscht, die in Cues verwendet wurden, so werden
    statt der Palettenwerte die zum Zeitpunkt der Programmierung des
    Cues aktuellen Werte aktiv.