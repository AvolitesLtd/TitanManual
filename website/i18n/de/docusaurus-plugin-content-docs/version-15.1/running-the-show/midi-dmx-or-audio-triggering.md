---
id: midi-dmx-or-audio-triggering
title: Externe Trigger
sidebar_label: Externe Trigger
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Die meisten Bedienvorgänge des Pultes können durch verschiedene externe
Events ferngesteuert - getriggert - werden. Dies bietet sich z.B. bei sehr
komplexen Shows oder bei Installationen an, bei denen etwas
automatisiert ablaufen muss.

Die folgenden Triggerarten (Signale) sind möglich:

- Audio (nicht bei allen Pulten)
- DMX
- GPIO (nicht bei allen Pulten)
- MIDI (außer T1)
- Streaming ACN

> Audiotrigger (Sound to Light) erfordern spezielle Hardware und sind 
derzeit nur beim Quartz und beim Arena verfügbar. Eine bei anderen Pulten
eventuell verfügbare Line-In-Buchse kann nicht als Sound-to-Light-Eingang 
verwendet werden. Dagegen kann der T2 als Sound-Eingang für andere Pult 
dienen.<br/>
  &nbsp;<br/>
  GPIO steht nur auf dem Diamond 9, dem Arena, dem Tiger Touch II und dem Sapphire Touch zur Verfügung.

## Anschließen externer Steuerungen

Der Audio-Eingang funktioniert nur über die eigens dafür vorhandene
Klinkenbuchse beim Quartz und beim Arena. Der Audio-Eingang des
Motherboards ist dafür nicht geeignet Andere Konsolen können mit dem T2
als Audio-Eingang verwendet werden, siehe oben.

