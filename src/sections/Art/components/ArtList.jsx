import { useState, useEffect } from "react"
import ArtListItem from "./ArtListItem";


function ArtList(){
    const url = "https://boolean-uk-api-server.fly.dev/art"
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, [])

    console.log(data)

    return (
        <div className="scroll-container">
           <ul className="art-list">
                {data.map((artItem, i) => (
                    <ArtListItem artItem={artItem} key={i}/>
                ))}
            </ul>
        </div>
    )
}

export default ArtList