/* Import of Icons Start */
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
/* Import of Icons Ends */

export const userImage = 'images/user-pic.jpg';
export const userName = 'Aadarsh Kushwaha';

export const menuItems = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: < MdIcons.MdDashboard />,
  },

  {
    title: 'Students',
    to: '/student',
    icon: <MdIcons.MdPeople/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenuItems: [
      {
        title: 'Add Student',
        to: '/addstudent', 
        icon: <RiIcons.RiAddFill/>
      },
      {
        title: 'View Student',
        to: '/viewstudent',
        icon: <BsIcons.BsEyeFill/>
      },
      {
        title: 'Edit Student',
        to: '/editstudent',
        icon: <AiIcons.AiFillEdit/>
      }
    ]
  },

  {
    title: 'Faculty',
    to: '/faculty',
    icon: <GiIcons.GiTeacher />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenuItems: [
      {
        title: 'Add Faculty',
        to: '/addfaculty',
        icon: <RiIcons.RiAddFill/>
      },
      {
        title: 'View Faculty',
        to: '/viewfaculty',
        icon: <BsIcons.BsEyeFill/>
      },
      {
        title: 'Edit Faculty',
        to: '/editfaculty',
        icon: <AiIcons.AiFillEdit/>
      }
    ]
  },
  {
    title: 'Staff',
    to: '/staff',
    icon: <FaIcons.FaPeopleCarry />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenuItems: [
      {
        title: 'Add Staff',
        to: '/addstaff',
        icon: <RiIcons.RiAddFill/>
      },
      {
        title: 'View Staff',
        to: '/viewstaff',
        icon: <BsIcons.BsEyeFill/>
      },
      {
        title: 'Edit Staff',
        to: '/editstaff',
        icon: <AiIcons.AiFillEdit/>
      }
    ]
  },

  {
    title: 'Fees',
    to: '/fees',
    icon: <BiIcons.BiRupee />,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
  },

  {
    title: 'Salary',
    to: '/salary',
    icon: <GiIcons.GiTakeMyMoney />
  },

  {
    title: 'Library',
    to: '/library',
    icon: <MdIcons.MdLocalLibrary />
  },

  {
    title: 'Event Management',
    to: '/eventmanagement',
    icon: <BiIcons.BiCalendarEvent />
  },
  {
    title: 'About Us',
    to: '/aboutus',
    icon: <FcIcons.FcAbout />
  }
  ];