// test calcul module functions
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber Test cases', function () {
    describe('SUM test cases', function () {
        it('check two positive integers', function () {
            assert.equal(calculateNumber('SUM', 2, 3), 5);
        });

        it('check two negative integers', function () {
            assert.equal(calculateNumber('SUM', -2, -3), -5);
        });

        it('check one positive integers one negative integer', function () {
            assert.equal(calculateNumber('SUM', 2, -3), -1);
        });

        it('check one positive integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('SUM', 2, 3.4), 5);
            }
        );

        it('check one positive integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('SUM', 2, 3.6), 6);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('SUM', -2, 3.4), 1);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('SUM', -2, 3.6), 2);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('SUM', -2, -3.4), -5);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('SUM', -2, -3.6), -6);
            }
        );

        it('check one float with 9 points and one integer',
            function () {
                assert.equal(calculateNumber('SUM', 1.499999999, 1), 2);
            }
        );
    });

    describe('SUBTRACT test cases', function () {
        it('check two positive integers', function () {
            assert.equal(calculateNumber('SUBTRACT', 2, 3), -1);
        });

        it('check two negative integers', function () {
            assert.equal(calculateNumber('SUBTRACT', -2, -3), 1);
        });

        it('check one positive integers one negative integer', function () {
            assert.equal(calculateNumber('SUBTRACT', 2, -3), 5);
        });

        it('check one positive integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('SUBTRACT', 2, 3.4), -1);
            }
        );

        it('check one positive integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('SUBTRACT', 2, 3.6), -2);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('SUBTRACT', -2, 3.4), -5);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('SUBTRACT', -2, 3.6), -6);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('SUBTRACT', -2, -3.4), 1);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('SUBTRACT', -2, -3.6), 2);
            }
        );

        it('check one float with 9 points and one integer',
            function () {
                assert.equal(calculateNumber('SUBTRACT', 1.499999999, 1), 0);
            }
        );
    });

    describe('DIVIDE test cases', function () {
        it('check two positive integers', function () {
            assert.equal(calculateNumber('DIVIDE', 3, 3), 1);
        });

        it('check two negative integers', function () {
            assert.equal(calculateNumber('DIVIDE', -3, -3), 1);
        });

        it('check one positive integers one negative integer', function () {
            assert.equal(calculateNumber('DIVIDE', 2, -3), -0.6666666666666666);
        });

        it('check one positive integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('DIVIDE', 2, 3.4), 0.6666666666666666);
            }
        );

        it('check one positive integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('DIVIDE', 2, 3.6), 0.5);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('DIVIDE', -2, 3.4), -0.6666666666666666);
            }
        );

        it('check one negative integer and on positive float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('DIVIDE', -2, 3.6), -0.5);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation less than 5',
            function () {
                assert.equal(calculateNumber('DIVIDE', -2, -3.4), 0.6666666666666666);
            }
        );

        it('check one negative integer and on negative float ' +
            'with decimal notation greater than 5',
            function () {
                assert.equal(calculateNumber('DIVIDE', -2, -3.6), 0.5);
            }
        );

        it('check one float with 9 points and one integer',
            function () {
                assert.equal(calculateNumber('DIVIDE', 1.499999999, 1), 1);
            }
        );

        it('check with zero division',
            function () {
                assert.equal(calculateNumber('DIVIDE', 4, 0.2), 'Error');
            }
        );

        it('check with zero division',
            function () {
                assert.equal(calculateNumber('DIVIDE', 4, 0), 'Error');
            }
        );
    });
})
