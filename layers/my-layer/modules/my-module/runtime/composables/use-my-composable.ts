export default function useMyComposable() {
    const nuxtApp = useNuxtApp();
    
    return {
        myComposable: "myComposable",
    };
}