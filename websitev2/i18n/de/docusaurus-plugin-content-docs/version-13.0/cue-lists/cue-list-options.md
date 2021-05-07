---
id: cue-list-options
title: Cue List Options
sidebar_label: Cue List Options
original_id: cue-list-options
---

import Keys from '@site/src/components/key.ts';

Über das Menü [Playback Options](../cues/playback-options.md) sind weitere 
Optionen verfügbar. Zum Aufrufen derselben gehen Sie wie folgt vor:

1. Drücken Sie im Hauptmenü <Keys.SoftKey>Playback Options</Keys.SoftKey>.

2. Drücken Sie die <strong>Select-Taste</strong> der Cueliste.

Zur Anzeige aller Optionen in einem Fenster drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, 
dann die entsprechende <strong>Select-Taste</strong>, und klicken links in der 
Playback-Ansicht auf <strong>Options</strong>.

Die meisten Optionen sind die gleichen wie für [statische Cues](../cues/playback-options.md) und für [Chaser](../chases/chase-options.md), 
deshalb werden hier nur noch die spezifischen Optionen für
Cuelisten erläutert.

## Cue List Options -- Tab "Playback"

Blind, Priority, Shape Behaviour funktionieren genauso wie im Kapitel für 
Cues beschrieben (siehe [Playback Options](../cues/playback-options.md)).

### Tracking
Aktivieren/Deaktivieren von Tracking (also der
Nachverfolgung unveränderter Werte)  *Vorgabewert: aktiviert*.

### Shape Tracking
Bestimmt, wie Shapes getrackt werden.

Einstellung | Beschreibung
--- | ---
Off | Kein Tracking von Shapes - Shapes stoppen, wenn der Cue beendet wird.
On  | Shapes tracken, bis sie geblockt werden.
Local | Die allgemeine <strong>Tracking</strong>-Einstellung gilt. *(Vorgabewert)*

