'use client'; // Enables interactivity in the component

import React from 'react';

interface DownloadBoxProps {
    image: string;
    title: string;
    url: string;
    size: string;
}

const DownloadBox: React.FC<DownloadBoxProps> = ({ image, title, url, size }) => {
    const openLink = () => {
        window.open(url, '_blank');
    };

    return (
        <div className="flex items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-32 h-32 object-cover rounded-md"
            />
            {/* File Info */}
            <div className="ml-6">
                <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
                <p className="text-md text-gray-500 mt-2">Size: {size}</p>
                <button
                    onClick={openLink}
                    className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Open File
                </button>
            </div>
        </div>
    );
};

export default DownloadBox;
