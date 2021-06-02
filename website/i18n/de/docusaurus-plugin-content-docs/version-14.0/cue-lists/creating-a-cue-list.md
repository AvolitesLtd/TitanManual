---
id: creating-a-cue-list
title: Anlegen einer Cueliste
sidebar_label: Anlegen einer Cueliste
original_id: creating-a-cue-list
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Programmieren einer Cueliste
----------------------------

<Video videoId="Kp6XhdG6keM" title="Cuelist Basics" />

Das Programmieren einer Cueliste gleicht dem [Programmieren eines
Chasers](../chases/creating-a-chase.md).

Sie erstellen jeweils das gewünschte Bild und fügen dies als Schritt zu
der Cueliste hinzu. Zeiten lassen sich entweder sofort oder [später
hinzufügen](cue-list-timing.md).

1. Drücken Sie die Taste <Keys.HardKey>Record</Keys.HardKey> und wählen die Option \[Create Cue
List\] (auf dem Tiger Touch I drücken Sie <Keys.HardKey>Record Chase or List</Keys.HardKey>
zweimal, oder drücken Sie die Taste einmal und wählen die Option
<Keys.SoftKey>Create Cue List</Keys.SoftKey>).

2. Drücken Sie die blaue <strong>Select</strong>-Taste des gewünschten
Speicherplatzes *(auch Cuelisten lassen sich auf die Schaltflächen im
'Playbacks'-Fenster speichern)*.

