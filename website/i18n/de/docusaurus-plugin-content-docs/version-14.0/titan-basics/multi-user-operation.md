---
id: multi-user-operation
title: Mehrbenutzer-Betrieb
sidebar_label: Mehrbenutzer-Betrieb
original_id: multi-user-operation
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Es lassen sich mehrere Pulte zum gemeinsamen Steuern einer Show
verbinden. Ebenso lassen sich mehrere Benutzer - auch auf ein und
demselben Pult - anlegen, etwa mit verschiedenen Tastenanordnungen oder
Speicherplatz-Belegungen. Das kann z.B. für Support-Bands sinnvoll sein.

## Users -- Benutzer

In jeder Show kann es mehrere Benutzer geben, von denen jeder seine
eigenen Einstellungen, Tastenprofile und Handle Worlds verwalten kann.
Damit lässt sich sehr schnell zwischen verschiedenen Einstellungen und
Belegungen umschalten, etwa bei einem Festival mit mehreren Operatoren.

Die Benutzer werden mit in der Show-Datei gespeichert; der beim
Speichern aktive Benutzer wird beim Laden der Show wieder aktiviert. Die
Vorgabe für den Benutzer ist "Operator"; der jeweils aktive Benutzer und
sein Tastenprofil werden im Display angezeigt.

![systemarea](/docs/images/System-Area.png)

Das Ändern und Neuanlegen von Benutzern erfolgt im Menü 'Users'
(Benutzer).

1.  Drücken Sie die Taste <Keys.HardKey>Disk</Keys.HardKey>.

2.  Klicken Sie auf <Keys.SoftKey>Users</Keys.SoftKey>.

3.  Um zu einem anderen Benutzer zu wechseln, klicken Sie auf \[Change
Current User\] und wählen einen anderen Benutzer (der momentan aktuelle
Benutzer ist markiert).

4.  Um einen neuen Benutzer anzulegen, wählen Sie <Keys.SoftKey>Add a User</Keys.SoftKey>, geben
einen Namen ein und drücken Sie <Keys.SoftKey>OK</Keys.SoftKey>.

5.  Ebenso kann man schnell im Hauptmenü den Benutzer wechseln: halten
Sie die <Keys.HardKey>Avo</Keys.HardKey>-Taste gedrückt und wählen Sie aus dem Menü <Keys.SoftKey>User ... </Keys.SoftKey>

-   Wird mit mehreren Konsolen gleichzeitig an der Show gearbeitet, so
    erscheint ein neu angelegter Benutzer automatisch auch auf den
    anderen Pulten.

## Handle Worlds

Jede Show kann mehrere Handle Worlds enthalten, wobei jede
unterschiedliche Tastenbelegungen und Anordnungen von Schaltflächen
speichert. Damit kann sich jeder Benutzer seine individuellen
Bedienelemente zusammenstellen, zwischen denen dann schnell umgeschaltet
werden kann.

Wird der Benutzer gewechselt, so wird auch die Handle World gewechselt.

Sämtliche Handle Worlds werden in der Showdatei gespeichert; die Vorgabe
für die Handle World ist "Mapping World 1".

Das Verwalten der Handle Worlds erfolgt ebenfalls im Menü "Disk":

1.  Drücken Sie die Taste <Keys.HardKey>Disk</Keys.HardKey>.

2.  Klicken Sie auf <Keys.SoftKey>Handle Worlds</Keys.SoftKey>.

3.  Zum Wechseln der Handle World klicken Sie <Keys.SoftKey>Select Handle World</Keys.SoftKey>
und wählen aus der Liste eine andere Handle World (die momentan aktive
ist markiert).

4.  Um eine neue Handle World anzulegen, wählen Sie \[Add Handle
World\], geben eine Namen ein und klicken <Keys.SoftKey>OK</Keys.SoftKey>.

5.  Mit <Keys.SoftKey>Delete Handle World</Keys.SoftKey> wird die Handle World gelöscht;
Schaltflächen, die nur in dieser verwendet wurden, sind nur noch über
das Show-Verzeichnis (Show Library) erreichbar und können bei Bedarf neu
zugeordnet werden.

-   Schaltflächen/Speicherplätze aus anderen Handle Worlds sind über das
    Show-Verzeichnis (Show Library) erreichbar und können in der eigenen
    Handle World neu zugeordnet werden.

-   Die Option <Keys.SoftKey>Follow World Page Change</Keys.SoftKey> bestimmt, ob auf anderen
    Pulten, die in der gleichen Handle World arbeiten, die Seiten der
    Speicherplätze synchron gewechselt werden.

## Verbinden mit anderen TitanNet-Sessions

