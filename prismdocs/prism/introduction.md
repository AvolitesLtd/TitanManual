---
id: introduction
title: Introduction
sidebar_label: Introduction
---
**Prism** is specialized software developed by **Avolites**, tailored for media playback and designed specifically for the live events and entertainment industry. 

**Prism** can playback and control video files, virtual returns and live inputs, such as USB capture devices, webcams or NDI feeds. These media types can be stored across multiple banks and can be viewed in the [Preview](./quick-start/preview.md) window or applied to any of the layers within a [Surface](./stage/surfaces.md) to create a mix.

Individual layers or the full mix can then be sent to a video or NDI output and by using regions, complex mappings can be made. Alternatively, this mix can be sent directly into Titan’s Pixel Mapper using Synergy to allow tight integration between video and lighting.

The software can be controlled in realtime via **Prism's** dedicated UI or through Titan's layer control as part of the Synergy toolset, which includes project setup, media transfer and video previewing directly within Titan.

**Prism's** built in encoder engine, media manager and asset consolidation tools provide a streamlined approach to media import and export between projects and playback systems.

**Prism** is limited to 16 Surfaces per project, 16 Layers per surface, and 256 Banks. Each bank can hold up to 256 elements. 

**Prism** provides 1 physical output and 1 NDI output.

**Prism** requires a license to run. Please refer to the [licensing page](/prism/licensing#prism) in this manual.

![Prism UI](/prism-images/prism-ui.png)

**Prism** is composed of two parts - the **Server** and the **UI**. The **Server** runs in the [system tray](./quick-start/system-tray.md) and the **UI** will run separately and show the interface.  

Please note that closing the **UI** doesn't necessarily close the server as this allows for any playback, encoding, or **Synergy** control, to carry on behind the scenes. More information on this is found on the [General](./settings/settings-general.md) settings page.

The **Server** and the **UI** communicate using **port 9030**, no other application must use this port in order for **Prism** to work.

When starting **Prism** you may be prompted to add a firewall exception. If you have this experience please add this port to your firewall / anti-virus lists.

Please contact <a href="mailto:support@avolites.com?subject=Prism:">support@avolites.com</a> if you require any support.
