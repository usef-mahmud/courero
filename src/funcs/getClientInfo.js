export const getClientInfo = () => {
    return {
        userAgent: navigator.userAgent,
        browserName: navigator.appCodeName,
        browserEngine: navigator.product,
        browserLanguage: navigator.language,
        browserOnline: navigator.onLine,
        browserPlatform: navigator.platform,
        previousSites: window.history.length,
        timezone:(new Date()).getTimezoneOffset()/60,
        
    }
}
