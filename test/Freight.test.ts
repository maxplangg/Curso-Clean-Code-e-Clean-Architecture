import Dimension from "../src/Dimension";
import Freight from "../src/Freight";
import Item from "../src/Item";

test("Deve Clacular o frete de um item", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
    const freight = new Freight();
    freight.addItem(item, 2);
    const total = freight.getTotal();
    expect(total).toBe(60);
});

test("Deve Clacular o frete mínimo de um item", function () {
    const item = new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 0.9);
    const freight = new Freight();
    freight.addItem(item, 1);
    const total = freight.getTotal();
    expect(total).toBe(10);
});