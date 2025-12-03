function getData() {
  return new Promise((resolve, reject) => {
    const success = false; 

    setTimeout(() => {
      if (success) {
        resolve("Data received successfully!");
      } else {
        reject("Error: Could not fetch data.");
      }
    }, 1000);
  });
}

getData()
  .then(result => {
    console.log("SUCCESS:", result);
  })
  .catch(error => {
    console.log("FAIL:", error);
  });
