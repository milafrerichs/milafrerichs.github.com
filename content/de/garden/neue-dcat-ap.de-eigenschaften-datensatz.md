+++
areas = []
date = 2022-05-02T13:00:00Z
frontpage = false
p_projects = ""
p_resource = []
title = "Neue DCAT-AP.de Eigenschaften: Datensatz"

+++
In der neuen Version 2.0 hat ein Datensatz ein paar interessante neue Eigenschaften bekommen, die ich hier gerne vorstellen würde.

Neu hinzugekommen sind die folgenden Eigenschaften eines Datensatzes:

* `dcatap:availability`
* `dcat:temporalResolution`
* `dcat:qualifiedRelation`
* `dct:isReferencedBy`
* `dct:references`
* `prov:qualifiedAttribtuion`
* `dcat:spatialResoltionInMeters`
* `prov:wasGeneratedBy`
* `dcatde:qualityProcessURI`

## Verfügbarkeit `dcatap:availability`

> Geplante Verfügbarkeit des Datensatzes als Auswahl aus einer festen Liste von Werten via DCAT-AP URIs.  DCAT-AP.de macht Vorgaben zur zu verwendenden Codeliste.

Diese Verfügbarkeitsgrade geben an, wie lange geplant ist, das Dokument verfügbar zu halten.

Aktuell sind folgende Eigenschaften erlaubt:

**AVAILABLE**
Data is available for a few years, medium term planning.

**EXPERIMENTAL**
Data is available on a trial basis for a short period, short term planning.

**STABLE**
Data will remain available in the long term.

**TEMPORARY**
Data can disappear at any time, no planning.

Ich habe vor mal eine ausführliche Analyse der verwendeten Metadatenfelder auf govdata durchzuführen.

Durch meine Arbeit am Musterdatenkatalog habe ich sowieso schon alle Metadaten verfügbar und muss diese „nur“ analysieren.