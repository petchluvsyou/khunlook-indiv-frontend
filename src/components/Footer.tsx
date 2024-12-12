import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className="relative z-0 flex flex-col p-12 pt-24 bg-Bg gap-12 text-center items-center mt-20">
			<div className="grid grid-cols-3 lg:flex lg:flex-row justify-center gap-12 flex-wrap">
				<Link href={'https://www.nrct.go.th/'}>
					<Image
						src="/img/logo/NRCT.png"
						alt="NRCT logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.hsri.or.th/'}>
					<Image
						src="/img/logo/HSAI.png"
						alt="HSAI logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.kku.ac.th/'}>
					<Image
						src="/img/logo/KKU.png"
						alt="KKU logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.thaipediatrics.org/'}>
					<Image
						src="/img/logo/RCPT.png"
						alt="RCPT logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.moph.go.th/'}>
					<Image
						src="/img/logo/MOPH.png"
						alt="MOPH logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.cp.eng.chula.ac.th/'}>
					<Image
						src="/img/logo/chula.png"
						alt="chula logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link
					href={
						'https://web.facebook.com/people/%E0%B8%AA%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81%E0%B9%86%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%B9%E0%B8%81/100083413563342/'
					}
				>
					<Image
						src="/img/logo/SLL-trans.png"
						alt="SLL trans logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.thaihealth.or.th/'}>
					<Image
						src="/img/logo/SSS-trans.png"
						alt="SSS-trans logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
				<Link href={'https://www.nstda.or.th/'}>
					<Image
						src="/img/logo/NSTDA.png"
						alt="NSTDA logo"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[120px] w-auto object-contain"
					/>
				</Link>
			</div>
			<p className="font-bold text-sm lg:text-xl">
				สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย มหาวิทยาลัยขอนแก่น
			</p>
		</div>
	);
}
