/*
By default, Klaro will load the config from a global 'klaroConfig' variable. You
can change this by specifying the 'data-config' attribute on your script:
<script src="klaro.js" data-config="myConfigVariableName" /> You can also
disable auto-loading of the consent notice by adding 'data-no-auto-load=true' to
the script tag.
*/
var klaroConfig = {
    /*
    You can customize the ID of the DIV element that Klaro will create when starting
    up. By default, Klaro will use 'klaro'.
    */
    elementID: 'klaro',

    /*
    You can customize how Klaro persists consent information in the browser. Specify
    either cookie' (the default) or 'localStorage'.
    */
    storageMethod: 'cookie',

    /*
    You can customize the name of the cookie or localStorage entry that Klaro will
    use for storing the consent information. By default, Klaro will use 'klaro'.
    */
    storageName: 'klaro',

    /*
    If set to `true`, Klaro will render the texts given in the
    `consentModal.description` and `consentNotice.description` translations as HTML.
    This enables you to e.g. add custom links or interactive content.
    */
    htmlTexts: false,

    /*
    You can change the cookie domain for the consent manager itself. Use this if you
    want to get consent once for multiple matching domains. By default, Klaro will
    use the current domain. Only relevant if 'storageMethod' is set to 'cookie'.
    */
    /*cookieDomain: '.example.com',*/

    /*
    You can also set a custom expiration time for the Klaro cookie. By default, it
    will expire after 30 days. Only relevant if 'storageMethod' is set to 'cookie'.
    */
    cookieExpiresAfterDays: 30,

    /*
    You can specify a link to your privacy policy here (relative or absolute), which
    will then be shown in the notice and modal. You can also specify an object with
    language-specific links and an optional fallback using the 'default' key:
    privacyPolicy : {de: "/#datenschutz", en: "/#privacy", default: "/#privacy" },
    */
    privacyPolicy: '/privacy',

    /*
    Defines the default state for applications in the consent modal (true=enabled by
    default). You can override this setting in each app.
    */
    default: false,

    /*
    If 'mustConsent' is set to 'true', Klaro will directly display the consent
    manager modal and not allow the user to close it before having actively
    consented or declined the use of third-party applications.
    */
    mustConsent: false,

    /*
    Setting 'acceptAll' to 'true' will show an "accept all" button in the notice and
    modal, which will enable all third-party apps if the user clicks on it. If set
    to 'false', there will be an "accept" button that will only enable the apps that
    are enabled in the consent modal.
    */
    acceptAll: true,

    /*
    Setting 'hideDeclineAll' to 'true' will hide the "decline" button in the consent
    modal and force the user to open the modal in order to change his/her consent or
    disable all third-party apps. We strongly advise you to not use this feature, as
    it opposes the "privacy by default" and "privacy by design" principles of the
    GDPR (but might be acceptable in other legislations such as under the CCPA)
    */
    hideDeclineAll: false,

    /*
    Setting 'hideLearnMore' to 'true' will hide the "learn more / customize" link in
    the consent notice. We strongly advise against using this under most
    circumstances, as it keeps the user from customizing his/her consent choices.
    */
    hideLearnMore: false,

    /*
    You can overwrite existing translations and add translations for your app
    descriptions and purposes. See `src/translations/` for a full list of
    translations that can be overwritten:
    https://github.com/KIProtect/klaro/tree/master/src/translations
    */
    translations: {
        en: {
            consentModal: {
                description:
                    'Here you can see and customize the information that we collect about you. ',
            },
            googleAnalytics: {
                description: 'Collecting of visitor statistics',
            },
            hypothesis: {
                description: 'Note-taking functionality',
            },
            purposes: {
                analytics: {
                    title: 'Analytics'
                },
                functionality: {
                    title: 'Functionality'
                }
            },
        },
    },

    /*
    Here you specify the third-party apps that Klaro will manage for you.
    */
    apps: [

        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: ['googleAnalytics'],
            optOut: true,
            required: false,
        },
        
        {
            name: 'hypothesis',
            title: 'hypothesis',
            purposes: ['functionality'],
            cookies: ['hypothes.is'],
            default: true,
            optOut: true,
            required: false,
        },

    ],

    /*
    You can define an optional callback function that will be called each time the
    consent state for any given app changes. The consent value will be passed as the
    first parameter to the function (true=consented). The `app` config will be
    passed as the second parameter.
    */
    callback: function(consent, app) {

        /*
        You can define an optional callback function that will be called each time the
        consent state for any given app changes. The consent value will be passed as the
        first parameter to the function (true=consented). The `app` config will be
        passed as the second parameter.
        */
        console.log(
            'User consent for app ' + app.name + ': consent=' + consent
        );
    },

};