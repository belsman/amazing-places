export interface ILocation {
  latitude: number;
  longitute: number;
}

export interface IPlace {
  id: string;
  title: string;
  address: string;
  location: ILocation;
  imageUri: string;
}
