import React from "react";
import Chart from "@/components/Chart";

async function ChartCard({ coin, title = '', borderColor  = 'rgba(129, 53, 235, 0.842)', bgColor = 'rgba(111, 53, 235, 0.234)' }) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7&interval=daily&precision=4`);
  const data = await res.json();

  if (!Array.isArray(data.prices)) {
    return <p>No data available.</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="pt-3">{title}</h1>
      <Chart data={data.prices} borderColor={borderColor} bgColor={bgColor} />
    </div>
  );
}

export default ChartCard;
