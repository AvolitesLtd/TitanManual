---
id: patching-new-fixtures-or-dimmers
title: Patching New Fixtures or Dimmers
sidebar_label: Patching new Fixtures or Dimmers
original_id: patching-new-fixtures-or-dimmers
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Fixture Select Buttons and Handles

To control intelligent fixtures or dimmer channels, they must each be
patched to a button (sometimes referred to as a "handle"). You can patch
onto touch buttons in the Fixtures window, to a fader handle or to a
Macro/Executor button. If the handle you patch to has a fader, the fader
will control intensity.

If the Fixtures window is not shown, press <Keys.HardKey>View/Open</Keys.HardKey> then
<Keys.HardKey>Fixture</Keys.HardKey> or double press <Keys.HardKey>View/Open</Keys.HardKey> then press
<Keys.SoftKey>Fixtures</Keys.SoftKey> from the window select buttons.

![Fixtures Window](/docs/images/Fixtures-Window.png)

Fixture buttons can be shown either in pages with Page buttons, or you
can use the scroll bar on the right to show different pages. Use the
<Keys.SoftKey>Pages Show/Hide</Keys.SoftKey> button in the context buttons on the right of the screen to select between
page buttons and scrolling mode (these buttons drop down using the menu button in the window
top bar for Sapphire Touch and Titan Go).
 You can change the fixture page at any
time.

You can allocate fixtures and dimmers to Groups, which allows you to
quickly select a set of fixtures with one button. Groups are described
in the next chapter.