### Move In Dark
Einstellung für die gesamte Cueliste: Vorladen von
LTP-Werten, solange Geräte nicht benutzt werden (keinen Output
erzeugen), siehe [Move In Dark (MID)](cue-list-playback.md#move-in-dark-mid---funktionen).

Einstellung | Beschreibung
--- | ---
Off | Schaltet MID für die gesamte Cueliste ab; MID kann aber für einzelne Cues aktiviert werden *(Vorgabewert)*.
Disabled | Deaktiviert MID für die gesamte Cueliste, auch wenn es ggf. für einzelne Cues aktiviert ist.
Early | Startet die Bewegung zum frühestmöglichen Zeitpunkt, sofern nicht pro Cue anders vorgegeben.
Late | Beginnt die Bewegung zum spätestmöglichen Zeitpunkt, sofern nicht pro Cue anders vorgegeben.

### Loop Action
Damit wird bestimmt, ob die Cueliste nach dem Durchlaufen wiederholt werden soll.

Einstellung | Beschreibung
--- | ---
Stop on final cue | Die Cueliste wird nur einmal durchlaufen und stoppt beim letzten Schritt.
Loop | Die Cueliste wird nach Erreichen des letzten Cues wieder von Cue 1 wiederholt, wobei auch Move in Dark entsprechend ermittelt wird *(Vorgabewert)*.

## Cue List Options -- Tab "Handle"

Alle Optionen dieser Rubrik funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#playback-options---tab-handle) beschrieben.

## Cue List Options -- Tab "Fader"

### Fader Mode
Bestimmt das Verhalten des Faders.

Einstellung | Beschreibung
--- | ---
Fader Mode Intensity Kill With Off | Der Fader bestimmt die Werte der HTP-Kanäle, und die Cueliste bleibt aktiv, auch wenn der Regler auf '0' gestellt wird. 
Fader Mode Intensity Kill At 0 | Der Fader ist ebenfalls für die HTP-Werte zuständig, jedoch wird die Cueliste deaktiviert, sobald der Regler auf ‚0' gestellt wird.
Manual Crossfader | Sorgt dafür, dass der Fader als manueller Überblendregler fungiert, d.h. sowohl bei Reglerstellung 100% als auch bei 0% wird einen Schritt weitergeschaltet.

### Fire First Cue
Ist diese Option aktiviert, so wird mit Bedienen des
Faders direkt Cue 1 der Cueliste gestartet. Als Vorgabewert ist diese
Option deaktiviert.

## Cue List Options -- Tab "Effects"

Alle Optionen dieser Rubrik funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#playback-options----tab-effects) beschrieben.

## Cue List Options -- Tab "Release"

Release Mask und Release Time funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#playback-options----tab-release) beschrieben.

### Cue Release

<strong>Cue Release:</strong> erlaubt es, Cuelisten zu erstellen, bei denen zwischen
den einzelnen Schritten ein Release erfolgt. So lässt sich damit z.B.
eine Cueliste erstellen, die die Geräte einzeln auf weiß einblendet und
dann wieder released, also auf die vorher verwendete Farbe zurücksetzt.
Diese kann man dann vor jedem anderen - durch andere Cues/Paletten
eingestellten - Hintergrund laufen lassen.

## Renumber all cues

Die Option <Keys.SoftKey>Renumber All Cues</Keys.SoftKey> setzt die Nummerierung der Schritte auf
eine von 1 aufsteigende Folge zurück. *Diese Option ist nur über die
Menütasten sowie die Kontext-Buttons verfügbar, nicht im Optionsfenster*.

## Cue Options

Hiermit lassen sich Einstellungen für jeden einzelnen Schritt der
Cueliste ändern. Um den gewünschten Schritt zu wählen, nutzen Sie das
linke Rad, oder Sie drücken Menütaste A <Keys.SoftKey>Select Cue Number</Keys.SoftKey> und geben die Schrittnummer
mit den Zifferntasten ein.

-   Mit <Keys.SoftKey>Curve</Keys.SoftKey> (Kurve) kann man für diesen Schritt eine andere
    Überblendkurve wählen; die beeinflusst den Übergang von einem
    Schritt zum nächsten (*so gibt es etwa Kurven, bei denen der Übergang
    langsam beginnt, in der Mitte schneller wird, und zum Ende hin
    wieder verlangsamt*). Drücken Sie <Keys.SoftKey>Curve</Keys.SoftKey>, und wählen Sie mit den
    Funktionstasten die gewünschte Kurve. Die einzelnen Kurven sind [Curves](../system-settings/curves.md) erläutert.

-   <Keys.SoftKey>Link</Keys.SoftKey> (Verbindung) bietet die Optionen <strong>Wait for Go</strong> (auf <Keys.HardKey>Go</Keys.HardKey>
    warten), <strong>With Previous Cue</strong> (mit vorigem Schritt), und  **After
    Previous Cue** (nach vorigem Schritt). Siehe [Schrittfolge und Versatz](cue-list-timing.md#schrittfolge-und-versatz).

-   <Keys.SoftKey>Move In Dark</Keys.SoftKey> öffnet das Menü mit den Move-In-Dark-Optionen,
    siehe [Move in Dark (MID)](cue-list-playback.md#move-in-dark-mid---funktionen)

-   <Keys.SoftKey>Move In Dark Inhibit</Keys.SoftKey> deaktiviert alle Move-In-Dark-Vorgänge in
    diesem Cue.

-   <Keys.SoftKey>Tracking</Keys.SoftKey> [Tracking-Einstellungen](cue-list-playback.md#tracking) für diesen 
    Cue.

-   <Keys.SoftKey>Legend</Keys.SoftKey> (Bezeichnung) Gestattet die Vergabe einer Bezeichnung des
    Schrittes; die Bezeichnung wird später im Display angezeigt.

-   <Keys.SoftKey>Notes=</Keys.SoftKey> (Bemerkung) Dient zur Eingabe von Notizen zu dem Schritt,
    hilfreich etwa zum Szenenablauf (z.B. *verlässt vom Bär verfolgt die
    Bühne*, oder *den Spotfahrer wecken*).

-   <Keys.SoftKey>Autoload</Keys.SoftKey> siehe [Autoloading: Laden eines externen Cues](creating-a-cue-list.md#autoloading-laden-eines-externen-cues).

-   <Keys.SoftKey>Cue disabled</Keys.SoftKey> Erlaubt es, den Cue vorübergehend deaktivieren,
    ohne ihn zu löschen. Siehe [Deaktivieren eines Cues](editing-cue-lists.md#deaktivieren-eines-cues).