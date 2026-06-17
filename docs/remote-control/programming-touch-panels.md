---
id: programming-touch-panels
title: Using touch panels
sidebar_label: Using Touch Panels
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Multiple D3 Touch control panels can be connected to a Titan control system by Ethernet. The touch panels provide
simple control of 8 scenes in 4 zones. This is useful for venue staff to control working lights, house lights or simple show states.

Users can also trigger up to 8 macros and lock/unlock the panel.

![D3 Touch](/docs/images/D3-touch-front.png)



## Connecting the touch panel

Touch panels are connected into the Titan system by wired Ethernet. You can use a Power-over-Ethernet (PoE) equipped network switch, a PoE injector
or a DC adaptor to power the panel.

You need to set suitable IP addresses on the console and on the touch panel or configure DHCP on your network to automatically provide suitable addresses -
read more about [Networking the Console](../networking.md). Then you need to configure the touch panel to tell it the IP address of the Titan device it is controlling:

1. Open the Engineering Menu by tapping the **IP Settings** button (if the D3 Touch is not connected to a Titan session), or by double tapping the **Lock** button (if the D3 Touch is already connected to Titan).
2. By default the D3 Touch will get an IP address for itself by DHCP, however if your network isn't set up for DHCP you will need to assign an IP address in the same range as the console using the **Network Setup** menu.
2. Navigate to **Other Settings**, **Device IP Addresses**
4. Set **Device 1 IP address** to the address of the Titan console that you are controlling.
5. Set **Port** to **4430**
6. Click **Save and Back**
7. Click **Save and Load**

## Programming playbacks for the touch panel

The touch panel has 4 zone buttons across the top of the screen. Selecting a zone displays up to 8 scene buttons in the lower part of the screen.

The zones and scene buttons are configured by programming 4 Playback Groups with specific User Numbers (1010, 1020, 1030, 1040) on the Titan console. 
Each Playback Group can contain up to 8 playbacks which are displayed as the scene buttons for that zone. The playbacks also need to have specific
User Numbers (1011-1018 for zone 1, 1021-1028 for zone 2 and so on).

Within a playback group only one playback can be active, the others will automatically turn off (see [Playback Groups](../running-the-show/playback-controls.md#playback-groups)). You can change this behaviour in the Options setting for the Playback Group.

- Each zone must have at least two scenes programmed.

The legend on the touch screen buttons is taken from the playback or playback group legend set on the console. 

To configure the available scenes on the touch panel, do this:

1. Create the Playbacks you want to show as scene buttons.
2. Set the User Number for each playback (see table below) using <Keys.SoftKey>Set Legend</Keys.SoftKey>.
3. Create a Playback Group containing the playbacks for a zone (see [Playback Groups](../running-the-show/playback-controls.md#playback-groups)).
4. Set the User Number for the playback group to 1010, 1020, 1030 or 1040 (see table below) using <Keys.SoftKey>Set Legend</Keys.SoftKey>.
5. For each item, use <Keys.SoftKey>Legend=</Keys.SoftKey> to provide a legend for the button (text only).
6. Repeat steps 3-5 to set the scene buttons for each of the 4 zone buttons.

- You need to touch one of the zone buttons to refresh the display after making changes.
- You need to set a legend for each Playback Group, or the top zone buttons will appear as empty buttons.

### User numbers for zones and scenes

The zones (Playback Groups) and scenes (Playbacks) must have these User Numbers to make them appear on the D3 Touch.

 Zone | zone button | scene 1 | scene 2 | scene 3 | scene 4 | scene 5 | scene 6 | scene 7 | scene 8
---|---|---|---|---|---|---|---|---|---
Zone 1 | 1010 | 1011 | 1012 | 1013 | 1014 | 1015 | 1016 | 1017 | 1018
Zone 2 | 1020 | 1021 | 1022 | 1023 | 1024 | 1025 | 1026 | 1027 | 1028
Zone 3 | 1030 | 1031 | 1032 | 1033 | 1034 | 1035 | 1036 | 1037 | 1038
Zone 4 | 1040 | 1041 | 1042 | 1043 | 1044 | 1045 | 1046 | 1047 | 1048

- Scenes appear in the order you add the Playbacks to the Playback Group, not the numerical order of the User Numbers. So you need to ensure that you add the Playbacks in the order you want them to be shown.


## Programming macros for the touch panel

By touching the Macro button (bottom left), the touch panel shows eight user macros, with the user numbers 1001-1008.
To configure a macro to be shown on the touch panel, do this:

1. Record a macro (see [Macros](../titan-basics/front-panel-buttons.md#key-macro-buttons))
2. Set the User Number for each macro to 1001-1008 using <Keys.SoftKey>Set Legend</Keys.SoftKey>.
3. Press <Keys.SoftKey>Legend=</Keys.SoftKey> to provide a legend for each button (text only).

- Each macro to be displayed on the touch panel must have a unique number between 1001-1008. The macros are displayed in numerical order.
- You need to touch the Macro button on the screen to refresh the display after making changes.
- In order to use factory macros they need to be copied from the show library to one of the workspace windows, need to be given a User Number 1001-1008, and need to be given a legend using <Keys.SoftKey>Set Legend</Keys.SoftKey>. Factory macros without an individual legend are displayed as an empty button.
- Macros called from the D3 Touch run in a different context than the normal UI. This might make some macros work differently to what you expected. Contact Avolites Support to get help with this.

## Locking / unlocking the touch panel

The touch panel can be locked by pressing the Lock icon in the bottom right of the screen.

- The Lock Screen is the same as the Titan **Lock Screen Background**.
- The Passcode to unlock is the Titan **Venue Mode Password** (must be a numeric code only). 

Both of these settings are configured in the **Lock** tab of [User Settings](../system-settings/user-settings.md#lock). 
When either of these settings is updated, you need to enter Engineering Menu and select **Save and Load** to activate the setting on the touch screen. 

## Show firmware version

You can show the firmware version of the D3 Touch by pressing and holding an invisible button to the left of the **Lock** button on the touch screen.

## Update firmware

The D3 Touch can update its firmware automatically from the internet. The panel must be connected to a network with internet access which allows FTP connections.

1. Open the Engineering Menu by tapping the **IP Settings** button (if the D3 Touch is not connected to a Titan session), or by double tapping the **Lock** button (if the D3 Touch is already connected to Titan).
2. In the **Project Setup** menu set the following options:
    - **Reload Next Time**: On/Checked
    - **Reload Images**: On/Checked
    - **Project Location**: `https://demopad-public.s3-eu-west-1.amazonaws.com/avolites/project` (note this field defaults to http not https)
    - **Project Password**: Avolites-001
    - **Project Name**: D3
3. Click **Save and Back**.
4. Click **Save and Load**.

Once the firmware update has succeeded, you need to turn off the options **Reload Next Time** and **Reload Images** otherwise the D3 Touch will attempt to update the firmware every power cycle:

1. Return to the Engineering Menu
2. In the **Project Setup** menu set the following options:
    - **Reload Next Time**: Off/Unchecked
    - **Reload Images**: Off/UnChecked
3. Click **Save and Back**.
4. Click **Save and Load**.
