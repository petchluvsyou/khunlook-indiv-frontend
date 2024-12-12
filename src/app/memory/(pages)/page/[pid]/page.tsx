import memoryInfo from "../../../data/scrapedData";

export default function MemoryPage({ params }: { params: { pid: string } }) {
  const MemoryData = memoryInfo[params.pid];

  if (!MemoryData) {
    return <p className="text-center text-xl text-red-600">Sorry, we couldn't find the requested food information.</p>;
  }

  return (
    <div className="bg-Bg text-Dark" dangerouslySetInnerHTML={{ __html: MemoryData.content }}></div>
  );
}
