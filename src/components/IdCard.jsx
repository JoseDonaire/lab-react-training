

function IdCard (props){

    return(
        <div className="card">
            <div><img height={'300px'} src={props.picture} /></div>
            <div>
            <h2>First Name:{props.firstName}</h2>
            <h2>Last Name:{props.lastName}</h2>
            <h2>Gender:{props.gender}</h2>
            <h2>Height:{props.height}</h2>
            <h2>Birth:{props.birth.toDateString()}</h2>
            </div>
       
        </div>
    )
}

export default IdCard