---
id: controlling-fixtures
title: Controlling fixtures
sidebar_label: Controlling fixtures
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Select fixtures for control by pressing select buttons. Fixture buttons
turn blue when selected.

Press <Keys.HardKey>Locate</Keys.HardKey> to "home" selected fixtures with lamp on. If fixture is
patched on a fader, the fader controls the dimmer. Hold <Keys.HardKey>Locate</Keys.HardKey> and press attribute button to remove that
attribute from the locate (e.g. to locate without changing pan/tilt,
hold <Keys.HardKey>Locate</Keys.HardKey> and press <Keys.HardKey>Position</Keys.HardKey>). See the [Locate](../controlling-fixtures.md#setting-fixtures-to-a-start-position-locate) section for more information.

Select attribute to control using attribute bank buttons (labelled
Intensity/Dimmer, Colour, Gobo etc), then turn the wheels to set
fixture. Display shows which attribute each wheel is controlling.
(See [Changing Attributes Using the Wheels](../controlling-fixtures/changing-fixture-attributes.md#changing-attributes-using-the-wheels)).

[Open Attribute window](../controlling-fixtures/changing-fixture-attributes.md#attribute-editor-window) on-screen (<Keys.HardKey>Open/View</Keys.HardKey> then one of the attribute
bank buttons such as <Keys.HardKey>Position</Keys.HardKey> or <Keys.HardKey>Intensity</Keys.HardKey>) to select attributes
from buttons and to control sub-fixtures of battens/arrays.
(See [Fixtures with Multiple Cells](../controlling-fixtures.md#fixtures-with-multiple-cells-subfixtures)).

Use Palettes to store often-used colours, positions etc. for instant
recall, see next page.

## Fixture Groups

Fixtures may be [grouped](../controlling-fixtures/fixture-groups.md) for quick selection
of different arrangements of fixtures, press <Keys.HardKey>Group</Keys.HardKey>, <Keys.SoftKey>Record
Group</Keys.SoftKey>, select fixtures for group, set legend using <Keys.SoftKey>Provide a
legend</Keys.SoftKey>, press a handle to store. If the handle has a fader it becomes
a master fader for the group. Order of fixture selection is remembered
for use with shapes. Physical layout of fixtures
in group can also be set for use with pixel mapper or shapes.

## Shapes & Effects

Titan can use preset shapes from its [Shape Generator](../effects/shape-generator.md), patterns you create yourself ([key frame
shapes](../effects/key-frame-shapes.md)) or [pixel mapped patterns](../effects/pixel-mapper.md).

Select some fixtures. The order in which you select the fixtures is used by
shapes.

At top menu press <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Shape Generator</Keys.SoftKey>, <Keys.SoftKey>Create</Keys.SoftKey>. Select attribute of shape then select a shape to run.

Or from the Shape Library window (double press <Keys.HardKey>Open/View</Keys.HardKey>,  <Keys.SoftKey>Shape Library</Keys.SoftKey>) you can select a shape directly. Filter the
list of shapes using the attribute buttons.

Use the wheels and <Keys.SoftKey>Adjust Speed, Size and Spread</Keys.SoftKey>/<Keys.SoftKey>Adjust Phase,
Spread and Offset</Keys.SoftKey> to configure the shape. Spread distributes the shape
across a number of fixtures.

[Key frame shapes](../effects/key-frame-shapes.md) are similar to a [chase](../chases.md) but you can spread the sequence
across fixtures.

To use [Pixel Mapper](../effects/pixel-mapper.md), save fixtures to a group, select the group. Use
[Layout Editor](../controlling-fixtures/fixture-groups.md#fixture-order-and-fixture-layout-in-groups) to set the real-world layout of the fixtures. Then use
Effects Editor to create effects on the pixels.
