function isEven(test)
{
    if(test >= 0)
    {
        if(test % 2 == 0)
        {
            return true;
        }
        return false;
    }
    else
    {
        return "The number must be positive.";
    }
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));