3. Wählen Sie den gewünschten [Record Mode](#speichermodusrecord-mode) (Speichermodus) des Pultes:
'by Fixture' (pro Gerät), 'by Channel' (nur geänderte Kanäle), 'Record
Stage' oder ‚Quick Build'. <Keys.SoftKey>Record Mode Channel</Keys.SoftKey> ist in der Regel die sicherste
Option, da nur die tatsächlich geänderten Attribute gespeichert werden.
Es empfiehlt sich aber in jedem Falle zu überprüfen, was denn nun genau
abgespeichert wird (ggf. müssen weitere Attribute in den
Programmierspeicher übernommen werden).

4. Stellen sie mit <Keys.SoftKey>Set Times</Keys.SoftKey> die generellen Überblend- und
Verzögerungszeiten sowie die Verknüpfung aufeinanderfolgender Schritte
ein; diese Einstellungen gelten dann für alle neu gespeicherten
Schritte.

5. Stellen Sie das Bild für den ersten Schritt zusammen, entweder
manuell oder unter Verwendung von [<Keys.HardKey>Include</Keys.HardKey>](../titan-commands.md#include-----in-den-speicher-laden) bestehender Cues.
Nutzen Sie wenn gewünscht auch den [Shape Generator](../effects/shape-generator.md) oder den [Pixelmapper](../effects/pixel-mapper.md).

6. Wollen Sie für den Schritt eine <strong>Bezeichnung/Legende</strong> vergeben, so drücken Sie
dazu <Keys.SoftKey>Cue Legend</Keys.SoftKey>. Das lässt sich auch später nachholen oder ändern,
entweder mit [<Keys.HardKey>Unfold</Keys.HardKey>](editing-cue-lists.md#editieren-einer-cueliste-mit-unfold) oder mit [Set Legend](#vergeben-von-bezeichnern-für-einzelne-schritte) (siehe nächster Abschnitt).

7. Drücken Sie die <strong>Select</strong>-Taste des Speicherplatzes, oder wählen
Sie <Keys.SoftKey>Append Cue</Keys.SoftKey>(Schritt anfügen), um den Inhalt des
Programmierspeichers als Schritt 1 der Cueliste abzuspeichern.

8. Wiederholen Sie ab Schritt 5 für den nächsten Schritt der Cueliste.
Drücken Sie nicht <Keys.HardKey>Clear</Keys.HardKey>, es sei denn, Sie wollen explizit Pegel aus
vorherigen Schritten übernehmen, da ansonsten Reglerwerte auch von ‚0'
nicht gespeichert werden. Stellen Sie also sicher, dass alle
Geräte/Kanäle, die im aktuellen Schritt verändert werden sollen,
angewählt oder im Programmierspeicher sind (invertierte Anzeige).

9. Drücken Sie <Keys.HardKey>Exit</Keys.HardKey>, wenn alle gewünschten Schritte programmiert
sind.

---

-   Um an eine existierende Cueliste [weitere Schritte anzufügen](editing-cue-lists.md),
    wiederholen Sie obiges Vorgehen; bereits vorhandene Schritte werden
    davon nicht beeinflusst. 

-   Zum Anfügen von Schritten an das Ende der Liste wählen Sie \[Append
    Cue\].

-   Um einen bestehenden Schritt zu ändern, drücken Sie <Keys.SoftKey>Cue Number=</Keys.SoftKey>
    und geben die Nummer des Schrittes mit den Zifferntasten ein. Nehmen
    Sie die Änderungen vor und drücken Sie <Keys.SoftKey>Update Cue x</Keys.SoftKey>.

-   Zum Einfügen neuer Schritte siehe [Editieren einer Cueliste](editing-cue-lists.md).

-   Das Menü <strong>Advanced Options</strong> gestattet das Neu-Nummerieren der
    Schritte, und das Ändern der einzelnen Schrittnummern.

-   In jeder Cueliste kann eine unbegrenzte Zahl von Schritten
    gespeichert werden.

-   Bei Cuelisten gibt es auch eine <strong>MID (Move-In-Dark)</strong> - Funktion:
    damit werden Geräte bereits für den nächsten Einsatz vorbereitet
    (positioniert etc.), solange sie aktuell nicht aktiv sind. Details
    siehe Abschnitt [Move In Dark (MID)](../cue-lists/cue-list-playback.md#move-in-dark-mid---funktionen)

-   Für jeden Cue lassen sich die [Tracking-Optionen](cue-list-options.md#tracking) getrennt einstellen.

### Speichermodus/Record Mode

Mit <Keys.SoftKey>Record Mode</Keys.SoftKey> (Speichermodus) wählt man zwischen **Record By
Fixture** (‚Speichern pro Gerät', alle Attribute aller veränderten/
ausgewählten Geräte werden gespeichert), <strong>Record By Channel</strong>
('Speichern pro Kanal', nur die geänderten Attribute werden
gespeichert), <strong>Record Stage</strong> ('Bühne speichern', alle Geräte mit
Helligkeit > 0 werden gespeichert), oder <strong>Quick Build</strong> zum raschen
Erstellen aus vorhandenen Cues und Paletten.

> <strong>Record By Channel</strong> bietet sich an, wenn sich mehrere Cuelisten -
für unterschiedliche Attribute - gegenseitig überlagern sollen.


Vergeben von Bezeichnern für einzelne Schritte
----------------------------------------------

Für jeden Schritt lässt sich eine Bezeichnung vergeben, welche beim
Ablauf der Cueliste im Display erscheint - eine hilfreiche Sache bei der
Navigation.

1.  Drücken Sie <Keys.SoftKey>Set Legend</Keys.SoftKey> im Hauptmenü. Wollen Sie mehrere
    Bezeichnungen vergeben, so rasten Sie das Menü mit der Taste \<Menu
    Latch\> ein.

2.  Drücken Sie die <strong>Select-Taste</strong> der entsprechenden Cueliste.

3.  Die Schritte der Cueliste werden nun auf dem Bildschirm angezeigt.
    Klicken Sie auf den gewünschten Cue oder nutzen Sie das Rad A, um den zu
    ändernden Schritt auszuwählen.

4.  Klicken Sie <Keys.SoftKey>Cue Legend</Keys.SoftKey> und geben Sie die Bezeichnung mit der
    Tastatur ein, gefolgt von <Keys.HardKey>Enter</Keys.HardKey>.

5.  Setzen Sie den Vorgang ggf. für weitere Schritte fort, oder drücken
    Sie <Keys.HardKey>Exit</Keys.HardKey>, um den Vorgang abzuschließen.

Tracking von Shapes in Cuelisten
--------------------------------

Ab Version 10 können auch Shapes innerhalb von Cuelisten tracken. Ist
das Tracking für Shapes aktiviert, läuft ein in einem Cue gestarteter
Shape auch in den folgenden Cues. Zum Aktivieren des Trackings für
Shapes dient die Option <Keys.SoftKey>Shape Tracking</Keys.SoftKey> in den [Optionen](cue-list-options.md#cue-list-options----tab-playback) der
Cueliste.

Cues, die Shapes enthalten, verfügen für jeden Shape über einen extra
Button.

![Cue List window showing tracking shapes](/docs/images/Cue-List-window-showing-tracking-shapes.png)

In den darauffolgenden Cues gibt es für jeden getrackten Shape einen
Schalter:
<strong>T</strong> | <strong>Shape wird in den folgenden Cue getrackt</strong>
---|---
<strong>B</strong> | <strong>Shape wird geblockt, läuft also nicht in den folgenden Cues</strong>

Für den Cue selbst gibt es dazu die Option <Keys.SoftKey>Block All Shapes</Keys.SoftKey>, siehe
[Cuelisten-Optionen](cue-list-options.md#cue-list-options----tab-playback).

Darüber hinaus können auch Shapes für einzelne Attribute geblockt
werden, dies erfolgt über das <strong>@</strong>-Menü. Wählen Sie das zu blockende
<strong>Attribut</strong>, drücken die entsprechende <strong>@</strong>-Taste und dann den Attribut-Button
<strong>FX</strong>. Auf den Menütasten gibt es nun die Optionen <Keys.SoftKey>Block Shape</Keys.SoftKey> und
<Keys.SoftKey>Unblock Shape</Keys.SoftKey>. Wurde ein Attribut auf <strong>Block Shape</strong> gesetzt, so wird
das im Display bei den Encodern mit *"Blocked"* angezeigt.

Ist das <strong>[Shape-Tracking](cue-list-options.md#cue-list-options----tab-playback)</strong> dagegen nicht aktiviert, so sind die Shapes in
jedem Cue unabhängig voneinander. Wird der identische Shape - gleiche
Parameter, Größe und Geschwindigkeit - in mehrere aufeinanderfolgende
Cues programmiert, so läuft er einfach durch, ohne unterbrochen zu
werden.

Autoloading: Laden eines externen Cues
--------------------------------------

Schritte einer Cueliste lassen sich auch so programmieren, dass sie
automatisch den Inhalt eines oder mehrerer Speicherplätze -- Cues,
Chaser oder wiederum Cuelisten -- aufrufen, wenn der jeweilige Schritt
gestartet wird. Dies ist hilfreich, um etwa Chaser oder Effekte in die
Cueliste zu integrieren.

Man kann entweder die <strong>Autoloads</strong> manuell programmieren, oder automatisch
alle aktiven Speicherplätze als <strong>Autoload</strong> definieren.

Zum automatischen Definieren gehen Sie wie folgt vor:

1.  Nach dem Aktivieren von <strong>Cue List Record</strong> (beim Anlegen der
    Cueliste) wählen Sie <Keys.SoftKey>Advanced Options</Keys.SoftKey>, dann \[Autoload Live
    Playbacks\].

2.  Aktivieren Sie die Cues/Chaser/Cuelisten, die Sie als Autoload
    einbinden möchten.

3.  <strong>Speichern Sie den Cue</strong>. Dabei werden die aktivierten
    Speicherplätze automatisch als Autoload eingebunden.

---

Das manuelle Programmieren der Autoloads erfolgt am einfachsten in der
Playback-Ansicht der Cueliste:

1.  Drücken Sie <Keys.HardKey>View/Open</Keys.HardKey>

2.  Drücken Sie die blaue <strong>Select-Taste</strong> der Cueliste.

3.  Im Display erscheinen die Schritte der Cueliste. Klicken Sie auf die
    betreffende <strong>Autoload</strong>-Zelle (Spalte Autoload des betreffenden Cues).
    *Am besten bringen Sie dazu das Fenster in die Vollbild-Ansicht. Ist
    die Spalte Autoload gar nicht sichtbar, klicken Sie links auf \[Show
    All\]*.

4.  Drücken Sie die <strong>Select-Taste</strong> des Speicherplatzes, dessen Inhalt
    mit dem Schritt geladen werden soll. Dabei erscheint die vergebene
    Bezeichnung auf den Funktionstasten.

5.  Sie können nun weitere 'Autoloads' definieren. Verlassen Sie den
    Modus schließlich mit <Keys.HardKey>Exit</Keys.HardKey>.

![Cue List Window with Autoload playback](/docs/images/Cue-List-Window-with-Autoload-playback.png)

---

Der Inhalt des mittels 'Autoload'
verknüpften Speicherplatzes wird beim Start des jeweiligen Schrittes
geladen, und beim Start des nächsten Schritts wieder deaktiviert, es sei
denn, auch der nächste Schritt enthält diesen 'Autoload'.

Für jeden 'Autoload' lassen sich verschiedene Optionen vergeben; rufen
Sie diese durch die entsprechende Schaltfläche auf (dort wird jeweils
der verknüpfte Speicherplatz angezeigt).

Für einfache Cues ist die einzige Option A <Keys.SoftKey>Remove this Autoload</Keys.SoftKey>
(diesen Autoload löschen).

Für Chaser und Cuelisten lässt sich mit <strong>Option B</strong> wählen, ob die
jeweilige Abfolge *am Beginn* oder *bei einem bestimmten Schritt* gestartet
werden soll, oder ob für die gewählte Folge *Go* betätigt werden soll.

Klickt man in die Spalte 'Autoload Times' des betreffenden Cues, so kann
man für Fade-In, Fade-Out und Delay des Autoloads getrennte Zeiten
vergeben. Normalerweise werden die Zeiten verwendet, die in der Cueliste
für diesen Cue vergeben wurden. Alternativ kann man mit \[Use Individual
Target Times\] die Zeiten des externen Cues/Chasers/Cueliste verwenden, 
oder man vergibt direkt spezielle Zeiten.


Abrufen einer Tastenfolge (Makro) aus einer Cueliste
----------------------------------------------------

Es lassen sich Cues in Cuelisten programmieren, die eine vorgegebene
Tastenfolge ausführen. Damit lassen sich spezielle Aktionen ausführen,
sobald ein Cue gestartet wird. So lassen sich z.B. mit dem ersten Cue
alle Geräte zünden.

1.  Drücken Sie <Keys.SoftKey>Options</Keys.SoftKey>.

2.  Wählen Sie die Cueliste aus.

3.  Drücken Sie <Keys.SoftKey>Macros</Keys.SoftKey>

4.  Im Übersichtsfenster der Cueliste (Playback View) wählen Sie den
    Schritt, dem ein Makro hinzugefügt werden soll.

5.  Drücken Sie die Tasten/Schaltflächen der Makros, die mit diesem
    Schritt ausgeführt werden sollen. Oder drücken Sie <Keys.SoftKey>Add</Keys.SoftKey> und wählen
    ein Macro aus der Liste aus.

6.  Die Spalte 'Macros' zeigt die hinzugefügten Makros.

> Zum Entfernen der Makros aus dem Schritt wählen Sie den Schritt aus,
    wählen dann das zugefügte Makro, und betätigen die Kontext-Taste
    <Keys.SoftKey>Remove Link</Keys.SoftKey>.

Tastatursyntax für Cuelisten
----------------------------

Zum schnellen Speichern und Editieren von Cuelisten stehen
folgende Tastenkombinationen zur Verfügung; diese wirken auf die
aktuell mit der Steuerung verbundene (connected) Cueliste; <strong>n</strong>
bezeichnet die Cue-Nummer:

Tasten                                    | Funktion
----------------------------------------- | ------------------------------------------
<Keys.HardKey>Record</Keys.HardKey> <Keys.HardKey>Connect / Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Enter</Keys.HardKey>    | Cue <strong>n</strong> speichern
<Keys.HardKey>Copy</Keys.HardKey> <Keys.HardKey>Connect / Cue</Keys.HardKey> <strong>n</strong>                | Cue <strong>n</strong> kopieren
<Keys.HardKey>Delete</Keys.HardKey> <Keys.HardKey>Connect / Cue</Keys.HardKey> <strong>n</strong>              | Cue <strong>n</strong> löschen
<Keys.HardKey>Include</Keys.HardKey> <Keys.HardKey>Connect / Cue</Keys.HardKey> <strong>n</strong>             | Cue <strong>n</strong> includen (in den Speicher laden)
<Keys.HardKey>Connect / Cue</Keys.HardKey> <strong>n</strong> <Keys.HardKey>Go</Keys.HardKey>                  | Go Cue <strong>n</strong>
