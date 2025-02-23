---
id: other-parts-of-the-touch-screen
title: Other Parts of the Touch Screen
sidebar_label: Other Parts of the Touch Screen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## The Menu/Softkeys

On all consoles except Diamond 9, the right hand side of the main touch screen is used for the main menu
display. These are known as the "Softkeys" and are lettered A-G. On the Diamond 9
there is a separate Menu touchscreen for the system prompt and the menu
softkeys to the left of the right-hand screen. *(Pearl Expert also has a separate display for the menu.)*

![Titan Touch Screen User Interface](/docs/images/Titan-Touch-Screen-User-Interface.png)

If there are more functions than will fit on one screen, <Keys.SoftKey>Previous</Keys.SoftKey>
and <Keys.SoftKey>Next</Keys.SoftKey> buttons are provided to page through the functions. You can
either touch the key on screen, or most consoles provide real buttons
next to the screen.

The vertical bar to the left of the softkeys shows you which menu you
are currently in. You can 'latch' the menu to keep the current command
active (so that you don't have to keep reselecting it) by pressing the <Keys.HardKey>Menu Latch</Keys.HardKey> button (<Keys.HardKey>ML Menu</Keys.HardKey> on Pearl Expert & Tiger Touch 1). The menu
bar turns red when latched. This is useful for example when copying or moving
playbacks to rearrange the console.

The area to the top left of the menu buttons with an Avolites logo in
the background is the system prompt area which shows instructions to the
user and information from the console. The last commands you used are
also shown here, for use with the Undo function. On the Diamond 9 this is 
displayed on the Menu screen above the menu softkeys.

![Prompt Area](/docs/images/System-Area.png)

On the screen above the control wheels, the current function of the
wheels is shown on a simulated roller. If fixture attributes are being
set, this shows the possible settings which are available on the
fixtures. Above the roller image a legend shows which attributes are
being controlled by each wheel and the centre of the roller shows the
current attribute. Touch the upper or lower segment of the roller to set
the attribute to maximum/minimum.

If a chase is being controlled, information about the chase is shown
here.

![Wheels](/docs/images/Wheels-2.png)

Next to the roller display,
the screen shows which attribute group (IPCGBESFX or Intensity,
Position, Colour, Gobo, Beam, Effect, Special, FX) is selected (grey
box) and which are currently modified (blue circle). 

The appearance of the softkeys varies to indicate the type of actions
available:

  |   Appearance   | Meaning          |
  |     ---   | ---          |
  |   ![Softkey - Action](/docs/images/Softkey-Action.png)   |   **Action button** - console will carry out the action shown      |
  |   ![Softkey - Option](/docs/images/Softkey-Option.png)   |   **Option button** - cycles through a range of options     |
  |   ![Softkey - New Menu](/docs/images/Softkey-New-Menu.png)   |   **New menu button** - jumps to a new menu     |
  |   ![Softkey - Text Entry](/docs/images/Softkey-Text-Entry.png)   |   **Text entry button** - press and enter text using the touch keyboard   |

## The Toolbar

On all consoles except Diamond 9, Diamond 7 and Sapphire Touch, across the very top of the screen
is the toolbar.

![Tools Menu](/docs/images/Tools-Menu.png)

On Sapphire Touch the toolbars are shown vertically where the 2 screens
meet in the middle.

![Sapphire Tools Menu](/docs/images/Sapphire-Tools-Menu.png)

On Diamond 9 / Diamond 7 the toolbar is replaced by a small <Keys.ContextKey>Tools</Keys.ContextKey> button. On D9 this is at the top
left of the right hand screen. On D7-215 (2 screens) it is at the top left of the left hand screen, on D7-330 (3 screens) it is at the 
top left of the centre screen.
There is also a <Keys.HardKey>Tools</Keys.HardKey> button on the
pull-out keyboard.

![D9 Tools button](/docs/images/Tools-Button-D9.png)

If you click/touch on 'Tools', you will get a menu giving you access
to some configuration functions (these options may change slightly
depending on the console).

**About** gives you information about the software version.

**Help** shows you the online manual.

**Control Panel** opens a submenu allowing changes to monitor settings
and to the USB expert console which links the front panel controls to
the system. The 'More...' option opens Windows Control Panel allowing
you to change the operating system configuration.

**Touch Screen Setup** (in Control Panel) opens the setup utility which
allows you to align touch positions on the screen.

**USB Expert Console** (in Control Panel) sets up the connection between
the front panel controls and the software. If you are having problems
this can be used to troubleshoot.

**Folders** opens the file explorer. You might need this when backing up
show files or when updating the operating software.

**Switch Task** allows you to show other programs (may be needed when
upgrading software) on the touch screen or move them between screens.
Touch the Switch Screen icon to swap the program between different
screens. Touch the Centre icon to centre the window on the screen. Touch
Close to close the program. The appearance of this window varies
depending on the console.

![Switch Task](/docs/images/Switch-Task.png)

**Switch Software** allows you to run different versions of Titan
software (which you will need to install yourself, different versions
are not installed by default). This can be useful if you need to load
shows from older versions.

**Additional Programs** allows you to run some diagnostic programs which
might help Avolites Support find problems you're having.

**Restart** and **Shutdown Software** restarts and closes the Titan
software. You would normally only need to use these when upgrading the
software.

The toolbar also has a keyboard button allowing you to pop up the touch
keyboard. On Diamond 9 there is a button <Keys.HardKey>Keyboard</Keys.HardKey> for this.

> Toolbars are not provided on Titan PC Suite (Titan Go / Titan Simulator) as all these functions can be carried out using standard Windows operations.

## Visualiser

![Visualiser](/docs/images/Capture-Visualiser-Workspace-Window.png)

Capture visualiser is integrated into Titan from v10. The [Capture Visualiser chapter](../capture-visualiser.md) deals
with how it works.

The visualiser gives you a realistic view of the stage, allowing you to
pre-program or make changes to your show at home or in your hotel. It
can also be used in Blind mode for programming during a show.

## Undo/Redo

A short list of recent actions is shown in the prompt area to the left
of the menu.

![System Area](/docs/images/System-Area.png)

You can undo and redo recent actions (including fixture and cue changes)
by touching the prompt area. This will automatically open the Undo
History window which shows a more detailed list of actions you can undo.

The current action is shown in red in the Undo window and in bold in the
prompt.

![Undo Window](/docs/images/Undo-Window.png)

You can touch this window to undo all actions up to the one you touch.
Once actions have been undone they are shown greyed out, and can be
redone by touching them.

You can also use the <Keys.HardKey>Undo</Keys.HardKey> and <Keys.HardKey>Redo</Keys.HardKey> buttons (not on all consoles)
to step through the list.

Some actions cannot be undone which is indicated with the "not allowed"
symbol as shown below.

![Undo Cant Undo](/docs/images/Undo-Cant-Undo.png)

If you are in multi-user mode, the Undo History can show a column for
each user with undo points for that user - open the Context menu and
select <Keys.ContextKey>Show All Users and Consoles</Keys.ContextKey>. The default setting is <Keys.ContextKey>Show
Only Current User</Keys.ContextKey>.