import { Link, Outlet } from 'react-router-dom';

import { Container, Nav } from './style';

const DashBoard = () => {
    return (
        <Container>
            <Nav>
                <Link to={'/overview'}>Overview</Link>
                <Link to={'/settings'}>Settings</Link>
                <Link to={'/reports'}>Reports</Link>
            </Nav>
            <div>
                <Outlet />
            </div>
        </Container>
    )
}

export default DashBoard