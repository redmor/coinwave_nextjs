import Image from "next/image";
import Link from "next/link";

function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

async function NewsCard({ newsCount }) {
  const res = await fetch(`https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=f93e05b4711e1b0a74466dead65630d0d97aa8de2e9030ffb3797c07d785159d`, { next: { revalidate: 60 } });
  const { Data } = await res.json();

  if (!Array.isArray(Data)) {
    return <p>No data available.</p>;
  }

  return (
    <>
        {/* <h1 className="text-6xl border-b-2 border-purple-500 mb-2">Latest News</h1> */}
        <div className="grid grid-cols-12">
          {Data.map((d) => (
            <div key={d.id} className="flex col-span-12 sm:col-span-6 bg-slate-700 m-3">
              <Image src={d.imageurl} alt={d.title} width={100} height={100} />
              <div className="flex flex-col gap-3 p-2">
                <div className="flex gap-2">
                  <p className=" text-orange-600">{d.source_info.name}</p>
                  <p className="text-sm text-gray-400">{formatDate(d.published_on)}</p>
                </div>
                <Link className="text-lg hover:text-slate-400" href={d.url}>
                  {d.title}
                </Link>
                <div className="my-auto text-sm">{d.body.slice(0, 100)}...</div>
              </div>
            </div>
          )).splice(0, newsCount)}
        </div>
    </>
  );
}
export default NewsCard;
