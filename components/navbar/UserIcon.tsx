import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

export default async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      // <img
      //   src={profileImage}
      //   alt={user?.firstName || "user avatar"}
      //   className="w-6 h-6 rounded-full object-cover"
      // />
      <Image
        src={profileImage}
        alt={user?.firstName || "user avatar"}
        width={24}
        height={24}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
