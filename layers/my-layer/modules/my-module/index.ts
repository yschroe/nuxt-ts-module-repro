import {
    addRouteMiddleware,
    createResolver,
    defineNuxtModule,
} from "nuxt/kit";

export default defineNuxtModule({
    meta: {
        name: "my-module",
        configKey: "myModule",
    },
    setup() {
        const resolver = createResolver(import.meta.url);

        // Add route middleware
        addRouteMiddleware({
            name: "my-middleware",
            path: resolver.resolve("runtime/middleware/my-middleware"),
            global: true,
        });
    },
});
