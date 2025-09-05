const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
];

function getPassingNames(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].score > 70){
            result.push(arr[i].name.toUpperCase())
        }
    }
    return result
}

const passingNames = getPassingNames(studentScores);
console.log(passingNames);
// Output: ["ALICE", "BOB", "EVE"]


