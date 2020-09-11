---
id: version-13.0-cue-list-options
title: Cue List Options
sidebar_label: Cue List Options
original_id: cue-list-options
---

Über das Menü [Playback Options](../cues/playback-options.md) sind weitere 
Optionen verfügbar. Zum Aufrufen derselben gehen Sie wie folgt vor:

1. Drücken Sie im Hauptmenü \[Playback Options\].

2. Drücken Sie die **Select-Taste** der Cueliste.

Zur Anzeige aller Optionen in einem Fenster drücken Sie \<View / Open\>, 
dann die entsprechende **Select-Taste**, und klicken links in der 
Playback-Ansicht auf **Options**.

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
Local | Die allgemeine **Tracking**-Einstellung gilt. *(Vorgabewert)*

### Move In Dark
Einstellung für die gesamte Cueliste: Vorladen von
LTP-Werten, solange Geräte nicht benutzt werden (keinen Output
erzeugen), siehe [Move In Dark (MID)](cue-list-playback.md#move-in-dark-mid-functions).

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

Alle Optionen dieser Rubrik funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#handle-tab) beschrieben.

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

Alle Optionen dieser Rubrik funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#effects-tab) beschrieben.

## Cue List Options -- Tab "Release"

Release Mask und Release Time funktionieren genauso wie im Kapitel [Playback Options](../cues/playback-options.md#release-tab) beschrieben.

### Cue Release

**Cue Release:** erlaubt es, Cuelisten zu erstellen, bei denen zwischen
den einzelnen Schritten ein Release erfolgt. So lässt sich damit z.B.
eine Cueliste erstellen, die die Geräte einzeln auf weiß einblendet und
dann wieder released, also auf die vorher verwendete Farbe zurücksetzt.
Diese kann man dann vor jedem anderen - durch andere Cues/Paletten
eingestellten - Hintergrund laufen lassen.

## Renumber all cues

Die Option \[Renumber All Cues\] setzt die Nummerierung der Schritte auf
eine von 1 aufsteigende Folge zurück. *Diese Option ist nur über die
Menütasten sowie die Kontext-Buttons verfügbar, nicht im Optionsfenster*.

## Cue Options

Hiermit lassen sich Einstellungen für jeden einzelnen Schritt der
Cueliste ändern. Um den gewünschten Schritt zu wählen, nutzen Sie das
linke Rad, oder Sie drücken Menütaste A \[Select Cue Number\] und geben die Schrittnummer
mit den Zifferntasten ein.

-   Mit \[Curve\] (Kurve) kann man für diesen Schritt eine andere
    Überblendkurve wählen; die beeinflusst den Übergang von einem
    Schritt zum nächsten (*so gibt es etwa Kurven, bei denen der Übergang
    langsam beginnt, in der Mitte schneller wird, und zum Ende hin
    wieder verlangsamt*). Drücken Sie \[Curve\], und wählen Sie mit den
    Funktionstasten die gewünschte Kurve. Die einzelnen Kurven sind [Curves](../system-settings/curves.md) erläutert.

-   \[Link\] (Verbindung) bietet die Optionen **Wait for Go** (auf \<Go\>
    warten), **With Previous Cue** (mit vorigem Schritt), und  **After
    Previous Cue** (nach vorigem Schritt). Siehe [Cue Linking & Link Offset](cue-list-timing.md#schrittfolge-und-versatz).

-   \[Move In Dark\] öffnet das Menü mit den Move-In-Dark-Optionen,
    siehe [Move in Dark (MID)](cue-list-playback.md#move-in-dark-mid-functions)

-   \[Move In Dark Inhibit\] deaktiviert alle Move-In-Dark-Vorgänge in
    diesem Cue.

-   \[Tracking\] [Tracking-Einstellungen](cue-list-playback.md#tracking) für diesen 
    Cue.

-   \[Legend\] (Bezeichnung) Gestattet die Vergabe einer Bezeichnung des
    Schrittes; die Bezeichnung wird später im Display angezeigt.

-   \[Notes=\] (Bemerkung) Dient zur Eingabe von Notizen zu dem Schritt,
    hilfreich etwa zum Szenenablauf (z.B. *verlässt vom Bär verfolgt die
    Bühne*, oder *den Spotfahrer wecken*).

-   \[Autoload\] siehe [Autoloading a Playback within a Cue List](creating-a-cue-list.md#autoloading-a-playback-within-a-cue-list).

-   \[Cue disabled\] Erlaubt es, den Cue vorübergehend deaktivieren,
    ohne ihn zu löschen. Siehe [Disabling a Cue](editing-cue-lists.md#disabling-a-cue).