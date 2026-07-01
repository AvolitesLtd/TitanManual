---
id: usb-expert
title: Upgraden der Firmware und Testen der Hardware (USB Expert Console)
sidebar_label: Upgraden der Firmware (USB Expert)
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Von Zeit zu Zeit - anlassbezogen - veröffentlicht Avolites neue Firmware für die verschiedenen Module im Pult. Solche Updates werden normalerweise zusammen mit Software-Updates angeboten, können aber auch separat verfügbar sein.

Dafür gibt es die Software **USB Expert Console** - damit kann man sowohl die Firmware der Panels aktualisieren als auch die Funktion überprüfen sowie ggf. Fehler der Hardware bzw. in der angeschlossenen Peripherie verfolgen.

## Öffnen der USB Expert Console

Öffnen Sie das **Tools-Menü** von der Werkzeugleiste aus, klicken Sie auf **Control Panel** und wählen **USB Expert Console**. Mit der PC-Suite wird die USB Expert Console ebenfalls installiert (für das T1, T2, T3 oder Titan Mobile): rufen Sie die **USB Expert Console** ganz normal aus dem Startmenü auf.

![Start USB Expert from Tools Menu](/docs/images/USB-Expert-Start.png)

Links unter **Connected Panels** wird eine Liste der vorhandenen Panels angezeigt (die vorhandenen Panels sind je nach Pult andere).
Falls diese Liste leer ist, klicken Sie im Menü auf 'Tools', dann auf 'Acw Service', dann auf 'Start'.

> Es kann sein, dass nach dem Softwareupdate automatisch die USB Expert Console geöffnet wird, wenn das Upgrade der Firmware erforderlich ist.

## Anzeige der Panels in USB Expert

Im Bereich **Connected Panels** wird mit einem kleinen Icon neben jedem einzelnen Panel dessen Status angezeigt:

- Ein grüner USB-Icon bedeutet, dass das Panel ordnungsgemäß funktioniert und keine Fehler oder Updates vorliegen (1).
- Liegt für das Panel ein Firmware-Update vor oder ist das Panel zum Programmieren im Boot-Modus, so wird dies durch ein Download-Icon mit einer Uhr angezeigt (2). Führen Sie für dieses Panel ein Update wie im nächsten Kapitel beschrieben aus.
- Panels, bei denen ein Problem erkannt wurde, werden mit einem Ausrufungszeichen auf gelbem Dreieck markiert (3). Führen Sie einen Panel Reset aus. Sollte das nicht helfen, setzen Sie sich mit dem Avolites-Support in Verbindung.
- Wurde ein Panel manuell in den Boot-Modus versetzt, so wird dies durch ein Icon mit Zahnrad und Schraubenschlüssel dargestellt (4). Zum Verlassen des Boot-Modus wählt man das Panel aus und klickt rechts im Reiter 'Service' auf **Exit Boot**.

![USB Expert panel status](/docs/images/USB-Expert-Panel-Status.png)

## Automatisches Updaten der Firmware

Üblicherweise kann die Firmware wie folgt automatisch aktualisiert werden:

1. Öffnen Sie wie oben beschrieben die USB Expert Console.

2. Links unter **Connected Panels** wird eine Liste der vorhandenen Panels angezeigt (die vorhandenen Panels sind je nach Pult andere).
![USB Expert Panel Update](/docs/images/USB-Expert-Panel-Update.png)

3. Klicken Sie nun rechts oben auf den Tab **Service**.

4. In der Box **Auto Update** auf der rechten Seite werden alle Panels aufgeführt, die ein Firmware-Update benötigen. Auch hier hängen die angezeigten Panels vom jeweiligen Pult und vom Softwarestand ab.

5. Sind Updates erforderlich, so klicken Sie auf **Update Now**. Daraufhin werden nacheinander die einzelnen Panels mit neuer Firmware versehen. Im rechten unteren Teil wird der Fortschritt des Updatevorgangs mit einem grünen Balken angezeigt.

6. Sobald die Auto Update-Box leer ist und alle Panels aktualisiert wurden, schließen Sie die USB Expert-Console und starten Sie das Pult neu.

