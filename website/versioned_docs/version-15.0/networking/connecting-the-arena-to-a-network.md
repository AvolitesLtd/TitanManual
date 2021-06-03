---
id: connecting-the-arena-to-a-network
title: Connecting the Diamond 9 or Arena to a network
sidebar_label: Connecting the Diamond 9 or Arena to a network
---

The Diamond 9 and Arena consoles are different to the other Titan consoles because they
have a built-in network switch and an optical network connection.  <em></em>This section applies only to the Diamond 9 and 
Arena consoles.<em></em>

Optical Connections
-------------------

The optical network connector is a Neutrik opticalCON which uses
multimode fibre. On the Arena the connector is a Duo, a single connector is fitted as standard, but a second
can be fitted on request. On the Diamond 9 the connector is a Quad with one of the two pairs populated as standard - if the
optional 10GbE Ethernet is fitted then the second pair is populated with a 10GbE fibre.

The stage end of the connection normally plugs
into the Avolites TitanNet Switch (TNS) rack unit which provides
standard wired Ethernet connections. If you want to connect to a
different optical switch you should contact Avolites for advice.

Wired Ethernet Outputs
----------------------

The Diamond 9 console has an in-built 1Gb Luminex network switch; the 
Arena console has an in-built 1Gb TitanNet switch (TNS). These are
directly connected to the console Main board on network connection 1.
The network switch has 4 ports available on the back of the console.

The mainboard Network Connection 2 is available on a separate etherCON
connector at the back of the console and marked as "secondary Ethernet"
on the back. We recommend that this should only be used if you need to
connect to two different networks, for example the show network and an
office network for documentation.

The Diamond 9 can be fitted with a 10GbE port as an optional extra.

The network switch and the controller for the switch both use an IP
address. When the controller IP address is set, the network switch will
use the next one (for example controller `10.19.0.50`, network switch
becomes `10.19.0.51`)

Changing the IP address of the Titan Network Switch (TNS)
---------------------------------------------------

The controller and network switch IP address do not need to be changed
unless they overlap other devices on the network. The factory default is
`10.19.aa.bb` where `aa.bb` is the serial number of the console *(e.g. `10.19.01.124` is
serial number <strong>379</strong> or <strong>255+124</strong>)*.

To change the IP address of the TNS in the console:

1. Open <strong>USB Expert Console</strong> from the <strong>Tools</strong> menu

2. Select the TNS panel
![USB Expert Tools - TNS Panel](/docs/images/USB-Expert-Tools-TNS-Panel.png)

3. In the <strong>IP Address Dialog</strong>, set the new IP address.
![USB Expert Tools - TNS Panel - IP Address Dialog](/docs/images/USB-Expert-Tools-TNS-Panel-IP-Address-Dialog.png)

Power and UPS behaviour 
-----------------------

The network switch in the console runs from the same UPS as the console
itself, so if power fails the switch will continue working.

When you power down the console, the UPS will continue to power the
internal switch for about 5 minutes, or until mains power is removed. This is to allow you to restart the
console without interrupting the network (for example if you have
connected a backup console via the inbuilt switch).


