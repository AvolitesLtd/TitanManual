---
id: playback-controls
title: Steuern der Wiedergabe
sidebar_label: Steuern der Wiedergabe
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

## Sichern der Show

Das Wichtigste während des Programmierens, am Ende des Programmierens,
und beim Beginn der Show, ist das [Sichern der Daten](../titan-basics/loading-and-saving-shows.md#die-show-speichern). 
Ein Backup kann sowohl auf der internen Festplatte als auch auf einem 
USB-Stick gespeichert werden. Der USB-Stick empfiehlt sich
insbesondere, um die Show auch auf ein anderes Pult transferieren zu
können.

## Das Pult beschriften

Während der Show ist es wichtig zu wissen, was denn nun wo programmiert
ist. Beschriften Sie Ihr Pult, entweder mit der elektronischen
Beschriftung/Bemalung, oder mit Klebeband und Stift.

## Master-Fader

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

Um einzelne Regler mit einer Master-Funktion zu belegen, öffnen
Sie das **System**-Menü und wählen <Keys.SoftKey>Assign Masters</Keys.SoftKey>. Ebenso geht
dies per <Keys.HardKey>Record</Keys.HardKey> <Keys.SoftKey>Create Master</Keys.SoftKey>.

> Normalerweise werden Master nur auf der Playback-Seite angezeigt, auf der sie angelegt wurden,
nicht aber auf den anderen Seiten. Um das zu ändern, kann man einen Lock oder Transparent Lock setzen (siehe 
[Handle Paging](../cues/playback-options.md#handle-paging)).

Auf dem Diamond 9 bieten sich zudem die Dreh-Encoder neben den Displays (beim Arena neben dem kleinen Display)
z.B. als Speed- oder Gruppen-Master an. Um diese Fader anzuwählen,
werden drücken sie gedrückt. Mit der Taste <Keys.HardKey>Display</Keys.HardKey> unterhalb der
Encoder kann man die Anzeige so einstellen, dass die Belegung der
Encoder angezeigt wird (mit dieser Taste wird durch vier Anzeigemodi 
durchgeschaltet).

![Arena Miniscreen](/docs/images/Arena-Miniscreen.png)

>  Wird ein Master auf eine Taste mit LED gelegt, so blinkt diese, wenn der Master auf 0 steht -- als kleine Erinnerung, wenn man auf der Suche danach ist, warum gerade wieder alle Lampen aus sind...

## Speed- und Size-Master

<Video videoId="e5rQAmTCfs0" title="Speed and Size Masters" />

Die einzelnen Playbacks lassen sich verschiedenen **Speed- und
Size-Masterreglern** zuweisen; damit kann man das Tempo und die Größe von
enthaltenen Shapes und Effekten zentral steuern, oder - im Fall von
Chasern - direkt das Chase-Tempo beeinflussen.

Zur Verfügung stehen zwölf unterschiedliche Speedmaster (4 x Speed, 8 x
BPM) sowie vier Size-Master. So kann man z.B. eined Ratemaster für
Positions-Shapes und einen anderen für Dimmershapes verwenden.

Zum Zuweisen eines Playbacks zu einem Speed- oder Size-Master drücken
Sie <Keys.HardKey>Options</Keys.HardKey> oder <Keys.SoftKey>Options</Keys.SoftKey>, wählen das jeweilige Playback (blaue Taste
oder Schaltfläche), und drücken dann <Keys.SoftKey>Effects</Keys.SoftKey> und <Keys.SoftKey>Speed Source</Keys.SoftKey>
bzw. <Keys.SoftKey>Size Source</Keys.SoftKey>. Folgende Optionen sind verfügbar:

-   Free Run (keine Steuerung über Speed-Master -- Effekte laufen so
    schnell wie programmiert)

-   BPM 1-8 (das lokal eingestellte Tempo wird durch das Master-Tempo
    komplett überschrieben)

-   Rate 1-4 (das lokal eingestellte Tempo wird durch den Master
    proportional vergrößert/verringert)

-   LocalClock (Steuerung per Tap Tempo, das ggf. per Tastenprofil auf
    einen Button gelegt werden muss)

Ferner gibt es einen **Rate Grand Master**, der alle Chaser und Effekte 
proportional beeinflusst unabhängig davon, ob diese einem Rate- oder BPM-Master
zugewiesen sind.

Um die Speed- bzw. Size-Master verwenden zu können, müssen diese auch
jeweils auf einen Fader gelegt werden:

1.  Drücken Sie <Keys.HardKey>Record</Keys.HardKey>.
2.  Drücken Sie <Keys.SoftKey>Create Master</Keys.SoftKey>. 
3.  Wählen Sie mit den Menütasten den gewünschten Master.
4.  Drücken Sie die **Auswahltaste** des Faders, auf den Sie die Masterfunktion legen wollen.

-    Beim Pearl Expert und beim Tiger Touch 1 drücken Sie <Keys.HardKey>Avo</Keys.HardKey> und <Keys.HardKey>Disk</Keys.HardKey>,
um das System-Menü zu öffnen, und wählen dort <Keys.SoftKey> Assign Masters</Keys.SoftKey>.
-    Für Speedmaster stehen auch gesonderte Tastenprofile zur Verfügung; 
BPM-Master haben als Vorgabewert die Takt-Taste (Tap Tempo).

Speed- und Size-Master können verschiedene Skalen (Wertebereiche) haben:
0-100%, 0-200% etc. So kann man z.B. mit der Skala 0-200% den Master auf
Mittelstellung bringen (100%) und davon ausgehend die beeinflussten
Effekte größer/schneller oder langsamer/kleiner machen. Die Skala wählt
man mit den <Keys.HardKey>Options</Keys.HardKey> oder <Keys.SoftKey>Options</Keys.SoftKey> des Masterreglers.

### Optionen für BPM-Master

Für BPM-Master lassen sich Faktoren/Teiler einstellen, die bestimmen,
wie das getappte Tempo auf die BPM-Rate konvertiert wird. Um dieses
Verhältnis zu ändern, drücken Sie <Keys.HardKey>Options</Keys.HardKey> oder <Keys.SoftKey>Playback Options</Keys.SoftKey> 
und wählen den Masterregler aus, den Sie ändern möchten.

Normalerweise liegt die BPM-Rate auf dem Fader, eine der Tasten dient
als Tap-Taste, und man kann die BPM-Rate numerisch eingeben und per
blauer Select-Taste anwenden.

BPM-Master, Fader steuert BPM:<br/>
![BPM Master on playback](/docs/images/BPM-Master-on-playback.png)   

Mit der Option <Keys.SoftKey>BPM On Fader</Keys.SoftKey>/<Keys.SoftKey>Multiplier on Fader</Keys.SoftKey> steuert der
Fader alternativ den Faktor/Teiler, und die BPM-Rate wird nur per Tap
eingestellt. 

BPM-Master, Fader steuert Teiler/Faktor:<br/>
![BPM Master multiplier on fader](/docs/images/BPM-Master-multiplier-on-fader.png)

Mit <Keys.SoftKey>Multiplier Scale</Keys.SoftKey> wird der Faderbereich für den Faktor/Teiler
eingestellt (von x2\~/2 bis x32\~/32).

Mit <Keys.SoftKey>Keep Multiplier On Tap</Keys.SoftKey>/<Keys.SoftKey>Reset Multiplier On Tap</Keys.SoftKey> lässt sich
einstellen, dass beim erneuten Tappen der Faktor/Teiler wieder auf x1
zurückgesetzt wird.

Im Bereich 'Times' (Zeiten) der Benutzereinstellungen gibt es die Option
"Compensate for Rate Grand Master": dies wird wirksam, sofern der Rate
Grand Master aktiviert und auf weniger als 100% gestellt ist. Ist nun
die Option aktiv und wird ein Tempo getappt, so wird genau dieses Tempo
live übernommen und nicht durch den reduzierten Grand Master verringert.
Ist die Option dagegen deaktiviert, so wird ein getapptes Tempo durch
den Rate Grand Master beeinflusst.

### Master mit den Encodern steuern

Es ist möglich, die Encoder mit Intensity-, Size-, Rate- und BPM-Mastern
zu verbinden (connecten). Drücken Sie <Keys.HardKey>Cue</Keys.HardKey> (bzw. <Keys.HardKey>Connect</Keys.HardKey>), gefolgt
von dem betreffenden Master, so lässt sich dieser mit dem Encoder sehr 
präzise steuern. Bei BPM-Mastern kann man außerdem noch den "Edge Sync" 
(zum genauen Abgleich auf den Beat) mit den Encodern einstellen.

Auch hierbei kann man die Werte durch Klicken im Attribut-Bereich des
Displays verändern. Ebenso steht mit den <Keys.HardKey>@</Keys.HardKey>-Tasten bei den Encodern das
@-Menü zur Verfügung, mit dem man den gewünschten Wert numerisch
eingeben oder mit <Keys.SoftKey>Release</Keys.SoftKey> wieder auf den vorher eingestellten Wert
zurücksetzen kann.

>   Mittels [Tastenprofilen (Key Profiles)](../system-settings/key-profiles.md)
    kann man eine der Tasten als 'Connect' zum Verbinden mit der Steuerung definieren.

## Playback-Gruppen

Playbacks können in Gruppen zusammengefasst werden. Dies ist sinnvoll,
wenn von mehreren Playbacks immer nur eins als aktiv angezeigt werden
soll; wird ein anderes Playback in dieser Gruppe gestartet, werden alle
anderen deaktiviert. Damit wird vor allem das spontane Showfahren mit
den Executor-Buttons deutlich vereinfacht.

Auf Pulten mit Motorfadern fahren dabei auch die entsprechenden Fader
auf 0; ansonsten gehen einfach die LEDs der Playbacks aus, und
Schaltflächen erscheinen als inaktiv.

### Erstellen einer Playback-Gruppe

Drücken Sie zweimal auf [<Keys.HardKey>Open/View</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen das Fenster "Playback Groups".

![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace.png)

1.  Klicken Sie auf <Keys.ContextKey>+</Keys.ContextKey> (links unten). Damit wird eine neue Gruppe
erstellt und in der linken Spalte angezeigt.
2.  Klicken Sie auf die neu erstellte Gruppe links, also z.B. auf <Keys.SoftKey>Playback Group 1</Keys.SoftKey>.
3.  Klicken Sie unten rechts auf den <Keys.ContextKey>Stift</Keys.ContextKey>-Button, um die Gruppe zu
    editieren.
4.  Klicken Sie die Playbacks an, die Sie in dieser Gruppe zusammenfassen wollen. Ausgewählte 
    Playbacks erscheinen im Playback Groups-Fenster bei ihrer Gruppe.
5.  Mit <Keys.HardKey>Exit</Keys.HardKey> können Sie das Menü verlassen, und die Playbacks
    sind zu einer Gruppe zusammengefasst.

![Empty playback groups workspace](/docs/images/Empty-playback-groups-workspace-2.png)

-   Ist eine Playback-Gruppe im Editiermodus, so wirken die
    Playback-Tasten als Umschalter für die Gruppenzugehörigkeit:
    klickt man einmal, so gehört das Playback dazu, klickt man ein
    zweites Mal (oder klickt auf den Playback-Button im Playback
    Groups-Fenster), so wird das Playback wieder aus der Gruppe
    entfernt.

-   Playback-Gruppen können auch mit der <Keys.HardKey>Group</Keys.HardKey>-Taste erstellt werden:
    &nbsp;<Keys.HardKey>Group</Keys.HardKey> drücken, dann im Menü <Keys.SoftKey>Playback Groups</Keys.SoftKey> 
    sowie <Keys.SoftKey>Record playback group</Keys.SoftKey> wählen, die gewünschten Playbacks auswählen 
    und <Keys.SoftKey>Store</Keys.SoftKey> drücken.

-   Playback-Gruppen können per <Keys.SoftKey>Set Legend</Keys.SoftKey> eine Bezeichnung und ein
    Halo bekommen.

-   Ist man nicht im Editiermodus, so können Playbacks auch über ihre
    Buttons im Playback Groups-Fenster gestartet/gestoppt werden.

> Wenn ein Playback zu einer Gruppe gehört, so wird dies mit einem Stern \* bei der Playback-Legende angezeigt.

### Ändern der Zugehörigkeit zu Playback-Gruppen

Öffnen Sie das Playback Groups-Fenster, wählen Sie links die zu
bearbeitende Gruppe und klicken Sie rechts unten auf den<Keys.ContextKey>Stift</Keys.ContextKey>.

Die Playbacks in der Gruppe werden hervorgehoben und können jeweils ab-
oder angewählt werden.

Ebenso kann über die entsprechenden Menütasten die Nummer und die
Legende (Bezeichnung) der Gruppe geändert werden.

-   Zum Löschen einer Playback-Gruppe drücken Sie die Taste <Keys.HardKey>Delete</Keys.HardKey>,
    wählen die zu löschende Gruppe aus und bestätigen dies mit
    &nbsp;<Keys.SoftKey>Confirm</Keys.SoftKey> oder <Keys.HardKey>Enter</Keys.HardKey>.

## Optionen für Playback-Gruppen

Für jede Gruppe lässt sich einstellen, wie genau die enthaltenen
Playbacks sich verhalten. Dazu wählt man im Fenster Playback Groups
links die gewünschte Gruppe und klickt rechts unten auf den Reiter
<Keys.SoftKey>Options</Keys.SoftKey>.

![Playback groups options workspace](/docs/images/Playback-groups-options-workspace.png)

-   **Mutually Exclusive** schaltet den Exklusiv-Modus ein oder aus. Damit
    lässt sich diese Funktion vorübergehend deaktivieren, ohne die
    Gruppe löschen zu müssen.

-   Mit **Kill Point** lässt sich einstellen, wann ein neu gestartetes
    Playback die anderen Playback in der Gruppe deaktiviert:<br/>
    &nbsp;<Keys.SoftKey>Fired</Keys.SoftKey> - sobald das Playback gestartet ist<br/>
    &nbsp;<Keys.SoftKey>Fade Completed</Keys.SoftKey> - sobald es gestartet und komplett eingefadet ist

-   **Kill Action** legt fest, ob bei Deaktivieren Release zum Tragen
    kommt oder nicht:<br/>
    &nbsp;<Keys.SoftKey>Follow Playback</Keys.SoftKey> - es wird nach den Release-Einstellungen
    jedes Playbacks vorgegangen<br/>
    &nbsp;<Keys.SoftKey>Kill</Keys.SoftKey> - Playbacks werden immer sofort abgeschaltet (gekillt)<br/>
    &nbsp;<Keys.SoftKey>Release</Keys.SoftKey> - Playbacks werden immer nach der unten vorgegebenen
    Releasemaske und -zeit released<br/>
    &nbsp;<Keys.SoftKey>Release HTP</Keys.SoftKey> - HTP-Kanäle werden released, alle anderen gekillt

-   Mit **Release Mask** und **Release Time** lässt sich für das
    gegenseitige Releasen eine eigene Maske und Zeit einstellen. Steht
    dies auf <Keys.SoftKey>Playback</Keys.SoftKey>, so kommen die Einstellungen jedes einzelnen
    Playbacks zum Tragen.

## Anzeigeoptionen für das Playback Groups-Fenster

Mit dem Fensteroptions-Menü (<Keys.ContextKey>Zahnrad</Keys.ContextKey>-Button in der Titelleiste des
Fensters) lassen sich drei verschiedene Anzeigemodi wählen:

&nbsp;<Keys.SoftKey>View Mode All</Keys.SoftKey> – zwei Spalten: links die Playback-Gruppen, rechts
jeweils die zugehörigen Playbacks jeder Gruppe

![Playback groups display mode 1](/docs/images/Playback-groups-display-mode-1.png)
 
&nbsp;<Keys.SoftKey>View Mode Single</Keys.SoftKey> – zwei Spalten: links die Playback-Gruppen, aber
rechts nur die Playbacks in der gerade angewählten Gruppe. Das erlaubt
eine bessere Übersicht bei Gruppen mit vielen Playbacks.

![Playback groups display mode 2](/docs/images/Playback-groups-display-mode-2.png)
 
&nbsp;<Keys.SoftKey>View Mode Playbacks Only</Keys.SoftKey> – eine Spalte, es werden nur die Playbacks
pro Gruppe angezeigt. Die Reiter <Keys.SoftKey>Playbacks</Keys.SoftKey>, <Keys.SoftKey>Options</Keys.SoftKey> und der
Editier-Button stehen nicht zur Verfügung.

![Playback groups display mode 3](/docs/images/Playback-groups-display-mode-3.png)


## Gruppenmaster

Jeder Gruppe von Geräten kann ein Fader als Masterregler zugewiesen
werden, der dann die Helligkeit aller Geräte in der Gruppe beeinflusst.
Dazu ist ganz einfach die Gruppe auf einen Speicherplatz mit Fader zu
speichern (oder mit <Keys.HardKey>Move</Keys.HardKey> dorthin zu verschieben).

Die **Auswahltaste** des Faders dient dann als Auswahltaste für die Gruppe;
hält man sie gedrückt, kann man mittels der Menütasten Geräte nach
verschiedenen Mustern auswählen.

Mittels <Keys.HardKey>Options</Keys.HardKey> oder <Keys.SoftKey>Options</Keys.SoftKey>, gefolgt von der entsprechenden
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

>   Mit <Keys.HardKey>Release</Keys.HardKey>, <Keys.SoftKey>Release All Masters</Keys.SoftKey> lassen sich alle Master auf
    einmal releasen. Das kann sinnvoll sein, wenn etwas durch einen Master gesteuert wird, aber unklar ist, durch welchen.

## Scene Master

<Video videoId="zn_jd1zba7E" title="Scene Masters" />

Der Scene Master gestattet es, etwa unter Verwendung des Visualisers
komplette Szenen vorzubereiten (unter Verwendung von Cues, Paletten
verschiedenen Zeiten etc.) und diese dann alle auf einmal zu starten.

Der Scene Master wird wie die anderen Master auch entweder per <Keys.SoftKey>Assign Masters</Keys.SoftKey>
im **System**-Menü oder via <Keys.HardKey>Record</Keys.HardKey>, <Keys.SoftKey>Create Master</Keys.SoftKey> erstellt.

Das Diamond 9 hat eigens einen Überblendregler mit T-Griff für den Scene Master sowie ein kleines Display zur Anzeige des Status.

Der Scene Master befindet sich zunächst im Live-Modus, womit alle Steuerungen wie gewohnt 
arbeiten (Geräte auswählen, Paletten anwenden, Playbacks starten etc.).

![Scene Master (Live)](/docs/images/Scene-Master-Live.png)

Zum Aktivieren des Preset-Modus drücken Sie die **Auswahltaste** des Scene
Masters (oder <Keys.HardKey>Enter/B</Keys.HardKey> unter dem Regler beim Diamond 9). 
Daraufhin wird im Display die Funktion "Preset" angezeigt, und das Display des Master wird 
violett. Zum **Verlassen** des Preset-Modus drücken Sie wieder die **Auswahltaste** des Scene
Masters (oder <Keys.HardKey>Exit/A</Keys.HardKey> unter dem Regler beim Diamond 9). 

![Scene Master (Preset)](/docs/images/Scene-Master-Preset.png)

Im Preset-Modus sind alle Steuerungen -- Starten von Playbacks, Go in
Cuelisten, Anwenden von Paletten etc. -- nur im Visualiser sichtbar. Die
dabei involvierten Playbacks, Paletten etc. werden ebenfalls violett
hinterlegt.

Bewegt man nun den Scene Master, so wird der Output auf den so eingestellten
Zustand übergeblendet; dabei werden auch etwa mit einprogrammierte
Zeiten (für Cues oder Paletten) berücksichtigt. Hat der Fader 100%
erreicht, so ist der Preset-Status komplett live, also ‚committet'.
Ebenso lässt sich das Commit manuell per Tastendruck erreichen 
(<Keys.HardKey>Commit</Keys.HardKey> beim Diamond 9). Der Preset-Modus 
bleibt aktiv, bis man diesen wie oben beschrieben verlässt.

Normalerweise schaltet sich die Funktionsrichtung des Scene Masters um,
sobald er einen Endpunkt (100% oder 0%) erreicht, so dass man einfach
den nächsten Look einstellen, dann einfaden, und von neuem beginnen
kann. Ebenso lässt sich einstellen, dass man den Fader jedes Mal erst
wieder auf 0 bringen muss. Dies erreicht man über <Keys.HardKey>Options</Keys.HardKey> 
oder <Keys.SoftKey>Options</Keys.SoftKey> und wählt den Scene Master. Es gibt folgende Optionen:

-   &nbsp;<Keys.SoftKey>Auto Commit and Invert</Keys.SoftKey>: damit wird jeweils beim Erreichen von
    100% und 0% Faderstellung die (nächste) vorbereitete Szene live
    geschaltet und mit der nächsten Faderfahrt eingeblendet.

-   &nbsp;<Keys.SoftKey>Auto Commit</Keys.SoftKey> ist ganz ähnlich, allerdings wird die nächste Szene
    immer nur bei 0% Faderstellung aktiviert, so dass man auch von 100%
    erst wieder herunterfaden muss.

-   Bei <Keys.SoftKey>Manual Commit</Keys.SoftKey> schließlich wird die Szene gar nicht per Fader
    aktiviert, sondern muss per Taste aktiviert werden, wozu eine entsprechende Funktion etwa mit 
    der grauen Taste verknüpft sein muss (über Tastenprofile, s.u.).

Auf dem Diamond 9 gibt es weitere Buttons für den Scene Master: <Keys.HardKey>Reset</Keys.HardKey> löscht alle Preset-Änderungen und kehrt zum aktuellen Live-Status zurück, und <Keys.HardKey>Preload</Keys.HardKey> arbeitet 
wie von Preload gewphnt, lädt also alle LTP-Werte vorab.

Der Scene Master kann auch auf einer Taste oder einem Button im Display
liegen. In diesem Fall dient die Kombination <Keys.HardKey>Avo</Keys.HardKey> + <Keys.SoftKey>Scene Master</Keys.SoftKey>
bzw. <Keys.HardKey>Release</Keys.HardKey> + <Keys.SoftKey>Scene Master</Keys.SoftKey> zum Starten oder Verlassen des
Preset Modus; einfaches Betätigen der Taste/des Buttons macht einen
Commit. Der Status lässt sich im entsprechenden Fenster (z.B. Playbacks
oder Static Playbacks) überwachen.

Den Tasten des Scene Masters lassen sich verschiedene Funktionen per
Tastenprofil zuweisen: Commit Changes (Szene aktivieren), Commit Changes and Exit scene Mode(Szene 
aktivieren und Preset-Modus verlassen), und Enter or Commit scene Mode (Preset-Modus
aktivieren oder Szene aktivieren).

-   Beim Pearl Expert und beim Tiger Touch 1 drücken Sie zum Zuweisen des
    Scene Masters <Keys.HardKey>Avo</Keys.HardKey> und <Keys.HardKey>Disk</Keys.HardKey>,
    um ins System-Menü zu gelangen, und wählen dort <Keys.SoftKey> Assign Masters</Keys.SoftKey>.

## Flash- und Swop-Tasten

Die Flash- (Add) und Swop-Tasten bei jedem Regler dienen zum jederzeitigen
Abruf von Cues und Chasern. Die <Keys.HardKey>Flash</Keys.HardKey>-Taste addiert dabei den
jeweiligen Inhalt mit 100% zum sonstigen Output, während die
<Keys.HardKey>Swop</Keys.HardKey>-Taste gleichzeitig alle anderen Cues/Chaser vorübergehend
dunkeltastet (Solo-Funktion). Die <Keys.HardKey>Flash</Keys.HardKey>-Taste lässt sich auch in die
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
Tastenbelegung rasch zu ändern, halten Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste gedrückt
und betätigen die Funktion <Keys.SoftKey>Edit Key Profile</Keys.SoftKey>. Das Sapphire Touch verfügt
neben den grauen und blauen Tasten pro Fader auch über eine schwarze 
Taste, deren Funktion ebenso eingestellt werden kann, und auch die virtuellen
Fader können schwarze Tasten haben.

![Playback Faders with key profiles applied](/docs/images/Playback-Faders-with-key-profiles-applied.png)

Im Touchscreen direkt oberhalb der Regler wird die aktuelle
Tastenfunktion angezeigt.

## Priorität der Playbacks

Einzelnen Playbacks lässt sich eine [höhere Priorität](../cues/playback-options.md#priority) zuweisen, wenn sie
nicht durch andere Playbacks, die die gleichen Geräte verwenden, überlagert
werden sollen. Werden etwa ein paar Geräte als Spot für z.B. den Sänger
eingesetzt, sind aber ebenso in einem anderen Cue verwendet, so kann man
die Priorität für den Cue ‚Spot' heraufsetzen, so dass der andere Cue darauf
ohne Auswirkung bleibt.

## Virtuelle Fader

Werden mehr Fader benötigt und reichen dafür Fader auf dem Bildschirm
aus, so kann das Fenster ‚Virtual Faders' hilfreich sein. Zum Öffnen
drücken Sie zweimal auf 
[<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Virtual Faders</Keys.SoftKey>.

Dieses Fenster zeigt 10 Fader, die genau wie die echten Fader verwendet werden
können. Mit der Seitenumschaltung auf der linken Seite können auch diese
Fader auf 60 Seiten umgeschaltet werden.

![Virtual playbacks window](/docs/images/Virtual-Faders.png)

Mit den Fenstereinstellungen (das kleine <Keys.ContextKey>Zahnrad</Keys.ContextKey> anklicken) lassen sich
weitere Einstellungen vornehmen:

-   Die Seitenumschaltung kann ein- oder ausgeblendet werden.

-   Die blauen, grauen und schwarzen Tasten können ein- oder
    ausgeblendet werden.

-   Es kann zwischen 5, 10 oder 15 Fadern gewählt werden.

## Feste Playbacks (Nur Tiger Touch)

Zusätzlich zu den zehn Fadern am unteren Rand des Pultes finden sich auf dem
Tiger Touch Pulten weitere zehn rechts oben. Diese haben normalerweise immer
die gleiche Belegung, d.h. sie werden durch die Seitenwahl nicht
umgeschaltet. Sie bieten sich somit an für häufig benötigte Cues, die
Saalbeleuchtung, Blinder, oder die Nebelmaschine.

Es ist aber auch möglich, diese Fader auf Seiten umzuschalten. Dazu
müssen entsprechende Makros auf Tasten zugeordnet werden. Sollten diese
Makros auf dem Pult nicht zur Verfügung stehen, so muss die
Personality-Bibliothek aktualisiert werden.

## Verriegeln der Seitenumschaltung

Mitunter möchte man einen Fader 'fixieren', so dass er unabhängig vom
Wechsel der Seiten stets verfügbar bleibt. Dies bietet sich z.B. an,
wenn man ein paar allgemeine Cues hat, die auf jeder Seite benötigt
werden, ohne dass man diese extra kopieren muss. Erreicht wird dies
über die Einstellung <Keys.SoftKey>Handle Paging</Keys.SoftKey> in 
den <Keys.HardKey>Options</Keys.HardKey> oder <Keys.SoftKey>Options</Keys.SoftKey>.

-   &nbsp;<Keys.SoftKey>Locked</Keys.SoftKey> (Verriegelt) blendet das betreffenden Playback auf sämtlichen
    anderen Seiten ein; was ggf. anderswo auf diesen Fader programmiert
    ist, ist damit nicht erreichbar.

-   Bei <Keys.SoftKey>Transparent Lock</Keys.SoftKey> erscheint das Playback an seinem Platz
    nur auf den Seiten, auf denen der Fader nicht schon anderweitig 
    belegt ist.

Auch die Makrotasten, Executor-Tasten und festen Playbacks lassen sich
verriegeln; dies bietet sich an, wenn man die Umschaltung per 'Page
Change'-Makros verwendet.

Auch Masterregler lassen sich auf diese Weise von der Seitenumschaltung 
ausnehmen.

## Anzeigen der aktiven Playbacks

Im Fenster ‚Active Playbacks' werden die aktuell aktiven Playbacks/
Speicherplätze angezeigt. Damit hat man einen schnellen Überblick,
welche Cues gerade aktiv sind, wo sie gestartet wurden und welche
Attribute dadurch gesteuert werden. Zum Aufrufen dieses Fensters 
drücken Sie zweimal auf 
[<Keys.HardKey>Open/View</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Active Playbacks</Keys.SoftKey>, oder Sie nutzen die 
Tastenkombination <Keys.HardKey>Open/View</Keys.HardKey> + <Keys.HardKey>Off</Keys.HardKey>.

In der ersten Zeile jedes Buttons steht dabei, wo (in welchem 
Fenster/auf welchem Fader) das Playback zu finden ist. Die zweite 
Zeile zeigt die Bezeichnung des Playbacks, die dritte schließlich 
die gesteuerten Attribute.

![Active Playbacks Windown](/docs/images/Active-Playbacks-Window.png)

Klickt man eine der Schaltflächen an, so wird das betreffende Playback
sofort deaktiviert. Betätigt man <Keys.SoftKey>Playback Options</Keys.SoftKey>, gefolgt von einer
der Playback-Schaltflächen, so kann man die jeweiligen Parameter ändern.

## Blind-Modus

Sollen noch schnell ein paar kleine Änderungen an Cues oder Paletten mit
Hilfe des Visualisers vorgenommen werden, ohne den Live-Betrieb zu
stören, lässt sich das Pult auch in den Blind-Modus schalten. Dazu
drückt man die Taste <Keys.HardKey>Blind</Keys.HardKey> (ältere Pulte verfügen nicht über diese
-- in diesem Fall hält man <Keys.HardKey>Avo</Keys.HardKey> gedrückt und wählt den Menüpunkt
&nbsp;<Keys.SoftKey>Blind</Keys.SoftKey>).

Um ein Playback zu überprüfen, muss man das Playback selbst Blind
schalten. Dazu hält man die <Keys.HardKey>Blind</Keys.HardKey>-Taste und drückt die blaue
Playback-Taste. Um das Playback wieder Live zu schalten, geht man
genauso vor. Playbacks können auch über die Playback-Optionen Blind
geschaltet werden.

Dabei kann von der eingestellten Blind-Stimmung sanft in den
Live-Betrieb übergeblendet werden, ohne dass man erst ein Playback
speichern muss. Ebenso kann man im Blind die nächste Stimmung aus
mehreren Paletten kombinieren und dann in diese einfaden. (Noch
einfacher geht das mit dem Szenenmaster).

Um überzublenden, tippen Sie mit den Zifferntasten die gewünschte Zeit
in Sekunden ein und drücken die <Keys.HardKey>Blind</Keys.HardKey>-Taste.

Sind im Programmer Attribut-Zeiten gesetzt worden, so haben diese
Vorrang vor der manuell eingegebenen Zeit.

## Improvisieren (Busking) mit Paletten

Hatten Sie nicht genügend Zeit zum Programmieren, werden Sie vermutlich
während der Show noch ein paar Effekte hinzufügen wollen. Damit wird das
Ganze erst richtig interessant.

Sehr schnell lassen sich Ergebnisse erzielen, wenn man Paletten
verwendet. Dabei lassen sich in Paletten auch Fadezeiten speichern, oder
man gibt beim Palettenabruf eine Zeit vor.

1.  Wählen Sie einige der bereits verwendeten Geräte aus.
2.  Geben Sie mit den Zifferntasten einen Wert wie z.B. <Keys.HardKey>2</Keys.HardKey> ein
    (Überblendzeit, in Sekunden).
3.  Drücken Sie die Schaltfläche einer Palette, um sie aufzurufen.
4.  Die angewählten Geräte blenden nun in der angegebenen Zeit zu den
    Einstellungen der gewählten Palette über.

Enthält eine Palette Zeitvorgaben, so kann man mittels Tastenprofil der
Palettenschaltflächen bestimmen, ob diese Zeiten beim Improvisieren
berücksichtigt werden sollen oder nicht. Dazu drücken Sie <Keys.HardKey>Avo</Keys.HardKey>+\[Key
Profiles\], dann <Keys.SoftKey>Palettes</Keys.SoftKey>. Die möglichen Optionen sind \[Palette is
fired ignoring its times\] und <Keys.SoftKey>Palette is fired with its times</Keys.SoftKey>.
Manuell eingegebene Zeiten überschreiben stets in der Palette 
gespeicherte Zeiten.

Wird manuell eine Überblendzeit eingegeben, lässt sich ebenso der
'Geräteversatz' einstellen (mit Menütaste C <Keys.SoftKey>Overlap... </Keys.SoftKey>). Damit
lassen sich etwa Effekte wie 'Rollen' oder 'Abziehen' realisieren. Bei
'overlap'= 100% wechseln alle Geräte gleichzeitig; bei 'overlap'=50%
beginnt das zweite Gerät mit dem Überblenden, sobald das erste zur
Hälfte damit fertig ist. Die Reihenfolge, in der die Geräte wechseln,
bestimmt sich aus der Reihenfolge, in der die Geräte ausgewählt wurden. 
Siehe [Fixture Overlap](../cues/cue-timing.md#einstellen-von-überblendzeiten-und-geräteversatz) für weitere Details.

Eine so eingegebene Paletten-Fadezeit und Overlap gelten nur einmalig 
für den unmittelbar nächsten Palettenabruf. Sollen bis zur nächsten
Änderung Fadezeit und Overlap festgelegt werden, so erfolgt dies im 
&nbsp;**Paletten-Menü**: drücken Sie dazu die Taste <Keys.HardKey>Palette</Keys.HardKey> und geben Sie
die gewünschten Werte mit den Menütasten <Keys.SoftKey>Master Time</Keys.SoftKey> 
und <Keys.SoftKey>Master Overlap</Keys.SoftKey> ein. Es gibt ferner etliche Macros für die häufig genutzten
Werte, um Master Time und Master Overlap mit nur einem Tastendruck zu
ändern, siehe [Master-Zeit für Paletten](../palettes/timing-with-palettes#master-zeit-für-paletten).

Wird eine Palette als 'Quick Palette', also ohne Auswahl von Fixtures
oder Gruppen, aufgerufen, so wird sie wiederum durch den nächsten Cue
überschrieben (wird etwa eine grüne Palette aufgerufen und danach ein
blauer Cue gestartet, so werden die Geräte blau). Werden dagegen erst
Geräte/Gruppen ausgewählt und dann eine Palette aufgerufen, so wird sie
im Programmierspeicher abgelegt und überlagert alle folgenden Cues
(wird also eine grüne Palette aufgerufen, so bleiben die Geräte grün,
bis <Keys.HardKey>Clear</Keys.HardKey> gedrückt wird).

Beim Programmieren der Paletten empfiehlt es sich, z.B. alle
Farbpaletten in einem Bereich, alle Positionspaletten in einem anderen
Bereich zu gruppieren etc. Damit findet man sich später besser zurecht.

Gilt es, eine Band zu beleuchten, so ist es hilfreich, sich für jeden
Musiker eine Positionspalette anzulegen, so dass man auch auf
unangekündigte Solos schnell reagieren kann.

Die [Off-Funktion](../controlling-fixtures.md#attribute-mit-off-deaktivieren) ist nützlich, um aus
einem Cue z.B. nur die Position, aus einer anderen nur die Farbe etc. zu
verwenden. Damit ergeben sich deutlich mehr Kombinationsmöglichkeiten,
als wenn man stets sämtliche Attribute in einem Cue ablegt. Zu beachten
ist dabei, dass man natürlich den Überblick über den tatsächlichen
Inhalt behalten muss: startet man etwa zwei Cues, die jeder nur die Farbe
gespeichert haben, so ergibt das noch kein Licht.
