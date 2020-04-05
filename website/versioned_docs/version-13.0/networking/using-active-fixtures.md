---
id: version-13.0-using-active-fixtures
title: Using Active Fixtures with CITP
sidebar_label: Using Active Fixtures with CITP
original_id: using-active-fixtures
---

CITP is a standard system allowing lighting devices to communicate and
share information. This is often used with media servers to allow the
console to get media thumbnail images and layer information from the
server. The thumbnail images can then be used on the console to select
media clips.

This section does not apply to Ai media servers which use the Synergy
system to communicate with Titan consoles.

Example CITP setup
------------------

This example shows how to set up a Hippotizer with Titan.

1. Connect the console and Hippotizer to the network. (You can connect
the Hippotizer directly to the console, if no other devices are being
connected, using a crossover patch cable).

2. Set up the IP addresses and subnet masks of the console and Hippo so
that they are on the same address range, for example `192.168.0.1` and
`192.168.0.2`.

3. If you are using Titan Mobile or Titan Simulator ensure the firewall
on your PC is disabled. Also ensure the Hippo machine is not running a
firewall.

4. Run the Hippo system. Make sure the CITP component is running.

5. Switch the console to System mode and select \[DMX Settings\].

6. On the left hand side under Art-Net you should see the Hippo with
its IP address. Click on it and then on the right hand side click on the
DMX line you want to use it with.

7. On the Hippo node on the left hand side, click the 'i' button and
set the Universe number to match the universe setting on the Hippo.

8. \<Exit\> System mode back to the default menu.

9. Restart the console software using the option on the Tools menu (for
Titan Mobile, Titan Go or Simulator just close and restart the Titan
software).

10. Go into Patch mode and select \[Active Fixtures\]. You should see
the Hippo with its IP address as a softkey option.

11. Select the Hippo, then set the DMX line to match the line you set
in Step 6.

12. Press an empty fixture handle to patch. The console will
automatically patch the required layers and master layer as a series of
fixture buttons.

13. Now if you select a fixture and open the Attribute Editor window
you should see the media thumbnails.

The next time you start the system, ensure the Hippo is powered up
before you start the console.

If you decide to re-patch to a different DMX address you will need to
re-start the Hippotizer software. You will also need to reset the
Art-Net nodes if you are moving across DMX lines.
