import axios from "axios";

export default async function LoginUser(email: string, password: string) {
    try {
        const response = await axios.post("http://localhost:5000/login", { email, password });
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}