function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = (a: number) => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

return (
    <>
    <h3>Map</h3>
    numberArray1 = {numberArray1}<br />
    squares = {squares}<br />
    cubes = {cubes}
    </>
);
}
export default MapFunction;