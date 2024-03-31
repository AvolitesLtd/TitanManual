---
id: operating-synergy
title: Arbeiten mit Synergy
sidebar_label: Arbeiten mit Synergy
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Sind Titan und Ai-Server einmal [verbunden](setting-up.md), so lässt 
sich Ai sehr einfach von Titan aus steuern.

## Hochladen von Content mit dem Media Browser

Mit dem Media Browser lassen sich direkt von Titan aus Clips auf den
Ai-Server laden. Ebenso lassen sich neue Media-Bänke auf dem Server
anlegen. Neuer Content wird dabei automatisch in den von Ai bevorzugten
AiM-Codec gewandelt. Das vereinfacht das Verwenden von Medien, die erst
im letzten Moment angeliefert werden, sehr.

Zum Öffnen des Media Browsers drücken Sie zweimal <Keys.HardKey>View / Open</Keys.HardKey>
und wählen den <Keys.SoftKey>Media Browser</Keys.SoftKey>.

![Ai Media Browser Window](/docs/images/Ai-Media-Browser-Window.png)

Links werden die am Pult/Titan-PC gefundenen Laufwerke angezeigt. Steckt
man ein USB-Laufwerk an, erscheint dies ebenfalls. Es gibt auch
Verknüpfungen zu üblicherweise verwendeten Ordnern.

In der zweiten Spalte werden die Ordner und Medien-Dateien angezeigt,
die im gewählten Ordner/Laufwerk vorhanden sind. Mit einem Klick auf
einen Ordner wechselt man in diesen, ein Klick auf den Pfeil oben
wechselt eine Verzeichnisebene höher.

Rechts sind die Medien-Bänke des Ai-Servers aufgeführt. Wählt man eine
Bank aus, so werden alle enthaltenen Dateien/Medien angezeigt. Klickt
man auf das <Keys.ContextKey>+</Keys.ContextKey> neben der Liste der Bänke, so wird eine neue Bank 
angelegt. Ganz oben in der rechten Spalte wird der auf dem Server 
verfügbare Speicherplatz sowie der Pfad zum Medienverzeichnis angezeigt.

Um Medien auf den Ai-Server zu laden, wählt man in der mittleren Spalte
die gewünschten Dateien aus und klickt danach rechts auf die Bank, auf
die der Upload erfolgen soll.

Existieren bereits Dateien gleichen Namens auf dieser Bank, so werden
die betreffenden Dateien rot angezeigt.

![Ai Media Browser uploading content](/docs/images/Ai-Media-Browser-uploading-content.png)

Die Dateien werden schnellstmöglich übertragen, und der
Übertragungsfort­schritt wird angezeigt. Dabei kann das Netzwerk stark
ausgelastet und damit verlangsamt werden. Um dies zu vermeiden, kann
unten der Schalter **Bandwidth Saver** (Bandbreite sparen) aktiviert
werden. Damit wird der Upload verlangsamt, und das Netzwerk wird weniger
stark ausgelastet.

