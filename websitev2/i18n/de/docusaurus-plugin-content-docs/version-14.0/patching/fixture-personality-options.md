---
id: fixture-personality-options
title: Erweiterte Funktionen
sidebar_label: Erweiterte Funktionen
original_id: fixture-personality-options
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Titan benutzt ein System von 'Personalities', gerätespezifische Dateien,
welche notwendige Informationen enthalten, wie welches Movinglight 
gesteuert werden muss. Avolites hat für eine Vielzahl von Movinglights 
solche Dateien erstellt. Bei ganz neuen Geräten kann es aber erforderlich 
sein, eine neue Personality zu erstellen. Siehe [Personalities](../fixture-personalities.md) für weitere Details dazu.

Zusätzlich gibt es etliche Optionen, mit denen genau gesteuert werden kann,
wie ein Movinglight reagiert. Die nachfolgend aufgeführten Einstellungen 
lassen sich auch in der Patch-Ansicht vornehmen.

Pan und Tilt vertauschen
------------------------

Damit wird die Zuordnung der Steuerelemente für Pan und Tilt vertauscht.
Dies ist etwa sinnvoll bei spiegelbewegten Geräten, die seitwärts
ausgerichtet sind.

1.  Drücken Sie <Keys.HardKey>Patch</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>.

3.  Betätigen Sie <Keys.SoftKey>Swap Pan and Tilt</Keys.SoftKey>.

4.  Wählen Sie die Geräte aus, bei denen Pan und Tilt vertauscht werden
soll. Drücken Sie <Keys.SoftKey>Pan and Tilt ...</Keys.SoftKey>, um für die angewählten Geräte
zwischen <Keys.SoftKey>Swapped</Keys.SoftKey> (vertauscht) und <Keys.SoftKey>Normal</Keys.SoftKey> umzuschalten.

5.  Drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, um das Menü zu verlassen.

Attribute invertieren
---------------------

Mit dieser Option lassen sich einzelne Attribute ausgewählter Geräte
invertieren. Das ist hilfreich z.B. wenn ein Gerät nach rechts läuft,
während alle anderen nach links laufen. Damit spart man sich mindestens
einen Weg auf die Truss, nur um die Einstellung am Gerät selbst zu
korrigieren.

1.  Drücken Sie <Keys.HardKey>Patch</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>.

3.  Drücken Sie <Keys.SoftKey>Invert Attribute</Keys.SoftKey>.

4.  Wählen Sie die zu ändernden Geräte.

5.  Wählen Sie das zu invertierende Attribut von den
	Menütasten. Im Display wird mit <Keys.SoftKey>Inverted</Keys.SoftKey> angezeigt, wenn
	ein Attribut invertiert ist.

6.  Klicken Sie <Keys.HardKey>Exit</Keys.HardKey>, um den Vorgang abzuschließen.

![Tilt Inverted](/docs/images/Tilt-Inverted.png)


-   Es lassen sich bei mehreren Geräten gleichzeitig Attribute
    invertieren, indem man mehrere Geräte anwählt. Allerdings zeigt in
    diesem Fall das Display nicht an, ob in der Auswahl manche Geräte
    bereits invertiert sind und andere nicht.

-   Einige Attribute können nicht invertiert werden.

-   Attribute können auch im Attribute Behaviour-Reiter der
    Patch-Ansicht invertiert werden.

Attribute limitieren
--------------------

Für jedes Attribut lassen sich sowohl obere als auch untere Limits
setzen. Damit kann etwa die Pan/Tilt-Bewegung begrenzt werden, oder bei
Geräten mit Dimmer und Shutter auf einem Kanal kann der Shutterbereich
gesperrt werden.

Limits für Attribute können entweder über das Menü <Keys.HardKey>Patch</Keys.HardKey>, \[Edit
Fixtures\], oder über den Reiter 'Attribute Behaviour' im Patch View
gesetzt werden.

1.  Drücken Sie die Taste <Keys.HardKey>Patch</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>.

3.  Wählen Sie <Keys.SoftKey>Set Limits</Keys.SoftKey>.

4.  Wählen Sie das/die gewünschte(n) Gerät(e) aus.

5.  Wählen Sie über die Menütasten die zu ändernden Attribute sowie,
	ob das obere (upper) oder das untere (lower) Limit gesetzt werden
	soll.

6.  Geben Sie den gewünschten Wert in Prozent ein, oder wählen Sie \[Set
	To Current Value\], um den momentanen Wert zu übernehmen. Mit \[Remove
	Limit\] wird das Limit gelöscht.

7.  Beenden Sie den Vorgang mit <Keys.HardKey>Exit</Keys.HardKey>.

Im Reiter 'Attribute Behaviour' der Patch-Ansicht setzen Sie Limits mit
Hilfe der entsprechenden Kontext-Schaltflächen.

Auch bei gesetzten Limits können Werte außerhalb derselben in den
Programmierspeicher geschrieben werden; dies wird oberhalb des
jeweiligen Rades mit dem Symbol "limited" angezeigt.

![limited](/docs/images/Limited-Dimmer.png)

Fixture Offset -- Geräte-Offset
-------------------------------

Für jedes Attribut jedes Gerätes lässt sich ein Offset einstellen.
Insbesondere ist das sinnvoll, um Positionen (Pan/Tilt) anzupassen, wenn
Geräte anders hängen, als in der Programmierung vorgesehen. Das Offset
wird unmittelbar vor der DMX-Signalausgabe angewandt, beeinflusst dann
also sämtliche Paletten und Cues.

Das Offset kann auf vier Arten eingestellt werden:

