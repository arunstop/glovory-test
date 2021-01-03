export default {
    pageTitleWatcher: {
        $route: {
            immediate: true,
            handler(to, from) {
                // console.log(to)
                // handling undefined value of meta title that happens at the start of loading
                let pageTitle = () => {
                    if (to.meta.title != undefined) {
                        return to.meta.title + ' — ' + this.$globals.props.appName
                    }
                    else {
                        return from.meta.title + ' — ' + this.$globals.props.appName
                    }
                }
                document.title = pageTitle()
            }
        }
    }
}