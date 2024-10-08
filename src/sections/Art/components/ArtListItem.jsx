import PublicationHistoryList from "./PublicationHistoryList"

function ArtListItem(art){
    
    console.log(art.artItem)
    return (
        <li>
            <div className="frame">
            <img
                src= {"https://boolean-uk-api-server.fly.dev" + art.artItem.imageURL}
            />
            </div>
            <h3>{art.artItem.title}</h3>
            <p>{"Artist:" + art.artItem.artist}</p>
            <h4>Publication History:</h4>
            <ul>
                {art.artItem.publicationHistory.map((history, i) => 
                (
                    <PublicationHistoryList publicationHistory={history} key={i}/>
                ))}
            </ul>
        </li>
    )
}

export default ArtListItem