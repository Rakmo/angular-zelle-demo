export interface Recipient {
  id?: number;
  contactType?: string;
  firstName: string;
  lastName?: string;
  businessName?: string;
  token: string;
  tokenType?: string;
  isFriendOrFamily?: boolean;
}
