export const ROSTER_DESCRIPTION = `Part of NASA's Mars Science Laboratory mission,
  Curiosity is the largest and most capable rover ever sent to Mars.
  It launched November 26, 2011 and landed on Mars at
  10:32 p.m. PDT on Aug.5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
  Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
  Part of NASA's Mars Science Laboratory mission,
  Curiosity is the largest and most capable rover ever sent to Mars.
  10:32 p.m. PDT on Aug.5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
  Curiosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mission, Curiosity's scientific tools found chemical and mineral evidence of past habitable environments on Mars. It continues to explore the rock record from a time when Mars could have been home to microbial life.
  It launched November 26, 2011 and landed on Mars at
  10:32 p.m. PDT on Aug.5, 2012 (1:32 a.m. EDT on Aug. 6, 2012).
  `;

export const API_KEY = "SDepKEKc0lRACayS90Pa38LI8b8FpeOxBQMZcIAr";

export const API_ROOT = "https://api.nasa.gov/";

export const ENDPOINTS = {
  get_image_by_date: "mars-photos/api/v1/rovers/curiosity/photos/",
  get_weather: "insight_weather/",
};

export const EARTH_DATE = '2020-07-14';

export const PAGE_SIZE_PHOTOS = 15;
export const PAGE_SIZE_WEATHER = 9;
export const PAGE_TITLE = {
  photo: "mars images by date"
}

const sizeDevice = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const deviceMedia = {
  mobileS: `(min-width: ${sizeDevice.mobileS})`,
  mobileM: `(min-width: ${sizeDevice.mobileM})`,
  mobileL: `(min-width: ${sizeDevice.mobileL})`,
  tablet: `(min-width: ${sizeDevice.tablet})`,
  laptop: `(min-width: ${sizeDevice.laptop})`,
  laptopL: `(min-width: ${sizeDevice.laptopL})`,
  desktop: `(min-width: ${sizeDevice.desktop})`,
  desktopL: `(min-width: ${sizeDevice.desktop})`
};