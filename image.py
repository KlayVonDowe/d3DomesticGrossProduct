import requests
from PIL import Image

api_key = "AxM4OjN6eHDSGyeYaze1e5PPwu7fzqT692Yme4FN"
base_url = "https://api.nasa.gov/planetary/apod?api_key="
full_address = base_url + api_key

response = requests.get(full_address)
x = response.json()
pic = x["hdurl"]
im = Image.open(requests.get(pic, stream=True).raw)
im.show()
print(x["explanation"])