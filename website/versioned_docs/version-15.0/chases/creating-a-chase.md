---
id: version-15.0-creating-a-chase
title: Creating a Chase
sidebar_label: Creating a Chase
original_id: creating-a-chase
---

Programming a Chase
-------------------

[](https://youtu.be/M0h5zV4S_OI?t=20 "Recording a Chase")

To program a chase, you have to set up the look for each cue in the
chase, then save it.

You can either set all the fixtures and dimmers manually for each cue in
the chase, you can use [Quick Build](#creating-a-chase-with-quick-build)
to create a state from [palettes](../palettes.md) and
[cues](../cues.md), or you can use
[\<Include\>](../cues/editing-cues.md#using-parts-of-existing-cues-the-include-function)
to load in cues.

1. Press \<Record\> then select \[Chase\]. *(Some consoles also have a
\<Record Chase\> button)*.

2. Press the **Select** button of the playback where you want to store the
chase *(you can also store chases on touch buttons in the Playbacks
window)*.

3. Set up the look for the first cue, either manually or by using
[\<Include\>](../cues/editing-cues.md#using-parts-of-existing-cues-the-include-function)
on existing cues.

4. You can change the number given to the step using \[Step Number\]

5. Press the **Select** button of the playback to store the programmer
contents as a step of the chase. You can also press \[Append Step\] on
the menu.

6. Press \<Clear\> *(unless you want to re-use the contents of the
programmer)*, then repeat steps 3 - 5.

7. Press \<Exit\> to finish when you have stored all the cues you want.

---

-   \[Record Mode\] lets you select:

    - \[Record By Fixture\] - all attributes of
    any modified or selected fixture are saved

    - \[Record By Channel\] - only
    modified attributes are saved

    - \[Record Stage\] - all fixtures with a
    non-zero dimmer setting are saved

    - \[Quick Build\] - [see next section](#creating-a-chase-with-quick-build)

-   The cue number currently being saved, and the total number of cues,
    is shown on the top line of the display.

-   Press \<Clear\> when you have finished recording the chase,
    otherwise when you try to play it back the programmer will override
    the chase and you won't see the chase properly.

-   You can record [shapes](../effects.md) in a chase. If the same shape is saved in
    subsequent cues it will continue from step to step and if not it
    will stop at the end of the cue. *(The shape is the same if you
    didn't press \<Clear\> after the previous step, and didn't change
    the speed, size or phase of the shape from the previous step; or if
    you [Included](../cues/editing-cues.md#using-parts-of-existing-cues-the-include-function)
    the shape from the previous step and have not modified
    it)*

-   You can set a legend for the chase by pressing \[Set Legend\], then
    pressing the **Select** button for the chase and entering the legend, as
    with cues.

-   There is no limit to the number of steps in a chase.

Creating a Chase with Quick Build
---------------------------------

Quick Build mode, as the name suggests, allows you to build a chase very
quickly from existing palettes and playbacks.

Start recording a chase as described in the previous section, set
\[Record Mode\] to Quick Build.

Select any [palette](../palettes.md) or playback to insert that item as a step in the
chase. If you select multiple palettes by selecting a range of buttons,
each palette will be added as a separate step.

To insert specific fixtures from a palette or playback, select the
fixtures first and then select the palette or playback.
