import GrowthPanel from '@/components/GrowthPanel';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export default async function Page() {
	const session = await getServerSession(authOptions);

	return (
		<>
			<GrowthPanel token={session ? session.user.id : ''} />
		</>
	);
}
