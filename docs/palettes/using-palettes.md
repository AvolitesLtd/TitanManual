---
id: using-palettes
title: Using Palettes
sidebar_label: Using Palettes
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Recalling a Palette Value

<Video videoId="_bmk7JEPpQo" title="Palettes Playback" />

### Recalling From a Button

To recall a palette value from a button:

1. Select the fixtures to be changed. Shared palettes can be set to any
fixture of the same type. Normal palettes will set individual values to
each fixture. If no fixtures are selected, the palette will apply to all
fixtures it is relevant to.
2. Press the Palette button you want to recall. The palette will be set
to the selected fixtures.

---

-   You can make palettes fade over a time when you recall them, see
    [Timing with Palettes](timing-with-palettes.md).

-   When a palette is used in the programmer, the touch button will
    light up to indicate this (you can
    [disable this in the User Settings](../system-settings/user-settings.md#highlight-active-palettes)).
    This makes it easier to see which palette you have selected.

    ![Active Palette Highlighted](/docs/images/Active-Palette-Highlighted.png)

### Recalling From the Keypad

You can also recall a palette by its number by typing the number on the
numeric keypad.

1. Select some fixtures.
2. Press <Keys.HardKey>Palette</Keys.HardKey> above the numeric keypad.
3. Type in the number of the palette you want to recall.
4. Press <Keys.HardKey>Enter</Keys.HardKey> or <Keys.SoftKey>Apply Palette</Keys.SoftKey>.

The <Keys.SoftKey>Apply Palette</Keys.SoftKey> softkey shows the legend of the palette which
will be applied.

>   If you want to recall multiple palettes simultaneously you can use the Blind to Live function. Put the console into Blind mode (either press the <Keys.HardKey>Blind</Keys.HardKey> button if provided, or hold <Keys.HardKey>Avo</Keys.HardKey> and press <Keys.SoftKey>Blind Inactive</Keys.SoftKey>. Select the palettes you want to use. Enter a fade time in seconds on the keypad (or 0 to snap), then press <Keys.HardKey>Blind</Keys.HardKey> again. The palettes will fade to the live output.

## Palette Pages

If you have stored palettes on physical buttons on the console, the <Keys.HardKey>Page+</Keys.HardKey>/<Keys.HardKey>Page-</Keys.HardKey> buttons will change to a different page of palettes.

If you want a palette to be locked on its handle and not change when the
page is changed, you can set a lock or transparent lock on the palette
handle. See [Handle Paging](../cues/playback-options.md#handle-paging)
for more details about locks.

Each of the palette windows can either display pages of palettes, with
page buttons on the left, or a continuous scrolling window of palettes.
To change between pages and scrolling, touch the **Pages Show/Hide** 
context menu button, then change
pages using the page buttons to the left of the palette buttons.


## Only Showing Relevant Palettes

If the User Setting [Filter Relevant Palettes](../system-settings/user-settings.md#filter-relevant-palettes)
is enabled, when you
select fixtures any palettes which are not applicable will grey out.
This is very useful to see which palettes are available for the fixtures
you are working with.

## Quick Palettes with no Fixtures Selected

If you press a palette button when no fixtures are selected, the palette
will be set to all the fixtures the palette applies to. This is called a
**Quick Palette**.

For example if you've got some colour palettes programmed
for your MAC 2000s, pressing one of the palettes when no MAC 2000s are
selected will set the colour to all the MAC 2000s.

> Effects palettes can't be recalled as Quick Palettes.

## Setting Palettes to All Fixtures in a Playback

You can apply a palette to all fixtures in a particular playback. Hold
the palette button and press the **Select** button of the playback which the
palette is to apply to.
