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
  limit,
} from 'firebase/firestore';
import { db } from '@/firebase/firestore';

// 콜렉션 키 (Firestore 구조 이해)
const COLLECTION_KEY = 'todolist';

/**
 * 데이터 일괄 쓰기 유틸리티 함수
 * @param {any[]} dataList 데이터 리스트
 */
export const writeBatchTodoList = async (dataList) => {
  // Firestore 인스턴스로부터 콜렉션 참조
  const todoListCollectionRef = collection(db, COLLECTION_KEY);

  // 일괄 쓰기 생성 (최대 쓰기 수: 500)
  // 참고: https://firebase.google.com/docs/reference/js/firestore_.md?hl=ko#writebatch
  const batch = writeBatch(db);

  // 업로드 할 데이터 리스트 순환
  dataList.forEach((data) => {
    // 콜렉션 참조로부터 도큐멘트 참조 (Firestore 구조 이해)
    const documentRef = doc(todoListCollectionRef);

    // 도큐멘트 참조에 데이터 쓰기합니다. 도큐멘트가 없을 경우 생성됩니다.
    batch.set(documentRef, { ...data, createAt: serverTimestamp() });
  });

  // 일괄 쓰기를 원자 단위로 커밋
  // 참고: https://firebase.google.com/docs/reference/js/firestore_.writebatch.md?hl=ko#writebatchcommit
  await batch.commit();
};

/**
 * 모든 데이터 가져오기 유틸리티 함수
 * @returns Promise<any[]>
 */
export const getTodoAllItems = async () => {
  // Firestore 인스턴스로부터 콜렉션 참조
  const todoListCollectionRef = collection(db, COLLECTION_KEY);
  // 데이터 정렬하기
  // 참고: https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=ko#order_and_limit_data
  const q = query(todoListCollectionRef, orderBy('createAt', 'desc'));

  // 콜렉션에서 여러 문서 가져오기
  // 참고: https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko#get_multiple_documents_from_a_collection
  const todoListSnapshots = await getDocs(q);

  // 응답받은 데이터 스냅샷 순환 후 { id, data } 집합 반환
  return todoListSnapshots.docs.map((todoItemDoc) => ({
    id: todoItemDoc.id,
    data: todoItemDoc.data(),
  }));
};

/**
 * 모든 데이터 ID만 가져오는 유틸리티 함수
 * @returns Promise<any[]>
 */
export const getTodoAllIds = async () => {
  const todoListItems = await getTodoAllItems();
  return todoListItems.map(({ id }) => id);
};

/**
 * 고유 식별자로 Todo 아이템 가져오는 유틸리티 함수
 * @param {string} id 고유 식별자
 * @returns Promise<any>
 */
export const getTodoItem = async (id) => {
  // 문서 가져오기
  // 참고: https://firebase.google.com/docs/firestore/query-data/get-data?hl=ko#get_a_document
  const todoItemDocumentRef = doc(db, `${COLLECTION_KEY}/${id}`);
  const todoDocumentSnapshot = await getDoc(todoItemDocumentRef);
  return todoDocumentSnapshot.data() ?? null;
};

/**
 * Todo 아이템 추가하는 유틸리티 함수
 * @param {any} todoItem Todo 아이템 (객체)
 * @returns Promise<any>
 */
export const addTodoItem = async (todoItem) => {
  const todoListCollectionRef = collection(db, COLLECTION_KEY);
  // 데이터 추가
  // 참고: https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko
  return await addDoc(todoListCollectionRef, {
    ...todoItem,
    createAt: serverTimestamp(),
  });
};

/**
 * Todo 아이템 수정하는 유틸리티 함수
 * @param {string} updateId Todo 아이템 ID
 * @param {any} willUpdateTodoItem 수정할 Todo 아이템 (객체)
 * @returns Promise<any>
 */
export const updateTodoItem = async (updateId, willUpdateTodoItem) => {
  const todoItemDocumentRef = doc(db, `${COLLECTION_KEY}/${updateId}`);
  // 데이터 수정
  // 참고: https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko#update-data
  await updateDoc(todoItemDocumentRef, willUpdateTodoItem);
};

/**
 * Todo 아이템 삭제하는 유틸리티 함수
 * @param {any} deleteId Todo 아이템 ID
 * @returns Promise<any>
 */
export const deleteTodoItem = async (deleteId) => {
  const todoItemDocumentRef = doc(db, `${COLLECTION_KEY}/${deleteId}`);
  // 데이터 삭제
  // 참고: https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=ko
  return await deleteDoc(todoItemDocumentRef);
};

/**
 * 실시간 업데이트 가져오는 유틸리티 함수
 * @param {(data, ) => void} callback 콜백 함수
 */
export const onChangeTodoList = (callback) => {
  const todoListCollectionRef = collection(db, COLLECTION_KEY);
  const q = query(todoListCollectionRef, orderBy('createAt', 'asc'), limit(20));

  // 실시간 업데이트 가져오기
  // 참고: https://firebase.google.com/docs/firestore/query-data/listen?hl=ko
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    callback(data);
  });

  return unsubscribe;
};
