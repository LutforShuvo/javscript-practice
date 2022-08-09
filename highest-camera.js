const phoneList = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 23000, color: 'Silver' },
    { name: 'Nokia', camera: 23, storage: '32gb', price: 20000, color: 'Black' },
    { name: 'Xiaomi', camera: 52, storage: '32gb', price: 14000, color: 'white' },
    { name: 'Realme', camera: 105, storage: '32gb', price: 83299, color: 'Gray' },
    { name: 'Motorolla', camera: 23, storage: '32gb', price: 23800, color: 'Red' },
    { name: 'HTC', camera: 23, storage: '32gb', price: 29438, color: 'Silver' },
    { name: 'Vivo', camera: 75, storage: '32gb', price: 48399, color: 'Green' },
    { name: 'Oppo', camera: 85, storage: '32gb', price: 28399, color: 'Majenda' },
];


function highestCamera(phones) {
    let highest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}


const mySelection = highestCamera(phoneList);

console.log(mySelection);
