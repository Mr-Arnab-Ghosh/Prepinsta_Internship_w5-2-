const mongoose = require('mongoose');

const studentAca = require('./db/dataAcaModel');
const studentCoCurri = require('./db/dataCoCurriModel');
require('./db/conn');

// const createAcaDocument = async ()=>{   // CREATE Operation
//     try {
//         const allAcaData = await studentAca.create([
//             {
//                 name: 'Ram',
//                 class: '10th',
//                 Math: 90,
//                 English: 60,
//                 Science: 70
//             },
//             {
//                 name: 'Duryodhon',
//                 class: '9th',
//                 Math: 90,
//                 English: 90,
//                 Science: 90
//             },
//             {
//                 name: 'Laxman',
//                 class: '11th',
//                 Math: 90,
//                 English: 80,
//                 Science: 85
//             },
//             {
//                 name: 'Sita',
//                 class: '10th',
//                 Math: 90,
//                 English: 50,
//                 Science: 90
//             }
//         ])
//     } catch(err) {
//         console.log(err);
//     }
// }

// createAcaDocument();



// const getAcaDocuments = async () => {   // READ Operation
//     try {
//         const allAcaData = await studentAca.find();
//         console.log('StudentAcademicData:',allAcaData);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getAcaDocuments();



// const updateMathScore = async ()=> {   // UPDATE Operation       // there are multiple methods too like "updateOne()" method with "{$set:{field:value}}" operator
//     try {                                                             // also methods like "updateMany()" to update multiple fields simultaneously also "{$inc:{field:amount}}" like operator to increase field value
//         await studentAca.findOneAndUpdate({name: 'Ram'}, {Math: 75});     // also we've methods like "insertOne()" , "insertMany()"
//         console.log('StudentAcademicDataUpdate:',await studentAca.find({name: 'Ram'}));    // see documentation for more methods, operators and their use cases
//     } catch(error) {
//         console.log(error);
//     }
// }

// updateMathScore();



// const deleteAcaData = async ()=> {   // DELETE Operation         // there are multiple methods to perform the DELETE operation in MongoDB
//     try {                                                            // we've another method "deleteMany()" to delete multiple fields simultaneously
//         await studentAca.deleteOne({name: 'Duryodhon'});
//         console.log('StudentAcademicDataAfterDelete:',await studentAca.find());
//     } catch(error) {
//         console.log(error);
//     }
// }

// deleteAcaData();



// const createCoCurriDocument = async ()=> {   // CREATE Operation
//     try {
//         const allCoCurriData = await studentCoCurri.create([
//             {
//                 name: 'Ram',
//                 class: '10th',
//                 activity: 'Social Program',
//                 details: 'Anchor of that cultural program'
//             },
//             {
//                 name: 'Duryodhon',
//                 class: '9th',
//                 activity: 'Cricket Tournament',
//                 details: 'Played final and also took 3 wickets in 3 overs'
//             },
//             {
//                 name: 'Laxman',
//                 class: '11th',
//                 activity: 'Chess Club',
//                 details: 'Management role to organize this tournament'
//             },
//             {
//                 name: 'Sita',
//                 class: '10th',
//                 activity: 'Technical Fest',
//                 details: 'Winner of Robo Soccer event'
//             }
//         ])
//     } catch(error) {
//         console.log(error);
//     }
// }

// createCoCurriDocument();



// const newCoCurriDocument = studentCoCurri({    // CREATE Operation
//     name: 'Shyam',
//     class: '9th',
//     activity: 'Yoga Competition',
//     details: 'Participate on this competition'
// })

// newCoCurriDocument.save();
// console.log("New Student Co-curricular Data:");


// const getCoCurriDocuments = async () => {   // READ Operation
//     try {
//         const allCoCurriData = await studentCoCurri.find();
//         console.log('StudentCoCurricularData:',allCoCurriData);
//     } catch(error) {
//         console.log(error);
//     }
// }

// getCoCurriDocuments();



// const updateActivity = async () => {    // UPDATE Operation
//     try {
//         await studentCoCurri.updateOne({name: 'Ram'}, {$set:{activity: 'Drama Club'}});
//         console.log('StudentCoCurricularDataUpdate:',await studentCoCurri.find({name: 'Ram'}));
//     } catch(error) {
//         console.log(error);
//     }
// }

// updateActivity();



const deleteCoCurriData = async () => {    // DELETE Operation
    try {
        await studentCoCurri.deleteMany({class: '9th'});
        console.log('StudentCoCurricularDataAfterDelete:',await studentCoCurri.find());
    } catch (error) {
        console.log(error);
    }
}

deleteCoCurriData();