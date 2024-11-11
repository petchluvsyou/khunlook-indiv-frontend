import Banner from "@/components/Banner";
import FunctionCard from "@/components/FunctionCard";
import DownloadCard from "@/components/DownloadCard";
import Footer from "@/components/Footer";
import StackedAreas from "@/components/stackedAreas";

export default function Home() {
  return (
    <main>
      <Banner/>
      <StackedAreas/>
      <FunctionCard/>
      <DownloadCard/>
    </main>
  );
}
