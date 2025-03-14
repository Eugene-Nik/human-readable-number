module.exports = function toReadable(number) {
    let numberInput = number;
    let oneToTwenty = [
        "",
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine ",
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen ",
    ];
    let tenth = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (numberInput.toString().length > 7)
        return (myDiv.innerHTML = "overlimit");
    let num = ("0000000" + numberInput)
        .slice(-7)
        .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!num) return;

    let outputText =
        num[1] != 0
            ? (oneToTwenty[Number(num[1])] ||
                  `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " million "
            : "";

    outputText +=
        num[2] != 0
            ? (oneToTwenty[Number(num[2])] ||
                  `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "hundred "
            : "";
    outputText +=
        num[3] != 0
            ? (oneToTwenty[Number(num[3])] ||
                  `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) +
              " thousand "
            : "";
    outputText +=
        num[4] != 0
            ? (oneToTwenty[Number(num[4])] ||
                  `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "hundred "
            : "";
    outputText +=
        num[5] != 0
            ? oneToTwenty[Number(num[5])] ||
              `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
            : "";
    outputText = outputText.replace(/(\s+)?.$/, "");
    if (number == 0) {
        return "zero";
    } else {
        return outputText;
    }
};
