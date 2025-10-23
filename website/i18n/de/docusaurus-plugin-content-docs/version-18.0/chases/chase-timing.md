---
id: chase-timing
title: Zeiten bei Chasern
sidebar_label: Zeiten bei Chasern
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

1. Drücken Sie im Hauptmenü <Keys.SoftKey>Edit Times</Keys.SoftKey>, und anschließend die **Swop**-Taste des gewünschten Chasers.
2. Stellen Sie wie unten beschrieben **Geschwindigkeit**, **Überblendung**,
&nbsp;**Geräteversatz** und **Attributversatz** ein.
3. Drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, um den Vorgang abzuschließen.

-   Zum Einstellen der **Geschwindigkeit** drücken Sie <Keys.SoftKey>Speed</Keys.SoftKey>, geben die
    gewünschte Geschwindigkeit mit den Zifferntasten ein und schließen
    die Eingabe mit <Keys.HardKey>Enter</Keys.HardKey> ab. Abhängig von den Benutzereinstellungen
    kann man die Geschwindigkeit in ‚Beats Per Minute' (BPM) oder in
    Sekunden eingeben.

-   Zum Einstellen der **Überblendung** drücken Sie <Keys.SoftKey>Xfade</Keys.SoftKey>, geben den
    gewünschten Wert mit den Zifferntasten ein und schließen die Eingabe
    mit <Keys.HardKey>Enter</Keys.HardKey> ab 
	
	*(0 = keine Überblendung, hartes Umschalten; 100 = maximale Überblendung, ständiges Umblenden von einem Schritt zum nächsten)*.

-   Es gibt ein vorbereitetes Macro ‚Tap Tempo'. Kopieren Sie dieses auf
    eine freie Taste, so wirkt diese als Tap-Taste, sobald ein Chaser
    verbunden ist: drücken Sie diese mehrfach im gewünschten Rhythmus.
    Ebenso lässt sich mittels [Tastenprofil (Key Profiles)](../system-settings/key-profiles.md) die blaue oder graue Taste
    als **Tap Tempo**-Taste belegen

### Fixture Overlap - Geräte-Überlappung

Mit Fixture Overlap - Geräte-Überlappung - werden Änderungen von einem 
Cue zum nächsten auf die einzelnen Fixtures nacheinander statt gleichzeitig 
angewendet. Genauer ist dies in [Einstellen von Überblendzeiten und Geräteversatz](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) erläutert.

## Individuelle Zeiten pro Schritt

Jeder Schritt eines Chasers lässt sich mit gesonderten Zeitvorgaben
versehen. Dazu können Sie entweder das ‚Playback View'-Fenster oder die
‚Unfold'-Funktion verwenden.

> Werden sehr komplexe Zeiten benötigt, so bietet sich die Verwendung einer Cueliste an, siehe [Cuelisten](../cue-lists.md).

### Unter Verwendung des 'Playback View'-Fensters:

1. Berühren Sie das Display oberhalb des betreffenden Reglers, oder drücken Sie <Keys.HardKey>Open/View</Keys.HardKey> und die **Swop**-Taste des Speicherplatzes. Darauf öffnet sich das ‚Playback View'-Fenster.<br/>
   ![Playback View for chase](/docs/images/Playback-View-for-chase.png)
2. Im Fenster können Sie durch Anklicken die zu ändernden Zeiten auswählen.
3. Zum Ändern der Zeiten und Einstellungen nutzen Sie die entsprechenden Funktionstasten.
4. Wiederholen Sie ab Schritt 2, um weitere Änderungen vorzunehmen.

> Zum gleichzeitigen Ändern mehrerer Schritte lassen sich durch
    'Wischen' über das Display mehrere Cues auf einmal auswählen, oder
    man benutzt den **Encoder B** zur Mehrfachauswahl.

### Unter Verwendung der 'Unfold'-Funktion

1. Drücken Sie die <Keys.HardKey>Unfold</Keys.HardKey>-Taste und dann die **Swop**-Taste des zu
editierenden Chasers.
2. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey> und dann die **Swop**-Taste des
gewünschten Schrittes.
3. Stellen Sie die Zeiten auf die gewünschten Werte ein. Die möglichen
Optionen sind unten beschrieben.
4. Drücken Sie <Keys.HardKey>Unfold</Keys.HardKey>, um den Modus zu verlassen.

### Zeit-Optionen

Im Ausgangszustand sind sämtliche Zeitvorgaben auf die globalen Werte
voreingestellt. Vorgenommene individuelle Einstellungen lassen sich
rückgängig machen, indem man die Funktionstaste der entsprechenden
Zeiteinstellung betätigt und den Wert mit <Keys.HardKey>Back</Keys.HardKey> (oder der Backspace-Taste einer angeschlossenen Tastatur) löscht.

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

1. Drücken Sie <Keys.HardKey>Open/View</Keys.HardKey> oder die <Keys.HardKey>Unfold</Keys.HardKey>-Taste, und
danach die **Swop**-Taste des gewünschten Chasers.
2. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey>, und wählen danach den zu ändernden
Schritt im 'Playback View'-Fenster, oder - bei Verwendung der
'Unfold'-Funktion - mit der entsprechenden **Swop**-Taste aus.
3. Drücken Sie die **Attribut-Auswahltaste** (rechts) des Attributs, das
Sie bearbeiten möchten.
4. Drücken Sie <Keys.SoftKey>Delay</Keys.SoftKey>, um die Verzögerung einzustellen, oder <Keys.SoftKey>Set
fade</Keys.SoftKey> zum Einstellen der Überblendzeit.
5. Geben Sie die gewünschte Zeit mit den Zifferntasten, gefolgt von
<Keys.HardKey>Enter</Keys.HardKey>, ein, oder drücken sie <Keys.HardKey>Back</Keys.HardKey>, um die individuellen
Einstellungen zu löschen und die globalen Zeiten zu verwenden.
6. Drücken Sie <Keys.HardKey>Enter</Keys.HardKey> zum Übernehmen der Werte.

## Rate- und BPM-Master

Chaser können einem Rate- oder einem BPM-Master zugewiesen werden -
dadurch wird dann das Tempo durch einen anderen Masterregler gesteuert.
Die Zuordnung erfolgt in den [Optionen](../cues/playback-options.md) des Chasers unter <Keys.SoftKey>Effects</Keys.SoftKey>, dann <Keys.SoftKey>Speed Source</Keys.SoftKey>. Siehe Abschnitt [Speed and Size Masters](../running-the-show/playback-controls.md#speed--und-size-master).

## Speed-Faktoren

Mittels Speed-Faktoren kann das Geschwindigkeitsverhältnis zwischen
mehreren Chasern und Effekten festgelegt werden (etwa x4 oder /2).

Wählen Sie <Keys.SoftKey>Speed Multiplier</Keys.SoftKey> im ‚Edit Times'-Menü des Chasers oder in
[<Keys.SoftKey>Options</Keys.SoftKey> Tab <Keys.SoftKey>Playback</Keys.SoftKey>](../cues/playback-options.md#speed-multiplier), und 
stellen Sie den gewünschten Wert mit den Menütasten ein. 
<Keys.SoftKey>Multiply or Divide</Keys.SoftKey> bestimmt, ob es ein Faktor oder ein Teiler ist.
