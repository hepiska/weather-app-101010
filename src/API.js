
class Api {
  url = 'http://api.weatherapi.com/v1'
  key = "e7e2989f36fd4a7a93f150102242202"
  getWeather = async (city) => {
    const response = await fetch(`${this.url}/forecast.json?key=${this.key}&q=${city}`)
    const data = await response.json()
    return data
  }

}

export const api = new Api();