if(window.innerHeight > window.innerWidth)
{
    trigger1 = 0
}
else
{
    trigger1 = 1
}

function obrazkoguzik()
{
    var x1 = document.getElementsByClassName("obrazkitel");
    if (trigger1 == 0)
    {
        trigger1 = 1;
        for(let y1 in x1)
        {
            x1[y1].style.display = "initial";
        }
    } 
    else
    {
        trigger1 = 0;
        for(let y1 in x1)
        {
            x1[y1].style.display = "none";
        }
    }
} 