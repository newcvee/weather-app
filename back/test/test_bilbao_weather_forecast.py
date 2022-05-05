from src.bilbao_weather import get_weather_forecast



def test_should_return_rainy_by_default():
    result = get_weather_forecast("2022-01-25")
    expected = {"city": "Bilbao", "clouds": 1 , "rain_probability": 0.99, "temperature": 15, }
    assert expected == result

def test_should_return_not_so_rainy_in_july():
    result = get_weather_forecast("2022-07-25")
    expected = {"city": "Bilbao", "clouds": 0.25 , "rain_probability": 0.25, "temperature": 25, }
    assert expected == result