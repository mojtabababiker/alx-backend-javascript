// test calcul module functions
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber test', function () {
    it('check two positive integers', function () {
        assert.equal(calculateNumber(2, 3), 5);
    });

    it('check two negative integers', function () {
        assert.equal(calculateNumber(-2, -3), -5);
    });

    it('check one positive integers one negative integer', function () {
        assert.equal(calculateNumber(2, -3), -1);
    });

    it('check one positive integer and on positive float ' +
        'with decimal notation less than 5',
        function () {
            assert.equal(calculateNumber(2, 3.4), 5);
        }
    );

    it('check one positive integer and on positive float ' +
        'with decimal notation greater than 5',
        function () {
            assert.equal(calculateNumber(2, 3.6), 6);
        }
    );

    it('check one negative integer and on positive float ' +
        'with decimal notation less than 5',
        function () {
            assert.equal(calculateNumber(-2, 3.4), 1);
        }
    );

    it('check one negative integer and on positive float ' +
        'with decimal notation greater than 5',
        function () {
            assert.equal(calculateNumber(-2, 3.6), 2);
        }
    );

    it('check one negative integer and on negative float ' +
        'with decimal notation less than 5',
        function () {
            assert.equal(calculateNumber(-2, -3.4), -5);
        }
    );

    it('check one negative integer and on negative float ' +
        'with decimal notation greater than 5',
        function () {
            assert.equal(calculateNumber(-2, -3.6), -6);
        }
    );

    it('check one number and one character',
        function () {
            assert.ok(Number.isNaN(calculateNumber(-2, 'a')));
        }
    );

    it('check one decimal character and one character',
        function () {
            assert.ok(Number.isNaN(calculateNumber('-2', 'a')));
        }
    );

    it('check two characters',
        function () {
            assert.ok(Number.isNaN(calculateNumber('a', 'b')));
        }
    );

    it('check two decimal characters',
        function () {
            assert.deepEqual(calculateNumber('2', '4'), 6);
        }
    );

    it('check two decimal characters, with float points',
        function () {
            assert.deepEqual(calculateNumber('2.4', '4.5'), 7);
        }
    );

    it('check two decimal characters, one with float points less than 5',
        function () {
            assert.deepEqual(calculateNumber('2.4', '4'), 6);
        }
    );

    it('check one decimal characters and one integer',
        function () {
            assert.deepEqual(calculateNumber('2', 4), 6);
        }
    );

    it('check one decimal characters and one float',
        function () {
            assert.deepEqual(calculateNumber('2', 4.6), 7);
        }
    );

    it('check one decimal characters with float and one float',
        function () {
            assert.deepEqual(calculateNumber('2.5', 4.5), 8);
        }
    );

    it('check one float with 9 points and one integer',
        function () {
            assert.equal(calculateNumber(1.499999999, 1), 2);
        }
    );
})