import { AiOutlineHome, AiOutlineStar, AiOutlineMessage } from "react-icons/ai";
import { PiTimer, PiAddressBookLight } from "react-icons/pi";
import { LayoutData } from "../../component/type/type";

export const layoutData: LayoutData[] = [
  {
    id: 1,
    href: "/dashboard/summaryActives",
    icon: <AiOutlineHome />,
    text: "summaryActives",
  },
  {
    id: 2,
    href: "/dashboard/discount",
    icon: <AiOutlineStar />,
    text: "discount",
  },
  {
    id: 3,
    href: "/dashboard/comments",
    icon: <AiOutlineMessage />,
    text: "comments",
  },
  {
    id: 4,
    href: "/dashboard/recentVisit",
    icon: <PiTimer />,
    text: "recent visit",
  },
  {
    id: 5,
    href: "/dashboard/address",
    icon: <PiAddressBookLight />,
    text: "address",
  },
];
