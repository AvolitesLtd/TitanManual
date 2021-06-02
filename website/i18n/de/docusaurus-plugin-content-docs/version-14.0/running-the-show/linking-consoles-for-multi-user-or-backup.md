---
id: linking-consoles-for-multi-user-or-backup
title: Backup und Mehrbenutzerbetrieb
sidebar_label: Backup und Mehrbenutzerbetrieb
original_id: linking-consoles-for-multi-user-or-backup
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Bei größeren Shows ist es mitunter nötig, mit mehreren Programmierern
gleichzeitig an der Show zu arbeiten. Titan ermöglicht dies für mehrere
Pulte, sowie für jeden Benutzer unterschiedliche Einstellungen

Mitunter ist es auch erforderlich, parallel ein Backup-Pult mitlaufen zu
haben, um im Fehlerfall nahtlos weiterarbeiten zu können. Mit Titan kann
ein zweites Pult per Netzwerk eingebunden werden und wird laufend mit
dem Hauptpult synchronisiert. Im schlimmsten Falle lässt sich dann mit
einem Tastendruck am Backup-Pult die Kontrolle übernehmen.

>	Alle Pulte in einer Session müssen auf der gleichen Titan-Version 
	laufen. Für die Titan PC-Suite (Simulator, Titan Go, Titan Mobile) 
	kann es erforderlich sein, die Firewall zu deaktivieren.

Pulte für den Mehrbenutzerbetrieb einrichten
--------------------------------------------

Mehrere Titan-Pulte können zum Mehrbenutzerbetrieb miteinander vernetzt
werden, Details siehe [Mehrbenutzer-Betrieb](../titan-basics/multi-user-operation.md).

Pulte für den Backup-Betrieb einrichten
---------------------------------------

Jedes Titan-Pult kann als Backup für jedes andere Titan-Pult fungieren,
es muss sich also nicht um das gleiche Modell handeln. So kann z.B. auch
ein Titan Mobile als Backup für ein größeres Pult verwendet werden.

Dabei gilt es natürlich zu bedenken, auf welche Teile der Programmierung
man im Zweifel Zugriff braucht, da manche Pulte weniger Fader/Knöpfe als
andere haben. Gute Vorplanung ist dafür essentiell.

1.	Verbinden Sie beide Pulte mit dem gleichen Netzwerk und geben Sie
    passende IP-Adressen aus einem Bereich ein.\
	Details siehe [Netzwerk](../networking.md).

2.	Auf dem Pult, welches als Backup verwendet werden soll, drücken Sie
	<Keys.HardKey>Disk</Keys.HardKey>, dann <Keys.SoftKey>TitanNet Sessions</Keys.SoftKey>, dann <Keys.SoftKey>Backup</Keys.SoftKey>.

3.	Es werden nun die im Netzwerk gefundenen Titan-Pulte aufgelistet.

4.  Wählt man eines der angezeigten Pulte aus, so wird das aktuelle Pult
    zum Backup-Pult für das ausgewählte, und die Show von diesem wird
    synchronisiert.

5.  Auf dem Backup-Pult wird der Backup-Status sowie der Name der Show
    angezeigt.

![TitanNet Backup Healthy](/docs/images/TitanNet-Backup-Healthy.png)

Eine grüne Linie zwischen den Pulten markiert eine stabile Verbindung.
Verbindungsprobleme werden durch eine rote Linie angezeigt. Während
laufender Synchronisationsvorgänge erscheint die Linie in blau.

![TitanNet Backup Faulted](/docs/images/TitanNet-Backup-Faulted.png)

-   Showdaten werden automatisch synchronisiert, wenn auf dem Hauptpult
    die Show gesichert wird, ebenso bei Autosave. Außerdem kann man auf
    dem Backup-Pult jederzeit per <Keys.SoftKey>Sync Now</Keys.SoftKey> die Synchronisierung
    veranlassen.

-   Mit <Keys.SoftKey>Exit</Keys.SoftKey> wird der Backup-Modus beendet.

-   Mit <Keys.SoftKey>Takeover</Keys.SoftKey> übernimmt das Backup-Pult die Kontrolle, und die
    DMX-Ausgänge am Hauptpult werden deaktiviert. Dabei erscheint im
    Infobereich (oben rechts auf dem Display) eine entsprechende
    Meldung. Auf Geräten mit Touchscreen kann man darauf klicken und
    gelangt in das Menü "Exit Safe Mode", in dem wiederum die Ausgänge
    wieder aktiviert werden können. Auf dem Pearl Expert findet man
    diese Funktion im <Keys.HardKey>Avo</Keys.HardKey>-Menü.
