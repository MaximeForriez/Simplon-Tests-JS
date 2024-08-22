const TAILLE = 15;

for(let i = 1 ; i <= TAILLE ; i++)
{
    if(i % 2 == 0)
    {
        let ligne = "";
        for(let j = 1 ; j <=TAILLE ; j++)
        {
            if(j % 2 == 0)
            {
                ligne += "#";
            }
            else
            {
                ligne +=" ";
            }
        }
        console.log(ligne + "\n");
    }
    else
    {
        let ligne = "";
        for(let j = 1 ; j <=TAILLE ; j++)
        {
            if(j % 2 == 0)
            {
                ligne += " ";
            }
            else
            {
                ligne += "#";
            }
        }
        console.log(ligne + "\n");
    }
}