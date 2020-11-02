---
id: version-14.0-titan-commands
title: Titan Commands Quick Reference
sidebar_label: Titan Commands Quick Reference
original_id: titan-commands
---

Einige der hier aufgeführten Befehle müssen mit \<Enter\> abgeschlossen
werden. Der besseren Lesbarkeit halber wurde das \<Enter\> hier jedoch
weggelassen.

\<  \> bedeutet eine wirkliche Taste.

\[  \] bedeutet eine Schaltfläche odr Menütaste.

{ } ist die Auswahl eines Speicherplatzes, z.B. {Cue} ist die blaue Auswahltaste
eines Playbacks.

Nummern/Zahlen werden mit den Zifferntasten eingegeben.

Die verfügbaren Tasten sind teilweise je nach Pult unterschiedlich. Ist
eine bestimmte Taste nicht vorhanden, so steht die Funktion meist als
Makro zur Verfügung.

Einige der Tasten haben auf älteren Pulten abweichende Bezeichnungen;
diese sind hier aufgeführt:


  Alter Name |  Neuer Name
  -----------|------------
  Connect    |  Cue
  SET        |  TIME

Fixtures - Geräte
-----------------

Tastenfolge 										| Resultat
---													| --- 
\<Fixture\> 1 \<Through\> 10						| Auswahl der Geräte 1 bis 10.
\<Fixture\> 1 \<Through\> 10 \<And\> 20 \<And\> 25	| Auswahl der Geräte 1 bis 10 sowie 20 und 25.
\<Fixture\> 5 \<@\> \<@\>							| Dimmer von Gerät 5 auf 100%.	
\<Fixture\> 1 \<Through\> 60 \<@\> 75				| Dimmer von Gerät 1 bis 60 auf 75%.
\<Group\> 2 \<@\> \<@\>								| Dimmer von Gruppe 2 auf 100%.
\<Group\> 2 \<@\> 75								| Dimmer von Gruppe 2 auf 75%.

### Geräte mit Zellen (Sub Fixtures)

Tastenfolge 										| Resultat
---													| --- 
\<.\> m												| Zelle m der gewählten Geräte wählen.
\<.\>												| Alle Zellen der gewählten Geräte wählen.
n \<.\>												| Alle Zellen des Geräts n.
1 \<Through\> 5 \<.\> 2								| Zweite Zelle der Geräte 1 bis 5.
\<.\> \<Through\> \<.\> j<br>oder<br>\<Through\> \<.\> j	| <br>Zellen 1 bis j der gewählten Geräte.									
\<.\> m \<Through\>									| Zellen ab Zelle m der gewählten Geräte.
\<.\> m \<Through\> \<.\>j<br>oder<br>\<.\> m \<Through\> j | <br>Zellen m bis j aller angewählten Geräte.
n \<Through\> i\<.\> 								| Alle Zellen der Geräte n bis i
n \<Through\> i\<.\>j								| Zelle j der Geräte n bis i
n \<Through\> \<.\>j								| Zellen 1 bis j der Geräts n
n \<.\> \<Through\>									| Alle Zellen der Geräte gleichen Typs ab Gerät n
n \<.\> \<Through\> i								| Zellen 1 bis i des Geräts n
n \<.\> \<Through\> i\<.\>j							| Zellen 1 bis j der Geräte n bis i

Select If -- Bedingte Auswahl
-----------------------------

Tastenfolge 										| Resultat
---													| --- 
\<Select If\> \<@\>\<@\>							| Alle Geräte mit Dimmer >0%.
\<Select If\> \<@\> \<Through\> 50					| Alle Geräte mit Dimmer >50%.
\<Select If\> \<@\> 50 \<Through\>					| Alle Geräte mit Dimmer <50%.

Record -- Speichern
-------------------

