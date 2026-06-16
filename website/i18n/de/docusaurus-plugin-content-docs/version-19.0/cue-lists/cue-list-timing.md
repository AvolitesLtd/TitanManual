---
id: cue-list-timing
title: Zeiten für Cuelisten
sidebar_label: Zeiten für Cuelisten
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Zeit- und Überblendoptionen für Cuelisten

Zeiten für Cuelisten lassen sich am einfachsten im Playback View (tabellarische Anzeige der Cues einer Cueliste) einstellen. Drücken Sie <Keys.HardKey>Open/View</Keys.HardKey> gefolgt von der **Select**-Taste der Cueliste. Klicken Sie nun auf den Wert, den Sie ändern möchten, oder markieren Sie mehrere Werte auf einmal. Ebenso lässt sich der zu bearbeitende *aktive* Cue mit **Encoder A** wählen, oder Sie drücken <Keys.SoftKey>Select Cue Number</Keys.SoftKey> im Menü **Edit Times** der Cueliste. Mehrere Cues gleichzeitig kann man auch mit **Encoder B** auswählen.

Ist der zu ändernde Wert ausgewählt, dann werden verschiedene Optionen mit den Menütasten angeboten.

![Cue List Timings](/docs/images/Cue-View-Timings.png)

Für jeden Cue kann man einzeln die Einfadezeit (für Geräte, die einfaden, also heller werden) und die Ausfadezeit (für Geräte, die ausfaden/dunkler werden) einstellen. Die Ausfadezeit steht per Default auf 'As In', so dass Aus- und Einfadezeit gleich sind.

LTP-Kanäle (alle Attribute außer Dimmern) folgen der 'Fade In'-Zeit.

-   <Keys.SoftKey>Fade In</Keys.SoftKey> bestimmt die Fadezeit für Geräte, die heller werden, also auf einen höheren Dimmerpegel als vorher wechseln. Außerdem ist das auch die Fadezeit für LTP-Attribute. Steht Fade out auf "As In", so ist dies auch die Fadezeit für ausfadende (dunkler werdende) Geräte. Geben Sie die Zeit in Sekunden ein und drücken Sie <Keys.HardKey>Enter</Keys.HardKey>.
-   <Keys.SoftKey>Delay In</Keys.SoftKey> bestimmt das Delay (Verzögerung) zwischen dem Drücken der <Keys.HardKey>Go</Keys.HardKey>-Taste (oder anderem Starten des Cues) und dem Beginn des Einfadens. 
-   <Keys.SoftKey>Fade Out</Keys.SoftKey> bestimmt die Fadezeit für Geräte, die dunkler werden, also auf einen niedrigeren Dimmerpegel als vorher wechseln. Per Default ist das "As In", übernimmt also die Einfadezeit. War eine Zeit eingegeben und will man auf "As In" zurück, so muss die Zeit gelöscht werden. 
-   <Keys.SoftKey>Delay Out</Keys.SoftKey> bestimmt das Delay (Verzögerung) zwischen dem Drücken der <Keys.HardKey>Go</Keys.HardKey>-Taste (oder anderem Starten des Cues) und dem Beginn des Ausfadens. Per Default ist das "As In", übernimmt also die Delay-In-Zeit. War eine Zeit eingegeben und will man auf "As In" zurück, so muss die Zeit gelöscht werden. 

## Schrittfolge und Versatz

Schritte in Cuelisten können miteinander verbunden werden, womit
sich komplexe automatische Sequenzen realisieren lassen. Die
Optionen werden mit den Funktionstasten eingestellt und
umfassen:

