var faker = require('faker-br');

export default {
    deliver: function(){
        var data = {
            cpf: faker.br.cpf()
        }
        return data
    }
}