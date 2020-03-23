---
id: version-12.0-chase-options
title: Chase Options
sidebar_label: Chase Options
original_id: chase-options
---

To set options for a chase, press \[Playback Options\] on the root menu,
then press the **Select** button of the playback to be edited. Options will
be shown on the softkeys. To view the options window, press
\<View/Open\> then the **Select** button of the playback, then click the
Options tab.

![Playback Options (playback tab) for a chase](/docs/images/image251.png)

Most of the options are the same as for Cues (see [Playback Options](../cues/playback-options.md)), only the additional Chase options are described here.

## Playback Tab

[Blind](../cues/playback-options.md#blind), [Priority](../cues/playback-options.md#priority), 
[Shape Behaviour](../cues/playback-options.md#shape-behaviour) are described in the Cues chapter.

### Loop Action
Sets what happens at the end of the chase:

\[Stop on Final Cue\] - Chase stops at the end\
\[Loop\] - The chase will loop back to the beginning

### Play Order
Sets the direction of the chase.

### Linking
Sets how the cues in the chase are linked. The options
are:

\[Link according to individual steps\] - Each step in the chase will obey its 
individual link settings which are set using the
[Playback View window](editing-a-chase.md#opening-a-chase-for-editing)
or the [\<Unfold\> function](editing-a-chase.md#editing-a-chase-using-unfold).\
\[Always Link Steps\] - The chase will run on its own using the times\
\[Never Link Steps\] - The chase will pause after every delay/fade time
for the user to press \<Go\>

> When a chase is unlinked, raising the fader does not fire the first cue, which can be a problem. To get round this, if the chase is not looped, simply link the first cue to the previous one. If the chase is looped, add a dummy step at the end with 0 sec fade, 0 sec delay and link the first step to this one.

### Speed Multiplier
Allows you to set a speed factor for the chase.\

### Speed
Provides another way of setting chase speed.

### XFade
Provides another way of setting chase crossfade.

### Fixture Overlap
Allows you to set the fixture overlap for the
chase.

> *See [Setting Speed and Crossfade for a Chase](chase-playback.md#setting-speed-and-crossfade-for-a-chase) for more details.*

## Handle Tab

All options in this section are described in [Playback Options](../cues/playback-options.md#handle-tab).

## Effects Tab

All options in this section are described in [Playback Options](../cues/playback-options.md#effects-tab).

## Release Tab

[Release Mask](../cues/playback-options.md#release-mask) and 
[Release Time](../cues/playback-options.md#release-time) are described in 
[Playback Options](../cues/playback-options.md#release-tab).

### Cue Release
Allows you to create an overlay chase with gaps in it
where the fixtures will return to their previous state.

*For example you could create a chase where every alternate cue sets the fixtures to
white, with the in between cues being blank. If this option is on, the
fixtures will bump to white then return to the colour set from a
previous look.*

## Renumber All Cues

This option is only available on the softkeys, not the option screen.
This will renumber all the cues in the chase starting from 1.