import {useParams} from 'react-router-dom'

export default function AComponent ({match}) {
    const {user} = useParams();
    return(
        <>
            <h1>{user}</h1>
        </>
    );
}