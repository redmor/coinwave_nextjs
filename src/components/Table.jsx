import Image from "next/image";
import Link from "next/link";
import ChartCard from "./ChartCard";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

async function Table({ perPage = 50 }) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&locale=en`, { next: { revalidate: 60 } });
  const data = await res.json();

  if (!Array.isArray(data)) {
    return <p>No data available.</p>;
  }

  return (
    <article className="max-w-7xl mx-4 sm:mx-auto flex flex-col sm:flex-row gap-3 overflow-x-auto mt-10">
      <table className="min-w-full text-left text-sm font-light bg-sky-300/5 table-auto overflow-scroll" >
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">
              Rank
            </th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Price
            </th>
            <th scope="col" className="px-6 py-4">
              24h %
            </th>
            <th scope="col" className="px-6 py-4">
              Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr className="border-b transition duration-300 ease-in-out hover:bg-purple-900/30 border-neutral-500" key={d.id}>
              <td className="whitespace-nowrap px-6 py-4 font-medium">{d.market_cap_rank}</td>
              <Link href={`/prices/${d.id}`} className="flex items-center">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <Image src={d.image} alt={d.name} width={50} height={50} placeholder="blur" blurDataURL={d.image} />
                </td>
                <td className="whitespace-nowrap px-6 py-4">{d.name}</td>
              </Link>
              <td className="whitespace-nowrap px-6 py-4">{USDollar.format(d.current_price)}</td>
              <td className={`whitespace-nowrap px-6 py-4 ${d.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{d.price_change_percentage_24h}%</td>
              <td className="whitespace-nowrap px-6 py-4">{USDollar.format(d.total_volume)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Table;
