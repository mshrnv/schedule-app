import axios from "axios"

export default class TeacherService {
    static apiUrl = "http://localhost:5000/teachers"
    static async getAllTeachers() {
        const response = await axios.get(this.apiUrl)
        return response;
    }

    static async deleteTeacher(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {
                filter
            }
        })
        return response;
    }

    static async addTeacher(data) {
        const response = await axios.post(this.apiUrl, {
            data
        })
        return response;
    }

}



