---
id: tips-and-tricks
title: Tips and tricks
sidebar_label: Tips and tricks
---

import Keys from '@site/src/components/key.ts';

The following section gives you some quick ways to operate Titan. ``<n>`` means type a number on the keypad. "<Keys.HardKey>Avo</Keys.HardKey> + " means hold down the first button.

## Fixture control and recording

-  Select all fixtures: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>ALL</Keys.HardKey> <Keys.HardKey>ALL</Keys.HardKey> <Keys.HardKey>ALL</Keys.HardKey>
-  Select all fixtures with non-zero intensity: <Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>Select If</Keys.HardKey>
-  Set full intensity in the Programmer for selected fixtures: Tap <Keys.HardKey>@</Keys.HardKey><Keys.HardKey>@</Keys.HardKey>
-  Set intensity value ``<n>`` in the programmer: <Keys.HardKey>@</Keys.HardKey> ``<n>`` <Keys.HardKey>Enter</Keys.HardKey> (value as 0-99 unless you've changed the user settings)
-  Clear over a time: ``<n>`` <Keys.HardKey>Clear</Keys.HardKey> will clear over that time
-  <Keys.HardKey>Wheel @</Keys.HardKey> Keys: Allow fast Access to Freeze, Off, Or on for the attribute active for that wheel. Tap it twice for 100% of a percentage based attribute (such as Intensity, RGB or CMY). [(more)](../controlling-fixtures/changing-fixture-attributes.md#adjusting-attributes-with-the--buttons)
-  How to see/select cells on multi cell fixture: Use <Keys.HardKey>Unfold</Keys.HardKey> then tap fixture.
-  Group Pattern Selection: Click and hold <Keys.HardKey>Group</Keys.HardKey> then select from the soft keys Odd/Even etc
-  Quick Pattern Selection: Select fixtures or Group then click <Keys.HardKey>ALL</Keys.HardKey> to select within selected fixtures a pattern such as
odd, even, random – etc
-  Select all cells in the currently selected fixtures: <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> 
-  Quickly set record type: press <Keys.HardKey>Record</Keys.HardKey> once for Cue, twice for chase, three times for cue list, four times for timeline
-  Quick open record palette menu: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Palette</Keys.HardKey>
-  Quick open record group menu: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Group</Keys.HardKey>
-  Quick open record macro menu: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Macro</Keys.HardKey>
-  Record time into palettes/cues: <Keys.HardKey>Time</Keys.HardKey> key to put times in the programmer
-  Entering timecode times: Use <Keys.HardKey>Through</Keys.HardKey> and <Keys.HardKey>And</Keys.HardKey> buttons as left/right arrows to go between hours, minutes, seconds etc.
-  Select "Move" on consoles which don't have a Move button: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>COPY</Keys.HardKey>
-  Want to Move/Copy/ Delete lots of items: Use the <Keys.HardKey>Latch Menu</Keys.HardKey> after <Keys.HardKey>COPY</Keys.HardKey>, <Keys.HardKey>MOVE</Keys.HardKey>, or <Keys.HardKey>Delete</Keys.HardKey> to stay in that
menu

## Playback and running a show

-  Set BPM/Rate directly: ``<n>`` then tap one of the master's keys (any of them) and it will set that as the BPM/Rate %
-  Fire Macro ``<n>`` times: Type number then fire macro, macro will be played that many times
-  Change fade time of next Cue: ``<n>`` <Keys.HardKey>GO</Keys.HardKey> - fades in the next cue in a cue list in ``<n>`` seconds, overriding the programmed
fade time
-  Release all running playbacks: Double tap <Keys.HardKey>Release</Keys.HardKey> to release ALL running playbacks
-  Quickly create Mask FX: Double tap <Keys.HardKey>Mask FX</Keys.HardKey> to create Mask FX for selected fixtures, or all fixtures if nothing selected
-  Legend Wing Pages: Set Legend then <Keys.HardKey>Go Page</Keys.HardKey> on the wing.

## Views, menus and windows

-  Quick open Patch View: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Patch</Keys.HardKey>
-  Quick Open Fixtures Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey>
-  Quick Open Groups Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Group</Keys.HardKey>
-  Quick Open Macros Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Macro</Keys.HardKey>
-  Quick Open Attribute Editor: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey>
-  Quick Open Active Playbacks: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Off</Keys.HardKey>
-  Quick Open Position Palettes Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey>
-  Quick Open Colour Palettes Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Colour</Keys.HardKey>
-  Quick Open Gobo and Beam Palettes Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> (or <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Beam</Keys.HardKey>)
-  Quick Open Shape Palettes Window: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Shape</Keys.HardKey>
-  Quick Open Intensity View: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Intensity</Keys.HardKey>
-  Quick Open Cue List View of connected Cue List: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Connect/Cue</Keys.HardKey>
-  Quick exit menus to the top: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>EXIT</Keys.HardKey>, this will also exit the Unfold Menu
-  Search deep in menus: use the search box to find menu options faster.
-  Options missing in a Menu: Check to see if you have typed in the search box in the prompt area by accident
-  Window too small to Adjust: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Min/Max</Keys.HardKey> to resize window
-  Move Window to different screen: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Size/Position</Keys.HardKey> Moves the currently selected window to another screen.
-  Close All Windows: <Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>Close</Keys.HardKey>
-  Delete a workspace select button: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Delete</Keys.HardKey> <Keys.ContextKey>Workspace button</Keys.ContextKey>
-  Move or Copy a workspace select button: <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Move</Keys.HardKey> <Keys.ContextKey>Workspace button</Keys.ContextKey> or <Keys.HardKey>Open/View</Keys.HardKey> <Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>Workspace button</Keys.ContextKey>
-  Move Camera in Capture with wheels: In the Context Menu <Keys.ContextKey>Camera Move</Keys.ContextKey> then how you want to move the camera

## Setup, operating system and hardware

-  Save the show instantly: Tap <Keys.HardKey>DISK</Keys.HardKey> <Keys.HardKey>DISK</Keys.HardKey>
-  Get the next available channel to patch: In patch view, if you need to quickly find the next available DMX address
you can click on the 'space' between the fixtures in the Bargraph and if you are patching it will automatically put
this address as the next patch address
-  Set the time: Click on the clock in the top bar. Always check the time zone before changing hours to prevent licensing
issues
-  Set Desk Lamp or Screen Brightness: Enter the system menu (<Keys.HardKey>AVO</Keys.HardKey> + <Keys.HardKey>DISK</Keys.HardKey>) use wheels to adjust ( only some
consoles have brightness control)
-  Hard Key Not Working: Use the Virtual Panel from the \u123Tools\u125 menu to get you thru till it can be repaired.
