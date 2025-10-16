---
id: dmx-network-setup
title: DMX  network setup
sidebar_label: DMX  network setup
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Titan will control up to 64 universes of DMX (depending on licence). You patch fixtures onto
one of 64 **DMX Lines** which may be routed to the XLR sockets on the console or to Art-Net or sACN universes 
over Ethernet (see [DMX Settings](../system-settings/dmx-output-mapping.md) for details). The output
universes/lines may have any universe number to match your rig but you can only have 64 universes in total.

Some consoles/devices have limited outputs. All universes are still patchable and programmable but only the lowest numbered will be output. You cannot increase the number of universes by connecting multiple devices (e.g. 2x T1 will still output one universe).
- T1: 1 universe
- T2: 2 universes
- T3: 16 universes (expandable by add on licence purchase)
- D3-010: 8 universes
- D3-110: 24 universes
- D3-Core: 16 universes

The console itself can't process and output all 64 universes. It's recommended to limit D9 and D7 to 32 universes, D3-110 to 24, others to 16. Titan Network Processor (TNP) units are connected to the network using TitanNet to process more universes. For simple programming or rigs with lots of space in the patch you may be able to output more universes directly from the console but operating speed may be affected.

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
