---
id: loading-and-saving-shows
title: Loading and saving shows
sidebar_label: Loading and saving shows
---

import Keys from '@site/src/components/key.ts';

You can save any number of different shows on a USB drive or the
console's internal hard disk. The console will also autosave the show
periodically.

> Shows created on a Titan console can be loaded into any other model of Avolites Titan console, but not to older non-Titan consoles as the showfile format is different. \
  \
  Showfiles from newer versions of Titan may not load correctly (or at all) into consoles with older versions of Titan.


Although your show is safe on the hard disk, it's a good idea to also
save it to a USB pen drive which you can take with you in case something
bad happens to the console or if you want to transfer a show to a
different console.

Saving the show
---------------

You can save your show at any time either with its current name or with
a new name. If you save your show with its current name, a new version
of the show will be created. This allows you to go back to previous
versions of your show if needed.

To save your current show:

1. Press the <Keys.HardKey>Disk</Keys.HardKey> button.

2. Press <Keys.SoftKey>Save</Keys.SoftKey>.

3. If you have a USB drive connected, use the softkeys to select
whether to save on <Keys.SoftKey>Removable Disk</Keys.SoftKey> or <Keys.SoftKey>Internal hard drive</Keys.SoftKey>.

4. If this is a new show, enter a name for the show on the keyboard. If
this is a new version of an existing show you can enter a tag to help
identify the version, which will be shown on the Show Browser screen
when you load shows.

5. Press <Keys.HardKey>Enter</Keys.HardKey> or <Keys.SoftKey>Save</Keys.SoftKey> (or <Keys.SoftKey>Overwrite</Keys.SoftKey> if the show already
exists). The show will be saved.

6. Press <Keys.HardKey>Exit</Keys.HardKey> or <Keys.SoftKey>OK</Keys.SoftKey> to leave Disk mode.

----

-   To save the show under a different name, use the <Keys.SoftKey>Save As</Keys.SoftKey>
    softkey.

-   Pressing the <Keys.HardKey>Disk</Keys.HardKey> button twice will make the console save a
    Quicksave version of the file. A Quicksave is just a version of the
    show saved with the same filename.

-   A new version of the file will be saved even if you enter the same
    tag as previously used.

----

If you save to hard drive, shows are saved in the folder 'D:\\Shows' (on
Titan Mobile, Titan Go and Simulator the folder is
'Documents\\Titan\\Shows').

Loading a show
--------------

The console will automatically reload the last show when it is turned
on.

![Show Browser](/docs/images/Show-Browser.png)Press the <Keys.HardKey>Disk</Keys.HardKey> button then \[Load
Show\] to load in a new show. The Show Browser window will appear.

On the top left you can select which drive is used, or show files on all
drives. On the bottom left you can filter the list of shows to see all
shows, or just manual saves, quick saves or autosave files. On the right
you can see different versions of the showfile; this allows you to
reload an earlier version if you need to.

You can also load shows from the softkeys:

1. Press the <Keys.HardKey>Disk</Keys.HardKey> button.

2. Press <Keys.SoftKey>Load Show</Keys.SoftKey>.

3. If you have a USB drive connected, select which drive you want to
load from.

4. Available shows are listed on the softkeys; press the key to load
the show (the F and G keys show more pages). If you type the first few
letters of the show name on the touch keyboard, the list will only
include shows starting with those letters, which can make it easier to
locate the show you want.

5. If there are multiple versions of the show stored on the disk,
select the one you want.

6. Press Load Show. The console will show a loading screen as the
different elements of the show load.

7. When the show has loaded the normal operating screen will reappear.

When loading a show you have the option to keep the existing DMX
settings of the console, or to load the settings stored in the showfile.
The DMX settings determine how the XLR sockets on the back of the
console are used and how DMX is sent over the network using TitanNet.

Importing parts of other shows
------------------------------

If you are doing a show which is similar to a previous one, you might
want to import parts of the previous showfile, for example you might
want the palettes for some Robe Robins from another show, but not the
other fixtures. This is where the Import Show function comes in handy.

For Import Show to work, you need to map fixtures from your imported
file to fixtures in the current show so that Titan knows where to import
the programming to.

![Fixture Mapping](/docs/images/Fixture-Mapping.png)

You can then select items from the imported show and store them onto
workspace or panel buttons in your current show.

![Import](/docs/images/Import.png)

1. Press the <Keys.HardKey>Disk</Keys.HardKey> button.

2. Press <Keys.SoftKey>Import Show</Keys.SoftKey> (The plus button at the top right of the Show
Library window also opens this menu).

3. The Show Browser window opens. Select the show you want to import
from and press <Keys.SoftKey>Load Show</Keys.SoftKey>.

4. The Show Library window will now open. Your current show and the
imported show will appear as buttons at the top of the show browser. You
can import items from more than one show at once by repeating steps 1-3.

5. Click on the Mapper tab, and select your imported show.

6. Select a fixture in your imported show, then click the arrow beside
the fixture it maps to in the current show. To remove a mapping, click
the <Keys.SoftKey>Clear Fixture Mapping</Keys.SoftKey> context button.\
You can select multiple target fixtures by dragging a box over the
fixtures, or click on the source fixture again and map to another
target.

7. When you have mapped all fixtures you want to import data from,
click on the Show Library tab.

8. Select the items you want to import (single or multiple). Use the
buttons on the left to select Palettes, Groups etc.

9. Select handle(s) where you want to store the imported items.

10. When you have imported all the items you want, press <Keys.HardKey>Exit</Keys.HardKey>.

---

-   You can filter fixture types to make the mapping easier using the
    buttons on the left and right sides of the show browser.

-   You can directly import shows without using the Disk menu by
    clicking the Plus button at the top right of the Show Browser.

-   You can find more information about the Show Library [here](./show-library.md).

---

Autosave
--------

The console will automatically save your show to its internal hard disk
when you shut it down. It will also autosave the show every 30 minutes
in case the console loses power.

You can disable Autosave or alter the time between saves using option
<Keys.SoftKey>Auto Save</Keys.SoftKey> on the Disk menu (press the <Keys.HardKey>Disk</Keys.HardKey> button). You can
reload Autosave files using the Show Browser.

>This option is included because Autosave used to make the console pause, however this is no longer the case and we recommend that you do not disable Autosave. If you lose power while programming Autosave will make your day a whole lot better.

Recover show
------------

If Titan shuts down improperly due to a crash or power failure, and when
you restart it the most recent showfile can't be reloaded, a softkey
option <Keys.SoftKey>Recover Show</Keys.SoftKey> will be displayed which will attempt to load the
show from the temporary directory. You will also see options to start a
new show or load a previous show.

Backing up existing show files to USB pen drive
-----------------------------------------------

If you just want to save a copy of your current show, you can use the
normal save function to save it to the USB drive instead of the hard
drive.

To copy an existing show file on the hard disk to a USB drive, first
ensure your current show is saved, then use the Disk functions to load
the existing show from hard disk, then save it to the USB drive.
Alternatively you can use the Folders command on the Tools menu.
