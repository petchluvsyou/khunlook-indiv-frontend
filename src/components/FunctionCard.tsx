import FunctionItem from './FunctionItem';

export default function FunctionCard() {
	return (
		<div className="relative z-0 flex flex-col p-16 pt-8 bg-Bg gap-12 top-16 lg:top-24 items-center">
			<p className="text-xl lg:text-4xl font-bold">เราช่วยอะไรได้บ้าง</p>
			<div className="flex flex-col lg:flex-row gap-8">
				<FunctionItem
					imgSrc="/img/knowledge.png"
					title="คลังความรู้"
					description="รวมข้อมูลวัคซีนพื้นฐาน และวัคซีนเสริมหรือทดแทน ที่ควรได้รับในแต่ละวัย เป็นตัวช่วยเตือนให้คุณพ่อคุณแม่ทราบว่ามีวัคซีนไหนที่ยังขาด หรือ ควรต้องเสริมอะไรบ้าง"
				/>
				<FunctionItem
					imgSrc="/img/growth.png"
					title="การเจริญเติบโต"
					description="รวมข้อมูลวัคซีนพื้นฐาน และวัคซีนเสริมหรือทดแทน ที่ควรได้รับในแต่ละวัย เป็นตัวช่วยเตือนให้คุณพ่อคุณแม่ทราบว่ามีวัคซีนไหนที่ยังขาด หรือ ควรต้องเสริมอะไรบ้าง"
				/>
				<FunctionItem
					imgSrc="/img/development.png"
					title="พัฒนาการ"
					description="รวมข้อมูลวัคซีนพื้นฐาน และวัคซีนเสริมหรือทดแทน ที่ควรได้รับในแต่ละวัย เป็นตัวช่วยเตือนให้คุณพ่อคุณแม่ทราบว่ามีวัคซีนไหนที่ยังขาด หรือ ควรต้องเสริมอะไรบ้าง"
				/>
				<FunctionItem
					imgSrc="/img/vaccine.png"
					title="วัคซีน"
					description="รวมข้อมูลวัคซีนพื้นฐาน และวัคซีนเสริมหรือทดแทน ที่ควรได้รับในแต่ละวัย เป็นตัวช่วยเตือนให้คุณพ่อคุณแม่ทราบว่ามีวัคซีนไหนที่ยังขาด หรือ ควรต้องเสริมอะไรบ้าง"
				/>
				<FunctionItem
					imgSrc="/img/memory.png"
					title="สิ่งเล็กๆที่สร้างลูก"
					description="รวมข้อมูลวัคซีนพื้นฐาน และวัคซีนเสริมหรือทดแทน ที่ควรได้รับในแต่ละวัย เป็นตัวช่วยเตือนให้คุณพ่อคุณแม่ทราบว่ามีวัคซีนไหนที่ยังขาด หรือ ควรต้องเสริมอะไรบ้าง"
				/>
			</div>
		</div>
	);
}
