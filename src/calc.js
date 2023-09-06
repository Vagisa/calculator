tests = [
    {args: ["1"], want: "1"},
    {args: ["1", "+", "2"], want: "3"},
    {args: ["1", "-", "2"], want: "-1"},
    {args: ["3", "-", "1"], want: "2"},
    {args: ["2", "*", "3"], want: "6"},
    {args: ["12", "/", "2"], want: "6"},
]

for (test of tests) {
    let get = calculate(test.args)
    if (get != test.want) {
        console.log(test)
        console.log(get + " != " + test.want)
        break;
    }
}

function calculate(args) {
    return " "
}

