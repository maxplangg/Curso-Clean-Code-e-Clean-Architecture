import OrderItem from "../src/OrderItem";

test("Deve criar um OrderItem", function () {
    const orderItem = new OrderItem(666, 10, 5);
    expect(orderItem.getTotal()).toBe(50);
})