---
id: changing-fixture-attributes
title: Attributwerte ändern
sidebar_label: Attributwerte ändern
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Sobald ein oder mehrere Geräte zum Steuern ausgewählt sind, gibt es verschiedene 
Möglichkeiten, diese zu steuern.

## Einstellen von Attributen mit den Encodern

"Attribute" sind die einzelnen Funktionen des Gerätes, wie Pan
(Schwenken), Tilt (Neigen), Farbe, Dimmer etc. Wählen Sie die zu
bearbeitenden Attribute mit den IPCGBESFX Attribut-Tasten, und stellen Sie den
gewünschten Wert mit den Rädern ein. Die verfügbaren Attribute sind
abhängig vom Gerätetyp. Dimmerkanäle besitzen nur das Attribut \'Dimmer\'.

Im Display direkt über den Encodern werden die aktuelle Attributbank (hellgrau) 
und die momentanen Werte bei den Encodern angezeigt. Ein hellblauer Kreis markiert 
Attribute im Programmer. Die genaue Anzeige der Werte ist davon abhängig, ob 
das Attribut kontinuierlich gesteuert werden kann (Prozent-Anzeige) oder ob 
zwischen verschiedenen Werten umgeschaltet wird (z.B. feste Farben oder Gobos).

![Wheels](/docs/images/Wheels.png)

