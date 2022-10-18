const { green, red } = require('chalk')
const { db, Student, Campus } = require('./server/db')

const seed = async () => {
  try {
    await db.sync({ force: true })

    //Campuses
    const marsUni = await Campus.create({
      name: 'Mars University',
      imageUrl: 'http://frank.geekheim.de/old/archives/knowledge_brings_fear.gif',
      address: '1234 South Crater Ave. Planet Mars, PM 30001',
      description: 'This campus is out of this world. Come enjoy red deserts, blistering heat, and a whole lot of nothing; now with more life! This campus will teach all things you need to know to work for a prestigious delivery company.'
    });
    const planetEx = await Campus.create({
      name: 'Planet Express Community College',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d6bd22-6dbf-48ad-9c49-0f791aac6ebd/dj10a4-48746d08-4aa8-4aa7-82fc-7ff2a0d6e813.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ZDZiZDIyLTZkYmYtNDhhZC05YzQ5LTBmNzkxYWFjNmViZFwvZGoxMGE0LTQ4NzQ2ZDA4LTRhYTgtNGFhNy04MmZjLTdmZjJhMGQ2ZTgxMy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mjOSgFnvnvASvDzim6NNMsxZraYrNeerBQoYvV9xorg',
      address: '3000 Planet Dr. New New York, NY 10001',
      description: 'Come join our very affordable college and learn the best way to deliver packages. This is not just a money scam. We swear!'
    });

    //Students
    const leela = await Student.create({
      firstName: 'Turanga',
      lastName: 'Leela',
      email: 'boot_kicks@yahoo.com',
      imageUrl: 'https://cdn.costumewall.com/wp-content/uploads/2018/10/leela.jpg',
      gpa: 3.8,
      campusId: planetEx.id
    });
    const fry = await Student.create({
      firstName: 'Philip',
      lastName: 'Fry',
      email: 'oldestkidhere@aol.com',
      imageUrl: 'https://a4-images.myspacecdn.com/images03/2/30c59030478d4021a7b6426ff9043a36/600x600.jpg',
      gpa: 2.3,
      campusId: marsUni.id
    });
    const amy = await Student.create({
      firstName: 'Amy',
      lastName: 'Wong',
      email: 'mars.heiress@gmail.com',
      imageUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/d/d5/AmyWong.jpg',
      gpa: 3.9,
      campusId: marsUni.id
    });
    const bender = await Student.create({
      firstName: 'Bender',
      lastName: 'Rodriguez',
      email: 'lets_go_already@gmail.com',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/HOWiq29vUhGGTVTcjNqMA7refT4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23249598/mgid_arc_imageassetref_comedycentral.jpeg',
      gpa: 2.5,
      campusId: planetEx.id
    });
    const zapp = await Student.create({
      firstName: 'Zapp',
      lastName: 'Brannigan',
      email: 'iadorevelour@hotmail.com',
      imageUrl: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/futurama/6/66/Zapp.jpg',
      gpa: 1.0,
      campusId: planetEx.id
    });
    
  } catch (err) {
    console.log(red(err))
  }
}

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed()
    console.log(green('Seeding success!'))
  } catch (err) {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
  } finally {
    db.close()
  }
}

if (require.main === module) {
  runSeed()
}
