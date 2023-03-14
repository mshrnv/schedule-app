import axios from "axios"

export default class ClassroomService {
    static apiUrl = "http://localhost:5000/classrooms"
    static async getAllClassrooms() {
        const response = await axios.get(this.apiUrl)
        return response;
    }

    static async deleteClassroom(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {
                filter
            }
        })
        return response;
    }

    static async addClassroom(data) {
        const response = await axios.post(this.apiUrl, {
            data
        })
        return response;
    }


}



