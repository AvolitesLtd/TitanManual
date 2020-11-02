---
id: version-13.0-connecting-the-arena-to-a-network
title: Connecting the Arena to a network
sidebar_label: Connecting the Arena to a network
original_id: connecting-the-arena-to-a-network
---

Anders als die anderen Titan-Pulte verfügt das Arena über einen
integrierten Netzwerkswitch und einen optischen Netzwerkschluss
(optional: zwei). **Dieser Abschnitt gilt nur für das Arena!**

Optische Anschlüsse
-------------------

Der optische Netzwerkanschluss ist ein Neutrik opticalCon DUO mit
Multimode Glasfaser; auf Nachfrage kann ein zweiter Anschluss eingebaut
werden. Bühnenseitig empfiehlt sich ein Avolites TitanNet Switch (TNS),
welcher wiederum RJ45, also gewohnter Netzwerkanschlüsse, bereitstellt.
Sollen andere Glasfaserkonverter verwendet werden, halten Sie bitte mit
Avolites Rücksprache.

RJ45-Netzwerk-Anschlüsse
------------------------

Das Arena verfügt über einen integrierten Netzwerkswitch, der direkt mit
Netzwerkanschluss 1 des Motherboards verbunden ist. Der Switch stellt
vier Ethernet-Ports auf der Rückseite des Pultes bereit

Netzwerkanschluss 2 des Motherboards ist auf einer separaten Buchse auf
der Pultrückseite herausgeführt (Secondary Ethernet). Es empfiehlt sich,
immer über die Switch-Ports zu arbeiten, und den zweiten Port nur zu
verwenden, wenn man parallel in verschiedenen Netzwerken arbeitet, etwa
eins für die Show, ein anderes zur Datensicherung oder Dokumentation.

Netzwerkswitch und dessen Controller haben zwei aufeinander folgende
IP-Adressen: Wird der Controller auf eine Adresse gesetzt (z.B.
`10.19.0.50`), so erhält der Switch die folgende Adresse (im Beispiel
`10.19.0.51`).

Ändern der IP-Adresse des Netzwerk-Switchs
------------------------------------------

Die IP-Adressen des Netzwerkswitchs und Controllers müssen normalerweise
nicht geändert werden, es sei denn, es besteht ein Konflikt mit anderen
Geräten im Netzwerk. Der Vorgabewert ist `10.19.aa.bb`, wobei sich `aa.bb` 
aus der Seriennummer des Pultes ergibt *(so ist z.B. `10.19.01.124` aus der 
Seriennummer **379** abgeleitet: 01 steht für 255, und 255+124 = 379)*.

Um die IP-Adresse des Switchs zu ändern:

1. Öffnen Sie im **Tools**-Menü, **Control Panel**, die **USB-Expert-Console**.

2. Wählen Sie das TitanNet Switch Panel.
![USB Expert Tools - TNS Panel](/docs/images/USB-Expert-Tools-TNS-Panel.png)

3. Im angezeigten **IP Address Dialog** geben Sie die neue IP-Adresse ein.
![USB Expert Tools - TNS Panel - IP Address Dialog](/docs/images/USB-Expert-Tools-TNS-Panel-IP-Address-Dialog.png)

Stromversorgung und USV 
-----------------------

Der Netzwerkswitch ist mit der gleichen unterbrechungsfreien
Stromversorgung verbunden wie das Pult selbst. Fällt also die
Netzspannung aus, wird der Switch weiter versorgt.

Wird das Pult heruntergefahren, so erhält der Switch für etwa 5 Minuten
weiter Versorgungsspannung, um etwa auch während eines Neustarts des
Pultes keine Unterbrechung hervorzurufen (z.B. wenn ein Backup-Pult
vorhanden ist).


