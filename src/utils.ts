function getColorCode(colorName: string): string {
    switch (colorName) {
        case "blue":
            return "#2E3A8C";
        case "green":
            return "#3B755F";
        case "beige":
            return "#F2EBDB";
        case "white":
            return "#FFFFFF";
        case "black":
            return "#212121";
    }

    console.warn(`Color with name: ${colorName} not found!`);
    return "#3B755F";
}

function getIconColor(badgeColorName: string): string {
    if (["blue", "green", "black"].indexOf(badgeColorName) !== -1)
        return getColorCode("white");
    return getColorCode("green");
}

export { getColorCode, getIconColor };
