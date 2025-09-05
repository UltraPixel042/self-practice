const students = [
    { id: 66500102, name: "Suda", gpa: 2.5 },
    { id: 66500555, name: "ada", gpa: 2.8 },
    { id: 66500589, name: "pornchai", gpa: 3.25 },
    { id: 66500104, name: "Pornsak", gpa: 3.8 },
]
function Sortstd() {
    return students.sort((a, b) => a.name.localeCompare(b.name));
}

console.log(Sortstd(students));