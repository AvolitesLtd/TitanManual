---
id: version-12.0-controlling-fixtures-over-a-network
title: Controlling Fixtures over a Network
sidebar_label: Controlling Fixtures over a Network
original_id: controlling-fixtures-over-a-network
---

Before the console can talk to another device over the network, it has
to be given a unique network address. This is called its "IP address".

Setting the console's IP address
--------------------------------

We recommend that you use the console's automatic IP setting function.
However, if you need to you can also set the IP address using Windows
Control Panel as shown on page 345.

1. Switch to System mode and press \[Network Settings\]

2. Press \[Local Area Connection\].

3. Press \[Subnet Mask\] and ensure it is set to `255.255.255.0`

4. Press \[Set IP `2.\*.\*.\*\`]

5. Press \[Save settings\]

6. \<Exit\> system mode.

-   Some equipment may operate on IP addresses 10.\*.\*.\* (softkey D)
    -- see later in this chapter for details.

-   If you need a non-standard IP address range you can use softkey A.

Setting up DMX outputs
----------------------

The console has 64 DMX output lines, of which the console itself can
output 16, with further lines available using networked DMX processing
nodes. The T1 dongle is limited to one DMX line, T2 to two DMX lines The
lines may be routed to physical DMX sockets and/or to [network nodes](../networking/controlling-fixtures-over-a-network.md).

A simple Art-Net system
-----------------------

There are various different systems for sending lighting control
information over a network. One of the most widely supported is Art-Net.

Art-Net is not specific to one range of products, and is recognised and
implemented by a growing number of manufacturers. Many products (such as
Dimmers and Moving lights) can accept the Art-Net signal directly, so
there is no need to convert the signal to DMX. Most people will,
however, need to output DMX to their equipment and this can be done
using an Art-Net to DMX converter.

In the following diagram, an Art-Net compliant Console (such as a Titan
console) is connected via a network hub to an Art-Net compatible dimmer
and 2 DMX conversion boxes.

![Art Net Explanation
general](/docs/images/image356.jpeg)

Once the system is connected together, the different outputs (or Nodes)
can be configured.

-   The dimmer is given the start address of 200

-   The 1st DMX box is set to universe 1 and universe 2

-   The 2nd DMX box is also set to universe 1 and universe 2

The console is then used to set the DMX lines to the Art-Net nodes.

It is important to remember:

-   Each Art-Net to DMX box (or compatible Dimmer, or compatible moving
    light) is a device,

-   Each device may have one or more nodes(i.e. the Art-Net to DMX box
    has 2 nodes, these are the 2 DMX outputs; the dimmer itself is a
    node),

-   Each node can be set to a Universe (1-256). This universe is
    equivalent to a 512 channel DMX line

You can then specify which console line is assigned to each node. A
console line can be assigned to multiple nodes (this will duplicate the
DMX universe), but each node should have only one console line assigned
to it.

Here, the console assigns the following:

-   Line A to Box 1 universe 1 and box 2 universe 1

-   Line B to Box 1 universe 2

-   Line C to Box 2 universe 2 and the dimmer rack

![Art Net Explanation Nodes to
DMX](/docs/images/image357.jpeg)

Setting up an Art-Net system
----------------------------

For this example, it is assumed that you will connect the console to an
Art-Net DMX output box (such as an Artistic License Net-Lynx) via a
network hub.

![Art Net Explanation Simple
System](/docs/images/image358.jpeg)Using standard RJ45 ethernet cables,
attach the devices together.

-   If you are using a hub/switch as shown above, use straight-through
    patch cables. If you are directly connecting the console to another
    Ethernet device you need to use crossover cables.

Set the Net-Lynx box as follows:

-   Subnet Mask = 0

-   DMX A Universe = 1

-   DMX B Universe = 2

A lot of Art-Net devices, including the Net-Lynx box, are set to IP
address 2.x.x.x as default, and can be set to 10.x.x.x using an option
jumper, so you should check what the setting of your device is.

If your Art-Net devices need to be set to a non-standard IP address,
then in steps 1 and 2 you need to use Windows Control Panel to set the
console to that address range instead of 2.x.x.x

With everything connected, start the console.

1. Ensure the console has an IP in the 2.x.x.x range as described at
the start of the chapter.

2. Switch the console to System and select \[DMX Settings\].

3. The DMX Settings window should open.

4. Select the Art-Net module from the node list in the left hand side
of the window.

5. Press the small 'i' button to show the node properties. Ensure that
the correct Network adapter is set (this may not be the Default Adapter)

6. If you wish to turn off the Art-Net output, you can unselect the
\"Enable DMX output\" option. This will stop the Console from outputting
Art-Net on any Lines.

7. Art-Net normally only sends Data when it is changed, rather than a
continuous stream. There are times when it is preferable to send Art-Net
all the time. to do this, select the \"Continuous Art-Net Data Stream\"
option.

8. The \"Always broadcast Art-Net\" option enables you to send Art-Net
to the entire network, rather than a specific IP address.

9. Press the blue → arrow on the Art-Net node to connect it to a DMX
output line.

10. Select a console DMX line from the right hand side of the window.

11. The DMX line will now be outputting over the selected Art-Net node.

12. Click 'i' on the node you have added to make sure the properties
are correct. (Problems can be caused if you attach multiple DMX lines to
a single node.)

13. Make sure that the Universe is set to 1 for Line 1, and 2 for Line
2.

Art-Net uses a subnet mask with its universe. For Titan purposes:

Titan universes 1 - 16 are subnet mask = 0, Art-Net universes = 1 -- 16

14. You can close the DMX settings window.

The console should now be working correctly.

To remove a node from a DMX line, select the node and click the blue X
button.

\"Unpolled\" and \"unknown\" devices may appear as Art-Net nodes.

-   An unpolled device is a \'rolling extra\' which allows more than 4
    connections to be made to a particular Art-Net device. The Art-Net
    specification only allows each device to advertise a max of 4
    universes so if you need to add more the console has to invent the
    5th, 6th, etc universes.

-   An unknown device is one which doesn't format an Art-Net poll reply
    properly so the console doesn\'t known if it is an input or output
    device.

Additional Art-Net Resources
----------------------------

To find out more information about Art-Net please refer to the Art-Net
Standard published by [Artistic
Licence](http://www.artisticlicence.com).
