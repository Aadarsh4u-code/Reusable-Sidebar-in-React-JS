import styled from "@emotion/styled";

let textColor = "#444444";
let greenColor = "rgb(0,100,0)";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isSidebarOpen ? "20%" : "7%")};
  background-color: #fff;
  max-width: 17.5rem;
  min-width: 5rem;
  position: relative; // for Toggler
  transition: 0.2s ease-in all;
`;

// ------------->>>>>>>>>>>>>> User Style Start is Here  <<<<<<<<<<<<<<<--------------
export const UserPanel = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.3125rem;
  margin-top: 0.625rem;
  height: 6.56rem;
`;

export const ImageArea = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1.5px solid rgb(152, 155, 152);
  border-radius: 50%;
`;

export const UserImage = styled.div`
  background-image: url(${(props) => props.userImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  align-items: center;
  margin-top: 0.25rem;
  margin-left: 0.28rem;
`;

export const UserInfo = styled.div`
  display: ${(props) => (props.isSidebarOpen ? "inline" : "none")};
  margin-left: 0.0667rem;
  width: auto;
  height: 3.75rem;
  white-space: nowrap;
`;

export const UserName = styled.h4`
  color: ${textColor};
  font-weight: 500;
  letter-spacing: 0.0625rem;
  padding: 0.3125rem;
  margin-top: 1rem;
`;
// ------------->>>>>>>>>>>>>> User Style Ends is Here  <<<<<<<<<<<<<<<--------------

// ------------->>>>>>>>>>>>>> Menu Items Style Starts is Here  <<<<<<<<<<<<<<<--------------
export const MenuItemContainer = styled.div``;
export const ItemContainer = styled.div``;

export const MenuItem = styled.div`
  color: ${(props) => (props.selected ? `${greenColor}` : `${textColor}`)};
  ${(props) =>
    !props.isSidebarOpen &&
    `
      text-align: center;
      ${props.selected && `background-color: rgba(0, 0, 0, 0.3)`}
    `};
  padding: 0.7rem;
  margin: ${(props) => (props.isSidebarOpen ? ".4rem" : "0rem")};
  cursor: pointer;
  white-space: nowrap;
  transition: .2s ease-in all;

  &:hover {
    color: ${greenColor};
    transition: 0.1s ease-in all;
  }

  &:after {
    content: "";
    border: 1px solid
      ${(props) => (props.selected ? `${greenColor}` : "rgba(68, 68, 68, 0.4)")};
    display: ${props => props.isSidebarOpen &&  props.isOpen ? 'none' : 'block'};
    margin: 8px 0 4px;
  }

  ${(props) =>
    !props.selected &&
    `
      &:hover {
        &:after {
          border: 1px solid rgba(46, 139, 87, 0.2);
          transition: .1s ease-in all;
        }
      }
    `}
`;

export const TitleIconDropdown = styled.div`
  position: relative; // Dropdown icon
`;

export const Icon = styled.span`
  font-size: 1.2rem;
  color: ${textColor};
  ${(props) =>
    props.isSidebarOpen &&
    `padding-right : 1rem; transition: .2s ease-in padding-right; `}
`;

export const Title = styled.span`
  white-space: nowrap;
  font-size: 1.2rem;
  display: ${(props) => (props.isSidebarOpen ? "inline" : "none")};
`;

export const DropdownIcon = styled.span`
  position: absolute;
  top: ${props => props.isOpen ? '14px' : '10px'};
  right: 10px;
  border: solid
    ${(props) => (props.selected ? `${greenColor}` : "rgba(68, 68, 68, 0.4)")};
  border-width: 0 2px 2px 0;
  padding: 0.1875rem;
  transform: ${props => props.isOpen ? 'rotate(-135deg)': 'rotate(45deg)'};
  transition: .4s;
`;
// ------------->>>>>>>>>>>>>> Sub Menu Items Style Starts is Here  <<<<<<<<<<<<<<<--------------
export const SubMenuItemsContainer = styled.div`
  font-size: 1rem;
  margin: 0.125rem;
  white-space: nowrap;
  /* display: ${props => props.isSidebarOpen && props.selected && props.isOpen ? 'block' : 'none'}; */

`;
export const SubMenuItem = styled.div`
  color: ${props => props.selected ? `${greenColor}` : '#444444'};
  ${props => props.selected && 'background-color: #eaeef2; font-weight: bold;'}
  transition: .2s;
  margin: 0.25rem;
  padding: 0.25rem;


  &:hover {
    background-color: #eaeef2;
    border-radius: 0.1875rem;
    cursor: pointer;
    color: ${greenColor};
    transition: 0.1s ease-in all;
  }

  ${(props) =>
    !props.isSidebarOpen &&
    `
     text-align: center;
    `};
`;
export const SubIcon = styled.span`
  ${(props) =>
    props.isSidebarOpen &&
    `padding-right : 1rem; transition: .1s ease-in padding-right; `}
`;
export const SubTitle = styled.span`
  display: ${(props) => (props.isSidebarOpen ? "inline" : "none")};
`;
// ------------->>>>>>>>>>>>>> Sub Menu Items Style Ends is Here  <<<<<<<<<<<<<<<--------------

// ------------->>>>>>>>>>>>>> Menu Items Style Ends is Here  <<<<<<<<<<<<<<<--------------

// ------------->>>>>>>>>>>>>> Togglers Starts is Here  <<<<<<<<<<<<<<<--------------
export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 2.5rem;
  cursor: pointer;
  position: relative; // for Horizontal lines

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #444444;
    box-shadow: 0 0.75em 0 0 #444444, 0 1.5em 0 0 #444444;
  }
`;
// ------------->>>>>>>>>>>>>> Togglers Ends is Here  <<<<<<<<<<<<<<<--------------
