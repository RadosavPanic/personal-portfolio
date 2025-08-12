import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface WorkExpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  company: string;
  date: string;
  image_url: string;
  description: string;
}

const WorkExpModal = ({
  open,
  onOpenChange,
  title,
  company,
  date,
  image_url,
  description,
}: WorkExpModalProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="text-gray-600 ">
      <DialogHeader>
        <div className="flex items-center gap-4 mb-2">
          <Image src={image_url} alt={title} width={40} height={30} />
          <div className="flex flex-col items-start justify-start">
            <DialogTitle className="text-lg">{title}</DialogTitle>
            <div className="text-sm text-blue-500">{company}</div>
            <div className="text-xs mt-1">{date}</div>
          </div>
        </div>
        <DialogDescription>
          <div className="ml-5 text-sm text-start">{description}</div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default WorkExpModal;
