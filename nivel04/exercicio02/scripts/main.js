const students = [
    {
        name: 'Gracie',
        grade: [
            80,
            90
        ]
    },
    {
        name: 'Paulo',
        grade: [
            100,
            40
        ]
    },
    {
        name: 'Renato',
        grade: [
            70,
            20
        ]
    },
    {
        name: 'Micaela',
        grade: [
            100,
            97
        ]
    }
]

function gradeSum(students) {
    const sums = students.map(student => student.grade[0] + student.grade[1]);
    return sums;
}

function getAverage(students) {
    const sums = gradeSum(students);
    const averages = sums.map(sum => sum / 2);
    return averages;
}

averageResult = getAverage(students)

for (i = 0; i < students.length; i++) {
    if (averageResult[i] >=70) {
        alert(`A média do(a) aluno(a) é: ${averageResult[i]} \nParabéns ${students[i].name}! Você foi aprovado(a)!`)
    } else {
        alert(`A média do(a) aluno(a) é: ${averageResult[i]} \nNão foi dessa vez ${students[i].name}... Tente novamente!`)
    }
}

