---
id: operating-the-remote
title: Operating the Remote
sidebar_label: Operating the Remote
original_id: operating-the-remote
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Um sich mit dem Pult zu verbinden, starten Sie auf dem Mobilgerät die
Titan Remote-App; nun werden die im Netzwerk gefundenen Pulte angezeigt
(vorausgesetzt natürlich, dass das [Netzwerk korrekt eingerichtet](setting-up-the-remote.md) ist).

Die Remote-App enthält auch einen Emulator, mit dem die Remote lokal,
also auch ohne Netzwerkverbindung, ausprobiert werden kann.

![Titan Remote Android App with keypad](/docs/images/Titan-Remote-Android-App-Control-Selection.png)

Mit der zentralen Leiste von Schaltflächen kann man nun die zu
steuernden Funktionen/Details wählen. Mit der Taste <Keys.SoftKey>Keypad</Keys.SoftKey> wird 
eine Tastatur eingeblendet; diese überlagert ggf. andere Schaltflächen. 
Zum Ausblenden klicken Sie wieder auf <Keys.SoftKey>Keypad</Keys.SoftKey>.

## Keypad -- die Tastatursteuerung

Mit der Tastatur lassen sich die häufigsten Aufgaben realisieren,
die man mit einer Remote erledigen möchte. So lassen sich z.B. einzelne
oder mehrere Dimmer und Geräte aktivieren und auf Locate-Werte setzen.

![Titan Remote Android App with keypad](/docs/images/Titan-Remote-Android-App-with-keypad.png)

Die Steuerung erfolgt unter Verwendung der Gerätenummern. Möchte man
z.B. Dimmer Nr. 3 auf 50% setzen, so lautet die Eingabe

&nbsp;<strong>`3 @ 5 Enter`</strong>

Um die Dimmer 1 bis 10 auf 80% zu setzen:

&nbsp;<strong>`1 Thro 10 @ 8 Enter`</strong>

Für 100% klicken Sie zweimal auf @, z.B.

&nbsp;<strong>`1 Thro 10 @ @`</strong>

> 	Um ein oder mehrere Geräte auf Locate-Werte zu setzen, klicken Sie statt
	auf @ auf <Keys.SoftKey>Locate</Keys.SoftKey>.

Es können mehrere Bereiche von Geräten mit der AND-Taste ausgewählt
werden, z.B.

&nbsp;<strong>`1 Thro 10 And 20 Thro 30 @ 6 Enter`</strong>.

## Steuern von Geräten

Auf der Geräte-Ansicht (mit der Schaltfläche <Keys.SoftKey>Fixture</Keys.SoftKey>) können Sie
genauso arbeiten wie auf dem Pult gewohnt: wählen Sie einfach die
gewünschten Geräte aus.

![Fixture View in Titan Remote Android App](/docs/images/Fixture-View-in-Titan-Remote-Android-App.png)

Sind Geräte ausgewählt, so können Sie auf den <strong>Paletten</strong>-Ansichten
Paletten aufrufen oder mit den Schaltflächen <strong>IPCGBES</strong> direkt einzelne
Attribute steuern.

In der Geräteansicht können Sie durch Klicken und Ziehen nach oben und
unten scrollen. Um die Seiten umzuschalten, ziehen Sie die
Palettenanzeige vom linken Rand aus nach rechts.

Mit der Schaltfläche <Keys.HardKey>All</Keys.HardKey> wählen Sie alle Geräte im
Programmierspeicher aus. Halten Sie die Schaltfläche länger angeklickt,
so werden verschiedene Auswahlmuster angeboten (odd, even etc.)

![Fixture Control in Titan Remote Android App](/docs/images/Fixture-Control-in-Titan-Remote-Android-App.png)

Die Räder zeigen auch Funktionsnamen an, z.B. für Farben oder Gobos. Zum
Durchschalten durch die Funktionen klicken Sie auf die Pfeile ganz oben
bzw. unten bei jedem Rad. Zum kontinuierlichen Drehen der Räder klicken
und ziehen Sie diese. Gibt es mehr als drei Attribute in der jeweiligen
Attributgruppe des Gerätes, klicken Sie zum Durchschalten wiederholt auf
die entsprechende <strong>IPCGBES</strong>-Schaltfläche.

Klicken Sie auf <Keys.SoftKey>Clear</Keys.SoftKey>, um den Programmierspeicher der Remote zu
löschen. Wenn Sie <Keys.SoftKey>Clear</Keys.SoftKey> länger anklicken, so werden alle
Programmierspeicher gelöscht, also auch der des Pultes. Das kann
sinnvoll sein, wenn dort versehentlich noch etwas aktiv ist, was bei der
Verwendung der Remote stört.

In der <strong>Cue</strong>-Ansicht können auch gespeicherte Cues gestartet werden. Hält
man die Schaltfläche eines aktiven Cues angeklickt, so kann man diesen
deaktivieren oder releasen (freigeben).

>	Werden Bezeichnungen von Paletten oder Cues auf dem Pult bei laufender 
	Remote geändert, so erscheinen die Änderungen auf der Remote erst, 
	wenn diese beendet und neu gestartet wurde.

## Speichern von Gruppen und Paletten

Mit der Remote lassen sich auch Gruppen und Paletten speichern: nehmen
Sie die gewünschten Einstellungen vor, klicken Sie auf <Keys.SoftKey>Rec</Keys.SoftKey> und dann
auf eine Schaltfläche in der entsprechenden Ansicht. Ebenso kann man
einfach eine leere Schaltfläche länger gedrückt halten (Quick Record) --
das ist gleichbedeutend mit dem Doppelklick auf dem Pult.

Hält man eine bestehende Palette angeklickt, so wird der momentane
Inhalt des Programmierspeichers in diese integriert (Quick Merge).

*Cues können mit der Remote nicht programmiert werden.*