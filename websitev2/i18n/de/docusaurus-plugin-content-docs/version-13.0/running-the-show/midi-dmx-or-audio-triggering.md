---
id: midi-dmx-or-audio-triggering
title: External triggering
sidebar_label: External triggering
original_id: midi-dmx-or-audio-triggering
---

Die meisten Bedienvorgänge des Pultes können durch verschiedene externe
Events ferngesteuert - getriggert - werden. Dies bietet sich z.B. bei sehr
komplexen Shows oder bei Installationen an, bei denen etwas
automatisiert ablaufen muss.

Die folgenden Triggerarten (Signale) sind möglich:

-   Audio (nicht bei allen Pulten)
-   DMX
-   GPIO (nicht bei allen Pulten)
-	MIDI (außer T1)
-	Streaming ACN

>   Audiotrigger (Sound to Light) erfordern spezielle Hardware und sind 
	derzeit nur beim Quartz und beim Arena verfügbar. Eine bei anderen Pulten
	eventuell verfügbare Line-In-Buchse kann nicht als Sound-to-Light-Eingang 
	verwendet werden. Dagegen kann der T2 als Sound-Eingang für andere Pult 
	dienen.

Anschließen externer Steuerungen
--------------------------------

MIDI-Geräte werden einfach mit der MIDI-In-Buchse verbunden.
USB-MIDI-Geräte, die den DirectX MIDI-Treiber unterstützen, können
ebenfalls verwendet werden (nicht am T1/Titan One). Damit kann z.B. ein
T2 mit einem MIDI-Faderboard gesteuert werden.

