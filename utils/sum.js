const sum = (a, b) => {
    if (typeof a !== "number" && typeof b !== "number") {
        throw new Error("this function is require number");
    }
    return a + b;
};

module.exports = sum;
