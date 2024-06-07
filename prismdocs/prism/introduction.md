---
id: introduction
title: Introduction to Prism
sidebar_label: Introduction
---

**Prism** is a standalone application built by **Avolites** that expands beyond the feature-set found in **Prism Player** and **Prism Zero**. 

On top of the features that are provided by  **Prism Zero**, **Prism** allows for the use of multiple banks and layers to be controlled right inside **Prism's** UI or via **Synergy** layer control. 

The bank also allows for input sources to be added including, **NDI input**, **Live input** *e.g. usb capture / webcams*, and **Virtual Returns**, to mix layers together. These can all be setup via the [Input Settings](../prism/settings/settings-inputs.md) page and adjusting via the [Preview](../prism/play/banks#preview) window.

![Prism UI](/prismdocs/images/prism-ui.png)

**Prism** is composed of two parts - the **Server** and the **UI**. The **Server** runs in the [system tray](./quick-start/system-tray.md) and the **UI** will run separately and show the interface. The components communicate using **port 9030**, no other application must use this port in order for **Prism** to work. 

When starting **Prism** you may be prompted to add a firewall exception. If you have this experience please add this port to your firewall / anti-virus lists.

Please note that closing the **UI** doesn't necessarily close the server as this allows for any encoding, or **Synergy** control, to carry on behind the scenes. More information on this is found on the [General](./settings/settings-general) settings page.

Please contact <a href="mailto:support@avolites.com?subject=Prism:">support@avolites.com</a> if you require any support.
