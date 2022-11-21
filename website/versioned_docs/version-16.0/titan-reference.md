---
id: titan-reference
title: Titan Commands Quick Reference
sidebar_label: Titan Commands Quick Reference
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Please note that some commands may require <Keys.HardKey>Enter</Keys.HardKey> to complete the
command. In this reference <Keys.HardKey>Enter</Keys.HardKey> has always been omitted for
clarity.

<Keys.SoftKey> Softkey </Keys.SoftKey> formatting means a softkey on the console.

<Keys.HardKey> Button </Keys.HardKey> formatting means a physical labelled button

&#123; &#125; means a handle button, e.g. &#123;Cue&#125; means the **Select** button on a cue
playback handle

Numbers are typed on the numeric keypad

The available buttons may differ depending on which console you are
using. If your console doesn't have the button, a softkey is also
provided with the same function.

Some of the buttons in this guide have changed names and so here is a
list of the old button names and their new equivalents.


  Old Name |  New Name
  ---------|----------
  Connect  |  Cue
  SET      |  TIME

## Fixtures

**<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10**

Select fixtures 1 through to 10.

**<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>And</Keys.HardKey> 25**

Select fixtures 1 to 10 and 20, 25

**<Keys.HardKey>Fixture</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>**

Put fixture 5 at full intensity.

**<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 60 <Keys.HardKey>@</Keys.HardKey> 75**

Put fixtures 10 to 60 at 75% intensity.

**<Keys.HardKey>Group</Keys.HardKey> 2 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>**

Put group 2 at full intensity.

**<Keys.HardKey>Group</Keys.HardKey> 2 <Keys.HardKey>@</Keys.HardKey> 75**

Put group 2 at full intensity.

### Celled Fixtures (Sub Fixtures)

**<Keys.HardKey>.</Keys.HardKey> m**

Select cell m in the selected fixtures.

**<Keys.HardKey>.</Keys.HardKey>**

Select all the cells in the selected fixtures.

**n <Keys.HardKey>.</Keys.HardKey>**

all sub-fixtures of fixture n

**1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>.</Keys.HardKey> 2**

Select the second cell of fixtures 1 to 5

**<Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> j**

**<Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> j**

Select cells 1 to j of all selected fixtures

<Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey>

Cells m-\>last of all selected fixtures

**<Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey>j**

**<Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey> i**

sub-fixtures m-\>j or all selected fixtures

**n <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>**

all sub-fixtures of fixtures n-\>i

**n <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>j**

sub-fixture j of fixtures n-\>i

**n <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey>j**

sub-fixture 1-\>j of fixture n

**n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey>**

all sub-fixtures of fixture n-\>last consecutive of type n

**n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> i**

sub-fixtures 1-\>i of fixture n

**n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>j**

sub-fixtures 1-\>j of fixtures n-\>i

## Select If

**<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey><Keys.HardKey>@</Keys.HardKey>**

Select all fixtures above 0% intensity.

**<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> 50**

Select all fixtures above 50% intensity

**<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> 50 <Keys.HardKey>Through</Keys.HardKey>**

Select all fixtures below 50% intensity

## Record

**<Keys.HardKey>Record</Keys.HardKey> &#123;Cue list&#125; &#123;Cue list&#125;**
Append cue at the end of the list.

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey>**

Merge the live cue  of the connected cue list with the programmer.

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 90.1**

Merge cue 90.1 of the connected cue list with the programmer. If this cue doesn't exist it will be created.

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20**

Record/merge programmer contents into cues 1 to 10 and 20 (select  copy/merge/replace from softkeys or double press <Keys.HardKey>Enter</Keys.HardKey> to merge.)

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey>**

Merge only position from the programmer with the live cue.

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey>**

Merge only position from the programmer with the live cue.

- See [Updating Cues](../cue-lists/theatre-programming.md#updating-cues) in the Theatre Programming section for more information about editing Cue Lists and recording/merging multiple cues in Cue Lists.

## Copy, Move in cue list

**<Keys.HardKey>Copy</Keys.HardKey> &#123;Cue list&#125; n <Keys.HardKey>Enter</Keys.HardKey>**

Copy cue n and append at the end of the cue list.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
n**

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>Enter</Keys.HardKey> n <Keys.HardKey>Enter</Keys.HardKey>**

Copy or move cues 1,2,3,4,6,7,8,9,10,20 from &#123;Cue list&#125; and insert after cue n.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>**

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey>**

Copy or move cues 1,2,3,4,6,7,8,9,10,20 and insert at the end of the cue
list.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
&#123;target playback&#125; n**

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>Enter</Keys.HardKey> &#123;target playback&#125; n <Keys.HardKey>Enter</Keys.HardKey>**

Copy or move cues 1,2,3,4,6,7,8,9,10,20 and insert at cue n in the
target playback.

## Delete

**<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n**

Delete cue n from the connected cue list.

## Include

**<Keys.HardKey>Include</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n**

Include cue n into the programmer from the connected cue list.

## Times

**<Keys.HardKey>Time</Keys.HardKey> 5**

5 sec fade in

**<Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Time</Keys.HardKey> 5**

5 sec fade in on connected playback\'s cue 3

**<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> 5**

5 sec fade in for all attributes of selected fixtures

**<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> 5**

5 sec fade in for gobo attribute group of selected fixtures

**<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>B@</Keys.HardKey> 5**

5 sec fade in for attribute connected to wheel B on selected fixtures

**<Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> 3**

5 sec fade in, 3 sec delay

**<Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 2**

5 sec fade in, 2 sec fade out

**<Keys.HardKey>Time</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10**

times spread across fixtures according to selection order

## Cue Lists

**<Keys.HardKey>Cue</Keys.HardKey> n <Keys.HardKey>Go</Keys.HardKey>**

Go to cue n (in connected cue list)

**5 <Keys.HardKey>Go</Keys.HardKey>**

Run the next cue with 5 sec fade instead of the programmed cue time

**<Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Enter</Keys.HardKey> 5 <Keys.HardKey>Go</Keys.HardKey>**

Jump to cue 3 with 5 sec fade instead of the programmed cue time
