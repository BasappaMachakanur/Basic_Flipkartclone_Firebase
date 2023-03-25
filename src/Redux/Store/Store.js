import { legacy_createStore as createStore } from "redux"
import rootreducer from "../Reducer/Reducer"



let Store = createStore(rootreducer);



export default Store;