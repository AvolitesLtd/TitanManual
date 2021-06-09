---
id: copying-moving-and-deleting-palettes
title: Copying, Moving and Deleting Palettes
sidebar_label: Copying, Moving and Deleting Palettes
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Copying or Moving a Palette
---------------------------

Using the <Keys.HardKey>Copy</Keys.HardKey> and <Keys.HardKey>Move</Keys.HardKey> buttons you can make a copy of an existing palette or
move it to a new button. You can copy or move multiple palettes in one
operation. You cannot link palette buttons like you can with cues.

Move is useful for tidying up the console.

1. Press <Keys.HardKey>Copy</Keys.HardKey> or <Keys.HardKey>Move</Keys.HardKey> (if the console does not have a **Move** button,
	you can get this function by holding <Keys.HardKey>Avo</Keys.HardKey> and pressing <Keys.HardKey>Copy</Keys.HardKey> ).
2. Press the **Select** button of the palette you want to copy/move. You
can select multiple palettes - use the <Keys.HardKey>Thro</Keys.HardKey> and <Keys.HardKey>And</Keys.HardKey> buttons to
add more to the selection - hold down <Keys.HardKey>And</Keys.HardKey> to keep adding them.
3. Press the empty button where you want it to go.

---

-   The <Keys.HardKey>Menu Latch</Keys.HardKey> button latches the **Copy/Move/Link menu**, so you
    can keep copying, moving or linking things without having to keep
    pressing <Keys.HardKey>Copy</Keys.HardKey>. Press <Keys.HardKey>Menu Latch</Keys.HardKey> again to unlatch.

-   &nbsp;<Keys.SoftKey>Retain Layout</Keys.SoftKey> or <Keys.SoftKey>Bunch Up</Keys.SoftKey> is used when copying a group of
    palettes with empty handles in the group - you can either keep the
    empty handles, or bunch up the used handles together.

-   When in Copy mode, option <Keys.SoftKey>Copy Legends</Keys.SoftKey> can be changed to <Keys.SoftKey>Don't
    copy legends</Keys.SoftKey> so that the copied palettes are given default
    legends.

-   When in Move mode, <Keys.SoftKey>Swap Items if Required</Keys.SoftKey> will attempt to
    reposition any existing handles which are in the way of the move.
    This is useful when rearranging buttons on a page which is nearly
    full.

Deleting Palettes
-----------------

You can delete a palette by pressing <Keys.HardKey>Delete</Keys.HardKey>, then pressing the
button of the palette to be deleted. Press the palette button again to
confirm the deletion. For palettes stored on physical buttons you can
delete a range of palettes in one go by holding down the first one while
pressing the last one.

Other ways to delete a palette:

-   If the console has an <Keys.HardKey>Update Palette</Keys.HardKey> button, press it, then
    select a palette, then use the <Keys.SoftKey>Delete</Keys.SoftKey> softkey option

-   Press the <Keys.HardKey>Palette</Keys.HardKey> button above the numeric keypad and use the
    <Keys.SoftKey>Delete</Keys.SoftKey> option in the <Keys.SoftKey>Palette Utilities</Keys.SoftKey> menu

-   Press <Keys.HardKey>Delete</Keys.HardKey> then <Keys.SoftKey>Palette</Keys.SoftKey>, type the palette number, press
    <Keys.HardKey>Enter</Keys.HardKey>

>   If you have playbacks which use the deleted palette, they will go
    back to the values which were stored in the programmer when the
    playback was recorded.