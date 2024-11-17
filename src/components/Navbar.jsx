import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarContainer className="mx-auto p-2 md:p-0 ">
        <NavbarBrand>
          {/* <img src={KeepLogo} alt="keep" /> */}
          <Link to="/" className="text-2xl text-[#ED4C67] font-semibold">
            Career <span className="text-[#009432]">Climb</span>
          </Link>
        </NavbarBrand>
        <NavbarList className="space-x-5 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavbarList>
        <NavbarList>
          <Dropdown placement="bottom-end">
            <DropdownAction asChild>
              <Avatar>
                <AvatarImage src="/images/avatar/avatar-3.png" />
                <AvatarFallback>KR</AvatarFallback>
              </Avatar>
            </DropdownAction>
            <DropdownContent
              align="end"
              className="border border-metal-100 dark:border-metal-800 bg-primary-25"
            >
              <DropdownItem>Samiuzzaman Rahat</DropdownItem>
            </DropdownContent>
            <Button className="text-[#ffffff]">Log Out</Button>
          </Dropdown>
        </NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse className="bg-primary-25 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myprofile">My Profile</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavbarItem active={true}>Log in</NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};

export default NavbarComponent;
