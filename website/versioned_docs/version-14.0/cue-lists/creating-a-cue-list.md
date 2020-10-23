---
id: version-14.0-creating-a-cue-list
title: Creating a Cue List
sidebar_label: Creating a Cue List
original_id: creating-a-cue-list
---

Programming a Cue List
----------------------

[](https://youtu.be/Kp6XhdG6keM?t=20 "Cuelist Basics")

Programming a cue list is similar to [recording a chase](../chases/creating-a-chase.md).

You need to set up the look on the stage for each cue and then add it to
the cue list. If you want to set fade times, you can either set them
while saving the cues or [later](cue-list-timing.md).

1. Press \<Record\> then \[Create Cue List\].

2. Press the **select button** of the playback where you want to store the
Cue List *(you can also store cue lists in the Playbacks window)*.

3. Select the [Record Mode](#record-mode) of the console: by Fixture, Channel, Stage or
Quick Build; if you are using tracking, \[Record Mode Channel\] is best
as you are sure to only record the attributes you have explicitly set,
but you do need to make sure you have changed all the things you want to
be recorded so they are in the programmer.

4. Set the default Fade and Delay times, and automatic cue linking,
using \[Set Times\]. These settings will be allocated to every new cue.

5. Set up the look for the first cue, either manually or by using
[\<Include\>](../titan-commands.md#include) on existing cues. You can use the [Shape Generator](../effects/shape-generator.md) and the
[Pixel Mapper](../effects/pixel-mapper.md).

6. If you require a **legend for the cue**, set it now using \[Legend\].
You can also change this later using [\<Unfold\>](editing-cue-lists.md#editing-a-cue-list-using-unfold) or [Set Legend](#changing-legends-for-cues-in-a-cue-list) (see next
section).

7. Press the **Select button** of the handle or \[Append Cue\] to store the
programmer contents as Cue 1 of the cue list.

8. Repeat steps 5 - 7 for additional cues. Do not press \<Clear\> in
between cues, unless you want levels to track through from previous
cues, as any faders moving to zero will not be stored. If you do press
clear, you must make sure that all channels you want to record are
selected or in the programmer (inverted display).

9. Press \<Exit\> to finish when you have stored all the cues

---

-   You can [reopen the cue list](editing-cue-lists.md) to add more cues by repeating the
    procedure above; this does not affect any cues already stored in the
    cue list.

-   To add more cues to the end of the existing cues press \[Append
    cue\].

-   To edit an existing cue, press \[Cue Number=\] and type the cue
    number to edit. Make the changes then press \[Update Cue x\].

-   To insert new cues, see [Editing Cue Lists](editing-cue-lists.md).

-   The **Advanced Options menu** allows you to renumber all the cues, and
    to change the number of an existing cue.

-   There is no limit to the number of cues in a cue list.

-   Cue lists offer a **Move In Dark** function which will move fixtures to
    the correct position for their next cue while they are set to zero
    intensity. See the [Move In Dark (MID)](../cue-lists/cue-list-playback.md#move-in-dark-mid-functions) functions section.

-   You can change the [tracking mode](cue-list-options.md#tracking) of each cue.

### Record Mode

\[Record Mode\] lets you select **Record By Fixture** (all attributes of
    any modified or selected fixture are saved), **Record By Channel** (only
    modified attributes are saved), **Record Stage** (all fixtures with a
    non-zero dimmer channel are saved) or **Quick Build** (allows you to
    build a cue from other playbacks or palettes; select the
    playbacks/palettes you wish to use and press \[OK\]).

> **Record By Channel** is useful if you want to layer this cue list with
    other playbacks to create an effect.

Changing Legends for Cues in a Cue List
---------------------------------------

You can set a legend for each cue, which is shown on the screen when
running the cue list and can be helpful for keeping track of where you
are.

1. Press \[Set Legend\] in the top level menu. If you are setting
legends for several cues, press \<Menu Latch\> to latch the Set Legend
menu.

2. Press the **Select button** of the Cue List.

3. The cues in the cue list are shown on the screen. Touch the list or
use Wheel A to select which cue is to be renamed.

5. Press \[Cue Legend\] and type the legend on the keyboard, then press
\<Enter\>.

6. If you latched the menu, you can continue to set legends for other
cues, or press \<Exit\> to finish.

Shape Tracking in Cue Lists
---------------------------

Shapes can track between cues in cue lists. If shape tracking is
enabled, a shape started in a cue will continue through following cues.
Shape tracking is enabled using the \[Shape Tracking\] option in the
playback Options for the cue list - see [Cue List Options](cue-list-options.md#cue-list-options-playback-tab).

Cues containing shapes have a button for each shape.

![Cue List window showing tracking shapes](/docs/images/Cue-List-window-showing-tracking-shapes.png)

In the following cues where shapes are tracking, an option switch is
shown for each active shape:
**T** | **Allows the shape to track to the next cue**
---|---
**B** | **Blocks the shape so it will not appear in following cues**

The cue itself can also have options set to block all shapes, see
[Cue List Options](cue-list-options.md#cue-list-options-playback-tab).

You can also block attributes for shapes independently during recording
using the **@** menu. Select the **Attribute** using the attribute bank buttons,
press **@** then the **FX** group button. The softkeys will then give the
options \[Block Shape\] and \[Unblock Shape\]. If an attribute is set to
**Blocked** the wheel display will show a *"Blocked"* watermark.

If **[Shape Tracking](cue-list-options.md#cue-list-options-playback-tab)** is not enabled, shapes in each cue are independent
from each other. If an identical shape (with the same size and speed) is
saved in a following cue then the shape will continue running rather
than restarting.

Autoloading a Playback within a Cue List
----------------------------------------

You can program a cue within a cue list to automatically load one or
more playbacks when the cue fires. The playback can be a single cue, a
chase or another cue list. This can be a useful way to trigger chases or
effects from the cue list.

You can either automatically save active playbacks as **Autoloads**, or you
can manually allocate **Autoloads** to cues.

To automatically record active playbacks as Autoloads:

1. After selecting **Cue List Record**, turn on \[Autoload Live Playbacks\]
in the \[Advanced Options\] menu of the cue list record screen.

2. Turn on the playbacks you wish to load for this cue.

3. **Save the cue**. Active playbacks will be saved as Autoloads.

---

To manually edit autoloads use the playback view for the cue list:

1. Press \<View/Open\>

2. Press the **Select button** of the Cue List.

3. The cues in the cue list are shown on the screen. Click on the
**Autoload** you wish to change. *(You will need to set the window to full
screen size or scroll across to see the Autoload column. If the Autoload
column is not shown, click on the Show All button on the left of the
window.)*

4. Press the **Select button** of the playback which is to be loaded. The
playback legend appears on the softkeys.

5. You can continue to add Autoloads to other cues, or press \<Exit\>
to finish.

![Cue List Window with Autoload playback](/docs/images/Cue-List-Window-with-Autoload-playback.png)

---

The Autoloaded playback will be fired when
the cue starts, and killed when the cue list moves on to the next cue,
unless you have also loaded the playback into the next cue.

You can set options for each Autoloaded playback by pressing the softkey
where the Autoloaded playback is shown.

For a cue, the only option is \[Remove this Autoload\].

For a chase or cue list, **softkey B** lets you select whether to load the
playback from the *start*, to start at a *specific cue*, or to press *Go* on
the target playback.

In the Autoload Times column you can set fade in, fade out and delay
times for the autoloaded playback. Normally the autoload will use the
times set for the cue, but you can also select \[Use Individual Target
Times\] which will use the times set in the autoloaded playback, or you
can set independent times yourself.

Running a Key Macro from a Cue List
-----------------------------------

You can program a cue within a cue list to trigger a key macro. This
allows you to set up custom actions which can be performed when a cue in
a cue list fires; for example you may want to lamp on your fixtures as
the first cue in the cue list.

1. Press \<Options\> (or the \[Options\] softkey on the root menu)

2. Select the **cue list**

3. Select \[Macros\]

4. In the **Playback View window**, select the **step** you want to add a macro
to

5. Press the button(s) for the macro(s) you want to attach to the step,
or press \[Add\] and choose an action from the list.

6. The **"Macros"** column shows the macros you have added.

> You can remove macros by selecting the cue, pressing the softkey for
    the macro you wish to remove and then pressing \[Remove Link\].

Keyboard Shortcuts/Syntax for Cue Lists
---------------------------------------

The following keyboard syntax can be used for fast cue list recording
and editing. These commands work for the selected or currently connected
playback where **n** is the cue number.

Shortcut | Action
--- | ---
\<Record\>, \<Connect/Cue\>, **n**, \<Enter\> | Record cue **n**
\<Copy\>, \<Connect/Cue\>, n | Copy cue **n**
\<Delete\>, \<Connect/Cue\>, n | Delete cue **n**
\<Include\>, \<Connect/Cue\>, n | Include cue **n**
\<Connect/Cue\>, n, \<Go\> | Go cue **n**
