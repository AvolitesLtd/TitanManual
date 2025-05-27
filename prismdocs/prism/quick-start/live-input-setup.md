---
id: live-input-setup
title: Live Input Setup
sidebar_label: Live Input Setup
---

When adding a **Live Input** to **Prism**, the available signal options will vary according to the device in use, but the setup process is the same for all capture devices.

Multiple bank elements can share the same **Live Input** device (e.g., a USB camera). Each bank element can have its own settings—such as color adjustments or transformations—but **Prism** creates a single unique instance for each input device. This means all bank elements using the same device access the same video buffer resource, which helps improve performance.

*Note: The number of available inputs varies based on [licensing](/prism/licensing).*

## 1. Setup

Go to the **Inputs** section of the **Settings** page to set the parameters for the video capture device. 

![Settings Page](/prism-images/quick-start/live-input-setup/settings-tab.png)

### Source Selection

Select the input from the **Source** dropdown. 

![Source Selection](/prism-images/quick-start/live-input-setup/source-selection.png)

### Source Settings

Then **Video Format** dropdown will display all available resolution, framerate and colour space variants that the selected device supports. Choose one that fits the project requirements. Any instances of the input will use the chosen settings. 

An audio source can also be enabled from the chosen source device.

Enabling the run in background will make the source faster to load on a **Layer**.

![Video Format](/prism-images/quick-start/live-input-setup/source-settings.png)

## 2. Playback

### Playing a Live Input

Go to the **Play** page, select a bank and then add a **Live Input** by pressing the `Add Element` button.

![Add Input](/prism-images/quick-start/live-input-setup/add-input.png)

Open the **Preview window** by pressing the `Preview` button in the bank element’s Actions. 

![Settings Page](/prism-images/quick-start/live-input-setup/preview-button.png)

In the **Live Input** section of the **Preview Window**, select the input from the source dropdown. The status will change to Active and the preview will show in the window. 

![Settings Page](/prism-images/quick-start/live-input-setup/select-live-input.png)

After the video signal has been confirmed, close the **Preview Window**. The **Live Input** is ready to be used.