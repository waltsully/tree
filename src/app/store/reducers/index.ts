import { Action } from '@ngrx/store';
import { IAppState, initialState } from '../IAppState';
import * as actions from '../actions';



// WSULLY 5/30/2018 
// Initial data seeding for the panel of 3 top-level components is handled at application level during app start-up

export function reducer(state: IAppState = initialState, action: actions.ALL): IAppState {
  console.log('reducer called');
  
  switch (action.type) {     
    case actions.APPLICATION_START: {
      console.log('STATE-->APPLICATION_START');  
      const newState = {...state};  
      newState.panelState = actions.APPLICATION_START;
      // to do: set new state
      return newState; // adapter.addAll(action.workorders, state);
    }  
    case actions.LOAD_QUEUES: {
      console.log('STATE-->LOAD_QUEUES');  
      const newState = {...state};      
      newState.panelState = actions.LOAD_QUEUES;
    return newState; 
  }
    case actions.LOAD_QUEUES_SUCCESS: {
      console.log('STATE-->LOAD_QUEUES_SUCCESS');  
      const newState = {...state};  
       // to do: set new state
      newState.panelState = actions.LOAD_QUEUES_SUCCESS;
      return newState; // adapter.addAll(action.workorders, state);
    }
  }
}
