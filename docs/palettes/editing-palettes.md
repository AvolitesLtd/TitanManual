---
id: editing-palettes
title: Editing Palettes
sidebar_label: Editing Palettes
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Viewing and Editing the Content of Palettes
-------------------------------------------

You can view the contents of a palette in the **Palette View window**. This
lists all fixtures in the palette and the attribute values stored for
them. A context menu button allows you to switch to displaying **Times**.

Press <Keys.HardKey>Open/View</Keys.HardKey>, then the button of the palette. The **Palette View
window** will open.

![Palette View window](/docs/images/Palette-View-window.png)

You can filter which attributes are shown using the **All/IPCGBES** buttons
in the top corner, or which fixtures are shown using the fixture type
buttons below that.

To edit an attribute value, touch/click on it in the window. The
softkeys will give you a list of available settings for this attribute
or you can type in a numerical value.

You cannot **Delete** a value from a palette, but you can disable it by selecting the value and
pressing the <Keys.SoftKey>Off</Keys.SoftKey> softkey or <Keys.HardKey>Off</Keys.HardKey> button. If you select a value which shows
'[Off]', the softkey will show <Keys.SoftKey>On</Keys.SoftKey>, and would re-enable the previous value.

-   When the palette contains other palettes, the context menu option  <Keys.SoftKey>View/Hide Nested Palettes</Keys.SoftKey> sets whether or not the view shows the actual attribute value or just the name of the nested palette.

-   When the palette contains shapes, the context menu option <Keys.SoftKey>View
    Shapes</Keys.SoftKey> will open the Shape View showing all the shapes with their
    parameter. Clicking **View** will open the **Shape Fixture View** which lets
    you edit the fixtures running the shape; the **Add Fixtures** menu
    button will add selected fixtures into the shape.

-   When the palette contains effects (Pixel Mapper) the context menu
    option <Keys.SoftKey>View Effects</Keys.SoftKey> will open the **Effect View window** to let you
    edit the effect.

Changing the Content of Palettes
--------------------------------

To edit a palette entry, press <Keys.HardKey>Edit</Keys.HardKey> (<Keys.HardKey>Update Palette</Keys.HardKey> on Pearl
Expert and Tiger Touch 1), then select the palette to edit. For Normal
palettes this will automatically select the fixtures used in the
palette; for Shared palettes the first fixture in the palette will be
selected. Next, make the changes you want, then press the <Keys.SoftKey>Update
Palette x</Keys.SoftKey> softkey to save the changes.

The <Keys.HardKey>Edit</Keys.HardKey> button also allows you to change the
palette name and number.

You can also load the palette into some fixtures, modify the attributes
and record the new information back on top of the existing palette
entry. The console will give you options on the softkeys to **Replace**,
**Merge** or **Quick Merge** the palettes. If you select **Merge**, anything you
haven't changed will not be affected, values you have changed or added
will be amended. **Quick Merge** will only update the attributes stored in
the original palette and ignore others *(for example if you are merging
with a position palette, but have also modified the colour attributes,
the colour attributes would not be merged in)*.

When double clicking a palette button to update, the default option is
**Quick Merge**.

-   You can set the console to ["Always Merge"](../system-settings/user-settings.md#prompt-replace)
    (so it doesn't ask you) using the  [User Settings](../system-settings/user-settings.md).
    You can also press the palette button a second time to select the **Merge** option.

-   You can add settings for additional fixture types to a palette without affecting
    existing ones. <br/>
    *For example, if you have colour palettes for Mac
    Auras, you can add colours for your Robe BMFLs without affecting any
    previously recorded values in the palette.*

-   You can remove attributes from palettes using the <Keys.HardKey>Off</Keys.HardKey> button as described above.

-   When editing a palette the state of the programmer will be
    preserved; when the modified palette is saved, your original
    programmer contents will be restored and the programmer will be left
    in the same state as when you started editing the palette.

Updating Palettes Used in a Playback
------------------------------------

If you need to quickly update a palette during a show, for example you
fire a green cue and the Green palette used turns out to be not quite
the right colour, the <Keys.HardKey>Update</Keys.HardKey> function lets you automatically update the
palette used in the cue.

1. With the cue fired, select the fixtures and change them to the
settings you want to store.
2. Press <Keys.HardKey>Update</Keys.HardKey> (on Pearl Expert, <Keys.HardKey>Record Cue</Keys.HardKey>, <Keys.SoftKey>Update</Keys.SoftKey>).
3. The cues and palettes which relate to the cue and can be updated are
shown on the softkeys.
4. Select the items you want to update and press <Keys.HardKey>Update</Keys.HardKey> again.
