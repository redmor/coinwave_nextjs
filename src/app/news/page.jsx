import NewsCard from "@/components/NewsCard";

function News() {
  return (
    <article className="max-w-7xl mx-4 xl:mx-auto flex flex-col sm:flex-row justify-between my-40">
        <NewsCard newsCount={100}/>
    </article>
  )
}
export default News