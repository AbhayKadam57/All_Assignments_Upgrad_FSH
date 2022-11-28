
const users = 
`id,first_name,last_name,email,designation,registeredOn
1,Kata,Petrollo,Kata@jscorp.co,Budget/Accounting Analyst IV,1586786455
2,Rafaellle,Francescone,Rafaellle,Quality Engineer,1591762193
3,Hort,Shufflebotham,Horco@jscorp.co,Paralegal,1604920379
3,Hort,Shufflebotham,Horco@jscorp.co,Paralegal,1604920379
4,Raimundo,Beddingham,Raimundo@jscorp.co,Librarian,1590530472
4,Raimundo,Beddingham,Raimundo@jscorp.co,Librarian,1590530472
5,Jamaal,Hyde,Jamaal@jscorp.co,Quality Engineer,1606653657`;



// Convert comma-separated data to an Array of string rows
const csvToRows = (str) => {let output = [];
    str.split('\n').forEach((row) => output.push(row))
    return output;};

    let a1 = csvToRows(users)
    console.log(a1)



// Remove duplicate rows from the Array
const removeDuplicateRows = (arr) => arr.reduce((acc , curr) =>
!acc.some((elem)=>JSON.stringify(elem)===JSON.stringify(curr))
? [...acc ,curr]
: acc,
[]
);
let a2 = removeDuplicateRows(a1)
console.log(a2);



// Convert Array of string rows to objects using the row at index 0 as property names
const strRowsToObjects = (arr) => {let final = [];
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
                    y.map((p)=>
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
    return final;};
    let a3 = strRowsToObjects(a2);
    console.log(a3)



// Convert the registeredOn epoch timestamps to Date objects
const timeToDate = (arr) =>arr.map((obj) => (
    { ...obj, registeredOn : new Date(obj.registeredOn*1000)
    }));
    let a4 = timeToDate(a3);
console.log(a4)




// Sort the array alphabetically (ascending) by first_name
const sortByFirstName = (arr) =>
[...arr].sort(function(a, b) {
   var textA = a.first_name.toUpperCase();
   var textB = b.first_name.toUpperCase();
   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
let a5 = sortByFirstName(a4)
console.log(a5)


// Add a new property named permissions to every object {admin: false,profile: true,billing: true,supervisor: false}
const addUserPermissions = (arr) => arr.map(obj => ({ ...obj,
    permissions: {
        admin: false,
  profile: true,
  billing: true,
  supervisor: false,
    }}))


    let a6 = addUserPermissions(a5)
console.log(a6)

// Find user objects with bad ill-formed/bad email IDs and return them as result


const findBadEmailIds = (arr) => arr.filter(
 
    (a) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !a.email.toLowerCase().match(regex)}
    );


    console.log(findBadEmailIds(a6))
// Implement the data processing pipeline using the functions above and return an array of user objects with no duplicates, sorted by first_name, timestamps converted to date objects and the user permissions object added.
const processData = (data) => {return addUserPermissions(sortByFirstName(timeToDate(strRowsToObjects(removeDuplicateRows(csvToRows(data))))))};


console.log(processData(users))