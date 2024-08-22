function reverseArray(table)
{
    let table2 = [];
    for(let i = 0 ; i < table.length ; i++)
    {
        table2.push(table[table.length - i - 1]);
    }
    return table2;
}

function reverseArrayInPlace(table)
{
    let table2 = [];
    for(let i = 0 ; i < table.length ; i++)
    {
        table2.push(table[table.length - i - 1]);
    }
    return table2;
}

console.log(reverseArray(["A", "B", "C"]))

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(reverseArrayInPlace(arrayValue));

console.log("Je n'ai pas compris la différence entre les deux énoncés. ");