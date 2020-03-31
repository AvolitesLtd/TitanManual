---
id: version-13.0-playback-groups
title: Playback Groups
sidebar_label: Playback Groups
original_id: playback-groups
---

Playbacks can be linked in groups. Playback groups are useful if you want 
to have a set of mutually exclusive playbacks where only one in the group 
is active at any one time – if you fire a second playback from the group, 
the other playbacks in the group will be automatically killed.

On a console with motorised faders, the faders for the killed playbacks will 
return to zero. Otherwise the LED in the playback’s select button will go 
out to show that the playback is now inactive.

Creating a playback group
-------------------------

First open the Playback Groups workspace by pressing \[Open Workspace Window\] 
then use the \[Next\] button (or text search box) to select \[Playback Groups\].

![Empty playback groups workspace](/docs/images/playbackgroups1.png)

1.	Press the + button. This creates a new empty playback group in the left pane.

2.	Press the new group button (if this is your first group it will be \[Playback Group 1\])

3.	Press the Pencil/edit button at the bottom right of the window to place the group into edit mode.

4.	Select the playbacks to include in the group by pressing their select buttons once. 
The playbacks will appear in the workspace as you select them.

5.	Press \<Exit\> when you have finished adding playbacks.

![Empty playback groups workspace](/docs/images/playbackgroups2.png)

- The playback selection toggles while in edit mode so you can remove a playback by 
  pressing its select button again. You can also remove a playback by pressing its button 
  in the groups window while in edit mode.

- You can also create a playback group using the \<Group\> button – press \<Group\>, 
  \[Playback Groups\], \[Record playback group\]. Then select the required playbacks 
  which will highlight, then press \[Store\].

- You can set the legend or halo for a playback group by pressing the \[Set Legend\] 
  softkey then the group button in the left pane of the workspace.

- You can fire playbacks (when not in edit mode) by pressing the playback buttons in the Playback Groups window.

> When a playback is part of a group, an asterisk \* is shown at the end of the 
playback legend to help you remember which playbacks are in groups.

Editing which playbacks are in a playback group
----------------------------------------------

From the Playback Groups workspace, select the group to be edited on the left then 
press the pencil/edit button bottom right to edit it.

The playbacks in the group highlight and you can toggle them in and out of the group 
using their select buttons.

There are also softkeys to set the User Number and Legend for the group.

- To delete the entire playback group, press \<Delete\> then the group button in the left 
hand pane of the workspace.

Playback Group options
----------------------

For each group you can set how playbacks in the group will behave. From the Playback 
Groups workspace, select the group to be edited on the left then press the Options tab 
at the bottom of the workspace.

![Playback groups options workspace](/docs/images/playbackgroupsoptions.png)

- **Mutually Exclusive** switches the exclusive mode on and off. This allows you to temporarily disable the exclusive action of a group without deleting the group.
- **Kill Point** sets when other playbacks in the group will be killed when you fire a new playback:  
  \[Fired\] - as soon as the playback passes the trigger point  
  \[Fade Completed\] – when the new playback has completed its fade in time.

- **Kill Action** sets whether the playbacks being killed will use Release rules or not.  
  \[Follow Playback\] - each killed playback uses its own settings for release.  
  \[Kill\] - playbacks are always killed without any release.  
  \[Release\] – playbacks are always released using the settings in the mask and time below  
  \[Release HTP\] – HTP channels are released but LTP channels are killed.  
  
- **Release Mask**, **Release Time** allow you to override the release settings for killed playbacks. 
  If set to the default of \[Playback\] then the playback’s own settings are used. 

Playback Group workspace display options
----------------------------------------

Using the workspace options menu (cog button at the top of the window) you can set three 
different display modes for the Playback Groups workspace:

\[View Mode All\] – 2 panes with group buttons on the left and all the playbacks in each group shown on the right

![Playback groups display mode 1](/docs/images/playbackgroupsdisplay1.png)
 
\[View Mode Single\] – 2 panes with group buttons on the left, but only the playbacks in the currently selected group are shown on the right. Handy if you have groups with a lot of playbacks in each one.

![Playback groups display mode 2](/docs/images/playbackgroupsdisplay2.png)
 
\[View Mode Playbacks Only\] – Single pane with just the playbacks for each group shown.

![Playback groups display mode 3](/docs/images/playbackgroupsdisplay3.png)

