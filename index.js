// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: ["Yellow", "Pink", "White", "Purple"],
  isHavePet: true,
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: "2016",
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: "2019",
    },
    {
      name: "SMA 03",
      city: "Tangerang",
      graduate: null,
    },
  ],
  favoriteRestaurant: [
    "Bento",
    "Sushi",
    "Pancake",
    "Eggy",
    "Tempura",
    "Bento",
    "Eggy",
    "Padang",
    "Tteok",
    "Sushi",
    "Sushi",
  ],
};

// ------- filter favorite colour -------------------------
let filterFavoriteColor = new Set();
filterFavoriteColor.add(firstUser.favoriteColor[0]);
filterFavoriteColor.add(firstUser.favoriteColor[1]);
filterFavoriteColor.add(firstUser.favoriteColor[2]);
filterFavoriteColor.add(firstUser.favoriteColor[3]);
// replace hasil filter favorite color ke firstUser.favoriteColor
firstUser.favoriteColor = filterFavoriteColor;
// -----------------------------------------------------------

//------ filter nama restaurant (menghilangkan duplikat) ------------
let filterRestaurant = new Set();
filterRestaurant.add(firstUser.favoriteRestaurant[0]);
filterRestaurant.add(firstUser.favoriteRestaurant[1]);
filterRestaurant.add(firstUser.favoriteRestaurant[2]);
filterRestaurant.add(firstUser.favoriteRestaurant[3]);
filterRestaurant.add(firstUser.favoriteRestaurant[4]);
filterRestaurant.add(firstUser.favoriteRestaurant[5]);
filterRestaurant.add(firstUser.favoriteRestaurant[6]);
filterRestaurant.add(firstUser.favoriteRestaurant[7]);
filterRestaurant.add(firstUser.favoriteRestaurant[8]);
filterRestaurant.add(firstUser.favoriteRestaurant[9]);
filterRestaurant.add(firstUser.favoriteRestaurant[10]);
// replace hasil filter ke firstUser.favoriteRestaurant
firstUser.favoriteRestaurant = filterRestaurant;
// =-----------------------------------------------------------------------

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: ["Blue", "Black", "Grey"],
  isHavePet: false,
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: "2010",
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: "2013",
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: "2016",
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
      graduate: null,
    },
  ],
  favoriteRestaurant: [
    "Tempura",
    "Bento",
    "Sushi",
    "Pancake",
    "Padang",
    "Katsu",
    "Geprek",
    "Pancake",
    "Eggy",
  ],
};

//------------------ Filter favorite Color--------
const filterFavoriteColor2 = new Set();
filterFavoriteColor2.add(secondUser.favoriteColor[0]);
filterFavoriteColor2.add(secondUser.favoriteColor[1]);
filterFavoriteColor2.add(secondUser.favoriteColor[2]);
secondUser.favoriteColor = filterFavoriteColor2;
// -----------------------------------------------

// ---------------- Filter Restaurant Food----------
const filterRestaurant2 = new Set();
filterRestaurant2.add(secondUser.favoriteRestaurant[0]);
filterRestaurant2.add(secondUser.favoriteRestaurant[1]);
filterRestaurant2.add(secondUser.favoriteRestaurant[2]);
filterRestaurant2.add(secondUser.favoriteRestaurant[3]);
filterRestaurant2.add(secondUser.favoriteRestaurant[4]);
filterRestaurant2.add(secondUser.favoriteRestaurant[5]);
filterRestaurant2.add(secondUser.favoriteRestaurant[6]);
filterRestaurant2.add(secondUser.favoriteRestaurant[7]);
filterRestaurant2.add(secondUser.favoriteRestaurant[8]);
secondUser.favoriteRestaurant = filterRestaurant2;
// -------------------------------------------------

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
