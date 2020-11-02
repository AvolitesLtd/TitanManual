---
id: version-14.0-the-system-menu
title: The System Menu
sidebar_label: The System Menu
original_id: the-system-menu
---

Das System-Menü erreicht man durch Drücken von \<Avo\> und (gleichzeitig) 
\<Disk\> bzw. bei älteren Pulten durch Umschalten des Betriebsarten-Schalters 
in den Modus 'System'. Beim Titan Go gibt es extra den Button \<System\>.

Die hier verfügbaren Optionen sind von den normalen Betriebsfunktionen 
getrennt, da sie entweder nur selten benötigt werden, oder aber große 
Auswirkungen auf die Funktion des Pultes haben, so dass ein versehentliches 
Verstellen tunlichst vermieden werden sollte.

---

Network Settings - Netzwerkeinstellungen
----------------------------------------

Hier werden die Parameter der Netzwerk(Ethernet)- Anschlüsse eingestellt, 
siehe [Steuern von Geräten über Netzwerk](../networking/controlling-fixtures-over-a-network.md).

DMX Settings
------------

Hier wird die DMX-Ausgabe des Pultes eingerichtet. Details zu diesem
Menü finden sich in Abschnitt [Einrichten der DMX-Ausgänge](dmx-output-mapping.md#einrichten-der-dmx-ausgänge).

DMX Merge Settings
------------------

Hier stellt man ein, wie DMX über mehrere Pulte bzw. Netzwerk-Knoten
hinweg ausgegeben werden soll. Siehe [DMX Merge](dmx-output-mapping.md#dmx-merge).

Synergy Settings
----------------

Einstellungen zum Verbinden mit Ai-Servern, siehe [Einrichten von Synergy](../synergy/setting-up.md#einrichten-von-synergy).

TitanNet Security - Netzwerksicherheit
--------------------------------------

Mit dieser Einstellung wird bestimmt, wie das Pult mit anderen
Titan-Geräten im Backup-Betrieb kommuniziert. Details zum Backup finden
sich in Abschnitt [Backup und Mehrbenutzerbetrieb](../running-the-show/linking-consoles-for-multi-user-or-backup.md).

User Settings - Benutzereinstellungen
-------------------------------------

Das Menü 'User Settings' (Benutzereinstellungen) lässt sich auch im
'Program'-Modus aufrufen; dazu halten Sie die \<AVO\>-Taste gedrückt und
betätigen die Taste \[User Settings\]. Näheres zu den Einstellungen
siehe Abschnitt [User Settings](user-settings.md).

Key Profiles - Tastenprofile
----------------------------

Damit lässt sich die Funktion verschiedener Tasten festlegen; siehe
Abschnitt [Key Profiles](key-profiles.md).

Wipe (Löschen)
--------------

Die Funktion 'Wipe' löscht die aktuelle Show. Das Ergebnis ist das
gleiche wie bei der Wahl der Option \[New Show\] aus dem Menü \<Disk\>.
('Wipe' war bereits bei früheren Avolites-Pulten im System-Menü zu
finden und ist deshalb hier eingeblendet).

Triggers
--------

Hier richtet man die Steuerung des Pultes z.B. über DMX oder MIDI ein.
Details dazu finden sich in Abschnitt [Externe Trigger](../running-the-show/midi-dmx-or-audio-triggering.md).

Assign Masters
--------------

In diesem Menü lassen sich einzelne Fader bestimmten Master­funktionen
zuweisen; verschiedene Funktionen stehen dafür zur Verfügung und sind in
Abschnitt [Master-Fader](../running-the-show/playback-controls.md#master-fader) 
näher beschrieben.

Console Legend
--------------

Hier kann man den Namen des Pultes verändern, der im Netzwerkbetrieb auf
anderen Pulten angezeigt wird.

Titan Telemetry
---------------

Um Avolites eine bessere Qualitätskontrolle und stetige Verbesserungen
zu ermöglichen, wurde ein automatisches Rückmeldesystem integriert.
Damit sendet Titan automatisch Informationen, um die Fehlersuche und
weitere Verbesserungen zu ermöglichen. Diese enthalten aufgetretene
Fehler, Statis-tiken über die Zeit, die die verwendeten Funktionen
benötigen, und Ähnliches. Damit wird die weitere Softwareentwicklung
sehr unterstützt. Ist dies aber unerwünscht, kann dies mit \[Telemetry
Disabled\] deaktiviert werden. Daten können nur übertragen werden, wenn
das Pult einen Internetzugang hat.

Display Setup - Bildschirmeinrichtung
-------------------------------------

Hier lässt sich der [externe Bildschirm](external-displays.md)
aktivieren/deaktivieren. Ist kein solcher vorhanden, empfiehlt es sich aus 
Performance-Gründen, den Anschluss zu deaktivieren.
