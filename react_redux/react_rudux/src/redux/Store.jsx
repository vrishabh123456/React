import { store } from "./index";
import { CakeReducer} from "./Cake/CakeReducer"

const store = createstore(CakeReducer)

export default store