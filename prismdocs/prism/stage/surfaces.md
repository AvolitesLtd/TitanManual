---
id: surfaces
title: Surfaces
sidebar_label: Surfaces
---

import Keys from '@site/src/components/key.ts';

This is the page where surfaces and layers can be setup.

![Prism Stage Page](/prismdocs/images/prism-stage-surfaces.png)

Double clicking on the surface tag will allow to edit it.

The surface resolution can be adjusted to match against the selected output settings.  
Resolution width and height values can be linked / unlinked by clicking on the <Keys.PrismKey>Lock</Keys.PrismKey> / <Keys.PrismKey>Unlock</Keys.PrismKey> icon.  
When <Keys.PrismKey>Lock</Keys.PrismKey> icon is shown, width and height will always maintain relative size according to the aspect ratio of the width and height set as the lock is pressed - if one value is adjusted, the other will change accordingly.  
When <Keys.PrismKey>Unlock</Keys.PrismKey> icon is shown, width and Height can be individually set 
regardless of the resulting aspect ratio.

*_Note: width will always adjust to nearest 64 pixels multiple*


Layers can be reordered, removed and added and duplicated accessed via the <Keys.PrismKey>Sub menu</Keys.PrismKey>.

*Note: When duplication a layer, their layer options will also be duplicated, you may want to reset the layer afterwards.*
