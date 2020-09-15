---
id: version-14.0-using-a-cue
title: Using a Cue
sidebar_label: Using a Cue
original_id: using-a-cue
---

Da eine Vielzahl von Cues/Chasern gleichzeitig abgerufen werden kann,
folgt das Pult bestimmten Regeln zur Kombination der aufgerufenen Werte
verschiedener Cues. Diese werden als **HTP**- und **LTP**-Regeln bezeichnet.

HTP und LTP
-----------

Steuerkanäle können auf zwei Weisen verwaltet werden:

-   Dimmer und Helligkeitskanäle arbeiten nach dem Prinzip **'der höchste
    Wert hat Priorität' (Highest Takes Precedence, HTP)**. Ist ein
    HTP-Kanal mit verschiedenen Werten in mehreren Cues aktiv, so wird
    der höchste Wert ausgegeben. Wird ein Cue ausgeblendet, so werden
    die zugehörigen HTP-Kanäle ausgeblendet.

-   Alle anderen Kanäle arbeiten nach dem Prinzip **'der letzte Wert hat
    Priorität' (Latest Takes Precedence, LTP)**. Die letzte/neueste
    Änderung überschreibt alle vorherigen Werte, folglich wird der Wert
    des zuletzt aufgerufenen Cues ausgegeben. Beim Ausblenden eines Cues
    behalten LTP-Kanäle ihren Wert, bis dieser durch einen anderen Cue
    überschrieben wird.

Abrufen eines Cues
------------------

Zum Aufrufen eines Cues bewegen Sie den jeweiligen Regler (betätigen Sie
die \<Clear\>-Taste, um sicherzustellen, dass sich keine Werte im
Programmierspeicher befinden, da diese ansonsten die Werte der Playbacks
überschreiben würden).

-   Es lassen sich mehrere Cues gleichzeitig abrufen.

-   Die Werte der HTP-Kanäle werden durch den Regler beeinflusst; wird
    dieser etwa auf 50% gestellt, so zeigen alle HTP-Kanäle 50% ihres
    jeweils programmierten Wertes.

