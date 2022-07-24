import fetch_shouldWrite from "./fetch_shouldWrite"

const shouldWriteAgain = () => {

    fetch_shouldWrite()
        .then(
            data => {
                return data
            })


}

export default shouldWriteAgain