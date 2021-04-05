---
id: advanced-options
title: Advanced Options
sidebar_label: Advanced Options
original_id: advanced-options
---

import Keys from '@site/src/components/key.ts';

Shapes im Fadermodus
--------------------

Ist ein Shape [in einem Cue gespeichert](shape-generator.md#verwenden-von-shapes-in-cues), 
so lässt sich die Art und Weise, wie der Shape eingeblendet wird, mit <Keys.SoftKey>Edit Times</Keys.SoftKey> 
sowie den [Optionen](../cues/playback-options.md) einstellen.

Um die Größe/Geschwindigkeit abhängig vom Fader zu machen, drücken Sie
im Hauptmenü <Keys.HardKey>Options</Keys.HardKey> (oder die Menütaste <Keys.SoftKey>Options</Keys.SoftKey>) und wählen dann 
den Speicherplatz (Cue) aus, in dem der Shape enthalten ist.

Mit den Funktionstasten <Keys.SoftKey>Fader</Keys.SoftKey> <Keys.SoftKey>Shape Size</Keys.SoftKey> und <Keys.SoftKey>Fader</Keys.SoftKey> \[Shape
Speed\] können Sie Größe bzw. Geschwindigkeit auf 'fixed' (fest) oder
'on fader' (faderabhängig) stellen. Ebenso lässt sich ein Speed Master
oder Size Master zuweisen, siehe
[Speed- und Size-Master](../running-the-show/playback-controls.md#speed--und-size-master).

Um eine feste Einfadezeit einzustellen, drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey>,
wählen das Playback aus, und geben die gewünschte Fade/Delay-Zeit ein.

Der [Fader-Modus](../cues/playback-options.md#fader-mode) für Playbacks 
kann auf 0 (einfaden), 1 (ein- und ausfaden) oder 3 (crossfade) gestellt 
werden. Bei Mode 2 hängt die Fadezeit von der Reglerstellung ab; es 
empfiehlt sich also, wenn Shapes reglerabhängig sind, das Playback nicht 
im Mode 2 zu verwenden.

Wird eine neuer Cue aufgerufen, der die gleichen Attribute steuert (etwa
ein zweiter Shape auf den gleichen Geräten, die in dem vorherigen Cue
bereits mit einem Shape gesteuert werden), so wird vom bereits laufenden
auf den neuen Shape übergeblendet.