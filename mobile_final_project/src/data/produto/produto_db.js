import Realm from 'realm'

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto3',

    properties: {
        produto_id: 'int',
        produto_nome: 'string',
        produto_descricao: 'string',
        produto_preco: 'int'
    },
    primaryKey: 'produto_id'
};

let realm_produto = new Realm({ schema: [ProdutoSchema] });


export default realm_produto;

let listarProdutos = () => {
    return realm_produto.objects('Produto3');
}

let adicionarProdutos = (nome, descricao, preco) => {

    console.log(nome, descricao, preco);

    const ultimoId = realm_produto.objects('Produto3').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 0 : ultimoId.produto_id;
    const proximoId = maiorId == null ? 1 : maiorId + 1;

    realm_produto.write(() => {
        const prod = realm_produto.create('Produto3', {
            produto_id: proximoId,
            produto_nome: nome,
            produto_descricao: descricao,
            produto_preco: preco
        });


    });
}

let deleteProduto = (id) => {
    console.log(id);
    realm_produto.write(() => {
        let deleteItem = realm_produto.objectForPrimaryKey('Produto3', id);
        realm_produto.delete(deleteItem);

    });
}

let atualizarProduto = (id, nome, descricao, preco) => {
    realm_produto.write(() => {
        const person = realm_produto.create(
            "Produto3",
            { produto_id: id, produto_nome: nome, produto_descricao: descricao, produto_preco: preco },
            "modified"
            );
    });

}

export {
    listarProdutos,
    adicionarProdutos,
    deleteProduto, 
    atualizarProduto
}
