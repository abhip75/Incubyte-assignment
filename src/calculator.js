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

    const negatives = nums.filter(n => n < 0);
    if(negatives.length > 0){
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return nums.reduce((acc,num) => acc + num, 0);
}

module.exports = { add}