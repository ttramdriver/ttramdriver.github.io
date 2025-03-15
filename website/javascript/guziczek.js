let trigger = 0;

function szaroguzik()
{
    var x = document.getElementsByClassName("dissapear");
    var g = document.getElementById("bullet");
    if (trigger == 0)
    {
        trigger = 1;
        g.style.display = "list-item";
        for(let y in x)
        {
            x[y].style.display = "initial";
        }
    } 
    else
    {
        trigger = 0;
        g.style.display = "none";
        for(let y in x)
        {
            x[y].style.display = "none";
        }
    }
} 