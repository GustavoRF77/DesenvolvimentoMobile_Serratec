import Realm from 'realm'

class LoginSchema extends Realm.Object { }
LoginSchema.schema = {
    name: 'Login1',

    properties: {
        login_id: 'int',
        login_email: 'string',
        login_senha: 'string',
    },
    primaryKey: 'login_id'
};

let realm_login = new Realm({ schema: [LoginSchema] });


export default realm_login;


const listarLogins = (email_user, senha_user) => {
    let sla = false
    let count = 0
    realm_login.objects('Login1').filter(item => {
        
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
    realm_login.objects('Login1').filter(item => {
        
        sla = email === item.login_email
        sla === true ? count += 1 : count 
         console.log(count, sla);
       
      



    });
    if(count == 1){
        return true
    }
    

    console.log(email, senha);

    const ultimoId = realm_login.objects('Login1').sorted('login_id', true)[0];
    const maiorId = ultimoId == null ? 0 : ultimoId.login_id;
    const proximoId = maiorId == null ? 1 : maiorId + 1;

    realm_login.write(() => {
        const prod = realm_login.create('Login1', {
            login_id: proximoId,
            login_email: email,
            login_senha: senha,
        });


    });
    return false;
    
}


export {
    listarLogins,
    adicionarLogins,
}
