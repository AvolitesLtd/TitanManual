---
id: palettes
title: Paletten
sidebar_label: Paletten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Beim Programmieren einer Show wird man häufig auf gleiche Positionen,
Farben etc. zurückgreifen. Beim Tiger Touch kann man diese
Ein­stellungen abspei­chern, so dass sie sich mit einem einfachen Klick
abrufen lassen, anstatt sie für jede einzelnen Cue neu einstellen zu
müssen. Das ist nicht nur zum schnellen und effektiven Programmieren,
sondern auch beim Improvisieren sehr praktisch.

Bei der [Verwendung von Paletten in Cues](cues/creating-a-cue.md#anlegen-eines-cues) wird nicht der damit verknüpfte
Wert, sondern der Verweis auf die Palette im Cue abgespeichert. Das
bedeutet, dass sich etwa die Positionen der Show rasch durch Ändern der
verwendeten Paletten ändern lassen, anstatt in sämtlichen Cues alle
Positionen einzeln nachregeln zu müssen. Eine Anwendung dafür wäre etwa
eine Tour, bei der man täglich andere Bühnengrößen oder Traversenhöhen
zu berücksichtigen hat.

Paletten können miteinander **[verknüpft (nested)](palettes/creating-palettes.md#nested-palettes----verknüpfte-paletten)** sein, so 
dass sie aufeinander verweisen. Ändert man nun die Master-Palette, 
so ändern sich die verknüpften Paletten entsprechend.

Paletten werden auf die Schaltflächen in den Fenstern **'Colours'
(Farben)**, **'Positions'** sowie **'Gobos and Beams'** gespeichert. 
Ebenso können sie auf grauen Playback-Tasten sowie auf Macro/
Exekutor-Tasten abgelegt werden. Jede Schaltfläche lässt sich 
[beschriften oder bemalen](palettes/creating-palettes.md#paletten-beschriften-und-bemalen), 
so dass man die gesuchte Palette schnell wiederfindet.

![Gobos and Beams Window and Colours Window](/docs/images/Gobos-and-Beams-Window-and-Colours-Window.png)

Werden die Fenster **'Colours'**, **'Positions'** und **'Gobos and 
Beams'** nicht angezeigt, so ruft man sie mit dem Workspace \[Groups 
and Palettes\] auf.