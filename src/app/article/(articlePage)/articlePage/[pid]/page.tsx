import articleInfo from "../../../data/articleInfo";

export default function ArticlePage({ params }: { params: { pid: string } }) {
  const ArticleData = articleInfo[params.pid];

  if (!ArticleData) {
    return <p className="text-center text-xl text-red-600">Sorry, we couldn't find the requested food information.</p>;
  }

  return (
    <div className="pt-44 py-16 px-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{ArticleData.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        <strong>หมวดหมู่:</strong> {ArticleData.category} | <strong>เผยแพร่เมื่อ:</strong> {ArticleData.published_date}
      </p>
      <p className="text-lg text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: ArticleData.intro }}></p>

        {/* Intro List */}
        {ArticleData.intro_list && ArticleData.intro_list.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            {ArticleData.intro_list.map((item : any, index : any) => (
            <li key={index} className="text-lg" dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
        </ul>
        )}


        {/* Content Sections */}
        {ArticleData.content && Object.keys(ArticleData.content).length > 0 &&(
        Object.keys(ArticleData.content).map((sectionKey, index) => (
            <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{sectionKey}</h2>
            {ArticleData.content[sectionKey] && ArticleData.content[sectionKey].length > 0 &&(
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {ArticleData.content[sectionKey].map((point : any, subIndex : any) => (
                    <li key={subIndex} className="text-lg" dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
                </ul>
            )}
            </div>
        ))
        )}
      <footer className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-700">
            <strong>เรียบเรียงโดย:</strong> {ArticleData.writer}
          </p>
          <p className="text-gray-700">
            <strong>แหล่งข้อมูล:</strong> {ArticleData.resource.join(', ')}
          </p>
        </footer>
    </div>
  );
}
