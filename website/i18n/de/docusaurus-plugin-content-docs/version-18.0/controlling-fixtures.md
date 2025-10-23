---
id: controlling-fixtures
title: Anwählen von Geräten und Dimmern
sidebar_label: Anwählen von Geräten und Dimmern
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Um eine Show zu programmieren - und mitunter auch während der Show - müssen Fixtures und Dimmer ausgewählt 
werden, um deren Attribute - Dimmer, Position, Farbe etc. - einzustellen. 

## Dimmer und Geräte zum Steuern auswählen

Um die zu steuernden Geräte und Dimmer auszuwählen, betätigen Sie die
entsprechenden Geräte-Buttons im Fenster **Fixtures**, womit die Geräte in den Editor geladen
werden. Geräte können auch in einer Layout-Anzeige ausgewählt werden, siehe [Layouts](./controlling-fixtures/layouts.md). Es lassen sich einzelne oder mehrere verschiedene Geräte auf
einmal anwählen. Ebenso lassen sich Gruppen verwenden, um mehrere Geräte
auf einmal anzuwählen, siehe [Gruppen](./controlling-fixtures/fixture-groups.md).

Ist das Gerät/der Dimmer auf einen Fader gepatcht, so drücken Sie die zugehörige blaue Taste, um die Auswahl vorzunehmen.

![Fixtures Window](/docs/images/Fixtures-Window.png)

1. Betätigen Sie die Buttons/Tasten der gewünschten Geräte. Die
Schaltflächen erscheinen daraufhin hellblau, bei auf Tasten gepatchten
Geräten leuchten die LEDs hell auf.
2. Um eine größere Zahl von Geräten auszuwählen, ziehen Sie mit dem
Finger einen entsprechenden Auswahlrahmen. Bei Tasten halten Sie die
erste gedrückt und betätigen dazu die letzte.

Ein paar weitere wissenswerte Dinge:

