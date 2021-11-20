const mongoose = require('mongoose');
const F1Team = require('./models/f1teams');


mongoose.connect('mongodb://localhost:27017/f1team', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB CONNECTION OPEN via Mongoose...")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



// const team = new F1Team({
//     name: 'Alfa Romeo Racing Orlen',
//     sponsor: 'Alfa Romeo',
//     chassis: 'C41',
//     ranking: 9,
//     engine: 'Ferrari 065/6',
//     tires: 'Pirelli',
//     principal: 'Frédéric Vasseur',
//     driver1: { name: 'Kimi Räikkönen', num: '7', points: 10 },
//     driver2: { name: 'Antonio Giovinazzi', num: '99', points: 1 },
//     category: 'back-marker'
// })
// team.save()
//     .then(team => {
//         console.log(team)
//     })
//     .catch(e => {
//         console.log(e)
//     })





// const seedF1Teams = [
//     {
//         name: 'Scuderia AlphaTauri Honda',
//         sponsor: 'Alpha Tauri Fashions',
//         chassis: 'AT02',
//         ranking: 7,
//         engine: 'Honda RA621H',
//         tires: 'Pirelli',
//         principal: 'Helmut Marko',
//         driver1: { name: 'Pierre Gasly', num: '10', points: 92 },
//         driver2: { name: 'Yuki Tsunoda', num: '22', points: 20 },
//         category: 'mid-field'
//     },
//     {
//         name: 'Alpine F1 Team',
//         sponsor: 'Alpine-Renault',
//         chassis: 'A521',
//         ranking: 6,
//         engine: 'Renault E-Tech 20B',
//         tires: 'Pirelli',
//         principal: 'Mike Gascoyne',
//         driver1: { name: 'Fernando Alonso', num: '14', points: 62 },
//         driver2: { name: 'Esteban Ocon', num: '31', points: 50 },
//         category: 'mid-field'
//     },
//     {
//         name: 'Aston Martin Cognizant F1 Team',
//         sponsor: 'Aston Martin',
//         chassis: 'AMR21',
//         ranking: 5,
//         engine: 'Mercedes-AMG F1',
//         tires: 'Pirelli',
//         principal: 'Otmar Szafnauer',
//         driver1: { name: 'Sebastian Vettel', num: '5', points: 42 },
//         driver2: { name: 'Lance Stroll', num: '18', points: 26 },
//         category: 'mid-field'
//     },
//     {
//         name: 'Scuderia Ferrari Mission Winnow',
//         sponsor: 'Ferrari',
//         chassis: 'SF21',
//         ranking: 3,
//         engine: 'Ferrari 065/6',
//         tires: 'Pirelli',
//         principal: 'Mattia Binotto',
//         driver1: { name: 'Charles Leclerc', num: '16', points: 148 },
//         driver2: { name: 'Carlos Sainz Jr.', num: '55', points: 139 },
//         category: 'top-team'
//     },
//     {
//         name: 'Uralkali Haas F1 Team',
//         sponsor: 'Haas',
//         chassis: 'VF-21',
//         ranking: 8,
//         engine: 'Ferrari 065/6',
//         tires: 'Pirelli',
//         principal: 'Gene Haas',
//         driver1: { name: 'Nikita Mazepin', num: '9', points: 0 },
//         driver2: { name: 'Mick Schumacher', num: '47', points: 0 },
//         category: 'back-marker'
//     },
//     {
//         name: 'McLaren F1 Team',
//         sponsor: 'McLaren',
//         chassis: 'MCL35M',
//         ranking: 4,
//         engine: 'Mercedes-AMG F1',
//         tires: 'Pirelli',
//         principal: 'Zak Brown',
//         driver1: { name: 'Daniel Ricciardo', num: '3', points: 105 },
//         driver2: { name: 'Lando Norris', num: '4', points: 151 },
//         category: 'top-team'
//     },
//     {
//         name: 'Mercedes-AMG Petronas F1 Team',
//         sponsor: 'Mercedes Petronas',
//         chassis: 'F1 W12',
//         ranking: 1,
//         engine: 'Mercedes-AMG F1',
//         tires: 'Pirelli',
//         principal: 'Toto Wolff',
//         driver1: { name: 'Lewis Hamilton', num: '44', points: 318 },
//         driver2: { name: 'Valtteri Bottas', num: '77', points: 203 },
//         category: 'top-team'
//     },
//     {
//         name: 'Red Bull Racing Honda',
//         sponsor: 'Red Bull',
//         chassis: 'RB16B',
//         ranking: 2,
//         engine: 'Honda RA621H',
//         tires: 'Pirelli',
//         principal: 'Christian Horner',
//         driver1: { name: 'Sergio Pérez', num: '11', points: 178 },
//         driver2: { name: 'Max Verstappen', num: '33', points: 332 },
//         category: 'top-team'
//     },
//     {
//         name: 'Williams Racing',
//         sponsor: 'Sofina',
//         chassis: 'FW43B',
//         ranking: 10,
//         engine: 'Mercedes-AMG F1',
//         tires: 'Pirelli',
//         principal: 'Jost Capito',
//         driver1: { name: 'Nicholas Latifi', num: '6', points: 7 },
//         driver2: { name: 'George Russell', num: '63', points: 16 },
//         category: 'back-marker'
//     }
// ]




// F1Team.insertMany(seedF1Teams)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })