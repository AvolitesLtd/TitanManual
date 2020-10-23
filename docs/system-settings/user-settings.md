---
id: user-settings 
title: User Settings
sidebar_label: User Settings
---

The User Settings menu may be accessed from the \[User Settings\] softkey
on the **System** menu. You can also get it directly from any other
menu by holding down the \<Avo\> button and pressing
\[User Settings\].

![User Settings Window](/docs/images/User-Settings-Window.png)

A window will open showing the user settings, or you can also set the
same options using the softkey options. User Settings are individual for
each User and you can change the User from this screen.


> Click on the *i* button for a help window on each setting.\
> \
> ![i button](/docs/images/i-button.png)

Options are divided into categories on the softkeys or down the left
hand side.

## General

### Chase Snap
If enabled the \<Next Step\> and \<Prev Step\> buttons will snap
to the new state. If disabled, programmed fades will be shown. This is
the same function as the \<Snap\> button which features on some consoles.

### Cue List Snap
If enabled the \<Next Step\> and \<Prev Step\ buttons will
snap to the new state. If disabled, programmed fades will be shown.

### Clear Record Mask
Sets whether the record mask is cleared back to
All Enabled when you enter the Record function, or whether it remains as
you previously set it.

### Copy Cues
Sets whether tracked values will copy when you copy a cue
from a tracked cue list.

### Run Startup Playbacks
Allows you to globally disable startup
playbacks from running. To enable Startup Playbacks you need to turn
this on and set some playbacks as Startup using playback Options.

### System Render Rate (Hz)
Sets the output rate of DMX frames from
1-44 frames per second *(default 40)*. You can reduce this if processing
of a complex show is slowing down the console.

---

## Display

### External Display
Sets whether the external display is enabled or disabled.

### External Screen Workspace Shortcuts
When turned on, each screen has its own Workspace Shortcut buttons (shown
down the side of the screen on external screens). This allows you to
recall different window layouts separately on each screen rather than changing
all screens.

### Lock Screen Background
Sets a picture to be displayed when the
console is locked.

-  These options can also be set from **System** menu, in the Display Setup option.

---

## Handles

### Grand Master Fader

Sets whether the Grand Master fader is enabled
or disabled (some consoles do not have this fader). This can be handy if
it gets broken or if you wish to disable it to avoid confusing
inexperienced operators. The default setting is *Disabled*.

### Delete Default
Sets whether items are deleted when you press Delete
and double tap them, or whether they are released from the handle and
become unassigned. Unassigned items can be reused from the Show Library.

### Prompt Replace

Sets the console action when you try to save to a
handle or playback which is already used.

\[Prompt for Merge or Replace\] - the console will always prompt\
\[Always Merge\] - the console will never prompt\
\[Palettes Always Merge\] - the console will prompt unless you are
saving a palette

### Display Halo

Allows you to turn off all coloured halos on buttons.

### Fixture Halos

Sets how coloured halos are displayed on fixture
buttons.

\[Custom\] - Only user defined halo colours are shown.\
\[Auto\] - Fixture buttons are coloured using automatic fixture colours

### Handle Buttons
Sets the default size of the touch buttons to
\[Small\], \[Normal\], \[Large\] or \[Super Size\]. 

This can be
overridden separately in any window.

### Text Size

Sets the default size of the text used in touch buttons.
Can be overridden in any window.

### Playback Paging

\[Playback paging\] sets how the playback faders
behave when you change page with a playback active.\
\[Normal\] - sets the normal mode for the console type.\
\[Always Hold\] - sets the standard behaviour for non-motorised faders
where the fader keeps control of the active playback when the page is
changed and has to be lowered to zero before a playback on the new page
can be fired.\
\[Never Hold\] - the standard behaviour for motorised faders where the
fader always relates to the current page. To regain control of a
playback from another page you have to go back to that page and level
match the fader (which is done automatically by motorised fader). 

When a
playback is active from another page the display area goes purple and
the page number is shown at the top in light blue.

