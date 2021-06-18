import React from 'react'
import Account from './Account';
import Menu from '../Home/Menu'
const AccountPage = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <Account isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
        </>
    )
}

export default AccountPage
