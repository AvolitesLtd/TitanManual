---
id: setting-up-the-rig
title: Das Rig einrichten
sidebar_label: Das Rig einrichten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Raum und Bühne

Für einen realistischen Eindruck und eine bessere Orientierung lassen
sich verschiedene feste Elemente hinzufügen.

Öffnen Sie das Fenster <Keys.SoftKey>Capture Visualiser Settings</Keys.SoftKey> per Doppelklick auf
[<Keys.HardKey>Open/View</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) und wählen Capture 
Visualiser Settings, oder durch einen Klick auf den Kontext-Button <Keys.ContextKey>Open Settings</Keys.ContextKey> 
im Capture Visualiser-Fenster). Klicken Sie nun oben auf den Reiter **Stage**.

![Capture Visualiser Settings Window](/docs/images/Capture-Visualiser-Settings-Window.png)


Die Elemente **"Floor"** (Boden) und **"Back Wall"** (Rückwand) sind bereits
eingerichtet. Klickt man links unten auf das <Keys.ContextKey>+</Keys.ContextKey> (Pluszeichen), so
können weitere Objekte hinzugefügt werden.

Klicken Sie links auf eines der vorhandenen Objekte, so können seine
Eigenschaften mit den Fadern und Input-Boxen rechts bearbeitet werden:
so können Sie die Objekte positionieren und in der Größe verändern.
Ebenso können Sie rechts oben Farbe und Bezeichnung der Objekte
verändern.

## Geräte/Fixtures hinzufügen und einrichten
Ist die Funktion "Auto Update" aktiviert (zu finden auf dem Reiter
&nbsp;**Show** im Fenster **Capture Settings**), 
so werden Geräte beim Patchen in der Titan-Software automatisch zur 
Capture-Bühne hinzugefügt.

