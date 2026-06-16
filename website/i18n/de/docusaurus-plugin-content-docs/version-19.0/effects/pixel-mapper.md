---
id: pixel-mapper
title: Der Pixelmapper
sidebar_label: Der Pixelmapper
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Matrix-Effekte mit dem Pixelmapper erstellen

<Video videoId="UchvGw2vvU8" title="Pixel Mapping" />

Der Pixelmapper funktioniert mit Gruppen von Geräten, die mit dem
[Gruppenlayout-Editor](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) angeordnet wurden. Damit wird dem Pult mitgeteilt, wo sich
die einzelnen Geräte tatsächlich auf der Bühne befinden. Daraufhin
werden die einzelnen Pixel der Effekte passend auf die Geräte
abgebildet, so dass der 2D-Effekt sichtbar wird. 

> Am Ende dieses Abschnitts sind einige [Anwendungsbeispiele](pixel-mapper-examples.md) für das Arbeiten mit dem Pixelmapper aufgeführt. Das Vorgehen ist mit konkreten Beispielen deutlich einfacher zu verstehen. 

Ist das Layout entsprechend eingerichtet, können Sie mit dem Pixelmapper
wie folgt arbeiten:

1. Wählen Sie die gewünschte Gerätegruppe aus.
2. Im Hauptmenü wählen Sie <Keys.SoftKey>Shapes and Effects</Keys.SoftKey> und darauf <Keys.SoftKey>Pixel Mapper</Keys.SoftKey>.
3. Wählen Sie <Keys.SoftKey>Create effect</Keys.SoftKey>. Damit öffnet sich der Pixel Mapper
Editor mit einem schwarzen Hintergrund. Wahlweise kann das Gerätelayout
mit angezeigt werden, um genauer arbeiten zu können. Klicken Sie dazu im
Kontext-Bereich auf <Keys.SoftKey>Fixture Overlay 50/50</Keys.SoftKey>.

![Effect Editor - Pixel Mapper - New Effect](/docs/images/Effect-Editor-Pixel-Mapper-New-Effect.png)

### Elemente

Klicken Sie unten auf die Schaltfläche <Keys.ContextKey>+</Keys.ContextKey>, um einen Effekt zu
erzeugen, und wählen Sie eine der verfügbaren Formen aus. Zum **Entfernen**
bereits erzeugter Elemente wählen Sie diese aus und klicken auf den <Keys.ContextKey>Papierkorb</Keys.ContextKey>,
Es stehen folgende Elemente zur Verfügung:

-   Quadrat
-   Kreis
-   Dreieck
-   Stern
-   Propeller (Fan)
-   Spirale
-   Text
-   Zeichnen *(man kann auf dem Touchscreen zeichnen)*
-   Bild aus Datei *(von der Festplatte oder einem USB-Stick)*
-   [Synergy-Content](../synergy/operating-synergy.md#lightmap-pixelmapping-mit-ai) von einem Ai-Medienserver oder von Prism Zero

![Effect Editor - Pixel Mapper - Adding an Element](/docs/images/Effect-Editor-Pixel-Mapper-Adding-an-Element.png)

Nach der Auswahl wird das gewünschte Element oben rechts angezeigt und
zu den verwendeten Geräten ausgegeben. Das Element lässt sich mit den
Fadern unterhalb der Darstellung genauer einstellen (je nach
Element-Typ):

- Opacity (Sichtbarkeit)
- X/Y-Position
- Width, height (Breite, Höhe)
- Zoom
- Rotation
- Border width (Randstärke)
> Zum **Ändern der Farbe** klicken Sie links auf den **Namen des Layers**.

![Effect Editor - Pixel Mapper - Circle on Layer](/docs/images/Effect-Editor-Pixel-Mapper-Circle-on-Layer.png)

### Animationen

Bei noch ausgewähltem Grafikelement (links in der Layer-Darstellung)
klicken Sie nochmals auf <Keys.ContextKey>+</Keys.ContextKey> und wählen eine **Animation** (Bewegung)
oder einen **visuellen Effekt** (etwa das Aufzoomen oder Einblenden).
Damit wird der Effekt auf dem schwarzen Hintergrund und den Geräten
animiert. Es lassen sich mehrere Animationen miteinander kombinieren, um
komplexe Effekte zu erzielen.

![Effect Editor - Pixel Mapper - Adding an Animation](/docs/images/Effect-Editor-Pixel-Mapper-Adding-an-Animation.png)

Available animations are:

Folgende Animationen stehen zur Verfügung:

-   Rotation
-   Verschieben (lineare Bewegung)
-   Zoom
-   Einblenden/Fade (Opacity)
-   Zufall/Random
-   Grid Fit *(genaues Einpassen der Elemente in das Raster)*
-   Linearer Verlauf
-   Radialer Verlauf
-   Motion Blur *(Bewegungsunschärfe)*

Eine Animation kann das jeweilige Element verschieben oder anderweitig
verändern. Ebenso kann sie mehrere Kopien des Elements in
unterschiedlichen Animationsstadien erzeugen (Spawn).

Sie können die Parameter der einzelnen Animation ändern, indem Sie links
auf deren Namen klicken. Abhängig vom Effekt werden verschiedene
Schieberegler eingeblendet:

- Speed *(Geschwindigkeit)*
- Speed Random *(Zufälligkeit der Bewegung)*
- Spawn Rate *(Häufigkeit neuer Kopien des Elements)*
- Spawn Random *(Zufälligkeit neuer Kopien)*
- Spawn For *(Maximalwert neuer Kopien des Elements)*
- Run For / And Then *(Anzahl der Effekt-Durchläufe und bestimmen, ob
danach gestoppt oder auch der Effekt deaktiviert werden soll - freeze
oder kill)*
- Direction / Direction Random *(Richtung und Zufälligkeit der Richtung -
nur bei Bewegungen)*
- Start Angle / End Angle *(Start/Endwert, nur bei Rotation)*

Ein paar Tipps zu den Animationen:

-   Für das Einpassen ins Raster (**Grid Fit**) ist die Anzahl von Zeilen und Spalten anzugeben.

-   Für die **Verlaufs-Animation** stellen Sie den Start- und Endwert
    sowie den Versatz dazwischen ein. Mit Spread wählen Sie die
    Verlaufs-Kurve: Pad ist ein einfacher, einmaliger Verlauf. Reflect
    ist ein Verlauf, der sich immer auf- und abbaut. Repeat schließlich
    ist eine Wiederholung in immer nur einer Richtung).

