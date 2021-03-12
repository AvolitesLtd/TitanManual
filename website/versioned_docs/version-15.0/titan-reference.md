---
id: version-15.0-titan-reference
title: Titan Commands Quick Reference
sidebar_label: Titan Commands Quick Reference
original_id: titan-reference
---

Please note that some commands may require \<Enter\> to complete the
command. In this reference \<Enter\> has always been omitted for
clarity.

\[ Softkey \] formatting means a softkey on the console.

\< Button \> formatting means a physical labelled button

{ } means a handle button, e.g. {Cue} means the **Select** button on a cue
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

**\<Fixture\> 1 \<Through\> 10**\
Select fixtures 1 through to 10.

**\<Fixture\> 1 \<Through\> 10 \<And\> 20 \<And\> 25**\
Select fixtures 1 to 10 and 20, 25

**\<Fixture\> 5 \<@\> \<@\>**\
Put fixture 5 at full intensity.

**\<Fixture\> 1 \<Through\> 60 \<@\> 75**\
Put fixtures 10 to 60 at 75% intensity.

**\<Group\> 2 \<@\> \<@\>**\
Put group 2 at full intensity.

**\<Group\> 2 \<@\> 75**\
Put group 2 at full intensity.

### Celled Fixtures (Sub Fixtures)

**\<.\> m**\
Select cell m in the selected fixtures.

**\<.\>**\
Select all the cells in the selected fixtures.

**n \<.\>**\
all sub-fixtures of fixture n

**1 \<Through\> 5 \<.\> 2**\
Select the second cell of fixtures 1 to 5

**\<.\> \<Through\> \<.\> j**\
**\<Through\> \<.\> j**\
Select cells 1 to j of all selected fixtures

\<.\> m \<Through\>\
Cells m-\>last of all selected fixtures

**\<.\> m \<Through\> \<.\>j**\
**\<.\> m \<Through\> i**\
sub-fixtures m-\>j or all selected fixtures

**n \<Through\> i\<.\>**\
all sub-fixtures of fixtures n-\>i

**n \<Through\> i\<.\>j**\
sub-fixture j of fixtures n-\>i

**n \<Through\> \<.\>j**\
sub-fixture 1-\>j of fixture n

**n \<.\> \<Through\>**\
all sub-fixtures of fixture n-\>last consecutive of type n

**n \<.\> \<Through\> i**\
sub-fixtures 1-\>i of fixture n

**n \<.\> \<Through\> i\<.\>j**\
sub-fixtures 1-\>j of fixtures n-\>i

Select If
---------

**\<Select If\> \<@\>\<@\>**\
Select all fixtures above 0% intensity.

**\<Select If\> \<@\> \<Through\> 50**\
Select all fixtures above 50% intensity

**\<Select If\> \<@\> 50 \<Through\>**\
Select all fixtures below 50% intensity

Record
------

**\<Record\> {Cue list} {Cue list}**
Append cue at the end of the list.

**\<Record\> \<Cue\> \<Cue\>**\
Merge the live cue  of the connected cue list with the programmer.

**\<Record\> \<Cue\> 90.1**\
Merge cue 90.1 of the connected cue list with the programmer. If this cue doesn't exist it will be created.

**\<Record\> \<Cue\> 1 \<Through\> 10 \<And\> 20**\
Record/merge programmer contents into cues 1 to 10 and 20 (select  copy/merge/replace from softkeys or double press \<Enter\> to merge.

**\<Record\> \<Position\> \<Cue\> \<Cue\>**\
Merge only position from the programmer with the live cue.

**\<Record\> \<Options\> \<Position\> \<Cue\> \<Cue\>**\
Merge only position from the programmer with the live cue.

Copy, Move in cue list
----------------------

**\<Copy\> {Cue list} n \<Enter\>**\
Copy cue n and append at the end of the cue list.

**\<Copy\>/\<Move\> {Cue list} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<@\>
n**\
**\<Copy\>/\<Move\> {Cue list} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20
\<Enter\> n \<Enter\>**\
Copy or move cues 1,2,3,4,6,7,8,9,10,20 from {Cue list} and insert after cue n.

**\<Copy\>/\<Move\> {Cue list} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<@\>
\<@\>**\
**\<Copy\>/\<Move\> {Cue list} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20
\<Enter\> \<Enter\>**\
Copy or move cues 1,2,3,4,6,7,8,9,10,20 and insert at the end of the cue
list.

**\<Copy\>/\<Move\> {Cue list} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<@\>
{target playback} n**\
**\<Copy\>/\<Move\> {Cue list} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20
\<Enter\> {target playback} n \<Enter\>**\
Copy or move cues 1,2,3,4,6,7,8,9,10,20 and insert at cue n in the
target playback.

Delete
------

**\<Delete\> \<Cue\> n**\
Delete cue n from the connected cue list.

Include
-------

**\<Include\> \<Cue\> n**\
Include cue n into the programmer from the connected cue list.

Times
-----

**\<Time\> 5**\
5 sec fade in

**\<Cue\> 3 \<Time\> 5**\
5 sec fade in on connected playback\'s cue 3

**\<Time\> \<Fixture\> 5**\
5 sec fade in for all attributes of selected fixtures

**\<Time\> \<Fixture\> \<Gobo\> 5**\
5 sec fade in for gobo attribute group of selected fixtures

**\<Time\> \<Fixture\> \<@\> \<B@\> 5**\
5 sec fade in for attribute connected to wheel B on selected fixtures

**\<Time\> 5 \<@\> 3**\
5 sec fade in, 3 sec delay

**\<Time\> 5 \<And\> 2**\
5 sec fade in, 2 sec fade out

**\<Time\> 1 \<Through\> 10**\
times spread across fixtures according to selection order

Cue Lists
---------

**\<Cue\> n \<Go\>**\
Go to cue n (in connected cue list)

**5 \<Go\>**\
Run the next cue with 5 sec fade instead of the programmed cue time

**\<Cue\> 3 \<Enter\> 5 \<Go\>**

Jump to cue 3 with 5 sec fade instead of the programmed cue time
