---
id: version-14.0-key-frame-shapes
title: Key Frame Shapes
sidebar_label: Key Frame Shapes
original_id: key-frame-shapes
---

Keyframe-Shapes gestatten es, eigene Sequenzen als Effekte zu nutzen.
Dazu werden mehrere Attribut-Einstellungen gespeichert, zwischen denen
dann gewechselt und übergeblendet wird.

Einen Keyframe-Shape erzeugen
-----------------------------

[](https://youtu.be/1nvLaipivhM?t=20 "Key Frame Shapes")

Ein Keyframe-Shape wird so ähnlich wie ein [Chaser](../chases.md) erstellt, ist aber
wesentlich flexibler, den es lässt sich sowohl der Überblend-Verlauf
bestimmen als auch die Art der Aufteilung auf mehrere Geräte. Ferner
lassen sich Keyframe-Shapes auch sehr einfach z.B. in [Cuelisten](../cue-lists/creating-a-cue-list.md#tracking-von-shapes-in-cuelisten)
einbinden.

Die einzelnen Keyframes baut man entweder im **Channel (Kanal-) Modus**, indem man die
Geräte entsprechend einstellt und auf \[Add Frame\] klickt, oder im
**Quick Build**-Modus, bei dem automatisch ein neuer Frame angefügt wird,
sobald man eine [Palette](../palettes.md) oder einen
[Cue](../cues.md) anklickt. Mit der Schaltfläche \[Record Mode\]
kann man zwischen beiden Modi umschalten.

In diesem Beispiel bauen wir einen Keyframe-Shape für Farben. Man kann
aber Keyframe-Shapes für andere und auch für mehrere verschiedene
Attribute programmieren. Verwendet man dabei [Paletten](../palettes.md), 
so werden diese auch hier als Referenz gespeichert: ändert man später 
die Palette, so ändert sich auch der Shape.


1. Im Hauptmenü drücken Sie \[Shapes and Effects\], dann \[Key Frame
Shapes\].


2. Klicken Sie auf \[Create\], um einen neuen Keyframe-Shape zu
beginnen.

3. [Wählen Sie die gewünschten Geräte](../controlling-fixtures/using-the-select-buttons-and-wheels.md#dimmer-und-geräte-zum-steuern-auswählen) und stellen Sie die Farben für den ersten
Keyframe ein.

4. Klicken Sie auf \[Add Frame\]. Über dem ersten Playback-Fader wird
eine entsprechende Legende angezeigt *(schalten Sie dies mit \[Playbacks
Display Visible/Hidden\] ab, falls Sie das nicht wünschen oder z.B. im
Quick Build-Modus ein Playback auswählen möchten)*.\
![Key Frame Shape - creating an effect with colour key frames](/docs/images/Key-Frame-Shape-creating-an-effect-with-colour-key-frames.png)

5. Fügen Sie Schritte mit anderen Farben hinzu (jeweils mit \[Add
Frame\], bis alle gewünschten Schritte erstellt wurden.

6. Wenn Sie fertig sind, klicken Sie auf \[Finish Recording Frames\].

7. Im Effekt-Editor können Sie die Übergänge, die Überlappung und die
Verteilung auf mehrere Geräte (Spread) einstellen, siehe nachfolgendes
Bild.

8. [Speichern Sie den Shape in einen Cue](#einen-keyframe-shape-in-einen-cue-speichern), um ihn später zu verwenden.

---

-   Auch mit der \<Unfold\>-Taste können die Playbacks zwischen normaler
    Anzeige und Anzeige der Keyframes umgeschaltet werden.

-   Gibt man mit \[Frame Number\] die Nummer eines bereits bestehenden
    Frames ein, oder wählt man diesen über die Auswahltaste des
    Playbacks, so lässt sich der Frame mit \[Replace\] ersetzen sowie
    mit \[Delete\] löschen.

-   Ist der Shape nicht erkennbar, weil die Geräte dunkel sind, so
    lassen sich die Dimmerkanäle der verwendeten Geräte mit der
    Schaltfläche \{Sonne\} locaten.
	
Ändern von Shape-Parametern im Effekt-Editor
--------------------------------------------

Ist ein Keyframe-Shape komplett erstellt, so wird er im Effekt-Editor
angezeigt.

![Effect Editor Window with colour key frame shape](/docs/images/Effect-Editor-Window-with-colour-key-frame-shape.png)

Die Steuerelemente oben im linken Bereich beeinflussen den gesamten
Shape: Speed (Geschwindigkeit), Direction (Richtung unter Verwendung des [Gruppen-Layouts](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen)), [Phase/Spread](shape-generator.md#ändern-der-verteilung-eines-shapes-mehrere-geräte)
(Verteilung auf mehrere Geräte) und [Overlap](../cues/cue-timing.md#setting-fade-times-and-overlap-for-a-cue) (Überlappen benachbarter
Geräte).

Mit dem **Auge** oben links werden alle gerade angezeigten Shapes
*eingeklappt*, so dass man sich nur einzelne Shapes zum Bearbeiten
ausklappen kann, wenn mehrere Shapes laufen. Mit **Button mit dem
Movinglight** lässt sich die Auswahl der Geräte, auf denen der 
Keyframe-Shape läuft, verändern.

Im Hauptbereich rechts werden die Übergänge zwischen den einzelnen
Schritten dargestellt. Dies kann man einfach anklicken und ziehen, um
den Verlauf zu ändern. Der gelbe Pfeil ist der Phasenversatz
(Startposition) des gesamten Layers, den man ebenfalls einfach anklicken
und ziehen kann, um den Start relativ zu anderen Layern zu verschieben 
*(gleiches Ergebnis wie der Fader 'Phase Offset' unten)*.

### Steuerelemente für Shape und Layer

Zu Beginn *(oder sobald man links auf einen Layer klickt)* steuern die
Fader rechts unten jeweils einen einzelnen Layer.

![Effect Editor key frame controls for layer/effect](/docs/images/Effect-Editor-key-frame-controls-for-layer-effect.png)

Man kann auf die Schaltflächen rechts neben den Fadern klicken, um
direkt einen bestimmten Wert einzugeben oder den Wert mit den Wheels des
Pultes einzustellen. Zum Zurücksetzen dient jeweils ein Doppelklick auf
den Button oder die Funktion \[Reset to default value\] (erscheint,
sobald ein Button angeklickt wird).

Die Einstellung **Beats Per Cycle**, die genauso wie für normale Shapes
arbeitet (s.o.), stellt das Verhältnis von Beats (BPM) und der
Geschwindigkeit des Keyframe-Shapes ein. Vorgabewert ist auch hier 1:
jeder Beat entspricht einem kompletten Durchlauf des Effektes. Stellt 
man das z.B. auf 4, so dauert jeder Durchlauf vier Beats, der Shape 
läuft also langsamer. Damit lassen sich z.B. mehrere Shapes im passenden 
Verhältnis zueinander steuern. 

\[Custom\] erlaubt es, beliebige Werte einzugeben. Klickt man auf 
den numerischen Wert, so kann man entweder einen anderen 
Wert eingeben oder mit \[Reset to default value\] auf den Vorgabewert 
zurückschalten. Außerdem wird dabei der 'Beats per Cycle'-Wert mit dem
Encoder A verknüpft, so dass man diesen schnell ändern kann.\
Wählt man die Option \[Spread\], so wird der Beats-per-Cycle-Wert
an den Spread gebunden. Das ist oft bei Dimmer- und Bewegungs-Shapes 
gewünscht.\
Mit \[Keyframes\] schließlich wird pro Beat ein Keyframe weitergeschaltet.\
Jeder einzelne Keyframe-Shape und jeder einzelne Layer hat seine 
individuellen **Beats per Cycle**-Einstellungen. 

Mit **Cycles** (Durchläufe) stellt man ein, wie oft der Shape laufen soll.
Vorgabewert ist 0, womit der Shape läuft, bis er wieder gestoppt wird.
Ändert man dies auf eine andere Zahl (entweder für einen einzelnen Layer
oder für den ganzen Keyframe-Shape bzw. alle Layer in diesem), so läuft
der Shape nur die vorgegebene Anzahl von Zyklen und hält dann an. *So
kann man also für jeden Layer einzeln einstellen, wie oft der Effekt
laufen soll*.

Mit der Einstellung \[Phase Master\] kann die Phase eines Shapes durch
die Intensität eines Videolayers (eines Ai-Servers) gesteuert werden,
siehe [Synchronisieren eines Keyframe-Shapes zu Ai](../synergy/operating-synergy.md#phasensteuerung-von-keyframe-shapes-durch-ai).

### Parameter für einzelne Frames

Klickt man links auf einen einzelnen Keyframe, so lassen sich dessen
Parameter einstellen.

![Effect Editor key frame controls for individual key frame step](/docs/images/Effect-Editor-key-frame-controls-for-individual-key-frame-step.png)

-   Mit dem Regler „Start Time" lässt sich das **Timing** verändern (genauso
    wie durch Ziehen in der oberen Ablauf-Darstellung).

-   **Frame A Min** / **Frame B Max**: Limitierung des Effektes. *Hat man z.B.
    einen 100% Flash programmiert, lässt sich dieser etwa auf 80% reduzieren.*

-   **Mid point**: wo ist die Mitte des Überblend-Weges

-   **Width**: ähnlich der Einstellung Crossfade bei Chasern. Stellt man
    Width auf 20%, so wird in nur 20% der Zeit übergeblendet, und bei
    80% der Zeit ändert sich nichts.

Der Kurvenverlauf des Überblendens lässt sich mit der
Kurven-Schaltfläche rechts neben jedem einzelnen Schritt einstellen. Die
neue Kurve wird entsprechend grafisch dargestellt.

![Effect Editor key frame shape changing curves for individual key frame steps](/docs/images/Effect-Editor-key-frame-shape-changing-curves-for-individual-key-frame-steps.png)

### Editieren von Frames

Auch die Reihenfolge der Keyframes lässt sich im Effekt-Editor ändern:

![Effect Editor key frame shape layer with colour steps](/docs/images/Effect-Editor-key-frame-shape-layer-with-colour-steps.png)

-   Um Frames **hinzuzufügen**, klicken Sie auf den \{Stift\} rechts neben dem
    **Namen des Layers**.

-   Um einen Frame zu **editieren**, klicken Sie auf den \{Stift\} rechts neben
    dem **Namen des Frames**.

-   Um einen Frame zu **löschen**, wählen Sie diesen aus und klicken unten
    auf den \{Papierkorb\}.

-   Um die **Reihenfolge zu ändern**, wählen Sie einen Frame aus und
    verschieben ihn mit den **Pfeiltasten**.

-   Um **mehrere Frames** gleichzeitig zu **ändern**, klicken Sie unten auf die
    **Mehrfachauswahl**-Schaltfläche, oder sie ziehen um die gewünschten
    Frames im Display einen Rahmen.

### Komplexe Effekte

Keyframe-Shapes können jeweils mehrere Layer (Ebenen) enthalten, so dass
verschiedene Effekte gleichzeitig laufen können. Um einen neuen Layer
hinzuzufügen, klicken Sie unten auf das \{+\} und wählen nun
**Layers**. Damit erscheint der neue Layer in der Liste auf der linken
Seite.

![Effect Editor adding an extra effect](/docs/images/Effect-Editor-adding-an-extra-effect.png)

Ebenso können Sie einen komplett anderen Keyframe-Shape oder
[Pixelmapper-Effekt](pixel-mapper.md) hinzufügen. Pixelmapper-Effekte 
werden immer ganz oben in der Liste angezeigt und lassen sich mit dem **Auge**
ausblenden, wenn man nur mit den Keyframe-Shapes arbeiten will.

Einen Keyframe-Shape in einen Cue speichern
-------------------------------------------

Normalerweise werden Keyframe-Shapes, die in einem Cue gespeichert sind,
durch den zugehörigen Fader gesteuert; ist in den jeweiligen
Playback-Optionen die Option [Speed on Fader](../cues/playback-options.md#shape--effect-speed)
gewählt, so wird die Geschwindigkeit des Effekts mit dem Fader geregelt.

Ferner lässt sich sowohl global in den [Benutzereinstellungen](../system-settings/user-settings.md#shape-behaviour) 
als auch pro einzelnem Playback in den [Optionen](../cues/playback-options.md#shape-behaviour) 
das Verhalten der Keyframe-Shapes einstellen:\
\[Shape Behaviour = Overlay\] oder \[Shape Behaviour = LTP\].

-   \[Overlay\] (Voreinstellung) funktioniert ähnlich wie die gewohnten
    Shapes. Ein aktiver Key Frame Shape hat Priorität über die
    betreffenden Geräte/Attribute und läuft, bis er beendet wird. Läuft
    z.B. ein Key Frame Shape, der die Farbe der Geräte verändert, und
    startet man einen weiteren Colour-Cue, so ist dies zunächst nicht
    sichtbar. Ebenso ist zunächst keine Änderung zu sehen, wenn man etwa
    Paletten aufruft oder die Farbe anderweitig verändert. Erst wenn der
    Shape beendet wird, werden die im Hintergrund vorgenommenen
    Änderungen aktiv. Auf diesem Wege lässt sich einfach bei laufendem
    Key Frame Shape ein neues Bild einstellen, auf das dann nahtlos
    übergeblendet werden kann.

-   \[LTP\] funktioniert dagegen eher wie ein Chaser. Nachträglich
    gestartete Änderungen auf der gleichen Priorität überschreiben den
    Key Frame Shape. Startet man also z.B. bei laufendem Colour-Keyframe-Shape
	(Priorität normal) ein anderes Colour-Playback
    (ebenfalls Priorität normal), so blockiert dieses den Key Frame
    Shape. Deaktiviert man das Playback, so ist wieder der Key Frame
    Shape aktiv. Gleiches gilt beim Aufruf von Paletten, wobei in diesem
    Fall der Keyframe-Shape neu gestartet werden muss. Zu beachten ist,
    dass Quick Palettes mit 'Priority=High' funktionieren. Stellt man
    also wiederum das Playback mit dem Key Frame Shape auf
    'Priority=High' oder höher, verhindert man das Überschreiben durch
    Quick Palettes. Ebenso kann man 'Priority=Very High' wählen und
    damit verhindern, dass der Inhalt des Programmers den Key Frame
    Shape überschreibt (Details zur Priorität siehe [Priority](../cues/playback-options.md#priority)).

Zum Verhalten von Keyframe-Shapes in Cuelisten siehe
[Shape-Tracking in Cuelisten](../cue-lists/creating-a-cue-list.md#tracking-von-shapes-in-cuelisten).

-   Wird mittels [Mask FX](shape-generator.md#masking-shapes-using-mask-fx)
	ein Mask Shape erzeugt, so stoppt dieser auch Keyframe-Shapes.