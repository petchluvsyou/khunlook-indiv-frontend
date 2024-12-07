// import { useRouter } from "next/router";
import foodInfoData from "../../../data/foodInfoData";

export default function FoodAgePage({ params }: { params: { kid: string } }) {
//   const router = useRouter();
//   const { kid } = params || router.query; // Supports both static and dynamic routing

  const foodData = foodInfoData[params.kid];

  if (!foodData) {
    return <p>Sorry, we couldn't find the requested food information.</p>;
  }
  

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{foodData.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        หมวดหมู่: {foodData.category} | เผยแพร่เมื่อ: {foodData.published_date}
      </p>
      <p className="mb-4">{foodData.intro}</p>

      {/* Intro List */}
      {foodData.intro_list && foodData.intro_list.length > 0 ? (
        <ul className="list-disc pl-5 mb-4">
          {foodData.intro_list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No introduction points available.</p>
      )}

      {/* Content Sections */}
      {foodData.content && Object.keys(foodData.content).length > 0 ? (
        Object.keys(foodData.content).map((sectionKey, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{sectionKey}</h2>
            {foodData.content[sectionKey] && foodData.content[sectionKey].length > 0 ? (
              <ul className="list-disc pl-5">
                {foodData.content[sectionKey].map((point, subIndex) => (
                  <li key={subIndex}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>No content available for {sectionKey}.</p>
            )}
          </div>
        ))
      ) : (
        <p>No content sections available.</p>
      )}

      <footer className="mt-10">
        <p>
          <strong>เรียบเรียงโดย:</strong> {foodData.writer}
        </p>
        <p>
          <strong>แหล่งข้อมูล:</strong> {foodData.resource}
        </p>
      </footer>
    </div>
  );
}

