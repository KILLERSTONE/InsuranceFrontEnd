export interface LoginForm {
  username: string;
  password: string;
}

export interface Policy {
  user_id: number;
  policyId: number;
  policyName: string;
  policyDetail: string;
  policyInsurer: string;
  policyTpa: string;
  policyFrom: Date;
  policyTo: Date;
}

export interface CardInfo{
  cardId: number;
  cardOwner: string;
  cardNo: number;
  securityCode: number;
  validThrough: Date;
}
