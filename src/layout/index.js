import BodyContent from './Body'
import Header from './Header'
import SideMenu from './SideMenu'
import {Container , ContentWrapper}from '../../styles/emotion'
export default function Layout() {
    return (
        <Container>
            <Header/>
            <ContentWrapper>
                <SideMenu/>
                <BodyContent/>
            </ContentWrapper>
        </Container>
    )
}