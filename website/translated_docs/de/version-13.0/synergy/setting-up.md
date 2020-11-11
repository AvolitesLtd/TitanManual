---
id: version-13.0-setting-up
title: Setting up Synergy
sidebar_label: Setting up Synergy
original_id: setting-up
---

Verbinden
---------

Der/die Ai-Server und das Pult müssen per Ethernet miteinander verbunden
sein. Vor allem für die [NDI-Vorschauen](operating-synergy.md#vorschau-mit-dem-media-viewer) und beim Hochladen von Clips
kommt es zu einem erheblichen Datenaufkommen. Daher sollten möglichst
folgende Hinweise beachtet werden, um ein zuverlässiges Arbeiten zu
ermöglichen:

-   Es sollte sich um ein Gigabit-Netzwerk handeln (1 Gbit/s).

-   Nach Möglichkeit ein getrenntes Netzwerk für Synergy.

-   Bei der Verwendung der PC-Suite sollte die Windows Firewall
    deaktiviert sein.

Sollte es zu Problemen kommen, Titan und die Ai-Software miteinander zu
verbinden, so ist insbesondere die Softwareversion (müssen identisch
sein) sowie die Netzwerkkonfiguration (unterschiedliche IP-Adressen,
aber im gleichen Bereich; gleiche Subnetz-Masken) zu überprüfen. Mehr dazu
in [Einrichten des Netzwerkbetriebs](../networking.md).

Einrichten der Show in Ai
-------------------------

Einfache Setups mit nur einem einzelnen Display oder Projektor können
ganz einfach direkt vom Pult aus eingerichtet werden. Starten Sie in Ai
ein leeres Projekt und folgen Sie den Anweisungen im [nächsten Abschnitt](#einrichten-von-synergy),
um mittels Synergy Screens und Layer anzulegen.

Für kompliziertere Setups ist dagegen die Einrichtung der Screens in Ai
vorzunehmen (siehe Ai-Handbuch). Diese werden dann in Synergy in Titan
angezeigt, und man kann wie beschrieben Layer hinzufügen oder
umbenennen.

Einrichten von Synergy
----------------------

In Titan öffnen Sie das Fenster **Synergy Settings**, entweder mit dem
entsprechenden Workspace bei neuen Shows, oder über das Menü 'Open
Workspace Window'.

Dieses Fenster ähnelt entfernt dem der [DMX-Einstellungen](../system-settings/dmx-output-mapping): hier stellt
man ein, wie Titan die einzelnen Outputs von Ai ansteuert. Ebenso kann
man hier Layer hinzufügen oder löschen sowie komplett neue Surfaces
anlegen (müssen ggf. in Ai noch genauer eingestellt werden).

![Synergy Settings Window](/docs/images/Synergy-Settings-Window.png)

Links sind die verfügbaren Ai-Server mit ihren Outputs aufgeführt. In
der Mitte sind die in Titan angelegten Surfaces und Layer aufgeführt.
Linien zwischen den Outputs und Surfaces zeigen die Zuordnung an. Unten
tauchen die Surfaces auf, die zwar in Ai schon angelegt sind, aber noch
nicht in Titan. Dieses sind die ‚unmatched' (nicht zugewiesenen)
Surfaces.

Klickt man auf das \[ + \] unten und wählt aus der aufklappenden Liste
'Surface', so wird ein neues Surface hinzugefügt. Dieses erscheint in
der mittleren Spalte oben. Neue Surfaces haben zunächst immer zwei
Layer.

![Synergy Settings Window screen settings](/docs/images/Synergy-Settings-Window-screen-settings.png)

Klickt man in der mittleren Spalte oben auf die Titelleiste eines
Surfaces, so werden rechts die entsprechenden Optionen angezeigt. Damit
lässt sich die Auflösung einstellen, wahlweise per Auswahl aus einer
Liste oder per numerischer Eingabe. Ganz rechts oben kann man mit dem
farbigen Button das Halo des Surfaces ändern sowie mit dem Stift-Icon
die Legende (Bezeichnung) bearbeiten (beides ist auch wie gewohnt per
\[Set Legend\] möglich).

Klickt man innerhalb eines Surfaces auf einen Layer, so werden rechts
die Optionen des Layers angezeigt. Damit kann man einen Speed- oder
BPM-Master für den Layer zuweisen.

Sind weder Surfaces noch Layer angewählt, so werden rechts allgemeine
Informationen über das System angezeigt. Es gibt die Option 'Automatic
NDI Previews', mit der NDI-Streams ein- bzw. ausgeschaltet werden.
Verwendet man das Vorschaufenster (Media Preview), so müssen NDI
Previews aktiviert sein - verwendet man das nicht, so empfiehlt es
sich, die Option zu deaktivieren, um das Netzwerk zu entlasten.

Ist in Titan ein Surface angelegt, so muss dies einem Ai-Surface (in Ai:
Screen Fixture) zugewiesen werden. Dazu klickt man auf den Link-Button
des nicht zugewiesenen Ai-Surfaces unten und danach auf das
Titan-Surface oben. Wählt man dagegen **Link to new Surface**, so wird ein
neues Titan-Surface angelegt und verknüpft.

![Synergy Settings Window linking a screen](/docs/images/Synergy-Settings-Window-linking-a-screen.png)

Sind die Surfaces verknüpft, so wird dies über eine farbige Linie zum
Server angezeigt, und das nicht verknüpfte Surface unten verschwindet.

![Synergy Settings Window with a linked screen](/docs/images/Synergy-Settings-Window-with-a-linked-screen.png)

Das Surface lässt sich auch mit mehreren Ai-Outputs verknüpfen, wenn man
z.B. den gleichen Content auf mehreren Outputs verwenden will. Dazu
klickt man auf das Surface in der Mitte und danach links auf den
zusätzlichen Output.

Ist ein Layer verknüpft, so wird das in Ai in den Layer Properties mit
**Synergy Control: Enabled** angezeigt. Dieser Layer kann nun nicht von Ai
direkt, sondern nur über Titan/Synergy gesteuert werden.

![Avolites Ai Layer Adjustments](/docs/images/Avolites-Ai-Layer-Adjustments.png)

Um einen weiteren Layer hinzuzufügen, klickt man auf das Surface, dann
auf den \[ + \] - Button unten, und wählt 'Layer'.

Um einen Layer oder ein Surface zu löschen, wählt man dieses aus und
klickt unten auf das Papierkorb-Symbol, oder man drückt \<Delete\> und
klickt dann auf das zu löschende Element. Ist dabei Ai verbunden, so
wird der Layer bzw. das Surface (Screen Fixture) auch in Ai gelöscht.

Das Fenster Synergy Fixtures
----------------------------

Jeder Layer erscheint als Button im Fenster 'Synergy Fixtures'. Dies
kann man entweder mit dem Button \[View Synergy Fixtures\] im [Synergy
Settings-Fenster](#einrichten-von-synergy) oder wie gewohnt über \[Open Workspace
Window\] (Fenster öffnen) aufrufen.

![Synergy Fixtures Workspace Window](/docs/images/Synergy-Fixtures-Workspace-Window.png)

Durch Anklicken lassen sich einzelne oder mehrere Layer auswählen, wie
man auch sonst Dimmer oder Movinglights zum Steuern auswählt. Sind Layer
ausgewählt, so kann man im [Attribut-Editor](operating-synergy.md#layer-steuern-mit-dem-attribut-editor) oder einfach mit den
Attributtasten und [Encodern](../controlling-fixtures/using-the-select-buttons-and-wheels.md#einstellen-von-attributen-mit-den-encodern) Medien und Effekte steuern, die darauf
angezeigt werden. Genauso lassen sich auch [Paletten](../palettes/creating-palettes.md) oder [Playbacks](../cues/creating-a-cue.md#anlegen-eines-cues)
speichern, wie das mit anderen Fixtures gewohnt ist. Es wird im [folgenden Abschnitt](operating-synergy.md) näher erläutert.

>   Die Synergy-Layer werden in einem eigenen Fenster angelegt, damit
    man eine bessere Übersicht hat. Wenn gewünscht, kann man diese
    aber in das normale Fixture (Geräte)-Fenster verschieben, um alles
    an einem Platz zu haben.