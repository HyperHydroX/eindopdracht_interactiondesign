const get_api_data = (url) => fetch(url).then((r) => r.json());

const endpoint = "https://api.nasa.gov/insight_weather/?api_key=iW652baPrAcb1T7No3bjFvxFMo5VnjFDYIcGpizl&feedtype=json&ver=1.0";
console.log(get_api_data(endpoint));