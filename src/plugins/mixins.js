export default {
    pageTitleWatcher: {
        $route: {
            immediate: true,
            handler(to,from) {
                // console.log(to)
                from = ''
                document.title = to.meta.title + ' — '+this.$globals.props.appName + from
            }
        }
    }
}