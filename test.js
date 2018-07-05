import test from 'ava';
import fitToArea from '.';

test('should work', t => {
	const err = t.throws(() => {
		fitToArea();
	}, TypeError);
  t.is(err.message, 'Expected objectDimensions and areaDimensions');

  t.deepEqual(fitToArea({
    objectDimensions: { width: 5, height: 10 },
    areaDimensions: { width: 5, height: 5},
  }), { width: 2.5, height: 5 });

  t.deepEqual(fitToArea({
    objectDimensions: { width: 10, height: 20 },
    areaDimensions: { width: 10, height: 10},
  }), { width: 5, height: 10 });

  t.deepEqual(fitToArea({
    objectDimensions: { width: 50, height: 50 },
    areaDimensions: { width: 5, height: 5},
  }), { width: 5, height: 5 });

  t.deepEqual(fitToArea({
    objectDimensions: { width: 100, height: 500 },
    areaDimensions: { width: 5, height: 5},
  }), { width: 1, height: 5 });
});
