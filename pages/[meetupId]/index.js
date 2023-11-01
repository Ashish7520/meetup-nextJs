import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://media.istockphoto.com/id/175259322/photo/front-view-of-a-traditional-american-home-with-wrapped-porch.jpg?s=2048x2048&w=is&k=20&c=WhsCear8oOH3kt8BGoQban6yQj3l9J8Cyz1u234wV-c="
      title="this is first meet up"
      address="ahmedabad"
      descreption="this is my first meet up"
    />
  );
};

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: "m1" } },
      { params: { meetupId: "m2" } },
      { params: { meetupId: "m3" } },
    ],
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetups: {
        image:
          "https://media.istockphoto.com/id/175259322/photo/front-view-of-a-traditional-american-home-with-wrapped-porch.jpg?s=2048x2048&w=is&k=20&c=WhsCear8oOH3kt8BGoQban6yQj3l9J8Cyz1u234wV-c=",
        id: meetupId,
        title: "this is first meet up",
        address: "ahmedabad",
        descreption: "this is my first meet up",
      },
    },
  };
}

export default MeetupDetails;
