---
id: set-list-window
title: Set List Window
sidebar_label: Set List Window
original_id: set-list-window
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Das Fenster Set List bietet eine einfache Möglichkeit, Playback-Seiten
mit bestimmten Songs oder Szenen der Bühnenshow zu verknüpfen, so dass
man jederzeit passend zum Ablauf die richtige Seite findet. Ebenso kann
man Notizen speichern, so dass separate Papiere überflüssig sind. Eine
Show kann mehrere Set-Listen enthalten.

<Video videoId="VX5acUU-99M" title="Set Lists" />

Um das Fenster aufzurufen, drücken Sie zweimal auf 
[<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Set List</Keys.SoftKey>.

Am besten eignet sich dies, wenn man für jeden Song bzw. jede Szene
eine eigene Seite von Speicherplätzen verwendet.

![Set List Window](/docs/images/Set-List-Window.png)

Eine Set-Liste besteht aus sog. Tracks. Wird einer Setliste ein neuer
Track hinzugefügt, so verweist dieser automatisch auf die gerade
aktuelle Seite. Ein Klick auf die <Keys.SoftKey><strong>></strong></Keys.SoftKey>-Schaltfläche neben einem
Track schaltet sofort auf die passende Seite (auf dem Pearl Expert muss
die Walze manuell betätigt werden).

Erstellen einer Set-Liste
-------------------------

Zum Erstellen einer neuen Set-Liste klicken Sie auf die
<Keys.ContextKey>+</Keys.ContextKey>-Schaltfläche *oben rechts*, angeboten werden die Optionen <Keys.SoftKey>Empty</Keys.SoftKey>
(leer), <Keys.SoftKey>Pages</Keys.SoftKey> (Seiten), und <Keys.SoftKey>Build</Keys.SoftKey>. 
-   Mit der Option <Keys.SoftKey>Pages</Keys.SoftKey> wird eine Set-Liste mit den momentan 
	verwendeten Seiten erstellt. 
-	Wählt man <Keys.SoftKey>Build</Keys.SoftKey>, so kann man die momentan programmierten Seiten 
	in beliebiger Reihenfolge in eine Set-Liste einfügen. 
-   Mit <Keys.SoftKey>Empty</Keys.SoftKey> starten Sie mit einer leeren Set-Liste und fügen Track 
	für Track hinzu, indem Sie unten auf die <Keys.ContextKey>+</Keys.ContextKey>-Schaltfläche klicken.

Die Tracks konfigurieren
------------------------

Enter notes by selecting a track and clicking the text entry button,
bottom right, or the Edit Note context menu button.

-   Mit dem Kontext-Menü 'Park Track' werden Tracks vorübergehend
    deaktiviert.

-   Möchten Sie lieber die Tasten <Keys.HardKey>Page+</Keys.HardKey>/<Keys.HardKey>Page-</Keys.HardKey> zum Durchschalten
    der Tracks verwenden, so aktivieren Sie dies mit dem Kontext-Menü
    'Page Mode'. Ist Page Mode auf 'Set List' gestellt, so können Sie
    mit den Tasten <Keys.HardKey>Page+</Keys.HardKey>/<Keys.HardKey>Page-</Keys.HardKey> die Tracks durchschalten -- die
    Seiten wechseln dann also in der mittels Set-Liste vorgegebenen
    Reihenfolge. Steht Page Mode auf 'Normal', so wirken die Tasten wie
    gewohnt auf die Seiten der Speicherplätze (nicht verfügbar auf dem
    Pearl Expert).

-   Das Kopieren, Verschieben und Löschen von Tracks erfolgt wie gewohnt
    über die entsprechenden Befehlstasten des Pultes.

-   Zum Ändern der Bezeichnung der Set-Liste oder einzelner Tracks
    verwenden Sie <Keys.SoftKey>Set Legend</Keys.SoftKey>.

Tracks mit Workspace und Macros verknüpfen
------------------------------------------

Macros und Workspaces lassen sich durch Tracks aufrufen: dazu dienen die
Buttons <Keys.SoftKey>Workspace</Keys.SoftKey> und <Keys.SoftKey>Macro</Keys.SoftKey> rechts unten im 'Set List'-Fenster.

Um eine Verknüpfung zu einem Workspace herzustellen, klicken Sie auf
<Keys.SoftKey>Workspace</Keys.SoftKey> und dann auf den gewünschten Workspace oder auf \[Record
Workspace\], um die aktuelle Arbeitsoberfläche zu speichern.

Macros können sowohl von der gesamten Set-Liste als auch von einzelnen
Tracks aufgerufen werden. Set-Listen-Macros werden dabei bei jedem neuen
Track erneut getriggert. Damit kann man z.B. zu Beginn jedes neuen Songs
einen einheitlichen Ausgangszustand herstellen. Track-Macros werden
dagegen nur von dem jeweiligen Track aufgerufen.

Um diese Macro- und Workspace-Verknüpfungen aufzurufen, klicken Sie
rechts oben auf den Reiter 'Workspaces & Macros'. Daraufhin wird für
jede Verknüpfung ein Button, nach Kategorien geordnet, angezeigt.

![Workspace & Macros](/docs/images/Workspace-Macros.png)

Klickt man auf so einen Button, so wird die entsprechende Aktion
ausgelöst. Zum Löschen drückt man <Keys.HardKey>Delete</Keys.HardKey>, gefolgt von dem jeweiligen
Button, und bestätigt das mit <Keys.SoftKey>Remove</Keys.SoftKey>.

Macros zur Playback-Steuerung
-----------------------------

[Macros](../titan-basics/front-panel-buttons.md#macros----tastenfolgen)
gestatten es, häufig wiederkehrende Folgen von Tastendrücken zu
automatisieren. So lassen sich auch lange oder komplizierte 
Tastenkombinationen mit nur einem Knopfdruck wiederholen.

Es gibt einige spezielle vorgefertigte Macros, die sich besonders zur
Playback-Steuerung bei Verwendung von Set-Listen anbieten.

Macro | Action
------|-------
<Keys.SoftKey>Fire First Playback</Keys.SoftKey> | Startet das erste Playback der aktuellen Seite.
<Keys.SoftKey>Fire First Playback Page 1</Keys.SoftKey> | Startet das erste Playback auf Seite 1, unabhängig von der gerade aktuellen Seite.
<Keys.SoftKey>Fire Playback 1</Keys.SoftKey> | Startet das Playback mit der Nummer 1.
<Keys.SoftKey>Kill First Playback</Keys.SoftKey> | Stoppt/killt das erste Playback der aktuellen Seite.
<Keys.SoftKey>Kill First Playback Page 1</Keys.SoftKey> | Stoppt/killt das erste Playback auf Seite 1, unabhängig von der gerade aktuellen Seite.
<Keys.SoftKey>Kill Playback 1</Keys.SoftKey> | Stoppt/killt das Playback mit der Nummer 1.
<Keys.SoftKey>Release First Playback</Keys.SoftKey> | Releast das erste Playback der aktuellen Seite.
<Keys.SoftKey>Release First Playback Page 1</Keys.SoftKey> | Releast das erste Playback auf Seite 1, unabhängig von der gerade aktuellen Seite.
<Keys.SoftKey>Release Playback 1</Keys.SoftKey> | Releast das Playback mit der Nummer 1.
<Keys.SoftKey>Release Me</Keys.SoftKey> | Releast das momentan verbundene Playback (Cueliste).
<Keys.SoftKey>Goto My Cue 1</Keys.SoftKey> | Geht zu Cue 1 der gerade verbundenen Cueliste.
