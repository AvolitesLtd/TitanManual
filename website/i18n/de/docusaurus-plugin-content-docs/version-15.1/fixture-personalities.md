---
id: fixture-personalities
title: Die Personalities (Gerätedateien)
sidebar_label: Die Personalities (Gerätedateien)
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

Für jeden einzelnen Gerätetyp gibt es eine *'Personality'* genannte
Gerätedatei, welche bestimmt, wie das Gerät gesteuert wird, auf welchem
Kanal etwa der Dimmer (HTP) liegt, und die eine Menge weiterer
Informationen enthält. Beim Patchen wird dem Pult mitgeteilt, welche
Personality es verwenden soll.

Das Pult enthält bereits eine sehr große Auswahl solcher Gerätedateien
im internen Speicher,aber ebenso wie ständig neue Geräte auf dem Markt
erscheinen, aktualisiert Avolites ständig die Gerätebibliothek.

Es empfiehlt sich also, gelegentlich das Pult zu aktualisieren, um neue
Geräte 'im Pult' zu haben, um evtl. auch von Fehlerbehebungen zu
profitieren, sowie um schließlich auch neu hinzugekommene Möglichkeiten
wie z.B. die Teilgeräte (Zellen, Subfixtures) nutzen zu können.

## Herunterladen der Personalities bei Avolites

