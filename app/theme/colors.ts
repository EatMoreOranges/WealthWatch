export const lightMode = {
    beachHouse: "#6096BA",
    oceanFront: "#A3CEF1",
    gray: "#8B8C89",  
    orangeSmile: "#FFAF87",
    orangeCream: "#FF8E72",
    burntOrange: "#ED6A5E",
    coral: "#FF715B",
} as const

export const darkMode = {
    barney: "#7D2E68",
    lostGrape:"#251351",
    midnight: "#040926",
    navy: "#274C77",
    neonSeafoam: "#4CEOB3",
    seaweed: "#377771",
}

export const colorList = {
    ...lightMode, 
    ...darkMode
} as const