import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Alice Johnson",
    userName: "@alice_j",
    comment: "Very clean design. Everything works perfectly.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mark Smith",
    userName: "@mark_smith",
    comment: "Impressed by the performance. Loads fast and looks great.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Linda Lee",
    userName: "@lindalee",
    comment: "Simple, effective, and easy to navigate.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Carter",
    userName: "@jcarter_dev",
    comment: "I use this as a reference when building new pages.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sara Ahmed",
    userName: "@sara.codes",
    comment: "The UI feels smooth and modern. Great job!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Tom Nguyen",
    userName: "@tom_uiux",
    comment: "Layout is smart and responsive. Works well on all devices.",
  },
];


export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl font-bold md:text-4xl">
        Discover Why
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="pt-4 pb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid mx-auto space-y-4 md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden md:break-inside-avoid"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
