const x = [...Array(1000).keys()].filter((x) => x%3 === 0 || x%5 === 0).reduce((t,i) => t+i)
console.log(x); // 233168
