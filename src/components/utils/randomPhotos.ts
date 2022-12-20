import { InterfaceMarsResponse,Photo } from "../../interfaces/interfacesMarsResponse";


/**
 * Function to retrieve a new array with maximum 6 records
 *
 * @param {InterfaceMarsResponse} arrayPhoto
 * @return {*}  {Photo[]}
 */
const randomPhotos = (arrayPhoto:InterfaceMarsResponse|undefined, lengthArray: number):Photo[] | undefined=> {
    
    // Obtain length of array
    const totalLengthArray = arrayPhoto?.data.photos.length;
    
    // Obtain random number of records
    let randomNumber = Math.floor(Math.random() * totalLengthArray!);
    
    // Controled the limited array
    if (randomNumber > (totalLengthArray! - lengthArray)) {
        randomNumber = randomNumber - lengthArray

    }
    // Getting new Array 
    const newArrayPhotos:Photo[] | undefined = arrayPhoto?.data.photos.slice(randomNumber,randomNumber+lengthArray);
    return newArrayPhotos;
}

export default randomPhotos;