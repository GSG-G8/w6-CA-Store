const connection = require('../src/database/config/connnection');
const build = require('../src/database/config/build')
const listProducts = require("../src/database/quieres/product/list");

beforeAll(()=> build())
afterAll(()=> connection.end())


test("test list of all product query", () => {
    
    listProducts()
    .then(res => expect(res.rows[0].name)
    .toEqual('product name1')
    );
});
