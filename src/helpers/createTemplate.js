
export default (html, helmet, scripts, preloadedState, styleTags) => {
    return(
        `
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            ${helmet.title.toString()}

            ${styleTags}
        </head>
        <body>
            <div id="root">${html}</div>

            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                    /</g,
                    '\\u003c'
                )}
            </script>
            ${scripts}
        </body>
        </html>
    `
    )
}