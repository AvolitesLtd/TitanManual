---
id: cue-list-options
title: Cue List Options
sidebar_label: Cue List Options
---

Cue list options are set from the playback [Options](../cues/playback-options.md). 
Press \<Options\> (or the \[Options\] softkey on the top level menu) then the **Select** button for the cue list you wish to edit.

You can also set the cue list options from the Cue List View window by pressing \<View/Open\>
then the **Select** button of the cue list, then click the **Options** tab.

The Cue List options are mostly the same as for [Cues](../cues/playback-options.md) and [Chases](../chases/chase-options.md), only
the additional Cue List options are described here.

--- 

## Handle Tab

All options are the same as for a cue, see [Options](../cues/playback-options.md#handle-tab).

--- 

## Playback Tab

Blind, Cross Fade HTP, Priority, Run On Startup are the same as for a cue and described in [Playback](../cues/playback-options.md#playback-tab).

### Cue Links Disabled
Unlinks all the cues in the cue list even if they are programmed as linked, so you need to press the Go button to move to the next cue.

### Loop Action
Sets what will happen at the end of the cue list

Setting | Action
--- | ---
Stop on final cue | Cue list will stop advancing once it reaches the last cue.
Loop | Cue list will go back to first cue after the last.* If Move in Dark is enabled, this will also loop.*  *(default)*

### Move In Dark
Sets the mode for the whole cue list *(see [Move In Dark (MID) Functions](cue-list-playback.md#move-in-dark-mid-functions))*.

Setting | Action
--- | ---
Off | Obeys settings for individual cues *(default option)*
Disabled | No move in dark even if set in cues
Early | Moves as soon as fixture intensity is 0
Late | Moves in the last cue before the fixture is needed

### Shape Tracking
Sets how shapes are tracked between cues.
Setting | Action
--- | ---
Off | Shapes will stop when the next cue starts
On | Shapes will track until stopped or changed in a cue
Local | Follows the tracking option above *(default option)*

### Timecode Source
Allocates which timecode source will be used by this Cue List.

### Tracking
Enables or disables Tracking mode (where unchanged
settings persist from the previous cues). *Enabled by default.*

--- 

## Times Tab

All options are the same as for cues, see [Times](../cues/playback-options.md#times-tab).

--- 

## Fader Tab

### Cue List Fader Mode
Sets how the cue list fader behaves.

Setting | Action
--- | ---
Fader Mode Intensity Kill With Off | The fader masters the overall HTP level and the cue list remains active (connected) even when the fader is lowered to zero.
Fader Mode Intensity Kill At 0 | The fader masters the overall HTP level and the cue list is killed when the fader is lowered to zero.
Manual Crossfader | The fader behaves as a manual crossfade control, and the cue list will automatically step on to the next cue when the fader begins travel from top or bottom.

When the fader is in **Manual Crossfader** mode:
- A running fade can be "captured" onto the fader for manual control by matching the fader position.
- When firing a cue list in manual crossfade the intensity snaps to full when the fader leaves zero.
- [Shapes](../effects/shape-generator.md) and [Pixel Mapper](../effects/pixel-mapper.md) effects will fade in with the manual crossfade, but when the fader returns to 0 they are not removed so may still affect the output.
- [Autoloads](../cue-lists/creating-a-cue-list.md#autoloading-a-playback-within-a-cue-list) in the cue list will use their programmed fade times, regardless of the manual crossfade performed by the fader.
- Partially completed crossfades can be completed by pressing \<Go\>.

### Fire First Cue
Sets whether the first cue automatically fires when
the fader is raised, or if you need to press the \<Go\> button to fire it.

--- 

## Effects Tab

All options are the same as for cues, see [Effects](../cues/playback-options.md#effects-tab).

--- 

## Release Tab

Release Mask and Release Time are described for cues, see [Release](../cues/playback-options.md#release-tab).

### Cue Release
Sets fixtures to release when moving to the next cue, if they are
not programmed in the next cue. This can be useful for creating
some effects.

> The **Cue Options** which could be set here in previous versions are now set using the Playback View window,
press \<View/Open\> then the select button for the playback. You can edit cue settings directly in the grid.

