---
id: user-settings
title: User Settings
sidebar_label: User Settings
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

The User Settings menu may be accessed from the <Keys.SoftKey>User Settings</Keys.SoftKey> softkey
on the **System** menu. You can also get it directly from any other
menu by holding down the <Keys.HardKey>Avo</Keys.HardKey> button and pressing <Keys.SoftKey>User Settings</Keys.SoftKey>.

![User Settings Window](/docs/images/User-Settings-Window.png)

A window will open showing the user settings, or you can also set the
same options using the softkey options. User Settings are individual for
each User and you can change the User from this screen.

> Click on the <Keys.ContextKey>i</Keys.ContextKey> button for a help window on each setting.

Options are divided into categories on the softkeys or in the tabs down the left
hand side. The default setting is ***shown in bold***.

## General

 Option                 | Action  
---|------
Chase Snap              | *On:* the <Keys.HardKey>Next Step</Keys.HardKey> and <Keys.HardKey>Prev Step</Keys.HardKey> buttons will snap to the new state in chases<br/> ***Off:*** programmed fades will be shown<br/> This is the same function as the <Keys.HardKey>Snap</Keys.HardKey> button which features on some consoles. 
Cue List Snap           | *On:* the <Keys.HardKey>Next Step</Keys.HardKey> and <Keys.HardKey>Prev Step</Keys.HardKey> buttons will snap to the new state in cue lists<br/> ***Off:*** programmed fades will be shown.
Clear Record Mask       | ***On:*** the record mask is cleared back to All Enabled when you enter the Record function<br/> *Off:* the record mask remains as you previously set it.
Copy Cues               | ***Copy Tracked Values:*** tracked values will copy when you copy a cue from a tracked cue list.<br/> *Don't Copy Tracked Values:* only the values from the cue itself will be copied
Run Startup Playbacks   | ***On:*** Playbacks set to Startup in Options will run on startup.<br/> *Off*: Disables startup playbacks from running. This option allows you to globally disable startup playbacks.
System Render Rate (Hz) | Sets the output rate of DMX frames from 1-44 frames per second *(default 40)*. You can reduce this if processing of a complex show is slowing down the console.


## Display

 Option                             | Action  
---|------
External Display                    | ***On:*** External display is enabled <br/> *Off:* External display is disabled.
External Screen Workspace Shortcuts | ***On:*** Each screen has its own Workspace Shortcut buttons (shown down the side of the screen on external screens). This allows you to recall different window layouts separately on each screen rather than changing all screens. <br/>*Off:* The Workspace buttons on the main screen control all screens.
Lock Screen Background              | Sets a picture to be displayed when the console is locked.

-  These options can also be set from **System** menu, in the **Display Setup** option.


## Handles

 Option            | Action  