---
**\<Record\> {Cueliste} {Cueliste}**\
Anhängen an das Ende der Cueliste
---
**\<Record\> \<Cue\> \<Cue\>**\
Mergen des Programmers in den gerade aktiven Cue der verbundenen Cueliste.
---
**\<Record\> \<Cue\> 90.1**\
Mergen des Programmers in Cue 90.1 der verbundenen Cueliste (dieser Cue wird neu erstellt falls nicht vorhanden)
---
**\<Record\> \<Cue\> 1 \<Through\> 10 \<And\> 20**\
Mergen des Programmers in Cues 1 bis 10 und 20 (nach dem \<Enter\> wählt man Kopieren/Mergen/Ersetzen oder drückt nochmals \<Enter\> zum Mergen)
---
**\<Record\> \<Position\> \<Cue\> \<Cue\>**\
Mergen des Programmers (nur Position) in den gerade aktiven Cue.
---
**\<Record\> \<Options\> \<Position\> \<Cue\> \<Cue\>**\
Mergen des Programmers (nur Position) in den gerade aktiven Cue.
---
Copy, Move -- Kopieren, Verschieben in Cuelisten
------------------------------------------------

---
**\<Copy\> {Cueliste} n \<Enter\>**\
Cue n an das Ende der Cueliste kopieren.
---
**\<Copy\>/\<Move\> {Cueliste} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<@\> n**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
{Cueliste} und Einfügen hinter Cue n.
---
**<Copy\>/\<Move\> {Cueliste} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<Enter\> {target playback} n \<Enter\>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
{Cueliste} und Einfügen am Ende der Cueliste.
---
**\<Copy\>/\<Move\> {Cueliste} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<@\>
\<@\>**\
**\<Copy\>/\<Move\> {Cueliste} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20
\<Enter\> \<Enter\>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
{Cueliste} und Einfügen am Ende der Cueliste.
---
**\<Copy\>/\<Move\> {Cueliste} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20 \<@\>
{target playback} n**\
**\<Copy\>/\<Move\> {Cueliste} 1 \<Through\> 10 \[NOT\] 5 \<And\> 20
\<Enter\> {target playback} n \<Enter\>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
{Cueliste} und Einfügen nach Cue n der Cueliste auf {target
playback}.
---

Delete -- Löschen
-----------------

**\<Delete\> \<Cue\> n**\
Cue n der gerade verbundenen Cueliste löschen.

Include --  in den Speicher laden
---------------------------------

**\<Include\> \<Cue\> n**\
Cue n der gerade verbundenen Cueliste in den Programmierspeicher
laden.

Times -- Zeiten
---------------

**\<Time\> 5**\
5 Sekunden Einfadezeit.

**\<Cue\> 3 \<Time\> 5**\
5 Sekunden Einfadezeit für Cue 3 der gerade verbundenen Liste.

**\<Time\> \<Fixture\> 5**\
5 Sekunden Einfadezeit für alle Attribute der ausgewählten Geräte.

**\<Time\> \<Fixture\> \<Gobo\> 5**\
5 Sekunden Einfadezeit für die Gobo-Attribute der ausgewählten Geräte.

**\<Time\> \<Fixture\> \<@\> \<B@\> 5**\
5 Sekunden Einfadezeit für das gerade mit Encoder B gesteuerte Attribut
der ausgewählten Geräte.

**\<Time\> 5 \<@\> 3**\
5 Sekunden Einfadezeit, 3 Sekunden Delay.

**\<Time\> 5 \<And\> 2**\
5 Sekunden Einfadezeit, 2 Sekunden Ausfadezeit.

**\<Time\> 1 \<Through\> 10**\
Fadezeit nach Geräteauswahl aufgeteilt.

Cue Lists -- Cuelisten
----------------------

**\<Cue\> n \<Go\>**\
Direktes Starten von Cue n (in der aktuell verbundenen Cueliste).

**5 \<Go\>**\
Den nächsten Cue mit 5 Sek. Fadezeit -- statt der programmierten
Fadezeit -- starten.

**\<Cue\> 3 \<Enter\> 5 \<Go\>**\
Cue 3 mit 5 Sek. Fadezeit -- statt der programmierten Fadezeit --
starten.