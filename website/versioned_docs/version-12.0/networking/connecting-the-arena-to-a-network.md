---
id: version-12.0-connecting-the-arena-to-a-network
title: Connecting the Arena to a network
sidebar_label: Connecting the Arena to a network
original_id: connecting-the-arena-to-a-network
---

The Arena console is different to the other Titan consoles because it
has a built-in network switch and an optical network connection
(optionally 2 optical connections). **This section applies only to the
Arena console.**

Optical Connections
-------------------

The optical network connector is a Neutrik opticalCon Duo which uses
multimode fibre. A single connector is fitted as standard, but a second
can be fitted on request. The stage end of the connection normally plugs
into the Avolites TitanNet Switch (TNS) rack unit which provides
standard wired ethernet connections. If you want to connect to a
different optical switch you should contact Avolites for advice.

Wired Ethernet Outputs
----------------------

The Arena console has an in-built 1Gb TitanNet switch (TNS) that is
directly connected to the console Main board on network connection 1.
The network switch has 4 ports available on the back of the console.

The mainboard Network Connection 2 is available on the EtherCon
connector at the back of the console and marked as "secondary Ethernet"
on the back. We recommend that this should only be used if you need to
connect to two different networks, for example the show network and an
office network for documentation.

The network switch and the controller for the switch both use an IP
address. When the controller IP address is set, the network switch will
use the next one (for example controller `10.19.0.50`, network switch
becomes `10.19.0.51`)

Changing the IP address of the Titan Network Switch (TNS)
---------------------------------------------------

The controller and network switch IP address do not need to be changed
unless they overlap other devices on the network. The factory default is
`10.19.aa.bb` where `aa.bb` is the serial number of the console *(e.g. `10.19.01.124` is
serial number **379** or **255+124**)*.

To change the IP address of the TNS in the console:

1. Open **USB Expert Console** from the **Tools** menu

2. Select the TNS panel

![USB Expert Tools - TNS Panel](/docs/images/USB-Expert-Tools-TNS-Panel.png)

3. In the **IP Address Dialog**, set the new IP address.

![USB Expert Tools - TNS Panel - IP Address Dialog](/docs/images/USB-Expert-Tools-TNS-Panel-IP-Address-Dialog.png)

Power and UPS behaviour 
-----------------------

The TitanNet switch in the console runs from the same UPS as the console
itself, so if power fails the switch will continue working.

When you power down the Arena, the UPS will continue to power the
internal switch for about 5 minutes. This is to allow you to restart the
console without interrupting the network (for example if you have
connected a backup console via the Arena switch).


