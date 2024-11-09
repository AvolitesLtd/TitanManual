---
id: cue-list-playback
title: Abrufen
sidebar_label: Abrufen
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Abrufen einer Cueliste

Stellen Sie den Regler der Cueliste auf den gewünschten Wert und drücken
die <Keys.HardKey>Go</Keys.HardKey>-Taste, um den ersten Schritt zu starten. Unten im Display
erscheint die Cueliste, der aktuelle Schritt ist dabei grau
hervorgehoben, der nächste Schritt ist durch eine Umrandung
gekennzeichnet (auf dem Diamond 9 wird der Status der Cueliste unten im Editor-Display 
angezeigt).

![Connected Cue List view](/docs/images/Connected-Cue-List-view.png)

Das Display direkt oberhalb des jeweiligen Reglers zeigt Informationen
zur aktuellen Cueliste: der aktuellen Cue wird oben hellblau
dargestellt, darunter der nächste dunkelblau.

Die Überblendung wird durch einen Fortschrittsbalken angezeigt. Zeiten
werden durch Pfeile nach oben (Fade-In) bzw. unten (Fade-Out), mit
Buchstaben (d = Delay, f = Fade) sowie mit einem M (bei manuellem
Crossfade) dargestellt.

![Playback handle of running cue list](/docs/images/Playback-handle-of-running-cue-list.png)

Für eine bessere Übersicht können Sie auch die Playback-Ansicht der
Cueliste öffnen (einfach im Display auf die Cueliste klicken, oder
<Keys.HardKey>Open/View</Keys.HardKey> und die **Select-Taste** der Cueliste drücken). Hier hat man
sämtliche Cues, Zeiten und Optionen (z.B. Autoload, Macros, MID etc.) im
Überblick, was vor allem im [Theater](theatre-programming.md) sehr hilfreich ist.

