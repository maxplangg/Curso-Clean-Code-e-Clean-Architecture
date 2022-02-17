import Item from "../src/Item";

test("Deve criar um Item", function () {
    const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000);
    expect(item.idItem).toBe(1);
})