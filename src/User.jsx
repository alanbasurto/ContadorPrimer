const User = ({name}) => {
    const obj = {
        name:"Alan",
        age:21
    }
    const obj2 = {...obj}
    return(
        <div>
            Hola {name}
        </div>
    )
}

export default User