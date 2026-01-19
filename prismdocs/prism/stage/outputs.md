---
id: outputs
title: Outputs
sidebar_label: Outputs
---

import Keys from '@site/src/components/key.ts';

The **Outputs** view is where the outputs are configured. Currently **Prism** supports one physical output<!-- and one NDI output-->.

*Note: any changes on this page may cause the output to pause whilst changes are being applied.*

## Physical Output

This could be a projector / LED wall, go to [Regions](./regions) to see how to map a surface to an external output device.

![Prism](/prism-images/stage/outputs/physical.png)

### Physical Output Controls

A list of all connected video output devices, will appear in the *Output Device* drop-down.  
Selecting an output device will show its properties, automatically populated:

- Width
- Height
- Refresh rate
- HDR support

After enabling the output, and playing a bank element on a layer, the surface will display on the output device.

<!-- ## NDI Output

NDI output allows for other applications to receive surface frames.

![Prism](/prism-images/stage/outputs/ndi.png)

### NDI Output Controls

The following NDI output properties can be set:

- Name
- Width
- Height
- Frame rate

To confirm any change to these properties click on the <Keys.PrismKey>Confirm</Keys.PrismKey> button.

Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.

*Note: width will always adjust to nearest 64 pixels multiple* -->