---
id: capture-show-files
title: Capture Show Files
sidebar_label: Capture Show Files
---

import Keys from '/src/components/key.ts';

The Capture stage is automatically saved within the Titan showfile. The
Capture stage can also be exported and imported separately from the
Titan show. This allows standard stages or rigs to be transferred
between Titan shows, or to be loaded into the full version of Capture
for further editing.

Select the Show tab in the Capture Settings window to export and import
shows.

Exporting Shows
---------------

Exported Capture shows can be loaded into other Titan shows or into the
full version of Capture for producing documentation.

Importing Shows
---------------

Shows can be imported from the full version of Capture, this can be
useful to import existing stage structures or rigging designs.

> The internal Capture engine uses the Capture 2020 version *(in Titan v13 
and v12, Capture 2018 was used; in Titan v11 and below, Capture Atlas was used)*. 
You will not be able to import files from newer versions of Capture - use the 
**"Export for Capture 2020"** function in the File menu of the full version of 
Capture to save the file as a version which can then be imported.

When importing shows from full Capture you need to ensure that 
all fixtures in the show have been correctly patched in Capture to match the patch on the
console. There is no way to edit an externally created Capture patch on
the console.

You will need to turn off the **Auto Update** option in the Capture Settings window on Titan, otherwise Titan will move all the fixtures about according to layout settings in the Titan show.

-  Some fixture types and other Capture elements may not work when you
import a show that has been created in full Capture. You can
use the [auto-patch function](../patching/patching-new-fixtures-or-dimmers.md#capture-visualiser-auto-patch) 
to allow the console to patch fixtures into an imported Capture show, but you will then need to manually position them using the Titan controls.



Clearing the Capture Show
-------------------------

The Wipe button at the bottom of the Show tab will clear the current
Capture show.

If the **Auto Update** option is set to **On** (the default setting)
then the Capture show will be repopulated with the fixtures in the Titan
show.

You can manually reload patched fixtures from your Titan show into
Capture by selecting the <Keys.SoftKey>Edit Fixtures</Keys.SoftKey> <Keys.SoftKey>Update Personality</Keys.SoftKey> option on
the [Patch menu](../patching/changing-the-patch.md#patch-view). 
This is particularly useful if a capture representation is added to fixtures 
which previously weren't available in Capture but are already patched in Titan.
