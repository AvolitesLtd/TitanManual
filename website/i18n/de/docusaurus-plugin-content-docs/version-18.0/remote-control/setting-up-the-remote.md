---
id: setting-up-the-remote
title: Einrichten der Fernsteuerung
sidebar_label: Einrichten der Fernsteuerung
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Pult und Remote müssen über Netzwerk und WLAN verbunden sein. Wie immer bei Netzwerken 
für den Showbetrieb empfehlen wir ein separates Netzwerk, das nicht mit dem Internet oder 
anderen Geräten verbunden ist.

Am einfachsten ist es, das Pult direkt mit einem WLAN-Accesspoint zu verbinden.

Der Accesspoint sollte so aufgestellt sein, dass zwischen dem Mobilgerät und dem Accesspoint 
eine freie Sichtlinie besteht.

Auf dem Pult und dem Accesspoint sind passende IP-Adressen einzustellen, siehe [Netzwerkeinrichtung](../networking.md).

## Verbinden des Mobilgeräts

Sowohl bei Android- als auch bei Apple-Geräten kommt eine Fehlermeldung, sobald man sich mit 
einem Netzwerk ohne Internetzugang verbindet. Bei Apple-Geräten wird neben dem Netzwerknamen dauerhaft 
ein sich drehendes Icon angezeigt, das man aber ignorieren kann. Bei Android-Geräten kommt eine Rückfrage, 
ob man sich wirklich verbinden möchte; diese beantwortet man mit "Always Connect" (immer verbinden).

Ist im Netzwerk keine automatische Adressvergabe per DHCP aktiviert, so muss am Mobilgerät manuell eine 
passende IP-Adresse im gleichen Bereich wie die des Pultes eingestellt werden, 
siehe [Netzwerkeinrichtung](../networking.md). Bei Android-Geräten muss anstelle der Subnetz-Maske eine entsprechende
Netzwerkpräfix-Länge (Network Prefix Length) eingestellt werden. Bei einem Subnetz 255.0.0.0 ist der Präfix 8, bei 255.255.0.0 ist er 16, bei 255.255.255.0 ist er 24.

## Auswahl des Pultes in der App

Sobald das Mobilgerät mit dem Netzwerk verbunden ist, öffnen Sie die Titan Remote App. Hier wird eine Liste 
der im Netzwerk vorhandenen Titan-Pulte angezeigt.  Am unteren Rand stehen Details der Netzwerkverbindung, 
die ggf. bei der Fehlersuche hilfreich sein können.

![Titan Remote App connection screen](/docs/images/Remote-Connection-Screen.png)

mit dem Titan Emulator lässt sich die Remote testen und vorführen, ohne mit einem Pult verbunden zu sein.

Je nach Netzwerk kann es sein, dass das Pult nicht in der Liste angezeigt wird. In diesem Fall klicken Sie oben rechts 
auf das + und geben die IP-Adresse des Pultes manuell ein. Daraufhin wird auch das angegebene Pult in der Liste angezeigt.

Um ein manuell hinzugefügtes Pult wieder aus der Liste zu löschen, wischen Sie dieses nach links und klicken dann auf den Button **Delete**.