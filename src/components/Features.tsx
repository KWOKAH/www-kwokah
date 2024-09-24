import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Do the Right Thing",
    description:
      "Providing a safe work environment with appropriate working hours and an honest, living wage are obviously the absolute bare minima ... sadly many fast-fashion factories already stumble at this, seemingly, low hurdle. To plug any loopholes, avoid any subcontracting.",
    image: image4,
  },
  {
    title: "Do it Well",
    description:
      "Sustainability's unsung hero is for everyone to actually buy less stuff! To consume less we need better quality products that last longer. Production partners must be  equipped with modern-tech and lean processes to efficiently produce top-notch products that are built to last.",
    image: image3,
  },
  {
    title: "Do things Right",
    description:
      "The textile industry has a very poor environmental tracl record. Often with excessive water use, toxic chemicals, and CO2 emissions. We're committed to reducing our environmental footprint, minimize water use, manage waste water, avoid or handle chemicals responsibly, and use renewable energy.",
    image: image,
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Values
        </span>
      </h2>

      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
       We're very picky when it comes to deciding who makes our products, 'cause how they are made must match our standards and values!
      </p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