Die Attribute können auch im [Attribute Editor Fenster](./changing-fixture-attributes#das-fenster-attribut-editor) eingestellt werden.

> Auf dem Pearl Expert dienen je nach Benutzereinstellung die Encoder des Touchwings zum Einstellen der Attribute.

Jede einzelne Attribut-Taste kann mehrere Attribute steuern, von denen
jedes einem Rad zugeordnet ist. Beim Diamond 9 und beim Sapphire Touch werden 
mit dem Trackball Pan und Tilt gesteuert; der äußere Ring steuert normalerweise 
den Dimmer, wobei sich dies mit der Taste <Keys.HardKey>Assign</Keys.HardKey> 
direkt daneben ändern lässt.

1. Nach der Anwahl der betreffenden Geräte betätigen Sie die Taste des
einzustellenden Attributs.
2. Benutzen Sie die Encoder, um den Wert des Attributs einzustellen.
Das Display oberhalb der Räder zeigt, welche Attribute momentan
gesteuert werden, und die verfügbaren Einstellungen lassen sich mit den
Encoder durchschalten. Ebenso können die einzelnen Werte im 'Walzen'-Fenster 
des Touchscreens durchgeschaltet werden. Für stufenlos steuerbare Funktionen (etwa ein
Dimmer) schaltet die Walze auf 100% bzw. 0.
3. Wiederholen Sie Schritt 1 und 2, um weitere Attribute der gewählten
Geräte einzustellen.

---

Weitere wissenswerte Dinge zu Attributen:

![Toggle Attributes](/docs/images/Toggle-Attributes.png)

-   Wird im Display rechts neben den Attributen ein kleiner Pfeil angezeigt,
	so bedeutet das, dass auf dieser Bank mehr als drei Attribute zu steuern sind. 
	In diesem Fall kann man durch mehrfaches Anwählen der Attributbank durch 
	die Attribute durchschalten. Angenommen ein Scheinwerfer habe die Attribute 
	Red, Green, Blue, Amber und White, so wird beim ersten Klicken auf <Keys.HardKey>Colour</Keys.HardKey> 
	Red, Green und Blue gesteuert und beim nächsten Klick Amber und White.

-   Befindet sich ein Attribut im Programmierspeicher, so wird es hellblau
    angezeigt (siehe 'Green' in obigem Bild). Dies ermöglicht einen
    schnellen Überblick darüber, was momentan im Program­mierspeicher
    ist.

-   Wird das angewählte Attribut nicht im Display oberhalb der Räder
    angezeigt, so ist es für die angewählten Geräte nicht verfügbar.

-   Die Räder arbeiten in einem 'Beschleunigungsmodus'. Wird ein Rad
    schnell bewegt, so folgt das Gerät schnell und in groben
    Abstufungen. Wird es dagegen langsam bewegt, folgt das Gerät in
    kleinstmöglichen Schritten.

-   Wird beim Drehen des Rades die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt, so arbeitet
    das Rad im 'Schnell'-Modus: eine Radumdrehung durchläuft den
    gesamten Bereich des Attributes. Wird etwa bei gedrückter
    <Keys.HardKey>AVO</Keys.HardKey>-Taste das Rad für Pan bewegt, so macht das Gerät bei einer
    Radumdrehung einen kompletten Schwenk von einem Anschlag zum
    anderen.

-   Für einige LED-Geräte mit Farbmischung gibt es eine 'virtuelle
    Dimmerfunktion', wenn das Gerät selbst über keinen Dimmer verfügt:
    dazu wirkt das Intensity-Rad als Hauptregler für die einzelnen
    Farben.

## Der Trackball (Diamond 9 und Sapphire Touch)

Der Trackball steuert normalerweise Pan und Tilt der Geräte, und der äußere Ring den Dimmer. 
Man kann den Trackball aber auch anderen Attributen zuweisen:

1. Wählen Sie ein paar Geräte aus, die das zu steuernde Attribut haben (nur damit 
 dieses zur Auswahl steht).
2. Wählen Sie die entsprechende Attributbank, so dass das gewünschte Attribut mit einem 
Encoder gesteuert werden kann.
3. Drücken Sie die Taste <Keys.HardKey>Assign</Keys.HardKey>.
4. Wählen Sie im Menü die gewünschte Funktion <Keys.SoftKey>Track Ball X</Keys.SoftKey>, <Keys.SoftKey>Track Ball Y</Keys.SoftKey> oder <Keys.SoftKey>Wheel Z</Keys.SoftKey>.
5. Drücken Sie die <Keys.HardKey>@</Keys.HardKey>-Taste des Rades, mit dem gerade das betreffende Attribut gesteuert wird.

Damit ist das Attribut entsprechend zugewiesen, und das Menü wird geschlossen. 
Um die Zuweisung zu überprüfen, drücken Sie wieder auf <Keys.HardKey>Assign</Keys.HardKey>. Daraufhin wird im Menü die aktuelle Zuweisung angezeigt.

- Mit dem Trackball kann auch der Mauszeiger gesteuert werden, siehe [Trackball (Maus-Steuerung)](../titan-basics/workspace-windows.md#trackball-diamond-9-and-sapphire-touch-only).


## Dimmer-Handrad (Nur beim Diamond 9)

Auf dem Diamond 9 gibt es ein gesondertes Handrad zur Steuerung des Dimmers der 
ausgewählten Geräte. Oberhalb dessen wird der aktuelle Wert in einem separaten 
Display angezeigt. Dieses Handrad steuert immer den Dimmerwert und wird nicht 
mit den Attributbänken umgeschaltet. (Es kann aber wie nachstehend beschrieben 
anderen Attributen zugewiesen werden).

Unterhalb des Handrades befindet sich eine <Keys.HardKey>Level @</Keys.HardKey> Taste, mit 
der das Menü zum Einstellen des Dimmerwertes aufgerufen werden kann (siehe [Einstellen von Attributwerten per @-Taste](../controlling-fixtures/changing-fixture-attributes.md#adjusting-attributes-with-the--buttons)). 

- Das Handrad kann zur Steuerung eines anderen Attributs zugewiesen werden. Gehen 
Sie dazu wie beim Ändern der Zuordnung des Trackballs vor (s.o.), wählen aber bei Schritt 
4 die Funktion <Keys.SoftKey>Level Wheel</Keys.SoftKey>. 
Das Display oberhalb des Handrades zeigt nun den Wert des neu zugewiesenen Attributs an.

## Das Fenster 'Attribut-Editor'

Für Attribute mit festen Werten wie Gobos oder Farbräder ist das Fenster
'Attribut-Editor' ggf. besser geeignet als die Encoder. Es bietet darüber
hinaus einen Farbwähler für Geräte mit RGB- oder CMY-Farbmischung.

Das Diamond 9 hat einen separaten Touchscreen nur für den Attribut-Editor. 
Auf allen anderen Pulten gibt es diesen als normales Arbeitsfenster. 
Drücken Sie zweimal auf [<Keys.HardKey>Open/View</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) und wählen <Keys.SoftKey>Attribute Editor</Keys.SoftKey>, um den
Attribut-Editor einzublenden. Oder klicken Sie auf den Attribut-Namen
direkt unterhalb der IPCGBES-Schaltflächen auf dem Display.

Die Schaltflächen links im Fenster 'Attribut Control' wählen das zu
ändernde Attribut.

![Attribute Editor](/docs/images/Attribute-Editor.png)

Der übrige Bereich des Fensters enthält Schaltflächen und
Steuerelemente, um den Attributwert einzustellen. Bei Attributen mit
festen Werten (Gobos, Farben etc.) gibt es für jeden einzelnen Festwert
eine Schaltfläche; dies ermöglicht eine deutlich schnellere Auswahl als
mit den Rädern.

Beim Aufruf eines Wertes wird dessen Schaltfläche blau, um zu
signalisieren, dass dieser Wert im Programmierspeicher ist. Ein erneutes
Betätigen der Schaltfläche löscht diesen Wert aus dem
Programmierspeicher.

Beim Anwählen des Titels einzelner Attribute (z.B. "Gobo 2") werden
sämtliche Einstellmöglichkeiten dieses Attributs im gesamten Fenster
angezeigt. Siehe nächstes Bild. Bilder der Gobos werden angezeigt,
sofern die Personality die entsprechenden Informationen enthält.

![Gobo Selection](/docs/images/Gobo-Selection.png)

Für stufenlos einstellbare Attribute (z.B. Dimmer) erscheint ein Regler
im Display, sobald die Schaltfläche gedrückt gehalten wird. Der Regler
lässt sich einfach durch Bewegen des Fingers verstellen.

![Range slider](/docs/images/Range-slider.png)

Verfügt das gewählte Gerät über Teilgeräte (Subfixtures), so erscheinen
oben im Attribut-Editor Schaltflächen zur Auswahl der einzelnen Zellen
bzw. des Gesamtgerätes (links). Die Buttons der einzelnen Zellen werden
in der Anordnung der wirklichen Zellen angezeigt.

![Cells](/docs/images/Cell-Selection.png)

Einzelne Attribute haben je nach Funktion gesonderte Anzeigen:

### Dimmer/Shutter

![Intensity Shutter](/docs/images/Intensity-Shutter.png)

Speziell unterteilter Fader und Buttons für 0%, 100%, +5%, -5% sowie
Locate (nur Dimmer).

### Position

![Position](/docs/images/Position.png)

Pan/Tilt-Steuerung per X/Y-Raster. Dabei werden die angewählten Geräte
durch Kreis angezeigt, was die Steuerung vereinfacht. Weitere
Steuerungsmöglichkeiten:

-   Mit <Keys.SoftKey>Locate</Keys.SoftKey> wird die Position auf 50% Pan/50% Tilt 
    gesetzt, ohne andere Attribute zu verändern.

-   Mit <Keys.SoftKey>Align</Keys.SoftKey> wird Pan/Tilt auf die Werte des zuletzt angewählten
    Gerätes gesetzt. Möchte man z.B. alle angewählten Geräte auf den
    Wert des ersten Gerätes bringen, so wählt man die Geräte in der
    Reihenfolge 2-3-4-1 aus und klickt <Keys.SoftKey>Align</Keys.SoftKey>.

-   Mit Pan/Tilt Lock lässt sich die Bearbeitung mehrerer Geräte auf
    einmal vereinfachen, indem entweder Pan oder Tilt kurzzeitig von der
    Bearbeitung ausgenommen wird. Hat man z.B. die gerät in Pan
    aufgefächert und will nur Tilt etwas nachziehen, so verhindert Pan
    Lock, dass der bereits eingestellte Fächer verlorengeht.

-   Mit dem Button <Keys.SoftKey>Fine</Keys.SoftKey> lässt sich die Auflösung 
    verringern, so dass man die gewünschte Position sehr genau ansteuern kann.

### Farbmischung: Channel

Für Geräte mit Farbmischung gibt es mehrere Möglichkeiten, die Farbe
einzustellen; diese sind in verschiedenen Reitern oben im
Attribut-Editor zusammengefasst. (Wird das Fenster zu einer Hochkant-Anzeige 
verändert, so werden die Fader horizontal und nicht vertikal wie im Bild gezeigt dargestellt).

![Attribute Editor - Colour Channels](/docs/images/Attribute-Editor-Channels.png)

Auf dem Reiter **Channel** gibt es einen Regler pro tatsächlich im Gerät
vorhandenen Farb-Attribut; entsprechend hängt die Anzahl und Art der
Fader vom gewählten Gerät ab (z.B. sieben Fader beim ETC Lustr). Dies
bietet sich z.B. bei der gezielten Bearbeitung einzelner Farbtöne an,
oder etwa dann, wenn man nur einzelne Kanäle (z.B. Weiß oder UV)
speichern möchte.

### Farbmischung: HSI/RGB/CMY

![Attribute Editor - Colour Mix](/docs/images/Attribute-Editor-HSI-RGB-CMY.png)

HIS/RGB/CMY bietet sowohl den klassischen Colourpicker als auch Fader
für die unterschiedlichen Farbmischsysteme, die sich sämtlich
gegenseitig beeinflussen, abhängig davon, welchen Wert man gerade
verändert. Klickt man in den Colourpicker, so werden alle Fader auf den
für diese Farbe erforderlichen wert gesetzt. So lässt sich z.B. mittels
Saturation eine Pastellfarbe erreichen, ohne den Farbton (Hue) zu
verändern.

Für Geräte mit Farbmischung funktionieren stets alle drei Fadersysteme
parallel, unabhängig davon, nach welchem System genau das Gerät
arbeitet.

### Farbmischung: Picker

![Attribute Editor - Colour Picker](/docs/images/Attribute-Editor-Picker.png)

Dies ist der aus früheren Versionen gewohnte Colourpicker: in dem großen
Feld lässt sich die gewünschte Farbe wählen (Hue und Saturation),
während der Fader rechts daneben die Helligkeit (Intensity, I) regelt.

### Farbmischung: Filters

![Attribute Editor - Colour Filters](/docs/images/Attribute-Editor-Filters.png)

Auswahl der Farbe nach Farbfilter-Nummer; dabei stehen die Systeme von
Lee, Roscolux und GamColor zur Verfügung. Mit der Suchleiste oben im
Fenster kann nach einer bestimmten Nummer gesucht werden. Per
Kontext-Button kann zwischen <Keys.SoftKey>Order Filters by Number</Keys.SoftKey> (nach Nummer
sortieren) und <Keys.SoftKey>Order Filters by Hue</Keys.SoftKey> (nach Farbton sortieren)
umgeschaltet werden.

> Für Geräte mit RGBW, RGBA oder WW/CW-Steuerung steuert der Colourpicker auch die Kanäle für Weiß und Amber. Dies ist seit Titan Version 9 implementiert; in älteren Versionen müssen diese Attribute manuell eingestellt werden.

### Medienserver/Active Fixtures

Aktive Geräte (z.B. Medienserver) zeigen ein Vorschaubild des
Video­clips auf der jeweiligen Schaltfläche. Dabei muss der Medienserver
das Protokoll CITP unterstützen sowie als Aktives Gerät gepatcht sein,
damit diese Vorschauen angezeigt werden können.

Für Ai-Server und Synergy sei auf [Synergy](../synergy.md) verwiesen, wo
Einrichtung und Verwendung ausführlich beschrieben sind. 

![Clip Selection](/docs/images/Clip-Selection.png)

### Shutterblenden/Keystone

Geräte, bei denen man eine Kissenentzerrung (Keystoning) oder
Blendenschieber per DMX steuern kann, lassen sich ebenfalls komfortabel
per Attribut Editor steuern: ziehen Sie die Ecken bzw. Kanten auf dem
Bildschirm einfach auf die gewünschte Position. Die genaue Darstellung
und Funktionsweise hängt dabei vom jeweiligen Gerät ab.

![Attribute Editor - Blades](/docs/images/Attribute-Editor-Blades.png)

> Ggf. sind aktualisierte Personalities erforderlich, um die 
Keystone/Blendenschieber-Funktionalität zu nutzen. Laden Sie dazu 
die neueste [Personality-Library](../fixture-personalities.md#herunterladen-der-personalities-bei-avolites) 
herunter, installieren diese und [aktualisieren die bereits gepatchten Geräte](../patching/changing-the-patch.md#bereits-gepatchte-personalities-aktualisieren).

## Direkte Eingabe für Attributwerte

Für aktuell den Rädern zugeordnete
Attribute lassen sich direkt numerische Werte eingeben. Dazu müssen Sie
sich im Hauptmenü befinden (drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, bis die senkrechte
Menüleiste 'Program Menu' anzeigt).

Geben Sie mit den Zifferntasten eine Zahl ein und betätigen dann eine
der Multifunktionstasten, um den Wert einem Attribut zuzuordnen. Die
Beschriftung der Taste zeigt, wie der Wert vom Gerät dargestellt wird
(z.B. <Keys.SoftKey>Gobo 5</Keys.SoftKey> oder <Keys.SoftKey>Deep Blue</Keys.SoftKey>).

![Attribute Softkey](/docs/images/Attribute-Softkey.png)

Für Attribute, deren Wert in Prozent dargestellt wird, wie etwa Dimmer
oder Farbmischung, geben Sie einen Wert zwischen 0 und 100 ein, um den
entsprechenden Prozentwert einzustellen. Für Attribute mit mehreren
Festwerten, wie z.B. feste Farbräder, geben Sie den Index des
gewünschten Wertes ein; um etwa die dritte Farbe des Farbrades
anzuwählen (wie in der Liste über dem Rad angegeben), geben Sie eine 3
ein.

## Eingeben von Attributwerten mit den @-Tasten

Drückt man die <Keys.HardKey>@</Keys.HardKey>-Taste bei einem der Räder, so öffnet sich das Menü zum
numerischen Eingeben der Attributwerte.

Dieses Menü lässt sich auch öffnen, indem man auf den mittleren Bereich
der Anzeige der Attributwerte (oberhalb der Räder) anklickt, oder durch
Anklicken eines Attributs im Channel Grid (Kanalübersicht).

(Beim Tiger Touch dienen die drei Tasten zwischen den Rädern als
<Keys.HardKey>@</Keys.HardKey>-Tasten, beim Pearl Expert gibt es 
diese Tasten nicht, und man muss eine der anderen Varianten nutzen).

Folgende Funktionen stehen auf den Menütasten zur Verfügung:

-   Select Function (Funktion wählen): damit werden die verschiedenen
    Festwerte auf die Multifunktionstasten zur Auswahl gelegt (für
    Dimmerkanäle gibt es eine Reihe von Abstufungen)

-   Touch/Clear: lädt das Attribut in den Programmierspeicher oder
    entfernt es daraus

-   Locate: setzt das Attribut auf Locate-Werte (wird nicht in den
    Programmierspeicher übernommen)

-   Release: gibt das Attribut frei

-   Off: setzt das Attribut auf Off. Damit wird es vorübergehend
    deaktiviert, der Wert bleibt aber im Programmierspeicher und kann
    mit On wieder aktiviert werden.

-   On: aktiviert das Attribut wieder zu On (wird On in einen Cue oder
    eine Palette verschmolzen, so wird ein vorher mittels Off
    deaktivierter Wert wieder aktiv)

-   Freeze/Unfreeze: Fixieren des Attributes bzw. Fixierung aufheben

## Attributgruppen -- IPCGBES-FX

Zur Vereinfachung sind die Attribute nach ihrer grundlegenden Funktion
gruppiert und mit den Buchstaben IPCGBESFX versehen:

I-Intensity/Helligkeit (Dimmer, Stroboskop, Shutter)

P-Position (Pan, Tilt)

C-Colour/Farbe (feste Farbräder, Farbmischung)

G-Gobo (Goboräder, Rotation, Index)

B-Beam (Iris, Fokussierung, Zoom, Beam Shaper)

E-Effects/Effekte (Prisma)

S-Special (Geschwindigkeit)

FX-Shapes, Pixelmapper

Diese Gruppen werden vielfach verwendet, um die einzelnen Attribute zum
Bearbeiten auszuwählen, insbesondere beim Maskieren der Attribute, um
sie vom Speichern auszuschließen.

![Attribute Groups](/docs/images/Attribute-Groups.png)

Über der Attribut-Walze im Touchscreen wird die aktuell ausgewählte
Gruppe mit einer grauen Box angezeigt. Weiter wird die Attributgruppe
blau hinterlegt, wenn sich Attribute dieser Gruppe im
Programmierspeicher befinden. So ist im obigen Bild die Farbe zum
Bearbeiten angewählt, während Intensity und Special bereits verändert
(und damit im Programmierspeicher) sind.

## Geräte miteinander abgleichen

<Video videoId="xZrVhnY1hnA" title="Align Fixtures" />

Die Werte einzelner Attribute lassen sich mit der 'Align'-Funktion von
einem auf andere Geräte kopieren. So kann man etwa Geräte angleichen,
die man beim Programmieren eines Cues versehentlich nicht mit angewählt
hatte.

Es lassen sich mehrere Geräte auf einmal abgleichen, sowohl durch
Verwenden von Gruppen als auch durch Auswahl einzelner Geräte. Stimmt
die Anzahl der anzugleichenden Geräte nicht mit der der ‚Ziel'-Geräte
überein, so gibt es mehrere Optionen, die bestimmen, wie damit verfahren
wird.

1. Wählen Sie die anzugleichenden Geräte, entweder einzeln, oder unter
Verwendung von Gruppen.
2. Im Hauptmenü drücken Sie <Keys.HardKey>ML Menu</Keys.HardKey>, dann <Keys.SoftKey>Align Fixtures</Keys.SoftKey> (auf dem Diamond 9 drücken Sie <Keys.HardKey>Align</Keys.HardKey>).
3. Wählen (maskieren) Sie die zu kopierenden Attribute (mittels der
Attribut-Tasten rechts, oder mit den Funktionstasten, um alle Attribute
ein- oder auszuschließen)
4. Betätigen Sie die Auswahltaste des Gerätes bzw. der Gruppe, von dem
die Attribute übernommen werden sollen.
5. Drücken Sie <Keys.SoftKey>Align</Keys.SoftKey>

Die Reihenfolge der Geräteauswahl bestimmt, wie die angeglichenen Werte
übertragen werden:

-   Ist die Option <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> aktiviert, so wird die
    Attributmaske stets auf 'Alle' zurückgesetzt, sobald man das
    Align-Menü aufruft. Mit <Keys.SoftKey>Remember Mask</Keys.SoftKey> dagegen wird die
    eingestellte Maske beibehalten.

-   Mit <Keys.SoftKey>Spread Attributes</Keys.SoftKey> werden Attributwerte gleichmäßig
    aufgeteilt, wenn die Anzahl der anzugleichenden Geräte nicht mit der
    Anzahl der 'Ziel'-Geräte übereinstimmt. Mit <Keys.SoftKey>Repeat Attributes</Keys.SoftKey>
    dagegen werden die exakten Werte mehrfach wiederholt.

-   Mit <Keys.SoftKey>Align Programmer Attributes</Keys.SoftKey> werden nur Attribute
    angeglichen, die bereits im Programmer sind. Mit <Keys.SoftKey>Align All
    Attributes</Keys.SoftKey> dagegen werden sämtliche Attribute der Geräte
    angeglichen, sofern sie in der Maske angewählt sind. Hat man z.B.
    Tilt wie gewünscht eingestellt und im Programmer, so würden mit <Keys.SoftKey>Align Programmer Attributes</Keys.SoftKey> alle anderen Geräte nur den
    Tilt-Wert übernehmen, mit <Keys.SoftKey>Align All Attributes</Keys.SoftKey> aber auch den
    Pan-Wert.

-   Wählt man <Keys.SoftKey>Palette References Maintained</Keys.SoftKey>, so werden 
    Paletten auch auf den Ziel-Geräten als Referenz auf die Palette gespeichert. 
    Mit <Keys.SoftKey>Palette References Lost</Keys.SoftKey> dagegen werden die 
    Referenzen gelöscht und nur feste Attributwerte gespeichert.

-   Überschneiden sich die Geräte der Quell- und Zielauswahl, so ist es
    schwierig, den Überblick zu wahren, da alle Geräteschaltflächen
    aktiviert sind. Da hilft es, dass die ausgewählten Geräte in der
    Leiste oben am Bildschirm aufgelistet sind.

## Flip

Kopfbewegte Scheinwerfer können den gleichen Punkt der Bühne mit zwei
verschiedenen Kopfstellungen erreichen. Daher ist es zuweilen
erforderlich, bei einem Gerät diese Kopfstellung zu wechseln, damit das
Gerät synchron mit anderen läuft. Die Flip-Funktion ermöglicht das
schnell und einfach.

1. Wählen Sie das zu bearbeitende Gerät.
2. Im Hauptmenü drücken Sie <Keys.HardKey>Fixture</Keys.HardKey>, 
danach <Keys.SoftKey>Flip Pan and Tilt</Keys.SoftKey>.

Auf der Positions-Seite des Attribut-Editors steht ebenfalls die
Flip-Funktion zur Verfügung.

- Auf Pulten mit der Taste <Keys.HardKey>ML Menu</Keys.HardKey> kann man 
auch darüber die Funktion 'Flip' auswählen.

> Die Einstellungen für Flip sind in der Personality vorgegeben. 
Sollte Flip nicht wie erwartet funktionieren, muss evtl. die 
Personality-Bibliothek aktualisiert werden.

## Fan-Modus

Der Fan-Modus spreizt automatisch Attributwerte über mehrere angewählte
Geräte. Wird er etwa für Pan und Tilt benutzt, so ergibt sich eine
strahlenförmige Verteilung: das erste und letzte Gerät werden dabei am
meisten beeinflusst, das mittlere Gerät am wenigsten. Das Maß der
Spreizung lässt sich mit den Rädern ändern.

Wie bei Abläufen, so ist auch beim Fan-Modus die Reihenfolge der Geräte
bei der Auswahl wesentlich. Die als erstes und als letztes ausgewählten
Geräte werden am meisten von der Spreizung beeinflusst. Wird dazu eine
gespeicherte Gerätegruppe verwendet, so bezieht sich das auf die
Reihenfolge der Geräteauswahl beim Erstellen der Gruppe.

Der Fan-Modus ist nicht auf Pan und Tilt beschränkt, sondern kann auf
jedes Attribut angewendet werden.

1. Wählen Sie die zu bearbeitenden Geräte.
2. Drücken Sie die <Keys.HardKey>Fan</Keys.HardKey>-Taste.
3. Wählen Sie das Attribut, auf das der Effekt angewendet werden soll,
mit den Attribut-Tasten.
4. Stellen Sie das gewünschte Maß von Spreizung mit den Rädern ein.
5. Verlassen Sie den Fan-Modus wieder durch Betätigen der
<Keys.HardKey>Fan</Keys.HardKey>-Taste. Werden andere Geräte angewählt, 
wird 'Fan' automatisch beendet.

Haben Sie Geräte aus verschiedenen Gruppen ausgewählt, so können Sie
wählen, ob die Gruppenaufteilung beim Fan beachtet werden soll oder
nicht. Haben Sie etwa 12 Geräte auf der Bühne, die in 3 Gruppen à 4
Stück aufgeteilt sind, so können Sie entweder eine gleichmäßige
Verteilung auf alle 12 Geräte, oder ein Aufspreizen innerhalb jeder
Gruppe erreichen.

Während die <Keys.HardKey>Fan</Keys.HardKey>-Taste gedrückt gehalten wird, lassen sich im Menü
verschiedene Einstellungen vornehmen:

-   <Keys.SoftKey>Ignore Groups</Keys.SoftKey>: Sämtliche ausgewählten Geräte werden als eine
    große Gruppe behandelt.
-   <Keys.SoftKey>Fan Group as Fixture</Keys.SoftKey>: alle Geräte innerhalb 
    einer Gruppe werden identisch behandelt.
-   <Keys.SoftKey>Fan Within Groups</Keys.SoftKey>: Die Fan-Aufspreizung erfolgt 
    innerhalb jeder einzelnen Gruppe.

Ferner lässt sich bei gedrückter <Keys.HardKey>Fan</Keys.HardKey>-Taste 
die gewünschte Kurve auswählen. Mit unterschiedlichen Kurven lassen sich 
unterschiedliche Effekte erzielen.

Für gute Ergebnisse sind mindestens 4 Geräte erforderlich. Bei einer
ungeraden Anzahl von Geräten wird das mittlere Gerät im Fan-Modus nicht
beeinflusst.

Betätigen Sie die <Keys.HardKey>Fan</Keys.HardKey>-Taste, um den Fan-Modus zu verlassen.
Sämtliche Einstellungen verbleiben dabei im Programmierspeicher.

> Es kann rasch passieren, dass der Fan-Modus versehentlich aktiviert bleibt, was zu der irrigen Annahme führen kann, dass die Räder nicht ordnungsgemäß funktionieren. Stellen Sie daher sicher, den Fan-Modus zu verlassen, wenn Sie mit den Einstellungen fertig sind. Um dies zu vermeiden, gibt es die [Benutzereinstellung](../system-settings/user-settings.md) <Keys.SoftKey>Press and hold Fan</Keys.SoftKey>. Ist diese aktiviert, muss die <Keys.HardKey>Fan</Keys.HardKey>-Taste gedrückt gehalten werden, um den Fan anzuwenden.

### Fan-Kurven

Es lassen sich verschiedene Kurven definieren, die die Fan-Funktion
beeinflussen. Halten Sie dazu <Keys.HardKey>Fan</Keys.HardKey> gedrückt und wählen <Keys.SoftKey>Curve</Keys.SoftKey>. Es
stehen folgende Auswahlmöglichkeiten zur Verfügung:

-   Line: der gewohnte Fan, das erste und letzte Gerät werden am
    meisten, aber gegensinnig beeinflusst, das mittlere Gerät bleibt
    unverändert. Insbesondere sinnvoll bei Pan.

    ![Fan Line](/docs/images/Fan-Line.png)

-   Mirror- die Gesamtauswahl wird in zwei Hälften geteilt, die in
    entgegengesetztem Sinn gesteuert werden.

    ![Fan Mirror](/docs/images/Fan-Mirror.png)

-   Wings -- die Gesamtauswahl wird in drei Teile geteilt, deren beide
    äußere in entgegengesetztem Sinn gesteuert werden, während der
    Mittelteil unverändert bleibt.

    ![Fan Wings](/docs/images/Fan-Wings.png)

-   Arrow -- die ersten und letzten Geräte werden ebenso beeinflusst wie
    die mittleren, aber in entgegengesetzter Richtung. Ebenfalls
    geeignet für Farbmischung, Tilt und Dimmer.

    ![Fan Arrow](/docs/images/Fan-Arrow.png)

-   Pull Middle -- Das erste und das letzte Gerät bleiben auf dem
    ursprünglichen Wert, das mittlere Gerät wird am meisten beeinflusst.
    Besonders geeignet für Farbmischung, Tilt und Dimmer.

    ![Fan Pull Middle](/docs/images/Fan-Pull-Middle.png)

-   Pull Ends -- Wie vor, aber das mittlere Gerät bleibt unverändert,
    die äußeren Geräte werden am meisten (aber gleichsinnig)
    beeinflusst. Besonders geeignet für Farbmischung, Tilt und Dimmer.

    ![Fan Pull Ends](/docs/images/Fan-Pull-Ends.png)

-   Pull End -- Wie vor, aber das erste Gerät bleibt unverändert, das
    letzte Gerät wird am meisten beeinflusst.

    ![FanPull End](/docs/images/FanPull-End.png)

### Fan-Teile

Die Fan-Funktion, d.h. das Auffächern der Veränderung, lässt sich auch
gruppieren. Wählen Sie dazu die gewünschten Geräte aus, halten <Keys.HardKey>Fan</Keys.HardKey>
gedrückt, und geben die Anzahl der gewünschten Gruppen mit den
Zifferntasten ein:

Normal (1):

![Fan 1 Part](/docs/images/Fan-1-Part.png)

2:

![Fan 2 Parts](/docs/images/Fan-2-Parts.png)

3:

![Fan 3 Parts](/docs/images/Fan-3-Parts.png)

## Speichern von Zeiten für Attribute und Geräte

Fade- und Delayzeiten können direkt für einzelne Geräte oder einzelne
Attribute gesetzt werden. Werden diese dann in einen Cue gespeichert, so
sind auch die Zeiten Bestandteil des Cues.

Zeiten lassen sich auf mehrere Arten einstellen:

-   Mit der Funktionstaste <Keys.SoftKey>Wheels=</Keys.SoftKey> im Hauptmenü lassen sich die
    Räder in die entsprechende Betriebsart schalten, und man kann Zeiten
    mit den Rädern einstellen.

-   Individuelle Zeiten lassen sich auch mit den @-Tasten und der Taste <Keys.HardKey>TIME</Keys.HardKey> vorgeben.

-   Ebenso kann man auch die Geräte auswählen und mit der <Keys.HardKey>TIME</Keys.HardKey>-Taste
    in den jeweiligen Untermenüs individuelle Zeiten einstellen.

-   Schließlich gibt es auch eine Syntax, um Zeiten per Tastatur
    einzustellen. So setzt z.B. die Tastenfolge
    <Keys.HardKey>TIME</Keys.HardKey> <Keys.HardKey>FIXTURE</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> 3 
    5s Fadezeit, 3s Delayzeit für die Positionsattribute der gerade
    ausgewählten Geräte. Die @-Tasten lassen sich auch in der
    Tastatursyntax verwenden, und mittels <Keys.HardKey>THRO</Keys.HardKey> ergeben sich auch
    Optionen zum Auffächern.

Wird für ein Attribut eine Zeit vergeben, so wird dieses Attribut
als 'im Programmierspeicher' angezeigt.

In der Kanalübersicht (Channel Grid) gibt es eine
Kontext-Schaltfläche <Keys.SoftKey>Times</Keys.SoftKey>, damit lassen sich alle momentan im
Programmierspeicher befindlichen Zeiten anzeigen und editieren. Mit
Off können die Zeiten temporär deaktiviert und mit On wieder
aktiviert werden.

Zeiten können auch getestet werden: dazu dient die Kombination <Keys.HardKey>Avo</Keys.HardKey>+<Keys.HardKey>TIME</Keys.HardKey>, oder Sie drücken zweimal die Taste <Keys.HardKey>TIME</Keys.HardKey>.

Auf früheren Konsolen liegt die Funktion der Taste <Keys.HardKey>TIME</Keys.HardKey> entweder
auf der Taste <Keys.HardKey>SET</Keys.HardKey> (Titan Mobile/Sapphire Touch) oder auf der
Taste <Keys.HardKey>NEXT TIME</Keys.HardKey> (Tiger Touch/Pearl Expert).

## Attribute mit "Off" deaktivieren

Wurde ein Attribut editiert, so ist der aktuelle Wert im Programmer, und
kann entsprechend in Cues und Paletten gespeichert werden. Wurde ein
Wert versehentlich editiert (und in den Programmer gebracht) und soll
aber nicht gespeichert werden, so kann er mittels Off deaktiviert
werden.

1. Drücken Sie die Taste <Keys.HardKey>Off</Keys.HardKey>, um das Off-Menü zu öffnen.
2. Wählen Sie die Attribut-Bänke, um die entsprechenden Attribute zu deaktivieren, und drücken Sie auf <Keys.SoftKey>Attributes Off</Keys.SoftKey>.
3. Mit den Menütasten lassen sich auch einzelne Attribute Off schalten,
z.B. mit <Keys.SoftKey>Dimmer Off</Keys.SoftKey>.

-   Um komplette Geräte im Programmer zu deaktivieren, wählen Sie diese
    an, drücken <Keys.HardKey>Off</Keys.HardKey> und dann <Keys.SoftKey>Selected Fixtures Off</Keys.SoftKey>.

