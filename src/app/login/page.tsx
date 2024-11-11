'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function Login() {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [serverMessage, setServerMessage] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerMessage('');

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setServerMessage('Invalid username or password');
    } else {
      router.push('/'); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-md lg:max-w-screen-sm">
        <div className="p-6 w-full lg:p-8 lg:p-10">
          <h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">Login to your account</h1>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            {serverMessage && (
              <p className="text-red-500 text-center mb-4">
                {serverMessage}
              </p>
            )}
            <button
              type="submit"
              className="w-[25%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded-md"
            >
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Not registered?
              <Link className="ml-1 text-blue-700 hover:underline dark:text-blue-500" href={"/register"}>
                Create an account.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}
