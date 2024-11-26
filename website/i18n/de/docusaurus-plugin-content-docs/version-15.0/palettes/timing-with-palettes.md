---
id: timing-with-palettes
title: Arbeiten mit Zeiten in Paletten
sidebar_label: Arbeiten mit Zeiten in Paletten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Paletten können gleich mit Zeiten erstellt werden;
alternativ kann beim Abruf einer Palette eine Zeit vorgegeben oder die
gespeicherte überschrieben werden.

## Paletten mit gespeicherten Zeiten

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
<Keys.SoftKey>Palette Is Fired Ignoring Its Times</Keys.SoftKey> (Zeiten werden ignoriert) 
in <Keys.SoftKey>Palette Is Fired With Its Times</Keys.SoftKey> (Palette wird
mit Zeiten gestartet).

## Überschreiben von Palettenzeiten

<Video videoId="FF8szWCpVkE" title="Overriding Palette Times" />

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
    werden. Um immer die gleiche Zeit zu verwenden, geben Sie diese als [Master Time](../palettes/timing-with-palettes.md#master-zeit-und-overlap-für-paletten) ein.

-   Das Einblenden von Paletten kann etwa sinnvoll sein beim Abruf von
    Paletten während einer Show, da sich damit langsame Positions- und
    Farbwechsel (bei Geräten mit Farbmischsystem) erreichen lassen.

## Manuelle Geräteüberlappung beim Palettenabruf

Außerdem lässt sich die [Überlappung (Fixture Overlap)](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) 
zwischen den Geräten einstellen: wenn die Palette auf eine Gruppe von 
Geräten angewendet wird, so erfolgt das nacheinander auf die einzelnen
Geräte. Damit lassen sich sehr einfach beeindruckende Effekte erzielen.

&nbsp;**100%** bedeutet, dass alle Geräte gleichzeitig beeinflusst werden.

&nbsp;**0%** bedeutet, dass ein Gerät erst voll eingeblendet 
sein muss, bevor die Überblendung mit dem nächsten Gerät beginnt.

1.  Geben Sie mit den Zifferntasten die Überlappung ein.
2.  Drücken Sie <Keys.SoftKey>Set Overlap</Keys.SoftKey>
3.  Geben Sie die gewünschte Überblendzeit ein.
4.  Rufen Sie die gewünschte Palette auf.

-   Die Überlappung muss bei jedem Aufruf neu eingegeben werden. Um
    stets die gleiche Überlappung zu verwenden, stellen Sie diese 
    als [Master Overlap](../palettes/timing-with-palettes.md#master-zeit-und-overlap-für-paletten) ein. 
    Um das zu deaktivieren, setzen Sie ‚Master Overlap' auf 100%.

-	Der Überlappungs-Effekt ist nur sichtbar mit einer Einfadezeit.

>   Berücksichtigen Sie bei der Verwendung von Fixture Overlap, 
	globalen Paletten und dem Abruf als Quick Palette (ohne angewählte
	Geräte), dass das Overlap ggf. auf **sehr viele** Geräte
	nacheinander angewendet wird, was zu unerwarteten Ergebnissen
	führen kann.

## Master-Zeit und Overlap für Paletten

Mit der Option <Keys.SoftKey>Master Time</Keys.SoftKey> im Paletten-Menü (betätigen Sie dazu die
Taste <Keys.HardKey>Palette</Keys.HardKey> oberhalb der Zifferntasten) lässt sich eine
Standard-Überblendzeit vergeben, die stets genutzt wird, sofern keine
andere Zeit manuell eingegeben wird. Das erleichtert das schnelle
Steuern von Shows mit Paletten.

Um das Faden von Paletten zu deaktivieren, stellt man die Master Time auf 0.

In gleicher Weise arbeitet <Keys.SoftKey>Master Overlap</Keys.SoftKey> für die Überlappung. 
Um diese zu deaktivieren, stellt man die Überlappung auf 100%.

> Es lassen sich Macros erstellen, mit denen verschiedene Überblendzeiten vorgegeben werden können. Drücken
Sie dazu <Keys.HardKey>Macro</Keys.HardKey>, <Keys.SoftKey>Record</Keys.SoftKey>, dann eine Taste/Schaltfläche 
für das Macro. Nun drücken Sie <Keys.HardKey>Palette</Keys.HardKey>, <Keys.SoftKey>Master Time</Keys.SoftKey>, 
z.B. <Keys.HardKey>3</Keys.HardKey> (für 3 Sek.), <Keys.HardKey>Exit</Keys.HardKey>, <Keys.HardKey>Macro</Keys.HardKey>.
Wiederholen Sie diese Schritte mit unterschiedlichen Zeiten, z.B. 0 Sek. (hartes Umschalten), 5 Sek. etc.

Etliche solche Macros für verschiedene Fadezeiten (<Keys.SoftKey>Palette Fade x s</Keys.SoftKey>)
und Overlaps (<Keys.SoftKey>Palette Overlap y %</Keys.SoftKey>) sind bereits in der Macro-Library
enthalten. Drücken Sie dafür <Keys.HardKey>Macro</Keys.HardKey> und die Menütaste <Keys.SoftKey>View All</Keys.SoftKey>. 
Die Macros aus der Library lassen sich wie gewohnt per <Keys.HardKey>Copy</Keys.HardKey> auf beliebige Tasten 
kopieren, um sie rasch im Zugriff zu haben.