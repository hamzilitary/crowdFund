export class CrowdFundProject {

  fundsRaised: number = 0;
  public swag: boolean;

  constructor(public name: string, public starters: string[], public desc: string, public goal: number, public plans: string){}
}
