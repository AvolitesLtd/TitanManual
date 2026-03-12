---
id: usb-expert
title: Upgrading firmware and testing hardware (USB Expert Console)
sidebar_label: Upgrading Firmware (USB Expert)
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

From time to time Avolites will issue updated firmware for the various modules inside the console. These may be included as part of a software version update, or can be applied separately.

Avolites also provides a software utility called **USB Expert Console** which is used to update firmware. It is also useful for fault finding if you have problems with the console hardware. 

## Opening USB Expert Console

Open the **Tools menu** from the system toolbar, click on **Control Panel** and select the **USB Expert Console** option. For a PC-based device or panel such as T1, T2, T3 or Titan Mobile, run **USB Expert Console** from the start menu.

![Start USB Expert from Tools Menu](/docs/images/USB-Expert-Start.png)

In the top left hand window **Connected Panels** you should see a list of the hardware panels in the system.
If no panels are listed, go to the Tools menu, click ACW Service, click Start.

> The USB Expert Console might be opened automatically after completion of a software upgrade, to prompt you to upgrade panel firmware.

## Panel indications in USB Expert

In the top left hand window **Connected Panels**, an icon to the left of each panel shows its status.

- Panels in normal operation has a green USB icon (1).
- Panels with an update available or which are in Boot Mode show a download/clock icon (2).
- Panels which are not responding show a yellow exclamation icon (3).
- Panels which are in Boot Mode show a spanner icon (4).

![USB Expert panel status](/docs/images/USB-Expert-Panel-Status.png)

## Automatic firmware update

Use the following steps to upgrade panel firmware:

1. Open USB Expert Console as described above.

2. You should see a list of the panels on the console in the left hand **Connected Panels** window (the list will vary depending on the console). Select the panels which have an update available (see image above).
![USB Expert Panel Update](/docs/images/USB-Expert-Panel-Update.png)

3. On the right hand side of the window select the **Service** tab and click **Enter Boot**.

4. In the **Auto Update** box on the right hand side, the firmware updates will be listed. The list may vary depending on the console type and the updates available. If updates are not shown, see next section.

5. Click **Update Now** to start the process and the system will update the panels one by one. A green progress bar will be shown in the bottom part of the window.

6. When the Auto Update box is empty, close USB Expert, shut down the console using the power button, then restart it.

- If the panel update has not completed after 10 minutes, press **Exit Boot** regardless and wait for all panels to reappear in the **Connected Panels** window. Then repeat from step 3 to check whether all panels have in fact been updated. 

## Manual firmware update

If firmware updates are not listed in the Auto Update window, but you have .bin or .hex files to update from, you can manually update individual panels.

1. Open USB Expert Console as described above.

2. In the left hand **Connected Panels** window select the panel that you want to update.

3. Click on the **Service** tab and click **Enter Boot**.

4. Make sure the panel has gone into Boot Mode in the Connected Panels window.

5. Click on **Program** in the Service Operations window.

6. A file selection dialog will open. Navigate to ```C:\Program Files (x86)\Avolites\USB Expert\Panel Software```

