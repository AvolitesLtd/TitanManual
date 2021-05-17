---
id: titan-commands
title: Titan Commands Quick Reference
sidebar_label: Titan Commands Quick Reference
original_id: titan-commands
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Please note that some commands may require <Keys.HardKey>Enter</Keys.HardKey> to complete the
command. In this reference <Keys.HardKey>Enter</Keys.HardKey> has always been omitted for
clarity.

<Keys.SoftKey> Softkey </Keys.SoftKey> formatting means a softkey on the console.

<Keys.HardKey> Button </Keys.HardKey> formatting means a physical labelled button

&#123; &#125; means a handle button, e.g. &#123;Cue&#125; means the blue button on a cue
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

Fixtures
--------

<strong><Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10</strong>


Select fixtures 1 through to 10.

<strong><Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>And</Keys.HardKey> 25</strong>


Select fixtures 1 to 10 and 20, 25

<strong><Keys.HardKey>Fixture</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey></strong>


Put fixture 5 at full intensity.

<strong><Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 60 <Keys.HardKey>@</Keys.HardKey> 75</strong>


Put fixtures 10 to 60 at 75% intensity.

<strong><Keys.HardKey>Group</Keys.HardKey> 2 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey></strong>


Put group 2 at full intensity.

<strong><Keys.HardKey>Group</Keys.HardKey> 2 <Keys.HardKey>@</Keys.HardKey> 75</strong>


Put group 2 at full intensity.

### Celled Fixtures (Sub Fixtures)

<strong><Keys.HardKey>.</Keys.HardKey> m</strong>


Select cell m in the selected fixtures.

<strong><Keys.HardKey>.</Keys.HardKey></strong>


Select all the cells in the selected fixtures.

<strong>n <Keys.HardKey>.</Keys.HardKey></strong>


all sub-fixtures of fixture n

<strong>1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>.</Keys.HardKey> 2</strong>


Select the second cell of fixtures 1 to 5

<strong><Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> j</strong>


<strong><Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> j</strong>


Select cells 1 to j of all selected fixtures

<Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey>


Cells m-\>last of all selected fixtures

<strong><Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey>j</strong>


<strong><Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey> i</strong>


sub-fixtures m-\>j or all selected fixtures

<strong>n <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey></strong>


all sub-fixtures of fixtures n-\>i

<strong>n <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>j</strong>


sub-fixture j of fixtures n-\>i

<strong>n <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey>j</strong>


sub-fixture 1-\>j of fixture n

<strong>n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey></strong>


all sub-fixtures of fixture n-\>last consecutive of type n

<strong>n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> i</strong>


sub-fixtures 1-\>i of fixture n

<strong>n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>j</strong>


sub-fixtures 1-\>j of fixtures n-\>i

Select If
---------

<strong><Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey><Keys.HardKey>@</Keys.HardKey></strong>


Select all fixtures above 0% intensity.

<strong><Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> 50</strong>


Select all fixtures above 50% intensity

<strong><Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> 50 <Keys.HardKey>Through</Keys.HardKey></strong>


Select all fixtures below 50% intensity

Record
------

<strong><Keys.HardKey>Record</Keys.HardKey> &#123;Cue list&#125; &#123;Cue list&#125;</strong>
Append cue at the end of the list.

<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey></strong>


Merge the live cue  of the connected cue list with the programmer.

<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 90.1</strong>


Merge cue 90.1 of the connected cue list with the programmer. If this cue doesn't exist it will be created.

<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20</strong>


Record/merge programmer contents into cues 1 to 10 and 20 (select  copy/merge/replace from softkeys or double press <Keys.HardKey>Enter</Keys.HardKey> to merge.

<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey></strong>


Merge only position from the programmer with the live cue.

<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey></strong>


Merge only position from the programmer with the live cue.

Copy, Move in cue list
----------------------

<strong><Keys.HardKey>Copy</Keys.HardKey> &#123;Cue list&#125; n <Keys.HardKey>Enter</Keys.HardKey></strong>


Copy cue n and append at the end of the cue list.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
n**


**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> n <Keys.HardKey>Enter</Keys.HardKey>**


Copy or move cues 1,2,3,4,6,7,8,9,10,20 from &#123;Cue list&#125; and insert after cue n.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
<Keys.HardKey>@</Keys.HardKey>**


**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey>**


Copy or move cues 1,2,3,4,6,7,8,9,10,20 and insert at the end of the cue
list.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
&#123;target playback&#125; n**


**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cue list&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> &#123;target playback&#125; n <Keys.HardKey>Enter</Keys.HardKey>**


Copy or move cues 1,2,3,4,6,7,8,9,10,20 and insert at cue n in the
target playback.

Delete
------

<strong><Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n</strong>


Delete cue n from the connected cue list.

Include
-------

<strong><Keys.HardKey>Include</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n</strong>


Include cue n into the programmer from the connected cue list.

Times
-----

<strong><Keys.HardKey>Time</Keys.HardKey> 5</strong>


5 sec fade in

<strong><Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Time</Keys.HardKey> 5</strong>


5 sec fade in on connected playback\'s cue 3

<strong><Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> 5</strong>


5 sec fade in for all attributes of selected fixtures

<strong><Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> 5</strong>


5 sec fade in for gobo attribute group of selected fixtures

<strong><Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>B@</Keys.HardKey> 5</strong>


5 sec fade in for attribute connected to wheel B on selected fixtures

<strong><Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> 3</strong>


5 sec fade in, 3 sec delay

<strong><Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 2</strong>


5 sec fade in, 2 sec fade out

<strong><Keys.HardKey>Time</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10</strong>


times spread across fixtures according to selection order

Cue Lists
---------

<strong><Keys.HardKey>Cue</Keys.HardKey> n <Keys.HardKey>Go</Keys.HardKey></strong>


Go to cue n (in connected cue list)

<strong>5 <Keys.HardKey>Go</Keys.HardKey></strong>


Run the next cue with 5 sec fade instead of the programmed cue time

<strong><Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Enter</Keys.HardKey> 5 <Keys.HardKey>Go</Keys.HardKey></strong>

Jump to cue 3 with 5 sec fade instead of the programmed cue time
