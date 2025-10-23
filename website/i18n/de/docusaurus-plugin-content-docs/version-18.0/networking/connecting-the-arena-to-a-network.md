---
id: connecting-the-arena-to-a-network
title: Pulte im Netzwerk betreiben
sidebar_label: Pulte im Netzwerk betreiben
---

Alle Lichtpulte von Avolites können per Ethernet vernetzt werden, um Geräte per Art-Net oder sACN zu steuern, für den Mehrbenutzerbetrieb und Fernsteuerung, und zum Anschluss an Visualisierungslösungen. 

Das T1, T2 und T3 werden jeweils mit einem PC betrieben. Zum Vernetzen muss dieser in das jeweilige Netzwerk eingebunden werden. (WLAN ist für die Steuerung von Geräten nicht zu empfehlen, da es zu Aussetzern und Verzögerungen kommen kann).

Die größeren Pulte verfügen jeweils über einen oder zwei Netzwerkanschlüsse.

Das D9, D7 und das Arena verfügen anders als die anderen Titan-Pulte über einen
integrierten Netzwerkswitch und (nur D9 und Arena) einen optischen Netzwerkschluss. **Dieser Abschnitt gilt nur für das Diamond 9, Diamond 7 und für Arena-Pulte!**

> Für das genaue Einrichten des Pultes für den Netzwerkbetrieb, das korrekte Vergeben von IP-Adressen und das Patchen von Geräten im Netzwerk siehe nächstes Kapitel.

## Optische Anschlüsse (D9 und Arena)

Der optische Netzwerkanschluss ist ein Neutrik opticalCon mit
Multimode Glasfaser. Das Arena ist mit einem einzelnen opticalCon DUO ausgestattet, auf Nachfrage 
kann ein zweiter Anschluss eingebaut werden. Das Diamond 9 kommt mit einem opticalCon QUAD, bei dem 
normalerweise ein Fasernpaar belegt ist. Mit der Zusatzoption 10GbE wird das zweite Paar Fasern belegt.

Bühnenseitig empfiehlt sich ein Avolites TitanNet Switch (TNS),
welcher wiederum RJ45, also gewohnter Netzwerkanschlüsse, bereitstellt.
Sollen andere Glasfaserkonverter verwendet werden, halten Sie bitte mit
Avolites Rücksprache.

## RJ45-Netzwerk-Anschlüsse

Beim Diamond 9 ist ein 1Gb Luminex Netzwerkswitch integriert, das Diamond 7 und das Arena verfügt über einen 
integrierten 1Gb TitanNet Switch (TNS). Dieser ist jeweils direkt mit
Netzwerkanschluss 1 des Motherboards verbunden. Der Switch stellt
vier Ethernet-Ports auf der Rückseite des Pultes bereit.

Netzwerkanschluss 2 des Motherboards ist auf einer separaten etherCON-Buchse auf
der Pultrückseite herausgeführt (Secondary Ethernet). Es empfiehlt sich,
immer über die Switch-Ports zu arbeiten, und den zweiten Port nur zu
verwenden, wenn man parallel in verschiedenen Netzwerken arbeitet, etwa
eins für die Show, ein anderes zur Datensicherung oder die Remote. Stellen Sie sicher, dass die IP-Adresse dieses 
Ports nicht im Adressbereich des Switches liegt, da dies sonst zu Problemen führen kann.

Das Diamond 9 kann optional für die Verwendung von 10GbE ausgestattet werden.

## Ändern der Einstellungen des Luminex-Switches im D9

Normalerweise müssen die Einstellungen des Luminex-Switches nicht geändert werden. Sollte dies wegen eines komplexen Netzwerks doch einmal nötig sein, so dient dazu die Araneo-Software von Luminex (externer Link):
[https://luminex.be/products/software/araneo/](https://luminex.be/products/software/araneo/)

>  Beim D9 kann der Luminex-Switch auf Werkseinstellungen zurückgesetzt werden, indem die Reset-Taste neben den
vier etherCON-Anschlüssen für 5 Sekunden gedrückt wird. Die LEDs blinken daraufhin rot, und der Switch wird auf 
seine ursprüngliche IP-Adresse zurückgesetzt (siehe Aufkleber innen im Pult).

## Ändern der IP-Adresse des Titan Network Switch (TNS) beim D7 oder Arena

Beim Arena haben Netzwerkswitch und dessen Controller zwei aufeinander folgende
IP-Adressen: Wird der Controller auf eine Adresse gesetzt (z.B.
`10.19.0.50`), so erhält der Switch die folgende Adresse (im Beispiel
`10.19.0.51`).

Beim D7 hat der Netzwerkswitch nur eine IP-Adresse.

Normalerweise müssen die IP-Adressen des Netzwerkswitchs und Controllers 
nicht geändert werden, es sei denn, es besteht ein Konflikt mit anderen
Geräten im Netzwerk. Der Vorgabewert ist `10.19.aa.bb`, wobei sich `aa.bb` 
aus der Seriennummer des Pultes ergibt *(so ist z.B. `10.19.01.124` aus der 
Seriennummer **379** abgeleitet: 01 steht für 255, und 255+124 = 379)*.

Um die IP-Adresse des Switchs zu ändern:

1. Öffnen Sie im **Tools**-Menü, **Control Panel**, die **USB-Expert-Console**.

2. Wählen Sie das TitanNet Switch (TNS) Panel.
![USB Expert Tools - TNS Panel](/docs/images/USB-Expert-Tools-TNS-Panel.png)

3. Im angezeigten **IP Address Dialog** geben Sie die neue IP-Adresse ein.
![USB Expert Tools - TNS Panel - IP Address Dialog](/docs/images/USB-Expert-Tools-TNS-Panel-IP-Address-Dialog.png)

## Stromversorgung und USV 

Der Netzwerkswitch ist mit der gleichen unterbrechungsfreien
Stromversorgung verbunden wie das Pult selbst. Fällt also die
Netzspannung aus, wird der Switch weiter versorgt.

Wird das Pult heruntergefahren, so erhält der Switch für etwa 5 Minuten
weiter Versorgungsspannung, um etwa auch während eines Neustarts des
Pultes keine Unterbrechung hervorzurufen (z.B. wenn ein Backup-Pult
vorhanden ist).


