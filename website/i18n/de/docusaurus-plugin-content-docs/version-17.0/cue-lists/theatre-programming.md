---
id: theatre-programming
title: Tipps für Theater-Programmierer
sidebar_label: Tipps für Theater-Programmierer
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Wenn Sie bereits mit anderen Theater-Lichtpulten gearbeitet haben, sind
Sie vermutlich eher an das Arbeiten mit Tasten, Nummern und Befehlen als
an Touchscreens wie bei Titan gewöhnt. Aber keine Angst: auch bei Titan
lässt sich eine Show mit Tasten, Nummern und Befehlen programmieren und
fahren.

- 'Richtige' Tasten mit Beschriftungen sind hier als graues Rechteck dargestellt, wie z.B. <Keys.HardKey>Enter</Keys.HardKey>.
- Für befehle mit einem + halten Sie die erste Taste gedrückt und betätigen dazu die zweite. So bedeutet z.B. <Keys.HardKey>Clear</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> die <Keys.HardKey>Clear</Keys.HardKey>-Taste gedrückt halten und dazu die Taste <Keys.HardKey>All</Keys.HardKey> drücken.
- Die <Keys.HardKey>@</Keys.HardKey>-Taste ist die direkt bei den Zifferntasten, nicht eine bei den Encodern.
- Die <Keys.HardKey>Cue</Keys.HardKey>-Taste heißt auf manchen älteren Pulten 
  noch <Keys.HardKey>Connect</Keys.HardKey> oder <Keys.HardKey>Connect/Cue</Keys.HardKey>. 
- Die <Keys.HardKey>Through</Keys.HardKey>-Taste heißt auf manchen älteren Pulten 
  noch <Keys.HardKey>Thro</Keys.HardKey>.
- Die Tasten <Keys.HardKey>And</Keys.HardKey> und <Keys.HardKey>Through</Keys.HardKey> gibt es auf manchen Pulten nicht als 'richtige' Taste, sondern als Funktionstaste <Keys.SoftKey>And</Keys.SoftKey> bzw. <Keys.SoftKey>Through</Keys.SoftKey>.

