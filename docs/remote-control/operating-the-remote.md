---
id: operating-the-remote
title: Operating the Remote
sidebar_label: Operating the Remote
---

import Keys from '@site/src/components/key.ts';

The previous section [Setting up the Remote](setting-up-the-remote.md) takes you
through the steps for getting a mobile device connected to the console.

Once you have a network set up, open the Titan Remote app and a list of
connected consoles should be shown.

![Titan Remote App connection screen](/docs/images/Remote-Connection-Screen.png)

There is also a local emulator which can be used to test or demonstrate
the remote when no real console is connected. If your console does not show
up in the list, you can enter its IP address manually by clicking the + button 
in the top right hand corner of the screen.

![Titan Remote Android App with wheels](/docs/images/Remote-Colour-Attributes.png)

The app title bar should be green showing good connection. If the title bar turns
red then you do not have connection to the console.

Choose what you want to control using the **Keypad / Fixture / Group / Palette / Cue** buttons near the
top of the app. The Keypad button enables or disables the numeric pad
(the keypad overlays some other screens, so you will need to turn it
off to see the others).

Some buttons have a circle icon, this shows that holding down the button
will give additional options.

The layout of the screen may vary depending on the screen size of your device. On tablets
and devices with larger screens, you can see multiple windows at the same time.

## Keypad

The keypad screen lets you do most common tasks in the way a
programmer\'s remote normally works. You can turn on/Locate fixtures and
dimmers either individually or together.

![Titan Remote Android App with keypad](/docs/images/Remote-Keypad.png)

The User Number of the fixture or dimmer (as shown in the top left corner of the fixture button) is used for control. For
example to turn on dimmer 3 at 50% you would press:

**`3 @ 5`**

To turn on dimmers 1-10 at 80% you would press:

**`1 Thro 10 @ 8`**

For 100% you just press @ twice, for example:

**`1 Thro 10 @ @`**

> To Locate selected fixtures, press Locate instead of the @ button.

You can select multiple ranges of dimmers or fixtures using the And
button, for example:

**`1 Thro 10 And 20 Thro 30 @ 6`**.

## Controlling Fixtures

The fixture screen allows you to select fixtures exactly as you would on
the console.

![Fixture View in Titan Remote Android App](/docs/images/Remote-Fixtures.png)

You can scroll the fixture screen up and down by dragging the window. To
view the fixture pages, drag the title bar of the fixture window downwards.

Use the **Highlight**, **Prev** and **Next** buttons to step through a set of selected fixtures
one at a time. Press the **All** button to reselect all fixtures in the set. Hold down the **All** button to
step through various selection patterns (odd, even etc).

Use the **IPCGBES** buttons at the top to select the group of attributes you want
to control, and scroll wheels will be shown for the available functions.

![Colour Control in Titan Remote Android App](/docs/images/Remote-Colour-Attributes.png)

The wheels show function values (such as colours or gobo names). To go
to the next function if the attribute has ranges, just touch the arrows at the top or bottom of the
wheel. To manually scroll the value, spin the wheel with your fingers.
If there are more than three functions, touch the **IPCGBES** button again
to change to the other functions.

Press the **Clear** button to clear the selection and all changes in the
remote programmer. Hold down the **Clear** button to clear all programmers
(for example if someone has been doing something on the console at the
same time, this will clear the console's programmer too).

- When you have finished using the remote, press **Clear** to remove changes from the remote
programmer, or your changes will continue to show on stage and confuse everyone. 
You can also clear the remote programmer by holding <Keys.HardKey>Clear</Keys.HardKey> on
the main console and selecting <Keys.SoftKey>Clear all programmers</Keys.SoftKey>.
When another programmer is controlling fixtures, the attribute displays show a cyan dot.

From the remote's **Cue** screen you can play back cues from the touch buttons 
in the Playbacks workspace window. Hold down a playback button to kill or release 
an active playback.

- You can't play back cues from playback faders or executor buttons from the remote,
	if you want to do this, make a copy of the cue in the Playbacks window.



## Recording Palettes, Groups and Cues

You can record palettes, groups and cues using the **Rec** button on the remote,
then click a workspace button as normal. You can also hold down an empty
button to quick record.

When you record an item you can set a text legend
or a picture legend. You can hold down a button to edit its legend.

![Remote edit legend](/docs/images/Remote-Legend.png)

If you record to a used palette button, you
are given options on whether to merge or replace the palette. 

