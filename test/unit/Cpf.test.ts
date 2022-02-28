import Cpf from "../../src/domain/entity/Cpf";

test("Deve testar um cpf válido", function () {
	const cpf = new Cpf("935.411.347-80");
	expect(cpf.getValue()).toBe("935.411.347-80")
});

test("Deve testar um cpf inválido com dígitos iguais", function () {
	expect(() => new Cpf("111.111.111-11")).toThrow(new Error("CPF Inválido"));
});

test("Deve testar um cpf inválido com dígitos diferentes", function () {
	expect(() => new Cpf("123.456.789-99")).toThrow(new Error("CPF Inválido"));
});

test("Deve tentar validar um cpf inválido muito grande", function () {
	expect(() => new Cpf("123.456.789-1000")).toThrow(new Error("CPF Inválido"));
});

test("Deve tentar validar um cpf inválido muito pequeno", function () {
	expect(() => new Cpf("123.456")).toThrow(new Error("CPF Inválido"));
});

test("Deve tentar validar um cpf inválido vazio", function () {
	expect(() => new Cpf("")).toThrow(new Error("CPF Inválido"));
});