-   Gerät(e) auswählen, <Keys.HardKey>Locate</Keys.HardKey>, dann die Attribute so einstellen,
    dass die ursprünglich vorgesehenen Locate-Positionen erreicht
    werden. Nun drücken Sie <Keys.HardKey>Record</Keys.HardKey>, <Keys.HardKey>Locate</Keys.HardKey> und wählen \[Update
    Offset\]. Damit werden nicht die Locate-Werde verändert, sondern die
    eingestellte Abweichung wird als Offset gespeichert. Das ist ein
    schneller visueller Weg, das Offset einzurichten.

-   Ebenso kann das Offset mittels Paletten eingestellt werden. Wählen
    Sie das/die Gerät(e) aus, rufen Sie eine Palette ab und stellen dann
    die Attribut-Werte manuell auf die richtigen Werte (z.B. die
    korrekte Position). Nun drücken Sie <Keys.HardKey>Record</Keys.HardKey>, klicken wieder die Palette
	an und wählen <Keys.SoftKey>Update Offset</Keys.SoftKey>. Auch hier wird nicht die Palette geändert,
    sondern die Abweichung zwischen der Palette und der aktuellen
    Position wird als Offset gespeichert.

-   In der Patch-Ansicht gibt es für die bereits gepatchten Geräte Pan
    und Tilt extra Zellen mit den Offset-Werten; diese werden dort
    angezeigt und können editiert werden.

-   Ebenfalls in der Patch-Ansicht, Reiter 'Attribute Behaviour'
    (Attribut-Verhalten) kann man die Kontext-Option <Keys.SoftKey>Offset</Keys.SoftKey> wählen und
    die Werte anzeigen lassen bzw. ändern,

Kennlinien für Geräte und Attribute
-----------------------------------

Kennlinien bestimmen, wie sich ein Attribut bei Änderung des DMX-Wertes
verhält. Dies kommt vor allem zur Anwendung bei Dimmerkanälen, um den
Helligkeitsverlauf für verschiedene Gerätearten anzugleichen, kann aber
auf alle anderen Attribute ebenfalls angewendet werden.

Kennlinien können entweder über das Menü <Keys.HardKey>Patch</Keys.HardKey>, <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>,
oder über den Reiter 'Attribute Behaviour' im Patch View gesetzt werden.

1.  Drücken Sie die Taste <Keys.HardKey>Patch</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>.

3.  Wählen Sie <Keys.SoftKey>Set Curve</Keys.SoftKey>.

4.  Wählen Sie das/die gewünschte(n) Gerät(e) aus.

5.  Wählen Sie über die Menütasten die zu ändernden Attribute aus.

6.  Wählen Sie über die Menütasten die gewünschte Kennlinie
	aus; die Vorgabe ist "Linear".

7.  Beenden Sie den Vorgang mit <Keys.HardKey>Exit</Keys.HardKey>.

Die verschiedenen Kennlinien sind im Abschnitt [Curves -- Kennlinien/Kurven](../system-settings/curves.md) näher erläutert.  

Geräte oder Attribute fixieren (Freeze)
---------------------------------------

Mit dieser Funktion lassen sich einzelne Attribute oder komplette Geräte
fixieren. Diese werden dann weder vom Programmierspeicher noch von
programmierten Cues/Cuelisten beeinflusst.

1.  Drücken Sie <Keys.HardKey>Patch</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>.

3.  Drücken Sie <Keys.SoftKey>Freeze Fixture or Attribute</Keys.SoftKey>

4.  Wählen Sie die zu fixierenden Geräte.

5.  Wählen mit den Menütasten, welches Attribut oder ob das gesamte
	Gerät fixiert werden soll. Im Display wird die gewählte Einstellung
	angezeigt.

6.  Klicken Sie <Keys.HardKey>Exit</Keys.HardKey>, um den Vorgang abzuschließen.

-   Das Fixieren kann auch im Attribute Behaviour-Reiter der
    Patch-Ansicht erfolgen.

-   Fixierte Attribute werden durch das Symbol "Frozen" bei den
    Attributwerten oberhalb der Encoder angezeigt.

Die Personality editieren
-------------------------

Sollte einmal eine Personality nicht wie erwartet funktionieren
oder will man das Verhalten gezielt ändern, so kann sie direkt
im Pult editiert werden.

1.  Drücken Sie <Keys.HardKey>Patch</Keys.HardKey>.

2.  Drücken Sie <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>.

3.  Drücken Sie <Keys.SoftKey>Edit Personality</Keys.SoftKey>.

4.  Im Display wird eine Liste der aktuell verwendeten
    Personalities angezeigt. Wählen Sie die zu editierende mit der
	entsprechenden Taste.

5.  Der Personality Builder wird nun gestartet.

6.  Beim Speichern von Änderungen werden diese als benutzereigene
	Personality gespeichert; außerdem erfolgt eine Rückfrage, ob die 
	Änderungen direkt in die Show übernommen werden sollen.

-   Von Ihnen erstellte/geänderte Personalities werden in das dafür
    vorgesehene Verzeichnis D:\\Personalities (beim Simulator, Titan
    Mobile und Titan One ist dies \\Eigene
    Dokumente\\Titan\\Personalities) gespeichert. Dieses Verzeichnis
    wird beim Patchen zuerst durchsucht, und beim Updaten der
    allgemeinen Personalities nicht verändert.

-   Für den Personality Builder gibt es auf
    [www.avolites.com](http://www.avolites.com) ein gesondertes
    Handbuch.

> Sollten Sie auf ein Problem in einer von Avolites gelieferten Personality stoßen, so teilen Sie dies bitte über das Formular auf der [Personality-Website](https://personalities.avolites.com/) mit (Gerät raussuchen, dann ganz rechts auf den Käfer (engl. Bug ) klicken).