### Current Handle World
Sets the handle world - read more about [Handle Worlds](../titan-basics/multi-user-operation.md#handle-worlds).

---

## Key Profiles

Allows you to select and edit key profiles using the softkeys. See [Key Profiles](key-profiles.md) for more info.

---

## Patching

### Warn Before Parking Fixtures

Sets the console action when you patch
a fixture which overwrites the DMX channels of another fixture. This
causes the overwritten fixture to be "parked".

\[Always\] - console will warn you.\
\[Never\] - console will park the fixture without warning you.

### DMX Address
Sets whether the DMX address of fixtures is shown in
the fixture touch buttons.

### Auto Groups
Sets whether the console will automatically create new
groups for fixtures when you patch.

### Preset Palettes
Sets whether preset palettes should be created when
fixtures are patched. You can also turn this on when patching using the
\[Create Preset Palettes\] softkey.\
\[Do Not Create\] -- no palettes will be created.\
\[Create On Workspaces\] -- palettes will be created in workspace
windows.\
\[Create On Presets\] -- palettes will be created on preset buttons.

---

## Times

### Tempo Units
Sets the units for displaying tempo. The options are
\[Beats per Minute\] or \[Seconds\].

### Connected View Sets
Sets the console action when you change the
speed of a connected chase.

\[Connected View Sets Temporary Chase
Speed\] means that the console will not save the modified speed, and the
next time the chase is fired it will go back to its programmed speed.\
\[Connected View Sets Chase Speed\] means that the console will modify
the saved speed of the chase.

### Preload Time
Sets a fade time for the Preload function, normally 2
seconds. This value would normally be set for quiet fixture movement.

### Times Format
Selects between *HH:MM:SS* format and Seconds format. In
*HH:MM:SS* format the console will convert any number you enter into hours
minutes and seconds.

### Compensate for Rate Grand Master
If on (default), when a tempo is
tapped on a BPM master it will not be affected by the Rate Grand Master
being set to less than 100%.

---

## Formatting

### Channel Levels
Sets how you enter channel levels when using numeric
entry of levels.

\[Channel Levels Set In Tens\] - enter one digit for the channel level,
*i.e. 5 = 50%*.\
\[Channel Levels Set in Units\] - enter two digits, *i.e. 50 = 50%*.

### Number Style
Sets how channel values are displayed in Cue View and
Palette View.

\[Precise\] - will include all decimal places.\
\[Rounded\] - round to nearest whole number.\
\[Dynamic\] - show decimals where appropriate, remove trailing zeros.

---

## Palettes

### Quick Palettes
Enables or disables the Quick Palette function - read more about [Using Palettes](../palettes/using-palettes.md).

### Minimum Palette Mode
Sets whether global or shared palettes can be
created when recording palettes. You can use this to force the console
to store all palettes as Shared.

### Add New Palette Channels
Sets whether new channels added into
palettes will be added to playbacks using those palettes.

### Auto Legend
Sets whether new items will automatically have legends
generated for them (colour scribbles for colours or descriptive legends
for other functions).

### Highlight Active Palettes
Sets whether active palettes are shown as
highlighted in the workspace windows.

### Filter Relevant Palettes
Sets whether palettes which do not apply
to the selected fixtures will be greyed out.

### Master Palette Time
Sets the default fade time to be used when
recalling palettes live. See [Master Time for Palettes](../palettes/timing-with-palettes.md#master-time-for-palettes) for more information.

### Master Palette Overlap
Sets the default overlap to be used when
fading palettes.

### Record Nested Palettes
If enabled, palettes containing other source
palettes will be updated when you change the source palette.

### Preset Palettes
This is the same as the option in the Patching
section, [see above](#preset-palettes).

---

## Release

These settings can also be changed from the Release menu.

### Release To Home
If *enabled*, when the last playback is released
fixtures will return to home values. If *disabled*, LTP channels will
remain set.

### Master Release Time
Sets the default release time.

### Release Priority
The playback priority used with the Release menu
or when running Release macros.

---

## Clear

These settings can also be changed from the Clear menu.

### Auto Reset Mask
When *enabled*, the Clear Mask will reset to include
all attributes after every clear.

### Zero Preset Fader Levels
When *enabled*, intensity levels set on
fixtures patched to fader handles will be zeroed when Clear is pressed.
If *disabled* the levels will remain set but will be removed from the
programmer.

### Release to Playback Values
If (enabled), LTP channels will release to
the values set in the last playback when Clear is pressed. If *disabled*,
LTP channels will not change when Clear is pressed.

### Clear Cue Times
If *enabled*, resets cue times in the programmer to
defaults when Clear is pressed. If *disabled*, cue times set in the
programmer will remain.

### Clear Rate Settings
If *enabled*, resets the rate settings in the
programmer to default when Clear is pressed. If *disabled*, rate settings
set in the programmer will remain.

### Clear Direction
If *enabled*, resets direction in the programmer to
default when Clear is pressed. If *disabled*, direction set in the
programmer will remain.

### Clear Selected Fixtures
If *enabled*, only fixtures which are currently selected will be cleared from the programmer when Clear is pressed. If no fixtures are selected then all fixtures are cleared. If *disabled*,  all fixtures are cleared from the programmer whether any are selected or not.

---

## Effects


### Swop Shapes
Sets how shapes react to Swop mode.\
\[All Shapes\] -- All running shapes from other playbacks are stopped\
\[Intensity Shapes\] -- Only intensity shapes from other playbacks stop

### Shape Behaviour
Sets whether Key frame shapes will overlay all
other values or will work in LTP mode where later changes will override
the shape - see [Saving a key frame shape to a cue](../effects/key-frame-shapes.md#saving-a-key-frame-shape-to-a-cue).

---

## LEDs

### Fixture LEDs
Sets how the button LED behaves when a fixture is
patched to a fader handle.\
\[Show Occupation\] -- the LED shows handle empty and selection state\
\[Mimic Intensity\] -- the LED shows fixture intensity level.

> **The options below only function when \[Show Occupation\] is selected**

### LED Empty Level
Sets level for unpatched handle.

### LED Occupied Level
Sets level for occupied but unselected handle.

### LED Programmer Level
Level if fixture is in the programmer.

### LED Selected Level
Level if fixture is selected.

---

## Timecode

### Kill Out of Range Playbacks
Kills the playback if the incoming timecode is outside the timecode values included in the playback.

### MIDI Device ID
Sets the Device ID when using MIDI show control
commands.

### MIDI Glitch Detection
Enables the glitch options below.

### MIDI Glitch Tolerance
Sets the maximum amount of time a MIDI
timecode can jump by without being seen as a glitch.

### MIDI Glitch Timeout
Sets the amount of time the console should
ignore MIDI timecode for after a glitch has been detected.

> Read more about [MIDI Triggers](../running-the-show/midi-dmx-or-audio-triggering.md)

---

## Wheels

### Wheel Sensitivity
The sensitivity of the encoder wheels, and the
pan/tilt threshold settings can be adjusted using this option. Wheel
sensitivity is adjusted using **Wheel A** and the current level is shown on
the display.

### Pan & Tilt Threshold
Enables or disables the pan/tilt threshold
options below.

### Pan Threshold
Sets the sensitivity of the Pan control if above
option enabled. Larger numbers make Pan work slower.

### Tilt Threshold
Sets the sensitivity of the Tilt control if above
option enabled. Larger numbers make Tilt work slower.

### Auto Connect
Sets whether Chases and Cue Lists will auto-connect to
the wheels when the playback is fired. The options are \[Off\],
\[Chases\], \[Lists\] and \[Chases and Lists\].

### Auto View on Connect
Sets whether the view window for the playback
will open automatically when the playback is fired. The options are
\[Off\], \[Chases\], \[Lists\] and \[Chases and Lists\]. If both Auto
Connect and Auto View on Connect are set to \[Chases and Lists\] then
firing a playback will automatically connect the playback and open the
view window for the playback.

### Press and Hold Fan
\[Press and Hold Fan\] changes the Fan function
so that it only works while the Fan button is held. This avoids the
common user error of leaving Fan turned on accidentally.
