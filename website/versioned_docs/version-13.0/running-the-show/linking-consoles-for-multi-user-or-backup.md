---
id: version-13.0-linking-consoles-for-multi-user-or-backup
title: Linking Consoles for Multi-User or Backup
sidebar_label: Linking Consoles for Multi-User or Backup
original_id: linking-consoles-for-multi-user-or-backup
---

On large shows it is sometimes necessary to have multiple operators
programming or running different aspects of the show. The Titan system
allows a number of consoles to be connected together to give an
integrated system with multiple control surfaces.

In addition, on many shows it is important to have a backup console
running in case the main console fails during the show. Titan allows you
to run a second console over the network which it keeps synchronised
with the main console. Should the worst happen, a single keypress can
transfer control to the backup console.

> Linked consoles must be running the same version of Titan. If using PC Suite (Titan Mobile, Titan Go or Simulator) you may need to disable any firewalls on the PC.

Setting Up Consoles for Multi-User
----------------------------------

Titan consoles may be connected to each other for collaborative
programming or show operation. See the [Multi-User Operation](../titan-basics/multi-user-operation.md) section for more information.

Setting Up Consoles for Backup
------------------------------

Any Titan console can act as backup for any other console, they do not
have to be the same model. For example you could run Titan Mobile as
backup. You can also in an emergency use the screen on a TNP to operate.

However do plan ahead and think about what parts of your show will
become inaccessible if the backup device has less faders/handles than
the main console.

1. Connect both consoles to the same network and ensure they are set to
the same IP range. See the [networking section](../networking.md).

2. Press Disk, \[TitanNet Sessions\], \[Backup\].

3. Consoles available for backup will be listed in the softkeys.

4. Selecting a console will place that console into backup mode and
sync the show to it.

5. The backup console will show a display indicating the backup status
and show name.

In backup mode the backup console screen displays the current connection
and sync status including current show name.

![TitanNet Backup Healthy](/docs/images/TitanNet-Backup-Healthy.png)

A green line between consoles represents a
good connection. If a red line is shown there is a problem with the
network connection. A blue line will appear during sync operations.

![TitanNet Backup Faulted](/docs/images/TitanNet-Backup-Faulted.png)

-   Shows will automatically sync whenever a show is saved on the main
    console (including autosave). You can also choose to sync at any
    time by selecting \[Sync Now\].

-   Pressing \[Exit\] will abort backup.

-   \[Takeover\] will enable control on the backup console and disable
    DMX output on the main console. A prompt will appear on the main
    console to warn that DMX has been disabled. On touch consoles
    touching on this prompt will open the \'\<Exit\> Safe Mode\' menu
    with a softkey option to re-enable output. On the Pearl Expert you
    can re-enable DMX output via the shift (\<Avo\>) menu.
