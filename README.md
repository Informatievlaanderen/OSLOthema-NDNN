# TITEL VAN TRAJECT

<!--TODO: pas de titel aan van de README naar de naam van het traject zoals bijvoorbeeld 'Energiehuis'-->

## Inleiding

<!--TODO: inleidende beschrijving van het traject-->

## Verslagen en presentaties

De verslagen en presentaties van dit traject kan je terugvinden op het [Standaardenregister](https://data.vlaanderen.be/standaarden).

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
