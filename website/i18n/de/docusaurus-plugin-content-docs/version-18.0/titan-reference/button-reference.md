---
id: button-reference
title: Tasten-Referenz
sidebar_label: Tasten-Referenz
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

In diesem Abschnitt sind alle HHardware-Tasten mit ihrer Funktion aufgeführt. **Links** führen jeweils zum Abschnitt 
des Manuals mit weiterführenden Informationen. Manche Tasten stehen nicht auf allen Pulten zur Verfügung.

&nbsp;``<n>`` -- geben Sie einen Wert mit den Zifferntasten ein.

&nbsp;<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Colour</Keys.HardKey> -- drücken Sie die genannten Tasten nacheinander.

&nbsp;<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Clear</Keys.HardKey> -- (Pluszeichen): halten Sie die erste Taste gedrückt und betätigen Sie dazu die zweite Taste.

&nbsp;{Select} -- drücken Sie die Auswahltaste, z.B. eines Playbacks.



## <Keys.HardKey>@</Keys.HardKey> 
(beim Ziffernblock): Eingabe von numerischen Werten. kann auch mit den Tasten <Keys.HardKey>Fixture</Keys.HardKey> oder <Keys.HardKey>Group</Keys.HardKey> verwendet werden, um eine Auswahl vorzunehmen. Zu <Keys.HardKey>@</Keys.HardKey> Tasten bei den Encodern dagegen siehe [Wheel @](#wheel-).

Beispiele: 

&nbsp;<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>And</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 7 <Keys.HardKey>@</Keys.HardKey> 75 <Keys.HardKey>Enter</Keys.HardKey> = Fixtures 1,5,7 auf 75%)<br/>


&nbsp;<Keys.HardKey>Group</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> = alle Fixtures in Gruppe 5 auf 100%<br/>


