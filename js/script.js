const get_api_data = (url) => fetch(url).then((r) => r.json());


const show_rocket = (api_data) => {
    // Listeners
    const $rocket = document.querySelector(".js-rocket");
    const $rocket_image = document.querySelector(".js-rocket_image");

    console.log(api_data[1].flickr_images[0])
    $rocket_image.src = api_data[0].flickr_images[0];
    $rocket_image.alt = "Falcon 1 rocket";
    
    $rocket.innerHTML = `
        <li>Name: ${api_data[0].name}</li>
        <li>Country: ${api_data[0].country}</li>
        <li>Cost per launch: &euro;${api_data[0].cost_per_launch}</li>
        <li>Height: ${api_data[0].height.meters}m</li>
        <li>Diameters: ${api_data[0].diameter.meters}</li>
        <li>Engine type: ${api_data[0].engines.type}</li>
        <li>First flight: ${api_data[0].first_flight}</li>
        <li>Mass: ${api_data[0].mass.kg}kg</li>
    `;
};

const get_api = async () => {
    //url
    const endpoint = "https://api.spacexdata.com/v4/rockets";
    console.log(`Endpoint ${endpoint}`);
    // data ophalen
    const rocket_data = await get_api_data(endpoint);
    console.log(rocket_data);

    show_rocket(rocket_data);
};

document.addEventListener("DOMContentLoaded", () => {
    get_api();
});