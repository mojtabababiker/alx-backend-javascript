interface MajorCredits {
    credits: number,
    _brand: void,
};

interface MinorCredits{
    credits: number,
    _brand: void,
};

function sumMinorCredits(subject1:MinorCredits, subject2:MinorCredits):MinorCredits{
    const sum = {credits: subject1.credits + subject2.credits};
    return sum as MinorCredits;
}

function sumMajorCredits(subject1:MajorCredits, subject2:MajorCredits):MajorCredits{
    const sum = {credits: subject1.credits + subject2.credits};
    return sum as MajorCredits;
}
