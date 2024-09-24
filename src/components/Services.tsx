import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import iconNature from '../assets/icon-nature.png'
import iconFair from '../assets/icon-fair.png'
import iconBetter from '../assets/icon-better.png'
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Respect Natural Resources",
    description:
      "Re-use, Recycle, avoid polution, minimize water use, focus on energy efficiency, and reduce waste.",
    icon: <div className="flex-shrink-0 bg-primary/20 p-1 rounded-2xl">
            <img
              src={iconNature} alt="Respect Nature Icon"
              className="w-12 h-12"
            />
          </div>,
  },
  {
    title: "Treat Everyone Fair & Ethically",
    description:
      "It's really important for us that everyone we work with treats their staff fairly and ethically.",
    icon: <div className="flex-shrink-0 bg-primary/20 p-1 rounded-2xl">
            <img
              src={iconFair} alt="Fair & Ethical Icon"
              className="w-12 h-12"
            />
          </div>,
  },
  {
    title: "Advocate Buy Better & Buy Less",
    description:
      "We honestly want everyone to actually buy less shite so we can use what we buy longer.",
    icon: <div className="flex-shrink-0 bg-primary/20 p-1 rounded-2xl">
            <img
              src={iconBetter} alt="Less & Better Icon"
              className="w-12 h-12"
            />
          </div>,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            What
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}Drives{" "}
            </span>
            Us
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            The whole "sustainability" spiel is more often than not just a marketing ploy. We reckon, 'nuff of that! We believe in radical transparancy starting from the materials we use all the way to how and where it's made!
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  
                    {icon}
                  
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
