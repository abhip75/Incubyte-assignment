function add(numbers){
    if(numbers==='') return 0;

    const nums = numbers.split(',').map(n => parseInt(n,10));
    const sum = nums.reduce((acc,num) => acc + num, 0);

    return sum;
}

module.exports = { add}