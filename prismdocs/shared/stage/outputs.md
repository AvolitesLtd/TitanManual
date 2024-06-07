---
id: outputs
title: Outputs
sidebar_label: Outputs
---

import Keys from '@site/src/components/key.ts';

This is the page, where the video outputs can be setup. **{{PRISM-APP}}** provides one physical output and one NDI output.

Visiting this page for the first time should present a rendering warning to you, that is best to read. Any changes here may cause the output to pause whilst changes are being applied.

## Physical Output

A list of all connected video output devices, will all appear in the "Output Devices" drop down, to the left side.

![{{PRISM-APP}}](/prismdocs/images/{{PRISM-APP-LOWER}}-stage-outputs-physical.png)

Selecting this will mean that new settings will apply to that individual output.

Width, height and Refresh Rate are automatically populated from, the device itself.

We also detect whether HDR is supported on the output device. 

After enabling the output, and playing a bank element on the layer, you should now see that media displaying on the output device.

## NDI Output

NDI output allows for other applications to receive surface frames.

![{{PRISM-APP}}](/prismdocs/images/{{PRISM-APP-LOWER}}-stage-outputs-ndi.png)

You can rename the NDI output and adjust its resolution, width and height can be aspect locked together. 

**Frame rate** can also be set before pressing the <Keys.PrismKey>Confirm</Keys.PrismKey> button.

## Regions

Typing into the regions area will set the size and position of the region rendering on the output device.