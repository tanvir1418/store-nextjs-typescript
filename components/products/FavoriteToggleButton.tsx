import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

export default function FavoriteToggleButton({
  productId,
}: {
  productId: string;
}) {
  console.log("productId: ", productId);
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
