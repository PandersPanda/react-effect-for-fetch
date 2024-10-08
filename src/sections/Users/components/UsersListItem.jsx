function UserListItem(user){
    //console.log(user)
    const backgroundStyle = {
        background: user.userItem.favouriteColour
    }
    return (
        <li style={backgroundStyle}>
        <img
          src={user.userItem.profileImage}
          alt={user.userItem.firstName + " " + user.userItem.lastName}
        />
        <h3>{user.userItem.firstName + " " + user.userItem.lastName} </h3>
        <p>Email: {user.userItem.email}</p>

        </li>
    )
}

export default UserListItem