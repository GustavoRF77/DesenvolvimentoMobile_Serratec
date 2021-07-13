import Realm from 'realm'

class FavoritosSchema extends Realm.Object { }
FavoritosSchema.schema = {
    name: 'Favorito3',

    properties: {
        favorito_id: 'int',
        favorito_nome: 'string',
        favorito_descricao: 'string',
        favorito_preco: 'string',
        favorito_url: 'string'
    },
    primaryKey: 'favorito_id'
};

class Login extends Realm.Object { }
Login.schema = {
    name: 'Login2',

    properties: {
        login_id: 'int',
        login_email: 'string',
        login_senha: 'string',
    },
    primaryKey: 'login_id'
};

let realm = new Realm({ schema: [FavoritosSchema, Login] });


export default realm;

const listarLogins = (email_user, senha_user) => {
    let sla = false
    let count = 0
    realm.objects('Login2').filter(item => {
        
        sla = email_user === item.login_email && senha_user === item.login_senha
        sla === true ? count += 1 : count 
         console.log(count, sla);
       
      



    });
    if(count == 1){
        return true
    }else{
        return false
    }
    
}



let adicionarLogins = (email, senha) => {
    let sla = false
    let count = 0
    realm.objects('Login2').filter(item => {
        
        sla = email === item.login_email
        sla === true ? count += 1 : count 
         console.log(count, sla);
       
      



    });
    if(count == 1){
        return true
    }
    

    console.log(email, senha);

    const ultimoId = realm.objects('Login2').sorted('login_id', true)[0];
    const maiorId = ultimoId == null ? 0 : ultimoId.login_id;
    const proximoId = maiorId == null ? 1 : maiorId + 1;

    realm.write(() => {
        const prod = realm.create('Login2', {
            login_id: proximoId,
            login_email: email,
            login_senha: senha,
        });


    });
    return false;
    
}

let listarFavoritos = () => {
    return realm.objects('Favorito3');
}

let adicionarFavoritos = (nome, descricao, preco, id, url) => {
    console.log(nome, descricao, preco);
 realm.write(() => {
        const prod = realm.create('Favorito3', {
            favorito_id: id,
            favorito_nome: nome,
            favorito_descricao: descricao,
            favorito_preco: preco,
            favorito_url:url
        });
    });
}

let deleteFavorito = (id) => {
    console.log(id);
 realm.write(() => {
        let deleteItem = realm.objectForPrimaryKey('Favorito3', id);
     realm.delete(deleteItem);

    });
}

export {
    listarFavoritos,
    adicionarFavoritos,
    deleteFavorito,
    listarLogins,
    adicionarLogins
}