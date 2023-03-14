//1. Crie uma função que recebe dois argumentos string e retorna o de maior comprimento.

const biggerstring = (string1, string2) =>{
    let theBiggerIs;
    
    if(string1.length > string2.length){
        theBiggerIs = string1
    } else{
        theBiggerIs = string2
    }
    console.log(`A strging de maior comprimento é ${theBiggerIs}`)
    return theBiggerIs
}
//resposta 1:
biggerstring('azul','vermelho')


//2. Crie uma função que recebe três argumentos, uma função e duas string, aplique a função nas duas string e imprima o resultado.

const myfunction3args = (functionarg, arg1, arg2) =>{
    let result = functionarg(arg1, arg2)
    return result
}

//resposta 2:
myfunction3args(biggerstring,'azul', 'vermelho')

//3. Crie uma função que recebe vários argumentos do tipo string e imprime todos juntos

const variablesArgs = (arg1,...moreargs) =>{
    console.log(arg1,...moreargs);
}

//resposta 3: 
variablesArgs('azul','verde', '2',6,'zero')

//4. Dado a seguinte string 'teste 1 de 2 string 3', substitua todas as ocorrências de números pelo valor '[removido]'.



//5. Dado o dicionário {4: 'a', 3: 'e', 1: 'i', 5: 's'} substitua os números na frase 'T35t3 d3 35t4g1o' conforme o dicionário.

const dictionary = {4: 'a', 3: 'e', 1: 'i', 5: 's'}
let thephrase = 'T35t3 d3 35t4g1o'

for(let i; i< thephrase.length; i++) {
    for(obj in dictionary){
        if(thephrase[i] == dictionary.obj){
            thephrase[i] = obj
        }
    }
};

console.log(thephrase);