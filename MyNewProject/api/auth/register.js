import apiClient from "../client";
const register=(userInfo)=>{
    return apiClient.post('register',userInfo)
}
export default{
    register
}