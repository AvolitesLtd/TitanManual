---
id: regions
title: Regions
sidebar_label: Regions
---

import Keys from '@site/src/components/key.ts';

The **Regions**  page is used to map a surface or layer to an output. It defines how content from a selected source is sampled, positioned, and displayed on the chosen **Output**.

**Regions** allow to select a source (surface or layer) and map it to an **Output**, controlling how the content appears on the target display or stream.

*Note: any changes on this page may cause the output to pause whilst changes are being applied.*

![Prism](/prism-images/stage/regions/regions-page.png)

### Region Types

**Regions** can be created in two different types, depending on the mapping requirements:

- **Rectangular Regions**  
  Rectangular regions define a simple, rectangular sampling area from a surface or layer. They are ideal for standard displays, projectors, and basic output mappings.

- **3D Model Regions**  
  3D Model regions use a **3DS** model to define more complex mapping configurations. This allows content to be mapped onto irregular or non-rectangular surfaces, such as LED sculptures or architectural installations.

### Canvas Area

The Source/Output dropdowns in the center of the application allow to preview both the selected input surface and the corresponding output composition.

### Region Controls

Selecting a **Region** to show its controls to the right. Here is where a *Source* can be selected to sample from, and an *Output* can be selected to display the **Region** onto.