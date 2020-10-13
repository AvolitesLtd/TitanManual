---
id: version-14.0-chase-playback
title: Chase Playback
sidebar_label: Chase Playback
original_id: chase-playback
---

Abrufen eines Chasers
---------------------

Zum Starten eines Chasers bewegen Sie den entsprechenden Regler nach
oben *(oder Sie verwenden die **Swop** / **Flash**-Tasten)*. Der Chaser
beginnt daraufhin zu laufen. Am unteren Rand des Bildschirms oberhalb
des jeweiligen Reglers wird die Nummer des aktuellen Schritts sowie die
Geschwindigkeit angezeigt.

![Chase playing on a playback](/docs/images/Chase-playing-on-a-playback.png)


>   Die HTP-Kanäle (Helligkeit) werden durch den Fader gesteuert; sind
    [Einblendzeiten](chase-timing.md) programmiert, so endet das Einblenden 
	mit Erreichen des mit dem Fader eingestellten Werts. Die anderen (LTP-) Kanäle
    beginnen mit ihrem Einblenden (abhängig von den gewählten Zeiten),
    sobald der Regler über 0 bewegt wird.

Bei einem aktiven Chaser werden im Display oberhalb der Räder
Details der einzelnen Schritte angezeigt.:

![Connected chase with speed and crossfade controls](/docs/images/Connected-chase-with-speed-and-crossfade-controls.png)

Der Chaser lässt sich mit der \<Stop\>-Taste rechts neben den Rädern
vorübergehend anhalten. Drücken Sie \<Go\>, um den Chaser fortzusetzen.

Mit einer [Vielzahl von Optionen](chase-options.md) lässt sich das Verhalten 
von Chasern beeinflussen; diese werden im Rest dieses Kapitels erklärt.

Verbinden eines Chasers mit der Steuerung
-----------------------------------------

Wird ein Chaser aufgerufen, so ist dessen Steuerung automatisch den
Rädern (Geschwindigkeit, Überblendung) und \<Stop\>/\<Go\>-Tasten
zugeordnet: dies nennt sich **Connect** (Verbinden) des Chasers. Ist mehr
als ein Chaser aktiv, so lässt sich mit der \<Connect\>-Taste wählen,
welcher davon mit den Rädern/Tasten beeinflusst werden soll.

-   Zum Verbinden eines anderen Chasers drücken Sie die Taste
    \<Connect\>, und dann die **Swop**-Taste des gewünschten Chasers.

-   Zum Lösen der Zuordnung drücken Sie die \<Connect\>-Taste zweimal.

