function xpathConverter() {
    const xp = process.env.npm_config_xp

    if (!xp) {
        console.log('Please enter the XPath string as follows --xp=[YOUR XPATH STRING]')
        return
    }

    if (xp.slice(0, 2) === '//') {
        console.log('Only selections from root node are supported (// is not allowed at beginning)')
        return
    }

    if (xp.slice(0, 1) !== '/') {
        console.log("XPath needs to start with '/'")
        return
    }

    const pathSteps = xp.split('/')
    pathSteps.shift()
    const parsedPath = pathSteps.reduce((currentString, currentValue, index) => {
        if (index === 0) return `${currentValue}`
        return `${currentString}.${currentValue}`
    }, '')
    console.log(parsedPath)
}
xpathConverter()
