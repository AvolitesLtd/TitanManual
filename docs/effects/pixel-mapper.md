---
id: pixel-mapper
title: Pixel Mapper
sidebar_label: Pixel Mapper
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Creating Pixel Mapper effects
-----------------------------

<Video videoId="UchvGw2vvU8" title="Pixel Mapping" />

The Pixel Mapper works on a group of fixtures, which you have set up
using the
[Fixture Layout function](../controlling-fixtures/fixture-groups.md#fixture-order-and-fixture-layout-in-groups).
This tells the console where the
fixtures are physically located on the stage. The console then maps the
fixtures as pixels and uses them to output a 2D effect.

> At the end of this section there are a number of [step-by-step examples](pixel-mapper-examples.md) of creating effects with the pixel mapper. It's much easier to get to grips with if you can work through some examples.

You create effects with the Pixel Mapper as follows:

1. Select the group of fixtures

2. From the top level menu select <Keys.SoftKey>Shapes and Effects</Keys.SoftKey> then <Keys.SoftKey>Pixel
Mapper</Keys.SoftKey>

3. Select <Keys.SoftKey>Create effect</Keys.SoftKey>. The Pixel Mapper Editor will open with a
blank background. You can overlay your fixture layout on the window, to
help you see where your fixtures are, by clicking on the <Keys.SoftKey>Fixture
Overlay 50/50</Keys.SoftKey> context menu button.

![Effect Editor - Pixel Mapper - New Effect](/docs/images/Effect-Editor-Pixel-Mapper-New-Effect.png)

### Elements

Click on the <Keys.ContextKey>+</Keys.ContextKey> button at the bottom to add an effect, and choose a
graphic element. You can <strong>remove</strong> elements by selecting them and clicking
on the <Keys.ContextKey>Rubbish Bin</Keys.ContextKey> button. The graphic buttons as shown below provide
the following elements to animate:

-   Square

-   Circle

-   Triangle

-   Star

-   Fan

-   Spiral

-   Text

-   Scribble <em>(you draw an image on the touch screen)</em>

-   Image/bitmap <em>(loaded from disk)</em>

-   [Ai media server content](../synergy/operating-synergy.md#lightmap-pixel-mapping-ai-media-content)

![Effect Editor - Pixel Mapper - Adding an Element](/docs/images/Effect-Editor-Pixel-Mapper-Adding-an-Element.png)

The graphic element will appear in the top part of the window and will
be output to the fixtures. You can change it using the sliders below,
which will vary depending on the shape but may include:

- Opacity
- X, Y position
- Width, height
- Zoom
- Rotation
- Border width
> To change the <strong>colour</strong>, click on the <strong>layer name</strong>

![Effect Editor - Pixel Mapper - Circle on Layer](/docs/images/Effect-Editor-Pixel-Mapper-Circle-on-Layer.png)

### Animations

Then with the graphic element selected on the left hand side, click on
the <Keys.ContextKey>+</Keys.ContextKey> button again and choose an <strong>Animation</strong> (how your graphic element
will move or change) or <strong>Visual Effect</strong> (which change the appearance of the element).
The animated effect will show in the black window
and be output to the fixtures You can add multiple animations which will
combine to give the overall effect.

![Effect Editor - Pixel Mapper - Adding an Animation](/docs/images/Effect-Editor-Pixel-Mapper-Adding-an-Animation.png)

Available animations are:

-   Rotate

-   Slide

-   Zoom

-   Opacity/Fade

-   Random

-   Grid Fit <em>(elements will accurately align with the pixel grid)</em>

-   Linear gradient

-   Radial gradient

-   Motion blur <em>(adds a trail to objects)</em>

The animation will move or transform the element. It can also "spawn" or
create new copies of the element.

You can edit what the animation does by selecting the name on the left
hand side. Sliders are provided to configure the animation, the sliders
may vary depending on the particular effect but may include:


- Speed <em>(speed of the movement)</em>

- Speed Random <em>(adds a random factor to the speed of each element)</em>

- Spawn Rate <em>(sets the rate at which new elements are created)</em>

- Spawn Random <em>(adds a random factor to the spawn rate)</em>

- Spawn For *(sets how many elements will be spawned, after this no more
will appear)*

- Run For / And Then *(for each element, sets how many cycles it runs for,
and what happens to it after that - freeze or kill)*

- Direction / Direction Random <em>(for movement effects only)</em>

- Start Angle / End Angle <em>(for rotation effects only)</em>

Some points about animations:

-   For <strong>Grid Fit</strong> you need to specify the number of rows and columns in
    the grid.

-   For the <strong>gradient animations</strong> you set the start and end opacity and
    the offset between them; you also set the Spread which can be Pad
    (single gradient), Reflect (repeats the gradient in and out) or
    Repeat (snaps back to start then repeats the gradient fade)

-   If you specify <strong>Spawn For</strong> or <strong>Run For</strong>, the simulation will stop after
    the specified number of cycles. To restart the simulation, click the
    <strong>reset</strong> button on the top right of the Effect Editor window.

    ![Effect Editor - Pixel Mapper - Reset Button](/docs/images/Effect-Editor-Pixel-Mapper-Reset-Button.png)

-   For an effect with a <strong>start point</strong> and <strong>end point</strong>, the number of cycles
    is the number of times it goes between the start and end points. For
    an effect with no end point the number of cycles is based on the
    master clock and animation speed.

### Pixel Mapper Preview Window

If you don't have fixtures connected, you can see how the effect will
look on the fixtures using the Pixel Mapper preview window - open it by
double pressing <Keys.HardKey>Open/View</Keys.HardKey> then press <Keys.SoftKey>Pixel Mapper
Preview</Keys.SoftKey> from the window select buttons. A real life view of each effect currently running is shown in
a button at the bottom of the screen, you can select each of these by
pressing the button.

![Pixel Mapper Preview Window](/docs/images/Pixel-Mapper-Preview-Window.png)

### General Use

If you wish you can overlay further layers on the effect. Once you have
an effect you like, you can save it to a playback.

> When adjusting the parameter sliders, as well as using click/drag on the screen you can also use the wheels or type in a numerical value. To assign a slider to the wheels or for numerical input, click the value box to the right of the control. Double click the value to reset it to its default, or use the +/- softkey to change the sign of the value.

-   You can <strong>reorder</strong> the Pixel Mapper layers by selecting the layer to
    move and clicking on the up/down arrow buttons.

-   You can <strong>copy</strong> or move layers, elements and animations by pressing
    Copy or Move, then select an element, then select a destination to
    copy or move it to.

### Effect Master Parameters

Each effect you create also has master parameters which affect how
it will combine with other effects. Click on the effect name top
left to set these parameters:

![Effect Editor - Pixel Mapper - Effect Master Parameters](/docs/images/Effect-Editor-Pixel-Mapper-Effect-Master-Parameters.png)

-   The <strong>Block Effect</strong> switch allows you to create a pixel map effect
    which will block out any pixel maps running on the selected fixtures
    (according to the [priority setting](../cues/playback-options.md#priority)).
    This lets you create a cue
    which will temporarily stop a pixel map effect (similar to Block
    Shapes).

-   <strong>Colour</strong> sets the background colour of the effect (Will have no effect
    if <strong>Back Opacity</strong> is 0)

-   <strong>Back Opacity</strong> sets whether other effects will show through in the
    background of this effect. By default this is 0, so other effects
    will show through.

-   <strong>Opacity</strong> sets how much other effects show through the foreground of
    this effect.

-   <strong>X/Y/Zoom/Rotation</strong> let you modify the position and size of the effect

-   <strong>Master Speed</strong> sets the overall speed of the effect, this controls
    animation speeds and cycle counts

-   <strong>Pre-Spool</strong> makes the effect start mid-flow as if it has already been
    running for a time. This lets you start slow-building effects in
    their full glory.

-   <strong>Run For</strong> / <strong>And Then</strong> sets how many cycles the effect will run for, and
    what will happen at the end (<strong>Freeze</strong>, <strong>Kill</strong> or <strong>Stop Spawning</strong>). <strong>Run For</strong>
    defaults to <strong>"Forever"</strong>.

Pixel Mapper Layer Masters
--------------------------

You can assign each of the four layers to a master. The master allows
you to adjust the layer controls in real time. When the master is
assigned to a fader handle using <Keys.HardKey>Record</Keys.HardKey>, <Keys.SoftKey>Create Master</Keys.SoftKey>, <Keys.SoftKey>Pixel Mapper</Keys.SoftKey>,
selecting <Keys.SoftKey>Layer 1</Keys.SoftKey> through <Keys.SoftKey>Layer 4</Keys.SoftKey> and finally pressing a handle select key,
the fader will control opacity of the layer.

This means you can create cues and palettes which can manipulate the
layer settings of effects which are running in other cues.

To enable the layer master, turn on the <strong>Use Master</strong> switch in the effect
editor window.

> Layer masters may require an updated personality file

<Video videoId="rCIIH2-DCNM" title="Advanced Pixel Mapping" />

Stopping pixel map effects with Mask FX
--------------------------

Using the Mask FX function you can create a playback which will stop the pixel map
effect on all fixtures or on a group of fixtures.

To create a Mask Effect:

1.	Press <Keys.SoftKey>Mask FX</Keys.SoftKey> on the Shapes and Effects menu.

2.	If no fixtures are selected the mask will apply to all fixtures. If some fixtures are selected the mask will only apply to those fixtures.

3.	Press <Keys.SoftKey>Create Mask Pixel Map</Keys.SoftKey>. (The <Keys.SoftKey>Create Mask FX</Keys.SoftKey> button will mask both shapes and pixel map effects.)

4.	You should see the mask taking effect on the output - if you store it in a playback, the playback
	will stop all pixel map effects while it is active (on the fixtures it was programmed for).
	
- The <Keys.SoftKey>Clear mask from programmer</Keys.SoftKey> button will remove any mask shapes or mask effects from the programmer for all fixtures.

- This function replaces the <strong>Block Effect</strong> function of previous versions. Shows containing Block Effect from previous versions
  will load and work as expected, but they will be renamed "Mask".

- The personality library may need updating for this to work. 

