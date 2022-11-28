
const users = 
`id,first_name,last_name,email,designation,registeredOn
1,Kata,Petrollo,Kata@jscorp.co,Budget/Accounting Analyst IV,1586786455
2,Rafaellle,Francescone,Rafaellle,Quality Engineer,1591762193
3,Hort,Shufflebotham,Horco@jscorp.co,Paralegal,1604920379
3,Hort,Shufflebotham,Horco@jscorp.co,Paralegal,1604920379
4,Raimundo,Beddingham,Raimundo@jscorp.co,Librarian,1590530472
4,Raimundo,Beddingham,Raimundo@jscorp.co,Librarian,1590530472
5,Jamaal,Hyde,Jamaal@jscorp.co,Quality Engineer,1606653657`;




// function 1


const csvToRows = csv => {
    let output = [];
    csv.split('\n').forEach((row) => output.push(row))
        // output.push(row.split(','));
    return output;
};

let a1 = csvToRows(users)
console.log(a1)
//  console.table(csvToRows(users))







// function 2

 const removeDuplicateRows = (arr)=> arr.reduce((acc , curr) =>
 !acc.some((elem)=>JSON.stringify(elem)===JSON.stringify(curr))
 ? [...acc ,curr]
 : acc,
 []
 );
 let a2 = removeDuplicateRows(a1)
 console.log(a2);





// function 3


const strRowsToObjects = (arr) =>  

{   let final = [];
    let out = [];
    arr.forEach((elem) => {

        let j = [];
        j.push(elem);
        out.push(j);
      })
        out.forEach((elem,index) => {
            // console.log(elem);
            if(index !== 0){
                let obj = {};
                elem.map((e) => {
                    let x= e.split(',')
                    let y = out[0]
                    let t = y.map((p)=>
                        {
                      let z =  p.split(',')
                      for(let i=0; i<6;i++){
                      obj[z[i]]=x[i]
                    }
                     }) 
                });
                final.push(obj);
            }
        });
    return final;
        }
let a3 = strRowsToObjects(a2);
console.log(a3)
    
// const strRowsToObjects = (arr) => {
//     let out = [];
//     arr.forEach((elem,index) => {
//         if(index !== 0){
//             let obj = {};
//             elem.forEach((elem,index) => {
//                 obj[arr[0][index]] = elem;
//             });
//             out.push(obj);
//         }
//     });
//     return out;

//     }





 
// function 4

 const timeToDate = (arr) =>arr.map((obj) => (
    { ...obj, registeredOn : new Date(obj.registeredOn*1000).toISOString()
    }));

let a4 = timeToDate(a3);
console.log(a4)



 
// function 5

 const sortByFirstName = (arr) => 
 [...arr].sort(function(a, b) {
    var textA = a.first_name.toUpperCase();
    var textB = b.first_name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
    let a5 = sortByFirstName(a4)
    console.log(a5)
 

// [...arr].sort (
//     function (a, b) {
//         if (a.first_name.toUpperCase() < b.first_name.toUpperCase()){
//             return -1;
//         } else if (a.first_name.toUpperCase() > b.first_name.toUpperCase()){
//             return 1;
//         } else {
//             return 0;   
//         }
//     }
// );



// function 6

const addUserPermissions =(arr) => arr.map(obj => ({ ...obj,
        permissions: {
            admin: false,
      profile: true,
      billing: true,
      supervisor: false,
        }}))

let a6 = addUserPermissions(a5)
console.log(a6)



// function 7

const findBadEmailIds = (arr) =>[...arr].filter(
 
    (a) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !a.email.toLowerCase().match(regex)}
    );


  console.log(findBadEmailIds(a6))

// function 8

const processData = function(data){
    return (addUserPermissions(sortByFirstName(timeToDate(strRowsToObjects(removeDuplicateRows(csvToRows(data)))))))
}
console.log(processData(users))

