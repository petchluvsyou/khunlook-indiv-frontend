import Footer from '@/components/Footer';
import TopMenu from '@/components/TopMenu';
import NextAuthProvider from '@/providers/NextAuthProvider';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import './globals.css';

export const metadata: Metadata = {
	title: 'Khunlook',
	description: '',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const nextAuthSession = await getServerSession(authOptions);
	return (
		<html lang="en">
			<body className="font-line-seed-sans text-black bg-Bg">
				<NextAuthProvider session={nextAuthSession}>
					<TopMenu />
					{children}
					<Footer />
				</NextAuthProvider>
			</body>
		</html>
	);
}
