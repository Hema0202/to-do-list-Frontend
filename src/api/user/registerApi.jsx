import axios from "axios";

async function registerApi(data) {
    try {
        console.log("hii2")
        let res = await axios.post(import.meta.env.VITE_REACT_APP_API + "/register", data)
        .then(response => {return response.data})
        .catch((error) => {return error.response.data})
        console.log("hii1")
        alert(res.message);
        if(res.status) return res;
    } catch (error) {
        alert(error.message);
    }
}

export default registerApi;