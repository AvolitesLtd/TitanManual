---
id: set-list-window
title: Set List Window
sidebar_label: Set List Window
original_id: set-list-window
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

The Set List window is a handy way of linking playback pages to
songs/events in your show which you can then easily step through. You
can also make notes, handy for avoiding bits of paper lying around. You
can have multiple set lists in a show.

<Video videoId="VX5acUU-99M" title="Set Lists" />

To open the Set List window, double press <Keys.HardKey>View/Open</Keys.HardKey> then press <Keys.SoftKey>Set List</Keys.SoftKey> from the window select buttons which pop up. Or from the top level menu press <Keys.SoftKey>Open Workspace Window</Keys.SoftKey> then <Keys.SoftKey>Set
List</Keys.SoftKey>.

The Set List feature works best if you arrange your playbacks to have a
page of playbacks for each song in the show.

![Set List Window](/docs/images/Set-List-Window.png)

A set list is made up of tracks. When a track is added it automatically
links to the current page. Pressing the Play button <Keys.SoftKey>></Keys.SoftKey> to the left of the track name
will automatically select the correct playback page (except on Pearl
Expert, because the rollers cannot be moved automatically).

Creating a Set List
-------------------

To create a Set List, click the <Keys.ContextKey>+</Keys.ContextKey> button *in the top right corner* of
the window. You can choose <strong>Empty</strong>, <strong>Pages</strong>, and <strong>Build</strong>: 
-   Pages will automatically create a set list using the legends of your 
    existing playback pages, one page per track. 
-   Build allows you to select the pages in the order you want them. 
-   Empty: your start with an empty list and can manually add tracks 
    using the <Keys.ContextKey>+</Keys.ContextKey> button *below the track list*.

Configuring Tracks
------------------

Enter notes by selecting a track and clicking the text entry button,
bottom right, or the Edit Note context menu button.

-   You can temporarily remove a track from the set list using the Park
    Track context menu button.

-   If you prefer to operate by using the <Keys.HardKey>Page+</Keys.HardKey>/<Keys.HardKey>Page-</Keys.HardKey> buttons, you can
    change the function of these buttons to step through the tracks in
    the set list window, using the Page Mode context menu button. When
    Page Mode is set to Set List, the <Keys.HardKey>Page+</Keys.HardKey>/<Keys.HardKey>Page-</Keys.HardKey> buttons are reassigned
    to step through tracks in the Set List, and the playback pages will
    automatically change as programmed in the Set List. Set Page Mode to
    Normal to restore normal operation. (Not available on Pearl Expert).

-   You can copy, move and delete tracks using the appropriate function
    buttons on the console.

-   You can change the legend of the Set List or of individual tracks
    using the <Keys.SoftKey>Set Legend</Keys.SoftKey> option.

Track Workspace and Macro links
-------------------------------

You can trigger macros and workspace shortcuts from tracks using the
<Keys.SoftKey>Workspace</Keys.SoftKey> and <Keys.SoftKey>Macro</Keys.SoftKey> buttons in the bottom right hand corner of
the window.

To add a workspace link to the current track, click <Keys.SoftKey>Workspace</Keys.SoftKey>, then
either click a workspace shortcut or press the <Keys.SoftKey>Record Workspace</Keys.SoftKey>
softkey to save the current workspace.

Macros can be added either to the whole Set List or just to the current
track. Set List macros will fire every time a new track is selected,
this is useful for setting the console to a preset state at the start of
every song. Track macros will just fire for that individual track.

To view or edit the workspace links and macros, click the Workspace &
Macros tab on the right hand half of the window. The window will then
show a button for each programmed link.

![Workspace & Macros](/docs/images/Workspace-Macros.png)

You can fire the macro or Workspace shortcut by clicking on the link
button. Delete the button by pressing <Keys.HardKey>Delete</Keys.HardKey> then clicking the button,
then press <Keys.SoftKey>Remove</Keys.SoftKey>.

Playback Control Macros
-----------------------

[Key Macros](../titan-basics/front-panel-buttons.md#key-macro-buttons)
allow you to record a sequence of actions on the console then
play them back (either instantaneously or as a timed sequence). This can
be very useful for reducing a complex sequence of actions to a single
button push.

Some special preset macros are available to help with controlling
playbacks when used with a Set List.

Macro | Action
------|-------
<Keys.SoftKey>Fire First Playback</Keys.SoftKey> | Fires the first playback on the current page.
<Keys.SoftKey>Fire First Playback Page 1</Keys.SoftKey> | Fires the first playback on page 1, regardless of current page.
<Keys.SoftKey>Fire Playback 1</Keys.SoftKey> | Fires the playback with user number 1.
<Keys.SoftKey>Kill First Playback</Keys.SoftKey> | Kills the first playback on the current page.
<Keys.SoftKey>Kill First Playback Page 1</Keys.SoftKey> | Kills the first playback on page 1, regardless of current page.
<Keys.SoftKey>Kill Playback 1</Keys.SoftKey> | Kills the playback with user number 1.
<Keys.SoftKey>Release First Playback</Keys.SoftKey> | Releases the first playback on the currently selected page.
<Keys.SoftKey>Release First Playback Page 1</Keys.SoftKey> | Releases the first playback on page 1, regardless of current page.
<Keys.SoftKey>Release Playback 1</Keys.SoftKey> | Releases the playback with user number 1.
<Keys.SoftKey>Release Me</Keys.SoftKey> | Releases the associated playback (cue list).
<Keys.SoftKey>Goto My Cue 1</Keys.SoftKey> | Go to cue 1 of the associated cue list.
