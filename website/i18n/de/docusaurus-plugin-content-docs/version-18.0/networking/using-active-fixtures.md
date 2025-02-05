---
id: using-active-fixtures
title: Verwenden von Geräten mit CITP
sidebar_label: Verwenden von Geräten mit CITP
---

import Keys from '@site/src/components/key.ts';
import Video from '@site/src/components/video.tsx';

CITP ist ein Protokoll zur Kommunikation von Geräten miteinander. Es
wird häufig benutzt, um etwa Thumbnails oder Informationen über
vorhandene Layer von Medienservern an Lichtpulte zu übertragen. Damit
kann man am Pult sehr einfach den gewünschten Clip identifizieren und
anwählen.

Dieser Abschnitt gilt nicht für Ai-Server, die mittels Synergy mit dem
Pult verbunden sind.

## Ein CITP-Beispiel

In diesem Beispiel wird ein Hippotizer mit einem Titan-Pult verbunden.

1. Verbinden Sie Pult und Hippotizer netzwerkseits (per Netzwerkswitch,
oder ggf. mittels eines Crossover-Kabels).
2. Stellen Sie die IP-Adressen so ein, dass beide nicht identisch, aber
in einem Bereich sind, also z.B. `192.168.0.1` und `192.168.0.2`.
3. Bei der Verwendung der Titan PC-Suite (Titan Mobiles oder Titan Simulator) ist ggf. die
Firewall zu deaktivieren; gleiches gilt für den Hippotizer.
4. Starten Sie den Hippotizer. Überprüfen Sie, dass die CITP
Component geladen ist.
5. Öffnen Sie das **System**-Menü (mittels <Keys.HardKey>Avo</Keys.HardKey> + <Keys.HardKey>Disk</Keys.HardKey>)
und wählen Sie <Keys.SoftKey>DMX Settings</Keys.SoftKey>.
6. Links im Fenster wird nun der Hippotizer mit seiner IP-Adresse als
Art-Net-Knoten angezeigt. Klicken Sie darauf und ordnen Sie ihn einer internen DMX-Linie zu.
7. Klicken Sie auf das kleine <Keys.ContextKey>Zahnrad</Keys.ContextKey> des zugeordneten Hippo-Knotens (rechts)
und überprüfen Sie, dass das eingestellte Universum mit den Einstellungen des Hippotizers übereinstimmt.
8. Schließen Sie das Fenster mit <Keys.HardKey>Exit</Keys.HardKey> und schalten Sie wieder in
das Programmier-Menü.
9. Starten Sie die Pult-Software neu (Schließen und neu starten, oder
<Keys.SoftKey>Tools</Keys.SoftKey>, <Keys.SoftKey>Restart Software</Keys.SoftKey>).
10. Zum Patchen wählen Sie nun <Keys.HardKey>Patch</Keys.HardKey>, <Keys.SoftKey>Active Fixtures</Keys.SoftKey>. Nun
taucht der Hippotizer als zu patchendes Gerät auf.
11. Wählen Sie diesen, und stellen Sie als DMX-Linie die in Schritt 6 gewählte ein.
12. Klicken Sie auf eine Geräte-Schaltfläche, um den Hippotizer zu
patchen. Das Pult legt daraufhin automatisch die vorhandenen Layer (incl. Master-Layer) als Geräte an.
13. Wird nun eines dieser Geräte ausgewählt, so zeigt der
Attribut-Editor die vorhandenen Clips als Thumbnails an.

Stellen Sie sicher, dass beim nächsten Start zuerst der Hippotizer und
erst dann das Pult gestartet wird.

Wird die DMX-Adresse geändert, so muss der Hippotizer neu gestartet
werden. Ebenso müssen im Pult die Art-Net-Knoten zurückgesetzt werden,
wenn diese neuen DMX-Linien zugeordnet werden.
