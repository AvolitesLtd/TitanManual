---
id: dmx-network-setup
title: DMX  network setup
sidebar_label: DMX  network setup
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

The console will control up to 64 universes of DMX. You patch fixtures onto
one of 64 **DMX Lines** which may be routed to the XLR sockets on the console or to Art-Net or sACN universes 
over Ethernet (see [DMX Output Mapping](../system-settings/dmx-output-mapping.md) for details).

- If using the T1 / T2 / T3 hardware the output is limited to the first one, two or sixteen universes respectively.
A console would normally output up to 16 universes itself (32 for D9 and D7), further Titan Network Processors (TNP) units would be connected to the network using TitanNet to control up to 64 universes. For simple programming or rigs with lots of space in the patch you may be able to output more than 16 universes (32 for D9 and D7) from a console but operating speed may be affected.

Multiple consoles can be linked by Ethernet to provide a [multi-user](../titan-basics/multi-user-operation.md)
system, or to provide automatic [backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#setting-up-consoles-for-backup).

Go to the **System** menu (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>), press <Keys.SoftKey>DMX
Settings</Keys.SoftKey>.

Select a Node on the left (where the DMX is going to). On the right, 
select the DMX line it will be fed by. The small <Keys.ContextKey>Cog</Keys.ContextKey> buttons set 
properties for Nodes/Lines. See [DMX Output Mapping](../system-settings/dmx-output-mapping.md).

To change the IP address of the console, press <Keys.SoftKey>Network Settings</Keys.SoftKey> on
the **System** menu (see [Network Settings](../networking.md)).

To change [User Settings](../system-settings/user-settings.md) which let you personalise how the console works,
hold down <Keys.HardKey>Avo</Keys.HardKey> and select <Keys.SoftKey>User Settings</Keys.SoftKey>.
