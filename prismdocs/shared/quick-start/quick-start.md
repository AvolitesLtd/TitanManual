---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

### Setting up a Project
Start by creating a [new project](./projects-management.md/#new-project) via the [file menu](./navigation.md/#file).   

**File** > **New Project**

{{PLAYER-START-COMMENT}}

{{PLAYER-END-COMMENT}}

{{PRISM-START-COMMENT}}
Next, set the [surface resolution](../../prism/stage/surfaces.md/#surface-controls) to define our working area in pixels. 

**Stage** > **Surfaces** > **Surface** 

- Select a Surface.
- Set the resolution. 

![Surface Resolution](/prism-images/quick-start/surface-resolution.png)

### Connect to an External Display

To connect the surface to an external display, the output needs to be [enabled](../../prism/stage/outputs.md/#physical-output-controls) in Prism. 

**Stage** > **Outputs**

- Select Physical Output. 
- Select the Output Device.
- Enable the Output. 

![Physical Output](/prism-images/quick-start/display.png)

### Region Setup

To determine which part of the **Surface** is being sent to the **Output**, a [Region](../../prism/stage/regions.md) is used. The region will define the area to be sampled from the specified **Surface** and then where and what size this sample needs to be drawn on the output. 

**Stage** > **Regions** 

- Create a new region by pressing the *Add* Button. 
- Select the newly created region in the list. 
- Select *Surface 1* in the *Source* dropdown. 
- Select *Physical Output* in the *Output* dropdown. 

![Region Source / Output controls](/prism-images/quick-start/region-source-output.png)

The default behaviour of a new region is to sample the entire **Surface** and to fill the **Output** with this region. This can be adjusted using the *X, Y, Width, Height* boxes for the source and output. 

The project is now setup, all that is left is to import media and trigger it to display on the output. 

### Bank Setup

A [bank](../../prism/play/banks.md) must first be created in order to import media into the project. 

**Play** > **Banks** 

– Press the *Add* Button. 

![Banks](/prism-images/quick-start/banks.png)

Select the new bank from the list and then press the *Select Files* button within the Bank. Locate and load the required media files. Further media can be added by using the *Add* Button on the right or by dragging files into the Bank area.

{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
### Play Media

Press the *Select Files* button within the Bank. Locate and load the required media files. Further media can be added by using the *Add* Button on the right or by dragging files into the Bank area.

To trigger media, click the *Play* button next to the media in the Bank.
{{PLAYER-END-COMMENT}}

{{PRISM-START-COMMENT}}

### Trigger Media

Finally, to trigger the imported media, select one of the layers within your surface and then click the *Play* button next to the media in the Bank. 

![Banks](/prism-images/quick-start/Layer.png)

{{PRISM-END-COMMENT}}