---
id: recovering-reinstalling-the-console
title: Wiederherstellen/Neuinstallation
sidebar_label: Wiederherstellen/Neuinstallation
original_id: recovering-reinstalling-the-console
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

**Dieser Abschnitt gilt nicht für die Titan PC Suite, sondern nur für
alle größeren Titan-Pulte**.

Das Pult läuft auf einer 'Embedded PC'-Plattform, und wie bei allen
Computern lassen sich auch hier Systemfehler nicht komplett
ausschließen. Sollte es erforderlich sein, das System neu zu
installieren, so gehen Sie wie folgt vor:

Zur Neuinstallation ist ein USB-Wiederherstellungs-Stick erforderlich,
ein USB-Stick, von dem das System gebootet und installiert werden kann.
Ein solcher Stick ist normalerweise mit der zum Auslieferungszeitpunkt
aktuellen Software im Pult vorhanden. Mit dem im [Downloadbereich 
der Avolites-Website](https://www.avolites.com/software/latest-version)
herunterzuladenden jeweiligen Recovery Creator kann ein normaler
USB-Stick als Recovery Stick vorbereitet werden.

>	Für eine Neuinstallation sollte genügend Zeit sein: planen Sie
	mindestens eine Stunde dafür ein!

Es gibt drei Arten der Wiederherstellung; dabei werden unterschiedlich
viele Daten gelöscht:

Recovery | Installierte Version | Shows | Personalities | Lizenz 
---|---|---|---|---
Standard Recovery | Die beiden neuesten | Bleiben erhalten | Bleiben erhalten | Bleibt erhalten
Factory Restore | Die Recovery-Version und die neueste davor | Werden gelöscht | Die der Recovery-Version | Bleibt erhalten
Full Erase | Nur die Recovery-Version | Werden gelöscht | Die der Recovery-Version| bis v11: gelöscht; <br/>ab v12/Avokey: bleibt erhalten

> 	Ab Titan Version 12 wird die Lizenz auf dem AvoKey dauerhaft gespeichert
	und auch bei einem Full Erase Recovery nicht gelöscht, [siehe unten](#software-lizenzierung).

>	Bei Verwendung von <strong>Factory Restore</strong> sowie <strong>Full Erase</strong> werden 
	sämtliche Einstellungen und Shows gelöscht. Es empfiehlt sich also, 
	die Shows vorher auf einem anderen Stick zu speichern.

Genauere Hinweise zum Anfertigen und zur Verwendung eines
Recovery-Sticks sind mit auf der [Download-Seite](https://www.avolites.com/software/)
 des Recovery Creators enthalten. Je nach Pultversion und dessen Alter sind ggf.
unterschiedliche Schritte erforderlich. Allgemein ist das Vorgehen aber
wie folgt:

Installationshinweise
---------------------

1.	<strong>Bei Pulten, die älter als Titan Version 11.1 sind</strong>, muss das Pult
    im BIOS so eingestellt werden, dass es vom USB-Stick bootet.
    Genaueres dazu steht auf der [Avolites-Website.](https://www.avolites.com/software/).

2.	Starten Sie nun das Pult mit angestecktem Recovery-Stick.
    Warten Sie, bis der Bootvorgang abgeschlossen ist; das kann bis zu 3 
    Minuten dauern.

3.	Nach Abschluss des Bootvorgangs wird im Bildschirm 'Welcome
    to...' und der Name des Pultes angezeigt: klicken Sie auf <Keys.SoftKey>Next</Keys.SoftKey>, 
	um den Vorgang fortzusetzen.

4.	Lesen Sie den Lizenzvertrag ganz durch, und klicken Sie auf
    <Keys.SoftKey>Agree</Keys.SoftKey>, um diesen anzunehmen.

5.	Wählen Sie die gewünschte Wiederherstellungsart *(siehe Tabelle
    oben)*.

6.	Auf der nächsten Bildschirmseite geben Sie nun mit den Zifferntasten die
    Seriennummer des Pultes ein; diese befindet sich auf der Rückseite
    des Pultes (die Ziffernfolge nach dem 'TT-', 'PE-', 'AR-'‚
    etc.). Normalerweise ist der Eintrag bereits korrekt vorbelegt.

7.	Dann klicken Sie auf <Keys.SoftKey>Install</Keys.SoftKey>, um den Wiederherstellungsprozess
    zu starten.

8.	Nach dem Abschluss der Installation entfernen Sie den USB-Stick
    und starten das Pult neu (mit der Schaltfläche <Keys.SoftKey>Restart</Keys.SoftKey>).

Nach dem Neustart des Pultes werden alle erforderlichen Programme und
Treiber installiert. Dies dauert ca. 30 Minuten. Währenddessen wird das
Pult mehrfach neu gestartet. Schalten Sie das Pult während der
Installation nicht aus!

Software-Lizenzierung
---------------------

Ab Titan Version 12 erfolgt die Lizenzierung mit dem AvoKey genannten
USB-Lizenzdongle.

Beim ersten Start öffnet sich der Authenticator, ein Hilfsprogramm, das
Schritt für Schritt durch den Lizenzierungsprozess führt. Sobald die
Lizenz auf dem AvoKey gespeichert ist, ist keine neue Lizenzierung mehr
erforderlich. Für das Titan Mobile sowie den T1 und T2 bedeutet dies,
dass diese an beliebigen Computern ohne neue Lizenzierung verwendet
werden können, solange sich an der Avolites-Hardware nichts ändert.

Für weitere Details siehe https://www.avolites.com/avokey.

<Video videoId="86PcC0OzL7E" title="Licensing" />
