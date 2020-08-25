---
id: version-14.0-linking-the-console-to-stand-alone-capture
title: Linking the Console to Stand-Alone Capture
sidebar_label: Linking the Console to Stand-Alone Capture
original_id: linking-the-console-to-stand-alone-capture
---

Sometimes the extra capabilities of the full version of Capture are
needed, and the console is linked to a PC running full Capture. The
fixture patch details and fixture selection will sync between the
console and Capture.

When the PC is connected to the same network as the console, you should
be able to see the console listed at the bottom of the **"Universes"** tab
in Capture. The console should link automatically, but if not or if
there are multiple Titan consoles on the network, you can manually
select one from the list..

> For linking/sync to work properly the external Capture version must be 2020, 2018 or the last version of Nexum. Older versions of Capture will only partially work.

While Capture is connected, the console will attempt to keep its show
synchronised to the Capture show. If you add a fixture or change patch
details in Capture the changes will automatically be made on the
console. If you add a fixture or make changes to the patch on the
console, then Capture will update. Selecting a fixture on one will
select the fixture on the other. If you don't want this to happen you
can turn off the **"Console Link"** function in Capture.

Patching Console Fixtures into Capture
--------------------------------------

When you first connect the console to Capture, or if you [load a show](../titan-basics/loading-and-saving-shows.md#loading-a-show) on
the console or [patch a new fixture](../patching/patching-new-fixtures-or-dimmers.md), the Console Patch dialog will be
shown in Capture. This contains a list of the fixtures which are on the
console and need inserting into the Capture show.

You have to drag the fixture(s) from the Console Patch window to one of
the Capture viewports to place it in the Capture show, the DMX address
will be set from the Titan show. You can select and drag multiple
fixtures.

![Capture Console Patch Window](/docs/images/Capture-Console-Patch-Window.png)

Fixtures already placed in the internal Capture simulator will appear in
the same position and orientation in the stand-alone Capture. Changes to
position, orientation, legend and user number will sync between the
console and stand-alone Capture.

> Fixture Legend in Titan links to the **"Unit"** property on the Capture fixture, and User Number in Titan links to the **"Channel"** property in Capture.

Patching Capture Fixtures onto the Console
------------------------------------------

If fixtures have already been added in Capture before the console was
linked, you can patch them on the console using Active Fixtures like
this

1. Press \<Patch\>, \[Active Fixtures\]

2. You should see the Capture computer as a softkey option, press it

3. Select an empty handle to start patching, or press \[Patch Capture @
...\] to patch automatically

> If any fixtures can't be patched (unsupported fixture type, or
duplicate user number) then a blank handle will be left and a warning
softkey will be shown at the end; clicking this will show a list of
problems found.

To fix duplicate user numbers, edit the value in the **"Channel"** field in
Capture to be a unique number. To fix unsupported fixtures, first try
[updating your Titan fixture library](../fixture-personalities.md#updating-the-personality-library-on-the-console). If this doesn't help, you can
[submit a personality request](../fixture-personalities.md#requesting-a-new-fixture-personality) on the [Avolites website](https://personalities.avolites.com/?mainPage=Request%20Queue.asp&) and select "Capture
Visualiser (.c2o)" from the Desk Type options.