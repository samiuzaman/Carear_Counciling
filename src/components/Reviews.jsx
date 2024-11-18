import {
  Label,
  Button,
  Textarea,
  CardContent,
  CardTitle,
  CardDescription,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "keep-react";

const Reviews = () => {
  return (
    <div className="w-11/12 my-12">
      <h2 className="text-[#333333] text-2xl font-semibold pl-6">
        This is Review Section
      </h2>
      <form className="mx-auto space-y-3 rounded-md p-6 ">
        <fieldset className="space-y-1">
          <Label htmlFor="m1">Write Comment</Label>
          <Textarea id="m1" placeholder="Write your message here" rows={8} />
        </fieldset>
        <Button size="sm" color="secondary" type="submit" className="w-full">
          Comment
        </Button>
      </form>
      <div className="flex flex-col border border-metal-200 dark:border-metal-800 rounded-xl">
        <CardContent className="">
          <div className="flex items-center gap-3 mb-4">
            <Avatar>
              {/* <AvatarImage src="/images/avatar/avatar-1.png" /> */}
              <AvatarFallback>KR</AvatarFallback>
            </Avatar>
            <h2 className="text-xl">
              <span className="text-[#8F9495]">By</span> Rahat Chowdhury
            </h2>
          </div>
          <CardDescription>
            Component design systems can help developers to be more productive
            by providing them with a ready-made set of components to use.
          </CardDescription>
        </CardContent>
      </div>
    </div>
  );
};

export default Reviews;
