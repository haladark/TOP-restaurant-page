This project is experimental part of the webpack retaurant page project of TOP.

IMPORTANT NOTES:

I configured webpack.config.js to predeploy and deploy to github gh-pages .. refer to package.js

Also there was a problem in loading images from any of src or dist folders after deploying to gh-pages and it was fixed after installing npm i -D html-loader and folder-loader. I guess because I use innerHTML in js to link to images, because the backgroun image was fine since it was linked directly and no innerHTML.

bottomline,, need to deeply understand webpack , configuration , assest managments and organizating for larger projects.
