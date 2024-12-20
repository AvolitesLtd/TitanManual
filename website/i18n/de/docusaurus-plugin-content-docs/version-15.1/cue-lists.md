---
id: cue-lists
title: Cuelisten
sidebar_label: Cuelisten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Cuelisten - Szenenfolgen - gestatten das Programmieren einer Abfolge
von [Cues](cues.md), von denen jeder eigene [Zeitvorgaben](cue-lists/cue-list-timing.md) enthalten kann und die
entweder Schritt für Schritt mit der [<Keys.HardKey>Go</Keys.HardKey>-Taste gesteuert werden oder
automatisch ablaufen können](cue-lists/cue-list-playback.md). Damit lassen sich selbst komplexe Shows in nur einer Liste programmieren, etwa bei 
[Theateraufführungen](cue-lists/theatre-programming.md), wo der
Showablauf jedes Mal exakt gleich sein muss. Cuelisten können aber auch
bei spontan gedrückten Shows sehr hilfreich sein, insbesondere auf
Pulten mit wenigen Fadern, indem man sich mehrere verschiedene Bilder
auf einen Fader legt.

Cuelisten unterscheiden sich von [Chasern](chases.md) in der Art und Weise der
Behandlung von Änderungen zwischen den einzelnen Schritten: während
[Chaser](chases.md) zwischen den einzelnen Schritten überblenden (und damit nicht
enthaltenen Geräte ausblenden), wird bei Cuelisten der aktuelle Status
der Geräte aus den vorangegangenen Änderungen/Befehlen ermittelt
(Tracking). Wurde ein Gerät nicht verändert, so werden auch keine
Änderungen im jeweiligen Cue gespeichert, und das Gerät bleibt beim
Starten des Cues unverändert.

Das [Tracking-Verhalten](cue-lists/cue-list-playback.md#tracking) der 
Cueliste lässt sich detailliert steuern; dazu gehören - pro Cue - die 
Optionen Block, This Cue Only und Solo (Siehe auch [Abrufen einer Cueliste](cue-lists/cue-list-playback.md)).

Zur Anzeige des Inhalts einer Cueliste berühren Sie den Touchscreen im
'Playback'-Bereich oberhalb des jeweiligen Reglers oder drücken <Keys.HardKey>Open/View</Keys.HardKey>
und die zugehörige **Auswahltaste**.

![Playback View of Cue List](/docs/images/Cue-List-Window-with-Autoload-playback.png)