const isPrime = function (number) {
    if (number > 1000 || number < 2)
        {return 'Данные неверны';}

    for (let i=2; i*i<=number; i++) {
        if (number % i === 0)
            {return 'Число '+number+' - составное число';}
    }

    return 'Число '+number+' - простое число';
};

module.exports = isPrime;