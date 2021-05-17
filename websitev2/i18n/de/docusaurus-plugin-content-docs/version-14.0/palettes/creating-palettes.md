---
id: creating-palettes
title: Creating Palettes
sidebar_label: Creating Palettes
original_id: creating-palettes
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Attribute zum Speichern in Paletten
-----------------------------------

Obwohl ein Paletteneintrag mehrere oder alle Attribute eines Geräts
beinhalten kann, ist es deutlich einfacher, mit getrennten Paletten zu
arbeiten, so dass man etwa Paletten nur für Positionen und andere
Paletten nur für Farben hat. Diese Vorgehens­weise wird durch getrennte
Fenster für <strong>Positions</strong>-, <strong>Farb</strong>- und <strong>Gobo</strong>paletten unterstützt.

Beim Speichern einer Palette werden nur die im Programmierspeicher
befindlichen Attribute (die seit dem letzten <Keys.HardKey>Clear</Keys.HardKey> veränderten
Werte) verwendet. Zum Erstellen einer Farb-Palette stellen Sie einfach
die gewünschte Farbe ein, ohne die anderen Attribute zu verändern.
Ebenso lassen sich Paletten mit Shapes und Pixelmapper-Effekten anlegen.
Ferner werden auch Zeiten für Attribute und Geräte in den Paletten
gespeichert, und es lassen sich sogar [Paletten nur mit Zeiten](#erstellen-einer-palette-mit-zeiten) - ohne Attributwerte - anlegen.

Sind mehrere Attribute im Programmierspeicher, so erstellen Sie eine
Maske, mit der die zu speichernden Attribute ausgewählt werden.

Paletten können <strong>Global</strong>e, gemeinsame (<strong>shared</strong>) oder <strong>normal</strong>e
(einzeln verwendete) Paletten sein:  

- <strong>Globale</strong> Paletten funktionieren mit
allen Gerätetypen (die diese Attribute physikalisch steuern können).
- <strong>Shared</strong> Paletten speichern identische DMX-Werte für alle Geräte des
gleichen Typs, *z.B. ‚Rot' für alle Martin MAC2000*.
- <strong>Normale</strong> Paletten wiederum speichern für jedes Gerät 
andere DMX-Werte, *etwa fast immer beim Programmieren von Positionen*.

Beim Verschmelzen (merge) von Paletten können auch Paletten entstehen,
die sowohl globale, shared als auch normale Attribute enthalten.

Generell können nur Dimmer, Pan/Tilt und Colour global sein. Wird für
ein Gerät mit Farbmischung eine globale Farb-Palette erzeugt, so werden
Werte für CMY und für RGB sowie ein 'dynamischer' Wert für Geräte mit
Farbrad gespeichert; mit letzterem wird dann versucht, die passendste
Farbe auf dem Farbrad (bei Geräten mit festen Farben) auszuwählen.

Mit der [Benutzereinstellung "Minimum Palette Mode"](../system-settings/user-settings.md#minimum-palette-mode)
kann festgelegt werden, dass auch beim Schnellspeichern Paletten immer 
als <strong>Shared</strong> oder <strong>Normal</strong> erstellt werden, auch wenn das Pult sie 
sonst als globale Palette speichern würde.

Speichern einer Palette
-----------------------

<Video videoId="Hs-xzpD5x8k" title="Recording Palettes" />

Zum Speichern einer Palette in eines der Palettenfenster gehen Sie wie folgt vor 
*(werden die Palettenfenster nicht angezeigt, so klicken Sie auf den 
Workspace-Button <Keys.SoftKey>Groups and Palettes</Keys.SoftKey>)*:

1.  Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, um den Programmierspeicher zu löschen.

2.  Wählen Sie die Geräte, für die eine Palette gespeichert werden soll.

3.  Mit den Attribut-Tasten und Rädern stellen Sie nun die gewünschten
	Werte ein.\
	*Es lassen sich einzelne oder alle Attribute in einer Palette speichern.*

4.  Drücken Sie <Keys.HardKey>Record</Keys.HardKey> und dann <Keys.HardKey>Palette</Keys.HardKey> oder drücken Sie
	<Keys.HardKey>Palette</Keys.HardKey> und wählen <Keys.SoftKey>Record Palette</Keys.SoftKey>.\
	*Beim [Schnellspeichern von Paletten](#schnellspeichern) ist das nicht 
	erforderlich, und auch die Maske muss nicht eingestellt werden.*

5.  Erstellen Sie die Palettenmaske; diese bestimmt, welche Attribute
	in der Palette gespeichert werden. Wählen Sie die zu speichernden
	Attribute mit den Attribut-Tasten: jedes mit einer leuchtenden LED
	gekennzeichnete Attribut ist zum Speichern vorgesehen. <Keys.SoftKey>Set Mask</Keys.SoftKey> und
	<Keys.SoftKey>Record by</Keys.SoftKey> dienen ebenfalls zum Einstellen der Maskierung (s.u.).
 
6.  Klicken Sie auf eine freie Paletten-Schaltfläche zum Speichern 
	(wählen Sie stattdessen einen bereits mit einer Palette belegten Button, 
	so gibt es weitere Optionen), oder vergeben Sie eine Nummer und 
	drücken Sie <Keys.SoftKey>Store</Keys.SoftKey>.

---

-   Möchten Sie Paletten auf die Tasten des Pultes speichern, so drücken
    Sie ebenfalls <Keys.HardKey>Record</Keys.HardKey> und dann <Keys.HardKey>Palette</Keys.HardKey>: daraufhin leuchten
    alle noch freien Tasten auf, und zum Speichern muss einfach eine
    betätigt werden.

![Recording a Palette menu](/docs/images/Recording-a-Palette-menu.png)

-   Das Pult legt die Palette automatisch als global, shared (gemeinsam
    genutzt) oder normal an (dazu wird überprüft, ob alle Geräte
    gleichen Typs die gleichen Attributwerte haben). Diese Einstellung
    kann mit <Keys.SoftKey>Menütaste C</Keys.SoftKey> geändert werden. Die Automatik ist weiter
    unten näher beschrieben.

-   Mit <Keys.SoftKey>Set Mask</Keys.SoftKey> lassen sich die in der Palette zu speichernden
    Attribute auswählen. Ebenso können dazu die grauen Attribut-Tasten
    rechts auf dem Pult genutzt werden.\
    Ist eine Attribut-Gruppe zum Speichern vorgesehen, so erscheint die
    entsprechende Funktionstaste invertiert (wie für 'Colour' in 
    Bild), und die LED der entsprechenden Attribut-Taste leuchtet. Beim
    Verwenden der <strong>[Schnellspeicherfunktion](#schnellspeichern)</strong>
    wird die Maske automatisch erstellt, abhängig vom Fenster, in dem
    die Palette gespeichert wird: Paletten im Fenster 'Positions'
    enthalten nur P, im Fenster 'Colours' nur C und im Fenster 'Gobos
    and Beams' nur IGBES. Wird die Palette hingegen mit <Keys.HardKey>Record</Keys.HardKey> gespeichert, muss die Maske manuell eingestellt werden.


-   Mit der Taste <Keys.HardKey>Attribute Options</Keys.HardKey> (auf neueren Pulten <Keys.HardKey>Options</Keys.HardKey>) 
	können alle Attributgruppen zwischen 'Include' und 'Exclude' 
	umgeschaltet werden.

![Setting a mask for recording a palette](/docs/images/Setting-a-mask-for-recording-a-palette.png)

-   <Keys.SoftKey>Record By...</Keys.SoftKey> steuert, wie die erstellte Maske beim Speichern der
    Palette verwendet wird:
    -   <Keys.SoftKey>Channel in programmer</Keys.SoftKey> - es werden nur Kanäle gespeichert, die
    sich im Programmierspeicher befinden (also vorher verändert wurden)
    -    <Keys.SoftKey>Group in programmer</Keys.SoftKey> speichert alle Kanäle in jeder
    Attribut-Gruppe, von der sich ein oder mehrere Kanäle im
    Programmierspeicher befinden. *Ist etwa ein Wert für Cyan im
    Programmierspeicher, so werden sämtliche Einstellungen aller
    Farbkanäle abgespeichert, auch wenn sie nicht im Programmierspeicher
    sind.*
    -   <Keys.SoftKey>Group in mask</Keys.SoftKey> speichert sämtliche Werte für alle in der Maske
    ausgewählten Attribute
    -   <Keys.SoftKey>Mixed</Keys.SoftKey> speichert <strong>Positionen</strong> und <strong>Farben</strong> als 
	Attributgruppen, alle anderen Kanäle jedoch einzeln.

-   Das Pult vergibt automatisch eine Bezeichnung für die Palette (außer
    die [Benutzereinstellung <Keys.SoftKey>Auto Legend</Keys.SoftKey>](../system-settings/user-settings.md#auto-legend) wurde deaktiviert). 
	-   Bei <strong>Farb-Paletten</strong> werden die enthaltenen Farben angezeigt - sind
		mehrere enthalten, so werden verschiedenfarbige Streifen angezeigt.
	-   Bei <strong>Gobo-Paletten</strong> werden die Gobos grafisch dargestellt, sofern
		das in der Personality hinterlegt ist (ggf. müssen die [Personalities
		aktualisiert werden](../patching/changing-the-patch.md#bereits-gepatchte-personalities-aktualisieren)).
    -   Für <strong>CITP-Paletten (von einem Medienserver)</strong> werden die übertragenen
		Vorschaubilder angezeigt. 
	-	Für <strong>Pan und Tilt</strong> werden allgemeine Bezeichner vergeben.
	-	Für <strong>alle anderen</strong> Attribute wird der zuletzt veränderte Wert angezeigt. 
    ![Automatic Legends set for Colour Palettes](/docs/images/Automatic-Legends-set-for-Colour-Palettes.png)

-   Ebenso kann man beim Speichern mit <Keys.SoftKey>Provide a legend</Keys.SoftKey> der Palette
    eine Bezeichnung geben. Zum späteren Ändern der Bezeichnung siehe
    [Paletten beschriften und bemalen](#paletten-beschriften-und-bemalen).

-   Wird eine Palette auf einen bereits belegten Speicherplatz
    gespeichert, so bietet das Pult die Optionen <Keys.SoftKey>Cancel</Keys.SoftKey> (Abbruch),
    <Keys.SoftKey>Replace</Keys.SoftKey>(Ersetzen) und <Keys.SoftKey>Merge</Keys.SoftKey>(Kombinieren). 
	- 	Mit <Keys.SoftKey>Replace</Keys.SoftKey> wird die bisher gespeicherte Palette gelöscht 
		und durch die neue ersetzt. 
	-	Bei der Wahl von <Keys.SoftKey>Merge</Keys.SoftKey> werden die beiden Paletten
		miteinander verschmolzen.  
	-   <Keys.SoftKey>Quick Merge</Keys.SoftKey> ist das Verschmelzen ausschließlich der Attribute,
		die bisher schon in der Palette enthalten sind.
	
	Damit lassen sich etwa einzelne Werte zu einer existierenden 
	gemeinsam genutzten Palette hinzufügen, oder enthaltene Werte 
	einfach verändern. Wird die gewählte Paletten-Auswahltaste erneut
	betätigt, erfolgt automatisch ein Quick Merge.

-   Wenn nicht explizit vorgegeben, wählt das Pult automatisch, ob eine
    globale, shared oder normale Palette erzeugt wird: eine <strong>globale</strong>
    Palette wird gespeichert, wenn alle ausgewählten Geräte im
    Programmer die gleichen Werte haben und die Attribute für globale
    Paletten verfügbar sind. Sind die Werte zwar gleich, die Attribute
    aber nicht für globale Paletten geeignet, so wird eine <strong>shared</strong>
    Palette gespeichert. Sind einige Attribute für global geeignet und
    einige nicht, so wird eine Palette mit den geeigneten Attributen als
    global und mit den anderen als shared gespeichert. Sind schließlich
    die Werte unterschiedlich, so wird eine <strong>normale</strong> Palette erstellt.
	Diese Automatik lässt sich mit der [Benutzereinstellung](../system-settings/user-settings.md) <strong>[Minimum Palette Mode](../system-settings/user-settings.md#minimum-palette-mode)</strong>
	überschreiben bzw. deaktivieren.

Nested palettes -- Verknüpfte Paletten
--------------------------------------

Paletten können Bezüge auf andere Paletten enthalten. So kann z.B. eine
Palette 'odd/even' erstellt werden, bei der die ungeraden Geräte eine
Farbe und die geraden Geräte eine andere Farbe zugewiesen bekommen,
wobei die konkreten Farben aus anderen (Master-) Paletten referenziert
werden. Werden nun die Master-Paletten geändert, so ändert sich die
'odd/even'-Palette entsprechend.

Die Option <Keys.SoftKey>Record/Don't Record Nested Palettes</Keys.SoftKey> im Menü "Record
Palette" bestimmt, ob der Verweis auf die Masterpalette (*Vorgabe*)
oder aber der jeweilige absolute Wert gespeichert werden soll.

Wurde eine Palette mit Verknüpfungen zu anderen Paletten gespeichert, 
so lässt sich das Aufrufen der verknüpften Paletten deaktivieren, so 
dass nur die direkt in der Palette gespeicherten Werte verwendet werden. 
Dies kann beim Updaten der verknüpften Paletten sinnvoll sein.

1.	Drücken Sie <Keys.SoftKey>Options</Keys.SoftKey>.

2.	Wählen Sie die Palette.. 

3.	Auf dem Reiter <Keys.SoftKey>Palette</Keys.SoftKey> der Optionen deaktivieren Sie die 
	Einstellung <Keys.SoftKey>Fire Nested Palettes</Keys.SoftKey>. 

4.	Wird nun die Palette aufgerufen, so werden nur die direkt in dieser 
	gespeicherten Werte verwendet, nicht aber die aus verknüpften Paletten.

-	Der vorige Zustand lässt sich wieder herstellen, indem man die Option <Keys.SoftKey>Fire Nested Palettes</Keys.SoftKey> wieder aktiviert.

Schnellspeichern
----------------

In den Paletten-Fenstern gibt es ebenso eine Schnellspeicher-Funktion.
Dazu betätigen Sie einfach die gewünschte Schaltfläche - diese wird
daraufhin rot und zeigt ein + -Zeichen. Nun lässt sich eine Bezeichnung
vergeben sowie die Maskierung ändern. Mit einer weiteren Betätigung der
Schaltfläche wird die Palette gespeichert.

![Palette quick record](/docs/images/Palette-Quick-Record.png)

Beim Verwenden der Schnellspeicherfunktion wird die Attributmaske
automatisch abhängig vom jeweiligen Fenster eingestellt; so werden
im Fenster <strong>Positions</strong> nur Pan/Tilt-Werte (<strong>P</strong>), bei <strong>Colours</strong> 
nur Farben (<strong>C</strong>) und bei <strong>Gobos and Beams</strong> die anderen Attribute 
(<strong>IGBES</strong>) abgespeichert. Dies geschieht nicht beim Speichern mittels 
der <Keys.HardKey>Record</Keys.HardKey>-Taste.

Schnellspeichern funktioniert auch bei Gruppen und Arbeitsumgebungen 
(Workspaces).

> Wird eine Show geladen, die auf einem <strong>Pearl Expert</strong> programmiert wurde, so lassen sich die dort auf die Tasten programmierten Paletten über das Fenster <strong>Groups and Palettes</strong> erreichen, siehe
[Compatibility windows -- Die Kompatibilitäts-Fenster](../titan-basics/workspace-windows.md#compatibility-windows----die-kompatibilitäts-fenster).

Paletten beschriften und bemalen
--------------------------------

Für jede Palette lässt sich eine Beschriftung vergeben, die auf der
Paletten-Schaltfläche angezeigt wird.

1.  Drücken Sie im Hauptmenü <Keys.SoftKey>Set Legend</Keys.SoftKey>.

2.  Klicken Sie auf die zu ändernde Palette.

3.  Geben Sie die Bezeichnung mit der Tastatur ein.

4.  Schließen Sie die Eingabe mit <Keys.HardKey>Enter</Keys.HardKey> ab.

Auf den Schaltflächen wird die Palettennummer oben links angezeigt.
Die enthaltenen Attribute (<strong>IPCGBES</strong>) werden unter der Beschriftung
eingeblendet, etwa ein <strong>P</strong> für <strong>Positions-Paletten</strong>. In der oberen
rechten Ecke steht ein <strong>G</strong> für eine <strong>globale</strong>, ein <strong>N</strong> für eine 
<strong>normale</strong> bzw. ein <strong>S</strong> für eine <strong>Shared</strong> (gemeinsam genutzte) Palette.

![Shared and normal palettes stored on a touch screen](/docs/images/Shared-and-normal-palettes-stored-on-a-touch-screen.png)

Ebenso lassen sich Paletten bemalen, um etwa auf einen Blick die Farbe
oder das Gobo zu erkennen. Drücken Sie dazu wiederum <Keys.SoftKey>Set Legend</Keys.SoftKey>,
wählen die Palette aus, und wählen dann <Keys.SoftKey>Picture</Keys.SoftKey> - daraufhin öffnet
sich der Picture-Editor:

![Setting legend of palette using draw picture editor](/docs/images/Setting-legend-of-palette-using-draw-picture-editor.png)

Oben links gibt es Reiter für die Bildschirmtastatur (damit wird aus der
Bemalung wieder eine Beschriftung), zum freien Zeichnen, für die
Bilder-Bibliothek sowie zum Laden einer separaten Datei. Im Zeichenfeld
hat man rechts Werkzeuge zur Auswahl von Stift oder Radierer, für die
Strichstärke und die Auswahl der Farbe. <strong>Clear</strong> löscht die ganze
Zeichnung, <strong>Enter</strong> schließt den Zeichenvorgang ab und übernimmt das
Bild. Mit <strong>Min/Max</strong> oben rechts lässt sich der Editor verkleinern oder
vergrößern.

Bei Auswahl der Bibliothek kann man ein Bild aus einer großen Zahl
vorgefertigter Zeichnungen verwenden. Die Vorlagen sind in verschiedene
Kategorien (links) eingeteilt.

![Setting legend of palette using Icon Library](/docs/images/Setting-legend-of-palette-using-Icon-Library.png)

Erstellen einer Effekt-Palette
------------------------------

Paletten mit [Shapes oder Pixelmapper-Effekten](../effects.md) können 
sehr praktisch sein. (Keyframe-Shapes können allerdings nicht in 
Paletten gespeichert werden).

Dabei empfiehlt es sich, selektiv so vorzugehen, dass die Palette
ausschließlich Effekt-Informationen enthält; so wird dann z.B. eine
Palette mit einem Circle-Effekt die Geräte sich um den gerade aktuellen
Pan/Tilt-Wert bewegen lassen. Dazu nutzen Sie entweder die Maskierung
des FX-Attributs, oder Sie achten darauf, beim Speichern der Palette
keine anderen Attributwerte in den Programmierspeicher zu schreiben.

1.  Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, wählen Sie einige Geräte aus, und drücken Sie
	<Keys.HardKey>Locate</Keys.HardKey>.\
	*Sie können auch deren Position verändern, um das Ergebnis besser 
	zu sehen*.

2.  Drücken Sie <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>, dann <Keys.SoftKey>Shape Generator</Keys.SoftKey>, und
	starten Sie einen Shape.\
	*Siehe [Shape Generator](../effects/shape-generator.md) zum 
	Erstellen von Shapes*.

3.  Ändern Sie die Parameter des Shapes nach Belieben.

4.  Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann <Keys.HardKey>Palette</Keys.HardKey> (Quick Record
	funktioniert nicht bei Shape-Paletten).

5.  Haben Sie in <strong>Schritt 1</strong> die Position oder weitere Attribute
	verändert, so drücken Sie <Keys.SoftKey>Set Mask</Keys.SoftKey> und deaktivieren alles 
	außer <strong>FX</strong>.

6.  Klicken Sie auf eine Palettenschaltfläche, um die Palette zu
	speichern.

Effekt-Paletten lassen sich nicht als <strong>[Quick Palette](using-palettes.md#quick-palettes----schnelle-paletten-ohne-ausgewählte-geräte)</strong> verwenden. Es müssen immer Fixtures angewählt sein, um eine 
Effekt-Palette anzuwenden.

Erstellen einer Palette mit Zeiten
---------------------------------

Es lassen sich Paletten erstellen, die ausschließlich <strong>Zeiten</strong>, aber keine
Werte enthalten. Dies ist sinnvoll beim Speichern von Cues oder bei
Zeiten für einzelne Attribute, um die Zeit nicht jedes Mal neu eingeben
zu müssen. Auch für Zeiten gilt, dass Paletten beim Speichern als
Referenz abgelegt werden: wird später die Zeit in der Palette geändert,
so wirkt sich das auf alle damit erstellten Cues aus.

1.  Drücken Sie <Keys.HardKey>Clear</Keys.HardKey>, wählen Sie einige Geräte aus, und drücken Sie
	<Keys.HardKey>Locate</Keys.HardKey>.\
	*Sie können auch deren Position verändern, um das Ergebnis besser
	sehen zu können*.

2.  Drücken Sie <Keys.HardKey>TIME</Keys.HardKey>\
	(*auf früheren Pulten <Keys.HardKey>SET</Keys.HardKey> (Mobile/Sapphire) bzw. <Keys.HardKey>Next Time</Keys.HardKey> (Expert/Tiger)*).

3.  Setzen Sie die Fadezeit auf 2 s. Damit wird dies als globale
	Fadezeit in den Programmierspeicher geschrieben.

4.  Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann <Keys.HardKey>Palette</Keys.HardKey>.

5.  Haben Sie in <strong>Schritt 1</strong> die Position oder weitere Attribute
	verändert, so drücken Sie <Keys.SoftKey>Set Mask</Keys.SoftKey> und deaktivieren alles außer
	<strong>Time</strong>.

6.  Klicken Sie auf eine Palettenschaltfläche, um die Palette zu
	speichern.
