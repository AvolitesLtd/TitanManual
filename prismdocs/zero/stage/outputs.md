---
id: outputs
title: Outputs
sidebar_label: Outputs
---

import Keys from '@site/src/components/key.ts';

This is the page, where the video outputs can be setup. **Prism Zero** provides one physical output and one NDI output.

## Physical Output

Physical output allows for surface frames to be sent to an external output device.

![Prism Zero](/prismdocs/images/zero-stage-outputs-physical.png)

### Physical Output Controls

A list of all connected video output devices, will appear in the *Output Device* drop down.  
Selecting an output device will show its properties, automatically populated:

- Width
- Height
- Refresh rate
- HDR support

After enabling the output, and playing a bank element on a layer, the surface mix frames will display on the output device.

#### Region of Interest

A blue overlay shows the selected Region of Interest (RoI) that will be sent to the output.  
To change the *X* and *Y* coordinates, the *Width* and *Height* of the region, change the values in the input boxes.

Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.

## NDI Output

NDI output allows for other applications to receive surface frames.

![Prism Zero](/prismdocs/images/zero-stage-outputs-ndi.png)

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

*Note: width will always adjust to nearest 64 pixels multiple*

#### Region of Interest

A blue overlay shows the selected Region of Interest (RoI) that will be sent to the output.  
To change the *X* and *Y* coordinates, the *Width* and *Height* of the region, change the values in the input boxes.

Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.