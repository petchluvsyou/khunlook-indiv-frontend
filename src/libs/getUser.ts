export default async function getUser(token: string, user_id: string) {
     const response = await fetch(`http://52.221.239.141:3000/api/v1/user/${user_id}`, {
       method: "GET",
       headers: {
         authorization: `Bearer ${token}`,
       },
     });
   
     if (!response.ok) {
       throw new Error("Failed to fetch user profile");
     }
   
     return await response.json();
   }
   