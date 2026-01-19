---
id: shape-generator
title: Der Shape-Generator
sidebar_label: Der Shape-Generator
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

<Video videoId="oTo6FxHD02o" title="Using Shape Generator" />

Ein Shape ist eine automatische Folge von Werten, die verschiedene
Attribute eines Gerätes modulieren kann. Ein Kreis-Shape (circle) etwa,
angewendet auf Pan und Tilt, sorgt für eine Kreisbewegung des Gerätes.
Dabei lässt sich das Zentrum des Kreises, die Größe sowie die
Geschwindigkeit der Bewegung beeinflussen.

Shapes sind besonders eindrucksvoll, wenn die auf mehrere Geräte
angewandt werden. Dabei kann ein Shape auf mehreren Geräte gleichzeitig
oder aber mit einem Versatz laufen (hier **Spread** oder **Phase** genannt), womit man rasch z.B. Welleneffekte
erstellen kann.

Außer Positions-Shapes gibt es eine große Anzahl weiterer Shapes. Diese
sind jeweils pro Attribut definiert, etwa für Farbe, Dimmer, Fokus usw.

Außerdem gibt es die Funktion **Mask FX**, mittels derer sich laufende
Shapes stoppen lassen. Läuft etwa auf einigen Geräten ein Kreis-Shape,
und wird dann ein Cue aufgerufen, in dem auf ein paar der Geräte ein
'Position Mask-Shape' abgespeichert ist, so beenden diese Geräte ihre
Kreisbewegung. Das ist hilfreich etwa beim Verändern von Cues während
des Showablaufs. Details dazu siehe [Mask FX](shape-generator.md#masking-shapes-using-mask-fx).

![Capture Visualiser with a shape running across fixtures](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures.png)

## Einen Shape erstellen

Wird ein Shape ausgewählt, so wird dieser auf die zuvor angewählten
Geräte angewendet.

1. [Wählen Sie die Geräte](../controlling-fixtures.md#dimmer-und-geräte-zum-steuern-auswählen), auf die der Shape angewendet werden soll.
2. Im Hauptmenü drücken Sie <Keys.SoftKey>Shape and Effects</Keys.SoftKey>, dann <Keys.SoftKey>Shape Generator</Keys.SoftKey>.
3. Klicken Sie <Keys.SoftKey>Create</Keys.SoftKey>, um einen neuen Shape zu starten.<br/>
  ![Shape Generator selecting a category of new shape](/docs/images/Shape-Generator-selecting-a-category-of-new-shape.png)
4. Betätigen Sie eine <Keys.SoftKey>Menütaste</Keys.SoftKey>, um den Shape nach Attribut
auszuwählen, oder drücken Sie <Keys.SoftKey>All Shapes</Keys.SoftKey> für eine Gesamtliste.
5. Klicken Sie im **Shapes-Fenster** auf den gewünschten Shape, oder
benutzen Sie eine <Keys.SoftKey>Menütaste</Keys.SoftKey> zur Auswahl. Ebenso kann man mit
der Tastatur einen Suchbegriff für einen bestimmten Shape eingeben, um
die Suche einzugrenzen.
6. Der Shape wird auf die ausgewählten Geräte angewendet.

-   Wird das **Shapes-Fenster** geöffnet, so bleibt es ständig offen, und
    man muss nicht immer wieder <Keys.SoftKey>Shape Generator</Keys.SoftKey> drücken, um einen
    Shape abzurufen. Dieses Fenster zeigt nur Shapes, die auf die
    gewählten Geräte anwendbar sind. Wird ein Attribut ausgewählt, so
    wird die Liste der verfügbaren Shapes weiter verkürzt auf Shapes,
    die für dieses Attribut verfügbar sind. Zur Anzeige aller Shapes
    wählen Sie <Keys.HardKey>Dimmer</Keys.HardKey>.

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

-   Zur Anzeige der momentan laufenden Shapes drücken Sie <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, 
    dann <Keys.SoftKey>Shape Generator</Keys.SoftKey> und dann <Keys.SoftKey>Edit</Keys.SoftKey>.

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
    -   &nbsp;<Keys.SoftKey>Run on Sub Fixtures (Group)</Keys.SoftKey> - die Zellen werden gemäß ihrer Anordnung
    (Layout-Editor für die jeweilige Gruppe) angesteuert.

-   Jeder Shape ist für ein spezifisches Attribut konzipiert. Verfügt
    ein Gerät nicht über dieses Attribut, so führt auch der Shape zu
    keinem sichtbaren Effekt.

-   Jeder Shape hat eine Standardgröße und -geschwindigkeit *(wird in
    der Shape-Datei definiert)*.

> Wird ein 'Rainbow'-Farbshape verwendet, so müssen die Farb-Grundwerte (CMY oder RGB) auf **50%** gestellt werden, um sämtliche Farbkombinationen zu erzielen..

## Ändern von Größe und Geschwindigkeit

Nachdem ein Shape gestartet ist, lassen sich schnell und einfach Größe
und Geschwindigkeit ändern. Wenn im Display oberhalb der Encoder 'Spread'
und 'Offset' steht, so drücken Sie Taste E <Keys.SoftKey>Adjust Speed, Size and Spread</Keys.SoftKey>.

![Shape Wheel Attribute Controls for Speed, Size & Spread](/docs/images/Shape-Wheel-Attribute-Controls-for-Speed-Size-Spread.png)

-   Der linke Encoder steuert die Geschwindigkeit des Shapes.

-   Der mittlere Encoder steuert die Größe des Shapes.

-   Größe und Geschwindigkeit werden im Display angezeigt.

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

## Ändern der Verteilung eines Shapes (mehrere Geräte)

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
2. Steuern Sie den **Spread** (die Verteilung) mit dem rechten Encoder, 
oder betätigen Sie <Keys.SoftKey>Adjust Spread, Phase and Offset</Keys.SoftKey> und benutzen das 
mittlere Rad, um den Geräteversatz (Phase) einzustellen *(rechtes Rad 
beim Pearl Expert)*.

Spread = **12** *(Phase = 30 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 12](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-12.png)

Spread = **6** *(Phase = 60 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 6](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-6.png)

Spread = **2** *(Phase = 180 degrees)*:

![Capture Visualiser with a shape running across fixtures with spread of 2](/docs/images/Capture-Visualiser-with-a-shape-running-across-fixtures-with-spread-of-2.png)

Im Display wird die **Phase** in ° (Grad) angezeigt. So sorgt etwa
Phase=180° für eine Wiederholung jedes zweiten Gerätes, 90° jedes
vierten Gerätes, 60° jedes sechsten Gerätes usw.

&nbsp;**Offset** ist der Startwert des Shapes im Vergleich zu anderen gleichzeitig
laufenden Shapes. *Wenn beispielsweise gleichzeitig ein Shape auf Cyan
und einer auf Magenta läuft, um einen Farbmix zu erzielen, so möchte man
vielleicht mit Cyan auf 100% und Magenta auf 0 beginnen, um den gesamten
Farbbereich abzudecken. Dazu stellt man einen der beiden Shapes auf
einen ‚Phase Offset' von 180°.* Ohne diese Einstellung würden beide
Shapes gleichzeitig 0 bzw. 100% erreichen.

>   Nach dem Ändern von Offset oder Phase empfiehlt es sich, den Shape 
	**neu zu starten**, damit alle Shapes neu synchronisiert werden. Dazu gibt 
	es im Menü 'Edit Shape' die Menütaste <Keys.SoftKey>Restart Shapes</Keys.SoftKey>.

## Shape-Richtung

Die Menüfunktion <Keys.SoftKey>Direction</Keys.SoftKey> erlaubt es, die Richtung des Shapes
zu ändern; hat man ein [2D-Layout](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) erstellt, so kann man abhängig vom
Shape eine gezielte Bewegung erreichen.

Mit der Taste <Keys.HardKey>Menu Latch</Keys.HardKey> lässt sich das "Shape Direction"-Menü
einrasten, so dass man schnell die verschiedenen Einstellungen
durchprobieren kann.

## Beat und Cycles (Durchläufe)

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

Klickt man auf den Wert des **linken Encoders** im Display oder betätigt die <Keys.HardKey>@A</Keys.HardKey>-Taste, 
so kann man die gewünschte Zahl direkt eingeben; außerdem
werden zwei weitere Optionen angeboten: mit <Keys.SoftKey>Match to Spread</Keys.SoftKey> (an den
Spread anpassen) wird der Beat Count auf den Spread-Wert des Shapes
gesetzt, was vor allem bei Dimmer-Shapes sinnvoll ist. Klickt man
dagegen auf <Keys.SoftKey>Custom</Keys.SoftKey>, so kann man einen numerischen Wert eingeben.

### Cycles

Mit Cycles (Durchläufe) stellt man ein, wie oft der Shape laufen soll.
Vorgabewert ist Unendlich (∞), womit der Shape läuft, bis er wieder
gestoppt wird. Ändert man dies auf eine andere Zahl, so läuft der Shape
nur die vorgegebene Anzahl von Zyklen und hält dann an.

Zum direkten Eingeben eines Zahlenwertes drücken Sie die Taste <Keys.HardKey>@B</Keys.HardKey> oder 
klicken auf den Wert des **mittleren Encoder** im Bildschirm. 
Eine Eingabe von Dezimalzahlen (z.B. 1.5) sorgt dafür, dass der letzte 
Durchlauf nur zum Teil durchgeführt wird und dann stehenbleibt.

## Verwenden von Shapes in Cues

Wird ein Shape in einen Cue (auf ein Playback) gespeichert, so lässt
sich mit den [Options](../cues/playback-options.md) des Playbacks einstellen, 
dass der Fader z.B. die Größe und/oder Geschwindigkeit
des Shapes steuert; ebenso lassen sich [Master (Size, Speed, BPM)](../running-the-show/playback-controls.md#speed--und-size-master) für die
Steuerung verwenden.
Bei Dimmershapes wird per default die Größe des Shapes mit dem Fader gesteuert.

Shapes lassen sich auch in Cuelisten verwenden - in [Tracking von Shapes in Cuelisten](../cue-lists/creating-a-cue-list.md#tracking-von-shapes-in-cuelisten) ist beschrieben, wie sich die Shapes in diesem Fall verhalten.

Zum Editieren aktuell laufender Shapes siehe [Ändern eines gerade laufenden Shapes](../effects/editing-shapes-and-effects#ändern-eines-gerade-laufenden-shapes).

### Shape-Verhalten: Overlay oder LTP

Shapes und Keyframe-Shapes, die in Playbacks gespeichert sind, können entweder als **Overlay** arbeiten (per default), also andere programmierte Attribute überlagern, oder wie gewohnt als **LTP**-Werte, werden also ihrerseits von später gestarteten Playbacks überlagert/überschrieben. Dafür gibt es die Einstellung **Shape Behavior**.

Die globale Einstellung des Shape-Verhaltens erfolgt in den [Benutzereinstellungen](../system-settings/user-settings.md#shape-behaviour). Dies kann individuell für einzelne Playbacks in deren [Optionen](../cues/playback-options.md#shape-behaviour) anders eingestellt werden.

-   &nbsp;<Keys.SoftKey>Overlay</Keys.SoftKey> (Voreinstellung) ist das von Shapes gewohnte 
    Verhalten. Ein aktiver Shape oder Keyframe-Shape hat Priorität über die
    betreffenden Geräte/Attribute und läuft, bis er beendet wird. Läuft
    z.B. ein Keyframe-Shape, der die Farbe der Geräte verändert, und
    startet man einen weiteren Colour-Cue, so ist dies zunächst nicht
    sichtbar. Ebenso ist zunächst keine Änderung zu sehen, wenn man etwa
    Paletten aufruft oder die Farbe anderweitig verändert. Erst wenn der
    Shape beendet wird, werden die im Hintergrund vorgenommenen
    Änderungen aktiv. Auf diesem Wege lässt sich einfach bei laufendem
    Keyframe-Shape ein neues Bild einstellen, auf das dann nahtlos
    übergeblendet werden kann.

-   &nbsp;<Keys.SoftKey>LTP</Keys.SoftKey> funktioniert dagegen eher wie ein Chaser. Nachträglich
    gestartete Änderungen auf der gleichen Priorität überschreiben den
    Keyframe-Shape. Startet man also z.B. bei laufendem Colour-Keyframe-Shape
    (Priorität normal) ein anderes Colour-Playback (ebenfalls Priorität normal), 
    so blockiert dieses den Keyframe-Shape. Deaktiviert man das Playback, so ist 
    wieder der Keyframe-Shape aktiv. Gleiches gilt beim Aufruf von Paletten, wobei in diesem
    Fall der Keyframe-Shape neu gestartet werden muss. Zu beachten ist,
    dass Quick Palettes mit 'Priority=High' funktionieren. Stellt man
    also wiederum das Playback mit dem Keyframe-Shape auf
    'Priority=High' oder höher, verhindert man das Überschreiben durch
    Quick Palettes. Ebenso kann man 'Priority=Very High' wählen und
    damit verhindern, dass der Inhalt des Programmers den Keyframe-Shape
    überschreibt. Details zur Priorität siehe [Priority](../cues/playback-options.md#priority).

## Shapes stoppen mit Mask FX

Mit der Funktion **Mask FX** können Playbacks programmiert werden, die
laufende Shapes und Keyframe-Shapes auf einzelnen oder allen Geräten
stoppen.

Um einen Mask Effekt zu erzeugen, gehen Sie wie folgt vor:

1.  Drücken Sie <Keys.SoftKey>Shapes und Effekte</Keys.SoftKey>, dann <Keys.SoftKey>Mask Fx</Keys.SoftKey>
    (Diamond 9 und Diamond 7 haben eigens eine Taste <Keys.HardKey>Mask FX</Keys.HardKey> - drücken Sie diese zweimal, um alle Attribute in der Maske zu aktivieren).
2.  Die Attributbank-Buttons flashen (P, C etc.). Wählen Sie die
    Attribute, für die Shapes maskiert werden sollen.
3.  Sind keine Geräte angewählt, so wirkt sich dies auf alle Geräte aus.
    Sind dagegen Geräte gewählt, so werden nur diese beeinflusst.
4.  Wählen Sie <Keys.SoftKey>Create Mask Shape</Keys.SoftKey>. (Mit <Keys.SoftKey>Create Mask FX</Keys.SoftKey> lassen
    sich sowohl Shapes als auch Pixelmaps stoppen).
5.  Wird dies in ein Playback gespeichert, so kann man mit diesem
    laufende Effekte stoppen.

-   Mit <Keys.SoftKey>Clear Mask from Programmer</Keys.SoftKey> werden Mask FX-Effekte wieder
	gelöscht.

-   Diese Funktion ersetzt die früheren Block Shapes und Block Effekte.
	Werden ältere Shows mit solchen Effekten geladen, so werden diese jetzt
	als Mask Fx angezeigt.

## Speichern von Shapes in Paletten

Es lassen sich auch Paletten mit Shapes erstellen. Das ist z.B. sehr
hilfreich mit verschiedenen Spread- oder Size-Einstellungen. Siehe
[Effekt-Paletten](../palettes/creating-palettes.md#erstellen-einer-effekt-palette).
