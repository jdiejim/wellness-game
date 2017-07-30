import styled, { keyframes } from 'styled-components';
// import cancel from '../assets/cancel.svg';
import { NavLink, Link } from 'react-router-dom';
import { lighten } from 'polished';

export const palette = {
  primDark:    '#303F9F',
  prim:        '#3F51B5',
  primLight:   '#C5CAE9',
  primText:    '#FFFFFF',
  accent:      '#54b3a7',
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
  box-shadow: 0 14px 45px rgba(0, 0, 0, 0.2), 0 10px 18px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size + 'px' };
  height: ${({ size }) => size + 'px' };
  margin: 0 auto;
  background-color: ${({ color }) => color };
  background-image: url(${({ src })=> src });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  color: #FFF;
  font-size: ${({ fontSize }) => fontSize + 'em' };
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
  box-shadow: 0 14px 45px rgba(0, 0, 0, 0.1), 0 10px 18px rgba(0, 0, 0, 0.1);
  color: #FFF;
  cursor: pointer;
  font-size: 20px;
  font-weight: lighter;
  letter-spacing: 1px;
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
  border: 1px solid ${({ color }) => !color ? 'rgba(255, 255, 255, 0.5)' : color };
  border-radius: 2px;
  color: ${({ color }) => !color ? 'rgba(255, 255, 255, 0.5)' : color };
  cursor: pointer;
  font-size: 20px;
  font-weight: lighter;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid ${({ color }) => !color ? '#FFF' : color };
    color: ${({ color }) => !color ? '#FFF' : lighten(0.2, color) };
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
  cursor: pointer;
  transform: scale(${({ scale }) => !scale ? 1 : scale });
  opacity: 0.7;
  &:hover {
    opacity: 0.3;
  }
`;

export const Day = styled.input.attrs({
  type: 'submit',
  value: ({ day }) => day
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ active }) => {
    switch (active) {
      case 'active':
        return '#FD6669';
      case 'exists':
        return 'rgba(84, 179, 167, 0.7)';
      default:
        return 'transparent';
    }
  }
};
  background-image: ${({ cancel }) => !cancel ? 'none' : `url(${cancel})` };
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;
  border-radius: 50%;
  color: ${({ old }) => old ? '#DBDBDB' : palette.text };
  cursor: ${({ active }) => !active ? 'default' : 'pointer' };
  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 170px;
  border: none;
  color: ${palette.accent};
  cursor: pointer;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${palette.primDark};
  }
`;

export const DashDay = styled.div`
  flex: ${({ main }) => main ? 1.5 : 1 };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
  opacity: ${({ main }) => main ? 1 : 0.8 };
  transition: all 1s;
  h3 {
    font-size: ${({ main }) => main ? '30px' : '16px' };
    font-weight: ${({ main }) => main ? 'normal' : 'lighter' };
  }
  p {
    font-size: ${({ main }) => main ? '12px' : '10px' };
    font-weight: ${({ main }) => main ? 'normal' : 'lighter' };
  }
`;
