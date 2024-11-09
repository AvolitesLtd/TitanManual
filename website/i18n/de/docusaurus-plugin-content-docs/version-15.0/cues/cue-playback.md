---
id: cue-playback
title: Einen Cue verwenden
sidebar_label: Einen Cue verwenden
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Da eine Vielzahl von Cues/Chasern gleichzeitig abgerufen werden kann,
folgt das Pult bestimmten Regeln zur Kombination der aufgerufenen Werte
verschiedener Cues. Diese werden als **HTP**- und **LTP**-Regeln bezeichnet.

## HTP und LTP

Steuerkanäle können auf zwei Weisen verwaltet werden:

-   Dimmer und Helligkeitskanäle arbeiten nach dem Prinzip **'der höchste 
 Wert hat Priorität' (Highest Takes Precedence, HTP)**. Ist ein
 HTP-Kanal mit verschiedenen Werten in mehreren Cues aktiv, so wird
 der höchste Wert ausgegeben. Wird ein Cue ausgeblendet, so werden
 die zugehörigen HTP-Kanäle ausgeblendet.

-   Alle anderen Kanäle arbeiten nach dem Prinzip **'der letzte Wert hat
 Priorität' (Latest Takes Precedence, LTP)**. Die letzte/neueste
 Änderung überschreibt alle vorherigen Werte, folglich wird der Wert
 des zuletzt aufgerufenen Cues ausgegeben. Beim Ausblenden eines Cues
 behalten LTP-Kanäle ihren Wert, bis dieser durch einen anderen Cue
 überschrieben wird.

## Abrufen eines Cues

 Zum Aufrufen eines Cues bewegen Sie den jeweiligen Regler (betätigen Sie
 die <Keys.HardKey>Clear</Keys.HardKey>-Taste, um sicherzustellen, dass sich keine Werte im
 Programmierspeicher befinden, da diese ansonsten die Werte der Playbacks
 überschreiben würden).

-   Es lassen sich mehrere Cues gleichzeitig abrufen.

-   Die Werte der HTP-Kanäle werden durch den Regler beeinflusst; wird
 dieser etwa auf 50% gestellt, so zeigen alle HTP-Kanäle 50% ihres
 jeweils programmierten Wertes.

