import {
  Label,
  Button,
  Textarea,
  CardContent,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "keep-react";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { ReviewDataContext } from "../Pages/ServiceDetails";
import { AuthContext } from "../Provider/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useContext(ReviewDataContext);
  const currentReview = useLoaderData();
  useEffect(() => {
    setReviews([...reviews, currentReview]);
  }, []);
  const handleCommentBox = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const newReview = {
      name: user.displayName,
      image: user.photoURL,
      review_text: comment,
    };
    setReviews([...reviews, newReview]);
  };
  
  return (
    <div className="w-11/12 my-12">
      <h2 className="text-[#333333] text-2xl font-semibold pl-6">
        This is Review Section
      </h2>
      <form
        onSubmit={handleCommentBox}
        className="mx-auto space-y-3 rounded-md p-6 "
      >
        <fieldset className="space-y-1">
          <Label htmlFor="m1">Write Comment</Label>
          <Textarea
            name="comment"
            placeholder="Write your message here"
            rows={8}
          />
        </fieldset>
        <Button size="sm" color="secondary" type="submit" className="w-full">
          Comment
        </Button>
      </form>
      <div className="space-y-5">
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="flex flex-col border border-metal-200 dark:border-metal-800 rounded-xl mx-[2.5%]"
          >
            <CardContent>
              <div className="flex items-center gap-3 mb-4 ">
                <Avatar>
                  <AvatarImage src={review?.image} />
                  <AvatarFallback>KR</AvatarFallback>
                </Avatar>
                <h2 className="text-xl text-black font-medium">
                  <span className="text-[#8F9495]">By</span> {review?.name}
                </h2>
              </div>
              <p>{review?.review_text}</p>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
