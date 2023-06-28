const findTheOldest = function(people) {
    function getAge(person) {
        let currentYear = new Date().getFullYear();
        return person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (currentYear - person.yearOfBirth)
    }

    const sorted = people.sort((a, b) => getAge(b) - getAge(a));
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
