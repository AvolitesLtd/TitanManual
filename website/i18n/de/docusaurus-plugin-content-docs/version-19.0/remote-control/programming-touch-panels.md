---
id: programming-touch-panels
title: Verwenden von Touch-Panels
sidebar_label: Verwenden von Touch-Panels
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Durch Verbinden mehrerer D3-Touch-Panels per Ethernet kann ein größeres Titan-Steuerungssystem aufgebaut werden. Dabei ermöglichen 
die Panels einen einfachen Weg der Steuerung, für bis zu 8 Playbacks in vier Playback-Gruppen. Damit kann dem Hauspersonal die Steuerung 
z.B. des Arbeitslichts, des Hauslichts oder auch einfacher Lichtstimmungen für die Show ermöglicht werden.

Ebenso können bis zu acht Macros verwendet sowie das Panel ge- und entsperrt werden.

![D3-Touch](/docs/images/D3-touch-front.png)



## Ein Touch-Panel verbinden

Touch-Panels werden per kabelgebundenem Ethernet mit dem Titan-System verbunden. Die Stromversorgung erfolgt per Power-over-Ethernet (PoE)
durch einen entsprechenden Switch, mit einem PoE-Injektor, oder über ein Steckernetzteil.

Auf dem Pult und auf dem Panel müssen passende IP-Adressen eingestellt werden, oder man aktiviert DHCP. Mehr dazu siehe [Netzwerkeinrichtung](../networking.md).

## Programmieren von Playbacks für das Touch-Panel

Auf dem Touch-Panel kann jeweils eine von vier Playback-Gruppen ausgewählt werden. Innerhalb einer solchen Gruppe kann immer nur ein Playback aktiv sein, d.h. die Playbacks deaktivieren sich gegenseitig (siehe [Playback-Gruppen](../running-the-show/playback-controls.md#playback-gruppen)). Auf dem Touch-Panel werden die Playback-Gruppen mit den Nummern 1001-1004 verwendet.

Die auf dem Touch-Panel angezeigten Legenden kommen von den in Titan eingestellten Legenden, die Farbe der Buttons ist die Halo-Farbe der Playbacks in Titan.

Um eine Playbackgruppe zu erstellen, die auf dem Touch-Panel verwendet werden kann, gehen Sie wie folgt vor:

1. Erstellen Sie in Titan eine Playback-Gruppe aus den zu verwendenden Playbacks, siehe [Playback-Gruppen](../running-the-show/playback-controls.md#playback-gruppen).
2. Drücken Sie im Hauptmenü auf <Keys.SoftKey>Set Legend</Keys.SoftKey> und wählen die Auswahltaste der gewünschten Playback-Gruppe.
3. Drücken Sie auf <Keys.SoftKey>User Number=</Keys.SoftKey> und vergeben eine Nummer zwischen 1001 und 1004.
4. Drücken Sie auf <Keys.SoftKey>Legend=</Keys.SoftKey> oder <Keys.SoftKey>Picture</Keys.SoftKey> und geben eine Legende ein (Name oder Skizze/Bild).
5. Falls gewünscht, können Sie <Keys.SoftKey>Halo</Keys.SoftKey> drücken und eine Farbe für den Button wählen.
6. Wiederholen Sie die Schritte 2-5 für die anderen Playbacks der Gruppe.

- Jede Playback-Gruppe, die auf dem Touch-Panel angezeigt werden soll, muss eine eindeutige Nummer zwischen 1001 und 1004 erhalten. Die Playback-Gruppen werden in der Reihenfolge der Nummern angezeigt.

## Programmieren von Macros für das Touch-Panel

Klickt man auf dem Touch-Panel auf den Button 'Macros' (unten links), so werden auf dem Panel die Macros mit den Nummern 1001-1008 angezeigt.
Zum Erstellen eines Macros für das Touch-Panel gehen Sie wie folgt vor:

1. Speichern Sie ein Macro (siehe [Macros -- Tastnfolgen](../titan-basics/front-panel-buttons.md#macros----tastenfolgen))
2. Drücken Sie im Hauptmenü auf <Keys.SoftKey>Set Legend</Keys.SoftKey> und wählen den Button des gewünschten Macros.
3. Drücken Sie auf <Keys.SoftKey>User Number=</Keys.SoftKey> und vergeben eine Nummer zwischen 1001 und 1008.
4. Drücken Sie auf <Keys.SoftKey>Legend=</Keys.SoftKey> oder <Keys.SoftKey>Picture</Keys.SoftKey> und geben eine Legende ein (Name oder Skizze/Bild).
5. Falls gewünscht, können Sie <Keys.SoftKey>Halo</Keys.SoftKey> drücken und eine Farbe für den Button wählen.

- Jedes Macro, das auf dem Touch-Panel angezeigt werden soll, muss eine eindeutige Nummer zwischen 1001 und 1008 erhalten. Die Macros werden in der Reihenfolge der Nummern angezeigt.


## Sperren/Entsperren des Touch-Panels

Mit dem Button mit dem Schloss-Symbol unten rechts kann das Panel gesperrt werden.
Der Code zum Entsperren kann in den Benutzereinstellungen des Pultes gesetzt werden (siehe [Benutzereinstellungen - Lock](../system-settings/user-settings.md#lock)). Es sind nur Ziffern als Passcode möglich.
