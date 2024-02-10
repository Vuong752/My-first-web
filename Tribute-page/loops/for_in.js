const person = {
    username: 'VT',
    age: 28,
    email: 'vt@gmail.com',
    adress: [
        'HN',
        'HCM',
        'DN',
    ]
};

// duyet qua tat ca properties cua 1 object 

for (let key in person) {
    let value = person[key]

    console.log(value);
}
   