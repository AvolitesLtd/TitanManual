---
id: setting-up-the-remote 
title: Setting up the Remote
sidebar_label: Setting up the Remote
---

All you need to do is make sure that the console is on the same network
as your mobile device. The app will automatically detect all the
consoles on the network.

> Ensure that WiFi security is enabled on the network you are using, as anyone who can connect to the WiFi and has the app will be able to control the console. You don't want someone in the audience taking over the show.

You may experience problems with the remote if you have an internet
router on the network, as this may route show traffic to the
internet rather than between the remote and the console. If the
remote does not work properly, disconnect your router from the
network.

Using an Existing Network
-------------------------

If you are connecting to an existing network, DHCP will probably be
enabled which will automatically set suitable IP addresses on the
console and mobile device. All you should need to do is to plug the
console's Ethernet connection into the network.

If the console is set to have a fixed IP address you will need to
manually set a suitable IP address for the network - *consult the person
who manages the network*, or read more about [Networking the Console](../networking.md).

Network Setup using a Dedicated Access Point
--------------------------------------------

This is a basic setup assuming that the console is connected directly to
an access point. For information on setting up your Wireless Access
Point please refer to the documentation provided with it.

> We advise using a dedicated wireless access point rather than a
wireless router (ADSL router). Although routers are cheaper, the
WiFi connection through to the Ethernet can be flaky. Some routers
can be switched to an *"access point"* mode to avoid this problem.

You need to set up the network settings on the Wireless Access Point,
the mobile device and the console so that they can communicate with each
other. In this example we use an Android smartphone but other devices
are similar.

1. In the access point's admin screen, give the access point an IP
address such as `10.0.0.1`, make sure wireless is switched on and enable
the DHCP server. Take note of the name of the wireless network (SSID).

2. Connect an Ethernet cable from the back of the console to the access
point.

3. Set the IP address of the console: Switch to System, select
\[Network Settings\], press \[Local Area Connection\], then press \[Set
IP 10.\*.\*.\*\].

4. On the mobile device, go to WiFi settings or Network Settings and
ensure WiFi is set to on.

5. Select the wireless network from the list, the name you took note of
earlier. The mobile device should automatically get an IP address from
the access point.

6. Run the Titan Remote app. You should see the console listed.

> If you are using the remote at show time, on the Access Point you should select the option to hide the SSID. If you do not do this, every smartphone in the audience will find your WiFi and try to connect to your Access Point which will make the remote operation very sluggish.