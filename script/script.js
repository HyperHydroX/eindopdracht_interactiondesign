const get_api_data = (url) => fetch(url).then((r) => r.json());


const show_rockets = (rockets_data) => {
    // Listeners
    const $rocket_name = document.querySelector(".js-rocket_name");
    const rockets = document.querySelector(".js-rockets");
    console.log(rockets)
    rockets_data.forEach(rocket_data => {
        rockets.innerHTML += `<li class="c-rocket_name">${rocket_data.name}</li>`;
    });
    // rockets.forEach(rocket => {
    //     $rocket_name.textContent = rocket.name;
    // });
};

const get_api = async () => {
    //url
    const endpoint = "https://api.spacexdata.com/v4/rockets";
    console.log(`Endpoint ${endpoint}`);
    // data ophalen
    const rocket_data = await get_api_data(endpoint);
    console.log(rocket_data);

    show_rockets(rocket_data);
};

document.addEventListener("DOMContentLoaded", () => {
    get_api();
});