+++
areas = []
date = 2022-04-25T08:00:00Z
p_projects = ""
p_resource = []
title = "Geänderte Verbindlichkeiten bei DCAT-AP.de"

+++
Einige der wichtigsten Änderungen sind die neuen Verbindlichkeiten von Feldern. 

Zum Beispiel wird jetzt `dct:spatial` und `dct:temporal` bei einem Datensatz als empfohlen und nicht mehr als optional eingestuft. 

Das ist ein sehr wichtiger Schritt, der noch schärfer hätte ausfallen können, aber ein Schritt in die richtige Richtung ist. Mit diesen beiden Eigenschaften beschreiben wir die räumliche und die zeitliche Komponente eines Datensatzes. 

## Räumliche Komponente `dcat:spatial`

> Ein räumlicher Bereich oder ein bezeichneter Ort. Er kann durch ein kontrolliertes Vokabular oder mit geographischen Koordinaten repräsentiert werden.

Je detaillierter desto besser, aber als Anfang reicht es schon die „oberste“ Ebene zu definieren. 

Ich würde empfehlen als ersten Schritt mindestens die Kommune anzugeben aus der der Datensatz kommt:

Hierbei gibt es mehrere Wege die Kommune darzustellen:

Zum Beispiel Münster kann auf zwei einfachen Wegen repräsentiert werden:

Geonames: [https://www.geonames.org/6553087](https://www.geonames.org/6553087 "https://www.geonames.org/6553087")

Oder über die EU: 

[http://publications.europa.eu/resource/authority/place/DEU_MSR](http://publications.europa.eu/resource/authority/place/DEU_MSR)

Wichtig hier ist der Verwendung einer URI anstelle eines Freitextfeldes. 

> dct:spatial kann sowohl geometrische Ortsbezüge, als auch geografische Ortsbezüge per URI und strukturierte Adressanschriften aufnehmen. 

Über URIs wollte ich demnächst auch mehr schreiben :) 

## Zeitliche Abdeckung `dcat:temporal`

> Ein Zeitintervall, welches durch Start- und Endzeitpunkt bezeichnet bzw. definiert ist.

Hieß in Version 1.x  „Zeitpunkt“ und war optional. 

Man kann sowohl ein Start und Enddatum definieren, kann aber auch nur eines von beiden enthalten. Mindestens das Startdatum sollte man angeben. Ein Enddatum ist natürlich vorteilhaft um besser verstehen zu können wie der Datensatz zeitlich einzuordnen ist. 

Ich würde allen Kommunen empfehlen Start und Entzeitpunkt zu verwenden. 

Darüber hinaus gibt es eine weitere Eigenschaft `dcat:temporalResolution` welche zusätzlich angegeben kann. (Dazu später mehr).