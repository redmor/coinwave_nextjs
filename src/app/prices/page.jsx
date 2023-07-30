import Table from "@/components/Table";

function page() {
  return (
    <article className="max-w-7xl mx-4 xl:mx-auto my-40">
      <Table perPage={50} />
    </article>
  );
}
export default page;
