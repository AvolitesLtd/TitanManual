---
id: encoder-settings
title: Encoder Settings
sidebar_label: Encoder Settings
---

The **Encoder Settings** are used to specify various parameters of the file export:

* The exported name of the file 
* The destination for the export 
* Select either an existing preset or save the current settings as a new preset 
* The overall video and audio export settings 
* The option to Trim a video 
* The option to Crop a video 

### Trim

When exporting a clip from the encoder, it is possible to adjust the frame position of the in and out points so that the resulting clip has a different duration to the original file.

![Trim Button](/prismdocs/images/trim.png "Trim Button")

To adjust the trim points there are 2 aproaches.

* In the **Playlist**, with the file selected, press the Trim Icon on the right of the playhead. When the playhead bar turns blue, the start and finish points can be dragged to the desired location. this should then be sent to the Encoder to process.
* In the Encoder, press <i className="icon icon-menu-dots"></i> of the element to trim, open the **Settings** and press the Trim Video button at the bottom. Values can be manually entered into both the Trim In Point and Trim Out Point boxes either by typing the value or using the arrow keys in the current fields.

The total duration of the exported clip may not exceed the duration of the source media and the Out Point will always have a higher frame number than the In Point.

### Crop

It can be desireable to crop a clip so that only the specified region of interest is encoded to the final file. To open the crop controls, press <i className="icon icon-menu-dots"></i> of the element to crop, open the **Settings** and press the **Crop Video** button at the bottom.

![Crop Button](/prismdocs/images/crop.png "Trim Button")

* **X** and **Y** specifies the starting pixel for the top left corner of the cropping area to be drawn from.
* **Width** and **Height** sets the size of the area to be cropped based on the source resolution of the media, starting from the specified **X** and **Y** values. This is automatically calucalted for you as you increase the **X** and **Y** positions.

*Note: You will not be able to exceed the source resolution width and height.*

The <i className="icon icon-ic_lock_open"></i> / <i className="icon icon-ic_lock"></i> icons unlinks / links the **Width** and **Height** values has 2 modes which can be switched by clicking the icon.

* <i className="icon icon-ic_lock"></i> - **Width** and **Height** of the **Crop Area** will always maintain relative size according to the aspect ratio of the **Width** and **Height** set as the lock is pressed - if one value is adjusted, the other will change accordingly.
* <i className="icon icon-ic_lock_open"></i> - **Width** and **Height** can be individually set regardless of the resulting aspect ratio of the cropped area.

The results of these settings will be applied to the rendered file once you press **Back** all the way to the **Encoder** area ready to export from the the **Encoder list**.