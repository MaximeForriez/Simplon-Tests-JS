function range(start, end, step)
{
    let table = new Array();
    if(typeof(step) == "undefined")
    {
        step = 1;
    }
    if(step != -1)
    {
        if(end >= start)
        {
            for(let i = start ; i <= end ; i = i + step)
            {
                table.push(i);
            }
            return table;
        }
    }
    else
    {
        console.log(Math.abs(step));
        for(let i = end ; i <= start ; i = i + Math.abs(step))
        {
            table.push(i);
        }
        return table.reverse();
    }
}

function sum(table)
{
    sum = 0;
    for(let element of table)
    {
        sum += element;
    }
    return sum;
}

console.log(range(1, 10));

console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));

console.log(range(5, 2, -1));