Once you have patched fixtures or dimmers, the [Patch View](./changing-the-patch.md#patch-view) screen shows
you an overview of what is patched where and lets you edit the patch.

## Patching Dimmers

Each fixture button can control single or multiple dimmer channels. You
allocate a button using the Patch menu (described below) or the [Patch View](./changing-the-patch.md#patch-view) window.

1. Press <Keys.HardKey>Patch</Keys.HardKey>, then <Keys.SoftKey>Dimmers</Keys.SoftKey>.

2. <Keys.SoftKey>DMX Line=</Keys.SoftKey> shows you which of the DMX output lines you are
patching onto. Enter a new number to change the line. <Keys.SoftKey>Address = </Keys.SoftKey>
shows the DMX address about to be patched. You can change this by typing
in the new address on the numeric keypad and pressing <Keys.HardKey>Enter</Keys.HardKey>.


![DMX Line](/docs/images/DMX-Line.png)

3. To patch a single dimmer, press a Fixture touch button, a
Macro/Executor button or the blue Select button of a fader handle. To
patch a sequence of dimmers each to its own button, press <Keys.SoftKey>Quantity</Keys.SoftKey>
and set the number of dimmers then press the first select button.
Alternatively, run your finger or draw a selection box round the touch
buttons, or for physical buttons hold down the first button in the range
and press the last button in the range. The range of dimmers will be
patched to sequential DMX addresses.

4. A fixture button turns dark blue and shows fixture details when it
is patched. If you patch to a fader handle the select button will light
up dimly.

5. Repeat from step 2 for other dimmers.

-   When setting the DMX address using <Keys.SoftKey>Address=</Keys.SoftKey>, you can set the DMX
    line (universe) as well by entering &#123;line&#125;.&#123;DMX&#125;, for example 2.56
    will set DMX address 56 on DMX line 2.

-   To see how DMX channels are patched, press <Keys.HardKey>View/Open</Keys.HardKey> then <Keys.HardKey>Patch</Keys.HardKey>
    to show the [Patch View](./changing-the-patch.md#patch-view) window.

-   <Keys.SoftKey>User Number = xx</Keys.SoftKey> allows you to set a user-defined number for
    each dimmer or fixture patched, to help you identify them later. You
    can also edit the User Number from the Repatch Fixture menu.

-   You can patch multiple dimmer channels to a single handle. This can
    be useful if, for example, you want to control all the lights for
    one area together. To do this, just press the same Fixture Select
    button again when patching the new dimmer channel. You can tell the
    dimmer channel has patched OK because the DMX address will increase
    by 1.

-   If you need to remove a dimmer from multiple dimmers on a single
    handle without losing programming, make a copy of the handle then
    repatch the copy to the individual dimmer address.

## Patching Moving Light Fixtures

Moving light fixtures are more complicated to patch than dimmers because
they have more attributes to control, such as pan, tilt and colour,
whereas a dimmer channel just has intensity.

Avolites consoles use a "personality" system to control fixtures. This
means you don't have to know how each fixture works, you just tell Titan
what you want to do and it will send the right control commands. The
console has built-in personalities for most types of fixture, which tell
it what attributes are available and how to control them. If the console
does not have the personality for your fixture, you can download further
personalities from the Avolites website, create your own using the
Personality Builder application installed on the console, or Avolites
can create one for you. See the [personalities section](../fixture-personalities.md) for details of how to
find personalities.

You can patch either using the Patch menu (described below) or the [Patch View](./changing-the-patch.md#patch-view) window.

1. Press <Keys.HardKey>Patch</Keys.HardKey>.

2. Press <Keys.SoftKey>Fixtures</Keys.SoftKey>.
![Patch Menu](/docs/images/Patch-Menu.png)

3. Select the correct fixture manufacturer from the softkeys
(<Keys.SoftKey>Previous</Keys.SoftKey> and <Keys.SoftKey>Next</Keys.SoftKey> page through the list of manufacturers). Or
use Quick Search and type the first few letters of the manufacturer's
name on the keyboard to find the one you want.

4. Select correct fixture from the softkeys (F and G show other pages).
You can use Quick Search here as well.

5. Select the correct fixture operating mode from the softkeys.

6. <Keys.SoftKey>Address =</Keys.SoftKey> shows the first free DMX address. Type the new address
on the numeric keypad if you want a different one. <Keys.SoftKey>DMX line=xx</Keys.SoftKey> lets
you patch to a different DMX line, or you can enter the address as
<Keys.SoftKey>line</Keys.SoftKey>.<Keys.SoftKey>address</Keys.SoftKey>, e.g. 2.45 would set address 45 on line 2.

![Address Input](/docs/images/Address-Input.png)

7. Patch the fixture by pressing a Fixture touch button, a
Macro/Executor button or the blue Select button of a fader handle (not
the main playback faders).

8. A fixture touch button turns dark blue and shows fixture details
when it is patched. If you patch to a fader handle the select button
will light up dimly.

9. Repeat from 7 to patch more of the same fixture type. The DMX
address automatically updates so you can just keep patching by pressing
Select buttons.

-   To patch multiples of the same fixture, use the <Keys.SoftKey>Quantity</Keys.SoftKey> option.
    Or you can run your finger or draw a selection box round the touch
    buttons, or for physical buttons hold down the first button in the
    range and press the last button in the range. The fixtures will be
    patched to sequential blocks of DMX addresses.

-   <Keys.SoftKey>Options</Keys.SoftKey>, <Keys.SoftKey>Offset</Keys.SoftKey> allows you to leave gaps in the DMX channels
    between fixtures when patching multiple fixtures, which is useful if
    you are planning a show which may involve exchanging fixtures. The
    Offset number is the size of the block which will be allocated to
    the fixture, for example if you want to allow 32 channels for each
    fixture you would set Offset to 32.

-   You cannot patch more than one fixture onto a handle. If the handle
    is already used, the patch will fail.

-   If you are patching a fixture which uses a separate dimmer channel,
    such as a VL5, you can patch the dimmer channel onto the same handle
    as the moving light part of the fixture so you can control it all
    together. This is called a Pending Dimmer (in the [Patch View](./changing-the-patch.md#patch-view) window
    this is indicated with a flash symbol behind the user number).

-   <Keys.SoftKey>Options</Keys.SoftKey>, <Keys.SoftKey>Preset Palettes</Keys.SoftKey> sets whether the console will
    create default colour, gobo and position palettes for the new
    fixture. These are created in the Position, Colour and Beam
    workspace windows.. This option is turned off by default but can
    give you a useful starting point.

-   <Keys.SoftKey>Options</Keys.SoftKey>, <Keys.SoftKey>AutoGroups</Keys.SoftKey> sets whether the console will
    automatically create groups from the fixtures you patch. If Enabled,
    a group is created for all fixtures of the same type, and another if
    you patch a quantity of fixtures.

-   To show the DMX address for fixtures, press <Keys.HardKey>View/Open</Keys.HardKey> then
    <Keys.HardKey>Patch</Keys.HardKey>. To show patch details for a single fixture press
    <Keys.HardKey>View/Open</Keys.HardKey> then the fixture select button. On touch buttons the
    DMX address is displayed on the top right of the button in the
    format &#123;DMX line&#125;.&#123;Address&#125; (this display can be disabled using the
    context menu).

-   If a patch goes over the capacity of a DMX line, the console will
    patch at the beginning of the next line. For example if you try to
    patch a moving head fixture at channel 1.510, it will actually be
    patched at 2.1.

-   The console will show a picture of the fixture you select in the
    prompt area to help you check you have got the right one (if
    provided in the fixture personality; some fixtures do not include
    this information)


    ![Fixture Mode](/docs/images/Fixture-Mode.png)

## Capture Visualiser Auto Patch

If you want to use Capture Visualiser, start it by double pressing
<Keys.HardKey>View/Open</Keys.HardKey> then press <Keys.SoftKey>Capture Visualiser</Keys.SoftKey> from the window select buttons. Some
consoles also have a dedicated <Keys.HardKey>Visualiser</Keys.HardKey> button. Capture will open
in a workspace window with an automatic representation of your patch.

You will see the fixtures you have patched laid out on screen in handle
number order. You can then use the [Visualiser controls](../capture-visualiser.md) to reposition the
fixtures if you wish.

-   You can turn off Auto Patch in the Capture Visualiser Settings
    window (Stage tab).

-   Fixture modes which will work with Auto Patch show a Capture icon in
    the button. If the icon is not shown, that fixture mode isn't
    supported in the integrated Capture.


    ![Fixture Modes](/docs/images/Fixture-Modes.png)

-   If you are using the [console linked to the full version of Capture](../capture-visualiser/linking-the-console-to-stand-alone-capture.md)
    (Nexum or above) on an external computer, then changes to the patch
    on the console will automatically sync to the Capture show. Also
    changes you make in Capture will sync back to the console.

## Patching Fixtures with Multiple Cells (sub-fixtures)

Some fixtures have multiple cells of control within a single fixture
(for example an RGB LED batten). To avoid having to patch every cell as
a single fixture, you can patch the whole fixture as one "super fixture"
and each cell will then appear as a "sub-fixture". This is very useful
when laying out fixtures for use with the Pixel Mapper as it allows you
to move and rotate the fixture as a single fixture, but keep individual
control over the cells.

If you access the fixture using the handle it is patched on, all cells
of the fixture will be controlled together. To access the sub-fixtures
independently, use the Attribute Editor window or you can press
<Keys.HardKey>Unfold</Keys.HardKey> then the select button of the fixture. In the Fixtures
workspace, the current page of fixtures will be replaced by select
buttons for each individual fixture cell. If patched on a fader then the
cells will start at fader 1. You can also select sub-fixtures from the
numeric keypad. See the [fixture control section](../controlling-fixtures/using-the-select-buttons-and-wheels.md#fixtures-with-multiple-cells-subfixtures) for more details of
working with fixture cells.

To go back to normal, press <Keys.HardKey>Unfold</Keys.HardKey> then <Keys.SoftKey>Exit Unfold</Keys.SoftKey>.

> The Sub fixtures feature has to be defined in the fixture's personality. If sub-fixtures does not work on your fixture you may need to obtain the latest fixture personality from Avolites.

## Patching Active Fixtures / Media Servers

For Ai media servers see the [Synergy section](../synergy.md) which allows you
to connect to Ai for control of the setup and media playback.

Other media servers which support CITP can be patched using the <Keys.SoftKey>Active
Fixtures</Keys.SoftKey> command on the Patch menu. This allows the console to
retrieve thumbnail images of the media clips to display in the Attribute
Editor when you are selecting the clip to play.

Once the media server is connected to the network, selecting <Keys.SoftKey>Active
Fixtures</Keys.SoftKey> then <Keys.SoftKey>CITP Media Servers</Keys.SoftKey> will display a list of the
available display layers on the connected server(s). Each layer can then
be patched to a fixture button for control.

## Patching by RDM

RDM (Remote Device Management) is a system which allows the console to
interrogate the lighting rig to find out what's there. It can then patch
itself to match the existing DMX addresses. You can also remotely change
modes and other settings on the fixture.

> The fixtures need to be connected to the console by an RDM-enabled Art-Net node, the XLR connectors do not support RDM. Obviously the fixtures must be equipped with RDM for this to work; many fixtures are not. Also if you have DMX buffers or splitters in your rig, they must be RDM enabled or they will block the information being sent back to the console.

Press <Keys.HardKey>View/Open</Keys.HardKey> then <Keys.HardKey>Patch</Keys.HardKey> to open the [Patch View](./changing-the-patch.md#patch-view) window then
select the RDM tab. All devices which support RDM will be listed here.
Click the <Keys.SoftKey>Full Discover</Keys.SoftKey> context menu button to rescan the rig for
RDM devices.

![RDM Discovery](/docs/images/RDM-Discovery.png)

-   Select one or more fixtures in the grid and click the Patch context
    menu button to patch the devices.

-   Click on the Mode or Address cells in the grid to change these
    settings remotely.

-   Click on the Identify button (at the right hand end of the screen,
    you might need to scroll to see it) to turn the fixture on so you
    can see where it is in the rig.

-   Click on the RDM Quick Patch context menu button to automatically
    patch all RDM devices.

## Finding a Lost Fixture

Sometimes a fixture may be rigged with the wrong DMX address set, or
connected to the wrong DMX line.

The Find Fixture function allows you to find the start address of the
fixture by scrolling a "locate" state through all possible DMX
addresses. When the fixture responds with its Locate state, you know its
DMX address and might hopefully avoid a trip up the rig to look at it..

1. Press <Keys.HardKey>Patch</Keys.HardKey>, <Keys.SoftKey>Fixture</Keys.SoftKey> and select the type of fixture you are
looking for

2. Press <Keys.SoftKey>Options</Keys.SoftKey>, then <Keys.SoftKey>Find Fixture</Keys.SoftKey> to enable the Find Fixture
mode.

3. Turn Wheel B to go through all possible DMX addresses. Wheel A sets
DMX lines.

4. When the fixture responds with its Locate state, you have found the
correct DMX address.

4. Turn off <Keys.SoftKey>Find Fixture</Keys.SoftKey> mode and (if not already occupied) patch
the fixture. The DMX address/Line will be automatically set to match the
Find Fixture settings.

-   Wheel C (DMX Slot) jumps through DMX addresses using the fixture
    channel count (for example if a fixture uses 16 channels, it will
    jump through in 16's).
