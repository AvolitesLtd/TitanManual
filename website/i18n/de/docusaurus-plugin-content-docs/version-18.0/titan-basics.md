---
id: titan-basics
title: Anschließen des Pultes, erste Schritte
sidebar_label: Anschließen des Pultes, erste Schritte
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

In diesem Abschnitt wird das Anschließen des Pultes sowie die
grundlegende Bedienung erläutert.

> Funkgeräte können die Funktion des Pultes stören. Es wird empfohlen, solche Geräte nicht unmittelbar auf, neben oder beim Pult zu verwenden oder abzulegen. Vielmehr sollten sie etwa in einer Tasche oder am Gürtel getragen werden.


## Netzanschluss

Die Pulte funktionieren mit Netzspannung im Bereich von 80 bis 260 V.

Möglicherweise ist Ihr Pult mit einer internen USV (unterbrechungsfreien
Stromversorgung) ausgestattet. Wenn nicht, empfiehlt sich die Verwendung
einer externen USV, die im Computerfachhandel bezogen werden kann. Bei
plötzlichem Verlust der Netzspannung kommt es normalerweise zu
Datenverlust (bis zum letzten Speicherpunkt), und beim Wiedereinschalten
des Pultes werden die Festplatten überprüft, was zu Verzögerungen führt.
Eine USV hingegen bietet Schutz gegen die meisten mit dem Strom
verbundenen Probleme, und gibt einem die Zeit, um das Pult geordnet
herunterzufahren.

Ist Ihr Pult mit einer internen USV ausgestattet (Diamond 9, Diamond 7, Sapphire 
Touch, Arena, Tiger Touch II, sowie optional andere Modelle), so wird bei
Unterbrechung der Stromversorgung dies im Bildschirm angezeigt sowie die
Zeit, die zum Herunterfahren des Pultes noch verbleibt. Außerdem wird
eine Warnung angezeigt, sowie der aktuelle Stand der Show gespeichert.
Dazu wird die Toolbar orange und es wird angezeigt (nicht auf dem D9 und D7), 
wie lange das Pult noch bis zum automatischen Herunterfahren läuft.

![UPS Toolbar](/docs/images/UPS-Toolbar.png)

-   Unmittelbar vor dem Herunterfahren des Pultes wird diese Anzeige
    schließlich rot.
-   Wenn ein Pult oder TNP in der Session auf USV läuft, wird das in den
	Logs vermerkt.

&nbsp;**Nur beim Diamond 9, Diamond 7 und Arena:** Der Netzwerk-Switch im Pult verfügt über eine
eigene USV, so dass das Pult auch kurz abgeschaltet werden kann, ohne den
Betrieb des Switches zu beeinträchtigen. Nach kompletter Trennung vom
Netz oder Ausschalten des Pultes läuft der Switch noch für etwa 5 Minuten weiter. Dies ist wichtig,
wenn dieser Switch auch andere Geräte mit Signal versorgt, das Pult 
selbst jedoch abgeschaltet oder neu gestartet werden muss. 

## Einschalten und Ausschalten

Die Pulte arbeiten mit Windows als Betriebssystem, daher sollte man dies
jeweils ordnungsgemäß herunterfahren, anstatt einfach nur die
Netzspannung abzuschalten.

Das **Starten** erfolgt durch kurzes Betätigen (und wieder Loslassen)
des Hauptschalters rechts neben dem Touchscreen. Das Display sowie der
optionale externe Bildschirm zeigen den Startprozess. Das Arena benötigt
etwa 1:30 min für das Starten.

Das **Ausschalten** des Pultes erfolgt ebenso durch kurzes Betätigen
(und wieder Loslassen) des Hauptschalters. Daraufhin erfolgt ein
ordnungsgemäßes Herunterfahren. Bitte mit dem Trennen vom Netz warten,
bis die Anzeige 'Power' erloschen ist (etwa 30 sec.)

> Benutzen Sie nicht den Netzschalter auf der Rückseite des Pultes. Beim Betätigen dieses Schalters würde das Pult nicht geordnet heruntergefahren werden, und sämtliche Änderungen der Show gingen verloren.

## Herunterfahren erzwingen

Zum **erzwungenen Ausschalten** - wenn das normale Ausschalten nicht
funktioniert - ist der Hauptschalter für 5 Sekunden gedrückt zu halten.
Dabei gehen sämtliche Änderungen seit dem letzten Speichern verloren.

