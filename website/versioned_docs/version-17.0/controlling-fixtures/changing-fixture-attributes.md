---
id: changing-fixture-attributes
title: Changing Fixture Attributes
sidebar_label: Changing Fixture Attributes
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Once you have selected the fixtures you want to operate, you then
have various options for controlling them.


## Changing Attributes Using The Wheels

"Attributes" are the functions of the fixture, like pan, tilt, colour,
dimmer, etc. You select which attributes you want to modify using the
**Attribute Bank** buttons - Intensity, Position, Colour, Gobo, Beam,
Effect, Special, FX (abbreviated as IPCGBESFX) and then set values using the wheels. The attributes
available depend on the fixture type. Dimmer channels only have a dimmer
attribute.

The touch display above the wheels shows the current attribute bank (grey background)
and the current values on the wheels. The light blue circles show attributes
which you have changed and which are in the programmer. The roller graphics show
the different attributes which are available, which may be a percentage for a
variable attribute, or named ranges for something like a colour or gobo wheel.

![Wheels](/docs/images/Wheels.png)

You can also set attributes using the [Attribute Editor workspace
window](../controlling-fixtures/changing-fixture-attributes.md#attribute-editor-window).

>   On the Pearl Expert the wheels on the Touch Wing are used instead of the
    wheels on the console, unless you change this using the User Settings.

Each attribute button controls several attributes, one on each wheel. On
Diamond 9 and Sapphire Touch the trackball controls pan/tilt of the selected
fixtures, with the ring controlling dimmer by default. You can change this
by pressing the <Keys.HardKey>Assign</Keys.HardKey> button next to the trackball.

1. With some fixtures selected, press the button for the attribute to
be changed.
2. Turn the wheels to set the attribute. The settings which are
available scroll up and down on the wheel display as you turn the wheels.  
You can also touch the roller image on the screen to change the
attributes up or down by one step. For continuously variable controls like a
dimmer, touching the roller will set the attribute to full or zero.
3. Repeat from **step 1** to change other attributes of the selected fixtures.

Some other things to know about attributes:

![Toggle Attributes](/docs/images/Toggle-Attributes.png)

-   If the wheel display shows a small arrow next to the legends as shown above, this
    means that there are more than three attributes to control in this bank. 
    Press the attribute button again to toggle through the attributes (for example
    some LED fixtures have Red, Green, Blue, Amber, White - so on a console with three
    wheels, when you
    press <Keys.HardKey>Colour</Keys.HardKey> you would first get Red, Green, Blue on the three
    wheels, then if you press <Keys.HardKey>Colour</Keys.HardKey> again you will get Amber and White.)

-   If an attribute is in the programmer, the value in the programmer is highlighted 
    in pale blue on the wheel display and the IPCGBESFX button also has a pale
    blue highlight. This provides a quick way to see which attributes are 
    in the programmer.

-   If the display above the wheels does not show the attribute when you
    press the button, that attribute is not available on the selected
    fixtures.


-   The wheels operate in an "acceleration" mode. If you spin the wheel
    fast, the fixture changes in larger steps. If you move the wheel
    slowly, the fixture moves in its smallest increment.

-   Holding down the <Keys.HardKey>Avo</Keys.HardKey> button while turning a wheel puts the wheel
    into "Fast" mode. When in this mode, a single rotation of the wheel
    changes the attribute you are controlling over its full range. For
    example, if while moving the Pan wheel you hold down <Keys.HardKey>Avo</Keys.HardKey> the
    fixture will make a complete pan movement between end stops in one
    rotation of the wheel.

-   Some LED colour mixing fixtures have a Virtual Dimmer function
    (using the Intensity wheel) which offers intensity control by
    mastering the RGB levels when the fixture itself does not provide an
    intensity channel.

## Trackball (Diamond 9 and Sapphire Touch only)

The trackball normally controls Pan and Tilt of selected fixtures, with the Z-ring controlling intensity. You can assign the trackball to different attributes like this:

1. Select some fixtures having the attribute you want to assign (this is just so the wheel functions are displayed on the roller view).
2. Select an Attribute Bank so that one of the wheels is controlling the attribute you want to assign.
3. Press <Keys.HardKey>Assign</Keys.HardKey>.
4. Press the softkey for the function you want to assign, <Keys.SoftKey>Track Ball X</Keys.SoftKey>, <Keys.SoftKey>Track Ball Y</Keys.SoftKey> or <Keys.SoftKey>Wheel Z</Keys.SoftKey>.
5. Press the <Keys.HardKey>@</Keys.HardKey> button of the wheel which has the function you want to assign.

The attribute is assigned and the assign menu closes. To check the assignment has worked you can press <Keys.HardKey>Assign</Keys.HardKey> again and the softkeys should show the new attribute.

- You can also switch the trackball to control the mouse pointer on the touchscreens, see [Trackball (mouse control)](../titan-basics/workspace-windows.md#trackball-diamond-9-and-sapphire-touch-only).


## Intensity wheel (Diamond 9 only)

On the Diamond 9 a dedicated wheel is provided to set the intensity of selected
fixtures. A display above the wheel shows the wheel display for intensity. This wheel always controls
intensity and is not changed by the Attribute Bank buttons (unless you reassign it as described below).

Below the wheel is a <Keys.HardKey>Level \@</Keys.HardKey> button which shows the Adjust Attribute
Value menu for intensity (see [Adjusting Attributes with @ button](../controlling-fixtures/changing-fixture-attributes.md#adjusting-attributes-with-the--buttons) ). 

- You can assign this wheel to control a different attribute - see the trackball section above, but at step 4 use the <Keys.SoftKey>Level Wheel</Keys.SoftKey> softkey to assign the attribute. The display above the wheel will change to show the controlled attribute.

## Attribute Editor Window

For attributes with fixed values such as gobos and fixed colour wheels,
the Attribute Editor window can be easier to work with than the wheels as
you can directly choose gobos or colour slots.
It also offers a colour picker window for fixtures with RGB or CMY
colour mixing.

The Diamond 9 has a dedicated Editor touchscreen to show the Attribute Editor,
on other consoles you open it as a workspace window - Double press <Keys.HardKey>Open/View</Keys.HardKey> then <Keys.SoftKey>Attribute
Editor</Keys.SoftKey> from the window select buttons to show it. As a shortcut you can also show it by touching the
attribute name text just below the on-screen IPCGBES buttons.

The buttons on the left of the window select the attribute to change.

![Attribute Editor](/docs/images/Attribute-Editor.png)

The rest of the window contains buttons or controls to set the attribute
value. For attributes such as gobos and fixed colours, a button is
provided for each one, making selection a lot quicker than scrolling
through on a wheel.

When you apply an attribute, the button turns blue to show that the
attribute is in the programmer. If you touch the button again, the
attribute will be removed from the programmer.

Touching the title of an attribute (such as "Gobo 2") expands the
attribute to the full window, displaying more buttons as shown below.
Gobo images will be shown if the fixture personality has the information
included (not all do).

![Gobo Selection](/docs/images/Gobo-Selection.png)

If an attribute has a range of values, sliding your finger left and
right on the button will show a horizontal slider which allows you to
adjust the attribute.

![Range slider](/docs/images/Range-slider.png)

When the selected fixture has sub-fixtures or cells, buttons appear at
the top of the attribute editor window allowing you to select the whole
fixture (left hand button), or individual cells for control. The layout
of the cell buttons matches the layout set in the pixel mapper to help
you locate the correct cell on the fixture.

![Cells](/docs/images/Cell-Selection.png)

Some types of attribute have special displays as follows:

### Intensity/Shutter

![Intensity Shutter](/docs/images/Intensity-Shutter.png)

Provides an easy slider for Dimmer, also buttons for 0%, 100%, up and
down 5%, and intensity locate (affects only the intensity).

### Position

![Position](/docs/images/Position.png)

Provides a way to set the position from the touchscreen using an X-Y
grid. Positions of selected fixtures are shown as circles on the grid
which is useful to check positioning or spacing of fixtures. Other
controls are provided:

-   Locate sets 50/50 position (other attributes not affected),

-   [Flip](../controlling-fixtures/changing-fixture-attributes.md#flip) sets a moving head to its opposite yoke position.

-   Align sets pan/tilt to match the settings in the programmer of the
    most recently selected fixture. For example if you want to match the
    tilt of 4 fixtures to the first fixture, select fixtures in the
    order 2-3-4-1 and press <Keys.SoftKey>Align</Keys.SoftKey>.

-   Pan/Tilt lock buttons are helpful when setting positions of multiple
    fixtures using the X-Y grid. For example if you have 10 pan-fanned
    fixtures and you want to just move the tilt, select Pan lock.
    Otherwise the fixtures will all move to the position you click on,
    losing the fan effect.

-   Fine button switches to fine control mode for more precise
    positioning.

### Colour Mix: Channel

The Colour mix editor has 4 different ways of selecting colours, which
are useful in different ways (on Diamond 9, and on other consoles if you resize the window to a portrait shape, the sliders are horizontal rather
than vertical as shown in the pictures.)

![Attribute Editor - Colour Channels](/docs/images/Attribute-Editor-Channels.png)

The **Channel** tab provides a colour picker, with a slider for each colour control channel 
in the fixture. The
sliders shown will vary depending on what is provided in the fixture -
this example is an ETC Lustr fixture which has 7 independent LED emitter
colours. This mode is useful to obtain colours such as tints of white or
UV/Congo Blue which are hard to mix from a picker or colour wheel.

### Colour Mix: HSI/RGB/CMY

![Attribute Editor - Colour Mix](/docs/images/Attribute-Editor-HSI-RGB-CMY.png)

HIS/RGB/CMY provides a colour wheel with interactive sliders for
changing Hue/Saturation/Intensity, Red/Green/Blue, and
Cyan/Magenta/Yellow. Changing any slider or clicking on the wheel will
adjust all other sliders to match that colour, allowing you to make easy
small adjustments of colour using whichever control is easiest; for
example use the Saturation slider to create a pastel version of a colour
without affecting the hue.

All types of slider work for all fixtures, so a fixture with CMY mixing
can still be controlled using the RGB or HSI sliders.

### Colour Mix: Picker

![Attribute Editor - Colour Picker](/docs/images/Attribute-Editor-Picker.png)

This is the classic colour picker from earlier versions of Titan which
provides a picker for hue and saturation, with a slider on the right
hand side to set the intensity.


### Colour Mix: Filters

![Attribute Editor - Colour Filters](/docs/images/Attribute-Editor-Filters.png)

Lets you pick a gel/filter colour from commonly used
ranges of filters. You can search for a particular colour by name or by
number using the search bar. There is a context menu button to <Keys.SoftKey>Order
Filters by Number</Keys.SoftKey> or <Keys.SoftKey>Order Filters by Hue</Keys.SoftKey>.

- Using the keypad you can directly select a gel/filter by its reference number by typing <Keys.HardKey>@</Keys.HardKey> *library number* <Keys.HardKey>/</Keys.HardKey> *Gel number*. For example to set all selected fixtures to 106 from "Library L" you would type <Keys.HardKey>@</Keys.HardKey> *1* <Keys.HardKey>/</Keys.HardKey> *106*. Or you can select fixtures as part of the command, for example 10 <Keys.HardKey>@</Keys.HardKey> 1 <Keys.HardKey>/</Keys.HardKey> 106 would set the fixture with user number 10 to 106. For this command 1=Library L, 2=Library R, 3=Library G. If your console does not have a hardware <Keys.HardKey>/</Keys.HardKey> button you will need to use an external keyboard or the touch keyboard.

> For LED fixtures with additional emitters for Warm/Cool white, Amber, UV, Lime or Cyan, Colour Mix will automatically control all the colour channels to obtain the colour. In versions previous to Titan v9 only RGB elements were controlled by the colour picker and other colours had to be set independently.

### Media Servers/Active Fixtures

Active fixtures such as media servers will display a thumbnail of the
media clip in the button. The media server must support CITP and be
patched as an active fixture for the thumbnails to work.

For Ai media servers please see the [Synergy](../synergy.md) section for more details
of how Synergy allows you to control the setup and media playback.

![Clip Selection](/docs/images/Clip-Selection.png)

### Shutter Blades/Keystone

Fixtures which support keystoning or blades/shutters can be controlled
graphically in the attribute window. Select and drag the corners or
sides of the image to control the fixture. This control can have various
different appearances depending on the control channels in the fixture.

![Attribute Editor - Blades](/docs/images/Attribute-Editor-Blades.png)

>   Updated personality files may be required to support the keystone/blade functions. 
    If the functions are not shown in the Attribute View, try downloading and installing 
    the latest personality library, then 
    [update the personalities](../patching/changing-the-patch.md#updating-patched-personalities)
    in the Patch menu.

## Setting Attributes from the Softkeys

You can directly enter a numeric value for the attributes which are live
on the wheels. You must be at the main Program menu to do this (keep
pressing <Keys.HardKey>Exit</Keys.HardKey> until the vertical menu bar shows "Program Menu").

Type a number on the numeric keypad then press one of the softkeys to
set the value to the fixture. The Softkey legend will show what effect
your value is going to have (such as <Keys.SoftKey>Gobo 5</Keys.SoftKey>, or <Keys.SoftKey>Deep Blue</Keys.SoftKey>).

![Attribute Softkey](/docs/images/Attribute-Softkey.png)

For attributes displayed in percent, such as Dimmer, or Colour Mix, you
enter a value from 0-100 to set the percentage output (you can change the User Settings
so that you enter a single digit 0-9 for 0-90% - see the [Formatting tab of the User Settings](../system-settings/user-settings.md#formatting)).

For attributes
where the output is divided up into ranges, such as colour wheels, you
enter the index of the range you want. For example to select the 3rd
colour (as displayed in the list above the wheel) you would enter 3.

You can use the <Keys.HardKey>@</Keys.HardKey> button by the numeric keypad to set Dimmer levels in theatre-style programming, so <Keys.HardKey>@</Keys.HardKey>
50 <Keys.HardKey>Enter</Keys.HardKey> would set selected fixtures to 50% intensity.


## Adjusting Attributes with the @ buttons

Pressing the <Keys.HardKey>@</Keys.HardKey> button next to a wheel opens the Adjust Attribute
Value menu for that attribute.

You can also open this menu by touching the centre of the on-screen
wheel view for the attribute, or by clicking on the attribute in the
Channel Grid window.

(On Tiger Touch 1 the three buttons between the wheels act as @
buttons. On the Pearl Expert you will need to use the touch screen
method.).

The menu gives you the following functions:

-   Select Function: gives you shortcuts on the softkeys to the possible
    settings for the attribute (for dimmers, a range of values is
    provided).

-   Touch/Clear: places the attribute in the programmer or removes the
    attribute from the programmer

-   Locate: locates the attribute (does not place in programmer)

-   Release: releases the attribute

-   Off: sets the attribute to Off. This temporarily disables the
    attribute, though its value is stored and can be restored with On.

-   On: sets the attribute to On (when merged to a cue or palette, On
    will restore a value which has previously been set to Off)

-   Freeze/Unfreeze: freeze or unfreeze the attribute



## Attribute Groups - IPCGBES-FX

To make life a bit simpler, the console groups together attributes which
have similar effects, using the letters IPCGBES-FX.

I-Intensity (dimmer, strobe shutter)

P-Position (pan, tilt)

C-Colour (colour wheel, CMY mixing)

G-Gobo (gobo wheels, gobo rotate, gobo position)

B-Beam (iris, focus, zoom, beam shaper)

E-Effects (prism)

S-Special (motor speeds)

FX-Shapes, Pixel Mapper

These groups are used to select which attributes you want to work with
in many of the functions on the console, particularly when you are
"masking off" certain attributes from being saved.

![Attribute Groups](/docs/images/Attribute-Groups.png)

Above the attributes roller on the screen, the console shows you which
attribute group you are currently changing (the grey box). The Attribute
Group is also highlighted in blue if the programmer contains any of
those attributes. For example in the image above we are currently
changing Colour attributes, but Intensity and Special attributes have
also been modified.


## Align Fixtures

<Video videoId="xZrVhnY1hnA" title="Align Fixtures" />

You can copy attributes from one fixture to another using the Align
Fixtures function. This is useful for example if you
accidentally left a fixture out of a cue, you can use Align to copy settings from its
neighbour.

You can align multiple fixtures to others in one operation, either using
groups or individual selection. If you are aligning different numbers of
fixtures there are options to set how this is handled, see below.

1. Select the fixtures you want to Align either manually or using a
group.
2. Press <Keys.HardKey>ML Menu</Keys.HardKey> then <Keys.SoftKey>Align Fixtures</Keys.SoftKey> (on Diamond 9 press <Keys.HardKey>Align</Keys.HardKey>).
3. Set the mask to include the attribute groups you want to copy (using
the Attribute Bank buttons, or using the softkey options for exclude and
include all attributes).
4. Touch the select button of the fixture or group you want to copy the
settings from.
5. Press <Keys.SoftKey>Align</Keys.SoftKey>.

The fixture selection order is used to determine how the aligned values
are copied.

-   The <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> option will always set the mask to Include
    All whenever you enter the Align Fixtures function. The alternative
    option <Keys.SoftKey>Remember Mask</Keys.SoftKey> will leave the last mask set.

-   <Keys.SoftKey>Spread Attributes</Keys.SoftKey> will try to spread out the attribute changes
    if there are a different number of fixtures in the source and target
    groups (best for positions). <Keys.SoftKey>Repeat Attributes</Keys.SoftKey> will repeat the
    source selection on extra fixtures, or attempt to mirror the
    fixtures if there are fewer.

-   <Keys.SoftKey>Add To Programmer, Matching Source</Keys.SoftKey> will only align the attributes which
    are in the programmer, <Keys.SoftKey>Add All Attributes To Programmer</Keys.SoftKey> will align all the
    attributes which are enabled by the mask. So for example if you want
    to align the tilt of some fixtures and you have set the tilt you
    want on an example fixture, <Keys.SoftKey>Add To Programmer, Matching Source</Keys.SoftKey> would
    only change the tilt; but <Keys.SoftKey>Add All Attributes To Programmer</Keys.SoftKey> would copy the
    pan setting from the source fixture as well.

-   <Keys.SoftKey>Palette References Maintained</Keys.SoftKey> will copy palettes from the source
    fixtures. <Keys.SoftKey>Palette References Lost</Keys.SoftKey> will convert the palettes to
    absolute values in the target fixtures.

-   If the fixture you are copying the settings from is also one of the
    fixtures being aligned, it's difficult to tell what you are doing as
    all the fixture buttons light up red. However if you look at the top
    line of the screen, there is a list of the fixtures you have
    selected.

## Flip

Moving head fixtures can point at the same stage position from two
possible yoke positions. Sometimes to get the fixture moving the same as
other fixtures, you need to swap to the opposite yoke position and the
Flip function lets you do that.

1. Select the fixtures you want to Flip.
2. Press <Keys.HardKey>Fixture</Keys.HardKey> then <Keys.SoftKey>Flip Pan and Tilt</Keys.SoftKey>.

- The Position window in the Attribute Editor also has a <Keys.SoftKey>Flip</Keys.SoftKey> button
which does this. 

- On consoles with a <Keys.HardKey>ML Menu</Keys.HardKey> button you can also use that menu to access Flip.

> The settings used for Flip are defined in the fixture personality. If Flip doesn't work you may need to update to the latest personality.

## Fan Mode

Fan mode automatically spreads out the values on a selected range of
fixtures. If used on pan and tilt, the result is spreading out "rays" of
light beams. The first and last fixtures of the range are affected most,
and the central fixtures are affected least. The amount of fan can be
set using the attribute wheels.

As with shapes, the order in which you select the fixtures sets how the
fan effect works. The fixtures you select first and last will be the
ones which change most. If you use a group to select the fixtures, the
order you selected the fixtures when you recorded the group is used.

The fan effect, while normally used on pan or tilt attributes, can be
applied to any attribute.

1. Select the fixtures you want to fan.
2. Press <Keys.HardKey>Fan</Keys.HardKey>.
3. Select the attribute you want to Fan using the attribute bank
buttons.
4. Set the amount of fan using the attribute wheels.
5. Turn off Fan by pressing the Fan button again when you have
finished. Fan will turn off automatically if you change the fixture
selection.

If you have selected fixtures from multiple groups, you can choose
whether the fan effect works with or ignores the groups. For example if
you have 12 fixtures across the stage in 3 groups of 4, you may want a
fan of light beams spread evenly across the stage, or you may want 3
groups of separately fanned light beams.

By holding down <Keys.HardKey>Fan</Keys.HardKey> you can select:

-   <Keys.SoftKey>Ignore Groups</Keys.SoftKey> All fixtures are fanned as one large group

-   <Keys.SoftKey>Fan Group as Fixture</Keys.SoftKey> All fixtures in a group take on the same
    value.

-   <Keys.SoftKey>Fan Within Group</Keys.SoftKey> Fan runs across individual fixtures in each
    group.

Holding down <Keys.HardKey>Fan</Keys.HardKey> also allows you to select the Curve used for the
fan. The different curves allow you to obtain different fan effects.

Fan mode needs to be used on at least 4 fixtures to give good effects.
If you have an odd number of fixtures, the central fixture will not
change in fan mode.

Press <Keys.HardKey>Fan</Keys.HardKey> again to leave Fan mode. Any effects you have set will
remain in the programmer.

> It's all too easy to accidentally leave Fan mode turned on and be very confused about why the wheels aren't working properly, so turn it off as soon as you have completed the effect. To avoid this there is a [User Setting](../system-settings/user-settings.md) 'Press and hold Fan'. If enabled, you have to hold down <Keys.HardKey>Fan</Keys.HardKey> to enable Fan mode.

### Fan Curves

You can select different curves to use when in Fan mode. Hold down <Keys.HardKey>Fan</Keys.HardKey> and select <Keys.SoftKey>Curve</Keys.SoftKey>, the options are:

-   Line: Traditional fan, the first and last selected fixture are
    affected equally in opposite directions, the midpoint remains
    unchanged. This is most useful for pan.

    ![Fan Line](/docs/images/Fan-Line.png)

-   Mirror- Divides the selection into two halves, the position in each
    half is the mirror of the other half

    ![Fan Mirror](/docs/images/Fan-Mirror.png)

-   Wings -- Divides the selection into three parts, the positions in
    the outer two parts mirror each other and the central part does not
    change.

    ![Fan Wings](/docs/images/Fan-Wings.png)

-   Arrow - The first and last selected fixture are affected equally to
    the midpoint fixture but in the opposite direction. This is useful
    for colour mixing, tilt and dimmer.

    ![Fan Arrow](/docs/images/Fan-Arrow.png)

-   Pull Middle - The first and last selected fixture remain at the
    current value, the midpoint is affected most. This is useful for
    colour mixing, tilt and dimmer.

    ![Fan Pull Middle](/docs/images/Fan-Pull-Middle.png)

-   Pull Ends - The first and last selected fixture are affected most,
    the midpoint is unchanged. This is useful for colour mixing, tilt
    and dimmer.

    ![Fan Pull Ends](/docs/images/Fan-Pull-Ends.png)

-   Pull End -- Like pull ends but only from one end, the other end does
    not change

    ![FanPull End](/docs/images/FanPull-End.png)

### Fan Parts

When using the Fan function you can split the fan into a number of
groups. Select all the fixtures, hold down <Keys.HardKey>Fan</Keys.HardKey> and type a number on
the numeric keypad. The Fan will divide into that number of parts, for
example:

Normal (1):

![Fan 1 Part](/docs/images/Fan-1-Part.png)

2:

![Fan 2 Parts](/docs/images/Fan-2-Parts.png)

3:

![Fan 3 Parts](/docs/images/Fan-3-Parts.png)

## Setting Fixture/Attribute Times

Fade and delay timings can be directly set for each fixture or
individual attributes of a fixture. When you store the settings into a
cue, the time settings will then become part of the cue.

There are a number of ways to set the times:

-   You can set individual attribute times by switching the wheels to
    Fade Time / Delay Time mode using the <Keys.SoftKey>Wheels=</Keys.SoftKey> softkey on the
    root menu. The Diamond 9 has a <Keys.HardKey>Fade / Delay</Keys.HardKey> button to the right
    of the wheels to set this mode.

-   Individual attribute times can also be set using a combination of
    the wheel @ keys and the <Keys.HardKey>Time</Keys.HardKey> key.

-   They can also be set by selecting fixtures and entering into the
    attribute times submenus from the <Keys.HardKey>Time</Keys.HardKey> key.

-   There is also command syntax that allows various options to set
    attribute time values - e.g. <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> 5 @ 3
    would set a 5s fade, 3s delay time onto the current fixture
    selection P group. Wheel @ keys can also be used in the syntax. Fan
    options are also available through syntax using THRO.

Setting a time attribute value will cause the \'in programmer\'
indication to light up.

The Channel Grid window has a Times context menu button which allows you
to view or edit all the attribute times currently in the programmer. You
can set a time to Off to temporarily disable it; the On option will
restore the previous setting.

You can try out time settings by pressing <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Time</Keys.HardKey> or double
tap the <Keys.HardKey>Time</Keys.HardKey> button. (previously the <Keys.HardKey>Set</Keys.HardKey> button on Titan
Mobile/Sapphire Touch and the <Keys.HardKey>Next Time</Keys.HardKey> button on Tiger Touch/Pearl
Expert).

## Clearing Attributes Using "Off"

Once you have changed an attribute, the value you set will be in the
programmer and will be stored in any cues or palettes you create. If
you've accidentally changed something and don't want to store it, you
can use the Off function to remove it from the programmer.

1. Press <Keys.HardKey>Off</Keys.HardKey> to display the Off menu.
2. Use the Attribute Bank buttons to toggle which attributes you want
to change. Then press the <Keys.SoftKey>Attributes Off</Keys.SoftKey> softkey to set them to Off.
3. The softkeys also give you options to turn off active attributes,
such as <Keys.SoftKey>Dimmer Off</Keys.SoftKey>.

-   To remove complete fixtures, select the fixtures, press <Keys.HardKey>Off</Keys.HardKey> then
    <Keys.SoftKey>Selected Fixtures Off</Keys.SoftKey>.