-   LTP-Kanäle werden getriggert, sobald der Regler über 0% bewegt wird.
 Ist eine Überblendzeit programmiert, so beginnen die LTP-Kanäle mit
 der Überblendung; ist keine solche hinterlegt, so wechseln die
 Kanäle sofort zu der neuen Einstellung *(außer falls der Cue auf
 ‚Mode 2' gestellt ist; siehe [Fader Modes](cue-timing.md#fade-modes))*.

-   Cues lassen sich ebenso mit der **Flash**-Taste aufrufen
 (werden auf 100% geschaltet und zum sonstigen Ausgang addiert). Eine
 Solo-Funktion ergibt sich mit der **Swop**-Taste (alle anderen
 aktiven Cues werden ausgeblendet). 'Flash' und 'Swop' funktionieren
 nur, sofern nicht ein anderes Tastenprofil hinterlegt ist, 
 siehe [Tastenprofile/Key Profiles](../system-settings/key-profiles.md).

-   Cues lassen sich vorab laden, indem die **Preload**-Funktion einer der
 Tasten per [Tastenprofil/Key Profile](../system-settings/key-profiles.md) zugewiesen wird. *'Vorab
 laden' (Preload) stellt die Attribute nicht anderweitig aktiver
 Geräte auf die Werte des Cues ein, um zu verhindern, dass später
 unerwünschte Schwenks, Gobo- oder Farbwechsel während des Aufrufs
 des Cues sichtbar sind*. 

 Zum Zuweisen der 'Preload'-Funktion halten
 Sie die <Keys.HardKey>AVO</Keys.HardKey>-Taste und drücken <Keys.SoftKey>Edit Key Profile</Keys.SoftKey>, anschließend
 drücken Sie die Taste, die Sie ändern möchten (siehe [Tastenprofile/Key Profiles](../system-settings/key-profiles.md)). 
 Berücksichtigen Sie, dass diese Einstellung dann ggf. für sämtliche Tasten dieses Typs gilt.

-   Einzelne Cues lassen sich auch mittels Tasten mit ihrem Timing
 starten, indem man der entsprechenden Taste das [Tastenprofil/Key Profile](../system-settings/key-profiles.md) "Go"
 zuweist. Die Taste muss nicht gedrückt gehalten werden, um das
 Fade-In zu Ende zu führen. Der gleiche Cue kann mehrfach gestartet
 werden, ohne ihn zu releasen.

-   Wenn einzelne Playbacks nicht durch andere Playbacks für die
 gleichen Geräte überlagert werden sollen, so geben Sie dem Playback
 eine höhere **Priorität**. Wenn z.B. ein paar Movinglights sowohl als
 Rednerlicht als auch als Effektlicht eingesetzt sind, so können Sie
 dem Rednerlicht-Playback eine höhere Priorität geben. Siehe [Priority](playback-options.md#priority) in
 [Options](playback-options.md).

## Wechsel der Playback-Seiten

Die Playback-Seiten lassen sich mit den Tasten 'Page+1' und 'Page-1' 
neben den Fadern sowie mit dem obere und unteren Bereich der 
Walzen-Schaltfläche im Display umschalten. Ebenso kann man in die Mitte 
der Walzen-Schaltfläche klicken und eine Seitennummer eingeben.

>   Wurden Cues auf den Schaltflächen gespeichert, so lassen sich die
 Seiten mit den 'Pages'-Schaltflächen im 'Playbacks'-Fenster wählen.

---

Die Benutzereinstellung [<Keys.SoftKey>Playback Paging</Keys.SoftKey>](../system-settings/user-settings.md#playback-paging) bestimmt über 
das Verhalten der Playbacks, wenn bei aktivierten Fadern die Playback-Seiten 
umgeschaltet werden:

### Pulte ohne Motorfader

-   Aktuell aufgerufene Cues bleiben beim Seitenwechsel normalerweise
 aktiviert (Playback Paging: **Always Hold**). Soll ein Cue aufgerufen 
 werden, der sich auf einem Fader befindet, der von einer vorherigen 
 Seite bereits aktiviert ist, so bewegen Sie diesen auf 0 und 
 aktivieren ihn wieder. Der vorherige Cue wird damit gestoppt, und 
 der neue aufgerufen. Jeder Fader kann somit stets nur auf einer Seite 
 aktiv sein.

-   Schaltet man die Einstellung dagegen auf **Never Hold**, dann kann jeder
 Fader auf mehreren Seiten unabhängig voneinander aktiv sein.
 Kehren Sie zu einer Seite zurück, von der bereits vorher ein Regler
 aktiv ist, so erhält dieser erst wieder die Kontrolle, sobald er auf
 dem bereits aktiven Wert steht; damit werden Sprünge bei der ersten
 Reglerbewegung verhindert. Ist ein Playback-Regler auf einer anderen
 Seite aktiviert, so wird das in pink angezeigt und die Seitennummer
 eingeblendet. 
	
-   Die Einstellung **Normal** bezieht sich auf den Vorgabewert, also bei 
 Pulten ohne Motorfader 'Always Hold'.

### Pulte mit Motorfadern

-   Voreinstellung: **Never Hold**. Cues bleiben beim Seitenwechsel aktiv, 
 aber die Fader sind der neuen Seite zugeordnet. Zum Deaktivieren eines 
 Cues von einer anderen Seite muss man auf diese zurückwechseln und den 
 Fader auf 0 ziehen. Ist ein Playback-Regler auf einer anderen Seite 
 aktiviert, so wird das in pink angezeigt und die Seitennummer eingeblendet.
    
-   Wechselt man die Einstellung auf **Always Hold**, so wird das von Pulten
 ohne Motorfader bekannte Verhalten aktiviert, und jeder Fader kann nur
 auf einer Seite aktiv sein.
	
-   Die Einstellung **Normal** bezieht sich auf den Vorgabewert, also bei 
 Pulten mit Motorfadern 'Never Hold'.

---

-   Für jede Playbackseite lässt sich eine Bezeichnung vergeben. Die
 Bezeichnung wird auf der auf der virtuellen Walze angezeigt. Zum Vergeben
 der Bezeichnung nutzen Sie im Hauptmenü <Keys.SoftKey>Set Legends</Keys.SoftKey>, 
 dann <Keys.SoftKey>Page Legends</Keys.SoftKey>. Solange man sich in diesem Menü befindet, lassen sich für
 mehrere Seiten Bezeichnungen vergeben.

-   Die festen Playbacks bzw. Executor-Tasten (sofern jeweils vorhanden)
 lassen sich mittels Makros ebenfalls umschalten. Die betreffenden
 Makros sind Teil der Personality-Bibliothek. Sollten die
 erforderlichen Makros auf Ihrem Pult nicht zur Verfügung stehen, so
 aktualisieren Sie zunächst die Personalities (und damit auch die
 Makros).

## Anzeigen der aktuell laufenden Playbacks

Im Fenster 'Active Playbacks' werden die aktuell laufenden Playbacks
angezeigt. Insbesondere wenn mehrere Playbacks auf mehreren Seiten
gestartet wurden, hat man damit einen schnellen Überblick, welche Cues
gerade aktiv sind, wo sie gestartet wurden und welche Attribute dadurch
gesteuert werden. Zum Aufrufen dieses Fensters drücken Sie zweimal auf
[<Keys.HardKey>Open / View</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Active Playbacks</Keys.SoftKey>.

![Active Playbacks Window](/docs/images/Active-Playbacks-Window.png)

Klickt man eine der Schaltflächen an, so wird das betreffende Playback
sofort deaktiviert (**gekillt**). Betätigt man <Keys.SoftKey>Playback Options</Keys.SoftKey>, gefolgt von einer
der Playback-Schaltflächen, so kann man die jeweiligen Parameter ändern.

## Master für Speed (Geschwindigkeit) und Size (Größe)

Die einzelnen Playbacks lassen sich verschiedenen Speed- und
Size-Masterreglern zuweisen; damit kann man das Tempo und die Größe von
enthaltenen [Shapes und Effekten](../effects.md) zentral steuern, oder - im Fall von
Chasern - direkt das [Chase-Tempo](../chases/chase-timing.md#rate--und-bpm-master) 
beeinflussen. *Das ist sehr nützlich, um mehrere gleichzeitig laufende Cues 
gemeinsam zu steuern*.

Fader können aber auch Größe und Tempo der 'eigenen', also in diesem Cue
gespeicherten Effekte steuern. Dies wird über die Playback-Optionen
eingestellt, siehe [Fader Settings](playback-options.md#playback-options----tab-fader)

Speed- und Size-Master sind detailliert beschrieben in [Speed and Size Masters](../running-the-show/playback-controls.md#speed--und-size-master).

## Release

Wenn der Fader eines Playbacks wieder auf 0 gestellt wird, dann bleiben die LTP-Attribute des Playbacks auf dem zuletzt 
(also durch das Playback) vorgegebenem Wert. Mitunter ist dies nicht gewünscht, so soll z.B. nach dem Deaktivieren 
eines Strobe-Cues das Stroben aufhören. Mit der **Release**-Funktion lässt sich bestimmen, wie Attribute nach dem 
Deaktivieren auf den vorigen Status zurückkehren.

Mittels einer Maske kann man festlegen, ob einzelne oder alle Attribute eines Cues nach dem Deaktivieren auf die vorigen 
Werte zurückkehren, siehe [Release Mask](#release-mask). Für einzelne Cues erfolgt das, sobald alle Fadezeiten abgelaufen 
sind, außer dies wurde mit [Kill Point](playback-options.md/#fader-tab) in den Cue-Optionen anders gesetzt.

Attribute releasen auf den Wert, der mit dem vorher gestarteten Playback vorgegeben wurde. Ist die 
Einstellung <Keys.SoftKey>Release to Home</Keys.SoftKey> im Release-Menü aktiviert, so kehren die Attribute auf die 
Release-/Power On-Werte zurück 
(siehe [Werte für Release / Power On programmieren](#werte-für-release--power-on-programmieren)). Ist diese Einstellung 
deaktiviert, so bleiben die Werte des letzten Playbacks.

Mittels [Key Profile](../system-settings/key-profiles.md) lässt sich auch einzelnen Tasten die Release-Funktion zuweisen.

Das Releasen erfolgt stets mit einer Überblendzeit. Deren Vorgabewert sind 2s, dies kann im Release-Menü 
unter <Keys.SoftKey>Master Release Time</Keys.SoftKey> geändert werden. Ferner kann man jedem Playback eine individuelle
Release-Zeit zuweisen ([Tab "Release"](playback-options.md#playback-options----tab-release) der Playback-Optionen).

-   Um einen einzelnen Cue zu deaktivieren (‚Kill'), drücken Sie gleichzeitig die <Keys.HardKey>AVO</Keys.HardKey>-Taste
und die **Auswahltaste** des Cues, das hat den gleichen Effekt wie das Stellen des Faders auf 0. Dabei wird die 
Fade-Out-Zeit berücksichtigt und der Cue released, sobald er ausgefadet ist. Das ist ebenso sinnvoll bei Cuelisten, die
je nach gewählter Option auf dem letzten Cue aktiv bleiben, auch wenn der Fader auf 0 steht.

-   Ein aktuell laufendes Playback lässt sich releasen, indem man die Taste <Keys.HardKey>Release</Keys.HardKey> drückt,
gefolgt von der **Auswahltaste** des Playbacks. Dabei wird eine [Temporäre Release-Maske](#temporary-release-mask) 
angewendet. Fadezeiten des Playbacks bleiben unberücksichtigt, nur die eingegebene Release-Zeit wird eingehalten.

-   Um alle laufenden Playbacks zu releasen, drücken Sie zweimal <Keys.HardKey>Release</Keys.HardKey>. Mit der 
Benutzereinstellung [Release Priority](../system-settings/user-settings.md#release) lässt sich vorgeben, welche Playbacks 
welcher Priorität released werden sollen. Stellt man diese Einstellung auf 'Low', so kann man nicht versehentlich 
alles releasen, außer es wurden gezielt einzelne Playbacks auf Priorität Low gesetzt.

## Release Mask (Release einzelner Attribute)

Mit der **Release-Maske** kann man einstellen, welche Attribute released werden. Es gibt eine **globale** 
Release-Maske, die generell gilt, sofern nicht für einzelne Cues eine **lokale** Maske gesetzt wurde. Wird mittels 
der <Keys.HardKey>Release</Keys.HardKey>-Taste released, so wird dagegen eine **temporäre** Release-Maske nur für diesen 
einen Vorgang angewendet.

### Globale Release-Maske

Ist für den Cue keine lokale Release-Maske erstellt worden, so erfolgt das Release gemäß der globalen Release-Maske. 
Die Vorgabe ist, dass keine Attribute released werden. So bleiben alle LTP-Attribute auf dem Wert des Playbacks.

Um die globale Release-Maske zu ändern, drücken Sie die Taste <Keys.HardKey>Release</Keys.HardKey> und klicken
auf <Keys.SoftKey>Global Release Mask</Keys.SoftKey>. Auf der Schaltfläche der Funktionstaste und den Buttons der 
Attributbänke wird angezeigt, welche Attribute momentan angewählt sind.

![Global Release Mask](/docs/images/Global-Release-Mask.png)

### Lokale (individuelle) Release-Maske

Um für das jeweilige Playback eine bestimmte Maske einzustellen, klicken Sie auf <Keys.SoftKey>Options</Keys.SoftKey> und 
wählen das betreffende Playback aus. Auf dem Reiter [Release](playback-options.md#release-tab) können Sie die 
entsprechenden Einstellungen vornehmen.

### Temporäre Release-Maske

Wird ein Playback oder der Programmer mit der <Keys.HardKey>Release</Keys.HardKey>-Taste released, so wird eine temporäre 
Release-Maske angewendet. Die Voreinstellung ist, dass alle Attribute released werden. Betätigen Sie die 
Attributbank-Buttons, um die Maske zu ändern; sobald die erste Attributbank angewählt wurde, werden alle anderen 
abgewählt. 

- Geben Sie mit den Zifferntasten eine Zeit in Sekunden ein, bevor Sie die <Keys.HardKey>Release</Keys.HardKey>-Taste 
drücken, so gilt diese temporär als Release-Zeit.

## Weitere Release-Optionen

### Playbacks seitenweise releasen

Es können auch mehrere Playbacks auf einmal released werden. Drücken Sie dazu <Keys.HardKey>Release</Keys.HardKey> 
und <Keys.HardKey>Goto Page</Keys.HardKey>, oder <Keys.HardKey>Release</Keys.HardKey> und die aktuelle
Seite (auf der Playback-Walze). Es gibt folgende Optionen:

&nbsp;<Keys.SoftKey>Release This Page</Keys.SoftKey> released alle aktiven Playbacks der aktuellen
Seite und Fadergruppe.

&nbsp;<Keys.SoftKey>Release Playbacks Not On This Page</Keys.SoftKey> released alle Playbacks, die momentan von anderen
Seiten aus in dieser Fadergruppe aktiv sind - besonders zweckmäßig, um Playbacks zu releasen, die auf anderen Seiten
auf dem gleichen Fader aktiv sind.

&nbsp;<Keys.SoftKey>Release All Playbacks In This Group</Keys.SoftKey> released alle Playbacks in der
jeweiligen Fadergruppe.

Dabei findet jeweils die [Temporäre Release-Maske](#temporäre-release-maske) Anwendung.

> **"Fader Group"** (Fadergruppe) bedeutet hier den jeweiligen Bereich von Fadern auf dem Pult, der getrennt Seiten
wechseln kann. So sind etwa die 10 Fader unterhalb des Displays auf dem Arena bzw. dem Tiger Touch eine Gruppe. Die 15
oberen sowie die 15 unteren Fader auf dem Tiger Touch Faderwing bzw. links auf dem Arena sind zwei weitere getrennte
Fadergruppen.

### Den Programmer releasen

Der Inhalt des Programmers lässt sich releasen, indem man die <Keys.HardKey>Release</Keys.HardKey>-Taste drückt, dann
die zu releasenden Attribute wählt und schließlich <Keys.HardKey>Clear</Keys.HardKey> drückt. Auch hier kann man vorher eine Release-Zeit mit den Zifferntasten eingeben.

Um ein einzelnes Attribut, das gerade auf einem der Räder liegt, zu releasen, drückt 
man <Keys.HardKey>Release</Keys.HardKey> gefolgt von der jeweiligen <Keys.HardKey>@</Keys.HardKey>-Taste (bei dem  
entsprechenden Rad). Damit lassen sich z.B. versehentlich gesetzte Werte aus dem Programmer entfernen oder beim Busking
etwas revidieren.

### Einen Master releasen

Ein Masterregler lässt sich auf seinen Ausgangswert zurücksetzen, indem man die <Keys.HardKey>Release</Keys.HardKey>-Taste
drückt gefolgt von der **Auswahltaste** des Masters. Um alle Master auf einmal zu releasen, drücken 
Sie <Keys.HardKey>Release</Keys.HardKey> und wählen aus dem Menü <Keys.SoftKey>Release all Masters</Keys.SoftKey>. 
Damit werden alle Master zurückgesetzt (100% bei Intensity-Mastern, 100% bei Speed-Mastern etc.)

## Werte für Release / Power On programmieren

Der Status, auf den die Lampen/Geräte beim Einschalten des Pultes gesetzt werden bzw. zu dem sie nach dem Releasen aller
Playbacks zurückkehren, lässt sich getrennt programmieren. So kann es sinnvoll sein, dafür ein Grundlicht auf der Bühne
einzustellen.

Es lassen sich sowohl shared (gemeinsam genutzte) als auch individuelle Werte pro Gerät einstellen. Werden shared Werte
gespeichert, so muss das - wie bei Paletten - nur für ein Gerät gemacht werden und gilt dann für alle Lampen dieses
Gerätetyps. Individuelle Werte dagegen gelten jeweils nur für das einzelne Gerät.

1.  Nehmen Sie die gewünschten Einstellungen vor.
2.  Drücken Sie <Keys.HardKey>Record</Keys.HardKey>, dann <Keys.HardKey>Release</Keys.HardKey>.
3.  Wählen Sie <Keys.SoftKey>Shared values</Keys.SoftKey> oder <Keys.SoftKey>Individual values</Keys.SoftKey>.
4.  Klicken Sie die Funktionstaste <Keys.SoftKey>Record</Keys.SoftKey>.
5.  Damit werden die Release-Werte gespeichert.

>   Zum Testen starten Sie ein oder mehrere Playbacks und releasen diese
    (<Keys.HardKey>Release</Keys.HardKey> sowie die jeweiligen Playbacks). Die Geräte sollten auf
    die programmierten Release-Werte zurückkehren.

## Deaktivieren einzelner Geräte mit Off

Einzelne Geräte und Attribute können über das **Off**-Menü deaktiviert werden.
Damit bleiben die Werte zwar im Playback enthalten, werden aber nicht abgerufen.
Die programmierten Werte verbleiben dabei im Playback und können in der 
Playback-Ansicht wieder auf On geschaltet, also aktiviert werden.

Dazu drücken Sie die Taste <Keys.HardKey>Off</Keys.HardKey>, dann die **Select-Taste** des Playbacks. 
Wählen Sie die betreffenden Geräte aus, stellen Sie im Menü die Attributmaske
ein, und klicken Sie auf <Keys.SoftKey>Off</Keys.SoftKey>, um wie gewünscht Attribute/Geräte/Shapes 
Off zu schalten.

Auf Titan-Pulten mit **Release** und **Off** auf der gleichen Taste würde
dies zum Releasen führen. Drücken Sie stattdessen <Keys.HardKey>Release/Off</Keys.HardKey>, dann 
aus dem Menü <Keys.SoftKey>Off Playback Values</Keys.SoftKey>, und wählen Sie nun das Playback aus.

## Playback-Gruppen

Playbacks können zu Gruppen zugeordnet werden, innerhalb deren sie sich gegenseitig deaktivieren. So kann man z.B. 
Farb-Playbacks auf verschiedenen Tasten programmieren, von denen nur die zuletzt angewählte aktiv ist. Auch beim Busking 
kann das sinnvoll sein, so dass man nicht mit vielen aktiven Playbacks endet, die sich gegenseitig überschreiben.

Das ist genauer beschrieben im Kapitel Steuern der Show, siehe [Playback Groups](../running-the-show/playback-controls#playback-groups).

![Playback groups window](/docs/images/Playback-groups-display-mode-1.png)