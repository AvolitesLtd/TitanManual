---
id: arena
title: Arena
sidebar_label: Arena
original_id: arena
---

import Keys from '@site/src/components/key.ts';

Das Arena hat fünf grundsätzliche Bedienungsbereiche:

![Arena](/docs/images/Arena.png)

\(A\) Der <strong>Touchscreen</strong> zeigt Schaltflächen zur Auswahl von Geräten,
Paletten und Gruppen. Ferner zeigt er Bezeichnungen der Playbacks, sowie
-- oben rechts -- die aktuelle Menüseite und die Bezeichnungen der
variablen Tasten.

\(B\) Die <strong>Playbacks</strong> dienen zur Auswahl und Steuerung von Bildern und
Abläufen: Cues, Cuelisten und Chaser. Auf der linken Seite gibt es dazu
noch \(C\) <strong>weitere Playbacks</strong>, auf die ebenfalls Cues, Cuelisten, Chaser
programmiert werden, aber auch Geräte gepatcht werden können.

\(D\) Das <strong>kleine Display</strong> bietet ebenfalls Platz für Arbeitsfenster. Auf
den vier Encodern daneben können z.B. Master komfortabel programmiert
werden. Auf den \(E\) <strong>Macrotasten</strong> darunter können häufig benutzte
Tastenfolgen gespeichert werden.

\(F\) Die <strong>Programmiersektion</strong> enthält alle Steuerelemente zum Einrichten
und Programmieren des Pultes.

![Arena controls](/docs/images/Arena-controls.png)

## Bedienoberfläche

\(G\) Die <strong>Arbeitsfenster</strong> auf dem Touchscreen zeigen Tasten für Geräte,
Paletten, Gruppen, Speicherplätze, Makros und anderes. Ebenso lassen
sich hier Attribute einstellen und Informationsfenster einblenden.

\(H\) Die <strong>Systemanzeige</strong> ist die Schaltzentrale des Pultes und liefert
Informationen über den jeweiligen Zustand. Hier werden diverse
Hinweisfenster eingeblendet, abhängig vom momentanen Arbeits- und
Programmierablauf.

\(I\) Die <strong>Menütasten</strong> (bezeichnet mit A -- G) dienen zur Auswahl
verschiedener Steuerungsoptionen. Im Display wird direkt neben jedem
Taster die jeweilige Funktion angezeigt, abhängig vom jeweiligen Status
des Pultes. Befehle dieser Taster sind in diesem Handbuch blau dargestellt,
 z.B. <Keys.SoftKey>Edit Times</Keys.SoftKey>

\(J\) Das <strong>Mini-Display</strong> kann weitere Arbeitsfenster anzeigen. Die vier
\(K\) <strong>Encoder</strong> daneben können wie normale Playbacks programmiert werden und
bieten sich insbesondere für Master an. Die Encoder sind gleichzeitig
Drucktaster; zum Auswählen beim Programmieren müssen sie gedrückt
werden.

\(L\) Auf den <strong>Makro-Tastern</strong> lassen sich häufig benutzte Abläufe von
Tastendrücken abspeichern, und dann mit einem einzigen Tastendruck
abrufen. Ebenso können hier Cues abgelegt werden.

![Arena controls 2](/docs/images/Arena-controls-2.png)

\(M\) Der <strong>Master</strong> (Hauptregler) steuert die Gesamthelligkeit aller über das
Pult abgerufenen Szenen. Normalerweise wird man den Regler auf '100%'
belassen. Der <strong>DBO-Taster</strong> dient zum unmittelbaren Dunkelschalten.

\(N\) Die <strong>Playbacks</strong> dienen zum Speichern und Abrufen von Cues (Szenen) und
Chasern/Cuelisten (Szenensequenzen). Mit den \(O\) <strong>Seitenwechseltasten</strong> kann
man zu verschiedenen Seiten der Playbacks wechseln. Im Touchscreen
werden oberhalb der Regler Informationen über jeden einzelnen
eingeblendet. Dazu gibt es links \(P\) <strong>weitere 30 Playbacks</strong>, organisiert in
zwei Bänken à 15 Playbacks, die jeweils gesonderte Seiten-Umschalttasten
haben.

\(Q\) Mit den <strong>Drehreglern</strong> (Encodern) werden sowohl Attribute der Geräte,
als auch Geschwindigkeit und Überblendung der Sequenzen eingestellt. Im
Touchscreen oberhalb der Räder wird angezeigt, welche Parameter momentan
mit welchem Rad verknüpft sind. Betätigen des <strong>Bildlaufschalters</strong>
schaltet die Räder in den Bildlauf-Modus: damit lässt sich eine
Auswahlbox über den Bildschirm bewegen.

\(R\) Mit dem <strong>Ziffern- und Tastenfeld</strong> lassen sich Werte eingeben sowie
Einstellungen des Pultes ändern.

\(S\) Mit den <strong>Funktionstasten</strong> sind verschiedene Funktionen verknüpft, etwa
Speichern, Kopieren, Speichern auf Disk.

\(T\) Mit den Tastern der <strong>Attributauswahl</strong> werden die Attribute der Geräte
angewählt (z.B. Farbe, Gobo, Bewegung, Fokus), welche dann durch die
Drehregler gesteuert werden sollen. Die jeweils aktiven Taster werden
durch LEDs angezeigt. Der untere (rote) Taster erlaubt das '<strong>Locaten</strong>'
von Geräten, indem sie auf eine vordefinierte
Startposition gesetzt werden.

## Anschlussfeld auf der Rückseite


![Arena Back Panel](/docs/images/Arena-Back-Panel.png)

\(U\) USB-Anschlüsse, Reset-Taster, Unterbrecher für die USV

\(V\) Monitor und Netzwerk, SMPTE und Audio

\(W\) DMX und MIDI in/out.

\(X\) Anschlüsse für Pultleuchten.

Sämtliche für das Pult erforderlichen Anschlüsse befinden sich auf der
Rückseite. Es gibt 8 DMX-Anschlüsse (XLR 5-pol), MIDI In/Out/Thru (5-pol
DIN), zwei XLR-Buchsen für Pultleuchten, vier
Ethercon-Ethernet-Anschlüsse vom integrierten Switch, einen opticalCon
Duo Glasfaseranschluss, einen DVI-Anschluss für einen externen
Bildschirm, drei USB-Anschlüsse, SMPTE Timecode-Eingang, Audio-Eingang
(6,3 mm Klinke) und einen Anschluss für einen Trigger-Schalter
(ebenfalls 6,3 mm Klinke).

Mit dem „Panel Reset"-Schalter werden die Panels zurückgesetzt, ohne die
Software neu zu starten. Allerdings wird dabei auch das DMX-Panel
resettet und daher das DMX-Signal unterbrochen.

Sollte das Pult einmal auf gar kein Kommando reagieren und auch mit dem
Hauptschalter nicht heruntergefahren werden können, so kann mit dem
Schalter "Battery Disconnect" die USV unterbrochen werden.

  >   Wird die USV zum Neustart des Pultes unterbrochen, so wird auch der integrierte Netzwerkswitch stromlos. Bitte berücksichtigen Sie dies beim Betrieb größerer Backup-Systeme.

Die Füße des Arena sind verstellbar, so dass die Neigung des Pultes
angepasst werden kann: heben Sie dazu das Pult hinten an und drücken Sie
auf der linken und rechten Seite jeweils den Knopf "Leg Release".

![Arena Leg](/docs/images/Arena-Leg.jpeg)
