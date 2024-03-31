---
id: using-palettes
title: Abrufen von Paletten
sidebar_label: Abrufen von Paletten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Abrufen eines Palettenwertes

<Video videoId="_bmk7JEPpQo" title="Palettes Playback" />

### Abrufen von Tasten/Schaltflächen

Zum Abrufen eines Wertes aus einer Palette gehen Sie wie folgt vor:

1.	Wählen Sie die zu ändernden Geräte aus. Gemeinsam genutzte Paletten
	stellen jedes Gerät gleichen Typs auf den gleichen Wert. Normale
	Paletten liefern unterschiedliche Werte für jedes Gerät. Sind keine
	Geräte angewählt, so wirkt die Palette auf alle Geräte, für die sie
	Informationen enthält.

2.  Betätigen Sie die Schaltfläche der gewünschten Palette. Die
	angewählten Geräte werden auf die in der Palette gespeicherten Werte
	gesetzt.

---

-   Beim Abruf von Paletten lässt sich eine Überblendzeit einstellen,
    siehe [Arbeiten mit Zeiten in Paletten](timing-with-palettes.md).

-   Ist eine Palette gerade im Programmer, so wird die entsprechende
    Schaltfläche als aktiv markiert (das lässt sich in den
    [Benutzereinstellungen](../system-settings/user-settings.md#highlight-active-palettes)
	deaktivieren). Damit ist einfach erkennbar, welche Paletten gerade
	verwendet werden.

    ![Active Palette Highlighted](/docs/images/Active-Palette-Highlighted.png)

### Abrufen per Nummer/Syntax

Paletten lassen sich auch über ihre Nummer abrufen: geben Sie dazu die
Nummer mit den Zifferntasten ein.

1.  Wählen Sie einige Geräte aus.

2.  Drücken Sie die Taste <Keys.HardKey>Palette</Keys.HardKey> oberhalb der Zifferntasten.

3.  Geben Sie die Nummer der gewünschten Palette ein.

4.  Drücken Sie <Keys.HardKey>Enter</Keys.HardKey> oder <Keys.SoftKey>Apply Palette</Keys.SoftKey>

Die Menütaste <Keys.SoftKey>Apply Palette</Keys.SoftKey> zeigt dabei die Bezeichnung der
abzurufenden Palette.

>   Sollen mehrere Paletten gleichzeitig abgerufen werden, so bietet
    sich die ‚Blind-To-Live' Funktion an: schalten Sie das Pult in den
    Blind-Modus (mit der <Keys.HardKey>Blind</Keys.HardKey>-Taste, oder mit <Keys.HardKey>Avo</Keys.HardKey> \[Blind
    Inactive\], wählen die gewünschten Paletten, geben die Fadezeit 
	(in Sekunden) ein (wenn geschaltet werden soll: 0 eingeben), und 
	schalten durch nochmaliges Drücken der <Keys.HardKey>Blind</Keys.HardKey>-Taste das Pult 
	in den Live-Modus. Damit wird auf die gewählten Paletten live 
	übergeblendet.

## Palettenseiten

Wurden Paletten auf den Tasten des Pultes gespeichert, so kann man mit
<Keys.HardKey>+Page</Keys.HardKey>/<Keys.HardKey>-Page</Keys.HardKey> auf verschiedene Seiten wechseln. Soll eine Palette
stets verfügbar sein und nicht mit den Seiten umgeschaltet werden, so
lässt sich die Seitenumschaltung sperren, siehe [Handle Paging](../cues/playback-options.md#handle-paging) für weitere Details.

In jedem der Palettenfenster lassen sich die Schaltflächen entweder
seitenweise - mit Schaltflächen für die Seiten - oder als große Liste
mit einem Schiebereiter organisieren. Zum Umschalten zwischen den beiden
Optionen klicken Sie auf den Kontext-Button **Pages Show/Hide** links der
Menü-Schaltflächen.

>   Paletten von einer beliebigen Seite lassen sich auch über ihre
    Nummer aufrufen, siehe [voriger Abschnitt](#abrufen-per-nummersyntax).

## Anzeige nur der relevanten Paletten

Ist die [Benutzereinstellung <Keys.SoftKey>Filter Relevant Palettes</Keys.SoftKey>](../system-settings/user-settings.md#filter-relevant-palettes)
aktiviert, so werden beim Anwählen von Geräten die Paletten, die auf 
diese Geräte nicht anwendbar sind, ausgegraut. So sieht man  auf einen 
Blick, welche Paletten für die angewählten Geräte zur Verfügung stehen.

## Quick Palettes -- Schnelle Paletten ohne ausgewählte Geräte

Beim Aufruf einer Palette, ohne dass Geräte ausgewählt sind, wird die
Palette auf alle in der Palette vorhandenen Geräte angewendet; diese
Funktion nennt sich 'Quick Palette'. 

Wird z.B. eine Farbpalette aufgerufen, die für MAC 2000 programmiert 
wurde, ohne dass MAC 2000 angewählt sind, so wird die Palette auf 
&nbsp;**alle** MAC 2000 angewendet.

> 	Effekt-Paletten können nicht als Quick Palettes verwendet werden -
    für diese müssen stets Fixtures ausgewählt werden.

## Abruf einer Palette für alle Geräte in einem Cue

Sie können ebenso Paletten auf alle Geräte in einem bestimmten Cue
anwenden. Dazu drücken und halten Sie die entsprechende
Paletten-Schaltfläche, und betätigen dazu die Auswahltaste des Cues, auf
den die Palette angewendet werden soll.
