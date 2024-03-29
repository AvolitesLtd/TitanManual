---
id: setting-up-the-rig
title: Setting up the Rig
sidebar_label: Setting up the Rig
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Setting up the Stage and Rigging

To help you see what your rig will really look like you can add fixed
elements of staging and rigging.

Open the Capture Visualiser Settings window by double pressing <Keys.HardKey>Open/View</Keys.HardKey>,
then select Visualiser Settings from the window select buttons (or you can use the <Keys.ContextKey>Open Settings</Keys.ContextKey> context button in the Capture window.)
Click the **Stage** tab.

![Capture Visualiser Settings Window](/docs/images/Capture-Visualiser-Settings-Window.png)

**"Floor"** and **"Back Wall"** are provided by default. You can add other
objects by clicking the <Keys.ContextKey>+</Keys.ContextKey> button at the bottom of the list.

Click on the object in the list on the left hand side to position and
angle the object using the controls on the right. You can either type
exact numbers by clicking on the buttons down the right hand side or use
the sliders. You can set a legend and colour for each object.

## Setting up Fixtures

Fixtures are automatically placed into the visualiser when they are
patched if the Auto Update switch in the [Capture Settings](#setting-up-the-stage-and-rigging) **"Show"** tab
is set to On.

If you [load a Titan show](../titan-basics/loading-and-saving-shows.md#loading-a-show) from a previous version, or have some patched fixtures which are not placed in Capture, use the <Keys.SoftKey>Edit Fixtures</Keys.SoftKey> <Keys.SoftKey>Update Personality</Keys.SoftKey> option on the [Patch menu](../patching/changing-the-patch.md#patch-view) to place missing
fixtures into the visualiser. The [Exchange Fixtures](../patching/changing-the-patch.md#exchange-mapping) function may also be
used to help with this situation.

Fixtures are positioned using the wheels. Select one or more fixtures
using the [Fixture select or Group buttons](../controlling-fixtures.md#selecting-fixtures-and-dimmers-for-control)
and turn them on by pressing [<Keys.HardKey>Locate</Keys.HardKey>](../controlling-fixtures.md#setting-fixtures-to-a-start-position-locate).
Press the <Keys.ContextKey>Position - Orientation</Keys.ContextKey> context menu button to
switch the wheels to Visualiser mode *(or press Softkey G at the top
level menu until the display shows Wheels-Visualiser)*.

Select <Keys.HardKey>Position</Keys.HardKey> attribute, then use the wheels to change the X/Y/Z
position of the fixture(s). If you select multiple fixtures, pressing
the <Keys.ContextKey>Scale-Fan</Keys.ContextKey> context menu button or the <Keys.HardKey>Fan</Keys.HardKey> button allows you to
evenly spread out the fixtures. The [Fan curve/group/split options](../controlling-fixtures/changing-fixture-attributes.md#fan-mode) also
work.

Touch above or below the wheel value to nudge the setting up or down by
one step. For rotation this will be 45 degrees.

If you are viewing the stage from the front then:

Axis | Action
---|---
**X** | moves left and right
**Y** | moves up and down
**Z** | moves towards and away from you

Press <Keys.HardKey>Position</Keys.HardKey> a second time to switch the wheels to Orientation
mode. The wheels will now pivot the fixtures in the X/Y/Z axes. Again
you can use the [**Fan**](../controlling-fixtures/changing-fixture-attributes.md#fan-mode) button to give a spread of angles on multiple
fixtures.

The X/Y/Z rotation operates like a 3-axis camera gimbal - imagine the
fixture within three pivoting rings (see left hand picture below). In
some orientations, the X and Z rotation will seem to do the same thing
and some rotations seem to be impossible to achieve - this is called
gimbal lock and happens when two of the "rings" are lined up with each
other (right hand picture below). Change the Y rotation by 90 degrees to
enable you to achieve other angles.

![gimbal](/docs/images/Gimbal.jpeg)

*Illustration by MathsPoetry*

Press <Keys.HardKey>Position</Keys.HardKey> a third time to switch the wheels to Rotation
mode. Rotation mode only works if you have multiple fixtures
selected, and the fixtures rotate as a group about the middle fixture.

- For rotating single fixtures you need to select **Orientation** mode. **Rotation** mode only works when multiple fixtures are selected, it does nothing when a single fixture is selected.

>It's easier to see what position fixtures are in if you change the tilt angle so they aren't pointing straight down (or up). It's always useful if you can have an actual fixture of each type connected to help you get them pointing the right way, but you can change this later if not.


### Setting Fixture Options

You can set some options within the visualiser which control how the simulated fixture works. Different options are available depending on the type of fixture.

To set these options, press the bottom softkey at the top level menu until the option shows <Keys.SoftKey>Wheels=Visualiser</Keys.SoftKey>, or press the <Keys.ContextKey>Position-Orientation</Keys.ContextKey> context menu button. Then select one or more fixtures to set and use the wheels to adjust the settings.

**Dimmers (generic fixtures)**

Attribute | Wheel | Function
----------|-------|---------
Colour | A/B/C | RGB light colour - Allows the colour of the light to be set (if the real-life fixture has a colour filter fitted)
Beam | A | Zoom - Sets simulated beam angle from 5 to 90 degrees
" | B | Focus - Sets simulated focus
" | C | Throws Light (see note below)
Effect | A | Horizontal Frost - spreads the beam horizontally
" | B | Vertical Frost - spreads the beam vertically

**Other fixtures**

Attribute | Wheel | Function
----------|-------|---------
Beam | A | Throws Light
" | B | Invert Pan
" | C | Invert Tilt

- The *Throws Light* option can be useful with pixel/eye-candy type fixtures to reduce rendering load on the console - only the illumination of the fixture itself is
shown, the light cast by the fixture is not shown.
- The *Invert Pan / Tilt* options can be used to change the simulated fixture so it responds in the same directions as the real fixture.

## Setting up Cameras (Views)

Four cameras (selectable views) are provided by default but you can add
more.

The context menu buttons provide camera options.

![Capture Visualiser Workspace Window Context Menu](/docs/images/Capture-Visualiser-Workspace-Window-Context-Menu.png)

Camera controls are in the [Capture Visualiser Settings window](#setting-up-the-stage-and-rigging) which you
can open by double pressing <Keys.HardKey>Open/View</Keys.HardKey> to show the workspace window buttons, or using the <Keys.ContextKey>Open
Settings</Keys.ContextKey> context button.

The view buttons across the top select the four default views *(shown below)*. Press the <Keys.ContextKey>+</Keys.ContextKey> button at the right hand side to add a new view.

The top button on the left toggles between single view or quad split
mode. If quad split is selected, the other 4 buttons select which view
you are controlling.

![Camera movements in Capture Visualiser Workspace Window](/docs/images/Camera-movements-in-Capture-Visualiser-Workspace-Window.png)

The left hand pad moves the camera **left and right**, and towards and away
from the stage.

The middle pad moves the camera **up and down**.

The right hand pad can be set to rotate or orbit mode

-   **Rotate:** turns the camera to face left, right, up, down

-   **Orbit:** orbits the camera around the stage in a circular path keeping
    it pointed at the same object.

Press the <Keys.ContextKey>Move Camera</Keys.ContextKey> context button to link camera movement to the
wheels. This also opens the **Set Coordinates** menu with softkeys allowing
you to enter numeric camera positions.

Press the <Keys.ContextKey>Rotate Camera</Keys.ContextKey> or <Keys.ContextKey>Orbit Camera</Keys.ContextKey> context buttons to link
camera rotation or orbit to the wheels and allow numeric entry on the
softkeys.

## Capture Appearance options

The Appearance tab of the [Settings window](#setting-up-the-stage-and-rigging) allows you to set the
following parameters:

- **Ambient lighting** (background light level)
- **Smoke density** (called Atmosphere in full Capture))
- **Smoke variation** (also called Atmosphere contrast - mix between haze
    and moving smoke effects - 0%=all haze, 100%=all smoke)
- **Smoke speed** (also called Atmosphere speed - rate of change of moving
    smoke effect)
- **Exposure adjustment** (camera brightness control)
- **Bloom amount** (visible halo around lights)
- **Rendering settings detail** (this affects the refresh rate of the
    simulator. If you have a lot of beams visible you may need to change
    this to Low to improve the refresh rate).