Dimmer und andere Geräte haben eine User Number (Benutzer-Nummer) (*entspricht  der Channel Number auf anderen Pulten*). Diese wird links oben
in der jeweiligen Schaltfläche angezeigt. In den hier aufgeführten
Befehlen wird die Nummer als **n** dargestellt. Die User Number lässt sich
über das Menü <Keys.SoftKey>Set Legend</Keys.SoftKey> ändern, siehe [Legende eingeben](../patching/changing-the-patch.md#legendenbezeichnungen-eingeben). Auch Gruppen
haben jeweils eine User Number.

![Fixtures Window showing user numbers](/docs/images/Fixtures-Window-showing-user-numbers.png)

- Befehle können aneinandergefügt werden, bis mit <Keys.HardKey>Enter</Keys.HardKey> die Eingabe abgeschlossen und der Befehl ausgeführt wird. So können z.B. direkt Geräte ausgewählt und auf einen bestimmten Pegel gesetzt werden.
- Wurden Geräte ausgewählt, kann man an diesen Änderungen vornehmen, bis <Keys.HardKey>Clear</Keys.HardKey> gedrückt wird oder bis andere Geräte ausgewählt werden.
- Dimmerpegel werden normalerweise zweistellig angegeben (z.B. "50" für 50%). Das kann in den Benutzereinstellungen auf einstellige Eingabe in Zehner-Schritten umgestellt werden, siehe [Formatting (Formate)](../system-settings/user-settings.md#formatting-formate).

## Zu steuernde Geräte auswählen

 Keypresses | Action
------------|-------------------
 **n** <Keys.HardKey>Enter</Keys.HardKey> | Gerät **n** auswählen
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey>	| Geräte von **n** bis **m** auswählen
<Keys.HardKey>Group</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> | Gerätegruppe **n** auswählen
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** | Geräte von **n** bis **m** und **p** auswählen
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** <Keys.HardKey>Through</Keys.HardKey> **q** | Geräte von **n** bis **m** und von **p** bis **q** auswählen
**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>Not</Keys.HardKey> **p** | Geräte von **n** bis **m** außer **p** auswählen

- Haben die Geräte Zellen oder Subfixtures (z.B. LED-Pixelbars), dann lassen sich die einzelnen Zellen mit "Punkt"-Syntax aufrufen. Z.B. wählt **n** <Keys.HardKey>.</Keys.HardKey> 1 <Keys.HardKey>Through</Keys.HardKey> 4  <Keys.HardKey>Enter</Keys.HardKey> die ersten vier Zellen von Gerät **n** aus. Siehe [Geräte mit Zellen (Sub Fixtures)](../titan-reference.md#geräte-mit-zellen-sub-fixtures).

## Dimmerwerte setzen

Tasten | Ergebnis
---- | ----
 <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Gerät auf **v%** *(siehe Anmerkung zur 2-stelligen Eingabe)*
 <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Dimmer/Gerät auf 100%
 **n** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Gerät **n** auf **v%**
 **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Dimmer/Gerät **n** auf 100%
&nbsp;**n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Geräte **n** bis **m** auf **v%**
&nbsp;**n** <Keys.HardKey>And</Keys.HardKey> **m** <Keys.HardKey>And</Keys.HardKey> **p** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Geräte **n**, **m**, **p** auf **v%**
<Keys.HardKey>Group</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> **v** <Keys.HardKey>Enter</Keys.HardKey> | Dimmer/Geräte in Gruppe **n** auf **v%**


## Andere Parameter bei Movinglights etc. einstellen

Tasten | Ergebnis
---- | ----
 <Keys.HardKey>@</Keys.HardKey> **b** <Keys.HardKey>/</Keys.HardKey> **v** | Farbnummer **v** von Marke **b** für die ausgewählten Geräte. (1=Marke L, 2=Marke R, 3=Marke G)
 <Keys.HardKey>Gobo</Keys.HardKey> (Encoder) | Einstellen des Gobos auf den im Display für die Encoder angezeigten Wert.
 <Keys.HardKey>Gobo</Keys.HardKey> <Keys.HardKey>Wheel @</Keys.HardKey> <Keys.SoftKey>Gobo 1</Keys.SoftKey> | Auswahl des Gobos für die ausgewählten Geräte mit den Menütasten. (Hierbei ist <Keys.HardKey>Wheel @</Keys.HardKey> die Taste bei dem betreffenden Encoder).

- Verfügt das Pult nicht über eine <Keys.HardKey>/</Keys.HardKey>-Taste, so verwendet man bei der Auswahl der Farbnummer entweder die Bildschirmtastatur oder eine externe Tastatur, siehe [Farbmischung: Filters](../controlling-fixtures/changing-fixture-attributes.md#farbmischung-filters). 

## Clear-Funktionen

Tasten | Ergebnis
---- | ----
<Keys.HardKey>Clear</Keys.HardKey> | Sofortiges Release der editierten Kanäle auf den programmierten Status (*wie Cheat auf ETC-Pulten*)
**t** <Keys.HardKey>Clear</Keys.HardKey> | Release der editierten Kanäle in **t** Sekunden
<Keys.HardKey>Clear</Keys.HardKey> + <Keys.HardKey>All</Keys.HardKey> | Geräteauswahl löschen, aber Werte im Programmer behalten

- De Funktion der Clear-Taste lässt sich auf zweistufiges Clear ändern, so dass entweder zuerst die Geräteauswahl und mit dem zweiten Tastendruck der Programmer gelöscht wird oder umgekehrt. Siehe [Action Precedence](../system-settings/user-settings.md#clear) in den Benutzereinstellungen/Clear.

Hält man <Keys.HardKey>Clear</Keys.HardKey> gedrückt, so stehen auf den Menütasten weitere Funktionen zur Verfügung. So kann man z.B. die Werte nur der gerade angewählten Geräte löschen oder eine bestimmte Maske zum Löschen ausgewählter Attribute verwenden. Siehe [Das Clear-Menü](../controlling-fixtures.md#das-clear-menü)

## Programmieren von Cues

Titan kann mehrere Cuelisten parallel laufen lassen. Zum Programmieren
einer Cueliste drückt man auf <Keys.HardKey>Record</Keys.HardKey> und wählt im 
Menü <Keys.SoftKey>Create Cue List</Keys.SoftKey>. Dann drückt man die **Auswahltaste** 
bei einem Fader, um dort die Cueliste zu speichern.

Beim Programmieren werden zunächst alle Änderungen seit dem letzten Betätigen 
der <Keys.HardKey>Clear</Keys.HardKey>-Taste in den Programmierspeicher, kurz Programmer, geschrieben. 

Mit den Menüoptionenen <Keys.SoftKey>Record Mode</Keys.SoftKey> wird nun bestimmt, was genau in den Cue gespeichert wird:

- **Record by Channel** speichert die einzelnen Attribute der Geräte im Programmer. Hat man z.B. ein Fixture angewählt 
und Pan/Tilt verändert, so wird auch nur Pan/Tilt gespeichert, nicht aber die anderen Attribute. Das eignet sich z.B., 
um andere  Cues zu überlagern (z.B. um nur die Farbe zu ändern).

- **Record by Fixture** speichert sämtliche Attribute der Geräte im Programmer. Hat man z.B. ein Fixture angewählt 
und Pan/Tilt verändert, so werden trotzdem sämtliche Attribute des Fixtures gespeichert. Das eignet sich vor allem 
für Cues, bei denen man sichergehen will, dass das Ergebnis genauso aussieht wie es programmiert wurde, unabhängig 
von zuvor gestarteten Cues.

- **Record by Stage** ignoriert den Programmer uns speichert sämtliche Geräte, die gerade aktiv sind (Dimmer > 0).

Das bedeutet, *dass andere gerade aktive Playbacks nicht mit in den Cue gespeichert werden*, 
außer bei **Record by Stage**, da Playbacks nicht im Programmer sind, 
siehe [Erstellen eines Cues](../cues/creating-a-cue.md#anlegen-eines-cues). Mit der [Include-Funktion](../cues/editing-cues#cues-wiederverwenden---die-include-funktion) kann man Playbacks in den Programmer laden, um sie anderweitig weiterzuverwenden.

Ist [Tracking](../cue-lists/cue-list-playback.md#tracking) aktiviert (Voreinstellung), so werden Werte nur dann in eine 
Cueliste gespeichert, wenn sie gegenüber den vorigen Cues verändert wurden. Das ist das normale Verhalten von 
Theater-Konsolen und erleichtert das Editieren, da so gezielt nur der Cue geändert werden muss, in dem der Wert
ursprünglich programmiert wurde.

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Record</Keys.HardKey> <Keys.SoftKey>Create Cue List</Keys.SoftKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Beginn einer neuen Cueliste auf dem ausgewählten Fader
<Keys.HardKey>Record</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> <Keys.ContextKey>fader select</Keys.ContextKey> | speichert den nächsten Cue an das Ende dieser Cueliste
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> | Speichert Cue **n** (existiert bereits ein solcher Cue, erfolgt eine Rückfrage zum Mergen/Überschreiben)
<Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Setzen der Fadezeit im Programmer (wird in nachfolgend gespeicherte Cues übernommen; bereits angelegte Cues  bleiben unbeeinflusst)
<Keys.HardKey>View</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Anzeige aller Cues der Cueliste als Liste, um z.B. deren Zeiten zu überprüfen und zu ändern.

### Kopieren, Verschieben, Löschen von Cues

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **m** <Keys.HardKey>Enter</Keys.HardKey> | Kopieren von Cue **n** in neuen Cue **m**
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Kopieren von Cue **n** an das Ende der Cueliste
<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Löscht Cue **n** (2. <Keys.HardKey>Enter</Keys.HardKey> bestätigt)

- Mit <Keys.HardKey>Move</Keys.HardKey> (statt Copy) können Cues verschoben werden.<br/>
  Verfügt das Pult über keine Move-Taste, drücken Sie <Keys.HardKey>Avo</Keys.HardKey> 
  und <Keys.HardKey>Copy</Keys.HardKey>.

- Mehrere Cues auf einmal lassen sich mit den Tasten <Keys.HardKey>Through</Keys.HardKey>, <Keys.HardKey>And</Keys.HardKey> und <Keys.SoftKey>Not</Keys.SoftKey> auswählen. Um z.B. die Cues 3, 4 ,5 ,7, 10 zu kopieren und ab Cue 20 einzufügen, drücken Sie <br/><Keys.HardKey>Copy</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> **3** <Keys.HardKey>Through</Keys.HardKey> **7** <Keys.SoftKey>Not</Keys.SoftKey> **6** <Keys.HardKey>And</Keys.HardKey> **10** <Keys.HardKey>@</Keys.HardKey> **20** <Keys.HardKey>Enter</Keys.HardKey>.

### Block-Cues und Follow-On-Cues

Zum Einstellen von Block und Follow-On öffnen Sie die Cueliste wie oben beschrieben mit <Keys.HardKey>View</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey>.

- Zum Erstellen eines **Block**-Cues (Änderungen werden nicht getrackt) klickt man in der Spalte 'Tracking' auf
  die Zelle des entsprechenden Cues und wählt <Keys.SoftKey>Block</Keys.SoftKey> mit den Menütasten.

- Um Cues [miteinander zu verlinken](cue-list-timing.md#schrittfolge-und-versatz), 
  klickt man auf die entsprechende Zelle der Spalte ‚Link' (dort steht normalerweise 
  ‚Wait For Go'). Dann kann	man mit den Menütasten auf <Keys.SoftKey>Link After Previous 
  Cue</Keys.SoftKey> oder <Keys.SoftKey>Link With Previous Cue</Keys.SoftKey> wechseln. 
  Für 'Link After...' bestimmt dann der Wert für 'Delay	Out', wie lange nach dem vorigen 
  der neue Cue automatisch startet.

## Cues und Cuelisten abfahren

Schiebt man den Fader einer Cueliste hoch, so wird sie mit der Steuerung
verbunden *("connected")* und kann z.B. mit der <Keys.HardKey>Go</Keys.HardKey>-
Taste gesteuert werden.

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Cue</Keys.HardKey> <Keys.ContextKey>fader select</Keys.ContextKey> | Verbinden einer anderen Cueliste
<Keys.HardKey>Go</Keys.HardKey> | Nächster Cue wird mit den programmierten Zeiten eingeblendet
<Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Go</Keys.HardKey> | Cue n wird mit den programmierten Zeiten eingeblendet
&nbsp;**t** <Keys.HardKey>Go</Keys.HardKey> | Nächster Cue wird in **t** Sekunden eingeblendet
&nbsp;**n** <Keys.HardKey>Cue</Keys.HardKey> **t** <Keys.HardKey>Go</Keys.HardKey> | Cue **n** wird in **t** Sekunden eingeblendet

-	Sollen Movinglights bereits im Off auf Position, in Gobo oder Farbe
	fahren, aktivieren Sie die Funktion [<Keys.SoftKey>Move In Dark</Keys.SoftKey>](cue-list-options.md#move-in-dark).

## Updaten von Cues 

Einzelne wie auch mehrere Cues können wie folgt mit dem Inhalt das Programmer aktualisiert werden:

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Record</Keys.HardKey><Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Enter</Keys.HardKey> | Updaten von Cue **n** mit dem Inhalt des Programmers und Tracken in die folgenden Cues *(existiert der Cue noch nicht, so wird er neu erstellt)*. 
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Updaten von Cue **n** mit dem Inhalt des Programmers ohne zu tracken. 
<Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | Setzen von **t** Sekunden Fadezeit in Cue **n**.
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Merge</Keys.SoftKey> | Verschmelzen des Programmers in alle Cues von **n** bis **m** *(nicht existierende Cues werden erstellt)*.
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Update</Keys.SoftKey> | Updaten der Werte in den Cues von **n** bis **m** mit den Werten des Programmers *(es werden weder fehlende Cues erstellt noch Attribute hinzugefügt, siehe Anmerkung unten)*.
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> **n** <Keys.HardKey>Through</Keys.HardKey> **m** <Keys.SoftKey>Update</Keys.SoftKey> | Verschmelzen des Programmers in alle Cues von **n** bis **m** *(Fehlende Cues werden **nicht** erstellt, aber die neuen Attribute werden in alle Cues hinzugefügt)*.

- Für **Update** lässt sich einstellen, ob neue Attribute mit gespeichert werden sollen. Ist <Keys.SoftKey>Add Channels</Keys.SoftKey> aktiviert, so werden den Cue ggf. neue Attribute hinzugefügt; ist diese Option nicht aktiv, so werden nur die Werte bereits existierender Attribute aktualisiert. Der Befehl **Record Update** erzwingt in jedem Fall das Hinzufügen neuer Attribute.

## Cues live editieren

Oft müssen Änderungen an bereits programmierten Cues vorgenommen werden,
während diese gerade live sind. Es empfiehlt sich, <Keys.HardKey>Clear</Keys.HardKey> zu drücken,
um den Programmer zu leeren und nicht versehentlich unerwünschte Werte mit zu speichern.

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Speichern der aktuell eingestellten Werte in den aktuellen Cue und Tracken in die folgenden Cues. 
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Speichern der aktuell eingestellten Werte in den aktuellen Cue ohne zu tracken.
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Speichern der aktuell eingestellten Werte in den aktuellen Cue und Tracken in die folgenden Cues *(für getrackte Werte wird der Cue geändert, in dem die aktuellen Werte ursprünglich gesetzt wurden)*.
<Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> <Keys.HardKey>@</Keys.HardKey> | Speichern der aktuell eingestellten Werte in den aktuellen Cue ohne zu tracken *(für getrackte Werte wird der Cue geändert, in dem die aktuellen Werte ursprünglich gesetzt wurden)*.
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Update</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Speichern der aktuell eingestellten Werte in den aktuellen Cue und Tracken in die folgenden Cues *(neue Attribute werden zum Cue hinzugefügt, wenn sie noch nicht enthalten waren; für getrackte Werte wird der Cue geändert, in dem die aktuellen Werte ursprünglich gesetzt wurden)*.
<Keys.HardKey>Time</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | Speichern der Fadezeit **t** in den aktuellen Cue.<br/>Eine andere Möglichkeit ist, die Cueliste mit <Keys.HardKey>View</Keys.HardKey> zu öffnen und dort die Änderungen vorzunehmen.

## Weitere Optionen zu Zeiten

Tasten | Ergebnis
-------|---------
<Keys.HardKey>Time</Keys.HardKey> **t1** <Keys.HardKey>And</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> | **t1** Sekunden Fade-In und **t2** Sekunden Fade-Out im Programmer setzen (zum Speichern in die nächsten Cues).
<Keys.HardKey>Time</Keys.HardKey> **t1** <Keys.HardKey>And</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | **t1** Sekunden Fade-In und **t2** Sekunden Fade-Out für den aktuellen Cue programmieren.
<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> **t** <Keys.HardKey>Enter</Keys.HardKey> | **t** Sekunden Fade-In für die aktuell ausgewählten Geräte im Programmer setzen.
<Keys.HardKey>Time</Keys.HardKey> **t1** <Keys.HardKey>@</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> | **t1** Sekunden Fade-In und **t2** Sekunden Delay im Programmer setzen (zum Speichern in die nächsten Cues).
<Keys.HardKey>Time</Keys.HardKey> <Keys.HardKey>Fixture</Keys.HardKey> **t1** <Keys.HardKey>@</Keys.HardKey> **t2** <Keys.HardKey>Enter</Keys.HardKey> <Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> <Keys.HardKey>Cue</Keys.HardKey> | **t1** Sekunden Fade-In und **t2** Sekunden Delay für die aktuell ausgewählten Geräte in den aktuellen Cue speichern.

## Shapes und Effekte

Shapes und Effekte lassen sich zwar nicht mit dem Ziffernblock auswählen, es ist aber trotzdem nicht schwer:

1. Zu steuernde Geräte wählen
2. Im Hauptmenü drückt man <Keys.SoftKey>Shapes and Effects</Keys.SoftKey>
  , <Keys.SoftKey>Shape Generator</Keys.SoftKey>, <Keys.SoftKey>Create</Keys.SoftKey>
3. Den gewünschten Shape-Typ wählen, z.B. <Keys.SoftKey>Dimmer</Keys.SoftKey>, <Keys.SoftKey>Pan/Tilt</Keys.SoftKey> etc.
4. Den gewünschten Shape wählen (Menütasten oder Shapes-Fenster)
5. Speed, Size, Spread mit den Wheels einstellen

Shapes können ganz normal in Cues gespeichert werden und tracken in
folgende Cues, bis das Tracken gestoppt wird. Zum Stoppen klicken Sie in der Playback-Ansicht der Cueliste auf den Button **T/B** in der Spalte 'View Shape', siehe [Tracking von Shapes in Cuelisten](../cue-lists/creating-a-cue-list.md#tracking-von-shapes-in-cuelisten).

## Macros

Folgen von Tastendrücken können als *Macro* gespeichert werden, so dass die ganze Folge durch nur einen Klick ausgeführt wird, siehe [Macros](../titan-basics/front-panel-buttons.md#macros----tastenfolgen).

Macros können in Cuelisten eingefügt werden, indem man ind der Spalte 'Macros' in der Playback-Ansicht in die betreffende Zelle klickt.