---|------
Grand Master Fader | *On:* Grand Master fader is enabled (some consoles do not have this fader).<br/>***Off:*** Grand Master fader is disabled. This can be handy if it gets broken or if you wish to disable it to avoid confusing inexperienced operators.
Delete Default     | ***Delete:*** Items are deleted when you press Delete and double tap them.<br/>*Unassign:* items  are released from the handle and become unassigned - can be reassigned from the Show Library.
Prompt Replace     | When you try to save to a handle or playback which is already used<br/>***Always Ask:*** the console will always prompt Cancel/Replace/Merge<br/>*Always Merge:* the console will never prompt and will just merge<br/>*Palettes Always Merge:* the console will prompt Cancel/Replace/Merge unless you are saving a palette when it will just merge
Display Halo       | ***On:*** Coloured halos are shown on buttons.<br/>*Off:* Halos are not shown.
Fixture Halos      | *Custom:* Fixture buttons show user-defined halo colours if defined, otherwise no halo. <br/>***Auto:*** Fixture buttons are coloured using automatic fixture colours. See [Halo](../patching/changing-the-patch.md#fixture-button-halo)
Handle Buttons     | Sets the default size of the touch buttons to *Small*, ***Normal***, *Large* or *Super Size*. <br/>This can be overridden separately in any window.
Text Size          | Sets the default size of the text used in touch buttons to *Small*, ***Normal***, *Large* or *Super Size*. <br/>This can be overridden separately in any window.
Playback Paging    | Sets how the playback faders behave when you change page with a playback active.<br/> *Always Hold:* - sets the standard behaviour for non-motorised faders where the fader keeps control of the active playback when the page is changed and has to be lowered to zero before a playback on the new page can be fired.<br/> *Never Hold:* - the standard behaviour for motorised faders where the fader always relates to the current page. To regain control of a playback from another page you have to go back to that page and level match the fader (which is done automatically by motorised fader). <br/> ***Normal:*** sets the normal mode for the console type. <br/>When a playback is active from another page the display area goes purple and the page number is shown at the top in light blue.
Current Handle World | Sets the handle world - read more about [Handle Worlds](../titan-basics/multi-user-operation.md#handle-worlds).

## Key Profiles

Allows you to select and edit key profiles using the softkeys. See [Key Profiles](key-profiles.md) for more info.

## Patching

 Option                      | Action  
---|------
Warn Before Parking Fixtures | Sets the console action when you patch a fixture which overwrites the DMX channels of another fixture. This causes the overwritten fixture to be "parked".<br/> ***Always:*** console will warn you.<br/>*Never:* console will park the fixture without warning you. See [Parked fixtures](../patching/patching-new-fixtures-or-dimmers.md#parked-fixtures)
DMX Address                  | Sets whether the DMX address of fixtures is shown in the fixture touch buttons.
Auto Groups                  | Sets whether the console will automatically create new groups for fixtures when you patch. See [Auto Groups](../controlling-fixtures/fixture-groups.md#auto-groups).
Preset Palettes              | Sets whether preset palettes should be created when fixtures are patched. You can also turn this on when patching using the <Keys.SoftKey>Create Preset Palettes</Keys.SoftKey> softkey.<br/>***Do Not Create:*** no palettes will be created.<br/>*Create On Workspaces:* palettes will be created in Colour/Gobo/Position workspace windows.<br/>*Create On Presets:* palettes will be created on preset buttons. This option only works for Pearl Expert.

## Times

 Option                          | Action  
---|------
Tempo Units                      | Sets the units for displaying tempo, *Seconds* or ***Beats per Minute***.
Connected View Sets              | Sets the console action when you change the speed of a connected chase.<br/> ***Speed:*** The console will modify the saved speed of the chase.<br/>*Temporary Speed:* The console will not save the modified speed, and the next time the chase is fired it will go back to its programmed speed.
Preload Time                     | Sets a fade time for the Preload function, default 2 seconds. This value would normally be set for quiet fixture movement.
Times Format                     | Selects between ***HH:MM:SS*** format and *Seconds* format. In *HH:MM:SS* format the console will convert any number you enter into hours minutes and seconds.
Compensate for Rate Grand Master | ***On:*** When a tempo is tapped on a BPM master it will not be affected by the Rate Grand Master being set to less than 100%.<br/>*Off:* Tempo will be scaled by Rate Grand Master.


## Formatting

 Option        | Action  
---|------
Channel Levels | Sets how you enter channel levels when using numeric entry of levels<br/> *Set In Tens:* enter one digit for the channel level, 5 = 50%.<br/>***Set in Units:*** enter two digits, 50 = 50%.
Number Style   | Sets how channel values are displayed in Cue View and Palette View. <br/> *Precise:* will include all decimal places.<br/>*Rounded:* round to nearest whole number.<br/>***Dynamic:*** show decimals where appropriate, remove trailing zeros.

## Palettes

 Option                   | Action  
---|------
Quick Palettes            | ***On:*** Enables the Quick Palette recall function which sets a palette to all applicable fixtures if nothing is selected - see [Quick Palettes](../palettes/using-palettes.md#quick-palettes-with-no-fixtures-selected).<br/> *Off:* Quick Palettes are disabled. If no fixtures are selected, recalling a palette does nothing.
Minimum Palette Mode      | Sets what type of palettes can be created when recording palettes.<br/>***Global:*** All palettes are stored as Global.<br/>*Shared:* all palettes are stored as Shared.<br/>*Normal:* All palettes are stored as Normal.
Add New Palette Channels  | ***On:*** new channels added into palettes will output in playbacks using those palettes.<br/>*Off:* new channels will not output. You can use this to force palettes to output in its original unedited state.
Auto Legend               | ***On:*** New items will automatically have legends generated for them (colour scribbles for colours or descriptive legends for other functions).<br/>*Off:* New items are given numeric legends.
Highlight Active Palettes | ***On:*** Active palettes are shown as highlighted in the workspace windows.<br/>*Off:* Active palettes are not highlighted.
Filter Relevant Palettes  | ***On:*** Palettes which do not contain settings for the currently selected fixtures will be greyed out.<br/>*Off:* Palette buttons are not greyed out.
Master Palette Time       | Sets the default fade time to be used when recalling palettes live. See [Master Time for Palettes](../palettes/timing-with-palettes.md#master-time-for-palettes) for more information.
Master Palette Overlap    | Sets the default overlap to be used when fading palettes.
Record Nested Palettes    | ***On:*** Palettes containing other source palettes will be updated when you change the source palette.<br/>*Off:* Nested palettes are not updated.<br/>See [Nested Palettes](../palettes/creating-palettes.md#nested-palettes) for more detail.
Preset Palettes           | This is the same as the option in the Patching section, [see above](#patching).

## Release

 Option             | Action  
---|------
Release To Home     | ***On:*** when the last active playback is released fixtures will return to home values.<br/>*Off:* LTP channels will remain set.
Master Release Time | Sets the default release time.
Release Priority    | The playback priority used with the Release menu or when running Release macros - *Low*, *Normal*, *High*, ***Programmer***, *Very High*. Playbacks with priority below this level will be released by the *Release All* function (double press <Keys.HardKey>Release</Keys.HardKey>).

- Setting Release Priority to **Low** can be useful to protect against accidentally turning off all playbacks by an unintended double press of <Keys.HardKey>Release</Keys.HardKey> - with this setting only playbacks set to Low Priority (if you had any running) would be released.

-  These settings can also be changed from the Release menu.

## Clear

 Option                    | Action  
---|------ 
Auto Reset Mask            | ***On:*** The Clear Mask will reset to include all attributes after every clear.<br/>*Off:* The Clear Mask will remain how you last set it.
Zero Preset Fader Levels   | ***On:***  Intensity levels set on fixtures patched to fader handles will be zeroed and removed from the programmer when clear is pressed.<br/> *Off:*  Intensity levels will be will remain set but will be removed from the programmer. 
Release to Playback Values | *On:* LTP channels will release to the values set in the last playback when Clear is pressed.<br/>***Off:*** LTP channels will not change when Clear is pressed.
Clear Cue Times            | ***On:*** Cue times in the programmer are reset to defaults when Clear is pressed.<br/>*Off:* Cue times set in the programmer will remain.
Clear Rate Settings        | ***On:*** The rate settings in the programmer are reset to default when Clear is pressed. <br/>*Off:* Rate settings set in the programmer will remain.
Clear Direction            | ***On:*** Direction in the programmer is reset to default when Clear is pressed.<br/>*Off:* Direction set in the programmer will remain.
Clear Selected Fixtures    | *On:* Only fixtures which are currently selected will be cleared from the programmer when Clear is pressed. If no fixtures are selected then all fixtures are cleared.<br/> ***Off:*** All fixtures are cleared from the programmer whether any are selected or not.
Action Precedence          | Sets a two-stage action for presses of the Clear button:<br/>***Selection With Programmer***: Any press of the button clears both the fixture selection and all fixture changes in the programmer<br/>*Selection Then Programmer*: If any fixtures are selected, fixture selection is cleared on button press. If no fixtures are selected then the programmer is cleared.<br/>*Programmer Then Selection*: If there are any changes in the programmer, then the programmer is cleared on button press. If there's nothing in the programmer then fixture selection is cleared.

-  These settings can also be changed from the Clear menu if you hold down the <Keys.HardKey>Clear</Keys.HardKey> button.

## Effects

 Option         | Action  
---|------
Swop Shapes     | Sets how shapes react to another playback being fired in Swop mode.<br/>***All Shapes:*** All running shapes from other playbacks are stopped.<br/>*Intensity Shapes:* Only intensity shapes from other playbacks stop.
Shape Behaviour | Sets how Key Frame Shapes combine with other playbacks.<br/>***Overlay:*** Key Frame Shapes will overlay all other values.<br/>*LTP:* Key Frame Shapes will work in LTP mode where later changes will override the shape.<br/>See [Saving a key frame shape to a cue](../effects/key-frame-shapes.md#saving-a-key-frame-shape-to-a-cue).

## LEDs

 Option              | Action  
---|------
Fixture LEDs         | Sets how the button LED behaves when a fixture is patched to a fader handle. <br/>***Show Occupation:*** The LED shows handle patched (dim) and selected (bright) state. <br/>*Mimic Intensity:* The LED shows fixture intensity level.<br/>**The options below only function when *Show Occupation* is selected**
LED Empty Level      | Sets level for unpatched handle.
LED Occupied Level   | Sets level for occupied but unselected handle.
LED Programmer Level | Level if fixture is in the programmer.
LED Selected Level   | Level if fixture is selected.

## Timecode


 Option                     | Action  
---|------
Kill Out of Range Playbacks | *On:* Kills the playback if the incoming timecode is outside the timecode values included in the playback.<br/> ***Off:*** The playback will remain active.
MIDI Device ID              | Sets the Device ID when using MIDI show control commands.
MIDI Glitch Detection       | ***On:*** Enables the glitch options below.<br/>*Off:* Glitch detection is disabled.
MIDI Glitch Tolerance       | Sets the maximum amount of time a MIDI timecode can jump by without being seen as a glitch.
MIDI Glitch Timeout         | Sets the amount of time the console should ignore MIDI timecode for after a glitch has been detected.

- Read more about [MIDI Triggers](../running-the-show/midi-dmx-or-audio-triggering.md)


## Wheels

 Option                     | Action  
---|------
Wheel Sensitivity     | Set the sensitivity of the encoder wheels using **Wheel A**. Default ***50%***.
Pan & Tilt Threshold  | ***On:*** Enable Pan/Tilt threshold options below.<br/>*Off:* Disable Pan/Tilt threshold options below.
Pan Threshold         | Sets the sensitivity of the Pan control if above option enabled. Larger numbers make Pan work slower. Default ***5s***.
Tilt Threshold        | Sets the sensitivity of the Tilt control if above option enabled. Larger numbers make Tilt work slower. Default ***4s***.
Auto Connect          | *Off:* Chases and Cue Lists will not auto-connect to the wheels when the playback is fired.<br/>*Chases:* Chases will auto-connect.<br/>*Cue Lists:* Cue Lists will auto-connect.<br/>***Chases and Lists:*** Chases and Cue Lists will auto-connect.
Auto View on Connect  | ***Off:*** Chases and Cue Lists will not open their Playback View window view when fired.<br/>*Chases:* Chases will open their Playback View.<br/>*Cue Lists:* Cue Lists will open their Playback View.<br/>*Chases and Lists:* Chases and Cue Lists will both open their Playback View window when fired.
Press and Hold Fan    | *On:* Changes the Fan function so that it only works while the Fan button is held down. This avoids the common user error of leaving Fan turned on accidentally.<br/>***Off:*** The Fan button toggles on and off as normal.