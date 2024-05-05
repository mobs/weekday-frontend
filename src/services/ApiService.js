export const baseUrl = "https://api.weekday.technology/adhoc/getSampleJdJSON";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const POST = (body) => {
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result;
      })
      .then(resolve)
      .catch((error) => console.log({error}));
  });
};