Wird eine Show aus einer früheren Titan-Version [geladen](../titan-basics/loading-and-saving-shows.md#laden-einer-show), so werden die
Geräte/Fixtures **nicht** automatisch zu Capture hinzugefügt. Dazu ist
zunächst ein [Updaten der Personalities](../patching/changing-the-patch.md#bereits-gepatchte-personalities-aktualisieren) 
erforderlich: <Keys.HardKey>Patch</Keys.HardKey> <Keys.SoftKey>Edit Fixtures</Keys.SoftKey> <Keys.SoftKey>Update Personality</Keys.SoftKey> <Keys.SoftKey>Update All</Keys.SoftKey>. 
Auch ein Gerätetausch ([Exchange Fixtures](../patching/changing-the-patch.md#geräte-austauschen)) kann helfen.

Geräte werden, sobald sie in Capture vorhanden sind, mit den Rädern
(Encodern) positioniert. Wählen Sie dazu [ein oder mehrere Geräte oder
ein Gerätegruppe](../controlling-fixtures.md#dimmer-und-geräte-zum-steuern-auswählen) aus und drücken Sie [<Keys.HardKey>Locate</Keys.HardKey>](../controlling-fixtures.md#geräte-auf-startposition-setzen-locate). Mit dem Kontext-Button <Keys.ContextKey>Position - Orientation</Keys.ContextKey> wird die Steuerung für Position und 
Orientierung der jeweils ausgewählten Geräte auf die Wheels gelegt. *Das
Gleiche passiert, wenn man den Rad-Modus mit der Menütaste G auf „Räder
= Visualiser" schaltet.*

Wählen Sie mit den Attribut-Tasten <Keys.HardKey>Position</Keys.HardKey>, so können Sie nun die
X/Y/Z-Position der gewählten Fixtures einstellen. Sind mehrere Geräte
gewählt, so lassen sich mit der <Keys.HardKey>Fan</Keys.HardKey>-Taste oder der Option <Keys.ContextKey>Scale-Fan</Keys.ContextKey> die Geräte gleichmäßig verteilen/auffächern. Auch die Optionen Split, Curve, Group der [Fan-Funktion](../controlling-fixtures/changing-fixture-attributes.md#fan-modus) funktionieren wie gewohnt.

Klicken Sie auf das Display oberhalb der Encoder, so können Sie
ebenfalls die betreffenden Werte schrittweise verändern. Für die
Rotation erfolgt das in 45°-Schritten.

Wenn man von vorn auf die Bühne schaut, so ist die Orientierung von XYZ
wie folgt:

Achse | Beschreibung
---|---
**X** | bewegt nach rechts/links
**Y** | bewegt nach oben/unten
**Z** | bewegt nach vorn/hinten

Klickt man nochmals auf <Keys.HardKey>Position</Keys.HardKey>, so schalten die Encoder auf
Orientation. Damit können die Geräte um die X/Y/Z-Achse
gedreht/geschwenkt werden. Auch hierbei kann der [Fan-Modus](../controlling-fixtures/changing-fixture-attributes.md#fan-modus) verwendet
werden.

Die XYZ-Rotation kann man sich am besten vorstellen, wenn man von einer
kardanischen Aufhängung, einem sog. Gimbal, ausgeht: drei Ringe sind
ineinander drehbar gelagert (siehe linkes Bild unten). Dabei kann es
dazu kommen, dass zwei Achsen scheinbar das Gleich machen, womit
bestimmte Orientierungen nicht mehr erreicht werden können. Dieser
Zustand ist bekannt als sog. Gimbal Lock und entsteht dann, wenn zwei
Achsen (durch Drehung der dritten um 90°) zusammenfallen (Bild unten
rechts). Verändern Sie in diesem Falle die dritte Achse um 90°, damit
wieder alle Freiheitsgrade zur Verfügung stehen und alle Orientierungen
erreicht werden können.

![gimbal](/docs/images/Gimbal.jpeg)

*Illustration by MathsPoetry*

Betätigen Sie <Keys.HardKey>Position</Keys.HardKey> ein drittes Mal, 
so können Sie die Rotation verändern. Sind nur einzelne Geräte ausgewählt, 
hat das die gleiche Wirkung wie Orientation. Sind dagegen mehrere Geräte angewählt, so
rotiert die Gruppe als Ganzes um ihren Mittelpunkt.

>Es empfiehlt sich, zunächst die Geräte im Tilt etwas aus der Mitte zu fahren, 
so dass man beim Ändern der Orientierung sieht, wohin man gerade dreht. 
Außerdem empfiehlt es sich, zumindest ein richtiges Gerät zum Vergleich 
anzuschließen, um zu überprüfen, dass alle Richtungen und Positionierungen
im richtigen Sinn erfolgen. 

## Kameras einrichten (Ansichten)

Es stehen vier Kameras - unabhängige Ansichten - zur Verfügung, wobei
weitere hinzugefügt werden können.

Die entsprechenden Optionen stehen über das Kontext-Menü zur
Verfügung.

![Capture Visualiser Workspace Window Context Menu](/docs/images/Capture-Visualiser-Workspace-Window-Context-Menu.png)

Die Steuerung der Kameras erfolgt im Fenster [Capture Visualiser Settings](#setting-up-the-stage-and-rigging): zum Öffnen drücken Sie zweimal auf 
<Keys.HardKey>View / Open</Keys.HardKey> und wählen <Keys.SoftKey>Capture Settings</Keys.SoftKey> von den Buttons,
oder Sie verwenden den Kontext-Button <Keys.ContextKey>Open Settings</Keys.ContextKey> des Capture-Fensters.

Die Steuerung der Kameras erfolgt ebenfalls im Fenster **Capture Visualiser Settings** auf dem Reiter 'Cameras'.

Mit den vier Schaltflächen oben lassen sich die verschiedenen Kameras
umschalten *(siehe unten)*; klickt man rechts auf das <Keys.ContextKey>+</Keys.ContextKey>, kann man weitere Kameras
hinzufügen.

![Camera movements in Capture Visualiser Workspace Window](/docs/images/Camera-movements-in-Capture-Visualiser-Workspace-Window.png)

Der obere Button der linken Spalte schaltet zwischen der Ansicht mit
einer oder mit vier Kameras um. Ist die Vierer-Ansicht aktiv, so
schalten die vier Buttons darunter zwischen den einzelnen Teilansichten
um.

Mit der linken Fläche kann man die Kamera **rechts/links** sowie nach
&nbsp;**vorn/hinten** positionieren.

Mit der mittleren Fläche verschiebt man die Kamera nach **oben/unten**.

Rechts kann man die Kamera drehen und schwenken; der jeweilige Modus wir
mit den Buttons darunter gewählt:

-   **Rotate:** dreht die Kamera nach links/rechts/oben/unten

-   **Orbit:** schwenkt die Kamera im Kreis um die Bühne, wobei sie stets
    auf den gleichen Punkt ausgerichtet bleibt.

Klickt man auf den Kontext-Button <Keys.ContextKey>Move Camera</Keys.ContextKey>, so kann man die
Kamera mit den Rädern bewegen sowie im Menü **Set Coordinates** 
die Position/Rotation numerisch eingeben.

Klickt man auf den Kontext-Button <Keys.ContextKey>Rotate Camera</Keys.ContextKey> oder \&#123;Orbit
Camera\&#125;, so kann man die Kamera mit den Rädern drehen/schwenken, sowie
die Rotation numerisch eingeben.

## Capture Darstellungs-Optionen

Der Reiter Appearance (Darstellung) im Fenster **Capture Visualiser Settings** bietet folgende Einstellmöglichkeiten:

- **Ambient lighting** (Umgebungslicht)
- **Smoke density** (Nebel/Haze; *bei Capture heißt das "Atmosphere"*)
- **Smoke variation** (*"Atmosphere contrast"* - Mix zwischen statischem 
Dunst und sich bewegendem Nebel - 0%=Haze, 100%=Nebel)
- **Smoke speed** (*"Atmosphere speed"* - Nebel/Haze Geschwindigkeit)
- **Exposure adjustment** (Belichtung, die Empfindlichkeit der Kamera)
- **Bloom amount** (eine Rendereinstellung, die die Darstellung heller
    Lichtquellen beeinflusst)
- **Rendering settings detail** (Render Details Stufe): Qualität der
    Darstellung. Eine höhere Stufe erzeugt eine bessere Darstellung,
    niedrige Stufen nehmen weniger Rechenleistung in Anspruch.