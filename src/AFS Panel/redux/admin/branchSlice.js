// branchSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { collection, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import {fireDB} from '../../firebase/FirebaseConfig';

const initialState = {
  branches: [],
};

export const branchSlice = createSlice({
  name: 'branch',
  initialState,
  reducers: {
    setBranches: (state, action) => {
      state.branches = action.payload;
    },
    addBranch: (state, action) => {
      state.branches.push(action.payload);
    },
    updateBranch: (state, action) => {
      const index = state.branches.findIndex(branch => branch.id === action.payload.id);
      if (index !== -1) {
        state.branches[index] = action.payload;
      }
    },
    deleteBranch: (state, action) => {
      state.branches = state.branches.filter(branch => branch.id !== action.payload);
    },
  },
});

export const { setBranches, addBranch, updateBranch, deleteBranch } = branchSlice.actions;

export const selectBranches = state => state.branch.branches;

export const fetchBranches = () => async dispatch => {
  try {
    const branchCollection = collection(fireDB, 'franchiseData');
    const querySnapshot = await getDocs(branchCollection);
    const branches = [];
    querySnapshot.forEach(doc => {
      branches.push({ id: doc.id, ...doc.data() });
    });
    dispatch(setBranches(branches));
  } catch (error) {
    console.error('Error fetching branches: ', error);
  }
};

export const fetchLatestBranches = () => async (dispatch) => {
  try {
    const branchCollection = collection(fireDB, 'franchiseData');
    const querySnapshot = await getDocs(branchCollection);
    const branches = [];
    querySnapshot.forEach((doc) => {
      branches.push({ id: doc.id, ...doc.data() });
    });
    const latestBranches = branches.slice(0, 10); // Get the latest 10 entries
    dispatch(setBranches(latestBranches));
  } catch (error) {
    console.error('Error fetching latest branches: ', error);
  }
};


export const addNewBranch = (branchData) => async dispatch => {
  try {
    const docRef = await addDoc(collection(fireDB, 'franchiseData'), branchData);
    dispatch(addBranch({ id: docRef.id, ...branchData }));
  } catch (error) {
    console.error('Error adding branch: ', error);
  }
};

export const updateExistingBranch = (branchData) => async dispatch => {
  try {
    await updateDoc(collection(fireDB, 'franchiseData', branchData.id), branchData);
    dispatch(updateBranch(branchData));
  } catch (error) {
    console.error('Error updating branch: ', error);
  }
};

export const deleteExistingBranch = (branchId) => async dispatch => {
  try {
    await deleteDoc(collection(fireDB, 'franchiseData', branchId));
    dispatch(deleteBranch(branchId));
  } catch (error) {
    console.error('Error deleting branch: ', error);
  }
};

export default branchSlice.reducer;