-   Die Taste <Keys.HardKey>Locate</Keys.HardKey> aktiviert die angewählten Geräte weiß (ohne
    Farbe) und in Grundstellung (Pan und Tilt jeweils 50%). Weitere
    Optionen dazu sind im [nächsten Abschnitt](./controlling-fixtures.md#geräte-auf-startposition-setzen-locate) erläutert.

-   Um ein Gerät aus der Auswahl zu entfernen, einfach die betreffende
    Auswahltaste erneut betätigen.

-   Oben am Touchscreen, direkt oberhalb der oberen Fenster, werden die
    momentan angewählten Geräte angezeigt.

-   Drücken Sie <Keys.HardKey>Clear</Keys.HardKey> (rechts vom Zifferntastenblock), um sämtliche
    Geräte aus der Auswahl zu entfernen und sämtliche Änderungen aus dem
    Programmierspeicher zu löschen. Weitere Optionen dazu sind im
    [nächsten Abschnitt](./controlling-fixtures.md#clear----löschen-des-programmers-und-der-geräteauswahl) erläutert. 

-   Sobald ein Attribut verändert und wieder eine Auswahltaste betätigt
    wurde, werden sämtliche Geräte aus der Auswahl entfernt, und der
    Auswahlprozess startet von neuem. Alle vormals angewählten Geräte
    (seit der letzten Betätigung von <Keys.HardKey>Clear</Keys.HardKey>) verbleiben im
    Programmierspeicher. Sobald ein Gerät editiert wurde, erscheint die
    betreffende Schaltfläche in Dunkelblau. Im obigen Bild sind die
    ersten beiden Geräte angewählt, die folgenden drei im
    Programmierspeicher, und alle anderen nicht angewählt oder editiert.

-   Zur Auswahl von Geräten auf weiteren Seiten der Geräte-Auswahlliste
    kann man entweder mit den 'Page' (Seiten)-Tasten links der
    Gerätetasten die Seiten umschalten, oder (sofern die 'Page'-Tasten
    per Kontext-Taste ausgeblendet sind) mit dem Schiebe-Reiter durch
    die Liste navigieren. Für Fader/Tasten gibt es getrennte tasten für
    die Seitenumschaltung: beim Pearl expert sind dies die vier Tasten
    oberhalb des Ziffernblocks, bei den anderen Pulten die Tasten oder
    Buttons Page+/Page- bei den Fadern.

-   Mit den [Tastenprofilen](./system-settings/key-profiles.md) lässt sich
    die Geräte-Auswahltaste in den Einrast-Modus ('latch mode')
    umschalten, so dass damit der Dimmerkanal des betreffenden Gerätes
    geschaltet wird (gleiches Ergebnis wie Setzen des Faders auf 100%).

## Geräte auf Startposition setzen (Locate)

Die Taste <Keys.HardKey>Locate</Keys.HardKey> (unten rechts auf dem Pult) versetzt die
angewählten Geräte in eine definierte Ausgangsposition mit 'Licht an',
um den Start des Programmierens zu vereinfachen.

Ein einfaches Betätigen der Taste bewegt alle Geräte auf 'Mitte' (50%
Pan/Tilt) und setzt sämtliche Attribute zurück, resultierend in einfach
weißem Licht. Dennoch ist es zuweilen wünschenswert, etwa die Geräte
dabei nicht zu bewegen oder andere Attribute unverändert zu lassen. 

-  Per **Locate** werden keine Werte im Programmer gesetzt. Entsprechend wird im 
Speichermodus **Record by Channel** nichts gespeichert, wenn nicht Attribute manuell verändert wurden. 
(Siehe [Speichermodus/Record Mode](./cue-lists/creating-a-cue-list.md#speichermodusrecord-mode)).

Hält man die <Keys.HardKey>Locate</Keys.HardKey>-Taste gedrückt, so erscheinen im Menü weitere  Funktionen:

-   Sie können einige der 'Locate'-Funktionen maskieren (z.B. nur 'das
    Licht einschalten', ohne Position oder Farbe zu verändern), indem
    bei gedrückter <Keys.HardKey>Locate</Keys.HardKey>-Taste die Funktion <Keys.SoftKey>Set Mask to Exclude All</Keys.SoftKey> gewählt wird. Darauf - bei noch gedrückt gehaltener <Keys.HardKey>Locate</Keys.HardKey>-Taste - 
    schalten Sie die einzelnen Attribute, die Sie
    auf Startposition haben wollen, mittels der Attribut-Tasten ein. Nur
    die so angewählten Attribute werden nun bei 'Locate' zurückgesetzt.
    Ein Druck auf <Keys.HardKey>Attribute Options</Keys.HardKey> löscht wiederum die Maskierung.

-   Die Option <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> löscht die Maskierung automatisch, so
    dass bei jedem 'Locate'-Vorgang wieder sämtliche Attribute
    beeinflusst werden. Alternativ bestimmt die Option <Keys.SoftKey>Remember Mask</Keys.SoftKey>, dass die Maskierung erhalten bleibt.

-   Die Option <Keys.SoftKey>Don't Clear/Clear Located Attributes</Keys.SoftKey> hilft dabei zu verhindern, 
	versehentlich Locate-Werte zu speichern, wenn ein Cue im Modus **Record by Channel** gespeichert werden soll. 
	Steht die Option auf **Don't clear** (Vorgabewert), so werden beim Betätigen von <Keys.HardKey>Locate</Keys.HardKey> 
	bereits im Programmer vorhandene Werte auf Locate-Werte geändert und später mit in den Cue gespeichert.
	Steht die Option dagegen auf **Clear**, so werden bereits im Programmer befindliche Werte beim Betätigen 
	von <Keys.HardKey>Locate</Keys.HardKey> gelöscht und nicht mit in den Cue gespeichert.
	
> Um schnell zu 'Locaten', **ohne Pan/Tilt zu verändern**, drücken und halten Sie <Keys.HardKey>Locate</Keys.HardKey>, drücken dazu <Keys.HardKey>Pan/Tilt</Keys.HardKey> und lassen nun <Keys.HardKey>Locate</Keys.HardKey> los.<br/> 
Um **nur Pan/Tilt zu locaten**, drücken und halten Sie <Keys.HardKey>Locate</Keys.HardKey>, drücken 
dazu <Keys.HardKey>Options</Keys.HardKey> (bzw. <Keys.HardKey>Attribute Options</Keys.HardKey> auf älteren Pulten), drücken dann <Keys.HardKey>Pan/Tilt</Keys.HardKey>, und lassen nun <Keys.HardKey>Locate</Keys.HardKey> los.


### Ändern des Locate-Wertes

Ebenso können Sie den Locate-Wert des Gerätes für die betreffende Show
ändern, und zwar entweder für das eine angewählte Gerät, oder für alle
Geräte dieses Typs. Stellen Sie dazu den gewünschten Wert für das
entsprechende Gerät ein, drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann <Keys.HardKey>Locate</Keys.HardKey>.
Wählen Sie nun <Keys.SoftKey>Shared</Keys.SoftKey> (gemeinsam = alle Lampen dieses Typs) 
oder <Keys.SoftKey>Individual</Keys.SoftKey> (nur einzelne Geräte). Drücken Sie schließlich 
nochmals <Keys.HardKey>Record</Keys.HardKey> oder <Keys.HardKey>Locate</Keys.HardKey>.

## Clear -- Löschen des Programmers und der Geräteauswahl

Die Taste <Keys.HardKey>Clear</Keys.HardKey> (rechts vom Zifferntastenblock) löscht sämtliche
Änderungen aus dem Programmierspeicher sowie die aktuelle Geräteauswahl.

Normalerweise löscht ein **einfacher** Druck auf die Taste sowohl den Programmer als auch die Geräteauswahl. 
Dies lässt sich ändern, so dass entweder **zuerst** der Programmer und erst **mit einem zweiten Tastendruck** 
die Geräteselektion gelöscht wird oder umgekehrt. Siehe [Action Precedence](controlling-fixtures.md#clear-optionen).

### Das Clear-Menü

Hält man die Taste <Keys.HardKey>Clear</Keys.HardKey> gedrückt, erscheinen weitere Optionen. Diese werden 
jeweils ausgeführt, sobald die <Keys.HardKey>Clear</Keys.HardKey>-Taste losgelassen wird.

Mit **Set Mask** lassen sich einzelne Attribute zum Löschen maskieren (etwa: die
Position im Programmierspeicher belassen, aber alles andere
löschen); dazu bei gedrückter <Keys.HardKey>Clear</Keys.HardKey>-Taste die 
Option <Keys.HardKey>Set Mask to Clear Nothing</Keys.HardKey> wählen. Darauf (noch 
immer <Keys.HardKey>Clear</Keys.HardKey> gedrückt halten) lassen sich mit den Attribut-Tasten die zu löschenden
Attribute einzeln wählen, oder Sie wählen <Keys.SoftKey>Set Mask</Keys.SoftKey> und benutzen
die Kontext-Tasten. Nun werden nur die angezeigten Attribute gelöscht. 

Ein Druck auf die Taste <Keys.SoftKey>Attribute Options</Keys.SoftKey> bzw. <Keys.SoftKey>Options</Keys.SoftKey>
wiederum löscht die Maskierung. 

Mit der Option **Time** kann man einstellen, ob die Fade-/Delayzeiten im Programmierspeicher für alle
Attribute ebenfalls gelöscht oder aber beibehalten werden sollen(werden einzelne Attribute gelöscht, 
so werden auch die Zeiten für die jeweiligen Attribute gelöscht; setzt man also die Maske auf P,
so werden die Zeiten für Pan/Tilt gelöscht).

Lässt man die Taste <Keys.HardKey>Clear</Keys.HardKey> los, so werden alle in der Maske ausgewählten 
Attribute aus dem Programmer gelöscht, und die Clear-Maske wird auf **Clear All** zurückgesetzt. Das automatische
Zurücksetzen lässt sich wie unten beschrieben deaktivieren, so dass die Clear-Maske beibehalten wird.

-   Hält man <Keys.HardKey>Clear</Keys.HardKey> gedrückt und betätigt dazu <Keys.HardKey>All</Keys.HardKey>, so werden
    alle Geräte deselektiert, aber die Werte verbleiben im Programmierspeicher.

-   <Keys.SoftKey>Clear Options</Keys.SoftKey> öffnet ein Untermenü mit weiteren, im nächsten Abschnitt 
    beschriebenen Optionen.

-   Mit <Keys.SoftKey>Clear All Fixtures/Selected Fixtures</Keys.SoftKey> bestimmen Sie, ob
    sämtliche, oder nur die aktuell ausgewählten, Geräte aus dem
    Programmierspeicher gelöscht werden sollen.

-   <Keys.SoftKey>Individual Attributes</Keys.SoftKey> erlaubt das Löschen einzelner Attribute
    aus dem Programmierspeicher. Beim Betätigen dieser Taste erhalten
    Sie eine Liste der aktuell im Programmierspeicher vorhandenen
    Attribute, die sich mit der jeweiligen Taste einzeln löschen lassen.

-   <Keys.SoftKey>Clear All Programmers</Keys.SoftKey> löscht alle zurzeit verwendeten
    Programmierspeicher. Dies betrifft insbesondere Werte, die mit der
    Remote, von einem anderen Pult/User in einer Multiuser-Session sowie
    beim Erstellen von Keyframe-Shapes gesetzt wurden.

### Clear-Optionen

Es gibt folgende weitere "Clear-Optionen". Diese gelten pro Benutzer und können auch im Tab Clear 
der [Benutzereinstellungen](./system-settings/user-settings.md#clear) geändert werden.

-   <Keys.SoftKey>Auto Reset Mask</Keys.SoftKey> setzt die Maskierung bei jedem Betätigen der
    'Clear'-Taste automatisch zurück. Alternativ bestimmt <Keys.SoftKey>Remember Mask</Keys.SoftKey>, 
    dass die Maskierung erhalten bleibt.

-   &nbsp;<Keys.SoftKey>Leave/Zero Preset Fader Levels</Keys.SoftKey> bestimmt, ob Faderwerte von
    Geräten mit <Keys.HardKey>Clear</Keys.HardKey> auf 0 gesetzt werden sollen oder nicht. (Das
    Tastenprofil der Geräteauswahl lässt sich auf 'Einrasten' (Latch)
    stellen, womit der Dimmerkanal des Gerätes eingeschaltet wird,
    sobald das Gerät angewählt wird, siehe [Key Profiles](./system-settings/key-profiles.md)).

-   Mit <Keys.SoftKey>Freeze current values</Keys.SoftKey> lässt sich festlegen, was mit
    LTP-Kanälen (nicht Helligkeit) geschieht, deren Wert modifiziert
    wurde. Steht diese Option auf <Keys.SoftKey>Freeze Current Values</Keys.SoftKey>, so behalten
    diese Kanäle die gewählten Werte. Steht die Option auf <Keys.SoftKey>Release To Playback Values</Keys.SoftKey>, 
    so werden die Kanäle auf die Werte der aktuell laufenden Cues zurückgesetzt. Beispiel: 
    wird ein Cue aufgerufen, in dem einige Geräte grün abgespeichert sind, und nun manuell deren
    Farbe auf Rot geändert, so werden diese bei 'Clear' und der Option <Keys.SoftKey>Freeze</Keys.SoftKey> rot 
    bleiben; ist hingegen die Option <Keys.SoftKey>Release</Keys.SoftKey> angewählt, so werden die Geräte zum
    gespeicherten Grün zurückgesetzt.

-   <Keys.SoftKey>Clear/Maintain Cue Times</Keys.SoftKey> bestimmt, ob Cue-Zeiten im
    Programmierspeicher gelöscht oder aber beibehalten werden (dies ist
    unabhängig von Attributzeiten im Speicher).

-   <Keys.SoftKey>Clear/Maintain Rate Settings</Keys.SoftKey> bestimmt, ob Rate-Einstellungen (also die Speed 
    Source, z.B. Master) gecleart werden sollen oder nicht.

-   <Keys.SoftKey>Clear Direction</Keys.SoftKey> Löschen der Direction (Richtung) aus dem Programmer oder nicht.

-   <Keys.SoftKey>Action Precedence</Keys.SoftKey> Einstellungen zum zweistufigen <Keys.HardKey>Clear</Keys.HardKey>:

    - Selection With Programmer: **(default)** Betätigen der Clear-Taste löscht sowohl Programmer als auch Geräteauswahl

    - Selection Then Programmer: sind Geräte angewählt, so wird mit Clear die Geräteauswahl gelöscht. Sind keine Geräte vorhanden, so wird der Programmer gelöscht.

    - Programmer Then Selection: Befinden sich Werte im Programmer, so werden mit Clear diese gelöscht. Wenn der Programmer leer ist, wird die Geräteauswahl gelöscht.

> Geben Sie mit den Zifferntasten eine Zahl ein und drücken dann <Keys.HardKey>Clear</Keys.HardKey>, so faden im Programmer befindliche HTP-Werte in dieser Zeit (in Sekunden) aus. Gibt man etwa 5 ein und drückt <Keys.HardKey>Clear</Keys.HardKey>, so wird in 5 Sekunden ausgefadet. Damit kann man unauffällig mit dem Programmer arbeiten.

### Direktes Clearen einzelner Attribute

Mit dem Fenster [Channel Grid](./controlling-fixtures/viewing-and-editing-fixture-values.md#übersicht-über-die-kanäle-das-channel-grid-fenster) können einzelne Attribute einzelner
Geräte selektiv gelöscht werden.

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
Workspace oder drücken zweimal auf <Keys.HardKey>Open/View</Keys.HardKey> 
und wählen den Attribut-Editor).

![Cell Selection](/docs/images/Cell-Selection.png)

Ebenso können Sie dazu die Unfold-Funktion verwenden: drücken Sie <Keys.HardKey>Unfold</Keys.HardKey> 
und dann die entsprechende Geräteschaltfläche. Daraufhin
werden im Gerätefenster Schaltflächen für die einzelnen Zellen
angezeigt. Verwenden Sie dies auf Geräten auf Fadern/Tasten, so werden
die Zellen ab Fader 1 eingeblendet.

Es gibt zwei Möglichkeiten für Unfold:

-   Drücken Sie <Keys.HardKey>Unfold</Keys.HardKey> und wählen Sie mehrere Geräte aus. Die
    entsprechenden Schaltflächen für die Zellen erscheinen sofort im
    Gerätefenster.

-   Wählen Sie die Geräte aus und drücken Sie <Keys.HardKey>Unfold</Keys.HardKey>. Wählen Sie 
    nun <Keys.SoftKey>Selected Fixtures</Keys.SoftKey>. Dies bietet sich insbesondere für mehrere
    nicht unmittelbar aufeinander folgende Geräte an.

Um in die normale Anzeige zu wechseln, wählen Sie <Keys.HardKey>Unfold</Keys.HardKey>, 
dann <Keys.SoftKey>Exit Unfold</Keys.SoftKey>.

Einzelne Zellen lassen sich auch über eine spezielle Syntax mit den
Zifferntasten auswählen (<Keys.HardKey>THRO</Keys.HardKey> ist auf manchen Pulten 'Through'):

| Tasten                                         | Auswahl                                                 |
|------------------------------------------------|---------------------------------------------------------|
| <Keys.HardKey>.</Keys.HardKey>  	                                     | Alle Zellen der gewählten Geräte                        |
| **n** <Keys.HardKey>.</Keys.HardKey>                                    | Alle Zellen von Gerät **n**                             |
| <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**                     | Zellen 1 bis **j** aller gewählten Geräte               |     
| **n** <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey>                           | Alle Zellen der Geräte ab Nr. **n** des jeweiligen Typs |
| **n** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**                     | Kurzform, s.o.                                          |
| **n** <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> **i**                     | Zellen 1 bis **i** von Gerät **n**                      |
| <Keys.HardKey>.</Keys.HardKey> **m**          		                     | Zelle **m** aller ausgewählten Geräte                   |
| **n** <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey> **j**         | Zellen 1 bis **j** der Geräte **n** bis **i**           |
| <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey>                           | Zellen ab **m** der gewählten Geräte                    |
| **n** <Keys.HardKey>.</Keys.HardKey> **m**                              | Zelle **m** von Gerät **n**                             |
| <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**               | Zellen **m** bis **j** aller gewählten Geräte           |    
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey>                     | Zellen ab **m** des Gerätes **n**                       |
| <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **j**                     | Kurzform, s.o.                                          |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **i**               | Zellen **m** bis **i** von Gerät **n**                  |
| **n** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey>                     | alle Zellen der Geräte **n** bis **i**                  |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey>         | Zellen ab **m** der Geräte **n** - **i**                |
| **n** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey> **j**               | Zelle **j** der Geräte **n** - **i**                    |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> **i** <Keys.HardKey>.</Keys.HardKey> **j**   | Zellen **m** - **j** der Geräte **n** - **i**           |
| **n** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**                     | Zellen 1 - **j** von Gerät **n**                        |
| **n** <Keys.HardKey>.</Keys.HardKey> **m** <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> **j**         | Zellen **m** - **j** von Gerät **n**                    |

-   Die Auswahl von Zellen kann als separate Gruppe gespeichert werden.
    Damit können später verschiedene Zusammenstellungen von Zellen
    aufgerufen werden, ohne jedes Mal den Attribut Editor oder Unfold
    zu verwenden.

## Anwählen von Dimmern/Geräten nach (Kanal-)Nummer

In bestimmten Situationen, etwa beim Programmieren einer Vielzahl von
Dimmern, kann es einfacher sein, die zu ändernden Kanäle anhand ihrer
Nummer auszuwählen. Über das 'Channel'-Menü geht das für Dimmer und
Bewegungsscheinwerfer. Zum Aufruf des 'Channel'-Menüs drücken Sie die
Taste <Keys.HardKey>Fixture</Keys.HardKey> links oberhalb des Zifferntastenblocks.

Ebenso können Sie einfach die entsprechenden Ziffern eingeben; enthält
Ihre Eingabe 'Through', 'And' oder '@', so wird automatisch das
'Channel'-Menü aufgerufen.

Through, And und @ stehen je nach Pult sowohl als Menü-Taste im
Fixtures-Menü als auch über die Pfeiltasten direkt beim Ziffernblock zur
Verfügung.

Die Geräte lassen sich anhand der Gerätenummer (User Number), der Nummer
des Gerätebuttons (Handle Number) oder der DMX-Adresse anwählen, je nach
Einstellung der Menütaste A.

Bei der Benutzung des 'Channel'-Menüs empfiehlt es sich, dieses zu
fixieren (Taste <Keys.HardKey>Menu Latch</Keys.HardKey>).

-   Zum Anwählen eines Gerätes die Nummer eingeben und <Keys.HardKey>Enter</Keys.HardKey>
    drücken.

-   Um mehr als ein Gerät anzuwählen, drücken Sie die Funktionstaste <Keys.SoftKey>And</Keys.SoftKey> 
    zwischen den einzelnen Nummern. 
    
    Beispiel: 1 <Keys.SoftKey>And</Keys.SoftKey> 
    2 <Keys.SoftKey>And</Keys.SoftKey> 5 <Keys.HardKey>Enter</Keys.HardKey> wählt die Geräte 1, 2, 5.

-   Um eine Folge von Geräten anzuwählen, drücken Sie <Keys.SoftKey>Thro</Keys.SoftKey>.
    
    Beispiel: 1 <Keys.SoftKey>Thro</Keys.SoftKey> 8 <Keys.HardKey>Enter</Keys.HardKey> wählt 1-8. 
    
    Lässt man die zweite Zahl weg, so werden alle noch folgenden Geräte des gleichen Typs angewählt.

-   Um einzelne Geräte in einer Folge auszulassen, drücken Sie <Keys.SoftKey>Not</Keys.SoftKey>.

    Beispiel: 1 <Keys.SoftKey>Through</Keys.SoftKey> 4 <Keys.SoftKey>Not</Keys.SoftKey> 3 <Keys.HardKey>Enter</Keys.HardKey> wählt 1, 2, 4.

-   Die Taste <Keys.SoftKey>@</Keys.SoftKey> stellt den Dimmer-Wert der ausgewähl­ten Geräte ein,
    etwa: 1 <Keys.SoftKey>Through</Keys.SoftKey> 8 <Keys.SoftKey>@</Keys.SoftKey> 
    5 <Keys.HardKey>Enter</Keys.HardKey> setzt Gerät 1-8 auf 50% (in den
    Benutzereinstellungen lässt sich einstellen, ob 50% durch "5" oder
    "50" eingegeben wird, siehe [Benutzereinstellungen](./system-settings/user-settings.md)). Beim Betätigen
    der Taste <Keys.SoftKey>@</Keys.SoftKey> erscheinen außerdem Optionen auf den Funktionstasten
    für 'Full' (100%), 'Off' (0) und +/- (schrittweise
    erhöhen/vermindern).

-   Zur numerischen Anwahl von Gruppen verwenden Sie die Taste 'Group';

    Beispiel: <Keys.HardKey>Group</Keys.HardKey> 1 <Keys.SoftKey>And</Keys.SoftKey> <Keys.HardKey>Group</Keys.HardKey> 2 <Keys.SoftKey>Not</Keys.SoftKey> 5 <Keys.HardKey>Enter</Keys.HardKey> selektiert
    Gruppe 1 und 2 außer Gerät 5.

-   Die <Keys.HardKey>Locate</Keys.HardKey>-Taste macht das Betätigen der <Keys.HardKey>Enter</Keys.HardKey>-Taste
    überflüssig, wenn die Geräte angewählt und dann auf die
    Startposition gebracht werden sollen: 1 <Keys.SoftKey>Through</Keys.SoftKey> 4 <Keys.HardKey>Locate</Keys.HardKey>
    wählt Gerät 1 bis 4 aus und initialisiert diese.

![Syntax Selection](/docs/images/Syntax-Selection.png)

-   Beim Eingeben eines Kommandos wird dieses im Infobereich des
    Displays angezeigt. Mittels der grauen ←<Keys.HardKey>Back</Keys.HardKey>Taste kann man
    schrittweise zurückgehen; mit der grauen →<Keys.HardKey>@</Keys.HardKey>Taste lässt sich die
    Eingabe abbrechen.

-   Die Funktionen AND, THRO sowie @ stehen auch auf den Pfeiltasten zur
    Verfügung (siehe deren Beschriftung).

## Geräteauswahl nach Muster

Beim Programmieren einer Show ist es oftmals wünschenswert, verschiedene
Muster von Geräten auszuwählen. Anstatt nun die Geräte einzeln aus- und
abzuwählen, gestattet es das Pult, Geräte aus einer Gesamtauswahl nach
einem bestimmten Muster zu selektieren.

1. Selektieren Sie einige Geräte.
2. Drücken Sie die weiße Taste <Keys.HardKey>All</Keys.HardKey> (bzw. <Keys.HardKey>All/Even/Odd</Keys.HardKey>).
3. Wählen Sie ein Muster von den Menütasten. Die gewählte Auswahl wird
geändert, so dass z.B. nur die ungeraden (odd) Geräte ausgewählt werden.<br/>
   ![Pattern Select](/docs/images/Pattern-Select.png)
4. Drücken Sie die Taste <Keys.HardKey>Fix+1</Keys.HardKey> oder <Keys.HardKey>Fix-1</Keys.HardKey>, um den nächsten
Schritt im gewählten Muster anzuwählen (auf manchen Pulten <Keys.HardKey>Next</Keys.HardKey> und <Keys.HardKey>Prev</Keys.HardKey>).
5. Um die Musterauswahl zu beenden, drücken Sie zweimal <Keys.HardKey>All</Keys.HardKey>.

-   Mittels <Keys.SoftKey>Direction</Keys.SoftKey> (Richtung) kann eingestellt werden, dass die
    Geräte-Reihenfolge einer bestimmten Richtung folgt; dabei wird das
    Layout der Geräte herangezogen. Damit lassen sich z.B. sehr einfach
    symmetrische Paare von Geräten wählen. Auch beim Verwenden von 
	[Fixture Overlap](./cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) 
	ist die Richtung von Bedeutung.

-   Drückt man <Keys.HardKey>Clear</Keys.HardKey>, so wird die Richtung (Direction) wieder auf
    'None' zurückgesetzt. Dies lässt sich mit <Keys.SoftKey>Clear Options</Keys.SoftKey> <Keys.SoftKey>Clear / Maintain Direction</Keys.SoftKey> umstellen (halten Sie <Keys.HardKey>Clear</Keys.HardKey> gedrückt zum
    Einstellen der Clear-Optionen).

-   Wenn Sie etwa einen Chaser mit 16 Geräten programmieren, und dazu jedes 4. synchron einstellen wollen, 
    wählen Sie zunächst alle 16 Geräte aus, drücken dann <Keys.HardKey>All</Keys.HardKey>, 
    dann <Keys.SoftKey>1 in x</Keys.SoftKey>, und danach <Keys.SoftKey>1 in 4</Keys.SoftKey>. Nun sind die 
    Geräte 1, 5, 9 und 13 aus der vorherigen Auswahl zum Bearbeiten angewählt. Drücken 
    Sie <Keys.HardKey>Fix+1</Keys.HardKey> bzw. <Keys.HardKey>Next</Keys.HardKey>, so werden die Geräte 
    2, 6, 10 und 14 angewählt. Nach der Anwahl des 4. Schrittes erscheint wieder der erste Schritt des Musters, 
    bis zweimal <Keys.HardKey>All</Keys.HardKey> betätigt wird.

-   Sie können sehr einfach eigene Muster programmieren: geben Sie dazu z.B. mit den Ziffern- und 
    Funktionstasten "2" A <Keys.SoftKey>In</Keys.SoftKey> "6" <Keys.HardKey>Enter</Keys.HardKey> ein.

-   Diese Funktionen stehen ebenfalls auf den Menütasten zur Verfügung,
    wenn man einen Gruppen-Button gedrückt hält.

-   Bei der Verwendung der Geräteauswahl nach Muster kann man um eine komplette 'Musterbreite' (also einen kompletten Block) springen, indem man die <Keys.HardKey>Avo</Keys.HardKey>-Taste gedrückt hält und dazu <Keys.HardKey>Fix +1</Keys.HardKey> oder <Keys.HardKey>Fix -1</Keys.HardKey> drückt.

## Auswahl von Geräten in einem Cue

Zur Auswahl der Geräte, die in einem bestimmten Cue enthalten sind,
dient die **Select If**-Funktion.

Drücken Sie dazu <Keys.HardKey>Select If</Keys.HardKey> gefolgt von dem Speicherplatz. (Auf
älteren Pulten gibt es keine gesonderte <Keys.HardKey>Select If</Keys.HardKey>-Taste; in diesem
Fall drücken Sie <Keys.HardKey>Fixture</Keys.HardKey> und dann <Keys.SoftKey>Select If</Keys.SoftKey>).

Ebenso lässt sich 'Select If' mit den Tasten <Keys.HardKey>@</Keys.HardKey> und <Keys.HardKey>Thro</Keys.HardKey>
verwenden, um alle Geräte mit einer bestimmten Helligkeit anzuwählen.

&nbsp;<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> 5: Geräte mit 50% Dimmer

&nbsp;<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> 5: Geräte mit der Helligkeit 0 - 50%

&nbsp;<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> 5 <Keys.HardKey>Through</Keys.HardKey>: Geräte mit der Helligkeit 50% - 100%

&nbsp;<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> 5 <Keys.HardKey>Through</Keys.HardKey> 7: : Geräte mit der Helligkeit zwischen 50% und 70%

&nbsp;<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>: Geräte mit der Helligkeit \> 0.

Pegelangaben können entweder in der Schreibweise 0-9 oder 00-99 gemacht
werden, abhängig von der [Benutzereinstellung](./system-settings/user-settings.md) <Keys.SoftKey>Channel Levels Set In</Keys.SoftKey>.

## Einzeln durch die Geräte einer Auswahl durchschalten

Sind mehrere Geräte oder eine Gruppe von Geräten ausgewählt, so bietet
das Pult die Möglichkeit, einzeln durch die angewählten Geräte
durchzuschalten. Dies vereinfacht das Programmieren, da man so nicht
jedes Gerät einzeln selektieren muss.

Für diese Funktion werden die Tasten <Keys.HardKey>Fix-1</Keys.HardKey> (zurück), <Keys.HardKey>Fix+1</Keys.HardKey>
(weiter), <Keys.HardKey>All</Keys.HardKey> (alle) und <Keys.HardKey>HiLight</Keys.HardKey> (hervorheben) genutzt.

1. Wählen Sie mehrere Geräte oder eine Gruppe von Geräten.
2. Mit den Tasten <Keys.HardKey>Fix-1</Keys.HardKey> und <Keys.HardKey>Fix+1</Keys.HardKey> wird jeweils ein Gerät
   ausgewählt bzw. weitergeschaltet (in der Reihenfolge der Auswahl). 
   Auf manchen Pulten dienen dazu die Tasten <Keys.HardKey>Prev</Keys.HardKey> und <Keys.HardKey>Next</Keys.HardKey> .
3. Die Taste <Keys.HardKey>All</Keys.HardKey> wählt alle Geräte aus, die sich im
   Programmierspeicher befinden (alle Geräte, die seit der letzten
   Betätigung von <Keys.HardKey>Clear</Keys.HardKey> angewählt wurden).

-   Die 'HiLight'-Funktion ermöglicht es, das aktuelle Gerät
    hervorzuheben, siehe nächster Abschnitt.

## Das ausgewählte Gerät bei Fix+1/Fix-1 hervorheben

Beim Durchschalten durch eine Geräteauswahl mit den \<Fix+1/\
Fix-1/All\>-Tasten lässt sich das jeweils angewählte Gerät hervor­heben.
Dies vereinfacht es zu sehen, welches Gerät man gerade steuert. Die
anderen Geräte in der Auswahl werden gleichzeitig heruntergedimmt
('Lowlight').

-   Betätigen Sie die <Keys.HardKey>HiLight</Keys.HardKey>-Taste, um diese Funktion zu
    aktivieren. Ein weiteres Betätigen der Taste schaltet die Funktion
    wieder aus. Ist der Highlight-Modus aktiv, so werden die davon
    betroffenen Attribute (z.B. der Dimmer) überschrieben und können
    nicht editiert oder gespeichert werden.

-   Die für Highlight/Lowlight verwendeten Werte lassen sich ändern:
    stellen Sie den gewünschten Wert ein, drücken Sie <Keys.HardKey>Record</Keys.HardKey>, 
    dann <Keys.HardKey>HiLight</Keys.HardKey>, und wählen dann <Keys.SoftKey>Store Highlight State</Keys.SoftKey> 
    oder <Keys.SoftKey>Store Lowlight State</Keys.SoftKey>.

## Nicht ausgewählte Geräte ausblenden (Remainder Dim)

Mit "Remainder Dim" (<Keys.HardKey>Rem Dim</Keys.HardKey> oder <Keys.HardKey>Avo</Keys.HardKey>+<Keys.HardKey>All</Keys.HardKey>) werden die nicht
angewählten Geräte ausgeblendet; dabei wird der Wert Intensity=0 in den
Programmierspeicher geschrieben und entsprechend beim Speichern
übernommen.
