---
id: t1-and-t2
title: T1 and T2
sidebar_label: T1 and T2
---

import Video from '@site/src/components/video.tsx';

T1 and T2 are USB devices which plug into a Windows PC or laptop. See [minimum PC specifications](../titan-basics.md#connecting-up-t3--titan-mobile-and-t1t2) for details of the PC requirements. Both devices include an AvoKey.

**T1** will control a single universe of DMX, from its 5-pin XLR output or over Ethernet from the host computer (fixed to Universe 1). USB-MIDI devices are not supported.

![T1 USB DMX Dongle](/docs/images/T1.png)

**T2** will control two universes of DMX, output on two 5-pin XLRs or over Ethernet from the host computer (fixed to Universes 1 and 2). It has a 3-pin XLR input to connect
Audio for external triggering, or LTC timecode (this is a balanced input with a 600 ohm transformer across pins 2 and 3, pin 1 not connected). T2 also enables the use of a USB MIDI device plugged into the host computer for MIDI
triggering of Titan, which for example would allow you to use a MIDI fader surface. You can also connect 
the T3 or Titan Mobile fader wing to provide physical faders.

![T2 USB DMX Dongle](/docs/images/T2.png)



<Video videoId="wO94RvG6agI" title="T2 USB Interface"></Video>

The older Titan One dongle (now discontinued) also provided a single universe of DMX output on a 5-pin XLR or over Ethernet. USB-MIDI devices are not supported.

![Titan One Dongle](/docs/images/titan-one-cabled.png)

> This version of the Titan One dongle with the fixed USB cable does not include an 
  AvoKey; a separate AvoKey must be purchased and attached to another USB port on your
  computer to allow use of Titan v12 and later.

## Installing the Titan software

Install the Titan PC Suite software on your PC (see [Connecting up T3/Titan Mobile and T1/T2](../titan-basics.md#connecting-up-t3--titan-mobile-and-t1t2)) before
you plug in the USB, to make sure the correct drivers are installed. The link also lists some Windows settings you should check to avoid interruptions to your show.



The T1 and T2 devices use the Titan Go application. All functions are identical
to the Titan software used on consoles, but the operating screen layout is slightly different to a console
display as it provides virtual touch buttons and faders to replace the physical controls on the consoles.

![Titan Go User Interface](/docs/images/Titan-Go-User-Interface.png)
