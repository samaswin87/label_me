# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email:'aswin@company.com', password: 'aswin123', password_confirmation: 'aswin123',confirmed_at: '2019-08-04 04:51:43', current_sign_in_ip: "127.0.0.1", last_sign_in_ip: "127.0.0.1")
