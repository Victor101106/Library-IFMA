import { instance } from './configs/instance'

const PORT = 3030

instance.listen({ port: PORT }, (error) => {

    if (error) {
        console.error(error)
        process.exit(1)
    }

    console.log(`⚡ Listening at PORT ${PORT}!`)

})