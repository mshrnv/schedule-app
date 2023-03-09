import axios from "axios"

export default class ClassroomService {
    static apiUrl = "http://localhost:5000/classrooms"
    static async getAllClassrooms() {
        const response = await axios.get(this.apiUrl)
        return response;
    }


}



