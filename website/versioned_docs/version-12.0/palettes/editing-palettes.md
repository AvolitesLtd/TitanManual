---
id: version-12.0-editing-palettes
title: Editing Palettes
sidebar_label: Editing Palettes
original_id: editing-palettes
---

Viewing and Editing the Content of Palettes
-------------------------------------------

You can view the contents of a palette in the **Palette View window**. This
lists all fixtures in the palette and the attribute values stored for
them. A context menu button allows you to switch to displaying **Times**.

Press \<View/Open\>, then the button of the palette. The **Palette View
window** will open.

![Palette View window](/docs/images/Palette-View-window.png)

You can filter which attributes are shown using the **All/IPCGBES** buttons
in the top corner, or which fixtures are shown using the fixture type
buttons below that.

To edit an attribute value, touch/click on it in the window. The
softkeys will give you a list of available settings for this attribute
or you can type in a numerical value.

There is also a \[Delete\] button which allows you to remove the value
from the attribute. This is the same as using the
[\<Off\> function](../cues/editing-cues.md#removing-attributes-from-cues-using-off).

-   When the palette contains other palettes, the context menu option
    \[View/Hide Nested Palettes\] sets whether or not the view shows the
    actual attribute value or just the name of the nested palette.

-   When the palette contains shapes, the context menu option \[View
    Shapes\] will open the Shape View showing all the shapes with their
    parameter. Clicking **View** will open the **Shape Fixture View** which lets
    you edit the fixtures running the shape; the **Add Fixtures** menu
    button will add selected fixtures into the shape.

-   When the palette contains effects (Pixel Mapper) the context menu
    option \[View Effects\] will open the **Effect View window** to let you
    edit the effect.

Changing the Content of Palettes
--------------------------------

To edit a palette entry, press \<Edit\> (\<Update Palette\> on Pearl
Expert and Tiger Touch 1), then select the palette to edit. For Normal
palettes this will automatically select the fixtures used in the
palette; for Shared palettes the first fixture in the palette will be
selected. Next, make the changes you want, then press the \[Update
Palette x\] softkey to save the changes.

The \<Edit\>/\<Update Palette\> button also allows you to change the
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

-   You can set the console to 
    ["Always Merge"](../system-settings/user-settings.md#prompt-replace)
    (so it doesn't ask you) using the 
    [User Settings](../system-settings/user-settings.md).\
    You can also press the palette button a second time to select the
    **Merge** option.

-   You can add additional fixtures to a palette without affecting
    existing ones.\
    *For example, if you have colour palettes for Mac
    600s, you can add colours for your Mac 500s without affecting any
    previously recorded values in the palette.*

-   You can remove attributes from palettes using the
    [\<Off\> function](../cues/editing-cues.md#removing-attributes-from-cues-using-off)

-   When editing a palette the state of the programmer will be
    preserved; when the modified palette is saved, your original
    programmer contents will be restored and the programmer will be left
    in the same state as when you started editing the palette.

Updating Palettes Used in a Playback
------------------------------------

If you need to quickly update a palette during a show, for example you
fire a green cue and the Green palette used turns out to be not quite
the right colour, the \<Update\> function lets you automatically update the
palette used in the cue.

1. With the cue fired, select the fixtures and change them to the
settings you want to store *(e.g. the right green colour)*

2. Press \<Update\> (on Pearl Expert, \<Record Cue\>, \[Update\])

3. The cues and palettes which relate to the cue and can be updated are
shown on the softkeys

4. Select the items you want to update and press \<Update\> again