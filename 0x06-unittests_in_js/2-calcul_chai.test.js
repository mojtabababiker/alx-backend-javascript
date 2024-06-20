// test the simple calculator from 2-calcul_chai
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;


describe('calculateNumber Test cases', function () {
    describe('SUM test cases', function () {
        it('check two positive integers', function () {
            expect(calculateNumber('SUM', 2, 3)).to.equal(5);
        });

        it('check two negative integers', function () {
            expect(calculateNumber('SUM', -2, -3)).to.equal(-5);
        });

        it('check one positive integers one negative integer', function () {
            expect(calculateNumber('SUM', 2, -3)).to.equal(-1);
        });

        it('check one positive integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('SUM', 2, 3.4)).to.equal(5);
            }
        );

        it('check one positive integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('SUM', 2, 3.6)).to.equal(6);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('SUM', -2, 3.4)).to.equal(1);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('SUM', -2, 3.6)).to.equal(2);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('SUM', -2, -3.4)).to.equal(-5);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('SUM', -2, -3.6)).to.equal(-6)
            }
        );

        it('check one float with 9 points and one integer',
            function () {
                // assert.equal(calculateNumber('SUM', 1.499999999, 1), 2);
                expect(calculateNumber('SUM', 1.499999999, 1)).to.equal(2)
            }
        );
    });

    describe('SUBTRACT test cases', function () {
        it('check two positive integers', function () {
            expect(calculateNumber('SUBTRACT', 2, 3)).to.equal(-1);
        });

        it('check two negative integers', function () {
            expect(calculateNumber('SUBTRACT', -2, -3)).to.equal(1);
        });

        it('check one positive integers one negative integer', function () {
            expect(calculateNumber('SUBTRACT', 2, -3)).to.equal(5);
        });

        it('check one positive integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('SUBTRACT', 2, 3.4)).to.equal(-1);
            }
        );

        it('check one positive integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('SUBTRACT', 2, 3.6)).to.equal(-2);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('SUBTRACT', -2, 3.4)).to.equal(-5);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('SUBTRACT', -2, 3.6)).to.equal(-6);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('SUBTRACT', -2, -3.4)).to.equal(1);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('SUBTRACT', -2, -3.6)).to.equal(2);
            }
        );

        it('check one float with 9 points and one integer',
            function () {
                expect(calculateNumber('SUBTRACT', 1.499999999, 1)).to.equal(0);
            }
        );
    });

    describe('DIVIDE test cases', function () {
        it('check two positive integers', function () {
            expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
        });

        it('check two negative integers', function () {
            expect(calculateNumber('DIVIDE', -3, -3)).to.equal(1);
        });

        it('check one positive integers one negative integer', function () {
            expect(calculateNumber('DIVIDE', 2, -3)).to.equal(-0.6666666666666666);
        });

        it('check one positive integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('DIVIDE', 2, 3.4)).to.equal(0.6666666666666666);
            }
        );

        it('check one positive integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('DIVIDE', 2, 3.6)).to.equal(0.5);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('DIVIDE', -2, 3.4)).to.equal(-0.6666666666666666);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('DIVIDE', -2, 3.6)).to.equal(-0.5);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation less than 5',
            function () {
                expect(calculateNumber('DIVIDE', -2, -3.4)).to.equal(0.6666666666666666);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation greater than 5',
            function () {
                expect(calculateNumber('DIVIDE', -2, -3.6)).to.equal(0.5);
            }
        );

        it('check one float with 9 points and one integer',
            function () {
                expect(calculateNumber('DIVIDE', 1.499999999, 1)).to.equal(1);
            }
        );

        it('check with zero division',
            function () {
                expect(calculateNumber('DIVIDE', 4, 0.2)).to.equal('Error');
            }
        );

        it('check with zero division',
            function () {
                expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
            }
        );
    });
})
