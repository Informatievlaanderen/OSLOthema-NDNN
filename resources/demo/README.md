# Demo

## Use case 1: Medewerker wil de burgermeldingen oplijsten

Deze query lijst alle burgermeldingen op met de oorzaak.

**Query**: [usecase1-burgermeldingen-en-oorzaak.sparql](./queries/usecase1-burgermeldingen-en-oorzaak.sparql)
**Demo**: [Communica]()

## Use case 2: Medewerker wil alle metingen oplijsten die boven een drempelwaarde uitkomen

Deze queries lijsten alle metingen op van de sensoren, de eerste query toont alle metingen boven de 55 dbA, de andere toont ze allemaal.

**Query**: [usecase2-sensormeldingen-met-drempelwaarde.sparql](./queries/usecase2-sensormeldingen-met-drempelwaarde.sparql) en [usecase2-sensormeldingen-zonder-drempelwaarde.sparql](./queries/usecase2-sensormeldingen-zonder-drempelwaarde.sparql)
**Demo**: [Communica]()

## Use case 3: Medewerker wil burgermeldingen valideren op basis van metingen

Deze queries lijsten de sensors of metingen op die in de buurt van een burgermelding zich bevinden. De eerste query linkt de burgermelding aan sensoren. De twwede query toont alle metingen die op het moment van de burgermelding in de buurt zijn waargenomen.

**Query**: [usecase3-sensorlocaties-en-burgermeldingen-koppelen.sparql](./queries/ usecase3-sensorlocaties-en-burgermeldingen-koppelen.sparql) en [usecase3-burgermeldingen-valideren-door-sensormetingen.sparql](./queries/usecase3-burgermeldingen-valideren-door-sensormetingen.sparql)
**Demo**: [Communica]()
