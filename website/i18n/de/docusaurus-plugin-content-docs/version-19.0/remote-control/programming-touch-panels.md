---
id: programming-touch-panels
title: Verwenden von Touch-Panels
sidebar_label: Verwenden von Touch-Panels
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Durch Verbinden mehrerer D3-Touch-Panels per Ethernet kann ein größeres Titan-Steuerungssystem aufgebaut werden. Dabei ermöglichen 
die Panels einen einfachen Weg der Steuerung, für bis zu 8 Szenen (Playbacks) in vier Zonen (Playback-Gruppen). Damit kann dem Hauspersonal die Steuerung 
z.B. des Arbeitslichts, des Hauslichts oder auch einfacher Lichtstimmungen für die Show ermöglicht werden.

Ebenso können bis zu acht Macros verwendet sowie das Panel ge- und entsperrt werden.

![D3 Touch](/docs/images/D3-touch-front.png)

## Ein Touch-Panel verbinden

Touch-Panels werden per kabelgebundenem Ethernet mit dem Titan-System verbunden. Die Stromversorgung erfolgt per Power-over-Ethernet (PoE)
durch einen entsprechenden Switch, mit einem PoE-Injektor, oder über ein Steckernetzteil.

Auf dem Pult und auf dem Panel müssen passende IP-Adressen eingestellt werden, oder man aktiviert DHCP. Mehr dazu siehe [Netzwerkeinrichtung](../networking.md). Danach muss auf dem Touchpanel die Adresse des zu steuernden Pultes wie folgt eingestellt werden:

1. Öffnen Sie das Einstellungs-Menü durch Anklicken des Buttons **IP Settings** (sofern der D3 Touch noch nicht mit einem Pult verbunden ist), oder doppelklicken Sie auf den Button **Lock** (sofern bereits eine Netzwerkverbindung besteht).
2. Normalerweise bezieht der D3 Touch seine IP-Adresse per DHCP. Ist aber kein DHCP-Server im Netzwerk vorhanden, so muss im Menü **Network Setup** eine Adresse aus dem gleichen Bereich wie die Adresse des Pultes eingestellt werden
3. Klicken Sie auf **Other Settings**, dann auf **Device IP Addresses**.
4. Geben Sie bei **Device 1 IP address** die Adresse des Pultes ein, das gesteuert werden soll.
5. Geben Sie bei **Port** den Wert **4430** ein.
6. Klicken Sie auf **Save and Back**.
7. Klicken Sie auf **Save and Load**.


## Programmieren von Playbacks für das Touch-Panel

Oben auf dem D3 Touch gibt es bis zu vier Zonen-Buttons. Klickt man einen an, so werden darunter die bis zu acht Szenen dieser Zone angezeigt.

Zum Erstellen der Zonen und Szenen müssen in Titan bis zu vier Playback-Gruppen mit jeweils bis zu acht Playbacks programmiert werden, die jeweils bestimmte Nummern haben müssen: die Playback-Gruppen müssen die Nummern 1010, 1020, 1030 sowie 1040 haben, und die jeweils zugeordneten Playbacks benötigen die Nummern 1011-1018 für Playback in der ersten Gruppe, 1021-1028 in der zweiten Gruppe etc.

