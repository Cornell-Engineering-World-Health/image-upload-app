import { createContext } from 'react';
export const initialState = {
  email: '',
  task: '',
  id: '',
};

export const reducer = (_, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        email: action.payload.email,
        task: action.payload.task,
        id: action.payload.id,
      };
  }
};

export const UserContext = createContext(initialState);
