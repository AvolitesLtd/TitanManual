---
id: loading-and-saving-shows
title: Laden und Sichern von Shows
sidebar_label: Laden und Sichern von Shows
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Eine beliebige Anzahl von Shows lässt sich sowohl auf einem externen
USB-Speicher als auch auf der internen Festplatte abspeichern. Außerdem
führt das Pult regelmäßig eine automatische Sicherung durch (Autosave).

> Shows vom Tiger Touch können auf andere Avolites TITAN-Pulte übertragen werden, nicht jedoch auf ältere Avolites-Pulte, da das Format der Dateien unterschiedlich ist.<br/>
Shows, die mit einer neueren Version der Titan-Software erstellt wurden, laufen in älteren Versionen möglicherweise überhaupt nicht oder nicht korrekt.  

Obwohl die Show auf dem internen Laufwerk sicher aufgehoben ist,
empfiehlt es sich sehr, die Daten auch auf externen USB-Speicher
(USB-Stick o.ä.) zu speichern, etwa für den Fall, dass etwas
Unvorhergesehenes mit dem Pult passiert, oder um die Show auf einem
anderen Pult zu verwenden.

## Die Show speichern

Die aktuelle Show lässt sich jederzeit unter ihrem gegenwärtigen oder
einem neuen Namen speichern. Wird die aktuelle Show unter ihrem
bisherigen Namen gespeichert, so wird extra diese Version gespeichert.
So kann man später zu einzelnen Versionen zurückkehren.

Um die Show zu speichern, gehen Sie wie folgt vor:

1.  Drücken Sie die Taste <Keys.HardKey>Disk</Keys.HardKey>.
2.  Drücken Sie <Keys.SoftKey>Save</Keys.SoftKey>.
3.  Wenn externer USB-Speicher angeschlossen ist, wählen Sie mit den
Tasten zwischen <Keys.SoftKey>Removable Disk</Keys.SoftKey> (Wechseldatenträger, USB-Speicher)
und <Keys.SoftKey>Internal hard drive</Keys.SoftKey>(interne Festplatte).
4.  Handelt es sich um eine neue Show, so vergeben Sie mit der Tastatur
einen Namen für die Show. Ist es dagegen eine neue Version einer bereits
existierenden Show, so können Sie einen Namenszusatz eingeben, um später
die Version schneller wiederfinden zu können.
5.  Klicken Sie <Keys.HardKey>Enter</Keys.HardKey> oder <Keys.SoftKey>Save</Keys.SoftKey> (oder <Keys.SoftKey>Overwrite</Keys.SoftKey>, falls bereits
eine Show gleichen Namens existiert und überschrieben werden soll). Nun
wird die Show gesichert.
6.  Drücken Sie <Keys.HardKey>Exit</Keys.HardKey> oder <Keys.SoftKey>OK</Keys.SoftKey>, um den Modus 'Disk' zu verlassen.

-   Zum Speichern der Show unter einem neuen Namen wählen Sie die
    Funktion <Keys.SoftKey>Save As</Keys.SoftKey>.

-   Zweimaliges Drücken der Taste <Keys.HardKey>Disk</Keys.HardKey> veranlasst ein Speichern der
    Show als Quicksave. Quicksaves werden im gleichen Verzeichnis wie
    die normal gesicherten Shows gespeichert.

-   Eine neue Version wird selbst dann gespeichert, wenn man den
    gleichen Namenszusatz wie vorher vergibt.

Beim Speichern auf der internen Festplatte werden die Daten in das
Verzeichnis 'D:\\Shows' gespeichert. Bei der PC-Suite werden die
Showdaten in 'Eigene Dokumente\\Titan\\Shows' gespeichert.

## Laden einer Show

Beim Einschalten/Starten wird automatisch die zuletzt geladene Show
geladen.

