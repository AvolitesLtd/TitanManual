---
id: dmx-network-setup
title: DMX  network setup
sidebar_label: DMX  network setup
---

import Keys from '@site/src/components/key.ts';

The console can output up to 16 universes of DMX (called DMX Lines)
which may be routed to the XLR sockets on the console or over Ethernet
(The T1 dongle is limited to a single universe, T2 to 2 universes.) By
connecting further Titan Network Processors (TNP) to the network using
TitanNet, you can control up to 64 universes.

Multiple consoles can be linked by Ethernet to provide a [multi-user](../titan-basics/multi-user-operation.md)
system, or to provide automatic [backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#setting-up-consoles-for-backup).

Go to the **System** menu (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>), press \[DMX
Settings\].

Select a Node on the left (where the DMX is going to). On the right, 
select the DMX line it will be fed by. The small <Keys.ContextKey>Cog</Keys.ContextKey> buttons set 
properties for Nodes/Lines. See [DMX Output Mapping](../system-settings/dmx-output-mapping.md).

To change the IP address of the console, press <Keys.SoftKey>[Network Settings](../networking.md)</Keys.SoftKey> on
the **System** menu.

To change [User Settings](../system-settings/user-settings.md) which let you personalise how the console works,
hold down <Keys.HardKey>Avo</Keys.HardKey> and select <Keys.SoftKey>User Settings</Keys.SoftKey>.
