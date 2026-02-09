export interface Configuration {
  title: string;
  category: string;
  usage: string;
  status: string;
  responsibleOrganisation: Document[];
  publicationDate: string;
  descriptionFileName: string;
  specificationDocuments: Document[];
  documentation: Document[];
  charter: Document;
  reports: Document[];
  presentations: Document[];
  implementations: Document[];
  relevantStandards: Document[];
  dataExamples: Document[];
  dateOfRegistration: string;
  dateOfAcknowledgementByWorkingGroup: string;
  dateOfAcknowledgementBySteeringCommittee: string;
  datePublicReviewStart: string;
  datePublicReviewEnd: string;
  endOfPublicationDate: string;
  domain: string;
  functionalScope: string;
}

interface Document {
  name?: string;
  resourceReference?: string;
}
