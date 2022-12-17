const input = document.querySelector("input");

const image = document.querySelector("img");

const button = document.querySelector("button");

let countryName = "";

//Following function will split word and make first letter of each word capital.e.g new zealand ==> New Zealand
const FirstLetterUppercase = (word) => {
  let Country = word.split(" ");

  let WordArray = Country.map((item) => {
    let country = item.toLowerCase();

    let SplittedCountry = country.split("");

    let firstLetter = SplittedCountry[0];

    SplittedCountry.splice(0, 1, firstLetter?.toUpperCase());

    return SplittedCountry.join("");
  });

  return WordArray.join(" ");
};

// Following code will add background color of button
input.addEventListener("click", () => {
  button.style.backgroundColor = `rgb(255, 202, 117)`;
  document.querySelector(".error")?.remove();
});

// Following code will remove background color of button
input.addEventListener("blur", (e) => {
  button.style.backgroundColor = `transparent`;
  countryName = FirstLetterUppercase(e.target.value);
});

// Following code will get country code of search country through api asynchronously
button.addEventListener("click", async (e) => {
  try {
    let flagCode = await fetch("https://flagcdn.com/en/codes.json").then(
      (res) => {
        return res.json();
      }
    );

    // console.log(countryName);
    let countryArray = Object.entries(flagCode).filter((c) =>
      c.includes(countryName)
    );

    let CountryCode = countryArray[0][0];

    image.src = Object.values(flagCode).includes(countryName)
      ? `https://flagcdn.com/256x192/${CountryCode}.png`
      : ``;

    console.log(CountryCode);
  } catch (err) {
    console.log(new Error("Can't Find Country Name..."));

    const error = document.createElement("small");

    error.setAttribute("class", "error");

    error.innerText = `Can't Find Country Name...`;

    error.style.color = "red";

    console.log(
      document.querySelector("#left").lastElementChild.classList.contains("box")
    );

    //Following code will show error if country name is not present or missing
    !document
      .querySelector("#left")
      .lastElementChild.classList.contains("error") &&
      document.querySelector("#left").appendChild(error);
  }
});
