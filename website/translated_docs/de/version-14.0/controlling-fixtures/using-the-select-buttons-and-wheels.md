---
id: version-14.0-using-the-select-buttons-and-wheels
title: Using the Select Buttons and Wheels
sidebar_label: Using the Select Buttons and Wheels
original_id: using-the-select-buttons-and-wheels
---

## Dimmer und Geräte zum Steuern auswählen

Um die zu steuernden Geräte und Dimmer auszuwählen, betätigen Sie die
entsprechenden Geräte-Buttons, womit die Geräte in den Editor geladen
werden. Es lassen sich einzelne oder mehrere verschiedene Geräte auf
einmal anwählen. Ebenso lassen sich Gruppen verwenden, um mehrere Geräte
auf einmal anzuwählen, siehe [Gruppen](../controlling-fixtures/fixture-groups.md).

Ist das Gerät/der Dimmer auf einen Fader gepatcht, so drücken Sie die zugehörige blaue Taste, um die Auswahl vorzunehmen.

![Fixtures Window](/docs/images/Fixtures-Window.png)

1. Betätigen Sie die Buttons/Tasten der gewünschten Geräte. Die
Schaltflächen erscheinen daraufhin hellblau, bei auf Tasten gepatchten
Geräten leuchten die LEDs hell auf.

2. Um eine größere Zahl von Geräten auszuwählen, ziehen Sie mit dem
Finger einen entsprechenden Auswahlrahmen. Bei Tasten halten Sie die
erste gedrückt und betätigen dazu die letzte.

Ein paar weitere wissenswerte Dinge:

