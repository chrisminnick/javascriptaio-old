async function getData() {
  return await fetch('https://nothinghere');
}

async function main() {
  try {
    const response = await getData();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

main();