-   LTP-Kanäle werden getriggert, sobald der Regler über 0% bewegt wird.
    Ist eine Überblendzeit programmiert, so beginnen die LTP-Kanäle mit
    der Überblendung; ist keine solche hinterlegt, so wechseln die
    Kanäle sofort zu der neuen Einstellung *(außer falls der Cue auf
    ‚Mode 2' gestellt ist; siehe [Fader Modes](cue-timing.md#fade-modes))*.

-   Cues lassen sich ebenso mit der grauen **Flash**-Taste aufrufen
    (werden auf 100% geschaltet und zum sonstigen Ausgang addiert). Eine
    Solo-Funktion ergibt sich mit der blauen **Swop**-Taste (alle anderen
    aktiven Cues werden ausgeblendet). 'Flash' und 'Swop' funktionieren
    nur, sofern nicht ein anderes Funktionsprofil für die Tasten
    hinterlegt ist, siehe [Tastenprofile/Key Profiles](../system-settings/key-profiles.md).

-   Cues lassen sich vorab laden, indem die **Preload**-Funktion der
    grauen oder blauen Taste per [Tastenprofil/Key Profile](../system-settings/key-profiles.md) zugewiesen wird. *'Vorab
    laden' (Preload) stellt die Attribute nicht anderweitig aktiver
    Geräte auf die Werte des Cues ein, um zu verhindern, dass später
    unerwünschte Schwenks, Gobo- oder Farbwechsel während des Aufrufs
    des Cues sichtbar sind*. Zum Zuweisen der 'Preload'-Funktion halten
    Sie die \<AVO\>-Taste und drücken \[Edit Key Profile\], anschließend
    drücken Sie die Taste, die Sie ändern möchten (siehe [Tastenprofile/Key Profiles](../system-settings/key-profiles.md)). Berücksichtigen Sie, dass 
	diese Einstellung dann ggf. für sämtliche Tasten dieses Typs gilt.

-   Einzelne Cues lassen sich auch mittels Tasten mit ihrem Timing
    starten, indem man der entsprechenden Taste das [Tastenprofil/Key Profile](../system-settings/key-profiles.md) "Go"
    zuweist. Die Taste muss nicht gedrückt gehalten werden, um das
    Fade-In zu Ende zu führen. Der gleiche Cue kann mehrfach gestartet
    werden, ohne ihn zu releasen.

-   Wenn einzelne Playbacks nicht durch andere Playbacks für die
    gleichen Geräte überlagert werden sollen, so geben Sie dem Playback
    eine höhere **Priorität**. Wenn z.B. ein paar Movinglights sowohl als
    Rednerlicht als auch als Effektlicht eingesetzt sind, so können Sie
    dem Rednerlicht-Playback eine höhere Priorität geben. Siehe [Priority](playback-options.md#priority) in
    [Options](playback-options.md).

Wechsel der Playback-Seiten
---------------------------

Die Playback-Seiten lassen sich mit den Tasten 'Page+1' und 'Page-1' 
neben den Fadern sowie mit dem obere und unteren Bereich der 
Walzen-Schaltfläche im Display umschalten. Ebenso kann man in die Mitte 
der Walzen-Schaltfläche klicken und eine Seitennummer eingeben.

>   Wurden Cues auf den Schaltflächen gespeichert, so lassen sich die
    Seiten mit den 'Pages'-Schaltflächen im 'Playbacks'-Fenster wählen.

---

Die Benutzereinstellung [\[Playback Paging\]](../system-settings/user-settings.md#playback-paging) bestimmt über 
das Verhalten der Playbacks, wenn bei aktivierten Fadern die Playback-Seiten 
umgeschaltet werden:

### Pulte ohne Motorfader

-   Aktuell aufgerufene Cues bleiben beim Seitenwechsel normalerweise
    aktiviert (Playback Paging: **Always Hold**). Soll ein Cue aufgerufen 
	werden, der sich auf einem Fader befindet, der von einer vorherigen 
	Seite bereits aktiviert ist, so bewegen Sie diesen auf 0 und 
	aktivieren ihn wieder. Der vorherige Cue wird damit gestoppt, und 
	der neue aufgerufen. Jeder Fader kann somit stets nur auf einer Seite 
	aktiv sein.

-   Schaltet man die Einstellung dagegen auf **Never Hold**, dann kann jeder
    Fader auf mehreren Seiten unabhängig voneinander aktiv sein.
    Kehren Sie zu einer Seite zurück, von der bereits vorher ein Regler
    aktiv ist, so erhält dieser erst wieder die Kontrolle, sobald er auf
    dem bereits aktiven Wert steht; damit werden Sprünge bei der ersten
    Reglerbewegung verhindert. Ist ein Playback-Regler auf einer anderen
    Seite aktiviert, so wird das in pink angezeigt und die Seitennummer
    eingeblendet. 
	
-   Die Einstellung **Normal** bezieht sich auf den Vorgabewert, also bei 
    Pulten ohne Motorfader 'Always Hold'.

### Pulte mit Motorfadern

-   Voreinstellung: **Never Hold**. Cues bleiben beim Seitenwechsel aktiv, 
	aber die Fader sind der neuen Seite zugeordnet. Zum Deaktivieren eines 
	Cues von einer anderen Seite muss man auf diese zurückwechseln und den 
	Fader auf 0 ziehen. Ist ein Playback-Regler auf einer anderen Seite 
	aktiviert, so wird das in pink angezeigt und die Seitennummer eingeblendet.
    
-   Wechselt man die Einstellung auf **Always Hold**, so wird das von Pulten
    ohne Motorfader bekannte Verhalten aktiviert, und jeder Fader kann nur
	auf einer Seite aktiv sein.
	
-   Die Einstellung **Normal** bezieht sich auf den Vorgabewert, also bei 
    Pulten ohne Motorfader 'Never Hold'.

---

-   Für jede Playbackseite lässt sich eine Bezeichnung vergeben. Die
    Bezeichnung wird auf der auf der virtuellen Walze angezeigt. Zum Vergeben
    der Bezeichnung nutzen Sie im Hauptmenü \[Set Legends\], dann \[Page
    Legends\]. Solange man sich in diesem Menü befindet, lassen sich für
    mehrere Seiten Bezeichnungen vergeben.

-   Die festen Playbacks bzw. Executor-Tasten (sofern jeweils vorhanden)
    lassen sich mittels Makros ebenfalls umschalten. Die betreffenden
    Makros sind Teil der Personality-Bibliothek. Sollten die
    erforderlichen Makros auf Ihrem Pult nicht zur Verfügung stehen, so
    aktualisieren Sie zunächst die Personalities (und damit auch die
    Makros).

Anzeigen der aktuell laufenden Playbacks
------------------------

Im Fenster 'Active Playbacks' werden die aktuell laufenden Playbacks
angezeigt. Insbesondere wenn mehrere Playbacks auf mehreren Seiten
gestartet wurden, hat man damit einen schnellen Überblick, welche Cues
gerade aktiv sind, wo sie gestartet wurden und welche Attribute dadurch
gesteuert werden. Zum Aufrufen dieses Fensters wählen Sie \<View/Open\>, \[Open
Workspace Window\], \[Active Playbacks\].

![Active Playbacks Window](/docs/images/Active-Playbacks-Window.png)

Klickt man eine der Schaltflächen an, so wird das betreffende Playback
sofort deaktiviert (**gekillt**). Betätigt man \[Playback Options\], gefolgt von einer
der Playback-Schaltflächen, so kann man die jeweiligen Parameter ändern.

Master für Speed (Geschwindigkeit) und Size (Größe)
---------------------------------------------------

Die einzelnen Playbacks lassen sich verschiedenen Speed- und
Size-Masterreglern zuweisen; damit kann man das Tempo und die Größe von
enthaltenen [Shapes und Effekten](../effects.md) zentral steuern, oder - im Fall von
Chasern - direkt das [Chase-Tempo](../chases/chase-timing.md#rate-and-bpm-masters) 
beeinflussen. *Das ist sehr nützlich, um mehrere gleichzeitig laufende Cues 
gemeinsam zu steuern*.

Fader können aber auch Größe und Tempo der 'eigenen', also in diesem Cue
gespeicherten Effekte steuern. Dies wird über die Playback-Optionen
eingestellt, siehe [Fader Settings](playback-options.md#fader-tab)

Speed- und Size-Master sind detailliert beschrieben in [Speed and Size Masters](../running-the-show/playback-controls.md#speed-and-size-masters).

Freigeben (Release) laufender Playbacks
---------------------------------------

Ein aktuell laufendes Playback lässt sich freigeben (**releasen**),
indem man die Taste \<Release\> *(auf dem Pearl Expert: \<Off\>)* drückt,
gefolgt von der **Auswahltaste** des Playbacks. Damit kehren die
betreffenden Kanäle auf Ihre Werte vor Starten des Playbacks, auf das
zuletzt aktive Playback, zurück. Ist die Option \[Release to Home\] im
Release-Menü aktiviert, erfolgt das Release nach und nach bis zum
Einschaltzustand des Pultes (kann programmiert werden, siehe [nächster
Abschnitt](#programming-the-release-power-on-state)). Ist die Option 
nicht aktiviert, so erfolgt das Release bis
zum letzten Playback. Um alle Playbacks zu releasen, drücken Sie
\<Release\> und wählen aus dem Menü \[Release all playbacks\].

Es ist auch möglich, per [Tastenprofil/Key Profiles](../system-settings/key-profiles.md) 
die graue oder blaue Taste mit der Funktion ‚Release' zu belegen.

Das Freigeben erfolgt stets mit einer Überblendzeit. Deren Vorgabewert
sind 2s, dies kann im Release-Menü ‚(\<Release\> gedrückt halten) unter
\[Master Release Time\] geändert werden. Ferner kann man jedem Playback 
eine individuelle Relese-Zeit zuweisen ([Tab "Release"](playback-options.md#release-tab) der Optionen).

-   Um einen einzelnen Cue zu deaktivieren (‚Kill'), drücken Sie
    gleichzeitig die \<AVO\>-Taste und die **Swop-Taste** des Cues.

-   Man kann eine Maske definieren, die bestimmt, welche Attribute
    released werden sollen, wenn das Playback deaktiviert (killed) wird.
    Dazu dient die Option [\[Release Mask\]](playback-options.md#release-mask) in den [\[Playback Options\]](playback-options.md). Normalerweise bleiben alle Attribute
    auf den im Cue gespeicherten Werten. *Insbesondere für Cues mit
    Strobes und Effekten wird man das gelegentlich ändern wollen*.

Playbacks seitenweise releasen
------------------------------

Es können auch mehrere Playbacks auf einmal released werden. Drücken Sie
dazu \<Release\> und \<Goto Page\>, oder \<Release\> und die aktuelle
Seite (auf der Playback-Walze). Es gibt folgende Optionen:

\[Release This Page\] released alle aktiven Playbacks der aktuellen
Seite und Fadergruppe.

\[Release Playbacks Not On This Page\] released alle Playbacks, die
momentan von anderen Seiten aus in dieser Fadergruppe aktiv sind -
besonders zweckmäßig, um Playbacks zu releasen, die auf anderen Seiten
auf dem gleichen Fader aktiv sind.

\[Release All Playbacks In This Group\] released alle Playbacks in der
jeweiligen Fadergruppe.

> **"Fader Group"** (Fadergruppe) bedeutet hier den jeweiligen Bereich von
Fadern auf dem Pult, der getrennt Seiten wechseln kann. So sind etwa die
10 Fader unterhalb des Displays auf dem Arena bzw. dem Tiger Touch eine
Gruppe. Die 15 oberen sowie die 15 unteren Fader auf dem Tiger Touch
Faderwing bzw. links auf dem Arena sind zwei weitere getrennte
Fadergruppen.

Release Mask (Release einzelner Attribute)
------------------------------------------

Mit der Release-Maske lassen sich einzelne Attribute, und Geräte
releasen sowie Geräte aus Shapes entfernen. Es gibt eine globale
Release-Maske, die generell gilt, sofern nicht für einzelne Cues eine
individuelle Einstellung getroffen wurde.

### Globale Release-Maske

Ist für den Cue keine separate Maske erstellt worden, so erfolgt das
Release gemäß der globalen Release-Maske. Die Vorgabe ist, dass keine
Attribute released werden.

Um die Maske zu ändern, drücken Sie die Tastet \<Release\> und klicken
auf \[Global Release Mask\]. Auf der Schaltfläche der Funktionstaste
wird angezeigt, welche Attribute momentan angewählt sind.

![Global Release Mask](/docs/images/Global-Release-Mask.png)

### Lokale (individuelle) Release-Maske

Um für das jeweilige Playback eine bestimmte Maske einzustellen, klicken
Sie auf \[Playback Options\] und wählen das betreffende Playback aus.
Dann wählen Sie \[Release Mask\]. Ist diese auf \[Mask Source Global\]
eingestellt, so klicken Sie nochmals darauf; daraufhin wechselt die
Anzeige zu \[Mask Source Local\].

Werte für Release / Power On programmieren
------------------------------------------

Der Status, auf den die Lampen/Geräte beim Einschalten des Pultes
gesetzt werden bzw. zu dem sie nach dem Releasen aller Playbacks
zurückkehren, lässt sich getrennt programmieren. So kann es sinnvoll
sein, dafür ein Grundlicht auf der Bühne einzustellen.

Es lassen sich sowohl shared (gemeinsam genutzte) als auch individuelle
Werte pro Gerät einstellen. Werden shared Werte gespeichert, so muss das
- wie bei Paletten - nur für ein Gerät gemacht werden und gilt dann
für alle Lampen dieses Gerätetyps. Individuelle Werte dagegen gelten
jeweils nur für das einzelne Gerät.

1.  Nehmen Sie die gewünschten Einstellungen vor

2.  Drücken Sie \<Record\>, dann \<Release\>.

3.  Wählen Sie \[Shared values\] oder \[Individual values\].

4.  Klicken Sie die Funktionstaste \[Record\].

5.  Damit werden die Release-Werte gespeichert.

>   Zum Testen starten Sie ein oder mehrere Playbacks und releasen diese
    (\<Release\> sowie die jeweiligen Playbacks). Die Geräte sollten auf
    die programmierten Release-Werte zurückkehren.

Deaktivieren einzelner Geräte mit Off
-------------------------------------

Einzelne Geräte und Attribute können über das **Off**-Menü deaktiviert werden.
Damit bleiben die Werte zwar im Playback enthalten, werden aber nicht abgerufen.
Die programmierten Werte verbleiben dabei im Playback und können in der 
Playback-Ansicht wieder auf On geschaltet, also aktiviert werden.

Dazu drücken Sie die Taste \<Off\>, dann die **Select-Taste** des Playbacks. 
Wählen Sie die betreffenden Geräte aus, stellen Sie im Menü die Attributmaske
ein, und klicken Sie auf \[Off\], um wie gewünscht Attribute/Geräte/Shapes 
Off zu schalten.

Auf Titan-Pulten mit **Release** und **Off** auf der gleichen Taste würde
dies zum Releasen führen. Drücken Sie stattdessen \<Release/Off\>, dann 
aus dem Menü \[Off Playback Values\], und wählen Sie nun das Playback aus.
