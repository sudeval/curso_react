const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

// Usando a funcao spread (...) do ES2015.
function clone(objeto) {
    // retorna cada atributo do objeto esperado como um novo objeto
    return { ...objeto};
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';

console.log(produto);
console.log(novoProduto);