Zur Steuerung per DMX muss eine der DMX-Buchsen als Eingang verwendet
werden; dazu benötigt man einen simplen Stecker-Stecker-Adapter ('gender
changer', alle Pins 1:1 belegt, also 1-1, 2-2, 3-3 etc.). Bei Titan 
Mobiles der ersten Serie ist ggf. erst ein Update der Firmware
erforderlich, um die DMX-Trigger-Funktion zu ermöglichen.

Der Audio-Eingang funktioniert nur über die eigens dafür vorhandene
Klinkenbuchse beim Quartz und beim Arena. Der Audio-Eingang des
Motherboards ist dafür nicht geeignet Andere Konsolen können mit dem T2
als Audio-Eingang verwendet werden, siehe oben.

Das Arena sowie das Tiger Touch II verfügen dazu noch über einen
Klinkenanschluss für einen Fußschalter.

PioneerDJ-Decks können per Netzwerk als Taktgeber für BPM-Master
verwendet werden, siehe folgender Abschnitt. Dies ersetzt die frühere
'Pro DJ Tap'-Funktion.

Einrichten der externen Steuerung
---------------------------------

Schalten Sie das Pult in den System-Modus und wählen Sie \[Triggers\];
darauf wird das Fenster 'Triggers' angezeigt.

![Triggers Window](/docs/images/Triggers-Window.png)

Links werden die verschiedenen Trigger-Sets, also Kombinationen von
Triggern, angezeigt; dabei ist ein Set für MIDI Show Control mit den bei
MSC üblichen Steuerbefehlen bereits vorhanden (siehe nächstes Kapitel).

Jedes dieser Trigger-Sets kann durch den stilisierten Einschalt-Button
(links neben dem Namen des Sets) aktiviert oder deaktiviert werden.

1.  Beginnen Sie ein neues Trigger-Set, indem Sie *links unten* auf die
	\[+\]-Schaltfläche klicken und einen Namen eingeben. 

2.  Zum Hinzufügen eines Triggers, also der Zuordnung eines
	Steuersignals zu einem Pult-Ereignis, klicken Sie auf die
	\[+\]-Schaltfläche *rechts unten* oder drücken die Menü-Taste \[Add
	Trigger\].

3.  Wählen Sie nun die Art der Steuerung (Trigger Type). 

	-   \[Hardware\] ist die Steuerung einer konkreten Taste oder 
	    eines bestimmten Faders (z.B. „Fader 10", „Flash-Taste 4"). 
	
	-   \[Item\] ist hingegen die softwareseitige/logische Zuordnung 
	    („Palette 43", „Playback 91"). Die auszuführende Funktion ist
		getrennt festzulegen (s.u.).

4.  Betätigen Sie nun das zu steuernde Element des Pultes (Fader, Taste,
	Schaltfläche); das gewählte Element wird am Bildschirm angezeigt. Wurde
	vorher \[Item\] gewählt, lassen sich mit \[Action\] noch verschiedene
	Aktionen bestimmen, z.B. ‚Preload', ‚Set Level', ‚Flash' etc.

5.	Klicken Sie \[OK\].

6.	Nun muss der vorher definierten Pult-Aktion ein Steuerimpuls
	zugeordnet werden. Wählen Sie also die Art der Steuerung - DMX, MIDI
	oder Audio - mit \[Trigger Type\]. Falls Sie DMX verwenden möchten,
	stellen Sie mit \[DMX Port\] den verwendeten DMX-Anschluss ein. 
	Sobald ein DMX-Anschluss zum Triggern verwendet wird, wechselt er
	in die Betriebsart Rx (Empfangen). Soll er wieder als Ausgang benutzt
	werden, so weisen sie ihn in den [DMX-Einstellungen](../system-settings/dmx-output-mapping) wieder entsprechend zu.

7.	Senden Sie nun den gewünschten Steuerimpuls (Stimulus): drücken Sie
	z.B. die gewünschte Taste auf Ihrem MIDI-Keyboard, oder aktivieren Sie
	den entsprechenden Kanal auf dem externen DMX-Pult. Ist die Option
	\[Learn\] aktiviert, erkennt das Pult automatisch den Steuerimpuls und
	ordnet ihn zu. Ebenso lassen sich die Daten manuell eingeben.

8.	So lässt sich für DMX-Trigger die Adresse manuell eingeben. Für
	MIDI-Trigger kann man den MIDI-Kanal, den MIDI-Befehl, den Wert sowie
	den Bereich für die Velocity wählen. Für Audiotrigger gibt es die Option
	\[Band\], mit der das Frequenzband bestimmt werden kann; siehe [Audio Control](./midi-dmx-or-audio-triggering.md#audio-trigger-sound-to-light).

9.	Klicken Sie \[Add\], um den Trigger hinzuzufügen.

10. Im Bildschirm wird die gewählte Zuordnung angezeigt.

Fügen Sie auf die gleiche Weise weitere Trigger hinzu.

![Triggers Window with MIDI triggers](/docs/images/Triggers-Window-with-MIDI-triggers.png)

Zum Löschen eines Triggers aus der Zuordnung wählen Sie diesen und
betätigen die Schaltfläche mit dem Papierkorb-Symbol *rechts unten*.

Zum Löschen einer kompletten Zuordnungs-Tabelle (Mapping) wählen Sie
diese und betätigen die Schaltfläche mit dem Papierkorb-Symbol *links
unten*.

### Einrichten eines MIDI Faderboards mit dem T2

Ein USB-MIDI-Faderboard wird wie folgt mit dem T2 verbunden: schließen
Sie es per USB and den PC an, auf dem die Titan-Software läuft, und
stellen Sie sicher, dass es ordnungsgemäß in Windows funktioniert (die
MIDI-Werte kann man u.a. mit der Software MIDI-Ox überprüfen).

1.	Öffnen Sie das System-Menü und wählen Sie \[Triggers\].

2.	Fügen Sie links mit dem Button \[ + \] eine neue
	Trigger-Zusammenstellung (Mapping) hinzu und geben Sie ihr einen
	passenden Namen, z.B. 'T2 Playbacks'.

3.	Fügen Sie nun rechts mit dem Button \[ + \] oder mit der Menütaste
	\[Add Trigger\] einen neuen Trigger hinzu -- dieser wird als Trigger
	Type: Hardware angelegt.

4.	Bewegen Sie den ersten Fader in Titan Go.

5.	Klicken Sie auf \[OK\].

6.	Bewegen Sie nun den ersten Fader des MIDI-Controllers. Titan
	empfängt die empfangenen Werte und zeigt das durch eine Pegelanzeige an.

7.	Klicken Sie auf \[Add\]. In der rechten Spalte wird wird der neu
	angelegte Trigger angezeigt.

8.	Wiederholen Sie den Vorgang ab Schritt 3 für weitere Fader.

MIDI Show Control
-----------------

Folgende MIDI Show Control-Befehle werden unterstützt:

  Befehl    | Wirkung
  --------- | -------------------------------
  GO        | Playback/Cue starten
  STOP      | Playback/Cue stoppen
  RESUME    | Playback/Cue fortsetzen
  LOAD      | Playback-Wert auf 100% setzen
  ALL OFF   | Alle Playbacks releasen
  RESET     | Wie ALL OFF
  GO OFF    | Wie RESUME

Playbacks/Cues werden durch die Benutzernummer identifiziert, Diese wird
über \[Set Legend\]\[User Number\] eingestellt.

Geräte mit MIDI Show Control werden durch eine Geräte-ID (device id)
identifiziert. Zum Einstellen der Geräte-ID des Titan-Pultes dient die
Benutzereinstellung \[Timecode\]\[MIDI Device Id\]. Vorgabewert ist 0.

Audio-Trigger (Sound to Light)
------------------------------

Bei Pulten, die das unterstützen (momentan: Quartz und Arena), gibt es
einen separaten Audio-Eingang. Das dort anliegende Signal wird in
verschiedene Frequenzbänder geteilt, die einzeln als Trigger verwendet
werden können. Mit der Option \[Band\] lässt sich das verwendete
Frequenzband bestimmen.

Zur genauen Einstellung dient das Arbeitsfenster 'Audio Trigger'.

![Audio Window](/docs/images/Audio-Window.png)

Ist die erforderliche Hrdware nicht vorhanden, so wird eine entsprechende
Warnung angezeigt. Derzeit verfügen nur das Quartz und das Arena über
die richtige Hardware.

-   Mit dem Schalter 'Enable' unter dem Gain-Regler lassen sich alle
    Audio-Trigger abschalten.

-   Der Gain-Regler (links) regelt die gesamte Empfindlichkeit.

-   Aktiviert man den Schalter 'Auto', so wird die Empfindlichkeit
    automatisch geregelt; der Fader ist in diesem Fall inaktiv.

-   Der Schalter 'Enable' bei jedem einzelnen Band aktiviert und
    deaktiviert dieses.

-   Mit dem Trigger-Regler für jedes Band lässt sich jeweils die
    Schaltschwelle einstellen. Ist die Schaltschwelle ausgelöst, dann
    wird der Fader jeweils rot dargestellt.

-   Der 'Auto'-Schalter bei jedem Band stellt die Schaltschwelle
    automatisch auf einen in etwa brauchbaren Wert.

Playbacks können schnell einzelnen Bändern zugewiesen werden, indem man
auf die Schaltfläche \[Band x\] oben klickt und dann das zu triggernde
Playback auswählt.

Auf dem Arena zeigt die Audio-LED beim Netzschalter etwa anliegendes
Audio-Signal durch Blinken an. Die Kopfhörer-Buchse ist dagegen mit dem
Kopfhörerausgang des Motherboards und nicht mit dem Eingang verbunden,
kann also nicht zur Kontrolle genutzt werden.
