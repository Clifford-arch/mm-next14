import MojoArea3 from "@/components/stock-research-components/MojoArea3";
import MojoScoreInfo from "@/components/stock-research-components/MojoScoreInfo";
import ResearchSection from "@/components/stock-research-components/ResearchSection";
import StockSearch from "@/components/stock-research-components/StockSearch";
import UseSection from "@/components/stock-research-components/UseSection";
import "@/styles/stockresearch.css";
const StockResearch = () => {
  return (
    <>
      <StockSearch />
      <ResearchSection />
      <MojoScoreInfo />
      <MojoArea3 />
      <UseSection />
    </>
  );
};

export default StockResearch;
