function len(valor){
    return valor.length;
}

test("Solo para ver si funciona Jest", () => {
    //throw new Error("No pasó");
    //expect(4).toBe(3);
    //expect(4).toBe(4);
    expect({}).toEqual({});
});

// test.only("Funciona len", () => {
//     let testObject = [1,4, "a"];
//     expect(len(testObject)).toBeGreaterThanOrEqual(0);
//     expect(len(testObject)).toBe(3);
//     expect(len(testObject)).toBeDefined();
// });

describe("Probar que funciona len", () => {
    let testObject = [1,4, "a"];
    test("Que sea positivo", () => {
        expect(len(testObject)).toBeGreaterThanOrEqual(0);
    });

    test("Longitud de 3", () => {
        expect(len(testObject)).toBe(3);
    });
    
});

test("Probar código asíncrono", (done) => {
    setTimeout(() => {
        let res = "Hola";
        expect(res).toBe("Hola");
        done();
    }, 2000);
});