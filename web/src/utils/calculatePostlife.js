export const calculatePostlife = (timestamp) => {
    if (timestamp < 3600) {
        return new Date(timestamp * 1000).toISOString().substring(14, 19)
    }
    else {
        return new Date(timestamp * 1000).toISOString().substring(11, 16)
    }

}