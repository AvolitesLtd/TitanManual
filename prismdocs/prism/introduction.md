---
id: introduction
title: Introduction
sidebar_label: Introduction
---
**Prism** is specialized software developed by **Avolites**, tailored for media playback and designed specifically for the live events and entertainment industry.

**Prism** allows for the use of multiple banks and layers to be controlled right inside **Prism's** UI or via [Synergy](./settings/settings-synergy.md) layer control. 

The bank also allows for input sources to be added including, **NDI input**, **Live input** *e.g. usb capture / webcams*, and **Virtual Returns**, to mix layers together. These can all be setup via the [Input Settings](./settings/settings-inputs.md) page and adjusting via the [Preview](./play/banks.md#preview) window.

**Prism** is limited to 1 Surface, 16 Layers, and 256 Banks. Each bank can hold up to 256 elements.

**Prism** provides 1 physical output and 1 NDI output.

**Prism** requires a license to run. Please refer to the [licensing page](/prism/licensing#prism) in this manual.

![Prism UI](/prismdocs/images/prism-ui.png)

**Prism** is composed of two parts - the **Server** and the **UI**. The **Server** runs in the [system tray](./quick-start/system-tray.md) and the **UI** will run separately and show the interface.  

Please note that closing the **UI** doesn't necessarily close the server as this allows for any playback, encoding, or **Synergy** control, to carry on behind the scenes. More information on this is found on the [General](./settings/settings-general.md) settings page.

The **Server** and the **UI** communicate using **port 9030**, no other application must use this port in order for **Prism** to work.

When starting **Prism** you may be prompted to add a firewall exception. If you have this experience please add this port to your firewall / anti-virus lists.

Please contact <a href="mailto:support@avolites.com?subject=Prism:">support@avolites.com</a> if you require any support.
