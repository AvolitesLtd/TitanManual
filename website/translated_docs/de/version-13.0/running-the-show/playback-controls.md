---
id: version-13.0-playback-controls
title: Playback controls
sidebar_label: Playback controls
original_id: playback-controls
---

Sichern der Show
----------------

Das Wichtigste während des Programmierens, am Ende des Programmierens,
und beim Beginn der Show, ist das [Sichern der Daten](../titan-basics/loading-and-saving-shows.md#saving-the-show). 
Ein Backup kann sowohl auf der internen Festplatte als auch auf einem 
USB-Stick gespeichert werden. Der USB-Stick empfiehlt sich
insbesondere, um die Show auch auf ein anderes Pult transferieren zu
können.

Das Pult beschriften
--------------------

Während der Show ist es wichtig zu wissen, was denn nun wo programmiert
ist. Beschriften Sie Ihr Pult, entweder mit der elektronischen
Beschriftung/Bemalung, oder mit Klebeband und Stift.

Master-Fader
------------

Auf den größeren Pulten gibt es einen eigenen Master-Fader, der
insgesamt den Ausgang des Pultes (für Dimmerkanäle) regelt.
Normalerweise wird man diesen auf 100% stellen und nur zum
gelegentlichen Ausfaden sämtlicher Geräte verwenden.

In der Vorgabeeinstellung ist der Grandmaster deaktiviert und kann über
die Benutzereinstellungen aktiviert werden.

Das Pearl Expert hat darüber hinaus getrennte Masterfader für Playbacks,
Presets, Swop- und Flashtasten.

Jeder Fader auf dem Pult kann auch als Masterfader für verschiedene
Funktionsbereiche verwendet werden:

-   Der **Grand Master** steuert die Dimmerpegel sämtlicher angeschlossenen
    Geräte.

-   **Swop/Flash-Master** steuern die Helligkeit für Kanäle bei Bedienung
    mit den Swop-/Flash-Tasten.

-   Der **Preset-Master** steuert die Helligkeit von Kanälen, die mittels
    der Preset-Regler (für einzelne Geräte, auf dem Pearl Expert)
    gesteuert werden.

-   Der **Playback-Master** steuert die Gesamthelligkeit von
    vorprogrammierten Playbacks.

Um einzelne Regler mit einer Master-Funktion zu belegen, schalten
Sie in den System-Modus und wählen \[Assign Masters\]. Ebenso geht
dies per \<Record\> \[Create Master\].

Als Voreinstellung haben Masterfader einen ‚Transparent Lock', d.h.
werden auf alle Seiten eingeblendet, auf denen der betreffende Fader
nicht belegt ist. Um dies zu ändern, wählen Sie \[Playback Options\]
und die Auswahltaste des Masterfaders, und stellen wie gewünscht um.

Auf dem Arena bieten sich zudem die Dreh-Encoder beim kleinen Display
etwa als Speed- oder Gruppen-Master an. Um diese Fader anzuwählen,
werden drücken sie gedrückt. Mit der Taste \<Display\> unterhalb der
Encoder kann man die Anzeige so einstellen, dass die Belegung der
Encoder angezeigt wird (mit dieser Taste wird durch vier Anzeigemodi 
durchgeschaltet).

![Arena Miniscreen](/docs/images/Arena-Miniscreen.png)

>  Wird ein Master auf eine Taste mit LED gelegt, so blinkt diese, wenn der Master auf 0 steht -- als kleine Erinnerung, wenn man auf der Suche danach ist, warum gerade wieder alle Lampen aus sind...

Speed- und Size-Master
----------------------

[](https://youtu.be/e5rQAmTCfs0?t=20 "Speed and Size Masters")

Die einzelnen Playbacks lassen sich verschiedenen Speed- und
Size-Masterreglern zuweisen; damit kann man das Tempo und die Größe von
enthaltenen Shapes und Effekten zentral steuern, oder - im Fall von
Chasern - direkt das Chase-Tempo beeinflussen.

Zur Verfügung stehen zwölf unterschiedliche Speedmaster (4 x Speed, 8 x
BPM) sowie vier Size-Master. So kann man z.B. eined Ratemaster für
Positions-Shapes und einen anderen für Dimmershapes verwenden.

Zum Zuweisen eines Playbacks zu einem Speed- oder Size-Master drücken
Sie \[Playback Options\], wählen das jeweilige Playback (blaue Taste
oder Schaltfläche), und drücken dann \[Effects\] und \[Speed Source\]
bzw. \[Size Source\]. Folgende Optionen sind verfügbar:

-   Free Run (keine Steuerung über Speed-Master -- Effekte laufen so
    schnell wie programmiert)

-   BPM 1-8 (das lokal eingestellte Tempo wird durch das Master-Tempo
    komplett überschrieben)

-   Rate 1-4 (das lokal eingestellte Tempo wird durch den Master
    proportional vergrößert/verringert)

-   LocalClock (Steuerung per Tap Tempo, das ggf. per Tastenprofil auf
    einen Button gelegt werden muss)

Ferner gibt es einen ‚Rate Grand Master', der wiederum die vier
Rate-Master - nicht die BPM-Master - proportional beeinflusst.

Um die Speed- bzw. Size-Master verwenden zu können, müssen diese auch
jeweils auf einen Fader gelegt werden. Schalten Sie das Pult dazu in den
System-Modus und wählen \[Assign Masters\]. Alternativ geht das per
\<Record\> \[Create Master\]. Für Speedmaster stehen auch gesonderte
Tastenprofile zur Verfügung; BPM-Master haben als Vorgabewert die
Takt-Taste (Tap Tempo).

Speed- und Size-Master können verschiedene Skalen (Wertebereiche) haben:
0-100%, 0-200% etc. So kann man z.B. mit der Skala 0-200% den Master auf
Mittelstellung bringen (100%) und davon ausgehend die beeinflussten
Effekte größer/schneller oder langsamer/kleiner machen. Die Skala wählt
man mit den \[Playback-Optionen\] des Masterreglers.

### Optionen für BPM-Master

Für BPM-Master lassen sich Faktoren/Teiler einstellen, die bestimmen,
wie das getappte Tempo auf die BPM-Rate konvertiert wird. Um dieses
Verhältnis zu ändern, drücken Sie \[Playback Options\] und wählen den
Masterregler aus, den Sie ändern möchten.

Normalerweise liegt die BPM-Rate auf dem Fader, eine der Tasten dient
als Tap-Taste, und man kann die BPM-Rate numerisch eingeben und per
blauer Select-Taste anwenden.

BPM-Master, Fader steuert BPM:
![BPM Master on playback](/docs/images/BPM-Master-on-playback.png)   

Mit der Option \[BPM On Fader\]/\[Multiplier on Fader\] steuert der
Fader alternativ den Faktor/Teiler, und die BPM-Rate wird nur per Tap
eingestellt. 

BPM-Master, Fader steuert Teiler/Faktor:
![BPM Master multiplier on fader](/docs/images/BPM-Master-multiplier-on-fader.png)

Mit \[Multiplier Scale\] wird der Faderbereich für den Faktor/Teiler
eingestellt (von x2\~/2 bis x32\~/32).

Mit \[Keep Multiplier On Tap\]/\[Reset Multiplier On Tap\] lässt sich
einstellen, dass beim erneuten Tappen der Faktor/Teiler wieder auf x1
zurückgesetzt wird.

Im Bereich 'Times' (Zeiten) der Benutzereinstellungen gibt es die Option
"Compensate for Rate Grand Master": dies wird wirksam, sofern der Rate
Grand Master aktiviert und auf weniger als 100% gestellt ist. Ist nun
die Option aktiv und wird ein Tempo getappt, so wird genau dieses Tempo
live übernommen und nicht durch den reduzierten Grand Master verringert.
Ist die Option dagegen deaktiviert, so wird ein getapptes Tempo durch
den Rate Grand Master beeinflusst.

### Rate/BPM-Master mit den Encodern steuern

Es ist möglich, die Wheels mit Rate- und BPM-Mastern zu verbinden
(connecten). Drücken Sie \<Cue\> (bzw. \<Connect\>), gefolgt von dem
betreffenden Master, so lässt sich die Rate (bei einem Rate Master)
sowie BPM und "Edge Sync" (bei einem BPM-Master, zum genauen Abgleich
auf den Beat) mit den Encodern einstellen.

Auch hierbei kann man die Werte durch Klicken im Attribut-Bereich des
Displays verändern. Ebenso steht mit den \<@\>-Tasten bei den Encodern das
@-Menü zur Verfügung, mit dem man den gewünschten Wert numerisch
eingeben oder mit \[Release\] wieder auf den vorher eingestellten Wert
zurücksetzen kann.

>   Mittels [Tastenprofilen (Key Profiles)](../system-settings/key-profiles.md)
	kann man eine der Tasten als 'Connect' zum Verbinden mit der Steuerung
    definieren.

Playback-Gruppen
----------------

Playbacks können in Gruppen zusammengefasst werden. Dies ist sinnvoll,
wenn von mehreren Playbacks immer nur eins als aktiv angezeigt werden
soll; wird ein anderes Playback in dieser Gruppe gestartet, werden alle
anderen deaktiviert. Damit wird vor allem das spontane Showfahren mit
den Executor-Buttons deutlich vereinfacht.

Details dazu siehe [Playback Groups](../cues/playback-groups.md).


Gruppenmaster
-------------

Jeder Gruppe von Geräten kann ein Fader als Masterregler zugewiesen
werden, der dann die Helligkeit aller Geräte in der Gruppe beeinflusst.
Dazu ist ganz einfach die Gruppe auf einen Speicherplatz mit Fader zu
speichern (oder mit \<Move\> dorthin zu verschieben).

Die blaue Taste des Faders dient dann als Auswahltaste für die Gruppe;
hält man sie gedrückt, kann man mittels der Menütasten Geräte nach
verschiedenen Mustern auswählen.

Mittels \[Playback Options\], gefolgt von der entsprechenden
Playback-Auswahltaste, kann man die genaue Arbeitsweise des
Gruppenmasters wählen:

-   **Scale master** (proportionale Steuerung). Dabei kann der Bereich auf
    100%, 200%, 400%, 600% oder 1000% eingestellt werden. Damit lassen
    sich also auch größere Werte als gerade mit den Playbacks
    eingestellt erzielen.

-   **HTP** (überschreibt den Pegel falls höher)

-   **Limit** (absolutes Limit)

-   **Take Over** (wenn mit dem Master die aktuellen Dimmerwerte getroffen
    werden, werden die Geräte in den Programmierspeicher übernommen)

-   **Disabled** (Master ist deaktiviert)

Gibt es einen Bildschirmbereich für den als Gruppenmaster definierten
Fader, so werden dort der aktuelle Wert und die Arbeitsweise angezeigt.

![Group Master](/docs/images/Group-Master.png)

Wird ein Gruppenmaster deaktiviert oder auf einen Speicherplatz ohne
Fader verschoben, so wird der aktuelle Wert 'eingefroren'. Zum
Reaktivieren verschieben Sie den Master zurück auf einen Fader.

Mittels [Tastenprofilen (Key Profiles)](../system-settings/key-profiles.md) 
 kann man den Tasten eines Gruppenmasters verschiedene Funktionen zuweisen:

-   Flash Fixtures - blendet die Dimmer der in der Gruppe enthaltenen
    Geräte auf, bis zum Pegel, der durch den Gruppenmaster vorgegeben ist.

-   Timed Flash - wie vor, unter Berücksichtigung der eingestellten
    Fadezeiten

-   Flash Master - blendet den Gruppenmaster auf 100% auf

-   Timed Flash Master - wie vor, unter Berücksichtigung der
    eingestellten Fadezeiten

-   Swop Fixtures - wie Flash Fixtures, aber alle anderen (nicht in der
    Gruppe enthaltenen) Geräte werden auf 0 abgeblendet

Ist ein Flash-Master definiert, so steuert dieser auch den Flash-Pegel
für das Flashen der Gruppen-Master.

>   Mit \<Release\>, \[Release All Masters\] lassen sich alle Master auf
    einmal releasen. Das kann sinnvoll sein, wenn etwas durch einen Master
	gesteuert wird, aber unklar ist, durch welchen.

Scene Master
------------

[](https://youtu.be/zn_jd1zba7E?t=20 "Scene Masters")

Der Scene Master gestattet es, etwa unter Verwendung des Visualisers
komplette Szenen vorzubereiten (unter Verwendung von Cues, Paletten
verschiedenen Zeiten etc.) und diese dann alle auf einmal zu starten.

Der Scene Master wird wie die anderen Master auch entweder per \[Assign
Masters\] im System-Menü oder via \<Record\>, \[Create Master\] erstellt.
Der Scene Master befindet sich zunächst im Live-Modus, womit
alle Steuerungen wie gewohnt arbeiten (Geräte auswählen, Paletten
anwenden, Playbacks starten etc.).

![Scene Master (Live)](/docs/images/Scene-Master-Live.png)

Zum Aktivieren des Preset-Modus drücken Sie die blaue Taste des Scene
Masters. Daraufhin wird im Display die Funktion "Preset" angezeigt, und
das Display des Master wird violett.

![Scene Master (Preset)](/docs/images/Scene-Master-Preset.png)

Im Preset-Modus sind alle Steuerungen -- Starten von Playbacks, Go in
Cuelisten, Anwenden von Paletten etc. -- nur im Visualiser sichtbar. Die
dabei involvierten Playbacks, Paletten etc. werden ebenfalls violett
hinterlegt.

Bewegt man nun den Scene Master, so wird der Output auf den so eingestellten
Zustand übergeblendet; dabei werden auch etwa mit einprogrammierte
Zeiten (für Cues oder Paletten) berücksichtigt. Hat der Fader 100%
erreicht, so ist der Preset-Status komplett live, also ‚committet'.
Ebenso lässt sich das Commit manuell per Tastendruck erreichen.

Normalerweise schaltet sich die Funktionsrichtung des Scene Masters um,
sobald er einen Endpunkt (100% oder 0%) erreicht, so dass man einfach
den nächsten Look einstellen, dann einfaden, und von neuem beginnen
kann. Ebenso lässt sich einstellen, dass man den Fader jedes Mal erst
wieder auf 0 bringen muss. Dies erreicht man über \[Playback Options\]
und wählt den Scene Master. Es gibt folgende Optionen:

-   \[Auto Commit and Invert\]: damit wird jeweils beim Erreichen von
    100% und 0% Faderstellung die (nächste) vorbereitete Szene live
    geschaltet und mit der nächsten Faderfahrt eingeblendet.

-   \[Auto Commit\] ist ganz ähnlich, allerdings wird die nächste Szene
    immer nur bei 0% Faderstellung aktiviert, so dass man auch von 100%
    erst wieder herunterfaden muss.

-   Bei \[Manual Commit\] schließlich wird die Szene gar nicht per Fader
    aktiviert, sondern muss per Taste aktiviert werden, wozu eine
    entsprechende Funktion etwa mit der grauen Taste verknüpft sein muss
    (über Tastenprofile, s.u.). etwa mit den Tastenfunktionen \[Commit
    Changes\] (Szene aktivieren), \[Commit Changes and Exit scene
    Mode\](Szene Aktivieren und Preset-Modus verlassen) oder \[Enters or
    Commits scene Mode\] (Preset-Modus aktivieren oder Szene
    aktivieren).

Der Scene Master kann auch auf einer taste oder einem Button im Display
liegen. In diesem Fall dient die Kombination \<Avo\> + \[Scene Master\]
bzw. \<Release\> + \[Scene Master\] zum Starten oder Verlassen des
Preset Modus; einfaches Betätigen der Taste/des Buttons macht einen
Commit. Der Status lässt sich im entsprechenden Fenster (z.B. Playbacks
oder Static Playbacks) überwachen.

Den Tasten des Scene Masters lassen sich verschiedene Funktionen per
Tastenprofil zuweisen: \[Commit Changes\] (Szene aktivieren), \[Commit
Changes and Exit scene Mode\](Szene Aktivieren und Preset-Modus
verlassen) oder \[Enters or Commits scene Mode\] (Preset-Modus
aktivieren oder Szene aktivieren).	

Flash- und Swop-Tasten
----------------------

Die Flash- (Add) und Swop-Tasten bei jedem Regler dienen zum jederzeitigen
Abruf von Cues und Chasern. Die \<Flash\>-Taste addiert dabei den
jeweiligen Inhalt mit 100% zum sonstigen Output, während die
\<Swop\>-Taste gleichzeitig alle anderen Cues/Chaser vorübergehend
dunkeltastet (Solo-Funktion). Die \<Flash\>-Taste lässt sich auch in die
Betriebsart 'Flash With Times' schalten: dann werden beim Flashen im Cue
programmierte Zeiten berücksichtigt.

Die Funktionsweise der Tasten lässt sich mit den [Key Profiles 
(Tastenbelegungen)](../system-settings/key-profiles.md) - abändern. Eine
sinnvolle Alternative wäre etwa 'Preload', womit die Kanäle der Geräte
bereits auf die entsprechenden Werte gestellt werden, bevor der Regler
selbst bewegt wird, so dass z.B. keine Bewegungen 'im On' stattfinden
(das geht nur für Geräte, die nicht gerade in anderen aktiven
Cues/Chasern verwendet sind). Ebenso lassen sich die Funktionen 'Stop'
und 'Go' für Cuelisten und Chaser auf diese Tasten legen. Um die
Tastenbelegung rasch zu ändern, halten Sie die \<AVO\>-Taste gedrückt
und betätigen die Funktion \[Edit Key Profile\].

![Playback Faders with key profiles applied](/docs/images/Playback-Faders-with-key-profiles-applied.png)

Im Touchscreen direkt oberhalb der Regler wird die aktuelle
Tastenfunktion angezeigt.

Priorität der Playbacks
-----------------------

Einzelnen Playbacks lässt sich eine [höhere Priorität](../cues/playback-options.md#playback-tab) zuweisen, wenn sie
nicht durch andere Playbacks, die die gleichen Geräte verwenden, überlagert
werden sollen. Werden etwa ein paar Geräte als Spot für z.B. den Sänger
eingesetzt, sind aber ebenso in einem anderen Cue verwendet, so kann man
die Priorität für den Cue ‚Spot' heraufsetzen, so dass der andere Cue darauf
ohne Auswirkung bleibt.

Feste Playbacks (Nur Tiger Touch)
---------------------------------

Zusätzlich zu den zehn Fadern am unteren Rand des Pultes finden sich auf dem
Tiger Touch Pulten weitere zehn rechts oben. Diese haben normalerweise immer
die gleiche Belegung, d.h. sie werden durch die Seitenwahl nicht
umgeschaltet. Sie bieten sich somit an für häufig benötigte Cues, die
Saalbeleuchtung, Blinder, oder die Nebelmaschine.

Es ist aber auch möglich, diese Fader auf Seiten umzuschalten. Dazu
müssen entsprechende Makros auf Tasten zugeordnet werden. Sollten diese
Makros auf dem Pult nicht zur Verfügung stehen, so muss die
Personality-Bibliothek aktualisiert werden.

Verriegeln der Seitenumschaltung
--------------------------------

Mitunter möchte man einen Fader 'fixieren', so dass er unabhängig vom
Wechsel der Seiten stets verfügbar bleibt. Dies bietet sich z.B. an,
wenn man ein paar allgemeine Cues hat, die auf jeder Seite benötigt
werden, ohne dass man diese extra kopieren muss. Erreicht wird dies
über die Einstellung \[Handle Paging\] in den \[Playback Options\].

-   \[Locked\] (Verriegelt) blendet das betreffenden Playback auf sämtlichen
	anderen Seiten ein; was ggf. anderswo auf diesen Fader programmiert
	ist, ist damit nicht erreichbar.

-   Bei \[Transparent Lock\] erscheint das Playback an seinem Platz
	nur auf den Seiten, auf denen der Fader nicht schon anderweitig 
	belegt ist.

Auch die Makrotasten, Executor-Tasten und festen Playbacks lassen sich
verriegeln; dies bietet sich an, wenn man die Umschaltung per 'Page
Change'-Makros verwendet.

Auch Masterregler lassen sich auf diese Weise von der Seitenumschaltung 
ausnehmen.

Anzeigen der aktiven Playbacks
------------------------------

Im Fenster ‚Active Playbacks' werden die aktuell aktiven Playbacks/
Speicherplätze angezeigt. Damit hat man einen schnellen Überblick,
welche Cues gerade aktiv sind, wo sie gestartet wurden und welche
Attribute dadurch gesteuert werden. Zum Aufrufen dieses Fensters wählen
Sie \[Open Workspace Window\], \[Active Playbacks\] oder nutzen die 
Tastenkombination \<View / Open\> + \<Off\>.

In der ersten Zeile jedes Buttons steht dabei, wo (in welchem 
Fenster/auf welchem Fader) das Playback zu finden ist. Die zweite 
Zeile zeigt die Bezeichnung des Playbacks, die dritte schließlich 
die gesteuerten Attribute.

![Active Playbacks Windown](/docs/images/Active-Playbacks-Window.png)

Klickt man eine der Schaltflächen an, so wird das betreffende Playback
sofort deaktiviert. Betätigt man \[Playback Options\], gefolgt von einer
der Playback-Schaltflächen, so kann man die jeweiligen Parameter ändern.

Blind-Modus
-----------

Sollen noch schnell ein paar kleine Änderungen an Cues oder Paletten mit
Hilfe des Visualisers vorgenommen werden, ohne den Live-Betrieb zu
stören, lässt sich das Pult auch in den Blind-Modus schalten. Dazu
drückt man die Taste \<Blind\> (ältere Pulte verfügen nicht über diese
-- in diesem Fall hält man \<Avo\> gedrückt und wählt den Menüpunkt
\[Blind\]).

Um ein Playback zu überprüfen, muss man das Playback selbst Blind
schalten. Dazu hält man die \<Blind\>-Taste und drückt die blaue
Playback-Taste. Um das Playback wieder Live zu schalten, geht man
genauso vor. Playbacks können auch über die Playback-Optionen Blind
geschaltet werden.

Dabei kann von der eingestellten Blind-Stimmung sanft in den
Live-Betrieb übergeblendet werden, ohne dass man erst ein Playback
speichern muss. Ebenso kann man im Blind die nächste Stimmung aus
mehreren Paletten kombinieren und dann in diese einfaden. (Noch
einfacher geht das mit dem Szenenmaster).

Um überzublenden, tippen Sie mit den Zifferntasten die gewünschte Zeit
in Sekunden ein und drücken die \<Blind\>-Taste.

Sind im Programmer Attribut-Zeiten gesetzt worden, so haben diese
Vorrang vor der manuell eingegebenen Zeit.

Improvisieren (Busking) mit Paletten
------------------------------------

Hatten Sie nicht genügend Zeit zum Programmieren, werden Sie vermutlich
während der Show noch ein paar Effekte hinzufügen wollen. Damit wird das
Ganze erst richtig interessant.

Sehr schnell lassen sich Ergebnisse erzielen, wenn man Paletten
verwendet. Dabei lassen sich in Paletten auch Fadezeiten speichern, oder
man gibt beim Palettenabruf eine Zeit vor.

1.  Wählen Sie einige der bereits verwendeten Geräte aus.

2.  Geben Sie mit den Zifferntasten einen Wert wie z.B. \<2\> ein
	(Überblendzeit, in Sekunden).

3.  Drücken Sie die Schaltfläche einer Palette, um sie aufzurufen.

4.  Die angewählten Geräte blenden nun in der angegebenen Zeit zu den
	Einstellungen der gewählten Palette über.

Enthält eine Palette Zeitvorgaben, so kann man mittels Tastenprofil der
Palettenschaltflächen bestimmen, ob diese Zeiten beim Improvisieren
berücksichtigt werden sollen oder nicht. Dazu drücken Sie \<Avo\>+\[Key
Profiles\], dann \[Palettes\]. Die möglichen Optionen sind \[Palette is
fired ignoring its times\] und \[Palette is fired with its times\].
Manuell eingegebene Zeiten überschreiben stets in der Palette 
gespeicherte Zeiten.

Wird manuell eine Überblendzeit eingegeben, lässt sich ebenso der
'Geräteversatz' einstellen (mit Menütaste C \[Overlap... \]). Damit
lassen sich etwa Effekte wie 'Rollen' oder 'Abziehen' realisieren. Bei
'overlap'= 100% wechseln alle Geräte gleichzeitig; bei 'overlap'=50%
beginnt das zweite Gerät mit dem Überblenden, sobald das erste zur
Hälfte damit fertig ist. Die Reihenfolge, in der die Geräte wechseln,
bestimmt sich aus der Reihenfolge, in der die Geräte ausgewählt wurden.

Eine so eingegebene Paletten-Fadezeit und Overlap gelten nur einmalig 
für den unmittelbar nächsten Palettenabruf. Sollen bis zur nächsten
Änderung Fadezeit und Overlap festgelegt werden, so erfolgt dies im 
**Menü Palettes**: drücken Sie dazu die Taste \<Palette\> und geben Sie
die gewünschten Werte mit den Menütasten \[Master Time\] und \[Master
Overlap\] ein. Es gibt ferner etliche Macros für die häufig genutzten
Werte, um Master Time und Master Overlap mit nur einem Tastendruck zu
ändern, siehe [Master Time for Palettes](../palettes/timing-with-palettes#master-time-for-palettes).

Wird eine Palette als 'Quick Palette', also ohne Auswahl von Fixtures
oder Gruppen, aufgerufen, so wird sie wiederum durch den nächsten Cue
überschrieben (wird etwa eine grüne Palette aufgerufen und danach ein
blauer Cue gestartet, so werden die Geräte blau). Werden dagegen erst
Geräte/Gruppen ausgewählt und dann eine Palette aufgerufen, so wird sie
im Programmierspeicher abgelegt und überlagert alle folgenden Cues
(wird also eine grüne Palette aufgerufen, so bleiben die Geräte grün,
bis \<Clear\> gedrückt wird).

Beim Programmieren der Paletten empfiehlt es sich, z.B. alle
Farbpaletten in einem Bereich, alle Positionspaletten in einem anderen
Bereich zu gruppieren etc. Damit findet man sich später besser zurecht.

Gilt es, eine Band zu beleuchten, so ist es hilfreich, sich für jeden
Musiker eine Positionspalette anzulegen, so dass man auch auf
unangekündigte Solos schnell reagieren kann.

Die [Off-Funktion](../controlling-fixtures/using-the-select-buttons-and-wheels.md#clearing-attributes-using-off) ist nützlich, um aus
einem Cue z.B. nur die Position, aus einer anderen nur die Farbe etc. zu
verwenden. Damit ergeben sich deutlich mehr Kombinationsmöglichkeiten,
als wenn man stets sämtliche Attribute in einem Cue ablegt. Zu beachten
ist dabei, dass man natürlich den Überblick über den tatsächlichen
Inhalt behalten muss: startet man etwa zwei Cues, die jeder nur die Farbe
gespeichert haben, so ergibt das noch kein Licht.
