---
id: layouts
title: Layouts
sidebar_label: Layouts
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

When you are selecting fixtures for control, it's often useful to refer to a plan of where the fixtures are positioned to help you identify them.
The Layouts window allows you to make one or more control screens with freely-positioned fixture mimics. You can also import a lighting plan on which the fixtures can be overlaid. As well as allowing you to select fixtures, the fixture mimics also show the current intensity, colour and gobo being output by the fixture (where applicable to the type of fixture.)

You can also include playback, group and macro buttons on a layout to give you a quick way of selecting these items without having to change the workspace view.


![Layout screen](/docs/images/Layouts-With-Gobos.png)

## Creating a layout

You can create any number of different layout screens and store them in handles on the Layouts window.

1. Select the fixtures you want to be included in the layout (if no fixtures are selected you can add them later).
2. Double tap the <Keys.HardKey>Open/View</Keys.HardKey> button and select <Keys.SoftKey>Layouts</Keys.SoftKey>.
3. Press an empty handle button on the Layouts window. 
4. Enter or draw a legend for the Layout.
5. Press the handle button again or <Keys.SoftKey>Record Layout</Keys.SoftKey>.
6. Now the Layout handle has been created, press it again to open the Layout View window.

If you used Groups to select the fixtures to be included, the group layout will be used to initially position the fixtures. See [Adding fixtures from group layouts using Record] below for more details.

> If you only have one screen, you may find it useful to create a workspace for the Layout Editor window so you can swap between windows while copying fixtures from the Fixtures window.


### Fixture mimics

