---
id: copying-moving-and-deleting-fixtures
title: Copying, moving and deleting fixtures
sidebar_label: Copying, moving and deleting fixtures
original_id: copying-moving-and-deleting-fixtures
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Copying or moving a patched fixture

Using the <Keys.HardKey>Copy</Keys.HardKey> or <Keys.HardKey>Move</Keys.HardKey> buttons you can make a copy of an existing fixture or
move it to a new handle. You cannot link fixture handle like you can with cues. You can copy
or move multiple fixtures in one operation.

Fixture copying is very useful if you need an additional fixture of a
type you've already patched and programmed because the new copy will
come complete with all the cues and palettes of the original fixture
you've copied. The copied fixture will be "Parked" (have no DMX channel
allocated) so you will need to set an address before you can use it (see
[changing the patch section](./changing-the-patch.md))

Move is useful for tidying up the console.

1. Press the <Keys.HardKey>Copy</Keys.HardKey> or <Keys.HardKey>Move</Keys.HardKey> button (on consoles which don't have
	a <strong>Move</strong> button press <Keys.HardKey>Avo</Keys.HardKey> and <Keys.HardKey>Copy</Keys.HardKey>).

2. Press the Select button of the fixture you want to copy/move. You
can select multiple fixtures -- use the <Keys.HardKey>And</Keys.HardKey> buttons to
add more fixtures to the selection.

3. Press the empty Select button where you want it to go.

-   The <Keys.HardKey>Menu Latch</Keys.HardKey> button latches the Copy or Move menu, so you
    can keep copying or moving things without having to keep pressing
    the <Keys.HardKey>Copy</Keys.HardKey> or <Keys.HardKey>Move</Keys.HardKey> button. Press again to unlatch.

-   The <Keys.SoftKey>Retain Layout</Keys.SoftKey> or <Keys.SoftKey>Bunch Up</Keys.SoftKey> option is used when copying a
    group of fixtures with empty handles in the group - you can either
    keep the empty handles, or bunch up the used handles together. There
    is also a <Keys.SoftKey>Bunch Up With Offset</Keys.SoftKey> option which allows you to leave
    a gap in the DMX channels, if you are running a show where you need
    to exchange fixtures to ones which use more DMX channels.

-   When in Copy mode, option <Keys.SoftKey>Copy Legends</Keys.SoftKey> can be changed to <Keys.SoftKey>Don't
    copy legends</Keys.SoftKey> so that the copied fixtures are given default
    legends.

-   When in Move mode, <Keys.SoftKey>Swap Items if Required</Keys.SoftKey> will attempt to
    reposition any existing handles which are in the way of the move.
    This is useful when rearranging buttons on a page which is nearly
    full.

## Deleting a Patched Fixture

You can delete a fixture or dimmer from a button if you patched it
accidentally or if you change your rig and want to use the button for
something else.

> All programming for the fixture is also deleted. You cannot undo deletion of a fixture or get the programming back by repatching a fixture to the same handle. If you might need the fixtures again later, move them to an unused fixture page.

1. Enter Patch mode by pressing the <Keys.HardKey>Patch</Keys.HardKey> button.

2. Press the <Keys.HardKey>Delete</Keys.HardKey> button.

3. Press the Select button of the fixture you want to delete.

4. The button will light up red and the console asks for confirmation.
Press the Select button again to confirm.

-   You can delete a range of fixtures in one operation.
