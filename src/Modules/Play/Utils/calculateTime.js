
const calculateTime = (distance) => {
    let output;
    switch (true) {
        case distance < 50000:
            output= 2000
            break;
        case distance < 100000:
            output= 2100
            break;
        case distance < 150000:
            output= 2100
            break;
        case distance < 200000:
            output= 2200
            break;
        case distance < 250000:
            output= 2250
            break;
        case distance < 300000:
            output= 2290
            break;
        case distance < 350000:
            output= 2300
            break;
        case distance < 400000:
            output= 2350
            break;
        case distance < 450000:
            output= 2390
            break;
        case distance < 500000:
            output= 2400
            break;
        case distance < 550000:
            output= 2400
            break;
        case distance < 600000:
            output= 2450
            break;
        case distance < 650000:
            output= 2480
            break;

        default:
            output = 2500
            break;
    }

    return output
}

export default calculateTime