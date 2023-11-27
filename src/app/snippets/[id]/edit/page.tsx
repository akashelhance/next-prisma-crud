import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";


interface SnippetProps{
    params:{
        id:string;
    }
}



export default async function editPage(props:SnippetProps){
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: { id: parseInt(props.params.id) },
      });


      if (!snippet) {
        <h2>Content Does not found</h2>;
      }
    
    return(
        <div>
       
        <SnippetEditForm snippet={snippet} />
           
        </div>
    )

}