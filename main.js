/* in JSON devDependencies are intended to be used only from the developer, whereas dependencies are intended to be used from the running application.

Order list of all commands run into the terminal

npm install
npm init
npm install --save-dev jest
npm install jsdom




*/

const {crawlPage} = require('./crawl.js')

function main(){
    if (process.argv.length < 3) {
        console.log('no website provided')
        process.exit(1)
    }

    if (process.argv.length > 3) {
        console.log('too many command line args')
        process.exit(1)
    }

    const baseUrl = process.argv[2]
    console.log(`starting crawl of ${baseUrl}`)
    crawlPage(baseUrl)
}

main()