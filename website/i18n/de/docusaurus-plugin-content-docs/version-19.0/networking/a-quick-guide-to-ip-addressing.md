---
id: a-quick-guide-to-ip-addressing
title: Grundlagen der IP-Adressierung
sidebar_label: Grundlagen der IP-Adressierung
---

Jedes Gerät in einem Netzwerk muss eine eindeutige IP-Adresse haben. 
IP-Adressen werden üblicherweise im Format `w.x.y.z` geschrieben, wobei
`w`, `x`, `y` und `z` für Zahlen zwischen 0 und 255 stehen; ein Beispiel wäre
etwa die Adresse `192.168.0.1`. Die Adressen können entweder manuell eingestellt 
(**Statische** IP-Adressen) oder automatisch vergeben werden (**DHCP**). In Licht-Netzwerken
werden meist statische Adressen verwendet: das dauert zwar etwas länger zum Einrichten, 
aber dann hat jedes Gerät immer die richtige Adresse.

Damit sich Geräte im Netzwerk gegenseitig "sehen" können, müssen sie sich im gleichen
**Subnetz** befinden - das ist der erste Teil der IP-Adresse. Bei jedem Gerät muss 
die **Subnetz-Maske** so eingestellt werden, dass sie bei allen Geräten innerhalb 
eines Netzwerks gleich ist, der restliche Teil der IP-Adresse aber muss unterschiedlich sein.

Oft findet man Subnetz-Masken von `255.255.255.0`, die bedeuten, dass die `w`, `x` und `y` Teile
der IP-Adresse gleich sind und die `z`-Adresse bei jedem Gerät anders ist. Wenn z.B. das Lichtpult 
auf `192.168.1.1` gestellt ist, dann wäre das Subnetz `192.168.1.z`, und alle anderen Geräte
hätten Adressen wie `192.168.1.2`, `192.168.1.3` etc.

Wird die IP-Adresse automatisch per DHCP vergeben, so wird auch die Subnetz-Maske automatisch eingestellt.
Subnetz-Masken werden gelegentlich in der Form wie z.B. `/24` oder `/8` geschrieben. Das ist jeweils die 
Anzahl von Bits in der IP-Adresse, die auf 1 stehen. Jeder der Blöcke `w`, `x`, `y` und `z` steht jeweils für 8 Bits. 
Eine Subnetz-Maske von `255.255.255.0` wäre also gleichbedeutend mit `/24`, eine Maske von `255.0.0.0` wäre `/8`. 

## Auswahl der IP-Adresse und Subnetzmaske

Dies ist der komplizierteste Teil bei der Einrichtung eines Netzwerkes,
da hierbei zu berücksichtigen ist, welche Geräte und Protokolle im
Netzwerk verwendet werden, und welche IP-Adressen frei vergeben werden
oder bereits festgelegt sind. manche ältere Art-Net-Geräte sind z.B. auf Adressen im Bereich `2.x.y.z` oder `10.x.y.z` 
festgelegt, so dass auch alle anderen Geräte in diesem Netzwerk so eingestellt werden müssen. Ist das nicht der Fall, 
so verwendet man oft den Adressbereich `192.168.1.x`. 

Im Folgenden sind einige beispielhafte
Szenarien aufgeführt. *Für das Funktionieren kann keine Garantie
übernommen werden, doch wählen Sie als Startwert am besten das Beispiel,
welches Ihrem Netzwerk am nächsten kommt*.

### Titan-Pult und TNP, alle Ausgänge Standard-DMX

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `192.168.1.30`    | `255.255.255.0`
TNP               | `192.168.1.31`    | `255.255.255.0`

### Titan-Pult steuert Geräte über Art-Net (und ggf. über DMX)

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `10.100.100.100`   | `255.0.0.0`
Art-Net-Geräte    | `10.x.y.z` **\***  | `255.0.0.0`

(der Bereich `2.x.y.z` kann ebenfalls für Art-Net verwendet werden. Siehe aber die u.g.
Bemerkungen zu privaten Adressbereichen).

**\*** *Dabei sind die Kombinationen von `x`, `y` und `z` für jedes Gerät einmalig zu
vergeben.*

### Titan-Pult und TNP, Ausgang über Art-Net (und DMX)

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `2.100.100.100`   | `255.0.0.0`
TNP               | `2.100.100.101`   | `255.0.0.0`
Art-Net-Geräte    | `2.x.y.z` **\***  | `255.0.0.0`

*Alternativ:*

Gerät             | IP-Adresse        | Subnetzmaske
---               | ---               | ---
Titan-Pult        | `10.100.100.100`  | `255.0.0.0`
TNP               | `10.100.100.101`  | `255.0.0.0`
Art-Net-Geräte    | `10.x.y.z` **\*** | `255.0.0.0`

**\*** *Dabei sind die Kombinationen von `x`, `y` und `z` für jedes Gerät einmalig zu
vergeben.*

> Es empfiehlt sich, nie die 255 in einer IP-Adresse zu verwenden. Ist der unmaskierte Teil der IP-Adresse 255,
so wird dies als Broadcast-Adresse verwendet (z.B. die IP-Adresse `192.168.1.255` ist eine Broadcast-Adresse in einem 
Netzwerk mit der Maske `255.255.255.0`, und `10.255.255.255` ist eine Broadcast-Adresse in einem 
Netzwerk mit der Maske `255.0.0.0`.

## Wenn das Netzwerk Verbindung zum Internet hat

Nach Möglichkeit sollten Licht-Netzwerke eigene Netzwerke ohne Verbindung zum Internet sein. 
Sollte einmal ihr Netzwerk doch mit dem Internet verbunden sein, so ist es wichtig, dass Sie
einen **privaten** IP-Adressbereich verwenden. Damit wird sichergestellt, dass der Netzwerkverkehr 
nicht ins Internet geroutet wird. Die privaten Adressbereiche sind folgende:

Startadresse  | Letzte Adresse   | Subnetzmaske
--- 		  | --- 			 | ---
`10.0.0.0` 	  | `10.255.255.255` | `255.0.0.0` (/8)
`172.16.0.0`  | `172.31.255.255` | `255.255.0.0` (/12)
`192.168.0.0` | `192.168.255.255`| `255.255.255.0` (/16)

> Für Art-Net muss eventuell der Bereich 10.x.y.z verwendet werden, wenn die vorhandenen Geräte das erfordern.