function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
}

doTask("A")
  .then(resolveValue => {
    console.log(resolveValue);
  })
  .then(() => {
    doTask("D")
      .then(resolveValue => {
        console.log(resolveValue);
      })
      .then(() => {
        doTask("C").then(resolveValue => {
          console.log(resolveValue);
        });
      });
  });

doTask("B").then(resolveValue => {
  console.log(resolveValue);
});

doTask("E").then(resolveValue => {
  console.log(resolveValue);
});

doTask("F").then(resolveValue => {
  console.log(resolveValue);
});

// running multiple tasks to completion before running
// task D. The results are presented in the order
// of the Promises in the array even though some might
// complete faster than the others.

Promise.all([doTask("A"), doTask("B"), doTask("C")])
  .then(results => {
    //first console.log the results
    results.forEach(result => console.log(result));
    return doTask("D");
  })
  .then(result => {
    console.log(result);
  });