-   Das automatische Verbinden lässt sich mit der Option **"Auto Connect"**
    im Menü [User Settings > Wheels](../system-settings/user-settings.md#auto-connect) (Benutzereinstellungen)
    abschalten, wenn dieses Verhalten nicht erwünscht ist. In diesem
    Fall muss immer mit der \<Connect\>-Taste die Steuerung zugeordnet
    werden.

-   Es gibt außerdem die Benutzereinstellung "Auto View On Connect" in [User
    Settings > Wheels](../system-settings/user-settings.md#auto-view-on-connect). Ist
    dies aktiviert, so wird beim Connecten mit einem Chaser direkt die
    [Detailansicht (Playback View)](editing-a-chase.md#einen-chaser-zum-editieren-öffnen) 
	für den Chaser geöffnet. *Dies ist besonders sinnvoll, wenn man 
	zwischen mehreren Chasern hin- und herwechselt*.

>   Normalerweise werden Änderungen von Geschwindigkeit und Überblendung
    gespeichert. Dies lässt sich ändern, so dass solche Änderungen nur
    vorübergehend wirksam sind und beim Neu Laden einer Show die
    vorherigen Einstellungen wieder aktiviert werden. Dazu rufen Sie die
    [User Settings](../system-settings/user-settings.md) auf (\<AVO\>-Taste + \[User Settings\]) und stellen auf dem Reiter Times **[Connected View Sets](../system-settings/user-settings.md#connected-view-sets)** auf **Temporary Speed**. Dessen ungeachtet lässt sich eine geänderte Geschwindigkeit 
	explizit speichern: drücken sie dazu im Menü \[Set Times\] die Taste \[Save
    Temporary Speed\].


Geschwindigkeit und Überblendung einstellen
-------------------------------------------

Das linke Rad beeinflusst die Geschwindigkeit des verbundenen Chasers.
Die Geschwindigkeit wird im Display in 'Beats Per Minute' (BPM)
angezeigt. Ebenso lässt sich die Geschwindigkeit über die Zifferntasten
eingeben (s.u.). Die zuletzt gewählte Geschwindigkeit wird automatisch
gespeichert.

**Crossfade** ist die Überblendung zwischen den einzelnen Schritten. Bei
Crossfade = 0 werden die Geräte zwischen den einzelnen Schritten hart
umgeschaltet, bei Crossfade = 100 erfolgt ein allmähliches Überblenden
über die Gesamtdauer des Schrittes, und bei Crossfade = 50 bleiben die
Geräte die Hälfte der Zeit auf den eingestellten Werten, und blenden die
andere Hälfte auf die neuen Werte über.

![Chases crossfade diagram](/docs/images/Chases-crossfade-diagram.png)

Überblendung und Geschwindigkeit werden wie folgt eingestellt:

1. Wählen Sie \[Edit Times\] aus dem Hauptmenü, und drücken dann die
**Swop**-Taste des Chasers.

2. Zum Einstellen der **Überblendung** drücken Sie \[Xfade\] und geben mit
den Zifferntasten einen Wert von **0 ... 100** ein *(0 = hartes
Umschalten, 100 = komplettes Überblenden etc., s.o.)*.

3. Zum Eingeben der **Geschwindigkeit** drücken Sie \[Speed\], geben die
gewünschte Geschwindigkeit ein, und drücken \<Enter\>. *Abhängig von den
[Benutzereinstellungen](../system-settings/user-settings.md) kann die Geschwindigkeit in 'Beats Per Minute'
(BPM) oder Sekunden eingegeben werden*.

In diesem Menü lassen sich noch weitere Optionen einstellen, etwa das
Geräte-Überlappen. Details dazu finden sich im Abschnitt [Zeiten bei Chasern](chase-timing.md).

Für jeden Schritt lassen sich getrennte Zeiten vergeben, ebenso lässt
sich die Schrittfolge unterbrechen, so dass der nächste Schritt auf das
Betätigen der \<Go\>-Taste wartet. Beides erfolgt entweder in der
Ansicht [Playback View](editing-a-chase.md#einen-chaser-zum-editieren-öffnen)
oder mittels der [\<Unfold\>](editing-a-chase.md#ändern-eines-chasers-mit-der-unfold-funktion)-Funktion, siehe auch 
[Editieren eines Chasers](editing-a-chase.md).

Die Anzeige der Geschwindigkeit lässt sich zwischen Sekunden und Beats
Per Minute (BPM) umschalten. Dazu drücken Sie \<AVO\> + \[User
Settings\], und wählen dann mit der Option \[Tempo Units\] zwischen
\[Tempo Units Seconds\](Sekunden) und \[Tempo Units Beats Per Minute
(BPM)\].

Ferner lässt sich der Chaser einem [Speed Master](../running-the-show/playback-controls.md#speed--und-size-master) zuordnen; 
dies erlaubt es, direkt während der Show die Geschwindigkeit zu steuern. 
Siehe auch [Speed and Size Masters](../running-the-show/playback-controls.md#speed--und-size-master).

Manuelle Steuerung der Schritte
-------------------------------

Ein verbundener Chaser lässt sich mit der \<Stop\>-Taste (neben den
Rädern) anhalten, und mit der \<Go\>-Taste fortsetzen.

Ist ein Chaser angehalten, so lässt sich mit den Pfeiltasten (\<←\> und
\<→\> bzw. \<Prev. Step\>/\<Next Step\>) bei der \<Connect\>-Taste der
nächste/vorherige Schritt wählen. Dabei erfolgt das Überblenden jeweils
in der eingestellten Zeit, es sei denn die [Benutzereinstellung \[Chase
Snap\]](../system-settings/user-settings.md#chase-snap) wird aktiviert oder man verwendet die Taste \<Snap\> (sofern
vorhanden).

Ebenso lassen sich die blaue und die graue Taste des Handles mit den
Funktionen 'Stop' und 'Go' belegen; dazu dient die Funktion [Key
Profiles (Tastenbelegungen)](../system-settings/key-profiles.md).

1. Halten Sie \<AVO\> gedrückt und drücken Sie \[Edit Current Key
Profile\].

2. Verwenden Sie momentan eines der nicht editierbaren Vorgabeprofile,
so werden Sie zum Anlegen eines neuen aufgefordert.

3. Drücken Sie \[Chases\], und wählen dann entweder die blaue oder die
graue Taste.

4. Wählen Sie aus dem Funktionen-Menü entweder \[Go\] oder \[Stop\].
Danach drücken Sie \<Exit\> und ändern ggf. noch die Funktion der
anderen Taste.

5. Drücken Sie \<Exit\>, um zum normalen Programmiermenü
zurückzukehren.

Ändern der Richtung eines Chasers
---------------------------------

Die Tasten \<Prev Step\>/\<Next Step\> (← und → auf manchen Pulten) 
rechts neben der \<Connect\>-Taste bestimmen die Richtung des 
verbundenen Chasers. Der Doppelpfeil \<↔\> (wenn vorhanden) steht dabei für
**Hin und Her**: der Chaser läuft in einer Richtung bis zum Ende, dann
wieder zurück zum Anfang, und so fort. Die Taste \<Review\> sorgt für
einen **zufälligen** Ablauf. 

Direktanwahl eines Schrittes
----------------------------
Man kann direkt zu einem bestimmten Schritt in einem Chaser springen:
drücken Sie dazu \<Connect\>, geben die gewünschte Schrittnummer ein,
und drücken \<Enter\> oder Funktionstaste A. Alternativ geben Sie im
Hauptmenü die Schrittnummer ein und drücken \<Connect\>.