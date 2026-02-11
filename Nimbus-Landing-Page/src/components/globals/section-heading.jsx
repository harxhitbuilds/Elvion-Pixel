import { cn } from "@/lib/utils";

const SectionHeading = ({ heading, className }) => {
  return (
    <h1 className={cn("text-2xl font-robert-medium font-bold", className)}>
      {heading}
    </h1>
  );
};
export default SectionHeading;