7. Select the firmware file appropriate for the panel (see [Firmware file reference](#firmware-file-reference) at the end of this section).

8. On completion, press **Exit Boot**.

## Testing panel operation

The central part of the USB Expert window shows a log of hardware events. You can use this to test whether the panel controls are working correctly.

### Testing Buttons / switches

Pressing any button on the panel should show up as ```KeyState:0``` followed by ```KeyState:1``` when the button is released. If you can see double entries, missed responses or no response at all then the switch may be faulty and should be replaced.

![USB Expert Panel Update](/docs/images/USB-Expert-Key-Test.png)

### Testing Faders

Pressing any button on the panel should show up as ```KeyState:0``` followed by ```KeyState:1``` when the button 

## Firmware file reference

**T1 / TitanOne** |
Titan One DMX Panel 1 |	titan_one.bin
**T2** |
T2 DMX 1	| titan_two.bin
T2 SMPTE Panel 1	| N/A
**T3** |
T3 Panel 1	| T3_MB.bin
T3 DMX 1	| N/A
T3 SMPTE 8	| N/A
**Titan Mobile** |
Titan Mobile DMX Panel 1	| N/A
Titan Mobile Panel 1	| m_mb.bin
**TitanNet Processor**	| 
Sapphire SMPTE Panel 1	 | N/A
Sapphire SMPTE Panel 2	 | N/A
Sapphire DMX Panel 1	| st_dmx.bin
Sapphire DMX Panel 2	| st_dmx.bin
DC UPS Panel 2	| dc_ups.bin	
**Quartz**	| 	
Quartz Main Board 1	| qz_mb.bin
Quartz DMX Panel 1	| N/A
Quartz Auxiliary Panel 1	| qz_qab.bin
**Tiger Touch**	| 	
Touch Preset Panel 1	| pt_fas.hex
Touch Playback Panel 1	| pt_mf.hex
Touch Program Panel 1	| pt_pp.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
**Tiger Touch Pro**	| 	
Touch Preset Panel 1	| pt_fas.hex
Touch Playback Panel 1	| pt_mf.hex
Touch Program Panel 1	| pt_pp.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
UPS Panel 1	| ups.bin
**Tiger Touch II**	| 	
Touch Preset Panel 1	| pt_fas.hex
Touch Playback Panel 1	| pt_mf.hex
Touch Program Panel 1	| tt_pp.bin
Sapphire SMPTE Panel 1	| N/A
Sapphire DMX Panel 1	| st_dmx.bin
DC UPS Panel 1	| dc_ups.bin
**Pearl Expert**	| 	
Preset Fader Panel 1	| xp_fas.hex
Preset Fader Panel 2	| xp_fas.hex
Preset Fader Panel 3	| xp_fas.hex
Playback Panel 1	| xp_mf.hex
Program Panel 1	| xp_pp.hex
Screen Panel 1	| xp_scb.hex
Master Panel 1	| xp_mas.hex
Touch Wing Panel 1	| ew_sb.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
**Pearl Expert Pro	
Preset Fader Panel 1	| xp_fas.hex
Preset Fader Panel 2	| xp_fas.hex
Preset Fader Panel 3	| xp_fas.hex
Playback Panel 1	| xp_mf.hex
Program Panel 1	| xp_pp.hex
Screen Panel 1	| xp_scb.hex
Master Panel 1	| xp_mas.hex
Touch Wing Panel 1	| ew_sb.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
UPS Panel 1	| ups.bin
**Arena**	| 	
Sapphire SMPTE Panel 1	| N/A
Sapphire SMPTE Panel 2	| N/A
Sapphire DMX Panel 1	| st_dmx.bin
Sapphire DMX Panel 2	| st_dmx.bin
Arena Auxiliary Panel 1	| ar_asb.bin
Touch Playback Panel 1	| pt_mf.hex
TitanNet Switch Panel 1	| tns_mb.bin
Touch II Program Panel 1	| tt_pp.bin
Tiger Touch Wing 5	| tt_fw.bin
Tiger Touch Wing 6	| tt_fw.bin
**Sapphire Touch**	| 	
Sapphire Motor Panel 1	| st_mb.bin
Sapphire Motor Panel 2	| st_mb.bin
Sapphire Motor Panel 3	| st_mb.bin
Sapphire Motor Panel 33	| st_mb.bin
Sapphire Motor Panel 34	| st_mb.bin
Sapphire Motor Panel 35	| st_mb.bin
Sapphire Motor Panel 36	| st_mb.bin
Sapphire Motor Panel 37	| st_mb.bin
Sapphire Motor Panel 38	| st_mb.bin
Sapphire Program Panel 1	| st_pp.bin
DC UPS Panel 1 	| dc_ups.bin
Sapphire SMPTE Panel 1	| N/A
Sapphire SMPTE Panel 2	| N/A
Sapphire DMX Panel 1	| st_dmx.bin
Sapphire DMX Panel 2	| st_dmx.bin
**Diamond 7 (D72-215)**	| 	
D7 SMPTE Panel 1 | N/A
D7 UPS & Network Switch | N/A
D7 Fader Panel 1	| D7_MOT.bin
D7 Fader Panel 2	| D7_MOT.bin
D7 Fader Panel 3	| D7_MOT.bin
Diamond DMX 1	| D7_DMX.bin
D7 IO 1	| D7_SIO.bin
D7 Display Hub 1	| D7_UDH.bin
D7 Program Panel 1	| D7_PPC.bin
D7 Encoder Panel 1	| D7_ECB.bin
**Diamond 7 (D72-330)**	| 	
D7 SMPTE Panel 1	| N/A
D7 UPS & Network Switch	| N/A
D7 Fader Panel 1	| D7_MOT.bin
D7 Fader Panel 2	| D7_MOT.bin
D7 Fader Panel 3	| D7_MOT.bin
D7 Fader Panel 4	| D7_MOT.bin
D7 Fader Panel 5	| D7_MOT.bin
D7 Fader Panel 6	| D7_MOT.bin
Diamond DMX 1	| D7_DMX.bin
Diamond DMX 2	| D7_DMX.bin
D7 IO 1	| D7_SIO.bin
D7 Display Hub 1	| D7_UDH.bin
D7 Program Panel 1	| D7_PPC.bin
D7 Encoder Panel 1	| D7_ECB.bin
D7 Encoder Panel 2	| D7_ECB.bin
**Diamond 9 (D92-215)**	| 	
Diamond Fader Panel 1	| BB_MOT.bin
Diamond Fader Panel 2	| BB_MOT.bin
Diamond Fader Panel 3	| BB_MOT.bin
Diamond Program Panel 1	| BB_PP.bin
Diamond Softkey Panel 1	| BB_SKB.bin
Diamond Mini Screen 1	| BB_RGB2P2.bin
Diamond Mini Screen 2	| BB_RGB2P2.bin
Diamond Mini Screen 3	| BB_RGB2P2.bin
UPS 24 Panel 1	| BB_UPS.bin
Diamond IO 1	| BB_IO.bin
Diamond SMPTE 1	| N/A
Diamond Encoder Panel 1	| BB_MEB.bin
Diamond Encoder Panel 2	| BB_MEB.bin
Diamond Side Encoders 1	| BB_SKBLR.bin
Diamond Side Encoders 2	| BB_SKBLR.bin
Diamond DMX 1	| BB_DMX.bin
Diamond DMX 2	| BB_DMX.bin
Keyboard Panel 1	| BB_KBD.bin
Diamond Layer Screen 1	| BB_MST4P3.bin
Diamond Layer Screen 2	| BB_MST4P3.bin
Diamond Layer Screen 3	| BB_MST4P3.bin
**Diamond 9 (D93-330)**	| 	
Diamond Fader Panel 1	| BB_MOT.bin
Diamond Fader Panel 2	| BB_MOT.bin
Diamond Fader Panel 3	| BB_MOT.bin
Diamond Fader Panel 4	| BB_MOT.bin
Diamond Fader Panel 5	| BB_MOT.bin
Diamond Fader Panel 6	| BB_MOT.bin
Diamond Program Panel 1	| BB_PP.bin
Diamond Softkey Panel 1	| BB_SKB.bin
Diamond Mini Screen 1	| BB_RGB2P2.bin
Diamond Mini Screen 2	| BB_RGB2P2.bin
Diamond Mini Screen 3	| BB_RGB2P2.bin
UPS 24 Panel 1	| BB_UPS.bin
Diamond IO 1	| BB_IO.bin
Diamond SMPTE 1	| N/A
Diamond Encoder Panel 1	| BB_MEB.bin
Diamond Encoder Panel 2	| BB_MEB.bin
Diamond Encoder Panel 3	| BB_MEB.bin
Diamond Encoder Panel 4	| BB_MEB.bin
Diamond Side Encoders 1	| BB_SKBLR.bin
Diamond Side Encoders 2	| BB_SKBLR.bin
Diamond DMX 1	| BB_DMX.bin
Diamond DMX 2	| BB_DMX.bin
Keyboard Panel 1	| BB_KBD.bin
Diamond Layer Screen 1	| BB_MST4P3.bin
Diamond Layer Screen 2	| BB_MST4P3.bin
Diamond Layer Screen 3	| BB_MST4P3.bin
**T3-Wing**	| 	
T3 Wing 1	| T3_WING.bin
**TM-Wing**	| 	
 ~ | ~	
**TT2-Wing**	| 
Tiger Touch Wing 5	| tt_fw.bin
Tiger Touch Wing 6	| tt_fw.bin
	









