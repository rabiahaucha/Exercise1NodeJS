//fs module
const
{writeFile, readFile,
appendFile} = require('fs')


readFile('./data.txt', 'utf-8', (err,
    data)=>{
        if(!err)
        console.log(data);
        else
        console.log('An error ocourred');
    })
    
    // writeFile('./data.txt', 'Butterfly', (err,
    // data)=>{
    //     if(!err)
    //     console.log(data);
    //     else
    //     console.log('An error ocourred');
    // })

    // appendFile('./data.txt', ' Whale', (err,
    //     data)=>{
    //         if(!err)
    //         console.log(data);
    //         else
    //         console.log('An error ocourred');
    //     })