

const incrementActionCreator = () => {
    console.log("hit me");
    return (dispatch) => {

        setTimeout(() => {
            dispatch({ type: "INCREMENT" })
        }, 2000)

    }
}

export default incrementActionCreator;
