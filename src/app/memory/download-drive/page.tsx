import React from 'react';
import filesData from '../data/file_drive';
import DownloadBox from '@/components/DownloadDrive';

const DownloadsPage: React.FC = () => {
    return (
        <div className="text-Dark flex justify-center items-center relative z-0 flex-col px-12 pt-40 pb-24 bg-Bg gap-1 w-full">
            <h1 className="font-bold text-3xl sm:text-6xl mb-6 text-center">ดาวน์โหลด</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filesData.map((file) => (
                    <DownloadBox
                        key={file.id}
                        image={file.image}
                        title={file.title}
                        url={file.url}
                        size={file.size}
                    />
                ))}
            </div>
        </div>
    );
};

export default DownloadsPage;
