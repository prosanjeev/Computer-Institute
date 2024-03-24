// franchiseActions.js
import { doc, updateDoc } from 'firebase/firestore';
import { fireDB } from "../../firebase/FirebaseConfig";

export const updateWallet = async (franchiseId, newWalletAmount) => {
  try {
    const franchiseDocRef = doc(fireDB, 'franchiseData', franchiseId);
    await updateDoc(franchiseDocRef, { wallet: newWalletAmount });
  } catch (error) {
    console.error('Error updating wallet:', error);
  }
};

export const updateRequestAmount = async (franchiseId, newRequestAmount) => {
  try {
    const franchiseDocRef = doc(fireDB, 'franchiseData', franchiseId);
    await updateDoc(franchiseDocRef, { requestAmount: newRequestAmount });
  } catch (error) {
    console.error('Error updating request amount:', error);
  }
};
