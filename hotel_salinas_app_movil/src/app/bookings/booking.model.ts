export class Booking {
  constructor(
    public id: String,
    public placeId: String,
    public userId: String,
    public placeTitle: String,
    public guestNumber: number
  ) {}
}
