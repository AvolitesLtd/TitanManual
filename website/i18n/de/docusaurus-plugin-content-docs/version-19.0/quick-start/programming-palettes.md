---
id: programming-palettes
title: Programmieren von Paletten
sidebar_label: Programmieren von Paletten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Stellen Sie die zu speichernden Attribute wie gewünscht ein. Ist ein
Attribut bei allen Geräten dieses Typs gleich (etwa Farben oder
Gobos), so genügt zum Speichern ein Gerät, und die Palette wird als
‚shared' (gemeinsam genutzt) angelegt.

Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, <Keys.HardKey>Palette</Keys.HardKey> (siehe auch Schnellspeichern, s.u.).

Wählen Sie <Keys.SoftKey>Set Mask</Keys.SoftKey>, um die zu speichernden Attribute auszuwählen.
Beim Schnell­speichern von Paletten in die jeweiligen Palettenfenster
werden die zu speichernden Attribute automatisch gewählt.

Klicken Sie auf eine Schaltfläche in einem
der Fenster ‚Colours', ‚Positions' oder ‚Gobos and Beams'.

Siehe [Erstellen von Paletten](../palettes/creating-palettes.md).

Zum Aufrufen einer Palette wählen Sie die gewünschten Geräte aus,
stellen nun ggf. die Maske der abzurufenden Attribute mit den
Attribut-Tasten ein und betätigen dann die gewünschte
Paletten-Taste/Schaltfläche.

Zum Eingeben einer Legende drücken Sie <Keys.SoftKey>Set Legend</Keys.SoftKey> und dann die
Paletten-Taste/Schaltfläche. Zum Zeichnen wählen Sie <Keys.SoftKey>Picture</Keys.SoftKey>.

## Schnellspeichern

Betätigen Sie eine freie Schaltfläche in einem der Paletten-Fenster;
diese zeigt daraufhin ein ‚+' auf rotem Grund. Betätigen Sie die
Schaltfläche zum Speichern nochmals. Die Maske wird automatisch anhand
des Fensters gewählt (z.B. werden so im Positions-Fenster nur Positionen
gespeichert). Siehe [Schnellspeichern von Paletten](../palettes/creating-palettes.md#schnellspeichern).

## Improvisieren mit Paletten

Um beim Improvisieren einer Show Paletten mit Fadezeit abzurufen, wählen
Sie die Geräte, geben die gewünschte Überblendzeit per
Zifferntasten ein und rufen dann die Paletten auf (die Überblendzeit
muss bei jedem Aufruf eingegeben werden). Wurden keine Geräte
ausgewählt, so wird die Palette auf ALLE Geräte angewendet.

Um eine [Überlappung](../palettes/timing-with-palettes.md#manuelle-geräteüberlappung-beim-palettenabruf) einzugeben, tippen Sie mit den Zifferntasten einen
Wert von 0...100, drücken dann <Keys.SoftKey>Set Overlap</Keys.SoftKey> und rufen schließlich
die Palette auf.

Um für alle Paletten eine [generelle Einblendzeit](../palettes/timing-with-palettes.md#master-zeit-und-overlap-für-paletten) einzustellen, drücken
Sie <Keys.HardKey>Palette</Keys.HardKey>, dann <Keys.SoftKey>Master Time</Keys.SoftKey>.

Mit Einblendzeit aufgerufene Paletten werden nicht in den
Programmierspeicher übernommen; beim Programmieren sollte diese Option
also nicht verwendet werden.
