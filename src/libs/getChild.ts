export default async function getChild(token: string, user_id: string) {
	const response = await fetch(
		`http://localhost:3002/api/v1/child/${user_id}`,
		{
			method: 'GET',
			headers: {
				authorization: `Bearer ${token}`,
			},
		},
	);

	if (!response.ok) {
		throw new Error('Failed to fetch user profile');
	}

	return await response.json();
}
