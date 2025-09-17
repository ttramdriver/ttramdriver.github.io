let trigger = false
function obrazkoguzik()
{
    let x = document.getElementsByClassName("obrazkitel");
    if (trigger == false)
    {
        trigger = true;
        for(let y in x)
        {
            x[y].style.display = "initial";
        }
    } 
    else
    {
        trigger = false;
        for(let y in x)
        {
            x[y].style.display = "none";
        }
    }
} 