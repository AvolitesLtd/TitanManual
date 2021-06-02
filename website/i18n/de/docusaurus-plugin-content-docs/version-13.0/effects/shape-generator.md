---
id: shape-generator
title: Shape Generator
sidebar_label: Shape Generator
original_id: shape-generator
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

<Video videoId="oTo6FxHD02o" title="Using Shape Generator" />

Ein Shape ist eine automatische Folge von Werten, die verschiedene
Attribute eines Gerätes modulieren kann. Ein Kreis-Shape (circle) etwa,
angewendet auf Pan und Tilt, sorgt für eine Kreisbewegung des Gerätes.
Dabei lässt sich das Zentrum des Kreises, die Größe sowie die
Geschwindigkeit der Bewegung beeinflussen.

Außer Positions-Shapes gibt es eine große Anzahl weiterer Shapes. Diese
sind jeweils pro Attribut definiert, etwa für Farbe, Dimmer, Fokus usw.

Eine weitere Kategorie ist der <strong>Block Shape</strong>. Dieser Shape
blockiert andere Shapes und verhindert deren Ablaufen. Läuft etwa auf
einigen Geräten ein Kreis-Shape, und wird dann ein Cue aufgerufen, in
dem auf ein paar der Geräte ein ‚Block Pan/Tilt'-Shape abgespeichert
ist, so beenden diese Geräte ihre Kreisbewegung. Das ist hilfreich etwa
beim Verändern von Cues während des Showablaufs, insbesondere bei
gleichzeitiger Nutzung der [Priorität der Playbacks](../cues/playback-options.md#priority).

Wird ein Shape auf mehr als ein Gerät angewendet, so kann das entweder
simultan erfolgen, oder mit einem Versatz zwischen den Geräten, so dass
Effekte wie eine *'Welle'* oder schlicht ein gewolltes *'Durcheinander'*
entstehen. Der Versatz wird als <strong>Phase</strong> des Shapes bezeichnet.

![Capture Visualiser with a shape running across fixtures](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures.png)

Einen Shape erstellen
---------------------

Wird ein Shape ausgewählt, so wird dieser auf die zuvor angewählten
Geräte angewendet.

1. [Wählen Sie die Geräte](../controlling-fixtures/using-the-select-buttons-and-wheels.md#dimmer-und-geräte-zum-steuern-auswählen), auf die der Shape angewendet werden soll.

2. Im Hauptmenü drücken Sie <Keys.SoftKey>Shape and Effects</Keys.SoftKey>, dann \[Shape
Generator\].

3. Klicken Sie <Keys.SoftKey>Create</Keys.SoftKey>, um einen neuen Shape zu starten.
![Shape Generator selecting a category of new shape](/docs/images/Shape-Generator-selecting-a-category-of-new-shape.png)

4. Betätigen Sie eine <Keys.SoftKey>Menütaste</Keys.SoftKey>, um den Shape nach Attribut
auszuwählen, oder drücken Sie <Keys.SoftKey>All Shapes</Keys.SoftKey> für eine Gesamtliste.

5. Klicken Sie im <strong>Shapes-Fenster</strong> auf den gewünschten Shape, oder
benutzen Sie eine <Keys.SoftKey>Menütaste</Keys.SoftKey> zur Auswahl. Ebenso kann man mit
der Tastatur einen Suchbegriff für einen bestimmten Shape eingeben, um
die Suche einzugrenzen.

6. Der Shape wird auf die ausgewählten Geräte angewendet.

---

-   Wird das <strong>Shapes-Fenster</strong> geöffnet, so bleibt es ständig offen, und
    man muss nicht immer wieder <Keys.SoftKey>Shape Generator</Keys.SoftKey> drücken, um einen
    Shape abzurufen. Dieses Fenster zeigt nur Shapes, die auf die
    gewählten Geräte anwendbar sind. Wird ein Attribut ausgewählt, so
    wird die Liste der verfügbaren Shapes weiter verkürzt auf Shapes,
    die für dieses Attribut verfügbar sind. Zur Anzeige aller Shapes
    wählen Sie das Attribut ‚Dimmer' aus.
    \
    ![Shapes Workspace Window](/docs/images/Shapes-Workspace-Window.png)

-   Der Ausgangswert für einen Shape ist die jeweilige momentane
    Einstellung des Gerätes; *so wird z.B. ein Kreis-Shape um die
    momentane Pan/Tilt-Position zentriert*.

-   Zum Ändern des Basiswerts eines Shapes (etwa das Zentrum eines
    Kreises) ändern Sie wie gewohnt die entsprechenden Attribute mit den
    Rädern. Ggf. stellt man dazu die Größe des Shapes auf null (siehe
    [nächster Abschnitt](#ändern-von-größe-und-geschwindigkeit)), um den Basiswert genau einstellen zu können.

-   Zum gleichzeitigen Abruf mehrerer Shapes wiederholen Sie einfach die
    o.g. Prozedur. Ebenso lassen sich auch mehrere Shapes auf das
    gleiche Gerät anwenden, womit weitere interessante Effekte erzielt
    werden können.

-   Zur Anzeige der momentan laufenden Shapes drücken Sie \[Shapes and
    Effects\], dann <Keys.SoftKey>Shape Generator</Keys.SoftKey> und dann <Keys.SoftKey>Edit</Keys.SoftKey>.

-   Wird der gleiche Shape auf zwei verschiedene Gruppen von Geräten
    angewendet, so erscheint er doppelt in der Liste. Damit lassen sich
    die beiden Gruppen getrennt voneinander beeinflussen, etwa für
    unterschiedliche Richtungen, Geschwindigkeiten etc. ([s.u.](#ändern-von-größe-und-geschwindigkeit))

-   Hat das ausgewählte Gerät Teilgeräte (Zellen, Subfixtures), so kann
    man wählen, ob der Shape auf dem Hauptgerät laufen soll und alle
    einzelnen Zellen synchron laufen, oder ob die Zellen einzeln
    angesteuert werden. Es gibt folgende Optionen:
    -   <Keys.SoftKey>Run on Super Fixtures</Keys.SoftKey> - Zellen werden ignoriert, die Geräte werden im
    Ganzen angesteuert
    -   <Keys.SoftKey>Run on Sub Fixtures (Linear)</Keys.SoftKey> - die Zellen werden gemäß ihrer internen
    Nummerierung angesteuert
    -   <Keys.SoftKey>Run on Sub Fixtures (Group)</Keys.SoftKey> - die Zellen werden gemäß ihrer Anordnung
    (Layout-Editor für die jeweilige Gruppe) angesteuert.

-   Jeder Shape ist für ein spezifisches Attribut konzipiert. Verfügt
    ein Gerät nicht über dieses Attribut, so führt auch der Shape zu
    keinem sichtbaren Effekt.

-   Jeder Shape hat eine Standardgröße und -geschwindigkeit *(wird in
    der Shape-Datei definiert)*.

> Wird ein 'Rainbow'-Farbshape verwendet, so müssen die Farb-Grundwerte (CMY oder RGB) auf <strong>50%</strong> gestellt werden, um sämtliche Farbkombinationen zu erzielen..

Ändern von Größe und Geschwindigkeit
------------------------------------

Nachdem ein Shape gestartet ist, lassen sich schnell und einfach Größe
und Geschwindigkeit ändern. Wenn im Display oberhalb der Encoder 'Spread'
und 'Offset' steht, so drücken Sie Taste E \[Adjust Speed, Size and
Spread\].

![Shape Wheel Attribute Controls for Speed, Size & Spread](/docs/images/Shape-Wheel-Attribute-Controls-for-Speed-Size-Spread.png)

-   Der linke Encoder steuert die Geschwindigkeit des Shapes.

-   Der mittlere Encoder steuert die Größe des Shapes. *(Pearl Expert: rechter Encoder)*

-   Größe und Geschwindigkeit werden im Display angezeigt.

---

Weitere Dinge über Größe und Geschwindigkeit:

-   Laufen mehrere Shapes, so sind die Encoder dem zuletzt geladenen
    zugeordnet. Die Parameter jedes einzelnen laufenden Shapes lassen
    sich mit der 'Edit Shape'-Funktion einstellen, siehe
    [Ändern von Shapes mit Include](editing-shapes-and-effects.md#ändern-von-shapes-mit-include).

-   Die Minimalgröße ist Null. Dies lässt den Shape *"verschwinden"*, und
    das Gerät kehrt zu den vorherigen Einstellungen zurück. Dennoch ist
    der Shape noch aktiv.

-   Sobald ein Shape in einem Cue gespeichert ist, können Größe und/oder
    Geschwindigkeit entweder mit dem Fader des Cues gesteuert werden,
    oder man legt entsprechende [Masterfader](../running-the-show/playback-controls.md#speed--und-size-master) an und verwendet diese (Rate-Master, BPM-Master, Size-Master).

Ändern der Verteilung eines Shapes (mehrere Geräte)
---------------------------------------------------

Shapes wirken interessanter (und eindrucksvoller), wenn sie auf mehrere
Geräte angewendet werden. Titan erlaubt es, den Spread (Verteilung)
eines Shapes zwischen mehreren Geräten einzustellen. Ebenso lässt sich
die Phasenlage (Versatz) einstellen: ein anderer Ansatz für die gleiche
Eigenschaft.

Die Reihenfolge, in der der Shape auf den ausgewählten Geräten abläuft,
hängt von der Reihenfolge ab, in der die Geräte beim Abruf des Shapes
ausgewählt wurden. Mittels <Keys.SoftKey>Fixture Order</Keys.SoftKey> lässt sich die
Geräte-Reihenfolge innerhalb des Shape-Menüs ändern.

1. Wenn der rechte Encoder nicht gerade den Spread steuert, drücken Sie
auf <Keys.SoftKey>Adjust Speed, Size and Spread</Keys.SoftKey>

2. Steuern Sie den <strong>Spread</strong> (die Verteilung) mit dem rechten Encoder, 
oder betätigen Sie <Keys.SoftKey>Adjust Spread, Phase and Offset</Keys.SoftKey> und benutzen das 
mittlere Rad, um den Geräteversatz (Phase) einzustellen *(rechtes Rad 
beim Pearl Expert)*.

Spread = <strong>12</strong> *(Phase = 30 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 12](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-12.png)

---

Spread = <strong>6</strong> *(Phase = 60 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 6](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-6.png)

---

Spread = <strong>2</strong> *(Phase = 180 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 2](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-2.png)

Im Display wird die <strong>Phase</strong> in ° (Grad) angezeigt. So sorgt etwa
Phase=180° für eine Wiederholung jedes zweiten Gerätes, 90° jedes
vierten Gerätes, 60° jedes sechsten Gerätes usw.

<strong>Offset</strong> ist der Startwert des Shapes im Vergleich zu anderen gleichzeitig
laufenden Shapes. *Wenn beispielsweise gleichzeitig ein Shape auf Cyan
und einer auf Magenta läuft, um einen Farbmix zu erzielen, so möchte man
vielleicht mit Cyan auf 100% und Magenta auf 0 beginnen, um den gesamten
Farbbereich abzudecken. Dazu stellt man einen der beiden Shapes auf
einen ‚Phase Offset' von 180°.* Ohne diese Einstellung würden beide
Shapes gleichzeitig 0 bzw. 100% erreichen.

Shape-Richtung
--------------

Die Menüfunktion <Keys.SoftKey>Direction</Keys.SoftKey> erlaubt es, die Richtung des Shapes
zu ändern; hat man ein [2D-Layout](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) erstellt, so kann man abhängig vom
Shape eine gezielte Bewegung erreichen.

Mit der Taste <Keys.HardKey>Menu Latch</Keys.HardKey> lässt sich das "Shape Direction"-Menü
einrasten, so dass man schnell die verschiedenen Einstellungen
durchprobieren kann.

Beat und Cycles (Durchläufe)
----------------------------

Die Option <Keys.SoftKey>Adjust Beat and Cycles</Keys.SoftKey> steuert, wie das generelle Tempo
des Programmers das Tempo des Shapes beeinflusst und wie oft dieser
läuft.

### Beats

Vorgabewert ist <Keys.SoftKey>Beats=1</Keys.SoftKey>: jeder Beat entspricht einem kompletten
Durchlauf des Shapes, wie in früheren Software-Versionen. Höhere Werte
dagegen sorgen dafür, dass das Tempo des Shapes entsprechend reduziert
wird. Mit z.B. <Keys.SoftKey>Beats=4</Keys.SoftKey> lässt sich erreichen dass für einen
kompletten Shape-Durchlauf 4 Beats erforderlich sind -- der Shape läuft
langsamer.

Klickt man auf den Wert des <strong>linken Encoders</strong> im Display oder betätigt die jeweilige
@-Taste, so kann man die gewünschte Zahl direkt eingeben; außerdem
werden zwei weitere Optionen angeboten: mit <Keys.SoftKey>Match to Spread</Keys.SoftKey> (an den
Spread anpassen) wird der Beat Count auf den Spread-Wert des Shapes
gesetzt, was vor allem bei Dimmer-Shapes sinnvoll ist. Klickt man
dagegen auf <Keys.SoftKey>Custom</Keys.SoftKey>, so kann man einen numerischen Wert eingeben.

### Cycles

Mit Cycles (Durchläufe) stellt man ein, wie oft der Shape laufen soll.
Vorgabewert ist Unendlich (∞), womit der Shape läuft, bis er wieder
gestoppt wird. Ändert man dies auf eine andere Zahl, so läuft der Shape
nur die vorgegebene Anzahl von Zyklen und hält dann an.

Zum direkten Eingeben eines Zahlenwertes drücken Sie die entsprechende
@-Taste oder klicken auf den Wert des <strong>mittleren Encoder</strong> im Bildschirm. 
Eine Eingabe von Dezimalzahlen (z.B. 1.5) sorgt dafür, dass der letzte 
Durchlauf nur zum Teil durchgeführt wird und dann stehenbleibt.

Verwenden von Shapes in Cues
----------------------------

Wird ein Shape in einen Cue (auf ein Playback) gespeichert, so lässt
sich mit den [Playback-Optionen](../cues/playback-options.md) einstellen,  
dass der Fader z.B. die Größe und/oder Geschwindigkeit
des Shapes steuert; ebenso lassen sich [Master (Size, Speed, BPM)](../running-the-show/playback-controls.md#speed--und-size-master) für die
Steuerung verwenden. 

Shapes lassen sich auch in Cuelisten verwenden - in [Tracking von Shapes in Cuelisten](../cue-lists/creating-a-cue-list.md#tracking-von-shapes-in-cuelisten) ist beschrieben, wie sich die Shapes in diesem Fall verhalten.

Laufende Shapes lassen sich zum Editieren mittels <Keys.SoftKey>Select Shape</Keys.SoftKey>
auswählen - dies befindet sich im Menü <Keys.SoftKey>Edit</Keys.SoftKey> des Shape Generators.

Speichern von Shapes in Paletten
--------------------------------

Es lassen sich auch Paletten mit Shapes erstellen. Das ist z.B. sehr
hilfreich mit verschiedenen Spread- oder Size-Einstellungen. Siehe
[Effekt-Paletten](../palettes/creating-palettes.md#erstellen-einer-effekt-palette).