Link Option | Action
---|---
&nbsp;**<Keys.SoftKey>Link Wait For Go</Keys.SoftKey>** | 'Warten auf Go': der Schritt wartet auf das Betätigen der <Keys.HardKey>Go</Keys.HardKey>-Taste und startet dann sofort; *ein Versatz zwischen Schritten ist nicht möglich.*
&nbsp;**<Keys.SoftKey>Link After Previous Cue</Keys.SoftKey>** | 'Start nach vorigem Schritt': der Schritt startet, wenn der vorige seine Warte- und Überblendzeiten durchlaufen hat. Zusätzlich lässt sich ein Versatz (Offset) eingeben, als Verzögerung zwischen dem Ende des vorigen und dem Start des neuen Schritts. Der Versatz kann entweder in Sekunden, oder als Prozentsatz der Überblendzeit des vorigen Schrittes, eingegeben werden.
&nbsp;**<Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>** | 'Start mit dem vorigen Schritt': der Schritt startet gleichzeitig mit dem vorigen. Ein Versatz (Offset), anzugeben in Sekunden oder in Prozent der Überblendzeiten des vorigen Schrittes, bestimmt die Verzögerung zwischen den Schritten.

![Cue List Linking Diagram](/docs/images/Cue-List-Linking-Diagram.png)

Mit diesen Optionen lassen sich komplexe automatische Abläufe von einzelnen 
Schritten realisieren. Ist etwa folgender Effekt gewünscht:

-   Nach Druck auf <Keys.HardKey>Go</Keys.HardKey> blendet Gerät 1 über 20s ein
-   Nach 10s blendet Gerät 2 über 15s ein
-   Beide Geräte bleiben für 5s an
-   Beide Geräte blenden über 3s aus

so könnte man das wie folgt programmieren:

-   **Cue 1**: Gerät 1 @ 100%, Fade In 20s, Link Wait For Go
-   **Cue 2**: Gerät 2@ 100%, Fade In 15s, Link With Previous, Link Offset 10s
-   **Cue 3**: Geräte 1 und 2 @ 0%, Fade Out 3s, Link After Previous, Link Offset 5s

> Für einen Effekt, der als 'Cue Overlap' (Schritt-Überlappen) in früheren Versionen verfügbar war, verwenden Sie <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey>, und geben den Versatz (Offset) in % an. Link Offset = 100% ergibt ein 'Overlap' von 0% und umgekehrt.

## Individuelle Einblendzeiten für Attribute

Für jede Attributgruppe **IPCGBES** lassen sich getrennte Einblendzeiten
vergeben. Ebenso lässt sich bestimmen, für welches Gerät diese Zeit
gilt. So lässt sich etwa bestimmen, dass die Position in 2s wechselt,
der Farbwechsel aber 10s dauert.

Zusätzlich lassen sich auch pro einzelnem Attribut unterschiedliche
Zeiten vergeben, so dass etwa Pan (Schwenken) anders als Tilt (Neigen)
überblendet.

