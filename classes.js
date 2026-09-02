class Carro {
    #marca;
    #modelo;

    constructor(marca, modelo, ano, km) {
        this.#marca = marca,
            this.#modelo = modelo,
            this.ano = ano,
            this.km = km
    }

    get modelo(){
        return this.#modelo
    }

    set modelo(novoModelo){
        if(typeof novoModelo === 'string'){
            this.#modelo = novoModelo
        }else{
            console.log("NÃO FOI POSSIVEL")
        }
    }
}


const carroMarcos = new Carro('chevrolet', 'onix', 2015, '105000')
carroMarcos.modelo = 'onix'
console.log(carroMarcos.modelo)