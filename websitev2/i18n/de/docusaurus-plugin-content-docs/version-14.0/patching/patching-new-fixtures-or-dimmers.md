---
id: patching-new-fixtures-or-dimmers
title: Patching New Fixtures or Dimmers
sidebar_label: Patching new Fixtures or Dimmers
original_id: patching-new-fixtures-or-dimmers
---

import Keys from '@site/src/components/key.ts';

Gerätetasten und -buttons
-------------------------

Um Movinglights oder Dimmer steuern zu können, müssen diese
zunächst einer Schaltfläche oder Taste zugewiesen werden. Gepatcht
werden kann auf die Buttons im Fenster 'Fixtures', auf die
Macro/Exekutor-Tasten sowie auf die normalen Playbacks mit Fadern
(Speicherplätze). Wird direkt auf Playbacks gepatcht, so steuert der
Fader die Helligkeit des jeweiligen Geräts.

Ist das Fenster 'Fixtures' nicht sichtbar, so drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, 
dann <Keys.HardKey>Fixture</Keys.HardKey>, oder drücken Sie zweimal auf [<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Fixtures</Keys.SoftKey>, oder Sie rufen den Workspace <Keys.SoftKey>Fixtures and Groups</Keys.SoftKey> auf.

![Fixtures Window](/docs/images/Fixtures-Window.png)

Geräteauswahltasten werden entweder seitenweise -- mit gesonderten
Tasten zur Umschaltung der Seiten -- oder mit einer Schiebeleiste zum
Wechseln angezeigt. Mit der Schaltfläche <Keys.SoftKey>Pages Show/Hide</Keys.SoftKey> im
Kontextbereich (links neben den Menübuttons, bzw. im Kontextmenü des 
Gerätefensters beim Sapphire Touch und Titan Go) lässt sich zwischen den 
beiden Darstellungsarten umschalten. Zwischen einzelnen Seiten der 
Anzeige lässt sich jederzeit wechseln.

Titan gestattet es ferner, einzelne Dimmer und Scheinwerfer zu Gruppen
zusammenzufassen, um schnell auf eine bestimmte Zusammenstellung von
Geräten Zugriff zu haben. Gruppen werden im nächsten Kapitel
beschrieben.

Sobald Geräte gepatcht wurden, können die Details in der [Patch-Übersicht](./changing-the-patch.md#patch-view) angezeigt und geändert werden.

Patchen von Dimmern
-------------------

Jede Gerätetaste kann einen oder mehrere Dimmer steuern. Die Zuordnung
(das Patchen) erfolgt entweder über das Patch-Menü (s.u.) oder über das
Fenster [Patch View](./changing-the-patch.md#patch-view).

1. Drücken Sie die Taste <Keys.HardKey>Patch</Keys.HardKey>, dann <Keys.SoftKey>Dimmer</Keys.SoftKey>.

2. <Keys.SoftKey>DMX Line=</Keys.SoftKey> zeigt die aktuell zum Patchen ausgewählte DMX-Linie.
Drücken Sie diese, und geben Sie ggf. eine neue Nummer zum Ändern der
DMX-Linie ein. <Keys.SoftKey>Address=xx</Keys.SoftKey> zeigt die aktuelle DMX-Adresse an, die als
nächstes gepatcht werden würde; zum Ändern drücken diese Taste, geben
die neue Adresse am Zifferntastenblock ein und drücken <Keys.HardKey>Enter</Keys.HardKey>.\
![DMX Line](/docs/images/DMX-Line.png)

3. Um einen einzelnen Dimmer zu patchen, betätigen Sie einen der
Buttons im Fixtures-Fenster, eine Macro/Exekutor-Taste oder die blaue
Taste bei einem Fader. Um eine Reihe von Dimmern zu patchen, geben Sie
die gewünschte Anzahl bei <Keys.SoftKey>Quantity</Keys.SoftKey> ein und bestätigen die Anwahltaste
für den ersten Dimmer (ebenso kann man einfach mit dem Finger über den
entsprechenden Bereich von Buttons streichen, oder bei Tasten die erste
gedrückt halten und dazu die letzte drücken). Die so angelegte Reihe von
Dimmern wird auf fortlaufende DMX-Kanäle gepatcht.

4. Die verwendeten Schaltflächen erscheinen nun dunkelblau, um
anzuzeigen, dass sie bereits belegt sind, und zeigen einige Details der
Geräte/Dimmer an. Wurde auf ein Playback oder eine Macro-Taste gepatcht,
so leuchtet die jeweilige LED schwach auf, um die Belegung anzuzeigen.

5. Nun wiederholen Sie den Vorgang ab Schritt 2 für weitere Dimmer.

-   Beim Einstellen der DMX-Adresse mit <Keys.SoftKey>Address=xx</Keys.SoftKey> kann man ebenso
    die DMX-Linie (Universum) angeben: geben Sie dazu
    &#123;Linie&#125;.&#123;DMX-Adresse&#125; ein, etwa 2.56 für Kanal 56 auf Linie 2.

-   Zur Anzeige der gepatchten DMX-Kanäle drücken Sie <Keys.HardKey>View / Open</Keys.HardKey>, 
	dann <Keys.HardKey>Patch</Keys.HardKey>, um die [Patch-Übersicht (Patch View)](./changing-the-patch.md#die-patch-ansicht-patch-view) zu öffnen.

-   <Keys.SoftKey>User Number = xx</Keys.SoftKey> erlaubt die Eingabe einer benutzerdefinierten
    Nummer für jedes gepatchte Gerät, um später die Zuordnung zu
    erleichtern. Diese Benutzernummer/Gerätenummer ('User Number')
    lässt sich später im Menü 'Repatch Fixture' verändern.

-   Einer Anwahltaste lassen sich auch mehrere Dimmer zuordnen. Das ist
    zweckmäßig z.B. wenn sämtliche Scheinwerfer eines Bereiches
    gemeinsam gesteuert werden sollen. Um eine solche Zuordnung
    vorzunehmen, betätigen Sie einfach die gleiche Anwahltaste beim
    Patchen des nächsten Dimmers. Zur Kontrolle, ob der Patchvorgang
    erfolgreich war, überprüfen Sie die angezeigte DMX-Adresse: mit
    jedem gepatchten Dimmer erhöht sich diese um 1.

-   Um einen Dimmer, der wie eben beschrieben gemeinsam mit mehreren auf
    einer Schaltfläche gepatcht war, getrennt zu patchen, ohne die
    bestehende Programmierung zu verlieren, kopieren Sie die bestehende
    Schaltfläche und ändern das Patching der kopierten auf die
    gewünschte Adresse.

Patchen von Movinglights
------------------------

Bewegungsscheinwerfer (intelligente Scheinwerfer) sind etwas
komplizierter zu patchen als Dimmer, da hier mehr Funktionen pro Gerät
verwaltet werden müssen (Pan, Tilt, Farbe etc.), während Dimmer nur
einen Kanal haben.

Avolites-Pulte benutzen ein System von 'Personalities', um solche
Scheinwerfer zu steuern. Das bedeutet, Sie brauchen gar nicht genau zu
wissen, wie jedes Gerät arbeitet -- Sie teilen dem Pult einfach nur mit,
was Sie machen möchten, und das Pult sendet die entsprechenden
Steuersignale. Es gibt Personality-Dateien für nahezu jedes verfügbare
Gerät; diese definieren die jeweils verfügbaren Kanäle und
Steuermöglichkeiten. Sollte für ein bestimmtes Gerät keine Personality
in Ihrem Tiger Touch vorhanden sein, so lassen sich weitere von der
Avolites-Website downloaden, Sie können sich selbst eine Personality
schreiben, oder Avolites kann die entsprechende Datei für Sie
generieren. im Abschnitt [Personalities](../fixture-personalities.md) 
gibt es weitere Informationen dazu.

Die Zuordnung (das Patchen) erfolgt entweder über das Patch-Menü (s.u.)
oder über das Fenster [Patch View](./changing-the-patch.md#patch-view).

1. Drücken Sie die Taste <Keys.HardKey>Patch</Keys.HardKey>.

2. Drücken Sie <Keys.SoftKey>Fixtures</Keys.SoftKey>.
![Patch Menu](/docs/images/Patch-Menu.png)

3. Wählen Sie aus der Liste den Hersteller des Gerätes; mit
<Keys.SoftKey>Previous</Keys.SoftKey> (zurück) oder <Keys.SoftKey>Next</Keys.SoftKey> (weiter) kann man durch die Liste
blättern. Oder tippen Sie auf der Tastatur einfach die ersten Buchstaben
des Herstellers, um die Suche zu vereinfachen.

4. Wählen Sie das entsprechende Gerät (auch hier kann man mit F und G
blättern, oder die ersten Buchstaben des Gerätes auf der Tastatur
tippen).

5. Wählen Sie ggf. die korrekte Betriebsart (Modus) des Gerätes mit den
Funktionstasten aus.

6. <Keys.SoftKey>Address = </Keys.SoftKey> zeigt die erste freie DMX-Adresse. Ändern Sie diese
ggf. mit dem Ziffernblock. Betätigen Sie <Keys.SoftKey>DMX line=xx</Keys.SoftKey>, um auf eine
andere DMX-Linie zu wechseln, oder geben Sie die Adresse als
&#123;Linie&#125;.&#123;Adresse&#125; ein (z.B. 2.45 für Kanal 45 auf Linie 2).
![Address Input](/docs/images/Address-Input.png)

7. Um das Gerät zu patchen, betätigen Sie einen der Buttons im
Fixtures-Fenster, eine Macro/Exekutor-Taste oder die blaue Taste bei
einem Fader.

8. Die verwendeten Schaltflächen erscheinen nun dunkelblau, um
anzuzeigen, dass sie bereits belegt sind, und zeigen einige Details der
Geräte/Dimmer an. Wurde auf ein Playback oder eine Macro-Taste gepatcht,
so leuchtet die jeweilige LED schwach auf, um die Belegung anzuzeigen.

9. Wiederholen Sie den Vorgang ab Schritt 7, um weitere Geräte zu
patchen. Die DMX-Adresse wird dabei automatisch hochgezählt.

-   Um eine Reihe von gleichen Geräten zu patchen, geben Sie die Anzahl
    mit <Keys.SoftKey>Quantity</Keys.SoftKey> ein und bestätigen die Anwahltaste für das ersten
    Gerät (ebenso kann man einfach mit dem Finger über den
    entsprechenden Bereich von Buttons streichen, oder bei Tasten die
    erste gedrückt halten und dazu die letzte drücken). Die so angelegte
    Reihe von Geräten wird auf fortlaufende DMX-Kanäle gepatcht.

-   Mit <Keys.SoftKey>Options</Keys.SoftKey>, <Keys.SoftKey>Offset</Keys.SoftKey> kann man Lücken in die Gerätefolge
    einbauen, wenn mehrere Geräte gleichzeitig gepatcht werden. Dies ist
    besonders hilfreich, wenn man bereits damit rechnet, später Geräte
    austauschen zu müssen. Der Offset-Wert ist dabei die gesamte
    Kanalanzahl, die man pro Gerät reservieren möchte; sollen Geräte
    z.B. in 30er Schritten gepatcht werden, so gibt man als Offset 30
    ein.

-   Es lässt sich nur ein Gerät pro Auswahltaste patchen. Ein Patchen
    eines weiteren Gerätes auf eine bereits belegte Taste/Schaltfläche
    ist nicht möglich.

-   Zum Patchen eines Gerätes, welches einen separaten Dimmer benötigt
    (wie etwa ein VL5), können Sie den Dimmerkanal auf die gleiche
    Auswahltaste wie das eigentliche Gerät patchen, so dass man alles
    gemeinsam steuern kann. Diese Funktion nennt sich 'Pending Dimmer'
    (abhängiger Dimmer). In der [Patch-Ansicht (Patch View)](./changing-the-patch.md#patch-view) werden solche Geräte mit einem
    Blitz-Symbol hinter der Gerätenummer angezeigt.

-   <Keys.SoftKey>Options</Keys.SoftKey>, <Keys.SoftKey>Preset Palettes</Keys.SoftKey> bestimmt, ob das Pult beim Patchen
    bereits Paletten für Farbe, Gobo und Position des Gerätes anlegen
    soll; diese werden in den entsprechenden Arbeitsfenstern angezeigt.
    Diese Option ist als Vorgabewert deaktiviert, aber ggf. sehr
    hilfreich, so dass es sich lohnt, diese in Erinnerung zu behalten.

-   Mit <Keys.SoftKey>Options</Keys.SoftKey>, <Keys.SoftKey>AutoGroups</Keys.SoftKey> lässt sich festlegen, ob das Pult
    automatisch die gepatchten Geräte in Gruppen ordnet. Die automatisch
    erstellten Gruppen sind eine Gruppe pro Gerätetyp sowie jeweils eine
    Gruppe für gleichzeitig gepatchte Geräte.

-   Um die Belegung der DMX-Kanäle anzuzeigen, wählen Sie <Keys.HardKey>View / Open</Keys.HardKey>,
    <Keys.HardKey>Patch</Keys.HardKey>. Um Details eines einzelnen Gerätes anzuzeigen, wählen Sie 
	<Keys.HardKey>View / Open</Keys.HardKey> und die jeweilige Geräte-Schaltfläche. Dabei
    wird auf den Schaltflächen die DMX-Adresse (im Format
    &#123;DMX-Linie&#125;.&#123;Adresse&#125;) angezeigt - das lässt sich über das
    Kontextmenü abschalten.

-   Wird beim Patchen die Kapazität einer DMX-Linie überschritten, setzt
    Titan das Patchen am Beginn der folgenden DMX-Linie fort.
    Versucht man etwa, ein Movinglight (mit mehr als 3 Kanälen) auf
    Kanal 1.510 zu patchen, so wird es tatsächlich auf 2.1 gepatcht.

-   Wenn die Personality die erforderlichen Informationen enthält, so
    wird im Dialog-Bereich ein Symbolbild des Geräts angezeigt, so dass
    man überprüfen kann, das richtige Modell gewählt zu haben.\
    ![Fixture Mode](/docs/images/Fixture-Mode.png)

Automatisches Patchen in Capture
--------------------------------

Um den Capture Visualiser zu benutzen, drücken Sie zweimal auf 
[<Keys.HardKey>View / Open</Keys.HardKey>](../titan-basics/workspace-windows.md#auswahl-und-positionierung-der-arbeitsfenster) 
und wählen <Keys.SoftKey>Capture Visualiser</Keys.SoftKey>. Einige
Pulte verfügen auch über eine gesonderte <Keys.HardKey>Visualiser</Keys.HardKey>-Taste. Daraufhin
öffnet sich das Visualiser-Fenster mit einer automatisch aus dem Patch
generierten Darstellung von Geräten.

Die gepatchten Geräte werden in der Reihenfolge dargestellt, in der sie
gepatcht wurden. Daraufhin lässt sich das Geräte-Layout mit der
Capture-Steuerung entsprechend anpassen, siehe [Steuerung des Visualisers](../capture-visualiser.md).

-   Das automatische Patchen der Geräte in Capture lässt sich in den 
    Capture-Einstellungen deaktivieren (Reiter 'Stage').

-   Geräte-Modes, bei denen die Darstellung in Capture funktioniert,
    werden mit einem Capture-Logo dargestellt (siehe Bild) - fehlt dieses
	Logo, kann das Gerät nicht im integrierten Capture dargestellt werden.\
    ![Fixture Modes](/docs/images/Fixture-Modes.png)

-   Wird die [Capture-Vollversion](../capture-visualiser/linking-the-console-to-stand-alone-capture.md) 
    (ab Nexum) auf einem externen Computer verwendet, so werden Änderungen am 
	Patch sowohl vom Pult zu Capture als auch in umgekehrter Richtung 
	übertragen und automatisch synchronisiert.

Geräte mit mehreren Zellen (Sub-Fixtures)
-----------------------------------------

Manche Geräte haben mehrere identische, unabhängig voneinander
steuerbare Bereiche (etwa manche RGB-LED-Blinder). Um nun nicht jede
Zelle einzeln patchen zu müssen, besteht das gesamte Gerät aus einem
übergreifenden 'Super Fixture', das die Master-Kanäle enthält, sowie den
entsprechenden Zellen als Teilgeräte - Sub Fixtures. Dies ist
insbesondere beim Arbeiten mit dem Pixelmapper sinnvoll, da sich damit sehr
einfach komplette Geräte verschieben oder rotieren lassen.

Wählt man das Gesamtgerät mittels seiner Schaltfläche aus, so werden
alle Zellen synchron beeinflusst. Um Zugriff auf die einzelnen Zellen zu
erhalten, verwenden Sie den Attribut-Editor oder drücken Sie <Keys.HardKey>Unfold</Keys.HardKey>
und die Auswahltaste des Geräts. Die aktuelle Seite des
‚Fixtures'-Fensters zeigt nun die einzelnen Sub Fixtures/Zellen. Ist
das Gerät auf einen Fader gepacht, so werden die Zellen auf den Fadern
dieser Seite eingeblendet. Teilgeräte lassen sich auch per Tastatur-Syntax auswählen, siehe [Geräte mit mehreren Zellen/Subfixtures](../controlling-fixtures/using-the-select-buttons-and-wheels.md#geräte-mit-mehreren-zellensubfixtures).

Um zur normalen Anzeige zurückzukehren, drücken Sie <Keys.HardKey>Unfold</Keys.HardKey> und
wählen <Keys.SoftKey>Exit Unfold</Keys.SoftKey>.

> Sub-Fixtures werden in der jeweiligen Personality definiert. Sollte also einmal ein Gerät nicht wie gewünscht arbeiten, laden Sie die aktuelle Personality-Bibliothek von Avolites herunter.

Aktive Geräte/Medienserver
--------------------------

Zur Verwendung von Ai Medienservern sei auf den Abschnitt [Synergy](../synergy.md) 
für weitere Details zu Synergy verwiesen, dem neuen System direkter
Steuerung der Server vom Pult aus.

Andere Medienserver, die CITP unterstützen, können über die Funktion
<Keys.SoftKey>Active Fixtures</Keys.SoftKey> im Patch-Menü gepatcht werden. Damit lassen sich
Vorschaubilder der Clips des Medienservers auf dem Pult anzeigen (im
Fenster Attribut-Editor).

Sind Pult und Medienserver korrekt in einem Netzwerk konfiguriert, so
drückt man <Keys.HardKey>Patch</Keys.HardKey>, <Keys.SoftKey>Active Fixtures</Keys.SoftKey>, <Keys.SoftKey>CITP Media Servers</Keys.SoftKey> und
erhält eine Liste aller im Netzwerk gefundenen Medienserver mit ihren
Layern. Jeder Layer kann nun separat wie ein Movinglight gepatcht
werden.

Patchen mit Hilfe von RDM
-------------------------

RDM (Remote Device Management) ist ein System, mit dem die verwendeten
Geräte automatisch ihre jeweilige Adresse und ihren Betriebsmodus an das
Pult melden können. Damit kann sowohl das Patchen weitgehend
automatisiert, als auch die Betriebsart einzelner Geräte bei Bedarf
geändert werden.

>  RDM funktioniert bei Titan-Pulten nur über Art-Net und RDM-fähige Nodes, nicht über die normalen DMX-Buchsen. \
\
RDM muss in den verwendeten Geräten eingebaut sein, was leider noch längst nicht bei allen Geräten der Fall ist. Ebenso muss die gesamte verwendete DMX-Peripherie (Splitter etc.) RDM-kompatibel sein.             

Drücken Sie die Taste <Keys.HardKey>View / Open</Keys.HardKey>, dann <Keys.HardKey>Patch</Keys.HardKey>. In der
sich öffnenden [Patch-Anzeige (Patch View)](./changing-the-patch.md#patch-view) wählen Sie den Reiter RDM. Nun
werden alle vom Pult per RDM gefundenen Geräte angezeigt; mit dem Befehl
<Keys.SoftKey>Full Discover</Keys.SoftKey> aus dem Kontextmenü lässt sich die Liste
aktualisieren.

![RDM Discovery](/docs/images/RDM-Discovery.png)

-   Wählen Sie ein oder mehrere Gerät(e) aus und betätigen Sie den
    Button <Keys.SoftKey>Patch</Keys.SoftKey> aus dem Kontextmenü.

-   Zum Ändern etwa von Betriebsart oder Adresse klicken Sie auf die
    entsprechenden Tabellenzellen.

-   Klicken Sie auf <Keys.SoftKey>Identify</Keys.SoftKey> bei einzelnen Geräten (ggf. nach rechts
    scrollen), um einzelne Geräte zu identifizieren.

-   Mit der Taste <Keys.SoftKey>RDM Quick Patch</Keys.SoftKey> aus dem Kontextmenü lassen sich
    die per RDM gefundenen Geräte automatisch patchen.

Geräte suchen und finden
------------------------

Mitunter ist ein Gerät falsch adressiert oder mit der falschen DMX-Linie
verbunden.

Mit der Funktion "Find Fixture" lassen sich derart 'verlorene' Gerät
schnell wiederfinden; damit werden für die gewählte Adresse und
Personality Locate-Werte gesendet. Reagiert das Gerät korrekt, so ist
die richtige Adresse gefunden.

1. Drücken Sie die Taste <Keys.HardKey>Patch</Keys.HardKey>, wählen Sie <Keys.SoftKey>Fixtures</Keys.SoftKey>, und wählen
Sie den Typ des gesuchten Geräts aus.

2. Klicken Sie auf <Keys.SoftKey>Options</Keys.SoftKey>, dann auf <Keys.SoftKey>Find Fixture</Keys.SoftKey>, um den
Suchmodus zu aktivieren.

3. Mit Encoder B kann man nun durch alle möglichen DMX-Adressen
durchschalten; mit Encoder A kann man die zu verwendende DMX-Linie wählen.

4. Reagiert das gesuchte Gerät mit Locate-Werten, so ist die korrekte
Adresse gefunden.

4. Deaktivieren Sie nun <Keys.SoftKey>Find Fixture</Keys.SoftKey> und (wenn nicht bereits
geschehen) patchen Sie das Gerät. Dabei wird automatisch die soeben
gefundene DMX-Adresse vorgegeben.

-   Mit Encoder C kann man den DMX-Slot wählen; dabei wird immer in
    Vielfachen der vom Gerät belegten Kanalzahl vorgegangen (verwendet
    ein Gerät z.B. 16 Kanäle, so schaltet dies die Adressen in
    Vielfachen von 16 weiter).
