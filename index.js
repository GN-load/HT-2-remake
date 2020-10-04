
const obj = [
    { name: 'Radar', price: 1300, quantity: 8 },
    { name: 'Scaner', price: 1330, quantity: 6 },
    { name: 'Droid', price: 1320, quantity: 5 },
    { name: 'Zahvat', price: 1350, quantity: 3 }
];
const arr = []
const func = (a, b) => {
    for (let i = 0; i < a.length; i++) {
       for(key in a[i]) {
           if(b == key) {
               arr.push(a[i][key])
           }
       }
    };
    console.log(arr)
};
func(obj, 'name')

