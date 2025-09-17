function home()
{
    document.querySelector("#zmiana").innerHTML = "<iframe src=\"home.html\" frameborder=\"0\">"
}
function aboutme()
{
    document.querySelector("#zmiana").innerHTML = "<iframe src=\"whoareyou.html\" frameborder=\"0\">"
}
function gitrepos()
{
    document.querySelector("#zmiana").innerHTML = "<iframe src=\"repositories.html\" frameborder=\"0\">"
}

let bool = false;
function szaroguzik()
{
    let ifr = document.querySelector('iframe')
    let chdoc = ifr.contentDocument;
    let x = chdoc.getElementsByClassName("dissapear");
    let g = chdoc.querySelector("#bullet");


    if (bool == false)
    {
        bool = true;
        g.style.display = "list-item";
        for(let y in x)
        {
            x[y].style.display = "initial";
        }
    } 
    else
    {
        bool = false;
        g.style.display = "none";
        for(let y in x)
        {
            x[y].style.display = "none";
        }
    }
}
 