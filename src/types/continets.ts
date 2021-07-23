export type City = {
  id: string;
  city: string;
  country: string;
  banner: {
    src: string;
    alt: string;
  };
  flag: {
    src: string;
    alt: string;
  };
};

export type Continent = {
  id: string;
  title: string;
  subtitle: string;
  banner: {
    src: string;
  };
  cities: City[];
  description: string;
  info: {
    countries: number;
    languages: number;
    cities: number;
  };
};
