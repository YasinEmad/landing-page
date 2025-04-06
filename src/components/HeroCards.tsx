import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="Avatar" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">"Yasin&lt;3&gt;"</CardTitle>
          </div>
        </CardHeader>
        <CardContent>This landing page is awesome!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex items-center justify-center pb-2 mt-8">
          <CardTitle className="text-center">Yasin Emad</CardTitle>
          <CardDescription className="font-normal text-primary">
            Frontend Developer
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 text-center">
          <p>
            I enjoy transforming ideas into functional software that exceeds
            expectations
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <a
            rel="noreferrer noopener"
            href="https://github.com/YasinEmad"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <span className="sr-only">Github icon</span>
            <GitHubLogoIcon className="w-5 h-5" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/yasin-emad-b4326529b/"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <span className="sr-only">Linkedin icon</span>
            <Linkedin size={20} />
          </a>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Free
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>
          <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>
        <hr className="w-4/5 m-auto mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team members", "4 GB Storage", "Up to 6 pages"].map((item) => (
              <span key={item} className="flex items-center">
                <Check className="text-green-500" />
                <h3 className="ml-2">{item}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex items-start justify-start gap-4 md:flex-row">
          <div className="p-1 mt-1 bg-primary/20 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="mt-2 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur natus.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
