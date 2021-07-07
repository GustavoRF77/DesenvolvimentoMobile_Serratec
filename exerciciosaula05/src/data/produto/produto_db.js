import Realm from 'realm'

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto',
    properties: {
        produto_id: { type: 'int', default: 0 },
        produto_nome: 'string',
        produto_descricao: 'string',
        produto_preco: 'int'
    }
};

let realm_produto = new Realm({ schema: [ProdutoSchema], schemaVesion: 1 });


export default realm_produto;

let listarProdutos = () => {
    return realm_produto.objects('Produto');
}

let adicionarProdutos = (nome, descricao, preco) => {
    
    console.log(nome, descricao, preco);

    const ultimoId = realm_produto.objects('Produto').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 1 : ultimoId.produto_id;
    const proximoId = maiorId != 1 ? maiorId + 1 : maiorId;

    realm_produto.write(() => {
        const prod = realm_produto.create('Produto', {
            produto_id: proximoId,
            produto_nome: nome,
            produto_descricao: descricao,
            produto_preco: preco
        });
    });
}

export {
    listarProdutos,
    adicionarProdutos
}