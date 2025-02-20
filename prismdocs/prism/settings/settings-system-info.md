---
id: settings-system-info
title: System Info
sidebar_label: System Info
---

This page shows general system information and performance metrics of the system and the application.   
App specific performance metrics are also displayed in the [status bar](../quick-start/navigation.md#status-bar) at the bottom of the application UI.

![Settings System Info](/prism-images/settings/prism-settings-systeminfo.png)

|  Item  |  Description  |
|------------------------------------------------------|------------|
| **Connected Hard Drive** | This section shows the hard drives connected to the system. For each hard drive the total storage space, the used space and the available space are displayed. |
| **Frame Rate** | This section shows the rate at which the app is displaying video frames.|
| **CPU** | This section shows the overall system CPU load and the app CPU load. Furthermore, it shows the engine process CPU load and the AiM Transcoder process CPU load. The app CPU load is the sum of these two values.
| **Memory** | This section shows the total amount of system memory available, the amount in use by the app and the amount the system is using overall. Furthermore, it shows the amount of memory in use by the engine process and the AiM Transcoder process. 
The amount in use by the app is the sum is the sum of these two values.|
| **Video RAM** | This section shows the total amount of Dedicated and Shared VRAM available for the selected GPU and the amount in use by the app.|

#### CPU
System CPU load is the last obtained value (not an average value), and it is comparable to the *Total processor utilisation across all cores* percentage value shown in Task Manager's Processes tab header - CPU column, in absolute %.

![System CPU load](/prism-images/settings/prism-CPU-system-load.png)

Per-process CPU load (engine process, AiM Transcoder process) is comparable to the value shown in Task Manager's Details tab under the correspondent process details - CPU column, in absolute %. 

Alternatively, these values can be found in Resource Monitor's Processes tab under CPU column.

![Engine process CPU load](/prism-images/settings/prism-CPU-engine-load.png)
![AiM Transcoder process CPU load](/prism-images/settings/prism-CPU-transcoder-load.png)

#### Memory

Per-process memory usage is comparable to the value shown in Task Manager's Processes tab under the correspondent process details - Memory column, in MB.

![Engine process memory usage](/prism-images/settings/prism-memory-engine-usage.png)
![AiM Transcoder process memory usage](/prism-images/settings/prism-memory-transcoder-usage.png)