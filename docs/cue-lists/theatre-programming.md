---
id: theatre-programming
title: Theatre programming Quick Guide
sidebar_label: Theatre programming
---

If you are used to programming other theatre-style consoles, you will be
more familiar with using a keypad/syntax style interface than the Titan
touchscreen. But fear not because you can program a theatre show on
Titan using the keypad and this is how you do it.

Labelled buttons on the console are shown like this: \<Enter\>. The
\<Cue\> button is labelled \<Connect\> on some consoles. The \<@\>
button is the one next to the numeric keypad.

Dimmers/Fixtures have a User Number (which is equivalent to the Channel
Number on other consoles), shown in the top left corner of the fixture
button. This is the number "n" shown in the keypad commands. You can
change this number using the \[Set Legend\] softkey, see section 4.2.5.
Groups also have a User Number.

User Number shown on fixture buttons

![](/docs/images/image111.png)

### Setting dimmer/fixture levels

-   n \<@\> \<@\> : Set fixture n to 100%

-   n \<@\> v \<Enter\> : Set fixture n to v% (you need to enter 2
    digits so "50" for 50%)

-   n \<Thro\> m \<@\> v \<Enter\> : Set fixtures n -- m to v%

-   n \<And\> m \<And\> p \<@\> v \<Enter\> : Set fixtures n,m,p to v%

-   \<Group\> n \<@\> v \<Enter\> : Set fixtures in group n to v%

-   \<Clear\> : Snap release edited channels back to programmed state --
    like Cheat on ETC

-   t \<Clear\> : Release edited channels fading over time t

### Setting other attributes of moving light / intelligent fixtures

-   Select fixtures for control using\
    n \<Enter\>\
    n \<Thro\> m \<Enter\>\
    \<Group\> n \<Enter\>

-   Press one of the Attribute Bank buttons \<Colour\> \<Gobo\> etc. The
    current function of the wheels is shown bottom right on the screen.
    Press the same Attribute Bank again to page through different
    attributes e.g. if there are 2 gobo wheels keep pressing \<Gobo\> to
    access the other attributes.

-   Use the wheels to set the value. Or press the \<@\> button next to
    the wheel and type in a value on the keypad.

### Programming cues

Titan can have multiple cue lists. To start a cue list press \<Record\>
then select \[Create Cue List\] from the touch screen. Then press a blue
button above the fader where you want to store the cue list.

Titan will record into the cue only dimmers/fixtures you have changed
since you last pressed \<Clear\>, and that have changed from the
previous cue (so if you put up another playback, that won't get
recorded). To record everything with intensity above zero, switch
\[Record Mode\] to "Record by Stage" (see section 8.1.2).

-   \<Record\> {blue fader button} {blue fader button} : Record the next
    cue onto the end of the cue list on this fader

-   \<Record\> \<Cue\> n \<Enter\>: Record cue n (will prompt for
    merge/overwrite if it exists already)

-   \<Time\> t \<Enter\> : Set fade time into programmer (does not
    affect stored cues; will save with the cue when you record it)

-   \<Cue\> n \<Time\> t \<Enter\> : Set fade time of cue n to t seconds

-   \<Delete\> \<Cue\> n \<Enter\> \<Enter\> : Delete cue n (2nd Enter
    confirms)

-   \<Copy\> \<Cue\> n \<@\> \<Cue\> m \<Enter\>: Copy cue n to new cue
    m

-   \<Copy\> \<Cue\> n \<@\> \<Enter\> : Copy cue n onto the end of the
    cue list

(Can also use \<Move\> to move cues, and \<Thro\>, \<And\> to change
multiple cues)

You can show the list of cues on screen, click on individual times to
edit them:

-   \<View\> {blue fader button}

To make a Block cue (changes do not track), view the cue list as above,
in the Tracking column click the cell for the cue you want to change and
select \[Block\] from the softkeys.

To link cues, the easiest way is on the screen. Click on the "Link" cell
(which normally shows "Wait For Go". Then select from the softkeys
\[Link After Previous Cue\] or \[Link With Previous Cue\]. For Link
After, set the "Delay Out" time to set how long the cue will remain
before the next cue starts.

### Running cues

Push up the fader of the cue list to make it active ("connected").

If another cue list is active: \<Cue\> {blue button} : Connect this cue
list as the current list.

-   \<Go\> : Run next cue with programmed times

-   \<Cue\> n \<Go\>. : Go cue n with programmed times

-   t \<Go\> next cue go with fade time t

-   n \<Cue\> t \<go\> jump to cue n with fade time t

If you want moving fixtures to automatically position themselves ready
for the next cue, enable the \[Move In Dark\] option, see previous
section. This is Off by default.

### Editing cues while running

Often you need to make changes to cues while the cue is active in a
running show. Press \<Clear\> before you make changes to be sure that
the programmer does not contain any previous changes.

-   \<Record\> \<Cue\> \<Cue\> : Update current cue by merging
    programmer

-   \<Time\> t \<Enter\>, \<Record\> \<Cue\> \<Cue\> : Set fade in time
    of current cue

    (It is probably easier to use \<View\> and click on the time on
    screen to edit it)

### Effects / Shapes

You can't select Effects/Shapes from the keypad on Titan, but it's still
easy.

-   Select fixtures for control

-   At the top level menu press \[Shapes and Effects\], \[Shape
    Generator\], \[Create\]

-   Select the type of shape \[Dimmer\], \[Pan/Tilt\] etc

-   Select a shape from the softkeys or from the Shapes window which
    appears.

-   Set the Speed, Size, Spread using the wheels

Shapes will record into cues, and will track through subsequent cues
while they are active in the programmer, until you stop them by pressing
\<Clear\>.
