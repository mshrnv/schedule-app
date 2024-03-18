import axios from "axios"
import API_URL from "../config";
import authHeader from "../utils/AuthHeaders";

export default class ClassroomService {
    static apiUrl = API_URL + "/classrooms"

    static async getAllClassrooms() {
        const response = await axios.get(this.apiUrl,
            {headers: authHeader()})
        return response;
    }

    static async deleteClassroom(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {filter},
            headers: authHeader()
        })
        return response;
    }

    static async addClassroom(data) {
        const response = await axios.post(this.apiUrl,
            {data},
            {headers: authHeader()})
        return response;
    }
}