![Show Browser](/docs/images/Show-Browser.png)
Zum Laden einer anderen Show betätigen Sie die Taste <Keys.HardKey>Disk</Keys.HardKey> und wählen
die Option <Keys.SoftKey>Load Show</Keys.SoftKey>. Darauf wird der Show-Browser angezeigt.

Links oben kann man das zu verwendende Laufwerk wählen. Links unten
lässt sich die Anzeige filtern, etwa um nur manuelle oder nur Autosaves
anzuzeigen. Rechts werden die verschiedenen vorhandenen Versionen der
gefundenen Show angezeigt; damit kann man schnell und einfach zu einem
früheren Programmierstand wechseln.

Ebenso lassen sich Shows auch über die Menütasten auswählen und
laden:

1.  Drücken Sie die blaue Taste <Keys.HardKey>Disk</Keys.HardKey>.
2.  Drücken Sie <Keys.SoftKey>Load Show</Keys.SoftKey>.
3.  Wenn ein externer USB-Speicher angeschlossen ist, wählen Sie nun das
Laufwerk, von dem die Show geladen werden soll.
4.  Momentan im angewählten Speicher vorhandene Shows werden bei den
Menütasten A bis E angezeigt (mit F und G kann man in der Liste
weiterblättern). Um die Auswahl einzugrenzen, geben Sie die
Anfangsbuchstaben der gewünschten Show mit der Tastatur ein.
5.  Gibt es mehrere Versionen der Show, so wählen Sie die gewünschte
aus.
6.  Drücken Sie auf <Keys.SoftKey>Load Show</Keys.SoftKey>. Beim Laden der Show wird der
Fortschritt für die einzelnen Elemente der Show angezeigt.
7.  Nachdem die Show geladen ist, kehrt die Anzeige zum normalen
Betriebsmodus zurück.

Beim Laden einer Show lässt sich wählen, ob die bereits im Pult
vorhandenen DMX-Einstellungen übernommen oder die aus der Show verwendet
werden sollen; damit wird die Zuordnung der internen Linien auf die
DMX-Anschlüsse und Netzwerkgeräte bestimmt.

## Teile aus anderen Shows importieren

Ist eine Show ähnlich einer früheren, so möchte man vielleicht Teile aus
dieser in der neuen verwenden; so könnte man z.B. einige Paletten, die
damals für Robe Robins programmiert wurden, jetzt für andere Lampen
verwenden. Genau dazu dient die Import-Funktion.

Voraussetzung für das Importieren ist das Zuordnen (Mappen) von Geräten der
importierten zu Geräten der aktuellen Show, so dass das Pult weiß, auf
welche Geräte die importierten Daten anzuwenden sind.

![Fixture Mapping](/docs/images/Fixture-Mapping.png)

Ist dies geschehen, lassen sich Teile der älteren Show auf
Tasten/Schaltflächen der neuen Show speichern und verwenden.

![Import](/docs/images/Import.png)

