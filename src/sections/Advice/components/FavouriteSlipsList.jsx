function FavouriteSlipsList(favourites){
    console.log(favourites)
    return (
       <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favourites.favorites.map((slip, i) => (
            <li key={i}>
              {slip}
            </li>
          ))}
        </ul>
      </section>
    )
}

export default FavouriteSlipsList