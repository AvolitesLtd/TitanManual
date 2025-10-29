---
id: programming-touch-panels
title: Using touch panels
sidebar_label: Using Touch Panels
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Multiple D3-Touch control panels can be connected to a Titan control system by Ethernet. The touch panels provide
simple control of 8 playbacks in 4 playback groups. This is useful for venue staff to control working lights, house lights or simple show states.

Users can also trigger up to 8 macros and lock/unlock the panel.

![D3-Touch](/docs/images/D3-touch-front.png)



## Connecting the touch panel

Touch panels are connected into the Titan system by wired Ethernet. You can use a Power-over-Ethernet (PoE) equipped network switch, a PoE injector
or a DC adaptor to power the panel.

You will need to set suitable IP addresses on the console and on the touch panel or configure DHCP on your network to automatically provide suitable addresses -
read more about [Networking the Console](../networking.md).

## Programming playbacks for the touch panel

The touch panel allows the user to select one of four Playback Groups. Within a playback group only one playback can be active, the others automatically turn off (see [Playback Groups](../running-the-show/playback-controls.md#playback-groups)). The touch panel shows playback groups with the user numbers 1001-1004.

The legend on the touch screen buttons is taken from the playback legend set on the console. The colour of the button is set by the halo colour of the playback.

To configure a Playback Group to appear on the touch panel, do this:

1. Create a Playback Group containing the playbacks you want to be shown (see [Playback Groups](../running-the-show/playback-controls.md#playback-groups)).
2. At the top level menu press <Keys.SoftKey>Set Legend</Keys.SoftKey> then the select button for the Playback Group.
3. Press <Keys.SoftKey>User Number=</Keys.SoftKey> and set a number between 1001-1004.
4. Press <Keys.SoftKey>Legend=</Keys.SoftKey> or <Keys.SoftKey>Picture</Keys.SoftKey> and provide a legend for the button.
5. If you wish, set the button colour by pressing <Keys.SoftKey>Halo</Keys.SoftKey> and selecting a colour.
6. Repeat steps 2-5 to set the Legend/Colour for each playback in the Playback Group.

- Each Playback Group to be displayed on the touch panel must have a unique number between 1001-1004. The Playback Groups are displayed in numerical order.

## Programming macros for the touch panel

By touching the Macro button (bottom left), the touch panel shows eight user macros, with the user numbers 1001-1008.
To configure a macro to be shown on the touch panel, do this:

1. Record a macro (see [Macros](../titan-basics/front-panel-buttons.md#key-macro-buttons))
2. At the top level menu press <Keys.SoftKey>Set Legend</Keys.SoftKey> then the select button for the macro.
3. Press <Keys.SoftKey>User Number=</Keys.SoftKey> and set a number between 1001-1008.
4. Press <Keys.SoftKey>Legend=</Keys.SoftKey> or <Keys.SoftKey>Picture</Keys.SoftKey> and provide a legend for the button.
5. If you wish, set the button colour by pressing <Keys.SoftKey>Halo</Keys.SoftKey> and selecting a colour.

- Each macro to be displayed on the touch panel must have a unique number between 1001-1008. The macros are displayed in numerical order.


## Locking / unlocking the touch panel

The touch panel can be locked by pressing the Lock icon in the bottom right of the screen.
The Passcode to unlock is set in the **Lock** tab of [User Settings](../system-settings/user-settings.md#lock). 
(Numeric codes only).


