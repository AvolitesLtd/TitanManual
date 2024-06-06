---
id: import-export
title: Import/Export
sidebar_label: Import/Export
---
import Keys from '@site/src/components/key.ts';

Banks and Encode Lists can be saved to an external file (Export), and loaded from an external file (Import).

To export a **Prism Zero** Bank, <span style={{display: (`zero` === 'prism') ? 'inline-block' : 'none'}}> first select a Bank and then</span> click on `File > Export > Bank`.  
The default destination folder of Bank files is in the **Documents** folder under `Avolites > Prism > Zero > Playlists`.

To export a **Prism Zero** Encode List, click on `File > Export > Encode List`.  
The default destination folder of Encode List files is in the **Documents** folder under `Avolites > Prism > Zero > Encodelists`.

To import a **Prism Zero** Bank, click on `File > Import > Bank`.  
The default source folder of Bank files is in the **Documents** folder under `Avolites > Prism > Zero > Playlists`.

<!-- Player and Zero -->
<span style={{display: (`zero` === 'player' || `zero` === 'zero') ? 'inline-block' : 'none'}}>
    The imported Bank will replace the existing one.
</span>

<!-- Prism -->
<span style={{display: (`zero` === 'prism') ? 'inline-block' : 'none'}}>
   The imported Bank will be added to the <b>Banks</b> if there is no selected Bank, otherwise it will replace the selected Bank. 
</span>

It is also possible to import a Bank in the <b>Banks</b> view using the Bank <Keys.PrismKey>Sub Menu</Keys.PrismKey> Import function.

To import a **Prism Zero** Encode List, click on `File > Import > Encode List`.  
The default source folder of Encode List files is in the **Documents** folder under `Avolites > Prism > Zero > Encodelists`.
The imported Encode List will replace the existing one.