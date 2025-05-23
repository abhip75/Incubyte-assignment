function add(numbers){
    if(numbers==='') return 0;

    let delimeter = /,|\n/;
    let numString = numbers;
    if(numbers.startsWith('//')){
        const parts = numbers.split('\n');
        delimeter = new RegExp(parts[0].slice(2));
        numString = parts[1];
    }

    const nums = numString.split(delimeter).map(n => parseInt(n,10));

    const sum = nums.reduce((acc,num) => acc + num, 0);

    return sum;
}

module.exports = { add}