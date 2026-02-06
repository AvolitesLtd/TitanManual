---
id: layouts
title: Layouts
sidebar_label: Layouts
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Bei Anwählen von Fixtures ist es hilfreich, wenn diese wie in einem Plan dargestellt werden.
Das Fenster Layouts erlaubt es, mehrere verschiedene solche Darstellungen anzulegen, in denen jeweils einzelne oder alle Geräte angezeigt werden. Man kann auch einen Plan als Grafik importieren, auf dem die Geräte angezeigt werden. Die Fixtures können selektiert werden, und die Helligkeit, das aktuelle Gobo und die Farbe werden angezeigt (soweit die Geräte über diese Attribute verfügen).

Auch Playbacks, Macros und Gruppen könne in Layouts integriert werden, so dass man einen schnellen Zugriff hat ohne Fenster wechseln zu müssen.

![Layout screen](/docs/images/Layouts-With-Gobos.png)

## Anlegen eines Layouts

Es können beliebig viele Layouts erzeugt und auf den Buttons im Fenster **Layouts** gespeichert werden.

1. Wählen Sie die Geräte, die in dem Layout enthalten sein sollen (kann auch später erfolgen oder geändert werden).
2. Drücken Sie 2x die Taste <Keys.HardKey>Open/View</Keys.HardKey> und wählen Sie <Keys.SoftKey>Layouts</Keys.SoftKey>.
3. Klicken Sie auf einen leeren Button im Fenster Layouts.
4. Geben Sie eine passende Legende ein (Bezeichnung, Skizze).
5. Klicken Sie erneut auf den Button oder drücken Sie auf <Keys.SoftKey>Record Layout</Keys.SoftKey>.
6. Das Layout wurde gespeichert. Klickt man auf den Button, so wird das Layout geöffnet.

