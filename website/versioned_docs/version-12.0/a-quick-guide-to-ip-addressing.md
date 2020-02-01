---
id: version-12.0-a-quick-guide-to-ip-addressing
title: A quick guide to IP addressing
sidebar_label: A quick guide to IP addressing
original_id: a-quick-guide-to-ip-addressing
---

This section attempts to explain the basics of IP addressing, and what
you will need to know when setting up a lighting control network.

IP addresses will normally come in the format "w.x.y.z" where w, x, y
and z are numbers between 0 and 255. For example "192.168.0.1". Every
object (or node or device) on a network should have a unique IP address.
This is the same concept as DMX as each fixture requires a unique DMX
address, for IP addresses the same is required.

Setting your IP address
-----------------------

The console has a setup function to quickly set its IP address as
described on page 341.

There is a strong possibility that if you set the IP address on one
network device you will have to set it on all of them, therefore if you
manually set your IP address on the console you will have to do it on
any TitanNet devices you are using and any Art-Net fixtures. Beware that
some Art-Net fixtures have a fixed IP address in the range 2.x.x.x, in
which case you have to set the console to that range.

Subnet Masks
------------

These are best kept simple. All devices or nodes on a network who wish
to communicate with each other must have the same subnet mask. The mask
determines which parts of the IP address are unique in that network to
each node. If the part of the subnet mask is a 0 then the corresponding
digit in an IP address must be unique for each fixture. If the part in a
subnet mask is 255 then this part of the IP address needs to be the same
for each node.

Choosing an IP address and Subnet Mask
--------------------------------------

This is the hardest part of setting up a network as your IP address
totally depends on what you are using on the network and what IP
addresses you can and cannot change. Below are a number of different
scenarios for standard lighting networks using a Titan console and what
IP addresses should be set. These aren't guaranteed to work but try them
if the scenario matches your network:

**Titan and TNP, all output is standard DMX.**

                  IP Address     Subnet Mask
  --------------- -------------- ---------------
  Titan console   192.168.1.30   255.255.255.0
  TNP             192.168.1.31   255.255.255.0

**Titan outputting over Art-Net Fixtures (and DMX).**

                     IP Address      Subnet Mask
  ------------------ --------------- -------------
  Titan console      2.100.100.100   255.0.0.0
  Art-Net Fixtures   2.x.y.z         255.0.0.0

Or

                     IP Address       Subnet Mask
  ------------------ ---------------- -------------
  Titan console      10.100.100.100   255.0.0.0
  Art-Net Fixtures   10.x.y.z         255.0.0.0

Where a combination of x, y and z are unique for these fixtures.

**Titan and TNP outputting over Art-Net (and DMX).**

                     IP Address      Subnet Mask
  ------------------ --------------- -------------
  Titan console      2.100.100.100   255.0.0.0
  TNP                2.100.100.101   255.0.0.0
  Art-Net Fixtures   2.x.y.z         255.0.0.0

Or

                     IP Address       Subnet Mask
  ------------------ ---------------- -------------
  Titan console      10.100.100.100   255.0.0.0
  TNP                10.100.100.101   255.0.0.0
  Art-Net Fixtures   10.x.y.z         255.0.0.0

Where a combination of x, y and z are unique for these fixtures.

  --------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------
  ![info](/docs/images/image6.png){width="0.7361111111111112in" height="0.6527777777777778in"}   Never set the last number of an IP address to be 255. This is a special address which will not function correctly.
  --------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------

Automatically assigning IP addresses (DHCP)
-------------------------------------------

> There is another way of assigning IP addresses via an automatic system
> called DHCP, where one of the computers on the network will
> automatically give other devices an IP address when it connects.
>
> Generally we would not advise using DHCP on a lighting network as many
> nodes do not support it. If you must operate on a network with DHCP,
> most DHCP servers will have a reserved range of "static" addresses
> which can be manually set. You can usually find these out from the
> DHCP server configuration.

Private IP address ranges
-------------------------

If your network is connected to the internet it is important to use a
private IP address range. These are special IP addresses that will not
be routed onto the internet. They are:

  Start Address   Final Address     Subnet Mask
  --------------- ----------------- ---------------
  10.0.0.0        10.255.255.255    255.0.0.0
  172.16.0.0      172.31.255.255    255.255.0.0
  192.168.0.0     192.168.255.255   255.255.255.0

For Art-Net, the 10.x.x.x range must be used.