Auf der [Website von Avolites](http://personalities.avolites.com) sind 
sämtliche Geräte aufgeführt, für die es eine Avolites-Personality gibt. 
Hier sollte man als erstes nachsehen, wenn man ein bestimmtes Gerät sucht. 
Die Adresse ist http://personalities.avolites.com

[![Avolites Personalities Website](/docs/images/Avolites-Personalities-Website.png)](https://personalities.avolites.com/)

In der Liste links sind sämtliche verfügbaren Personalities aufgeführt.
Mit den Eingabefeldern direkt darüber lässt sich die Liste filtern, etwa
anhand des Herstellers, des Gerätenamens, oder danach, für welches Pult
man eine solche Datei sucht.

Klicken Sie nun auf den Gerätenamen in der Liste, um im Fenster rechts
die Details zu überprüfen. Hier werden nun sämtliche für dieses Gerät
verfügbaren Personalities aufgeführt (wird der obige Hinweis beachtet,
so tauchen hier nur Dateien für Ihr Pult auf).

Ist die gesuchte Personality in der Standard-Bibliothek enthalten, so
ist die entsprechende Spalte markiert.

Ist eine geeignete Personality aufgeführt, so laden Sie die komplette
Gerätebibliothek herunter und speichern Sie sie auf einem USB-Stick.

## Aktualisieren des Personality-Speichers des Pultes

Laden Sie wie oben beschrieben die aktuelle Personality-Library herunter
(durch Klick auf **Titan Fixture Library** auf der Startseite der
[Personalities-Seite](https://personalities.avolites.com), 
oder über den **Download**-Link oben auf der Seite, und
wählen danach **Titan Fixture Library**).

Es gibt verschiedene Download-Pakete, abhängig von der jeweiligen 
&nbsp;**Titan-Version**. Diese unterscheiden sich hinsichtlich der enthaltenen 
Capture-Library; die Titan-Personalities sind jedoch identisch.

> Beim Updaten gehen sämtliche von Ihnen in der Library vorgenommenen Änderungen 
  verloren. Um dies zu vermeiden, speichern Sie Ihre persönlichen Personalities im 
  Ordner für Benutzer-Personalities, siehe nächster Abschnitt.

### Updaten der Personalities eines Pultes

1. Kopieren Sie die heruntergeladene Datei **TitanFixtureLibrary.exe** 
   auf einen USB-Stick, und verbinden Sie diesen mit dem Pult
2. Klicken Sie auf **Tools** oben links auf dem Bildschirm, dann auf
   **Control Panel** und schließlich auf **Titan Installers**.
3. Nun werden die auf dem USB-Stick gefundenen Installer angezeigt 
   *(im Hauptverzeichnis des USB-Sticks, Dateinamen nicht verändert)*,
   darunter auch die **TitanFixtureLibrary.exe**. Klicken Sie diese an, und
   bestätigen Sie den Dialog mit <Keys.HardKey>OK</Keys.HardKey>.<br/>
   Sollte die Datei nicht in diesem Menü zu finden sein, so öffnen
   Sie mit **Tools** > **Folders** den Explorer, navigieren zum 
   richtigen Laufwerk und Verzeichnis und starten die Datei per
   Doppelklick.
4. Starten Sie das Pult neu (Aus- und Einschalten, oder mit dem Befehl
   **Restart Software** aus dem Tools-Menü).

### Updaten der Personalities der Titan PC Suite

1. Starten Sie die heruntergeladene Datei **TitanFixtureLibrary.exe** per
   Doppelklick und bestätigen Sie den Dialog mit <Keys.SoftKey>OK</Keys.SoftKey>. Möglicherweise 
   wird eine Windows-Warnung ausgegeben.
2. Bestätigen Sie die Warnung der Window-Benutzerkontensteuerung mit <Keys.SoftKey>OK</Keys.SoftKey>.
3. Sobald die Installation der Library erfolgt ist, schließen und starten Sie die Titan-Software erneut.

> Das Pult speichert den Inhalt des Personality-Verzeichnisses
(FixtureLibrary) zwischen, sobald das Patch-Menü aufgerufen wird.
Daher muss die Software neu gestartet werden, sobald neue
Personalities eingespielt wurden (Tools -> Restart Software. Ein
kompletter Neustart des gesamten Pultes ist nicht erforderlich).

> Sobald ein Gerät gepatcht wurde, wird die zugehörige Personality in
die Show-Datei integriert. Deshalb werden bereits gepatchte Geräte
durch Änderungen in der Library nicht beeinflusst. Wählen Sie ggf. <Keys.SoftKey>Update Personality</Keys.SoftKey> 
aus dem Menü <Keys.HardKey>Patch</Keys.HardKey> <Keys.SoftKey>Edit Fixtures</Keys.SoftKey>, um
auch bereits gepatchte Geräte zu aktualisieren.

## Selbsterstellte Gerätedateien

Mit dem Programm 'Personality Builder', welches mit auf dem Pult
installiert ist, lassen sich bestehende Personalities anpassen sowie
neue erstellen.

> Das Pult lädt neue Personalities, sobald die Software neu gestartet 
wird. Haben Sie eine neue Personality eingefügt, so müssen Sie die 
**Software neu starten**, um die neue Personality verwenden zu können.

Sie können Ihre selbsterstellten Personalities in die normale
Personality-Bibliothek des Pultes integrieren. Allerdings werden in 
diesem Fall beim nächsten Aktualisieren Ihre Personalities gelöscht
und Änderungen rückgängig gemacht werden.

Um dies zu vermeiden, bietet sich ein spezielles Verzeichnis an: 
`D:\Personalities` bzw. bei der Titan PC-Suite ist dies `\Documents\Titan\Personalities`.

Beim Patchen wird dieser Ordner zuerst durchsucht; ist eine passende
Personality vorhanden, so wird diese anstelle der allgemeinen Bibliothek
verwendet. Dieser Ordner wird beim Updaten nicht überschrieben.

## Anfordern einer neuen Gerätedatei

Sollte es für ein bestimmtes Gerät noch keine Personality geben, so
fertigt Avolites diese gern an. Klicken Sie dazu in o.g. Internetseite
auf den Link [Request](https://personalities.avolites.com/?mainPage=Request%20Queue.asp&) auf
der [Personalities Website](https://personalities.avolites.com/), um 
die Einzelheiten anzugeben. Dabei sehen Sie auch eine Liste der momentan 
offenen Anforderungen; bitte vermeiden Sie Doppel-Anfragen.

Neu realisierte Personalities werden von Avolites direkt in die online
verfügbare Library integriert: um also eine solche Personality zu
installieren, laden Sie die Gesamtdatei und installieren diese, [wie oben
beschrieben](#updating-the-personality-library-on-the-console.

## Fehler der Personalities an Avolites berichten

Sollten Sie einen Fehler in der Gerätedatei eines Gerätes finden, so
wäre Avolites für eine Rückmeldung dankbar. Suchen Sie das entsprechende
Gerät auf der Website und klicken Sie auf die Schaltfläche **Report Bug**
rechts im Fenster. Ein Klick auf [Bug Reports](https://personalities.avolites.com/Bug%20Queue.asp) oben öffnet eine Liste
mit den momentan ausstehenden Problemen, um zu überprüfen, ob vielleicht
jemand anderes das gleiche oder ein ähnliches Problem schon gemeldet
hat.

## Im Notfall

Die Pult-Software enthält auch eine Liste an 'Generic Fixtures'
(Standardgeräten), mit denen man im Notfall auch Geräte programmieren
kann, für die es keine Personality gibt. Dazu suchen Sie beim Patchen
den Hersteller 'Generic'. Dort finden sich u.a. folgende Geräte:

Multi-DMX: bis zu 10 DMX-Kanäle, alles LTP. Wählen Sie die Anzahl der
DMX-Kanäle im Menü ‚Modes'. Nutzen Sie die Attributbank-Tasten sowie die
Funktionstasten, um die einzelnen Kanäle auszuwählen.

Generic RGB: Zum Steuern von RGB-Geräten, etwa LED-Leuchten. Dabei kann
man zwischen fünf Modi wählen:
- 1: **Dim**,  2: **R**,  3: **G**, 4: **B**
- ***VDim***, 1: **R**, 2: **G**, 3: **B**
- 1: **R**, 2: **G**, 3: **B**, 4: **Dim**
- ***VDim*** + 4x **RGB**
- 4x **RGB**

> ***VDim*** ist ein vom Pult emulierter 'virtueller' Dimmer für Geräte, die
über keinen solchen Gesamtkanal verfügen. Bei Verwendung dieses Kanals
werden automatisch die RGB-Werte entsprechend beeinflusst.