import Image from "next/image";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default async function GetCoinData({ params: { coinId } }) {


  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`, { next: { revalidate: 10 } });

  const data = await res.json();

//   if (!Array.isArray(data)) {
//     return <p>No data available.</p>;
//   }

  return (
    <article className="max-w-7xl mx-4 sm:mx-auto mb-12">
      <Image src={data.image.large} alt={data.name} width={200} height={200} priority={true}/>
      <h1 className="text-7xl">{USDollar.format(data.market_data.current_price.usd)}</h1>
      <a href={data.links.homepage.slice(0, -2)}>{data.links.homepage}</a>
      {<h1 key={data.id} dangerouslySetInnerHTML={{ __html: data.description.en }} />}
    </article>
  );
}
