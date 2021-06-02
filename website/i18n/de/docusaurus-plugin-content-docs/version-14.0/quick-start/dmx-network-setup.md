---
id: dmx-network-setup
title: DMX / Netzwerkeinrichtung
sidebar_label: DMX / Netzwerkeinrichtung
original_id: dmx-network-setup
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Die intern verwendeten 16 DMX-Universen können über die XLR-Buchsen oder
über Netzwerk ausgegeben werden (der T1 ist auf ein DMX-Universum
beschränkt, der T2 auf 2 Universen). Durch Anschließen weiterer
Netzwerk-Prozessoren (TNP, TitanNet Processor) lassen sich bis zu 64
DMX-Universen ausgeben.

Mehrere Pulte lassen sich per Ethernet vernetzen und gestatten so den
[Mehrbenutzerbetrieb](../titan-basics/multi-user-operation.md) sowie [Backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#pulte-für-den-backup-betrieb-einrichten).

Öffnen Sie das System-Menü (Schalter oder
<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) und drücken Sie <Keys.SoftKey>DMX Settings</Keys.SoftKey>.

Wählen Sie links einen Node aus (den gewünschten Ausgabe-Anschluss), und
klicken Sie auf den Pfeil. Rechts wählen Sie nun das Universum,
das ausgegeben werden soll. Mit dem kleinen <Keys.ContextKey>Zahnrad</Keys.ContextKey> lassen sich
verschiedene weitere Einstellungen pro Linie vornehmen (siehe [DMX-Ausgänge einrichten](../system-settings/dmx-output-mapping.md)).

Zum Ändern der IP-Adresse des Pultes wählen Sie im System-Menü <Keys.SoftKey>[Netzwerkeinstellungen](../networking.md)</Keys.SoftKey>.

Zum Ändern individueller [Benutzereinstellungen](../system-settings/user-settings.md) halten Sie die
<Keys.HardKey>Avo</Keys.HardKey>-Taste gedrückt und drücken Sie <Keys.SoftKey>User Settings</Keys.SoftKey>.
