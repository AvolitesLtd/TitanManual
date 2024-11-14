---
id: running-the-show
title: Steuern der Show
sidebar_label: Steuern der Show
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

It's Showtime! In diesem Kapitel werden die Funktionen des Pultes während des Showablaufs erläutert.

## Sichern der Show

Das Wichtigste während des Programmierens, am Ende des Programmierens,
und beim Beginn der Show, ist das [Sichern der Daten](./titan-basics/loading-and-saving-shows.md#die-show-speichern). 
Ein Backup kann sowohl auf der internen Festplatte als auch auf einem 
USB-Stick gespeichert werden. Der USB-Stick empfiehlt sich
insbesondere, um die Show auch auf ein anderes Pult transferieren zu
können.

## Das Pult beschriften

Während der Show ist es wichtig zu wissen, was denn nun wo programmiert
ist. Beschriften Sie Ihr Pult, entweder mit der elektronischen
Beschriftung/Bemalung (siehe [Legenden und Bezeichnungen](./titan-basics/workspace-windows.md/#legenden-und-bezeichnungen)), oder mit Klebeband und Stift.

## Display-Ansicht speichern

Es lassen sich diverse **Workspaces** (Arbeitsumgebungen) einrichten, die
ihrerseits die Anordnung und Anzeige der verschiedenen Fenster
speichern. Diese Arbeitsumgebungen lassen sich auf den Schaltflächen
links der Menütasten (linker Bildschirmrand beim Diamond 9, Sapphire Touch und Titan 
Go sowie bei externen Displays) speichern und abrufen. Workspaces lassen 
sich auch auf Executor-Tasten speichern.

Drücken Sie zweimal auf <Keys.HardKey>Open/View</Keys.HardKey>, um die Auswahl der anzuzeigenden 
Fenster einzublenden. Siehe [Auswahl und Positionierung der Arbeitsfenster](./titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster)
für weitere Details zu den verschiedenen Fenstern.

Man kann auch die Workspaces per [Set List](./running-the-show/set-list-window.md) 
 passend zum jeweiligen Song umschalten.

## Das Pult sperren

Das Pult lässt sich sperren, um unbeabsichtigte oder unbefugte Eingriffe
zu verhindern. Es lässt sich eine Grafik einstellen, die bei gesperrtem Pult angezeigt wird.
Ebenso kann ein Workspace definiert werden, der als *Venue Mode* angezeigt wird, so dass 
bei gesperrtem Zustand z.B. nur die Playbacks zur Verfügung stehen und das Personal das Licht einschalten kann.

Bei gesperrtem Pult sind sämtliche Funktionen deaktiviert, abgesehen vom
DMX-Ausgang und den aktuell laufenden Playbacks.

1. Halten Sie dazu <Keys.HardKey>AVO</Keys.HardKey> gedrückt.
2. Klicken Sie auf <Keys.SoftKey>Lock</Keys.SoftKey>.
3. Geben Sie nun ein Passwort ein (Buchstaben oder Ziffern).
4. Drücken Sie <Keys.SoftKey>Lock</Keys.SoftKey>.
5. Zum Entsperren muss das gleiche Passwort wieder eingegeben werden.

Die Eingabeaufforderung für das Passwort wird nach einigen Sekunden der Inaktivität ausgeblendet, erscheint aber 
sofort wieder, sobald eine Taste betätigt oder der Bildschirm angetippt wird.

Sie können ein **Programmer Password** speichern, so dass Sie nicht immer wieder das Passwort zum Sperren eingeben müssen. Dazu klicken Sie bei Schritt 3 auf <Keys.SoftKey>Set Saved Password</Keys.SoftKey> (auch möglich im Tab 'Lock' der Benutzereinstellungen). Ist ein 'Programmer Password' gespeichert, so kann man Schritt 3 überspringen und das Pult einfach mit <Keys.HardKey>Avo</Keys.HardKey> <Keys.SoftKey>Lock</Keys.SoftKey> <Keys.SoftKey>Lock</Keys.SoftKey> sperren.

> Das Pult kann jederzeit mit dem Code "68340" entsperrt werden. <br/>
  Durch das Sperren und das Passwort ist die Show weder verschlüsselt noch sonstwie geschützt. Es handelt sich um eine einfache Sperre, um ungewollte - versehentliche oder mutwillige - Bedienung des Pultes zu verhindern.

### Hintergrundbild für den Sperrbildschirm

Man kann extra ein Bild als Hintergrundbild für den Sperrbildschirm festlegen. Drücken Sie dazu <Keys.HardKey>Avo</Keys.HardKey> und wählen das Menü <Keys.SoftKey>User Settings</Keys.SoftKey> (Benutzereinstellungen). Auf der Seite **Lock** kann man bei **Lock Screen Background** ein Bild laden oder eine Grafik zeichnen.

Wird ein Bild geladen, so kann man mit der Option <Keys.SoftKey>Scaling Mode</Keys.SoftKey> einstellen, wie das Bild auf den/die Displays skaliert wird:

-   None: keine Skalierung, das Bild wird in Originalgröße angezeigt
-   Letterbox: skaliert, bis entweder Breite oder Höhe formatfüllend
    dargestellt werden, und lässt ansonsten schwarze Ränder
-   Fill: skaliert, bis das Bild in voller Breite oder Höhe dargestellt
    wird.
-   Stretch: Das Bild wird auf den gesamten Bildschirm aufgezogen und
    ggf. verzerrt dargestellt

Mit dem Button <Keys.SoftKey>Clear</Keys.SoftKey> wird ein eingestelltes Bild wieder gelöscht.

Um ohne Skalierung den ganzen Bildschirm auszufüllen, müssen Bilder in diesem Format vorliegen:

Konsole | Auflösung
-- | --
D9 (-330 / -215) | 1920 x 1080
Sapphire Touch | 1366 x 786
Arena | 1366 x 786
Tiger Touch II | 1366 x 786
Quartz | 1280 x 800
TNP | 800 x 480

### Eingeschränkter Zugriff mit dem Venue Mode

Man kann einen Workspace definieren, der bei gesperrtem Pult aktiv ist und damit eingeschränkte Bedienung bietet. Dies ist der **Venue Mode** workspace. Damit kann man z.B. dem Personal Zugriff auf das Saallicht gestatten, ohne selbst am Pult zu sein.

1.  Speichern Sie einen Workspace mit den gewünschten Fenstern, z.B. dem Playbacks-Fenster oder mit virtuellen Fadern, auf die die gewünschten Lichtstimmungen gespeichert sind.
2.  Rufen Sie die Einstellung **Venue Mode Workspace** auf der Seite **Lock** der Benutzereinstellungen auf (<Keys.HardKey>Avo</Keys.HardKey> gedrückt halten und <Keys.SoftKey>User Settings</Keys.SoftKey> drücken), und wählen Sie den gewünschten Workspace mit den Menütasten.
3.  Sperren Sie das Pult wie oben beschrieben. Darauf erscheint der angegebene Workspace.
4.  Um das Pult zu entsperren, klicken Sie auf <Keys.SoftKey>Programmer Mode</Keys.SoftKey> rechts oben und geben das gesetzte Passwort ein.

![Venue Mode example](/docs/images/venue-mode.png)

Die Hardware-Tasten des Pultes sind im gesperrten Zustand deaktiviert. Nur die folgenden Fenster können als Venue Mode workspace verwendet und bedient werden:

-  Alle Fenster, in die gespeichert werden kann (Colours, Playbacks, Media, etc.)
-  Active Playbacks
-  Audio Triggers
-  Capture Visualiser
-  Channel Grid
-  DMX
-  Event Log
-  Intensity View
-  Pioneer DJ
-  Pixel Map Preview
-  Playback Groups
-  Timecode Windows
-  Video Multi View
-  Virtual Faders

Die Auswahl von Fixtures ist deaktiviert. Quick Palettes können aber verwendet werden.

>   Menüs sind im Venue Mode deaktiviert. Damit gehen auch Macros nicht, die Menüs oder damit verknüpfte Funktionen aufrufen. Auch Funktionen, bei denen eine Taste mehrfach gedrückt werden muss, gehen im Venue Mode nicht, denn auch diese benötigen das Menüsystem (Beispiel: Doppelklick auf <Keys.HardKey>Release</Keys.HardKey> zum Aufruf der Funktion *Release All*). 

Mit der Einstellung **Lock on Startup** auf der Seite **Lock** der [Benutzereinstellungen](./system-settings/user-settings.md#lock) kann man einstellen, in welchen Status das Pult bzw. die Software nach dem Neustart startet. Damit das Pult im gesperrten Zustand startet, muss ein Passwort vergeben werden.

Ggf. ist es sinnvoll, in den Benutzereinstellungen auf dem Reiter **Lock** ein **Venue Mode Password** einzustellen. Um das Pult zu sperren, klicken Sie rechts oben auf <Keys.SoftKey>Lock</Keys.SoftKey>. Damit wird der normale Sperrbildschirm angezeigt. Gibt man nun zum Entsperren das 'Venue Mode Passwort' ein, so öffnet sich der 'Venue Mode workspace', und man hat eingeschränkten Zugriff.

## Verwenden der 'Move'-Funktion

Wenn im Laufe des Programmierens die Anordnung von Paletten, Geräten und
Speicherplätzen etwas unübersichtlich geworden ist, ist es an der Zeit,
mit der 'Move'-Funktion wieder aufzuräumen. Beim Verschieben der
programmierten Details bleiben sämtliche logischen Bezüge und
Verknüpfungen selbstverständlich erhalten.

Das Verschieben von Geräten, Paletten, Gruppen und Speicherplätzen ist
sehr einfach:

1.  Drücken Sie <Keys.HardKey>Move</Keys.HardKey> (ist diese Taste nicht vorhanden dann <Keys.HardKey>AVO</Keys.HardKey> 
und dazu die Taste <Keys.HardKey>Copy</Keys.HardKey>).
2.  Betätigen Sie die **Auswahltasten** der zu verschiebenden Dinge.
3.  Drücken Sie die **Auswahltasten**, auf die verschoben werden soll.

Beim Verschieben eines kompletten Bereichs kann es passieren, dass
dieser verschiedene Dinge und auch unbelegte Plätze enthält. In diesem
Falle lässt mit den Menütasten <Keys.SoftKey>Bunch Up</Keys.SoftKey> (Zusammenfassen) wählen, um
sämtliche Lücken in dem Bereich zu entfernen.

Mit <Keys.SoftKey>Swap Items if Required</Keys.SoftKey> (Verschieben falls erforderlich) wird
versucht, einzelne Speicherplätze, die dem Verschieben im Wege wären,
woandershin zu verschieben. Dies bietet sich an, wenn die aktuelle Seite
nahezu voll ist.

-   Steht nicht genügend Platz zur Verfügung (ist z.B. etwas im Weg,
    oder ist nicht genügend Platz am Ende der Seite), so wird das
    Verschieben scheitern.

-   Wenn Sie mehrere Dinge nacheinander verschieben wollen, können Sie die
    Move-Funktion mit der Taste <Keys.HardKey>Latch Menu</Keys.HardKey> einrasten, um sie nicht
    jedes Mal erneut aufrufen zu müssen.

## Blind-Modus

Sollen noch schnell ein paar kleine Änderungen an Cues oder Paletten mit
Hilfe des Visualisers vorgenommen werden, ohne den Live-Betrieb zu
stören, lässt sich das Pult auch in den Blind-Modus schalten. Dazu
drückt man die Taste <Keys.HardKey>Blind</Keys.HardKey> (nicht alle Pulte verfügen nicht über diese
-- in diesem Fall hält man <Keys.HardKey>Avo</Keys.HardKey> gedrückt und wählt den Menüpunkt
&nbsp;<Keys.SoftKey>Blind</Keys.SoftKey>). Im Blind-Modus haben Änderungen der Programmierung keinen 
Einfluss auf das Ausgangssignal, nur bereits programmierte Playbacks funktionieren wie gewohnt. Die 
Taste <Keys.HardKey>Blind</Keys.HardKey> leuchtet, und im Info-Bereich steht **BLIND MODE**.

Um wieder zum **Live-Modus** zurückzukehren, drücken Sie wieder auf <Keys.HardKey>Blind</Keys.HardKey>.

Um ein Playback zu überprüfen, kann man das Playback selbst Blind
schalten. Dazu hält man die <Keys.HardKey>Blind</Keys.HardKey>-Taste und drückt die Auswahltaste des
Playbacks. Um das Playback wieder Live zu schalten, geht man
genauso vor. Playbacks können auch über die Playback-Optionen Blind
geschaltet werden.

Dabei kann von der eingestellten Blind-Stimmung sanft in den
Live-Betrieb übergeblendet werden, ohne dass man erst ein Playback
speichern muss. Ebenso kann man im Blind die nächste Stimmung aus
mehreren Paletten kombinieren und dann in diese einfaden. (Noch
einfacher geht das mit dem [Scene Master](./running-the-show/playback-controls.md#scene-master)).

Um nach Live überzublenden, tippen Sie mit den Zifferntasten die gewünschte Zeit
in Sekunden ein und drücken die <Keys.HardKey>Blind</Keys.HardKey>-Taste.

-  Sind im Programmer Attribut-Zeiten gesetzt worden, so haben diese
Vorrang vor der manuell eingegebenen Zeit.
