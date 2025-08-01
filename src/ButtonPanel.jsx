function PointsButton({ value, addPoints }) {
  function handleClick() {
    addPoints(value);
  }

  return (
    <div className="points-button" onClick={handleClick}>
      + {value}
    </div>
  );
}

export default function ButtonPanel({ player, addPoints }) {
  const excludedPoints = [19, 25, 26, 27];
  const cells = Array.from({ length: 29 }, (_, i) => {
    return i + 1;
  })
    .filter((i) => !excludedPoints.includes(i))
    .map((i) => <PointsButton value={i} key={i} addPoints={addPoints} />);

  return <div className={`button-panel ${player}`}>{cells}</div>;
}