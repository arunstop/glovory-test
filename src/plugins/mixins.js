export default {
    pageTitleWatcher: {
        $route: {
            immediate: true,
            handler(to) {
                // console.log(to)
                // console.log(from)
                document.title = to.meta.title + ' - '+this.$globals.props.appName
            }
        }
    }
}