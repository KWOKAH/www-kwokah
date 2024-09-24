import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Shirt } from "lucide-react";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";
import iconTechPack from '../assets/icon-techpack.png'
import iconSales from '../assets/icon-sales.png'

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* End-2-ENd Process */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Shirt className="w-10 h-10 text-primary" />

          <div className="flex flex-col">
            <CardTitle>Process Overview</CardTitle>
          </div>
        </CardHeader>

        <CardContent>Get a glimpse of the entire journey from concept to market!</CardContent>
      </Card>

      {/* Techpack */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="w-full">
          <div className="mt-8 flex justify-center items-center pb-2">
          <img
            src={iconTechPack} alt="Figma Icon"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          </div>
          <CardTitle className="font-semibold flex item-center justify-between">
            Tech Packs
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Very Popular
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p>
          Create professional tech packs using our Figma templates. Design detailed fashion flats and bring your fashion ideas to life. No expensive software needed.
          </p>
        </CardContent>

        
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="font-semibold flex">
            Production
          </CardTitle>

          <CardDescription>
            From fiber to factory: Uncover the realities of clothing production. Learn about materials, true sustainability, and communicating with factories.
          </CardDescription>
        </CardHeader>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Raw Materials", "Fabrics", "Sustainability", "Factories"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="flex-shrink-0 bg-primary/20 p-1 rounded-2xl">
            <img
              src={iconSales} alt="Sales Icon"
              className="w-12 h-12"
            />
          </div>
          <div className="flex-grow">
            <CardTitle>Distribution</CardTitle>
            <CardDescription className="text-md mt-2">
            Insights on clothing sales samples and online retail challenges.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
