---
id: pixel-mapper-examples
title: Pixelmapper - Beispiele
sidebar_label: Pixelmapper - Beispiele
original_id: pixel-mapper-examples
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Zufallseffekte

In diesem Beispiel wird die Matrixengine genutzt, um auf mehreren
Dimmern einen Zufallseffekt zu erzeugen. Dieser Effekt überlagert
anderweitig für die Dimmer eingestellte Pegel.

1. Zunächst müssen die betreffenden Dimmer in einer Gruppe
zusammengefasst werden.

2. Als nächstes muss das Layout der Geräte in dieser Gruppe
entsprechend eingestellt werden (mit <Keys.SoftKey>Shapes And Effects</Keys.SoftKey>, \[Pixel
Mapper\], <Keys.SoftKey>Edit Group Layout</Keys.SoftKey>, Gruppe auswählen).

3. Erstellen Sie nun einen Effekt: wählen Sie die Gruppe aus und
klicken Sie <Keys.SoftKey>Shapes And Effects</Keys.SoftKey>, <Keys.SoftKey>Pixel Mapper</Keys.SoftKey>, <Keys.SoftKey>Create Effect</Keys.SoftKey>.

4. Im Effekt-Editor schalten Sie die Option <Keys.SoftKey>Fixture Overlay</Keys.SoftKey> auf
<Keys.SoftKey>Fixture Overlay 50/50</Keys.SoftKey>. *(Damit sieht man das Ergebnis direkt beim
Erstellen des Effekts.)*
![Effect Editor - Pixel Mapper - Fixture Overlay 50/50](/docs/images/Effect-Editor-Pixel-Mapper-Fixture-Overlay-50-50.png)

5. Wählen Sie links <Keys.SoftKey>Effect</Keys.SoftKey> und stellen den Fader <strong>Background Opacity</strong> 
auf <strong>0%</strong>. *(Damit überlagert der Effekt alle anderen Werte.)*
![Effect Editor - Pixel Mapper - Setting Background Opacity of Effect](/docs/images/Effect-Editor-Pixel-Mapper-Setting-Background-Opacity-of-Effect.png)

6. Wählen Sie <Keys.SoftKey>Layer 1</Keys.SoftKey>, klicken auf <Keys.ContextKey>+</Keys.ContextKey> am unteren Rand des
Bildschirms, und wählen Sie als Form den <strong>Kreis</strong>.
![Effect Editor - Pixel Mapper - Adding a Circle to Layer 1](/docs/images/Effect-Editor-Pixel-Mapper-Adding-a-Circle-to-Layer-1.png)

7. Stellen Sie <strong>Zoom</strong> so ein, dass etwa eine Zelle vom Kreis bedeckt
wird. Ebenso kann man dies mit <strong>Width</strong> und <strong>Height</strong> erreichen.

    Schieben Sie den Kreis dann mit <strong>X</strong> und <strong>Y</strong> etwa in die Mitte der Fläche.
    ![Effect Editor - Pixel Mapper - Transforming a Circle Element](/docs/images/Effect-Editor-Pixel-Mapper-Transforming-a-Circle-Element.png)

8. Klicken Sie wieder auf <Keys.ContextKey>+</Keys.ContextKey> und wählen Sie als Animation **zufällige
Position** (dargestellt durch mehrere kleine Blöcke).
![Effect Editor - Pixel Mapper - ](/docs/images/Effect-Editor-Pixel-Mapper.png)  
(Achtung: bis jetzt
ist noch kein Effekt zu sehen.)

9. Klicken Sie <Keys.ContextKey>+</Keys.ContextKey> und wählen Sie diesmal <strong>Opacity</strong> als Effekt
(dargestellt als teilweise sichtbarer Block).

10. Variieren Sie nun den Effekt:

    Die Zufalls-Animation wird mit der Opacity-Animation kombiniert, so dass 
	jeder neue Kreis an einer zufälligen Stelle erscheint.

    Stellen Sie <strong>In Time</strong> und <strong>Out Time</strong> auf 0%, um nicht jeweils ein- 
	und auszublenden, sondern hart zu schalten.

    Machen Sie den Effekt nun mit <strong>Speed</strong> schneller, und verändern Sie die
	Häufigkeit mit <strong>Spawn Rate</strong> (für Effekte mit solch kleinen Elementen
	bieten sich hohe Spawn Rates an.)

    ![Effect Editor - Pixel Mapper - Modify an Opacity Animation](/docs/images/Effect-Editor-Pixel-Mapper-Modify-an-Opacity-Animation.png)

11. Speichern Sie mittels <Keys.HardKey>Record</Keys.HardKey> das Ergebnis als Cue.

## Effekte und Layer kombinieren

In diesem Beispiel wird ein diagonaler Wisch-Effekt mit einem
rotierenden roten 'Propeller' erstellt.

