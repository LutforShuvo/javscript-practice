

function uniqueName(names) {
    const uniqueList = [];
    for (let i = 0; i < names.length; i++) {
        var name = names[i];
        if (uniqueList.includes(name) === false) {
            uniqueList.push(name);
        }
    }
    return uniqueList;
}
const nameList = ['Sara', 'Rihab', 'Angela', 'David', 'Agon', 'Nas', 'Ranar', 'Sara', 'Rihab', 'David', 'Rihab'];
const result = uniqueName(nameList);
console.log(result);