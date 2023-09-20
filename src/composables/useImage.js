import { ref as storageRef } from 'firebase/storage'
import { useFirebaseStorage, useStorageFile } from 'vuefire'

export default function useImage() {

    const storage = useFirebaseStorage()
    const storageRefPath = storageRef(storage, '/propiedades/imagen.jpg')
    
    return {

    }
}