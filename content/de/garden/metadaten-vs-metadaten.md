+++ 
areas = []
date = 2023-08-17T15:00:00Z
frontpage = true
p_projects = ""
p_resource = ["opendata"]
title = "Metadaten vs Metadaten"
updated = ""
+++
Metadaten sind ein vielfach genutzter Begriff und man muss immer noch mal genau schauen, von welchen Metadaten gesprochen wird und bei Diskussion sich am besten erstmal verständigen, von welchen Metadaten man spricht.

Im Kontext Open Data und Datenportalen sprechen wir von Metadaten, die im DCAT-AP Format bereitgestellt werden.

Aber diese sind nur Daten, die das Portal und die Struktur der Bereitstellung, aber nicht die Daten selbst beschreiben. DCAT-AP steht für Data Catalogue Application Profile und in der Definition von DCAT-AP von der EU steht: DCAT Application profile for data portals in Europe. DCAT ist ein Vokabular, um Datenkataloge im Allgemeinen zu beschreiben.

Wenn wir beispielsweise eine CSV als Datensatz haben, dann beschreibt DCAT-AP nicht vorrangig die CSV Datei selbst, sondern das Vorkommen dieser CSV Datei in Datenportalen. Also entweder in dem eigenen Portal oder auf govdata.

Wenn man genau hinschaut, gibt es auch Felder in DCAT-AP, die Daten selber beschreiben. Zum Beispiel der Zeitraum der Daten, oder die geographische Abdeckung sind schon Beschreibungen, die auf die Daten selber zutreffen, aber nicht das, was man klassischerweise unter Metadaten der Daten bezeichnen würde.

Metadaten, die Daten beschreiben, sind aktuell meist im JSON Format und benutzen JSON-Schema zur Beschreibung der Daten. Eine Art wäre z.b. von fritcionless data. Mit frictionless Table Schema beschreibt man Tabellen-Daten. Dies wäre im klassischen Sinn Metadaten, die Daten beschreiben.

Wie wir sehen, sind Metadaten nicht gleich Metadaten. Es sind schon Daten, die Daten beschreiben, aber man muss genau hinsehen und sich einigen, über welche Metadaten wir sprechen.
