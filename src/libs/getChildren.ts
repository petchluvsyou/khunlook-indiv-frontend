export default async function getChildren(token: string) {
  const response = await fetch(
    `http://localhost:3002/api/v1/development/query-child`,
    {
      method: "POST",
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
