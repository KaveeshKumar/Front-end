import axios from "axios"

const CROP_REST_API_BASE_URL = 'http://localhost:8095/Crop';

class CropService {

    getAllCrops() {
        return axios.get(CROP_REST_API_BASE_URL + "/all");
    }

    getFarmerCrops(id) {
        return axios.get(CROP_REST_API_BASE_URL + `/farmercrop/${id}`);
    }

    addCrops({ name, cost, quantity, farmerid }) {
        return axios.post(CROP_REST_API_BASE_URL + "/add", {
            farmerid,
            name,
            cost,
            quantity
        });
    }

    deleteCrop(id) {
        return axios.delete(CROP_REST_API_BASE_URL + `/delete/${id}`);
    }

    updateCrop({ name, cost, quantity, farmerid, id }) {
        return axios.put(CROP_REST_API_BASE_URL + "/update", {
            id,
            farmerid,
            name,
            cost,
            quantity
        });
    }

}

export default new CropService()