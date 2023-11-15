import "./ContainerImagem.css"

export default function ContainerImagem(props){
    return(
        <div>
            {props.children}
            <p>{props.legenda}</p>
        </div>
    );
}