On the layout, fixtures are represented by a square "element" which uses the [fixture halo colour](../titan-basics/workspace-windows.md#button-halo).

![Layout fixture mimics](/docs/images/Layouts-Fixture-Mimics.png)

- The fixture number is shown in the top left corner and the intensity at the bottom. 
- The centre of the fixture shows the current colour and gobo (if it has gobos, and if the fixture personality includes the gobo patterns). This can be disabled using the *Show Fixture Mimics* setting in the Elements tab of the Layout View options (press the <Keys.ContextKey>Options</Keys.ContextKey> context button).
- If the fixture is in the programmer, a cyan highlight is shown at the bottom.
- If an effect is running on the fixture a tilde symbol is shown in the top right corner.
- If a dimmer effect is running the intensity value will be shown in yellow.
- An arrow is shown indicating the front of the fixture.


For a dimmer, the mimic will normally show as white. You can change the mimic colour to match the gel colour of the dimmed fixture by selecting the fixture(s) then set <Keys.SoftKey>Wheels=Visualiser</Keys.SoftKey> on the root menu, then select the Colour attribute bank and change the Red, Green, Blue colours to your desired setting.

### Layout View functions
The Layout View can be locked or unlocked using the <Keys.ContextKey>Lock</Keys.ContextKey> button in the top right corner. 

- To position items in the layout, select **unlocked** - you can move items around the screen by clicking on the item then dragging it, or using the 
wheels but you can't select fixtures for control. 
- To use the layout to select fixtures, select **locked** - you can select fixtures for control by clicking on them but items can't be moved. Playback/Group/Macro buttons only work in locked mode.


The Layout View can be zoomed in or out using the zoom slider on the left of the window, or you can set it to fill the screen using the <Keys.ContextKey>Zoom to Fit</Keys.ContextKey> button.

The <Keys.ContextKey>Select</Keys.ContextKey> and <Keys.ContextKey>Pan</Keys.ContextKey> buttons set whether dragging on the screen will draw a marquee box to select fixtures or will pan the screen view.

## Adding items to the layout

There are several ways to add items to the layout. Items can be deleted by pressing <Keys.HardKey>Delete</Keys.HardKey> then selecting the item(s).

### Adding fixtures using Copy

Press <Keys.HardKey>Copy</Keys.HardKey>, select fixtures, then touch in the Layout View where you want the selected fixtures to be placed. 
-   The fixtures will be placed in a row starting at the position you touched - you can rearrange them later.

### Adding fixtures from group layouts using Record

If you select fixtures using groups, and you have set up a layout for the group (see [Group Layout](../controlling-fixtures/fixture-groups.md#fixture-layout)), then the group layout will be used to position the fixtures.

Select fixtures using groups, press <Keys.HardKey>Record</Keys.HardKey>, then press a Layout handle. Pick one of the options from the softkeys:
-   <Keys.SoftKey>Replace</Keys.SoftKey> will remove all items from the layout and replace them with the selected fixtures.
-   <Keys.SoftKey>Merge</Keys.SoftKey> will add the selected fixtures to the layout.
-   <Keys.SoftKey>Update Fixture Positions from Programmer</Keys.SoftKey> will reposition selected fixtures using the layout information stored in the group.

Fixtures will be placed starting in the top left corner of the grid. If groups don't have a stored layout or if you select fixtures individually, then the fixtures will be added in a row in the order you selected them.

### Adding playbacks, groups and macros to the layout

You can include buttons for playbacks, groups and macros on a layout to give you a quick way of selecting these items without having to change the workspace view.

Press <Keys.HardKey>Copy</Keys.HardKey>, select the playback, group or macro, then touch in the Layout View where you want the button to be placed. You can select multiple items to be copied.

![Group handles in Layout](/docs/images/Layouts-Group-Handles.png)

-   A playback, group or macro on a layout is a copy of the original handle; deleting the button on the layout screen will remove it from the layout but won't affect the original handle.



## Arranging elements in the layout

You can arrange the items on the layout manually, or using a variety of automatic tools. The positioning works for both fixtures and group handles.

### Arranging elements manually

Select one or more elements, then drag them to the desired position on the grid. Elements will always snap to the grid.

You can also use the wheels to position selected elements and rotate them. Wheel positioning can be disabled using the context menu option <Keys.ContextKey>Position & Angle</Keys.ContextKey> (which toggles with <Keys.ContextKey>No Wheel Control</Keys.ContextKey>).

When using the wheels to position, you can move elements off the grid by toggling the context menu option <Keys.ContextKey>Wheels Move Full Pixel</Keys.ContextKey> / <Keys.ContextKey>Wheels Move Sub Pixel</Keys.ContextKey>. Once elements are offset from the grid they will keep their offset when moved in Full Pixel mode or by dragging, until you set them back on the grid using the wheels or the context menu option <Keys.ContextKey>Snap Selected Elements to Grid</Keys.ContextKey>.

When rotating elements, if the <Keys.ContextKey>Wheels Move Full Pixel</Keys.ContextKey> option is enabled then the elements will rotate in 45 degree increments, otherwise you can set any angle. If you have selected multiple elements for rotation, the context menu toggle <Keys.ContextKey>Wheels Rotate Individual Elements</Keys.ContextKey> / <Keys.ContextKey>Wheels Rotate Selection</Keys.ContextKey> sets whether each individual item will rotate on its own centre or whether the whole selection will rotate about the centre point of the selection.

### Arranging elements using shapes

You can automatically arrange elements into a rectangle, circle/oval or triangle:

1. Press the context menu button <Keys.ContextKey>Arrange Elements</Keys.ContextKey>.
2. Select the context menu option <Keys.ContextKey>Shape</Keys.ContextKey>.
3. Choose whether to arrange all elements or only selected elements by toggling the softkey option <Keys.SoftKey>All Elements</Keys.SoftKey> / <Keys.SoftKey>Selected Elements</Keys.SoftKey>.
4. Select the shape you want (rectangle, oval or triangle) using the softkey <Keys.SoftKey>Shape=</Keys.SoftKey>.
5. Set the number of rows / columns you want to have using the softkeys <Keys.SoftKey>Width=</Keys.SoftKey> and <Keys.SoftKey>Height=</Keys.SoftKey>.
6. Choose whether elements should be placed across then down, or down then across by toggling the option <Keys.SoftKey>Arrange in Rows</Keys.SoftKey> / <Keys.SoftKey>Arrange in Columns</Keys.SoftKey>.
7. Press <Keys.SoftKey>OK</Keys.SoftKey>.

### Arranging fixtures using visualiser layout

If you have fixtures set up in the onboard Capture visualiser, you can use the visualiser positions to arrange fixtures in the layout.

1. Press the context menu button <Keys.ContextKey>Arrange Elements</Keys.ContextKey>.
2. Select the context menu option <Keys.ContextKey>From Capture</Keys.ContextKey>.
3. Choose whether to arrange all elements or only selected elements by toggling the softkey option <Keys.SoftKey>All Elements</Keys.SoftKey> / <Keys.SoftKey>Selected Elements</Keys.SoftKey>.
4. Choose which view/projection to use from Capture (Top, Front, Side) using the softkey <Keys.SoftKey>Projection=</Keys.SoftKey>.
5. If necessary adjust the <Keys.SoftKey>Scale=</Keys.SoftKey> option for best results (to prevent having overlapping fixtures).
6. Press <Keys.SoftKey>Apply</Keys.SoftKey> to preview the changes.
7. When the layout is OK, press <Keys.SoftKey>Apply and Exit</Keys.SoftKey> to save the changes.

### Grid options

The grid displayed on the layout screen can be extended to allow more fixtures, and can be hidden.

To extend or shrink the grid area, drag the corner handles (while in Unlocked mode). The context menu <Keys.ContextKey>Crop Grid</Keys.ContextKey> button can be used to shrink the grid area so that it just encloses all the fixtures with no spare space.

To show or hide the grid, from the context menu select <Keys.ContextKey>Options</Keys.ContextKey> then go to the Layout tab and set the <Keys.ContextKey>Show Grid</Keys.ContextKey> toggle.

### Loading a lighting plan

You can import a lighting plan image to show behind the fixtures. 

![Layout with imported plan](/docs/images/Layouts-With-Plan.png)

1. Save your plan as an image file (png, bmp, jpg - not PDF).
2. From the context menu <Keys.ContextKey>Options</Keys.ContextKey>, go to the Layout tab.
3. Click on the Background Image to open the image browser.
4. Select the image you want to use.

Click on Background Image and Use the softkey <Keys.SoftKey>Scaling Mode</Keys.SoftKey> to select 
- None (image displayed full size, overflow will be lost)
- Letterbox (Fit the largest of height or width, fill other side with black bars )
- Fill (Fit the smallest of height or width, the other side will overflow and be lost)
- Stretch (stretch to fill height and width without preserving the aspect ratio of the image)

You can set the opacity of the image if you want to fade the plan into the background, by entering a number in the Opacity option on the Layout tab, or use Wheel A. 0% = fully transparent, 100% = fully opaque. The fixture mimics are always overlaid on top of the background.

## Swapping layout views

You can change to a different layout view either by selecting another handle in the Layouts window, or by using the <Keys.ContextKey>Open Layout</Keys.ContextKey> context menu button - this shows a list of available layout views on the softkeys for you to select.