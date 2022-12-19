import { InterfaceMarsResponse,Photo } from "../../interfaces/interfacesMarsResponse";


/**
 * Function to retrieve a new array with maximum 6 records
 *
 * @param {InterfaceMarsResponse} arrayPhoto
 * @return {*}  {Photo[]}
 */
const randomPhotos = (arrayPhoto:InterfaceMarsResponse, lengthArray: number):Photo[] => {
    
    // Obtain length of array
    const totalLengthArray = arrayPhoto.photos.length;
    
    // Obtain random number of records
    let randomNumber = Math.floor(Math.random() * totalLengthArray);
    
    // Controled the limited array
    if (randomNumber > (totalLengthArray - lengthArray)) {
        randomNumber = randomNumber - lengthArray
        console.log('randomNumber2: ',randomNumber);

    }
    // Getting new Array 
    const newArrayPhotos:Photo[] = arrayPhoto.photos.slice(randomNumber,randomNumber+lengthArray);

    console.log('newArrayPhotos: ', newArrayPhotos);
    console.log('lengthArray: ', lengthArray);
    return newArrayPhotos;
}

export default randomPhotos;