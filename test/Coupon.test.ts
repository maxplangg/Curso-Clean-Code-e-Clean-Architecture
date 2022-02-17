import Coupon from "../src/Coupon";

test("Deve criar um cupom válido", function () {
    const coupon = new Coupon("MAX20", 20);
    expect(coupon.code).toBe("MAX20");
})