---
id: settings-general
title: General Settings
sidebar_label: General
---

This page shows {{PRISM-APP-LOWER}} general settings.

![Settings General](/prismdocs/images/{{PRISM-APP-LOWER}}-settings-general.png)

There are four sections:
- **Application** - These options will give control over the application UI.
- **Graphics** - These options will give control over the application graphics.
- **Audio** - These options will give control over the application audio.
- **Cache** - These options will give control over the application caching system.

### Application

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Note        |
|----------------------|:------------:|
| **Keep Server Running On Close** | This toggle will shutdown or keep the application running when closing the UI. When enabled the application will keep running in the system tray and continue with any assigned tasks after closing the UI. When disabled closing the UI will exit the application fully regardless of its current state.|
| **Disable UI Notifications** | This toggle will enable/disable UI notifications. When enabled messages from the application are displayed at the top of the UI.|
| **UI Warnings** | This button will reset the status of UI warnings when pressed. As an example, when selecting Stage tab, a Render Warning popup is shown. This warning can be disabled by checking the 'Don't show this message again' checkbox. After pressing the UI warnings button this warning will be prompted again.|

### Graphics

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Note        |
|----------------------|:------------:|
| **Graphics Card** | List of available GPUs on the system. The selected device will be used by the application to output video frames.|

### Audio

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Note        |
|----------------------|:------------:|
| **Audio Output Device** | List of available audio output devices on the system. The selected device will be used by the application to output master audio.|

### Cache

| <p style={{width: '250px', margin: '0'}}>Feature</p> |  Note        |
|----------------------|:------------:|
| **Clear Cache** | This button will clear the application cache and saved media thumbnails. When adding a media file to a Bank or to Encoder, this will be analyzed and its information will be stored in a JSON file, Additionally a thumbnail .png file is generated and stored in the same folder. Clearing the cache will delete both JSON file and thumbnail .png file.  |