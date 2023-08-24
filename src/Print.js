export default function Print() {}

Print.prototype.gameWinner = function (cars) {
  const MIN_WINNER_DISTANCE = 1;
  const WINNING_RESULT_MESSAGE = Object.freeze({
    NO_WINNER: "우승자 없음",
    PRINT_WINNER: (winnerName) => `${winnerName}가 최종 우승했습니다.`,
  });

  const maxDistance = cars.reduce((acc, cur) => Math.max(acc, cur.getPosition()), 0);

  if (MIN_WINNER_DISTANCE > maxDistance) {
    return console.log(WINNING_RESULT_MESSAGE.NO_WINNER);
  }

  const winners = cars
    .filter((car) => car.getPosition() === maxDistance)
    .map((winnerCar) => winnerCar.getName())
    .join(",");

  console.log(WINNING_RESULT_MESSAGE.PRINT_WINNER(winners));
};

Print.prototype.roundResult = function (cars) {
  cars.map(($car) => {
    console.log(`${$car.getName().padEnd(6, " ")}: ${"-".repeat($car.getPosition())}`);
  });
  console.log("\n");
};
