export class Place {
  constructor(
    public room_id: Number,
    public name: String,
    public room_number: Number,
    public description: String,
    public path_image: String,
    public score: Number,
    public price: Number,
    public isavailable: boolean,
    public max_beds: Number,
    public max_adults: Number,
    public max_children: Number,
    public createon: Date,
    public updateon: Date
  ) {}
}
