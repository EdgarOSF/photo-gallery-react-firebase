import { projectFirestore } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';

const useFirestore = (coleccion) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const cole = collection(projectFirestore, coleccion);
    const querySnapshot = query(cole, orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(querySnapshot, (snapshot) => {
      const documents = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [coleccion]);

  return { docs };
};

export default useFirestore;
