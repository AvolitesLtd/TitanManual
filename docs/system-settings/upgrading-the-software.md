---
id: upgrading-the-software
title: Upgrading the Software
sidebar_label: Upgrading the Software
---

The console operating software is under constant revision by the
Avolites team. You can always download the latest version of the
software from the Avolites website: http://www.avolites.com.


> From v10 it is possible to keep the older versions of Titan installed on a console when you install a new version, which is useful for backwards compatibility if you need to load a show created in an older version. To swap between versions go to Switch Software on the Tools menu.

-   The Titan Mobile, Titan Go and Editor/Simulator software is
    installed simply by running the "PC Suite" installer program as with
    any other Windows application. Please ensure you have exited the
    Titan software before running the installer.

-   If you are upgrading the software from a version earlier than v12,
    you will have to obtain an AvoKey USB dongle from Avolites and
    license the software. See the [Software Licensing](recovering-reinstalling-the-console.md#software-licensing) section for details of how to do
    this.

Software upgrades for consoles are installed from a USB pen drive.

Having downloaded a new version of software, copy it to the USB drive
and install it on the console like this:

1. Copy the installer file to a USB drive and insert into the console.

2. In the screen **Tools menu**, stop the console software using the
**Shutdown Software** button at the bottom of the list.
![Tools Menu](/docs/images/Tools-Menu.png)

3. Open the **Tools menu** again, touch the **Folders** icon and navigate to
the drive where the upgrade file is found.

4. Run the installer by double clicking/double tapping.

5. When the installation has completed, shut down the console and
restart it. This will allow any operating system updates to install.

## Upgrading panel firmware with USB Expert

After upgrading the software it is sometimes necessary to upgrade the firmware in the various panels which make up the console control surfaces. You can do this using the Avolites USB Expert application which is installed on the console.

> Sometimes the USB Expert application might be opened automatically after completion of a software upgrade, to prompt you to upgrade panel firmware.

Use the following steps to upgrade panel firmware:

1. In the screen **Tools menu**, click on **Control Panel** and select the **USB Expert Console** option.
![Tools Menu](/docs/images/Tools-Menu-Control-Panel.png)

2. You should see a list of the panels on the console in the left hand **Connected Panels** window (the list will vary depending on the console type).
![USB Expert Panel Update](/docs/images/USB-Expert-Panel-Update.png)

3. On the right hand side of the window select the **Service** tab and click on the **Enter Boot** button.

4. After a short delay (maximum 2 minutes) all panels should be listed as being in "Boot Mode" showing a spanner icon in the left hand **Connected Panels** window.

5. In the **Auto Update** box on the right hand side, any required firmware updates will be listed. The list may vary depending on the console type and the updates available - sometimes no updates might be found or needed.

6. If updates are needed, click **Update Now** to start the process and the system will update the panels one by one.

7. When the Auto Update box is empty, click on the **Exit Boot** button and the panels should reappear in the **Connected Panels** window.

8. Close USB Expert, shut down the console using the power button, then restart it.

9. As a final check, re-open USB Expert and check that all panels are shown with a green "Connected" logo in the **Connected Panels** window. You can test the function of all front panel controls using the **Item Events** window in the middle - pressing a button or moving a fader/encoder should show event messages in the window.


- If the panel update has not completed after 10 minutes, press **Exit Boot** regardless and wait for the panels to reappear in the **Connected Panels** window. Then repeat from step 3 to check whether all panels have in fact been updated. 