
const axios = require('axios');

/**
 * get all clients
 */
const getClients = ()=>{

    return axios.get('https://testapi.io/api/qrcodeprotect/resource/clients');

}


/**
 * post a client
 * @param newClient object like {
 *      id: integer
        nom: String
        prenom: String
        telephone:String
        sexe:String
        poste : String
        age : integer

 * }
 */
const postClient = (newClient)=>{

    return axios.post('https://testapi.io/api/qrcodeprotect/resource/clients',newClient);

}


/**
 *
 * @param id client id
 */
const deleteClient = (id)=>{

    return axios.get(`https://testapi.io/api/qrcodeprotect/resource/clients/${id}`);

}


/**
 * post a client
 * @param id the client id
 * @param updatedClient object like {
 *      id: integer
        nom: String
        prenom: String
        telephone:String
        sexe:String
        poste : String
        age : integer

 * }
 *
 */
const updateClient = (id,updatedClient)=>{

     return axios.get(`https://testapi.io/api/qrcodeprotect/resource/clients/${id}`,updatedClient);

}


export {getClients,updateClient,postClient,deleteClient}