export type Credentials = {
  userName: string;
  password: string;
  organizationName: string;
};

export type TPasswordReset = {
  resetPasswordBy?: string;
  code?: string;
  newPassword?: string;
  organizationName?: string;
};

export type SamlLoginDto = {
  applicationId: string;
  userName: string;
  password: string;
  samlRequest: string;
  relayState: string;
};
