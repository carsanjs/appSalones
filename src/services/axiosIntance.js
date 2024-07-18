
import axios from 'axios'
const BASE_URL = `${process.env.URL_BACKEND_API}`;
console.log("axios instance", BASE_URL);

const axiosIntance = axios.create({BASE_URL});

axiosIntance.interceptors.response.use(
(response) => response,
(error) => {
    return Promise.reject(error);
}
)
export default axiosIntance;


// export const DeleteUserId = async (user: ID) => {
//     try {
//       const response = await axiosInstance.delete(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/delet/${user.user_id}`
//       );
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       return null;
//     }
//   };