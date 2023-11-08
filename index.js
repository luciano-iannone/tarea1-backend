async function todoEsto () {

    //ASINC TAREA 1
    const res = await fetch (x)
    const resEnJson = await res.json()
    console.log(1);

    //ASINC TAREA 2
    const res2 = await fetch (x)
    const resEnJson2 = await res2.json()
    console.log(2);

    //ASINC TAREA 3
    const res3 = await fetch (x)
    const resEnJson3 = await res3.json()
    console.log(3);
}

todoEsto();

//normal //SINCRONO

console.log(new Date().toISOString(),4)
console.log(new Date().toISOString(),5)