var faker = require('faker-br');

export default {
    deliver: function(){

        var fullName = faker.fake('{{name.firstName}} {{name.lastName}}')
        var data = {
            fullName: `${fullName}`,
            cpf: faker.br.cpf(),
            email: faker.internet.email(fullName), 
            numberPhone: faker.phone.phoneNumber('(##) 9####-####'),

            address:{
                postalCode: "04534011",
                number: "1000",
                details: "AP 145",
            },
            
            
        }
        return data
    }
}