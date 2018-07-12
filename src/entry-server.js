import {
    createApp
} from './app';

export default context => {
    return new Promise((resolve, reject) => {
        let {
            app,
            router
        } = createApp();
        let {
            fullPath
        } = router.resolve(context.url).route;

        if (fullPath != context.url) {
            return reject({
                url: fullPath
            });
        }
        router.push(context.url);
        router.onReady(() => {
            let matchedComponents = router.getMatchedComponents();
            if (!matchedComponents.length) {
                return reject({
                    code: 404
                })
            }
            resolve(app);
        }, reject);
    });
}
let name = "niki";

function getName() {}