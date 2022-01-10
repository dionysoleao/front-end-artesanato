interface CardProps{
    id: number;
    imageURL?: string;
    name: string;
}

export function Card(props: CardProps){
    return(
        <div className="card">
            <h1 className="data"> {props.imageURL && (props.imageURL)} , {props.name}, {props.id}</h1>
        </div>
    )
}