import fetch_shouldWrite from "./fetch_shouldWrite"

const shouldWriteAgain = async () => {
    let value
    await fetch_shouldWrite()
        .then(
            data => {
                value = data;
            })
        .catch(
            data => { console.log("HATA", data) }
        )

    return value
}

export default shouldWriteAgain