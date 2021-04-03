---
id: button-reference
title: Button reference
sidebar_label: Button reference
---

import Keys from '/src/components/key.ts';

This section lists all the physical buttons and tells you what they do. The **links** take you to the section of the manual where the function is explained in more detail. Some consoles may not have all these buttons.

``<n>`` means to type in a numeric value on the keypad.

<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Colour</Keys.HardKey> indicates to press a sequence of buttons.

<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Clear</Keys.HardKey> with a plus symbol means to hold down the first button while pressing the second button.

{Select} means to press a playback select button.

---

 ## <Keys.HardKey>@</Keys.HardKey> 
 (by numeric keypad) Allows numeric entry of attribute values on selected fixtures. Can also be used with <Keys.HardKey>Fixture</Keys.HardKey> or <Keys.HardKey>Group</Keys.HardKey> buttons to change selection state. For the <Keys.HardKey>@</Keys.HardKey> buttons next to the wheels see [Wheel @](#wheel-).

 Examples: \
 <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>And</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 7 <Keys.HardKey>@</Keys.HardKey> 75 <Keys.HardKey>Enter</Keys.HardKey> (Set fixtures 1,5,7 to 75%) \
 <Keys.HardKey>Group</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> (Set all fixtures in group 5 to full)

  Buttons | Action
 --------|--------
 <Keys.HardKey>@</Keys.HardKey> ``<n>`` <Keys.HardKey>Enter</Keys.HardKey> | Set intensity of currently selected fixtures to ``<n>`` in the programmer. (``<n>`` normally 0-99, optionally can be single digit 0-9, see [Formatting](../system-settings/user-settings.md#formatting))
 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Set intensity of currently selected fixtures to full in the programmer.

 --- 
## <Keys.HardKey>@A</Keys.HardKey> <Keys.HardKey>@B</Keys.HardKey> <Keys.HardKey>@C</Keys.HardKey>
For the <Keys.HardKey>@</Keys.HardKey> buttons next to the wheels see [Wheel @](#wheel-).

 --- 
## <Keys.HardKey>Align</Keys.HardKey> 
 (D9 only) Allows copying of attributes between fixtures. On consoles other than D9 this function is accessed using <Keys.HardKey>ML Menu</Keys.HardKey>. See [Align Fixtures](../controlling-fixtures/changing-fixture-attributes.md/#align-fixtures).

 --- 
## <Keys.HardKey>All</Keys.HardKey> 
 Used to start and end pattern selection (such as odd/even) within a range of selected fixtures. See [Selecting fixtures using a pattern](../controlling-fixtures.md/#selecting-fixtures-using-a-pattern). (On D9 labelled <Keys.HardKey>Pattern/All</Keys.HardKey>)

 --- 
## <Keys.HardKey>And</Keys.HardKey> 
 Used when selecting multiple items using the numeric keypad, can be combined with <Keys.HardKey>Through</Keys.HardKey> and <Keys.HardKey>Not</Keys.HardKey>. See [Selecting fixtures and dimmers by number](../controlling-fixtures.md/#selecting-fixtures-and-dimmers-by-number-channel). Some consoles do not have this button, an <Keys.SoftKey>And</Keys.SoftKey> softkey is also provided.

 Example:  <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>And</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 7

 Also when entering time or timecode values the <Keys.HardKey>And</Keys.HardKey> and <Keys.HardKey>Through</Keys.HardKey> buttons move the cursor between hours/minutes/seconds/frames.

 --- 
## <Keys.HardKey>Assign</Keys.HardKey> 
 (D9 and ST only) Allows you to reassign attributes controlled by the trackball and (on D9 only) intensity wheel. See [Trackball](../controlling-fixtures/changing-fixture-attributes.md#trackball-diamond-9-and-sapphire-touch-only).

 --- 
## <Keys.HardKey>Avo</Keys.HardKey> 
 Acts as a "Shift" button when held down, giving access to different functions. Or a quick press shows a softkey menu with other functions.

  Buttons | Action
 --------|--------
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> | Set zero intensity into programmer for unselected fixtures (same as <Keys.HardKey>Rem Dim</Keys.HardKey>), see [Turn off unselected fixtures](../controlling-fixtures.md#turn-off-unselected-fixtures-remainder-dim). Also used when setting Attribute Times to deselect all fixtures, see [Attribute Fade Times](../cue-lists/cue-list-timing.md#individual-attribute-fade-times).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Back</Keys.HardKey> | Undo, see [Undo/Redo](../titan-basics/other-parts-of-the-touch-screen.md/#undoredo).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Close</Keys.HardKey> | Close all workspace windows, see [Workspace windows](../titan-basics/workspace-windows.md#changing-window-size-and-appearance).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Copy</Keys.HardKey> | Same as pressing <Keys.HardKey>Move</Keys.HardKey> (for consoles which don't have a Move button, but works on all consoles)
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> | Enter System menu to set up the console, see [System Menu](../system-settings/the-system-menu.md).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Exit</Keys.HardKey> | Exit menu structure back to the top level.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Fix +</Keys.HardKey> | Jump the pattern forward (or back with <Keys.HardKey>Fix -</Keys.HardKey>) in pattern select mode.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Flash On</Keys.HardKey> | Flash out (turn off) selected fixtures while held.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Group</Keys.HardKey> {Select} | Record group to handle, see [Record a group](../controlling-fixtures/fixture-groups.md#record-a-group).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Highlight</Keys.HardKey> | Record the highlight state, see [Highlight](../controlling-fixtures.md/#highlighting-the-selected-fixture-with-prevnext)
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Macro</Keys.HardKey> {Select} | Record macro to handle, see [Key Macro buttons](../titan-basics/front-panel-buttons.md/#key-macro-buttons).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Min/Max</Keys.HardKey> | Select a different workspace window to be the active window, see [Workspace windows](../titan-basics/workspace-windows.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Open/View</Keys.HardKey> {Workspace button} | Record workspace layout, see [Saving workspace layouts](../titan-basics/workspace-windows.md#saving-workspace-layouts).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Release</Keys.HardKey> | Release all playbacks by priority (same as double press <Keys.HardKey>Release</Keys.HardKey>). See [Release](../cues/cue-playback.md#release).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Shape</Keys.HardKey> | 
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Size/Position</Keys.HardKey> | Move the active workspace window to the next screen, see [Workspace windows](../titan-basics/workspace-windows.md#changing-window-size-and-appearance).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Time</Keys.HardKey> | Preview Attribute fade time, see [Attribute Times](../controlling-fixtures/changing-fixture-attributes.md#setting-fixtureattribute-times).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Undo</Keys.HardKey> or <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>@</Keys.HardKey> | Redo, see [Undo/Redo](../titan-basics/other-parts-of-the-touch-screen.md/#undoredo).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Blind</Keys.SoftKey> | Toggle Blind mode, same as pressing <Keys.HardKey>Blind</Keys.HardKey>.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Edit current key profile</Keys.SoftKey> | Reallocate the function of the Select and Flash buttons, see [Key Profiles](../system-settings/key-profiles.md).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Lock</Keys.SoftKey> | Temporarily lock console controls, see [Locking the console](../titan-basics/front-panel-buttons.md#locking-the-console).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>User Settings</Keys.SoftKey> | Enter the User Settings menu, see [User Settings](../system-settings/user-settings.md).
 <Keys.HardKey>Avo</Keys.HardKey> + {Scene Master} | Enter or exit preset mode when Scene Master assigned to Macro/Executor button or touch button, see [Scene Master](../running-the-show/playback-controls.md#scene-master).
 <Keys.HardKey>Avo</Keys.HardKey> + {Master} | Releases the master to its default state (no effect on output), see [Releasing a Master](../cues/cue-playback.md#releasing-a-master).
 <Keys.HardKey>Avo</Keys.HardKey> + {Playback} | Kill playback, see [Release](../cues/cue-playback.md#release).
 <Keys.HardKey>Avo</Keys.HardKey> + Turn wheel | Wheel Turbo mode, 1 revolution goes through entire attribute range
 <Keys.HardKey>Avo</Keys.HardKey> + 2/4/6/8 | Cursor up, left, right, down


 --- 
## <Keys.HardKey>Back</Keys.HardKey> 
Backspace key for numeric entry or command line inputs.

 --- 
## <Keys.HardKey>Beam</Keys.HardKey> 
 Selects the Beam attribute group so the wheels will control Zoom, focus etc. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels). 

 --- 
## <Keys.HardKey>Blind</Keys.HardKey> 
 Switches the console into Blind mode which allows you to make programming changes using the visualiser (or in your head) while not affecting the stage output. See [Blind mode](../running-the-show/playback-controls.md#blind-mode).

 --- 
## <Keys.HardKey>Block</Keys.HardKey> 
 (D9 only) Not used yet.

 --- 
## <Keys.HardKey>Chan Grid</Keys.HardKey> 
 (Arena only) Opens the Channel Grid workspace window. See [The Channel Grid Window](../controlling-fixtures/viewing-and-editing-fixture-values.md/#the-channel-grid-window).

 --- 
## <Keys.HardKey>Clear</Keys.HardKey> 
 Clears the contents of the programmer and deselects fixtures. See [Clearing the fixture selection and the programmer](../controlling-fixtures.md#clearing-the-fixture-selection-and-the-programmer).

 Buttons | Action
 --------|--------
 <Keys.HardKey>Clear</Keys.HardKey> | Single press clears the programmer and deselects fixtures. (Optional 2-press sequence, see [Clear Action Precedence](../system-settings/user-settings.md#clear)) 
 ``<n>`` <Keys.HardKey>Clear</Keys.HardKey> | Clears the programmer with a fade out time of ``<n>``
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> | Deselect all fixtures but keep changes in programmer
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Set Mask</Keys.SoftKey> | Clears only the attribute groups specified in the mask
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Clear Selected Fixtures</Keys.SoftKey> | Only clears the programmer for fixtures which are currently selected
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Individual Attributes</Keys.SoftKey> | Clear individual attributes from programmer (use softkeys to select)
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Clear All Programmers</Keys.SoftKey> | Clears programmers from other users and from the Titan Remote
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Clear Options</Keys.SoftKey> | Show user settings for Clear, see [User settings - Clear](../system-settings/user-settings.md/#clear)

 --- 
## <Keys.HardKey>Close</Keys.HardKey> 
 Close the currently active workspace window.

 Example: (Tap window to make it active) <Keys.HardKey>Close</Keys.HardKey>

 --- 
## <Keys.HardKey>Colour</Keys.HardKey> 
 Selects the Colour attribute group so the wheels will control colour, RGB, CMY etc. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels).

 --- 
## <Keys.HardKey>Commit</Keys.HardKey> 
 (D9 only) Commits the Scene Master change, as if you'd pushed the master to the end of its travel. See [Scene Master](../running-the-show/playback-controls.md/#scene-master).

 --- 
## <Keys.HardKey>Connect</Keys.HardKey> 
(Labelled Connect/Cue on some consoles) Connects the sequence controls (Go button etc) to a playback. Also used to select cues when recording or playing cue lists.

See [Connecting a Chase for control](../chases/chase-playback.md/#connecting-a-chase-for-control), [Running a Cue List](../cue-lists/cue-list-playback.md#running-a-cue-list), [Theatre programming](../cue-lists/theatre-programming.md)

 --- 
## <Keys.HardKey>Copy</Keys.HardKey> 
 Used to make copies of items (fixtures, playbacks etc). Use <Keys.HardKey>Latch</Keys.HardKey> to keep the copy function active for copying multiple items. Press twice to make linked copy.

 Example: <Keys.HardKey>Copy</Keys.HardKey> {Source Playback} {Destination Playback}

 Buttons | Action
 --------|--------
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Copy</Keys.HardKey> | Same as pressing <Keys.HardKey>Move</Keys.HardKey> (for consoles which don't have a Move button, but works on all consoles)
 <Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Copy</Keys.HardKey> | Selects Linked Copy, same as pressing <Keys.HardKey>Copy</Keys.HardKey> <Keys.SoftKey>Link</Keys.SoftKey>
 
 --- 
## <Keys.HardKey>Cue</Keys.HardKey> 
 Used when selecting cues in Cue Lists. Labelled Connect on some consoles, see [Connect](#Connect).

 --- 
## <Keys.HardKey>Cue +</Keys.HardKey> 
 (D9 only) Moves the next cue in the connected cue list on by one - same as <Keys.HardKey>Next Step</Keys.HardKey>.

 --- 
## <Keys.HardKey>Cue -</Keys.HardKey> 
 (D9 only) Moves the next cue in the connected cue list back by one - same as <Keys.HardKey>Prev Step</Keys.HardKey>.

 --- 
## <Keys.HardKey>Custom (wheels)</Keys.HardKey> 
 (D9 only - button to right of wheels) Not used yet.

 --- 
## <Keys.HardKey>Delete</Keys.HardKey> 
 Used to delete items. You usually need to press the item to be deleted a second time to confirm the delete, or press <Keys.HardKey>Enter</Keys.HardKey> to confirm. Use <Keys.HardKey>Latch</Keys.HardKey> to keep the Delete function active for deleting multiple items.

 Example: <Keys.HardKey>Delete</Keys.HardKey> {Playback} {Playback}

 --- 
## <Keys.HardKey>Direction</Keys.HardKey> 
 (D9 only) Used when setting direction of shapes. See [Shape Direction](../effects/shape-generator.md/#shape-direction)

 --- 
## <Keys.HardKey>Disk</Keys.HardKey> 
 Shows disk functions such as Save Show etc. If pressed when <Keys.HardKey>Avo</Keys.HardKey> held, enters System menu. See [Saving the show](../titan-basics/loading-and-saving-shows.md#saving-the-show) and [The System Menu](../system-settings/the-system-menu.md).

Buttons | Action
 --------|--------
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> | Enter System menu
 <Keys.HardKey>Disk</Keys.HardKey> <Keys.HardKey>Disk</Keys.HardKey> | Save the current show without asking any questions
 

 --- 
## <Keys.HardKey>Edit</Keys.HardKey> 
 Used when editing palettes. See [Changing the content of palettes](../palettes/editing-palettes.md/#changing-the-content-of-palettes).

 --- 
## <Keys.HardKey>Effect</Keys.HardKey> 
 Selects the Effect attribute group so the wheels control Prism etc. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels).

 --- 
## <Keys.HardKey>Enter</Keys.HardKey> 
 Completes or accepts many commands.

 --- 
## <Keys.HardKey>Enter/B</Keys.HardKey> 
 (D9 only) Enters Scene Master preset mode. See [Scene Master](../running-the-show/playback-controls.md/#scene-master).

 --- 
## <Keys.HardKey>Exit</Keys.HardKey> 
 Leaves the current menu and goes one level back up the menu structure.

  Buttons | Action
 --------|--------
  <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Exit</Keys.HardKey> | Exit menu structure back to the top level

 --- 
## <Keys.HardKey>Exit/A</Keys.HardKey> 
 (D9 only) Exits Scene Master preset mode and goes back to Live. See [Scene Master](../running-the-show/playback-controls.md/#scene-master).

 --- 
## <Keys.HardKey>FX</Keys.HardKey> 
 (D9 only) Selects the Shape/FX menu to run shapes, key frame shapes or pixel map effects. Also used to enable/disable FX attribute group when setting masks. See [Shape menu](#Shape).

 Multiple presses followed by <Keys.HardKey>Enter</Keys.HardKey> will select the options in the Shape/FX menu - press twice then <Keys.HardKey>Enter</Keys.HardKey> to select Key Frame Shapes or three times then <Keys.HardKey>Enter</Keys.HardKey> to select Pixel Mapper.

 --- 
## <Keys.HardKey>FX (wheels)</Keys.HardKey> 
 (D9 only - button to the right of the wheels) Sets the wheels into FX mode to control shape size, speed, spread.

 --- 
## <Keys.HardKey>Fade/Delay (wheels)</Keys.HardKey> 
 (D9 only - button to right of wheels) Sets the wheels into Fade/Delay mode to control fade and delay times.

 --- 
## <Keys.HardKey>Fan</Keys.HardKey> 
 Starts Fan mode so the wheels spread out attributes rather than setting values. See [Fan Mode](../controlling-fixtures/changing-fixture-attributes.md/#fan-mode).

 --- 
## <Keys.HardKey>Fix +1</Keys.HardKey> 
 Selects the next fixture out of a range, used when programming to step through a range of fixtures one at a time. See [Stepping through selected fixtures](../controlling-fixtures.md/#stepping-through-selected-fixtures-one-at-a-time).

 --- 
## <Keys.HardKey>Fix -1</Keys.HardKey> 
 Selects the previous fixture out of a range, used when programming to step through a range of fixtures one at a time. See [Stepping through selected fixtures](../controlling-fixtures.md/#stepping-through-selected-fixtures-one-at-a-time).

 --- 
## <Keys.HardKey>Fixture</Keys.HardKey> 
 Opens the fixture/channel menu which is used when selecting fixtures from the keypad. See [Selecting fixtures and dimmers by number](../controlling-fixtures.md/#selecting-fixtures-and-dimmers-by-number-channel)

 --- 
## <Keys.HardKey>Flash On</Keys.HardKey> 
 Flashes selected fixtures while held.

 --- 
## <Keys.HardKey>Go</Keys.HardKey> 
 Runs the next cue of the connected playback, usually used when running cues from a cue list. See [Running a Cue List](../cue-lists/cue-list-playback.md/#running-a-cue-list).

 --- 
## <Keys.HardKey>Go page</Keys.HardKey> 
 Type a number to jump to Page ``<n>`` of the associated fader bank (consoles with multiple fader banks may have several of these buttons). See also <Keys.HardKey>Page +</Keys.HardKey> and <Keys.HardKey>Page -</Keys.HardKey>. See [Changing playback pages](../cues/cue-playback.md/#changing-playback-pages).
  
  Buttons | Action
 --------|--------
  <Keys.HardKey>Go page</Keys.HardKey> ``<n>`` | Switch fader bank to page n
  <Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Go page</Keys.HardKey> | Release whole page of playbacks. See [Release Page](../cues/cue-playback.md/#releasing-a-whole-page-of-playbacks).

 --- 
## <Keys.HardKey>Gobo</Keys.HardKey> 
 Selects the Gobo attribute group so the wheels control gobo select, rotation etc. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels).

 --- 
## <Keys.HardKey>Group</Keys.HardKey> 
 Opens the group menu for saving and editing fixture groups. See [Fixture Groups](../controlling-fixtures/fixture-groups.md/#using-fixture-groups). Can also be used to set levels on a group, example: <Keys.HardKey>Group</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> sets all fixtures in Group 5 to full.

 --- 
## <Keys.HardKey>Hi light</Keys.HardKey> 
 Starts or ends Hi-light mode which visually shows the selected fixture(s) on stage by increasing intensity or setting a contrasting colour. Often used with <Keys.HardKey>Fix +1</Keys.HardKey> and <Keys.HardKey>Fix -1</Keys.HardKey> buttons. See [Stepping through selected fixtures](../controlling-fixtures.md/#stepping-through-selected-fixtures-one-at-a-time).

 --- 
## <Keys.HardKey>Include</Keys.HardKey> 
 (followed by playback Select) Loads the contents of a playback back into the programmer for further editing or re-use. See [Include Function](../cues/editing-cues.md/#using-parts-of-existing-cues---the-include-function).

 --- 
## <Keys.HardKey>Intensity</Keys.HardKey> 
 Selects the Intensity attribute group so the wheels control Dimmer, Shutter etc. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels).

 --- 
## <Keys.HardKey>Keyboard</Keys.HardKey> 
 (D9 only) Shows the touch screen keyboard. On other consoles there is a button in the window title bars to open the keyboard. See [Touch Keyboard](../titan-basics/workspace-windows.md/#touch-keyboard).

 --- 
## <Keys.HardKey>Latch</Keys.HardKey> 
 (D9 only) Latches the current menu so that it remains active when you complete the action. <Keys.HardKey>Latch Menu</Keys.HardKey> on other consoles, see below.

 --- 
## <Keys.HardKey>Latch Menu</Keys.HardKey> 
 Latches the current menu so that it remains active when you complete the action. Useful for copy, move etc. Useful for copy, move etc. See [The Menu/Softkeys](../titan-basics/other-parts-of-the-touch-screen.md/#the-menusoftkeys).

 --- 
## <Keys.HardKey>Left</Keys.HardKey> 
 (D9 / ST only) Left mouse button when trackball is in mouse mode.

 --- 
## <Keys.HardKey>Legend</Keys.HardKey> 
 (D9 only) (followed by a Select button) Set legend on an item. On other consoles use the <Keys.SoftKey>Set Legend</Keys.SoftKey> softkey at the top level menu. See [Legends and picture legends](../titan-basics/workspace-windows.md/#legends-and-picture-legends).

 --- 
## <Keys.HardKey>Levels (wheels)</Keys.HardKey> 
 (D9 only - button to right of the wheels) set wheels to Levels mode for setting attribute levels.

 --- 
## <Keys.HardKey>Level @</Keys.HardKey> 
 (D9 only) Opens the @ menu for the Intensity wheel.

 --- 
## <Keys.HardKey>Library</Keys.HardKey> 
 (Arena only) Opens the Show Library window. See [Show Library](../titan-basics/show-library.md).

 --- 
## <Keys.HardKey>Live Time</Keys.HardKey> 
 Lets you edit timing information for the currently live cue in a cue list. See [Edit Times of a running cue list](../cue-lists/editing-cue-lists.md/#edit-times-of-a-running-cue-list).

 --- 
## <Keys.HardKey>Locate</Keys.HardKey> 
 Sets selected fixtures to a "start" position with light coming out so you can program them. See [Setting fixtures to a Start Position (Locate)](../controlling-fixtures.md#setting-fixtures-to-a-start-position-locate).

 --- 
## <Keys.HardKey>Lock Axis</Keys.HardKey> 
(D9 and ST only) Not currently used.

 --- 
## <Keys.HardKey>Macro</Keys.HardKey> 
 Opens the Macro menu, which allows you to record sequences of keypresses for playback. See [Key Macro buttons](../titan-basics/front-panel-buttons.md/#key-macro-buttons). 
 
 You can also recall macros by number, example: <Keys.HardKey>Macro</Keys.HardKey> 5 <Keys.HardKey>Enter</Keys.HardKey>

 --- 
## <Keys.HardKey>Mask FX</Keys.HardKey> 
 (D9 only) Opens the Mask FX menu which allows you to create masks to block running shapes. Also available as a softkey on the Shapes and Effects menu. See [Mask Fx](../effects/shape-generator.md/#masking-shapes-using-mask-fx).

   Buttons | Action
 --------|--------
  <Keys.HardKey>Mask FX</Keys.HardKey> <Keys.HardKey>Intensity</Keys.HardKey> | Create Mask FX for intensity (same for any attribute group button)
  <Keys.HardKey>Mask FX</Keys.HardKey> <Keys.HardKey>Mask FX</Keys.HardKey> | Create Mask FX for all attribute groups

 --- 
## <Keys.HardKey>Menu Latch</Keys.HardKey> 
 Latches the current menu so that it remains active when you complete the action. Useful for copy, move etc. Useful for copy, move etc. See [The Menu/Softkeys](../titan-basics/other-parts-of-the-touch-screen.md/#the-menusoftkeys).

 --- 
## <Keys.HardKey>Min/Max</Keys.HardKey> 
 Changes current workspace window between minimum (quarter screen) and maximum (full screen) size. See [Window Size](../titan-basics/workspace-windows.md/#changing-window-size-and-appearance).

 --- 
## <Keys.HardKey>ML Menu</Keys.HardKey> 
 At top level menu, opens the Moving Light menu where you can run fixture macros and access the <Keys.SoftKey>Align</Keys.SoftKey> function. Also acts as Menu Latch if pressed while in a submenu. See [The ML Menu button](../controlling-fixtures/advanced-options.md/#the-ml-menu-button). Not on D9, use <Keys.HardKey>Macro</Keys.HardKey> to run fixture macros and <Keys.HardKey>Align</Keys.HardKey> to access Align function.

 --- 
## <Keys.HardKey>Move</Keys.HardKey> 
 Used to move items to different handles. Use <Keys.HardKey>Latch</Keys.HardKey> to keep the Move function active for moving multiple items.

 Example: <Keys.HardKey>Move</Keys.HardKey> {Source Playback} {Destination Playback}

 --- 
## <Keys.HardKey>Next Step</Keys.HardKey> 
 Moves to the next cue in the connected cue list using programmed fade times. Labelled <Keys.HardKey>Next Cue</Keys.HardKey> or <Keys.HardKey>Cue +</Keys.HardKey> on some consoles. See [Running a cue list](../cue-lists/cue-list-playback.md/#running-a-cue-list).

 --- 
## <Keys.HardKey>Next Time</Keys.HardKey> 
 Lets you edit timing information for the next cue in a connected cue list. See [Edit times of a running cue list](../cue-lists/editing-cue-lists.md/#edit-times-of-a-running-cue-list).

 --- 
## <Keys.HardKey>Not</Keys.HardKey> 
 Used when selecting ranges of items. See [Selecting fixtures and dimmers by number](../controlling-fixtures.md/#selecting-fixtures-and-dimmers-by-number-channel).

 Example: <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>not</Keys.HardKey> 3 selects fixtures 1, 2, 4, 5

 --- 
## <Keys.HardKey>Odd/Even</Keys.HardKey> 
 Replaced by <Keys.HardKey>All</Keys.HardKey>.  Used to start and end odd/even selection from a range of selected fixtures. See [Selecting fixtures using a pattern](../controlling-fixtures.md/#selecting-fixtures-using-a-pattern).

 --- 
## <Keys.HardKey>Off</Keys.HardKey> 
 Used to deactivate specific attribute values from fixtures or in playbacks. Attributes set to Off can later be restored to their previous values. See [Deactivate attributes using Off](../cues/editing-cues.md/#deactivate-attributes-from-cues-using-off).

 --- 
## <Keys.HardKey>Open</Keys.HardKey> 
 (D9 only) Open workspace window, like double pressing View. \
 (Quartz, Titan Mobile) Show details about item, or double press to open workspace window, see [View](#view).

 --- 
## <Keys.HardKey>Open/View</Keys.HardKey> 
(Sapphire Touch, Arena, Tiger Touch only) \
 Show details about item, or double press to open workspace window, see [View](#view).

 --- 
## <Keys.HardKey>Options</Keys.HardKey> 
 Followed by **Select** button, shows options screen for item. Usually used with playbacks but can set options for other types of item. See [Playback Options](../cues/playback-options.md/)

 --- 
## <Keys.HardKey>Page +</Keys.HardKey> 
 Move to next page in the fader bank (consoles with multiple fader banks may have several of these buttons). See also <Keys.HardKey>Go Page</Keys.HardKey>. See [Changing playback pages](../cues/cue-playback.md/#changing-playback-pages).

 --- 
## <Keys.HardKey>Page -</Keys.HardKey> 
 Move to previous page in the fader bank (consoles with multiple fader banks may have several of these buttons). See also <Keys.HardKey>Go Page</Keys.HardKey>. See [Changing playback pages](../cues/cue-playback.md/#changing-playback-pages).

 --- 
## <Keys.HardKey>Palette</Keys.HardKey> 
 Opens the Palette menu which is used when recalling palettes by number. See [Recalling palettes](../palettes/using-palettes.md/#recalling-from-the-keypad).

 --- 
## <Keys.HardKey>Patch</Keys.HardKey> 
 Opens the Patch menu. See [Patching new fixtures or dimmers](../patching/patching-new-fixtures-or-dimmers.md/).

 ---

 ## <Keys.HardKey>Pattern/All</Keys.HardKey> 
 (D9 only) Used to start and end pattern selection (such as odd/even) within a range of selected fixtures. Same as <Keys.HardKey>All</Keys.HardKey> on other consoles, see [All](#All).

 --- 
## <Keys.HardKey>Playback</Keys.HardKey> 
 (Arena) Opens the Playbacks workspace window showing touch buttons for additional playback storage. \
 (D9) If pressed after <Keys.HardKey>View</Keys.HardKey>, opens the Playbacks workspace window.

 --- 
## <Keys.HardKey>Playback (wheels)</Keys.HardKey> 
 (D9 only - button to right of wheels) Sets the wheels to playback control mode.

 --- 
## <Keys.HardKey>Position</Keys.HardKey> 
 Selects the Position attribute group so the wheels control pan, tilt etc. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels).

 --- 
## <Keys.HardKey>Preload/Auto</Keys.HardKey> 
 (D9 only) Preload the Scene Master preset state (loads the LTP values of non-illuminated fixtures so they don't visibly move when the state is faded in). See [Scene Master](../running-the-show/playback-controls.md/#scene-master).

 --- 
## <Keys.HardKey>Prev Step</Keys.HardKey> 
 Moves to the previous cue in the connected cue list using programmed fade times. Labelled <Keys.HardKey>Prev Cue</Keys.HardKey> or <Keys.HardKey>Cue -</Keys.HardKey> on some consoles. See [Running a cue list](../cue-lists/cue-list-playback.md/#running-a-cue-list).

 --- 
## <Keys.HardKey>Record</Keys.HardKey> 
 Enter Record mode to record playbacks or palettes. See [Creating a cue](../cues/creating-a-cue.md/#creating-a-cue) and [Storing a palette](../palettes/creating-palettes.md/#storing-a-palette). Press <Keys.HardKey>Record</Keys.HardKey> multiple times to step through Record Cue / Record Chase / Record Cue List / Record Timeline options.

 Buttons | Action
 --------|--------
  <Keys.HardKey>Record</Keys.HardKey> {Select} | Record programmer state to cue
  <Keys.HardKey>Record</Keys.HardKey> {Palette window button} | Record programmer state to palette
  <Keys.HardKey>Record</Keys.HardKey> {Workspace select button} | Record current workspace state to workspace select button
  <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Highlight</Keys.HardKey> | Record the highlight state, see [Highlight](../controlling-fixtures.md/#highlighting-the-selected-fixture-with-prevnext)
  <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Locate</Keys.HardKey> | Record the locate state, see [Locate](../controlling-fixtures.md#changing-the-locate-state).

 --- 
## <Keys.HardKey>Record Step</Keys.HardKey> 
 Record the programmer into the current active cue in the connected cue list. See [Editing a cue list while recording](../cue-lists/editing-cue-lists.md/#editing-a-cue-list-while-recording)

 --- 
## <Keys.HardKey>Release</Keys.HardKey> 
 Used to override the LTP behaviour of attributes when a playback is killed. See [Release](../cues/cue-playback.md/#release). \
 Can also be used to release various other items.

 Buttons | Action
 --------|--------
  <Keys.HardKey>Release</Keys.HardKey> {Master} | Releases the master to its default state (no effect on output), see [Releasing a Master](../cues/cue-playback.md#releasing-a-master).
  <Keys.HardKey>Release</Keys.HardKey> {Playback} | Release the playbacks by priority. See [Release](../cues/cue-playback.md#release).
  <Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Clear</Keys.HardKey> | Release attributes in the programmer. See [Release](../cues/cue-playback.md#releasing-the-programmer-contents).
  <Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Go Page</Keys.HardKey> | Release whole page of playbacks. See [Release Page](../cues/cue-playback.md/#releasing-a-whole-page-of-playbacks).
  <Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey> | Release all active playbacks by priority. See [Release](../cues/cue-playback.md#release).
  <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey> | Record the release or power on state. See [Power On State](../cues/cue-playback#programming-the-release--power-on-state).

 --- 
## <Keys.HardKey>Rem Dim</Keys.HardKey> 
 Turns off all unselected fixtures. Not fitted on all consoles, can also be accessed by <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey>. See [Turn Off Unselected Fixtures](../controlling-fixtures.md/#turn-off-unselected-fixtures-remainder-dim)

 --- 
## <Keys.HardKey>Reset</Keys.HardKey> 
 (D9 only) Clear the preset state of the Scene Master. See [Scene Master](../running-the-show/playback-controls.md/#scene-master).

 --- 
## <Keys.HardKey>Review</Keys.HardKey> 
 Re-runs the fade times of the current live cue to allow you to see timing changes. See [Edit Times of a Running Cue List](../cue-lists/editing-cue-lists.md/#edit-times-of-a-running-cue-list)

 --- 
## <Keys.HardKey>Right</Keys.HardKey> 
 (D9 / ST only) Right mouse button when trackball in mouse mode.

 --- 
## <Keys.HardKey>Scroll</Keys.HardKey> 
 Makes the wheels scroll the focussed zone up/down.

 --- 
## <Keys.HardKey>Select If</Keys.HardKey> 
 Selects all fixtures which have intensity above zero. See [Select If](../controlling-fixtures.md/#selecting-fixtures-which-are-in-a-playback).

 --- 
## <Keys.HardKey>Set</Keys.HardKey> 
 This button has become the <Keys.HardKey>Time</Keys.HardKey> button.

 --- 
## <Keys.HardKey>Shape</Keys.HardKey> 
 Selects the Shape/FX menu to run shapes, key frame shapes or pixel map effects. See [Shapes and Effects](../effects.md).

 --- 
## <Keys.HardKey>Size/Position</Keys.HardKey> 
 Moves the currently selected workspace window around the different size and position options. If <Keys.HardKey>Avo</Keys.HardKey> held also, moves the window to the other screen.

 --- 
## <Keys.HardKey>Snap</Keys.HardKey> 
 Enables Snap mode which makes <Keys.HardKey>Prev Step</Keys.HardKey> / <Keys.HardKey>Next Step</Keys.HardKey> buttons snap through cues without using the programmed fade times in cue lists or chases. See [Running a cue list](../cue-lists/cue-list-playback.md/#running-a-cue-list). Sets the Chase Snap (if a chase is connected) or Cue List Snap (if a cue list is connected) user setting in [General user settings](../system-settings/user-settings.md/#chase-snap).

 --- 
## <Keys.HardKey>Special</Keys.HardKey> 
 Selects the Special attribute group so the wheels control fixture-specific functions like modes and macros. Also used for creating masks. See [Changing Attributes using the Wheels](../controlling-fixtures/changing-fixture-attributes.md/#changing-attributes-using-the-wheels).

 --- 
## <Keys.HardKey>Stop</Keys.HardKey> 
 Stops/freezes the current cue fades. See [Running a cue list](../cue-lists/cue-list-playback.md/#running-a-cue-list). If used when already stopped, goes back a cue.

 --- 
## <Keys.HardKey>Through</Keys.HardKey> 
 Used when selecting ranges of items. See [Selecting fixtures and dimmers by number](../controlling-fixtures.md/#selecting-fixtures-and-dimmers-by-number-channel).

 Example: <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>not</Keys.HardKey> 3 selects fixtures 1, 2, 4, 5

 Also when entering time or timecode values the <Keys.HardKey>And</Keys.HardKey> and <Keys.HardKey>Through</Keys.HardKey> buttons move the cursor between hours/minutes/seconds/frames.

 --- 
## <Keys.HardKey>Time</Keys.HardKey> 
 Show the Times menu which is used to set cue timing. See [Fade times](../cues/cue-timing.md/#fade-times-and-fixture-overlap).
 Also used to set fade times directly. See [Times](../titan-reference.md/#times).

 Buttons | Action
 --------|--------
 <Keys.HardKey>Time</Keys.HardKey> ``n`` | Set ``n`` second fade into programmer, will record with the next cue to be recorded
 <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> ``n`` | Set ``n`` second fade into programmer for all attributes of selected fixtures


 --- 
## <Keys.HardKey>Undo</Keys.HardKey> 
 Undo the last action (an Undo list is shown in the system prompt). See [Undo/Redo](../titan-basics/other-parts-of-the-touch-screen.md/#undoredo).

 Buttons | Action
 --------|--------
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Undo</Keys.HardKey> | Redo (revert the last Undo change)

 --- 
## <Keys.HardKey>Unfold</Keys.HardKey> 
 followed by playback **Select**, splits out a cue list or chase onto the playback faders so each cue/step can be edited individually. See [Editing a chase using unfold](../chases/editing-a-chase.md/#editing-a-chase-using-unfold).

 --- 
## <Keys.HardKey>Update</Keys.HardKey> 
 Updates the current cue by merging the contents of the programmer. See [Updating Stored Values and Palettes used in a Cue](../cues/editing-cues.md/#updating-stored-values-and-palettes-used-in-a-cue).

 --- 
## <Keys.HardKey>View</Keys.HardKey> 
(D9, Titan Go, Pearl Expert, Tiger Touch 1) \
 Followed by **Select** button to show details about item, or double press to open workspace window. See [Palettes](../palettes/editing-palettes.md/#viewing-and-editing-the-content-of-palettes) and [Cues](../cues/editing-cues.md/#playback-and-cue-view), or [Opening Workspace Windows](../titan-basics.md/workspace-windows/#opening-and-positioning-workspace-windows).

 Also gives shortcuts to opening workspace windows and editing workspaces:

 Buttons | Action
 --------|--------
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Beam</Keys.HardKey> | Open Beam palettes view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Colour</Keys.HardKey> | Open Colour palettes view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Connect</Keys.HardKey> | Open Playback view for connected playback
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Copy</Keys.HardKey> | Copy workspace select button
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Delete</Keys.HardKey> | Delete workspace select button
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> | Open Fixtures window
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>FX</Keys.HardKey> | Open Shape palettes view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> | Open Beam palettes view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Group</Keys.HardKey> | Open Groups window
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Intensity</Keys.HardKey> | Open Intensity View
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Macros</Keys.HardKey> | Open Macros window
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Move</Keys.HardKey> | Move workspace select button
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Off</Keys.HardKey> | Open Active playbacks window
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey> | Open Attribute editor
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Patch</Keys.HardKey> | Open Patch view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Playback</Keys.HardKey> | Open Playbacks view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> | Open Position Palettes view
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey> | Open Active playbacks window
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Shape</Keys.HardKey> | Open Shape palettes view
<Keys.HardKey>View</Keys.HardKey> ``n`` <Keys.HardKey>Enter</Keys.HardKey> | Recall workspace with ID number ``n``

 --- 
## <Keys.HardKey>Visualiser</Keys.HardKey> 
 Opens the Visualiser window. See [Capture visualiser](../capture-visualiser.md/).

 --- 
## <Keys.HardKey>Wheel @</Keys.HardKey> 
(The @ buttons next to the wheels) - Open the Wheel @ menu which lets you control the attribute which is currently allocated to the wheel.

 --- 
## <Keys.HardKey>XYZ</Keys.HardKey> 
 (D9 only - button to right of wheels) Sets the wheels to XYZ position mode for moving fixtures in Visualiser or Layout Editor.