import axios from "axios"

const CROP_REST_API_BASE_URL = 'http://localhost:8095';

class DealerService {
    
    registerDealer() {
        return axios.post(CROP_REST_API_BASE_URL + "/register");
    }

    getFarmerCrops(id) {
        return axios.get(CROP_REST_API_BASE_URL + "/farmer-crops", {
            farmerId: id
        });
    }

    addCrops({ cropName, cropPrice, cropQuantity }) {
        axios.post(CROP_REST_API_BASE_URL + "/addcrop", {
            cropName,
            cropPrice,
            cropQuantity
        });
    }

}

export default new DealerService()