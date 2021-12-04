{
    const get_api_data = (url) => fetch(url).then((r) => r.json());
    let rocket_type = 3;

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
    };

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
        $rocket_image.src = api_data[rocket_type].flickr_images[0];
        $rocket_image.alt = `${api_data[rocket_type].name} rocket image` ;
        
        //Rocket data
        $rocket.innerHTML = `
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">Name</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].name}</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">Country</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].country}</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">Cost per launch</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">&euro;${api_data[rocket_type].cost_per_launch}</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">Height</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].height.meters}m</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
             <h3 class="c-rocket__item--title">Diameters</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].diameter.meters}</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">Engine type</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].engines.type}</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">First flight</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].first_flight}</p>
          </div>
        </li>
        <li class="c-rocket-list__item o-layout">
          <div class="o-layout__item u-1-of-2-bp2">
            <h3 class="c-rocket__item--title">Mass</h3>
          </div>
          <div class="o-layout__item u-1-of-2-bp2">
            <p class="c-rocket__item--info">${api_data[rocket_type].mass.kg}kg</p>
          </div>
        </li>
         `;
    };

    const change_rocket = () => {

    };

    const rocket_type_listener = () => {
        const item_links = document.querySelectorAll(".js-link");
        const checkbox = document.querySelector(".c-menu--toggler")
        console.log(item_links)
        item_links.forEach($item_link  => {
            $item_link.addEventListener("click", () => {
                if($item_link.textContent == "Falcon 1") {
                    console.log("clicked falcon 1")
                    rocket_type = 0;
                } else if ($item_link.textContent == "Falcon 9") {
                    console.log("clicked falcon 9")
                    rocket_type = 1;
                } else if ($item_link.textContent == "Falcon Heavy") {
                    console.log("clicked falcon heavy")
                    rocket_type = 2;
                } else if ($item_link.textContent == "Starship") {
                    console.log("clicked starship")
                    rocket_type = 3;
                }
                get_api();
                
                checkbox.checked = false;
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