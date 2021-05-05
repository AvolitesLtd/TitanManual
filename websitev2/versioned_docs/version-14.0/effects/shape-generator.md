---
id: shape-generator
title: Shape Generator
sidebar_label: Shape Generator
original_id: shape-generator
---

import Keys from '@site/src/components/key.ts';

[](https://youtu.be/oTo6FxHD02o?t=20 "Using Shape Generator")

A shape is simply an automatic sequence of values which modify a
particular attribute of a fixture. A circle shape, for example, applied
to the pan and tilt attributes, would cause the fixture to move its beam
in a circular pattern around its current position. You can set the size
of the circle and the speed of the circle movement.

Shapes are most useful when used with a group of fixtures. You can then choose to
either apply the shape identically to all the fixtures, or offset them
so that the shape runs along the fixtures creating *"wave"* or *"ballyhoo"*
type effects (called the **Spread** or **Phase** of the shape). This allows
you to very quickly create impressive light shows.

In addition to position shapes, there are a large number of other shapes
available in Titan. The shapes are defined for a particular attribute
such as colour, dimmer, focus and so on.

Titan also has a **Mask FX** function which lets you mask out certain
shapes, preventing them from appearing on the lights. For example, if
some fixtures are running a Circle shape, and then a playback is fired
which has a Position Mask Shape programmed for some of the fixtures, those fixtures
will stop running the circle shape. This can be very useful to modify
playbacks at show time. See
the [Mask FX](shape-generator.md#masking-shapes-using-mask-fx) section below for details.



![Capture Visualiser with a shape running across fixtures](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures.png)

Creating a Shape
-----------------

When you create a shape, it will be applied to all selected fixtures.

1. [Select the fixtures](../controlling-fixtures/using-the-select-buttons-and-wheels.md#selecting-fixtures-and-dimmers-for-control) the shape is to be applied to

2. At the main menu press <Keys.SoftKey>Shapes and Effects</Keys.SoftKey> then <Keys.SoftKey>Shape
Generator</Keys.SoftKey>

3. Press <Keys.SoftKey>Create</Keys.SoftKey> to start a new shape
![Shape Generator selecting a category of new shape](/docs/images/Shape-Generator-selecting-a-category-of-new-shape.png)

4. Press a <Keys.SoftKey>softkey</Keys.SoftKey> to select the attribute type to use in the shape or
press <Keys.SoftKey>All</Keys.SoftKey> for a full list

5. Press a <Keys.SoftKey>softkey</Keys.SoftKey> to select a shape, or touch the desired shape in the
**Shapes window**. You can type a search word on the keyboard to search for
a particular shape.

6. The shape will be applied to all selected fixtures

---

-   If you open the Shapes window, it will remain open for instant
    selection of shapes (you don't need to select <Keys.SoftKey>Shape Generator</Keys.SoftKey>).
    The window will only show shapes which are possible on the selected
    fixtures. Pressing attribute buttons will filter the Shapes window
    to show only shapes for that attribute. Press the <Keys.HardKey>Dimmer</Keys.HardKey>
    attribute button to show all shapes.\
    \
    ![Shapes Workspace Window](/docs/images/Shapes-Workspace-Window.png)

-   Shapes are based on the current settings of the fixture, *so a
    position circle would move around the current pan-tilt position of
    the fixture.*

-   You can change the base value of a shape (e.g. the centre of a
    circle) by changing the attributes using the wheels in the usual
    way. You can reduce the Size to zero (see
    [next section](#changing-size-and-speed-of-a-shape)) to help you
    see what the base value actually is.

-   You can run more than one shape at a time by repeating the above
    procedure. You can run several shapes on one fixture and the output
    will combine in interesting ways.

-   Press <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Shape Generator</Keys.SoftKey> then <Keys.SoftKey>Edit</Keys.SoftKey> to
    show what shapes are running.

-   If you apply the same shape to two different groups of fixtures, the
    shape will appear twice on the shape list. You can edit the two
    shapes separately to give different directions, speeds etc (see
    [later](#changing-size-and-speed-of-a-shape))

-   If the selected fixture has sub-fixtures (cells) then you will be
    given the option to run the shape on the main fixture, keeping all
    cells identical, or spread across the sub-fixtures/cells. The options
    are:
    -   <Keys.SoftKey>Run on Super Fixtures</Keys.SoftKey> - cells are ignored, fixture operates as one
    block
    -   <Keys.SoftKey>Run on Sub Fixtures (Linear)</Keys.SoftKey> - the cells are used in numerical order
    -   <Keys.SoftKey>Run on Sub Fixtures (Group)</Keys.SoftKey> - the layout of the cells is used as
    programmed in the [Layout Editor](../controlling-fixtures/fixture-groups.md#fixture-order-and-fixture-layout-in-groups) for the group

-   Each shape is designed to work on a particular attribute. Obviously
    if the fixtures don't have the attribute, you will not see any
    effect if you use the shape.

-   Each shape has a default size and speed setting *(defined in the
    shape file)*.

> When using a Rainbow colour shape, to get the full range of colours you need to set the CMY or RGB attributes to **50%**.

Changing Size and Speed of a Shape
----------------------------------

It is easy to change the size and speed of a shape after it has first
been created. If the display above the wheels is showing Spread and
Offset rather than Size/Speed, press <Keys.SoftKey>Adjust Speed, Size and Spread</Keys.SoftKey>.

![Shape Wheel Attribute Controls for Speed, Size & Spread](/docs/images/Shape-Wheel-Attribute-Controls-for-Speed-Size-Spread.png)

-   Control the speed of the shape using the left hand wheel

-   Control the size of the shape using the middle wheel *(right hand
wheel on Pearl Expert)*

-   The size and speed is shown above the wheels on the display

---

Other things to know about size and speed of shapes:

-   If you have more than one shape running, the controls operate on the
    most recent one. You can edit the parameters of any shape that's
    running using the Edit Shape function, see
    [Editing a Shape in a Cue Using Include](editing-shapes-and-effects.md#editing-a-shape-in-a-cue-using-include).

-   The minimum size is zero. This will *"hide"* the shape, and the
    fixture will resume its previous settings. The shape is, however,
    still active.

-   Once a shape is saved in a playback, you can use the playback fader
    or a separate
    [Speed or Size master](../running-the-show/playback-controls.md#speed-and-size-masters)
    to control the speed and size.

Changing the Spread of a Shape Across Multiple Fixtures
-------------------------------------------------------

Shapes get more interesting (and look more impressive) when you apply
them to multiple fixtures. You can control how a shape is spread across
several fixtures. You can also control Phase, which is a different way
of selecting the same thing.

The sequence of the shape across the fixtures is controlled by the order
in which you selected the fixtures when you created the shape. You can
edit the order by selecting <Keys.SoftKey>Fixture Order</Keys.SoftKey> in the Shape Edit menu.

1. If the right hand wheel isn't showing Spread, press <Keys.SoftKey>Adjust Speed,
Size and Spread</Keys.SoftKey>

2. Control the **Spread** of the shape using the right hand wheel, or to
set in terms of Phase, press <Keys.SoftKey>Adjust Spread, Phase and Offset</Keys.SoftKey> and
use the middle wheel *(right hand wheel on Pearl Expert)*.

Spread = **12** *(Phase = 30 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 12](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-12.png)

---

Spread = **6** *(Phase = 60 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 6](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-6.png)

---

Spread = **2** *(Phase = 180 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 2](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-2.png)

In **Phase** mode, the display above the wheel shows the phase in degrees.
For example, 180 degrees repeats every 2 fixtures, 90 degrees repeats
every 4 fixtures, 60 degrees repeats every 6 fixtures, and so on.

The **Offset** function allows you to set the starting phase of the shape,
when more than one shape is running. *For example, if you were running a
Cyan shape and a Magenta shape to create a mix of colours, you would
probably want to start them with Cyan at full and Magenta at zero to
give the full range of colours. In this case you would set one of the
shapes to have a Phase Offset of 180 degrees.* Without the phase offset,
both shapes would reach full at the same time.

>   After adjusting offset or phase, it is useful to **Restart** the shape so
    you can see how it will look when fired from a cue. Press <Keys.SoftKey>Restart Shapes</Keys.SoftKey>
    on the shape Edit menu.

Shape Direction
---------------

The <Keys.SoftKey>Direction</Keys.SoftKey> softkey opens a menu allowing you to set a direction
for the shape. If you have defined a
[2D layout for the group](../controlling-fixtures/fixture-groups.md#fixture-order-and-fixture-layout-in-groups)
this allows you to have shapes that visibly
move in particular directions.

You can keep the shape direction menu open using the <Keys.HardKey>Menu Latch</Keys.HardKey>
button, to allow you to try different options and see the effects.

Beat and Cycles
---------------

The <Keys.SoftKey>Adjust Beat and Cycles</Keys.SoftKey> option lets you set on the wheels how the
programmed speed will trigger the shape, and how many times the shape
will run.

### Beats

The Beats option defaults to <Keys.SoftKey>Beats=1</Keys.SoftKey> which makes the shape run at
normal speed. Higher numbers will divide the count, for example
<Keys.SoftKey>Beats=4</Keys.SoftKey> will make the shape run at quarter of the speed. This is
really useful to synchronise different types of shapes which are running
together.

Clicking the middle of the wheel roller image on screen or pressing <Keys.HardKey>@A</Keys.HardKey>
for **Wheel A** allows you to type in a number for the Beats parameter, and
also shows two further options for Beats: <Keys.SoftKey>Match to Spread</Keys.SoftKey> sets the
beat count to be the same as the current Spread setting for the shape.
This is useful when using dimmer shapes with movement shapes as it will
make each fixture turn on for a full cycle of the movement shape. The
<Keys.SoftKey>Custom</Keys.SoftKey> option resets the <Keys.SoftKey>Value</Keys.SoftKey> option to the last entered value.

### Cycles

The cycles option sets how many times the shape will run. By default
this is set to infinity (∞) which means the shape will continue to run
until you stop it. If you set a fixed number, the shape will stop by
itself after that number of cycles.

You can type in a number instead of using the wheels by clicking the
middle of the wheel roller image on screen or pressing <Keys.HardKey>@B</Keys.HardKey> for **Wheel B**. If
you are typing in a number you can enter part cycles, for example 1.5.

Using Shapes in Cues
--------------------

When you save a shape into a cue, you can set the playback fader to
control the size and/or speed of the shape in
playback [Options](../cues/playback-options.md) to give you more options at
show time; you can also control the size and speed from separate
[Size Master and Speed Master faders](../running-the-show/playback-controls.md#speed-and-size-masters).

You can use shapes in a cue list, see
[Shape Tracking in Cue Lists](../cue-lists/creating-a-cue-list.md#shape-tracking-in-cue-lists)
on how the shapes will behave as you go from cue to cue.

You can adjust a running shape at playback time, see 
[Editing a Live Running Shape](editing-shapes-and-effects.md#editing-a-live-running-shape).


Masking shapes using Mask FX
--------------------

It is often useful to be able to partially or completely stop a running shape, for example
to freeze the look at the end of a song or to modify the look for different moments.

The <Keys.SoftKey>Mask FX</Keys.SoftKey> softkey on the Shapes and Effects menu allows you to record a mask which will
stop shapes (both normal shapes and key frame shapes). The mask can be set to stop all shapes on all fixtures, or only shapes controlling certain attributes. You 
can also select certain fixtures for the mask and leave other fixtures unaffected.

To create a mask:

1.	Press <Keys.SoftKey>Mask FX</Keys.SoftKey> on the Shapes and Effects menu.

2.	The Attribute Bank buttons (Position, Colour etc) will flash. Choose which attributes you want to mask
	by toggling the buttons on and off.
	
3.	If no fixtures are selected the mask will apply to all fixtures. If you only want it to apply to certain fixtures, select them now.

4.	Press <Keys.SoftKey>Create Mask Shape</Keys.SoftKey>. (The <Keys.SoftKey>Create Mask FX</Keys.SoftKey> button will mask both shapes and pixel map effects.)

5.	You should see the mask taking effect on the output - if you store it in a playback, the playback
	will stop the shapes it's set to mask while it is active.
	
- The <Keys.SoftKey>Clear mask from programmer</Keys.SoftKey> button will remove any mask shapes or mask effects from the programmer for all fixtures.

- This function replaces the **Block Shapes** function of previous versions. Shows containing Block Shapes from previous versions
  will load and work as expected, but the block shapes will be renamed "Mask".

- The personality library may need updating for this to work. 

Storing Shapes in Palettes
--------------------------

You can create palettes containing shapes. This is really useful to
quickly call back shapes pre-configured with different spread and speed
settings. See
[Creating an Effects Palette (Shape or Pixel Mapper)](../palettes/creating-palettes.md#creating-an-effects-palette-shape-or-pixel-mapper).