1.  Erstellen Sie ein Gruppe von Geräten und legen Sie das Layout wie im
[vorigen Beispiel](#zufallseffekte) beschrieben fest.

2.  Starten Sie den Effekt-Editor mit <Keys.SoftKey>Shapes And Effects</Keys.SoftKey>, \[Pixel
Mapper\], <Keys.SoftKey>Create Effect</Keys.SoftKey>.

3.  Wählen Sie <Keys.SoftKey>Layer 1</Keys.SoftKey>, klicken auf das <Keys.ContextKey>+</Keys.ContextKey> unten links und wählen
den Block als grafisches Element.

    Stellen Sie die <strong>Rotation</strong> auf ca. 25° nach rechts ein.

	Machen Sie den Block mit <strong>Width</strong> schmaler.

    Verändern Sie die Höhe (<strong>Height</strong>) so, dass der Block das gesamte Fenster
	von unten bis oben füllt.

    Ziehen Sie den Regler <strong>X</strong> (für horizontale Position) soweit nach rechts,
	dass der Block gerade nicht mehr im Bild erscheint.

    ![Effect Editor - Pixel Mapper - Transforming a Block](/docs/images/Effect-Editor-Pixel-Mapper-Transforming-a-Block.png)

4.  Klicken Sie wieder auf <Keys.ContextKey>+</Keys.ContextKey> und wählen Sie als Animation
	<strong>Lineare Bewegung</strong> (dargestellt als von links nach rechts sich bewegender
	Block).

    Rechts neben dem Regler <strong>Direction</strong> (Richtung) befindet sich ein kleiner
	Kompass. Klicken Sie 4x darauf und stellen damit die Richtung auf 270°
	ein (die Grundeinstellung ist 90°, also *von links nach rechts*; da wir den
	Block aber rechts aus dem Bild geschoben haben, muss die Richtung
	diesmal 270° sein. Der Kompass schaltet in 45°-Schritten um).

    Verringern Sie die <strong>Spawn Rate</strong>, bis nur noch ein Streifen auf der
	Fläche zu sehen ist. Für solche Effekte ist eine typische Spawn Rate
	etwa 0,2.

    Ebenso möchten Sie vielleicht die Geschwindigkeit (<strong>Speed</strong>) etwas
	reduzieren - zum Einstellen der Spawn Rate wiederum ist vorübergehend
	eine höhere Geschwindigkeit sinnvoll.

    ![Effect Editor - Pixel Mapper - Modify a Linear Movement Animation](/docs/images/Effect-Editor-Pixel-Mapper-Modify-a-Linear-Movement-Animation.png)

5.  Klicken Sie auf <Keys.SoftKey>Layer 2</Keys.SoftKey>, dann auf <Keys.ContextKey>+</Keys.ContextKey>, und wählen Sie den
	stilisierten Propeller.

    Stellen Sie den <strong>Zoom</strong> so ein, dass die Grafik die gesamte Fläche füllt.

    Stellen Sie <strong>Bend</strong> auf 0%, so dass die Flügel gerade sind.

    Stellen Sie <strong>Points</strong> auf 3 (das ist der Minimalwert) -- so erhalten Sie
	einen 3-flügeligen Propeller.

    Stellen Sie <strong>Thickness</strong> auf 50% - so erhalten Sie gleichmäßig breite
	Segmente und Lücken.

    Stellen Sie <strong>Border Width</strong> auf einen kleinen Wert, so dass nur schmale
	Kanten gezeigt werden.

    ![Effect Editor - Pixel Mapper - Modifying Swirl](/docs/images/Effect-Editor-Pixel-Mapper-Modifying-Swirl.png)

6.  Klicken Sie auf <Keys.ContextKey>+</Keys.ContextKey> und fügen Sie eine Rotations-Animation hinzu.
	
	Verringern Sie die Geschwindigkeit.

7.  Klicken Sie auf die Titelleiste des Layers ('Layer 2'), um die
	Layer-Steuerung einzublenden.

    Klicken Sie nun auf den Farbbalken, um den Colourpicker zu öffnen.

    Im Colourpicker klicken Sie oben links für ein kräftiges Rot.

    ![Effect Editor - Pixel Mapper - Changing Colour of Swirl to Red](/docs/images/Effect-Editor-Pixel-Mapper-Changing-Colour-of-Swirl-to-Red.png)

8.  Klicken Sie auf <Keys.SoftKey>Effect</Keys.SoftKey> ganz oben links für die Globalsteuerung.

    Stellen Sie <strong>Pre Spool</strong> auf 0s (ganz links) *(damit beginnt der
	Wischeffekt außerhalb, wie gewünscht)*.

9.  Speichern Sie dies mit <Keys.HardKey>Record</Keys.HardKey> als Cue.

>   Diese Beispiel verdeutlicht, wie mehrere Layer miteinander
    kombiniert werden: ein Layer mit einer höheren Nummer ist dabei im
    Vordergrund. Daher erscheint der ‚rote Propeller' auf/vor dem weißen
    ‚Wischeffekt'.
>    
>   ![Pixel Mapper Preview Window - Overlayed Layers](/docs/images/Pixel-Mapper-Preview-Window-Overlayed-Layers.png)

## Kreative Geräte-Layouts

Da jede Gerätegruppe ein anderes Layout haben kann, ist es auch sehr
einfach möglich, die gleichen Geräte in mehreren Gruppen mit
unterschiedlicher Anordnung zu arrangieren.

Damit lassen sich schnell und einfach interessante Effekte erzielen.

### Beispiel 1: Gerade/ungerade

1. Wählen Sie die betreffenden Geräte aus.

2. Drücken Sie <Keys.HardKey>All</Keys.HardKey>, um nach Muster auszuwählen.

3. Wählen Sie mit <Keys.SoftKey>Odd</Keys.SoftKey> alle ungeraden Geräte aus.

4. Speichern Sie die Auswahl in eine Gruppe.

5. Drücken Sie <Keys.HardKey>Fix+1</Keys.HardKey> (oder <Keys.HardKey>Next</Keys.HardKey>). *(Damit werden alle geraden
Geräte angewählt.)*

6. Speichern Sie die Auswahl mittels 'Merge' (Kombinieren/Verschmelzen)
in die gleiche Gruppe.

7. Öffnen Sie den Layout-Editor (<Keys.SoftKey>Shapes And Effects</Keys.SoftKey>, \[Pixel
Mapper\], <Keys.SoftKey>Edit Group Layout</Keys.SoftKey>) und wählen Sie die Gruppe.

Durch die beschriebene Vorgehensweise wurde mit wenigen Klicks ein
Layout erstellt, bei dem alle ungeraden Geräte links und alle geraden
Geräte rechts angeordnet sind.

Diese Anordnung kann bereits ohne weitere Änderungen für schöne Effekte
verwendet werden. So wird z.B. ein Block mit Bewegung links-rechts
nacheinander erst über die ungeraden und dann über die geraden Geräte
geblendet.

Eine weitere - ähnliche - Anwendung wäre das Erstellen eines
&nbsp;<strong>Kaskadier-Effektes</strong>:

1. Verändern Sie mit <strong>'Resize' (unterer Rand)</strong> die Größe des Gitters, so
dass es mindestens doppelt so hoch ist.\
![Layout Editor - Expanding Layout Grid](/docs/images/Layout-Editor-Expanding-Layout-Grid.jpeg)

2. Markieren Sie mit der Maus die <strong>geraden Geräte</strong>.\
![Layout Editor - Selecting Fixtures](/docs/images/Layout-Editor-Selecting-Fixtures.jpeg)

3. Ziehen Sie die Geräte so, dass Sie direkt unter den ungeraden (der
linken Gruppe) positioniert werden.\
![Layout Editor - Moving Fixtures](/docs/images/Layout-Editor-Moving-Fixtures.jpeg)

4. Wählen Sie <strong>Crop Grid</strong> aus dem Kontextmenü, um die nicht verwendete
Fläche zu entfernen.

Erstellt man nun ein Block-Element, welches senkrecht von oben nach
unten läuft, so wird dieses vertikal erst auf die ungeraden und danach
auf die geraden Geräte abgebildet.

### Beispiel 2 -- Pseudo-Zufallsfolge

1. 	Wählen Sie die betreffenden Geräte aus und erstellen Sie eine
Gruppe.

2. 	Öffnen Sie den Layout-Editor.

3. 	Bringen Sie mit dem Anfasser am unteren Rand das Gitter auf
	mindestens die doppelte Höhe. 
	
	Mittels der Zoomfunktion am linken Rand wird das exakte Anordnen
	deutlich vereinfacht. Klicken Sie auf die stilisierte Lupe, um schnell
	hinein- und herauszuzoomen.
	
4.  Wählen Sie die Gruppe nochmals an; damit werden sämtliche
enthaltenen Geräte angewählt.

5.  Drücken Sie auf <Keys.HardKey>Fix+1</Keys.HardKey>, um das erste Gerät anzuwählen.

6.  Verschieben Sie das Gerät mit den Encodern auf eine neue vertikale Position.

7.  <strong>Wiederholen Sie Schritt 5 und 6</strong>, bis alle Geräte auf unterschiedlichen
Positionen - insbesondere Höhen - sind.

![Layout Editor - Randomly Arranged Fixtures](/docs/images/Layout-Editor-Randomly-Arranged-Fixtures.jpeg)

*Erstellen Sie nun einen Effekt auf dieser Gruppe, so erscheint das
Ergebnis zufällig. Dabei lassen sich Details jederzeit durch Ändern des
Layouts anpassen.*

### Beispiel 3 -- Winkel (oder 'wenn einfach grade einfach langweilig ist')

Mitunter werden Geräte absichtlich schräg oder aufgehängt. Die Software
startet zwar mit der Annahme einer rechtwinkligen Anordnung, kann aber
auch gewinkelte Aufbauten passend darstellen.

1.  Wählen Sie die Geräte aus und erstellen Sie eine Gruppe.

2.  Öffnen Sie den <strong>Layout-Editor</strong>.

3.  Wählen Sie das/die Gerät(e), die Sie drehen möchten, und ändern Sie
	den Winkel mit dem betreffenden Encoder.\
	*Die Zuordnung der Räder lässt sich mit der Option <strong>Wheel Control</strong> 
	einstellen; beim Pearl Expert kann darüber hinaus zwischen <strong>Adjust Angle</strong>
	und <strong>Adjust X, Y</strong> umgeschaltet werden.*
	
![Layout Editor - Adjusting Angle](/docs/images/Layout-Editor-Adjusting-Angle.jpg)

Hinter den nun gedrehten Zellen wird die ursprüngliche Anordnung
hellgrau eingeblendet.

Wurde versehentlich ein Gerät komplett außerhalb des Bereiches
verschoben, so lässt sich mit der Kontext-Option <strong>Crop Grid</strong> das Gitter
anpassen, so dass man wieder Zugriff auf alle Geräte hat.

Bei der Verwendung der Räder zum Positionieren kann man im
Anzeigebereich der Räder auf die Buttons für Up und Down klicken, womit
sich der Wert um +/-1px bzw. +/-45° ändert. Klickt man auf den Wert im Display
bzw. die entsprechende <Keys.HardKey>@</Keys.HardKey>-Taste, so lässt sich der gewünschte Wert
numerisch eingeben.

## Weitere Werkzeuge des Layout-Editors

Im Layout-Editor gibt es einige Werkzeuge, die das Arbeiten deutlich
vereinfachen.

&nbsp;<strong>Arrange Fixtures:</strong> Damit lassen sich sehr schnell viele Geräte
definiert anordnen. Um z.B. 20 RGB-Geräte in 4 Säulen à 5 Geräte
anzuordnen, gehen Sie wie folgt vor:

1.  Wählen Sie die Geräte aus und erstellen Sie eine Gruppe.

2.  Öffnen Sie den <strong>Layout-Editor</strong>.

3.  Wählen Sie <strong>Arrange Fixtures</strong> aus dem Kontext-Menü.

4.  Wählen Sie die Option <Keys.SoftKey>Height</Keys.SoftKey> und geben Sie <Keys.HardKey>5</Keys.HardKey> ein\
	*(die Breite wird automatisch berechnet)*.

5.  Aktivieren Sie <Keys.SoftKey>Crop Grid to fixtures</Keys.SoftKey>\
	*(damit wird die Größe der gesamten Darstellung automatisch angepasst)*.

6.  Schalten Sie <Keys.SoftKey>Arrange in..</Keys.SoftKey> je nach Adressierung auf <strong>Columns</strong>
	(Spalten) oder <strong>Rows</strong> (Zeilen).\
	*('Rows' ordnet die Geräte horizontal (links-rechts) an, 'Columns' 
	ordnet sie vertikal an (von oben nach unten))*.

7.  Mit der Option <Keys.SoftKey>Shape</Keys.SoftKey> (Umriss) können die Zellen/Geräte in einem Rechteck,
	Oval oder Dreieck angeordnet werden.

8.  Bestätigen Sie die Einstellungen mit <Keys.SoftKey>OK</Keys.SoftKey>.

&nbsp;<strong>Highlight:</strong> Mit dieser Option werden gerade angewählte Geräte
hervorgehoben. Damit sieht man, welches Gerät man gerade im Layout
bearbeitet.

&nbsp;<strong>Position & Angle/Cell Scale:</strong> Steht dies auf 'Position & Angle', so
bewegen/rotieren die wheels die gesamten Geräte. Im Modus 'Cell Scale'
dagegen lassen sich die Zellen auseinanderfächern bzw. zusammenschieben,
um die Zellenabstände verschiedener Gerätetypen anzugleichen.

&nbsp;<strong>Arrange/Select Only:</strong> Ist diese Option auf 'Select Only' gesetzt, so
ist das Verschieben per Drag-and-Drop deaktiviert. Damit kann man diese 
Funktion nutzen, um Geräte auszuwählen, ohne versehentlich die Position 
zu verändern.

*Stellt man umgekehrt fest, dass sich Positionen plötzlich nicht mehr
verändern lassen, so ist sicherlich diese Option aktiviert worden.*

In jedem Fall aber lassen sich die Positionen mit den Encodern ändern.

&nbsp;<strong>Wheels Move Full Pixel/Sub Pixel:</strong> Damit können Geräte mittels der
Wheels unabhängig vom Raster positioniert werden. Mit der Option 
&nbsp;<strong>Snap</strong> dagegen wird immer auf die nächstgelegene Zelle zentriert.

&nbsp;<strong>Wheels Rotate Individual Fixtures/Selection:</strong> Hier wählt man, ob die
komplette Auswahl um ihr Zentrum rotiert werden soll, oder jedes
gewählte Gerät einzeln um sein Zentrum.

&nbsp;<strong>Media options:</strong> Öffnet ein Untermenü für verschiedene Einstellungen
bei Verwendung eines Ai-Servers/Synergy. Das ist ausführlich beschrieben 
im Abschnitt [Verwendung des Layout-Editors mit Ai](../synergy/operating-synergy.md#verwendung-des-layout-editors-mit-ai).

## Reihenfolge und Priorität beim Abruf

Angenommen, Sie haben auf einem Speicherplatz ein pulsierendes weißes
Oval, und auf einem anderen eine blaue Spirale erstellt. Normalerweise
wird das Ergebnis jeweils anders sein, abhängig von der Reihenfolge, in
der die Cues gestartet werden. Aber mit der Vergabe von Prioritäten
lässt sich jedes Mal das gleiche Ergebnis erzielen.

Zum Erstellen des ersten Effekts:

1.  Wählen Sie eine Gruppe mit entsprechendem Layout, und starten Sie
den Effekt-Editor mit <Keys.SoftKey>Create Effect</Keys.SoftKey>.

2.  Wählen Sie links oben <Keys.SoftKey>Effect</Keys.SoftKey> für die globale Steuerung, und
	stellen Sie <strong>Background Opacity</strong> auf 0.\
	*(Damit kann dieser Effekt zum Überlagern anderer Effekte verwendet werden)*.

3.  Klicken Sie 2x auf <Keys.SoftKey>Layer 1</Keys.SoftKey> (oder klicken Sie auf <Keys.ContextKey>+</Keys.ContextKey>), und
	wählen Sie den <strong>Kreis</strong> als Element.\
	*(Der Doppelklick ruft ebenfalls Elemente und Animationen auf).*

    Verringern Sie die Höhe, um daraus ein Oval zu machen.

    ![Effect Editor - Pixel Mapper - Editing Height of Circle](/docs/images/Effect-Editor-Pixel-Mapper-Editing-Height-of-Circle.png)

4.  Klicken Sie 2x auf <Keys.SoftKey>Circle</Keys.SoftKey> (oder klicken Sie auf <Keys.ContextKey>+</Keys.ContextKey>) und
	wählen Sie die <strong>Zoom</strong>-Animation.

    Stellen Sie <strong>In Time</strong> auf 0 und <strong>Out Time</strong> auf 100%. (Damit beginnt
	der Effekt groß und endet klein - ein gleiches Ergebnis ließe sich
	erzielen, wenn man <strong>Start Zoom</strong> größer als <strong>End Zoom</strong> macht).

    Vergrößern Sie <strong>End Zoom</strong>, bis das Oval die ganze Fläche zu füllen
	beginnt.

5.  Klicken Sie 2x auf <Keys.SoftKey>Zoom Animation</Keys.SoftKey> (oder klicken Sie auf <Keys.ContextKey>+</Keys.ContextKey>)
	und wählen Sie die Animation <strong>Opacity</strong>.

    Reduzieren Sie <strong>Spawn Rate</strong> auf 0. (Damit wirkt Opacity nur auf die
	Zoom-Animation.)

    Stellen Sie <strong>In Time</strong> auf 0 und <strong>Out Time</strong> auf 100. (Damit beginnt
	der Effekt schlagartig und blendet beim Verkleinern aus. Wie beim Zoom
	beschrieben lässt sich ein ähnliches Ergebnis durch Invertieren der
	Werte für Start/End Opacity erzielen. Stellt man diese Werte auf mehr
	als 100%, so ergibt sich ein Delay vor dem Ausblenden).

    ![Effect Editor - Pixel Mapper - Opacity Animation Settings](/docs/images/Effect-Editor-Pixel-Mapper-Opacity-Animation-Settings.png)

6.  Klicken Sie wieder auf <Keys.SoftKey>Effect</Keys.SoftKey> und stellen <strong>Master Speed</strong> nach
	Belieben ein. (Durch Verwenden der globalen Geschwindigkeit werden beide
	Animationen gleichermaßen beeinflusst, so dass man sie nicht manuell
	synchronisieren muss).\
    ![Effect Editor - Pixel Mapper - Effect Master Speed](/docs/images/Effect-Editor-Pixel-Mapper-Effect-Master-Speed.png)

7.  Speichern Sie mit <Keys.HardKey>Record</Keys.HardKey> den Effekt als Cue.

Erstellen des zweiten Effektes:

1.  Wählen Sie die gleiche Gruppe wie vorher und starten Sie den
	Effekt-Editor mit <Keys.SoftKey>Create Effect</Keys.SoftKey>.

2.  Klicken Sie auf <Keys.SoftKey>Effect</Keys.SoftKey> und stellen Sie <strong>Background Opacity</strong> auf 0.

3.  Klicken Sie auf <Keys.SoftKey>Layer 1</Keys.SoftKey> und fügen diesmal ein Spiral-Element hinzu.

    Vergrößern Sie mit <strong>Zoom</strong> die Darstellung.

    Stellen Sie <strong>Thinning</strong> auf <strong>0%</strong>. (Damit bleibt die Spirallinie von innen
	bis außen gleich dick. Negative Werte machen die Linie innen dicker und
	außen dünner, positive Werte arbeiten umgekehrt).

    Verändern Sie <strong>Turns</strong>, so dass es ein kräftigerer Effekt wird. Eine
	Einstellung von etwa 3 sollte ein gutes Ergebnis liefern.

    Stellen Sie <strong>Thickness</strong> auf <strong>50%</strong>, um stärkere Linien zu erhalten.

    Stellen Sie <strong>Exponent</strong> auf etwa <strong>25%</strong>. (Damit <strong>öffnet</strong> sich die 
	Spirale schneller).
    
    ![Effect Editor - Pixel Mapper - Modifying a Spiral](/docs/images/Effect-Editor-Pixel-Mapper-Modifying-a-Spiral.png)

4.  Fügen Sie eine Drehung als Animation hinzu (<strong>Spin</strong>).

    Für wirklich psychedelische Effekte erhöhen Sie die Geschwindigkeit...

5.  Klicken Sie nun auf <Keys.SoftKey>Layer 1</Keys.SoftKey> und wählen Sie ein kräftiges Blau als Farbe.\
![Effect Editor - Pixel Mapper - Changing Colour of Spiral Layer to Blue](/docs/images/Effect-Editor-Pixel-Mapper-Changing-Colour-of-Spiral-Layer-to-Blue.png)

6.  Speichern Sie das mit <Keys.HardKey>Record</Keys.HardKey> als Cue.

Probieren Sie nun aus, wie sich beide Cues miteinander kombinieren lassen:

-   Starten Sie als erstes die blaue Spirale.

-   Starten Sie nun dazu das weiße Oval.

Sie werden feststellen, dass das weiße Oval eine höhere Priorität als
die Spirale hat; diese erscheint nur, sobald das Oval kleiner wird bzw.
ausblendet.

-   Blenden Sie beide Cues aus.

-   Starten Sie nun als erstes das weiße Oval.

-   Starten Sie dazu die blaue Spirale.

Diesmal hat die blaue Spirale eine höhere Priorität und ist folglich im
Vordergrund. Das liegt daran, dass die Effekte der <strong>LTP-Regel</strong> folgen,
d.h. der zuletzt gestartete Effekt hat Priorität.

Um sicherzustellen, dass die blaue Spirale immer im Vordergrund
erscheint, vergeben Sie dieser eine höhere Priorität:

1.  Beenden Sie beide Cues.

2.  Drücken Sie auf <Keys.HardKey>Options</Keys.HardKey> (oder im Hauptmenü auf die Menütaste <Keys.SoftKey>Options</Keys.SoftKey>,
    siehe [Playback Options](../cues/playback-options.md)).

3.  Wählen den Speicherplatz mit der blauen Spirale.

4.  Klicken Sie auf <Keys.SoftKey>Previous</Keys.SoftKey> oder <Keys.SoftKey>Next</Keys.SoftKey>, bis der Eintrag
    <Keys.SoftKey>Priority Normal</Keys.SoftKey> bei den Kontext-Tasten erscheint. Ändern Sie
    diesen Eintrag mit der betreffenden Taste auf <Keys.SoftKey>Priority High</Keys.SoftKey>.

5.  Starten Sie nun testweise erst die blaue Spirale, gefolgt vom weißen
    Oval.

Obwohl die Cues in der gleichen Reihenfolge wie im ersten Versuch
gestartet wurden, erscheint nun die blaue Spirale immer im Vordergrund.

## Verlagerung und Layer-Eigenschaften

In diesem Beispiel erstellen wir zufällig blinkende Streifen und nutzen
die globale Steuerung, um Einstellungen für den gesamten Effekt
vorzunehmen.

1.  Erstellen Sie eine Gruppe und passen Sie das Layout wie vorstehend
	beschrieben an.

2.  Wählen Sie die Gruppe, und beginnen Sie einen Effekt zu erstellen.

3.  Wählen Sie <Keys.SoftKey>Layer 1</Keys.SoftKey> und fügen ein <strong>Block</strong>-Element hinzu.

4.  Stellen Sie Breite und Höhe (<strong>Width</strong>, <strong>Height</strong>) so ein, dass sich
	ein Streifen ergibt, der horizontal über das gesamte Gitter reicht und
	mindestens eine Zelle hoch ist.

    ![Effect Editor - Pixel Mapper - Adjusting Width and Height of a Block](/docs/images/Effect-Editor-Pixel-Mapper-Adjusting-Width-and-Height-of-a-Block.png)

5.  Stellen Sie nun <strong>Y</strong> so ein, dass der Streifen gerade oben aus dem Bild
	verschwindet (zur Vorbereitung auf den Verlagerungs-Effekt).

6.  Fügen Sie nun eine Verlagerungs-Animation (<strong>Displacement</strong>) hinzu. Mit
	den Vorgabewerten ergibt sich daraus eine zufällige Verlagerung um bis
	zu 30% der Ausgangsposition, denn der Vorgabewert für <strong>Distance</strong> ist
	30%, und der für <strong>Distance Random</strong> sowie <strong>Direction Random</strong> ist 100% 
	(es ergeben sich zufällige Werte für den Bereich zwischen 0 und 30% in 
	jeder Richtung).

    Zum Ausprobieren stellen Sie z.B. einfach mal <strong>Distance Random</strong> auf 0,
	um zu sehen, was passiert.

    Stellen Sie <strong>Direction Random</strong> auf 0. (Für den hier beschriebenen
	Effekt benötigen wir ohnehin diese Einstellung, da eine zufällige 
	Richtung nicht erforderlich ist. Der Streifen wird nun verschwinden,
	da die Verlagerung in der Grundeinstellung nach oben erfolgt.)

    Stellen Sie nun <strong>Direction</strong> auf 180°. Dazu können Sie auch einfach 4x
	auf den kleinen Kompass klicken. Nun erscheint der Streifen wieder, da
	nun die zufällige Verlagerung um 30% nach unten von unserer
	Ausgangsposition erfolgt.

    Vergrößern Sie nun <strong>Distance</strong>, bis der Streifen etwa in der Mitte
	erscheint.\
    ![Effect Editor - Pixel Mapper - Displacement Animation Settings](/docs/images/Effect-Editor-Pixel-Mapper-Displacement-Animation-Settings.png)

7.  Fügen Sie die Animation <strong>Opacity</strong> hinzu.

    Verringern Sie <strong>In Time</strong> und <strong>Out Time</strong>, so dass nicht
	ein-/ausgeblendet, sondern hart geschaltet wird.\
    ![Effect Editor - Pixel Mapper - Opacity Animation Settings](/docs/images/Effect-Editor-Pixel-Mapper-Opacity-Animation-Settings-2.png)

8.  Klicken Sie in Layer 1 auf <Keys.SoftKey>Displacement</Keys.SoftKey>, um wieder diese
	Animation zu steuern.

    Stellen Sie nun <strong>Distance Random</strong> auf 100%. (Damit wird der Balken um
	zufällige Beträge vom Ausgangspunkt versetzt, erscheint also zufällig
	irgendwo innerhalb des mit <strong>Distance</strong> vorgegebenen Wertes).

    ![Effect Editor - Pixel Mapper - Displacement Animation Direction Random Setting](/docs/images/Effect-Editor-Pixel-Mapper-Displacement-Animation-Direction-Random-Setting.png)

9.  Wählen Sie nun zum Steuern wieder die Animation <strong>Opacity</strong> aus und
	erhöhen Sie die Geschwindigkeit nach Belieben. 

Vielleicht hätten Sie den Streifen nun doch lieber senkrecht. Um
das möglichst zu vereinfachen, wählen Sie einfach die Steuerelemente des
Layers, um nicht die ganzen einzelnen Elemente und Animationen editieren
zu müssen:

10. Klicken Sie auf <Keys.SoftKey>Layer 1</Keys.SoftKey>, um die Steuerung dieses Layers anzuzeigen.

11. Ändern Sie \'Rotation\' auf 90° (einfach 2x auf den Kompass klicken).\
![Effect Editor - Pixel Mapper - Changing Layer Rotation](/docs/images/Effect-Editor-Pixel-Mapper-Changing-Layer-Rotation.png)

Damit ist sowohl der Streifen gedreht als auch die damit verknüpfte
Animation. Ebenso kann man mit den Steuerungen für <strong>X</strong>, <strong>Y</strong> und <strong>Zoom</strong>,
wahlweise für den <Keys.SoftKey>Layer</Keys.SoftKey> oder den gesamten <Keys.SoftKey>Effekt</Keys.SoftKey>, schnell Anpassungen
vornehmen.

## Spawn und Pre-Spool -- 'Aufspreizen' und 'Vorspulen'

Der Regisseur hätte gern viele sich drehende kleine Ungeheuer auf dem
LED-Backdrop, die noch dazu pulsieren. Sie haben vielleicht keine
Ahnung, wozu das gebraucht wird - aber so sind Regisseure nun mal.

1.  Wählen Sie eine Gruppe mit den entsprechenden Geräten.

2.  Fügen Sie als Element einen <strong>Stern</strong> hinzu.

    Stellen Sie <strong>Points</strong> auf 4.

    Verringern Sie den <strong>Zoom</strong>, so dass viele 'Mini-Ungeheuer' auf die Fläche
	passen.

    ![Effect Editor - Pixel Mapper - Modifying a Star Element](/docs/images/Effect-Editor-Pixel-Mapper-Modifying-a-Star-Element.png)

3.  Fügen Sie eine Drehungs(<strong>Spin</strong>)-Animation hinzu.

    Setzen Sie die Geschwindigkeit (<strong>Speed</strong>) herab, so dass sie harmlos sind.

4.  Fügen Sie eine <strong>lineare Bewegung</strong> hinzu.

    Stellen Sie die Geschwindigkeit so ein, dass es aussieht, als ob sie
	herumrollen.

5.  Wählen Sie wieder das Stern-Element und ändern Sie <strong>X</strong> so, dass die
	Sterne ganz links starten und über die ganze Breite rollen.

    ![Effect Editor - Pixel Mapper - Transforming Star Element](/docs/images/Effect-Editor-Pixel-Mapper-Transforming-Star-Element.png)

6.  Fügen Sie eine Verlagerungs (<strong>Displacement</strong>)-Animation hinzu. 

	Jetzt rollt jedes Ungeheuer auf einer anderen Höhe herum.

7.  Gehen Sie nun wieder zur linearen Bewegung und ändern Sie <strong>Spawn Rate</strong>
	so, dass mehr Ungeheuer gleichzeitig sichtbar sind (Häufigkeit
	neuer Elemente).

    Ändern Sie <strong>Direction Random</strong> langsam. (Das ergibt leicht zufällige
	Richtungen, basierend auf dem Wert für <strong>Direction</strong>).

    ![Effect Editor - Pixel Mapper - Linear Movement Settings](/docs/images/Effect-Editor-Pixel-Mapper-Linear-Movement-Settings.png)

8.  Fügen Sie nun eine <strong>Zoom</strong>-Animation hinzu.

    Stellen Sie <strong>Spawn Rate</strong> auf 0. (Das ist eine spezielle Einstellung:
	die Zoom-Animation läuft damit für jedes Element jeweils, solange es auf
	dem Gitter sichtbar ist. Stellt man den Wert hingegen auf 1, so läuft
	die Animation immer nur einmal, und die Gebilde verschwinden sehr rasch
	wieder).

    Stellen Sie <strong>Out Time</strong> auf 100%. (Damit pulsieren die Ungeheuer von
	ganz klein bis ganz groß -- keine Ahnung, warum sie das machen).

    Verlangsamen Sie den Zoom etwas.

    ![Effect Editor - Pixel Mapper - Zoom Animation Settings](/docs/images/Effect-Editor-Pixel-Mapper-Zoom-Animation-Settings.png)

9.  Klicken Sie auf <Keys.SoftKey>Effect</Keys.SoftKey> und stellen Sie <strong>Pre-Spool</strong> auf 0.\
	*(Dies dient zunächst zum Testen dieser Eigenschaft.)*

    ![Effect Editor - Pixel Mapper - Zoom Animation Settings](/docs/images/Effect-Editor-Pixel-Mapper-Zoom-Animation-Settings-2.png)

10. Speichern Sie mit <Keys.HardKey>Record</Keys.HardKey> den Cue. 

11. Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, öffnen Sie die Matrix-Vorschau (**Pixel Mapper 
	Preview**), und starten Sie den Cue.

    Damit ist die Fläche zunächst leer, und nur nach und nach erscheinen
	die seltsamen Gebilde, um allmählich die Fläche zu bevölkern. Um das
	zu ändern, nutzen wir nun <strong>Pre-Spool</strong>.

12. Laden Sie den Cue mit <Keys.HardKey>Include</Keys.HardKey> wieder in den Programmierspeicher
	und öffnen Sie wieder den <strong>Effekt-Editor</strong>.

13. Klicken Sie auf <Keys.SoftKey>Effect</Keys.SoftKey> und stellen Sie <strong>Pre-Spool</strong> auf etwa
	20s. Damit startet der Effekt mit einem Status, als ob er schon 20s
	gelaufen wäre.

14. Speichern Sie den Cue mit <Keys.HardKey>Record</Keys.HardKey>, drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, starten 
	Sie den Cue und überprüfen Sie das Ergebnis wieder in der Vorschau.

    Diesmal sollten direkt von Anfang an eine Menge ‚Ungeheuer' auf dem
	Raster erscheinen. Pre-Spool ist besonders nützlich bei Animationen, die
	bei geringer Geschwindigkeit und großer Aufspreizung (Spawn Rate)
	arbeiten.