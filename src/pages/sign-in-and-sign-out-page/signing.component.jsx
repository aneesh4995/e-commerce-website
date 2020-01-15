import React from 'react';

import './signing.styles.scss';

import SignIn from '../../components /sign-in/sign-in.component'
import SignUp from'../../components /sign-up/sign-up.component';

const SignInAndSignOutPage = () => (
    <div className='signing'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignOutPage;