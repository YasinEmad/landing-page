import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: string[];
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    socialNetworks: ["Linkedin", "Facebook", "Instagram"],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: ["Linkedin", "Facebook", "Instagram"],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: ["Linkedin", "Instagram"],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: ["Linkedin", "Facebook"],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
        {teamList.map(({ imageUrl, name, position, socialNetworks }) => (
          <Card
            key={name}
            className="relative flex flex-col items-center justify-center mt-8 bg-muted/50"
          >
            <CardHeader className="flex items-center justify-center pb-2 mt-8">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute object-cover w-24 h-24 rounded-full -top-12 aspect-square"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-2 text-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </CardContent>

            <CardFooter>
              <div className="flex gap-2">
                {socialNetworks.map((icon) => (
                  <div
                    key={icon}
                    className="p-2 border rounded-full border-border"
                  >
                    {socialIcon(icon)}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
