import crypto from 'crypto';

import { ILocation, IPlace } from '../types/interfaces';

export class Place implements IPlace {
  public id = '';

  constructor(
    public title: string,
    public imageUri: string,
    public address: string,
    public location: ILocation
  ) {
    this.id = crypto.randomUUID();
  }
}
