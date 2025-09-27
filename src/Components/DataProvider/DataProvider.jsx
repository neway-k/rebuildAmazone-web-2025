import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../../Utility/reducer";
import { auth, db } from "../../Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
// Create the context

export const DataContext = createContext();

// Provider component

export const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, update the user in state
        try {
          // Create or update user document in Firestore
          await setDoc(
            doc(db, "users", user.uid),
            {
              email: user.email,
              displayName: user.displayName || "",
              createdAt: new Date(),
            },
            { merge: true }
          );
        } catch (error) {
          console.error("Error creating/updating user document:", error);
        }
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out, clear the user in state
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
