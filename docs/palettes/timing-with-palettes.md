---
id: timing-with-palettes
title: Timing with Palettes
sidebar_label: Timing with Palettes
---

[Palettes may be saved with timing information](creating-palettes.md#creating-a-time-palette),
or you can manually override the timing when recalling the palette.

Palettes with Saved Times
-------------------------

If you have 
[saved time information in a palette](creating-palettes.md#creating-a-time-palette),
it will normally recall with this timing information. So if you 
programmed a 2 second fade, the palette will recall with a 2 second fade.

You can turn this off (which can be useful during programming) using the
[key profile setting](../system-settings/key-profiles.md) for palette keys.
You can set \[Palette Is Fired With Its Times\] or \[Palette Is Fired
Ignoring Its Times\].

Manually Overriding Palette Times
---------------------------------

[](https://youtu.be/FF8szWCpVkE?t=135)

Being able to recall palettes with a manual fade allows easy \"busking\"
of shows. When a palette is recalled in this way, a time is added and
the palette fades in over that time.

1. Select some fixtures

2. Type in the fade time for the palette on the numeric keypad

3. Press a palette button to recall the palette

---

-   This overrides any timing stored in the palette itself.

-   You have to re-enter the time each time you recall a palette. To use
    the same fade every time, set a Master Time: Press \<Palette\>, \[Master
    Time\]. To disable \[Master Time\] set to 0.

-   Palette fading can be very useful when recalling a palette live
    during a show, as you can smoothly move fixtures to a new position
    or change colour slowly (on colour mixing fixtures).

Manual Fixture Overlap when Recalling Palettes
----------------------------------------------

You can set a [Fixture Overlap](../cues/cue-timing.md#setting-fade-times-and-overlap-for-a-cue)
when recalling a palette, which means that
the palette will be applied in sequence to each fixture in the group.
This is a very quick way to busk some amazing effects.\
Fixture Overlap = **100%** means that all fixtures will change together.\
Fixture Overlap = **0%** means that each fixture must complete its fade before the
next will start its fade.

1. Type in the overlap time for the palette on the numeric keypad

2. Press \[Set Overlap\]

3. Type in the fade time if fade is also required

4. Press a palette button to recall the palette

-   You have to re-enter the overlap each time you recall a palette. To
    use the same overlap every time, set a Master Overlap: Press
    \<Palette\>, \[Master Overlap\]. To disable \[Master Overlap\] set to 100%.

Master Time for Palettes
------------------------

Option \[Master Time\] on the Palette menu (press the \<Palette\> button
above the numeric keypad) allows you to set a default fade time. This
fade time will be used for all palettes unless you manually type in a
different time. This can be useful when "busking" a show with palettes.

The \[Master Overlap\] option similarly sets the default Overlap for
palette recall.

> You can create macro buttons to set different palette fade times. Press
\<Macro\>, \[Record\], press a button to store your macro on. Then press 
\<Palette\>, \[Master Time\], \<3\> (for 3 sec), \<Exit\>, \<Macro\>. 
Repeat these steps to create a Palette Snap button (0 sec), or a 1 sec 
fade button, and so on.