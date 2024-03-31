---
id: setting-up-the-remote
title: Einrichten der Fernsteuerung
sidebar_label: Einrichten der Fernsteuerung
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Voraussetzung ist, dass zwischen Pult und Mobilgerät eine
Netzwerkverbindung besteht; die App erkennt dann automatisch alle im
Netzwerk gefundenen Pulte.

>	Stellen Sie sicher, dass Ihr WLAN ordnungsgemäß abgesichert ist, 
	da jeder mit Zugriff zum WLAN Ihr Pult steuern kann - und Sie 
	wollen sicher nicht, dass Ihr Pult von Unbekannten aus dem 
	Publikum gesteuert wird.

Befindet sich im gleichen Netzwerk ein Router mit Verbindung zum
Internet, können sich möglicherweise Probleme ergeben, da manche
Daten nicht zwischen Remote und Pult, sondern ins Internet geroutet
werden. Entfernen Sie in diesem Fall testweise den Router aus dem
Netzwerk.

## Verwenden eines vorhandenen Netzwerks

Verwenden Sie ein bereits vorhandenes Netzwerk, so ist in diesem
möglicherweise bereits die automatische Adressvergabe aktiviert (DHCP);
damit bekommen Pult und Mobilgerät automatisch passende Adressen, sobald
sie mit dem Netzwerk verbunden sind.

Ist im Pult bereits eine feste IP-Adresse eingestellt, so stellen Sie
sicher, dass diese in das vorhandene Netzwerk passt; ggf. halten Sie
dazu *Rücksprache mit dem Netzwerk-Administrator*. Weitere Informationen
dazu siehe [Einrichtung des Netzwerkbetriebs](../networking.md).

## Netzwerkeinrichtung mit einem Access Point

Exemplarisch wird hier der Aufbau mit einem Access Point beschrieben;
sollen Sie Fragen zu dessen Einrichtung haben, so konsultieren Sie die
mit dem Access Point mitgelieferte Dokumentation.

>   Es empfiehlt sich, nicht einen DSL-Router mit WLAN zu verwenden,
    sondern einen richtigen WLAN **Access Point**. Zwar sind die DSL-Router
    günstiger, aber meist auch unsicherer als Access Points. Es gibt
    auch Router, die man explizit als Access Point betreiben kann,
    um dieses Problem zu eliminieren.

Stellen Sie im Access Point, im Pult und auf dem Mobilgerät die
Netzwerkeinstellungen so ein, dass die Geräte miteinander kommunizieren
können. Hier wird das Vorgehen auf einem Android-Gerät beschrieben, auf
anderen Geräten ist das Vorgehen aber ähnlich.

1.  Im Administrationsbereich des Access Points geben Sie diesem eine
	Adresse wie z.B. `10.0.0.1`, aktivieren das WLAN sowie DHCP. Notieren Sie
	sich den Namen des Netzwerks (SSID).

2. 	Verbinden Sie Access Point und Pult mit einem Netzwerkkabel; die
	Netzwerkanschlüsse sind hinten am Pult.

3. 	Stellen Sie auf dem Pult eine passende IP-Adresse ein: öffnen Sie
	das System-Menü (mittels <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>), wählen dann 
	<Keys.SoftKey>Network Settings</Keys.SoftKey>, dann <Keys.SoftKey>LocalArea Connection</Keys.SoftKey>, und klicken 
	auf <Keys.SoftKey>Set IP 10.\*.\*.\*</Keys.SoftKey>.

4.	Auf dem Mobilgerät überprüfen Sie, dass WLAN aktiviert ist.

5.	Wählen Sie auf dem Mobilteil das WLAN des Access Points aus (SSID
	siehe Punkt 1). Damit sollte das Mobilgerät automatisch eine geeignete
	IP-Adresse zugewiesen bekommen.

6.	Starten Sie die Titan Remote App. Auf dem Startbildschirm sollte
	jetzt das Pult aufgeführt werden.

>	Wird die Remote auch während der Show verwendet, so empfiehlt es sich 
	unbedingt, in den Optionen des Access Points die SSID zu verbergen. 
	Anderenfalls würde jedes Smartphone im Publikum das vorhandene WLAN 
	finden und sich zu verbinden versuchen, womit die Remote kaum noch 
	bedienbar ist.