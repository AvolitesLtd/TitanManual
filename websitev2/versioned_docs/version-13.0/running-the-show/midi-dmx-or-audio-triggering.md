---
id: midi-dmx-or-audio-triggering
title: External triggering
sidebar_label: External triggering
original_id: midi-dmx-or-audio-triggering
---

You can set up the console to allow most features to be triggered by
external events. This is very useful in complex shows or when using in
an automated setup.

> Audio trigger (sound to light) requires special hardware which is not fitted on Sapphire Touch,
Tiger Touch, Titan Mobile, T1 and Pearl Expert. You can plug a T2 into these consoles to provide
audio triggering. The line in socket on other consoles cannot be used for audio trigger.

Connecting External Trigger Sources
---------------------------------

To connect a MIDI source, connect it to the MIDI in connector on the
console. USB-MIDI devices supporting the DirectX MIDI driver may also be
used on all consoles except T1. For the T2 this would allow you to
connect a MIDI fader controller to give you real playback faders.

DMX inputs are connected to one of the DMX output connectors using a DMX
male to male gender changer cable. (This is a simple plug to plug cable
with all pins wired straight through, i.e. 1-1, 2-2 and 3-3). Titan
Mobile may require an update of the USB Expert software to enable this
function, this can be downloaded from the Avolites website.

Audio input is connected to the dedicated audio in jack (not the line in
jack on the motherboard) -- see information box above for consoles which provide this.

The Arena console has a switch trigger input on a jack socket.

You can link a networked PioneerDJ system to Titan to automate BPM masters; this is described in the next section. This replaces the old “Pro DJ Tap” function.

Setting up External Triggering
----------------------------

Enter System mode and select \[Triggers\]. The Triggers window will
open.

![Triggers Window](/docs/images/Triggers-Window.png)

The left hand side of the window has a list of trigger sets. A default
sets is provided for MIDI Show Control which includes standard show control 
messages (see next section for details).

Each set of triggers can be enabled or disabled using the "power" button
at the left hand end of the mapping name.

1. Add a new mapping using the + button at the bottom of the left hand
column, and enter a name for it.

2. Add a trigger to the mapping using the + button in the right hand
column or softkey \[Add trigger\].

3. Select \[Trigger Type\] as \[Hardware\] or \[Item\].\
\[Hardware\] triggers a physical or touch button, or fader move, and
will use the key profile set for the button/fader.\
\[Item\] triggers a programmed item, such as a cue or chase.

4. Press the button or move the fader to be triggered. The screen will
update to show you what has been triggered. For Item triggers you can
select different actions using the \[Action\] softkey.

5. Press \[OK\]. You have now set up the console action which is to be
triggered.

6. Now you need to set up the external stimulus which will cause the
trigger. Select \[Trigger Type\] as DMX, MIDI or Audio. For DMX, press
\[DMX Port\] to select which DMX port you are using for DMX input. You
will need to switch the DMX port to RX mode using the menu option
provided.

7. Generate the stimulus from your device (for example play the MIDI
note, or turn on the DMX channel). If the \[Learn\] option is set to On,
the console will automatically detect the stimulus. Or you can enter the
details using the softkey options.

8. For DMX triggers you can select the address for triggering. For MIDI
triggers you can select MIDI channel, MIDI Command, Value, and Level
(velocity) ranges. For audio triggers the \[Band\] option is used to
select which frequency band will cause the trigger.
See the [Audio Control](./midi-dmx-or-audio-triggering.md#audio-control-sound-to-light)
section for audio triggers.

9. Press \[Add\] to add the trigger to the list.

10. The window will show the trigger stimulus and the action to be
carried out.

You can continue to add other triggers to the mapping.

![Triggers Window with MIDI triggers](/docs/images/Triggers-Window-with-MIDI-triggers.png)

To delete a trigger from the mapping, select it in the list and press
the rubbish bin button at the bottom.

To delete a complete mapping, select it and press the rubbish bin button
at the bottom of the left hand column.

### Setting up a MIDI fader controller with T2

This is how to set up a MIDI fader controller to act as playback faders
on T2. Ensure your MIDI device is connected and recognised by Windows
(you can use a utility such as Midi-OX to test it).

1. Enter System mode and select \[Triggers\].

2. Add a new mapping using the + button at the bottom of the left hand
column, and call it "T2 playbacks".

3. Add a trigger to the mapping using the + button in the right hand
column or softkey \[Add trigger\] -- by default this is set to the
correct Trigger Type of \[Hardware\].

4. Move playback fader 1 on Titan Go.

5. Click \[OK\]

6. Move the first fader on your MIDI controller. Titan Go should
recognise the MIDI commands and display the trigger in the prompt area.

7. Click \[Add\]. The trigger for playback 1 is added to the list on
the right.

8. Repeat from \[3\] to add the other 9 playback faders.

MIDI Show Control
-----------------

The following MIDI Show Control messages are supported:

  Command   | Action
  --------- | ---------------------------------------
  GO        | Fire the specified playback or cue
  STOP      | Pause the specified playback or cue
  RESUME    | Un-pause the specified playback or cue
  LOAD      | Set the playback level to full
  ALL OFF   | Release all playbacks
  RESET     | Same as ALL OFF
  GO OFF    | Same as resume

Playbacks/Cues are identified by their User Number. To set the user
number, press \[Set Legend\] then the select button of the cue, then
\[User Number\].

MIDI show control devices are identified by a device ID. To set Titan's
device ID go to System mode and select \[User Settings\], then go to the
\[Timecode\] tab. The default setting is 0.

Audio Control (Sound to Light)
------------------------------

On supported consoles the audio input is divided into frequency bands
which can be used to provide the trigger. The \[Band\] option selects
which of the bands is being used.

Audio triggers are adjusted in the Audio Triggers workspace.

![Audio Window](/docs/images/Audio-Window.png)

If the console does not have suitable hardware a warning message is
displayed. Currently only the Quartz and Arena consoles have the audio
hardware.

-   The Enable switch below the gain slider disables all audio triggers

-   The left hand gain slider sets the overall input gain, which can be
    used to boost weak signals

-   Auto gain will automatically adjust the gain, this disables the
    slider from manual changes

-   The Enable switches below each band disable triggers on that
    particular band

-   Trigger level sets the threshold for triggering on each band. The
    band shows red when triggered.

-   The Auto switches on the bands automatically adjust the trigger
    level on each band when no triggers are occurring.

You can quickly allocate a playback to a trigger by clicking the top
Band button above the trigger, then select the playback to be triggered.

On the Arena console, the Audio LED (just above the power switch) will
flash when audio is received. Note that the headphone socket on the
Arena is linked to the motherboard audio output and can't be used for
monitoring the audio trigger input.
