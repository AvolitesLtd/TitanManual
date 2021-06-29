---
id: cue-list-timing
title: Zeiten für Cuelisten
sidebar_label: Zeiten für Cuelisten
original_id: cue-list-timing
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Zeit- und Überblendoptionen für Cuelisten

Zeiteinstellungen erfolgen stets für jeden Schritt einer Cueliste
einzeln. Im Display wird angezeigt, welcher Schritt aktuell bearbeitet
wird. Zum Auswählen des Schrittes dient <strong>Encoder A</strong> oder <Keys.SoftKey>Select Cue Number</Keys.SoftKey> aus
dem Menü <strong>Edit Times</strong>.

*Weitere Details zu Überblendungen und Geräteversatz sind den [unten aufgeführten Diagrammen](#schrittfolge-und-versatz) zu entnehmen.*

1.  Drücken Sie <Keys.SoftKey>Edit Times</Keys.SoftKey> aus dem Hauptmenü, dann die <strong>Select-Taste</strong> 
	der Cueliste.

2.  Zum Wechseln des zu bearbeitenden Schritts blättern Sie mit <strong>Encoder A</strong>
	durch die Liste der Schritte, oder drücken <Keys.SoftKey>Select Cue Number</Keys.SoftKey>, geben mit den
	Zifferntasten die gewünschte Schrittnummer ein und bestätigen das mit
	<Keys.HardKey>Enter</Keys.HardKey>. 

	- Mit den Pfeiltasten zur Chaser-Steuerung (‚Chase Control')
      rechts neben der <Keys.HardKey>Connect</Keys.HardKey>-Taste lässt sich ebenfalls der aktive
      Schritt umschalten.

	- Man kann auch eine ganze Reihe von Schritten auswählen, um deren
      Zeiten gleichzeitig zu ändern: nutzen Sie dazu <strong>Encoder B</strong>, 
	  oder markieren Sie diese im Fenster [Playback
      View](editing-cue-lists.md#das-fenster-playback-view).

3. <strong>Stellen Sie die Zeiten wie gewünscht ein.</strong>

    -   Um die <strong>Verzögerung</strong> zwischen dem Betätigen der <Keys.HardKey>Go</Keys.HardKey>-Taste und dem
    tatsächlichen Start des Schrittes einzustellen, drücken Sie \[Delay
    In\], geben die gewünschte Zeit in Sekunden ein, und drücken
    <Keys.HardKey>Enter</Keys.HardKey>.

    -   Zum Einstellen der <strong>Einblendzeit</strong> betätigen Sie <Keys.SoftKey>Fade In</Keys.SoftKey>, geben die
    Zeit in Sekunden ein, und drücken <Keys.HardKey>Enter</Keys.HardKey>. *Diese Zeit gilt sowohl
    für HTP- als auch für LTP-Kanäle.*

    -   Die <strong>Ausblendzeit</strong> des Schrittes ist zunächst gleich der Einblendzeit.
    Zum Ändern der Ausblendzeit drücken Sie <Keys.SoftKey>Fade Out</Keys.SoftKey>, geben die Zeit
    in Sekunden ein, und drücken <Keys.HardKey>Enter</Keys.HardKey>. Um wieder den gleichen Wert
    wie die Einblendzeit zu erhalten, löschen Sie die Ausblendzeit und
    lassen das Eingabefeld leer. *Die Ausblendzeit beginnt, sobald der
    nächste Cue gestartet ist. Wird sie z.B. auf 1 Sek. gestellt, so
    wird mit dem Start des nächsten Cues dieser ein- und der alte in 1
    Sek. ausgeblendet*.

    -   Die <strong>Ausschaltverzögerung</strong> (<Keys.SoftKey>Delay Out</Keys.SoftKey>) wird üblicherweise
    verwendet, wenn der nächste Schritt automatisch nach diesem folgen
    soll, und bestimmt die Zeit bis zum Start/Einblenden des folgenden
    Schritts. Damit würde der vorherige Cue zunächst ausblenden, und der
    nächste Cue erst nach der Verzögerung einblenden.

## Schrittfolge und Versatz

Schritte in Cuelisten können miteinander verbunden werden, womit
sich komplexe automatische Sequenzen realisieren lassen. Die
Optionen werden mit den Funktionstasten eingestellt und
umfassen:

Link Option | Action
---|---
&nbsp;<strong><Keys.SoftKey>Link Wait For Go</Keys.SoftKey></strong> | 'Warten auf Go': der Schritt wartet auf das Betätigen der <Keys.HardKey>Go</Keys.HardKey>-Taste und startet dann sofort; *ein Versatz zwischen Schritten ist nicht möglich.*
&nbsp;<strong><Keys.SoftKey>Link After Previous Cue</Keys.SoftKey></strong> | 'Start nach vorigem Schritt': der Schritt startet, wenn der vorige seine Warte- und Überblendzeiten durchlaufen hat. Zusätzlich lässt sich ein Versatz (Offset) eingeben, als Verzögerung zwischen dem Ende des vorigen und dem Start des neuen Schritts. Der Versatz kann entweder in Sekunden, oder als Prozentsatz der Überblendzeit des vorigen Schrittes, eingegeben werden.
&nbsp;<strong><Keys.SoftKey>Link With Previous Cue</Keys.SoftKey></strong> | 'Start mit dem vorigen Schritt': der Schritt startet gleichzeitig mit dem vorigen. Ein Versatz (Offset), anzugeben in Sekunden oder in Prozent der Überblendzeiten des vorigen Schrittes, bestimmt die Verzögerung zwischen den Schritten.

![Cue List Linking Diagram](/docs/images/Cue-List-Linking-Diagram.png)

Mit diesen Optionen lassen sich komplexe automatische Abläufe von einzelnen 
Schritten realisieren. Ist etwa folgender Effekt gewünscht:

-   Nach Druck auf <Keys.HardKey>Go</Keys.HardKey> blendet Gerät 1 über 20s ein

-   Nach 10s blendet Gerät 2 über 15s ein

-   Beide Geräte bleiben für 5s an

-   Beide Geräte blenden über 3s aus

so könnte man das wie folgt programmieren:

-   <strong>Cue 1</strong>: Gerät 1 @ 100%, Fade In 20s, Link Wait For Go

-   <strong>Cue 2</strong>: Gerät 2@ 100%, Fade In 15s, Link With Previous, Link
    Offset 10s

-   <strong>Cue 3</strong>: Geräte 1 und 2 @ 0%, Fade Out 3s, Link After Previous,
    Link Offset 5s

> Für einen Effekt, der als 'Cue Overlap' (Schritt-Überlappen) in früheren Versionen verfügbar war, verwenden Sie <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>, und geben den Versatz (Offset) in % an. Link Offset = 100% ergibt ein 'Overlap' von 0% und umgekehrt.

## Individuelle Einblendzeiten für Attribute

Für jede Attributgruppe <strong>IPCGBES</strong> lassen sich getrennte Einblendzeiten
vergeben. Ebenso lässt sich bestimmen, für welches Gerät diese Zeit
gilt. So lässt sich etwa bestimmen, dass die Position in 2s wechselt,
der Farbwechsel aber 10s dauert.

Zusätzlich lassen sich auch pro einzelnem Attribut unterschiedliche
Zeiten vergeben, so dass etwa Pan (Schwenken) anders als Tilt (Neigen)
überblendet.

Zum Vorgeben von Zeiten für Attributgruppen öffnen Sie zunächst das Menü
<Keys.SoftKey>Edit Times</Keys.SoftKey>, gehen zu dem Schritt, den Sie bearbeiten möchten, und
drücken G <Keys.SoftKey>Next</Keys.SoftKey>, um auf die nächste Optionsseite umzuschalten. Siehe [voriger Abschnitt](#zeit--und-überblendoptionen-für-cuelisten).

1.  Drücken Sie C <Keys.SoftKey>Attribute times</Keys.SoftKey>.

2.  Damit werden sämtliche Geräte in dem Schritt angewählt. *Wollen Sie
	die Zeiten nicht für alle Geräte einstellen, so ändern Sie jetzt die
	Selektion*. Dazu können Sie die Taste <Keys.HardKey>All</Keys.HardKey> (unterhalb von \<Next
	Time\>) benutzen, um alle Geräte anzuwählen, oder <Keys.HardKey>AVO</Keys.HardKey>+<Keys.HardKey>All</Keys.HardKey>, um
	alle abzuwählen.

3.  Drücken Sie die Auswahltaste der gewünschten Attributgruppe.

4. 	Drücken Sie <Keys.SoftKey>Delay</Keys.SoftKey> zum Einstellen der <strong>Verzögerung</strong>, oder 
	<Keys.SoftKey>Fade</Keys.SoftKey> zum Einstellen der <strong>Überblendzeit</strong>. Mit <Keys.SoftKey>Use Global</Keys.SoftKey>
	entfernen Sie die individuellen Zeiten wieder und kehren zu den
	normalen/allgemeinen Zeiten für den Schritt zurück.

>  Nutzen Sie <Keys.SoftKey>Individual Attributes</Keys.SoftKey> zur Vergabe von Zeiten für
    einzelne Attribute aus einer Gruppe, etwa für ‚Pan' aus der Gruppe
    ‚Positions'. Gleiches lässt sich mit dem Fenster [Cue View](editing-cue-lists.md#editieren-von-werten-im-fenster-cue-view)
    realisieren. 

## Fixture Overlap - Geräteversatz

Mit Fixture Overlap - Geräte-Überlappung - werden Änderungen von einem 
Cue zum nächsten auf die einzelnen Fixtures nacheinander statt gleichzeitig 
angewendet. Genauer ist dies in [Einstellen von Überblendzeiten und Geräteversatz](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) erläutert.

## Steuern einer Cueliste per Timecode

<Video videoId="1abZT_ffIvs" title="Recording Timecode" />

In den Titan-Pulten lässt sich auch Timecode zum Steuern einer Cueliste
verwenden. Dies ist hilfreich etwa bei komplexen Shows, die stets
absolut zeitgenau laufen müssen, oder bei unbeaufsichtigten Abläufen.
Dabei wird jedem Schritt der Cueliste eine Startzeit zugeordnet, zu der
er beginnen soll.

Es können vier getrennte Timecode-Quellen definiert werden. Für jede
kann der Timecode selbst aus der Systemuhr stammen, intern generiert
oder per MIDI, je nach Pult SMPTE oder Winamp eingespeist werden. Der
interne Timecode ist besonders hilfreich beim Programmieren einer Show,
die später von einem externen Timecode gesteuert werden soll.

1. <strong>Connecten</strong> Sie die Cueliste, für die Sie den Timecode aktivieren
möchten.

2. Wählen Sie <Keys.SoftKey>Timecode</Keys.SoftKey> aus dem Hauptmenü.

3. Wählen Sie mit <strong>Menütaste A</strong> Timecode 1, 2, 3 oder 4, und mit
&nbsp;<strong>Taste B</strong> die Timecode-Quelle.

4. Drücken Sie <Keys.SoftKey>Record</Keys.SoftKey>.

5. Starten Sie die Timecode-Quelle. *Nutzen Sie den internen Timecode,
so drücken Sie jetzt <Keys.SoftKey>Play</Keys.SoftKey>, um ihn zu starten*.

6. Betätigen Sie die rote <Keys.HardKey>Go</Keys.HardKey>-Taste, um jeden Schritt zum
gewünschten Zeitpunkt zu starten.

7. Drücken Sie <Keys.SoftKey>Record</Keys.SoftKey>, um den Vorgang abzuschließen.

Zur Wiedergabe einer Timecode-gesteuerten Cueliste drücken Sie im
Timecode-Menü <Keys.SoftKey>Connected Cue Lists</Keys.SoftKey> und wählen die gewünschte Cueliste
aus. Dann drücken Sie <Keys.SoftKey>Timer Disabled/Enabled</Keys.SoftKey>, um den jeweiligen
Timecode-Eingang zu aktivieren.

Sobald nun der Timecode läuft (bei internem Timecode drücken Sie dazu
auf <Keys.SoftKey>Play</Keys.SoftKey>), wird jeder Schritt der Cueliste zur programmierten
Zeitmarke gestartet.

Zum Ändern einzelner Timecode-Zeiten klicken Sie entweder in der 
Playback-Ansicht in die entsprechende Zelle und geben die korrekte Zeit 
mit den Zifferntasten ein, oder Sie drücken <Keys.SoftKey>Edit Times</Keys.SoftKey>, wählen den 
zu ändernden Cue aus, wechseln mit <Keys.SoftKey>Next</Keys.SoftKey> auf die dritte Menüseite und 
ändern dort den Wert bei <Keys.SoftKey>Timecode = </Keys.SoftKey>.

![Playback View Window showing timecoded cues](/docs/images/Playback-View-Window-showing-timecoded-cues.png)

Beim Ändern einer Zeit lassen sich mit Encoder B mehrere Schritte
auswählen. Mit den Menütasten lassen sich weitere Zeitänderungen
vornehmen: gibt man bei <Keys.SoftKey>Offset =</Keys.SoftKey> einen Wert ein, so kann man mit 
<Keys.SoftKey>Add + ...</Keys.SoftKey> bzw. <Keys.SoftKey>Subtract - </Keys.SoftKey> alle gewählten Zeitmarken um diesen 
Wert nach vorn oder hinten verschieben.

Zur Kontrolle des anliegenden Timecodes lässt sich jeweils für Timecode
1 bis 4 ein extra Fenster öffnen: drücken Sie zweimal auf <Keys.HardKey>View / Open</Keys.HardKey>
und dann auf <Keys.SoftKey>Timecode x</Keys.SoftKey> (wobei das x für eine Zahl 1 bis 4 steht).

![Timecode 1 Workspace Window](/docs/images/Timecode-1-Workspace-Window.png)
