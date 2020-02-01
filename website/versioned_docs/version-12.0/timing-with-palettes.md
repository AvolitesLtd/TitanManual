---
id: version-12.0-timing-with-palettes
title: Timing with palettes
sidebar_label: Timing with palettes
original_id: timing-with-palettes
---

Palettes may be saved with timing information, or you can manually
override the timing when recalling the palette.

Palettes with saved times
-------------------------

If you have saved time information in a palette, it will normally recall
with this timing information. So if you programmed a 2 second fade, the
palette will recall with a 2 second fade.

You can turn this off (which can be useful during programming) using the
key profile setting for palette keys (see section 16.3.1 on page 315).
You can set \[Palette Is Fired With Its Times\] or \[Palette Is Fired
Ignoring Its Times\].

Manually overriding palette times
---------------------------------

Being able to recall palettes with a manual fade allows easy \"busking\"
of shows. When a palette is recalled in this way, a time is added and
the palette fades in over that time.

1\> Select some fixtures.

2\> Type in the fade time for the palette on the numeric keypad.

3\> Press a palette button to recall the palette.

-   This overrides any timing stored in the palette itself.

-   You have to re-enter the time each time you recall a palette. To use
    the same fade every time, set a Master Time: Press Palette, \[Master
    Time\]. To disable Master Time set to 0.

-   Palette fading can be very useful when recalling a palette live
    during a show, as you can smoothly move fixtures to a new position
    or change colour slowly (on colour mixing fixtures).

Manual fixture overlap when recalling palettes
----------------------------------------------

You can set a Fixture Overlap when recalling a palette, which means that
the palette will be applied in sequence to each fixture in the group.
This is a very quick way to busk some amazing effects. Fixture
Overlap=100% means that all fixtures will change together. Fixture
Overlap=0% means that each fixture must complete its fade before the
next will start its fade.

1\> Type in the overlap time for the palette on the numeric keypad.

2\> Press \[Set Overlap\].

3\> Type in the fade time if fade is also required.

4\> Press a palette button to recall the palette.

-   You have to re-enter the overlap each time you recall a palette. To
    use the same overlap every time, set a Master Overlap: Press
    Palette, \[Master Overlap\]. To disable Master Overlap set to 100%.

Master Time for palettes
------------------------

Option \[Master Time\] on the Palette menu (press the \<Palette\> button
above the numeric keypad) allows you to set a default fade time. This
fade time will be used for all palettes unless you manually type in a
different time. This can be useful when "busking" a show with palettes.

The \[Master Overlap\] option similarly sets the default Overlap for
palette recall.

  -------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ![tip](/docs/images/image7.png){width="0.7361111111111112in" height="0.6527777777777778in"}   You can create macro buttons to set different palette fade times. Press \<Macro\>, \[Record\], press a button to store your macro on. Then press \<Palette\>, \[Master Time\], 3 (for 3 sec), \<Exit\>, \<Macro\>. Repeat these steps to create a Palette Snap button (0 sec), or a 1 sec fade button, and so on.
  -------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


