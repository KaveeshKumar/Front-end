import axios from "axios"

const AUTHENTICATION_REST_API_BASE_URL = 'http://localhost:9000';

class AuthenticationService {

    getJwtToken(username, password) {
        return axios.post(`${AUTHENTICATION_REST_API_BASE_URL}/user/authenticate`, { username, password })
    }


    loginDealer(dealerId, token) {
        return axios.get(AUTHENTICATION_REST_API_BASE_URL + "/api/Dealer/Dealer/dealers/" + dealerId, { headers: { "Authorization": `Bearer ${token}` } });
    }

    loginFarmer(farmerId, token) {
        return axios.get(AUTHENTICATION_REST_API_BASE_URL + "/api/farmer/farmer/" + farmerId, { headers: { "Authorization": `Bearer ${token}` } });
    }

    loginAdmin(adminId, token) {
        return axios.get(AUTHENTICATION_REST_API_BASE_URL + "/api/Admin/Admin/" + adminId, { headers: { "Authorization": `Bearer ${token}` } });
    }

    signupFarmer(farmer) {
        return axios.post("http://localhost:9000/api/farmer/farmer/add", farmer, {headers: {'Content-Type': 'application/json','No-Auth': 'True'}});
    }

    signupDealer(dealer) {
        return axios.post("http://localhost:9000/api/Dealer/Dealer/adddealers", dealer, {headers: {'Content-Type': 'application/json','No-Auth': 'True'}});
    }

    signupAdmin(admin) {
        return axios.post("http://localhost:9000/api/Admin/Admin/add", admin, {headers: {'Content-Type': 'application/json','No-Auth': 'True'}});
    }


}

export default new AuthenticationService()