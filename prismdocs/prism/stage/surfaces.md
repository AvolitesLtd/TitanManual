---
id: surfaces
title: Surfaces
sidebar_label: Surfaces
---

import Keys from '@site/src/components/key.ts';

This is the page where surfaces and layers can be setup.

![Prism Stage Page](/prism-images/stage/surfaces/prism-stage-surfaces.png)

To rename a surface, double click on it.

Layers can be added, removed or duplicated by using the correspondent buttons or the layer's <Keys.PrismKey>Sub Menu</Keys.PrismKey>.  
To remove or duplicate a layer, it needs to be selected first.  
To select a layer, click on a layer element or tick its tick box.  

*Note: clicking on the header tick box or using the CTRL+A shortcut will select all layers.*

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:
- **Rename** - Rename the layer. *Note: double clicking on the layer tag will allow to rename it.*
- **Remove** - Delete the layer from the surface. *Note: selecting the layer and pressing BACKSPACE or DELETE buttons will delete the layer.*
- **Duplicate** - Add a new copy of the layer. *Note: selecting the layer and pressing CTRL+D shortcut will duplicate the layer.*

### Surface Controls

The surface resolution can be adjusted in the **Controls** panel to match against the selected output settings.  

Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.

*Note: width will always adjust to nearest 64 pixels multiple*