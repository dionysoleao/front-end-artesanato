interface CardProps{
    id: number;
    image?: string | null;
    name: string;
}

export function Card(props: CardProps){
    return(
        <div className="card">
            <img src="" alt="" />
            <h1 className="name"> {props.image} , {props.name}, {props.id}</h1>
        </div>

    )
}