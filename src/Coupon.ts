export default class Coupon {
    constructor(readonly code: string, readonly percentage: number, readonly expiraDate?: Date) {
    }

    isExpired(today: Date = new Date()) {
        if (!this.expiraDate) return false;
        return this.expiraDate.getTime() < today.getTime();
    }

    calculateDiscount(amount: number) {
        return (amount * this.percentage) / 100;
    }
}