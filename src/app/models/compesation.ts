export class Compensation {
  constructor(
    public code: string,
    public currency: string,
    public estimate: boolean,
    public minAmount: number,
    public maxAmount: number,
    public periodicity: string,
    public visible: boolean
  ) {
  }
}
