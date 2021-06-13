projects = [
    {id: 1},
    {id: 2}, 
    {id: 3}
]

for (const project of projects) {
    for (const [key, value] of Object.entries(project)) {
        console.log(`${key}: ${value}`);
    }
}
