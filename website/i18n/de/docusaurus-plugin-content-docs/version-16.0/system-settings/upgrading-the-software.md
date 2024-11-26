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
    bereits installierte Version nicht gerade ausgeführt wird.

-   Erfolgt das Update ausgehend von einer früheren Version als v12, so
    ist ab v12 ein AvoKey genannter USB-Lizenzdongle erforderlich und
    muss entsprechend lizenziert werden. Dies ist im Abschnitt [Software Licensing](recovering-reinstalling-the-console.md#software-licensing) 
    näher erläutert.

Zur Softwareaktualisierung muss die neue Version über einen USB-Stick
installiert werden.

## Updaten eines Pultes

1. Kopieren Sie das Installationsprogramm auf einen USB-Stick und verbinden diesen mit dem Pult.
2. Öffnen Sie das **Tools**-Menü in der Werkzeugleiste, klicken auf **Control Panel**, dann auf **Titan Installers**. Nun werden alle auf dem USB-Stick vorhandenen Installationsprogramme - Software und Personalities - aufgelistet. Dazu müssen diese im Stammverzeichnis des USB-Sticks liegen und der Dateiname darf nicht verändert worden sein.
3. Klicken Sie auf das zu installierende Programm und folgen Sie den Anweisungen.
   
   Sollte einmal ein auf dem USB-Stick vorhandenes Programm nicht im *Titan Installers*-Untermenü auftauchen, so kann man mit Tools -> Folders einen Dateibrowser öffnen, in das richtige Verzeichnis navigieren und die Datei per Doppelklick starten.
4. Nach Abschluss der Installation wird eine Meldung angezeigt; bestätigt man diese, startet das Pult neu, und ab sofort läuft die neue Softwareversion.

## Updaten beim Titan Mobile, Titan Go und Titan Simulator

1. Beenden Sie die Titan-Software, falls sie noch läuft
2. Navigieren Sie zu der heruntergeladenen Datei **Avolites Titan PC Suite Setup** und starten Sie das Programm per Doppelklick.
3. Bestätigen Sie die Rückfrage der Benutzerkontensteuerung (Windows User Account Control) mit **OK**.
4. Nach Abschluss der Installation wird eine Meldung angezeigt, Bestätigt man diese, wird der Computer neu gestartet, und ab sofort läuft die neue Softwareversion.

## Upgraden der Panel-Firmware per USB Expert

Mach dem Updaten der Software ist es mitunter erforderlich, die Firmware der verschiedenen Panels zu aktualisieren. Dazu ist die Software 'Avolites USB Expert Console' auf allen Pulten und auch mit der PC-Suite mitgeliefert und installiert.

> Es kann sein, dass nach dem Softwareupdate automatisch die USB Expert Console geöffnet wird, wenn das Upgrade der Firmware erforderlich ist.

Zum Upgrade der Panel-Firmware gehen Sie wie folgt vor:

1. Bei Pulten öffnen Sie das **Tools**-Menü in der Werkzeugleiste, klicken auf **Control Panel** und dann auf  **USB Expert Console**. Auf einem Computer für das Titan Mobile, T1 oder T2 öffnen Sie die **USB Expert Console** über das Startmenü.<br/>
![Tools Menu](/docs/images/Tools-Menu-Control-Panel.png)

2. Links unter **Connected Panels** wird eine Liste der vorhandenen Panels angezeigt (die vorhandenen Panels sind je nach Pult andere).
![USB Expert Panel Update](/docs/images/USB-Expert-Panel-Update.png)

3. Klicken Sie nun rechts oben auf den Tab **Service**.

4. In der Box **Auto Update** auf der rechten Seite werden alle Panels aufgeführt, die ein Firmware-Update benötigen. Auch hier hängen die angezeigten Panels vom jeweiligen Pult und vom Softwarestand ab.

5. Sind Updates erforderlich, so klicken Sie auf **Update Now**. Daraufhin werden nacheinander die einzelnen Panels mit neuer Firmware versehen. Im rechten unteren Teil wird der Fortschritt des Updatevorgangs mit einem grünen Balken angezeigt.

6. Sobald die Auto Update-Box leer ist und also alle Panels aktualisiert wurden, schließen Sie die USB Expert-Console und starten Sie das Pult neu.

- In der Box **Connected Panels** wird der Status der Panels angezeigt. 

- Wenn auf PC-Systemen (Titan Mobile, T1, T2) die Box leer ist, klicken Sie im Menü auf 'Tools', dann auf 'Acw Service', dann auf 'Start'.

- Die mittlere Box ('**Item Events**') dient zur Überprüfung der Funktion der verschiedenen Panels. Sobald ein Fader bewegt oder eine Taste gedrückt wird, wird dies hier angezeigt.

- Sollte der Updateprozess der Firmware nach 10 Minuten noch immer nicht abgeschlossen sein, drücken Sie auf **Exit Boot** und warten, bis wieder alle Panels bei **Connected Panels** angezeigt werden. Wiederholen Sie nun den Vorgang ab Schritt 3. (Es kann sein, dass die Panels erfolgreich ugedatet wurden, und nur die USB Expert Console das nicht mitbekommen hat. Das wird auf diese Weise überprüft).
