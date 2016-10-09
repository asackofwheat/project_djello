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
Card.destroy_all

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
list1 = board1.lists.create(title: "cool list", description: "this is a list")
list2 = board2.lists.create(title: "lame list", description: "this is a list")
list3 = board3.lists.create(title: "random list", description: "this is a list")

puts 'creating cards'
card1 = list1.cards.create(title: "cool task", description: "this is a task to do")
card1.users << user1
card2 = list1.cards.create(title: "cooler task", description: "this is a task to do")
card2.users << user1
card3 = list2.cards.create(title: "lame task", description: "this is a task to do")
card3.users << user2
card4 = list2.cards.create(title: "lamer task", description: "this is a task to do")
card4.users << user2
card5 = list3.cards.create(title: "random task", description: "this is a task to do")
card5.users << user3
card6 = list3.cards.create(title: "randomest task", description: "this is a task to do")
card6.users << user3