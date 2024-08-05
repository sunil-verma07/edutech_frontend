export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';


// export const fetchCartItems = () => {
//     try {
//         return async (dispatch, getState) => {
//             const response = await fetch(`${baseUrl}/cart/getcartitems`, {
//                 method: 'get',
//                 headers: {
//                     'token': await fetchToken()
//                 },
//               });

//               if(!response.ok) {
//                 throw new Error('Something went wrong while deleting product!!');
//             }
    

//             const resData = await response.json();

//             console.log(resData)


        
//             dispatch({
//                 type: FETCH_CART_ITEMS,
//                 products: resData,
//             });
//         }
//     }
//     catch(err) {
//         throw err;
//     }
    
// }
