import axios from "axios"
import API_URL from "../config";
import authHeader from "../utils/AuthHeaders";

export default class SelftrainingService {
    static apiUrl = API_URL + "/selftrainings"

    static async getUserSelftrainings(username) {
        const response = await axios.get(this.apiUrl + "/user", {
            params: {username},
            headers: authHeader()
        })
        return response;
    }

    static async getSelftrainingsByDate(date) {
        const response = await axios.get(this.apiUrl, {
            params: {date},
            headers: authHeader()
        })
        return response;
    }

    static async newSelftraining(data) {
        const response = await axios.post(this.apiUrl,
            {data},
            {headers: authHeader()})
        return response;
    }

    static async deleteSelftraining(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {filter},
            headers: authHeader()
        })
        return response;
    }
}



