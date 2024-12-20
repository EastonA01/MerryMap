
![Logo](https://raw.githubusercontent.com/EastonA01/MerryMap/refs/heads/main/MerryMapBanner.png)


# MerryMap

Overall this project's purpose is to allow users to find Christmas light displays in their area with an easy-to-access mapping tool that allows for the marking of locations with images and additional information.




## Demo

[Demo Link](https://eastona01.github.io/MerryMap) (W.I.P / Under Development)


## Roadmap

- Add markers to map via street address ✅ Achieved 12/03/24

    - Street address autocomplete (Geocoding API) ✅ Achieved 12/03/24

- Transition of marker storage from localstorage to DB ✅ Achieved 12/04/24

- Only enable logged-in users to create points via Google OAuth2

- Ability to add images from camera roll/local folder

- Additional browser support

- Mobile phone support

    - Ability to use current Geolocation for placing markers

- Google/Apple Maps seamless integration (to allow navigation to locations)


## Authors

- [@EastonA01](https://www.github.com/EastonA01)


## Acknowledgements

- [LeafletJS for it's mapping tool](https://leafletjs.com/)
- [React Leaflet Library](https://react-leaflet.js.org/)
- [GeoApify Geocoding API](https://apidocs.geoapify.com/)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/EastonA01/MerryMap)

![GitHub contributors](https://img.shields.io/github/contributors/EastonA01/MerryMap)


## Run Locally

Clone the project

```bash
  git clone https://https://github.com/EastonA01/MerryMap.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

### Set Up Your .env
At the moment if you want to contribute you'll need to have your own instance of Supabase set up to have the project work properly. So you will need to follow the steps below:

1. Create a `.env` file
```bash
 touch .env
```
2. Add your secrets to the vite project .env
```
 VITE_SUPABASE_KEY=your_supabase_key

 VITE_SUPABASE_URL=https://your_supabase_url_here.supabase.co
```
Start the server

```bash
  npm run dev
```


## Contributing

Contributions are always welcome!

More than likely you're going to need to `fork` the project and do a pull request once changes are made and will be put under manual review.

Please adhere to this project's `code of conduct`.


## Screenshots

V0.0.3 | When locations could finally be added with Latitude/Longitude and the ability to add images
![App Screenshot](https://cdn.discordapp.com/attachments/1149787060299898920/1313585187526807724/image.png?ex=6750ab09&is=674f5989&hm=6c57dee20820e02cbc1112f201fafcbeaf656761188a66c2b842308880faf9c4&e)


## Tech Stack

**Client:** React, Vite, JavaScript

**Server:** Supabase

