# Geluidsmeldingen en -metingen

<!--TODO: pas de titel aan van de README naar de naam van het traject zoals bijvoorbeeld 'Energiehuis'-->

## Inleiding

<p>

Het OSLO-traject <strong>Nudging Down Night Noise (NDNN)</strong> heeft als doel een gestandaardiseerd semantisch datamodel te ontwikkelen voor het modelleren, interpreteren en uitwisselen van nachtelijke geluidsdata en overlastsignalen. Binnen dit traject werken verschillende lokale besturen samen aan een gemeenschappelijk kader om zowel objectieve geluidsmetingen als subjectieve meldingen en relevante contextdata op een consistente manier te beschrijven en te combineren.

</p>



<p>

Het datamodel brengt verschillende gegevensstromen samen, waaronder:

</p>



<ul>

&#x20; <li>continue geluidsmetingen via sensoren,</li>

&#x20; <li>meldingen en klachten over nachtlawaai (op geaggregeerd niveau),</li>

&#x20; <li>informatie over evenementen die afwijken van bepaalde geluidsnormen,</li>

&#x20; <li>contextuele data zoals weersomstandigheden.</li>

</ul>



<p>

Door deze gegevens semantisch op elkaar af te stemmen, ontstaat een uniform en herbruikbaar informatiemodel dat toelaat om nachtelijke geluidsbelasting beter te analyseren en op te volgen. Het model vormt de basis voor dashboards, monitoringtools en analysetoepassingen die door lokale en bovenlokale overheden kunnen worden ingezet.

</p>



<p>

Het NDNN-datamodel wordt uitgewerkt binnen het kader van <strong>Open Standaarden voor Linkende Organisaties (OSLO)</strong> en wordt ontsloten via <strong>Linked Data Event Streams (LDES)</strong>. Hierdoor wordt interoperabiliteit verzekerd tussen lokale besturen, Vlaamse overheden, kennisinstellingen en private partners, en kan de data hergebruikt worden binnen initiatieven zoals de <strong>Vlaamse Smart Data Space (VSDS)</strong>.

</p>



<p>

Vandaag wordt nachtelijke geluidsdata in Vlaanderen verzameld door uiteenlopende actoren, elk met eigen meetmethodes, databronnen, kwaliteitsniveaus en interpretatiekaders. Door het ontbreken van uniforme afspraken zijn deze gegevens moeilijk vergelijkbaar en krijgen beleidsmakers vaak slechts een gefragmenteerd en onvolledig beeld van het geluidsklimaat.

</p>



<p>

Daarnaast worden geluidsmetingen zelden systematisch gekoppeld aan contextinformatie, zoals:

</p>



<ul>

&#x20; <li>weersomstandigheden,</li>

&#x20; <li>evenementen,</li>

&#x20; <li>meldingen bij politie of meldpunten.</li>

</ul>



<p>

Hierdoor is het moeilijk om pieken in geluidsbelasting correct te duiden of te linken aan concrete oorzaken. Een geluidsoverschrijding betekent bovendien niet automatisch dat er sprake is van overlast: context en interpretatie zijn essentieel, maar worden vandaag vaak ad hoc of impliciet behandeld.

</p>



<p>

Lokale besturen beschikken daardoor vaak over minder bruikbare informatie dan burgers die dagelijks de nachtelijke situatie in hun buurt ervaren. Beleidsmedewerkers moeten veel manueel werk verrichten om gegevens te verzamelen, te interpreteren en te verantwoorden, en doen hiervoor regelmatig beroep op externe studiebureaus die tijdelijk en projectmatig data aanleveren.

</p>



<p>

Het NDNN-traject wil dit doorbreken door een eenduidig, open en semantisch rijk datamodel aan te bieden dat:

</p>



<ul>

&#x20; <li>objectieve metingen en subjectieve signalen samenbrengt,</li>

&#x20; <li>context expliciet modelleert,</li>

&#x20; <li>hergebruik en opschaling mogelijk maakt,</li>

&#x20; <li>en een datagedreven nachtlawaai-beleid ondersteunt.</li>

</ul>



<p>

Door deze standaardisatie kunnen lokale besturen gerichter analyseren waar en wanneer nachtelijke hinder optreedt, welke factoren hierop inspelen en welke nudgingmaatregelen (zoals communicatie, tijdelijke ingrepen of structurele aanpassingen) het meest effectief zijn. Dit leidt tot een meer coherente, transparante en onderbouwde aanpak van nachtelijke geluidsbelasting in Vlaanderen.

</p>





## Verslagen en presentaties

De verslagen en presentaties van dit traject kan je terugvinden op het [Standaardenregister](https://data.vlaanderen.be/standaarden/implementatiemodel-geluidsmeldingen-en-metingen).

## In deze repository

<!--TODO: voeg de bestanden toe die hier gelinkt worden en vul de changelog aan -->

EAP-files met de UML-diagrammen.\
Configuratie en bestanden voor het publiceren van de specs in de folders config, site-skeleton en templates.\
Een [changelog](./CHANGELOG) met wijzigingen tov vorige versies.\
Diverse resources:

- Een overzicht van de [use cases](./usecases.md)
- Een overzicht van gebruikte [bronnen](./bronnen.md) (standaarden, implementaties, regelgeving).
- Het [modelleringsrapport](./resources/Modelleerrapport.pdf).
- Een map met [datavoorbeelden](./datavoorbeelden).

## Issues

<!--TODO: pas de link aan naar het juiste repository -->

Via de tab [issues](https://github.com/Informatievlaanderen/OSLOthema-PAS-ME-AAN/issues) kan je opmerkingen en feedback over het model geven.

## Publicaties

<!--TODO: pas de DATUM aan als de standaard voorgelegd is op de WG en toon deze lijn pas als dat gebeurd is -->
<!--Volgende specificaties worden met de volgende status voorgelegd op WG datastandaarden van `DATUM`.-->

<!--TODO: Pas de tabel aan met de standaarden die uit dit traject voortvloeien met hun status, uitgiftedatum en de nodige links naar het AP, VOC, of IMP. Indien enkel AP of VOC, laat andere links weg-->

| Naam | Status | Uitgiftedatum | AP       | VOC      | IMP      |
| ---- | ------ | ------------- | -------- | -------- | -------- |
|      |        |               | [Link]() | [Link]() | [Link]() |

## Codelijsten

### Github actions - generate_codelist.yml

Deze workflow converteert een CSV-codelijst naar een Turtle (.ttl) RDF-bestand. Volg deze stappen om deze workflow te gebruiken:

1. Bereid uw CSV-bestand voor in het formaat dat wordt verwacht door de generator (bvb. `codelijsten/codelist.csv`)
2. Navigeer naar het tabblad **Actions** in de GitHub-repository
3. Selecteer de workflow **Convert the codelist.csv into a .ttl file**
4. Klik op **Run workflow** en geef het pad naar uw CSV-bestand op (bvb. `codelijsten/codelist.csv`)
5. De workflow voert het volgende uit:
   - Genereert een `.ttl`-bestand uit het opgegeven CSV-bestand
   - Verplaatst het gegenereerde bestand naar dezelfde map als uw CSV met de `.ttl`-extensie
   - Voert het gegenereerde bestand automatisch in en pusht het naar de repository

Het gegenereerde Turtle-bestand wordt opgeslagen naast uw CSV-bestand met dezelfde basisnaam maar met een `.ttl`-extensie.
