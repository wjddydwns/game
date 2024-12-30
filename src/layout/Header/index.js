import { Head_wrapper } from '../../../styles/emotion'
import Profile from './Profile'
import Logo from './Logo'
import Searchbar from './Search'
export default function Head () {
    return (
        <Head_wrapper>
            <Logo/>
            <Searchbar/>
            <Profile/>
        </Head_wrapper>
    )
}