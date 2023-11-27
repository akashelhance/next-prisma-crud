import { notFound } from "next/navigation";
import { db } from "@/db";
import Link  from "next/link";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
      </div>

      <div>
        <button className="p-2 border rounded"> <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link></button>
        <button className="p-2 border rounded"> Delete</button>
      </div>

      <h2 className="text-xl font-bold">{snippet.code}</h2>
    </div>
  );
}
