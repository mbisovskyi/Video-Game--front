import "./BestPlatformChart.css";
import { Chart } from "react-google-charts";

const ColumnChart = ({ videoGames }) => {
  let gamesSince2013 = videoGames.filter((game) => game.year >= 2013);

  let allPlatforms = gamesSince2013.map((platform) => platform.platform);

  let distinctPlatforms = [...new Set(allPlatforms)];

  let platformsData = distinctPlatforms.map((platform) => {
    let platformsArrayGame = gamesSince2013.filter(
      (game) => game.platform === platform
    );
    let platformGlobalSales = 0;
    for (let i = 0; i < platformsArrayGame.length; i++) {
      platformGlobalSales += platformsArrayGame[i].globalsales;
    }
    return [platform, platformGlobalSales];
  });

  const data = [["Platform", "Sold (millions)"], ...platformsData];

  const options = {
    title:
      "Best video game platform based on video game\n copies (millions) sold since 2013",
    titleTextStyle: { color: "rgb(239, 151, 44)", fontSize: "22" },
    pieHole: 0.6,
    is3D: false,
    legendTextStyle: { color: "#FFF", fontSize: "16" },
    chartArea: { width: "85%" },
    backgroundColor: "transparent",
  };

  return (
    <div className="platform-container">
      <p className="platform-text">Platform</p>
      <Chart
        chartType="PieChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;
