---
id: using-the-select-buttons-and-wheels
title: Using the Select Buttons and Wheels
sidebar_label: Using the Select Buttons and Wheels
original_id: using-the-select-buttons-and-wheels
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Selecting Fixtures and Dimmers for Control

To select the fixtures or dimmer channels that you want to control, you
use the Fixture Select buttons to select the fixtures into the Editor.
You can select fixtures or dimmers individually, or several at once. You
can also use [Groups](../controlling-fixtures/fixture-groups.md) to select multiple fixtures.

If the fixture is patched on a fader handle, press the blue button to
select the fixture.

![Fixtures Window](/docs/images/Fixtures-Window.png)

1. Press the Select buttons for the fixtures you want. Touch buttons
will light up pale blue when selected, physical buttons will light
brightly.

2. To select a range of fixtures, slide your finger across the touch
buttons to draw a selection box. For fixtures patched on faders, hold
down the Select button for the first fixture then press the Select
button for the last fixture.

Here are some other useful things to know:

-   Press <Keys.HardKey>Locate</Keys.HardKey> to light up the selected fixtures in open white and
    move them to a central position. Locate options are described in detail in the
    [next section](../controlling-fixtures/using-the-select-buttons-and-wheels.md#setting-fixtures-to-a-start-position-locate).

-   You can deselect a fixture by pressing the select button again.

-   In the top bar of the screen, the console will show you which
    fixtures are currently selected.

-   Press <Keys.HardKey>Clear</Keys.HardKey> (right of numeric keys) to deselect all fixtures and
    remove all changes from the programmer. See the [next section](../controlling-fixtures/using-the-select-buttons-and-wheels.md#clearing-selection) for
    more Clear options.

-   Once you have changed any attribute, pressing a Select button will
    deselect all fixtures and start the selection process again. All
    previously selected fixtures (since you last pressed <Keys.HardKey>Clear</Keys.HardKey>) stay
    in the programmer. Once a fixture has been edited, Fixture buttons
    show a darker blue. The picture above shows the first two fixtures
    selected, with the second three in the programmer and the others
    unselected.

-   You can select fixtures on another page by touching one of the page
    buttons to the left of the fixture buttons, if you have \'Pages\'
    set to Show (using the context button). Otherwise you can use the
    scroll slider to show more buttons. On fader handles, Page buttons
    are provided to change pages -- on the Pearl Expert these are above
    the numeric keypad, on other consoles they are next to the faders.

-   Using [Key Profiles](../system-settings/key-profiles.md) you can set the
    fixture touch button to latch mode so that it turns the fixture's
    dimmer channel on (like putting a preset fader to full).

## Setting Fixtures to a Start Position (Locate)

The <Keys.HardKey>Locate</Keys.HardKey> button is used to put the fixture into a known position
with light coming out, so that you can start programming it.

A quick press of the button will move all selected fixtures to a central
position and reset all the attributes so that you get a white light.
However you sometimes might not want to move the fixture, or may want to
keep some other attributes unchanged. By holding down the <Keys.HardKey>Locate</Keys.HardKey>
button rather than a quick press, you get some more options

-   You can mask off some of the Locate settings (such as only turning
    the fixture on, but not changing its position or colour) by holding
    down <Keys.HardKey>Locate</Keys.HardKey> and pressing <Keys.SoftKey>Set Mask to Exclude All</Keys.SoftKey>. Then
    (still holding <Keys.HardKey>Locate</Keys.HardKey>) turn on the Attributes you want to change
    using the Attribute buttons. Only the lit attributes will be changed
    by Locate. Pressing the <Keys.HardKey>Options</Keys.HardKey>/<Keys.HardKey>Attribute Options</Keys.HardKey> button
    will clear the mask.

-   Option <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> sets the mask to be automatically reset
    to include everything each time Locate is pressed, or you can toggle
    the option to <Keys.SoftKey>Remember Mask</Keys.SoftKey> which will keep the mask setting you
    used last time.

-   Option <Keys.SoftKey>Clear/Don't Clear Located Attributes</Keys.SoftKey> sets whether the
    attributes changed by the Locate function will be saved into any
    cues you store. If the option is set to "Clear" then the Located
    attributes will not be stored in the Programmer unless you modify
    them using the wheels. This is useful if for example you want to
    program a cue which sets the position of fixtures, but does not turn
    them on. The <Keys.HardKey>Locate</Keys.HardKey> button will light up the fixtures for
    programming, but the lit state will not be stored in any cues you
    save.

> To quickly locate <strong>without changing pan/tilt</strong>, hold <Keys.HardKey>Locate</Keys.HardKey> and press the Pan/Tilt (or Position) button, then release <Keys.HardKey>Locate</Keys.HardKey>.


> To quickly locate <strong>pan/tilt only</strong>, hold <Keys.HardKey>Locate</Keys.HardKey>, press <Keys.HardKey>Options</Keys.HardKey> (<Keys.HardKey>Attribute Options</Keys.HardKey> on some consoles), then press <Keys.HardKey>Position</Keys.HardKey> (<Keys.HardKey>Pan/Tilt</Keys.HardKey> on some consoles), then release <Keys.HardKey>Locate</Keys.HardKey>.


### Changing the Locate State

You can change the default locate state of each fixture in a show by
recording a new Locate State. This can be shared (you set the values for
one fixture, and then it applies to all fixtures of the same type) or
individual (you can set different values for each individual fixture).
To store, set up the desired locate state on the fixture(s) you want to
change, then press <Keys.HardKey>Record</Keys.HardKey>, then <Keys.HardKey>Locate</Keys.HardKey>. Select <Keys.SoftKey>Shared</Keys.SoftKey> or
<Keys.SoftKey>Individual</Keys.SoftKey> from the softkeys. Press <Keys.HardKey>Record</Keys.HardKey> or <Keys.HardKey>Locate</Keys.HardKey> a
second time to confirm.

## Clearing Selection

The <Keys.HardKey>Clear</Keys.HardKey> button (on the right of the numeric keypad) is used to
remove all changes from the Programmer and deselect all fixtures. A
quick press of the <Keys.HardKey>Clear</Keys.HardKey> button just clears everything, however if
you hold down the <Keys.HardKey>Clear</Keys.HardKey> button, then more options are available.

-   You can mask which attributes are to be cleared (for example,
    leaving the pan/tilt in the programmer but clearing everything else)
    by holding down <Keys.HardKey>Clear</Keys.HardKey> and pressing <Keys.SoftKey>Set Mask to Clear
    Nothing</Keys.SoftKey>. Then (still holding <Keys.HardKey>Clear</Keys.HardKey>) turn on the Attributes you
    want to change using the Attribute Bank buttons down the right hand
    side, or press <Keys.SoftKey>Set Mask</Keys.SoftKey> and use the softkeys. Only the lit
    attributes will be cleared. Pressing the <Keys.HardKey>Options</Keys.HardKey>/<Keys.HardKey>Attribute
    Options</Keys.HardKey> button will clear the mask. The Time mask option allows
    you to clear or retain the fade/delay times in the programmer for
    all attributes (clearing individual attributes will also clear times
    for that attribute, for example setting a P mask will clear position
    times).

-   Hold <Keys.HardKey>Clear</Keys.HardKey> and press <Keys.HardKey>All</Keys.HardKey> to deselect all fixtures, but leave
    the changes in the programmer.

-   <Keys.SoftKey>Clear Options</Keys.SoftKey> opens a submenu showing some further options
    (described below).

-   <Keys.SoftKey>Clear All Fixtures/Selected Fixtures</Keys.SoftKey> sets whether all fixtures
    will be cleared from the programmer, or if only currently selected
    fixtures will be cleared. This is useful if you want to clear
    specific fixtures.

-   <Keys.SoftKey>Individual Attributes</Keys.SoftKey> allows you to clear individual attributes
    from the Programmer. When you press the softkey, you are given a
    list of attributes in the Programmer -- press the appropriate
    softkey to clear that attribute.

-   <Keys.SoftKey>Clear All Programmers</Keys.SoftKey> will clear all programmers that are
    currently active on the console, including Multi-user programmers
    from other users, and the Titan Remote programmer.

The options in the "Clear Options" submenu are:

-   <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> sets the mask to be automatically reset to clear
    everything each time Clear is pressed, or you can toggle the option
    to <Keys.SoftKey>Remember Mask</Keys.SoftKey> which will keep the mask setting you used last
    time.

-   &nbsp;<Keys.SoftKey>Leave/Zero Preset Fader Levels</Keys.SoftKey> is used to set whether latched
    fixtures are cleared (the [fixture key profile](../system-settings/key-profiles.md#creating-and-editing-key-profiles) can be set to "Latch"
    mode, which turns on the fixture dimmer channel when the fixture
    button is touched.)

-   <Keys.SoftKey>Freeze current values</Keys.SoftKey> sets what happens to LTP (non-intensity)
    channels you have modified. If set to <Keys.SoftKey>Freeze Current Values</Keys.SoftKey> the
    channels remain as you set them. If set to <Keys.SoftKey>Release To Playback
    Values</Keys.SoftKey> the channels will go back to how they are set in the
    current playback. For example: you have an active playback making
    some lights green, then you select the lights and change them to
    red. If you press Clear with this option set to <Keys.SoftKey>Freeze</Keys.SoftKey> then the
    lights remain red. If the option is <Keys.SoftKey>Release</Keys.SoftKey> the lights will go
    back to green.

-   <Keys.SoftKey>Clear/Maintain Cue Times</Keys.SoftKey> - determines whether or not to clear
    the cue time information from the programmer (this will not affect
    fixture attribute times in the programmer).

You can use the [Channel Grid](../controlling-fixtures/viewing-and-editing-fixture-values.md#the-channel-grid-window) window to selectively view and remove
attributes from fixtures.

> If you type a number then press <Keys.HardKey>Clear</Keys.HardKey>, HTP values in the programmer will fade out over that time, for example 5 <Keys.HardKey>Clear</Keys.HardKey> would fade over 5 seconds. This can be very useful if you are trying to be subtle when making changes during a show.

## Fixtures with Multiple Cells/Sub-Fixtures

If a fixture has multiple cells of control (for example an RGB LED
batten) and its personality supports it, you can select and control the
fixture either as a whole or as independent cells. This is particularly
useful when using Shapes or the Pixel Mapper.

If you select the fixture using the handle it is patched on, all cells
of the fixture will be controlled together.

You can use the buttons which appear at the top of the attribute editor
window to select the main fixture, or individual cells for control (double
press <Keys.HardKey>Open/View</Keys.HardKey> to open the Attribute Editor window from the window
select buttons).

![Cell Selection](/docs/images/Cell-Selection.png)

You can also use <Keys.HardKey>Unfold</Keys.HardKey> to expand the cells onto individual select
buttons. In the Fixtures workspace, the current page of fixtures will be
replaced by select buttons for each individual fixture cell. On fader
handles, the unfolded fixture cells will start at handle 1.

There are two ways to unfold fixture cells:

-   Press <Keys.HardKey>Unfold</Keys.HardKey> then select range of fixtures. The cells will
    immediately appear on the handles.

-   Select fixtures, press <Keys.HardKey>Unfold</Keys.HardKey>, then press <Keys.SoftKey>Selected Fixtures</Keys.SoftKey>.
    This method allows for non-consecutive fixtures to be unfolded.

To go back to normal, press <Keys.HardKey>Unfold</Keys.HardKey> then <Keys.SoftKey>Exit Unfold</Keys.SoftKey>.

You can also use the numeric keypad to quickly select cells. The syntax
is as follows: (<Keys.HardKey>THRO</Keys.HardKey> is called Through on some consoles)

| Keypresses                                   | Selection                                                               |
|----------------------------------------------|-------------------------------------------------------------------------|
| <Keys.HardKey>.</Keys.HardKey>                                        | All sub-fixtures of selection                                           |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey>                                  | All sub-fixtures of fixture <strong>n</strong>                                       |
| <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>                   | Sub-fixtures 1 - <strong>j</strong> of all selected fixtures                         |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey>                         | All sub-fixtures of fixture <strong>n</strong> through last consecutive of that type |
| <strong>n</strong> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>                   | Shorthand for above                                                     |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong>                   | Sub-fixtures 1 - <strong>i</strong> of fixture <strong>n</strong>                                 |
| <Keys.HardKey>.</Keys.HardKey> <strong>m</strong>                                  | Sub-fixture <strong>m</strong> of all selected fixtures                              |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>       | Sub-fixtures 1 - <strong>j</strong> of fixtures <strong>n</strong> - <strong>i</strong>                        |
| <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey>                         | Sub-fixtures <strong>m</strong> through last of all selected fixtures                |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <strong>m</strong>                            | Sub-fixture <strong>m</strong> of fixture <strong>n</strong>                                      |
| <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>             | Sub-fixtures <strong>m</strong> - <strong>j</strong> of all selected fixtures                     |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey>                   | Sub-fixtures <strong>m</strong> through last of fixture <strong>n</strong>                        |
| <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey> <strong>j</strong>                   | Shorthand for above                                                     |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong>             | Sub-fixtures <strong>m</strong> - <strong>i</strong> of fixture <strong>n</strong>                             |
| <strong>n</strong> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong> <Keys.HardKey>.</Keys.HardKey>                   | All sub-fixtures of fixtures <strong>n</strong> - <strong>i</strong>                              |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong> <Keys.HardKey>.</Keys.HardKey>       | Sub-fixture <strong>m</strong> through last of fixtures <strong>n</strong> - <strong>i</strong>                |
| <strong>n</strong> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>             | Sub-fixture <strong>j</strong> of fixtures <strong>n</strong> - <strong>i</strong>                             |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey> <strong>i</strong> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong> | Sub-fixtures <strong>m</strong> - <strong>j</strong> of fixtures <strong>n</strong> - <strong>i</strong>                    |
| <strong>n</strong> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>                   | Sub-fixture 1 - <strong>j</strong> of fixture <strong>n</strong>                                  |
| <strong>n</strong> <Keys.HardKey>.</Keys.HardKey> <strong>m</strong> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> <strong>j</strong>       | Sub-fixtures <strong>m</strong> - <strong>j</strong> of fixture <strong>n</strong>                             |

-   Fixture cell selection can be saved as a group, this provides a
    quick way to select cells / sub-fixtures without having to use the
    Attribute Editor or Unfold.

## Changing Attributes Using The Wheels

"Attributes" are the functions of the fixture, like pan, tilt, colour,
dimmer, etc. You select which attributes you want to modify using the
IPCGBESFX Attribute Bank buttons and set values using the wheels. The attributes
available depend on the fixture type. Dimmer channels only have a dimmer
attribute.

The touch display above the wheels shows the current attribute bank (grey background)
and the current values on the wheels. The light blue circles show attributes
which you have changed and which are in the programmer. The roller graphics show
the different attributes which are available, which may be a percentage for a
variable attribute, or named ranges for something like a colour or gobo wheel.

![Wheels](/docs/images/Wheels.png)

You can also set attributes using the [Attribute Editor workspace
window](../controlling-fixtures/using-the-select-buttons-and-wheels.md#attribute-editor-window).

>   On the Pearl Expert the wheels on the Touch Wing are used instead of the
    wheels on the console, unless you change this using the User Settings.

Each attribute button controls several attributes, one on each wheel. On
Sapphire Touch the trackball controls pan/tilt of the selected
fixtures, with the ring controlling dimmer by default. You can change this
by pressing the <Keys.HardKey>Assign</Keys.HardKey> button next to the trackball.

1. With some fixtures selected, press the button for the attribute to
be changed

2. Turn the wheels to set the attribute. The settings which are
available scroll up and down on the wheel display as you turn the wheels.  
You can also touch the roller image on the screen to change the
attributes up or down by one step. For continuously variable controls like a
dimmer, touching the roller will set the attribute to full or zero.

3. Repeat from <strong>step 1</strong> to change other attributes of the selected fixtures.

---

Some other things to know about attributes:

![Toggle Attributes](/docs/images/Toggle-Attributes.png)

-   If the wheel display shows a small arrow next to the legends as shown above, this
    means that there are more than three attributes to control in this bank. 
    Press the attribute button again to toggle through the attributes (for example
    some LED fixtures have Red, Green, Blue, Amber, White - so when you
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
    
-   You can also select the attribute to be changed from the softkeys by
    pressing the <Keys.HardKey>Attribute Options</Keys.HardKey> button.

-   Some LED colour mixing fixtures have a Virtual Dimmer function
    (using the Intensity wheel) which offers intensity control by
    mastering the RGB levels when the fixture itself does not provide an
    intensity channel.



## Attribute Editor Window

For attributes with fixed values such as gobos and fixed colour wheels,
the Attribute Editor window can be easier to work with than the wheels.
It also offers a colour picker window for fixtures with RGB or CMY
colour mixing.

Double press <Keys.HardKey>View/Open</Keys.HardKey> then <Keys.SoftKey>Attribute
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

-   [Flip](../controlling-fixtures/using-the-select-buttons-and-wheels.md#flip) sets a moving head to its opposite yoke position.

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
are useful in different ways.

![Attribute Editor - Colour Channels](/docs/images/Attribute-Editor-Channels.png)

The <strong>Channel</strong> tab provides a colour picker, with a slider for each colour control channel 
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

Lets you pick a gel/filter colour from the Lee, Roscolux or GamColor
ranges of filters. You can search for a particular colour by name or by
number using the search bar. There is a context menu button to <Keys.SoftKey>Order
Filters by Number</Keys.SoftKey> or <Keys.SoftKey>Order Filters by Hue</Keys.SoftKey>.

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
enter a value from 0-100 to set the percentage output. For attributes
where the output is divided up into ranges, such as colour wheels, you
enter the index of the range you want. For example to select the 3rd
colour (as displayed in the list above the wheel) you would enter 3.

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

## Selecting Fixtures and Dimmers by number (Channel)

In some situations, for example when programming lots of dimmers, it can
be easier to type in the dimmer channels you want to program. The
Channel menu allows you to do this for dimmers or fixtures. To access
the Channel menu, press the <Keys.HardKey>Fixture</Keys.HardKey> button on the top left of the
numeric keypad. You can also simply start typing numbers on the keypad,
when you press Through, And or @ then the Channel menu will be shown.

Through, And and @ are provided as softkey functions or (depending on
console) are buttons adjacent to the numeric keypad.

Fixtures may be selected by User Number, Handle Number or DMX Address,
as set by the option on Softkey A.

When using the Channel menu it is helpful to latch it by pressing <Keys.HardKey>Menu
Latch</Keys.HardKey>.

-   To select a fixture, type the number and press <Keys.HardKey>Enter</Keys.HardKey>.

-   To select more than one fixture, press the <Keys.SoftKey>And</Keys.SoftKey> softkey between
    each number. For example 1 And 2 And 5 <Keys.HardKey>Enter</Keys.HardKey> will select 1,
    2, 5.

-   To select a range of fixtures, press <Keys.SoftKey>Through</Keys.SoftKey>. For example 1
    Through 8 <Keys.HardKey>Enter</Keys.HardKey> will select 1-8. If you miss out the last number
    it will select all remaining fixtures of the same type.

-   To miss out fixtures in a range, use <Keys.SoftKey>Not</Keys.SoftKey>, for example 1 Through
    4 Not 3 <Keys.HardKey>Enter</Keys.HardKey> will select 1, 2, and 4.

-   The @ softkey sets a dimmer level to the selected fixtures, for
    example 1 Through 8 @ 5 <Keys.HardKey>Enter</Keys.HardKey> will set 1-8 at 50%. (You can
    choose whether 50% is entered as "5" or "50" in the [User Settings](../system-settings/user-settings.md) - When you press @ there are softkey
    options for Full, Off and +/- (increase or decrease brightness).

-   You can work with Groups using the Group button, for example Group 1
    And Group 2 Not 5 <Keys.HardKey>Enter</Keys.HardKey> will select all fixtures in group 1 and
    group 2 except for fixture 5.

-   You can use <Keys.HardKey>Locate</Keys.HardKey> instead of <Keys.HardKey>Enter</Keys.HardKey>, to select fixtures and
    locate them. For example 1 Through 4 <Keys.HardKey>Locate</Keys.HardKey> will select fixtures
    1 to 4 and locate them.

![Syntax Selection](/docs/images/Syntax-Selection.png)

-   When entering a command, the command line is shown on the display.
    You can go back using the grey Back button and you can abandon the
    line using the grey @ button.

-   The AND, THRO and @ functions are also provided on the grey buttons
    either above or below the numeric keypad, as printed on the legend
    next to the buttons.

## Selecting Fixtures using a Pattern

When programming you will often want to select patterns of fixtures.
Rather than having to individually select and deselect fixtures, Titan
has an easy way of selecting patterns of fixtures within a range.

1. Select some fixtures.

2. Press the <Keys.HardKey>All</Keys.HardKey> button (labelled Odd/Even on some consoles).

3. Select a pattern from the softkeys. Your selection is modified so
you will only be controlling, say, the odd fixtures.


![Pattern Select](/docs/images/Pattern-Select.png)

4. Press the <Keys.HardKey>Fix +1</Keys.HardKey> or <Keys.HardKey>Fix -1</Keys.HardKey> button to change the selection to
the next stage of the pattern (<Keys.HardKey>Next</Keys.HardKey> and <Keys.HardKey>Prev</Keys.HardKey> on some consoles).

5. To end the pattern selection, press <Keys.HardKey>All</Keys.HardKey> twice.

-   The Direction option allows you to set the fixture selection order
    to go in a specific direction (using the group layout). This is
    useful for selecting symmetrical pairs of fixtures and for quickly
    creating cues using 
    [Fixture Overlap](../cues/cue-timing.md#fade-times-and-fixture-overlap).

-   Direction will return to "None" when you press Clear. You can change
    this by setting <Keys.SoftKey>Clear / Maintain Direction</Keys.SoftKey> in the <Keys.SoftKey>Clear
    Options</Keys.SoftKey> menu (hold the Clear button down to see this option).

-   For example, if you are programming a chase using 16 fixtures and
    you want every 4^th^ fixture to do the same thing, you just select
    the 16 fixtures, then press <Keys.HardKey>All</Keys.HardKey>, then <Keys.SoftKey>1 in x</Keys.SoftKey>, then <Keys.SoftKey>1 in
    4</Keys.SoftKey>. You will see that the 1^st^, 5^th^, 9^th^ and 13^th^ fixtures
    are now selected, and you can create the look for those fixtures.
    Then press <Keys.HardKey>Fix +1</Keys.HardKey>, and the 2^nd^, 6^th^, 10^th^ and 14^th^
    fixtures will be selected ready for programming. After you have
    programmed the fourth set of fixtures, the pattern will go back to
    the first position again, until you press <Keys.HardKey>All</Keys.HardKey> twice to end.

-   You can enter your own patterns using the numeric keypad and
    softkeys, for example "2" <Keys.SoftKey>In</Keys.SoftKey> "6" <Keys.HardKey>Enter</Keys.HardKey>.

-   You can also get to these options by holding down a group selection
    button for the fixtures.

## Selecting Fixtures which are in a Playback

To select fixtures which are controlled by a particular playback use the
Select If function.

To select fixtures used in a playback, press <Keys.HardKey>Select If</Keys.HardKey> then the
playback button. (If the console does not have a <Keys.HardKey>Select If</Keys.HardKey> button,
press <Keys.HardKey>Fixture</Keys.HardKey> then <Keys.SoftKey>Select If</Keys.SoftKey>. The <Keys.HardKey>Fixture</Keys.HardKey> button is at the
top left of the numeric keypad and may be labelled <Keys.HardKey>Channel</Keys.HardKey> on older
consoles.)

You can also use <Keys.HardKey>Select If</Keys.HardKey> with the <Keys.HardKey>@</Keys.HardKey> and <Keys.HardKey>Through</Keys.HardKey> buttons on
the numeric keypad to select fixtures set to a particular intensity.


\@X: fixtures set to intensity X


@ Through X: fixtures with intensity 0 -- X


@ X Through: fixtures with intensity X -- Full


@ X Through Y: fixtures with intensity between X and Y


@@: fixtures with intensity above 0.

Intensity levels may be input as 0-9 or 00-99 depending on the [User
Setting](../system-settings/user-settings.md) <Keys.SoftKey>Channel Levels Set In</Keys.SoftKey>.

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

## Stepping through selected fixtures one at a time

If you have selected a range of fixtures, or a group, the console has
functions to step through the selected fixtures one at a time. This can
make it easier to program a range of fixtures because you don't have to
select each one manually.

This mode uses the All/HiLight/Fix +1/Fix -1 buttons.

1. Select a range of fixtures or a group.

2. The <Keys.HardKey>Fix +1</Keys.HardKey> and <Keys.HardKey>Fix -1</Keys.HardKey> buttons will select the fixtures in the
range one at a time (in the order you selected them). Buttons are
labelled <Keys.HardKey>Prev</Keys.HardKey> and <Keys.HardKey>Next</Keys.HardKey> on some consoles.

3. The <Keys.HardKey>All</Keys.HardKey> button will select all fixtures in the programmer
(everything which has been selected since <Keys.HardKey>Clear</Keys.HardKey> was last pressed).

-   The HiLight function can be used to highlight the output of the
    selected fixture (make it brighter onstage), see the next section.

## Highlighting the Selected Fixture with Prev/Next

When stepping through a fixture selection using <Keys.HardKey>Fix +1</Keys.HardKey>/<Keys.HardKey>Fix -1</Keys.HardKey>, you
can highlight the selected fixture on stage. This makes it very easy to
see which fixture you are controlling. The other fixtures in the
selection go to a dimmed "lowlight" level.

-   Press <Keys.HardKey>HiLight</Keys.HardKey> to enable highlight mode. Press <Keys.HardKey>HiLight</Keys.HardKey> again
    to disable. When you are in highlight mode, the highlighted
    attribute is overridden and any changes you make to it are not
    stored in the programmer (so if the highlight uses intensity, you
    cannot change the intensity of the fixture).

-   You can change the levels used for Highlight/Lowlight by pressing
    <Keys.HardKey>Record</Keys.HardKey> then pressing <Keys.HardKey>HiLight</Keys.HardKey>, <Keys.SoftKey>Store Highlight State</Keys.SoftKey> or
    <Keys.SoftKey>Store Lowlight State</Keys.SoftKey>.

## Turn Off Unselected Fixtures (Remainder Dim)

To turn off all unselected fixtures use the Remainder Dim function by
pressing <Keys.HardKey>Rem Dim</Keys.HardKey> (<Keys.HardKey>Avo</Keys.HardKey>+<Keys.HardKey>All</Keys.HardKey>). The zero intensity is placed in
the programmer and will be recorded into any cue. This is useful when
removing fixtures from cues.

## Align Fixtures

<Video videoId="xZrVhnY1hnA" title="Align Fixtures" />

You can copy attributes from one fixture to another using the Align
Fixtures function. This is very useful, for example, if you've
accidentally left a fixture out of a cue you can copy settings from its
neighbour.

You can align multiple fixtures to others in one operation, either using
groups or individual selection. If you are aligning different numbers of
fixtures there are options to set how this is handled, see below.

1. Select the fixtures you want to Align either manually or using a
group.

2. At the top level menu press <Keys.HardKey>Fixture Tools</Keys.HardKey>/<Keys.HardKey>ML Menu</Keys.HardKey> then
<Keys.SoftKey>Align Fixtures</Keys.SoftKey>.

3. Set the mask to include the attribute groups you want to copy (using
the Attribute Bank buttons, or using the softkey options for exclude and
include all attributes).

4. Touch the select button of the fixture or group you want to copy the
settings from.

5. Press <Keys.SoftKey>Align</Keys.SoftKey>

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

-   <Keys.SoftKey>Align Programmer Attributes</Keys.SoftKey> will only align the attributes which
    are in the programmer, <Keys.SoftKey>Align All Attributes</Keys.SoftKey> will align all the
    attributes which are enabled by the mask. So for example if you want
    to align the tilt of some fixtures and you have set the tilt you
    want on an example fixture, <Keys.SoftKey>Align Programmer Attributes</Keys.SoftKey> would
    only change the tilt; but <Keys.SoftKey>Align All Attributes</Keys.SoftKey> would copy the
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

2. At the top level menu press <Keys.HardKey>ML Menu</Keys.HardKey> then <Keys.SoftKey>Flip Pan and Tilt</Keys.SoftKey>.

The Position window in the Attribute Editor also has a <Keys.SoftKey>Flip</Keys.SoftKey> button
which does this.

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

You can select different curves to use when in Fan mode. Hold down
<Keys.HardKey>Fan</Keys.HardKey> and select <Keys.SoftKey>Curve</Keys.SoftKey>, the options are:

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
    root menu.

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
