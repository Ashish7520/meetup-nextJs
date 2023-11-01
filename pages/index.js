import MeetupList from "../components/meetups/MeetupList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "this is first meet up",
    image:
      "https://media.istockphoto.com/id/175259322/photo/front-view-of-a-traditional-american-home-with-wrapped-porch.jpg?s=2048x2048&w=is&k=20&c=WhsCear8oOH3kt8BGoQban6yQj3l9J8Cyz1u234wV-c=",
    address: "ahmedabad",
    descreption: "this is my first meetup",
  },
  {
    id: "m2",
    title: "this is second meet up",
    image:
      "https://media.istockphoto.com/id/175259322/photo/front-view-of-a-traditional-american-home-with-wrapped-porch.jpg?s=2048x2048&w=is&k=20&c=WhsCear8oOH3kt8BGoQban6yQj3l9J8Cyz1u234wV-c=",
    address: "ahmedabad",
    descreption: "this is my second meetup",
  },
];

const homePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_LIST,
    },
    revalidate: 10,
  };
}

export default homePage;
