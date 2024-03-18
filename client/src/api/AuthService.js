import axios from "axios"
import API_URL from "../config";
import authHeader from "../utils/AuthHeaders";


export default class AuthService {
    static apiUrl = API_URL + "/auth"

    static async login(username, password) {
        const response = await axios.post(this.apiUrl + "/login", {
            username,
            password
        })
        return response.data;
    }

    static async check_user() {
        const response = await axios.get(this.apiUrl + "/check",
            { headers: authHeader() })
        return response.data;
    }
}