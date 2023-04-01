//Ex:1
let obj = {
    name: 'Sakthi',
    age: '26',
    occ: 'IT',
    loc: 'chennai',
}
//1.for loop
// entries method
let array = Object.entries(obj)
for (let i=0; i<array.length;i++)
{
    console.log(array[i])
}
//key method
let arr = Object.keys(obj)
for (let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//value method
let ar = Object.values(obj)
for (let i=0;i<ar.length;i++)
{
    console.log(ar[i])
}

//2.for of loop
for (let i of array)
{
    console.log(i)
}

// 3.for in loop
for (let i in array)
{
    console.log(i)
}

// 4.for each loop

array.forEach(function(value,index)
{
    console.log(value)
    console.log(index)
})

