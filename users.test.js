const request = require("supertest");
const app = require("./app");

test("Obtener listado de usuarios", async () => {
    let resp = await request(app)
        .get("/users")
        .expect(200);

    console.log(resp.body);
    expect(resp.body).toBeTruthy();
    expect(Array.isArray(resp.body)).toBe(true);
});


describe("Probar que los usuarios existen", () => {
    test("Existente", async () => {
        let resp = await request(app)
            .get("/users/test@mail.com")
            .expect(200);
    
        console.log(resp.body);
        expect(resp.body).toBeTruthy();
        expect(resp.body.email).toBe("test@mail.com");
    });

    test("No existente", async () => {
        let resp = await request(app)
            .get("/users/no_existo@mail.com")
            .expect(404);
    
        console.log(resp.body);
        expect(resp.body).toBeTruthy();
        expect(resp.body.error).toBe("No existe");
    });
});

describe("Probar inserción de usuario", () => {
    test("Insertado", async () => {
        let resp = await request(app)
            .post("/users")
            .send({email : "Fulanito"})
            .expect(200);
    
        console.log(resp.body);
        expect(resp.body).toBeTruthy();
        expect(resp.body.email).toBe("test@mail.com");
    });
});
