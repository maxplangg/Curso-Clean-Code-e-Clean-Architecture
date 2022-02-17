export default class Coupon {
    constructor(readonly code: string, readonly percentage: number, readonly expirationDate: Date) {
        if (!this.validate(expirationDate)) throw new Error("Cupom expirado");
    }

    private validate(expirationDate: Date) {
        return expirationDate.getTime() >= Date.now();
    }
}