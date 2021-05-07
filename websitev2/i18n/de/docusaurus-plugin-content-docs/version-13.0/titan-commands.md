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

&#123; &#125; ist die Auswahl eines Speicherplatzes, z.B. &#123;Cue&#125; ist die blaue Auswahltaste
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


<Keys.HardKey>Record</Keys.HardKey> &#123;Cueliste&#125; &#123;Cueliste&#125; Anhängen an das Ende der Cueliste


---
<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey></strong>\
Mergen des Programmers in den gerade aktiven Cue der verbundenen Cueliste.
---
<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 90.1</strong>\
Mergen des Programmers in Cue 90.1 der verbundenen Cueliste (dieser Cue wird neu erstellt falls nicht vorhanden)
---
<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.HardKey>And</Keys.HardKey> 20</strong>\
Mergen des Programmers in Cues 1 bis 10 und 20 (nach dem <Keys.HardKey>Enter</Keys.HardKey> wählt man Kopieren/Mergen/Ersetzen oder drückt nochmals <Keys.HardKey>Enter</Keys.HardKey> zum Mergen)
---
<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey></strong>\
Mergen des Programmers (nur Position) in den gerade aktiven Cue.
---
<strong><Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Options</Keys.HardKey> <Keys.HardKey>Position</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey></strong>\
Mergen des Programmers (nur Position) in den gerade aktiven Cue.
---
Copy, Move -- Kopieren, Verschieben in Cuelisten
------------------------------------------------

---
<strong><Keys.HardKey>Copy</Keys.HardKey> &#123;Cueliste&#125; n <Keys.HardKey>Enter</Keys.HardKey></strong>\
Cue n an das Ende der Cueliste kopieren.
---
<strong><Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cueliste&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey> n</strong>\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf Cueliste und Einfügen hinter Cue n.
---
<strong><Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cueliste&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>Enter</Keys.HardKey> &#123;target playback&#125; n <Keys.HardKey>Enter</Keys.HardKey></strong>\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
Cueliste und Einfügen am Ende der Cueliste.
---
**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cueliste&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
<Keys.HardKey>@</Keys.HardKey>**\
**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cueliste&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
&#123;Cueliste&#125; und Einfügen am Ende der Cueliste.
---
**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cueliste&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20 <Keys.HardKey>@</Keys.HardKey>
&#123;target playback&#125; n**\
**<Keys.HardKey>Copy</Keys.HardKey>/<Keys.HardKey>Move</Keys.HardKey> &#123;Cueliste&#125; 1 <Keys.HardKey>Through</Keys.HardKey> 10 <Keys.SoftKey>NOT</Keys.SoftKey> 5 <Keys.HardKey>And</Keys.HardKey> 20
<Keys.HardKey>Enter</Keys.HardKey> &#123;target playback&#125; n <Keys.HardKey>Enter</Keys.HardKey>**\
Kopieren/Verschieben der Cues 1,2,3,4,6,7,8,9,10,20 der Liste auf
&#123;Cueliste&#125; und Einfügen nach Cue n der Cueliste auf &#123;target
playback&#125;.
---

Delete -- Löschen
-----------------

<strong><Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n</strong>\
Cue n der gerade verbundenen Cueliste löschen.

Include --  in den Speicher laden
---------------------------------

<strong><Keys.HardKey>Include</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> n</strong>\
Cue n der gerade verbundenen Cueliste in den Programmierspeicher
laden.

Times -- Zeiten
---------------

<strong><Keys.HardKey>Time</Keys.HardKey> 5</strong>\
5 Sekunden Einfadezeit.

<strong><Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Time</Keys.HardKey> 5</strong>\
5 Sekunden Einfadezeit für Cue 3 der gerade verbundenen Liste.

<strong><Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> 5</strong>\
5 Sekunden Einfadezeit für alle Attribute der ausgewählten Geräte.

<strong><Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>Gobo</Keys.HardKey> 5</strong>\
5 Sekunden Einfadezeit für die Gobo-Attribute der ausgewählten Geräte.

<strong><Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>B@</Keys.HardKey> 5</strong>\
5 Sekunden Einfadezeit für das gerade mit Encoder B gesteuerte Attribut
der ausgewählten Geräte.

<strong><Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>@</Keys.HardKey> 3</strong>\
5 Sekunden Einfadezeit, 3 Sekunden Delay.

<strong><Keys.HardKey>Time</Keys.HardKey> 5 <Keys.HardKey>And</Keys.HardKey> 2</strong>\
5 Sekunden Einfadezeit, 2 Sekunden Ausfadezeit.

<strong><Keys.HardKey>Time</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 10</strong>\
Fadezeit nach Geräteauswahl aufgeteilt.

Cue Lists -- Cuelisten
----------------------

<strong><Keys.HardKey>Cue</Keys.HardKey> n <Keys.HardKey>Go</Keys.HardKey></strong>\
Direktes Starten von Cue n (in der aktuell verbundenen Cueliste).

<strong>5 <Keys.HardKey>Go</Keys.HardKey></strong>\
Den nächsten Cue mit 5 Sek. Fadezeit -- statt der programmierten
Fadezeit -- starten.

<strong><Keys.HardKey>Cue</Keys.HardKey> 3 <Keys.HardKey>Enter</Keys.HardKey> 5 <Keys.HardKey>Go</Keys.HardKey></strong>\
Cue 3 mit 5 Sek. Fadezeit -- statt der programmierten Fadezeit --
starten.