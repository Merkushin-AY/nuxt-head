const getHead = (params = {}, site = false) => {
    const {
        color,
        title,
        description,
        keywords,
        lang,
        locale,
        viewport,
        siteName,
        type,
        url,
        image,
        script = [],
        link = [],
    } = params;


    const head = {
        htmlAttrs: {
            lang: lang,
            prefix: 'og: http://ogp.me/ns#'
        },
        title: title,
        meta: [
            // == Basic ==
            {
                hid: 'charset',
                charset: 'utf-8'
            },
            {
                hid: 'og:locale',
                property: 'og:locale',
                content: locale
            },
            {
                hid: 'viewport',
                name: 'viewport',
                content: viewport
            },

            // == Color ==
            {
                hid: 'msapplication-TileColor',
                name: 'msapplication-TileColor',
                content: color
            },
            {
                hid: 'theme-color',
                name: 'theme-color',
                content: color
            },

            // == Title ==
            {
                hid: 'og:title',
                property: 'og:title',
                content: title
            },
            {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: title
            },

            // == Description ==
            {
                hid: 'og:description',
                property: 'og:description',
                content: description
            },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: description
            },
            {
                hid: 'description',
                name: 'description',
                content: description
            },

            // == Keywords ==
            {
                hid: 'og:keywords',
                property: 'og:keywords',
                content: keywords
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: keywords
            },

            // == Image ==
            {
                hid: 'og:image',
                property: 'og:image',
                content: image
            },
            {
                hid: 'twitter:image',
                property: 'twitter:image',
                content: image
            },

            // == Site name / app name ==
            {
                hid: 'application-name',
                name: 'application-name',
                content: siteName
            },
            {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: siteName
            },

            // == Type ==
            {
                hid: 'og:type',
                property: 'og:type',
                content: type
            },

            // == URL ==
            {
                hid: `og:url`,
                property: 'og:url',
                content: url
            },


        ],
        script: script,
        link: link
    };

    // == Else ==
    if (site) {
        head.meta.push(
            {
                name: 'HandheldFriendly',
                content: 'True'
            },
            {
                name: 'format-detection',
                content: 'telephone=no'
            },
            {
                name: 'format-detection',
                content: 'address=no'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            }
        );
    }

    return head;
};

/**
 * Returns head object for pages
 * @param params - custom meta parameters
 * @returns {{htmlAttrs: {prefix: string, lang: *}, meta, link: [], title: *, script: []}}
 */
export const getPageHead = (params = {}) => {
    if (!params.url) params.url = null;
    return getHead(params);
};

/**
 * Returns head object for nuxt.config.js
 * @returns {{htmlAttrs: {prefix: string, lang: *}, meta, link: [], title: *, script: []}}
 */
export const getSiteHead = () => {
    const params = {
        lang: 'ru',
        locale: 'ru_RU',
        viewport: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0',
        color: '#ffffff',
        title: 'My default title',
        description: 'My default description',
        keywords: 'My default keywords',
        siteName: 'My site name',
        type: 'website',
        image: 'My default image',
        url: 'Default url',
        script: [],
        link: [
            {
                hid: 'favicon',
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            },
        ]
    };

    return getHead(params, true);
};



