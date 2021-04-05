---
id: titan-commands
title: Titan Commands Quick Reference
sidebar_label: Titan Commands Quick Reference
original_id: titan-commands
---

import Keys from '@site/src/components/key.ts';

Einige der hier aufgeführten Befehle müssen mit <Keys.HardKey>Enter</Keys.HardKey> abgeschlossen
werden. Der besseren Lesbarkeit halber wurde das <Keys.HardKey>Enter</Keys.HardKey> hier jedoch
weggelassen.

<Keys.HardKey>  </Keys.HardKey> bedeutet eine wirkliche Taste.

<Keys.SoftKey>  </Keys.SoftKey> bedeutet eine Schaltfläche odr Menütaste.

\u123 \u125 ist die Auswahl eines Speicherplatzes, z.B. \u123Cue\u125 ist die blaue Auswahltaste
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
<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10						| Auswahl der Geräte 1 bis 10.
<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>And</Keys.HardKey> 25	| Auswahl der Geräte 1 bis 10 sowie 20 und 25.
<Keys.HardKey>Fixture</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>							| Dimmer von Gerät 5 auf 100%.	
<Keys.HardKey>Fixture</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 60 <Keys.HardKey>@</Keys.HardKey> 75				| Dimmer von Gerät 1 bis 60 auf 75%.
<Keys.HardKey>Group</Keys.HardKey> 2 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey>								| Dimmer von Gruppe 2 auf 100%.
<Keys.HardKey>Group</Keys.HardKey> 2 <Keys.HardKey>@</Keys.HardKey> 75								| Dimmer von Gruppe 2 auf 75%.

### Geräte mit Zellen (Sub Fixtures)

Tastenfolge 										| Resultat
---													| --- 
<Keys.HardKey>.</Keys.HardKey> m												| Zelle m der gewählten Geräte wählen.
<Keys.HardKey>.</Keys.HardKey>												| Alle Zellen der gewählten Geräte wählen.
n <Keys.HardKey>.</Keys.HardKey>												| Alle Zellen des Geräts n.
1 <Keys.HardKey>Through</Keys.HardKey> 5 <Keys.HardKey>.</Keys.HardKey> 2								| Zweite Zelle der Geräte 1 bis 5.
<Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> j<br/>oder<br/><Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey> j	| <br/>Zellen 1 bis j der gewählten Geräte.									
<Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey>									| Zellen ab Zelle m der gewählten Geräte.
<Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey>j<br/>oder<br/><Keys.HardKey>.</Keys.HardKey> m <Keys.HardKey>Through</Keys.HardKey> j | <br/>Zellen m bis j aller angewählten Geräte.
n <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey> 								| Alle Zellen der Geräte n bis i
n <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>j								| Zelle j der Geräte n bis i
n <Keys.HardKey>Through</Keys.HardKey> <Keys.HardKey>.</Keys.HardKey>j								| Zellen 1 bis j der Geräts n
n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey>									| Alle Zellen der Geräte gleichen Typs ab Gerät n
n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> i								| Zellen 1 bis i des Geräts n
n <Keys.HardKey>.</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> i<Keys.HardKey>.</Keys.HardKey>j							| Zellen 1 bis j der Geräte n bis i

Select If -- Bedingte Auswahl
-----------------------------

Tastenfolge 										| Resultat
---													| --- 
<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey><Keys.HardKey>@</Keys.HardKey>							| Alle Geräte mit Dimmer >0%.
<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Through</Keys.HardKey> 50					| Alle Geräte mit Dimmer >50%.
<Keys.HardKey>Select If</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> 50 <Keys.HardKey>Through</Keys.HardKey>					| Alle Geräte mit Dimmer <50%.

Record -- Speichern
-------------------

