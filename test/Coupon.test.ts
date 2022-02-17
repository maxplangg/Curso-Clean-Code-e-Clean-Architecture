import Coupon from "../src/Coupon";

test("Deve criar um cupom válido", function () {
    const coupon = new Coupon("MAX20", 20, new Date(2022, 3, 19));
    expect(coupon.code).toBe("MAX20");
})

test("Deve criar um cupom inválido", function () {
    expect(() => new Coupon("MAX20", 20, new Date(2021, 3, 19))).toThrow(new Error("Cupom expirado"));
})