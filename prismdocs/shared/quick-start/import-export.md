---
id: import-export
title: Import & Export
sidebar_label: Import & Export
---
import Keys from '@site/src/components/key.ts';

Banks and Encode Lists can be saved to an external file (Export), and loaded from an external file (Import).

## Export

{{PRISM-START-COMMENT}}
To export a **Prism** Bank, first select a Bank and then click on `File > Export > Bank`.  
{{PRISM-END-COMMENT}}

{{PLAYER-START-COMMENT}}
To export a **Prism Player** Bank, click on `File > Export > Bank`.  
{{PLAYER-END-COMMENT}}

The default destination folder of Bank files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Playlists`.

To export a **{{PRISM-APP}}** Encode List, click on `File > Export > Encode List`.  
The default destination folder of Encode List files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Encodelists`.

## Import 

To import a **{{PRISM-APP}}** Bank, click on `File > Import > Bank`.  
The default source folder of Bank files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Playlists`.

{{PLAYER-START-COMMENT}}
The imported Bank will replace the existing one.
{{PLAYER-END-COMMENT}}

{{PRISM-START-COMMENT}}
The imported Bank will be added to the **Banks** if there is no selected Bank, otherwise it will replace the selected Bank. 
{{PRISM-END-COMMENT}}

It is also possible to import a Bank in the <b>Banks</b> view using the Bank <Keys.PrismKey>Sub Menu</Keys.PrismKey> Import function.

To import a **{{PRISM-APP}}** Encode List, click on `File > Import > Encode List`.  
The default source folder of Encode List files is in the **Documents** folder under `Avolites > Prism > {{PRISM-PATH}} > Encodelists`.
The imported Encode List will replace the existing one.