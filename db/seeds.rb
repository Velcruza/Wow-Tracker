
user = User.create(username: "test", bio: "hey it me", password: "test", password_confirmation: "test")

char = Character.create(name: "Velcruza", realm: "Illidan", bio: "hey it me again")
char1 = Character.create(name: "Felcruza", realm: "Illidan", bio: "hey it me again1")
char2 = Character.create(name: "Velrush", realm: "Illidan", bio: "hey it me again2")

test = UserCharacter.create(user_id: user.id, character_id: char.id)
test1 = UserCharacter.create(user_id: user.id, character_id: char1.id)
test2 = UserCharacter.create(user_id: user.id, character_id: char2.id)

mists = Dungeon.create(name: "Mists of Tirna Scithe")
top = Dungeon.create(name: "Theater of Pain")
pf = Dungeon.create(name: "Plaguefall")
nw = Dungeon.create(name: "The Necrotic Wake")
dos = Dungeon.create(name: "De Other Side")
soa = Dungeon.create(name: "Spires of Ascension")
sd = Dungeon.create(name: "Sanguine Depths")
hoa = Dungeon.create(name: "Halls of Atonement")