Sind mehrere Titan-Pulte im gleichen Netzwerk miteinander
verbunden, so können diese als Multi-User, [Backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#pulte-für-den-backup-betrieb-einrichten) oder beides
gleichzeitig arbeiten.

> Alle Pulte in einer Titan-Session müssen auf der gleichen Software-Version laufen.

Details zur Einrichtung des Netzwerkbetriebs mehrerer Pult siehe
[Netzwerk einrichten](../networking.md).

1.  Drücken Sie die Taste <Keys.HardKey>Disk</Keys.HardKey>.

2.  Klicken Sie auf <Keys.SoftKey>TitanNet Sessions</Keys.SoftKey>.

3.  Mit <Keys.SoftKey>Sessions View</Keys.SoftKey> erhält man ein Fenster mit einer Übersicht,
wie das Pult gerade mit anderen Pulten verbunden ist bzw. welche
TitanNet-Sessions verfügbar sind. Zum Verbinden klicken Sie im Display
auf das Symbol eines anderen Pultes und wählen <Keys.SoftKey>Connect</Keys.SoftKey>.

4.  Oder Sie wählen <Keys.SoftKey>Backup</Keys.SoftKey>, <Keys.SoftKey>Multi-User</Keys.SoftKey> oder \[Backup &
Multi-User\] -- auch hier werden momentan verfügbare Sessions angezeigt.
Klicken Sie auf eine Session, um sich mit dieser zu verbinden.

![SessionsView](/docs/images/SessionsView.png)

Eine grüne Linie zeigt eine gute Verbindung an, eine gepunktete rote
Linie dagegen Verbindungsprobleme. Nicht verfügbare Pulte erscheinen
auf rotem Hintergrund.

Zunächst fungieren alle Pulte als Master. Verbindet man sich nun von
einem anderen Pult aus mit dieser Session im Mehrbenutzerbetrieb, so
wird dieses Pult ein Slave und übernimmt den momentanen Stand der
Show vom Master-Pult. Auf dem Slave-Pult kann man wählen, ob die
Show lokal oder auf dem Master-Pult gespeichert werden soll.

In der Titelleiste werden Details zum Master/Slave-Status angezeigt.
Der Name des jeweiligen Pultes lässt sich mit der Option \[Console
Legend\] ändern.

![Shell Slave](/docs/images/Shell-Slave.png)

Im Mehrbenutzerbetrieb arbeiten Pulte gemeinsam an der gleichen Show.
Ist auf allen die gleiche Handle World gewählt, so werden Änderungen an
sämtliche Pulte übertragen; wird z.B. ein Cue auf einem Slave-Pult
gestartet, so wird dieser auch auf dem Master-Pult als aktiv
gekennzeichnet. Auf Pulten mit Motorfadern fahren diese auf den
entsprechenden Pegel; sind keine Motorfader vorhanden, so muss der Fader
manuell auf den aktuellen Wert gebracht werden, um die Steuerung dieses
Cues zu übernehmen. Arbeiten die Pulte dagegen in unterschiedlichen
Handle Worlds, so ist ein weitgehend unabhängiges Arbeiten möglich.

> Pulte mit dem gleichen Benutzer und der gleichen Handle World haben immer auch das gleiche Playback-Handle connected, also mit der Steuerung verbunden. Ist dies nicht erwünscht, so muss ein anderer benutzer und Handle World gewählt werden.

In jedem Falle erfolgt die DMX-Ausgabe durch das Master-Pult. Kanäle,
die auf anderen Pulten im Programmer aktiv sind, werden mit einem blauen
Punkt bei der Anzeige der Räder markiert. Wird auf mehreren Pulten
gleichzeitig an einem Gerät gearbeitet, so hat das Pult Priorität über
das Gerät, an dem die letzte Änderung vorgenommen wurde.

Slave-Pulte können die Session jederzeit verlassen: entweder per
Schaltfläche <Keys.SoftKey>Leave Session</Keys.SoftKey> in der Sessions-Ansicht oder im
TitanNet-Menü. Nach dem Verlassen der Session wird die Show geladen, die
vor dem Beitritt zur Session aktiv war. Auf Master-Pulten gibt es
hingegen die Option <Keys.SoftKey>Terminate Session</Keys.SoftKey> (Session beenden).

Läuft ein Pult als [Backup](../running-the-show/linking-consoles-for-multi-user-or-backup.md#pulte-für-den-backup-betrieb-einrichten), so gibt es die Optionen <Keys.SoftKey>Takeover</Keys.SoftKey>, \[Sync
now\] und <Keys.SoftKey>Leave Session</Keys.SoftKey>. Mit <Keys.SoftKey>Takeover</Keys.SoftKey> kann die Show übernommen
werden: dieses Pult wird nun Master und gibt DMX aus, der am Masterpult
aktive Benutzer und die Handle World werden nun an diesem neuen Master
aktiviert. Die DMX-Ausgabe des vorherigen Masters wird deaktiviert.

> Für Mehrbenutzerbetrieb und Session-Backup müssen alle beteiligten 
  Pulte exakt den gleichen Versionsstand haben.

&nbsp;<strong>Für die PC-Suite (Titan Mobile, Titan One, Simulator):</strong>

> Damit sich die verschiedenen Pulte gegenseitig im Netzwerk finden, muss auf Windows-Ebene die 'Network Discovery' aktiviert sein (Netzwerk-Einstellungen bzw. Freigabecenter).
