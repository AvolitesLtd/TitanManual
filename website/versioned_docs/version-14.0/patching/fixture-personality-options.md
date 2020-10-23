---
id: version-14.0-fixture-personality-options
title: Fixture Personality Options
sidebar_label: Fixture Personality Options
original_id: fixture-personality-options
---

Titan uses fixture personalities to tell the console how to operate each
type of fixture. Avolites have created personalities for most fixture types in 
the known universe, but as new fixtures are being created all the time, you may
need to add a new fixture personality. 
See the [personalities section](../fixture-personalities.md) for details of how to
find personalities if the console does not have a personality for the fixture you are using.

There are also various options you can set which affect how the fixture works.
All of the options below can also be set from the Patch View window.

Swap Pan and Tilt
-----------------

This allows you to make the pan channel control tilt and the tilt
control pan. This can be useful for fixtures rigged in strange
orientations.

1. Press \<Patch\>.

2. Press \[Edit Fixtures\].

3. Press \[Swap Pan and Tilt\].

4. Select the fixtures to be pan-tilt swapped. Press \[Pan and Tilt
...\] to select either \[Swapped\] or \[Normal\] for the selected
fixtures.

5. Press \<Exit\> when finished.

Invert Attributes
-----------------

This option inverts individual attributes of fixtures. Useful if you
have a fixture which pans right when the rest pan left, saving a trip up
the rig to set fixture options.

1. Press \<Patch\>.

2. Press \[Edit Fixtures\].

3. Press \[Invert Attribute\].

4. Select fixture(s) to be changed.

5. Select the attribute to invert from the softkeys. The display shows
\[Inverted\] when the attribute is inverted.

6. Press \<Exit\> to finish.

![Tilt Inverted](/docs/images/Tilt-Inverted.png)

-   You can change the invert on multiple fixtures by selecting more
    than one, but the "Inverted" display will not show if there is a
    mixture of inverted and non-inverted fixtures in the selection.

-   Some attributes cannot be inverted.

-   Invert can also be set from the Attribute Behaviour tab of the Patch
    View window.

Attribute Limits
----------------

You can set upper and lower limits for any attribute. This can be useful
for example to limit the pan/tilt movement of a fixture, or if a fixture
has a combined dimmer/strobe function and you only want the dimmer part
of the operation.

Attribute limits are set either from the Edit Fixtures menu or using the
Attribute Behaviour tab of the Patch View window.

1. Press \<Patch\>.

2. Press \[Edit Fixtures\].

3. Press \[Set Limits\].

4. Select the fixtures to be set.

5. Use the softkeys to select which attributes are to be set, then
select upper or lower limit.

6. Input a percentage value for the limit value, or press \[Set To
Current Value\]. To remove a limit press \[Remove Limit\].

7. Press \<Exit\> when finished.

From the Attribute Behaviour tab, use the context buttons to set
Attribute Limits.

It is still possible to put values into the programmer outside the
limits. A "limited" watermark will appear on the wheel view behind an
attribute when it is being limited.

![limited](/docs/images/Limited-Dimmer.png)

Fixture Offset
--------------

You can set an offset to any attribute of any fixture. The normal use
for this is to correct pan/tilt positions when fixtures are rigged in a
different orientation to how they were programmed. The offset is applied
to channels just before final output.

There are 4 ways to set an offset:

-   Select fixture, \<Locate\>, then adjust attributes to the desired
    locate value. Then press \<Record\>, \<Locate\>, \[Update Offset\].
    This does not change the actual locate value but sets the difference
    between the locate position and your set position as the offset.
    This is an easy visual way to set the offset.

-   You can also set offsets using palettes. Select fixture, apply
    palette, adjust fixture to desired values then press \<Record\>,
    select the palette you have applied and click \[Update Offset\]. 
    Again this does not change the palette, but sets the difference 
    between the palette and the position you changed it to as the 
    offset value.

-   In the Patch View window, in the Patched Fixtures list there are
    cells for Pan or Tilt offset

-   In the Patch View window, in the Attribute Behaviour tab you can
    select \[Offset\] from the context menu buttons. This lets you view
    or adjust offsets set by the first two methods.

Fixture / Attribute curves
--------------------------

Curves set how an attribute behaves over the full range of values. They
are most often used for dimmer attributes to set the way the dimmer
level follows a slider, but can be applied to any attribute.

Curves are set either from the Edit Fixtures menu or using the context
buttons on the Attribute Behaviour tab of the Patch View window.

1. Press \<Patch\>.

2. Press \[Edit Fixtures\].

3. Press \[Set Curve\].

4. Select the fixtures to be set.

5. Use the softkeys to select which attributes are to be set.

6. Use the softkeys to select the type of curve required. The normal
setting is Linear.

7. Press \<Exit\> when finished.

See the [curves section](../system-settings/curves.md) for details of the different curves
available.

Freeze Fixtures or Attributes
-----------------------------

This option allows you to freeze individual attributes of a fixture, or
to freeze the whole fixture. Attributes or fixtures which are frozen are
not affected by playbacks or by the programmer.

1. Press \<Patch\>.

2. Press \[Edit Fixtures\].

3. Press \[Freeze Fixture or Attribute\].

4. Select the fixtures to be frozen/unfrozen.

5. Use the softkeys to select which attributes are frozen, or to freeze
the whole fixture. Frozen attributes are indicated on the softkey.

6. Press \<Exit\> when finished.

-   Freeze can also be set from the Attribute Behaviour tab of the Patch
    View window.

-   A "Frozen" watermark is shown on the wheel display when an attribute
    is frozen.

Editing the Personality
-----------------------

Sometimes you may want to modify the way a fixture behaves, or you may
find a fixture personality contains errors and needs editing. You can
edit personalities directly on the console.

1. Press \<Patch\>.

2. Press \[Edit Fixtures\].

3. Press \[Edit Personality\].

4. The softkeys show a list of all fixture types patched in your show.
Select the fixture type to be edited.

5. Personality Builder will open allowing you to edit the personality.

6. When you save changes, your changes are saved as user personality 
   on the console, and you are prompted whether to apply the changes 
   to the show.

-   Edited personalities will be saved in the User/Custom personality
    folder at D:\\Personalities (if using Titan Mobile, Titan Go or a
    simulator, the folder is at \\Documents\\Titan\\Personalities).
    Personalities in this folder are searched and loaded before those in
    the library and are not overwritten when a new fixture library is
    installed.

-   A separate user guide for Personality Builder is available from the
    [Avolites website](https://www.avolites.com).

> If you find a problem in a fixture personality provided by Avolites, please let us know using the bug report form in the [Personality section of the website](https://personalities.avolites.com/).
