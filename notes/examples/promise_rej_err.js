async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  //   const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
//   const results = await Promise.all([p1, p2]);
  //   const results = await Promise.all([p1, p2]).catch((error) => {
  //     console.log("Error:", error);
  //   });

    const results = await Promise.allSettled([p1, p2]);
  //   console.log(results);
}
console.log(foo().catch(() => {})); // Attempt to swallow all errors...
