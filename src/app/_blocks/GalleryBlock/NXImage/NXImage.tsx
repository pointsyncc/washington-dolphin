import { cn } from "@/utils/classMerge";
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NXImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}         className="rounded-sm">
      <Image

        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        className={cn('rounded-sm',className)}

        {...{ alt, title, sizes,  onClick }}
      />
    </div>
  );
}