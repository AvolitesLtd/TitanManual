---
id: chase-timing
title: Chase Timing
sidebar_label: Chase Timing
original_id: chase-timing
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Globale Zeiten für Chaser

Wird ein Chaser erstmals programmiert, gelten für sämtliche Schritte die
gleichen Zeiten. Dies sind die globalen Zeiten. Wenn gewünscht, lassen
sich anschließend für jeden Schritt gesonderte Zeiten in der Ansicht
[Playback View](editing-a-chase.md#einen-chaser-zum-editieren-öffnen) bzw. mit 
der [Unfold](editing-a-chase.md#ändern-eines-chasers-mit-der-unfold-funktion)-Funktion 
vergeben; das ist [im nächsten Abschnitt](#individuelle-zeiten-pro-schritt)
 genauer beschrieben.

1. Drücken Sie im Hauptmenü <Keys.SoftKey>Edit Times</Keys.SoftKey>, und anschließend die
&nbsp;<strong>Swop</strong>-Taste des gewünschten Chasers.

2. Stellen Sie wie unten beschrieben <strong>Geschwindigkeit</strong>, <strong>Überblendung</strong>,
&nbsp;<strong>Geräteversatz</strong> und <strong>Attributversatz</strong> ein.

3. Drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, um den Vorgang abzuschließen.

---

-   Zum Einstellen der <strong>Geschwindigkeit</strong> drücken Sie <Keys.SoftKey>Speed</Keys.SoftKey>, geben die
    gewünschte Geschwindigkeit mit den Zifferntasten ein und schließen
    die Eingabe mit <Keys.HardKey>Enter</Keys.HardKey> ab. Abhängig von den Benutzereinstellungen
    kann man die Geschwindigkeit in ‚Beats Per Minute' (BPM) oder in
    Sekunden eingeben.

-   Zum Einstellen der <strong>Überblendung</strong> drücken Sie <Keys.SoftKey>Xfade</Keys.SoftKey>, geben den
    gewünschten Wert mit den Zifferntasten ein und schließen die Eingabe
    mit <Keys.HardKey>Enter</Keys.HardKey> ab *(0 = keine Überblendung, hartes Umschalten; 100 =
    maximale Überblendung, ständiges Umblenden von einem Schritt zum
    nächsten)*.

-   Es gibt ein vorbereitetes Macro ‚Tap Tempo'. Kopieren Sie dieses auf
    eine freie Taste, so wirkt diese als Tap-Taste, sobald ein Chaser
    verbunden ist: drücken Sie diese mehrfach im gewünschten Rhythmus.
    Ebenso lässt sich mittels [Tastenprofil (Key Profiles)](../system-settings/key-profiles.md) die blaue oder graue Taste
    als <strong>Tap Tempo</strong>-Taste belegen

### Overlap - Überlappung

Die <strong>Overlap</strong> (Überlappen)-Funktionen erlauben Vorgaben zu Versatz und
Überlappung der einzelnen Schritte. Damit lassen sich mit minimalem
Programmieraufwand erstaunliche Ergebnisse erzielen. Um sich damit
vertraut zu machen, legt man am besten einen Chaser mit zwei Schritten
unter Verwendung mehrerer Geräte an, und experimentiert mit den
verschiedenen Optionen.

Im nachstehenden Diagramm sind die Auswirkungen von 'Cue Overlap'
(Schritt überlappen), 'Fixture Overlap' (Geräte überlappen), und
‚Attribut Overlap' (Attribute überlappen) dargestellt.

![Fixture Overlap and Attribute Overlap diagram for a chase](/docs/images/Fixture-Overlap-and-Attribute-Overlap-diagram-for-a-chase.png)

Drücken Sie <Keys.SoftKey>Fixture Overlap</Keys.SoftKey> und geben mit den Zifferntasten
einen Wert von <strong>0 - 100</strong> ein.\
&nbsp;<strong>100%</strong> (*Standardwert*) bedeutet, dass alle Geräte gemeinsam wechseln.
&nbsp;<strong>0%</strong> bedeutet, dass zunächst das erste Gerät komplett überblendet, bevor das nächste damit beginnt.\
Bei <strong>50%</strong> wird das erste die Überblendung zunächst zur Hälfte
abschließen, bevor das nächste damit beginnt. Die Reihenfolge der
Geräte wird dabei durch die Reihenfolge der Geräteauswahl beim
Erstellen des jeweiligen Schrittes vorgegeben, kann aber mit der
<Keys.HardKey>Unfold</Keys.HardKey>-Funktion geändert werden.

## Individuelle Zeiten pro Schritt

Jeder Schritt eines Chasers lässt sich mit gesonderten Zeitvorgaben
versehen. Dazu können Sie entweder das ‚Playback View'-Fenster oder die
‚Unfold'-Funktion verwenden.

> Werden sehr komplexe Zeiten benötigt, so bietet sich die Verwendung einer Cueliste an, siehe [Cuelisten](../cue-lists.md).

### Unter Verwendung des 'Playback View'-Fensters:

1. Berühren Sie das Display oberhalb des betreffenden Reglers, oder
drücken Sie <Keys.HardKey>View / Open</Keys.HardKey> und die <strong>Swop</strong>-Taste des
Speicherplatzes. Darauf öffnet sich das ‚Playback View'-Fenster.

![Playback View for chase](/docs/images/Playback-View-for-chase.png)

2. Im Fenster können Sie durch Anklicken die zu ändernden Zeiten
auswählen.

3. Zum Ändern der Zeiten und Einstellungen nutzen Sie die
entsprechenden Funktionstasten.

4. Wiederholen Sie ab Schritt 2, um weitere Änderungen vorzunehmen.

> Zum gleichzeitigen Ändern mehrerer Schritte lassen sich durch
    'Wischen' über das Display mehrere Cues auf einmal auswählen, oder
    man benutzt den <strong>Encoder B</strong> zur Mehrfachauswahl.

### Unter Verwendung der 'Unfold'-Funktion

1. Drücken Sie die <Keys.HardKey>Unfold</Keys.HardKey>-Taste und dann die <strong>Swop</strong>-Taste des zu
editierenden Chasers.

2. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey> und dann die <strong>Swop</strong>-Taste des
gewünschten Schrittes.

3. Stellen Sie die Zeiten auf die gewünschten Werte ein. Die möglichen
Optionen sind unten beschrieben.

4. Drücken Sie <Keys.HardKey>Unfold</Keys.HardKey>, um den Modus zu verlassen.

### Zeit-Optionen

Im Ausgangszustand sind sämtliche Zeitvorgaben auf die globalen Werte
voreingestellt. Vorgenommene individuelle Einstellungen lassen sich
rückgängig machen, indem man die Funktionstaste der entsprechenden
Zeiteinstellung betätigt und dann <Keys.SoftKey>Use Global</Keys.SoftKey> wählt.

The timing options for the cue are:

-   Delay (Verzögerung)

-   Fade In (Einblenden, Überblenden)

-   Fade Out (Ausblenden)

-   Fixture Overlap (Geräteversatz)

-   Link with previous step (mit dem vorigen Schritt verbinden)

-   Attribute times (Attribut-Zeiten, siehe [nächster Abschnitt](#vergeben-von-attribut-zeiten-für-einzelne-schritte))

'Linking' (Verbinden) kann entweder auf <Keys.SoftKey>Link After Previous</Keys.SoftKey>(der
Schritt folgt unmittelbar auf den vorigen, und der Chaser läuft
automatisch durch) oder auf <Keys.SoftKey>Link Wait For Go</Keys.SoftKey> (der Schritt wartet auf
das Betätigen der <Keys.HardKey>Go</Keys.HardKey>-Taste) gestellt werden.

## Vergeben von Attribut-Zeiten für einzelne Schritte

Für jeden Schritt eines Chasers lassen sich ebenso verschiedene
Überblendzeiten für die einzelnen Attribute, etwa die Position,
vergeben. Das Vergeben solcher individueller Zeiten überschreibt die
vorgegebenen normalen Zeiten. Zum Ändern dieser Einstellungen lässt sich
entweder das ‚Cue View'-Fenster oder die ‚Unfold'-Funktion nutzen.

Zum Vergeben einer Überblendzeit für eine Attributgruppe:

1. Drücken Sie <Keys.HardKey>View / Open</Keys.HardKey> oder die <Keys.HardKey>Unfold</Keys.HardKey>-Taste, und
danach die <strong>Swop</strong>-Taste des gewünschten Chasers.

2. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey>, und wählen danach den zu ändernden
Schritt im 'Playback View'-Fenster, oder - bei Verwendung der
'Unfold'-Funktion - mit der entsprechenden <strong>Swop</strong>-Taste aus.

3. Drücken Sie die <strong>Attribut-Auswahltaste</strong> (rechts) des Attributs, das
Sie bearbeiten möchten.

4. Drücken Sie <Keys.SoftKey>Delay</Keys.SoftKey>, um die Verzögerung einzustellen, oder \[Set
fade\] zum Einstellen der Überblendzeit.

5. Geben Sie die gewünschte Zeit mit den Zifferntasten, gefolgt von
<Keys.HardKey>Enter</Keys.HardKey>, ein, oder drücken sie <Keys.SoftKey>Use Global</Keys.SoftKey>, um die individuellen
Einstellungen zu verwerfen und die globalen Zeiten zu verwenden.

6. Drücken Sie <Keys.HardKey>Enter</Keys.HardKey> zum Übernehmen der Werte.

## Rate- und BPM-Master

Chaser können einem Rate- oder einem BPM-Master zugewiesen werden -
dadurch wird dann das Tempo durch einen anderen Masterregler gesteuert.
Die Zuordnung erfolgt in den [Playback-Optionen](../cues/playback-options.md) des Chasers unter <Keys.SoftKey>Effects</Keys.SoftKey>, dann <Keys.SoftKey>Speed Source</Keys.SoftKey>. Siehe Abschnitt [Speed and Size Masters](../running-the-show/playback-controls.md#speed--und-size-master).

## Speed-Faktoren

Mittels Speed-Faktoren kann das Geschwindigkeits-Verhältnis zwischen
mehreren Chasern und Effekten festgelegt werden (etwa x4 oder /2).

Wählen Sie <Keys.SoftKey>Speed Multiplier</Keys.SoftKey> im ‚Edit Times'-Menü des Chasers oder in
[<Keys.SoftKey>Playback Options</Keys.SoftKey> Tab <Keys.SoftKey>Playback</Keys.SoftKey>](../cues/playback-options.md#speed-multiplier), und 
stellen Sie den gewünschten Wert mit den Menütasten ein. 
<Keys.SoftKey>Multiply or Divide</Keys.SoftKey> bestimmt, ob es ein Faktor oder ein Teiler ist.
