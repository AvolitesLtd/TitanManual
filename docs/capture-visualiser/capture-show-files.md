---
id: capture-show-files 
title: Capture Show Files
sidebar_label: Capture Show Files
---

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

> The internal Capture engine uses the Capture 2020 version *(in Titan v13 and v12, Capture 2018 was used; in Titan v11 and below, Capture Atlas was used)*. You will not be able to import files from newer versions of Capture - use the **"Export for Capture 2020"** function in the File menu of the full version of Capture to save the file as a version which can then be imported.

You can import fixtures from full Capture but you need to ensure that
fixtures are correctly patched in Capture to match the patch on the
console. There is no way to edit an externally created Capture patch on
the console.

Some fixture types and other Capture elements may not work when you
import a show that has been created in full Capture. We recommend you
use the [auto-patch function](../patching/patching-new-fixtures-or-dimmers.md#capture-visualiser-auto-patch) to allow the console to patch the fixtures
into Capture.

Clearing the Capture Show
-------------------------

The Wipe button at the bottom of the Show tab will clear the current
Capture show.

If you need to reload patched fixtures from your Titan show into
Capture, select the \[Edit Fixtures\] \[Update Personality\] option on
the [Patch menu](../patching/changing-the-patch.md#patch-view). This will place all patched fixtures from the Titan show
into the visualiser.