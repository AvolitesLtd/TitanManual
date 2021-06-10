---
id: playback-groups
title: Playback Groups
sidebar_label: Playback Groups
original_id: playback-groups
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Playbacks can be linked in groups. Playback groups are useful if you want 
to have a set of mutually exclusive playbacks where only one in the group 
is active at any one time – if you fire a second playback from the group, 
the other playbacks in the group will be automatically killed.

On a console with motorised faders, the faders for the killed playbacks will 
return to zero. Otherwise the LED in the playback’s select button will go 
out to show that the playback is now inactive.

## Creating a Playback Group

First open the Playback Groups workspace by double pressing <Keys.HardKey>View/Open</Keys.HardKey> then press <Keys.SoftKey>Playback Groups</Keys.SoftKey>
from the window select buttons.

![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace.png)

1.	Press the <Keys.ContextKey>+</Keys.ContextKey> button. This creates a new empty playback group in the left pane.

2.	Press the new group button (if this is your first group it will be <Keys.SoftKey>Playback Group 1</Keys.SoftKey>)

3.	Press the <Keys.ContextKey>Pencil</Keys.ContextKey> button at the bottom right of the window to place the group into edit mode.

4.	Select the playbacks to include in the group by pressing their select buttons once. 
The playbacks will appear in the workspace as you select them.

5.	Press <Keys.HardKey>Exit</Keys.HardKey> when you have finished adding playbacks.

![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace-2.png)

- The playback selection toggles while in edit mode so you can remove a playback by 
  pressing its select button again. You can also remove a playback by pressing its button 
  in the groups window while in edit mode.

- You can also create a playback group using the <Keys.HardKey>Group</Keys.HardKey> button – press <Keys.HardKey>Group</Keys.HardKey>, 
  <Keys.SoftKey>Playback Groups</Keys.SoftKey>, <Keys.SoftKey>Record playback group</Keys.SoftKey>. Then select the required playbacks 
  which will highlight, then press <Keys.SoftKey>Store</Keys.SoftKey>.

- You can set the legend or halo for a playback group by pressing the <Keys.SoftKey>Set Legend</Keys.SoftKey> 
  softkey then the group button in the left pane of the workspace.

- You can fire playbacks (when not in edit mode) by pressing the playback buttons in the Playback Groups window.

> When a playback is part of a group, an asterisk \* is shown at the end of the 
playback legend to help you remember which playbacks are in groups.

## Editing Which Playbacks are in a Playback Group

From the Playback Groups workspace, select the group to be edited on the left then 
press the <Keys.ContextKey>Pencil</Keys.ContextKey> button bottom right to edit it.

The playbacks in the group highlight and you can toggle them in and out of the group 
using their select buttons.

There are also softkeys to set the User Number and Legend for the group.

- To delete the entire playback group, press <Keys.HardKey>Delete</Keys.HardKey> then the group button in the left 
hand pane of the workspace. To confirm click the group button again, or click <Keys.SoftKey>Confirm</Keys.SoftKey>
or press <Keys.HardKey>Enter</Keys.HardKey>.

## Playback Group Options

For each group you can set how playbacks in the group will behave. From the Playback 
Groups workspace, select the group to be edited on the left then press the Options tab 
at the bottom of the workspace.

![Playback groups options workspace](/docs/images/Playback-groups-options-workspace.png)

- <strong>Mutually Exclusive</strong> switches the exclusive mode on and off. This allows you to temporarily disable the exclusive action of a group without deleting the group.
- <strong>Kill Point</strong> sets when other playbacks in the group will be killed when you fire a new playback:  
  <Keys.SoftKey>Fired</Keys.SoftKey> - as soon as the playback passes the trigger point  
  <Keys.SoftKey>Fade Completed</Keys.SoftKey> – when the new playback has completed its fade in time.

- <strong>Kill Action</strong> sets whether the playbacks being killed will use Release rules or not.  
  <Keys.SoftKey>Follow Playback</Keys.SoftKey> - each killed playback uses its own settings for release.  
  <Keys.SoftKey>Kill</Keys.SoftKey> - playbacks are always killed without any release.  
  <Keys.SoftKey>Release</Keys.SoftKey> – playbacks are always released using the settings in the mask and time below  
  <Keys.SoftKey>Release HTP</Keys.SoftKey> – HTP channels are released but LTP channels are killed.  
  
- <strong>Release Mask</strong>, <strong>Release Time</strong> allow you to override the release settings for killed playbacks. 
  If set to the default of <Keys.SoftKey>Playback</Keys.SoftKey> then the playback’s own settings are used. 

## Playback Group Workspace Display Options

Using the workspace options menu (<Keys.ContextKey>Cog</Keys.ContextKey> button at the top of the window) you can set three 
different display modes for the Playback Groups workspace:

<Keys.SoftKey>View Mode All</Keys.SoftKey> – 2 panes with group buttons on the left and all the playbacks in each group shown on the right

![Playback groups display mode 1](/docs/images/Playback-groups-display-mode-1.png)
 
<Keys.SoftKey>View Mode Single</Keys.SoftKey> – 2 panes with group buttons on the left, but only the playbacks in the currently selected group are shown on the right. Handy if you have groups with a lot of playbacks in each one.

![Playback groups display mode 2](/docs/images/Playback-groups-display-mode-2.png)
 
<Keys.SoftKey>View Mode Playbacks Only</Keys.SoftKey> – Single pane with just the playbacks for each group shown.

![Playback groups display mode 3](/docs/images/Playback-groups-display-mode-3.png)