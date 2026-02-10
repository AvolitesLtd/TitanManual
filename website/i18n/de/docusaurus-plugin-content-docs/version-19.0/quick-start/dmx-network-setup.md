---
id: dmx-network-setup
title: DMX / Netzwerkeinrichtung
sidebar_label: DMX / Netzwerkeinrichtung
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Titan arbeitet intern mit max. 64 DMX-Universen. Geräte und Dimmer werden auf eine der 64 **DMX-Linien** gepatcht, die wiederum auf die DMX-Anschlüsse und die Ausgabe per Art-Net oder sACN geroutet werden.
Dabei können die ausgegebenen Universen im Bereich 1 - 9999 nummeriert werden; insgesamt können aber nicht mehr Universen ausgegeben werden, als die jeweilige Hardware/Lizenz gestattet.

Pulte können nicht alle 64 Universen direkt ausgeben. Ggf. sind dafür TNPs (Titan Network Processor) erforderlich.

- Siehe [DMX-Ausgänge einrichten](../system-settings/dmx-output-mapping.md) zu den Details und maximalen Universen der verschiedenen Pulte.

Auf Pulten mit einer begrenzten Zahl von Universen, die ausgegeben werden können, können zwar alle Universen gepatcht werden, es werden aber nur die mit den niedrigsten Nummern ausgegeben.
Es ist nicht möglich, das Limit durch Anschluss weiterer Hardware zu erweitern; so wird z.B. auch bei zwei gleichzeitig angeschlossenen T1 nur ein Universum ausgeben.

Mehrere Pulte lassen sich per Ethernet vernetzen und gestatten so den
[Mehrbenutzerbetrieb](../titan-basics/multi-user-operation.md) sowie [Backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#pulte-für-den-backup-betrieb-einrichten).

Öffnen Sie das **System**-Menü (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) und drücken Sie <Keys.SoftKey>DMX Settings</Keys.SoftKey>.

Wählen Sie links einen Node aus (den gewünschten Ausgabe-Anschluss), und
klicken Sie auf den Pfeil. Rechts wählen Sie nun das Universum,
das ausgegeben werden soll. Mit dem kleinen <Keys.ContextKey>Zahnrad</Keys.ContextKey> lassen sich
verschiedene weitere Einstellungen pro Linie vornehmen (siehe [DMX-Ausgänge einrichten](../system-settings/dmx-output-mapping.md)).

Zum Ändern der IP-Adresse des Pultes wählen Sie im **System**-Menü <Keys.SoftKey>[Netzwerkeinstellungen](../networking.md)</Keys.SoftKey>.

Zum Ändern individueller [Benutzereinstellungen](../system-settings/user-settings.md) halten Sie 
die <Keys.HardKey>Avo</Keys.HardKey>-Taste gedrückt und drücken Sie <Keys.SoftKey>User Settings</Keys.SoftKey>.

Es können sACN-Eingänge eingerichtet werden, um Signale von anderen Pulten zu empfangen. Siehe [Verwenden von DMX/sACN-Eingang](/controlling-fixtures/changing-fixture-attributes.md#verwenden-von-dmxsacn-eingang).