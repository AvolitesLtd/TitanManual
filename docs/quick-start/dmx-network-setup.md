---
id: dmx-network-setup
title: DMX  network setup
sidebar_label: DMX  network setup
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Titan will control up to 64 universes of DMX (some consoles have a lower system limit). You patch fixtures onto
one of the **DMX Lines** which may be routed to the XLR sockets on the console or to Art-Net or sACN universes 
over Ethernet. The output
universes/lines may have any universe number 1 - 9999 to match your rig but you can't have more in total than the system limit.

The console itself can't process and output all 64 universes. To control outputs above the processing limit, you need to add one or more TNP (TitanNet Processors) to the system to handle the additional processing needed.

- See [DMX Settings](../system-settings/dmx-output-mapping.md) for details of system limits and processing limit for each console. 

On 
consoles/devices with limited outputs, all universes are still patchable and programmable but only the lowest numbered will be output. You cannot increase the number of universes by connecting multiple devices (e.g. 2x T1 will still output one universe).

Multiple consoles can be linked by Ethernet to provide a [multi-user](../titan-basics/multi-user-operation.md)
system, or to provide automatic [backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#setting-up-consoles-for-backup).

Go to the **System** menu (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>), press <Keys.SoftKey>DMX
Settings</Keys.SoftKey>.

Select a Node on the left (where the DMX is going to). On the right, 
select the DMX line it will be fed by. The small <Keys.ContextKey>Cog</Keys.ContextKey> buttons set 
properties for Nodes/Lines. See [DMX Settings](../system-settings/dmx-output-mapping.md).

To change the IP address of the console, press <Keys.SoftKey>Network Settings</Keys.SoftKey> on
the **System** menu (see [Network Settings](../networking.md)).

To change [User Settings](../system-settings/user-settings.md) which let you personalise how the console works,
hold down <Keys.HardKey>Avo</Keys.HardKey> and select <Keys.SoftKey>User Settings</Keys.SoftKey>.

You can attach sACN inputs to a line to read in control data from another console. See [Using DMX/sACN Input](/controlling-fixtures/changing-fixture-attributes.md#using-dmxsacn-input).
