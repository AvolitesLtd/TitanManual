---
id: version-14.0-set-list-window
title: Set List Window
sidebar_label: Set List Window
original_id: set-list-window
---

Das Fenster Set List bietet eine einfache Möglichkeit, Playback-Seiten
mit bestimmten Songs oder Szenen der Bühnenshow zu verknüpfen, so dass
man jederzeit passend zum Ablauf die richtige Seite findet. Ebenso kann
man Notizen speichern, so dass separate Papiere überflüssig sind. Eine
Show kann mehrere Set-Listen enthalten.

[](https://youtu.be/VX5acUU-99M?t=20 "Set Lists")

Um das Fenster aufzurufen, drücken Sie \[Open Workspace Window\] und
wählen \[Set List\].

Am besten eignet sich dies, wenn man für jeden Song bzw. jede Szene
eine eigene Seite von Speicherplätzen verwendet.

![Set List Window](/docs/images/Set-List-Window.png)

Eine Set-Liste besteht aus sog. Tracks. Wird einer Setliste ein neuer
Track hinzugefügt, so verweist dieser automatisch auf die gerade
aktuelle Seite. Ein Klick auf die \[⏵\]-Schaltfläche neben einem
Track schaltet sofort auf die passende Seite (auf dem Pearl Expert muss
die Walze manuell betätigt werden).

Erstellen einer Set-Liste
-------------------------

Zum Erstellen einer neuen Set-Liste klicken Sie auf die
\[+\]-Schaltfläche *oben rechts*, angeboten werden die Optionen \[Empty\]
(leer), \[Pages\] (Seiten), und \[Build\]. 
-   Mit der Option \[Pages\] wird eine Set-Liste mit den momentan 
	verwendeten Seiten erstellt. 
-	Wählt man \[Build\], so kann man die momentan programmierten Seiten 
	in beliebiger Reihenfolge in eine Set-Liste einfügen. 
-   Mit \[Empty\] starten Sie mit einer leeren Set-Liste und fügen Track 
	für Track hinzu, indem Sie unten auf die \[+\]-Schaltfläche klicken.

Die Tracks konfigurieren
------------------------

Enter notes by selecting a track and clicking the text entry button,
bottom right, or the Edit Note context menu button.

-   Mit dem Kontext-Menü 'Park Track' werden Tracks vorübergehend
    deaktiviert.

-   Möchten Sie lieber die Tasten \<Page+\>/\<Page-\> zum Durchschalten
    der Tracks verwenden, so aktivieren Sie dies mit dem Kontext-Menü
    'Page Mode'. Ist Page Mode auf 'Set List' gestellt, so können Sie
    mit den Tasten \<Page+\>/\<Page-\> die Tracks durchschalten -- die
    Seiten wechseln dann also in der mittels Set-Liste vorgegebenen
    Reihenfolge. Steht Page Mode auf 'Normal', so wirken die Tasten wie
    gewohnt auf die Seiten der Speicherplätze (nicht verfügbar auf dem
    Pearl Expert).

-   Das Kopieren, Verschieben und Löschen von Tracks erfolgt wie gewohnt
    über die entsprechenden Befehlstasten des Pultes.

-   Zum Ändern der Bezeichnung der Set-Liste oder einzelner Tracks
    verwenden Sie \[Set Legend\].

Tracks mit Workspace und Macros verknüpfen
------------------------------------------

Macros und Workspaces lassen sich durch Tracks aufrufen: dazu dienen die
Buttons \[Workspace\] und \[Macro\] rechts unten im 'Set List'-Fenster.

Um eine Verknüpfung zu einem Workspace herzustellen, klicken Sie auf
\[Workspace\] und dann auf den gewünschten Workspace oder auf \[Record
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
ausgelöst. Zum Löschen drückt man \<Delete\>, gefolgt von dem jeweiligen
Button, und bestätigt das mit \[Remove\].

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
\[Fire First Playback\] | Startet das erste Playback der aktuellen Seite.
\[Fire First Playback Page 1\] | Startet das erste Playback auf Seite 1, unabhängig von der gerade aktuellen Seite.
\[Fire Playback 1\] | Startet das Playback mit der Nummer 1.
\[Kill First Playback\] | Stoppt/killt das erste Playback der aktuellen Seite.
\[Kill First Playback Page 1\] | Stoppt/killt das erste Playback auf Seite 1, unabhängig von der gerade aktuellen Seite.
\[Kill Playback 1\] | Stoppt/killt das Playback mit der Nummer 1.
\[Release First Playback\] | Releast das erste Playback der aktuellen Seite.
\[Release First Playback Page 1\] | Releast das erste Playback auf Seite 1, unabhängig von der gerade aktuellen Seite.
\[Release Playback 1\] | Releast das Playback mit der Nummer 1.
\[Release Me\] | Releast das momentan verbundene Playback (Cueliste).
\[Goto My Cue 1\] | Geht zu Cue 1 der gerade verbundenen Cueliste.
