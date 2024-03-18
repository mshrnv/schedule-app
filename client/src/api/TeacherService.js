import axios from "axios"
import API_URL from "../config";
import authHeader from "../utils/AuthHeaders";

export default class TeacherService {
    static apiUrl = API_URL + "/teachers"

    static async getAllTeachers() {
        const response = await axios.get(this.apiUrl, {
            headers: authHeader()
        })
        return response;
    }

    static async deleteTeacher(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {filter},
            headers: authHeader()
        })
        return response;
    }

    static async addTeacher(data) {
        const response = await axios.post(this.apiUrl,
            {data},
            {headers: authHeader()})
        return response;
    }
}



