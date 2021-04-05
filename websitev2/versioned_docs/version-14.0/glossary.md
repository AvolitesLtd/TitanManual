---
id: glossary
title: Glossary of Avolites terms
sidebar_label: Glossary of Avolites terms
original_id: glossary
---

import Keys from '@site/src/components/key.ts';

This section explains what common lighting terminology means in Avolites Titan. In cases where other lighting equipment manufacturers use the words to mean something else, this is listed in the text.

word 		| meaning
------------|----
ADDRESS		| The first DMX channel/slot of the set of channels occupied by an individual Fixture. This is set on the fixture somehow (by a menu or switches or remotely using RDM).
ALIGN		| A means of copying Attribute characteristics from the first Fixture selected to other selected fixtures, resulting in those attributes of the fixtures being aligned to each other.
ART-NET		| An Ethernet based system allowing multiple Universes of DMX to be sent over a network.
ATTRIBUTE	| One function of a Fixture, such as “Colour Wheel” or “Focus”.
ATTRIBUTE GROUPS	| see IPCGBES.
AUTOLOAD	| A Playback which is automatically fired by a Cue in a Cue List. Enables a chase to be fired by a cue list.
BACKUPS		| Copies of a show stored to a storage device for safety.
BPM			| Beats Per Minute. 60 BPM is equivalent to one step per second.
BLIND		| When set to Blind mode, changes made on the console do not affect the DMX output. Useful for making programming changes during a show.
BUSKING		| Operating the console live (usually for live music) when you do not have a complete show programmed, but instead creating effects as you go along using palettes etc.
CELL		| Part of a Fixture which can be controlled separately within the larger fixture – for example an LED batten may have 12 cells each of which can be controlled separately, or all together. Also called Sub-fixture.
CHANNEL		| Button allowing syntax / numeric style entry and operation of the console using the User Number of fixtures/dimmers.
CHASE		| A sequence of one or more pre recorded steps which automatically run one after the other.
COLOUR MIX / CMY	| A system of three filters (Cyan, Magenta, Yellow) that can each crossfade from white to a colour, or one colour to another. It is a feature of most Fixtures, which enables any colour to be created.
CONNECTED CHASE	| A Chase which is linked to the Wheels by pressing the <Keys.HardKey>Connect</Keys.HardKey> button.
CUE			| A single stage look programmed onto a Playback button or fader, or as part of a Cue List. Also known as MEMORY, STATE, SCENE, LOOK.
CUE LIST	| A sequence of cues programmed onto a Playback button or fader. Each cue can have its own delay and fade times and can also start other cues or playbacks. Also known as a CUE STACK or STACK.
CUE MODE	| A playback format programmed into a Cue which determines how the cue fades in and out. There are Cue Modes 0 - 3.
CURVE		| A curve sets how fades and other changes on the console progress over time. A variety of different curves may be selected.
DEVICE		| See FIXTURE.
DIMMER		| Device used to control the intensity of an individual light.
DMX	DMX512(1990) | a specification for communication between control desks and Fixtures, Originally for Dimmers it has been adopted as a control protocol for most Intelligent Fixtures. It can carry 512 different slots or channels of data per Universe, and Titan can output up to 64 universes (using additional network processors).
EXCHANGE	| A way to swap a Fixture in a show to a different type of fixture while retaining most or all of the programming.
FADE		| A continuous transition from one level to another.
FAN			| A way of automatically spreading out Attributes around a central point to speed up programming.
FIXTURE		| Any lighting instrument that is patched using a Personality. Generally refers to a moving light or colour changing light, not an individual Dimmer channel. Also called Intelligent Fixture, Device, Instrument, Moving Light.
FIXTURE LAYOUT	| A way of telling the console where Fixtures are physically located in 2D space, for use with Shapes or the Pixel Mapper.
FLASH		| Push button which adds a playback into the existing output of the console. Historically called the ADD button. See also SWOP.
FLIP		| A function for use with Moving Head Fixtures. They have two possible Pan and Tilt settings for each position on stage by reversing the yoke, and FLIP will alternate between them.
FOCUS		| The library of stored positions, colours etc which are called Focuses on some consoles, are called Palettes on Titan. See PALETTE. This term may also be used in connection with moving fixtures to focus (set the sharpness) of a gobo projection.
FX			| Refers to effects created with the Shape Generator.
GENERIC		| Refers to a lighting instrument which only has a dimmer/intensity control. See also FIXTURE.
GROUP		| A Group is a pre-programmed collection of Fixtures that can be selected with a single button press. Playback groups can also be created where only one playback in the group can be active at any time.
HALO		| A special colour shown around the rim of a touch button, used to quickly identify different types of button.
HANDLE		| A control on the console where you can store things – may just be a programmable button, or may have a fader with one or more associated buttons.
HTP			| Highest Takes Precedence, a mechanism for determining the output level of an attribute (nearly always Intensity) being controlled by more than one Playback. The playback outputting the highest value at any given time will determine the level of the attribute. Also see LTP.
HUD			| Heads-up-display, an information window shown on the screen.
INCLUDE		| A means of transferring the contents of a Cue or Chase step back into the Programmer for further editing or programming.
IPCGBESFX	| The Attribute groups, used by the console to conveniently group together similar attributes – stands for Intensity, Position, Colour, Gobo, Beam, Effect, Special, FX (shapes). For example the P(osition) group includes Pan and Tilt attributes.
KEY FRAME SHAPE	| A self-programmed Shape where you program a set of steps which can then be spread in different ways over a set of fixtures.
KEY PROFILE	| User setting which can be used to change the function of each type of button on the console.
LED			| Light Emitting Diode, the source of light in many fixtures. May also refers to the small lights within the buttons on the console.
LEGEND		| The text or image used to name a handle so you know what you stored in it.
LINK		| Connection between cues in a Cue List or Chase enabling them to run on from one to another automatically.
LOCATE		| Button which places selected fixtures into a default “ready” state – usually a central position with full intensity, no colour, no gobo, ready for programming.
LOCK		| Handles can be Locked so that when you change to a different page, those handles do not change. The lock can be Transparent meaning that it is only locked if the new page doesn’t have any programming on that handle. May also refer to the system for locking the console while left unattended.
LTP			| Latest Takes Precedence, a mechanism for passing control of an attribute from one Playback to another on the basis that the latest playback changes take over control. Usually used for all attribute types except Intensity. Also see HTP.
MACRO		| Has two meanings in Titan. May refer to a stored sequence of button presses which allow you to recreate a complex sequence of operations from a single button. Or may refer to functions programmed into a Fixture by the manufacturer for example to lamp On/Off a fixture or reset the motors – using  DMX command sequences defined within the Personality.
MASTER		| Fader or knob giving overall control of a number of different playbacks or attributes. Different types of Masters can be configured on the console.
MEMORY		| The name for a Cue or playback on other consoles.
MIDI		| A control system used for sending commands between equipment. Stands for Musical Instrument Digital Interface and originally for sending musical notes between keyboards/synths, it is now used for controlling  and linking many types of equipment.
MENU		| List of available functions on the Softkeys.
MENU LATCH	| Holds the current menu active – normally a menu would close when the action is completed.
ML MENU		| Provides additional functions for control of moving lights such as lamp on/off and other control functions.
MOVE IN DARK (MID)	| Function of Cue List to pre-position a fixture while it is turned off so that it is correctly positioned for the next cue. Called “Mark” on other consoles.
ON and OFF	| Any Attribute stored in a Playback can be On or Off. An attribute which is ON is changed by the playback when it is fired. An attribute which is OFF is stored in the playback for future re-use but has no effect when the playback is fired.
OVERLAP		| Sets how the console allocates new values to a group of Fixtures. 100% means that all fixtures are updated simultaneously. 0% means that the fixtures will be updated one after the other.
PAGE		| To provide more Handles for programming, you can change to a different Page. You can Lock handles so that they do not change when you change the page.
PALETTE		| A term used to describe a referenced pre-defined state for an Attribute that can be recalled whenever required during programming. Each Fixture may be set to a different value in the Palette, the entries can be named, and recalled with a single button press. Called Focus by some other console manufacturers.
PARK		| A Parked fixture is one which is patched to a handle but has no DMX Address set. This happens to a fixture when its DMX address is taken by another fixture during a later patching session; the fixture retains programming information and the Repatch function can be used to give it a new DMX address. Not the same as the “Park channel” function used to set a channel to a fixed value as found on other consoles.
PATCH		| Set up of a show on the console, telling the console what fixtures are being used, what mode they are in, and what DMX address they are set to.
PERSONALITY | A description of what Attributes a particular Fixture has and how the console will patch and use these. It also determines which Wheel will control which attribute.
PIXEL MAPPER	| Allows you to tell the console where fixtures are located in 2D space, and then to display patterns or media across those fixtures.
PLAYBACK	| A programmed Cue, Chase or Cue List, stored on a Handle (button, touch button or fader).
PRELOAD		| A playback button which sets the LTP channels in a cue but not the HTP channels. Used to pre-position fixtures before firing a cue. Also a cue list function which allows one cue to preload the LTP channels in another cue.
PRESET FOCUS	| The old name for Palettes on previous Avolites consoles and other consoles. See PALETTE.
PROGRAMMER	| The part of the console which contains Attribute information which has been changed by the user, prior to recording.
QUICK PALETTE	| If you press a palette button with no fixtures selected, the console will apply the palette to all fixtures it has programming for. This is called a Quick Palette.
RANGE		| If an Attribute on a fixture is split into certain zones for different effects, for example if the fixture has rotating gobos and e.g. from DMX 128-191 you fade through clockwise rotation then the attribute is said to have Ranges.
RDM			| Remote Device Management, a way of configuring fixtures remotely from the console. Not all fixtures support this.
RELEASE		| How a Playback leaves the LTP channels it was controlling when it is killed. Normally the LTP channels just remain in their last state, but you can use the Release settings to get them to revert to a previous state.
RGB / RGBW	| A system of colour mixing using LED emitters of different colours. Often more emitter colours are provided in the fixture to allow better colour rendering or mixing of pale tints. Possible colours include Red, Green, Blue, White, Amber, Lime, Cyan, UV - so you may see RGBAL fixtures or RGBAWUV.
sACN		| An Ethernet-based system allowing multiple universes of DMX to be sent over a network.
SELECT BUTTON	| Blue button used to select a Handle when programming.
SELECTED	| A Fixture that is under manual control.
SEQUENCE	| Another name for a Chase on other consoles.
SHAPE 		| A preprogrammed effect available which is applied to an Attribute. It can then be customised and stored in a cue.
SHARED PALETTE	| A Palette in which information is only stored for one Fixture, but is available to all fixtures of that type.
SOFTKEY		| Menu buttons marked A-J down the side of the screen, which have different functions as shown on the adjacent part of the screen depending on the currently active menu.
SPREAD		| How a shape or effect is output across a group of fixtures – if 1, all fixtures operate in synchronisation. In conjunction with Phase.
STACK		| Another name for a Cue List.
SUBFIXTURE	| See Cell.
SWOP		| Type of flash button which turns on the output being flashed and turns off all other output while the button is pressed. Sometimes called “Solo”. Also used for selecting fixtures or playbacks when programming. See also FLASH.
TIMECODE	| An electronic timer signal which allows cue list playback to be synchronised to a soundtrack or other events.
TIMES		| Many elements of programming can be timed to create effects, these together are referred to as Times.
TNP			| Titan Network Processor, a rack mount unit to handle the processing of additional DMX Universes or to operate automatic shows.
TRACKING	| Describes the operation of Cue Lists where attribute states follow through from previous cues unless changed by the user.
UNFOLD		| A function that allows Chase steps to be laid out onto the playback faders for easy editing.
UNIVERSE	| A full set of 512 DMX control channels/slots. Titan consoles can create up to 64 universes, 16 on the console and the rest remotely using network processing.
UPS			| Uninterruptible Power Supply, fitted internally in some consoles, to keep the console running in case of power failure.
USER NUMBER	| Each fixture / dimmer has a User Number which allows you to select them using the numeric keypad and <Keys.HardKey>Through</Keys.HardKey> button, as commonly used on other types of console.
USER SETTINGS	| User definable desk settings. To change them, hold down the Avo button and select [User Settings].
VIRTUAL DIMMER	| Used with LED colour mixing fixtures, these add an intensity function to the fixture which masters the RGB controls on the fixture when it does not actually have an intensity control channel.
VISUALISER	| Software providing a lifelike 3D view of the stage and lighting, allowing virtual programming.
WING		| An additional panel of faders or buttons which can be connected to the console to expand the number of Handles available.
WIPEALL		| A process which clears the current show, providing a clean start. Does not affect previously saved shows.
WHEEL		| Wheels are used on the console to set fixture Attributes and to control chases and cue lists.
YOKE		| The U-shaped suspension mechanism for a moving head fixture.
