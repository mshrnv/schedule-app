import axios from "axios"

export default class LessonService {
    static apiUrl = "http://localhost:5000/lessons"
    static async getLessonsByDate(date) {
        const response = await axios.get(this.apiUrl, {
            params: {
                date
            }
        })
        return response;
    }

    static async newLesson(data) {
        const response = await axios.post(this.apiUrl, {
            data
        })
        return response;
    }

    static async editLesson(filter, update) {
        const response = await axios.put(this.apiUrl, {
            filter,
            update
        })
        return response;
    }

    static async deleteLesson(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {
                filter
            }
        })
        return response;
    }
}



