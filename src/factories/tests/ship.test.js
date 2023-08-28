import Ship from "../ship";

describe("ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(1, 5, true);
  });

  test("creates new ship", () => {
    expect(ship).toEqual({
      hits: 0,
      id: 1,
      isVertical: true,
      length: 5,
      status: false,
    });
  });

  test("takes hit", () => {
    ship.hit();
    expect(ship.hits).toEqual(1);
  });

  test("sinks", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.status).toEqual(false);
  });
});
