import React from 'react'; 

export const HTMLTemplate = html => {
    return `
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server side rendered React</title>
        </head>
        <body>
            <div id="root">${html}</div>
        </body>
        </html>
    `
}