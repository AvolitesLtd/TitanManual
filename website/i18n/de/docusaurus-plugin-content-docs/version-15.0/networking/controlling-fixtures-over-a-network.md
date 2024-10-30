---
id: controlling-fixtures-over-a-network
title: Steuern von Geräten über Netzwerk
sidebar_label: Steuern von Geräten über Netzwerk
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Bevor das Pult mit anderen Geräten über ein Netzwerk kommunizieren kann,
muss es eine eindeutige Netzwerkadresse bekommen; diese wird
'IP-Adresse' genannt.

## Einstellen der IP-Adresse des Pultes

Es wird empfohlen, die integrierte Adressvergabe des Pultes zu
verwenden. Alternativ kann aber auch manuell eine Adresse vergeben werden.
Siehe [Einstellen der IP-Adresse](a-quick-guide-to-ip-addressing.md#einstellen-der-ip-adresse) mit
Details zur IP-Adressierung.

1. Öffnen Sie das **System**-Menü (mittels <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>)
und drücken Sie	<Keys.SoftKey>Network Settings</Keys.SoftKey>.
2. Drücken Sie <Keys.SoftKey>Local Area Connection</Keys.SoftKey>. Manche Pult verfügen über mehrere
Netzwerkanschlüsse - wählen Sie also hier den betreffenden aus.
3. Überprüfen Sie, dass <Keys.SoftKey>Subnet Mask</Keys.SoftKey> auf `255.255.255.0` steht.
4. Drücken Sie <Keys.SoftKey>Set IP `2.*.*.*`</Keys.SoftKey>.
5. Betätigen Sie <Keys.SoftKey>Save settings</Keys.SoftKey>.
6. Verlassen Sie das System-Menü mit <Keys.HardKey>Exit</Keys.HardKey>.

- Einige Geräte haben möglicherweise feste IP-Adressen aus dem Bereich `2.*.*.*` oder `10.*.*.*` - 
in diesem Fall muss auch die Adresse des Pultes in diesem Bereich liegen.

- Benötigen Sie eine Adresse aus einem anderen Adressbereich, so drücken Sie 
auf <Keys.SoftKey>IP Address = ... </Keys.SoftKey> und geben die Adresse mit den Zifferntasten ein.

## Einrichten der DMX-Ausgänge

Das Pult arbeitet intern mit max. 64 DMX-Universen (16 direkt im Pult,
bis zu 64 mit TitanNet), die einzeln auf die DMX-Buchsen sowie über
Netzwerk-Knoten geroutet werden können. Der T1 ist auf ein, der T2 auf
zwei Universen beschränkt. Die einzelnen Linien können sowohl über die
DMX-Anschlüsse als auch [über Netzwerk](../networking/controlling-fixtures-over-a-network.md) ausgegeben werden.

Die Zuordnung interner DMX-Linien zu Netzwerklinien erfolgt im Menü
[DMX Settings](../system-settings/dmx-output-mapping.md#configuring-dmx-outputs).
Oft wird man einfach Linie 1 auf Netzwerk-Universum 1, Linie 2 auf Universum 2 etc.
zuweisen, aber mitunter - etwa auf Tour zur Anpassung an das vorhandene
Netzwerk - sieht das auch ganz anders aus.

## Beispiel für ein einfaches Art-Net-System

Es gibt hauptsächlich zwei Systeme zur Übertragung von Licht-Steuersignalen
über Netzwerk: Art-Net und sACN. Titan unterstützt beide Protokolle.
In diesem Abschnitt wird die Einrichtung eines Art-Net-Systems erläutert.

Art-Net ist kein gerätespezifisches Protokoll, sondern wird von einer
wachsenden Anzahl von Herstellern anerkannt und in immer mehr Produkte
integriert. Viele Geräte (etwa Dimmer oder Bewegungsscheinwerfer) können
direkt per Art-Net verbunden werden, so dass kein separater Konverter
erforderlich ist. Benötigt man hingegen 'normales' DMX, so kann dies
über spezielle Art-Net-DMX-Konverter (oft als **Node** bezeichnet)
realisiert werden.

Im nachstehenden Schema ist exemplarisch ein Art-Net-fähiges Pult (wie
etwa ein Titan-Pult) über einen Netzwerk-Switch mit einem Art-Net-fähigen
Dimmer und einem Konverter verbunden.

![Art Net Explanation general](/docs/images/Art-Net-Explanation-general.jpeg)

Sobald das System entsprechend verkabelt ist, müssen die
Geräte (Knoten, Nodes) konfiguriert werden.

-   Am Dimmer stellen Sie die Startadresse 1.001 ein (Universum 1, Adresse 1).

-   Den Konverter/Node stellen Sie so ein, dass er ab Universum 2 arbeitet;
	handelt es sich z.B. um einen Koverter mit 12 Universen, so wandelt er
	die Universen 2 bis 13 von Art-Net zu DMX.

Im Menü [DMX Settings](../system-settings/dmx-output-mapping.md#configuring-dmx-outputs)
ordnen Sie die internen Linien den verschiedenen Art-Net-Universen (1-256) zu.
Dabei kann jede interne Linie auf mehrere Art-Net-Universen sowie auch parallel
auf die DMX-Ausgänge des Pultes geroutet werden.

Ist alles ordnungsgemäß eingerichtet, sollten der Dimmer und der Node als
verfügbare Ausgabegeräte auf der linken Seite des DMX-Settings-Fensters
auftauchen. Dabei zeigen Sie auch an, welches Universum sie verarbeiten.

Im Beispiel erfolgt die Zuordnung daher wie folgt:

-   Klicken Sie links auf das erste Universum des Dimmers, und danach rechts
	auf Linie 1.

-   Klicken Sie links auf das erste Universum des Nodes, und danach rechts
	auf Linie 2.

-   Klicken Sie links auf das zweite Universum des Nodes, und danach rechts
	auf Linie 3.


![Art Net Explanation Nodes to DMX](/docs/images/Art-Net-Explanation-Nodes-to-DMX.jpeg)

Beim Patchen in Titan geben Sie nun dem Dimmer die Adresse 1.001 - 1.024. Geräten
auf der ersten Linie des Nodes geben Sie die Adresse 2.001 - 2.512, Geräten
auf der zweiten Linie des Nodes geben Sie die Adresse 3.001 - 3.512.

-   Für weitere Art-Net-Einstellungen klicken Sie auf das kleine <Keys.ContextKey>Zahnrad</Keys.ContextKey>
	beim Art-Net-Modul. Im Abschnitt [Art-Net-Einstellungen](../system-settings/dmx-output-mapping.md#art-net-eigenschaften)
	werden diese genauer erklärt.

Als mögliche Art-Net-Geräte werden ggf. auch "Unpolled" oder
"Unknown" angezeigt:

-   Unpolled, bzw. 'nicht abgefragt', sind zusätzliche Linien für Geräte
    mit mehr als 4 Linien: die Art-Net-Spezifikation sieht nur 4
    Linien vor, die jedes Gerät als verfügbar anzeigen darf, deshalb
    lassen sich weitere Linien im Pulte eben als 'nicht abgefragt'
    anzeigen und dann auch normal zuweisen.

-   Ein unbekanntes Gerät (unknown) ist hingegen ein Gerät, welches
    seine Art-Net-Möglichkeiten nicht bekanntmacht; das Pult weiß
    daher nicht, ob es ein Eingangs- oder Ausgangsknoten ist.

## Weiterführende Informationen zu Art-Net

Für weitere Informationen zum Thema Art-Net ziehen Sie am besten den
Art-Net-Standard, veröffentlicht von der Firma [Artistic Licence](http://www.artisticlicence.com), heran.