- Sollte das Updaten eines Panels länger als 10 Minuten dauern, so klicken Sie auf **Exit Boot**, woraufhin alle Panels wieder unter **Connected Panels** erscheinen. Wiederholen Sie nun den Vorgang ab Schritt 3, bis alle Panels auf dem neuesten Stand sind.

- Sollte **Update Now** ausgegraut sein oder das Updaten fehlschlagen, so führen Sie einen Panel Reset aus. Sollte auch das nicht helfen, müssen die betreffenden Panels manuell geupdatet werden

## Manuelles Updaten der Firmware

Wird im Bereich 'Auto Update' nichts angezeigt, Sie haben aber eine Firmware-Datei (.bin oder .hex), so können einzelne Panels manuell geupdatet werden.

1. Öffnen Sie wie oben beschrieben die USB Expert Console.

2. Wählen Sie im Bereich **Connected Panels** (links) das Panel aus, das Sie updaten möchten.

3. Klicken Sie rechts auf den Reiter **Service** und dort auf den Button **Enter Boot**.

4. Überprüfen Sie unter **Connected Panels**, dass das Panel in den Boot-Modus gewechselt ist.

5. Klicken Sie rechts auf den Button **Program**.

6. Es öffnet sich ein Fenster zur Auswahl der Datei. Navigieren Sie nach ```C:\Program Files (x86)\Avolites\USB Expert\Panel Software``` (oder zum Verzeichnis der von Ihnen beabsichtigten Datei).

