import axios from "axios"

export default class AuthService {
    static apiUrl = "http://localhost:5000/auth"
    static async login(username, password) {
        const response = await axios.post(this.apiUrl + "/login", {
            username,
            password
        })
        return response;
    }
}