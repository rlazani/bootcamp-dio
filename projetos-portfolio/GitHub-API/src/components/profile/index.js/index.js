import React from 'react';
import * as S from './styled'

const Profile = () => {
    return <S.Wrapper>
        <img
            src="https://avatars.githubusercontent.com/u/66982966?v=4"
            alt="Avatar of user"
         />
         <h1>Rodrigo Lazani</h1>
         <h3>Username: </h3>
         <span>rlazani</span>   
         <div>
            <div>
                <h4>Followers</h4>
                <span>5</span>
            </div>
            <div>
                <h4>Starred</h4>
                <span>5</span>
            </div>
         </div>
    </S.Wrapper>; 
    
}

export default Profile;


