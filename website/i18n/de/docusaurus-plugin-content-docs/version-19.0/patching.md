---
id: patching
title: Patchen
sidebar_label: Patchen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Patchen ist der Prozess, mit dem Pult mitgeteilt wird

-   welche Geräte (Dimmer, Movinglights etc.) angeschlossen sind
-   auf welche DMX-Adressen diese reagieren
-   welches Gerät auf welcher DMX-Linie/welchem Universum liegt
-   mit welchen Schaltflächen/Tasten auf welches Gerät zugegriffen
    werden soll
-   bestimmte weitere Optionen für die einzelnen Geräte

> Es empfiehlt sich, den Lichtaufbau vor dem tatsächlichen Einbau der Geräte zu planen, um die DMX-Adressen vorher vergeben zu können. Am einfachsten patcht man zunächst die Geräte im Pult, und kann dann die vergebenen Adressen am Pult auslesen (im Patch View-Fenster, <Keys.HardKey>Open/View</Keys.HardKey>, <Keys.HardKey>Patch</Keys.HardKey>) und an den Geräten einstellen.

Verfügen die Geräte über RDM, so kann das Pult diese automatisch
erkennen und patchen, siehe [Patchen mit Hilfe von RDM](./patching/patching-new-fixtures-or-dimmers.md#patchen-mit-hilfe-von-rdm).

Bei älteren Pulten mit einem Schalter 'System/Run/Program' muss dieser zum Patchen
auf 'Program' stehen.

Zu Beginn jede interne Linie einer DMX-Buchse zugewiesen (soviele verfügbar sind), ebenso wird jede Linie per sACN ausgegeben. Um die Zuordnung zu ändern, nehmen Sie die entsprechenden
Einstellungen in den [DMX-Einstellungen](./system-settings/dmx-output-mapping.md) im System-Menü vor.

> Wenn Ihre angeschlossenen Geräte in keiner Weise auf irgendwelche Pult-Aktionen reagieren, überprüfen Sie, ob die DMX-Ausgänge in den [DMX-Einstellungen](./system-settings/dmx-output-mapping.md#configuring-dmx-outputs) korrekt zugewiesen und aktiviert sind.