Wurden die Fixtures gleich als Gruppe angewählt, so wird das Gruppenlayout direkt in das neue Layout übernommen. Siehe [Fixtures aus Gruppenlayouts per Record hinzufügen](./layouts.md#fixtures-aus-gruppenlayouts-per-record-hinzufügen) im nächsten Abschnitt.

> Haben Sie nur einen Bildschirm, so empfiehlt es sich, für den Layout-Editor einen Workspace anzulegen, so dass man beim Kopieren der Geräte einfach die Fenster wechseln kann.

### Gerätedarstellung

In dem Layout wird jedes Gerät durch ein quadratisches 'Element' dargestellt, wobei das eingestellte [Fixture-Halo](../titan-basics/workspace-windows.md#button-halo) angezeigt wird (farbiger Rand).

![Layout fixture mimics](/docs/images/Layouts-Fixture-Mimics.png)

- In der linken oberen Ecke steht die Gerätenummer, unten in der Mitte der aktuelle Pegel.
- Mittig wird die Farbe und das aktuelle Gobo angezeigt (wenn dies in der Personality korrekt angelegt ist). Dies lässt sich mit der Einstellung *Show Fixture Mimics* im Tab 'Elements' der Layout View-Optionen de- oder aktivieren (klicken Sie dazu auf den Kontextbutton <Keys.ContextKey>Options</Keys.ContextKey>).
- Geräte im Programmer werden mit einer Leiste in Cyan unten angezeigt.
- Geräte mit laufenden Effekten werden mit einer Tilde ( ~ ) oben rechts angezeigt.
- Läuft gerade ein Dimmereffekt, so wird der Pegel gelb angezeigt.
- Die Vorderseite der Fixtures wird durch einen Pfeil angegeben.

Einfache Dimmer werden normalerweise weiß angezeigt. Dies lässt sich ändern, um z.b. die Farbe des verwendeten Filters anzuzeigen: wählen Sie das Gerät aus und schalten Sie die Funktion der Encoder mit der unteren Menütaste auf <Keys.SoftKey>Wheels=Visualiser</Keys.SoftKey> um, wählen die Attributbank Colour, und stellen mit den Encodern die gewünschte Farbe ein.

### Funktionen der Layout-Anzeige
Der Layout-View (die Anzeige) kann durch Klicken auf das <Keys.ContextKey>Lock</Keys.ContextKey> rechts oben gesperrt werden.

- Zum Positionieren der einzelnen Elemente muss das Layout **entsperrt** sein. Dann können die Elemente angeklickt und gezogen werden, oder man verwendet die Encoder. Geräte können so nicht zum Programmieren angewählt werden.
- Um dagegen Fixtures zum Programmieren und Steuern anzuwählen, muss das Layout **gesperrt** sein. So können Geräte ausgewählt, aber nicht verschoben werden. Playbacks sowie Macros und Gruppen funktionieren ebenfalls nur im gesperrten Modus.

Mit dem Schieberegler links kann man in das Layout hinein- bzw. daraus herauszoomen. Mit einem Klick auf <Keys.ContextKey>Zoom to Fit</Keys.ContextKey> wird das Layout formatfüllend dargestellt.

Mit den Buttons <Keys.ContextKey>Select</Keys.ContextKey> und <Keys.ContextKey>Pan</Keys.ContextKey> kann man entweder per Auswahlbox mehrere Elemente anwählen oder per Hand-Werkzeug die komplette Ansicht verschieben ('pannen').

## Elemente zum Layout hinzufügen

Es gibt mehrere Wege, Elemente zu einem Layout hinzuzufügen. Zum Löschen wiederum drückt man die Taste <Keys.HardKey>Delete</Keys.HardKey> und klickt auf das zu löschende Element im Layout.

### Fixtures per Copy hinzufügen

Drücken Sie die Taste <Keys.HardKey>Copy</Keys.HardKey>, wählen Sie die gewünschten Geräte aus, und klicken Sie im layout auf die Stelle, an der die Geräte eingefügt werden sollen.

-   Die Geräte werden alle nebeneinander in einer Zeile angeordnet. Die Positionierung lässt sich später ändern.

### Fixtures aus Gruppenlayouts per Record hinzufügen

Werden die Geräte nicht einzeln, sondern gleich als Gruppe angewählt, und wurde für die Gruppe bereits die Geräteanordnung (also das Gruppenlayout) editiert, siehe [Gruppenlayout](../controlling-fixtures/fixture-groups.md#gruppenlayout), so wird dieses auch in das Layout übertragen.

Wählen Sie dazu Gerätegruppen aus, drücken <Keys.HardKey>Record</Keys.HardKey>, und klicken auf einen Layout-Button im **Fenster Layouts**. Wählen Sie eine der Menüoptionen:

-   <Keys.SoftKey>Replace</Keys.SoftKey> alle vorhandenen Elemente werden aus dem Layout gelöscht und die Elemente der ausgewählten Gruppen neu eingefügt.
-   <Keys.SoftKey>Merge</Keys.SoftKey> die Elemente der Gruppen werden zu den bereits vorhandenen hinzugefügt.
-   <Keys.SoftKey>Update Fixture Positions from Programmer</Keys.SoftKey> die selektierten Geräte werden anhand des Gruppenlayouts neu positioniert.

Eingefügt wird immer von oben links an beginnend. Enthalten die Gruppen kein Gruppenlayout oder wurden die Fixtures einzeln angewählt, so werden diese nebeneinander in einer Zeile ind das Layout eingefügt.

### Playbacks, Gruppen und Macros hinzufügen

Buttons für Playbacks, Gruppen und Macros können ebenfalls in eine Layout eingefügt werden, so dass man damit arbeiten kann, ohne laufend Fenster wechseln zu müssen.

Drücken Sie die Taste <Keys.HardKey>Copy</Keys.HardKey>, wählen das Playback, die Gruppe oder das Macro aus, und klicken im Layout an die gewünschte Stelle. Es können auch mehrere Elemente gleichzeitig ausgewählt und eingefügt werden.

![Group handles in Layout](/docs/images/Layouts-Group-Handles.png)

-  Ist das Layout *entsperrt*, so kann man Elemente löschen, indem man auf <Keys.HardKey>Delete</Keys.HardKey> drückt und die zu löschenden Elemente im Layout auswählt. Die originalen Objekte (Playbacks, Fixtures etc.) werden damit nicht gelöscht. Ist das Layout dagegen *gesperrt*, so werden beim Löschen der Layout-Elemente auch die originalen Objekte gelöscht.

## Anordnen der Elemente in einem Layout

Die Elemente eines Layouts können sowohl manuell als auch unter Zuhilfenahme einiger Werkzeuge angeordnet werden.

### Elemente manuell anordnen

Wählen Sie ein oder mehrere Elemente aus und ziehen Sie diese im Layout auf die gewünschte Position. Dabei folgen die Elemente immer dem Raster.

Ebenso kann man die Elemente mit den Encodern verschieben und drehen. Die Steuerung mit den Encodern kann man deaktivieren: klicken Sie auf die Kontext-Option <Keys.ContextKey>Position & Angle</Keys.ContextKey> (womit diese wechselt auf <Keys.ContextKey>No Wheel Control</Keys.ContextKey>).

Positioniert man Elemente mit den Encodern, so kann man sie auch gegen das Raster verschieben. Dazu dient die Kontext-Option <Keys.ContextKey>Wheels Move Full Pixel</Keys.ContextKey> / <Keys.ContextKey>Wheels Move Sub Pixel</Keys.ContextKey>. Sind Elemente einmal vom Raster getrennt, so behalten sie ihre Verschiebung aus dem Raster, bis sie entweder mit den Encodern wieder genau am Raster ausgerichtet wurden oder die Kontext-Funktion <Keys.ContextKey>Snap Selected Elements to Grid</Keys.ContextKey> verwendet wurde.

Solange die Option <Keys.ContextKey>Wheels Move Full Pixel</Keys.ContextKey> aktiviert ist, erfolgt das Drehen von Objekten in 45°-Schritten, anderenfalls kann stufenlos gedreht werden. Sind mehrere Elemente ausgewählt, so kann man mit der Option <Keys.ContextKey>Wheels Rotate Individual Elements</Keys.ContextKey> / <Keys.ContextKey>Wheels Rotate Selection</Keys.ContextKey> einstellen, ob jedes Element individuell oder aber alle um das gemeinsame Zentrum gedreht werden sollen.

### Elemente in Formen anordnen

Elemente können automatisch als Rechteck, Oval/Kreis, oder als Dreieck angeordnet werden.

1. Klicken Sie auf <Keys.ContextKey>Arrange Elements</Keys.ContextKey> im Kontextbereich.
2. Wählen Sie die Option <Keys.ContextKey>Shape</Keys.ContextKey>.
3. Legen Sie im Menü mit <Keys.SoftKey>All Elements</Keys.SoftKey> / <Keys.SoftKey>Selected Elements</Keys.SoftKey> fest, ob alle Elemente des Layouts oder nur die angewählten Elemente entsprechend angeordnet werden sollen. 
4. Wählen Sie im Menü mit <Keys.SoftKey>Shape=</Keys.SoftKey> die gewünschte Form der Anordnung.
5. Geben Sie die Anzahl von Zeilen und Spalten des Rasters vor, wie groß die Anordnung sein soll. Dazu dienen die Menütasten <Keys.SoftKey>Width=</Keys.SoftKey> (Breite) und <Keys.SoftKey>Height=</Keys.SoftKey> (Höhe).
6. Bestimmen Sie mit <Keys.SoftKey>Arrange in Rows</Keys.SoftKey> / <Keys.SoftKey>Arrange in Columns</Keys.SoftKey>, in welcher Reihenfolge die Geräte/Elemente angeordnet werden (erst von links nach rechts und dann von oben nach unten, oder umgekehrt).
7. Klicken Sie zum Abschluss auf <Keys.SoftKey>OK</Keys.SoftKey>.

### Anordnen von Geräten aus dem Visualiser

Wurden Fixtures bereits im internen Capture-Visualiser positioniert, , so kann diese Positionierung auch in Layouts verwendet werden.

1. Klicken Sie auf <Keys.ContextKey>Arrange Elements</Keys.ContextKey> im Kontextbereich.
2. Wählen Sie die Option <Keys.ContextKey>From Capture</Keys.ContextKey>.
3. Legen Sie im Menü mit <Keys.SoftKey>All Elements</Keys.SoftKey> / <Keys.SoftKey>Selected Elements</Keys.SoftKey> fest, ob alle Elemente des Layouts oder nur die angewählten Elemente entsprechend angeordnet werden sollen. 
4. Wählen Sie im Menü mit <Keys.SoftKey>Projection=</Keys.SoftKey> die gewünschte Perspektive (Top, Front, Side) der Anordnung.
5. Wenn erforderlich stellen Sie mit <Keys.SoftKey>Scale=</Keys.SoftKey> die Skalierung ein, z.B. so, dass die Geräte nicht überlappend angezeigt werden.
6. Klicken Sie auf <Keys.SoftKey>Apply</Keys.SoftKey>, um eine Vorschau des Ergebnisses zu sehen.
7. Ist alles wie gewünscht, so drücken Sie auf <Keys.SoftKey>Apply and Exit</Keys.SoftKey> um die Positionierung zu übernehmen.

### Rasteroptionen

Das angezeigte Raster kann vergrößert werden, um mehr Geräte platzieren zu können. Ebenso kann es komplett ausgeblendet werden.

Um den Rasterbereich zu vergrößern oder zu verkleinern, klicken und ziehen Sie die Anfasser in den Ecken des Rasters auf die gewünschte Größe. Das Layout muss dazu *entsperrt* sein. Mit der Kontext-Option <Keys.ContextKey>Crop Grid</Keys.ContextKey> kann das Raster genau auf die passende Größe gebracht werden, um alle vorhandenen Elemente anzuzeigen.

Um das Raster ein- oder auszublenden, öffnen Sie die Optionen des Layouts über den Kontext-Button <Keys.ContextKey>Options</Keys.ContextKey>. Auf der Seite Layout kann mit dem Schalter <Keys.ContextKey>Show Grid</Keys.ContextKey> das Raster ein- und ausgeblendet werden.

### Einen Plan als Hintergrund eines Layouts laden

Optional kann ein Plan - oder ein sonstiges Bild - als Hintergrund eines Layouts geladen werden.

![Layout with imported plan](/docs/images/Layouts-With-Plan.png)

1. Speichern Sie den Plan als Grafik (png, bmp, jpg - nicht als PDF).
2. Öffnen Sie die Optionen des Layouts über den Kontext-Button <Keys.ContextKey>Options</Keys.ContextKey>und dort die Seite Layout.
3. Klicken Sie auf 'Background Image', um den Dateibrowser zu öffnen.
4. Wählen Sie das gewünschte Bild.

Mit <Keys.SoftKey>Scaling Mode</Keys.SoftKey> lässt sich festlegen, wie das Bild skaliert werden soll:
- None (keine Skalierung)
- Letterbox (Skalierung, so dass Höhe und Breite passt, mit schwarzen Rändern wenn zu klein)
- Fill (Skalierung, so dass Höhe und Breite passt; was zu groß ist, wird abgeschnitten)
- Stretch (Verzerrung, so dass alles angezeigt wird, aber das Seitenverhältnis gestaucht/gestreckt wird)

Die Helligkeit/Transparenz des Hintergrundbildes kann mit <Keys.SoftKey>Background Image Opacity</Keys.SoftKey> eingestellt werden (numerisch eingeben oder mit Encoder A; 0% = voll transparent, 100% = keine Transparenz, volle Helligkeit).

## Umschalten zwischen Layouts

Zum Wechseln zwischen Layouts klicken Sie entweder auf ein anderes Layout im Fenster **Layouts**, oder Sie verwenden die Kontext-Funktion <Keys.ContextKey>Open Layout</Keys.ContextKey> und wählen das gewünschte Layout mit den Menütasten
