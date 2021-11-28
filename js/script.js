{
    const get_api_data = (url) => fetch(url).then((r) => r.json());
    let type_rocket = 0;

    const show_rocket_menu = (api_data) => {
        const $menu = document.querySelector(".js-menu");
        console.log($menu);

        //nav
        $menu.innerHTML = `
        <li class="c-menu__item">
            <a href="#" class="js-link c-menu__item--link">${api_data[0].name}</a>
        </li>
        <li class="c-menu__item">
            <a href="#" class="js-link c-menu__item--link">${api_data[1].name}</a>
        </li>
        <li class="c-menu__item">
            <a href="#" class="js-link c-menu__item--link">${api_data[2].name}</a>
        </li>
        <li class="c-menu__item">
            <a href="#" class="js-link c-menu__item--link">${api_data[3].name}</a>
        </li>`;
        
        rocket_type_listener()
    }

    const show_rocket = (api_data) => {
        // DOM content
        const $rocket = document.querySelector(".js-rocket");
        const $rocket_image = document.querySelector(".js-rocket__image");
        // const $menu = document.querySelector(".js-menu");
        // console.log($menu);

        // //nav
        // api_data.forEach(data => {
        //     $menu.innerHTML += `
        //     <li class="c-menu__item">
        //         <a href="#" class="js-link c-menu__item--link">${data.name}</a>
        //     </li>`;
        // });

        //Images
        $rocket_image.src = api_data[type_rocket].flickr_images[0];
        $rocket_image.alt = "Falcon 1 rocket image";
        
        //Rocket data
        $rocket.innerHTML = `
            <li>Name: ${api_data[type_rocket].name}</li>
            <li>Country: ${api_data[type_rocket].country}</li>
            <li>Cost per launch: &euro;${api_data[type_rocket].cost_per_launch}</li>
            <li>Height: ${api_data[type_rocket].height.meters}m</li>
            <li>Diameters: ${api_data[type_rocket].diameter.meters}</li>
            <li>Engine type: ${api_data[type_rocket].engines.type}</li>
            <li>First flight: ${api_data[type_rocket].first_flight}</li>
            <li>Mass: ${api_data[type_rocket].mass.kg}kg</li> `;
    };

    const change_rocket = () => {

    }

    const rocket_type_listener = () => {
        const item_links = document.querySelectorAll(".js-link");
        console.log(item_links)
        item_links.forEach($item_link  => {
            $item_link.addEventListener("click", () => {
                if($item_link.textContent == "Falcon 1") {
                    console.log("clicked falcon 1")
                    type_rocket = 0;
                } else if ($item_link.textContent == "Falcon 9") {
                    console.log("clicked falcon 9")
                    type_rocket = 1;
                } else if ($item_link.textContent == "Falcon Heavy") {
                    console.log("clicked falcon heavy")
                    type_rocket = 2;
                } else if ($item_link.textContent == "Starship") {
                    console.log("clicked starship")
                    type_rocket = 3;
                }
                get_api();
            });
        })
        
    };

    const get_api = async () => {
        //url
        const endpoint = "https://api.spacexdata.com/v4/rockets";
        console.log(`Endpoint ${endpoint}`);
        // data ophalen
        const rocket_data = await get_api_data(endpoint);
        console.log(rocket_data);

        show_rocket_menu(rocket_data);
        show_rocket(rocket_data);
    };

    const innit = () => {
        get_api();
        // show_rocket(get_api())
    };
        
    innit();
}