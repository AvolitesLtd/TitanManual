---
id: tnp-console-mode
title: TNP Console Mode
sidebar_label: TNP Console Mode
original_id: tnp-console-mode
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Im Stand-Alone-Betrieb (Console Mode) kann ein TNP z.B. unbeaufsichtigt
eine vorprogrammierte Show wiedergeben oder als Notfall-Backup dienen.
Es lässt sich z.B. eine Show auf einem anderen Pult programmieren und
dann in den TNP laden, oder man verbindet ein Pult oder Simulator mittels
Multiuser-Session mit dem TNP.

Playbacks steuern
-----------------

Mittels des <Keys.SoftKey>View</Keys.SoftKey>-Buttons (nächster Absatz) kann die Anzeige der
Playbacks aktiviert werden (Playbacks Grid).

![Playback View on TNP](/docs/images/Playback-View-on-TNP.png)

Dieses ist identisch mit dem Playbacks-Fenster in Titan-Pulten, und
Playbacks können zum Aktivieren ganz einfach angeklickt werden.

Die Anzeige wählen
------------------

Im Stand-Alone-Modus lässt sich die Anzeige auf dem Homescreen wählen:
<Keys.SoftKey>Network Adapters</Keys.SoftKey> ist die normale Anzeige im Slave-Modus, \[Playbacks
Grid\] zeigt die Playbacks (s.o.), und <Keys.SoftKey>Session View</Keys.SoftKey> blendet die
derzeitige TitanNet-Session ein.

![TNP View Screen](/docs/images/TNP-View-Screen.png)

In der <Keys.SoftKey>Session View</Keys.SoftKey>-Anzeige wird gezeigt, wie der TNP gerade mit
anderen Titan-Pulten in einer Session verbunden ist.

![TNP Sessions View Screem](/docs/images/TNP-Sessions-View-Screem.png)

Die Anzeige sperren
-------------------

Die gewählte Anzeige wird auch gezeigt, wenn der TNP mittels <Keys.SoftKey>Lock</Keys.SoftKey>
gesperrt ist. Werden gerade die Playbacks angezeigt, so lassen sich
diese auch bei gesperrtem Bildschirm aktivieren. Der Button \[Show
Keypad\] blendet die Zifferntasten ein, mit denen der TNP wieder
entsperrt werden kann.

![TNP Locked Playback View Screen](/docs/images/TNP-Locked-Playback-View-Screen.png)

Shows laden und speichern, weitere Einstellungen
------------------------------------------------

Über den Button <Keys.SoftKey>Setup</Keys.SoftKey> kann man die Show speichern sowie eine andere
laden. Ebenso lassen sich Netzwerkeinstellungen, Einstellungen für den
Node sowie die Wahl der Anzeige vornehmen (s.o.).

![TNP Setup Screen](/docs/images/TNP-Setup-Screen.png)

Mit <Keys.SoftKey>Load Show</Keys.SoftKey> kann wie sonst auf den Pulten die zu ladende Show
ausgewählt werden, siehe [Laden der Show](../titan-basics/loading-and-saving-shows.md).

![TNP Setup/Load Show Screen](/docs/images/TNP-Setup-Load-Show-Screen.png)

Mit <Keys.SoftKey>Save Show</Keys.SoftKey> kann die Show gespeichert werden, falls man Änderungen
vorgenommen hat.

![TNP Setup/Save Show Screen](/docs/images/TNP-Setup-Save-Show-Screen.png)
