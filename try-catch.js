console.log(25);
// console.log(district);
// let district = 'Bbaria';
console.log(100);

try {
    console.log('Inside try');
    console.log(district);
    let district = 'Bbaria';
}
catch (error) {
    console.log('inside catch')
    console.log(error)
}
finally {
    console.log('finally done');
    console.log(100);
}