Mit der [Benutzereinstellung](../system-settings/user-settings.md#auto-view-on-connect) 
&nbsp;**'Auto View On Connect'** lässt sich erreichen,
dass beim Connecten einer Cueliste sofort deren Detail-Fenster aufgeht.

![Playback View of Cue List with cue fade in progress](/docs/images/Playback-View-of-Cue-List-with-cue-fade-in-progress.png)

Ist gerade eine zeitlich gesteuerte Aktion im Gange, dann wird dies
durch grüne Fortschrittsbalken angezeigt - links für den gesamten Cue,
in den einzelnen Spalten jeweils für die einzelnen Fade- und
Delayzeiten.

Die Playback-Ansicht scrollt normalerweise mit, so dass immer der
aktuelle Cue dargestellt wird. Dies kann in den Optionen des Fensters
genauer eingestellt und geändert werden (klicken Sie dazu auf das kleine
<Keys.ContextKey>Zahnrad</Keys.ContextKey> in der Titelleiste des Fensters).

---

-   Die HTP-Pegel der Schritte werden durch die Stellung des Reglers
    bestimmt.

-   Ein Überblendprozess lässt sich mit der <Keys.HardKey>Stop</Keys.HardKey>-Taste (oberhalb der
    <Keys.HardKey>Go</Keys.HardKey>-Taste) anhalten, und mit der <Keys.HardKey>Go</Keys.HardKey>-Taste fortsetzen.

-   Um direkt einen bestimmten Schritt anzuspringen, wählen Sie diesen mit Rad A oder 
    mit den links/rechts-Pfeilen aus. Drücken Sie nun <Keys.HardKey>Go</Keys.HardKey>, 
	um den angewählten Schritt aufzurufen. Soll der Vorgang abgebrochen werden, so drücken 
	Sie gleichzeitig <Keys.HardKey>Prev. Cue</Keys.HardKey> und <Keys.HardKey>Next 
	Cue</Keys.HardKey>.

-   Ist die Cueliste gerade pausiert, so kann man mit <Keys.HardKey>Stop</Keys.HardKey> zum
    vorherigen Cue incl. Einfadezeiten springen.

-   Auf den vorigen Schritt schalten Sie mit der Taste <Keys.HardKey>Snap back</Keys.HardKey>
    (sofern vorhanden).

-   Auf Pulten mit einer <Keys.HardKey>Snap</Keys.HardKey>-Taste erreicht man den
    nächsten/vorherigen Schritt der Cueliste mit den Tasten <Keys.HardKey>Prev 
	Step</Keys.HardKey>/<Keys.HardKey>Next Step</Keys.HardKey> unter Berücksichtigung der
    programmierten Zeiten. Aktiviert man die <Keys.HardKey>Snap</Keys.HardKey>-Taste, so werden
    die Zeiten ignoriert und direkt umgeschaltet. Für Pulte, die diese Taste nicht haben, 
	gibt es die [Benutzereinstellungen](../system-settings/user-settings.md#chase-snap) <Keys.SoftKey>Chase Snap</Keys.SoftKey> bzw. <Keys.SoftKey>Cue List Snap</Keys.SoftKey>.

-   Zur Direktanwahl eines Schritts drücken Sie die Taste <Keys.HardKey>Connect / Cue</Keys.HardKey>,
    gefolgt von der Schrittnummer und <Keys.HardKey>Enter</Keys.HardKey> oder Funktionstaste 
	A.<br/>Alternativ tippen Sie im Hauptmenü einfach die Schrittnummer ein und
    drücken <Keys.HardKey>Connect / Cue</Keys.HardKey>. (Diese Taste heißt je nach Pult <Keys.HardKey>Connect</Keys.HardKey>
	oder <Keys.HardKey>Cue</Keys.HardKey>).

-   Mittels der [Tastenbelegungen ('Key Profiles')](../system-settings/key-profiles.md) lässt sich die
    Funktion der grauen und blauen Tasten an die Erfordernisse anpassen,
    etwa **Go**, **Stop**, **Connect**, **Next
    Cue** (nächster Schritt), **Prev Cue** (voriger Schritt), **Cut Next Cue To Live** (nächsten Schritt
    ohne Überblend-/Verzögerungszeiten aktivieren), und **Snap Back**, siehe [Key Profiles](../system-settings/key-profiles.md#cue-lists).

-   Beim Ausblenden des Reglers einer Cueliste werden die enthaltenen
    HTP-Kanäle ausgeblendet, die Cueliste an sich bleibt jedoch aktiv.
    [Im nächsten Abschnitt](#eine-cueliste-deaktivieren) wird erläutert, 
	wie die Cueliste deaktiviert werden kann.

-   Mittels **Timecode** kann eine Cueliste [automatisch gesteuert werden](cue-list-timing.md#steuern-einer-cueliste-per-timecode).

-   Die Zeit für den nächsten Schritt lässt sich einfach ändern, indem
    man mit den Zifferntasten die neue Zeit eingibt und <Keys.HardKey>Go</Keys.HardKey> drückt.
    Wollen Sie in einer neuen Zeit auf einen anderen Cue springen, so
    geben Sie die Nummer des neuen Cues ein, drücken <Keys.HardKey>Connect / Cue</Keys.HardKey>, geben
    die gewünschte Zeit ein und drücken <Keys.HardKey>Go</Keys.HardKey>

## Eine Cueliste deaktivieren

Sobald eine Cueliste gestartet wurde, bleibt sie aktiv, bis sie explizit
deaktiviert wird. Dazu halten Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt und
betätigen die blaue **Select-Taste** der Cueliste.

Das Verhalten lässt sich im Menü [Options](../cues/playback-options.md) ändern, so dass die
Cueliste automatisch entladen wird, wenn man den Regler auf '0' bringt:
drücken Sie dazu <Keys.SoftKey>Options</Keys.SoftKey> im Programmier-Menü, dann die
&nbsp;**Select-Taste** der Cueliste, und wählen die Option <Keys.SoftKey>Fader</Keys.SoftKey>, <Keys.SoftKey>Fader Mode Intensity Kill At 0</Keys.SoftKey>.

Per [Tastenprofil (Key Profiles)](../system-settings/key-profiles.md#cue-lists) lässt sich auch eine der Tasten mit der
Release-Funktion belegen.

> Solange eine Cueliste aktiv ist, laufen darin programmierte Shapes und Effekte weiter - auch, wenn der Fader auf 0 steht. Stellen Sie also unerfindliche Bewegungen/Effekte fest, so überprüfen Sie, ob alle Cuelisten auch wieder deaktiviert wurden.

## Tracking

<Video videoId="B2fTri0G2-A" title="Tracking in Cuelists" />

Normalerweise laufen Cuelisten im Tracking-Betrieb. Dabei werden nur
Änderungen einzelner Werte aufgezeichnet und wiedergegeben. Alles andere
wird als unverändert angenommen und bleibt erhalten. Tracking ist
insbesondere für [Theater](theatre-programming.md) die bevorzugte Arbeitsweise, da man z.B. einen
Dimmer nur am Beginn einer Szene aktivieren und nicht in jeden einzelnen
Cue der ganzen Szene hineinprogrammieren muss. Entsprechend schnell
lassen sich erforderlichenfalls auch Änderungen realisieren.

Tracking lässt sich sowohl für die komplette Cueliste aktivieren/
deaktivieren, als auch für die einzelnen Cues der Cueliste genau
einstellen (entweder in der Playback-Ansicht oder unter <Keys.SoftKey>Options</Keys.SoftKey><Keys.SoftKey>Cue Options</Keys.SoftKey>).


Mögliche Einstellungen:

Einstellung | Wirkung
--- | ---
<Keys.SoftKey>Global</Keys.SoftKey> *(Vorgabe)* | es gelten die Einstellungen der gesamten Cueliste.
<Keys.SoftKey>Track</Keys.SoftKey> | der Cue wird getrackt.
<Keys.SoftKey>Block</Keys.SoftKey> | dieser Cue übernimmt keinerlei Tracking-Informationen; im weiteren Verlauf wird das Tracking ab diesem Cue ermittelt.
<Keys.SoftKey>Solo Excluding Shapes</Keys.SoftKey> | Der Cue wird als Solo-Cue, also ohne jegliches Tracking, behandelt, allerdings werden Shapes, die keine Dimmershapes sind, getrackt. Damit kann z.B. eine Bewegung auch in einem Solo-Cue fortgesetzt werden.
<Keys.SoftKey>Cue Only</Keys.SoftKey> | Änderungen in diesem Cue werden nicht auf die nachfolgenden Cues weitergegeben; unveränderte Informationen von vorherigen Cues unterliegen aber weiterhin dem Tracking.
<Keys.SoftKey>Solo</Keys.SoftKey> | Dieser Cue unterliegt überhaupt nicht dem Tracking und verändert auch nicht nachfolgende Cues; Informationen aus vorherigen Cues werden unverändert an nachfolgende weitergegeben.
<Keys.SoftKey>Block Shapes</Keys.SoftKey> | Sämtliche Shapes von vorherigen Cues werden geblockt, alle anderen Attribute werden normal getrackt. Damit wird sichergestellt, dass alle Shapes stoppen.

## Move In Dark (MID) - Funktionen

Insbesondere bei der Verwendung von Movinglights im Theater
möchte man diese meist 'im Off' vorbereiten, also positionieren,
solange sie nicht aktiv verwendet werden, damit die Bewegung
nicht wahrgenommen wird. Dies lässt sich mit Move-In-Dark
schnell und einfach automatisch erreichen.

Die Move-In-Dark-Einstellungen lassen sich wahlweise für
einzelne Cues oder für die gesamte Cueliste vornehmen.

Zum Festlegen der Optionen für die gesamte Cueliste drücken Sie
<Keys.SoftKey>Options</Keys.SoftKey>, gefolgt von der Auswahltaste der Cueliste,
und klicken dann <Keys.SoftKey>Playback</Keys.SoftKey> gefolgt von <Keys.SoftKey>Move In Dark</Keys.SoftKey>.

Einstellung | Wirkung
---|---
<Keys.SoftKey>Disabled</Keys.SoftKey> | deaktiviert MID für die gesamte Cueliste, auch wenn es ggf. für einzelne Cues aktiviert ist
<Keys.SoftKey>Early</Keys.SoftKey> | startet die Bewegung zum frühestmöglichen Zeitpunkt, sofern nicht pro Cue anders vorgegeben
<Keys.SoftKey>Late</Keys.SoftKey> | beginnt die Bewegung zum spätestmöglichen Zeitpunkt, sofern nicht pro Cue anders vorgegeben
<Keys.SoftKey>Off</Keys.SoftKey> *(Vorgabe)* | schaltet MID für die gesamte Cueliste ab; MID kann aber für   einzelne Cues aktiviert werden

Zum Einstellen der Optionen für einzelne Cues nutzen Sie hingegen das Fenster ‚Playback View' der Cueliste. Es gibt folgende Optionen:

Einstellung | Wirkung
---|---
<Keys.SoftKey>Global</Keys.SoftKey> *(Vorgabe)* | Es werden die Einstellungen der gesamten Cueliste angewendet
<Keys.SoftKey>Cue Number</Keys.SoftKey> | zur Angabe eines bestimmten Cues, zu dem MID stattfinden soll
<Keys.SoftKey>Cue Offset</Keys.SoftKey> | gibt eine bestimmte Anzahl von Cues vor dem aktuellen an, wann MID beginnen soll
<Keys.SoftKey>Disabled</Keys.SoftKey> | deaktiviert MID für den aktuellen Cue
<Keys.SoftKey>Early</Keys.SoftKey> | MID so zeitig wie möglich
<Keys.SoftKey>Late</Keys.SoftKey> | MID so spät wie möglich

Für jeden einzelnen Cue wie auch für die gesamte Liste lassen sich für
MID getrennt Fade- und Delayzeit einstellen. Ebenso gibt es für jeden
Cue eine 'MID unterdrücken'-Funktion (Inhibit), um während dieses Cues
jede andere Bewegung zu verhindern; in diesem Falle - oder falls
anderweitig die Intensität nicht auf 0 ist - wird MID zum
nächstmöglichen Zeitpunkt nach diesem Cue ausgeführt.


## Tastenprofile für Cuelisten

Mit [Tastenprofilen/Key Profiles](../system-settings/key-profiles.md), lassen sich den einzelnen Tasten *(das Sapphire Touch verfügt auch über eine schwarze 
Taste)* sowie der Schaltfläche einer Cueliste (wenn sie im Fenster 'Playbacks' 
gespeichert ist) verschiedene Funktionen zuweisen. Im Abschnitt [Key Profiles](../system-settings/key-profiles.md#cue-lists) sind alle verfügbaren Funktionen aufgelistet.
