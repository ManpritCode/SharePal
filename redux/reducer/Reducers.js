import { pickdata } from "../actiontype";
const initialState ={
    cityname:"Ludhiana",
    disscripstion:"SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Ludhiana.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures."
}

export const Reducers = (state=initialState,action)=>{
     switch(action.type){
        case pickdata:{


            state = action.payload
            return state;
        }
        
        default:return state;
    
     }
      
}