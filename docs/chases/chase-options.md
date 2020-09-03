---
id: chase-options
title: Chase Options
sidebar_label: Chase Options
---

To set options for a chase, press \<Options\> or \[Options\] on the root menu,
then press the **Select** button of the playback to be edited. Options will
be shown on the softkeys. You can also set options from the Chase View window, press
\<View/Open\> then the **Select** button of the playback, then click the
Options tab.

![Playback Options (playback tab) for a chase](/docs/images/Playback-Options-Chase-Playback-Tab.png)

Most of the options are the same as for Cues (see playback [Options](../cues/playback-options.md)), only the additional Chase options are described here.

---

## Handle Tab

All options are the same as for a cue.
See [Handle](../cues/playback-options.md#handle-tab).

--- 

## Playback Tab

[Blind](../cues/playback-options.md#blind), [Cross Fade HTP](../cues/playback-options.md#cross-fade-htp), [Priority](../cues/playback-options.md#priority) are described in the Cues chapter. 

### Cue Links Disabled
Unlinks all the steps in the chase so you need to press the Go button to move to the next step.

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

### Loop Action
Sets what happens at the end of the chase:

\[Stop on Final Cue\] - Chase stops at the end\
\[Loop\] - The chase will loop back to the beginning

### Play Order
Sets the direction of the chase.

---

## Times tab

Flash Fade In, Flash Fade Out and Speed are described in the Cues chapter.
Chase speed can also be set using the left hand wheel if the wheels are connected to the chase.
See [Setting Speed and Crossfade for a Chase](chase-playback.md#setting-speed-and-crossfade-for-a-chase) for more details.


### Speed multiplier
You can set a speed factor here to speed up or slow down the chase independently of the speed setting.

### Xfade
Sets chase crossfade between steps. If the wheels are connected to the chase,
the right hand wheel changes the crossfade and the value set will be shown here.

---

## Effects tab

All options here are the same as for cues - see [Effects](../cues/playback-options.md#effects-tab).

--- 

## Release Tab

Release Mask and Release Time are described in 
[Release](../cues/playback-options.md#release-tab).

### Cue Release
If turned on, after each step in the chase fixtures which are
not programmed in the next step will be released. 

This allows you to create an overlay chase with gaps in it
where the fixtures will return to their previous state.

For example you could create a chase where every alternate cue sets the fixtures to
white, with the in between cues being blank. If this option is on, the
fixtures will bump to white then return to the colour set from a
previous look.

