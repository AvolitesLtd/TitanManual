---
id: cue-timing
title: Zeiten für Cues
sidebar_label: Zeiten für Cues
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Es lassen sich viele verschiedene Zeiteinstellungen für Cues vornehmen.

## Einstellen von Überblendzeiten und Geräteversatz

Beim Programmieren von Cues lassen sich Verzögerung, Ein- und
Ausblendzeit für den Cue insgesamt oder aber für einzelne Attribute und
Geräte getrennt einstellen. Sind in dem Cue auch Shapes vorhanden, so
werden diese, abhängig vom [Fade Mode](#fade-modes), davon auch beeinflusst.

> Gibt man längere Zeiten als 60 Sekunden ein, so wird die Eingabe von der Software 
automatisch in Minuten und Sekunden aufgeteilt. Gibt man z.B. **115** ein, so wird das 
als **1:15** (also 1 Min 15 Sek) gewertet. Gibt man noch mehr Stellen ein, so werden 
diese als Stunden:Minuten:Sekunden interpretiert.

Die Überblendzeiten lassen sich zwischen den einzelnen Geräten
verzögern, so dass der Cue nacheinander auf die einzelnen Geräte
eingeblendet wird. Dies bezeichnet man als **Fixture Overlap**
(Geräteversatz), und es gestattet, vielfältige Effekte ohne großen
Programmieraufwand zu realisieren.

Im nachfolgenden Schema zeigt das obere Bild den Wechsel eines
LTP-Kanals unter Berücksichtigung von Verzögerungs- und Überblendzeiten.
Das zweite Diagramm zeigt den entsprechenden Wechsel eines HTP-Kanals.
In den beiden letzten Bildern sind 'Fixture Overlap' sowie das separate
Faden einzelner Attribute dargestellt.

![Fade time, delay time, fixture overlap and attribute fade time diagram](/docs/images/Fade-time-delay-time-fixture-overlap-and-attribute-fade-time-diagram.png)

Alle beim Programmieren des Cues eingestellten Zeiten werden in den Cue
gespeichert.

Gespeicherte Zeiten lassen sich wie folgt ändern:

1. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey> im Hauptmenü.
2. Drücken Sie die **Auswahltaste** des Cues.
3. Drücken Sie <Keys.SoftKey>Fade Mode x</Keys.SoftKey>, um den 'Fade Mode' (Überblendmodus)
einzustellen. &nbsp;*Das bestimmt, wie die Zeiten verwendet werden, [siehe unten](#fade-modes).*
4. Drücken Sie <Keys.SoftKey>Delay time</Keys.SoftKey>, um die Verzögerungszeit vor Beginn des
Cues einzugeben, <Keys.SoftKey>Fade time</Keys.SoftKey> für die Einblendzeit, sowie \[Fade out
time\] für die Eingabe der Ausblendzeit.
5. Geben Sie die jeweilige Zeit mit den Zifferntasten (in Sekunden)
ein, und schließen Sie die Eingabe mit <Keys.HardKey>Enter</Keys.HardKey> ab.
6. Drücken Sie <Keys.SoftKey>Fixture Overlap</Keys.SoftKey> zur Einstellung des Geräteversatzes,
gefolgt von einem Wert **0...100** auf den Zifferntasten.<br/>
 **100%** bedeutet: alle Geräte blenden gemeinsam über.<br/>
 **0%** bedeutet: das vorherige Gerät muss die Überblendung abgeschlossen haben, bevor das nächste damit beginnt.<br/>
 **50%** bedeutet: das nächste Gerät beginnt mit der Überblendung, wenn das vorherige seine Überblendung zur Hälfte
abgeschlossen hat.<br/>
 Die Reihenfolge der Geräte wird bestimmt durch die Reihenfolge beim Anwählen der Geräte *(kann aber später geändert
 werden, siehe [Ändern der Geräte-Reihenfolge](#ändern-der-reihenfolge-der-geräte))*.
7. Drücken Sie <Keys.HardKey>Exit</Keys.HardKey> zum Verlassen des Menüs.


---

-   Ebenso lassen sich sowohl für die **IPCGBES**-Attributgruppen als auch für jedes Attribut einzeln gesonderte Zeiten
vergeben, siehe     [Ändern der Attribut-Fadezeit](#eingeben-von-überblendzeiten-für-einzelne-attribute).

-   Mit der Taste <Keys.HardKey>TIME</Keys.HardKey> lassen sich Zeiten sehr komfortabel mit dem
    Ziffernblock eingeben, z.B. ergibt <Keys.HardKey>TIME</Keys.HardKey> <Keys.HardKey>5</Keys.HardKey> <Keys.HardKey>AND</Keys.HardKey> <Keys.HardKey>2</Keys.HardKey> 5s Ein- und
    2s Ausfadezeit *(auf früheren Pulten liegt die Times-Funktion auf der
    Taste <Keys.HardKey>SET</Keys.HardKey> (Titan Mobile/Sapphire Touch) bzw. <Keys.HardKey>NEXT TIME</Keys.HardKey>
    (Tiger Touch/Pearl Expert))*.

### Fade Modes

Die eingegebenen Zeiten werden abhängig vom 'Fade Mode' (Überblendmodus) wie folgt interpretiert (auch erreichbar 
über <Keys.SoftKey>Options</Keys.SoftKey> auf dem Reiter <Keys.SoftKey>Fader</Keys.SoftKey>):

-   <Keys.SoftKey>Mode 0</Keys.SoftKey> - die Kanäle blenden in der vorgegebenen Zeit über, die
    Ausblendzeit wird dabei ignoriert. Stehen die Zeiten auf '0', so
    werden HTP-Kanäle direkt mit dem Fader eingeblendet, während
    LTP-Kanäle 'hart' umschalten.

-   <Keys.SoftKey>Mode 1</Keys.SoftKey> - die Kanäle blenden in der vorgegebenen Zeit ein, HTP Kanäle
    blenden in der vorgegebenen Ausblendzeit aus (LTP-Kanäle behalten
    ihre Werte). Stehen die Zeiten auf '0', so werden HTP-Kanäle direkt
    mit dem Fader eingeblendet, während LTP-Kanäle 'hart' umschalten.

-   <Keys.SoftKey>Mode 2</Keys.SoftKey> - die Kanäle blenden in der vorgegebenen Zeit ein, die
    Ausblendzeit wird ignoriert. Das Überblenden stoppt, sobald die
    Position des Fader erreicht ist; steht dieser etwa auf 50%, so
    erfolgt das Überblenden nur zur Hälfte. Bringt man den Fader wieder
    auf '0', so kehren die Kanäle zu den vorherigen Werten zurück.
    Stehen die Zeiten auf '0', so werden HTP- und LTP-Kanäle direkt mit
    dem Fader gesteuert.
	
    In diesem Modus kehren LTP-Kanäle generell zu den vorherigen Werten zurück, sobald der Cue deaktiviert wird.

    *Mit Mode 2 lässt sich z.B. auch eine manuelle Verfolgersteuerung etwa für einen Laufsteg realisieren, 
	indem der Cue nur Pan/Tilt enthält und dann auf Mode 2 gestellt wird. Dieser Modus bietet sich auch für die 
	Steuerung der einzelnen Farben bei RGB-Lampen an*.

-   <Keys.SoftKey>Mode 3</Keys.SoftKey> - Crossfade (Überblendung). Sämtliche Kanäle, einschließlich
    der Helligkeit, blenden zu den Einstellungen des neuen Cues über,
    alle anderen noch aktiven Cues werden ausgeblendet und deaktiviert.
    Wird ein anderer Cue wieder benötigt, so bringen Sie dessen Regler
    auf '0' und dann wieder auf den gewünschten Wert.

>   Enthält der Cue Shapes, so ändern sich diese mit den eingestellten
    Überblendzeiten. Im <Keys.SoftKey>Mode 1</Keys.SoftKey> ändern sich die Shapes abhängig von den
    Zeiten, in <Keys.SoftKey>Mode 2</Keys.SoftKey> abhängig von der Faderstellung. Damit lassen sich
    etwa Shapes realisieren, die abhängig vom Fader schneller oder
    größer werden.

## Ändern der Reihenfolge der Geräte

Die Reihenfolge der Geräte in einem Cue lässt sich nachträglich ändern.
Normalerweise wird diese mit der Reihenfolge der Auswahl der Geräte beim
Erstellen des Cues oder der Gruppe, sofern eine angewählt wurde, festgelegt, 
aber ggf. möchte man diese später ändern *(etwa, um Geräte bei der Nutzung von [Fixture Overlap](#einstellen-von-überblendzeiten-und-geräteversatz) 
paarweise zusammenzufassen)*.

1. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey> im Hauptmenü.
2. Drücken Sie die **Auswahltaste** des zu ändernden Cues.
3. Drücken Sie <Keys.SoftKey>Fixture Order</Keys.SoftKey>.
4. Wählen Sie die Schrittnummer, ab der Sie beginnen möchten, mit der
Menütaste <Keys.SoftKey>Step Number</Keys.SoftKey>.
5. Soll die Schrittnummer automatisch erhöht werden, so stellen Sie
<Keys.SoftKey>Autoincrement</Keys.SoftKey> auf **On**. Sollen mehrere Geräte die gleiche
Schrittnummer bekommen, stellen Sie diese Option auf **Off**.
6. Betätigen Sie die Schaltfläche des Gerätes, das Sie an dieser Stelle
in der Sequenz haben möchten. Die Schrittnummer wird (in grün) jeweils oben rechts
in den Geräte-Schaltflächen angezeigt.<br/>
 ![Fixtures Window setting Fixture Order](/docs/images/Fixtures-Window-showing-fixture-order.png)
7. Drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, um das Menü zu beenden.

---

-   Ebenso kann man mehreren Geräten die gleichen Schrittnummern geben.
    Damit lässt sich erreichen, dass bei Verwendung des Geräteversatzes
	([Fixture Overlap](#einstellen-von-überblendzeiten-und-geräteversatz)) 
    mehrere Geräte gleichzeitig beeinflusst werden.

-   Einzelne Geräte kann man auch komplett aus der Folge entfernen;
    schalten Sie dazu <Keys.SoftKey>Autoincrement</Keys.SoftKey> auf 'Off' und klicken Sie die
    Geräteschaltfläche zweimal (daraufhin wird statt der Schrittnummer ein 'X'
    angezeigt). Betätigen Sie die Geräte-Schaltfläche nochmals, um das
    Gerät wieder in die Folge aufzunehmen.

## Eingeben von Überblendzeiten für einzelne Attribute

Es lassen sich spezifische Überblendzeiten für die einzelnen
Attributgruppen vergeben (etwa für 'Position'). Wird eine solche Zeit
eingegeben, so überschreibt diese die allgemein vergebenen Zeiten.

Zur Eingabe der Überblendzeit für Attributgruppen gehen Sie wie folgt
vor:

1. Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey> im Hauptmenü.
2. Drücken Sie die **Auswahltaste** des jeweiligen Cues.
3. Drücken Sie die Taste der Attributgruppe (IPCGBES Buttons, oder 
rechts auf dem Pult bei älteren Pulten) des Attributes, das Sie ändern möchten.
4. Drücken Sie <Keys.SoftKey>Delay = </Keys.SoftKey> zur Eingabe einer Verzögerung oder <Keys.SoftKey>Fade = </Keys.SoftKey> 
zur Eingabe einer Überblendzeit.
5. Geben Sie die gewünschte Zeit mit den Zifferntasten, gefolgt von
<Keys.HardKey>Enter</Keys.HardKey>, ein, oder drücken Sie <Keys.SoftKey>Use Global</Keys.SoftKey>, um die gesonderten
Attributzeiten zu löschen und die allgemeinen Zeiten des Cues zu
verwenden.
6. Drücken Sie <Keys.HardKey>Enter</Keys.HardKey> zum Speichern der Änderungen.

Dies lässt sich weiter verfeinern, indem man etwa jedem einzelnen Gerät
unterschiedliche Zeiten gibt. Sobald Sie einen Cue zum Ändern auswählen,
sehen Sie, dass automatisch alle Geräte des Cues angewählt sind. Um nur
die Zeiten einzelner Geräte zu ändern, ändern Sie die Geräteauswahl mit den
entsprechenden Auswahl-Schaltflächen.

Das [Fenster Cue View](editing-cues.md#cue-view) erscheint, sobald die Zeiten
editiert werden. Innerhalb dieses Fensters kann man direkt Geräte und
Attribute zum Editieren auswählen.

Betätigen Sie die Taste <Keys.HardKey>ALL</Keys.HardKey>, um wieder alle Geräte in dem Cue
auszuwählen.

Innerhalb des Menüs 'Set Attribute Times' lassen sich nur Geräte
auswählen, die bereits in dem Cue enthalten sind.

## Editieren der Zeiten im Programmer

Die Zeiten im Programmierspeicher lassen sich vor dem Speichern eines
Cues überprüfen und ändern. Ebenso lassen sich Zeiten einstellen und in
bestehende Cues verschmelzen ([mergen](editing-cues.md#editieren-eines-cues-durch-verschmelzen-merge)), genau wie man Attribut-Werte verschmilzt.

Drücken Sie die Taste <Keys.HardKey>TIME</Keys.HardKey>, um in dieses Menü zu gelangen.

>   Auf dem Titan Mobile und dem Sapphire Touch liegt diese Funktion auf
    der Taste oberhalb der <Keys.HardKey>Clear</Keys.HardKey>-Taste (Taste <Keys.HardKey>SET</Keys.HardKey>). Auf dem Tiger
    Touch und dem Pearl Expert ist es die Taste <Keys.HardKey>NEXT TIME</Keys.HardKey>.

Es lassen sich Zeiten für den gesamten Cue, für einzelne Geräte, für
Attributgruppen oder einzelne Attribute einstellen.

![Edit Programmer Cue Times in the Titan Go interface](/docs/images/Edit-Programmer-Cue-Times-in-the-Titan-Go-interface.png)

Unter Verwendung der Taste <Keys.HardKey>TIME</Keys.HardKey> gibt es folgende Tastatur-Syntax:

-   <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>5</Keys.HardKey> = 5 s Einfadezeit.

-   <Keys.HardKey>CUE</Keys.HardKey> <Keys.HardKey>3</Keys.HardKey> <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>5</Keys.HardKey> = 5 s Einfadezeit für Cue 3 der verbundenen
    Cueliste.

-   <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>FIXTURE</Keys.HardKey> <Keys.HardKey>5</Keys.HardKey> = 5 s Einfadezeit für alle Attribute der
    gewählten Geräte.

-   <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>FIXTURE</Keys.HardKey> <Keys.HardKey>G</Keys.HardKey> <Keys.HardKey>5</Keys.HardKey> = 5 s Einfadezeit für die Gobo-Kanäle der
    gewählten Geräte.

-   <Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>FIXTURE</Keys.HardKey> <Keys.HardKey>\@B</Keys.HardKey> <Keys.HardKey>5</Keys.HardKey> = 5 s Einfadezeit für das momentan
    auf Rad B liegende Attribut der gewählten Geräte.

-   <Keys.HardKey>5</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>3</Keys.HardKey> = 5 s Einfadezeit, 3 s Delay.

-   <Keys.HardKey>5</Keys.HardKey> <Keys.HardKey>AND</Keys.HardKey> <Keys.HardKey>2</Keys.HardKey> = 5 s Ein-, 2 s Ausfadezeit.

-   <Keys.HardKey>1</Keys.HardKey> <Keys.HardKey>THRO</Keys.HardKey> <Keys.HardKey>10</Keys.HardKey> = Auffächern der Zeit zwischen den gewählten Geräten
    in der Reihenfolge deren Auswahl.

<Video videoId="GHq9b3PT8U0" title="Timing Syntax" />

Zeiten für einzelne Attribute lassen sich auch mit den Encodern
einstellen; wählen Sie dazu mit der Funktionstaste <Keys.SoftKey>Wheels</Keys.SoftKey> im
Hauptmenü die gewünschte Arbeitsweise der Räder.

Mit der Taste <Keys.HardKey>Options</Keys.HardKey> lassen sich, während die Zeiten angezeigt
werden, die Parameter **Speed**, **Effect Multiplier**, **Speed Multiplier** und
&nbsp;**Speed Source** im Programmer, so dass sie einfach direkt in die nächsten
Playbacks gespeichert werden können. Speed und Speed Multiplier haben nur
Auswirkungen auf [Chaser](../chases.md), nicht auf einzelne Cues.

![Edit Programmer Rate Settings Menu, found by pressing Options](/docs/images/Edit-Programmer-Rate-Settings-Menu-found-by-pressing-Options.png)