**<Keys.HardKey>Record</Keys.HardKey> \u123Cueliste\u125 \u123Cueliste\u125**\
Anhängen an das Ende der Cueliste

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey>**\
Mergen des Programmers in den gerade aktiven Cue der verbundenen Cueliste.

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 90.1**\
Mergen des Programmers in Cue 90.1 der verbundenen Cueliste (dieser Cue wird neu erstellt falls nicht vorhanden)

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20**\
Mergen des Programmers in Cues 1 bis 10 und 20 (nach dem <Keys.HardKey>Enter</Keys.HardKey> wählt man Kopieren/Mergen/Ersetzen oder drückt nochmals <Keys.HardKey>Enter</Keys.HardKey> zum Mergen)

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey>**\
Mergen des Programmers (nur Position) in den gerade aktiven Cue.

**<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey>**\
Mergen des Programmers (nur Position) in den gerade aktiven Cue.

Copy, Move -- Kopieren, Verschieben in Cuelisten
------------------------------------------------


**<Keys.HardKey>Copy</Keys.HardKey> \u123Cueliste\u125 n <Keys.HardKey>Enter</Keys.HardKey>**\
Cue n an das Ende der Cueliste kopieren.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> \u123Cueliste\u125 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey> n**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
\u123Cueliste\u125 und Einfügen hinter Cue n.

**<Copy\>/<Keys.HardKey>Move</Keys.HardKey> \u123Cueliste\u125 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>Enter</Keys.HardKey> \u123target playback\u125 n <Keys.HardKey>Enter</Keys.HardKey>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
\u123Cueliste\u125 und Einfügen am Ende der Cueliste.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> \u123Cueliste\u125 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
<Keys.HardKey>@</Keys.HardKey>**\

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> \u123Cueliste\u125 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
\u123Cueliste\u125 und Einfügen am Ende der Cueliste.

**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> \u123Cueliste\u125 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
\u123target playback\u125 n**\
**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> \u123Cueliste\u125 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> \u123target playback\u125 n <Keys.HardKey>Enter</Keys.HardKey>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
\u123Cueliste\u125 und Einfügen nach Cue n der Cueliste auf \u123target
playback\u125.

Delete -- Löschen
-----------------

**<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n**\
Cue n der gerade verbundenen Cueliste löschen.

Include --  in den Speicher laden
---------------------------------

**<Keys.HardKey>Include</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n**\
Cue n der gerade verbundenen Cueliste in den Programmierspeicher
laden.

Times -- Zeiten
---------------

**<Keys.HardKey>Time</Keys.HardKey> 5**\
5 Sekunden Einfadezeit.

**<Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Time</Keys.HardKey> 5**\
5 Sekunden Einfadezeit für Cue 3 der gerade verbundenen Liste.

**<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> 5**\
5 Sekunden Einfadezeit für alle Attribute der ausgewählten Geräte.

**<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> 5**\
5 Sekunden Einfadezeit für die Gobo-Attribute der ausgewählten Geräte.

**<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>B@</Keys.HardKey> 5**\
5 Sekunden Einfadezeit für das gerade mit Encoder B gesteuerte Attribut
der ausgewählten Geräte.

**<Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> 3**\
5 Sekunden Einfadezeit, 3 Sekunden Delay.

**<Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 2**\
5 Sekunden Einfadezeit, 2 Sekunden Ausfadezeit.

**<Keys.HardKey>Time</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10**\
Fadezeit nach Geräteauswahl aufgeteilt.

Cue Lists -- Cuelisten
----------------------

**<Keys.HardKey>Cue</Keys.HardKey> n <Keys.HardKey>Go</Keys.HardKey>**\
Direktes Starten von Cue n (in der aktuell verbundenen Cueliste).

**5 <Keys.HardKey>Go</Keys.HardKey>**\
Den nächsten Cue mit 5 Sek. Fadezeit -- statt der programmierten
Fadezeit -- starten.

**<Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Enter</Keys.HardKey> 5 <Keys.HardKey>Go</Keys.HardKey>**\
Cue 3 mit 5 Sek. Fadezeit -- statt der programmierten Fadezeit --
starten.
