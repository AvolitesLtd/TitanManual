---
id: banks
title: Banks
sidebar_label: Banks
---

import Keys from '@site/src/components/key.ts';

Banks within **Prism Player** provide a versatile space for managing media. You can play back media, reorder banks and their elements, rename banks, and import or export bank contents. Additionally, Banks can display thumbnails of the added elements via the grid view discussed later.

You can import banks you have exported by simply dragging and dropping `json` files usually exported in the `Documents > Avolites` folder.

<!-- Player & Zero -->
<p style={{display: (`player` === 'player' || `player` === 'zero') ? 'inline-block' : 'none'}}>
    <i>Note: Only 1 bank is allowed to be used on <b>Prism Player</b>, more can be added on <b>Prism</b>. audio, images and video can be added</i>
</p>

<!-- Prism -->
<p style={{display: (`player` === 'prism') ? 'inline-block' : 'none'}}>
    <i>Note: Multiple banks can be added and as well as the basic feature of Prism Player and PRism Zero, ndi and live input sources are also able to be added, please see <a href="../settings/settings-inputs">Settings > Inputs</a> for more details.</i>
</p>

## Bank

To add new media to a bank, select the bank you wish to add to, and simply drag and drop your files or press the <Keys.PrismKey>+</Keys.PrismKey> button. This action caches the data in the **Prism Media Cache**, enhancing the loading speed for future projects. For more details, refer to the "Clear Cache" section on the [settings](../settings/settings-general) page.

The Bank can be displayed in two views: Table or Grid. Both views feature a header at the top, which includes options to duplicate or remove selected bank elements, and a toggle button to switch between views. There is also a button for adding new media.

If you need extra performance when triggering video, you can send selected bank elements over to the encoder to get transcodeed into **Avolites' AIM** codec. More on this over on the [encoder](../encoder/encoder.md) page.

The order of the elements in the bank can be arranged by draging them around in both table view and grid view.

## Table View

*Table View* gives more information about video / audio codecs, resolution, whether hardware acceleration is avaible on the media and much more.

![Prism Player Banks](/prismdocs/images/player-table-banks.png)

Users can playback elements using the <Keys.PrismKey>Play</Keys.PrismKey> and preview elements with the <Keys.PrismKey>Preview</Keys.PrismKey>.

### Play

<p style={{display: (`player` === 'player') ? 'inline-block' : 'none'}}>
    Playing an element will playback on the <a href="../play/mediaplayer">media player</a>.
</p>

<p style={{display: (`player` === 'prism' || `player` === 'zero') ? 'inline-block' : 'none'}}>
   A layer must be selected in order to play elements
</p>

### Preview

<p style={{display: (`player` === 'player') ? '' : 'none'}}>
    <i> Note: This is a feature of <b>Prism</b> and <b>Prism Zero</b> only. </i>
</p>

<div style={{display: (`player` === 'prism' || `player` === 'zero') ? '' : 'none'}}>
  <p>When previewing an element adjustments can be made to its properties, please see <a href='../preview'>Preview</a> for more details on how this works.</p>

  <p>After any adjustments are made from the <b>Preview</b>, when the media is ready to export, pressing the <Keys.PrismKey>Send To Encoder</Keys.PrismKey> button will send all selected files into the <b>Encoder</b> Area. All details from the media files will be preserved and setup automatically to encode into the <b>AIM</b> codec. If the media file has been renamed this will also be used to set the output file name when encoding.</p>
</div>

### Menu Actions

Pressing the <Keys.PrismKey>Sub Menu</Keys.PrismKey> icon on individual elements allows access to the following actions:

<ul>
    <li>
        <b>Remove</b> - to delete the element from the bank.
    </li>
    <li style={{display: (`player` === 'prism' || `player` === 'zero') ? '' : 'none'}}>
        <b>Preview</b> - adjust settings of the bank element
    </li>
    <li>
       <b>Duplicate</b> - add a new copy of the bank element, including all settings
    </li>
    <li>
        <b>Show in folder</b> - Open file explorer and navigate to the element's media file.
    </li>
</ul>

## Grid View

*Grid View* allows for easier triggering of clips due to the larger trigger area, thumbnails are shown here and are also stored on the **Prism Media Cache**.

![Prism Player Banks](/prismdocs/images/player-grid-banks.png)

## Import & Export

Banks are able to be imported and exported from the application by clicking `Edit > Import / Export` from the header menu. The dialog defaults its location to the Windows Documents Folder under `Avolites > Prism > Player`.