Zum Vorgeben von Zeiten für Attributgruppen öffnen Sie zunächst das 
Menü <Keys.SoftKey>Edit Times</Keys.SoftKey>, gehen zu dem Schritt, den Sie bearbeiten 
möchten [wie oben beschrieben](#zeit--und-überblendoptionen-für-cuelisten), und
drücken <Keys.SoftKey>Next</Keys.SoftKey>, um auf die nächste Optionsseite umzuschalten. 

1.  Drücken Sie <Keys.SoftKey>Attribute Group Times</Keys.SoftKey>.
2.  Damit werden sämtliche Geräte in dem Schritt angewählt. *Wollen Sie
	die Zeiten nicht für alle Geräte einstellen, so ändern Sie jetzt die
	Selektion*. Dazu können Sie die Taste <Keys.HardKey>All</Keys.HardKey> 
	(unterhalb von <Keys.HardKey>Next Time</Keys.HardKey>) benutzen, um alle Geräte 
	anzuwählen, oder <Keys.HardKey>AVO</Keys.HardKey>+<Keys.HardKey>All</Keys.HardKey>, um
	alle abzuwählen.
3.  Drücken Sie die Auswahltaste der gewünschten Attributgruppe.
4.  Drücken Sie <Keys.SoftKey>Delay</Keys.SoftKey> zum Einstellen 
	der **Verzögerung**	oder <Keys.SoftKey>Fade</Keys.SoftKey> zum Einstellen 
	der **Überblendzeit**. Mit <Keys.SoftKey>Use Global</Keys.SoftKey> oder der Taste 
	<Keys.HardKey>Back</Keys.HardKey> entfernen Sie die individuellen Zeiten wieder und 
	kehren zu den normalen/allgemeinen Zeiten für den Schritt zurück.

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

> Siehe auch [Timelines](../timelines.md), eine andere Möglichkeit, um Timecode-gesteuerte
  Shows zu realisieren.

Es können vier getrennte Timecode-Quellen definiert werden. Für jede
kann der Timecode selbst aus der Systemuhr stammen, intern generiert
oder per MIDI, je nach Pult SMPTE oder Winamp (auf dem Pult oder dem Titan-Computer 
installiert) eingespeist werden. Der interne Timecode ist besonders hilfreich beim 
Programmieren einer Show, die später von einem externen Timecode gesteuert werden soll.

> Bei der Verwendung von Winamp empfiehlt sich der Einsatz von WAV-Dateien und nicht von MP3,
da ansonsten mitunter der generierte Timecode falsch ist. Wenn man dann auf Winamp programmiert 
und die Show später von einer anderen Timecode-Quelle steuert, dann ist das sonst nicht mehr synchron.

1. **Connecten** Sie die Cueliste, für die Sie den Timecode aktivieren möchten.
2. Wählen Sie <Keys.SoftKey>Timecode</Keys.SoftKey> aus dem Hauptmenü.
3. Wählen Sie mit **Menütaste A** Timecode 1, 2, 3 oder 4, und mit
&nbsp;**Taste B** die Timecode-Quelle.
4. Drücken Sie <Keys.SoftKey>Record</Keys.SoftKey>.
5. Starten Sie die Timecode-Quelle. *Nutzen Sie den internen Timecode,
so drücken Sie jetzt <Keys.SoftKey>Play</Keys.SoftKey>, um ihn zu starten*.
6. Betätigen Sie die rote <Keys.HardKey>Go</Keys.HardKey>-Taste, um jeden Schritt zum
gewünschten Zeitpunkt zu starten.
7. Drücken Sie <Keys.SoftKey>Record</Keys.SoftKey>, um den Vorgang abzuschließen.

Zur Wiedergabe einer Timecode-gesteuerten Cueliste drücken Sie im
Timecode-Menü <Keys.SoftKey>Connected Cue Lists</Keys.SoftKey> und wählen die gewünschte Cueliste
aus. Dann drücken Sie <Keys.SoftKey>Timer Disabled/Enabled</Keys.SoftKey>, um den jeweiligen
Timecode-Eingang zu aktivieren. **Timer Disabled/Enabled** ist ein globaler Schalter und 
aktiviert/deaktiviert alle Timecode-Quellen. Soll nur ein bestimmter Timecode 
deaktiviert werden, so wählen Sie dagegen für diesen in Schritt 3 (s.o.) als Quelle **No Timecode**.

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
vornehmen: gibt man bei <Keys.SoftKey>Offset =</Keys.SoftKey> einen Wert ein, so kann man 
mit <Keys.SoftKey>Add + </Keys.SoftKey> bzw. <Keys.SoftKey>Subtract - </Keys.SoftKey> 
alle gewählten Zeitmarken um diesen Wert nach vorn oder hinten verschieben.

Zur Kontrolle des anliegenden Timecodes lässt sich jeweils für Timecode
1 bis 4 ein extra Fenster öffnen: drücken Sie zweimal auf <Keys.HardKey>Open/View</Keys.HardKey>
und dann auf <Keys.SoftKey>Timecode x</Keys.SoftKey> (wobei das x für eine Zahl 1 bis 4 steht).

![Timecode 1 Workspace Window](/docs/images/Timecode-1-Workspace-Window.png)
