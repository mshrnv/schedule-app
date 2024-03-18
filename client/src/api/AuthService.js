import axios from "axios"
import API_URL from "../config";

export default class AuthService {
    static apiUrl = API_URL + "/auth"

    static async login(username, password) {
        const response = await axios.post(this.apiUrl + "/login", {
            username,
            password
        })
        return response.data;
    }
}