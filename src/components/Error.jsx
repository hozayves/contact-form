
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError()
    return (
        <div>
            <h1>Ohhh</h1>
            <span className='text-red'>
                {error.message || error.statusText}

            </span>
        </div>
    )
}

export default Error