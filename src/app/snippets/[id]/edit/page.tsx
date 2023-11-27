interface SnippetProps{
    params:{
        id:string;
    }
}



export default function editPage(props:SnippetProps){
    const id = parseInt(props.params.id);

    return(
        <div>
            <h2>Editing the particular Snippets with id {id}</h2>
        </div>
    )

}