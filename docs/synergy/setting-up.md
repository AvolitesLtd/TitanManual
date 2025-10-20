---
id: setting-up
title: Setting up Synergy
sidebar_label: Setting up Synergy
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Connecting up an Ai server

The Ai server(s) need to be connected by Ethernet to the Titan console.
Large media
files can place a heavy demand on the network, so you should follow
these tips for setting up a suitable network:

-   Use at least gigabit network equipment

-   Have a dedicated network for Synergy if possible

-   If you are using Titan PC Suite (Titan Go / Simulator), make sure Windows Firewall is turned
    off

> The Ai server(s) must have the correct version of Titan Media Node installed to match your Titan version. Titan Media Node versions can be downloaded from the Avolites website 
[Avolites Download page](https://www.avolites.com/software/latest-version). You don't need to do anything extra on the console as the Titan installer will automatically install the correct version on the console. 

In the Ai System Settings screen, go to the Art-Net / CITP options and select the **Titan Media Node Version** drop down box to match the version of Titan you have installed (the first number should match). Then turn on the **Enable Synergy** switch. Ai will start the Titan Media Node. When the Titan Media Node is running, the top status bar will show "TitanNet Enabled".  (Ai v12.2 onwards - in previous versions of Ai, Synergy Upgrades are used).

![Ai Settings Window](/docs/images/Ai-Titan-Media-Node.png)

If you have problems getting Titan and Ai to recognise each other, make
sure they are on matching software versions, and both in the same IP
address subnet range such as `2.0.0.1` and `2.0.0.2` - read more about [Networking the Console](../networking.md).

## Setting up the Ai Show

A simple Ai system involving a single screen or projector can be set up
by following the [Synergy setup](#synergy-setup) instructions in the next section. You
just need to open a blank show in Ai and you can add Screens and Layers
from the Titan console.

For more complicated requirements, create suitable screen fixtures in
the Ai show - see the Ai manual for more details on how to do this. You
can create and rename Layers from the Titan console. The screen fixtures
you have created in Ai will then become available as Surfaces in Titan.

## Connecting up Prism Zero 

You can connect to Prism Zero software running on any device connected to the same network as the console. 

In the Prism Zero settings screen (File - Settings or click the menu icon in the top left corner), go to the Synergy option and turn on the **Enable Synergy** switch. Ensure the **Synergy Version** drop down box is set to match the version of Titan you have installed. Prism Zero will start the Titan Media Node which is a Titan node designed to interface with Prism. When the Titan Media Node is running, the Connection Status will change to "Connected". These settings are remembered next time you start Prism Zero.

![Prism Zero Settings Window](/docs/images/prism-zero.png)

Once connected, the Titan Media Node will be discoverable by TitanNet and you can use the Prism Zero output as a media surface in Titan by following the next section.

-   If the version box does not show a matching version, you need to install the correct version of Titan Media Node from the Avolites website.

## Synergy Setup

In Titan, open the **Synergy Settings** window using the Workspace button
provided on new shows, or use the option in the Open Workspace Window
menu.

This window is a little like the [DMX settings screen](../system-settings/the-system-menu.md#dmx-settings): it lets you set up
how the Titan console is linked to the various outputs on the Ai
server(s) or to Prism Zero. Also, for Ai servers it lets you add or remove layers from each Ai surface
and add complete new surfaces to the server (though you may need to
configure these further on the Ai server itself).

![Synergy Settings Window](/docs/images/Synergy-Settings-Window-v15.jpg)

On the left of the window the available Ai
servers or Prism Zero instances are shown. In the centre of the window, the Surfaces and Layers
configured in Titan are shown. Connection lines show how the Titan
Surfaces will control the different outputs of the media servers. At the
bottom are Surfaces which are already configured on the connected media servers but are not yet
linked to Titan, these are called unmatched surfaces.

Click on the <Keys.ContextKey>+</Keys.ContextKey> at the bottom and select a Screen or Prism surface from the pop up to add a
new surface. This will appear at the top; an Ai surface by default has two layers
but you can change this later. A Prism Zero surface only has a single layer.

![Synergy Settings Window screen settings](/docs/images/Synergy-Settings-Window-screen-settings-v15.jpg)

Clicking on the top part of a Surface will
show options on the right for the surface. These options allow you to
set the canvas resolution which can either be picked from a list of
common resolutions, or entered numerically; at the top right the display
halo colour of the surface can be set, and the <Keys.ContextKey>Pencil</Keys.ContextKey> button allows you
to change the name (you can also do this with the <Keys.SoftKey>Set Legend</Keys.SoftKey>
button).

Clicking on a Layer within a Surface shows layer options on the right.
This allows you to allocate a Rate or BPM master to the layer for speed
control.

When no Surfaces or Layers are selected, the right side of the window
shows general information about the system. 

Once you have created a surface in Titan, you need to match it to the desired Ai
surface or Prism Zero. Click on the <Keys.ContextKey>Link</Keys.ContextKey> button on the unmatched surface at the
bottom, then click on the Screen 1 surface at the top (or you can click
**"Link to new Surface"** to automatically create a new surface and link to
it).

![Synergy Settings Window linking a screen](/docs/images/Synergy-Settings-Window-linking-a-screen-v15.jpg)

The Screen 1 Surface will now show that it is linked to the Ai server or Prism Zero and the unmatched server at the bottom disappears.

![Synergy Settings Window with a linked screen](/docs/images/Synergy-Settings-Window-with-a-linked-screen-v15.jpg)

On an Ai server you can link the Screen 1 Surface to one or more different physical
outputs by clicking the screen, then clicking the
output to connect on the left, for example if you want to show the same
media on several screens.

Once an Ai layer is linked, if you open the layer properties in Ai the
**"Synergy Control"** box will show *"Enabled"*. Now you cannot control the
screen using Ai, only from the Titan console.

![Avolites Ai Layer Adjustments](/docs/images/Avolites-Ai-Layer-Adjustments.png)

To add a layer on Ai, click on the surface, then the <Keys.ContextKey>+</Keys.ContextKey> button at the bottom
and select **Layer** from the popup.

To delete a layer or surface, select the item then click the <Keys.ContextKey>Rubbish Bin</Keys.ContextKey>
button at the bottom, or press <Keys.HardKey>Delete</Keys.HardKey> then click the layer/surface. If
linked to Ai, this will also delete the layer/surface in Ai.

## Synergy Fixtures Window

Every Prism Zero layer or Ai server layer appears as a button in the Synergy Fixtures
window. You can display this using the button at the bottom of the
[Synergy Settings window](#synergy-setup) or by double tapping <Keys.HardKey>Open/View</Keys.HardKey>
and then selecting it from the window select buttons.

![Synergy Fixtures Workspace Window](/docs/images/Synergy-Fixtures-Workspace-Window.png)

You use these buttons to select one or more layers for control, just as
you would select lighting fixtures to control. Once selected, use the
[Attribute Editor](operating-synergy.md#attribute-editor-for-controlling-ai-layers) or [wheels](../controlling-fixtures/changing-fixture-attributes.md#changing-attributes-using-the-wheels) to control the media playback and effects. You can then [store palettes](../palettes/creating-palettes.md) and [playbacks](../cues/creating-a-cue.md#creating-a-cue) as with any
other lighting fixture. This is described in the next section, [Operating Synergy](operating-synergy.md).

> The Synergy layers are shown in their own window to keep them
together and help you find them quickly. However if you prefer you
can move the layer buttons into the normal Fixtures window.
