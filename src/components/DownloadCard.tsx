import Image from 'next/image';
import AppStoreDownloadButton from './AppStoreDownloadButton';
import GooglePlayDownloadButton from './GooglePlayDownLoadButton';

export default function DownloadCard() {
	return (
		<div className="bg-white">
			<div className="hidden lg:flex relative z-0 flex-row p-16 pt-40 gap-24 items-center justify-center">
				<div className="bg-white h-[600px] rounded-3xl">
					<Image
						src="/img/FamilyMembers.jpg"
						alt="logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-full w-auto object-contain rounded-[30px]"
					/>
				</div>
				<div className="flex-col text-right">
					<p className="text-4xl">และฟีเจอร์อีกมากมายที่ช่วยดูแล</p>
					<p className="text-8xl font-bold text-Yellow mb-8">คุณลูก</p>
					<div className="flex flex-row text-xl text-left justify-end gap-8 mb-8">
						<div className="flex flex-col">
							<p>• เมนูบันทึกความทรงจำ</p>
							<p>• เมนู บันทึกฟัน</p>
						</div>
						<div className="flex flex-col">
							<p>• เมนูนัดหมาย</p>
							<p>• เมนู Back up</p>
						</div>
					</div>
					<div className="flex text-xl font-bold mb-4">
						<p>ดาวน์โหลดฟรีที่</p>
					</div>
					<div className="flex flex-row gap-4">
						<div className="w-60">
							<AppStoreDownloadButton />
						</div>
						<div className="w-60">
							<GooglePlayDownloadButton />
						</div>
					</div>
				</div>
			</div>
			<div className="lg:hidden relative z-0 flex flex-col p-16 pt-36 gap-8 items-center">
				<div className="bg-Bg w-[100px] h-[180px] rounded-2xl">
					<Image
						src="/img/FamilyMembers.jpg"
						alt="logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-full w-auto object-contain"
					/>
				</div>
				<div className="flex text-sm font-bold pb-2">
					<p>ดาวน์โหลดฟรีที่</p>
				</div>
				<div className="flex flex-col gap-2">
					<AppStoreDownloadButton />
					<GooglePlayDownloadButton />
				</div>
			</div>
		</div>
	);
}
