'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // State for individual field errors
  const [nameError, setNameError] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  // State for handling server error
  const [serverMessage, setServerMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const validateFields = () => {
    let isValid = true;

    // Reset previous errors
    setNameError('');
    setUsernameError('');
    setPasswordError('');
    setEmailError('');
    setServerMessage('');

    // Name validation
    if (name.trim().length === 0) {
      setNameError("Name is required.");
      isValid = false;
    } else if (name.length > 100) {
      setNameError("Name must be less than 100 characters.");
      isValid = false;
    }

    // Username validation
    if (username.trim().length < 1 || username.trim().length > 20) {
      setUsernameError("Username must be between 1 and 20 characters.");
      isValid = false;
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      setUsernameError("Username must contain only letters and numbers.");
      isValid = false;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      return; // Stop form submission if any field is invalid
    }

    const res = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'NAME': name,
        'USERNAME': username,
        'PASSWORD': password,
        'EMAIL': email,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setServerMessage(data.message);
      setMessageType('success');
      router.push('/login'); // Redirect to login after successful registration
    } else {
      const errorData = await res.json();
      setServerMessage(errorData.message);
      setMessageType('error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-md lg:max-w-screen-sm">
        <div className="p-4 w-full sm:p-6 lg:p-8">
          <h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-2xl dark:text-white">
            Create your account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {nameError && <span className="text-red-500 text-sm">{nameError}</span>}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {usernameError && <span className="text-red-500 text-sm">{usernameError}</span>}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {passwordError && <span className="text-red-500 text-sm">{passwordError}</span>}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {emailError && <span className="text-red-500 text-sm">{emailError}</span>}
            </div>

            {serverMessage && (
              <p className={`${messageType === 'success' ? 'text-green-500' : 'text-red-500'} text-center`}>
                {serverMessage}
              </p>
            )}

            <button
              type="submit"
              className="w-[25%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
