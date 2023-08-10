const User = (props) => {
    return (
        <div className="test">
          <h1>{props.name}</h1>
          <h2>{props.age}</h2>
          <h2>{props.email}</h2>
        </div>
      )
}

export default User;