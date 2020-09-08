---
id: version-13.0-chase-timing
title: Chase Timing
sidebar_label: Chase Timing
original_id: chase-timing
---

Globale Zeiten für Chaser
-------------------------

Wird ein Chaser erstmals programmiert, gelten für sämtliche Schritte die
gleichen Zeiten. Dies sind die globalen Zeiten. Wenn gewünscht, lassen
sich anschließend für jeden Schritt gesonderte Zeiten in der Ansicht
[Playback View](editing-a-chase.md#opening-a-chase-for-editing) bzw. mit 
der [Unfold](editing-a-chase.md#editing-a-chase-using-unfold)-Funktion 
vergeben; das ist [im nächsten Abschnitt](#individual-cue-times-in-chases)
 genauer beschrieben.

1. Drücken Sie im Hauptmenü \[Edit Times\], und anschließend die
**Swop**-Taste des gewünschten Chasers.

2. Stellen Sie wie unten beschrieben **Geschwindigkeit**, **Überblendung**,
**Geräteversatz** und **Attributversatz** ein.

3. Drücken Sie \<Exit\>, um den Vorgang abzuschließen.

---

-   Zum Einstellen der **Geschwindigkeit** drücken Sie \[Speed\], geben die
    gewünschte Geschwindigkeit mit den Zifferntasten ein und schließen
    die Eingabe mit \<Enter\> ab. Abhängig von den Benutzereinstellungen
    kann man die Geschwindigkeit in ‚Beats Per Minute' (BPM) oder in
    Sekunden eingeben.

-   Zum Einstellen der **Überblendung** drücken Sie \[Xfade\], geben den
    gewünschten Wert mit den Zifferntasten ein und schließen die Eingabe
    mit \<Enter\> ab *(0 = keine Überblendung, hartes Umschalten; 100 =
    maximale Überblendung, ständiges Umblenden von einem Schritt zum
    nächsten)*.

-   Es gibt ein vorbereitetes Macro ‚Tap Tempo'. Kopieren Sie dieses auf
    eine freie Taste, so wirkt diese als Tap-Taste, sobald ein Chaser
    verbunden ist: drücken Sie diese mehrfach im gewünschten Rhythmus.
    Ebenso lässt sich mittels [Tastenprofil (Key Profiles)](../system-settings/key-profiles.md) die blaue oder graue Taste
    als **Tap Tempo**-Taste belegen

### Overlap - Überlappung

Die **Overlap** (Überlappen)-Funktionen erlauben Vorgaben zu Versatz und
Überlappung der einzelnen Schritte. Damit lassen sich mit minimalem
Programmieraufwand erstaunliche Ergebnisse erzielen. Um sich damit
vertraut zu machen, legt man am besten einen Chaser mit zwei Schritten
unter Verwendung mehrerer Geräte an, und experimentiert mit den
verschiedenen Optionen.

Im nachstehenden Diagramm sind die Auswirkungen von 'Cue Overlap'
(Schritt überlappen), 'Fixture Overlap' (Geräte überlappen), und
‚Attribut Overlap' (Attribute überlappen) dargestellt.

![Fixture Overlap and Attribute Overlap diagram for a chase](/docs/images/Fixture-Overlap-and-Attribute-Overlap-diagram-for-a-chase.png)

Drücken Sie \[Fixture Overlap\] und geben mit den Zifferntasten
einen Wert von **0 - 100** ein.\
**100%** (*Standardwert*) bedeutet, dass alle Geräte gemeinsam wechseln.
**0%** bedeutet, dass zunächst das erste Gerät komplett überblendet, bevor das nächste damit beginnt.\
Bei **50%** wird das erste die Überblendung zunächst zur Hälfte
abschließen, bevor das nächste damit beginnt. Die Reihenfolge der
Geräte wird dabei durch die Reihenfolge der Geräteauswahl beim
Erstellen des jeweiligen Schrittes vorgegeben, kann aber mit der
\<Unfold\>-Funktion geändert werden.

Individuelle Zeiten pro Schritt
-------------------------------

Jeder Schritt eines Chasers lässt sich mit gesonderten Zeitvorgaben
versehen. Dazu können Sie entweder das ‚Playback View'-Fenster oder die
‚Unfold'-Funktion verwenden.

> Werden sehr komplexe Zeiten benötigt, so bietet sich die Verwendung einer Cueliste an, siehe [Cuelisten](../cue-lists.md).

### Unter Verwendung des 'Playback View'-Fensters:

1. Berühren Sie das Display oberhalb des betreffenden Reglers, oder
drücken Sie \<View / Open\> und die **Swop**-Taste des
Speicherplatzes. Darauf öffnet sich das ‚Playback View'-Fenster.

![Playback View for chase](/docs/images/Playback-View-for-chase.png)

2. Im Fenster können Sie durch Anklicken die zu ändernden Zeiten
auswählen.

3. Zum Ändern der Zeiten und Einstellungen nutzen Sie die
entsprechenden Funktionstasten.

4. Wiederholen Sie ab Schritt 2, um weitere Änderungen vorzunehmen.

> Zum gleichzeitigen Ändern mehrerer Schritte lassen sich durch
    'Wischen' über das Display mehrere Cues auf einmal auswählen, oder
    man benutzt den **Encoder B** zur Mehrfachauswahl.

### Unter Verwendung der 'Unfold'-Funktion

1. Drücken Sie die \<Unfold\>-Taste und dann die **Swop**-Taste des zu
editierenden Chasers.

2. Drücken Sie \[Edit Times\] und dann die **Swop**-Taste des
gewünschten Schrittes.

3. Stellen Sie die Zeiten auf die gewünschten Werte ein. Die möglichen
Optionen sind unten beschrieben.

4. Drücken Sie \<Unfold\>, um den Modus zu verlassen.

### Zeit-Optionen

Im Ausgangszustand sind sämtliche Zeitvorgaben auf die globalen Werte
voreingestellt. Vorgenommene individuelle Einstellungen lassen sich
rückgängig machen, indem man die Funktionstaste der entsprechenden
Zeiteinstellung betätigt und dann \[Use Global\] wählt.

The timing options for the cue are:

-   Delay (Verzögerung)

-   Fade In (Einblenden, Überblenden)

-   Fade Out (Ausblenden)

-   Fixture Overlap (Geräteversatz)

-   Link with previous step (mit dem vorigen Schritt verbinden)

-   Attribute times (Attribut-Zeiten, siehe [nächster Abschnitt](#setting-attribute-fade-times-for-a-cue-in-a-chase))

'Linking' (Verbinden) kann entweder auf \[Link After Previous\](der
Schritt folgt unmittelbar auf den vorigen, und der Chaser läuft
automatisch durch) oder auf \[Link Wait For Go\] (der Schritt wartet auf
das Betätigen der \<Go\>-Taste) gestellt werden.

## Vergeben von Attribut-Zeiten für einzelne Schritte

Für jeden Schritt eines Chasers lassen sich ebenso verschiedene
Überblendzeiten für die einzelnen Attribute, etwa die Position,
vergeben. Das Vergeben solcher individueller Zeiten überschreibt die
vorgegebenen normalen Zeiten. Zum Ändern dieser Einstellungen lässt sich
entweder das ‚Cue View'-Fenster oder die ‚Unfold'-Funktion nutzen.

Zum Vergeben einer Überblendzeit für eine Attributgruppe:

1. Drücken Sie \<View / Open\> oder die \<Unfold\>-Taste, und
danach die **Swop**-Taste des gewünschten Chasers.

2. Drücken Sie \[Edit Times\], und wählen danach den zu ändernden
Schritt im 'Playback View'-Fenster, oder - bei Verwendung der
'Unfold'-Funktion - mit der entsprechenden **Swop**-Taste aus.

3. Drücken Sie die **Attribut-Auswahltaste** (rechts) des Attributs, das
Sie bearbeiten möchten.

4. Drücken Sie \[Delay\], um die Verzögerung einzustellen, oder \[Set
fade\] zum Einstellen der Überblendzeit.

5. Geben Sie die gewünschte Zeit mit den Zifferntasten, gefolgt von
\<Enter\>, ein, oder drücken sie \[Use Global\], um die individuellen
Einstellungen zu verwerfen und die globalen Zeiten zu verwenden.

6. Drücken Sie \<Enter\> zum Übernehmen der Werte.

## Rate- und BPM-Master

Chaser können einem Rate- oder einem BPM-Master zugewiesen werden -
dadurch wird dann das Tempo durch einen anderen Masterregler gesteuert.
Die Zuordnung erfolgt in den [Playback-Optionen](../cues/playback-options.md) des Chasers unter \[Effects\], dann \[Speed Source\]. Siehe Abschnitt [Speed and Size Masters](../running-the-show/playback-controls.md#speed-and-size-masters).

## Speed-Faktoren

Mittels Speed-Faktoren kann das Geschwindigkeits-Verhältnis zwischen
mehreren Chasern und Effekten festgelegt werden (etwa x4 oder /2).

Wählen Sie \[Speed Multiplier\] im ‚Edit Times'-Menü des Chasers oder in
[\[Playback Options\]\[Playback\]](../cues/playback-options.md), und 
stellen Sie den gewünschten Wert mit den Menütasten ein. 
\[Multiply or Divide\] bestimmt, ob es ein Faktor oder ein Teiler ist.
