// Chaleng

function showDetails(a, b, c) {
  let userNam;
  let age;
  let status;
  let isMareyed;

  //? userNam
  typeof a === "string"
    ? (userNam = a)
    : typeof b === "string"
      ? (userNam = b)
      : typeof c === "string"
        ? (userNam = c)
        : null;

  //? age
  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
      ? (age = b)
      : typeof c === "number"
        ? (age = c)
        : null;

  //? status
  typeof a === "boolean"
    ? (status = a)
    : typeof b === "boolean"
      ? (status = b)
      : typeof c === "boolean"
        ? (status = c)
        : null;

  // if (status === true) {
  //     isMareyed = "Mareyd";
  // } else {
  //     isMareyed = "Sad"
  // }

  console.log(
    `Hello ${userNam} your age is ${age} you are ${status === true ? (isMareyed = "Mareyd") : (isMareyed = "Sad")
    }`,
  );
}

showDetails("Rayan", 22, false);
showDetails(true, "Rayan", 22);
showDetails(22, false, "Rayan");
showDetails("Rayan", 22, true);
