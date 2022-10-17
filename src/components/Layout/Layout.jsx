import React, { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Spiner } from 'components/Spiner/Spiner';
import { FaGithubSquare } from 'react-icons/fa';
import { Container, Header, Footer, Text, Link } from './Layout.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectLogin } from 'redux/toolkit/authorization/selector-auth';

const Layout = () => {
  const isLogin = useSelector(selectLogin);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLogin && <UserMenu />}
      </Header>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
      <Footer>
        <Text>
          Created by Maksym Shostak 2022{' '}
          <Link
            href="https://github.com/MaksShostak/goit-react-hw-07-phonebook"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            <FaGithubSquare />
          </Link>
        </Text>
      </Footer>
    </Container>
  );
};

export default Layout;
