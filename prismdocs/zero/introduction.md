---
id: introduction
title: Introduction
sidebar_label: Introduction
---
**Prism Zero** is a simplified version of **Prism**, developed by **Avolites**. It is ["Free with a key"](../licensing#prism-zero), as it is free to use but requires a license key to operate.

On top of providing conversion, previewing and playback of media, **Prism Zero** also adds **Synergy** compatibility with **Avolites Titan** allowing for full layer control, **NDI** previewing and the use of the video output from **Prism Zero** as a source for the **Pixelmapper** in **Titan**.

**Prism Zero** is limited to 1 Surface, 1 Layer, and 1 Bank. Each bank can hold up to 256 elements.

**Prism Zero** provides 1 physical output and 1 NDI output.

![Prism Zero UI](/prismdocs/images/prism-zero-ui.png)

**Prism Zero** is composed of two parts - the **Server** and the **UI**. The **Server** runs in the [system tray](./quick-start/system-tray) and the **UI** will run separately and show the interface.  

Please note that closing the **UI** doesn't necessarily close the server as this allows for any playback, encoding, or **Synergy** control, to carry on behind the scenes. More information on this is found on the [General](./settings/settings-general) settings page.

The **Server** and the **UI** communicate using **port 9030**, no other application must use this port in order for **Prism Zero** to work.

When starting **Prism Zero** you may be prompted to add a firewall exception. If you have this experience please add this port to your firewall / anti-virus lists.

Please contact <a href="mailto:support@avolites.com?subject=Prism:">support@avolites.com</a> if you require any support.