Innerhalb jeder Playback-Gruppe kann jeweils nur ein Playback aktiv sein (siehe [Playback-Gruppen](../running-the-show/playback-controls.md#playback-gruppen)). Dieses Verhalten lässt sich in den Optionen der jeweiligen Playback-Gruppe ändern.

- in jeder Zone müssen mindestens zwei Szenen enthalten sein.

Die Legende (Text oder Bild) der Buttons wird von der in Titan eingestellten Legende übernommen.

Und die gewünschten Szenen zu programmieren, gehen Sie wie folgt vor:

1. Erstellen Sie die gewünschten Playbacks (auf Buttons oder auf Fadern).
2. Stellen Sie mit <Keys.SoftKey>Set Legend</Keys.SoftKey> die richtigen Benutzernummern der Playbacks ein (s.u.).
3. Erstellen Sie eine Playback-Gruppe mit den Playbacks für eine Zone (siehe [Playback Groups](../running-the-show/playback-controls.md#playback-gruppen)).
4. Stellen Sie mit <Keys.SoftKey>Set Legend</Keys.SoftKey> die richtigen Benutzernummern der Playback-Gruppen ein (s.u.).
5. Für jedes Playback und jede Gruppe können Sie mit <Keys.SoftKey>Legend=</Keys.SoftKey> eine Bezeichnung vergeben (nur Text).
6. Wiederholen Sie die Schritte 3-5 für alle weiteren Szenen (Playbacks) und Zonen (Playback-Gruppen).

- Um die Anzeige auf dem D3 Touch zu aktualisieren, muss ein Zonen-Button angeklickt werden.
- Jede Playback-Gruppe muss eine benutzerdefinierte Legende erhalten, ansonsten wird ein leerer Button angezeigt.

### Usernummern (Benutzernummern) für Zonen und Szenen

Die Zonen (Playback-Gruppen) und Szenen (Playbacks) müssen folgende Usernummern haben, um auf dem D3 Touch zu erscheinen:

 Zone | Playback-Gruppe | Szene 1 | Szene 2 | Szene 3 | Szene 4 | Szene 5 | Szene 6 | Szene 7 | Szene 8
---|---|---|---|---|---|---|---|---|---
Zone 1 | 1010 | 1011 | 1012 | 1013 | 1014 | 1015 | 1016 | 1017 | 1018
Zone 2 | 1020 | 1021 | 1022 | 1023 | 1024 | 1025 | 1026 | 1027 | 1028
Zone 3 | 1030 | 1031 | 1032 | 1033 | 1034 | 1035 | 1036 | 1037 | 1038
Zone 4 | 1040 | 1041 | 1042 | 1043 | 1044 | 1045 | 1046 | 1047 | 1048

- Szenen werden in der Reihenfolge angezeigt, in der sie der jeweiligen Playback-Gruppe hinzugefügt werden. Erstellen Sie also die Gruppe mit den Playbacks in der passenden Reihenfolge.

## Programmieren von Macros für das Touch-Panel

Klickt man auf dem Touch-Panel auf den Button 'Macros' (unten links), so werden auf dem Panel die Macros mit den Nummern 1001-1008 angezeigt.
Zum Erstellen eines Macros für das Touch-Panel gehen Sie wie folgt vor:

1. Speichern Sie ein Macro (siehe [Macros -- Tastenfolgen](../titan-basics/front-panel-buttons.md#macros----tastenfolgen))
2. Stellen Sie mit <Keys.SoftKey>Set Legend</Keys.SoftKey> die Benutzernummern der Macros im Bereich 1001-1008 ein.
3. Mit <Keys.SoftKey>Legend=</Keys.SoftKey> können Sie eine Bezeichnung vergeben (nur Text).

- Jedes Macro, das auf dem Touch-Panel angezeigt werden soll, muss eine eindeutige Nummer zwischen 1001 und 1008 erhalten. Die Macros werden in der Reihenfolge der Nummern angezeigt.
- Wurden Macros neu programmiert oder geändert, so muss zur Anzeige der Änderungen der Macro-Button <Keys.SoftKey>< ></Keys.SoftKey> angeklickt werden.
- Um werksseitig vorgefertigte Macros zu verwenden, kopieren Sie diese aus der Show Library in ein Arbeitsfenster, vergeben eine Nummer im Bereich 1001-1008 sowie mit <Keys.SoftKey>Set Legend</Keys.SoftKey> eine eindeutige Legende. Vorgabemacros ohne eigene Legende werden durch einen leeren Button angezeigt.
- Macros, die vom D3 Touch per WebAPI aufgerufen werden, laufen in einem anderen Programmkontext als die normale Titan-Oberfläche, was zu unerwarteten Ergebnissen führen kann. Sollte es erforderlich sein, so wenden Sie sich an Avolites, welche Lösungen eventuell in Frage kommen.

## Sperren/Entsperren des Touch-Panels

Mit dem Button mit dem Schloss-Symbol unten rechts kann das Panel gesperrt werden.

- Als Sperrbildschirm wird das als **Lock Screen Background** in Titan eingestellte Bild angezeigt.
- Der Code zum Entsperren ist das **Venue Mode Password**. Es sind nur Ziffern als Passcode möglich.

Beide Einstellungen können im Reiter **Lock** der [Benutzereinstellungen](../system-settings/user-settings.md#lock) vorgenommen werden.
Um Änderungen zu übernehmen, muss auf dem D3 Touch das Einstellungsmenü aufgerufen und auf **Save and Load** geklickt werden.

## Anzeige der Firmware-Version

Zur Anzeige der Firmware klicken und halten Sie einen unsichtbaren Button links neben dem **Lock**-Button.

## Updaten der Firmware

Das D3 Touch kann automatisch über das Internet mit aktueller Firmware versehen werden. Dazu ist eine Internetverbindung mit freigegebenem FTP-Zugang erforderlich.

1. Öffnen Sie das Einstellung-Menü durch Klicken auf den Button **IP Settings** (sofern keine Verbindung zu einem Pult besteht), oder per Doppelklick auf den Button **Lock** (falls der D3 Touch mit Titan verbunden ist).
2. Stellen Sie im Menü **Project Setup** Folgendes ein:
    - **Reload Next Time**: On/Checked
    - **Reload Images**: On/Checked
    - **Project Location**: `https://demopad-public.s3-eu-west-1.amazonaws.com/avolites/project` (Achtung: dieses Feld mit mit http vorbelegt; ändern Sie dies auf https)
    - **Project Password**: Avolites-001
    - **Project Name**: D3
3. Klicken Sie auf **Save and Back**.
4. Klicken Sie auf **Save and Load**.

Wurde die Firmware erfolgreich aktualisiert, so ändern Sie die Einträge für **Reload Next Time** und **Reload Images** wieder auf Off, ansnonsten würde das D3 Touch bei jedem Neustart ein Update versuchen:

1. Öffnen Sie das Einstellung-Menü
2. Stellen Sie im Menü **Project Setup** Folgendes ein:
    - **Reload Next Time**: Off/Unchecked
    - **Reload Images**: Off/UnChecked
3. Klicken Sie auf **Save and Back**.
4. Klicken Sie auf **Save and Load**.