&nbsp;**Pulte mit USV:** Aufgrund der integrierten USV kann man zum harten
Resetten nicht einfach den Netzstecker ziehen. Drücken Sie dazu bei
abgezogenem Netzstecker den Schalter "Battery Disconnect", um auch die
USV zu unterbrechen (beim Arena: Rückseite; beim Tiger Touch 2/Sapphire
Touch: unter der linken Seitenwange).

&nbsp;**Achtung beim Diamond 9, Diamond 7 und beim Arena**: dabei wird auch der integrierte Switch
abgeschaltet. Das ist besonders wichtig, wenn über diesen Switch ein
Backup-Pult angeschlossen ist! Wird das Pult normal heruntergefahren,
so bleibt der Switch aufgrund seiner USV noch etwa 5 Minuten
eingeschaltet.

## Inbetriebnahme von T3/Titan Mobile und T1/T2

Verbinden Sie das T3/Titan Mobile bzw. den T1/T2 erst mit Ihrem Computer,
wenn Sie die **Titan PC-Suite** installiert haben. Zur Installation führen Sie
einfach das Installationsprogramm aus; damit werden auch alle
erforderlichen Treiber installiert.

> Ab Titan v14 wird Windows 10 64 Bit vorausgesetzt. Ältere Versionen 
sowie virtuelle Maschinen werden nicht unterstützt. Empfohlen wird 
mindestens ein i5 der 5. Generation mit 4 GB RAM. Auf [https://avolites.com/titan-pc-system-requirements](https://avolites.com/titan-pc-system-requirements/) gibt es weitere Angaben zu den Systemvoraussetzungen.

Es empfiehlt sich die Verwendung eines Touchscreens. Ist ein solcher
nicht vorhanden, klicken Sie mit der Maus auf die entsprechenden
Buttons.

Für den Betrieb von Titan Mobile, Titan One und dem Titan Simulator gibt
es ein einheitliches Software-Paket: die **Avolites Titan PC-Suite**.
Diese enthält alle genannten Programme.

### T3/Titan Mobile

Sobald die Titan PC-Suite installiert ist, können Sie das
T3 bzw. Titan Mobile per USB-Kabel mit Ihrem PC verbinden (sollte das Pult über
zwei USB-Buchsen verfügen, so ist nur die obere zu verwenden). Der PC
erkennt daraufhin neue Hardware; bei den entsprechenden Rückfragen
wählen Sie ‚Software automatisch installieren'. Bei älteren Titan
Mobiles, die keinen AvoKey enthalten, ist ein separater AvoKey
erforderlich und muss parallel zum Titan Mobile an einer weiteren
USB-Buchse angeschlossen sein.

Beim T3, sowie bei neueren Titan Mobiles, ist ein AvoKey bereits eingebaut und auch bereits lizenziert. Damit können diese ohne weitere Lizenzierung an jedem Computer mit der Titan PC-Suite betrieben werden, wobei die Software unbedingt einen AvoKey - oder eben ein T3 oder Titan Mobile - benötigt, um zu starten. Siehe [Software-Lizenzierung](./system-settings/recovering-reinstalling-the-console.md#software-lizenzierung) für weitere Details.

- Titan Go erkennt automatisch, ob ein T3 oder ein Titan Mobile verbunden ist, und blendet die kompakte Anzeige der Bedienelemente, wie sie für den T1 und T2 vorgesehen ist, aus. Möchte man diese trotzdem verwenden, so lässt sich das per Benutzereinstellung [Virtual Hardware](system-settings/user-settings.md#display) auf der Seite **Display** umstellen.

**Stromversorgung beim Titan Mobile**: Die Stromversorgung erfolgt über den USB-Anschluss. Optional kann ein
separates Netzteil (9 V Gleichspannung) angeschlossen werden. Für dieses
gelten folgende Spezifikationen: 9-12V Gleichspannung, 800mA;
Steckverbinder, außen 5,5mm, innen 2,5mm, 9,5mm lang; Pluspol auf dem
inneren Kontakt

Bei der ersten Verwendung ist das Titan Mobile und der zugehörige AvoKey
ggf. noch bei Avolites zu [lizenzieren](./system-settings/recovering-reinstalling-the-console.md#software-lizenzierung) (kostenlos), um die Software
verwenden zu können. Die Lizenz wird auf dem (internen oder externen)
AvoKey fest gespeichert und bezieht sich auf das jeweilige Titan Mobile.
Dieses kann also - mit dem entsprechenden AvoKey - ohne weitere
Lizenzierung auch an anderen Computern betrieben werden.

### T1/T2

Der T1 und T2 bieten volle Titan-Funktionalität, sind aber auf ein 
bzw. zwei Universen beschränkt (der T1 kann zudem nicht per MIDI und 
WebAPI gesteuert werden). Zum Betrieb ist die Software Titan Go zu 
starten. Auch der T1/T2 ist bereits ab Werk lizenziert und kann 
mit jedem Computer betrieben werden. 

- Soll der **Titan One** (ältere Version mit Kabel) mit Titan ab Version 12 verwendet werden, so muss 
ein AvoKey parallel dazu per USB angeschlossen sein.

### Windows-Einstellungen für die Titan PC-Suite

Oft haben Windows-PCs ab Werk ein paar Voreinstellungen, die z.B. die USB-Hardware trennen, den Computer in den Ruhezustand versetzen, oder andere Dinge tun, die man während der Show nicht gebrauchen kann. Um unerwünschte Unterbrechungen während der Show zu vermeiden, empfehlen sich bei der Verwendung eines T1/T2/T3 oder Titan Mobile auf einem normalen PC folgende **Windows Systemeinstellungen**:

1. USB Power Saving für das T1/T2/T3/Titan Mobile deaktivieren (im Gerätemanager, Eigenschaften des Geräts)

2. Bildschirm/PC/Festplatte nie deaktivieren (normalerweise einen entsprechenden Energiesparplan wählen oder erstellen)

3. automatische Windows-Updates deaktivieren

4. Indizierung der Festplatte deaktivieren

5. die Firewall deaktivieren

## Titan Healthcheck -- die Eigendiagnose

Bei Start der Titan-Software wird ein Selbsttest ausgeführt, der Titan
Healthcheck. Dieser überprüft das Dateisystem, die Firmware
verschiedener Baugruppen sowie weitere potentielle Fehlerquellen.
Sollten irgendwelche Probleme festgestellt werden, so wird eine
Fehlermeldung ausgegeben mit Hinweisen zur Fehlerbehebung.

![Healthcheck](/docs/images/Healthcheck.png)

Die Fehlerbehebung sollte nur ausgeführt werden, wenn ausreichend Zeit
zur Verfügung steht, da manche Module bis zu einer Stunde benötigen
können.

## DMX anschließen

DMX kann sowohl über die XLR-Buchsen (5-polig) als auch über verschiedene
Netzwerkprotokolle (Art-Net, sACN) ausgegeben werden, um andere
DMX-Ethernet-Nodes, Medienserver und anderes zu steuern,

Beim Patchen eines Dimmers oder Gerätes muss dem Pult mitgeteilt werden,
auf welchem der verfügbaren DMX-Universen sich das Gerät befindet. Jedes
einzelne der Universen kann einem oder mehreren der DMX-Anschlüsse auf
der Rückseite des Pultes zugeordnet, oder aber per [Ethernet (Art-Net, sACN)](networking/controlling-fixtures-over-a-network.md) gesendet werden.

Das D9, D7 und das Arena enthält zusätzlich einen 
internen [Netzwerkswitch](networking/connecting-the-arena-to-a-network.md) mit optischen
Ausgängen (Glasfaser/OpticalCon).

> Beim Starten einer neuen Show werden die DMX-Linien ab 1 aufsteigend den 5-poligen XLR-Buchsen auf der Rückseite des Pultes zugewiesen; wird dagegen eine bestehende Show von einem anderen System geladen, so wird die dort vorgenommene Zuordnung der Linien übernommen, und sollte ggf. überprüft werden.

Die 5-poligen Buchsen sind wie folgt belegt:

  |   Pin #   | Belegung     |
  |     ---   | ---          |
  |   Pin 1   |   Erde       |
  |   Pin 2   |   Daten -    |
  |   Pin 3   |   Daten +    |
  |   Pin 4   |   unbelegt   |
  |   Pin 5   |   unbelegt   |


Jede DMX-Linie ist durch alle Geräte, die mit dieser Linie gesteuert
werden sollen, durchzuschleifen und sollte durch einen
Abschlusswiderstand (120 Ohm zwischen Pin 2 und 3) abgeschlossen werden.
Die Verwendung von passiven Splittern (Y-Splittern) kann zu Datenverlust
führen und sollte vermieden werden.

## Einen Monitor anschließen

Es lässt sich ein (D9, D7 und Sapphire Touch: zwei) externer Monitor anschließen (beim Tiger Touch II und
Pearl Expert: VGA; beim Quartz, Arena, Sapphire Touch: DVI). Damit erhält
man mehr Oberfläche zur Anzeige weiterer Fenster (etwa für den
Visualiser oder das Channel-Grid) sowie - im Falle eines Touchscreens - 
weiterer Steuerelemente. Bei Touchscreens empfehlen sich Modelle, die
zu Windows Touch kompatibel sind, um Probleme durch separate Treiber zu
vermeiden. Bei der Titan PC-Suite (Titan Go/Titan Simulator) ist ein zweiter und dritter Bildschirm
davon abhängig, dass der verwendete Computer dies unterstützt.

Der externe Bildschirm ist standardmäßig deaktiviert, und zeigt das mit
'Disabled' an. Um ihn zu aktivieren, öffnen Sie das System-Menü
(<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>), 
wählen <Keys.SoftKey>Display Setup</Keys.SoftKey>, und drücken <Keys.SoftKey>External Display Disconnected</Keys.SoftKey>. Damit ändert sich die Anzeige auf <Keys.SoftKey>External Display Connected</Keys.SoftKey>, und der Bildschirm wird aktiviert.

Zum Ändern der Bildschirmauflösung oder anderer Monitoreinstellungen
bei den Pulten (nicht bei der PC-Suite) klicken Sie oben auf 'Tools', 
dann auf 'Control Panel' (Systemsteuerung), dann auf 'External Monitor', 
und wählen die passende Auflösung. Bei der Titan PC-Suite erfolgt dies 
über die Windows-Systemsteuerung).

Weitere Details dazu sowie eine Anleitung zur Suche möglicher Fehler
[finden Sie hier](system-settings/external-displays.md).

## Weitere Anschlussmöglichkeiten

Es lassen sich eine USB-Tastatur sowie eine Maus anschließen.
Insbesondere bei der Verwendung eines externen Displays ohne
Touch-Funktion ist eine Maus dringend zu empfehlen, um die Fenster und
Funktionen darauf nutzen zu können (beim Sapphire Touch lässt sich der
Trackball als Maus verwenden).

Stehen nicht genügend USB-Anschlüsse zur Verfügung, so lassen sich diese
durch einen normalen USB-Hub erweitern.

Mittels MIDI (alle Pulte außer Titan One/T1) lassen sich Playbacks triggern
sowie per MIDI-Timecode Cuelisten steuern. Auch USB-MIDI-Geräte können
an das Pult angeschlossen werden. Der T1 kann nicht über MIDI gesteuert werden, 
der T2 ausschließlich über USB-MIDI.

Neuere Pult-Modelle verfügen auch über einen Eingang für SMPTE-LTC-Timecode.

Mittels der Netzwerkbuchse(n) (EtherCON oder RJ-45) lässt sich das Pult in ein
Netzwerk (LAN) integrieren, womit sich viele weitere interessante
Möglichkeiten ergeben, etwa die Ausgabe weitere Universen über
Art-Net/sACN, das Betreiben mehrerer Pulte im Verbund (Backup,
Multiuser) oder die Steuerung des Pultes per App.

Eine oder zwei 3-polige XLR-Buchse ist als Anschluss für eine
Pultleuchte vorgesehen. Die Belegung ist 1-Minus, 2-Plus (12V
Gleichspannung). Ggf. muss die Belegung der verwendeten Pultleuchte
angepasst werden, da es dafür verschiedene Systeme gibt. 

- Bei neueren Pulten lässt sich die Helligkeit der Pultleuchte im 
System-Menü (<Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>) mit den Encodern einstellen.

## Verwenden von Faderwings

"[Wings](./about-the-consoles/fader-wings.md)" bieten zusätzliche 
Bedienelemente wie Fader und Tasten, und sind je nach Einsatzzweck eine 
sinnvolle Ergänzung. Verbunden werden sie mit dem Pult bzw. Computer über USB.

Das Pearl Expert Touch Wing funktioniert ausschließlich mit dem [Pearl Expert](about-the-consoles/pearl-expert-and-touch-wing.md). 
Es ist mit dem Pult zu verbinden, bevor dieses gestartet wird.


