import axios from "axios";
export const getProtectedData = async()=>{
    const token = localStorage.getItem("token");

    if(!token){
        console.log("error");
        return;
        
    }

    try {
        const response = await axios.get("https://reqres.in/api/yout-endpoint",{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        console.log('Protected data:', response.data);
        return response.data;
    } catch (err) {
        console.error("Error fetching data " + err)

    }
}

export default getProtectedData;