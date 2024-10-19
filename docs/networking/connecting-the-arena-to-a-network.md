---
id: connecting-the-arena-to-a-network
title: Connecting consoles to a network
sidebar_label: Connecting consoles to a network
---

All Avolites consoles may be connected to an ethernet network to allow control of fixtures by Art-Net or sACN, or to connect to a visualisation system.

For T1, T2 and T3 which are used with a laptop or PC, the network connection of the laptop or PC is used. (Wifi connections should not be used for control
of fixtures as you will not get reliable and smooth operation.)

Consoles other than D9, D7 and Arena have one or two direct ethernet connections which may be used for network setup.

The D9, D7 and Arena consoles are different to the other Titan consoles because they
have a built-in network switch and (for D9 and Arena) an optical network connection.  **The rest of this section applies only to the Diamond 9, Diamond 7 and 
Arena consoles.**

> See the next section for details of how to configure the console for network operation, including how to set up IP addresses and how to patch network-connected fixtures.

## Optical Connections (D9 and Arena)

The optical network connector is a Neutrik opticalCON which uses
multimode fibre. On the Arena the connector is a Duo, a single connector is fitted as standard, but a second
can be fitted on request. On the Diamond 9 the connector is a Quad with one of the two pairs populated as standard - if the
optional 10GbE Ethernet is fitted then the second pair is populated with a 10GbE fibre.

The stage end of the connection normally plugs
into the Avolites TitanNet Switch (TNS) rack unit which provides
standard wired Ethernet connections. If you want to connect to a
different optical switch you should contact Avolites for advice.

## Wired Ethernet Outputs

The Diamond 9 and Diamond 7 consoles have an in-built 1Gb Luminex network switch; the 
Arena console has an in-built 1Gb TitanNet switch (TNS). These are
directly connected to the console Main board on network connection 1.
The network switch has 4 ports available on the back of the console.

The mainboard Network Connection 2 is available on a separate etherCON
connector at the back of the console and marked as "secondary Ethernet"
on the back. We recommend that this should only be used if you need to
connect to two different networks, for example the show network and an
office network for documentation. Make sure that this port is not set to the same
IP range as the switch, because this will cause problems.

The Diamond 9 can be fitted with a 10GbE port as an optional extra.

## Changing settings on the D9 / D7 Luminex switch

In normal use you will not need to change the settings on the Luminex switch, but if you have a complex network
setup you can use Luminex's Araneo software to connect to the switch and configure it. 
(External link)
[https://www.luminex.be/products/software/araneo/](https://www.luminex.be/products/software/araneo/)

>  On the D9 you can reset the Luminex switch to its default settings by holding the Reset button next
to the four etherCON sockets for 5 seconds. The lights will flash red and the switch will be
reset to its default IP address (which is printed on a sticker on the switch inside the console).

## Changing the IP address of the Arena's Titan Network Switch (TNS)

The network switch and the controller for the switch both use an IP
address. When the controller IP address is set, the network switch will
use the next one (for example controller `10.19.0.50`, network switch
becomes `10.19.0.51`). 
In normal use you will not need to change these IP addresses 
unless they are already used by other devices on the network. The factory default is
`10.19.aa.bb` where `aa.bb` is the serial number of the console *(e.g. `10.19.01.124` is
serial number **379** or **255+124**)*.

To change the IP address of the TNS in the console:

1. Open **USB Expert Console** from the **Tools** menu.
2. Select the TNS panel<br/>
  ![USB Expert Tools - TNS Panel](/docs/images/USB-Expert-Tools-TNS-Panel.png)
3. In the **IP Address Dialog**, set the new IP address.<br/>
  ![USB Expert Tools - TNS Panel - IP Address Dialog](/docs/images/USB-Expert-Tools-TNS-Panel-IP-Address-Dialog.png)

## Power and UPS behaviour 

The network switch in the console runs from the same UPS as the console
itself, so if power fails the switch will continue working.

When you power down the console, the UPS will continue to power the
internal switch for about 5 minutes, or until mains power is removed. This is to allow you to restart the
console without interrupting the network (for example if you have
connected a backup console via the inbuilt switch).


