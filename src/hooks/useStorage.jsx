import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage, timeStamp } from '../firebase/config';
import { collection, addDoc  } from 'firebase/firestore';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snap) => {
        let porcentage = Math.round(
          (snap.bytesTransferred / snap.totalBytes) * 100
        );
        setProgress(porcentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        // console.log(timeStamp);
        const time = timeStamp;
        // console.log(time);
        addDoc(collection(projectFirestore, "images"), {url, 'createdAt': time });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
