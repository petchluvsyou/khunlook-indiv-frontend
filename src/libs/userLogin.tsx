import axios from 'axios';

export default async function userLogin(username: string, password: string) {
    try {
     const res = await axios.post('http://localhost:4000/auth', {
          USERNAME: username,
          PASSWORD: password
     });
        return res.data; 
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        } else {
            throw new Error('Failed to login');
        }
    }
}
