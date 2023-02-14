document.querySelectorAll(".nav-link").forEach((ele) =>
        ele.addEventListener("click", function (event) {
        document.querySelectorAll(".nav-link").forEach((ele) => 
            ele.classList.remove("active-menu-link"));
            this.classList.add("active-menu-link");
  })
);



window.onload = function()
{
    const path = window.location.pathname.split("/");

    switch(path[1])
    {
        case "home":
        {
            loadPage("home");
            break;
        }
        case "about":
        {
            loadPage("about");
            break;
        }
        case "pricing":
        {
            loadPage("pricing");
            break;
        }
        default:
        {
            loadPage("home");
            break;
        }
    }

    document.querySelectorAll(".nav-link").forEach((item) =>
    {
        item.addEventListener("click", function()
        {
            const path = item.getAttribute("value");
            loadPage(path);
            if(path == "home")
            {
                window.history.pushState("", "", "/");
                return;
            }

            window.history.pushState("", "", path);
        });
    });

    function loadPage($path)
    {
        if($path == "") return;

        const container = document.getElementById("user-right-container");

        const request = new XMLHttpRequest();
        request.open("GET", "pages/" + $path + ".html");
        request.send();
        request.onload = function()
        {
            if(request.status == 200)
            {
                container.innerHTML = request.responseText;
                document.title = $path;
            }
        }
    }
}