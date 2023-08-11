import axios from "axios";
import Cookies from "js-cookie";

export default async function CheckToken() {
  const token = Cookies.get("token");
  const response = await axios.post("http://localhost:5000/check-token", {token});
  return response.data;
}
