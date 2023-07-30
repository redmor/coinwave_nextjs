import Hero from "@/components/Hero";
import Table from "@/components/Table";
import ChartCard from "@/components/ChartCard";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <article className="max-w-7xl mx-4 xl:mx-auto flex flex-col sm:flex-row justify-between sm:mt-40 invisible sm:visible">
        <section className=" bg-slate-600/20">
          <ChartCard coin={'bitcoin'} title={'Bitcoin'}/>
        </section>
        <section className=" bg-slate-600/20">
          <ChartCard coin={'ethereum'} title={'Etherium'}/>
        </section>
        <section className=" bg-slate-600/20">
          <ChartCard coin={'ripple'} title={'Ripple XRP'}/>
        </section>
        <section className=" bg-slate-600/20">
          <ChartCard coin={'chainlink'} title={'Chainlink'}/>
        </section>
      </article>
      <Table perPage={10} />
      <article className="max-w-7xl xl:mx-auto border-blue-600 flex flex-col sm:flex-row gap-3 mb-10">
        <Link className="bg-purple-600/40 w-full py-2 text-center" href={"/prices"}>
          See More..
        </Link>
      </article>
      <article className="max-w-7xl xl:mx-auto mb-40">
        <NewsCard newsCount={6}/>
      </article>
      {/* <article className="max-w-7xl mx-4 xl:mx-auto border-blue-600 flex flex-col sm:flex-row gap-3 mb-10 bg-slate-600/50 p-5">
        <section className="border border-slate-600 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis ducimus possimus repudiandae tempora? Ex iure molestiae soluta doloremque incidunt tempore magnam ad inventore!</section>
        <section className="border border-slate-600 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis ducimus possimus repudiandae tempora? Ex iure molestiae soluta doloremque incidunt tempore magnam ad inventore!</section>
        <section className="border border-slate-600 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quis ducimus possimus repudiandae tempora? Ex iure molestiae soluta doloremque incidunt tempore magnam ad inventore!</section>
      </article> 
      <article className="max-w-7xl mx-4 xl:mx-auto border-blue-600 flex flex-col sm:flex-row gap-3">
        <section className=" bg-gradient-to-b from-slate-700 p-3 rounded-t-3xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error aperiam consectetur voluptatibus corporis facere, debitis dignissimos iusto! Eius, reprehenderit alias! Cumque dolores quasi earum ducimus id odit similique tempore provident ut, optio sunt modi unde! Maiores voluptatum expedita natus ut eveniet distinctio temporibus numquam esse aliquid aut doloribus, laboriosam, odio libero ab? Facere non assumenda eaque maiores error nostrum amet autem eos cupiditate dolor quos placeat minima quasi, quas recusandae ducimus, quae iusto fuga aspernatur laborum. Voluptatibus omnis
          cum, veniam similique quos quod beatae eos eius amet ratione ex et delectus? Ratione delectus accusamus praesentium ullam at. Voluptatem, corrupti!
        </section>
      </article>*/}
    </>
  );
}
