function countBs(text)
{
    let count = 0;
    for(let element of text)
    {
        if(element == "B")
        {
            count += 1;
        }
    }
    return count;
}

function countChar(text, test)
{
    let count = 0;
    for(let element of text)
    {
        if(element == test)
        {
            count += 1;
        }
    }
    return count;
}

countBs( "countBs");
console.log(countChar("kakkerlak", "k"));
