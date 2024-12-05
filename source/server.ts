import { environment } from './configs/dotenv'
import { instance } from './configs/instance'

instance.listen({ port: environment.PORT }, (error) => {

    if (error) {
        console.error(error)
        process.exit(1)
    }

    console.log(`⚡ Listening at PORT ${environment.PORT}!`)

})