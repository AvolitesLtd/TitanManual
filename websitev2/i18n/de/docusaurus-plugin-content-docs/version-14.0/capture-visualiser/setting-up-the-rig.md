---
id: setting-up-the-rig
title: Setting up the Rig
sidebar_label: Setting up the Rig
original_id: setting-up-the-rig
---

Raum und Bühne
--------------

Für einen realistischen Eindruck und eine bessere Orientierung lassen
sich verschiedene feste Elemente hinzufügen.

Öffnen Sie das Fenster \[Capture Visualiser Settings\] (entweder per Doppelklick auf
[\<View / Open\>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster), oder durch einen Klick auf den
Kontext-Button \{Open Settings\} im Capture Visualiser-Fenster). Klicken Sie
oben auf den Reiter **Stage**.

![Capture Visualiser Settings Window](/docs/images/Capture-Visualiser-Settings-Window.png)


Die Elemente **"Floor"** (Boden) und **"Back Wall"** (Rückwand) sind bereits
eingerichtet. Klickt man links unten auf das \{+\} (Pluszeichen), so
können weitere Objekte hinzugefügt werden.

Klicken Sie links auf eines der vorhandenen Objekte, so können seine
Eigenschaften mit den Fadern und Input-Boxen rechts bearbeitet werden:
so können Sie die Objekte positionieren und in der Größe verändern.
Ebenso können Sie rechts oben Farbe und Bezeichnung der Objekte
verändern.

Geräte/Fixtures hinzufügen und einrichten
-----------------------------------------
Ist die Funktion "Auto Update" aktiviert (zu finden auf dem Reiter
**Show** im Fenster **Capture Settings**), 
so werden Geräte beim Patchen in der Titan-Software automatisch zur 
Capture-Bühne hinzugefügt.

Wird eine Show aus einer früheren Titan-Version [geladen](../titan-basics/loading-and-saving-shows.md#laden-einer-show), so werden die
Geräte/Fixtures **nicht** automatisch zu Capture hinzugefügt. Dazu ist
zunächst ein [Updaten der Personalities](../patching/changing-the-patch.md#bereits-gepatchte-personalities-aktualisieren) erforderlich: \<Patch\> \[Edit
Fixtures\] \[Update Personality\] \[Update All\]. Auch ein Gerätetausch ([Exchange Fixtures](../patching/changing-the-patch.md#geräte-austauschen)) kann helfen.

Geräte werden, sobald sie in Capture vorhanden sind, mit den Rädern
(Encodern) positioniert. Wählen Sie dazu [ein oder mehrere Geräte oder
ein Gerätegruppe](../controlling-fixtures/using-the-select-buttons-and-wheels.md#dimmer-und-geräte-zum-steuern-auswählen) aus und drücken Sie [\<Locate\>](../controlling-fixtures/using-the-select-buttons-and-wheels.md#geräte-auf-startposition-setzen-locate). Mit dem Kontext-Button
\{Position - Orientation\} wird die Steuerung für Position und
Orientierung der jeweils ausgewählten Geräte auf die Wheels gelegt. *Das
Gleiche passiert, wenn man den Rad-Modus mit der Menütaste G auf „Räder
= Visualiser" schaltet.*

Wählen Sie mit den Attribut-Tasten **Position**, so können Sie nun die
X/Y/Z-Position der gewählten Fixtures einstellen. Sind mehrere Geräte
gewählt, so lassen sich mit der \<Fan\>-Taste oder der Option
\{Scale-Fan\} die Geräte gleichmäßig verteilen/auffächern. Auch die
anderen Optionen der Fan-Funktion [(Split, Curve, Group)](../controlling-fixtures/using-the-select-buttons-and-wheels.md#fan-modus) funktionieren
wie gewohnt.

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

Klickt man nochmals auf **Position**, so schalten die Encoder auf
Orientation. Damit können die Geräte um die X/Y/Z-Achse
gedreht/geschwenkt werden. Auch hierbei kann der [Fan-Modus](../controlling-fixtures/using-the-select-buttons-and-wheels.md#fan-modus) verwendet
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

![gimbal](/docs/images/Gimbal.jpeg)\
*Illustration by MathsPoetry*

Betätigen Sie **Position** ein drittes Mal, so können Sie die Rotation
verändern. Sind nur einzelne Geräte ausgewählt, hat das die gleiche
Wirkung wie Orientation. Sind dagegen mehrere Geräte angewählt, so
rotiert die Gruppe als Ganzes um ihren Mittelpunkt.

>Es empfiehlt sich, zunächst die Geräte im Tilt etwas aus der Mitte zu fahren, 
so dass man beim Ändern der Orientierung sieht, wohin man gerade dreht. 
Außerdem empfiehlt es sich, zumindest ein richtiges Gerät zum Vergleich 
anzuschließen, um zu überprüfen, dass alle Richtungen und Positionierungen
im richtigen Sinn erfolgen. 

Kameras einrichten (Ansichten)
------------------------------

Es stehen vier Kameras - unabhängige Ansichten - zur Verfügung, wobei
weitere hinzugefügt werden können.

Die entsprechenden Optionen stehen über das Kontext-Menü zur
Verfügung.

![Capture Visualiser Workspace Window Context Menu](/docs/images/Capture-Visualiser-Workspace-Window-Context-Menu.png)

Die Steuerung der Kameras erfolgt im Fenster [Capture Visualiser Settings](#setting-up-the-stage-and-rigging): zum Öffnen drücken Sie zweimal auf 
\<View / Open\> und wählen \[Capture Settings\] von den Buttons,
oder Sie verwenden den Kontext-Button \{Open Settings\} des Capture-Fensters.

Die Steuerung der Kameras erfolgt ebenfalls im Fenster **Capture Visualiser Settings** auf dem Reiter 'Cameras'.

Mit den vier Schaltflächen oben lassen sich die verschiedenen Kameras
umschalten *(siehe unten)*; klickt man rechts auf das \{+\}, kann man weitere Kameras
hinzufügen.

![Camera movements in Capture Visualiser Workspace Window](/docs/images/Camera-movements-in-Capture-Visualiser-Workspace-Window.png)

Der obere Button der linken Spalte schaltet zwischen der Ansicht mit
einer oder mit vier Kameras um. Ist die Vierer-Ansicht aktiv, so
schalten die vier Buttons darunter zwischen den einzelnen Teilansichten
um.

Mit der linken Fläche kann man die Kamera **rechts/links** sowie nach
**vorn/hinten** positionieren.

Mit der mittleren Fläche verschiebt man die Kamera nach **oben/unten**.

Rechts kann man die Kamera drehen und schwenken; der jeweilige Modus wir
mit den Buttons darunter gewählt:

-   **Rotate:** dreht die Kamera nach links/rechts/oben/unten

-   **Orbit:** schwenkt die Kamera im Kreis um die Bühne, wobei sie stets
    auf den gleichen Punkt ausgerichtet bleibt.

Klickt man auf den Kontext-Button \{Move Camera\}, so kann man die
Kamera mit den Rädern bewegen sowie im Menü **Set Coordinates** 
die Position/Rotation numerisch eingeben.

Klickt man auf den Kontext-Button \{Rotate Camera\} oder \{Orbit
Camera\}, so kann man die Kamera mit den Rädern drehen/schwenken, sowie
die Rotation numerisch eingeben.

Capture Darstellungs-Optionen
-----------------------------

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