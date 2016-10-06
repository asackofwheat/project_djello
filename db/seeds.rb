# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
List.destroy_all

puts 'creating users with board'
user1 = User.create(email: 'louisck@gmail.com', password: 'asdfasdf')
user2 = User.create(email: 'chrisrock@gmail.com', password: 'asdfasdf')
user3 = User.create(email: 'bobbylee@gmail.com', password: 'asdfasdf')
board1 = user1.boards.create(title: "The cool board")
user1.boards.create(title: "The cooler board")
board2 = user2.boards.create(title: "The lame board")
user2.boards.create(title: "The lamer board")
board3 = user3.boards.create(title: "The random board")
user3.boards.create(title: "The randomest board")

puts 'creating lists'
board1.lists.create(title: "list 1", description: "this is list 1")
board2.lists.create(title: "list 2", description: "this is list 2")
board3.lists.create(title: "list 3", description: "this is list 3")