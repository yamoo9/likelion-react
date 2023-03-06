import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  orderBy,
  serverTimestamp,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '@/firebase/firestore';

const COLLECTION_KEY = 'todolist';

export const writeBatchTodoList = async (dataList) => {
  const todoListCollectionRef = collection(db, COLLECTION_KEY);

  const batch = writeBatch(db);

  dataList.forEach((data) => {
    const documentRef = doc(todoListCollectionRef);

    batch.set(documentRef, { ...data, createAt: serverTimestamp() });
  });

  await batch.commit();
};

export const getTodoAllItems = async () => {
  const todoListCollectionRef = collection(db, COLLECTION_KEY);
  const q = query(todoListCollectionRef, orderBy('createAt', 'desc'));
  const todoListSnapshots = await getDocs(q);
  return todoListSnapshots.docs.map((todoItemDoc) => ({
    id: todoItemDoc.id,
    data: todoItemDoc.data(),
  }));
};

export const getTodoAllIds = async () => {
  const todoListItems = await getTodoAllItems();
  return todoListItems.map(({ id }) => id);
};

export const getTodoItem = async (id) => {
  const todoItemDocumentRef = doc(db, `${COLLECTION_KEY}/${id}`);
  const todoDocumentSnapshot = await getDoc(todoItemDocumentRef);
  return todoDocumentSnapshot.data() ?? null;
};

export const addTodoItem = async (todoItem) => {
  const todoListCollectionRef = collection(db, COLLECTION_KEY);
  return await addDoc(todoListCollectionRef, {
    ...todoItem,
    createAt: serverTimestamp(),
  });
};

export const updateTodoItem = async (updateId, willUpdateTodoItem) => {
  const todoItemDocumentRef = doc(db, `${COLLECTION_KEY}/${updateId}`);
  await updateDoc(todoItemDocumentRef, willUpdateTodoItem);
};

export const deleteTodoItem = async (deleteId) => {
  const todoItemDocumentRef = doc(db, `${COLLECTION_KEY}/${deleteId}`);
  return await deleteDoc(todoItemDocumentRef);
};

export const onChangeTodoList = async (callback) => {
  const todoListCollectionRef = collection(db, COLLECTION_KEY);
  const q = query(todoListCollectionRef, orderBy('createAt', 'desc'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    callback(data, unsubscribe);
  });
};
