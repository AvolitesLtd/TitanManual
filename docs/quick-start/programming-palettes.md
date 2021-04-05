---
id: programming-palettes
title: Programming palettes
sidebar_label: Programming palettes
---

import Keys from '@site/src/components/key.ts';

Set up the attributes to be recorded. If attribute is the same for all
fixtures of one type (e.g. colour), only one fixture need be set up and
palette will be "shared".

Press <Keys.HardKey>Record</Keys.HardKey>, <Keys.HardKey>Palette</Keys.HardKey> (See also Quick Record below).

Use <Keys.SoftKey>Set Mask</Keys.SoftKey> to choose attributes to record/exclude. If you are
storing in a palette touch button the mask is automatically set.

Touch a button in one of the Colours/Positions/Gobos workspace windows to
store the palette.

See [Creating Palettes](../palettes/creating-palettes.md)

To recall palette, select fixtures, select recall mask using Attribute
Bank buttons, press palette button.

To set a legend, press <Keys.SoftKey>Set Legend</Keys.SoftKey> then the palette's button. Press
<Keys.SoftKey>Picture</Keys.SoftKey> to draw a picture legend.

## Quick Record

Press an unused button in one of the palette windows - the button turns
red with a +. Press again to save the palette. The mask is automatically
set to match the window (e.g. Positions window is masked for only
position attributes). See [Palettes - Quick Record](../palettes/creating-palettes.md#quick-record).

## Busking with palettes

To fade palettes when busking a show, select fixtures, type fade time on
the keypad then recall the palette (you have to do this each time). If
no fixtures selected, palette will recall to all applicable fixtures
(called a Quick Palette. Quick Palettes do not go into the programmer
so don't use when programming).

To set [fixture overlap](../palettes/timing-with-palettes.md#manual-fixture-overlap-when-recalling-palettes), type 0-100 then press <Keys.SoftKey>Set Overlap</Keys.SoftKey>, then
recall the palette.

To set a [fade time for all palettes](../palettes/timing-with-palettes.md#master-time-for-palettes), press Palette then <Keys.SoftKey>Master Time</Keys.SoftKey>.
