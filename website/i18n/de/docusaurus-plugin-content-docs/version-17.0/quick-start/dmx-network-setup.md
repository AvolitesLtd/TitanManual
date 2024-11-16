---
id: dmx-network-setup
title: DMX / Netzwerkeinrichtung
sidebar_label: DMX / Netzwerkeinrichtung
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Das Pult arbeitet intern mit max. 64 DMX-Universen. Geräte und Dimmer werden auf eine der 64 **DMX-Linien** gepatcht, die wiederum auf die DMX-anschlüsse und die Ausgabe per Art-Net oder sACN geroutet werden (siehe [DMX-Ausgänge einrichten](../system-settings/dmx-output-mapping.md)).

- Beim T1 / T2 / T3 ist die Anzahl der Universen auf 1 / 2 / 16 begrenzt. Pulte können normalerweise bis zu 16 Universen ausgeben, und für weitere sind TNPs (Titan Network Processor) erforderlich. Für einfache Shows und für Setups mit vielen freien Kanälen pro Universum funktionieren auch mehr als 16 Universen pro Pult, aber es kann zu Performance-Einbußen und gelegentlichen Rucklern kommen, daher ist das nicht zu empfehlen.

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
