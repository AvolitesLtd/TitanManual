---
id: introduction
title: Introduction
sidebar_label: Introduction
---

**Prism Zero** is our "light" version of **Prism**. 

It is a ["Free with a key"](../licensing), standalone auxiliary application built by **Avolites** that expands beyond the feature-set found in **Prism Player**. 

On top of providing conversion, previewing and playback of media, **Prism Zero** also adds **Synergy** compatibility with **Avolites Titan** allowing for full layer control, **NDI** previewing and the use of the video output from **Prism Zero** as a source for the **Pixelmapper** in **Titan**.

![Prism Zero UI](/prismdocs/images/prism-zero-ui.png)

Similar to **Prism Player**, **Prism Zero** is composed of two parts - the **Server** and the **UI**. The **Server** runs in the [system tray](./quick-start/system-tray) and the **UI** will run separately and show the interface. The components communicate using **port 9030**, no other application must use this port in order for **Prism Zero** to work. 

When starting **Prism Zero** you may be prompted to add a firewall exception. If you have this experience please add this port to your firewall / anti-virus lists.

Please note that closing the **UI** doesn't necessarily close the server as this allows for any encoding, or **Synergy** control, to carry on behind the scenes. More information on this is found on the [General](./settings/settings-general) settings page.

Please contact <a href="mailto:support@avolites.com?subject=Prism%20Zero:">support@avolites.com</a> if you require any support.
