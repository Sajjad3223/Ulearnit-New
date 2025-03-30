import type {AddToCartViewModel} from "~/models/cart/addToCartViewModel";
import {AddToCart} from "~/services/cart.service";


export const useCartStore = defineStore("cart", () => {

    const toast = useToast();
    const authStore = useAuthStore();
    const addToCart = async (item:AddToCartViewModel): Promise<boolean> => {
        let addResult = false;
        if (authStore.isLoggedIn) {
            //If user is logged in request to server for add to Cart
            const result = await AddToCart(item);
            if (result.isSuccess) {
                addResult = true;
            } else {
                toast.showToast('در افزودن محصول به سبد خرید مشکلی پیش آمد', ToastType.error, 0);
            }
        }
        return addResult;
    }

    return {
        addToCart
    };
})