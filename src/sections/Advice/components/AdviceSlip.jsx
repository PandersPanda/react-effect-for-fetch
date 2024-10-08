import { useState, useEffect } from "react";
import FavouriteSlipsList from "./FavouriteSlipsList";

function AdviceSlip() {

    const url = "https://api.adviceslip.com/advice"
    const [currentSlip, setCurrentSlip] = useState("")
    const [favorites, setFavourites] = useState([])
    console.log(currentSlip)

    const getAdvice = async () => {
        const response = await fetch(url)
        const jsonData = await response.json();
        setCurrentSlip(jsonData.slip);
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <section className="adivce-slip">
            <h3>Some Advice</h3>
            <p>{currentSlip.advice}</p>
            <button onClick={getAdvice}>Get More Advice</button>
            <button onClick={() => {
                setFavourites([
                    ...favorites,
                    currentSlip.advice
                ])
            }}>Save to Favourties</button>
            <FavouriteSlipsList favorites={favorites} />
        </section>
    )

}

export default AdviceSlip