---
id: t1-and-t2
title: T1 und T2
sidebar_label: T1 und T2
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

T1 und T2 sind USB-Geräte zum Betrieb an einem Windows-Computer (PC oder
Laptop). Zu den Systemanforderungen siehe [Inbetriebnahme von T3/Titan Mobile und T1/T2](../titan-basics.md#inbetriebnahme-von-t3titan-mobile-und-t1t2). 
T1 und T2 enthalten jeweils den AvoKey.

## T1

Der **T1** gibt mit der Titan Go-Software ein DMX-Universum per 5pol XLR und über sACN/ArtNet aus (Netzwerkanschluss des Computers). Sind Geräte auf mehreren
Universen gepatcht, so wird das niedrigste Universum ausgegeben. USB-MIDI ist mit dem T1 nicht möglich.

Mit dem T1 kann auch der Titan Simulator gestartet werden. Damit werden alle Universen ausgegeben. In unregelmäßigen Abständen gibt es zwar eine DMX-Störung (Spoiler), aber so kann auch auf mehreren Universen programmiert werden. 

![T1 USB DMX Dongle](/docs/images/T1.png)

## T2

Der **T2** kann mit der Titan Go-Software zwei DMX-Universen auf 5-poligen XLR-Buchsen sowie per sACN/ArtNet über den Netzwerkanschluss des Computers ausgeben und hat eine 3-polige XLR-Buchse als Audio/LTC-Eingang (symmetrisch, 600 Ohm Übertrager zwischen Pan 2 und 3, Pin 1 nicht verbunden). Außerdem erlaubt er die Verwendung von USB-MIDI-Geräten (per USB an den Computer angeschlossen, auf dem Titan läuft), etwa von Faderboards, und kann mit dem T3 Wing oder dem Titan Mobile Faderwing betrieben werden (klicken Sie 2x <Keys.HardKey>Open/View</Keys.HardKey> und wählen dann <Keys.SoftKey>Mobile Wing</Keys.SoftKey> zum Öffnen des betreffenden Fensters).

Mit dem T2 kann auch der Titan Simulator gestartet werden. Damit werden alle Universen ausgegeben. In unregelmäßigen Abständen gibt es zwar eine DMX-Störung (Spoiler), aber so kann auch auf mehreren Universen programmiert werden. 

![T2 USB DMX Dongle](/docs/images/T2.png)

<Video videoId="wO94RvG6agI" title="T2 USB Interface"></Video>

## Titan One dongle

Der ältere Titan One (nicht mehr angeboten) stellt ebenfalls ein DMX-Universum als 
5-pol Anschluss sowie als sACN/ArtNet über Netzwerk zur Verfügung. USB-MIDI wird nicht unterstützt.

> Dieser Titan One - mit fest angebautem Kabel - beinhaltet **keinen** AvoKey; der AvoKey
  muss separat gekauft und mit einem weiteren USB-Anschluss des Computers verbunden 
  werden, um Titan Version 12 oder neuer zu betreiben.

![Titan One Dongle](/docs/images/titan-one-cabled.png)

## Installieren der Titan-Software

Installieren Sie die Titan PC-Suite (siehe [Inbetriebnahme von T3/Titan Mobile und T1/T2](../titan-basics.md#inbetriebnahme-von-t3titan-mobile-und-t1t2)), bevor das
Gerät angeschlossen wird, damit die richtigen Treiber installiert und
verwendet werden. Dort sind auch einige Windows-Einstellungen aufgeführt, die überprüft
werden sollten, um einen reibungslosen Betrieb zu gewährleisten.

> Die früheren Titan Ones (mit Kabel) enthalten keinen neuen Lizenzdongle. 
  Zu ihrem Betrieb ist ab Titan Version 12 ein separater Editor AvoKey 
  erforderlich, der parallel mit einem anderen USB-Anschluss verbunden 
  werden muss.

T1 und T2 verwenden das Programm Titan Go. Dies beinhaltet sämtliche Funktionen der größeren Pulte, 
nur die Bedienoberfläche ist etwas anders designet, damit auch hier alle Bedienelemente, die ansonsten 
auf dem physischen Pult zu finden wären, auf dem Bildschirm präsent sind.

![Titan Go User Interface](/docs/images/Titan-Go-User-Interface.png)

> Titan Go kann entweder die hier dargestellte Ansicht zeigen oder aber eine pultähnliche Oberfläche ohne Programmiertasten, zur Verwendung mit dem T3. 
  Die automatische Umschaltung der Ansicht kann durch die Option [Virtual Hardware](../system-settings/user-settings.md#display) in den Systemeinstellungen überschrieben werden.