1.  Drücken Sie die Taste <Keys.HardKey>Disk</Keys.HardKey>.
2.  Klicken Sie <Keys.SoftKey>Import Show</Keys.SoftKey> (Das große Plus-Zeichen oben im Fenster
Show-Verzeichnis ruft ebenfalls diese Funktion auf).
3.  Darauf öffnet sich der Show-Browser. Wählen Sie die zu importierende
Show aus und klicken Sie auf <Keys.SoftKey>Load Show</Keys.SoftKey>.
4.  Nun öffnet sich das Fenster Show-Verzeichnis (Show Library). Die
aktuelle sowie die zu importierende Show haben jeweils Schaltflächen
oben im Fenster. Es lassen sich Teile aus mehreren Show gleichzeitig
importieren, indem man Schritte 1 bis 3 wiederholt.
5.  Klicken Sie auf den Reiter 'Mapper' und wählen Sie die importierte
Show.
6.  Wählen Sie ein Gerät der importierten Show und klicken Sie dann auf
den Pfeil bei einem Gerät der aktuellen Show, um es zuzuordnen. Um eine
Zuordnung wieder aufzuheben, wählen Sie aus dem 
Kontext-Menü <Keys.SoftKey>Clear Fixture Mapping</Keys.SoftKey>.<br/>
Um ein importiertes Gerät auf mehrere vorhandene Geräte zuzuordnen,
ziehen Sie um diese einen Auswahlrahmen, oder Sie klicken wiederholt auf
das zu importierende sowie ein vorhandenes Gerät.
7.  Sind alle Gerät zugeordnet, für die etwas importiert werden soll,
klicken Sie auf den Reiter ‚Show Library'.
8.  Wählen Sie die zu importierenden Bestandteile (einzeln oder mehrere
gleichzeitig). Mit den Schaltflächen links lassen sich einzelne
Kategorien auswählen (z.B. Gruppen oder Paletten).
9.  Wählen Sie nun Tasten oder Schaltflächen (in den jeweiligen
Fenstern), auf die die importierten Teile gespeichert werden sollen.
10.  Ist alles Gewünschte importiert, so beenden Sie den Vorgang 
mit <Keys.HardKey>Exit</Keys.HardKey>.

---

-   Rechts und links im Show-Browser lassen sich Filter für die
    anzuzeigenden Gerätetypen setzen, um die Suche zu vereinfachen.

-   Wird der Show-Browser angezeigt, so kann man die Import-Funktion
    direkt über einen Klick auf das <Keys.SoftKey>+</Keys.SoftKey> (Pluszeichen) aufrufen.

-   Weitere Informationen zum Show-Verzeichnis siehe [Show Library](./show-library.md).

---

## Autosave -- Automatisches Speichern

Die aktuelle Show wird durch das Pult beim Herunterfahren automatisch
gespeichert. Ebenso erfolgt alle 30 Minuten eine automatische
Speicherung etwa für den Fall eines plötzlichen Stromausfalls.

Die Häufigkeit des automatischen Speicherns lässt sich ändern bzw. die
Funktion ganz abschalten. Dazu wählt man die Option <Keys.SoftKey>Auto Save</Keys.SoftKey> aus
dem 'Disk'-Menü (Taste <Keys.HardKey>Disk</Keys.HardKey>). Autosaves lassen sich wie
anderweitig gespeicherte Shows im Show-Browser auswählen und aufrufen.

> Früher gab es bei langsamer Hardware die Empfehlung, während der Show Autosave zu deaktivieren, damit es nicht zu Performance-Einbußen kam. Auf aktuellen Pulten und guter Hardware gilt dies nicht mehr: lassen Sie Autosave daher aus Sicherheitsgründen aktiviert.

## Recover -- Show Wiederherstellen

Wurde Titan nicht richtig beendet, etwa durch einen Stromausfall, und
wird dann neu gestartet, so kann der letzte Stand meist nicht direkt
wiederhergestellt werden. In diesem Fall gibt es die Option <Keys.SoftKey>Recover Show</Keys.SoftKey>, 
womit versucht wird, die frühere Show aus einem temporären
Verzeichnis zu rekonstruieren. Außerdem werden auch Funktionen zum
Starten einer neuen Show oder dem Laden einer anderen Show angeboten.

## Sichern existierender Shows auf USB-Sticks

Wollen Sie einfach eine Kopie der aktuellen Show anfertigen, so machen
Sie das am besten mit der normalen Speicherfunktion ('Save'), und wählen
das externe USB- anstelle des internen Laufwerks.

Um eine auf der internen Festplatte vorhandene Show auf einen USB-Stick
zu kopieren, stellen Sie zunächst sicher, dass die aktuelle Show
gesichert ist. Dann laden Sie die zu kopierende Show von der Festplatte
und speichern sie auf USB-Stick. Alternativ lässt sich das auch per
'Folders' aus dem Tools-Menü realisieren.
