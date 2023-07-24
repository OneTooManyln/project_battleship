import Ship from "../ship";

describe("ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(1, 5);
  });

  test("Create new ship", () => {
    expect(ship).toEqual({ hits: 0, id: 1, length: 5, status: false });
  });
});