7. Wählen Sie die passende Firmware-Datei aus (siehe [Liste der Firmware-Dateien](#liste-der-firmware-dateien) am Ende dieses Abschnitts).

8. Nach erfolgtem Firmware-Update wechselt das Panel automatisch wieder in den normalen Betriebsmodus. Wollen Sie wechseln, ohne die Firmware upzudaten, klicken Sie auf **Exit Boot**.

## Funktionstest der Panel

In der Mitte zeigt die USB Expert Console die einzelnen Hardware-Ereignisse an. Damit lässt die die korrekte Funktion der einzelnen Bedienelemente überprüfen.

### Testen von Tastern/Schaltern

Wird eine Taste gedrückt/ein Schalter betätigt, so wird dies im mittleren Bereich **Item Events** als ```KeyState: 1``` angezeigt, gefolgt von ```KeyState: 0```, sobald die Taste losgelassen wird. Werden fälschlicherweise Mehrfachbetätigungen angezeigt oder wird die Taste nicht registriert, so liegt wahrscheinlich ein Hardware-Problem vor, und die Taste muss ausgewechselt werden.

![USB Expert Key Test](/docs/images/USB-Expert-Key-Test.png)

### Testen der Fader

Wählen Sie im Bereich **Connected Panels** links das zu überprüfende Faderpanel, und wechseln Sie rechts oben auf den Reiter **Faders**.

![USB Expert Fader Test](/docs/images/USB-Expert-Fader-Test.png)

- Bewegen Sie nacheinander jeden Fader langsam und gleichmäßig. Im mittleren Bereich **Item Events** werden Einträge mit Werten (Value) zwischen 0 und 255 angezeigt.
- Der grüne Balken rechts ändert sich ebenfalls je nach Faderstellung. Die Anzeige sollte nicht flickern oder springen.
- Weder die numerische Anzeige in der Mitte noch der grüne Balken rechts dürfen plötzlich andere Werte annehmen.
- Steht der Fader auf 100%, so muss als Wert 255 angezeigt werden; steht der Fader auf 0%, muss der Wert 0 sein.
- Bewegen Sie jeden einzelnen Fader mehrfach gleichmäßig von 0 auf 100% und wieder auf 0, und beobachten Sie das Verhalten.

Treten Unregelmäßigkeiten auf (springende Werte o.ä.), versuchen Sie, den betreffenden Fader mit Deoxit F5 Fader Cleaner zu reinigen (alternativ: Servisol Super 10; Kontakt Chemie Cleaner 601). Ist das Reinigen des Faders nicht erfolgreich, so muss der Fader getauscht werden.

### Testen der Motorfader

Wählen Sie im Bereich **Connected Panels** links das zu überprüfende Motorfaderpanel, und wechseln Sie rechts oben auf den Reiter **Motors**.

Aktivieren Sie die Checkbox für **Link Faders** und reduzieren Sie für den Test **Speed** auf 30.

![USB Expert Motor Test](/docs/images/USB-Expert-Motor-Test.png)

- Schieben Sie jeden einzelnen **Fader auf dem Bildschirm** (rechts) nach rechts. 
- Alle (Hardware-)Fader müssen gleichmäßig und ruckelfrei den Bildschirmfadern folgen. Sollte die Bewegung ungleichmäßig oder stotternd sein, so könnte der jeweilige Fadermotor defekt sein. Wenden Sie sich in diesem Fall an den Avolites-Support.

### Kalibrieren der Motorfader

Fahren die Fader (z.B. beim Wechseln der Playback-Seiten) auf falsche Werte, so müssen sie kalibriert werden. Wählen Sie im Bereich **Connected Panels** links das zu überprüfende Motorfaderpanel, und wechseln Sie rechts oben auf den Reiter **Motors**. Klicken Sie nun rechts unten auf den Button **Start Calibration** und folgen Sie den Anweisungen auf dem Bildschirm.

![USB Expert Motor Test](/docs/images/USB-Expert-Motor-Calibration.png)

- Stellen sie alle Fader auf 100%
- Klicken Sie auf Next
- Stellen Sie alle Fader auf 0
- Speichern Sie die Kalibrierungsdaten

### Testen der DMX-Panels

Hierzu ist ein DMX-Tester erforderlich, außerdem muss die Titan-Software mit **Shutdown Software** aus dem Tools-Menü beendet werden.

Wählen Sie im Bereich **Connected Panels** links das zu überprüfende DMX-Panel, und wechseln Sie rechts oben auf den Reiter **DMX**.
Schieben Sie nun den Bildschirmfader **Channel Level** nach oben und unten, und überprüfen Sie mit dem DMX-Tester die ausgegebenen Werte.

- Bei Pulten mit 8 DMX-Ausgängen steuert das Panel 'DMX 1' die Ausgänge 1-4, und das Panel 'DMX 2' steuert die Ausgänge 5-8.

![USB Expert DMX Test](/docs/images/USB-Expert-DMX-Test.png)

### Testen der LEDs

Das Testen der LEDs unterscheidet sich etwas je nach jeweiligem Pult.

**T3 und D3**
- Unter **Connected Panels** wählen Sie das T3/D3 Main Board.
- Gehen Sie rechts oben auf den Reiter **Leds**.
- Stellen Sie **End LED value** auf 64.
- Stellen Sie **Binary State** auf On.
- Klicken Sie auf **LED echo**.
- Schieben Sie alle Fader nach oben
- Nun müssen alle Playback-LEDs auf dem Pult aufleuchten.

**Quartz und Titan Mobile**
- Unter **Connected Panels** wählen Sie das Quartz Main Board bzw. Mobile Main Board.
- Gehen Sie rechts oben auf den Reiter **Leds**.
- Stellen Sie **End LED value** auf 56.
- Stellen Sie **Binary State** auf On.
- Klicken Sie auf **LED echo**.
- Schieben Sie alle Fader nach oben
- Nun müssen alle Playback-LEDs auf dem Pult aufleuchten.

**Tiger Touch II**
- Unter **Connected Panels** wählen Sie das Touch Playback Panel 1.
- Gehen Sie rechts oben auf den Reiter **Leds**.
- Stellen Sie **End LED value** auf 20.
- Stellen Sie den Level auf 100%.
- Stellen Sie **End LED value** auf 56.
- Stellen Sie **Binary State** auf On.
- Nun müssen alle Playback-LEDs auf dem Pult aufleuchten.

**Arena**
- Unter **Connected Panels** wählen Sie das Touch Playback Panel 1.
- Gehen Sie rechts oben auf den Reiter **Leds**.
- Stellen Sie **End LED value** auf 20.
- Stellen Sie den Level auf 100%.
- Unter **Connected Panels** wählen Sie das Fader Wing Panel 5.
- Stellen Sie **End LED value** auf 18.
- Stellen Sie den Pegel auf 100% (ggf. muss erst etwas zurückgeregelt werden, bevor der Pegel erhöht wird).
- Unter **Connected Panels** wählen Sie das Arena Auxiliary Panel 1.
- Stellen Sie **End LED value** auf 4.
- Stellen Sie den Pegel auf 100% (ggf. muss erst etwas zurückgeregelt werden, bevor der Pegel erhöht wird).
- Unter **Connected Panels** soll noch immer das Arena Auxiliary Panel 1 angewählt sein.
- Stellen Sie **End LED value** auf 30.
- Stellen Sie **Binary State** auf On.
- Unter **Connected Panels** wählen Sie das Touch II Program Panel 1.
- Stellen Sie **End LED value** auf 56.
- Stellen Sie **Binary State** auf On.
- Nun müssen alle Playback-LEDs auf dem Pult aufleuchten.

**Sapphire Touch**
- Unter **Connected Panels** wählen Sie das Sapphire Program Panel 1.
- Gehen Sie rechts oben auf den Reiter **Leds**.
- Stellen Sie **End LED value** auf 56.
- Stellen Sie **Binary State** auf On.
- Unter **Connected Panels** muss noch immer das Sapphire Program Panel 1 ausgewählt sein.
- Stellen Sie **End LED value** auf 4.
- Klicken Sie auf **Led Colour**, stellen die Farbe auf Rot, und klicken auf OK.
- Stellen Sie den Level auf 100%.
- Unter **Connected Panels** wählen Sie das Sapphire Motor Panel 1.
- Stellen Sie **End LED value** auf 5.
- Stellen Sie den Level auf 100%.
- Nun müssen alle Playback-LEDs auf dem Pult aufleuchten.

**D9**
- Unter **Connected Panels** wählen Sie das Diamond Encoder Panel 2.
- Gehen Sie rechts oben auf den Reiter **Leds**.
- Klicken Sie auf **Led Colour**, stellen die Farbe auf Rot, und klicken auf OK.
- Stellen Sie **Binary State** auf On.
- Nun müssen alle Playback-LEDs auf dem Pult aufleuchten.
- Stellen Sie die Encoder-LEDs mit den horizontalen Reglern ein (step up/down).
- Verändern Sie die Helligkeit der LEDs mit den vertikalen Reglern.
- Wiederholen Sie die Schritte für die Farben Grün, Blau und Weiß.

### Testen der USV-Batterie

Wählen Sie im Bereich **Connected Panels** links das UPS-Panel, und wechseln Sie rechts oben auf den Reiter **UPS**.

- Als Batterie-Status muss **Charging** angezeigt werden. Ist die Batterie voll geladen, so wird ein Strom (current) von 0,02 - 0,05 A angezeigt. Wird die Batterie gerade geladen, so beträgt der Wert 2 - 3 A.
- Wird die Stromversorgung unterbrochen, so wechselt der Status von **Charging** auf einen grünen Balken mit **NoLoad**, um anzuzeigen, dass das Pult gerade auf USV läuft. 

![USB Expert UPS Test](/docs/images/USB-Expert-UPS-Test.png)

### Testen von Timecode

Wählen Sie im Bereich **Connected Panels** links das SMPTE-Panel, und wechseln Sie rechts oben auf den Reiter **Timecode**. Schließen Sie ein Timecode-Signal an. Bei **In Timecode** muss der laufende Wert angezeigt werden.

![USB Expert Timecode Test](/docs/images/USB-Expert-Timecode-Test.png)

### Testen von MIDI

Wählen Sie im Bereich **Connected Panels** links das IO-Panel (bei manchen Pulten das DMX-Panel), wechseln Sie rechts oben auf den Reiter **MIDI**, und klicken Sie auf **Watch MIDI**. Schließen Sie ein MIDI-Gerät an und senden Sie MIDI-Signale. Diese werden im Fenster 'MIDI Watcher' angezeigt.

![USB Expert MIDI Test](/docs/images/USB-Expert-MIDI-Test.png)

## Liste der Firmware-Dateien

Panel | Datei
---|----
**T1 / TitanOne** |
Titan One DMX Panel 1 |	titan_one.bin
**T2** |
T2 DMX 1	| titan_two.bin
T2 SMPTE Panel 1	| N/A
**T3** |
T3 Panel 1	| T3_MB.bin
T3 DMX 1	| N/A
T3 SMPTE 8	| N/A
**Titan Mobile** |
Titan Mobile DMX Panel 1	| N/A
Titan Mobile Panel 1	| m_mb.bin
**TitanNet Processor**	| 
Sapphire SMPTE Panel 1	 | N/A
Sapphire SMPTE Panel 2	 | N/A
Sapphire DMX Panel 1	| st_dmx.bin
Sapphire DMX Panel 2	| st_dmx.bin
DC UPS Panel 2	| dc_ups.bin	
**Quartz**	| 	
Quartz Main Board 1	| qz_mb.bin
Quartz DMX Panel 1	| N/A
Quartz Auxiliary Panel 1	| qz_qab.bin
**Tiger Touch**	| 	
Touch Preset Panel 1	| pt_fas.hex
Touch Playback Panel 1	| pt_mf.hex
Touch Program Panel 1	| pt_pp.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
**Tiger Touch Pro**	| 	
Touch Preset Panel 1	| pt_fas.hex
Touch Playback Panel 1	| pt_mf.hex
Touch Program Panel 1	| pt_pp.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
UPS Panel 1	| ups.bin
**Tiger Touch II**	| 	
Touch Preset Panel 1	| pt_fas.hex
Touch Playback Panel 1	| pt_mf.hex
Touch Program Panel 1	| tt_pp.bin
Sapphire SMPTE Panel 1	| N/A
Sapphire DMX Panel 1	| st_dmx.bin
DC UPS Panel 1	| dc_ups.bin
**Pearl Expert**	| 	
Preset Fader Panel 1	| xp_fas.hex
Preset Fader Panel 2	| xp_fas.hex
Preset Fader Panel 3	| xp_fas.hex
Playback Panel 1	| xp_mf.hex
Program Panel 1	| xp_pp.hex
Screen Panel 1	| xp_scb.hex
Master Panel 1	| xp_mas.hex
Touch Wing Panel 1	| ew_sb.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
**Pearl Expert Pro** |
Preset Fader Panel 1	| xp_fas.hex
Preset Fader Panel 2	| xp_fas.hex
Preset Fader Panel 3	| xp_fas.hex
Playback Panel 1	| xp_mf.hex
Program Panel 1	| xp_pp.hex
Screen Panel 1	| xp_scb.hex
Master Panel 1	| xp_mas.hex
Touch Wing Panel 1	| ew_sb.hex
DMX Panel 1	| xp_dmx.hex
DMX Panel 2	| xp_dmx.hex
UPS Panel 1	| ups.bin
**Arena**	| 	
Sapphire SMPTE Panel 1	| N/A
Sapphire SMPTE Panel 2	| N/A
Sapphire DMX Panel 1	| st_dmx.bin
Sapphire DMX Panel 2	| st_dmx.bin
Arena Auxiliary Panel 1	| ar_asb.bin
Touch Playback Panel 1	| pt_mf.hex
TitanNet Switch Panel 1	| tns_mb.bin
Touch II Program Panel 1	| tt_pp.bin
Tiger Touch Wing 5	| tt_fw.bin
Tiger Touch Wing 6	| tt_fw.bin
**Sapphire Touch**	| 	
Sapphire Motor Panel 1	| st_mb.bin
Sapphire Motor Panel 2	| st_mb.bin
Sapphire Motor Panel 3	| st_mb.bin
Sapphire Motor Panel 33	| st_mb.bin
Sapphire Motor Panel 34	| st_mb.bin
Sapphire Motor Panel 35	| st_mb.bin
Sapphire Motor Panel 36	| st_mb.bin
Sapphire Motor Panel 37	| st_mb.bin
Sapphire Motor Panel 38	| st_mb.bin
Sapphire Program Panel 1	| st_pp.bin
DC UPS Panel 1 	| dc_ups.bin
Sapphire SMPTE Panel 1	| N/A
Sapphire SMPTE Panel 2	| N/A
Sapphire DMX Panel 1	| st_dmx.bin
Sapphire DMX Panel 2	| st_dmx.bin
**Diamond 7 (D7-215)**	| 	
D7 SMPTE Panel 1 | N/A
D7 UPS & Network Switch | N/A
D7 Fader Panel 1	| D7_MOT.bin
D7 Fader Panel 2	| D7_MOT.bin
D7 Fader Panel 3	| D7_MOT.bin
Diamond DMX 1	| D7_DMX.bin
D7 IO 1	| D7_SIO.bin
D7 Display Hub 1	| D7_UDH.bin
D7 Program Panel 1	| D7_PPC.bin
D7 Encoder Panel 1	| D7_ECB.bin
**Diamond 7 (D7-330)**	| 	
D7 SMPTE Panel 1	| N/A
D7 UPS & Network Switch	| N/A
D7 Fader Panel 1	| D7_MOT.bin
D7 Fader Panel 2	| D7_MOT.bin
D7 Fader Panel 3	| D7_MOT.bin
D7 Fader Panel 4	| D7_MOT.bin
D7 Fader Panel 5	| D7_MOT.bin
D7 Fader Panel 6	| D7_MOT.bin
Diamond DMX 1	| D7_DMX.bin
Diamond DMX 2	| D7_DMX.bin
D7 IO 1	| D7_SIO.bin
D7 Display Hub 1	| D7_UDH.bin
D7 Program Panel 1	| D7_PPC.bin
D7 Encoder Panel 1	| D7_ECB.bin
D7 Encoder Panel 2	| D7_ECB.bin
**Diamond 9 (D9-215)**	| 	
Diamond Fader Panel 1	| BB_MOT.bin
Diamond Fader Panel 2	| BB_MOT.bin
Diamond Fader Panel 3	| BB_MOT.bin
Diamond Program Panel 1	| BB_PP.bin
Diamond Softkey Panel 1	| BB_SKB.bin
Diamond Mini Screen 1	| BB_RGB2P2.bin
Diamond Mini Screen 2	| BB_RGB2P2.bin
Diamond Mini Screen 3	| BB_RGB2P2.bin
UPS 24 Panel 1	| BB_UPS.bin
Diamond IO 1	| BB_IO.bin
Diamond SMPTE 1	| N/A
Diamond Encoder Panel 1	| BB_MEB.bin
Diamond Encoder Panel 2	| BB_MEB.bin
Diamond Side Encoders 1	| BB_SKBLR.bin
Diamond Side Encoders 2	| BB_SKBLR.bin
Diamond DMX 1	| BB_DMX.bin
Diamond DMX 2	| BB_DMX.bin
Keyboard Panel 1	| BB_KBD.bin
Diamond Layer Screen 1	| BB_MST4P3.bin
Diamond Layer Screen 2	| BB_MST4P3.bin
Diamond Layer Screen 3	| BB_MST4P3.bin
**Diamond 9 (D9-330)**	| 	
Diamond Fader Panel 1	| BB_MOT.bin
Diamond Fader Panel 2	| BB_MOT.bin
Diamond Fader Panel 3	| BB_MOT.bin
Diamond Fader Panel 4	| BB_MOT.bin
Diamond Fader Panel 5	| BB_MOT.bin
Diamond Fader Panel 6	| BB_MOT.bin
Diamond Program Panel 1	| BB_PP.bin
Diamond Softkey Panel 1	| BB_SKB.bin
Diamond Mini Screen 1	| BB_RGB2P2.bin
Diamond Mini Screen 2	| BB_RGB2P2.bin
Diamond Mini Screen 3	| BB_RGB2P2.bin
UPS 24 Panel 1	| BB_UPS.bin
Diamond IO 1	| BB_IO.bin
Diamond SMPTE 1	| N/A
Diamond Encoder Panel 1	| BB_MEB.bin
Diamond Encoder Panel 2	| BB_MEB.bin
Diamond Encoder Panel 3	| BB_MEB.bin
Diamond Encoder Panel 4	| BB_MEB.bin
Diamond Side Encoders 1	| BB_SKBLR.bin
Diamond Side Encoders 2	| BB_SKBLR.bin
Diamond DMX 1	| BB_DMX.bin
Diamond DMX 2	| BB_DMX.bin
Keyboard Panel 1	| BB_KBD.bin
Diamond Layer Screen 1	| BB_MST4P3.bin
Diamond Layer Screen 2	| BB_MST4P3.bin
Diamond Layer Screen 3	| BB_MST4P3.bin
**T3-Wing**	| 	
T3 Wing 1	| T3_WING.bin
**TM-Wing**	| 	
 ~ | ~	
**TT2-Wing**	| 
Tiger Touch Wing 5	| tt_fw.bin
Tiger Touch Wing 6	| tt_fw.bin
	









