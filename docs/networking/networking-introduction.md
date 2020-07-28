---
id: networking-introduction
title: Networking the Console
sidebar_label: Networking the Console
---

There are a number of ways for the console to communicate with lighting
fixtures beyond the traditional DMX sockets, and these are described in
this chapter.

If the console has multiple network ports, [DMX will be output on all
ports](system-settings/dmx-output-mapping.md#configuring-dmx-outputs). You can set this from the DMX module properties in the DMX
Settings window, each port is listed with a switch to enable or disable
it.

You can also connect to [networked processing nodes](titan-net.md), which allow you to
control up to 64 universes of DMX.

The console may also be networked with other Titan consoles for
multi-user control, and for backup.


> At the end of the chapter is a section which aims to cover [the basics of
IP addressing](networking/a-quick-guide-to-ip-addressing.md), which is essential for various features on the console
such as Art-Net.

---
  
> Lighting networks need to transfer of large amounts of data. For best reliability you should use network wiring which is dedicated to the lighting system and physically isolated from other networks, and uses simple hubs rather than intelligent switches.
  
Connecting to an existing network with other network traffic is possible but can lead to problems both with the lighting equipment and with other IT equipment on the network. Intelligent Ethernet switches may drop or block lighting data. If you need to do this please read about the IP addresses you should use in [the IP addressing guide](networking/a-quick-guide-to-ip-addressing.md).