Zur Steuerung per DMX muss eine der DMX-Buchsen als Eingang verwendet
werden; dazu benötigt man einen simplen Stecker-Stecker-Adapter ('gender
changer', alle Pins 1:1 belegt, also 1-1, 2-2, 3-3 etc.).

GPIO nutzt einen simplen Schließkontakt, der per Klinkenbuchse 
angeschlossen wird (nur beim Diamond 9, beim Arena, dem Tiger Touch II und dem Sapphire 
Touch verfügbar). Beim Diamond 9 stehen die GPIO-Kontakte auch auf dem 15-poligen SubD-Stecker zur Verfügung. 
Für den TNP kann GPIO als Option nachgerüstet werden; wenden Sie sich dazu an Avolites oder Ihren Avolites-Vertrieb.

MIDI-Geräte werden einfach mit der MIDI-In-Buchse verbunden.
USB-MIDI-Geräte, die den DirectX MIDI-Treiber unterstützen, können
ebenfalls verwendet werden (nicht am T1/Titan One). Damit kann z.B. ein
T2 mit einem MIDI-Faderboard gesteuert werden.

sACN wird ganz einfach per Netzwerk (Ethercon) angeschlossen.

PioneerDJ-Decks können per Netzwerk als Taktgeber für BPM-Master
verwendet werden, siehe [folgender Abschnitt](./linking-pioneerdj-system-to-titan.md). Dies ersetzt die frühere
'Pro DJ Tap'-Funktion.

## Einrichten der externen Steuerung

Öffnen Sie das **System**-Menü (mittels <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>)
und wählen Sie <Keys.SoftKey>Triggers</Keys.SoftKey>; darauf wird das Fenster 'Triggers' angezeigt.

![Triggers Window](/docs/images/Triggers-Window.png)

Links werden die verschiedenen Trigger-Mappings, also Kombinationen von
Triggern, angezeigt; dabei ist ein Mapping für MIDI Show Control mit den bei
MSC üblichen Steuerbefehlen bereits vorhanden (siehe nächstes Kapitel).

Jedes dieser Trigger-Mappings kann durch den stilisierten Einschalt-Button
(links neben dem Namen des Mappings) aktiviert oder deaktiviert werden. 
Damit lässt sich ganz schnell die Steuerung des Pultes umkonfigurieren.

Trigger werden wie folgt eingerichtet:

1.  Beginnen Sie ein neues Trigger-Mapping, indem Sie *links unten* auf die
&nbsp;<Keys.ContextKey>+</Keys.ContextKey>-Schaltfläche klicken und einen Namen eingeben. 
2.  Zum Hinzufügen eines Triggers, also der Zuordnung eines Steuersignals zu einem Pult-Ereignis, 
klicken Sie auf die <Keys.ContextKey>+</Keys.ContextKey>-Schaltfläche *rechts unten* oder drücken 
die Menü-Taste <Keys.SoftKey>Add Trigger</Keys.SoftKey>.
3.  Wählen Sie nun die Art der Steuerung (Trigger Type). 
    - &nbsp;<Keys.SoftKey>Hardware</Keys.SoftKey> ist die Steuerung einer konkreten Taste oder 
      eines bestimmten Faders (z.B. „Fader 10", „Flash-Taste 4"), ganz so als würde diese(r) per Hand bedient.
    - &nbsp;<Keys.SoftKey>Item</Keys.SoftKey> ist hingegen die softwareseitige/logische Zuordnung 
      („Palette 43", „Playback 91"), wobei die konkrete Funktion separat zu wählen ist.
4. Betätigen Sie nun das zu steuernde Element des Pultes (Fader, Taste, Schaltfläche); das gewählte Element wird am Bildschirm angezeigt. Wurde vorher <Keys.SoftKey>Item</Keys.SoftKey> gewählt, lassen sich mit <Keys.SoftKey>Action</Keys.SoftKey> noch verschiedene Aktionen bestimmen: 
    - Set Level (Playback auf den Level des Triggers setzen - s.u. zur Erklärung von *Level Match*)
    - Fire At Level (wie Set Level, aber ohne Level Match, sowie mit 'Kill at 0' bei Cuelisten)
    - Re-Fire at Level (jede Pegeländerung sorgt für ein Aktualisieren/Neustarten der LTP-Werte)
    - Flash (wie die Flash-Taste)
    - Swop (wie die Swop-Taste)
    - Preload (startet nur die LTP-Werte)
    - Latch (schaltet das Playback ein/aus)
    Die Option <Keys.SoftKey>Level Match</Keys.SoftKey> bestimmt, was passiert, wenn das Playback
    vorher bereits gestartet ist. Ist sie eingeschaltet (**On**), so muss der
    aktuelle Pegel per Trigger übernommen werden, damit er aktiv wird. Ist
    die Option dagegen ausgeschaltet (**Off**), so wirkt der Trigger immer, 
    auch bei anderen Pegeln.
5.  Klicken Sie <Keys.SoftKey>OK</Keys.SoftKey>.
6.  Nun muss der vorher definierten Pult-Aktion ein Steuerimpuls
zugeordnet werden. Wählen Sie also die Art der Steuerung - Audio, DMX,
GPIO, MIDI oder Streaming ACN - mit <Keys.SoftKey>Trigger Type</Keys.SoftKey>.
7.  Senden Sie nun den gewünschten Steuerimpuls (Stimulus): drücken Sie z.B. die gewünschte Taste auf Ihrem MIDI-Keyboard, oder aktivieren Sie den entsprechenden Kanal auf dem externen DMX-Pult. Ist die Option <Keys.SoftKey>Learn</Keys.SoftKey> aktiviert, erkennt das Pult automatisch den Steuerimpuls und ordnet ihn zu. Alternativ lassen sich die Daten manuell eingeben,
    - Für Audiotrigger gibt es die Option <Keys.SoftKey>Band</Keys.SoftKey>, mit der das 
    Frequenzband bestimmt werden kann; siehe [Audio Control](./midi-dmx-or-audio-triggering.md#audio-trigger-sound-to-light)
    - Falls Sie DMX verwenden möchten, stellen Sie mit <Keys.SoftKey>DMX Port</Keys.SoftKey> 
    den verwendeten DMX-Anschluss ein. Sobald ein DMX-Anschluss zum
    Triggern verwendet wird, wechselt er in die Betriebsart Rx 
    (Empfangen). Soll er wieder als Ausgang benutzt	werden, so 
    weisen sie ihn in den [DMX-Einstellungen](../system-settings/dmx-output-mapping.md) wieder entsprechend zu.
    Auch die DMX-Adresse kann auch manuell eingestellt werden.
    - Für GPIO kann mit <Keys.SoftKey>Invert</Keys.SoftKey> zwischen Öffnern und Schließern
    umgeschaltet werden.
    Mit <Keys.SoftKey>Pin</Keys.SoftKey> kann bei künftigen Pulten der Pin des GPIO-Anschlusses gewählt werden.
    - Für MIDI-Trigger kann man den MIDI-Kanal, den MIDI-Befehl, den Wert sowie den Bereich für die Velocity wählen.
    - Für sACN ist das <Keys.SoftKey>Universe</Keys.SoftKey> und die <Keys.SoftKey>Adresse</Keys.SoftKey> einzustellen.
8.  Klicken Sie <Keys.SoftKey>Add</Keys.SoftKey>, um den Trigger hinzuzufügen.
9.  Im Bildschirm wird die gewählte Zuordnung angezeigt.

Fügen Sie auf die gleiche Weise weitere Trigger hinzu.

![Triggers Window with MIDI triggers](/docs/images/Triggers-Window-with-MIDI-triggers.png)

Zum Löschen eines Triggers aus der Zuordnung wählen Sie diesen und
betätigen die Schaltfläche mit dem <Keys.ContextKey>Papierkorb</Keys.ContextKey> *rechts unten*.

Zum Löschen einer kompletten Zuordnungs-Tabelle (Mapping) wählen Sie
diese und betätigen die Schaltfläche mit dem <Keys.ContextKey>Papierkorb</Keys.ContextKey> *links
unten*.

Die Trigger-Aktion "Re-Fire At Level" sorgt dafür, dass das jeweilige
Playback bei jeder Änderung des Trigger-Pegels neu gestartet wird und
die LTP-Werte aktualisiert werden. Macht dieses Playback z.B. die Geräte
rot und ein anderes diese weiß, so sorgt ein Triggern mit 'Re-Fire'
dafür, dass die Geräte immer wieder rot werden, während ein Triggern
ohne 'Re-Fire' nur den Pegel setzt, die Lampen aber weiß lässt.

### Einrichten eines MIDI Faderboards mit dem T2

Ein USB-MIDI-Faderboard wird wie folgt mit dem T2 verbunden: schließen
Sie es per USB and den PC an, auf dem die Titan-Software läuft, und
stellen Sie sicher, dass es ordnungsgemäß in Windows funktioniert (die
MIDI-Werte kann man u.a. mit der Software MIDI-Ox überprüfen).

1.  Öffnen Sie das **System**-Menü mit <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey> und 
    wählen Sie <Keys.SoftKey>Triggers</Keys.SoftKey>.
2.  Fügen Sie links mit dem Button <Keys.ContextKey>+</Keys.ContextKey> eine neue
    Trigger-Zusammenstellung (Mapping) hinzu und geben Sie ihr einen
    passenden Namen, z.B. 'T2 Playbacks'.
3.  Fügen Sie nun rechts mit dem Button <Keys.ContextKey>+</Keys.ContextKey> oder mit der Menütaste
    <Keys.SoftKey>Add Trigger</Keys.SoftKey> einen neuen Trigger hinzu -- dieser wird als Trigger
    Type: Hardware angelegt.
4.  Bewegen Sie den ersten Fader in Titan Go.
5.  Klicken Sie auf <Keys.SoftKey>OK</Keys.SoftKey>.
6.  Bewegen Sie nun den ersten Fader des MIDI-Controllers. Titan
    empfängt die empfangenen Werte und zeigt das durch eine Pegelanzeige an.
7.  Klicken Sie auf <Keys.SoftKey>Add</Keys.SoftKey>. In der rechten Spalte wird wird der neu
    angelegte Trigger angezeigt.
8.  Wiederholen Sie den Vorgang ab Schritt 3 für weitere Fader.

## MIDI Show Control

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

Playbacks/Cues werden durch die Benutzernummer identifiziert, diese wird
über <Keys.SoftKey>Set Legend</Keys.SoftKey><Keys.SoftKey>User Number</Keys.SoftKey> eingestellt.

Geräte mit MIDI Show Control werden durch eine Geräte-ID (device id)
identifiziert. Zum Einstellen der Geräte-ID des Titan-Pultes dient die
[Benutzereinstellung <Keys.SoftKey>Timecode</Keys.SoftKey><Keys.SoftKey>MIDI Device Id</Keys.SoftKey>](../system-settings/user-settings.md#midi-device-id). Vorgabewert ist 0.

## Audio-Trigger (Sound to Light)

Bei Pulten, die das unterstützen (momentan: Quartz und Arena), gibt es
einen separaten Audio-Eingang. Das dort anliegende Signal wird in
verschiedene Frequenzbänder geteilt, die einzeln als Trigger verwendet
werden können. Mit der Option <Keys.SoftKey>Band</Keys.SoftKey> lässt sich das verwendete
Frequenzband bestimmen.

  Band	| Sound frequency
  ------|---------------------------
	1	| 50Hz
	2	| 140Hz
	3	| 380Hz
	4	| 875Hz
	5	| 2400Hz
	6	| 6200Hz
	7	| 14000Hz

Zur genauen Einstellung dient das Arbeitsfenster 'Audio Trigger', welches
auch die einzelnen Pegel anzeigt.

![Audio Window](/docs/images/Audio-Window.png)

Ist die erforderliche Hardware nicht vorhanden, so wird eine entsprechende
Warnung angezeigt, [siehe oben](./midi-dmx-or-audio-triggering.md#).

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
auf die Schaltfläche <Keys.SoftKey>Band x</Keys.SoftKey> oben klickt und dann das zu triggernde
Playback auswählt.

Auf dem Arena und Quartz zeigt die Audio-LED beim Netzschalter etwa 
anliegendes Audio-Signal durch Blinken an. Die Kopfhörer-Buchse ist 
dagegen mit dem Kopfhörerausgang des Motherboards und nicht mit dem 
Eingang verbunden, kann also nicht zur Kontrolle genutzt werden.
