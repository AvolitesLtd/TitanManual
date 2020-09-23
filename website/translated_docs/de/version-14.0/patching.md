---
id: version-14.0-patching
title: Patching
sidebar_label: Patching
original_id: patching
---

Patchen ist der Prozess, mit dem Pult mitgeteilt wird

-   welche Geräte (Dimmer, Movinglights etc.) angeschlossen sind

-   auf welche DMX-Adressen diese reagieren

-   welches Gerät auf welcher DMX-Linie liegt; ein Pult kann selbst 16
    DMX-Universen ausgeben, weitere - bis zu insgesamt 64 - sind mit
    Prozessoren über TitanNet erzielbar.

-   mit welchen Schaltflächen/Tasten auf welches Gerät zugegriffen
    werden soll

-   bestimmte weitere Optionen für die einzelnen Geräte

> Es empfiehlt sich, den Lichtaufbau vor dem tatsächlichen Einbau der Geräte zu planen, um die DMX-Adressen vorher vergeben zu können. Am einfachsten patcht man zunächst die Geräte im Pult, und kann dann die vergebenen Adressen am Pult auslesen (im Patch View-Fenster, \<View / Open\>, \<Patch\>) und an den Geräten einstellen.

Verfügen die Geräte über RDM, so kann das Pult diese automatisch
erkennen und patchen, siehe [Patching by RDM](./patching/patching-new-fixtures-or-dimmers.md#patching-by-rdm).

Bei Pulten mit einem Schalter 'System/Run/Program' muss dieser zum Patchen
auf 'Program' stehen.

In der Grundeinstellung ist den DMX-Buchsen jeweils eine DMX-Linie
zugewiesen. Um die Zuordnung zu ändern, nehmen Sie die entsprechenden
Einstellungen in den [DMX-Einstellungen](./system-settings/the-system-menu.md#dmx-settingsdmx-output-mapping) im System-Modus vor.

> Wenn Ihre angeschlossenen Geräte in keiner Weise auf irgendwelche Pult-Aktionen reagieren, überprüfen Sie, ob die DMX-Ausgänge korrekt zugewiesen und aktiviert sind.
