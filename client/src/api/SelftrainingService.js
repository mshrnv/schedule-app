import axios from "axios"

export default class SelftrainingService {
    static apiUrl = "http://localhost:5000/selftrainings"
    static async getUserSelftrainings(username) {
        const response = await axios.get(this.apiUrl, {
            params: {
                username
            }
        })
        return response;
    }

    static async newSelftraining(data) {
        const response = await axios.post(this.apiUrl, {
            data
        })
        return response;
    }

    static async deleteSelftraining(filter) {
        const response = await axios.delete(this.apiUrl, {
            filter
        })
        return response;
    }
}



