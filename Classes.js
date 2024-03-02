class Funcionario{
    constructor(nome,idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`meu nome é ${this.nome}, tenho ${this.idade} anos e tenho o cargo de ${this.cargo}` );
    }

    trabalhar(){
        console.log("Estou trabalhando");
    }
}

class Gerente extends Funcionario {
    constructor(nome,idade, cargo,departamento){        
        super(nome,idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(`${this.nome} esta gerenciando o departamento ${this.departamento}`)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome,idade, cargo,linguagem){
        super(nome,idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`${this.nome} esta programando ${this.linguagem}`)
    }
}

const gerente = new Gerente("Jose",54,"Gerente","Desenvolvimento");
const desenvolvedor = new Desenvolvedor("Diego",33,"Desenvolvedor","javascript");

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();
desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();