-   Gibt man einen Wert für **Spawn For** oder **Run For** ein, so
    stoppt die Animation nach der entsprechenden Anzahl von Zyklen. Um
    sie wieder zu starten, betätigen Sie den **Reset-Knopf** oben rechts im
    Fenster des Effekt-Editors.
	
    ![Effect Editor - Pixel Mapper - Reset Button](/docs/images/Effect-Editor-Pixel-Mapper-Reset-Button.png)

-   Für Effekte mit **Start** und **Endpunkt** bestimmt <Keys.SoftKey>Cycles</Keys.SoftKey> die Anzahl
    der Durchläufe. Bei Effekten ohne Endpunkt bestimmt sich die Anzahl
    hingegen aus dem Master-Tempo und der Geschwindigkeit der Animation.

### Das Fenster Pixel Mapper Preview

Zur Vorschau, wie der Effekt später aussehen wird, öffnen Sie das
Fenster 'Pixel Mapper Preview': drücken Sie zweimal auf 
[<Keys.HardKey>Open / View</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Pixel Mapper Preview</Keys.SoftKey>. Eine Vorschau der laufenden Effekte
erscheint; unten können Sie zwischen den einzelnen Animationen
umschalten.

![Pixel Mapper Preview Window](/docs/images/Pixel-Mapper-Preview-Window.png)

### Allgemeine Hinweise

Wenn gewünscht, können mehrere Layer (Ebenen) miteinander kombiniert
werden. Ist das gewünschte Ergebnis erzielt, so kann es als Cue
gespeichert werden.

> Sowohl beim Einstellen der Fader auf dem Bildschirm als auch beim Klicken und Ziehen lassen sich alternativ die Werte mit den Rädern oder den Zifferntasten eingeben. Um dies für einen Wert zu aktivieren, klicken Sie auf das Feld rechts, das den jeweiligen Wert zeigt. Mit einem Doppelklick kann man den Vorgabewert wiederherstellen, und mit <Keys.SoftKey>+/-</Keys.SoftKey> lässt sich der Wert invertieren.

-   Die **Reihenfolge** der Layer lässt sich verändern, indem man zuerst auf
    den zu verschiebenden Layer klickt und dann unten die Schaltflächen
    'Pfeil hoch'/'Pfeil runter' bedient.

-   Layer, Elemente und Animationen lassen sich mit <Keys.HardKey>Copy</Keys.HardKey> und <Keys.HardKey>Move</Keys.HardKey> **kopieren** und **verschieben**: drücken Sie <Keys.HardKey>Copy</Keys.HardKey> (oder <Keys.HardKey>Move</Keys.HardKey>), dann das zu verschiebende/kopierende Element, und
    schließlich auf das gewünschte Ziel des Kopierens.

### Master-Parameter für Effekte

Jeder erstellte Effekt hat auch Master-Parameter, mit denen bestimmt
wird, wie sich dieser im Zusammenspiel mit anderen Effekten verhält. Zur
Anzeige dieser Master-Parameter klicken Sie links oben auf den
Effekt-Namen:

![Effect Editor - Pixel Mapper - Effect Master Parameters](/docs/images/Effect-Editor-Pixel-Mapper-Effect-Master-Parameters.png)

-   Der Schalter **Block Effect** erlaubt es, einen Pixelmapper-Effekt zu
    bauen, der andere laufende Pixelmapper-Effekte stoppt (je nach
    [Priorität](../cues/playback-options.md#priority)). Damit ähnelt 
	die Wirkung dem Block Shape.

-   **Colour** bestimmt die Hintergrundfarbe dieses Effekts (unwirksam,
    falls **Back Opacity** auf 0 steht).

-   **Back Opacity** bestimmt die Sichtbarkeit anderer Effekte durch diesen
    hindurch. Default ist 0 -- andere Effekte werden transparent
    hindurchgelassen.

-   **Opacity** bestimmt die Sichtbarkeit anderer Effekte im Vordergrund
    dieses Effekts.

-   **X/Y/Zoom/Rotation** bestimmen Position und Größe des Effekts.

-   **Master Speed** ist die generelle Geschwindigkeit des Effekts. Das
    beeinflusst die Animationsgeschwindigkeit sowie die Anzahl der
    Zyklen.

-   **Pre-Spool** startet der Effekt 'mittendrin', so als ob er bereits
    eine Weile gelaufen sei. Damit lassen sich langsam aufbauende
    Effekte gleich in ihrer ganzen Pracht starten.

-   **Run For** / **And Then** wie viele Zyklen der Effekt laufen und
    was dann passieren soll (**Freeze** (Stoppen), **Kill** (Deaktivieren) 
	oder **Stop Spawning** (keine neuen Kopien erzeugen)). Vorgabe 
	für **Run For** ist 0, also unbegrenzt.

## Masterregler für Pixelmapper-Layer

Jedem der vier Layer (Ebenen) des Pixelmappers kann ein Masterregler
zugewiesen werden. Mit diesem kann der jeweilige Layer dann live
gesteuert werden. Das Zuweisen erfolgt im System-Menü oder per <Keys.HardKey>Record</Keys.HardKey>,
<Keys.SoftKey>Create Master</Keys.SoftKey>, <Keys.SoftKey>Pixel Mapper</Keys.SoftKey>. Wählen Sie <Keys.SoftKey>Layer 1</Keys.SoftKey> bis <Keys.SoftKey>Layer 4</Keys.SoftKey>
und drücken Sie die Auswahltaste eines Faders. Darauf steuert dieser Fader die
Sichtbarkeit (Helligkeit) des jeweiligen Layers.

Damit ist es möglich, Cues und Paletten zu erzeugen, die die
Layer-Einstellungen von Effekten steuern, die in anderen Cues
gespeichert sind.

Die Masterregler für die Layer müssen im Effekt-Editor aktiviert werden
(Schaltfläche <Keys.SoftKey>Use Master</Keys.SoftKey>).

> Für Layer-Masterregler sind ggf. aktualisierte Personalities
    erforderlich.

<Video videoId="rCIIH2-DCNM" title="Advanced Pixel Mapping" />

## Pixelmapper-Effekte mit Mask FX stoppen

Mit der **Mask FX**-Funktion lassen sich Playbacks programmieren, durch die 
laufende Pixelmapper-Effekte auf einigen oder allen Geräten gestoppt werden.

Ein Mask-Effekt wird wie folgt erzeugt:

1.  Drücken Sie <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, <Keys.SoftKey>Mask FX</Keys.SoftKey>.
2.	Wurden vorher keine Geräte ausgewählt, so wirkt sich der Mask-Effekt 
	auf alle Geräte aus. Wurden dagegen Geräte angewählt, so gilt der 
	Mask FX nur für diese.
3.	Drücken Sie <Keys.SoftKey>Create Mask Pixel Map</Keys.SoftKey>. (Der Button <Keys.SoftKey>Create Mask FX</Keys.SoftKey> 
	wirkt sich sowohl auf Pixelmapper-Effekte als auch auf Shapes aus.)
4.	Der Mask FX ist sofort wirksam und stoppt laufende Pixelmapper-Effekte.
	Speichern Sie diesen auf ein Playback, um nach Bedarf andere Effekte 
	zu stoppen.
	
-   Mit dem Button <Keys.SoftKey>Clear mask from programmer</Keys.SoftKey> werden sämtliche Mask Effekte und Mask Shapes für alle Geräte aus dem Programmer gelöscht.

-   Diese Funktion ersetzt **Block Effect** aus früheren Versionen. Shows, 
  die noch den Block Effect enthalten, können trotzdem geladen werden und
  funktionieren wie gewohnt, aber der Block Effect wird bereits als "Mask"
  angezeigt.
  

