---
id: linking-the-console-to-stand-alone-capture
title: Linking the Console to Stand-Alone Capture
sidebar_label: Linking the Console to Stand-Alone Capture
original_id: linking-the-console-to-stand-alone-capture
---

import Keys from '@site/src/components/key.ts';

Um in den Genuss des vollen Capture-Funktionsumfangs zu kommen, muss
eine Capture-Vollversion auf einem separaten Computer laufen. Verbindet
man diesen per Netzwerk mit dem Titan-Pult, so wird das Gerätepatch
sowie die aktuelle Geräteauswahl zwischen Pult und Capture
synchronisiert.

Befinden sich Pult und Capture-PC im gleiche Netzwerk, so wird das Pult
zur Auswahl unten im Reiter **Universes** in Capture angezeigt.
Normalerweise erfolgt dies bereits vollautomatisch, aber befinden sich
mehrere Titan-Pulte im Netzwerk, so ist eine manuelle Auswahl nötig.

> Damit die Verbindung und das Synchronisieren funktioniert, muss Capture mindestens in der Version Nexum, 2018 oder 2020 vorliegen. Mit älteren Versionen funktioniert das nicht oder nicht richtig.

Solange die Netzwerkverbindung besteht, überträgt das Pult Daten zur
Synchronisierung an Capture. Wird ein neues Gerät in Capture gepatcht,
so wird dies auch im Pult hinzugefügt. Wird dagegen ein neues Gerät auf
dem Pult gepatcht, so wird dies erst im Pult und dann in Capture
hinzugefügt. Wählt man ein Gerät aus -- im Pult oder in Capture -- so
wird diese Auswahl auch im jeweils anderen Teil angezeigt. Will man dies
nicht, so kann man in Capture **Console Link** deaktivieren.

Den Patch vom Pult nach Capture übertragen
------------------------------------------

Wird das Pult neu mit Capture verbunden oder [eine Show geladen](../titan-basics/loading-and-saving-shows.md#laden-einer-show) oder ein
[Gerät gepatcht](../patching/patching-new-fixtures-or-dimmers.md), so 
wird in Capture automatisch der Patch-Dialog geöffnet. Dieser zeigt 
eine Liste der Geräte, die auf dem Pult gepatcht sind und in Capture 
zugewiesen werden müssen.

Zum Zuweisen müssen die Geräte einfach von dieser Liste in eins der
Capture-Fenster gezogen werden; dabei wird automatisch die in Titan
angegebene DMX-Adresse verwendet. Es lassen sich auch mehrere Geräte
gleichzeitig auswählen und in Capture zuweisen.

![Capture Console Patch Window](/docs/images/Capture-Console-Patch-Window.png)

Wurden Geräte bereits im internen Capture positioniert, so werden auch
die Positionsdaten an das externe Capture übertragen. Änderungen in der
Positionierung, Ausrichtung, Legende und Usernumber werden laufend
synchronisiert.

> Die Legende in Titan wird in Capture in der Spalte **Unit** angezeigt. 
Die Usernumber von Titan wird in Capture als **Channel** angezeigt.

Den Patch von Capture ins Pult übertragen
-----------------------------------------

Wurden in Capture bereits Geräte gepatcht, bevor das Pult verbunden war,
so können diese später im Pult mit Hilfe der Active Fixture-Funktion
gepatcht werden:

1. Drücken Sie <Keys.HardKey>Patch</Keys.HardKey>, <Keys.SoftKey>Active Fixtures</Keys.SoftKey>

2. Der Capture-Computer wird nun als eine Option auf den Menütasten
angezeigt. Klicken Sie die entsprechende Taste an.

3. Wählen Sie eine freie Geräte-Schaltfläche, um die Geräte ab da zu
patchen, oder wählen Sie die Option <Keys.SoftKey>Patch Capture @...</Keys.SoftKey>, um
automatisch auf den nächsten freien Platz zu patchen.

> Konnten einzelne Geräte nicht gepatcht werden (Gerätetyp nicht
unterstützt, oder Nummer doppelt vergeben), so bleibt die entsprechende
Geräteschaltfläche frei, und am Schluss wird eine entsprechende
Fehlermeldung ausgegeben. Bestätigt man diese, so werden die gefundenen
Probleme aufgelistet.

Zum Beheben doppelt vergebener Gerätenummern ändern Sie in Capture den
Wert im Feld **"Channel"**. Um dagegen bisher nicht unterstützte Geräte in
Capture zu verwenden, [aktualisieren Sie zunächst die Gerätebibliothek](../fixture-personalities.md#aktualisieren-des-personality-speichers-des-pultes) 
in Titan. Hilft das nicht, so [fordern Sie eine neue Personality](../fixture-personalities.md#anfordern-einer-neuen-gerätedatei) auf
der [Avolites Personality-Website](https://personalities.avolites.com/?mainPage=Request%20Queue.asp&) an. Wählen
Sie dabei als Desk Type "Capture Visualiser (.c2o)".