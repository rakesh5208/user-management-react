import userReducer from './user-reducer'
import {createStore} from 'redux'

const initialDatas:any = [{
    name: "Andrew Amernante",
    id: '1',
    description: "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage"
},
{
    name: "Frank Wang",
    id: '2',
    description: "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp."
},
{
    name: "Sissi Chen",
    id: '3',
    description: "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems."
},
{
    name: "Diego Garcia",
    id: '4',
    description: "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad."
}
,{
    name: "Fuad Rashid",
    id: '5',
    description: "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage"
}

]
const store = createStore(userReducer,initialDatas);

export default store;
