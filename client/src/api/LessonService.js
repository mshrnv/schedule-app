import axios from "axios"
import API_URL from "../config";
import authHeader from "../utils/AuthHeaders";

export default class LessonService {
    static apiUrl = API_URL + "/lessons"

    static async getLessonsByDate(date) {
        const response = await axios.get(this.apiUrl, {
            params: {date},
            headers: authHeader()
        })
        return response;
    }

    static async newLesson(data) {
        const response = await axios.post(this.apiUrl,
            {data},
            {headers: authHeader()})
        return response;
    }

    static async editLesson(filter, update) {
        const response = await axios.put(this.apiUrl,
            {filter, update},
            {headers: authHeader()})
        return response;
    }

    static async deleteLesson(filter) {
        const response = await axios.delete(this.apiUrl, {
            data: {filter},
            headers: authHeader()
        })
        return response;
    }
}