Tasten | Ergebnis
--------|--------
<Keys.HardKey>@</Keys.HardKey> ``<n>`` <Keys.HardKey>Enter</Keys.HardKey> | Stellt den Pegel der ausgewählten Geräte im Programmer auf ``<n>`` (``<n>`` normalerweise 0-99, optional einstellig 0-9, siehe [Formatting (Formate)](../system-settings/user-settings.md#formatting-formate))
 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Stellt den Pegel der ausgewählten Geräte im Programmer auf 100%.



## <Keys.HardKey>@A</Keys.HardKey> <Keys.HardKey>@B</Keys.HardKey> <Keys.HardKey>@C</Keys.HardKey>
Für die <Keys.HardKey>@</Keys.HardKey> Tasten bei den Encodern dagegen siehe [Wheel @](#wheel-).



## <Keys.HardKey>Align</Keys.HardKey> 
(Nur beim D9) Kopieren von Attributwerten von einem auf andere Geräte. Auf anderen Pulten als dem D9 ist diese Funktion über die Taste <Keys.HardKey>ML Menu</Keys.HardKey> zu erreichen, siehe [Geräte miteinander abgleichen](../controlling-fixtures/changing-fixture-attributes.md#geräte-miteinander-abgleichen).



## <Keys.HardKey>All</Keys.HardKey> 
Auswahl nach Schema (z.B. gerade/ungerade) innerhalb der bereits angewählten Geräte beginnen oder beenden. Siehe [Geräteauswahl nach Muster](../controlling-fixtures.md#geräteauswahl-nach-muster). (Auf dem D9 heißt die Taste <Keys.HardKey>Pattern/All</Keys.HardKey>)



## <Keys.HardKey>And</Keys.HardKey> 
Verwendet bei der Auswahl mehrerer Elemente mit dem Ziffernblock, kann mit den Tasten <Keys.HardKey>Through</Keys.HardKey> und <Keys.HardKey>Not</Keys.HardKey> kombiniert werden. Siehe [Anwählen von Dimmern/Geräten nach (Kanal-)Nummer](../controlling-fixtures.md#anwählen-von-dimmerngeräten-nach-kanal-nummer). Diese Taste ist nicht auf allen Pulten vorhanden, es gibt aber bei numerischer Eingabe die Menütaste <Keys.SoftKey>And</Keys.SoftKey>.

Beispiel:  <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>And</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 7

Wird eine Zeit oder ein Timecode eingegeben, so kann man mit den Tasten <Keys.HardKey>And</Keys.HardKey> und <Keys.HardKey>Through</Keys.HardKey> zwischen den Werten für Stunden/Minuten/Sekunden/Frames wechseln.



## <Keys.HardKey>Assign</Keys.HardKey> 
(Nur beim D9 und ST) Zuordnung der Steuerung von Attributen mit dem Trackball, sowie dem Dimmer-Handrad (nur beim D9). Siehe [Trackball](../controlling-fixtures/changing-fixture-attributes.md#der-trackball-diamond-9-und-sapphire-touch).



## <Keys.HardKey>Avo</Keys.HardKey> 
"Shift" bzw. "Umschalt"-Taste wenn gedrückt gehalten, ermöglicht erweiterte Funktionen der normalen Befehle. Einzeln für sich ruft diese Taste ein eigenes Menü auf (Lock, Benutzereinstellungen etc.).

Tasten | Aktion
--------|--------
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> | Setzt im Programmer 0% für die nicht angewählten Geräte, gleiche Funktion wie <Keys.HardKey>Rem Dim</Keys.HardKey>, siehe [Nicht ausgewählte Geräte ausblenden (Remainder Dim)](../controlling-fixtures.md#nicht-ausgewählte-geräte-ausblenden-remainder-dim). Beim Einstellen von Attributzeiten werden damit alle Geräte deselektiert, siehe [Individuelle Einblendzeiten für Attribute](../cue-lists/cue-list-timing.md#individuelle-einblendzeiten-für-attribute).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Back</Keys.HardKey> | Undo/Rückgängig, siehe [Undo/Redo -- Rückgängig machen/Wiederholen](../titan-basics/other-parts-of-the-touch-screen.md#undoredo----rückgängig-machenwiederholen).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Close</Keys.HardKey> | Alle Fenster schließen, siehe [Auswahl und Positionierung der Arbeitsfenster](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Copy</Keys.HardKey> | Wie <Keys.HardKey>Move</Keys.HardKey> (wenn keine Move-Taste vorhanden ist; funktioniert auf allen Pulten)
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> | Aufruf des **System-Menüs**, siehe [System-Menü](../system-settings/the-system-menu.md).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Exit</Keys.HardKey> | Verlassen des Menüs direkt zum Hauptmenü.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Fix +</Keys.HardKey> | Springt um eine Länge des Musters nach vorn (oder mit <Keys.HardKey>Fix -</Keys.HardKey> zurück) bei der Auswahl nach Muster/Schema.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Flash On</Keys.HardKey> | Blendet die ausgewählten Geräte vorübergehend aus.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Group</Keys.HardKey> {Select} | Speichern einer Gruppe auf einen Button/Fader, siehe [Eine Gruppe speichern](../controlling-fixtures/fixture-groups.md#eine-gruppe-speichern).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Highlight</Keys.HardKey> | Speichern des Highlight-Status, siehe [Das ausgewählte Gerät bei Fix+1/Fix-1 hervorheben](../controlling-fixtures.md#das-ausgewählte-gerät-bei-fix1fix-1-hervorheben)
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Macro</Keys.HardKey> {Select} | Ein Macro auf eine Taste speichern, siehe [Macros -- Tastenfolgen](../titan-basics/front-panel-buttons.md/#macros----tastenfolgen).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Min/Max</Keys.HardKey> | Aktivieren eines anderen bereits geöffneten Fensters, siehe [Arbeitsfenster](../titan-basics/workspace-windows.md).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Open/View</Keys.HardKey> {Workspace-Button} | Speichern der aktuellen Arbeitsumgebung (Workspace), siehe [Speichern der Arbeitsumgebung](../titan-basics/workspace-windows.md#speichern-der-arbeitsumgebung).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Release</Keys.HardKey> | Releasen aller Playbacks nach Priorität (genau wie 2 x <Keys.HardKey>Release</Keys.HardKey>). Siehe [Release](../cues/cue-playback.md#release).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Shape</Keys.HardKey> | 
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Size/Position</Keys.HardKey> | Verschiebt das aktive Fenster auf den nächsten/anderen Bildschirm, siehe [Arbeitsfenster](../titan-basics/workspace-windows.md).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Time</Keys.HardKey> | Vorschau der Attribut-Fadezeiten, siehe [Attribute Times](../controlling-fixtures/changing-fixture-attributes.md#speichern-von-zeiten-für-attribute-und-geräte).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Undo</Keys.HardKey> oder <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>@</Keys.HardKey> | Wiederholen, siehe [Undo/Redo -- Rückgängig machen/Wiederholen](../titan-basics/other-parts-of-the-touch-screen.md#undoredo----rückgängig-machenwiederholen).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Blind</Keys.SoftKey> | Blind-Modus aktivieren/deaktivieren, wie <Keys.HardKey>Blind</Keys.HardKey>.
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Edit current key profile</Keys.SoftKey> | einstellen der Funktion der Flash- und Auswahltasten, siehe [Tastenprofile/Key Profiles](../system-settings/key-profiles.md).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Lock</Keys.SoftKey> | Vorübergehendes Sperren des Pultes, siehe [Das Pult sperren](../titan-basics/front-panel-buttons.md#das-pult-sperren).
 <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>User Settings</Keys.SoftKey> | User Settings/Benutzereinstellungen, siehe [User Settings - Benutzereinstellungen](../system-settings/user-settings.md).
 <Keys.HardKey>Avo</Keys.HardKey> + {Scene Master} | Aktivieren/Beenden des Preset-Modus, wenn der Scene Master auf einer Taste oder Schaltfläche liegt, siehe [Scene Master](../running-the-show/playback-controls.md#scene-master).
 <Keys.HardKey>Avo</Keys.HardKey> + {Master} | Release eines Masters auf seinen Default-Wert (100%), siehe [Einen Master releasen](../cues/cue-playback.md#einen-master-releasen).
 <Keys.HardKey>Avo</Keys.HardKey> + {Playback} | Playback deaktivieren (killen), siehe [Release](../cues/cue-playback.md#release).
 <Keys.HardKey>Avo</Keys.HardKey> + Encoder drehen | Beschleunigung. Eine Umdrehung deckt den ganzen Bereich von 0 bis 100% ab.
 <Keys.HardKey>Avo</Keys.HardKey> + 2/4/6/8 | Cursor/Pfeiltasten nach oben/links/rechts/unten




## <Keys.HardKey>Back</Keys.HardKey> 
Backspace (Rücktaste) bei numerischer Eingabe und Syntax.



## <Keys.HardKey>Beam</Keys.HardKey> 
Auswahl der Attributgruppe Beam zum Steuern von Zoom, Focus etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Blind</Keys.HardKey> 
Aktivieren des Blind-Modus: es können Änderungen programmiert werden, ohne dass das im Output sichtbar wird. Siehe [Blind-Modus](../running-the-show/playback-controls.md#blind-modus).



## <Keys.HardKey>Block</Keys.HardKey> 
(Nur beim D9 und T3) Z.Zt. nicht verwendet.



## <Keys.HardKey>Chan Grid</Keys.HardKey> 
(Nur auf dem Arena) Öffnet das Channel Grid (Kanalübersicht), siehe [Übersicht über die Kanäle: Das 'Channel Grid'-Fenster](../controlling-fixtures/viewing-and-editing-fixture-values.md#übersicht-über-die-kanäle-das-channel-grid-fenster).



## <Keys.HardKey>Clear</Keys.HardKey> 
Löschen des Inhalts des Programmierspeichers und der Geräteauswahl, siehe [Clear -- Löschen der Auswahl](../controlling-fixtures.md#clear----löschen-der-auswahl).

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Clear</Keys.HardKey> | Löscht Programmer und Geräteauswahl in einem Zug. (Optional auf zwei Tastendrücke einstellbar, siehe [Clear Action Precedence](../system-settings/user-settings.md#clear)).
``<n>`` <Keys.HardKey>Clear</Keys.HardKey> | Löschen des Programmers und Ausfaden in ``<n>`` Sekunden.
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> | Löscht die Geräteauswahl, behält den Programmierspeicher bei.
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Set Mask</Keys.SoftKey> | Löscht nur die Attribute der Clear-Maske aus dem Programmierspeicher.
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Clear Selected Fixtures</Keys.SoftKey> | Löscht nur die gerade ausgewählten Geräte aus dem Programmierspeicher.
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Individual Attributes</Keys.SoftKey> | Löschen einzelner Attributgruppen aus dem Programmierspeicher (zum Auswählen die Attributgruppen-Buttons verwenden).
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Clear All Programmers</Keys.SoftKey> | Löscht auch die Programmer anderer User sowie der Titan Remote.
&nbsp;<Keys.HardKey>Clear</Keys.HardKey> + <Keys.SoftKey>Clear Options</Keys.SoftKey> | Benutzereinstellungen für Clear, siehe [User settings - Clear](../system-settings/user-settings.md#clear)



## <Keys.HardKey>Close</Keys.HardKey> 
Schließt das aktuell aktive Fenster.

Beispiel: (Ein Fenster durch Anklicken der Titelleiste aktivieren) <Keys.HardKey>Close</Keys.HardKey>



## <Keys.HardKey>Colour</Keys.HardKey> 
Auswahl der Attributgruppe Colour zum Steuern von RGB, CMY etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Commit</Keys.HardKey> 
(Nur beim D9) Committen des Scene Masters, gleiches Ergebnis wie Stellen des Reglers auf 100%, siehe [Scene Master](../running-the-show/playback-controls.md#scene-master).



## <Keys.HardKey>Connect</Keys.HardKey> 
(Auf manchen Pulten Connect/Cue.) Verbindet die Ablaufsteuerung (Go-Taste etc.) mit einem Playback. Dient auch zur Auswahl einzelner Cues beim Programmieren und Abrufen von Cuelisten.

Siehe [Verbinden eines Playbacks mit der Steuerung](../chases/chase-playback.md#verbinden-eines-playbacks-mit-der-steuerung), [Abrufen einer Cueliste](../cue-lists/cue-list-playback.md#abrufen-einer-cueliste), [Tipps für Theater-Programmierer](../cue-lists/theatre-programming.md)



## <Keys.HardKey>Copy</Keys.HardKey> 
Kopieren verschiedener Elemente (Geräte/Fixtures, Playbacks etc.). Mit <Keys.HardKey>Latch</Keys.HardKey> kann das Menü eingerastet werden, um mehrere Elemente nacheinander zu kopieren. 2x drücken, um eine Verknüpfung zu erstellen.

Beispiel: <Keys.HardKey>Copy</Keys.HardKey> {zu kopierendes Playback} {Button, auf dem die Kopie gespeichert wird}

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Copy</Keys.HardKey> | Gleiches Ergebnis wie <Keys.HardKey>Move</Keys.HardKey> (für Pulte ohne Move-Taste; funktioniert auf allen Pulten)
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Copy</Keys.HardKey> | Erstellen einer Verknüpfung; gleiches Ergebnis wie <Keys.HardKey>Copy</Keys.HardKey> <Keys.SoftKey>Link</Keys.SoftKey>
 


## <Keys.HardKey>Cue</Keys.HardKey> 
Zur Auswahl von Cues in Cuelisten. Auf manchen Pulten auch "Connect", siehe [Connect](#Connect).



## <Keys.HardKey>Cue +</Keys.HardKey> 
(Nur beim D9 und T3) Wählt in der aktuell gesteuerten Cueliste den nächsten Schritt; gleiche Funktion wie <Keys.HardKey>Next Step</Keys.HardKey>.



## <Keys.HardKey>Cue -</Keys.HardKey> 
(D9 only) Wählt in der aktuell gesteuerten Cueliste den vorigen Schritt; gleiche Funktion wie <Keys.HardKey>Prev Step</Keys.HardKey>.



## <Keys.HardKey>Custom (wheels)</Keys.HardKey> 
(Nur beim D9 - rechts neben den Encodern) Z.Zt. unbenutzt.



## <Keys.HardKey>Delete</Keys.HardKey> 
Löschen von Elementen. Zum Bestätigen muss das jeweilige Element ein zweites Mal angeklickt oder <Keys.HardKey>Enter</Keys.HardKey> gedrückt werden. Mit <Keys.HardKey>Latch</Keys.HardKey> kann das Menü eingerastet werden, um mehrere Elemente nacheinander zu löschen.

Beispiel: <Keys.HardKey>Delete</Keys.HardKey> {Playback} {Playback}



## <Keys.HardKey>Direction</Keys.HardKey> 
(Nur beim D9 und T3) Einstellen der Richtung von Shapes, siehe [Shape-Richtung](../effects/shape-generator.md#shape-richtung)



## <Keys.HardKey>Disk</Keys.HardKey> 
Aufruf von Funktionen wie Sichern oder Laden der Show. Hält man dabei <Keys.HardKey>Avo</Keys.HardKey> gedrückt, so wird das System-Menü aufgerufen. Siehe [Die Show speichern](../titan-basics/loading-and-saving-shows.md#die-show-speichern) und [Das System-Menü](../system-settings/the-system-menu.md).

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> | Aufruf System-Menü
<Keys.HardKey>Disk</Keys.HardKey> <Keys.HardKey>Disk</Keys.HardKey> | Schnellspeichern der Show ohne Rückfrage




## <Keys.HardKey>Edit</Keys.HardKey> 
Editieren von Paletten, siehe [Ändern des Inhalts einer Palette](../palettes/editing-palettes.md#ändern-des-inhalts-einer-palette).



## <Keys.HardKey>Effect</Keys.HardKey> 
Auswahl der Attributgruppe Effect zum Steuern von Prism etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Enter</Keys.HardKey> 
Abschließen einer Eingabe, Bestätigen eines Befehls.



## <Keys.HardKey>Enter/B</Keys.HardKey> 
(Nur beim D9) Aktivieren des Preset-Modus des Scene Masters. Siehe [Scene Master](../running-the-show/playback-controls.md#scene-master).



## <Keys.HardKey>Exit</Keys.HardKey> 
Verlässt/schließt das aktuelle Menü, geht eine Menüebene nach oben.

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Exit</Keys.HardKey> | springt direkt ins Hauptmenü



## <Keys.HardKey>Exit/A</Keys.HardKey> 
(Nur beim D9) Verlassen des Preset-Modus des Scene Masters. Siehe [Scene Master](../running-the-show/playback-controls.md#scene-master).



## <Keys.HardKey>FX</Keys.HardKey> 
(Nur beim D9 und T3) Aufruf des Shape/FX-Menüs, um Shapes, Keyframe-Shapes und Pixelmapper-Effekte zu erstellen. Ebenso verwendet zur An-/Abwahl der FX Attributgruppe beim Erstellen von Masken. Siehe [Shape menu](#Shape).

Mehrfaches Drücken gefolgt von <Keys.HardKey>Enter</Keys.HardKey> ruft die Optionen des Shape/FX-Menüs auf: 2 x <Keys.HardKey>FX</Keys.HardKey> dann <Keys.HardKey>Enter</Keys.HardKey> für Keyframe-Shapes, 3 x <Keys.HardKey>FX</Keys.HardKey> dann <Keys.HardKey>Enter</Keys.HardKey> für den Pixelmapper.



## <Keys.HardKey>FX (wheels)</Keys.HardKey> 
(Nur beim D9 - rechts neben den Encodern) Steuern von Shape-Größe, Geschwindigkeit und Spread mit den Encodern.



## <Keys.HardKey>Fade/Delay (wheels)</Keys.HardKey> 
(Nur beim D9 - rechts neben den Encodern) Steuern von Fade und Delayzeiten mit den Encodern.



## <Keys.HardKey>Fan</Keys.HardKey> 
Startet den Fan-Modus zum Auffächern der Attribute. Siehe [Fan-Modus](../controlling-fixtures/changing-fixture-attributes.md#fan-modus).



## <Keys.HardKey>Fix +1</Keys.HardKey> 
Wählt auf das nächste Fixture innerhalb einer angewählten Anzahl von Geräten. Verwendet, um bei mehreren ausgewählten Geräten auf das folgende zu wechseln. Siehe [Einzeln durch die Geräte einer Auswahl durchschalten](../controlling-fixtures.md#einzeln-durch-die-geräte-einer-auswahl-durchschalten).



## <Keys.HardKey>Fix -1</Keys.HardKey> 
Wählt auf das vorige Fixture innerhalb einer angewählten Anzahl von Geräten. Verwendet, um bei mehreren ausgewählten Geräten auf das vorige zu wechseln. Siehe [Einzeln durch die Geräte einer Auswahl durchschalten](../controlling-fixtures.md#einzeln-durch-die-geräte-einer-auswahl-durchschalten).



## <Keys.HardKey>Fixture</Keys.HardKey> 
Öffnet das Fixture/Channel-Menü, um Geräte numerisch - mit dem Ziffernblock - anzuwählen. Siehe [Anwählen von Dimmern/Geräten nach (Kanal-)Nummer](../controlling-fixtures.md#anwählen-von-dimmerngeräten-nach-kanal-nummer)



## <Keys.HardKey>Flash On</Keys.HardKey> 
Flasht die momentan gewählten Fixtures auf 100%.



## <Keys.HardKey>Go</Keys.HardKey> 
Startet den nächsten Cue des gerade ausgewählten Playbacks, normalerweise verwendet mit Cuelisten. Siehe [Abrufen einer Cueliste](../cue-lists/cue-list-playback.md#abrufen-einer-cueliste).



## <Keys.HardKey>Go page</Keys.HardKey> 
Geben Sie die Seitennummer ``<n>`` der betreffenden Faderbank ein, um auf diese zu wechseln. Pulte mit mehreren Faderbänken haben mehrere solche Tasten. Ebenso gibt es die Tasten <Keys.HardKey>Page +</Keys.HardKey> und <Keys.HardKey>Page -</Keys.HardKey> zum Wechseln auf die nächste/vorige Seite. Siehe [Wechsel der Playback-Seiten](../cues/cue-playback.md#wechsel-der-playback-seiten).
  
Tasten | Ergebnis
--------|--------
<Keys.HardKey>Go page</Keys.HardKey> ``<n>`` | Schaltet die Fader auf Seite n um.
<Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Go page</Keys.HardKey> | Release aller Playbacks der aktuellen Seite. Siehe [Playbacks seitenweise releasen](../cues/cue-playback.md#playbacks-seitenweise-releasen).



## <Keys.HardKey>Gobo</Keys.HardKey> 
Auswahl der Attributgruppe Gobo zum Steuern von Goboauswahl, Rotation etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Group</Keys.HardKey> 
Öffnet das Groups-Menü zum Speichern und Editieren von Gruppen von Geräten. Siehe [Verwenden von Geräte-Gruppen](../controlling-fixtures/fixture-groups.md#verwenden-von-geräte-gruppen). Kann auch verwendet werden, um z.B. alle Geräte einer Gruppe auf einen bestimmten Dimmerwert zu setzen, Beispiel: <Keys.HardKey>Group</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> setzt alle Geräte der Gruppe 5 auf 100%.



## <Keys.HardKey>Hi light</Keys.HardKey> 
Aktiviert oder beendet den Highlight-Modus, bei dem das gerade ausgewählte Gerät durch eine andere Farbe oder Helligkeit extra hervorgehoben wird. Oft verwendet im Zusammenhang mit den Tasten <Keys.HardKey>Fix +1</Keys.HardKey> und <Keys.HardKey>Fix -1</Keys.HardKey>. Siehe [Einzeln durch die Geräte einer Auswahl durchschalten](../controlling-fixtures.md#einzeln-durch-die-geräte-einer-auswahl-durchschalten).



## <Keys.HardKey>Include</Keys.HardKey> 
(gefolgt von der Auswahltaste eines Playbacks) lädt den Inhalt eines Playbacks in den Programmierspeicher zur weiteren Bearbeitung/zum Speichern. Siehe [Cues wiederverwenden - die 'Include'-Funktion](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion).



## <Keys.HardKey>Intensity</Keys.HardKey> 
Auswahl der Attributgruppe Intensity zum Steuern von Dimmer, Shutter etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Keyboard</Keys.HardKey> 
(Nur beim D9) Blendet die Bildschirm-Tastatur ein. Auf anderen Pulten geht das über einen Button in der Titelleiste der Pultsoftware. Siehe [Bildschirmtastatur](../titan-basics/workspace-windows.md#bildschirmtastatur).



## <Keys.HardKey>Latch</Keys.HardKey> 
(Nur beim D9 und T3) Rastet das aktuelle Menü ein, so dass es auch nach dem ausgeführten Befehl aktiv bleibt. Auf anderen Pulten <Keys.HardKey>Latch Menu</Keys.HardKey>, siehe unten.



## <Keys.HardKey>Latch Menu</Keys.HardKey> 
Rastet das aktuelle Menü ein, so dass es auch nach dem ausgeführten Befehl aktiv bleibt. Hilfreich z.B. beim Kopieren, Verschieben, Löschen etc. Siehe [Die Menütasten](../titan-basics/other-parts-of-the-touch-screen.md#die-menütasten).



## <Keys.HardKey>Left</Keys.HardKey> 
(Nur beim D9 und ST) Linke Maustaste bei Verwendung des Trackballs als Maus.



## <Keys.HardKey>Legend</Keys.HardKey> 
(Nur beim D9 und T3) (gefolgt von der Auswahl eines Elementes) Eingabe der Legende eines Elements (Playback, Gruppe, Palette etc.). Auf anderen Pulten ist diese Funktion über den Punkt <Keys.SoftKey>Set Legend</Keys.SoftKey> im Hauptmenü erreichbar. Siehe [Legenden und Bezeichnungen](../titan-basics/workspace-windows.md#legenden-und-bezeichnungen).



## <Keys.HardKey>Levels (wheels)</Keys.HardKey> 
(Nur beim D9 - rechts neben den Encodern) Zur Eingabe von Pegeln/Attributwerten mit den Encodern.



## <Keys.HardKey>Level @</Keys.HardKey> 
(Nur beim D9) Öffnet das @-Menü für das Dimmer-Handrad.



## <Keys.HardKey>Library</Keys.HardKey> 
(Nur beim Arena) Öffnet das Fenster Show Library. Siehe [Show Library - das Show-Verzeichnis](../titan-basics/show-library.md).



## <Keys.HardKey>Live Time</Keys.HardKey> 
Zur Eingabe von Zeiten für den gerade aktuellen Cue einer Cueliste. Siehe [Ändern der Zeiten einer laufenden Cueliste](../cue-lists/editing-cue-lists.md#ändern-der-zeiten-einer-laufenden-cueliste).



## <Keys.HardKey>Locate</Keys.HardKey> 
Versetzt die angewählten Geräte in eine definierte Ausgangsposition mit 'Licht an', um den Start des Programmierens zu vereinfachen. Siehe [Geräte auf Startposition setzen (Locate)](../controlling-fixtures.md#geräte-auf-startposition-setzen-locate).



## <Keys.HardKey>Lock Axis</Keys.HardKey> 
(nur beim D9 und ST) Z.Zt. nicht verwendet.



## <Keys.HardKey>Macro</Keys.HardKey> 
Öffnet das Macro-Menü zur Aufzeichnung und zum Abrufen von Folgen von Tastendrücken. Siehe [Macros -- Tastenfolgen](../titan-basics/front-panel-buttons.md#macros----tastenfolgen). 
 
Macros können auch numerisch aufgerufen werden, Beispiel: <Keys.HardKey>Macro</Keys.HardKey> 5 <Keys.HardKey>Enter</Keys.HardKey>



## <Keys.HardKey>Mask FX</Keys.HardKey> 
(Nur beim D9 und T3) Öffnet das Mask FX-Menü zum Erstellen von Masken zum Blocken von Shapes. Auch als Funktion im Menü Shapes&Effekte verfügbar. Siehe [Shapes stoppen mit Mask FX](../effects/shape-generator.md#shapes-stoppen-mit-mask-fx).

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Mask FX</Keys.HardKey> <Keys.HardKey>Intensity</Keys.HardKey> | Erzeugt Mask FX für Intensity (funktioniert analog für die anderen Attributgruppen)
<Keys.HardKey>Mask FX</Keys.HardKey> <Keys.HardKey>Mask FX</Keys.HardKey> | Erzeugt Mask FX für alle Attributgruppen



## <Keys.HardKey>Menu Latch</Keys.HardKey> 
Rastet das aktuelle Menü ein, so dass es auch nach dem ausgeführten Befehl aktiv bleibt. Hilfreich z.B. beim Kopieren, Verschieben, Löschen etc. Siehe [Die Menütasten](../titan-basics/other-parts-of-the-touch-screen.md#die-menütasten).



## <Keys.HardKey>Min/Max</Keys.HardKey> 
Wechselt die Größe des aktuellen Fensters zwischen klein (ein Viertel des Bildschirms) und Vollbild. Siehe [Auswahl und Positionierung der Arbeitsfenster](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster).



## <Keys.HardKey>ML Menu</Keys.HardKey> 

Im Hauptmenü öffnet diese Taste das Moving Light-Menü, mit dem man Geräte-Macros abrufen sowie die Align-Funktion nutzen kann. In einem Untermenü rastet diese Taste das aktuelle Menü ein, so dass es auch nach dem ausgeführten Befehl aktiv bleibt. Hilfreich z.B. beim Kopieren, Verschieben, Löschen etc. Siehe [Die ML-Menü-Taste](../titan-basics/other-parts-of-the-touch-screen.md#die-ml-menü-taste). Auf dem D9 gibt es diese Taste nicht. Geräte-Macros können mit der Taste <Keys.HardKey>Macro</Keys.HardKey> aufgerufen werden, für die Align-Funktion gibt es die Taste <Keys.HardKey>Align</Keys.HardKey>.



## <Keys.HardKey>Move</Keys.HardKey> 
zum Verschieben von Elementen auf andere Buttons. Mit der Taste <Keys.HardKey>Latch</Keys.HardKey> kann das Menü eingerastet werden, um mehrere Elemente nacheinander zu verschieben. 

Beispiel: <Keys.HardKey>Move</Keys.HardKey> {zu verschiebendes Playback} {Ziel zum Verschieben des Playbacks}



## <Keys.HardKey>Next Step</Keys.HardKey> 
Auswahl des nächsten Cues in der aktuell gesteuerten Cueliste. Auf manchen Pulten <Keys.HardKey>Next Cue</Keys.HardKey> oder <Keys.HardKey>Cue +</Keys.HardKey>. Siehe [Abrufen einer Cueliste](../cue-lists/cue-list-playback.md#abrufen-einer-cueliste).



## <Keys.HardKey>Next Time</Keys.HardKey> 
Editieren von Zeiten für nächsten Cue in der aktuell gesteuerten Cueliste. Siehe [Ändern der Zeiten einer laufenden Cueliste](../cue-lists/editing-cue-lists.md#ändern-der-zeiten-einer-laufenden-cueliste).



## <Keys.HardKey>Not</Keys.HardKey> 
Auslassen einzelner Geräte bei der Auswahl einer Serie von Geräten, siehe [Anwählen von Dimmern/Geräten nach (Kanal-)Nummer](../controlling-fixtures.md#anwählen-von-dimmerngeräten-nach-kanal-nummer).

Beispiel: <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>not</Keys.HardKey> 3 selektiert die Geräte  1, 2, 4, 5



## <Keys.HardKey>Odd/Even</Keys.HardKey> 
Ersetzt durch <Keys.HardKey>All</Keys.HardKey>. Auswahl nach Schema (z.B. gerade/ungerade) innerhalb der bereits angewählten Geräte. Siehe [Geräteauswahl nach Muster](../controlling-fixtures.md#geräteauswahl-nach-muster).



## <Keys.HardKey>Off</Keys.HardKey> 
Zum Deaktivieren einzelner Attribute von Fixtures bzw. in Playbacks. Auf Off gesetzte Werte können später wieder aktiviert werden. Siehe [Deaktivieren von Attributen in Cues mit "Off"](../cues/editing-cues.md#deaktivieren-von-attributen-in-cues-mit-off).



## <Keys.HardKey>Open</Keys.HardKey> 
(Nur beim D9) Fenster öffnen. Gleiche Funktion wie 2 x View. 

(Quartz, Titan Mobile) Anzeige von Details eines Elementes, oder Öffnen eines Fenster per Doppelklick, siehe [View](#view).



## <Keys.HardKey>Open/View</Keys.HardKey> 
(Sapphire Touch, Arena, Tiger Touch) 

Anzeige von Details eines Elementes, oder Öffnen eines Fenster per Doppelklick, siehe [View](#view).



## <Keys.HardKey>Options</Keys.HardKey> 
Gefolgt von der **Auswahltaste** eines Elementes, zeigt dessen Optionen. Meist bei Playbacks genutzt, aber auch bei anderen Elementen anwendbar. Siehe [Playback-Optionen](../cues/playback-options.md)



## <Keys.HardKey>Page +</Keys.HardKey> 
Wechselt auf die nächste Seite der betreffenden Faderbank. Pulte mit mehreren Faderbänken haben mehrere solche Tasten. Ebenso gibt es die Taste <Keys.HardKey>Go Page</Keys.HardKey> zum Wechseln auf eine andere, nicht unmittelbar folgende Seite. Siehe [Wechsel der Playback-Seiten](../cues/cue-playback.md#wechsel-der-playback-seiten).



## <Keys.HardKey>Page -</Keys.HardKey> 
Wechselt auf die vorige Seite der betreffenden Faderbank. Pulte mit mehreren Faderbänken haben mehrere solche Tasten. Ebenso gibt es die Taste <Keys.HardKey>Go Page</Keys.HardKey> zum Wechseln auf eine andere, nicht unmittelbar vorausgehende Seite. Siehe [Wechsel der Playback-Seiten](../cues/cue-playback.md#wechsel-der-playback-seiten).



## <Keys.HardKey>Palette</Keys.HardKey> 
Aufruf des Paletten-Menüs zum numerischen Aufrufen von Paletten. Siehe [Recalling palettes](../palettes/using-palettes.md#abrufen-per-nummersyntax).



## <Keys.HardKey>Patch</Keys.HardKey> 
Öffnet das Patch-Menü, siehe [Geräte und Dimmer patchen](../patching/patching-new-fixtures-or-dimmers.md).

 

## <Keys.HardKey>Pattern/All</Keys.HardKey> 
(Nur beim D9 und T3) Auswahl nach Schema (z.B. gerade/ungerade) innerhalb der bereits angewählten Geräte beginnen oder beenden. Siehe [Geräteauswahl nach Muster](../controlling-fixtures.md#geräteauswahl-nach-muster). Auf anderen Pulten ist das die Taste <Keys.HardKey>All</Keys.HardKey>, siehe [All](#All).



## <Keys.HardKey>Playback</Keys.HardKey> 
(Arena) Öffnet das Playbacks-Fenster auf dem kleinen Display.

(D9 und T3) Die Tastenfolge <Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Playback</Keys.HardKey> öffnet das Playbacks-Fenster.



## <Keys.HardKey>Playback (wheels)</Keys.HardKey> 
(Nur beim D9 - rechts neben den Encodern) Aktiviert die Playback-Steuerung mit den Encodern.



## <Keys.HardKey>Position</Keys.HardKey> 
Auswahl der Attributgruppe Position zum Steuern von Pan, Tilt etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Preload/Auto</Keys.HardKey> 
(Nur beim D9) Vorladen der im Scene Master vorbereiteten Szene (LTP-Werte von aktuell nicht aktiven Fixtures werden bereits geladen, so dass beim Aktivieren der Szene keine 'Fahrten im On' sichtbar sind). Siehe [Scene Master](../running-the-show/playback-controls.md#scene-master).



## <Keys.HardKey>Prev Step</Keys.HardKey> 
Auswahl des vorigen Cues in der aktuell gesteuerten Cueliste. Auf manchen Pulten <Keys.HardKey>Prev Cue</Keys.HardKey> oder <Keys.HardKey>Cue -</Keys.HardKey>. Siehe [Abrufen einer Cueliste](../cue-lists/cue-list-playback.md#abrufen-einer-cueliste).



## <Keys.HardKey>Record</Keys.HardKey> 
Speichern von Playbacks, Paletten und anderen Elementen. Siehe [Anlegen eines Cues](../cues/creating-a-cue.md#anlegen-eines-cues) und [Speichern einer Palette](../palettes/creating-palettes.md#speichern-einer-palette). Mehrfaches Betätigen von <Keys.HardKey>Record</Keys.HardKey> schaltet durch die Optionen Record Cue / Record Chase / Record Cue List / Record Timeline.

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Record</Keys.HardKey> {Playback-Auswahltaste} | Speichert den Inhalt des Programmers als Cue
<Keys.HardKey>Record</Keys.HardKey> {Palettenbutton} | Speichert den Inhalt des Programmers als Palette
<Keys.HardKey>Record</Keys.HardKey> {Workspace-Button} | Speichert die aktuelle Arbeitsumgebung (Fensterauswahl und -anordnung)
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Highlight</Keys.HardKey> | Speichert den Inhalt des Programmers als Highlight-Status, siehe [Das ausgewählte Gerät bei Fix+1/Fix-1 hervorheben](../controlling-fixtures.md#das-ausgewählte-gerät-bei-fix1fix-1-hervorheben)
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Locate</Keys.HardKey> | Speichert den Inhalt des Programmers als Locate-Status, siehe [Ändern des Locate-Wertes](../controlling-fixtures.md#ändern-des-locate-wertes).



## <Keys.HardKey>Record Step</Keys.HardKey> 
Speichert den Inhalt des Programmers in den aktuellen Cue der aktuell gesteuerten Cueliste. Siehe [Editieren einer Cueliste während des Programmierens](../cue-lists/editing-cue-lists.md#editieren-einer-cueliste-während-des-programmierens)



## <Keys.HardKey>Release</Keys.HardKey> 
Deaktivieren von Playbacks und Releasen von LTP-Werten auf den jeweils vorigen Wert. Siehe [Release](../cues/cue-playback.md#release). 

Kann auch mit anderen Elementen verwendet werden.

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Release</Keys.HardKey> {Master} | Setzt einen Master auf seinen Vorgabewert zurück (so dass die gesteuerten Playbacks unverändert sind), siehe [Einen Master releasen](../cues/cue-playback.md#einen-master-releasen).
<Keys.HardKey>Release</Keys.HardKey> {Playback} | Ein Playback releasen. Siehe [Release](../cues/cue-playback.md#release).
<Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Clear</Keys.HardKey> | Die Attribute im Programmer releasen. Siehe [Den Programmer releasen](../cues/cue-playback.md#den-programmer-releasen).
<Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Go Page</Keys.HardKey> | Die Playbacks einer Seite nach Priorität releasen. Siehe [Playbacks seitenweise releasen](../cues/cue-playback.md#playbacks-seitenweise-releasen).
<Keys.HardKey>Release</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey> | Alle aktiven Playbacks nach Priorität releasen. Siehe [Release](../cues/cue-playback.md#release).
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey> | Den Release-Status (= Power On) speichern. Siehe [Werte für Release / Power On programmieren](../cues/cue-playback#werte-für-release--power-on-programmieren).



## <Keys.HardKey>Rem Dim</Keys.HardKey> 
Stell alle nicht selektierten Fixtures auf 0% im Programmer. Nicht auf allen Pulten vorhanden. Auch erreichbar über <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey>. Siehe [Nicht ausgewählte Geräte ausblenden (Remainder Dim)](../controlling-fixtures.md#nicht-ausgewählte-geräte-ausblenden-remainder-dim)



## <Keys.HardKey>Reset</Keys.HardKey> 
(Nur auf dem D9) Löscht die Preset-Szene des Scene Master. Siehe [Scene Master](../running-the-show/playback-controls.md#scene-master).



## <Keys.HardKey>Review</Keys.HardKey> 
Startet den aktuellen Cue erneut mit Fadezeiten, zur Überprüfung und Anpassung der Zeiten. Siehe [Ändern der Zeiten einer laufenden Cueliste](../cue-lists/editing-cue-lists.md#ändern-der-zeiten-einer-laufenden-cueliste)



## <Keys.HardKey>Right</Keys.HardKey> 
(Nur beim D9 und ST) Rechte Maustaste bei Verwendung des Trackballs als Maus.



## <Keys.HardKey>Scroll</Keys.HardKey> 
Aktivieren der Scroll-Funktion mit den Encodern.



## <Keys.HardKey>Select If</Keys.HardKey> 
Bedingte Auswahl. Z.B. per Doppelklick Auswahl der Geräte im zuletzt gestarteten Playback. Siehe [Auswahl von Geräten in einem Cue](../controlling-fixtures.md#auswahl-von-geräten-in-einem-cue).



## <Keys.HardKey>Set</Keys.HardKey> 
Nur auf älteren Pulten. Dies ist nun die Taste <Keys.HardKey>Time</Keys.HardKey>.



## <Keys.HardKey>Shape</Keys.HardKey> 
Zur Steuerung von Shape-Parametern. Siehe [Shapes und Effekte](../effects.md).



## <Keys.HardKey>Size/Position</Keys.HardKey> 
Verschiebt das aktuelle Fenster auf verschiedene Größen und Positionen. Wird dabei <Keys.HardKey>Avo</Keys.HardKey> gedrückt gehalten, so wird das Fenster auf das andere Display verschoben.



## <Keys.HardKey>Snap</Keys.HardKey> 
Aktiviert den Snap-Modus, so dass mit den Tasten <Keys.HardKey>Prev Step</Keys.HardKey> / <Keys.HardKey>Next Step</Keys.HardKey> ohne Fadezeiten durch die Cues einer Cueliste oder eines Chasers geschaltet werden kann. Siehe [Abrufen einer Cueliste](../cue-lists/cue-list-playback.md#abrufen-einer-cueliste). Schaltet die Benutzereinstellungen Chase Snap (bei verbundenem Chaser) oder Cue List Snap (bei verbundener Cueliste) um, siehe [General (Allgemein)](../system-settings/user-settings.md#general-allgemein).



## <Keys.HardKey>Special</Keys.HardKey> 
Auswahl der Attributgruppe Special zum Steuern von Speed, Macros etc. mit den Encodern. Auch verwendet zum Einstellen von Masken. Siehe [Einstellen von Attributen mit den Encodern](../controlling-fixtures/changing-fixture-attributes.md#einstellen-von-attributen-mit-den-encodern). 



## <Keys.HardKey>Stop</Keys.HardKey> 
Stoppt aktuell laufende Fades/Überblendungen. Siehe [Abrufen einer Cueliste](../cue-lists/cue-list-playback.md#abrufen-einer-cueliste). Ist der Fade bereits gestoppt, so geht es einen Cue rückwärts.



## <Keys.HardKey>Through</Keys.HardKey> 
von... **"bis"** bei der Auswahl eines Bereiches von Fixtures, siehe [Anwählen von Dimmern/Geräten nach (Kanal-)Nummer](../controlling-fixtures.md#anwählen-von-dimmerngeräten-nach-kanal-nummer).

Beispiel: <Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>not</Keys.HardKey> 3 selektiert die Fixtures 1, 2, 4, 5

Wird eine Zeit oder ein Timecode eingegeben, so kann man mit den Tasten <Keys.HardKey>And</Keys.HardKey> und <Keys.HardKey>Through</Keys.HardKey> zwischen den Werten für Stunden/Minuten/Sekunden/Frames wechseln.



## <Keys.HardKey>Time</Keys.HardKey> 
Öffnet das Times-Menü zur Eingabe von Zeiten für Cues, siehe [Einstellen von Überblendzeiten und Geräteversatz](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz).
Auch zur direkten Eingabe von Zeiten beim Programmieren. Siehe [Times -- Zeiten](../titan-reference.md#times).

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Time</Keys.HardKey> ``n`` | Setzt ``n`` Sekunden Fadezeit im Programmer, die beim nächsten Speichervorgang mit in den Cue gespeichert werden
 <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> ``n`` | Setzt ``n`` Sekunden Fadezeit für alle Attribute der ausgewählten Fixtures im Programmer




## <Keys.HardKey>Undo</Keys.HardKey> 
Macht die letzte Änderung rückgängig. Eine Liste der letzten Vorgänge wird im Infobereich angezeigt. Siehe [Undo/Redo -- Rückgängig machen/Wiederholen](../titan-basics/other-parts-of-the-touch-screen.md#undoredo----rückgängig-machenwiederholen).

Tasten | Ergebnis
--------|--------
<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Undo</Keys.HardKey> | letztes Rückgängigmachen widerrufen.



## <Keys.HardKey>Unfold</Keys.HardKey> 
gefolgt von der **Auswahltaste** eines Chasers oder einer Cueliste, blendet die einzelnen Cues auf Playback-Fader ein, so dass jeder Cue einzeln bearbeitet werden kann. Siehe [Ändern eines Chasers mit der Unfold-Funktion](../chases/editing-a-chase.md#ändern-eines-chasers-mit-der-unfold-funktion).



## <Keys.HardKey>Update</Keys.HardKey> 
Aktualisieren des aktuellen Cues. Dabei wird der Inhalt des Programmers für bereits vorhandene Fixtures und Attribute in den Cue verschmolzen. Siehe [Aktualisieren gespeicherter Werte und Paletten](../cues/editing-cues.md#aktualisieren-gespeicherter-werte-und-paletten).



## <Keys.HardKey>View</Keys.HardKey> 
(D9, T3, Titan Go, Pearl Expert, Tiger Touch 1) 

Gefolgt von der **Auswahltaste** eines Elements werden Details über dieses angezeigt. Per Doppelklick können dagegen weitere Fenster geöffnet werden. Siehe [Anzeigen und Ändern einer Palette](../palettes/editing-palettes.md#anzeigen-und-ändern-einer-palette) und [Anzeige der Cues: Playback View und Cue View](../cues/editing-cues.md#anzeige-der-cues-playback-view-und-cue-view), oder [Auswahl und Positionierung der Arbeitsfenster](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster).

Mit vielen Tastenkombinationen können weitere Fenster geöffnet werden:

Tasten | Ergebnis
--------|--------
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Beam</Keys.HardKey> | Palettenfenster Gobos&Beams
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Colour</Keys.HardKey> | Palettenfenster Colours
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Connect</Keys.HardKey> | Playback-Ansicht des verbundenen Playbacks
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Copy</Keys.HardKey> | Kopieren von Workspace-Buttons
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Delete</Keys.HardKey> | Löschen von Workspace-Buttons
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> | Das Fixtures-Fenster (Geräte)
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>FX</Keys.HardKey> | Shape-Palettenfenster
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> | Palettenfenster Gobos&Beams
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Group</Keys.HardKey> | Das Groups-Fenster (Gruppen)
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Intensity</Keys.HardKey> | Intensitäts-Ansicht
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Macros</Keys.HardKey> | Fenster 'Macros'
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Move</Keys.HardKey> | Verschieben von Workspace-Buttons
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Off</Keys.HardKey> | Fenster 'Active Playbacks'
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey> | Attribut-Editor
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Patch</Keys.HardKey> | Patch-Ansicht
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Playback</Keys.HardKey> | Playbacks-Fenster
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> | Palettenfenster Positions
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Release</Keys.HardKey> | Fenster 'Active Playbacks'
<Keys.HardKey>View</Keys.HardKey> <Keys.HardKey>Shape</Keys.HardKey> | Shape-Palettenfenster
<Keys.HardKey>View</Keys.HardKey> ``n`` <Keys.HardKey>Enter</Keys.HardKey> | Aufruf des Workspaces mit der Nummer ``n``



## <Keys.HardKey>Visualiser</Keys.HardKey> 
Öffnet den Visualiser. Siehe [Der Capture-Visualiser](../capture-visualiser.md/).



## <Keys.HardKey>Wheel @</Keys.HardKey> 
(Die @-Tasten neben den Encodern) - Öffnet das jeweilige @-Menü zur genauen Steuerung des Attributes, das gerade auf dem Encoder liegt.



## <Keys.HardKey>XYZ</Keys.HardKey> 
(Nur beim D9 - rechts neben den Encodern) Aktiviert den XYZ-Modus der Encoder zur Positionierung der Fixtures im Capture-Visualiser und im Layout-Editor.