-   Die Taste \<Locate\> aktiviert die angewählten Geräte weiß (ohne
    Farbe) und in Grundstellung (Pan und Tilt jeweils 50%). Weitere
    Optionen dazu sind im [nächsten Abschnitt](../controlling-fixtures/using-the-select-buttons-and-wheels.md#setting-fixtures-to-a-start-position-locate) erläutert.

-   Um ein Gerät aus der Auswahl zu entfernen, einfach die betreffende
    Auswahltaste erneut betätigen.

-   Oben am Touchscreen, direkt oberhalb der oberen Fenster, werden die
    momentan angewählten Geräte angezeigt.

-   Drücken Sie \<Clear\> (rechts vom Zifferntastenblock), um sämtliche
    Geräte aus der Auswahl zu entfernen und sämtliche Änderungen aus dem
    Programmierspeicher zu löschen. Weitere Optionen dazu sind im
    [nächsten Abschnitt](../controlling-fixtures/using-the-select-buttons-and-wheels.md#clearing-selection) erläutert. 

-   Sobald ein Attribut verändert und wieder eine Auswahltaste betätigt
    wurde, werden sämtliche Geräte aus der Auswahl entfernt, und der
    Auswahlprozess startet von neuem. Alle vormals angewählten Geräte
    (seit der letzten Betätigung von \<Clear\>) verbleiben im
    Programmierspeicher. Sobald ein Gerät editiert wurde, erscheint die
    betreffende Schaltfläche in Dunkelblau. Im obigen Bild sind die
    ersten beiden Geräte angewählt, die folgenden drei im
    Programmierspeicher, und alle anderen nicht angewählt oder editiert.

-   Zur Auswahl von Geräten auf weiteren Seiten der Geräte-Auswahlliste
    kann man entweder mit den \'Page\' (Seiten)-Tasten links der
    Gerätetasten die Seiten umschalten, oder (sofern die \'Page\'-Tasten
    per Kontext-Taste ausgeblendet sind) mit dem Schiebe-Reiter durch
    die Liste navigieren. Für Fader/Tasten gibt es getrennte tasten für
    die Seitenumschaltung: beim Pearl expert sind dies die vier Tasten
    oberhalb des Ziffernblocks, bei den anderen Pulten die Tasten oder
    Buttons Page+/Page- bei den Fadern.

-   Mit den [Tastenprofilen](../system-settings/key-profiles.md) lässt sich
    die Geräte-Auswahltaste in den Einrast-Modus ('latch mode')
    umschalten, so dass damit der Dimmerkanal des betreffenden Gerätes
    geschaltet wird (gleiches Ergebnis wie Setzen des Faders auf 100%).

## Geräte auf Startposition setzen (Locate)

Die Taste \<Locate\> (unten rechts auf dem Pult) versetzt die
angewählten Geräte in eine definierte Ausgangsposition mit \'Licht an\',
um den Start des Programmierens zu vereinfachen.

Ein einfaches Betätigen der Taste bewegt alle Geräte auf \'Mitte\' (50%
Pan/Tilt) und setzt sämtliche Attribute zurück, resultierend in einfach
weißem Licht. Dennoch ist es zuweilen wünschenswert, etwa die Geräte
dabei nicht zu bewegen oder andere Attribute unverändert zu lassen. Dazu
erscheinen sinnvolle Optionen, wenn man die \<Locate\>-Taste nicht einfach
kurz drückt, sondern gedrückt hält.

-   Sie können einige der \'Locate\'-Funktionen maskieren (z.B. nur \'das
    Licht einschalten\', ohne Position oder Farbe zu verändern), indem
    bei gedrückter \<Locate\>-Taste die Funktion \[Set Mask to Exclude
    All\] gewählt wird. Darauf - bei noch gedrückt gehaltener
    \<Locate\>-Taste - schalten Sie die einzelnen Attribute, die Sie
    auf Startposition haben wollen, mittels der Attribut-Tasten ein. Nur
    die so angewählten Attribute werden nun bei 'Locate' zurückgesetzt.
    Ein Druck auf \<Attribute Options\> löscht wiederum die Maskierung.

-   Die Option \[Auto Reset Mask\] löscht die Maskierung automatisch, so
    dass bei jedem \'Locate\'-Vorgang wieder sämtliche Attribute
    beeinflusst werden. Alternativ bestimmt die Option \[Remember
    Mask\], dass die Maskierung erhalten bleibt.

-   Die Option \[Clear/Don\'t Clear Located Attributes\] bestimmt, ob die
    durch \<Locate\> gesendeten Werte beim Speichern mit übernommen
    werden sollen. Steht die Option auf \'Clear\', so werden die Werte
    nicht mit übernommen, sofern sie nicht manuell (etwa mit den Rädern)
    verändert wurden. Das ist zweckmäßig etwa, wenn Sie einen Cue nur
    mit einer Position erstellen möchten. Die Taste \<Locate\> wird dann
    zwar die Geräte zum Programmieren \'anschalten\', aber die Information
    \'Licht an\' wird nicht mit abgespeichert.

> Um schnell zu \'Locaten\', **ohne Pan/Tilt zu verändern**, drücken und halten Sie \<Locate\>, drücken dazu \<Pan/Tilt\> und lassen nun \<Locate\> los.

> Um **nur Pan/Tilt zu locaten**, drücken und halten Sie \<Locate\>, drücken dazu \<Attribute Options\>, drücken dann \<Pan/Tilt\>, und lassen nun \<Locate\> los.


### Ändern des Locate-Wertes

Ebenso können Sie den Locate-Wert des Gerätes für die betreffende Show
ändern, und zwar entweder für das eine angewählte Gerät, oder für alle
Geräte dieses Typs. Stellen Sie dazu den gewünschten Wert für das
entsprechende Gerät ein, drücken Sie \<Record\>, dann \<Locate\>.
Wählen Sie nun \[Shared\] (gemeinsam = alle Lampen dieses Typs) oder
\[Individual\] (nur einzelne Geräte). Drücken Sie schließlich nochmals
\<Record\> oder \<Locate\>.

## Clear -- Löschen der Auswahl

Die Taste \<Clear\> (rechts vom Zifferntastenblock) löscht sämtliche
Änderungen aus dem Programmierspeicher sowie die aktuelle Geräteauswahl.
Ein einfaches Betätigen der Taste löscht einfach alles, hält man die
Taste \<Clear\> hingegen gedrückt, erscheinen folgende Optionen:

-   Es lassen sich einzelne Attribute zum Löschen maskieren (etwa: die
    Position im Programmierspeicher belassen, aber alles andere
    löschen); dazu bei gedrückter \<Clear\>-Taste die Option \[Set Mask
    to Clear Nothing\] wählen. Darauf (noch immer \<Clear\> gedrückt
    halten) lassen sich mit den Attribut-Tasten die zu löschenden
    Attribute einzeln wählen, oder Sie wählen \[Set Mask\] und benutzen
    die Kontext-Tasten. Nun werden nur die angezeigten Attribute
    gelöscht. Ein Druck auf die Taste \[Attribute Options\] bzw. \[Options\]
	wiederum löscht die Maskierung. Mit der Option „Time Mask" kann man
    einstellen, ob die Fade-/Delayzeiten im Programmierspeicher für alle
    Attribute ebenfalls gelöscht oder aber beibehalten werden sollen
    (werden einzelne Attribute gelöscht, so werden auch die Zeiten für
    die jeweiligen Attribute gelöscht; setzt man also die Maske auf P,
    so werden die Zeiten für Pan/Tilt gelöscht).

-   Hält man \<Clear\> gedrückt und betätigt dazu \<All\>, so werden
    alle Geräte deselektiert, aber die Werte verbleiben im
    Programmierspeicher.

-   \[Clear Options\] öffnet ein Untermenü mit weiteren, im Folgenden
    beschriebenen Optionen.

-   Mit \[Clear All Fixtures/Selected Fixtures\] bestimmen Sie, ob
    sämtliche, oder nur die aktuell ausgewählten, Geräte aus dem
    Programmierspeicher gelöscht werden sollen.

-   \[Individual Attributes\] erlaubt das Löschen einzelner Attribute
    aus dem Programmierspeicher. Beim Betätigen dieser Taste erhalten
    Sie eine Liste der aktuell im Programmierspeicher vorhandenen
    Attribute, die sich mit der jeweiligen Taste einzeln löschen lassen.

-   \[Clear All Programmers\] löscht alle zurzeit verwendeten
    Programmierspeicher. Dies betrifft insbesondere Werte, die mit der
    Remote, von einem anderen Pult/User in einer Multiuser-Session sowie
    beim Erstellen von Keyframe-Shapes gesetzt wurden.

Optionen im Untermenü "Clear Options":

-   \[Auto Reset Mask\] setzt die Maskierung bei jedem Betätigen der
    'Clear'-Taste automatisch zurück. Alternativ bestimmt \[Remember
    Mask\], dass die Maskierung erhalten bleibt.

-   \[Leave/Zero Preset Fader Levels\] bestimmt, ob Faderwerte von
    Geräten mit \<Clear\> auf 0 gesetzt werden sollen oder nicht. (Das
    Tastenprofil der Geräteauswahl lässt sich auf 'Einrasten' (Latch)
    stellen, womit der Dimmerkanal des Gerätes eingeschaltet wird,
    sobald das Gerät angewählt wird, siehe [Key Profiles](../system-settings/key-profiles.md#creating-and-editing-key-profiles)).

-   Mit \[Freeze current values\] lässt sich festlegen, was mit
    LTP-Kanälen (nicht Helligkeit) geschieht, deren Wert modifiziert
    wurde. Steht diese Option auf \[Freeze Current Values\], so behalten
    diese Kanäle die gewählten Werte. Steht die Option auf \[Release To
    Playback Values\], so werden die Kanäle auf die Werte der aktuell
    laufenden Cues zurückgesetzt. Beispiel: wird ein Cue aufgerufen, in
    dem einige Geräte grün abgespeichert sind, und nun manuell deren
    Farbe auf Rot geändert, so werden diese bei \'Clear\' und der Option
    \[Freeze\] rot bleiben; ist hingegen die Option \[Release\]
    angewählt, so werden die Geräte zum gespeicherten Grün
    zurückgesetzt.

-   \[Clear/Maintain Cue Times\] bestimmt, ob Cue-Zeiten im
    Programmierspeicher gelöscht oder aber beibehalten werden (dies ist
    unabhängig von Attributzeiten im Speicher).

Mit dem Fenster [Channel Grid](../controlling-fixtures/viewing-and-editing-fixture-values.md#the-channel-grid-window) können einzelne Attribute einzelner
Geräte selektiv gelöscht werden.

> Geben Sie mit den Zifferntasten eine Zahl ein und drücken dann \<Clear\>, so faden im Programmer befindliche HTP-Werte in dieser Zeit (in Sekunden) aus. Gibt man etwa 5 ein und drückt \<Clear\>, so wird in 5 Sekunden ausgefadet. Damit kann man unauffällig mit dem Programmer arbeiten.

## Geräte mit mehreren Zellen/Subfixtures

Verfügt ein Gerät über mehrere einzeln steuerbare Bereiche (z.B.
LED-Bars) und ist die Personality entsprechend angepasst, so kann man
wahlweise das gesamte Gerät oder einzelne Zellen steuern. Dies empfiehlt
sich besonders bei Verwendung von Shapes sowie dem Pixelmapper.

Wird das Gerät mit der Schaltfläche angewählt, auf die es gepatcht
wurde, so werden alle Zellen synchron gesteuert.

Um auf die einzelnen Zellen zuzugreifen, können Sie die entsprechenden
Reiter oben im Attribut-Editor verwenden, wobei der ganz linke Reiter
das Gesamtgerät steuert und daneben Reiter für die einzelnen Zellen sind
(zum Öffnen des Attribut-Editors verwenden Sie z.B. den vorgegebenen
Workspace oder drücken \[Open Workspace Window\] und wählen den
Attribut-Editor).

![Cell Selection](/docs/images/Cell-Selection.png)

Ebenso können Sie dazu die Unfold-Funktion verwenden: drücken Sie
\<Unfold\> und dann die entsprechende Geräteschaltfläche. Daraufhin
werden im Gerätefenster Schaltflächen für die einzelnen Zellen
angezeigt. Verwenden Sie dies auf Geräten auf Fadern/Tasten, so werden
die Zellen ab Fader 1 eingeblendet.

Es gibt zwei Möglichkeiten für Unfold:

-   Drücken Sie \<Unfold\> und wählen Sie mehrere Geräte aus. Die
    entsprechenden Schaltflächen für die Zellen erscheinen sofort im
    Gerätefenster.

-   Wählen Sie die Geräte aus und drücken Sie \<Unfold\>. Wählen Sie nun
    \[Selected Fixtures\]. Dies bietet sich insbesondere für mehrere
    nicht unmittelbar aufeinander folgende Geräte an.

Um in die normale Anzeige zu wechseln, wählen Sie \<Unfold\>, dann
\[Exit Unfold\].

Einzelne Zellen lassen sich auch über eine spezielle Syntax mit den
Zifferntasten auswählen (\<THRO\> ist auf manchen Pulten \'Through\'):

| Tasten                                         | Auswahl                                                 |
|------------------------------------------------|---------------------------------------------------------|
| \<.\>  	                                     | Alle Zellen der gewählten Geräte                        |
| **n** \<.\>                                    | Alle Zellen von Gerät **n**                             |
| \<.\> \<THRO\> \<.\> **j**                     | Zellen 1 bis **j** aller gewählten Geräte               |     
| **n** \<.\> \<THRO\>                           | Alle Zellen der Geräte ab Nr. **n** des jeweiligen Typs |
| **n** \<THRO\> \<.\> **j**                     | Kurzform, s.o.                                          |
| **n** \<.\> \<THRO\> **i**                     | Zellen 1 bis **i** von Gerät **n**                      |
| \<.\> **m**          		                     | Zelle **m** aller ausgewählten Geräte                   |
| **n** \<.\> \<THRO\> **i** \<.\> **j**         | Zellen 1 bis **j** der Geräte **n** bis **i**           |
| \<.\> **m** \<THRO\>                           | Zellen ab **m** der gewählten Geräte                    |
| **n** \<.\> **m**                              | Zelle **m** von Gerät **n**                             |
| \<.\> **m** \<THRO\> \<.\> **j**               | Zellen **m** bis **j** aller gewählten Geräte           |    
| **n** \<.\> **m** \<THRO\>                     | Zellen ab **m** des Gerätes **n**                       |
| \<.\> **m** \<THRO\> **j**                     | Kurzform, s.o.                                          |
| **n** \<.\> **m** \<THRO\> **i**               | Zellen **m** bis **i** von Gerät **n**                  |
| **n** \<THRO\> **i** \<.\>                     | alle Zellen der Geräte **n** bis **i**                  |
| **n** \<.\> **m** \<THRO\> **i** \<.\>         | Zellen ab **m** der Geräte **n** - **i**                |
| **n** \<THRO\> **i** \<.\> **j**               | Zelle **j** der Geräte **n** - **i**                    |
| **n** \<.\> **m** \<THRO\> **i** \<.\> **j**   | Zellen **m** - **j** der Geräte **n** - **i**           |
| **n** \<THRO\> \<.\> **j**                     | Zellen 1 - **j** von Gerät **n**                        |
| **n** \<.\> **m** \<THRO\> \<.\> **j**         | Zellen **m** - **j** von Gerät **n**                    |

-   Die Auswahl von Zellen kann als separate Gruppe gespeichert werden.
    Damit können später verschiedene Zusammenstellungen von Zellen
    aufgerufen werden, ohne jedes Mal den Attribut Editor oder Unfold
    zu verwenden.

## Einstellen von Attributen mit den Encodern

"Attribute" sind die einzelnen Funktionen des Gerätes, wie Pan
(Schwenken), Tilt (Neigen), Farbe, Dimmer etc. Wählen Sie die zu
bearbeitenden Attribute mit den Attribut-Tasten, und stellen Sie den
gewünschten Wert mit den Rädern ein. Die verfügbaren Attribute sind
abhängig vom Gerätetyp. Dimmerkanäle besitzen nur das Attribut \'Dimmer\'.

Attribute lassen sich ebenso mit den Schaltflächen 'IPCGBES' auf dem
Touchscreen anwählen, und mit dem [Attribute Editor Fenster](../controlling-fixtures/using-the-select-buttons-and-wheels.md#attribute-editor-window) einstellen.

Auf dem Pearl Expert dienen je nach Benutzereinstellung die Encoder des
Touchwings zum Einstellen der Attribute.

Jede einzelne Attribut-Taste kann mehrere Attribute steuern, von denen
jedes einem Rad zugeordnet ist. Beim Sapphire Touch werden mit dem
Trackball Pan und Tilt gesteuert; der äußere Ring dient der Steuerung
von Tilt fein.

1. Nach der Anwahl der betreffenden Geräte betätigen Sie die Taste des
einzustellenden Attributs.

2. Benutzen Sie die Encoder, um den Wert des Attributs einzustellen.
Das Display oberhalb der Räder zeigt, welche Attribute momentan
gesteuert werden, und die verfügbaren Einstellungen lassen sich mit den
Encoder durchschalten.\
\
Ebenso können die einzelnen Werte im 'Walzen'-Fenster des Touchscreens
durchgeschaltet werden. Für stufenlos steuerbare Funktionen (etwa ein
Dimmer) schaltet die Walze auf 100% bzw. 0.
![Wheels](/docs/images/Wheels.png)

3. Wiederholen Sie Schritt 1 und 2, um weitere Attribute der gewählten
Geräte einzustellen.

Weitere wissenswerte Dinge zu Attributen:

-   Befindet sich ein Attribut im Programmierspeicher, so erscheint es
    hervorgehoben (siehe 'Green' in obigem Bild). Dies ermöglicht einen
    schnellen Überblick darüber, was momentan im Program­mierspeicher
    ist.

-   Attribute lassen sich ebenso über die Menütasten (nach Betätigen von
    \<Attribute Options\>) anwählen.

-   Wird das angewählte Attribut nicht im Display oberhalb der Räder
    angezeigt, so ist es für die angewählten Geräte nicht verfügbar.

![Toggle Attributes](/docs/images/Toggle-Attributes.png)

-   Erscheint im Display über den Rädern
    ein kleiner Pfeil neben den Bezeichnern, so gibt es mehr als drei
    Attribute zu steuern. Betätigen Sie dann den entsprechenden
    Attribut-Taster erneut, um die gesteuerten Attribute umzuschalten.

-   Die Räder arbeiten in einem \'Beschleunigungsmodus\'. Wird ein Rad
    schnell bewegt, so folgt das Gerät schnell und in groben
    Abstufungen. Wird es dagegen langsam bewegt, folgt das Gerät in
    kleinstmöglichen Schritten.

-   Wird beim Drehen des Rades die \<AVO\>-Taste gedrückt, so arbeitet
    das Rad im \'Schnell\'-Modus: eine Radumdrehung durchläuft den
    gesamten Bereich des Attributes. Wird etwa bei gedrückter
    \<AVO\>-Taste das Rad für Pan bewegt, so macht das Gerät bei einer
    Radumdrehung einen kompletten Schwenk von einem Anschlag zum
    anderen.

-   Für einige LED-Geräte mit Farbmischung gibt es eine \'virtuelle
    Dimmerfunktion\', wenn das Gerät selbst über keinen Dimmer verfügt:
    dazu wirkt das Intensity-Rad als Hauptregler für die einzelnen
    Farben.

## Anzeige der Attributwerte

Der Display-Bereich oberhalb der Encoder zeigt die Attribut-Bänke
(Intensity, Position, Colour etc.) sowie die aktuellen Werte der mit den
Encodern gerade verknüpften Attribute.

![Wheels](/docs/images/Wheels.png)

Um andere Attribute zu steuern, wählen Sie die entsprechende Bank mit
einem Klick auf IPCGBESFX, oder wählen Sie die entsprechende Bank mit
den richtigen Tasten. Die aktuelle Bank wird durch einen hellgrauen
Hintergrund dargestellt.

Wurden Attribute verändert, so wird die jeweilige Bank blau
hervorgehoben.

Eine stilisierte Walze zeigt die auf jedem Rad möglichen Einstellungen,
entweder als Wert (Prozent oder dgl.) oder - für feste Werte, etwa
Farbräder - mit deren Bezeichnung. Wurde ein Attribut verändert, wird
der jeweilige Wert hellblau hervorgehoben.

Zum Ändern der Werte können Sie direkt auf den Bildschirm klicken: damit
können feste Werte direkt angewählt werden; kontinuierliche Größen
wechseln dabei etwa direkt zwischen 0 und 100% (Dimmer) oder 0, 50% und
100% (Pan/Tilt).

## Das Fenster \'Attribut-Editor\'

Für Attribute mit festen Werten wie Gobos oder Farbräder ist das Fenster
'Attribut-Editor' ggf. besser geeignet als die Räder. Es bietet darüber
hinaus einen Farbwähler für Geräte mit RGB- oder CMY-Farbmischung.

Drücken Sie \[Open Workspace Window\], dann \[Attribute Editor\], um den
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

Beim Anwählen des Titels einzelner Attribute (z.B. \'Gobo 2\') werden
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
Steuerungmöglichkeiten:

-   Mit \[Locate\] wird die Position auf 50% Pan/50% Tilt gesetzt, ohne
    andere Attribute zu verändern.

-   [Flip](../controlling-fixtures/using-the-select-buttons-and-wheels.md#flip) dreht
    den Bügel von Movinglights in eine andere Position, wobei der gleiche Punkt     
    anvisiert wird.

-   Mit \[Align\] wird Pan/Tilt auf die Werte des zuletzt angewählten
    Gerätes gesetzt. Möchte man z.B. alle angewählten Geräte auf den
    Wert des ersten Gerätes bringen, so wählt man die Geräte in der
    Reihenfolge 2-3-4-1 aus und klickt \[Align\].

-   Mit Pan/Tilt Lock lässt sich die Bearbeitung mehrerer Geräte auf
    einmal vereinfachen, indem entweder Pan oder Tilt kurzzeitig von der
    Bearbeitung ausgenommen wird. Hat man z.B. die gerät in Pan
    aufgefächert und will nur Tilt etwas nachziehen, so verhindert Pan
    Lock, dass der bereits eingestellte Fächer verlorengeht.

-   Mit dem Button \[Fine\] lässt sich die Auflösung verringern, so dass
    man die gewünschte Position sehr genau ansteuern kann.

### Farbmischung: Channel

Für Geräte mit Farbmischung gibt es mehrere Möglichkeiten, die Farbe
einzustellen; diese sind in verschiedenen Reitern oben im
Attribut-Editor zusammengefasst.

![Attribute Editor - Colour Channels](/docs/images/Attribute-Editor-Channels.png)

Dieses Fadersystem bietet je einen Regler pro tatsächlich im Gerät
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
Kontext-Button kann zwischen \[Order Filters by Number\] (nach Nummer
sortieren) und \[Order Filters by Hue\] (nach Farbton sortieren)
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

> Ggf. sind aktualisierte Personalities erforderlich, um die Keystone/Blendenschieber-Funktionalität zu nutzen.

## Direkte Eingabe für Attributwerte

Für aktuell den Rädern zugeordnete
Attribute lassen sich direkt numerische Werte eingeben. Dazu müssen Sie
sich im Hauptmenü befinden (drücken Sie \<Exit\>, bis die senkrechte
Menüleiste 'Program Menu' anzeigt).

Geben Sie mit den Zifferntasten eine Zahl ein und betätigen dann eine
der Multifunktionstasten, um den Wert einem Attribut zuzuordnen. Die
Beschriftung der Taste zeigt, wie der Wert vom Gerät dargestellt wird
(z.B. \[Gobo 5\] oder \[Deep Blue\]).

![Attribute Softkey](/docs/images/Attribute-Softkey.png)

Für Attribute, deren Wert in Prozent dargestellt wird, wie etwa Dimmer
oder Farbmischung, geben Sie einen Wert zwischen 0 und 100 ein, um den
entsprechenden Prozentwert einzustellen. Für Attribute mit mehreren
Festwerten, wie z.B. feste Farbräder, geben Sie den Index des
gewünschten Wertes ein; um etwa die dritte Farbe des Farbrades
anzuwählen (wie in der Liste über dem Rad angegeben), geben Sie eine 3
ein.

## Eingeben von Attributwerten mit den @-Tasten

Drückt man die \<@\>-Taste bei einem der Räder, so öffnet sich das Menü zum
numerischen Eingeben der Attributwerte.

Dieses Menü lässt sich auch öffnen, indem man auf den mittleren Bereich
der Anzeige der Attributwerte (oberhalb der Räder) anklickt, oder durch
Anklicken eines Attributs im Channel Grid (Kanalübersicht).

(Beim Tiger Touch dienen die drei Tasten zwischen den Rädern als
\<@\>-Tasten, beim Pearl Expert gibt es diese Tasten nicht, und man muss
eine der anderen Varianten nutzen).

The menu gives you the following functions:

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

## Anwählen von Dimmern/Geräten nach (Kanal-)Nummer

In bestimmten Situationen, etwa beim Programmieren einer Vielzahl von
Dimmern, kann es einfacher sein, die zu ändernden Kanäle anhand ihrer
Nummer auszuwählen. Über das \'Channel\'-Menü geht das für Dimmer und
Bewegungsscheinwerfer. Zum Aufruf des \'Channel\'-Menüs drücken Sie die
Taste \<Fixture\> links oberhalb des Zifferntastenblocks.

Ebenso können Sie einfach die entsprechenden Ziffern eingeben; enthält
Ihre Eingabe \'Through\', \'And\' oder \'@\', so wird automatisch das
\'Channel\'-Menü aufgerufen.

Through, And und @ stehen je nach Pult sowohl als Menü-Taste im
Fixtures-Menü als auch über die Pfeiltasten direkt beim Ziffernblock zur
Verfügung.

Die Geräte lassen sich anhand der Gerätenummer (User Number), der Nummer
des Gerätebuttons (Handle Number) oder der DMX-Adresse anwählen, je nach
Einstellung der Menütaste A.

Bei der Benutzung des \'Channel\'-Menüs empfiehlt es sich, dieses zu
fixieren (Taste \<Menu Latch\>).

-   Zum Anwählen eines Gerätes die Nummer eingeben und \<Enter\>
    drücken.

-   Um mehr als ein Gerät anzuwählen, drücken Sie die Funktionstaste
    \[And\] zwischen den einzelnen Nummern. Beispiel: 1 \[And\] 2
    \[And\] 5 \<Enter\> wählt die Geräte 1, 2, 5.

-   Um eine Folge von Geräten anzuwählen, drücken Sie \[Thro\].
    Beispiel: 1 \[Thro\] 8 \<Enter\> wählt 1-8. Lässt man die zweite 
	Zahl weg, so werden alle noch folgenden Geräte des gleichen Typs angewählt.

-   Um einzelne Geräte in einer Folge auszulassen, drücken Sie \[Not\].
    Beispiel: 1 \[Through\] 4 \[Not\] 3 \<Enter\> wählt 1, 2, 4.

-   Die Taste \[@\] stellt den Dimmer-Wert der ausgewähl­ten Geräte ein,
    etwa: 1 \[Through\] 8 \[@\] 5 \<Enter\> setzt Gerät 1-8 auf 50% (in den
    Benutzereinstellungen lässt sich einstellen, ob 50% durch "5" oder
    "50" eingegeben wird, siehe [User Settings](../system-settings/user-settings.md)). Beim Betätigen
    der Taste \[@\] erscheinen außerdem Optionen auf den Funktionstasten
    für \'Full\' (100%), \'Off\' (0) und +/- (schrittweise
    erhöhen/vermindern).

-   Zur numerischen Anwahl von Gruppen verwenden Sie die Taste 'Group';
    Beispiel: \<Group\> 1 \[And\] \<Group\> 2 \[Not\] 5 \<Enter\> selektiert
    Gruppe 1 und 2 außer Gerät 5.

-   Die \<Locate\>-Taste macht das Betätigen der \<Enter\>-Taste
    überflüssig, wenn die Geräte angewählt und dann auf die
    Startposition gebracht werden sollen: 1 \[Through\] 4 \<Locate\>
    wählt Gerät 1 bis 4 aus und initialisiert diese.

![Syntax Selection](/docs/images/Syntax-Selection.png)

-   Beim Eingeben eines Kommandos wird dieses in der Kommandozeile des
    Displays angezeigt. Mittels der grauen ←\<Back\>Taste kann man
    schritt­weise zurückgehen; mit der grauen →\<@\>Taste lässt sich die
    Eingabe abbrechen.

-   Die Funktionen AND, THRO sowie @ stehen auch auf den Pfeiltasten zur
    Verfügung (siehe deren Beschriftung).

## Geräteauswahl nach Muster

Beim Programmieren einer Show ist es oftmals wünschenswert, verschiedene
Muster von Geräten auszuwählen. Anstatt nun die Geräte einzeln aus- und
abzuwählen, gestattet es das Pult, Geräte aus einer Gesamtauswahl nach
einem bestimmten Muster zu selektieren.

1. Selektieren Sie einige Geräte.

2. Drücken Sie die weiße Taste \<All\> (bzw. \<All/Even/Odd\>).

3. Wählen Sie ein Muster von den Menütasten. Die gewählte Auswahl wird
geändert, so dass z.B. nur die ungeraden (odd) Geräte ausgewählt werden.\
![Pattern Select](/docs/images/Pattern-Select.png)

4. Drücken Sie die Taste \<Fix+1\> oder \<Fix-1\>, um den nächsten
Schritt im gewählten Muster anzuwählen. (auf manchen Pulten \<Next\> und \<Prev\>).

5. Um die Musterauswahl zu beenden, drücken Sie zweimal \<All\>.

-   Mittels \[Direction\] (Richtung) kann eingestellt werden, dass die
    Geräte-Reihenfolge einer bestimmten Richtung folgt; dabei wird das
    Layout der Geräte herangezogen. Damit lassen sich z.B. sehr einfach
    symmetrische Paare von Geräten wählen.

-   Drückt man \<Clear\>, so wird die Richtung (Direction) wieder auf
    \'None\' zurückgesetzt. Dies lässt sich mit \[Clear Options\] \[Clear
    / Maintain Direction\] umstellen (halten Sie \<Clear\> gedrückt zum
    Einstellen der Clear-Optionen).

-   Wenn Sie etwa einen Chaser mit 16 Geräten programmieren, und dazu
    jedes 4. synchron einstellen wollen, wählen Sie zunächst alle 16
    Geräte aus, drücken dann \<All\>, dann \[1 in x\], und danach 
	\[1 in 4\]. Nun sind die Geräte 1, 5, 9 und 13 aus der vorherigen 
	Auswahl zum Bearbeiten angewählt. Drücken Sie \<Fix+1\> bzw. \<Next\>, 
	so werden die Geräte 2, 6, 10 und 14 angewählt. Nach der Anwahl des 4. 
	Schrittes erscheint wieder der erste Schritt des Musters, bis 
	zweimal \<All\> betätigt wird.

-   Sie können sehr einfach eigene Muster programmieren: geben Sie dazu
    z.B. mit den Ziffern- und Funktionstasten "2" A \[In\] "6" \<Enter\> ein.

-   Diese Funktionen stehen ebenfalls auf den Menütasten zur Verfügung,
    wenn man einen Gruppen-Button gedrückt hält.

## Auswahl von Geräten in einem Cue

Zur Auswahl der Geräte, die in einem bestimmten Cue enthalten sind,
dient die \'Select If\'-Funktion.

Drücken Sie dazu \<Select If\> gefolgt von dem Speicherplatz. (Auf
älteren Pulten gibt es keine gesonderte \<Select If\>-Taste; in diesem
Fall drücken Sie \<Fixture\> und dann \[Select If\]).

Ebenso lässt sich \'Select If\' mit den Tasten \<@\> und \<Thro\>
verwenden, um alle Geräte mit einer bestimmten Helligkeit anzuwählen:\
\@X: Geräte mit der Helligkeit X\
@ Thro X: Geräte mit der Helligkeit 0 - X\
@ X Thro: Geräte mit der Helligkeit X - Full\
@ X Thro Y: Geräte mit der Helligkeit zwischen X und Y\
@@: Geräte mit der Helligkeit \> 0.

Pegelangaben können entweder in der Schreibweise 0-9 oder 00-99 gemacht
werden, abhängig von der [Benutzereinstellung](../system-settings/user-settings.md) \[Channel Levels Set In\].

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

## Einzeln durch die Geräte einer Auswahl durchschalten

Sind mehrere Geräte oder eine Gruppe von Geräten ausgewählt, so bietet
das Pult die Möglichkeit, einzeln durch die angewählten Geräte
durchzuschalten. Dies vereinfacht das Programmieren, da man so nicht
jedes Gerät einzeln selektieren muss.

Für diese Funktion werden die Tasten \<Fix-1\> (zurück), \<Fix+1\>
(weiter), \<All\> (alle) und \<HiLight\> (hervorheben) genutzt.

1. Wählen Sie mehrere Geräte oder eine Gruppe von Geräten.

2. Mit den Tasten \<Fix-1\> und \<Fix+1\> wird jeweils ein Gerät
   ausgewählt bzw. weitergeschaltet (in der Reihenfolge der Auswahl). 
   Auf manchen Pulten dienen dazu die Tasten \<Prev\> und \<Next\> .

3. Die Taste \<All\> wählt alle Geräte aus, die sich im
   Programmierspeicher befinden (alle Geräte, die seit der letzten
   Betätigung von \<Clear\> angewählt wurden).

-   Die \'HiLight\'-Funktion ermöglicht es, das aktuelle Gerät
    hervorzuheben, siehe nächster Abschnitt.

## Das ausgewählte Gerät bei Fix+1/Fix-1 hervorheben

Beim Durchschalten durch eine Geräteauswahl mit den \<Fix+1/\
Fix-1/All\>-Tasten lässt sich das jeweils angewählte Gerät hervor­heben.
Dies vereinfacht es zu sehen, welches Gerät man gerade steuert. Die
anderen Geräte in der Auswahl werden gleichzeitig heruntergedimmt
(\'Lowlight\').

-   Betätigen Sie die \<HiLight\>-Taste, um diese Funktion zu
    aktivieren. Ein weiteres Betätigen der Taste schaltet die Funktion
    wieder aus. Ist der Highlight-Modus aktiv, so werden die davon
    betroffenen Attribute (z.B. der Dimmer) überschrieben und können
    nicht editiert oder gespeichert werden.

-   Die für Highlight/Lowlight verwendeten Werte lassen sich ändern:
    stellen Sie den gewünschten Wert ein, drücken Sie \<Record\>, dann
    \<HiLight\>, und wählen dann \[Store Highlight State\] oder \[Store
    Lowlight State\].

## Nicht ausgewählte Geräte ausblenden (Remainder Dim)

Mit "Remainder Dim" (\<Rem Dim\> oder \<Avo\>+\<All\>) werden die nicht
angewählten Geräte ausgeblendet; dabei wird der Wert Intensity=0 in den
Programmierspeicher geschrieben und entsprechend beim Speichern
übernommen.

## Geräte miteinander abgleichen

[](https://youtu.be/xZrVhnY1hnA?t=20 "Align Fixtures")

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

2. Im Hauptmenü drücken Sie \<Fixture Tools\>/\<ML Menu\>, dann \[Align
Fixtures\].

3. Wählen (maskieren) Sie die zu kopierenden Attribute (mittels der
Attribut-Tasten rechts, oder mit den Funktionstasten, um alle Attribute
ein- oder auszuschließen)

4. Betätigen Sie die Auswahltaste des Gerätes bzw. der Gruppe, von dem
die Attribute übernommen werden sollen.

5. Drücken Sie \[Align\]

Die Reihenfolge der Geräteauswahl bestimmt, wie die angeglichenen Werte
übertragen werden:

-   Ist die Option \[Auto Reset Mask\] aktiviert, so wird die
    Attributmaske stets auf \'Alle\' zurückgesetzt, sobald man das
    Align-Menü aufruft. Mit \[Remember Mask\] dagegen wird die
    eingestellte Maske beibehalten.

-   Mit \[Spread Attributes\] werden Attributwerte gleichmäßig
    aufgeteilt, wenn die Anzahl der anzugleichenden Geräte nicht mit der
    Anzahl der \'Ziel\'-Geräte übereinstimmt. Mit \[Repeat Attributes\]
    dagegen werden die exakten Werte mehrfach wiederholt.

-   Mit \[Align Programmer Attributes\] werden nur Attribute
    angeglichen, die bereits im Programmer sind. Mit \[Align All
    Attributes\] dagegen werden sämtliche Attribute der Geräte
    angeglichen, sofern sie in der Maske angewählt sind. Hat man z.B.
    Tilt wie gewünscht eingestellt und im Programmer, so würden mit
    \[Align Programmer Attributes\] alle anderen Geräte nur den
    Tilt-Wert übernehmen, mit \[Align All Attributes\] aber auch den
    Pan-Wert.

-   Wählt man \[Palette References Maintained\], so werden Paletten auch
    auf den Ziel-Geräten als Referenz auf die Palette gespeichert. Mit
    \[Palette References Lost\] dagegen werden die Referenzen gelöscht
    und nur feste Attributwerte gespeichert.

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

2. Im Hauptmenü drücken Sie \<ML Menu\>, danach C \[Flip Pan and
Tilt\].

Auf der Positions-Seite des Attribut-Editors steht ebenfalls die
Flip-Funktion zur Verfügung.

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

2. Drücken Sie die \<Fan\>-Taste.

3. Wählen Sie das Attribut, auf das der Effekt angewendet werden soll,
mit den Attribut-Tasten.

4. Stellen Sie das gewünschte Maß von Spreizung mit den Rädern ein.

5. Verlassen Sie den Fan-Modus wieder durch Betätigen der
\<Fan\>-Taste. Werden andere Geräte angewählt, wird \'Fan\' automatisch beendet.

Haben Sie Geräte aus verschiedenen Gruppen ausgewählt, so können Sie
wählen, ob die Gruppenaufteilung beim Fan beachtet werden soll oder
nicht. Haben Sie etwa 12 Geräte auf der Bühne, die in 3 Gruppen à 4
Stück aufgeteilt sind, so können Sie entweder eine gleichmäßige
Verteilung auf alle 12 Geräte, oder ein Aufspreizen innerhalb jeder
Gruppe erreichen.

Während die \<Fan\>-Taste gedrückt gehalten wird, lassen sich im Menü
verschiedene Einstellungen vornehmen:

-   \[Ignore Groups\]: Sämtliche ausgewählten Geräte werden als eine
    große Gruppe behandelt.

-   \[Fan Group as Fixture\]: alle Geräte innerhalb einer Gruppe werden
    identisch behandelt.

-   \[Fan Within Groups\]: Die Fan-Aufspreizung erfolgt innerhalb jeder
    einzelnen Gruppe.

Ferner lässt sich bei gedrückter \<Fan\>-Taste die gewünschte Kurve
auswählen. Mit unterschiedlichen Kurven lassen sich unterschiedliche
Effekte erzielen.

Für gute Ergebnisse sind mindestens 4 Geräte erforderlich. Bei einer
ungeraden Anzahl von Geräten wird das mittlere Gerät im Fan-Modus nicht
beeinflusst.

Betätigen Sie die \<Fan\>-Taste, um den Fan-Modus zu verlassen.
Sämtliche Einstellungen verbleiben dabei im Programmierspeicher.

> Es kann rasch passieren, dass der Fan-Modus versehentlich aktiviert bleibt, was zu der irrigen Annahme führen kann, dass die Räder nicht ordnungsgemäß funktionieren. Stellen Sie daher sicher, den Fan-Modus zu verlassen, wenn Sie mit den Einstellungen fertig sind. Um dies zu vermeiden, gibt es die [Benutzereinstellung](../system-settings/user-settings.md) \[Press and hold Fan\]. Ist diese aktiviert, muss die \<Fan\>-Taste gedrückt gehalten werden, um den Fan anzuwenden.

### Fan-Kurven

Es lassen sich verschiedene Kurven definieren, die die Fan-Funktion
beeinflussen. Halten Sie dazu \<Fan\> gedrückt und wählen \[Curve\]. Es
stehen folgende Auswahlmöglichkeiten zur Verfügung:

-   Line: der gewohnte Fan, das erste und letzte Gerät werden am
    meisten, aber gegensinnig beeinflusst, das mittlere Gerät bleibt
    unverändert. Insbesondere sinnvoll bei Pan.\
    ![Fan Line](/docs/images/Fan-Line.png)

-   Mirror- die Gesamtauswahl wird in zwei Hälften geteilt, die in
    entgegengesetztem Sinn gesteuert werden.\
    ![Fan Mirror](/docs/images/Fan-Mirror.png)

-   Wings -- die Gesamtauswahl wird in drei Teile geteilt, deren beide
    äußere in entgegengesetztem Sinn gesteuert werden, während der
    Mittelteil unverändert bleibt.\
    ![Fan Wings](/docs/images/Fan-Wings.png)

-   Arrow -- die ersten und letzten Geräte werden ebenso beeinflusst wie
    die mittleren, aber in entgegengesetzter Richtung. Ebenfalls
    geeignet für Farbmischung, Tilt und Dimmer.\
    ![Fan Arrow](/docs/images/Fan-Arrow.png)

-   Pull Middle -- Das erste und das letzte Gerät bleiben auf dem
    ursprünglichen Wert, das mittlere Gerät wird am meisten beeinflusst.
    Besonders geeignet für Farbmischung, Tilt und Dimmer.\
    ![Fan Pull Middle](/docs/images/Fan-Pull-Middle.png)

-   Pull Ends -- Wie vor, aber das mittlere Gerät bleibt unverändert,
    die äußeren Geräte werden am meisten (aber gleichsinnig)
    beeinflusst. Besonders geeignet für Farbmischung, Tilt und Dimmer.\
    ![Fan Pull Ends](/docs/images/Fan-Pull-Ends.png)

-   Pull End -- Wie vor, aber das erste Gerät bleibt unverändert, das
    letzte Gerät wird am meisten beeinflusst.\
    ![FanPull End](/docs/images/FanPull-End.png)

### Fan-Teile

Die Fan-Funktion, d.h. das Auffächern der Veränderung, lässt sich auch
gruppieren. Wählen Sie dazu die gewünschten Geräte aus, halten \<Fan\>
gedrückt, und geben die Anzahl der gewünschten Gruppen mit den
Zifferntasten ein:

Normal (1):\
![Fan 1 Part](/docs/images/Fan-1-Part.png)

2:\
![Fan 2 Parts](/docs/images/Fan-2-Parts.png)

3:\
![Fan 3 Parts](/docs/images/Fan-3-Parts.png)

## Speichern von Zeiten für Attribute und Geräte

Fade- und Delayzeiten können direkt für einzelne Geräte oder einzelne
Attribute gesetzt werden. Werden diese dann in einen Cue gespeichert, so
sind auch die Zeiten Bestandteil des Cues.

Zeiten lassen sich auf mehrere Arten einstellen:

-   Mit der Funktionstaste \[Wheels=\] im Hauptmenü lassen sich die
    Räder in die entsprechende Betriebsart schalten, und man kann Zeiten
    mit den Rädern einstellen.

-   Individuelle Zeiten lassen sich auch mit den @-Tasten und der Taste
    \<TIME\> vorgeben.

-   Ebenso kann man auch die Geräte auswählen und mit der \<TIME\>-Taste
    in den jeweiligen Untermenüs individuelle Zeiten einstellen.

-   Schließlich gibt es auch eine Syntax, um Zeiten per Tastatur
    einzustellen. So setzt z.B. die Tastenfolge\
    \<TIME\> \<FIXTURE\> \<Position\> 5 \<@\> 3 
    5s Fadezeit, 3s Delayzeit für die Positionsattribute der gerade
    ausgewählten Geräte. Die @-Tasten lassen sich auch in der
    Tastatursyntax verwenden, und mittels \<THRO\> ergeben sich auch
    Optionen zum Auffächern.

Wird für ein Attribut eine Zeit vergeben, so wird dieses Attribut
als \'im Programmierspeicher\' angezeigt.

In der Kanalübersicht (Channel Grid) gibt es eine
Kontext-Schaltfläche \[Times\], damit lassen sich alle momentan im
Programmierspeicher befindlichen Zeiten anzeigen und editieren. Mit
Off können die Zeiten temporär deaktiviert und mit Off wieder
aktiviert werden.

Zeiten können auch getestet werden: dazu dient die Kombination
\<Avo\>+\<TIME\>, oder Sie drücken zweimal die Taste \<TIME\>.

Auf früheren Konsolen liegt die Funktion der Taste \<TIME\> entweder
auf der Taste \<SET\> (Titan Mobile/Sapphire Touch) oder auf der
Taste \<NEXT TIME\> (Tiger Touch/Pearl Expert).

## Attribute mit "Off" deaktivieren

Wurde ein Attribut editiert, so ist der aktuelle Wert im Programmer, und
kann entsprechend in Cues und Paletten gespeichert werden. Wurde ein
Wert versehentlich editiert (und in den Programmer gebracht) und soll
aber nicht gespeichert werden, so kann er mittels Off deaktiviert
werden.

1. Drücken Sie die Taste \<Off\>, um das Off-Menü zu öffnen.

2. Wählen Sie die Attribut-Bänke, um die entsprechenden Attribute zu
deaktivieren. Drücken Sie dann auf \[Attributes Off\].

3. Mit den Menütasten lassen sich auch einzelne Attribute Off schalten,
z.B. mit \[Dimmer Off\].


-   Um komplette Geräte im Programmer zu deaktivieren, wählen Sie diese
    an, drücken \<Off\> und dann \[Selected Fixtures Off\].
