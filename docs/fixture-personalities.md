---
id: fixture-personalities
title: Fixture Personalities
sidebar_label: Fixture Personalities
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

For each type of fixture, the console has a *"personality"* file which
tells it how to control the fixture, which channel is the dimmer (HTP)
channel, and a large amount of other fixture-specific information. When
you patch each fixture, you tell the console which personality to use
for it.

The console holds a personality library containing all commonly used
fixtures, but new fixtures are appearing all the time and Avolites are
constantly updating the library.

We recommend that you should update the library from time to time to
take advantage of new fixtures, as well as receiving bug fixes for
personalities and new features which may be added such as sub-fixtures.

## Downloading fixture personalities from Avolites

The [Avolites website](https://personalities.avolites.com/) lists all fixtures for which personalities have
been created. You should look here first if the console does not contain
a personality for your fixture. The address is
http://personalities.avolites.com

[![Avolites Personalities Website](/docs/images/Avolites-Personalities-Website.png)](https://personalities.avolites.com/)

All available fixture personalities are listed down the left side of the
screen. You can use the boxes on the top left to filter the list to show
fixtures from specific manufacturers, or fixtures available for a
certain console, or to search for a specific fixture name.

Click on the fixture name to open the details in the right hand window.
This shows all the personalities available for that fixture type (if you
have entered the console type on the top left, only personalities for
that console will be displayed).

If the personality is included in the standard library (cache) then the
column will be ticked.

If there is a personality listed for your fixture, the simplest thing to
do is to update the complete personality library as described in the
next section.

## Updating the Personality Library on the Console

Download the current Titan personality library by clicking on **Titan
Fixture Library** at the [personality website](https://personalities.avolites.com) 
home screen. Alternatively you can get this file by clicking on the **Download** 
link at the top of the screen, then clicking on **Titan Fixture Library**.

There are different library installers depending on the **version of Titan 
you are running**. This is to ensure you get the right version of the Capture
library, the actual personality library is identical in each version.

- The console caches the FixtureLibrary folder into memory when the
 Patch option is first used, so after updating you need to restart the console
 software (from the Tools menu) to ensure new fixture personalities
 are loaded.

- Once a fixture is patched, its personality is embedded in the show
 file. Any updates to the fixture library will not affect fixtures
 patched in the show. You can use the <Keys.SoftKey>Update Personality</Keys.SoftKey> option
 in the patch menu to update patched fixtures if you need to (see [Updating Patched Personalities](./patching/changing-the-patch.md#updating-patched-personalities)).

> Updating will overwrite any custom personalities you have stored in the library. To avoid this, store your custom personalities in the user personalities folder (see next section for details).

### Console Update Procedure

1. Copy the downloaded file **TitanFixtureLibrary.exe** onto a USB stick and plug in to the console.
2. Click the **Tools** menu on the toolbar, then **Control Panel**, then **Titan Installers**.
This will list all installers - software and personalities - found in the root of 
the stick (provided you haven't changed their name).
3. Click the **TitanFixtureLibrary.exe**, and follow the instructions.<br/>
   If for whatever reason Titan doesn't show the file in the *Titan Installers* submenu
   you can find and double-click it through Tools -> Folders.
4. Shut down and then restart the console *(using the Restart Software
button on the screen Tools menu is OK)*.

### Titan PC Suite Procedure (T1/T2/T3/Titan Mobile/Titan Simulator)

1. Locate the downloaded file **TitanFixtureLibrary.exe** and double click
on it to run it. Windows may show a warning about an unrecognised file
2. Click **Ok** on the Windows User Account Control warning box.
3. When the installation has completed, shut down and then restart the
Titan software.



## User/Custom Personalities

Using the Personality Builder application installed with the console
software, you can create your own personality if you wish to modify the
behaviour of a standard personality or you have a fixture the console
has never heard of and need to get it working quickly.

> The console loads the fixture library into memory when the Patch option is first used, so after creating a new personality you need to **restart the console software** from the **Tools** menu or it will not show up.

You can incorporate your custom personality into the standard fixture
library on the console, however there is a danger that it will be
overwritten when you next update the Fixture Library from Avolites.

To avoid this the console provides a special folder for user-provided
personalities located at `D:\Personalities`

If you are using Titan PC Suite, the
folder is located at `\Documents\Titan\Personalities`

When patching fixtures, this folder is searched first before the
library. If a suitable Fixture Personality is found, the console will
use it rather than using the library. This folder is not affected when
the personality library is updated.

## Requesting a New Fixture Personality

If a personality does not exist for your fixture, Avolites will create
one for you. Click on the [request](https://personalities.avolites.com/?mainPage=Request%20Queue.asp&) link on the [personalities site](https://personalities.avolites.com/) to submit
your request. A list of current requests is shown, so you can check if
someone else is asking for the same personality.

Your new personality will be incorporated into the library -- to install
the new personality, download and install the latest personality library
[as described above](#updating-the-personality-library-on-the-console).

## Reporting a Personality Bug to Avolites

If you find a problem with a fixture personality, Avolites would like to
know about it so it can be fixed. Search for the personality on the
website then click on the **Report Bug** icon on the right of the screen.
If you click on the [Bug Reports](https://personalities.avolites.com/Bug%20Queue.asp) tab at the top of the window, a list
is shown of currently outstanding problems, so you can check if someone
else has already reported the problem.

## In an emergency

The console contains a selection of "Generic" fixtures which you can use
in an emergency if you need to operate a fixture with no personality.
When patching, go through the manufacturer list until you find <Keys.SoftKey>Generic</Keys.SoftKey>. In this section (among other fixtures) are the following:

Multi-DMX: Has up to 10 DMX channels, all channels are LTP. You can
select from 1-10 channels on the Mode screen. Press Attribute Bank and
use the softkeys to select channels.

Generic RGB: Allows you to control an RGB fixture such as LED colour
changers. This offers 5 modes:
- 1: **Dim**,  2: **R**,  3: **G**, 4: **B**
- ***VDim***, 1: **R**, 2: **G**, 3: **B**
- 1: **R**, 2: **G**, 3: **B**, 4: **Dim**
- ***VDim*** + 4x **RGB**
- 4x **RGB**

> ***VDim*** is a virtual overall dimmer channel for fixtures without a DMX
dimmer control. When you use the Dimmer attribute the console will
adjust the RGB levels accordingly.
