---
id: upgrading-the-software
title: Aktualisieren der Software
sidebar_label: Aktualisieren der Software
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Die Software der Avo-Pulte wird fortwährend weiterentwickelt. Die
neueste Version ist jeweils über die Internetseite
https://www.avolites.com zum Download erhältlich.


>   Ab Titan Version 10 ist es möglich, auf den Pulten vorher installierte 
    Versionen zu behalten, so dass man auch Shows aus älteren Versionen 
    in der Version laden kann, mit der sie programmiert wurden. Der Wechsel 
    zwischen den Versionen erfolgt im Tools-Menü per <Keys.SoftKey>Switch Software</Keys.SoftKey>.

-   Die Software für das Titan Mobile, Titan Go und Simulator ist die
    Titan PC Suite und wird wie ein gewöhnliches Windows-Programm
    installiert, indem Sie das Installationsprogramm herunterladen und
    ausführen. Beim Aktualisieren stellen Sie bitte sicher, dass die
    bereits installierte Version nicht gerade ausgeführt wird. "Titan Go" ist nun 
    die Software für alles USB-Hardware, also das T1, T2, T3 und das Titan Mobile.

-   Erfolgt das Update ausgehend von einer früheren Version als v12, so
    ist ab v12 ein AvoKey genannter USB-Lizenzdongle erforderlich und
    muss entsprechend lizenziert werden. Dies ist im Abschnitt [Software-Lizenzierung](recovering-reinstalling-the-console.md#software-lizenzierung) 
    näher erläutert. Bei neueren Geräten ist der AvoKey bereits integriert. Ist ein 
    AvoKey einmal lizenziert, ist keine erneute Lizenzierung erforderlich.

-   Die Aktualisierung/Installation der Software kann einige Zeit dauern, vor allem, 
    wenn es sich um eine Wiederherstellung (Recovery) handelt. Das sollte man nicht machen, wenn 
    am gleichen Abend eine Show gefahren werden muss! 

-   Vor dem Updaten der Software ist ein Backup der Shows zu machen.

Software-Updates für Pulte müssen mit einem USB-Stick installiert werden. Je nach vorhandener und neu zu installierender Version ist eventuell ein separater PC erforderlich, um mittels "Recovery Installer" einen Recovery-Stick zu erzeugen. Auf der Avolites-Website gibt es genaue Anweisungen, ob es sich um ein kleines **Upgrade** handelt oder aber der **Recovery installer** erforderlich ist. Bei Rückfragen dazu wenden Sie sich bitte an den Avolites Support. Auf der Downloadseite gibt es unten auch einen Link zum **Recovery Creator Guide**. 

## Updaten eine Pultes mit dem Recovery Installer

1. Laden Sie den Recovery Creator für Ihr Pult von der Avolites Downloads-Website herunter.
2. Schließen Sie einen leeren 16GB USB-Stick an und starten Sie den Recovery Creator, um einen Recovery Stick (Wiederherstellungs-Stick) zu erzeugen. Weitere Details dazu siehe der auf der Website verlinkte **Recovery Creator Guide**.
3. Schließen Sie nun den Stick an das Pult an und starten Sie dieses. Das Pult sollte nun mit der Recovery (Systemwiederherstellung) beginnen.
4. Wählen Sie auf dem Display "Standard Recovery" und folgen Sie den weiteren angezeigten Anweisungen. 

## Updaten eines Pultes per Upgrade-Datei

1. Prüfen Sie auf der Avolites Website, ob eine Upgrade-Datei für Ihr Pult verfügbar ist, und laden Sie diese herunter. Wenn nicht, verwenden Sie den Recovery Creator (s.o.).
2. Kopieren Sie das Installationsprogramm auf einen USB-Stick und verbinden diesen mit dem Pult.
3. Öffnen Sie das **Tools**-Menü in der Werkzeugleiste, klicken auf **Control Panel**, dann auf **Titan Installers**. Nun werden alle auf dem USB-Stick vorhandenen Installationsprogramme - Software und Personalities - aufgelistet. Dazu müssen diese im Stammverzeichnis des USB-Sticks liegen und der Dateiname darf nicht verändert worden sein.
4. Klicken Sie auf das zu installierende Programm und folgen Sie den Anweisungen.
   
   Sollte einmal ein auf dem USB-Stick vorhandenes Programm nicht im *Titan Installers*-Untermenü auftauchen, so kann man mit Tools -> Folders einen Dateibrowser öffnen, in das richtige Verzeichnis navigieren und die Datei per Doppelklick starten.
5. Nach Abschluss der Installation wird eine Meldung angezeigt; bestätigt man diese, startet das Pult neu, und ab sofort läuft die neue Softwareversion.

## Updaten der Titan PC-Suite (Titan Go und Titan Simulator)

1. Beenden Sie die Titan-Software, falls sie noch läuft
2. Navigieren Sie zu der heruntergeladenen Datei **Avolites Titan PC Suite Setup** und starten Sie das Programm per Doppelklick.
3. Bestätigen Sie die Rückfrage der Benutzerkontensteuerung (Windows User Account Control) mit **OK**.
4. Nach Abschluss der Installation wird eine Meldung angezeigt, Bestätigt man diese, wird der Computer neu gestartet, und ab sofort läuft die neue Softwareversion.

## Upgraden der Panel-Firmware per USB Expert

Nach dem Updaten der Software ist es mitunter erforderlich, die Firmware der verschiedenen Panels zu aktualisieren. Dazu ist die Software 'Avolites USB Expert Console' auf allen Pulten und auch mit der PC-Suite mitgeliefert und installiert. Genauere Schritte dazu siehe [Upgraden der Firmware (USB Expert)](../system-settings/usb-expert).