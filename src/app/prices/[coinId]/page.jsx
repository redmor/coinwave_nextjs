import Image from "next/image";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default async function GetCoinData({ params: { coinId } }) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`, { next: { revalidate: 10 } });

  const data = await res.json();

  //   if (!Array.isArray(data)) {
  //     return <p>No data available.</p>;
  //   }

  return (
    <article className="max-w-7xl mx-3 my-10 sm:mx-auto sm:flex justify-center items-stretch gap-4">
      <div className="border border-purple-800 p-5 flex flex-col items-center sm:gap-5 my-4">
        <Image src={data.image.large} alt={data.name} width={200} height={200} priority={true} />
        <p className="text-3xl sm:text-5xl">{USDollar.format(data.market_data.current_price.usd)}</p>
        <a className="hover:text-gray-400" href={data.links.homepage.slice(0, -2)}>
          {data.links.homepage}
        </a>
      </div>
      <div className="border border-purple-800 p-5 my-4 ">{data.description.en ? <h1 key={data.id} dangerouslySetInnerHTML={{ __html: data.description.en }} /> : <h1 className="text-5xl">Description not available</h1>}</div>
    </article>
  );
}


{/* <article className="max-w-7xl mx-4 sm:mx-auto my-40 sm:flex flex-col gap-10">
<div className="border border-purple-800 p-10 flex flex-col items-center justify-between min-h-[500px]">
  <Image src={data.image.large} alt={data.name} width={200} height={200} priority={true} />
  <p className="text-7xl">{USDollar.format(data.market_data.current_price.usd)}</p>
  <a className="hover:text-gray-400" href={data.links.homepage.slice(0, -2)}>
    {data.links.homepage}
  </a>
</div>
<div className="border border-purple-800 p-10">{data.description.en ? <h1 key={data.id} dangerouslySetInnerHTML={{ __html: data.description.en }} /> : <h1 className="text-5xl">Description not available</h1>}</div>
</article> */}