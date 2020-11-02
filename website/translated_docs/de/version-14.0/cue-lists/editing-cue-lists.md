---
id: version-14.0-editing-cue-lists
title: Editing Cue Lists
sidebar_label: Editing Cue Lists
original_id: editing-cue-lists
---

Dieses Kapitel beschreibt, wie Cues in Cuelisten editiert werden. 
Geht es hingegen darum, die ganze Cueliste zu verschieben, zu kopieren oder 
zu löschen, sei auf das Kapitel [Kopieren, verschieben, verlinken, löschen](../cue-lists/copying-moving-linking-and-deleting.md) verwiesen.

Das Fenster Playback View
-------------------------

Am einfachsten lässt sich eine Cueliste in der Playback-Ansicht
(Playback View) editieren, dazu drücken Sie \<View / Open\>,
gefolgt von der **Auswahltaste** der gewünschten Cueliste. Diese Ansicht
besteht aus einer Tabelle, wobei jeder Cue mit seinen Details in einer
Zeile aufgelistet ist. Durch Anklicken einzelner Zellen lassen sich die
jeweiligen Werte verändern, und auf den Funktionstasten stehen
verschiedene Optionen zur Auswahl.

![Playback view](/docs/images/Cue-List-Window-with-Autoload-playback.png)

Um mehrere Cues auf einmal zu editieren, ziehen Sie in der Ansicht eine
Box um die zu ändernden Zellen.

