
const axios = require('axios');

/**
 * get all clients
 */
const getClients = ()=>{

    return axios.get('http://localhost:1337/clients');

}
//  get all consomations
const getConsomations = () =>{
    return axios.get('http://localhost:1337/consomations')
}

// get all months
const getMonths = () =>{
    return axios.get('http://localhost:1337/months')
}


// get all consomations for one client in all months

const getConsomationsForOneClient = (id) =>{
    // console.log(id)
    return axios.get(`http://localhost:1337/consomations?client=${id}`)
}

/**
 * post a client
 * @param newClient object like {
 *      id: integer
      firstname: String
        lastname: String
        phone:String
        sexe:String
        age : integer


 * }
 */
const postClient = (newClient)=>{

    return axios.post('http://localhost:1337/clients',newClient);

}


/**
 *
 * @param id client id
 */
const deleteClient = (id)=>{

    return axios.get(`http://localhost:1337/clients${id}`);

}


/**
 * post a client
 * @param id the client id
 * @param updatedClient object like {
 *      id: integer
       firstname: String
        lastname: String
        phone:String
        sexe:String
        age : integer


 * }
 *
 */
const updateClient = (id,updatedClient)=>{

     return axios.get(`http://localhost:1337/clients${id}`,updatedClient);

}


export {getClients,getMonths,getConsomationsForOneClient,updateClient,postClient,deleteClient,getConsomations}