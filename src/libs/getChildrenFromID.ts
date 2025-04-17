export default async function getChildrenFromID(token: string, PID: string) {
  const response = await fetch(
    // `${process.env.API_URL}child/${PID}`,
    `http://localhost:3002/api/v1/child/${PID}`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return await response.json();
}
