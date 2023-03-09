import axios from "axios"

export default class TeacherService {
    static apiUrl = "http://localhost:5000/teachers"
    static async getAllTeachers() {
        const response = await axios.get(this.apiUrl)
        return response;
    }


}



