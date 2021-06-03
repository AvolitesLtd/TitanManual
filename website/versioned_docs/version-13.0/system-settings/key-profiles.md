---
id: key-profiles
title: Key Profiles
sidebar_label: Key Profiles
original_id: key-profiles
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

The console allows you to reconfigure how the front panel buttons work
to suit your method of working. You can save your settings as a Key
Profile. Different profiles can be selected for different users or to
enhance the operation of the console for a particular use.

There are standard Key Profiles for Run mode, Takeover Run mode, Program
mode, Theatre mode and Nightclub mode. These standard profiles cannot be
edited, so you always know how they will behave. You can create your own
editable profiles using one of the standard profiles as a starting
point.

The current settings of the playback buttons are shown on the screen
related to each playback fader.

![Key Profiles on playback](/docs/images/Playback-Faders-with-key-profiles-applied.png)

## Creating and editing key profiles

<Video videoId="CxHQV4sP_sA" title="Key Profiles" />

To create or edit a profile, switch to System mode then select <Keys.SoftKey>Key
Profiles</Keys.SoftKey>. You can then use the Manage Profiles menu to View, Edit,
Add, Delete or Rename profiles.

You can also create or edit key profiles in the <Keys.SoftKey>Handle</Keys.SoftKey> tab of
Playback Options.

Key Profiles can also be viewed from the Show Library window as
described in [Show Library](../titan-basics/show-library.md#key-profiles-view) section.

When Adding a new profile, you can select an existing profile to copy
settings from.

You can also edit Key Profiles from Program mode by holding <Keys.HardKey>Avo</Keys.HardKey>,
then selecting <Keys.SoftKey>Edit Current Key Profile</Keys.SoftKey>. If the current key profile
is one of the non-editable system ones, you are prompted to add a new
profile or select an existing editable profile.

The current actions for the Black, Blue, Grey and Touch buttons are
shown on the left side of the screen. Once you select a key type from
the menu, the screen shows actions available for that type of button.
Only the Sapphire Touch has black buttons.

![Editing a Key Profile](/docs/images/Editing-a-Key-Profile.png)

## Actions for Buttons

The groups of keys you can set are as follows. The blue or grey
fixture/palette buttons only exist on the Pearl Expert, on other
consoles these settings will not do anything.

### Fixtures
The blue, grey or touch key can be allocated to <strong>Disabled</strong>,
&nbsp;<strong>Select</strong>, <strong>Flash</strong>, <strong>Swop</strong>, <strong>Latch</strong>.

> The "Latch" function is equivalent to
putting the fader to full for that fixture and touching again returns
the fader to 0.

### Groups
The blue, grey or touch key can be allocated to <strong>Disabled</strong>,
&nbsp;<strong>Select Group</strong>, <strong>Flash Fixtures</strong>, <strong>Timed Flash</strong>, <strong>Flash Master</strong>, **Timed Flash
Master<strong>, </strong>Swop Fixtures**.

You can select if the group function takes
precedence over the flash function (if a handle has both group and flash
functions) or vice versa.

### Palettes

> Only effective on Pearl Expert.

The palette (grey) key can
be allocated to <strong>Disabled</strong> or <strong>Select Palette</strong>. You can select if the
palette function takes precedence over the flash function (if a handle
has both palette and flash functions) or vice versa.

### Cues

The blue or grey key can be allocated to <strong>Disabled</strong>, <strong>Flash</strong>,
&nbsp;<strong>Swop</strong>, <strong>Latch</strong>, <strong>Preload</strong>, <strong>Go</strong>.

### Chases

The blue or grey key can be allocated to <strong>Disabled</strong>, <strong>Flash</strong>,
&nbsp;<strong>Swop</strong>, <strong>Latch</strong>, <strong>Go</strong>, <strong>Stop</strong>, <strong>Preload</strong>, <strong>Connect</strong>, <strong>Tap Tempo</strong>.

### Cue Lists

These affect [playback of cue lists](../cue-lists/cue-list-playback.md) and can be assigned to the handle's buttons:

Setting | Action
---|---
Disabled | The button will do nothing
Flash | All dimmer levels in the cue will flash to programmed level, when released the levels will return to previous level
Flash and Go | *As Flash*, but when button released the cue list will advance to the next cue
Timed Flash | *As Flash*, but fade in and out times will follow the cue times set
Timed Flash and Go | *As Flash and Go*, but cue list will advance on release
Swop | *As Flash*, but all other fixtures will black out
Latch | *As Flash*, but dimmers will remain active until button pressed again
Go | Cue list will advance to next cue using times
Stop | Stops all fades in the cue list at their current point
Preload | LTP channels of non-illuminated fixtures will move to positions in next cue
Connect | Connects this cue list to controls *(same as pressing <Keys.HardKey>Connect</Keys.HardKey> then select button of cue list)*
Tap Tempo | Set speed parameter by tapping the button
Next Cue - | Press repeatedly to select the next cue to be output, going backwards
Next Cue + | Press repeatedly to select next cue to output, going forwards
Review Live Cue | Replays the current cue using fade times
Cut Next Cue to Live | Output the cue as selected using above
Snap Back | Cue list will snap back to previous cue without times
Go Back | Cue list will go back to previous cue using fade times
Release | Release the playback using programmed release time
Select If | Press to select all fixtures used in the current cue

### Macros
Can be set to <strong>Select</strong> or <strong>Prefer Macro</strong> (the Macro function
will take precedence over other functions stored on the button).

### Options

Allows you to disable the quick record function (double tap
on empty handles).

### Masters

This is divided into Standard Masters and Scene Master.

For Standard Masters the options are <strong>Disabled</strong>, <strong>Selection</strong>, <strong>Flash</strong>, <strong>Latch</strong>, **Tap
Tempo<strong>, </strong>Nudge Up<strong>, </strong>Nudge Down<strong>, </strong>Release<strong>, </strong>Reset Multiplier<strong>, </strong>Multiplier x2**,
&nbsp;<strong>Freeze</strong>, <strong>Connect</strong>.

These last options are for rate and BPM masters, see
the [BPM Master Options](../running-the-show/playback-controls.md#bpm-master-options). Freeze can be useful to temporarily pause
shapes or chases, or does a blackout if used with an intensity master.

For Scene Master the options are <strong>Disabled</strong>, <strong>Exit scene mode</strong>, **Enter scene
mode<strong>, </strong>Commit changes<strong>, </strong>Commit changes and exit scene mode<strong>, </strong>Enter or Exit
scene mode<strong>, </strong>Enter or commit scene mode**.

## Selecting a Key Profile

To quickly select a Key Profile, hold the <Keys.HardKey>Avo</Keys.HardKey> Shift button and press
<Keys.SoftKey>Select Key Profile</Keys.SoftKey>.

## Individual Key Profiles for playbacks

Each playback can have an individual Key Profile allocated to it. This
allows you to customise the panel button functions differently for each
playback. The Key Profile for the playback is selected using the
<Keys.SoftKey>Handles</Keys.SoftKey> option on Playback Options. If the playback Key Profile is
set to <Keys.SoftKey>Global</Keys.SoftKey>, the default global profile for Cue / Chase / Cue List
is used.
