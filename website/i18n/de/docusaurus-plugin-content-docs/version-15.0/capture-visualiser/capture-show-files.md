---
id: capture-show-files
title: Capture Show-Daten
sidebar_label: Capture Show-Daten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Die Capture-Bühne wird automatisch mit in der Titan-Show gespeichert. Sie
kann aber auch exportiert und importiert werden, um sie unabhängig von
Titan in Capture zu verwenden. Ebenso können damit einzelne
Capture-Shows unabhängig in mehreren Titan-Shows verwendet werden.

Zum Exportieren/Importieren wählen Sie den Reiter **Show** im Fenster
<Keys.SoftKey>Capture Visualiser Settings</Keys.SoftKey>.

## Shows exportieren

Exportierte Shows können in andere Titan-Shows importiert werden. Ebenso
können Sie in Capture geöffnet werden, um sie weiter zu bearbeiten oder
Unterlagen zur Dokumentation auszudrucken.

## Shows importieren

Shows aus der Capture-Vollversion können importiert werden, etwa für
größere Setups oder kompliziertes Rigging.

> Der interne Capture-Visualiser in v14 verwendet Capture 2020 *(Titan v12 und v13 verwendete Capture 2018, frühere Titan-Versionen verwendeten Capture Atlas)*. Capture-Setups aus neueren Versionen können nicht importiert werden. Exportieren Sie also die richtige Version mit **Export for Capture 2020** in der Capture-Vollversion.

Auch Fixtures können aus Capture (Vollversion) übernommen werden, jedoch
muss dabei sichergestellt sein, dass das Patch stimmt. Das Patch aus
importierten Shows kann nicht im integrierten Capture-Visualiser
verändert werden.

Einige Fixtures und andere Elemente aus dem externen Capture
funktionieren möglicherweise nicht mit dem internen Capture-Visualiser.
Daher empfiehlt es sich in der Regel, die Geräte wie beschrieben auf dem
Pult bei aktivierter [Auto-Patch-Funktion](../patching/patching-new-fixtures-or-dimmers.md#automatisches-patchen-in-capture) 
zu patchen, damit die richtigen Gerätetypen ausgewählt werden.

## Die Capture-Show löschen

Unten auf dem Reiter **Show** gibt es den Button <Keys.SoftKey>Wipe</Keys.SoftKey>, mit dem die
aktuelle Capture-Show gelöscht wird.

Ist die Option **Auto Update** aktiv (**On**, Vorgabewert), 
so werden die in Titan gepatchten Geräte wieder neu in Capture aktiviert.

Wurden Geräte gepatcht, für die erst später die Darstellung in Capture 
hinzugefügt wurde, so wählen Sie <Keys.HardKey>Patch</Keys.HardKey> <Keys.SoftKey>Edit Fixtures</Keys.SoftKey> \[Update
Personality\] aus dem [Menü Patch](../patching/changing-the-patch.md#bereits-gepatchte-personalities-aktualisieren). Damit werden die bereits gepatchten Fixtures auch in Capture angezeigt.
