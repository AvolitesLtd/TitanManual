---
id: surfaces
title: Surfaces
sidebar_label: Surfaces
---

import Keys from '@site/src/components/key.ts';

This is the page where surfaces and layers can be setup.

![Prism Stage Page](/prismdocs/images/zero-stage-surfaces.png)

To rename a surface, double click on it.
Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:
- **Rename** - Rename the layer. *Note: double clicking on the layer tag will allow to rename it.*
### Surface Controls

The surface resolution can be adjusted in the **Controls** panel to match against the selected output settings.  

Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.

*Note: width will always adjust to nearest 64 pixels multiple*