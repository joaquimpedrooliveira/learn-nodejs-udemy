const users = [{
    id: 1,
    name: 'Joaquim',
    schoolId: 101
}, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) =>  user.id === id);

        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}.`);
        }
    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

const getStatus = (id) => {
    let user;
    return getUser(id).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId)
            .then((grades) => {
                let avg = 0;
                if (grades.length > 0) {
                    avg = grades.map((grade) => grade.grade).reduce((a,b) => a+b)/grades.length;
                }
                return `${user.name} has a ${avg}% in the class`;
            })
    });
};

const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    let avg = 0;
    if (grades.length > 0) {
        avg = grades.map((grade) => grade.grade).reduce((a,b) => a+b)/grades.length;
    }
    return `${user.name} has a ${avg}% in the class`;
};

getStatusAlt(2)
    .then((status) => {
        console.log('status:', status);
    }).catch((e) => {
    console.log(e);
});


// getStatus(1)
//     .then((status) => {
//         console.log('status:', status);
//     }).catch((e) => {
//     console.log(e);
// });

// getUser(2)
//     .then((user) => {
//         console.log('user:', user);
//     }).catch((e) => {
//     console.log(e);
// });

// getGrades(101)
//     .then((grade) => {
//         console.log('grades:', grade);
//     }).catch((e) => {
//     console.log(e);
// });