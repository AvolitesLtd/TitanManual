---
id: settings-general
title: General Settings
sidebar_label: General
---

This page shows zero general settings.

![Settings General](/prismdocs/images/zero-settings-general.png)

There are four sections:
- **Application** - These options will give control over the application UI
- **Graphics** - These options will give control over the application graphics.
- **Audio** - These options will give control over the application audio.
- **Cache** - These options will give control over the application caching system.

### Application

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Description        |
|----------------------|------------|
| **Keep Server Running On Close** | This toggle will shutdown or keep the application running when closing the UI. <br/> <br/> When enabled the application will keep running in the system tray and continue with any assigned tasks after closing the UI. <br/> <br/> When disabled closing the UI will exit the application fully regardless of its current state.|
| **Disable UI Notifications** | This toggle will enable/disable UI notifications. When enabled messages from the application are displayed at the top of the UI.|
| **UI Warnings** | This button will reset the status of UI warnings when pressed. As an example, when selecting Stage tab, a Render Warning popup is shown. This warning can be disabled by checking the 'Don't show this message again' checkbox. After pressing the UI warnings button this warning will be prompted again.|

### Graphics

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Description        |
|----------------------|------------|
| **Graphics Card** | List of available GPUs on the system. The selected device will be used by the application to output video frames.|

### Audio

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Description        |
|----------------------|------------|
| **Audio Output Device** | List of available audio output devices on the system. The selected device will be used by the application to output master audio.|

### Cache

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Description        |
|----------------------|------------|
| **Clear Cache** |  Clears the [Prism Media Cache](../quick-start/media-management.md#prism-media-cache), thumbnails and Undo/Redo History.  |