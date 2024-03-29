---
id: capture-show-files
title: Capture Show Files
sidebar_label: Capture Show Files
original_id: capture-show-files
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

The Capture stage is automatically saved within the Titan showfile. The
Capture stage can also be exported and imported separately from the
Titan show. This allows standard stages or rigs to be transferred
between Titan shows, or to be loaded into the full version of Capture
for further editing.

Select the Show tab in the Capture Settings window to export and import
shows.

## Exporting Shows

Exported Capture shows can be loaded into other Titan shows or into the
full version of Capture for producing documentation.

## Importing Shows

Shows can be imported from the full version of Capture, this can be
useful to import existing stage structures or rigging designs.

> The internal Capture engine uses the Capture 2020 version *(in Titan v13 
and v12, Capture 2018 was used; in Titan v11 and below, Capture Atlas was used)*. 
You will not be able to import files from newer versions of Capture - use the 
&nbsp;<strong>"Export for Capture 2020"</strong> function in the File menu of the full version of 
Capture to save the file as a version which can then be imported.

You can import fixtures from full Capture but you need to ensure that
fixtures are correctly patched in Capture to match the patch on the
console. There is no way to edit an externally created Capture patch on
the console.

Some fixture types and other Capture elements may not work when you
import a show that has been created in full Capture. We recommend you
use the [auto-patch function](../patching/patching-new-fixtures-or-dimmers.md#capture-visualiser-auto-patch) 
to allow the console to patch the fixtures into Capture.

## Clearing the Capture Show

The Wipe button at the bottom of the Show tab will clear the current
Capture show.

If the <strong>Auto Update</strong> option is set to <strong>On</strong> (the default setting)
then the Capture show will be repopulated with the fixtures in the Titan
show.

You can manually reload patched fixtures from your Titan show into
Capture by selecting the <Keys.SoftKey>Edit Fixtures</Keys.SoftKey> <Keys.SoftKey>Update Personality</Keys.SoftKey> option on
the [Patch menu](../patching/changing-the-patch.md#patch-view). This 
will place all patched fixtures from the Titan show into the Capture show.