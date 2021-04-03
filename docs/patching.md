---
id: patching
title: Patching
sidebar_label: Patching
---

import Keys from '/src/components/key.ts';

Patching is the process where you tell the console

-   What type of lighting units you have connected to it

-   What DMX addresses they are operating at

-   Which DMX line (universe) each unit is connected to (there are 64
    lines, but the console itself can only output 16 lines; further
    lines can be controlled using networked DMX processors over
    TitanNet)

-   Which buttons on the console you want to use to access them (either
    physical buttons or touch buttons)

-   Particular option settings for each fixture.

  > Before you start rigging, you can use the console to work out the DMX addresses for the fixtures in your rig. Patch them on the console (or simulator), then press <Keys.HardKey>Open/View</Keys.HardKey>, <Keys.HardKey>Patch</Keys.HardKey> to show the Patch View window. This will use the DMX channels as efficiently as possible without leaving any gaps.

If your fixtures are RDM equipped, the console can patch itself from the
rig, see [Patching by RDM](./patching/patching-new-fixtures-or-dimmers.md#patching-by-rdm).

On older consoles with a System/Run/Program switch, the switch must be set to
Program before you can patch.

By default in a new show, each physical DMX output socket (5 pin XLR) is
connected to a DMX line. If you want to change this or use other lines,
go to the [DMX Settings](./system-settings/dmx-output-mapping.md) window from the **System** menu.

> If nothing is happening to the lights when you make changes on the console it is worth checking the [DMX Settings](./system-settings/dmx-output-mapping.md#configuring-dmx-outputs) window to make sure the DMX lines are allocated to outputs.
