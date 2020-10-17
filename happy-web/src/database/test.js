const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6455874",
    name: "Lar das Meninas",
    about: "Presta assistência a criança de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "983067080",
    images: [
      "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horários de visitas das 8h às 18h.",
    open_on_weekends: "1"
  })

  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  console.log(orphanage)

  // console.log(await db.run("DELETE FROM orphanages Where id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages Where id = '5'"))
})