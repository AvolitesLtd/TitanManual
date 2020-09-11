---
id: version-13.0-cue-list-timing
title: Cue List Timing
sidebar_label: Cue List Timing
original_id: cue-list-timing
---

Zeit- und Überblendoptionen für Cuelisten
-----------------------------------------

Zeiteinstellungen erfolgen stets für jeden Schritt einer Cueliste
einzeln. Im Display wird angezeigt, welcher Schritt aktuell bearbeitet
wird. Zum Auswählen des Schrittes dient **Encoder A** oder **Menütaste A** aus
dem **Menü Cue Times**.

*Weitere Details zu Überblendungen und Geräteversatz sind den [unten aufgeführten Diagrammen](#cue-linking--link-offset) zu entnehmen.*

1. Drücken Sie **Menütaste A** \[Edit Times\] aus dem Hauptmenü, dann die
**Select-Taste** der Cueliste.

2. Zum Wechseln des zu bearbeitenden Schritts blättern Sie mit **Encoder A**
durch die Liste der Schritte, oder drücken \[Cue Number\], geben mit den
Zifferntasten die gewünschte Schrittnummer ein und bestätigen das mit
\<Enter\>. 

	- Mit den Pfeiltasten zur Chaser-Steuerung (‚Chase Control')
      rechts neben der \<Connect\>-Taste lässt sich ebenfalls der aktive
      Schritt umschalten.

	- Man kann auch eine ganze Reihe von Schritten auswählen, um deren
      Zeiten gleichzeitig zu ändern: nutzen Sie dazu **Encoder B**, 
	  oder markieren Sie diese im Fenster [Playback
      View](editing-cue-lists.md#playback-view-window).

3. **Stellen Sie die Zeiten wie gewünscht ein.**

    -   Um die **Verzögerung** zwischen dem Betätigen der \<Go\>-Taste und dem
    tatsächlichen Start des Schrittes einzustellen, drücken Sie \[Delay
    In\], geben die gewünschte Zeit in Sekunden ein, und drücken
    \<Enter\>.

    -   Zum Einstellen der **Einblendzeit** betätigen Sie \[Fade In\], geben die
    Zeit in Sekunden ein, und drücken \<Enter\>. *Diese Zeit gilt sowohl
    für HTP- als auch für LTP-Kanäle.*

    -   Die **Ausblendzeit** des Schrittes ist zunächst gleich der Einblendzeit.
    Zum Ändern der Ausblendzeit drücken Sie \[Fade Out\], geben die Zeit
    in Sekunden ein, und drücken \<Enter\>. Um wieder den gleichen Wert
    wie die Einblendzeit zu erhalten, löschen Sie die Ausblendzeit und
    lassen das Eingabefeld leer. *Die Ausblendzeit beginnt, sobald der
    nächste Cue gestartet ist. Wird sie z.B. auf 1 Sek. gestellt, so
    wird mit dem Start des nächsten Cues dieser ein- und der alte in 1
    Sek. ausgeblendet*.

    -   Die **Ausschaltverzögerung** (\[Delay Out\]) wird üblicherweise
    verwendet, wenn der nächste Schritt automatisch nach diesem folgen
    soll, und bestimmt die Zeit bis zum Start/Einblenden des folgenden
    Schritts. Damit würde der vorherige Cue zunächst ausblenden, und der
    nächste Cue erst nach der Verzögerung einblenden.

Schrittfolge und Versatz
------------------------

Schritte in Cuelisten können miteinander verbunden werden, womit
sich komplexe automatische Sequenzen realisieren lassen. Die
Optionen werden mit den Funktionstasten eingestellt und
umfassen:

Link Option | Action
---|---
**\[Link Wait For Go\]** | 'Warten auf Go': der Schritt wartet auf das Betätigen der \<Go\>-Taste und startet dann sofort; *ein Versatz zwischen Schritten ist nicht möglich.*
**\[Link After Previous Cue\]** | 'Start nach vorigem Schritt': der Schritt startet, wenn der vorige seine Warte- und Überblendzeiten durchlaufen hat. Zusätzlich lässt sich ein Versatz (Offset) eingeben, als Verzögerung zwischen dem Ende des vorigen und dem Start des neuen Schritts. Der Versatz kann entweder in Sekunden, oder als Prozentsatz der Überblendzeit des vorigen Schrittes, eingegeben werden.
**\[Link With Previous Cue\]** | 'Start mit dem vorigen Schritt': der Schritt startet gleichzeitig mit dem vorigen. Ein Versatz (Offset), anzugeben in Sekunden oder in Prozent der Überblendzeiten des vorigen Schrittes, bestimmt die Verzögerung zwischen den Schritten.

![Cue List Linking Diagram](/docs/images/Cue-List-Linking-Diagram.png)

Mit diesen Optionen lassen sich komplexe automatische Abläufe von einzelnen 
Schritten realisieren. Ist etwa folgender Effekt gewünscht:

-   Nach Druck auf \<Go\> blendet Gerät 1 über 20s ein

-   Nach 10s blendet Gerät 2 über 15s ein

-   Beide Geräte bleiben für 5s an

-   Beide Geräte blenden über 3s aus

so könnte man das wie folgt programmieren:

-   **Cue 1**: Gerät 1 @ 100%, Fade In 20s, Link Wait For Go

-   **Cue 2**: Gerät 2@ 100%, Fade In 15s, Link With Previous, Link
    Offset 10s

-   **Cue 3**: Geräte 1 und 2 @ 0%, Fade Out 3s, Link After Previous,
    Link Offset 5s

> Für einen Effekt, der als 'Cue Overlap' (Schritt-Überlappen) in früheren Versionen verfügbar war, verwenden Sie \[Link With Previous Cue\], und geben den Versatz (Offset) in % an. Link Offset = 100% ergibt ein 'Overlap' von 0% und umgekehrt.

Individuelle Einblendzeiten für Attribute
-----------------------------------------

Für jede Attributgruppe **IPCGBES** lassen sich getrennte Einblendzeiten
vergeben. Ebenso lässt sich bestimmen, für welches Gerät diese Zeit
gilt. So lässt sich etwa bestimmen, dass die Position in 2s wechselt,
der Farbwechsel aber 10s dauert.

Zusätzlich lassen sich auch pro einzelnem Attribut unterschiedliche
Zeiten vergeben, so dass etwa Pan (Schwenken) anders als Tilt (Neigen)
überblendet.

Zum Vorgeben von Zeiten für Attributgruppen öffnen Sie zunächst das Menü
\[Edit Times\], gehen zu dem Schritt, den Sie bearbeiten möchten, und
drücken G \[Next\], um auf die nächste Optionsseite umzuschalten. Siehe [voriger Abschnitt](#zeit--und-überblendoptionen-für-cuelisten).

1. Drücken Sie C \[Attribute times\].

2. Damit werden sämtliche Geräte in dem Schritt angewählt. *Wollen Sie
die Zeiten nicht für alle Geräte einstellen, so ändern Sie jetzt die
Selektion*. Dazu können Sie die Taste \<All\> (unterhalb von \<Next
Time\>) benutzen, um alle Geräte anzuwählen, oder \<AVO\>+\<All\>, um
alle abzuwählen.

3. Drücken Sie die Auswahltaste der gewünschten Attributgruppe.

4. Drücken Sie A \[Delay\] zum Einstellen der **Verzögerung**, oder B
\[Fade\] zum Einstellen der **Überblendzeit**. Mit G \[Use Global\]
entfernen Sie die individuellen Zeiten wieder und kehren zu den
normalen/allgemeinen Zeiten für den Schritt zurück.

>  Nutzen Sie \[Individual Attributes\] zur Vergabe von Zeiten für
    einzelne Attribute aus einer Gruppe, etwa für ‚Pan' aus der Gruppe
    ‚Positions'. Gleiches lässt sich mit dem Fenster [Cue View](editing-cue-lists.md#editing-values-in-cue-view-window)
    realisieren. 

Fixture Overlap - Geräteversatz
-------------------------------

Für jeden Schritt lässt sich, sofern dieser mit dem vorigen verbunden
ist, ein Geräteversatz (Fixture Overlap) einstellen; damit werden die
Daten des neuen Schrittes nicht gleichzeitig an alle Geräte, sondern
nacheinander gesendet. Damit lassen sich ohne großen Programmieraufwand
schöne Effekte realisieren.

Drücken Sie A \[Fixture Overlap\] (*auf der zweiten Seite des Menüs
[Cue Times](#time-and-fade-options-for-cue-lists))*, und geben Sie einen Wert von 0...100 mit den Zifferntasten ein. 

Overlap | Ergebnis
--------|---------
100% | Alle Geräte blenden gleichzeitig über (Standardeinstellung).
  0% | Das vorige Gerät schließt seine Überblendung erst ab, bevor das nächste damit beginnt. 
 50% | Das zweite Gerät beginnt mit dem Wechsel, wenn das erste diesen zur Hälfte vollzogen hat.

Zum Ändern der Reihenfolge der Geräte beim Nutzen des Versatzes
drücken Sie D \[Set Fixture Order\]. Zunächst ist das die
Reihenfolge, in der die Geräte beim Programmieren des Schrittes
ausgewählt wurden. Im Fenster ‚Fixtures' wird die aktuelle
Reihenfolge in großen grünen Zahlen angezeigt. Drücken Sie nun A
\[Step Number\], geben die erste zu ändernde Nummer ein, und
betätigen die Schaltfläche des betreffenden Gerätes.

Wollen Sie etwa die Reihenfolge von 8 Geräten ändern, so drücken Sie die
\<1\> der Zifferntasten, dann die Schaltfläche des Gerätes, welches das erste
sein soll, dann die Schaltfläche des zweiten Gerätes und so fort. Wenn gewünscht,
kann man mehreren Geräten die gleiche Nummer zuordnen, um diese gleichzeitig 
wechseln zu lassen. Betätigt man eine Geräte-Schaltfläche zweimal, so wird ein X
angezeigt, und das Gerät wird aus der Folge entfernt.

Drücken Sie \<Exit\>, um das Menü zu verlassen.

![Fixtures Window showing fixture order](/docs/images/Fixtures-Window-showing-fixture-order.png)

Steuern einer Cueliste per Timecode
-----------------------------------

[](https://youtu.be/1abZT_ffIvs?t=20 "Recording Timecode")

In den Titan-Pulten lässt sich auch Timecode zum Steuern einer Cueliste
verwenden. Dies ist hilfreich etwa bei komplexen Shows, die stets
absolut zeitgenau laufen müssen, oder bei unbeaufsich­tigten Abläufen.
Dabei wird jedem Schritt der Cueliste eine Startzeit zugeordnet, zu der
er beginnen soll.

Es können vier getrennte Timecode-Quellen definiert werden. Für jede
kann der Timecode selbst aus der Systemuhr stammen, intern generiert
oder per MIDI, je nach Pult SMPTE oder Winamp eingespeist werden. Der
interne Timecode ist besonders hilfreich beim Programmieren einer Show,
die später von einem externen Timecode gesteuert werden soll.

1. **Connecten** Sie die Cueliste, für die Sie den Timecode aktivieren
möchten.

2. Wählen Sie \[Timecode\] aus dem Hauptmenü.

3. Wählen Sie mit **Menütaste A** Timecode 1, 2, 3 oder 4, und mit
**Taste B** die Timecode-Quelle.

4. Drücken Sie \[Record\].

5. Starten Sie die Timecode-Quelle. *Nutzen Sie den internen Timecode,
so drücken Sie jetzt \[Play\], um ihn zu starten*.

6. Betätigen Sie die rote \<Go\>-Taste, um jeden Schritt zum
gewünschten Zeitpunkt zu starten.

7. Drücken Sie \[Record\], um den Vorgang abzuschließen.

Zur Wiedergabe einer Timecode-gesteuerten Cueliste drücken Sie im
Timecode-Menü \[Connected Cue Lists\] und wählen die gewünschte Cueliste
aus. Dann drücken Sie \[Timer Disabled/Enabled\], um den jeweiligen
Timecode-Eingang zu aktivieren.

Sobald nun der Timecode läuft (bei internem Timecode drücken Sie dazu
auf \[Play\]), wird jeder Schritt der Cueliste zur programmierten
Zeitmarke gestartet.

Zum Ändern einzelner Timecode-Zeiten klicken Sie entweder in der 
Playback-Ansicht in die entsprechende Zelle und geben die korrekte Zeit 
mit den Zifferntasten ein, oder Sie drücken \[Edit Times\], wählen den 
zu ändernden Cue aus, wechseln mit \[Next\] auf die dritte Menüseite und 
ändern dort den Wert bei \[Timecode = \].

![Playback View Window showing timecoded cues](/docs/images/Playback-View-Window-showing-timecoded-cues.png)

Beim Ändern einer Zeit lassen sich mit Rad B mehrere Schritte
auswählen. Mit den Menütasten lassen sich weitere Zeitänderungen
vornehmen: gibt man bei \[Offset =\] einen Wert ein, so kann man mit 
\[Add + ...\] bzw. \[Subtract - \] alle gewählten Zeitmarken um diesen 
Wert nach vorn oder hinten verschieben.

Zur Kontrolle des anliegenden Timecodes lässt sich jeweils für Timecode
1 bis 4 ein extra Fenster öffnen: drücken Sie \[Open Workspace Window\]
und dann \[Timecode x\] (wobei das x für eine Zahl 1 bis 4 steht).

![Timecode 1 Workspace Window](/docs/images/Timecode-1-Workspace-Window.png)
