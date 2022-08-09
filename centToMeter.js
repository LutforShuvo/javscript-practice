function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;

}

const myCentimeter = 2023;
const getMeter = centimeterToMeter(myCentimeter);

console.log(getMeter);