Auch das automatische Umrendern (Auto Transcode) kann deaktiviert
werden, was aber nicht zu empfehlen ist. Sobald die Dateien auf den
Server geladen sind, erfolgt ggf. das Umrendern. Dessen Fortschritt
zeigt sich in der Anzeige der Clips im [Attribut-Editor](#layer-steuern-mit-dem-attribut-editor), siehe folgender
Abschnitt.

## Vorschau mit dem Media Viewer

Das Fenster **Video Multi View** kann alle Layer einzeln sowie jedes
Surface (Screen) als Ergebnis der kombinierten Layer als Vorschau
anzeigen. Ebenso lassen sich damit beliebige im Netzwerk vorhandene
NDI-Streams anzeigen, etwa einzelne Kameras oder der Live-Output bei
Fernsehaufzeichnungen.

![Video Multi View Window](/docs/images/Video-Multi-View-Window.png)

Zur Auswahl eines Streams für die Anzeige klickt man auf eine Vorschau
im Media Viewer (leere Vorschauen zeigen ein großes +). Darauf öffnet
sich eine Liste mit allen vorhandenen Streams, und man kann den
gewünschten auswählen.

![Video Multi View Window adding a stream](/docs/images/Video-Multi-View-Window-adding-a-stream.png)

Mit der Kontext-Option <Keys.SoftKey>Change Layout</Keys.SoftKey> kann man die Anzahl und
Anordnung der gezeigten Vorschaufenster wählen. \[Titles
Shown\]/<Keys.SoftKey>Titles Hidden</Keys.SoftKey> bestimmt, ob die Namen der Streams als Titel
der Vorschauen angezeigt werden.

![Video Multi View Window laout options](/docs/images/Video-Multi-View-Window-laout-options.png)

Dabei muss die Option **"Automatic NDI preview"** in den [Synergy Settings](setting-up.md#einrichten-von-synergy)
aktiv sein, damit die Vorschauen angezeigt werden.

Format | Datenrate
---|---
1920x1080p30 | 120Mbps
1920x1080p60 | 200Mbps
3840x2160p30 | 280Mbps
3840x2160p60 | 480Mbps

## Layer steuern mit dem Attribut-Editor

Sobald ein oder mehrere Layer ausgewählt sind (im Fenster [Synergy
Fixtures](setting-up.md#das-fenster-synergy-fixtures)), lassen sich die darauf abzuspielenden Medien im
Attribut-Editor wählen und manipulieren (das geht auch wie gewohnt mit
den [Encodern](../controlling-fixtures/using-the-select-buttons-and-wheels.md) und [Attributbänken](../controlling-fixtures/using-the-select-buttons-and-wheels.md#anzeige-der-attributwerte)).

> Die wichtigsten Attribute dabei sind **Intensity** zur Einstellung der
Helligkeit sowie die **Media Selection** (Medienauswahl), um Bank und Clip
zu wählen. Aber es lassen sich auch viele weitere Attribute einstellen,
Effekte hinzufügen etc.

![Clip tab of Attribute Editor for Synergy layer](/docs/images/Clip-tab-of-Attribute-Editor-for-Synergy-layer.png)

Auf der Seite Media Selection bei den Clips kann man rechts oben durch
einen Klick auf das <Keys.SoftKey>T</Keys.SoftKey> die Anzeige der Namen aktivieren oder
deaktivieren - letzteres ist etwa bei sehr langen Namen empfehlenswert.

Manche Attribute, z.B. Fx Select (Effekt-Auswahl) haben sehr viele
mögliche Optionen. Diese werden zunächst in einer langen
Scroll-Liste angezeigt. Klickt man auf die Titelleiste der
Scroll-Liste, so wechselt die Anzeige in ein großes Fenster mit
Raster, was ggf. übersichtlicher ist.

![FX tab of Attribute Editor for Synergy layer](/docs/images/FX-tab-of-Attribute-Editor-for-Synergy-layer.png)

Bei den Fx (Effekt)-Attributen werden die Namen der Effekte direkt
vom Ai-Server bezogen, so dass man wirklich das sieht, was auf dem
Server angewählt ist. Dies ist auch bei Plugins für generativen
Content der Fall, deren Namen man selbst bestimmt.

> Wird ein Layer ausgewählt und <Keys.HardKey>Locate</Keys.HardKey> gedrückt, so wird die Helligkeit
auf 100% gesetzt, aber sämtlche Medien und Effekte werden gecleared. Damit 
wird der Layer wieder in einen neutralen Ausgangszustand versetzt. **Um
etwas am Output zu sehen, muss nur noch ein Clip gewählt werden.**

Die Clips zeigen auch den Status des Umkodierens:

Wird gerade umgerendert | Warten auf Umrendern | Umrendern fehlgeschlagen
---|---|---
![Video currently transcoding in Attribute Editor for Synergy layer](/docs/images/Video-currently-transcoding-in-Attribute-Editor-for-Synergy-layer.png) | ![Video queued for transcoding in Attribute Editor for Synergy layer](/docs/images/Video-queued-for-transcoding-in-Attribute-Editor-for-Synergy-layer.png) | ![Video failed to transcode in Attribute Editor for Synergy layer](/docs/images/Video-failed-to-transcode-in-Attribute-Editor-for-Synergy-layer.png)

Für Ai-Layer lassen sich wie für andere Geräte auch [Paletten anlegen](../palettes/creating-palettes.md). So lassen sich z.B. Clip-Auswahl, 
Farbe, Position und vieles mehr in Paletten speichern, schnell aufrufen 
und verändern. Auch [Fadezeiten](../palettes/timing-with-palettes.md)
funktionieren wie gewohnt.

## Lightmap: Pixelmapping mit Ai

Mitunter will man auf Lampen, die im Pult gepatcht sind, auch
Video-Content wiedergeben, etwa wenn eine Wand aus vielen LED-Lampen
zusammengesetzt ist. Der Titan-Pixelmapper kann direkt den Output von Ai
verwenden - sowohl eines einzelnen Layers als auch eines ganzen
Surfaces. Dabei ist es nicht erforderlich, das Titan-Surface mit einem
Output des Servers zu verbinden.

> Im [Layout-Editor](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) werden die Lampen/Zellen so positioniert, wie sie auch
tatsächlich angeordnet sind, so dass jeweils der passende
Videoausschnitt angezeigt wird, siehe [nächster Abschnitt](#verwendung-des-layout-editors-mit-ai).

1.  **Starten Sie einen Clip** auf dem gewünschten Surface, etwa mit dem [Attribut-Editor](#layer-steuern-mit-dem-attribut-editor).

2.  Wählen Sie nun das Menü <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, dann <Keys.SoftKey>Pixel Mapper</Keys.SoftKey>.

3.  Wählen Sie die **[Gerätegruppe](../controlling-fixtures/fixture-groups.md)**, auf der 
	das Video laufen soll. Daraufhin öffnet sich der Effekt-Editor.

4.  Klicken Sie unten links auf das <Keys.ContextKey>+</Keys.ContextKey>, um einen Pixelmapper-Effekt
	hinzuzufügen.

5.  Klicken Sie oben rechts auf den <Keys.SoftKey>Ai</Keys.SoftKey> - Button.

![Adding an element in the Pixel Mapper Window](/docs/images/Adding-an-element-in-the-Pixel-Mapper-Window.png)

6.  Mit <Keys.SoftKey>Source Surface</Keys.SoftKey> kann die zu verwendende Quelle (Layer oder
	Surface) gewählt werden; auch kann man mit den Red/Green/Blue-Reglern
	die Farbe einstellen.

![Ai layer video overlay in Pixel Mapper Window](/docs/images/Ai-layer-video-overlay-in-Pixel-Mapper-Window.png)

Der gewählte Clip wird nun auf den Lampen der gewählten Gruppe
wiedergegeben. Dabei ist der Pixelmapper-Effekt mit dem Ai-Surface
verknüpft, und Änderungen in diesem haben unmittelbare Auswirkung auf
die Wiedergabe auf den Lampen.

![Pixel Mapped fixtures with Ai screen shown in Capture Visualiser](/docs/images/Pixel-Mapped-fixtures-with-Ai-screen-shown-in-Capture-Visualiser.png)

## Verwendung des Layout-Editors mit Ai

Die grundsätzliche Funktionsweise des Layout-Editors ist im Abschnitt
[Gerätereihenfolge und -anordnung in den Gruppen](../controlling-fixtures/fixture-groups.md#gerätereihenfolge-und--anordnung-in-den-gruppen) beschrieben.

Bei der Verwendung mit Synergy gibt es mit dem Kontext-Menü \[Media
Options\] einige sinnvolle Zusatzfunktionen zur Erstellung des Layouts.

### Show Video Overlay
Hier lässt sich jeder beliebige Layer und jedes
Surface über den anzuordnenden Lampen einblenden, um diese passend zu
positionieren.

![Show Video Overlay in Layout Editor for mapping fixtures to Ai Video layers](/docs/images/Show-Video-Overlay-in-Layout-Editor-for-mapping-fixtures-to-Ai-Video-layers.jpeg)

### Sample Region Overlay
Sind in Ai Sample Regions definiert (Wiedergabe-Ausschnitte), etwa bei der
gemischten Verwendung von HiRes-LED-Screens und Lampen, so werden diese 
Regionen eingeblendet.

![Sample Region Overlay in Layout Editor for mapping fixtures to Ai Video layers](/docs/images/Sample-Region-Overlay-in-Layout-Editor-for-mapping-fixtures-to-Ai-Video-layers.png)

### Position Overlay
Ist diese Option aktiviert, so wird, sobald ein
Gerät in Titan ausgewählt ist, dessen Position auf dem Ai-Output durch
dünne Linien angezeigt, womit eine noch genauere Positionierung möglich
ist.

![Position Overlay in Layout Editor for mapping fixtures to Ai Video layers](/docs/images/Position-Overlay-in-Layout-Editor-for-mapping-fixtures-to-Ai-Video-layers.png)

### Match Surface Resolution
Gestattet es, das Layout-Raster an die
Auflösung oder das Seitenverhältnis eines Surfaces (Ai-Outputs)
anzupassen. Klickt man darauf, erscheint eine Auswahlliste der
verfügbaren Surfaces. Wählt man eins davon aus, gibt es Buttons für
<Keys.SoftKey>Width</Keys.SoftKey> (Breite) und <Keys.SoftKey>Height</Keys.SoftKey> (Höhe), die mit den Werten, die sich
aus der Auflösung des Surfaces ergeben, vorbelegt sind. Normalerweise
wird man nicht das Grid in voller Auslösung verwenden, da ja die Lampen
deutlich größer sind. Ändert man aber Breite oder Höhe, so ändert sich
der andere Wert entsprechend mit, damit das Seitenverhältnis erhalten
bleibt.

![Match Surface Resolution in Layout Editor for mapping fixtures to Ai Video layers](/docs/images/Match-Surface-Resolution-in-Layout-Editor-for-mapping-fixtures-to-Ai-Video-layers.png)

Im Layout-Editor lassen sich Geräte auch skalieren, um die relative
Größe an die tatsächlichen Größenverhältnisse anzupassen. Dazu klickt
man auf den Kontext-Button <Keys.SoftKey>Position and Angle</Keys.SoftKey>, bis dieser \[Fixture
Scale\] zeigt. Skaliert man Geräte mit Zellen sehr klein, so
verschwinden die einzelnen Zellen, und alle Zellen arbeiten synchron.

## Phasensteuerung von Keyframe-Shapes durch Ai

Die Phase von Keyframe-Shapes lässt sich durch die Helligkeit eines
Ai-Videos steuern. Damit lassen sich sehr abgefahrene Effekte erzeugen,
da praktisch sämtliche Aspekte der Lampen durch ein Video gesteuert
werden können. Die Helligkeit von 0 bis 100% ist dabei mit der
Phasenlage 0 bis 360° verknüpft.

Ist der [Keyframe-Shape erstellt](../effects/key-frame-shapes.md#einen-keyframe-shape-erzeugen), so gibt 
es unten im Effekt-Editor den Button [Phase Master](../effects/key-frame-shapes.md#steuerelemente-für-shape-und-layer), 
mit dem man das gewünschte Surface als Master auswählt.

![Phase Master using Ai screen in Keyframe Shape](/docs/images/Phase-Master-using-Ai-screen-in-Keyframe-Shape.png)

## Bänke und Clips mit speziellen Funktionen

Wählt man im Attribut-Editor Bänke und Clips aus, so haben einige
Nummern spezielle Funktionen, um direkt den Output andererScreens und
Layer zu verknüpfen. Damit kann man das Arbeiten deutlich vereinfachen
und ggf. auch Rechenleistung sparen, wenn der gleiche Inhalt auf
mehreren Outputs gezeigt werden soll.

Bank/Clip | Function
---|---
&nbsp;**Bank 240 - 255** | Verlinkt auf Surface/Screen Fixture 1-16.
&nbsp;**Clip 0 - 200** | Verlinkt auf Layer 1-201 auf diesem Surface.
&nbsp;**Clip 255** | Verlinkt auf das Screen Fixture als Ganzes (alle Layer).