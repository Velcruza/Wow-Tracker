
user = User.create(username: "test", bio: "hey it me", password: "test", password_confirmation: "test")

char = Character.create(name: "Velcruza", realm: "Illidan", bio: "hey it me again")
char1 = Character.create(name: "Felcruza", realm: "Illidan", bio: "hey it me again1")
char2 = Character.create(name: "Velrush", realm: "Illidan", bio: "hey it me again2")

test = UserCharacter.create(user_id: user.id, character_id: char.id)
test1 = UserCharacter.create(user_id: user.id, character_id: char1.id)
test2 = UserCharacter.create(user_id: user.id, character_id: char2.id)

message1 = Message.create(user_id: user.id, text: "Hey everyone! I'm new here.")