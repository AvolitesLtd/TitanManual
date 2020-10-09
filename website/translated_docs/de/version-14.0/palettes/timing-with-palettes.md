---
id: version-14.0-timing-with-palettes
title: Timing with Palettes
sidebar_label: Timing with Palettes
original_id: timing-with-palettes
---

[Paletten können gleich mit Zeiten gespeichert werden](creating-palettes.md#erstellen-einer-palette-mit-zeiten);
alternativ kann beim Abruf einer Palette eine Zeit vorgegeben oder die
gespeicherte überschrieben werden.

Paletten mit gespeicherten Zeiten
---------------------------------

[Enthält eine Palette auch Zeiten](creating-palettes.md#erstellen-einer-palette-mit-zeiten), 
so werden diese mit berücksichtigt,
wenn die Palette in Playbacks verwendet wird. Wurden also z.B. 2s 
Fadezeit mit in der Palette abgespeichert und wird diese in einem Cue 
verwendet, so ist für diesen bereits 2s Fadezeit eingestellt.

Beim direkten Palettenaufruf hingegen wird die Fadezeit zunächst **nicht** 
berücksichtigt, um das Programmieren nicht zu behindern. Es kann aber 
per Tastenprofil aktiviert werden, was insbesondere beim [Improvisieren
(Busking) mit Paletten](../running-the-show/playback-controls#improvisieren-busking-mit-paletten) 
interessante Möglichkeiten eröffnet. Dazu ändern
Sie die [Einstellung (Key Profiles für Paletten)](../system-settings/key-profiles#palettes) 
\[Palette Is Fired Ignoring Its Times\] (Zeiten werden ignoriert) 
in \[Palette Is Fired With Its Times\] (Palette wird
mit Zeiten gestartet).

Überschreiben von Palettenzeiten
--------------------------------

[](https://youtu.be/FF8szWCpVkE?t=135 "Overriding Palette Times")

Das Überschreiben von Palettenzeiten ist hilfreich, um 'mal eben schnell
eine Show zu drücken'. Wird eine Palette auf diesem Weg abgerufen, so
wird ein Zeitparameter hinzugefügt, und die Palette blendet in der
vorgegebenen Zeit ein.

1.  Wählen Sie ein oder mehrere Geräte aus.

2.  Tippen Sie mit den Zifferntasten die gewünschte Zeit ein.

3.  Betätigen Sie die gewünschte Paletten-Schaltfläche.

---

-   Damit werden alle eventuell in der Palette gespeicherte Zeiten
    überschrieben.

-   Die Überblendzeit muss bei jedem Palettenaufruf erneut eingegeben
    werden. Um immer die gleiche Zeit zu verwenden, geben Sie diese bei
    \<Palette\> \[Master Time\] ein. Um diese wieder zu löschen, setzen
    Sie die Master-Zeit auf 0.

-   Das Einblenden von Paletten kann etwa sinnvoll sein beim Abruf von
    Paletten während einer Show, da sich damit langsame Positions- und
    Farbwechsel (bei Geräten mit Farbmischsystem) erreichen lassen.

Manuelle Geräteüberlappung beim Palettenabruf
---------------------------------------------

Außerdem lässt sich die [Überlappung (Fixture Overlap)](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) 
zwischen den Geräten einstellen: wenn die Palette auf eine Gruppe von 
Geräten angewendet wird, so erfolgt das nacheinander auf die einzelnen
Geräte. Damit lassen sich sehr einfach beeindruckende Effekte erzielen.\
Fixture Overlap = **100%** bedeutet, dass alle Geräte gleichzeitig beeinflusst werden.\
Fixture Overlap = **0%** bedeutet, dass ein Gerät erst voll eingeblendet 
sein muss, bevor die Überblendung mit dem nächsten Gerät beginnt.

1.  Geben Sie mit den Zifferntasten die Überlappung ein.

2.  Drücken Sie \[Set Overlap\]

3.  Geben Sie die gewünschte Überblendzeit ein.

4.  Rufen Sie die gewünschte Palette auf.

-   Die Überlappung muss bei jedem Aufruf neu eingegeben werden. Um
    stets die gleiche Überlappung zu verwenden, drücken Sie \<Palette\>,
    \[Master Overlap\]. Um das zu deaktivieren, setzen Sie ‚Master
    Overlap' auf 100%.

-	Der Überlappungs-Effekt ist nur sichtbar mit einer Einfadezeit.

>   Berücksichtigen Sie bei der Verwendung von Fixture Overlap, 
	globalen Paletten und dem Abruf als Quick Palette (ohne angewählte
	Geräte), dass das Overlap ggf. auf **sehr viele** Geräte
	nacheinander angewendet wird, was zu unerwarteten Ergebnissen
	führen kann.

Master-Zeit für Paletten
------------------------

Mit der Option \[Master Time\] im Paletten-Menü (betätigen Sie dazu die
Taste \<Palette\> oberhalb der Zifferntasten) lässt sich eine
Standard-Überblendzeit vergeben, die stets genutzt wird, sofern keine
andere Zeit manuell eingegeben wird. Das erleichtert das schnelle
Steuern von Shows mit Paletten.

In gleicher Weise arbeitet \[Master Overlap\] für die Überlappung.

>   Es lassen sich Macros erstellen, mit denen verschiedene 
	Überblendzeiten vorgegeben werden können. Drücken Sie dazu 
	\<Macro\>, \[Record\], dann eine Taste/Schaltfläche für das Macro. 
	Nun drücken Sie \<Palette\>, \[Master Time\], z.B. 3 (für 3 Sek.), 
	\<Exit\>, \<Macro\>. Wiederholen Sie diese Schritte mit 
	unterschiedlichen Zeiten, z.B. 0 Sek. (hartes Umschalten), 5 Sek. etc.\
	\
	Etliche solche Macros für verschiedene Fadezeiten (\[Palette Fade xs\])
	und Overlaps (\[Palette Overlap y%\]) sind bereits in der Macro-Library
	enthalten. Drücken Sie dafür \<Macro\> und die Menütaste 
	\[View All\]. Die Macros aus der Library lassen sich wie gewohnt per 
	\<Copy\> auf beliebige Tasten kopieren, um sie rasch im Zugriff zu haben.

