export type ApplicationAccess =
  | 'SAML'
  | 'Secure Web Authentication'
  | 'Provisioning';

export enum ApplicationRiskScore {
  HIGHT,
  MEDIUM,
  LOW,
}

export type ApplicationCategory = {
  name: string;
  categoryId: string;
  access: ApplicationAccess[];
  riskScore: ApplicationRiskScore;
};

export type Application = {
  id: string;
  name: string;
  organizationId: string;
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  applicationType: number;
  applicationUrl: string;
  signOnUrl: string;
  relayStateUrl: string;
  logOutUrl: string;
  photo: string;
};
