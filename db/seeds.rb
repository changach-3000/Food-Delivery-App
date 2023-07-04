# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create(
  username: "Gerald Obede",
  email: "adudagerald@gmail.com",
  profile_picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qz_6_xtigETpBhXMP76jlgHaH5%26pid%3DApi%26h%3D160&f=1&ipt=f52243c8c6715363458cf7649a49414ae46ea2a23699ee1c26f822acb334a544&ipo=images",
  password: "barackobama2008"
)

food1 = Food.create(
  name: "Pilau",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hJMKTkT0kPBEhNF-4QPEnAHaE8%26pid%3DApi%26h%3D160&f=1&ipt=321ea228f52d07301dbf6802c368f1be68739a3e2cec439925ededcfcb8cadc7&ipo=images",
  price: 2500,
  restaurant_name: "Waterloo"
)

food2 = Food.create(
  name: "Steamed rice",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hJMKTkT0kPBEhNF-4QPEnAHaE8%26pid%3DApi%26h%3D160&f=1&ipt=321ea228f52d07301dbf6802c368f1be68739a3e2cec439925ededcfcb8cadc7&ipo=images",
  price: 2500,
  restaurant_name: "Ontario"
)

review1 = Review.create(
  comment: "It's so good",
  user_id: user1.id,  # Assign the user_id here
  food_id: food1.id  # Assign the food_id here
)
