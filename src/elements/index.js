import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { lighten } from 'polished';

export const palette = {
  primDark:    '#303F9F',
  prim:        '#3F51B5',
  primLight:   '#C5CAE9',
  primText:    '#FFFFFF',
  accent:      '#00C8B5',
  text:        '#212121',
  secText:     '#757575',
  divider:     '#BDBDBD',
}

export const Aside = styled.aside`
  position: fixed;
  width: 100px;
  height: 100%;
  padding: 20px 0 0;
  background-color: ${palette.prim};
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-color: ${palette.text};
  background-image: url(${({ src })=> src });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

export const IconTab = styled(NavLink)`
  width: 100%;
  height: 90px;
  background-image: url(${({ icon })=> icon });
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  ${'' /* border-left: 5px solid ${({ selected }) => selected ? palette.primDark : 'transparent'};
  border-right: 5px solid ${({ selected }) => selected ? palette.primLight : 'transparent'}; */}
  cursor: pointer;
  opacity: ${({ selected }) => selected ? 1 : 0.7};
  &:hover {
    background-color: ${palette.primLight};
    ${'' /* border-left: 5px solid ${palette.primDark};
    border-right: 5px solid ${palette.primLight}; */}
    opacity: 1;
  }
`;

export const SideNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0 0;
`;

export const Main = styled.main`
  height: 100vh;
  margin-left: 100px;
`;

export const InputText = styled.input`
  display: ${({ path }) => path === '/login' ? 'none' : 'block'};
  width: 80%;
  padding: 10px;
  margin: 0 0 20px;
  border: none;
  border-bottom: 2px solid ${palette.divider};
  color: ${palette.secText};
  font-size: 18px;
  font-weight: lighter;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${palette.accent};
  }
  &::-webkit-input-placeholder {
    color: ${palette.divider};
  }
  &::-moz-placeholder {
    color: ${palette.divider};
  }
  &:-ms-input-placeholder {
    color: ${palette.divider};
  }
  &:-moz-placeholder {
    color: ${palette.divider};
  }
`;

export const InputSubmit = styled.input.attrs({
  type: 'submit',
  value: ({ path }) => path === '/login' ? 'Log In' : 'Sign Up',
})`
  display: block;
  width: 170px;
  background-color: ${palette.accent};
  border: none;
  border-radius: 2px;
  color: #FFF;
  cursor: pointer;
  font-size: 20px;
  font-weight: lighter;
  box-shadow: box-shadow: 0 14px 45px rgba(0, 0, 0, 0.2), 0 10px 18px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${lighten(0.05, palette.accent)};
  }
`;

export const LoginTitle = styled.h1`
  width: 85%;
  margin: 0 auto;
  color: ${palette.text};
  font-size: 30px;
  font-weight: normal;
`;

const bannerAnim = keyframes`
  to { transform: scale(10); }
`

export const Banner = styled.section`
  position: relative;
  left: -20%;
  background-color: ${palette.prim};
  border-radius: 50%;
  width: 100%;
  transform: scale(1.8);
  animation: ${({ anim }) => anim ? `${bannerAnim} 0.5s cubic-bezier(.75,-0.32,.83,.67)` : null};
`;

export const AddInput = styled.input`
  margin: 10px 0;
  width: 90%;
  padding: 5px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon });
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  color: #FFF;
  font-size: 20px;
  font-weight: lighter;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &::-moz-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:-moz-placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #FFF;
  }
`;

export const InputIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  background-image: url(${({ icon }) => icon });
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
`;

export const AddSubmit = styled.input.attrs({
  value: ({ value }) => value,
})`
  display: block;
  padding: 5px 20px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-size: 20px;
  font-weight: lighter;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #FFF;
    color: #FFF;
  }
`;

export const NextButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon });
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  opacity: 0.7;
  &:hover {
    opacity: 0.3;
  }
`;

export const Day = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.2%;
  height: 40px;
  background-color: ${({ active }) => active ? '#F65631' : 'transparent' };
  border: none;
  border-radius: 50%;
`
