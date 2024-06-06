---
id: settings-encoder
title: Encoder Settings
sidebar_label: Encoder
---
import Keys from '@site/src/components/key.ts';

This page shows the settings for the encoding of media files.

![Settings System Info](/prismdocs/images/player-settings-encoder.png)

<table>
    <thead>
        <tr>
            <th width="250">Feature</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Auto Update Encoder Folder</b></td>
            <td>This toggle will enable/disable automatic updates of the encoded media destination folder. <br /><br /> When enabled all existing jobs in the <b>Encode List</b> will have their export destinations updated to the newly specified <b>Default Folder</b>. <br /><br /> When disabled only newly added jobs will default to this location whilst pre-existing jobs will retain their already specified output location.
            </td>
        </tr>
        <tr>
            <td><b>Default Folder</b></td>
            <td>This path is the default destination folder for encoded media. <br /><br /> By pressing the <Keys.PrismKey>Change Folder</Keys.PrismKey> button it is possible to update the default destination folder that will be displayed in the box. <br /><br /> Encoded media will use this default folder unless a specific export destination has been set for an item in the <b>Encode List</b> element <b>Encode Options</b>.
            </td>
        </tr>
        <tr >
            <td><b>Auto Replace in Playlist</b></td>
            <td style={{display: (`player` === 'prism') ? '' : 'none'}}>
            This toggle will enable/disable automatic replacement of the source media in the <b>Related Bank</b> with the encoded media. <br /><br /> When enabled, if the source media exists in the selected <b>Related Bank</b>, the source media will be replaced by the encoded media. <br /><br /> When disabled the encoded media will be added to the selected <b>Related Bank</b> if this has been specified.
            </td>
            <td style={{display: (`player` === 'zero' || `player` === 'player') ? '' : 'none'}}>
            This toggle will enable/disable automatic replacement of the source media in the bank with the encoded media. <br /><br /> When enabled, if the source media exists in the bank, the source media will be replaced by the encoded media. <br /><br /> When disabled the encoded media will be added to the bank.
            </td>
        </tr>
    </tbody>
</table>