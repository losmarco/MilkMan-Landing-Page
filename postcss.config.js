
module.exports ={
    plugins:[
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content:[
                './dist/**/*.html'
            ],
            defaultExtractor: content =>content.match(/[\w-/:]+(?<!:)/g) || [],
        })
    ]
}