Ferner bietet die [Intensity-Ansicht](../controlling-fixtures/viewing-and-editing-fixture-values.md#das-fenster-intensity) eine gute Möglichkeit, alle
aktiven Geräte und deren Werte zu überblicken. 

Editieren von Werten im Fenster Cue View
----------------------------------------

Jeder einzelne Attributwert jedes Gerätes kann in der Cue-Ansicht (Cue
View) angezeigt und verändert werden. Dazu klicken Sie in der
[Playback-Ansicht](#das-fenster-playback-view) beim gewünschten Cue auf die 
Schaltfläche **View** (Spalte *View Cue* weit rechts). 

![Cue View Window](/docs/images/Cue-View-Window.png)

Nun können Sie wiederum einzelne oder mehrere Zellen anklicken, um die
Werte direkt zu ändern.

-   Über das Kontextmenü kann man die Anzeige von Pegeln, Shapes,
    Effekten und Zeiten aktivieren.

-   Wenn Werte von einer Palette stammen, so schaltet **View Palettes**
    zwischen der Anzeige der Werte und der Anzeige der Palette um.

-   Ist die Option **View Tracking Levels** angewählt, so werden
    getrackte, also aus vorherigen Cues übernommene Werte hellgrau
    hervorgehoben.

Kopieren, Verschieben und Löschen einzelner Cues
------------------------------------------------

 Dazu klicken und ziehen
Sie entweder den gewünschten Cue im [Playback View](#das-fenster-playback-view) 
(drücken Sie dazu \<View / Open\>, dann die Taste der gewünschten Cueliste), 
oder verwenden Sie die **Unfold-Funktion** ([siehe nächster Abschnitt](#editieren-einer-cueliste-mit-unfold)) oder eine spezielle
Tasten-Syntax.

Es lassen sich auf verschiedene Weise einzelne oder mehrere Cues innerhalb 
einer oder zwischen mehreren Cuelisten kopieren oder verschieben:
-   Man kann die **Unfold-Funktion** ([siehe nächster Abschnitt](#editieren-einer-cueliste-mit-unfold)) nutzen.
-   Um einen Cue zu verschieben, kann man diesen im Fenster [Playback View](#das-fenster-playback-view) anklicken und verschieben, oder man klickt 
auf die Nummer des Cues und ändert diese mit der Menütaste \[Change To\]
(sobald die Nummer geändert wurde, ändert sich auch die Reihenfolge der 
Cues).
-   Um einen Cue zu löschen, drücken Sie die \<Delete\>-Taste, wählen 
den Cue im Playback-View aus, und klicken zur Bestätigung den Cue nochmals 
an oder drücken \<Enter\> oder \[Confirm\].

Ebenso lässt sich eine Tastensyntax verwenden: 

- Dabei ist **{fader select}** die Auswahltaste des aktuellen
  Speicherplatzes und **n** die Nummer des jeweiligen Cues; Abschnitte
  in **[eckigen Klammern]** sind optional. Die \<@\>-Taste ist die bei 
  den Zifferntasten.

Tastenfolge                                                  | Ergebnis
------------                                                 |---------
\<Copy\> {fader select} **n** \<@\> **m** \<Enter\>          | Kopieren von Cue **n** nach Cue **m** in der gleichen Cueliste
\<Move\> {fader select} **n** \<@\> **m** \<Enter\>          | Verschieben von Cue **n** nach Cue **m** in der gleichen Cueliste
\<Copy\> {fader select} **n** \<@\> \<@\>                    | Kopieren von Cue **n** als neuer Cue an das Ende der Cueliste
\<Delete\> {fader select} **n** \<Enter\> \<Enter\>          | Löschen von Cue **n**
\<Copy\> {fader select} **n** {fader select} **m** \<Enter\> | Kopieren von Cue **n** nach Cue **m** in einer anderen Cueliste
\<Copy\> {fader select} **n** {fader select} \<Enter\>       | Kopieren von Cue **n** an das Ende einer anderen Cueliste

-   Anstelle von \<Copy\> lässt sich \<Move\> verwenden, um Cues nicht zu 
	kopieren, sondern zu **verschieben**. Auf älteren Pulten ohne eine 
	 \<Move\>-Taste drücken Sie \<Avo\> und \<Copy\>.

- 	Zum Kopieren/Verschieben **mehrerer** Cues verwenden Sie \<Thru\>, \<And\> 
	und \[Not\]. Um z.B. die Cues 3, 4 ,5 ,7, 10 als neuen Block ab Cue 20 zu
	kopieren, drücken Sie \
    \<Copy\> {fader select} **3** \<Thru\> **7** \[Not\] **6** \<And\> **10** \<@\> **20** \<Enter\>


Editieren einer Cueliste mit 'Unfold'
-------------------------------------

Mit der Taste \<Unfold\> ('Aufklappen') wird jeder Schritt einer
Cueliste auf einen einzelnen Regler abgebildet. Damit lässt sich jeder
Schritt einzeln aufrufen und editieren, als wäre er ein eigener Cue.

1. Drücken Sie die \<Unfold\>-Taste, gefolgt von der **Auswahltaste**
der zu ändernden Cueliste.

2. Die ersten zehn Schritte werden auf die **Playback-Fader** gelegt. Im
Display wird die jeweilige Schrittnummer und Bezeichnung angezeigt. 
*(Sind mehr Cues als Fader vorhanden, so kann man mit den Menütasten 
F und G weiterschalten)*.

3. **Betätigen Sie einen Fader**, um den jeweiligen Schritt aufzurufen
*(dabei werden die programmierten Überblendzeiten mit berücksichtigt)*.

4. Es gibt diverse Optionen bei der 'Unfold'-Funktion, die Details dazu
sind unten aufgeführt.

5. Drücken Sie \<Unfold\> nochmals, um den Modus zu verlassen.

---

-   Zum **Editieren** eines Schrittes drücken Sie \<Clear\> zum Leeren des
    Programmierspeichers, aktivieren den Fader des Schrittes, nehmen
    die gewünschten Änderungen vor, drücken dann \[Record Step\] und
    schließlich die **Select-Taste** des Schrittes.

-   Um den Inhalt des Programmierspeichers in den aktuellen Schritt zu
    integrieren (**mergen**), klicken Sie zweimal auf \[Record Step\].

-   Zum Ändern der Zeiten oder der Folge des Schrittes drücken Sie
    \[Edit Times\], gefolgt von der **Select-Taste** des Schrittes, und
    nehmen die Änderungen vor (siehe [Zeiten für Cuelisten](cue-list-timing.md)).

-   Um einen neuen Schritt **einzufügen**, stellen Sie das gewünschte Bild
    ein, drücken B \[Insert Step\], dann die Taste des Schrittes, auf
    die dieser programmiert werden soll. Alle folgenden Schritte werden
    um eins verschoben, und der neue Schritt erhält eine Nummer zwischen
    den beiden existierenden Schritten (*drückt man etwa die Taste für
    Schritt 3, so erhält dieser die Schrittnummer 2.5*).

-   Zum **Verschieben** oder **Kopieren** eines Cues drücken Sie \<Copy\> (ggf.
    mehrfach) oder \<Move\>, dann die **Auswahltaste** des gewünschten Cues,
    und schließlich die **Auswahltaste** für den gewünschten Ziel-Cue.

-   Zum Löschen eines Schrittes drücken Sie die blaue \<Delete\>-Taste,
    gefolgt von der **Select-Taste** des zu löschenden Schrittes.
    Drücken Sie zur Bestätigung die **Select-Taste** nochmals.

-   Zum Ändern der Bezeichnung drücken Sie \[Set Step Legend\], gefolgt
    von der **Select-Taste** des betreffenden Schrittes.

-   Enthält die Cueliste mehr Schritte als Fader vorhanden sind, so
    lässt sich mit den Funktionstasten F und G die Seite umschalten

Update und Cue-Tracking
-----------------------

Da in einer Cueliste die einzelnen Werte für die einzelnen Cues
nachverfolgt werden [Tracking](cue-list-playback.md#tracking), muss 
beim Ändern eines bestimmten Schritts ermittelt werden, aus welchem 
Schritt die zu ändernden Werte stammen. 

Die **Update**-Funktion geht die vorherigen Schritte durch und ermittelt,
welcher Schritt genau geändert werden muss.

1. Bei gestarteter Cueliste wählen Sie die Geräte aus und ändern sie
wie gewünscht.

2. Drücken Sie \<Update\> *(auf alten Pulten \<Record Cue\>, dann
\[Update\])*.

3. Drücken Sie \<Enter\>, um die neuen Werte direkt in die Cueliste zu
übernehmen.

> Alternativ wird bei den Funktionstasten eine Liste der Paletten und
Playbacks angezeigt, die aktualisiert werden können. Wählen Sie den
gewünschten Eintrag.\
Haben Sie die Funktionstasten-Option verwendet, drücken Sie
\<Enter\>, um den Vorgang abzuschließen.

Stammten die geänderten Attribute von einem vorherigen Cue, so wird
dieser - und nicht der aktuell laufende - geändert, siehe 
 [Tracking](cue-list-playback.md#tracking).

Editieren einer laufenden Cueliste
-----------------------------------

Ebenso lassen sich Schritte einer laufenden Cueliste ändern, ohne
[Unfold](#editieren-einer-cueliste-mit-unfold) nutzen zu müssen: 

1. **Starten Sie die Cueliste** mit dem entsprechenden Fader.

2. Wählen Sie mit **Encoder A** den zu ändernden Schritt, und aktivieren Sie
diesen mit der \<Go\>-Taste. *(Beim Pearl Expert/Tiger Touch Mk1 
drücken Sie statt der Go-Taste die Taste \<↔\> oberhalb der Taste Snap Back)*

3. Drücken Sie \<Clear\>, um den Programmierspeicher zu leeren.

4. Nehmen Sie die gewünschten Änderungen vor.

5. Drücken Sie \<Record\>, \<Connect / Cue\> *(bzw. \<Rec. Step\> bei älteren 
Pulten)*, und wählen dann \[Replace\] (Ersetzen), \[Merge\](Zusammenfügen),
oder \[Insert After\] (danach einfügen), um die Änderungen zu speichern (ein
nochmaliger Druck auf \<Rec. Step\> wählt automatisch \[Merge\]).

6. Drücken Sie \<Go\>, um zum nächsten Schritt zu gelangen *(Beim Pearl 
Expert/Tiger Touch Mk1 drücken Sie statt der Go-Taste die Taste \<↔\>)*.

>	Die vorgenommenen Änderungen lassen sich auch wie folgt in den aktuellen 
	Cue speichern \
	\<Record\> \<Connect / Cue\> \<Connect / Cue\>.


Ändern der Zeiten einer laufenden Cueliste
------------------------------------------

Die Zeiten jedes Schritts lassen sich wie folgt mit den Tasten
\<Live Time\> und \<Next Time\> *(nicht auf allen Pulten)* ändern:

1.  **Starten Sie die Cueliste** mit dem entsprechenden Fader.

2.  Wählen Sie mit **Encoder A** den zu ändernden Schritt, und aktivieren
    Sie diesen mit der \<Go\>-Taste. (Beim Pearl Expert/Tiger Touch Mk1:
	Taste \<↔\>).

3.  Drücken Sie die Taste \<Live Time\>, um die Zeiten für den
    aktuellen, oder \<Next Time\>, um die für den nächsten Schritt
    einzugeben. Die Schrittnummern für den aktuellen sowie den nächsten
    Schritt werden im Display oberhalb der Räder angezeigt.

4.  Geben Sie die Zeiten, Schrittverknüpfung (Link) und Versatz (Overlap)
    mit den Funktionstasten ein (siehe [Zeiten für Cuelisten](cue-list-timing.md)).
	Ändern Sie die die Link-Option auf \[Link With Previous Cue\] oder 
	\[Link After Previous Cue\], so wartet dieser Schritt nicht auf die 
	\<Go\>-Taste, sondern startet automatisch.

5.  Drücken Sie \<Go\> (bzw. \<↔\>), um zum nächsten Schritt zu gelangen.

Die Taste \<Review\> dient zur Überprüfung des aktuellen Schritts
mit den neuen Zeitvorgaben.

*Alternativ kann man die \<Unfold\>-Funktion verwenden, um die Zeiten
zu ändern, siehe [vorheriger Abschnitt](#editieren-einer-cueliste-mit-unfold).*

Editieren einer Cueliste während des Programmierens
---------------------------------------------------

Einzelne Schritte lassen sich editieren, noch während man die Cueliste
programmiert:

1. Drücken Sie \[Cue Number=x\] und geben die Nummer des gewünschten
Schritts an.

2. Der gewählte Schritt wird angezeigt.

3. Nehmen Sie die gewünschten Änderungen vor, oder ändern Sie die
Zeiten mit \[Edit Cue x Times\]

4. Drücken Sie \[Update Cue x\] (bzw. \<Rec. Step\>) zum Speichern der Änderungen.

### Update-Modus

Mit der Menütaste \[Update Mode\] lässt sich einstellen, wie
Änderungen getrackt werden. 

Update-Modus | Beschreibung
---|---
**Forwards** ![Cue List Update Mode Forwards](/docs/images/Cue-List-Update-Mode-Forwards.png) | Ändert die Werte in diesem Cue und trackt die Änderungen in alle folgenden Cues, bis die betreffenden Kanäle erneut geändert werden. Vorherige Cues werden nicht geändert.
**Backwards** ![Cue List Update Mode Backwards](/docs/images/Cue-List-Update-Mode-Backwards.png) | Setzt die Änderungen rückwirkend bis zur letzten Änderung um.
**Both** ![Cue List Update Mode Both](/docs/images/Cue-List-Update-Mode-Both.png) | Tracking in beide Richtungen, d.h. rückwirkend ab der letzten Änderung, sowie in allen folgenden Cues bis zur nächsten Änderung.
**Cue Only** ![Cue List Update Mode Cue Only](/docs/images/Cue-List-Update-Mode-Cue-Only.png) | Nur der aktuelle Cue wird geändert.


> Die Schrittnummer lässt sich auf diese Weise nicht ändern; ein Druck
  auf \[Cue Number\] ändert die Nummer des aktuell neu zu speichernden
  Schrittes. Wählen Sie \[Advanced Options\], um die Schrittnummern zu
  ändern.

Werte in mehreren Cues gleichzeitig aktualisieren
-------------------------------------------------

Werte können auch in mehreren Cues einer Cueliste/eines Chasers
gleichzeitig aktualisiert (mittels **Merge/Verschmelzen** oder
**Replace/Ersetzen**) werden. Dies kann sowohl mit numerischer Eingabe als
auch in der [Playback-Ansicht](#das-fenster-playback-view) erfolgen. 

In der Playback-Ansicht drücken Sie die Taste \<Record\> und klicken
dann im Bildschirm auf den gewünschten Cue/die Cues. Wählen Sie nun
\[Merge\] oder \[Replace\] (oder drücken Sie \<Enter\>, um zu Mergen).
Damit wird der momentane Inhalt des Programmers in die ausgewählten Cues
übernommen.

Bei Verwendung der Zifferntasten verbinden Sie zunächst die Cueliste
mittels \<Connect / Cue\> mit der Steuerung und klicken auf \[Rec. Step\]. Nun
verwenden Sie die Syntax **n** \<THRU\> **m**, um eine Folge von Cues zu
ändern, oder **n** \<AND\> **m**, um mehrere Cues einzeln auszuwählen. Ist
die [Playback-Ansicht](#das-fenster-playback-view) geöffnet, so werden die 
gewählten Cues rot markiert. Sind alle zu ändernden Cues ausgewählt, 
drücken Sie \<Enter\> und wählen \[Merge\] oder \[Replace\] (nochmaliges 
Betätigen von \<Enter\> wählt Merge).

Deaktivieren eines Cues
-----------------------

Einzelne Cues können vorübergehend deaktiviert werden. Klicken Sie dazu
auf die Zelle 'Disabled' ganz rechts beim jeweiligen Cue in der
Playback-Ansicht. Mit den Funktionstasten wählen Sie nun \[Cue
Disabled Yes\]. Ist ein Cue deaktiviert (disabled), so wird er übersprungen,
als wäre er nicht vorhanden, kann aber später wieder aktiviert werden

Einzelne Cues mit Include in den Programmer laden
-------------------------------------------------

Mit **[Include](../cues/editing-cues.md#cues-wiederverwenden---die-include-funktion)** 
können einzelne Cues aus einer Cueliste in den Programmer
geladen werden. Drücken Sie dazu \<Include\>, wählen die Cueliste aus, geben die Cuenummer ein und drücken \[Include Cue\].

Soll ein Cue aus der gerade verbundenen Cueliste included werden, so
drücken Sie \<Include\>, \<Connect / Cue\>, geben die Nummer des Cues ein und
wählen \[Include Cue\].

Auf diese Weise kann man Cues aus Cuelisten auch anderweitig
weiterverwenden sowie Shapes/Effekte in diesem Cue editieren (geht auch
per [Playback View](#das-fenster-playback-view)).